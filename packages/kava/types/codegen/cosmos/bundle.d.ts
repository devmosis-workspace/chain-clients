import * as _69 from "./app/runtime/v1alpha1/module";
import * as _70 from "./app/v1alpha1/config";
import * as _71 from "./app/v1alpha1/module";
import * as _72 from "./app/v1alpha1/query";
import * as _73 from "./auth/module/v1/module";
import * as _74 from "./auth/v1beta1/auth";
import * as _75 from "./auth/v1beta1/genesis";
import * as _76 from "./auth/v1beta1/query";
import * as _77 from "./auth/v1beta1/tx";
import * as _78 from "./authz/module/v1/module";
import * as _79 from "./authz/v1beta1/authz";
import * as _80 from "./authz/v1beta1/event";
import * as _81 from "./authz/v1beta1/genesis";
import * as _82 from "./authz/v1beta1/query";
import * as _83 from "./authz/v1beta1/tx";
import * as _84 from "./autocli/v1/options";
import * as _85 from "./autocli/v1/query";
import * as _86 from "./bank/module/v1/module";
import * as _87 from "./bank/v1beta1/authz";
import * as _88 from "./bank/v1beta1/bank";
import * as _89 from "./bank/v1beta1/genesis";
import * as _90 from "./bank/v1beta1/query";
import * as _91 from "./bank/v1beta1/tx";
import * as _92 from "./base/abci/v1beta1/abci";
import * as _93 from "./base/kv/v1beta1/kv";
import * as _94 from "./base/node/v1beta1/query";
import * as _95 from "./base/query/v1beta1/pagination";
import * as _96 from "./base/reflection/v1beta1/reflection";
import * as _97 from "./base/reflection/v2alpha1/reflection";
import * as _98 from "./base/snapshots/v1beta1/snapshot";
import * as _99 from "./base/store/v1beta1/commit_info";
import * as _100 from "./base/store/v1beta1/listening";
import * as _101 from "./base/tendermint/v1beta1/query";
import * as _102 from "./base/tendermint/v1beta1/types";
import * as _103 from "./base/v1beta1/coin";
import * as _104 from "./capability/module/v1/module";
import * as _105 from "./capability/v1beta1/capability";
import * as _106 from "./capability/v1beta1/genesis";
import * as _107 from "./consensus/module/v1/module";
import * as _108 from "./consensus/v1/query";
import * as _109 from "./consensus/v1/tx";
import * as _110 from "./crisis/module/v1/module";
import * as _111 from "./crisis/v1beta1/genesis";
import * as _112 from "./crisis/v1beta1/tx";
import * as _113 from "./crypto/ed25519/keys";
import * as _114 from "./crypto/hd/v1/hd";
import * as _115 from "./crypto/keyring/v1/record";
import * as _116 from "./crypto/multisig/keys";
import * as _117 from "./crypto/secp256k1/keys";
import * as _118 from "./crypto/secp256r1/keys";
import * as _119 from "./distribution/module/v1/module";
import * as _120 from "./distribution/v1beta1/distribution";
import * as _121 from "./distribution/v1beta1/genesis";
import * as _122 from "./distribution/v1beta1/query";
import * as _123 from "./distribution/v1beta1/tx";
import * as _124 from "./evidence/module/v1/module";
import * as _125 from "./evidence/v1beta1/evidence";
import * as _126 from "./evidence/v1beta1/genesis";
import * as _127 from "./evidence/v1beta1/query";
import * as _128 from "./evidence/v1beta1/tx";
import * as _129 from "./feegrant/module/v1/module";
import * as _130 from "./feegrant/v1beta1/feegrant";
import * as _131 from "./feegrant/v1beta1/genesis";
import * as _132 from "./feegrant/v1beta1/query";
import * as _133 from "./feegrant/v1beta1/tx";
import * as _134 from "./genutil/module/v1/module";
import * as _135 from "./genutil/v1beta1/genesis";
import * as _136 from "./gov/module/v1/module";
import * as _137 from "./gov/v1/genesis";
import * as _138 from "./gov/v1/gov";
import * as _139 from "./gov/v1/query";
import * as _140 from "./gov/v1/tx";
import * as _141 from "./gov/v1beta1/genesis";
import * as _142 from "./gov/v1beta1/gov";
import * as _143 from "./gov/v1beta1/query";
import * as _144 from "./gov/v1beta1/tx";
import * as _145 from "./group/module/v1/module";
import * as _146 from "./group/v1/events";
import * as _147 from "./group/v1/genesis";
import * as _148 from "./group/v1/query";
import * as _149 from "./group/v1/tx";
import * as _150 from "./group/v1/types";
import * as _151 from "./mint/module/v1/module";
import * as _152 from "./mint/v1beta1/genesis";
import * as _153 from "./mint/v1beta1/mint";
import * as _154 from "./mint/v1beta1/query";
import * as _155 from "./mint/v1beta1/tx";
import * as _157 from "./nft/module/v1/module";
import * as _158 from "./nft/v1beta1/event";
import * as _159 from "./nft/v1beta1/genesis";
import * as _160 from "./nft/v1beta1/nft";
import * as _161 from "./nft/v1beta1/query";
import * as _162 from "./nft/v1beta1/tx";
import * as _163 from "./orm/module/v1alpha1/module";
import * as _164 from "./orm/query/v1alpha1/query";
import * as _165 from "./orm/v1/orm";
import * as _166 from "./orm/v1alpha1/schema";
import * as _167 from "./params/module/v1/module";
import * as _168 from "./params/v1beta1/params";
import * as _169 from "./params/v1beta1/query";
import * as _171 from "./reflection/v1/reflection";
import * as _172 from "./slashing/module/v1/module";
import * as _173 from "./slashing/v1beta1/genesis";
import * as _174 from "./slashing/v1beta1/query";
import * as _175 from "./slashing/v1beta1/slashing";
import * as _176 from "./slashing/v1beta1/tx";
import * as _177 from "./staking/module/v1/module";
import * as _178 from "./staking/v1beta1/authz";
import * as _179 from "./staking/v1beta1/genesis";
import * as _180 from "./staking/v1beta1/query";
import * as _181 from "./staking/v1beta1/staking";
import * as _182 from "./staking/v1beta1/tx";
import * as _183 from "./tx/config/v1/config";
import * as _184 from "./tx/signing/v1beta1/signing";
import * as _185 from "./tx/v1beta1/service";
import * as _186 from "./tx/v1beta1/tx";
import * as _187 from "./upgrade/module/v1/module";
import * as _188 from "./upgrade/v1beta1/query";
import * as _189 from "./upgrade/v1beta1/tx";
import * as _190 from "./upgrade/v1beta1/upgrade";
import * as _191 from "./vesting/module/v1/module";
import * as _192 from "./vesting/v1beta1/tx";
import * as _193 from "./vesting/v1beta1/vesting";
import * as _324 from "./auth/v1beta1/query.lcd";
import * as _325 from "./authz/v1beta1/query.lcd";
import * as _326 from "./bank/v1beta1/query.lcd";
import * as _327 from "./base/node/v1beta1/query.lcd";
import * as _328 from "./base/tendermint/v1beta1/query.lcd";
import * as _329 from "./consensus/v1/query.lcd";
import * as _330 from "./distribution/v1beta1/query.lcd";
import * as _331 from "./evidence/v1beta1/query.lcd";
import * as _332 from "./feegrant/v1beta1/query.lcd";
import * as _333 from "./gov/v1/query.lcd";
import * as _334 from "./gov/v1beta1/query.lcd";
import * as _335 from "./group/v1/query.lcd";
import * as _336 from "./mint/v1beta1/query.lcd";
import * as _337 from "./nft/v1beta1/query.lcd";
import * as _338 from "./params/v1beta1/query.lcd";
import * as _339 from "./slashing/v1beta1/query.lcd";
import * as _340 from "./staking/v1beta1/query.lcd";
import * as _341 from "./tx/v1beta1/service.lcd";
import * as _342 from "./upgrade/v1beta1/query.lcd";
import * as _343 from "./app/v1alpha1/query.rpc.Query";
import * as _344 from "./auth/v1beta1/query.rpc.Query";
import * as _345 from "./authz/v1beta1/query.rpc.Query";
import * as _346 from "./autocli/v1/query.rpc.Query";
import * as _347 from "./bank/v1beta1/query.rpc.Query";
import * as _348 from "./base/node/v1beta1/query.rpc.Service";
import * as _349 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _350 from "./consensus/v1/query.rpc.Query";
import * as _351 from "./distribution/v1beta1/query.rpc.Query";
import * as _352 from "./evidence/v1beta1/query.rpc.Query";
import * as _353 from "./feegrant/v1beta1/query.rpc.Query";
import * as _354 from "./gov/v1/query.rpc.Query";
import * as _355 from "./gov/v1beta1/query.rpc.Query";
import * as _356 from "./group/v1/query.rpc.Query";
import * as _357 from "./mint/v1beta1/query.rpc.Query";
import * as _358 from "./nft/v1beta1/query.rpc.Query";
import * as _359 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _360 from "./params/v1beta1/query.rpc.Query";
import * as _361 from "./slashing/v1beta1/query.rpc.Query";
import * as _362 from "./staking/v1beta1/query.rpc.Query";
import * as _363 from "./tx/v1beta1/service.rpc.Service";
import * as _364 from "./upgrade/v1beta1/query.rpc.Query";
import * as _365 from "./auth/v1beta1/tx.rpc.msg";
import * as _366 from "./authz/v1beta1/tx.rpc.msg";
import * as _367 from "./bank/v1beta1/tx.rpc.msg";
import * as _368 from "./consensus/v1/tx.rpc.msg";
import * as _369 from "./crisis/v1beta1/tx.rpc.msg";
import * as _370 from "./distribution/v1beta1/tx.rpc.msg";
import * as _371 from "./evidence/v1beta1/tx.rpc.msg";
import * as _372 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _373 from "./gov/v1/tx.rpc.msg";
import * as _374 from "./gov/v1beta1/tx.rpc.msg";
import * as _375 from "./group/v1/tx.rpc.msg";
import * as _376 from "./mint/v1beta1/tx.rpc.msg";
import * as _377 from "./nft/v1beta1/tx.rpc.msg";
import * as _378 from "./slashing/v1beta1/tx.rpc.msg";
import * as _379 from "./staking/v1beta1/tx.rpc.msg";
import * as _380 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _381 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
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
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _69.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.StoreKeyConfig;
                    fromPartial(object: Partial<_69.StoreKeyConfig>): _69.StoreKeyConfig;
                    fromAmino(object: _69.StoreKeyConfigAmino): _69.StoreKeyConfig;
                    toAmino(message: _69.StoreKeyConfig): _69.StoreKeyConfigAmino;
                    fromAminoMsg(object: _69.StoreKeyConfigAminoMsg): _69.StoreKeyConfig;
                    toAminoMsg(message: _69.StoreKeyConfig): _69.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _69.StoreKeyConfigProtoMsg): _69.StoreKeyConfig;
                    toProto(message: _69.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _69.StoreKeyConfig): _69.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _343.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _72.QueryConfigRequest): Promise<_72.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _72.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.QueryConfigRequest;
                fromPartial(_: Partial<_72.QueryConfigRequest>): _72.QueryConfigRequest;
                fromAmino(_: _72.QueryConfigRequestAmino): _72.QueryConfigRequest;
                toAmino(_: _72.QueryConfigRequest): _72.QueryConfigRequestAmino;
                fromAminoMsg(object: _72.QueryConfigRequestAminoMsg): _72.QueryConfigRequest;
                toAminoMsg(message: _72.QueryConfigRequest): _72.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _72.QueryConfigRequestProtoMsg): _72.QueryConfigRequest;
                toProto(message: _72.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _72.QueryConfigRequest): _72.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _72.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryConfigResponse;
                fromPartial(object: Partial<_72.QueryConfigResponse>): _72.QueryConfigResponse;
                fromAmino(object: _72.QueryConfigResponseAmino): _72.QueryConfigResponse;
                toAmino(message: _72.QueryConfigResponse): _72.QueryConfigResponseAmino;
                fromAminoMsg(object: _72.QueryConfigResponseAminoMsg): _72.QueryConfigResponse;
                toAminoMsg(message: _72.QueryConfigResponse): _72.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _72.QueryConfigResponseProtoMsg): _72.QueryConfigResponse;
                toProto(message: _72.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _72.QueryConfigResponse): _72.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _71.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.ModuleDescriptor;
                fromPartial(object: Partial<_71.ModuleDescriptor>): _71.ModuleDescriptor;
                fromAmino(object: _71.ModuleDescriptorAmino): _71.ModuleDescriptor;
                toAmino(message: _71.ModuleDescriptor): _71.ModuleDescriptorAmino;
                fromAminoMsg(object: _71.ModuleDescriptorAminoMsg): _71.ModuleDescriptor;
                toAminoMsg(message: _71.ModuleDescriptor): _71.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _71.ModuleDescriptorProtoMsg): _71.ModuleDescriptor;
                toProto(message: _71.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _71.ModuleDescriptor): _71.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _71.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.PackageReference;
                fromPartial(object: Partial<_71.PackageReference>): _71.PackageReference;
                fromAmino(object: _71.PackageReferenceAmino): _71.PackageReference;
                toAmino(message: _71.PackageReference): _71.PackageReferenceAmino;
                fromAminoMsg(object: _71.PackageReferenceAminoMsg): _71.PackageReference;
                toAminoMsg(message: _71.PackageReference): _71.PackageReferenceAminoMsg;
                fromProtoMsg(message: _71.PackageReferenceProtoMsg): _71.PackageReference;
                toProto(message: _71.PackageReference): Uint8Array;
                toProtoMsg(message: _71.PackageReference): _71.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _71.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MigrateFromInfo;
                fromPartial(object: Partial<_71.MigrateFromInfo>): _71.MigrateFromInfo;
                fromAmino(object: _71.MigrateFromInfoAmino): _71.MigrateFromInfo;
                toAmino(message: _71.MigrateFromInfo): _71.MigrateFromInfoAmino;
                fromAminoMsg(object: _71.MigrateFromInfoAminoMsg): _71.MigrateFromInfo;
                toAminoMsg(message: _71.MigrateFromInfo): _71.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _71.MigrateFromInfoProtoMsg): _71.MigrateFromInfo;
                toProto(message: _71.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _71.MigrateFromInfo): _71.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _70.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Config;
                fromPartial(object: Partial<_70.Config>): _70.Config;
                fromAmino(object: _70.ConfigAmino): _70.Config;
                toAmino(message: _70.Config): _70.ConfigAmino;
                fromAminoMsg(object: _70.ConfigAminoMsg): _70.Config;
                toAminoMsg(message: _70.Config): _70.ConfigAminoMsg;
                fromProtoMsg(message: _70.ConfigProtoMsg): _70.Config;
                toProto(message: _70.Config): Uint8Array;
                toProtoMsg(message: _70.Config): _70.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _70.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.ModuleConfig;
                fromPartial(object: Partial<_70.ModuleConfig>): _70.ModuleConfig;
                fromAmino(object: _70.ModuleConfigAmino): _70.ModuleConfig;
                toAmino(message: _70.ModuleConfig): _70.ModuleConfigAmino;
                fromAminoMsg(object: _70.ModuleConfigAminoMsg): _70.ModuleConfig;
                toAminoMsg(message: _70.ModuleConfig): _70.ModuleConfigAminoMsg;
                fromProtoMsg(message: _70.ModuleConfigProtoMsg): _70.ModuleConfig;
                toProto(message: _70.ModuleConfig): Uint8Array;
                toProtoMsg(message: _70.ModuleConfig): _70.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _70.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.GolangBinding;
                fromPartial(object: Partial<_70.GolangBinding>): _70.GolangBinding;
                fromAmino(object: _70.GolangBindingAmino): _70.GolangBinding;
                toAmino(message: _70.GolangBinding): _70.GolangBindingAmino;
                fromAminoMsg(object: _70.GolangBindingAminoMsg): _70.GolangBinding;
                toAminoMsg(message: _70.GolangBinding): _70.GolangBindingAminoMsg;
                fromProtoMsg(message: _70.GolangBindingProtoMsg): _70.GolangBinding;
                toProto(message: _70.GolangBinding): Uint8Array;
                toProtoMsg(message: _70.GolangBinding): _70.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _73.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.Module;
                    fromPartial(object: Partial<_73.Module>): _73.Module;
                    fromAmino(object: _73.ModuleAmino): _73.Module;
                    toAmino(message: _73.Module): _73.ModuleAmino;
                    fromAminoMsg(object: _73.ModuleAminoMsg): _73.Module;
                    toAminoMsg(message: _73.Module): _73.ModuleAminoMsg;
                    fromProtoMsg(message: _73.ModuleProtoMsg): _73.Module;
                    toProto(message: _73.Module): Uint8Array;
                    toProtoMsg(message: _73.Module): _73.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _73.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _73.ModuleAccountPermission;
                    fromPartial(object: Partial<_73.ModuleAccountPermission>): _73.ModuleAccountPermission;
                    fromAmino(object: _73.ModuleAccountPermissionAmino): _73.ModuleAccountPermission;
                    toAmino(message: _73.ModuleAccountPermission): _73.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _73.ModuleAccountPermissionAminoMsg): _73.ModuleAccountPermission;
                    toAminoMsg(message: _73.ModuleAccountPermission): _73.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _73.ModuleAccountPermissionProtoMsg): _73.ModuleAccountPermission;
                    toProto(message: _73.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _73.ModuleAccountPermission): _73.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _365.MsgClientImpl;
            QueryClientImpl: typeof _344.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _76.QueryAccountsRequest): Promise<_76.QueryAccountsResponse>;
                account(request: _76.QueryAccountRequest): Promise<_76.QueryAccountResponse>;
                accountAddressByID(request: _76.QueryAccountAddressByIDRequest): Promise<_76.QueryAccountAddressByIDResponse>;
                params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                moduleAccounts(request?: _76.QueryModuleAccountsRequest): Promise<_76.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _76.QueryModuleAccountByNameRequest): Promise<_76.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _76.Bech32PrefixRequest): Promise<_76.Bech32PrefixResponse>;
                addressBytesToString(request: _76.AddressBytesToStringRequest): Promise<_76.AddressBytesToStringResponse>;
                addressStringToBytes(request: _76.AddressStringToBytesRequest): Promise<_76.AddressStringToBytesResponse>;
                accountInfo(request: _76.QueryAccountInfoRequest): Promise<_76.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _324.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateParams) => _77.MsgUpdateParamsAmino;
                    fromAmino: (object: _77.MsgUpdateParamsAmino) => _77.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _77.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgUpdateParams;
                fromPartial(object: Partial<_77.MsgUpdateParams>): _77.MsgUpdateParams;
                fromAmino(object: _77.MsgUpdateParamsAmino): _77.MsgUpdateParams;
                toAmino(message: _77.MsgUpdateParams): _77.MsgUpdateParamsAmino;
                fromAminoMsg(object: _77.MsgUpdateParamsAminoMsg): _77.MsgUpdateParams;
                toAminoMsg(message: _77.MsgUpdateParams): _77.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateParamsProtoMsg): _77.MsgUpdateParams;
                toProto(message: _77.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateParams): _77.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_77.MsgUpdateParamsResponse>): _77.MsgUpdateParamsResponse;
                fromAmino(_: _77.MsgUpdateParamsResponseAmino): _77.MsgUpdateParamsResponse;
                toAmino(_: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateParamsResponseAminoMsg): _77.MsgUpdateParamsResponse;
                toAminoMsg(message: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateParamsResponseProtoMsg): _77.MsgUpdateParamsResponse;
                toProto(message: _77.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _76.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountsRequest;
                fromPartial(object: Partial<_76.QueryAccountsRequest>): _76.QueryAccountsRequest;
                fromAmino(object: _76.QueryAccountsRequestAmino): _76.QueryAccountsRequest;
                toAmino(message: _76.QueryAccountsRequest): _76.QueryAccountsRequestAmino;
                fromAminoMsg(object: _76.QueryAccountsRequestAminoMsg): _76.QueryAccountsRequest;
                toAminoMsg(message: _76.QueryAccountsRequest): _76.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAccountsRequestProtoMsg): _76.QueryAccountsRequest;
                toProto(message: _76.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAccountsRequest): _76.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _76.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountsResponse;
                fromPartial(object: Partial<_76.QueryAccountsResponse>): _76.QueryAccountsResponse;
                fromAmino(object: _76.QueryAccountsResponseAmino): _76.QueryAccountsResponse;
                toAmino(message: _76.QueryAccountsResponse): _76.QueryAccountsResponseAmino;
                fromAminoMsg(object: _76.QueryAccountsResponseAminoMsg): _76.QueryAccountsResponse;
                toAminoMsg(message: _76.QueryAccountsResponse): _76.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAccountsResponseProtoMsg): _76.QueryAccountsResponse;
                toProto(message: _76.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAccountsResponse): _76.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _76.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountRequest;
                fromPartial(object: Partial<_76.QueryAccountRequest>): _76.QueryAccountRequest;
                fromAmino(object: _76.QueryAccountRequestAmino): _76.QueryAccountRequest;
                toAmino(message: _76.QueryAccountRequest): _76.QueryAccountRequestAmino;
                fromAminoMsg(object: _76.QueryAccountRequestAminoMsg): _76.QueryAccountRequest;
                toAminoMsg(message: _76.QueryAccountRequest): _76.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAccountRequestProtoMsg): _76.QueryAccountRequest;
                toProto(message: _76.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAccountRequest): _76.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _76.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountResponse;
                fromPartial(object: Partial<_76.QueryAccountResponse>): _76.QueryAccountResponse;
                fromAmino(object: _76.QueryAccountResponseAmino): _76.QueryAccountResponse;
                toAmino(message: _76.QueryAccountResponse): _76.QueryAccountResponseAmino;
                fromAminoMsg(object: _76.QueryAccountResponseAminoMsg): _76.QueryAccountResponse;
                toAminoMsg(message: _76.QueryAccountResponse): _76.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAccountResponseProtoMsg): _76.QueryAccountResponse;
                toProto(message: _76.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAccountResponse): _76.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _76.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.QueryParamsRequest;
                fromPartial(_: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
                fromAmino(_: _76.QueryParamsRequestAmino): _76.QueryParamsRequest;
                toAmino(_: _76.QueryParamsRequest): _76.QueryParamsRequestAmino;
                fromAminoMsg(object: _76.QueryParamsRequestAminoMsg): _76.QueryParamsRequest;
                toAminoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
                toProto(message: _76.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _76.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryParamsResponse;
                fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
                fromAmino(object: _76.QueryParamsResponseAmino): _76.QueryParamsResponse;
                toAmino(message: _76.QueryParamsResponse): _76.QueryParamsResponseAmino;
                fromAminoMsg(object: _76.QueryParamsResponseAminoMsg): _76.QueryParamsResponse;
                toAminoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
                toProto(message: _76.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _76.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_76.QueryModuleAccountsRequest>): _76.QueryModuleAccountsRequest;
                fromAmino(_: _76.QueryModuleAccountsRequestAmino): _76.QueryModuleAccountsRequest;
                toAmino(_: _76.QueryModuleAccountsRequest): _76.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _76.QueryModuleAccountsRequestAminoMsg): _76.QueryModuleAccountsRequest;
                toAminoMsg(message: _76.QueryModuleAccountsRequest): _76.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryModuleAccountsRequestProtoMsg): _76.QueryModuleAccountsRequest;
                toProto(message: _76.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryModuleAccountsRequest): _76.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _76.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_76.QueryModuleAccountsResponse>): _76.QueryModuleAccountsResponse;
                fromAmino(object: _76.QueryModuleAccountsResponseAmino): _76.QueryModuleAccountsResponse;
                toAmino(message: _76.QueryModuleAccountsResponse): _76.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _76.QueryModuleAccountsResponseAminoMsg): _76.QueryModuleAccountsResponse;
                toAminoMsg(message: _76.QueryModuleAccountsResponse): _76.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryModuleAccountsResponseProtoMsg): _76.QueryModuleAccountsResponse;
                toProto(message: _76.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryModuleAccountsResponse): _76.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _76.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_76.QueryModuleAccountByNameRequest>): _76.QueryModuleAccountByNameRequest;
                fromAmino(object: _76.QueryModuleAccountByNameRequestAmino): _76.QueryModuleAccountByNameRequest;
                toAmino(message: _76.QueryModuleAccountByNameRequest): _76.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _76.QueryModuleAccountByNameRequestAminoMsg): _76.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _76.QueryModuleAccountByNameRequest): _76.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _76.QueryModuleAccountByNameRequestProtoMsg): _76.QueryModuleAccountByNameRequest;
                toProto(message: _76.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _76.QueryModuleAccountByNameRequest): _76.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _76.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_76.QueryModuleAccountByNameResponse>): _76.QueryModuleAccountByNameResponse;
                fromAmino(object: _76.QueryModuleAccountByNameResponseAmino): _76.QueryModuleAccountByNameResponse;
                toAmino(message: _76.QueryModuleAccountByNameResponse): _76.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _76.QueryModuleAccountByNameResponseAminoMsg): _76.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _76.QueryModuleAccountByNameResponse): _76.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _76.QueryModuleAccountByNameResponseProtoMsg): _76.QueryModuleAccountByNameResponse;
                toProto(message: _76.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _76.QueryModuleAccountByNameResponse): _76.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _76.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.Bech32PrefixRequest;
                fromPartial(_: Partial<_76.Bech32PrefixRequest>): _76.Bech32PrefixRequest;
                fromAmino(_: _76.Bech32PrefixRequestAmino): _76.Bech32PrefixRequest;
                toAmino(_: _76.Bech32PrefixRequest): _76.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _76.Bech32PrefixRequestAminoMsg): _76.Bech32PrefixRequest;
                toAminoMsg(message: _76.Bech32PrefixRequest): _76.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _76.Bech32PrefixRequestProtoMsg): _76.Bech32PrefixRequest;
                toProto(message: _76.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _76.Bech32PrefixRequest): _76.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _76.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Bech32PrefixResponse;
                fromPartial(object: Partial<_76.Bech32PrefixResponse>): _76.Bech32PrefixResponse;
                fromAmino(object: _76.Bech32PrefixResponseAmino): _76.Bech32PrefixResponse;
                toAmino(message: _76.Bech32PrefixResponse): _76.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _76.Bech32PrefixResponseAminoMsg): _76.Bech32PrefixResponse;
                toAminoMsg(message: _76.Bech32PrefixResponse): _76.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _76.Bech32PrefixResponseProtoMsg): _76.Bech32PrefixResponse;
                toProto(message: _76.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _76.Bech32PrefixResponse): _76.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _76.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.AddressBytesToStringRequest;
                fromPartial(object: Partial<_76.AddressBytesToStringRequest>): _76.AddressBytesToStringRequest;
                fromAmino(object: _76.AddressBytesToStringRequestAmino): _76.AddressBytesToStringRequest;
                toAmino(message: _76.AddressBytesToStringRequest): _76.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _76.AddressBytesToStringRequestAminoMsg): _76.AddressBytesToStringRequest;
                toAminoMsg(message: _76.AddressBytesToStringRequest): _76.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _76.AddressBytesToStringRequestProtoMsg): _76.AddressBytesToStringRequest;
                toProto(message: _76.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _76.AddressBytesToStringRequest): _76.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _76.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.AddressBytesToStringResponse;
                fromPartial(object: Partial<_76.AddressBytesToStringResponse>): _76.AddressBytesToStringResponse;
                fromAmino(object: _76.AddressBytesToStringResponseAmino): _76.AddressBytesToStringResponse;
                toAmino(message: _76.AddressBytesToStringResponse): _76.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _76.AddressBytesToStringResponseAminoMsg): _76.AddressBytesToStringResponse;
                toAminoMsg(message: _76.AddressBytesToStringResponse): _76.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _76.AddressBytesToStringResponseProtoMsg): _76.AddressBytesToStringResponse;
                toProto(message: _76.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _76.AddressBytesToStringResponse): _76.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _76.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.AddressStringToBytesRequest;
                fromPartial(object: Partial<_76.AddressStringToBytesRequest>): _76.AddressStringToBytesRequest;
                fromAmino(object: _76.AddressStringToBytesRequestAmino): _76.AddressStringToBytesRequest;
                toAmino(message: _76.AddressStringToBytesRequest): _76.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _76.AddressStringToBytesRequestAminoMsg): _76.AddressStringToBytesRequest;
                toAminoMsg(message: _76.AddressStringToBytesRequest): _76.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _76.AddressStringToBytesRequestProtoMsg): _76.AddressStringToBytesRequest;
                toProto(message: _76.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _76.AddressStringToBytesRequest): _76.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _76.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.AddressStringToBytesResponse;
                fromPartial(object: Partial<_76.AddressStringToBytesResponse>): _76.AddressStringToBytesResponse;
                fromAmino(object: _76.AddressStringToBytesResponseAmino): _76.AddressStringToBytesResponse;
                toAmino(message: _76.AddressStringToBytesResponse): _76.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _76.AddressStringToBytesResponseAminoMsg): _76.AddressStringToBytesResponse;
                toAminoMsg(message: _76.AddressStringToBytesResponse): _76.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _76.AddressStringToBytesResponseProtoMsg): _76.AddressStringToBytesResponse;
                toProto(message: _76.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _76.AddressStringToBytesResponse): _76.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _76.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_76.QueryAccountAddressByIDRequest>): _76.QueryAccountAddressByIDRequest;
                fromAmino(object: _76.QueryAccountAddressByIDRequestAmino): _76.QueryAccountAddressByIDRequest;
                toAmino(message: _76.QueryAccountAddressByIDRequest): _76.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _76.QueryAccountAddressByIDRequestAminoMsg): _76.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _76.QueryAccountAddressByIDRequest): _76.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAccountAddressByIDRequestProtoMsg): _76.QueryAccountAddressByIDRequest;
                toProto(message: _76.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAccountAddressByIDRequest): _76.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _76.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_76.QueryAccountAddressByIDResponse>): _76.QueryAccountAddressByIDResponse;
                fromAmino(object: _76.QueryAccountAddressByIDResponseAmino): _76.QueryAccountAddressByIDResponse;
                toAmino(message: _76.QueryAccountAddressByIDResponse): _76.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _76.QueryAccountAddressByIDResponseAminoMsg): _76.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _76.QueryAccountAddressByIDResponse): _76.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAccountAddressByIDResponseProtoMsg): _76.QueryAccountAddressByIDResponse;
                toProto(message: _76.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAccountAddressByIDResponse): _76.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _76.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountInfoRequest;
                fromPartial(object: Partial<_76.QueryAccountInfoRequest>): _76.QueryAccountInfoRequest;
                fromAmino(object: _76.QueryAccountInfoRequestAmino): _76.QueryAccountInfoRequest;
                toAmino(message: _76.QueryAccountInfoRequest): _76.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _76.QueryAccountInfoRequestAminoMsg): _76.QueryAccountInfoRequest;
                toAminoMsg(message: _76.QueryAccountInfoRequest): _76.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _76.QueryAccountInfoRequestProtoMsg): _76.QueryAccountInfoRequest;
                toProto(message: _76.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _76.QueryAccountInfoRequest): _76.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _76.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryAccountInfoResponse;
                fromPartial(object: Partial<_76.QueryAccountInfoResponse>): _76.QueryAccountInfoResponse;
                fromAmino(object: _76.QueryAccountInfoResponseAmino): _76.QueryAccountInfoResponse;
                toAmino(message: _76.QueryAccountInfoResponse): _76.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _76.QueryAccountInfoResponseAminoMsg): _76.QueryAccountInfoResponse;
                toAminoMsg(message: _76.QueryAccountInfoResponse): _76.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _76.QueryAccountInfoResponseProtoMsg): _76.QueryAccountInfoResponse;
                toProto(message: _76.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _76.QueryAccountInfoResponse): _76.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _74.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _74.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                toProto(message: _75.GenesisState): Uint8Array;
                toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _74.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.BaseAccount;
                fromPartial(object: Partial<_74.BaseAccount>): _74.BaseAccount;
                fromAmino(object: _74.BaseAccountAmino): _74.BaseAccount;
                toAmino(message: _74.BaseAccount): _74.BaseAccountAmino;
                fromAminoMsg(object: _74.BaseAccountAminoMsg): _74.BaseAccount;
                toAminoMsg(message: _74.BaseAccount): _74.BaseAccountAminoMsg;
                fromProtoMsg(message: _74.BaseAccountProtoMsg): _74.BaseAccount;
                toProto(message: _74.BaseAccount): Uint8Array;
                toProtoMsg(message: _74.BaseAccount): _74.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _74.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ModuleAccount;
                fromPartial(object: Partial<_74.ModuleAccount>): _74.ModuleAccount;
                fromAmino(object: _74.ModuleAccountAmino): _74.ModuleAccount;
                toAmino(message: _74.ModuleAccount): _74.ModuleAccountAmino;
                fromAminoMsg(object: _74.ModuleAccountAminoMsg): _74.ModuleAccount;
                toAminoMsg(message: _74.ModuleAccount): _74.ModuleAccountAminoMsg;
                fromProtoMsg(message: _74.ModuleAccountProtoMsg): _74.ModuleAccount;
                toProto(message: _74.ModuleAccount): Uint8Array;
                toProtoMsg(message: _74.ModuleAccount): _74.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _74.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ModuleCredential;
                fromPartial(object: Partial<_74.ModuleCredential>): _74.ModuleCredential;
                fromAmino(object: _74.ModuleCredentialAmino): _74.ModuleCredential;
                toAmino(message: _74.ModuleCredential): _74.ModuleCredentialAmino;
                fromAminoMsg(object: _74.ModuleCredentialAminoMsg): _74.ModuleCredential;
                toAminoMsg(message: _74.ModuleCredential): _74.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _74.ModuleCredentialProtoMsg): _74.ModuleCredential;
                toProto(message: _74.ModuleCredential): Uint8Array;
                toProtoMsg(message: _74.ModuleCredential): _74.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _74.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Params;
                fromPartial(object: Partial<_74.Params>): _74.Params;
                fromAmino(object: _74.ParamsAmino): _74.Params;
                toAmino(message: _74.Params): _74.ParamsAmino;
                fromAminoMsg(object: _74.ParamsAminoMsg): _74.Params;
                toAminoMsg(message: _74.Params): _74.ParamsAminoMsg;
                fromProtoMsg(message: _74.ParamsProtoMsg): _74.Params;
                toProto(message: _74.Params): Uint8Array;
                toProtoMsg(message: _74.Params): _74.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _78.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _78.Module;
                    fromPartial(_: Partial<_78.Module>): _78.Module;
                    fromAmino(_: _78.ModuleAmino): _78.Module;
                    toAmino(_: _78.Module): _78.ModuleAmino;
                    fromAminoMsg(object: _78.ModuleAminoMsg): _78.Module;
                    toAminoMsg(message: _78.Module): _78.ModuleAminoMsg;
                    fromProtoMsg(message: _78.ModuleProtoMsg): _78.Module;
                    toProto(message: _78.Module): Uint8Array;
                    toProtoMsg(message: _78.Module): _78.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _366.MsgClientImpl;
            QueryClientImpl: typeof _345.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _82.QueryGrantsRequest): Promise<_82.QueryGrantsResponse>;
                granterGrants(request: _82.QueryGranterGrantsRequest): Promise<_82.QueryGranterGrantsResponse>;
                granteeGrants(request: _82.QueryGranteeGrantsRequest): Promise<_82.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _325.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _83.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _83.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _83.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _83.MsgGrant): {
                        typeUrl: string;
                        value: _83.MsgGrant;
                    };
                    exec(value: _83.MsgExec): {
                        typeUrl: string;
                        value: _83.MsgExec;
                    };
                    revoke(value: _83.MsgRevoke): {
                        typeUrl: string;
                        value: _83.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _83.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _83.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _83.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _83.MsgGrant): {
                        typeUrl: string;
                        value: _83.MsgGrant;
                    };
                    exec(value: _83.MsgExec): {
                        typeUrl: string;
                        value: _83.MsgExec;
                    };
                    revoke(value: _83.MsgRevoke): {
                        typeUrl: string;
                        value: _83.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _83.MsgGrant) => _83.MsgGrantAmino;
                    fromAmino: (object: _83.MsgGrantAmino) => _83.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _83.MsgExec) => _83.MsgExecAmino;
                    fromAmino: (object: _83.MsgExecAmino) => _83.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _83.MsgRevoke) => _83.MsgRevokeAmino;
                    fromAmino: (object: _83.MsgRevokeAmino) => _83.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _83.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgGrant;
                fromPartial(object: Partial<_83.MsgGrant>): _83.MsgGrant;
                fromAmino(object: _83.MsgGrantAmino): _83.MsgGrant;
                toAmino(message: _83.MsgGrant): _83.MsgGrantAmino;
                fromAminoMsg(object: _83.MsgGrantAminoMsg): _83.MsgGrant;
                toAminoMsg(message: _83.MsgGrant): _83.MsgGrantAminoMsg;
                fromProtoMsg(message: _83.MsgGrantProtoMsg): _83.MsgGrant;
                toProto(message: _83.MsgGrant): Uint8Array;
                toProtoMsg(message: _83.MsgGrant): _83.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _83.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgExecResponse;
                fromPartial(object: Partial<_83.MsgExecResponse>): _83.MsgExecResponse;
                fromAmino(object: _83.MsgExecResponseAmino): _83.MsgExecResponse;
                toAmino(message: _83.MsgExecResponse): _83.MsgExecResponseAmino;
                fromAminoMsg(object: _83.MsgExecResponseAminoMsg): _83.MsgExecResponse;
                toAminoMsg(message: _83.MsgExecResponse): _83.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _83.MsgExecResponseProtoMsg): _83.MsgExecResponse;
                toProto(message: _83.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _83.MsgExecResponse): _83.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _83.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgExec;
                fromPartial(object: Partial<_83.MsgExec>): _83.MsgExec;
                fromAmino(object: _83.MsgExecAmino): _83.MsgExec;
                toAmino(message: _83.MsgExec): _83.MsgExecAmino;
                fromAminoMsg(object: _83.MsgExecAminoMsg): _83.MsgExec;
                toAminoMsg(message: _83.MsgExec): _83.MsgExecAminoMsg;
                fromProtoMsg(message: _83.MsgExecProtoMsg): _83.MsgExec;
                toProto(message: _83.MsgExec): Uint8Array;
                toProtoMsg(message: _83.MsgExec): _83.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _83.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgGrantResponse;
                fromPartial(_: Partial<_83.MsgGrantResponse>): _83.MsgGrantResponse;
                fromAmino(_: _83.MsgGrantResponseAmino): _83.MsgGrantResponse;
                toAmino(_: _83.MsgGrantResponse): _83.MsgGrantResponseAmino;
                fromAminoMsg(object: _83.MsgGrantResponseAminoMsg): _83.MsgGrantResponse;
                toAminoMsg(message: _83.MsgGrantResponse): _83.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _83.MsgGrantResponseProtoMsg): _83.MsgGrantResponse;
                toProto(message: _83.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _83.MsgGrantResponse): _83.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _83.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.MsgRevoke;
                fromPartial(object: Partial<_83.MsgRevoke>): _83.MsgRevoke;
                fromAmino(object: _83.MsgRevokeAmino): _83.MsgRevoke;
                toAmino(message: _83.MsgRevoke): _83.MsgRevokeAmino;
                fromAminoMsg(object: _83.MsgRevokeAminoMsg): _83.MsgRevoke;
                toAminoMsg(message: _83.MsgRevoke): _83.MsgRevokeAminoMsg;
                fromProtoMsg(message: _83.MsgRevokeProtoMsg): _83.MsgRevoke;
                toProto(message: _83.MsgRevoke): Uint8Array;
                toProtoMsg(message: _83.MsgRevoke): _83.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _83.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.MsgRevokeResponse;
                fromPartial(_: Partial<_83.MsgRevokeResponse>): _83.MsgRevokeResponse;
                fromAmino(_: _83.MsgRevokeResponseAmino): _83.MsgRevokeResponse;
                toAmino(_: _83.MsgRevokeResponse): _83.MsgRevokeResponseAmino;
                fromAminoMsg(object: _83.MsgRevokeResponseAminoMsg): _83.MsgRevokeResponse;
                toAminoMsg(message: _83.MsgRevokeResponse): _83.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _83.MsgRevokeResponseProtoMsg): _83.MsgRevokeResponse;
                toProto(message: _83.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _83.MsgRevokeResponse): _83.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _82.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGrantsRequest;
                fromPartial(object: Partial<_82.QueryGrantsRequest>): _82.QueryGrantsRequest;
                fromAmino(object: _82.QueryGrantsRequestAmino): _82.QueryGrantsRequest;
                toAmino(message: _82.QueryGrantsRequest): _82.QueryGrantsRequestAmino;
                fromAminoMsg(object: _82.QueryGrantsRequestAminoMsg): _82.QueryGrantsRequest;
                toAminoMsg(message: _82.QueryGrantsRequest): _82.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGrantsRequestProtoMsg): _82.QueryGrantsRequest;
                toProto(message: _82.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGrantsRequest): _82.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _82.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGrantsResponse;
                fromPartial(object: Partial<_82.QueryGrantsResponse>): _82.QueryGrantsResponse;
                fromAmino(object: _82.QueryGrantsResponseAmino): _82.QueryGrantsResponse;
                toAmino(message: _82.QueryGrantsResponse): _82.QueryGrantsResponseAmino;
                fromAminoMsg(object: _82.QueryGrantsResponseAminoMsg): _82.QueryGrantsResponse;
                toAminoMsg(message: _82.QueryGrantsResponse): _82.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGrantsResponseProtoMsg): _82.QueryGrantsResponse;
                toProto(message: _82.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGrantsResponse): _82.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _82.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_82.QueryGranterGrantsRequest>): _82.QueryGranterGrantsRequest;
                fromAmino(object: _82.QueryGranterGrantsRequestAmino): _82.QueryGranterGrantsRequest;
                toAmino(message: _82.QueryGranterGrantsRequest): _82.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _82.QueryGranterGrantsRequestAminoMsg): _82.QueryGranterGrantsRequest;
                toAminoMsg(message: _82.QueryGranterGrantsRequest): _82.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGranterGrantsRequestProtoMsg): _82.QueryGranterGrantsRequest;
                toProto(message: _82.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGranterGrantsRequest): _82.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _82.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_82.QueryGranterGrantsResponse>): _82.QueryGranterGrantsResponse;
                fromAmino(object: _82.QueryGranterGrantsResponseAmino): _82.QueryGranterGrantsResponse;
                toAmino(message: _82.QueryGranterGrantsResponse): _82.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _82.QueryGranterGrantsResponseAminoMsg): _82.QueryGranterGrantsResponse;
                toAminoMsg(message: _82.QueryGranterGrantsResponse): _82.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGranterGrantsResponseProtoMsg): _82.QueryGranterGrantsResponse;
                toProto(message: _82.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGranterGrantsResponse): _82.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _82.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_82.QueryGranteeGrantsRequest>): _82.QueryGranteeGrantsRequest;
                fromAmino(object: _82.QueryGranteeGrantsRequestAmino): _82.QueryGranteeGrantsRequest;
                toAmino(message: _82.QueryGranteeGrantsRequest): _82.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _82.QueryGranteeGrantsRequestAminoMsg): _82.QueryGranteeGrantsRequest;
                toAminoMsg(message: _82.QueryGranteeGrantsRequest): _82.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryGranteeGrantsRequestProtoMsg): _82.QueryGranteeGrantsRequest;
                toProto(message: _82.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryGranteeGrantsRequest): _82.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _82.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_82.QueryGranteeGrantsResponse>): _82.QueryGranteeGrantsResponse;
                fromAmino(object: _82.QueryGranteeGrantsResponseAmino): _82.QueryGranteeGrantsResponse;
                toAmino(message: _82.QueryGranteeGrantsResponse): _82.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _82.QueryGranteeGrantsResponseAminoMsg): _82.QueryGranteeGrantsResponse;
                toAminoMsg(message: _82.QueryGranteeGrantsResponse): _82.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryGranteeGrantsResponseProtoMsg): _82.QueryGranteeGrantsResponse;
                toProto(message: _82.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryGranteeGrantsResponse): _82.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _81.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GenesisState;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                toAminoMsg(message: _81.GenesisState): _81.GenesisStateAminoMsg;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _80.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventGrant;
                fromPartial(object: Partial<_80.EventGrant>): _80.EventGrant;
                fromAmino(object: _80.EventGrantAmino): _80.EventGrant;
                toAmino(message: _80.EventGrant): _80.EventGrantAmino;
                fromAminoMsg(object: _80.EventGrantAminoMsg): _80.EventGrant;
                toAminoMsg(message: _80.EventGrant): _80.EventGrantAminoMsg;
                fromProtoMsg(message: _80.EventGrantProtoMsg): _80.EventGrant;
                toProto(message: _80.EventGrant): Uint8Array;
                toProtoMsg(message: _80.EventGrant): _80.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _80.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.EventRevoke;
                fromPartial(object: Partial<_80.EventRevoke>): _80.EventRevoke;
                fromAmino(object: _80.EventRevokeAmino): _80.EventRevoke;
                toAmino(message: _80.EventRevoke): _80.EventRevokeAmino;
                fromAminoMsg(object: _80.EventRevokeAminoMsg): _80.EventRevoke;
                toAminoMsg(message: _80.EventRevoke): _80.EventRevokeAminoMsg;
                fromProtoMsg(message: _80.EventRevokeProtoMsg): _80.EventRevoke;
                toProto(message: _80.EventRevoke): Uint8Array;
                toProtoMsg(message: _80.EventRevoke): _80.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _79.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GenericAuthorization;
                fromPartial(object: Partial<_79.GenericAuthorization>): _79.GenericAuthorization;
                fromAmino(object: _79.GenericAuthorizationAmino): _79.GenericAuthorization;
                toAmino(message: _79.GenericAuthorization): _79.GenericAuthorizationAmino;
                fromAminoMsg(object: _79.GenericAuthorizationAminoMsg): _79.GenericAuthorization;
                toAminoMsg(message: _79.GenericAuthorization): _79.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _79.GenericAuthorizationProtoMsg): _79.GenericAuthorization;
                toProto(message: _79.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _79.GenericAuthorization): _79.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _79.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Grant;
                fromPartial(object: Partial<_79.Grant>): _79.Grant;
                fromAmino(object: _79.GrantAmino): _79.Grant;
                toAmino(message: _79.Grant): _79.GrantAmino;
                fromAminoMsg(object: _79.GrantAminoMsg): _79.Grant;
                toAminoMsg(message: _79.Grant): _79.GrantAminoMsg;
                fromProtoMsg(message: _79.GrantProtoMsg): _79.Grant;
                toProto(message: _79.Grant): Uint8Array;
                toProtoMsg(message: _79.Grant): _79.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _79.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GrantAuthorization;
                fromPartial(object: Partial<_79.GrantAuthorization>): _79.GrantAuthorization;
                fromAmino(object: _79.GrantAuthorizationAmino): _79.GrantAuthorization;
                toAmino(message: _79.GrantAuthorization): _79.GrantAuthorizationAmino;
                fromAminoMsg(object: _79.GrantAuthorizationAminoMsg): _79.GrantAuthorization;
                toAminoMsg(message: _79.GrantAuthorization): _79.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _79.GrantAuthorizationProtoMsg): _79.GrantAuthorization;
                toProto(message: _79.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _79.GrantAuthorization): _79.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _79.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GrantQueueItem;
                fromPartial(object: Partial<_79.GrantQueueItem>): _79.GrantQueueItem;
                fromAmino(object: _79.GrantQueueItemAmino): _79.GrantQueueItem;
                toAmino(message: _79.GrantQueueItem): _79.GrantQueueItemAmino;
                fromAminoMsg(object: _79.GrantQueueItemAminoMsg): _79.GrantQueueItem;
                toAminoMsg(message: _79.GrantQueueItem): _79.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _79.GrantQueueItemProtoMsg): _79.GrantQueueItem;
                toProto(message: _79.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _79.GrantQueueItem): _79.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _87.SendAuthorization | _178.StakeAuthorization | _79.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _346.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _85.AppOptionsRequest): Promise<_85.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _85.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.AppOptionsRequest;
                fromPartial(_: Partial<_85.AppOptionsRequest>): _85.AppOptionsRequest;
                fromAmino(_: _85.AppOptionsRequestAmino): _85.AppOptionsRequest;
                toAmino(_: _85.AppOptionsRequest): _85.AppOptionsRequestAmino;
                fromAminoMsg(object: _85.AppOptionsRequestAminoMsg): _85.AppOptionsRequest;
                toAminoMsg(message: _85.AppOptionsRequest): _85.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _85.AppOptionsRequestProtoMsg): _85.AppOptionsRequest;
                toProto(message: _85.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _85.AppOptionsRequest): _85.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _85.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_85.AppOptionsResponse_ModuleOptionsEntry>): _85.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _85.AppOptionsResponse_ModuleOptionsEntryAmino): _85.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _85.AppOptionsResponse_ModuleOptionsEntry): _85.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _85.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _85.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _85.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _85.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _85.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _85.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.AppOptionsResponse;
                fromPartial(object: Partial<_85.AppOptionsResponse>): _85.AppOptionsResponse;
                fromAmino(object: _85.AppOptionsResponseAmino): _85.AppOptionsResponse;
                toAmino(message: _85.AppOptionsResponse): _85.AppOptionsResponseAmino;
                fromAminoMsg(object: _85.AppOptionsResponseAminoMsg): _85.AppOptionsResponse;
                toAminoMsg(message: _85.AppOptionsResponse): _85.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _85.AppOptionsResponseProtoMsg): _85.AppOptionsResponse;
                toProto(message: _85.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _85.AppOptionsResponse): _85.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _84.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ModuleOptions;
                fromPartial(object: Partial<_84.ModuleOptions>): _84.ModuleOptions;
                fromAmino(object: _84.ModuleOptionsAmino): _84.ModuleOptions;
                toAmino(message: _84.ModuleOptions): _84.ModuleOptionsAmino;
                fromAminoMsg(object: _84.ModuleOptionsAminoMsg): _84.ModuleOptions;
                toAminoMsg(message: _84.ModuleOptions): _84.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _84.ModuleOptionsProtoMsg): _84.ModuleOptions;
                toProto(message: _84.ModuleOptions): Uint8Array;
                toProtoMsg(message: _84.ModuleOptions): _84.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _84.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_84.ServiceCommandDescriptor_SubCommandsEntry>): _84.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _84.ServiceCommandDescriptor_SubCommandsEntryAmino): _84.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _84.ServiceCommandDescriptor_SubCommandsEntry): _84.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _84.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _84.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _84.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _84.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _84.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _84.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ServiceCommandDescriptor;
                fromPartial(object: Partial<_84.ServiceCommandDescriptor>): _84.ServiceCommandDescriptor;
                fromAmino(object: _84.ServiceCommandDescriptorAmino): _84.ServiceCommandDescriptor;
                toAmino(message: _84.ServiceCommandDescriptor): _84.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _84.ServiceCommandDescriptorAminoMsg): _84.ServiceCommandDescriptor;
                toAminoMsg(message: _84.ServiceCommandDescriptor): _84.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _84.ServiceCommandDescriptorProtoMsg): _84.ServiceCommandDescriptor;
                toProto(message: _84.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _84.ServiceCommandDescriptor): _84.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _84.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_84.RpcCommandOptions_FlagOptionsEntry>): _84.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _84.RpcCommandOptions_FlagOptionsEntryAmino): _84.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _84.RpcCommandOptions_FlagOptionsEntry): _84.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _84.RpcCommandOptions_FlagOptionsEntryAminoMsg): _84.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _84.RpcCommandOptions_FlagOptionsEntryProtoMsg): _84.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _84.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _84.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.RpcCommandOptions;
                fromPartial(object: Partial<_84.RpcCommandOptions>): _84.RpcCommandOptions;
                fromAmino(object: _84.RpcCommandOptionsAmino): _84.RpcCommandOptions;
                toAmino(message: _84.RpcCommandOptions): _84.RpcCommandOptionsAmino;
                fromAminoMsg(object: _84.RpcCommandOptionsAminoMsg): _84.RpcCommandOptions;
                toAminoMsg(message: _84.RpcCommandOptions): _84.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _84.RpcCommandOptionsProtoMsg): _84.RpcCommandOptions;
                toProto(message: _84.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _84.RpcCommandOptions): _84.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _84.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.FlagOptions;
                fromPartial(object: Partial<_84.FlagOptions>): _84.FlagOptions;
                fromAmino(object: _84.FlagOptionsAmino): _84.FlagOptions;
                toAmino(message: _84.FlagOptions): _84.FlagOptionsAmino;
                fromAminoMsg(object: _84.FlagOptionsAminoMsg): _84.FlagOptions;
                toAminoMsg(message: _84.FlagOptions): _84.FlagOptionsAminoMsg;
                fromProtoMsg(message: _84.FlagOptionsProtoMsg): _84.FlagOptions;
                toProto(message: _84.FlagOptions): Uint8Array;
                toProtoMsg(message: _84.FlagOptions): _84.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _84.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.PositionalArgDescriptor;
                fromPartial(object: Partial<_84.PositionalArgDescriptor>): _84.PositionalArgDescriptor;
                fromAmino(object: _84.PositionalArgDescriptorAmino): _84.PositionalArgDescriptor;
                toAmino(message: _84.PositionalArgDescriptor): _84.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _84.PositionalArgDescriptorAminoMsg): _84.PositionalArgDescriptor;
                toAminoMsg(message: _84.PositionalArgDescriptor): _84.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _84.PositionalArgDescriptorProtoMsg): _84.PositionalArgDescriptor;
                toProto(message: _84.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _84.PositionalArgDescriptor): _84.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _86.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _86.Module;
                    fromPartial(object: Partial<_86.Module>): _86.Module;
                    fromAmino(object: _86.ModuleAmino): _86.Module;
                    toAmino(message: _86.Module): _86.ModuleAmino;
                    fromAminoMsg(object: _86.ModuleAminoMsg): _86.Module;
                    toAminoMsg(message: _86.Module): _86.ModuleAminoMsg;
                    fromProtoMsg(message: _86.ModuleProtoMsg): _86.Module;
                    toProto(message: _86.Module): Uint8Array;
                    toProtoMsg(message: _86.Module): _86.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _367.MsgClientImpl;
            QueryClientImpl: typeof _347.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                allBalances(request: _90.QueryAllBalancesRequest): Promise<_90.QueryAllBalancesResponse>;
                spendableBalances(request: _90.QuerySpendableBalancesRequest): Promise<_90.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _90.QuerySpendableBalanceByDenomRequest): Promise<_90.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _90.QueryTotalSupplyRequest): Promise<_90.QueryTotalSupplyResponse>;
                supplyOf(request: _90.QuerySupplyOfRequest): Promise<_90.QuerySupplyOfResponse>;
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                denomMetadata(request: _90.QueryDenomMetadataRequest): Promise<_90.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _90.QueryDenomsMetadataRequest): Promise<_90.QueryDenomsMetadataResponse>;
                denomOwners(request: _90.QueryDenomOwnersRequest): Promise<_90.QueryDenomOwnersResponse>;
                sendEnabled(request: _90.QuerySendEnabledRequest): Promise<_90.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _326.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _91.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _91.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _91.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _91.MsgSend): {
                        typeUrl: string;
                        value: _91.MsgSend;
                    };
                    multiSend(value: _91.MsgMultiSend): {
                        typeUrl: string;
                        value: _91.MsgMultiSend;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                    setSendEnabled(value: _91.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _91.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _91.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _91.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _91.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _91.MsgSend): {
                        typeUrl: string;
                        value: _91.MsgSend;
                    };
                    multiSend(value: _91.MsgMultiSend): {
                        typeUrl: string;
                        value: _91.MsgMultiSend;
                    };
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                    setSendEnabled(value: _91.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _91.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _91.MsgSend) => _91.MsgSendAmino;
                    fromAmino: (object: _91.MsgSendAmino) => _91.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _91.MsgMultiSend) => _91.MsgMultiSendAmino;
                    fromAmino: (object: _91.MsgMultiSendAmino) => _91.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateParams) => _91.MsgUpdateParamsAmino;
                    fromAmino: (object: _91.MsgUpdateParamsAmino) => _91.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _91.MsgSetSendEnabled) => _91.MsgSetSendEnabledAmino;
                    fromAmino: (object: _91.MsgSetSendEnabledAmino) => _91.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _91.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgSend;
                fromPartial(object: Partial<_91.MsgSend>): _91.MsgSend;
                fromAmino(object: _91.MsgSendAmino): _91.MsgSend;
                toAmino(message: _91.MsgSend): _91.MsgSendAmino;
                fromAminoMsg(object: _91.MsgSendAminoMsg): _91.MsgSend;
                toAminoMsg(message: _91.MsgSend): _91.MsgSendAminoMsg;
                fromProtoMsg(message: _91.MsgSendProtoMsg): _91.MsgSend;
                toProto(message: _91.MsgSend): Uint8Array;
                toProtoMsg(message: _91.MsgSend): _91.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _91.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgSendResponse;
                fromPartial(_: Partial<_91.MsgSendResponse>): _91.MsgSendResponse;
                fromAmino(_: _91.MsgSendResponseAmino): _91.MsgSendResponse;
                toAmino(_: _91.MsgSendResponse): _91.MsgSendResponseAmino;
                fromAminoMsg(object: _91.MsgSendResponseAminoMsg): _91.MsgSendResponse;
                toAminoMsg(message: _91.MsgSendResponse): _91.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _91.MsgSendResponseProtoMsg): _91.MsgSendResponse;
                toProto(message: _91.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _91.MsgSendResponse): _91.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _91.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgMultiSend;
                fromPartial(object: Partial<_91.MsgMultiSend>): _91.MsgMultiSend;
                fromAmino(object: _91.MsgMultiSendAmino): _91.MsgMultiSend;
                toAmino(message: _91.MsgMultiSend): _91.MsgMultiSendAmino;
                fromAminoMsg(object: _91.MsgMultiSendAminoMsg): _91.MsgMultiSend;
                toAminoMsg(message: _91.MsgMultiSend): _91.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _91.MsgMultiSendProtoMsg): _91.MsgMultiSend;
                toProto(message: _91.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _91.MsgMultiSend): _91.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _91.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgMultiSendResponse;
                fromPartial(_: Partial<_91.MsgMultiSendResponse>): _91.MsgMultiSendResponse;
                fromAmino(_: _91.MsgMultiSendResponseAmino): _91.MsgMultiSendResponse;
                toAmino(_: _91.MsgMultiSendResponse): _91.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _91.MsgMultiSendResponseAminoMsg): _91.MsgMultiSendResponse;
                toAminoMsg(message: _91.MsgMultiSendResponse): _91.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _91.MsgMultiSendResponseProtoMsg): _91.MsgMultiSendResponse;
                toProto(message: _91.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _91.MsgMultiSendResponse): _91.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _91.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgUpdateParams;
                fromPartial(object: Partial<_91.MsgUpdateParams>): _91.MsgUpdateParams;
                fromAmino(object: _91.MsgUpdateParamsAmino): _91.MsgUpdateParams;
                toAmino(message: _91.MsgUpdateParams): _91.MsgUpdateParamsAmino;
                fromAminoMsg(object: _91.MsgUpdateParamsAminoMsg): _91.MsgUpdateParams;
                toAminoMsg(message: _91.MsgUpdateParams): _91.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateParamsProtoMsg): _91.MsgUpdateParams;
                toProto(message: _91.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateParams): _91.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_91.MsgUpdateParamsResponse>): _91.MsgUpdateParamsResponse;
                fromAmino(_: _91.MsgUpdateParamsResponseAmino): _91.MsgUpdateParamsResponse;
                toAmino(_: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateParamsResponseAminoMsg): _91.MsgUpdateParamsResponse;
                toAminoMsg(message: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateParamsResponseProtoMsg): _91.MsgUpdateParamsResponse;
                toProto(message: _91.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _91.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgSetSendEnabled;
                fromPartial(object: Partial<_91.MsgSetSendEnabled>): _91.MsgSetSendEnabled;
                fromAmino(object: _91.MsgSetSendEnabledAmino): _91.MsgSetSendEnabled;
                toAmino(message: _91.MsgSetSendEnabled): _91.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _91.MsgSetSendEnabledAminoMsg): _91.MsgSetSendEnabled;
                toAminoMsg(message: _91.MsgSetSendEnabled): _91.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _91.MsgSetSendEnabledProtoMsg): _91.MsgSetSendEnabled;
                toProto(message: _91.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _91.MsgSetSendEnabled): _91.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _91.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_91.MsgSetSendEnabledResponse>): _91.MsgSetSendEnabledResponse;
                fromAmino(_: _91.MsgSetSendEnabledResponseAmino): _91.MsgSetSendEnabledResponse;
                toAmino(_: _91.MsgSetSendEnabledResponse): _91.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _91.MsgSetSendEnabledResponseAminoMsg): _91.MsgSetSendEnabledResponse;
                toAminoMsg(message: _91.MsgSetSendEnabledResponse): _91.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _91.MsgSetSendEnabledResponseProtoMsg): _91.MsgSetSendEnabledResponse;
                toProto(message: _91.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _91.MsgSetSendEnabledResponse): _91.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _90.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryBalanceRequest;
                fromPartial(object: Partial<_90.QueryBalanceRequest>): _90.QueryBalanceRequest;
                fromAmino(object: _90.QueryBalanceRequestAmino): _90.QueryBalanceRequest;
                toAmino(message: _90.QueryBalanceRequest): _90.QueryBalanceRequestAmino;
                fromAminoMsg(object: _90.QueryBalanceRequestAminoMsg): _90.QueryBalanceRequest;
                toAminoMsg(message: _90.QueryBalanceRequest): _90.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _90.QueryBalanceRequestProtoMsg): _90.QueryBalanceRequest;
                toProto(message: _90.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _90.QueryBalanceRequest): _90.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _90.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryBalanceResponse;
                fromPartial(object: Partial<_90.QueryBalanceResponse>): _90.QueryBalanceResponse;
                fromAmino(object: _90.QueryBalanceResponseAmino): _90.QueryBalanceResponse;
                toAmino(message: _90.QueryBalanceResponse): _90.QueryBalanceResponseAmino;
                fromAminoMsg(object: _90.QueryBalanceResponseAminoMsg): _90.QueryBalanceResponse;
                toAminoMsg(message: _90.QueryBalanceResponse): _90.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _90.QueryBalanceResponseProtoMsg): _90.QueryBalanceResponse;
                toProto(message: _90.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _90.QueryBalanceResponse): _90.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _90.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllBalancesRequest;
                fromPartial(object: Partial<_90.QueryAllBalancesRequest>): _90.QueryAllBalancesRequest;
                fromAmino(object: _90.QueryAllBalancesRequestAmino): _90.QueryAllBalancesRequest;
                toAmino(message: _90.QueryAllBalancesRequest): _90.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _90.QueryAllBalancesRequestAminoMsg): _90.QueryAllBalancesRequest;
                toAminoMsg(message: _90.QueryAllBalancesRequest): _90.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAllBalancesRequestProtoMsg): _90.QueryAllBalancesRequest;
                toProto(message: _90.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAllBalancesRequest): _90.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _90.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAllBalancesResponse;
                fromPartial(object: Partial<_90.QueryAllBalancesResponse>): _90.QueryAllBalancesResponse;
                fromAmino(object: _90.QueryAllBalancesResponseAmino): _90.QueryAllBalancesResponse;
                toAmino(message: _90.QueryAllBalancesResponse): _90.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _90.QueryAllBalancesResponseAminoMsg): _90.QueryAllBalancesResponse;
                toAminoMsg(message: _90.QueryAllBalancesResponse): _90.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAllBalancesResponseProtoMsg): _90.QueryAllBalancesResponse;
                toProto(message: _90.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAllBalancesResponse): _90.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _90.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_90.QuerySpendableBalancesRequest>): _90.QuerySpendableBalancesRequest;
                fromAmino(object: _90.QuerySpendableBalancesRequestAmino): _90.QuerySpendableBalancesRequest;
                toAmino(message: _90.QuerySpendableBalancesRequest): _90.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _90.QuerySpendableBalancesRequestAminoMsg): _90.QuerySpendableBalancesRequest;
                toAminoMsg(message: _90.QuerySpendableBalancesRequest): _90.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _90.QuerySpendableBalancesRequestProtoMsg): _90.QuerySpendableBalancesRequest;
                toProto(message: _90.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _90.QuerySpendableBalancesRequest): _90.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _90.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_90.QuerySpendableBalancesResponse>): _90.QuerySpendableBalancesResponse;
                fromAmino(object: _90.QuerySpendableBalancesResponseAmino): _90.QuerySpendableBalancesResponse;
                toAmino(message: _90.QuerySpendableBalancesResponse): _90.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _90.QuerySpendableBalancesResponseAminoMsg): _90.QuerySpendableBalancesResponse;
                toAminoMsg(message: _90.QuerySpendableBalancesResponse): _90.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _90.QuerySpendableBalancesResponseProtoMsg): _90.QuerySpendableBalancesResponse;
                toProto(message: _90.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _90.QuerySpendableBalancesResponse): _90.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _90.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_90.QuerySpendableBalanceByDenomRequest>): _90.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _90.QuerySpendableBalanceByDenomRequestAmino): _90.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _90.QuerySpendableBalanceByDenomRequest): _90.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _90.QuerySpendableBalanceByDenomRequestAminoMsg): _90.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _90.QuerySpendableBalanceByDenomRequest): _90.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _90.QuerySpendableBalanceByDenomRequestProtoMsg): _90.QuerySpendableBalanceByDenomRequest;
                toProto(message: _90.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _90.QuerySpendableBalanceByDenomRequest): _90.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _90.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_90.QuerySpendableBalanceByDenomResponse>): _90.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _90.QuerySpendableBalanceByDenomResponseAmino): _90.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _90.QuerySpendableBalanceByDenomResponse): _90.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _90.QuerySpendableBalanceByDenomResponseAminoMsg): _90.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _90.QuerySpendableBalanceByDenomResponse): _90.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _90.QuerySpendableBalanceByDenomResponseProtoMsg): _90.QuerySpendableBalanceByDenomResponse;
                toProto(message: _90.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _90.QuerySpendableBalanceByDenomResponse): _90.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _90.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_90.QueryTotalSupplyRequest>): _90.QueryTotalSupplyRequest;
                fromAmino(object: _90.QueryTotalSupplyRequestAmino): _90.QueryTotalSupplyRequest;
                toAmino(message: _90.QueryTotalSupplyRequest): _90.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _90.QueryTotalSupplyRequestAminoMsg): _90.QueryTotalSupplyRequest;
                toAminoMsg(message: _90.QueryTotalSupplyRequest): _90.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _90.QueryTotalSupplyRequestProtoMsg): _90.QueryTotalSupplyRequest;
                toProto(message: _90.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _90.QueryTotalSupplyRequest): _90.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _90.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_90.QueryTotalSupplyResponse>): _90.QueryTotalSupplyResponse;
                fromAmino(object: _90.QueryTotalSupplyResponseAmino): _90.QueryTotalSupplyResponse;
                toAmino(message: _90.QueryTotalSupplyResponse): _90.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _90.QueryTotalSupplyResponseAminoMsg): _90.QueryTotalSupplyResponse;
                toAminoMsg(message: _90.QueryTotalSupplyResponse): _90.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _90.QueryTotalSupplyResponseProtoMsg): _90.QueryTotalSupplyResponse;
                toProto(message: _90.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _90.QueryTotalSupplyResponse): _90.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _90.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySupplyOfRequest;
                fromPartial(object: Partial<_90.QuerySupplyOfRequest>): _90.QuerySupplyOfRequest;
                fromAmino(object: _90.QuerySupplyOfRequestAmino): _90.QuerySupplyOfRequest;
                toAmino(message: _90.QuerySupplyOfRequest): _90.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _90.QuerySupplyOfRequestAminoMsg): _90.QuerySupplyOfRequest;
                toAminoMsg(message: _90.QuerySupplyOfRequest): _90.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _90.QuerySupplyOfRequestProtoMsg): _90.QuerySupplyOfRequest;
                toProto(message: _90.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _90.QuerySupplyOfRequest): _90.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _90.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySupplyOfResponse;
                fromPartial(object: Partial<_90.QuerySupplyOfResponse>): _90.QuerySupplyOfResponse;
                fromAmino(object: _90.QuerySupplyOfResponseAmino): _90.QuerySupplyOfResponse;
                toAmino(message: _90.QuerySupplyOfResponse): _90.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _90.QuerySupplyOfResponseAminoMsg): _90.QuerySupplyOfResponse;
                toAminoMsg(message: _90.QuerySupplyOfResponse): _90.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _90.QuerySupplyOfResponseProtoMsg): _90.QuerySupplyOfResponse;
                toProto(message: _90.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _90.QuerySupplyOfResponse): _90.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _90.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryParamsRequest;
                fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
                fromAmino(_: _90.QueryParamsRequestAmino): _90.QueryParamsRequest;
                toAmino(_: _90.QueryParamsRequest): _90.QueryParamsRequestAmino;
                fromAminoMsg(object: _90.QueryParamsRequestAminoMsg): _90.QueryParamsRequest;
                toAminoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryParamsRequestProtoMsg): _90.QueryParamsRequest;
                toProto(message: _90.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _90.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryParamsResponse;
                fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
                fromAmino(object: _90.QueryParamsResponseAmino): _90.QueryParamsResponse;
                toAmino(message: _90.QueryParamsResponse): _90.QueryParamsResponseAmino;
                fromAminoMsg(object: _90.QueryParamsResponseAminoMsg): _90.QueryParamsResponse;
                toAminoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryParamsResponseProtoMsg): _90.QueryParamsResponse;
                toProto(message: _90.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _90.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_90.QueryDenomsMetadataRequest>): _90.QueryDenomsMetadataRequest;
                fromAmino(object: _90.QueryDenomsMetadataRequestAmino): _90.QueryDenomsMetadataRequest;
                toAmino(message: _90.QueryDenomsMetadataRequest): _90.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _90.QueryDenomsMetadataRequestAminoMsg): _90.QueryDenomsMetadataRequest;
                toAminoMsg(message: _90.QueryDenomsMetadataRequest): _90.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDenomsMetadataRequestProtoMsg): _90.QueryDenomsMetadataRequest;
                toProto(message: _90.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDenomsMetadataRequest): _90.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _90.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_90.QueryDenomsMetadataResponse>): _90.QueryDenomsMetadataResponse;
                fromAmino(object: _90.QueryDenomsMetadataResponseAmino): _90.QueryDenomsMetadataResponse;
                toAmino(message: _90.QueryDenomsMetadataResponse): _90.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _90.QueryDenomsMetadataResponseAminoMsg): _90.QueryDenomsMetadataResponse;
                toAminoMsg(message: _90.QueryDenomsMetadataResponse): _90.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDenomsMetadataResponseProtoMsg): _90.QueryDenomsMetadataResponse;
                toProto(message: _90.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDenomsMetadataResponse): _90.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _90.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_90.QueryDenomMetadataRequest>): _90.QueryDenomMetadataRequest;
                fromAmino(object: _90.QueryDenomMetadataRequestAmino): _90.QueryDenomMetadataRequest;
                toAmino(message: _90.QueryDenomMetadataRequest): _90.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _90.QueryDenomMetadataRequestAminoMsg): _90.QueryDenomMetadataRequest;
                toAminoMsg(message: _90.QueryDenomMetadataRequest): _90.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDenomMetadataRequestProtoMsg): _90.QueryDenomMetadataRequest;
                toProto(message: _90.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDenomMetadataRequest): _90.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _90.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_90.QueryDenomMetadataResponse>): _90.QueryDenomMetadataResponse;
                fromAmino(object: _90.QueryDenomMetadataResponseAmino): _90.QueryDenomMetadataResponse;
                toAmino(message: _90.QueryDenomMetadataResponse): _90.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _90.QueryDenomMetadataResponseAminoMsg): _90.QueryDenomMetadataResponse;
                toAminoMsg(message: _90.QueryDenomMetadataResponse): _90.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDenomMetadataResponseProtoMsg): _90.QueryDenomMetadataResponse;
                toProto(message: _90.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDenomMetadataResponse): _90.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _90.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_90.QueryDenomOwnersRequest>): _90.QueryDenomOwnersRequest;
                fromAmino(object: _90.QueryDenomOwnersRequestAmino): _90.QueryDenomOwnersRequest;
                toAmino(message: _90.QueryDenomOwnersRequest): _90.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _90.QueryDenomOwnersRequestAminoMsg): _90.QueryDenomOwnersRequest;
                toAminoMsg(message: _90.QueryDenomOwnersRequest): _90.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _90.QueryDenomOwnersRequestProtoMsg): _90.QueryDenomOwnersRequest;
                toProto(message: _90.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _90.QueryDenomOwnersRequest): _90.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _90.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.DenomOwner;
                fromPartial(object: Partial<_90.DenomOwner>): _90.DenomOwner;
                fromAmino(object: _90.DenomOwnerAmino): _90.DenomOwner;
                toAmino(message: _90.DenomOwner): _90.DenomOwnerAmino;
                fromAminoMsg(object: _90.DenomOwnerAminoMsg): _90.DenomOwner;
                toAminoMsg(message: _90.DenomOwner): _90.DenomOwnerAminoMsg;
                fromProtoMsg(message: _90.DenomOwnerProtoMsg): _90.DenomOwner;
                toProto(message: _90.DenomOwner): Uint8Array;
                toProtoMsg(message: _90.DenomOwner): _90.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _90.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_90.QueryDenomOwnersResponse>): _90.QueryDenomOwnersResponse;
                fromAmino(object: _90.QueryDenomOwnersResponseAmino): _90.QueryDenomOwnersResponse;
                toAmino(message: _90.QueryDenomOwnersResponse): _90.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _90.QueryDenomOwnersResponseAminoMsg): _90.QueryDenomOwnersResponse;
                toAminoMsg(message: _90.QueryDenomOwnersResponse): _90.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _90.QueryDenomOwnersResponseProtoMsg): _90.QueryDenomOwnersResponse;
                toProto(message: _90.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _90.QueryDenomOwnersResponse): _90.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _90.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySendEnabledRequest;
                fromPartial(object: Partial<_90.QuerySendEnabledRequest>): _90.QuerySendEnabledRequest;
                fromAmino(object: _90.QuerySendEnabledRequestAmino): _90.QuerySendEnabledRequest;
                toAmino(message: _90.QuerySendEnabledRequest): _90.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _90.QuerySendEnabledRequestAminoMsg): _90.QuerySendEnabledRequest;
                toAminoMsg(message: _90.QuerySendEnabledRequest): _90.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _90.QuerySendEnabledRequestProtoMsg): _90.QuerySendEnabledRequest;
                toProto(message: _90.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _90.QuerySendEnabledRequest): _90.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _90.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QuerySendEnabledResponse;
                fromPartial(object: Partial<_90.QuerySendEnabledResponse>): _90.QuerySendEnabledResponse;
                fromAmino(object: _90.QuerySendEnabledResponseAmino): _90.QuerySendEnabledResponse;
                toAmino(message: _90.QuerySendEnabledResponse): _90.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _90.QuerySendEnabledResponseAminoMsg): _90.QuerySendEnabledResponse;
                toAminoMsg(message: _90.QuerySendEnabledResponse): _90.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _90.QuerySendEnabledResponseProtoMsg): _90.QuerySendEnabledResponse;
                toProto(message: _90.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _90.QuerySendEnabledResponse): _90.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _89.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.GenesisState;
                fromPartial(object: Partial<_89.GenesisState>): _89.GenesisState;
                fromAmino(object: _89.GenesisStateAmino): _89.GenesisState;
                toAmino(message: _89.GenesisState): _89.GenesisStateAmino;
                fromAminoMsg(object: _89.GenesisStateAminoMsg): _89.GenesisState;
                toAminoMsg(message: _89.GenesisState): _89.GenesisStateAminoMsg;
                fromProtoMsg(message: _89.GenesisStateProtoMsg): _89.GenesisState;
                toProto(message: _89.GenesisState): Uint8Array;
                toProtoMsg(message: _89.GenesisState): _89.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _89.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Balance;
                fromPartial(object: Partial<_89.Balance>): _89.Balance;
                fromAmino(object: _89.BalanceAmino): _89.Balance;
                toAmino(message: _89.Balance): _89.BalanceAmino;
                fromAminoMsg(object: _89.BalanceAminoMsg): _89.Balance;
                toAminoMsg(message: _89.Balance): _89.BalanceAminoMsg;
                fromProtoMsg(message: _89.BalanceProtoMsg): _89.Balance;
                toProto(message: _89.Balance): Uint8Array;
                toProtoMsg(message: _89.Balance): _89.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _88.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _88.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.SendEnabled;
                fromPartial(object: Partial<_88.SendEnabled>): _88.SendEnabled;
                fromAmino(object: _88.SendEnabledAmino): _88.SendEnabled;
                toAmino(message: _88.SendEnabled): _88.SendEnabledAmino;
                fromAminoMsg(object: _88.SendEnabledAminoMsg): _88.SendEnabled;
                toAminoMsg(message: _88.SendEnabled): _88.SendEnabledAminoMsg;
                fromProtoMsg(message: _88.SendEnabledProtoMsg): _88.SendEnabled;
                toProto(message: _88.SendEnabled): Uint8Array;
                toProtoMsg(message: _88.SendEnabled): _88.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _88.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Input;
                fromPartial(object: Partial<_88.Input>): _88.Input;
                fromAmino(object: _88.InputAmino): _88.Input;
                toAmino(message: _88.Input): _88.InputAmino;
                fromAminoMsg(object: _88.InputAminoMsg): _88.Input;
                toAminoMsg(message: _88.Input): _88.InputAminoMsg;
                fromProtoMsg(message: _88.InputProtoMsg): _88.Input;
                toProto(message: _88.Input): Uint8Array;
                toProtoMsg(message: _88.Input): _88.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _88.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Output;
                fromPartial(object: Partial<_88.Output>): _88.Output;
                fromAmino(object: _88.OutputAmino): _88.Output;
                toAmino(message: _88.Output): _88.OutputAmino;
                fromAminoMsg(object: _88.OutputAminoMsg): _88.Output;
                toAminoMsg(message: _88.Output): _88.OutputAminoMsg;
                fromProtoMsg(message: _88.OutputProtoMsg): _88.Output;
                toProto(message: _88.Output): Uint8Array;
                toProtoMsg(message: _88.Output): _88.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _88.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Supply;
                fromPartial(object: Partial<_88.Supply>): _88.Supply;
                fromAmino(object: _88.SupplyAmino): _88.Supply;
                toAmino(message: _88.Supply): _88.SupplyAmino;
                fromAminoMsg(object: _88.SupplyAminoMsg): _88.Supply;
                toAminoMsg(message: _88.Supply): _88.SupplyAminoMsg;
                fromProtoMsg(message: _88.SupplyProtoMsg): _88.Supply;
                toProto(message: _88.Supply): Uint8Array;
                toProtoMsg(message: _88.Supply): _88.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _88.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.DenomUnit;
                fromPartial(object: Partial<_88.DenomUnit>): _88.DenomUnit;
                fromAmino(object: _88.DenomUnitAmino): _88.DenomUnit;
                toAmino(message: _88.DenomUnit): _88.DenomUnitAmino;
                fromAminoMsg(object: _88.DenomUnitAminoMsg): _88.DenomUnit;
                toAminoMsg(message: _88.DenomUnit): _88.DenomUnitAminoMsg;
                fromProtoMsg(message: _88.DenomUnitProtoMsg): _88.DenomUnit;
                toProto(message: _88.DenomUnit): Uint8Array;
                toProtoMsg(message: _88.DenomUnit): _88.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _88.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Metadata;
                fromPartial(object: Partial<_88.Metadata>): _88.Metadata;
                fromAmino(object: _88.MetadataAmino): _88.Metadata;
                toAmino(message: _88.Metadata): _88.MetadataAmino;
                fromAminoMsg(object: _88.MetadataAminoMsg): _88.Metadata;
                toAminoMsg(message: _88.Metadata): _88.MetadataAminoMsg;
                fromProtoMsg(message: _88.MetadataProtoMsg): _88.Metadata;
                toProto(message: _88.Metadata): Uint8Array;
                toProtoMsg(message: _88.Metadata): _88.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _87.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.SendAuthorization;
                fromPartial(object: Partial<_87.SendAuthorization>): _87.SendAuthorization;
                fromAmino(object: _87.SendAuthorizationAmino): _87.SendAuthorization;
                toAmino(message: _87.SendAuthorization): _87.SendAuthorizationAmino;
                fromAminoMsg(object: _87.SendAuthorizationAminoMsg): _87.SendAuthorization;
                toAminoMsg(message: _87.SendAuthorization): _87.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _87.SendAuthorizationProtoMsg): _87.SendAuthorization;
                toProto(message: _87.SendAuthorization): Uint8Array;
                toProtoMsg(message: _87.SendAuthorization): _87.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _92.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.TxResponse;
                    fromPartial(object: Partial<_92.TxResponse>): _92.TxResponse;
                    fromAmino(object: _92.TxResponseAmino): _92.TxResponse;
                    toAmino(message: _92.TxResponse): _92.TxResponseAmino;
                    fromAminoMsg(object: _92.TxResponseAminoMsg): _92.TxResponse;
                    toAminoMsg(message: _92.TxResponse): _92.TxResponseAminoMsg;
                    fromProtoMsg(message: _92.TxResponseProtoMsg): _92.TxResponse;
                    toProto(message: _92.TxResponse): Uint8Array;
                    toProtoMsg(message: _92.TxResponse): _92.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _92.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.ABCIMessageLog;
                    fromPartial(object: Partial<_92.ABCIMessageLog>): _92.ABCIMessageLog;
                    fromAmino(object: _92.ABCIMessageLogAmino): _92.ABCIMessageLog;
                    toAmino(message: _92.ABCIMessageLog): _92.ABCIMessageLogAmino;
                    fromAminoMsg(object: _92.ABCIMessageLogAminoMsg): _92.ABCIMessageLog;
                    toAminoMsg(message: _92.ABCIMessageLog): _92.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _92.ABCIMessageLogProtoMsg): _92.ABCIMessageLog;
                    toProto(message: _92.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _92.ABCIMessageLog): _92.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _92.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.StringEvent;
                    fromPartial(object: Partial<_92.StringEvent>): _92.StringEvent;
                    fromAmino(object: _92.StringEventAmino): _92.StringEvent;
                    toAmino(message: _92.StringEvent): _92.StringEventAmino;
                    fromAminoMsg(object: _92.StringEventAminoMsg): _92.StringEvent;
                    toAminoMsg(message: _92.StringEvent): _92.StringEventAminoMsg;
                    fromProtoMsg(message: _92.StringEventProtoMsg): _92.StringEvent;
                    toProto(message: _92.StringEvent): Uint8Array;
                    toProtoMsg(message: _92.StringEvent): _92.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _92.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.Attribute;
                    fromPartial(object: Partial<_92.Attribute>): _92.Attribute;
                    fromAmino(object: _92.AttributeAmino): _92.Attribute;
                    toAmino(message: _92.Attribute): _92.AttributeAmino;
                    fromAminoMsg(object: _92.AttributeAminoMsg): _92.Attribute;
                    toAminoMsg(message: _92.Attribute): _92.AttributeAminoMsg;
                    fromProtoMsg(message: _92.AttributeProtoMsg): _92.Attribute;
                    toProto(message: _92.Attribute): Uint8Array;
                    toProtoMsg(message: _92.Attribute): _92.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _92.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.GasInfo;
                    fromPartial(object: Partial<_92.GasInfo>): _92.GasInfo;
                    fromAmino(object: _92.GasInfoAmino): _92.GasInfo;
                    toAmino(message: _92.GasInfo): _92.GasInfoAmino;
                    fromAminoMsg(object: _92.GasInfoAminoMsg): _92.GasInfo;
                    toAminoMsg(message: _92.GasInfo): _92.GasInfoAminoMsg;
                    fromProtoMsg(message: _92.GasInfoProtoMsg): _92.GasInfo;
                    toProto(message: _92.GasInfo): Uint8Array;
                    toProtoMsg(message: _92.GasInfo): _92.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _92.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.Result;
                    fromPartial(object: Partial<_92.Result>): _92.Result;
                    fromAmino(object: _92.ResultAmino): _92.Result;
                    toAmino(message: _92.Result): _92.ResultAmino;
                    fromAminoMsg(object: _92.ResultAminoMsg): _92.Result;
                    toAminoMsg(message: _92.Result): _92.ResultAminoMsg;
                    fromProtoMsg(message: _92.ResultProtoMsg): _92.Result;
                    toProto(message: _92.Result): Uint8Array;
                    toProtoMsg(message: _92.Result): _92.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _92.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.SimulationResponse;
                    fromPartial(object: Partial<_92.SimulationResponse>): _92.SimulationResponse;
                    fromAmino(object: _92.SimulationResponseAmino): _92.SimulationResponse;
                    toAmino(message: _92.SimulationResponse): _92.SimulationResponseAmino;
                    fromAminoMsg(object: _92.SimulationResponseAminoMsg): _92.SimulationResponse;
                    toAminoMsg(message: _92.SimulationResponse): _92.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _92.SimulationResponseProtoMsg): _92.SimulationResponse;
                    toProto(message: _92.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _92.SimulationResponse): _92.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _92.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.MsgData;
                    fromPartial(object: Partial<_92.MsgData>): _92.MsgData;
                    fromAmino(object: _92.MsgDataAmino): _92.MsgData;
                    toAmino(message: _92.MsgData): _92.MsgDataAmino;
                    fromAminoMsg(object: _92.MsgDataAminoMsg): _92.MsgData;
                    toAminoMsg(message: _92.MsgData): _92.MsgDataAminoMsg;
                    fromProtoMsg(message: _92.MsgDataProtoMsg): _92.MsgData;
                    toProto(message: _92.MsgData): Uint8Array;
                    toProtoMsg(message: _92.MsgData): _92.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _92.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.TxMsgData;
                    fromPartial(object: Partial<_92.TxMsgData>): _92.TxMsgData;
                    fromAmino(object: _92.TxMsgDataAmino): _92.TxMsgData;
                    toAmino(message: _92.TxMsgData): _92.TxMsgDataAmino;
                    fromAminoMsg(object: _92.TxMsgDataAminoMsg): _92.TxMsgData;
                    toAminoMsg(message: _92.TxMsgData): _92.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _92.TxMsgDataProtoMsg): _92.TxMsgData;
                    toProto(message: _92.TxMsgData): Uint8Array;
                    toProtoMsg(message: _92.TxMsgData): _92.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _92.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.SearchTxsResult;
                    fromPartial(object: Partial<_92.SearchTxsResult>): _92.SearchTxsResult;
                    fromAmino(object: _92.SearchTxsResultAmino): _92.SearchTxsResult;
                    toAmino(message: _92.SearchTxsResult): _92.SearchTxsResultAmino;
                    fromAminoMsg(object: _92.SearchTxsResultAminoMsg): _92.SearchTxsResult;
                    toAminoMsg(message: _92.SearchTxsResult): _92.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _92.SearchTxsResultProtoMsg): _92.SearchTxsResult;
                    toProto(message: _92.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _92.SearchTxsResult): _92.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _93.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.Pairs;
                    fromPartial(object: Partial<_93.Pairs>): _93.Pairs;
                    fromAmino(object: _93.PairsAmino): _93.Pairs;
                    toAmino(message: _93.Pairs): _93.PairsAmino;
                    fromAminoMsg(object: _93.PairsAminoMsg): _93.Pairs;
                    toAminoMsg(message: _93.Pairs): _93.PairsAminoMsg;
                    fromProtoMsg(message: _93.PairsProtoMsg): _93.Pairs;
                    toProto(message: _93.Pairs): Uint8Array;
                    toProtoMsg(message: _93.Pairs): _93.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _93.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.Pair;
                    fromPartial(object: Partial<_93.Pair>): _93.Pair;
                    fromAmino(object: _93.PairAmino): _93.Pair;
                    toAmino(message: _93.Pair): _93.PairAmino;
                    fromAminoMsg(object: _93.PairAminoMsg): _93.Pair;
                    toAminoMsg(message: _93.Pair): _93.PairAminoMsg;
                    fromProtoMsg(message: _93.PairProtoMsg): _93.Pair;
                    toProto(message: _93.Pair): Uint8Array;
                    toProtoMsg(message: _93.Pair): _93.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _348.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _94.ConfigRequest): Promise<_94.ConfigResponse>;
                };
                LCDQueryClient: typeof _327.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _94.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.ConfigRequest;
                    fromPartial(_: Partial<_94.ConfigRequest>): _94.ConfigRequest;
                    fromAmino(_: _94.ConfigRequestAmino): _94.ConfigRequest;
                    toAmino(_: _94.ConfigRequest): _94.ConfigRequestAmino;
                    fromAminoMsg(object: _94.ConfigRequestAminoMsg): _94.ConfigRequest;
                    toAminoMsg(message: _94.ConfigRequest): _94.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _94.ConfigRequestProtoMsg): _94.ConfigRequest;
                    toProto(message: _94.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _94.ConfigRequest): _94.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _94.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.ConfigResponse;
                    fromPartial(object: Partial<_94.ConfigResponse>): _94.ConfigResponse;
                    fromAmino(object: _94.ConfigResponseAmino): _94.ConfigResponse;
                    toAmino(message: _94.ConfigResponse): _94.ConfigResponseAmino;
                    fromAminoMsg(object: _94.ConfigResponseAminoMsg): _94.ConfigResponse;
                    toAminoMsg(message: _94.ConfigResponse): _94.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _94.ConfigResponseProtoMsg): _94.ConfigResponse;
                    toProto(message: _94.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _94.ConfigResponse): _94.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _95.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.PageRequest;
                    fromPartial(object: Partial<_95.PageRequest>): _95.PageRequest;
                    fromAmino(object: _95.PageRequestAmino): _95.PageRequest;
                    toAmino(message: _95.PageRequest): _95.PageRequestAmino;
                    fromAminoMsg(object: _95.PageRequestAminoMsg): _95.PageRequest;
                    toAminoMsg(message: _95.PageRequest): _95.PageRequestAminoMsg;
                    fromProtoMsg(message: _95.PageRequestProtoMsg): _95.PageRequest;
                    toProto(message: _95.PageRequest): Uint8Array;
                    toProtoMsg(message: _95.PageRequest): _95.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _95.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.PageResponse;
                    fromPartial(object: Partial<_95.PageResponse>): _95.PageResponse;
                    fromAmino(object: _95.PageResponseAmino): _95.PageResponse;
                    toAmino(message: _95.PageResponse): _95.PageResponseAmino;
                    fromAminoMsg(object: _95.PageResponseAminoMsg): _95.PageResponse;
                    toAminoMsg(message: _95.PageResponse): _95.PageResponseAminoMsg;
                    fromProtoMsg(message: _95.PageResponseProtoMsg): _95.PageResponse;
                    toProto(message: _95.PageResponse): Uint8Array;
                    toProtoMsg(message: _95.PageResponse): _95.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _96.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _96.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_96.ListAllInterfacesRequest>): _96.ListAllInterfacesRequest;
                    fromAmino(_: _96.ListAllInterfacesRequestAmino): _96.ListAllInterfacesRequest;
                    toAmino(_: _96.ListAllInterfacesRequest): _96.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _96.ListAllInterfacesRequestAminoMsg): _96.ListAllInterfacesRequest;
                    toAminoMsg(message: _96.ListAllInterfacesRequest): _96.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _96.ListAllInterfacesRequestProtoMsg): _96.ListAllInterfacesRequest;
                    toProto(message: _96.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _96.ListAllInterfacesRequest): _96.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _96.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_96.ListAllInterfacesResponse>): _96.ListAllInterfacesResponse;
                    fromAmino(object: _96.ListAllInterfacesResponseAmino): _96.ListAllInterfacesResponse;
                    toAmino(message: _96.ListAllInterfacesResponse): _96.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _96.ListAllInterfacesResponseAminoMsg): _96.ListAllInterfacesResponse;
                    toAminoMsg(message: _96.ListAllInterfacesResponse): _96.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _96.ListAllInterfacesResponseProtoMsg): _96.ListAllInterfacesResponse;
                    toProto(message: _96.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _96.ListAllInterfacesResponse): _96.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _96.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.ListImplementationsRequest;
                    fromPartial(object: Partial<_96.ListImplementationsRequest>): _96.ListImplementationsRequest;
                    fromAmino(object: _96.ListImplementationsRequestAmino): _96.ListImplementationsRequest;
                    toAmino(message: _96.ListImplementationsRequest): _96.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _96.ListImplementationsRequestAminoMsg): _96.ListImplementationsRequest;
                    toAminoMsg(message: _96.ListImplementationsRequest): _96.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _96.ListImplementationsRequestProtoMsg): _96.ListImplementationsRequest;
                    toProto(message: _96.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _96.ListImplementationsRequest): _96.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _96.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.ListImplementationsResponse;
                    fromPartial(object: Partial<_96.ListImplementationsResponse>): _96.ListImplementationsResponse;
                    fromAmino(object: _96.ListImplementationsResponseAmino): _96.ListImplementationsResponse;
                    toAmino(message: _96.ListImplementationsResponse): _96.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _96.ListImplementationsResponseAminoMsg): _96.ListImplementationsResponse;
                    toAminoMsg(message: _96.ListImplementationsResponse): _96.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _96.ListImplementationsResponseProtoMsg): _96.ListImplementationsResponse;
                    toProto(message: _96.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _96.ListImplementationsResponse): _96.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _97.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.AppDescriptor;
                    fromPartial(object: Partial<_97.AppDescriptor>): _97.AppDescriptor;
                    fromAmino(object: _97.AppDescriptorAmino): _97.AppDescriptor;
                    toAmino(message: _97.AppDescriptor): _97.AppDescriptorAmino;
                    fromAminoMsg(object: _97.AppDescriptorAminoMsg): _97.AppDescriptor;
                    toAminoMsg(message: _97.AppDescriptor): _97.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _97.AppDescriptorProtoMsg): _97.AppDescriptor;
                    toProto(message: _97.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _97.AppDescriptor): _97.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _97.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.TxDescriptor;
                    fromPartial(object: Partial<_97.TxDescriptor>): _97.TxDescriptor;
                    fromAmino(object: _97.TxDescriptorAmino): _97.TxDescriptor;
                    toAmino(message: _97.TxDescriptor): _97.TxDescriptorAmino;
                    fromAminoMsg(object: _97.TxDescriptorAminoMsg): _97.TxDescriptor;
                    toAminoMsg(message: _97.TxDescriptor): _97.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _97.TxDescriptorProtoMsg): _97.TxDescriptor;
                    toProto(message: _97.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _97.TxDescriptor): _97.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _97.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.AuthnDescriptor;
                    fromPartial(object: Partial<_97.AuthnDescriptor>): _97.AuthnDescriptor;
                    fromAmino(object: _97.AuthnDescriptorAmino): _97.AuthnDescriptor;
                    toAmino(message: _97.AuthnDescriptor): _97.AuthnDescriptorAmino;
                    fromAminoMsg(object: _97.AuthnDescriptorAminoMsg): _97.AuthnDescriptor;
                    toAminoMsg(message: _97.AuthnDescriptor): _97.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _97.AuthnDescriptorProtoMsg): _97.AuthnDescriptor;
                    toProto(message: _97.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _97.AuthnDescriptor): _97.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _97.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.SigningModeDescriptor;
                    fromPartial(object: Partial<_97.SigningModeDescriptor>): _97.SigningModeDescriptor;
                    fromAmino(object: _97.SigningModeDescriptorAmino): _97.SigningModeDescriptor;
                    toAmino(message: _97.SigningModeDescriptor): _97.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _97.SigningModeDescriptorAminoMsg): _97.SigningModeDescriptor;
                    toAminoMsg(message: _97.SigningModeDescriptor): _97.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _97.SigningModeDescriptorProtoMsg): _97.SigningModeDescriptor;
                    toProto(message: _97.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _97.SigningModeDescriptor): _97.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _97.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.ChainDescriptor;
                    fromPartial(object: Partial<_97.ChainDescriptor>): _97.ChainDescriptor;
                    fromAmino(object: _97.ChainDescriptorAmino): _97.ChainDescriptor;
                    toAmino(message: _97.ChainDescriptor): _97.ChainDescriptorAmino;
                    fromAminoMsg(object: _97.ChainDescriptorAminoMsg): _97.ChainDescriptor;
                    toAminoMsg(message: _97.ChainDescriptor): _97.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _97.ChainDescriptorProtoMsg): _97.ChainDescriptor;
                    toProto(message: _97.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _97.ChainDescriptor): _97.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _97.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.CodecDescriptor;
                    fromPartial(object: Partial<_97.CodecDescriptor>): _97.CodecDescriptor;
                    fromAmino(object: _97.CodecDescriptorAmino): _97.CodecDescriptor;
                    toAmino(message: _97.CodecDescriptor): _97.CodecDescriptorAmino;
                    fromAminoMsg(object: _97.CodecDescriptorAminoMsg): _97.CodecDescriptor;
                    toAminoMsg(message: _97.CodecDescriptor): _97.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _97.CodecDescriptorProtoMsg): _97.CodecDescriptor;
                    toProto(message: _97.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _97.CodecDescriptor): _97.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _97.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.InterfaceDescriptor;
                    fromPartial(object: Partial<_97.InterfaceDescriptor>): _97.InterfaceDescriptor;
                    fromAmino(object: _97.InterfaceDescriptorAmino): _97.InterfaceDescriptor;
                    toAmino(message: _97.InterfaceDescriptor): _97.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _97.InterfaceDescriptorAminoMsg): _97.InterfaceDescriptor;
                    toAminoMsg(message: _97.InterfaceDescriptor): _97.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _97.InterfaceDescriptorProtoMsg): _97.InterfaceDescriptor;
                    toProto(message: _97.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _97.InterfaceDescriptor): _97.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _97.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_97.InterfaceImplementerDescriptor>): _97.InterfaceImplementerDescriptor;
                    fromAmino(object: _97.InterfaceImplementerDescriptorAmino): _97.InterfaceImplementerDescriptor;
                    toAmino(message: _97.InterfaceImplementerDescriptor): _97.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _97.InterfaceImplementerDescriptorAminoMsg): _97.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _97.InterfaceImplementerDescriptor): _97.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _97.InterfaceImplementerDescriptorProtoMsg): _97.InterfaceImplementerDescriptor;
                    toProto(message: _97.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _97.InterfaceImplementerDescriptor): _97.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _97.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_97.InterfaceAcceptingMessageDescriptor>): _97.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _97.InterfaceAcceptingMessageDescriptorAmino): _97.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _97.InterfaceAcceptingMessageDescriptor): _97.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _97.InterfaceAcceptingMessageDescriptorAminoMsg): _97.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _97.InterfaceAcceptingMessageDescriptor): _97.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _97.InterfaceAcceptingMessageDescriptorProtoMsg): _97.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _97.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _97.InterfaceAcceptingMessageDescriptor): _97.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _97.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.ConfigurationDescriptor;
                    fromPartial(object: Partial<_97.ConfigurationDescriptor>): _97.ConfigurationDescriptor;
                    fromAmino(object: _97.ConfigurationDescriptorAmino): _97.ConfigurationDescriptor;
                    toAmino(message: _97.ConfigurationDescriptor): _97.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _97.ConfigurationDescriptorAminoMsg): _97.ConfigurationDescriptor;
                    toAminoMsg(message: _97.ConfigurationDescriptor): _97.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _97.ConfigurationDescriptorProtoMsg): _97.ConfigurationDescriptor;
                    toProto(message: _97.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _97.ConfigurationDescriptor): _97.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _97.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.MsgDescriptor;
                    fromPartial(object: Partial<_97.MsgDescriptor>): _97.MsgDescriptor;
                    fromAmino(object: _97.MsgDescriptorAmino): _97.MsgDescriptor;
                    toAmino(message: _97.MsgDescriptor): _97.MsgDescriptorAmino;
                    fromAminoMsg(object: _97.MsgDescriptorAminoMsg): _97.MsgDescriptor;
                    toAminoMsg(message: _97.MsgDescriptor): _97.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _97.MsgDescriptorProtoMsg): _97.MsgDescriptor;
                    toProto(message: _97.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _97.MsgDescriptor): _97.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _97.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_97.GetAuthnDescriptorRequest>): _97.GetAuthnDescriptorRequest;
                    fromAmino(_: _97.GetAuthnDescriptorRequestAmino): _97.GetAuthnDescriptorRequest;
                    toAmino(_: _97.GetAuthnDescriptorRequest): _97.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _97.GetAuthnDescriptorRequestAminoMsg): _97.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _97.GetAuthnDescriptorRequest): _97.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _97.GetAuthnDescriptorRequestProtoMsg): _97.GetAuthnDescriptorRequest;
                    toProto(message: _97.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _97.GetAuthnDescriptorRequest): _97.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _97.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_97.GetAuthnDescriptorResponse>): _97.GetAuthnDescriptorResponse;
                    fromAmino(object: _97.GetAuthnDescriptorResponseAmino): _97.GetAuthnDescriptorResponse;
                    toAmino(message: _97.GetAuthnDescriptorResponse): _97.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _97.GetAuthnDescriptorResponseAminoMsg): _97.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _97.GetAuthnDescriptorResponse): _97.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _97.GetAuthnDescriptorResponseProtoMsg): _97.GetAuthnDescriptorResponse;
                    toProto(message: _97.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _97.GetAuthnDescriptorResponse): _97.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _97.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_97.GetChainDescriptorRequest>): _97.GetChainDescriptorRequest;
                    fromAmino(_: _97.GetChainDescriptorRequestAmino): _97.GetChainDescriptorRequest;
                    toAmino(_: _97.GetChainDescriptorRequest): _97.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _97.GetChainDescriptorRequestAminoMsg): _97.GetChainDescriptorRequest;
                    toAminoMsg(message: _97.GetChainDescriptorRequest): _97.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _97.GetChainDescriptorRequestProtoMsg): _97.GetChainDescriptorRequest;
                    toProto(message: _97.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _97.GetChainDescriptorRequest): _97.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _97.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_97.GetChainDescriptorResponse>): _97.GetChainDescriptorResponse;
                    fromAmino(object: _97.GetChainDescriptorResponseAmino): _97.GetChainDescriptorResponse;
                    toAmino(message: _97.GetChainDescriptorResponse): _97.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _97.GetChainDescriptorResponseAminoMsg): _97.GetChainDescriptorResponse;
                    toAminoMsg(message: _97.GetChainDescriptorResponse): _97.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _97.GetChainDescriptorResponseProtoMsg): _97.GetChainDescriptorResponse;
                    toProto(message: _97.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _97.GetChainDescriptorResponse): _97.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _97.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_97.GetCodecDescriptorRequest>): _97.GetCodecDescriptorRequest;
                    fromAmino(_: _97.GetCodecDescriptorRequestAmino): _97.GetCodecDescriptorRequest;
                    toAmino(_: _97.GetCodecDescriptorRequest): _97.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _97.GetCodecDescriptorRequestAminoMsg): _97.GetCodecDescriptorRequest;
                    toAminoMsg(message: _97.GetCodecDescriptorRequest): _97.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _97.GetCodecDescriptorRequestProtoMsg): _97.GetCodecDescriptorRequest;
                    toProto(message: _97.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _97.GetCodecDescriptorRequest): _97.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _97.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_97.GetCodecDescriptorResponse>): _97.GetCodecDescriptorResponse;
                    fromAmino(object: _97.GetCodecDescriptorResponseAmino): _97.GetCodecDescriptorResponse;
                    toAmino(message: _97.GetCodecDescriptorResponse): _97.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _97.GetCodecDescriptorResponseAminoMsg): _97.GetCodecDescriptorResponse;
                    toAminoMsg(message: _97.GetCodecDescriptorResponse): _97.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _97.GetCodecDescriptorResponseProtoMsg): _97.GetCodecDescriptorResponse;
                    toProto(message: _97.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _97.GetCodecDescriptorResponse): _97.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _97.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_97.GetConfigurationDescriptorRequest>): _97.GetConfigurationDescriptorRequest;
                    fromAmino(_: _97.GetConfigurationDescriptorRequestAmino): _97.GetConfigurationDescriptorRequest;
                    toAmino(_: _97.GetConfigurationDescriptorRequest): _97.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _97.GetConfigurationDescriptorRequestAminoMsg): _97.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _97.GetConfigurationDescriptorRequest): _97.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _97.GetConfigurationDescriptorRequestProtoMsg): _97.GetConfigurationDescriptorRequest;
                    toProto(message: _97.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _97.GetConfigurationDescriptorRequest): _97.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _97.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_97.GetConfigurationDescriptorResponse>): _97.GetConfigurationDescriptorResponse;
                    fromAmino(object: _97.GetConfigurationDescriptorResponseAmino): _97.GetConfigurationDescriptorResponse;
                    toAmino(message: _97.GetConfigurationDescriptorResponse): _97.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _97.GetConfigurationDescriptorResponseAminoMsg): _97.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _97.GetConfigurationDescriptorResponse): _97.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _97.GetConfigurationDescriptorResponseProtoMsg): _97.GetConfigurationDescriptorResponse;
                    toProto(message: _97.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _97.GetConfigurationDescriptorResponse): _97.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _97.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_97.GetQueryServicesDescriptorRequest>): _97.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _97.GetQueryServicesDescriptorRequestAmino): _97.GetQueryServicesDescriptorRequest;
                    toAmino(_: _97.GetQueryServicesDescriptorRequest): _97.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _97.GetQueryServicesDescriptorRequestAminoMsg): _97.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _97.GetQueryServicesDescriptorRequest): _97.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _97.GetQueryServicesDescriptorRequestProtoMsg): _97.GetQueryServicesDescriptorRequest;
                    toProto(message: _97.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _97.GetQueryServicesDescriptorRequest): _97.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _97.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_97.GetQueryServicesDescriptorResponse>): _97.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _97.GetQueryServicesDescriptorResponseAmino): _97.GetQueryServicesDescriptorResponse;
                    toAmino(message: _97.GetQueryServicesDescriptorResponse): _97.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _97.GetQueryServicesDescriptorResponseAminoMsg): _97.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _97.GetQueryServicesDescriptorResponse): _97.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _97.GetQueryServicesDescriptorResponseProtoMsg): _97.GetQueryServicesDescriptorResponse;
                    toProto(message: _97.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _97.GetQueryServicesDescriptorResponse): _97.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _97.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_97.GetTxDescriptorRequest>): _97.GetTxDescriptorRequest;
                    fromAmino(_: _97.GetTxDescriptorRequestAmino): _97.GetTxDescriptorRequest;
                    toAmino(_: _97.GetTxDescriptorRequest): _97.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _97.GetTxDescriptorRequestAminoMsg): _97.GetTxDescriptorRequest;
                    toAminoMsg(message: _97.GetTxDescriptorRequest): _97.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _97.GetTxDescriptorRequestProtoMsg): _97.GetTxDescriptorRequest;
                    toProto(message: _97.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _97.GetTxDescriptorRequest): _97.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _97.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_97.GetTxDescriptorResponse>): _97.GetTxDescriptorResponse;
                    fromAmino(object: _97.GetTxDescriptorResponseAmino): _97.GetTxDescriptorResponse;
                    toAmino(message: _97.GetTxDescriptorResponse): _97.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _97.GetTxDescriptorResponseAminoMsg): _97.GetTxDescriptorResponse;
                    toAminoMsg(message: _97.GetTxDescriptorResponse): _97.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _97.GetTxDescriptorResponseProtoMsg): _97.GetTxDescriptorResponse;
                    toProto(message: _97.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _97.GetTxDescriptorResponse): _97.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _97.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryServicesDescriptor;
                    fromPartial(object: Partial<_97.QueryServicesDescriptor>): _97.QueryServicesDescriptor;
                    fromAmino(object: _97.QueryServicesDescriptorAmino): _97.QueryServicesDescriptor;
                    toAmino(message: _97.QueryServicesDescriptor): _97.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _97.QueryServicesDescriptorAminoMsg): _97.QueryServicesDescriptor;
                    toAminoMsg(message: _97.QueryServicesDescriptor): _97.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _97.QueryServicesDescriptorProtoMsg): _97.QueryServicesDescriptor;
                    toProto(message: _97.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _97.QueryServicesDescriptor): _97.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _97.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryServiceDescriptor;
                    fromPartial(object: Partial<_97.QueryServiceDescriptor>): _97.QueryServiceDescriptor;
                    fromAmino(object: _97.QueryServiceDescriptorAmino): _97.QueryServiceDescriptor;
                    toAmino(message: _97.QueryServiceDescriptor): _97.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _97.QueryServiceDescriptorAminoMsg): _97.QueryServiceDescriptor;
                    toAminoMsg(message: _97.QueryServiceDescriptor): _97.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _97.QueryServiceDescriptorProtoMsg): _97.QueryServiceDescriptor;
                    toProto(message: _97.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _97.QueryServiceDescriptor): _97.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _97.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryMethodDescriptor;
                    fromPartial(object: Partial<_97.QueryMethodDescriptor>): _97.QueryMethodDescriptor;
                    fromAmino(object: _97.QueryMethodDescriptorAmino): _97.QueryMethodDescriptor;
                    toAmino(message: _97.QueryMethodDescriptor): _97.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _97.QueryMethodDescriptorAminoMsg): _97.QueryMethodDescriptor;
                    toAminoMsg(message: _97.QueryMethodDescriptor): _97.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _97.QueryMethodDescriptorProtoMsg): _97.QueryMethodDescriptor;
                    toProto(message: _97.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _97.QueryMethodDescriptor): _97.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _98.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.Snapshot;
                    fromPartial(object: Partial<_98.Snapshot>): _98.Snapshot;
                    fromAmino(object: _98.SnapshotAmino): _98.Snapshot;
                    toAmino(message: _98.Snapshot): _98.SnapshotAmino;
                    fromAminoMsg(object: _98.SnapshotAminoMsg): _98.Snapshot;
                    toAminoMsg(message: _98.Snapshot): _98.SnapshotAminoMsg;
                    fromProtoMsg(message: _98.SnapshotProtoMsg): _98.Snapshot;
                    toProto(message: _98.Snapshot): Uint8Array;
                    toProtoMsg(message: _98.Snapshot): _98.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _98.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.Metadata;
                    fromPartial(object: Partial<_98.Metadata>): _98.Metadata;
                    fromAmino(object: _98.MetadataAmino): _98.Metadata;
                    toAmino(message: _98.Metadata): _98.MetadataAmino;
                    fromAminoMsg(object: _98.MetadataAminoMsg): _98.Metadata;
                    toAminoMsg(message: _98.Metadata): _98.MetadataAminoMsg;
                    fromProtoMsg(message: _98.MetadataProtoMsg): _98.Metadata;
                    toProto(message: _98.Metadata): Uint8Array;
                    toProtoMsg(message: _98.Metadata): _98.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _98.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.SnapshotItem;
                    fromPartial(object: Partial<_98.SnapshotItem>): _98.SnapshotItem;
                    fromAmino(object: _98.SnapshotItemAmino): _98.SnapshotItem;
                    toAmino(message: _98.SnapshotItem): _98.SnapshotItemAmino;
                    fromAminoMsg(object: _98.SnapshotItemAminoMsg): _98.SnapshotItem;
                    toAminoMsg(message: _98.SnapshotItem): _98.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _98.SnapshotItemProtoMsg): _98.SnapshotItem;
                    toProto(message: _98.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _98.SnapshotItem): _98.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _98.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.SnapshotStoreItem;
                    fromPartial(object: Partial<_98.SnapshotStoreItem>): _98.SnapshotStoreItem;
                    fromAmino(object: _98.SnapshotStoreItemAmino): _98.SnapshotStoreItem;
                    toAmino(message: _98.SnapshotStoreItem): _98.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _98.SnapshotStoreItemAminoMsg): _98.SnapshotStoreItem;
                    toAminoMsg(message: _98.SnapshotStoreItem): _98.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _98.SnapshotStoreItemProtoMsg): _98.SnapshotStoreItem;
                    toProto(message: _98.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _98.SnapshotStoreItem): _98.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _98.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.SnapshotIAVLItem;
                    fromPartial(object: Partial<_98.SnapshotIAVLItem>): _98.SnapshotIAVLItem;
                    fromAmino(object: _98.SnapshotIAVLItemAmino): _98.SnapshotIAVLItem;
                    toAmino(message: _98.SnapshotIAVLItem): _98.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _98.SnapshotIAVLItemAminoMsg): _98.SnapshotIAVLItem;
                    toAminoMsg(message: _98.SnapshotIAVLItem): _98.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _98.SnapshotIAVLItemProtoMsg): _98.SnapshotIAVLItem;
                    toProto(message: _98.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _98.SnapshotIAVLItem): _98.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _98.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_98.SnapshotExtensionMeta>): _98.SnapshotExtensionMeta;
                    fromAmino(object: _98.SnapshotExtensionMetaAmino): _98.SnapshotExtensionMeta;
                    toAmino(message: _98.SnapshotExtensionMeta): _98.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _98.SnapshotExtensionMetaAminoMsg): _98.SnapshotExtensionMeta;
                    toAminoMsg(message: _98.SnapshotExtensionMeta): _98.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _98.SnapshotExtensionMetaProtoMsg): _98.SnapshotExtensionMeta;
                    toProto(message: _98.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _98.SnapshotExtensionMeta): _98.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _98.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_98.SnapshotExtensionPayload>): _98.SnapshotExtensionPayload;
                    fromAmino(object: _98.SnapshotExtensionPayloadAmino): _98.SnapshotExtensionPayload;
                    toAmino(message: _98.SnapshotExtensionPayload): _98.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _98.SnapshotExtensionPayloadAminoMsg): _98.SnapshotExtensionPayload;
                    toAminoMsg(message: _98.SnapshotExtensionPayload): _98.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _98.SnapshotExtensionPayloadProtoMsg): _98.SnapshotExtensionPayload;
                    toProto(message: _98.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _98.SnapshotExtensionPayload): _98.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _98.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.SnapshotKVItem;
                    fromPartial(object: Partial<_98.SnapshotKVItem>): _98.SnapshotKVItem;
                    fromAmino(object: _98.SnapshotKVItemAmino): _98.SnapshotKVItem;
                    toAmino(message: _98.SnapshotKVItem): _98.SnapshotKVItemAmino;
                    fromAminoMsg(object: _98.SnapshotKVItemAminoMsg): _98.SnapshotKVItem;
                    toAminoMsg(message: _98.SnapshotKVItem): _98.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _98.SnapshotKVItemProtoMsg): _98.SnapshotKVItem;
                    toProto(message: _98.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _98.SnapshotKVItem): _98.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _98.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.SnapshotSchema;
                    fromPartial(object: Partial<_98.SnapshotSchema>): _98.SnapshotSchema;
                    fromAmino(object: _98.SnapshotSchemaAmino): _98.SnapshotSchema;
                    toAmino(message: _98.SnapshotSchema): _98.SnapshotSchemaAmino;
                    fromAminoMsg(object: _98.SnapshotSchemaAminoMsg): _98.SnapshotSchema;
                    toAminoMsg(message: _98.SnapshotSchema): _98.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _98.SnapshotSchemaProtoMsg): _98.SnapshotSchema;
                    toProto(message: _98.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _98.SnapshotSchema): _98.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _100.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.StoreKVPair;
                    fromPartial(object: Partial<_100.StoreKVPair>): _100.StoreKVPair;
                    fromAmino(object: _100.StoreKVPairAmino): _100.StoreKVPair;
                    toAmino(message: _100.StoreKVPair): _100.StoreKVPairAmino;
                    fromAminoMsg(object: _100.StoreKVPairAminoMsg): _100.StoreKVPair;
                    toAminoMsg(message: _100.StoreKVPair): _100.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _100.StoreKVPairProtoMsg): _100.StoreKVPair;
                    toProto(message: _100.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _100.StoreKVPair): _100.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _100.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.BlockMetadata;
                    fromPartial(object: Partial<_100.BlockMetadata>): _100.BlockMetadata;
                    fromAmino(object: _100.BlockMetadataAmino): _100.BlockMetadata;
                    toAmino(message: _100.BlockMetadata): _100.BlockMetadataAmino;
                    fromAminoMsg(object: _100.BlockMetadataAminoMsg): _100.BlockMetadata;
                    toAminoMsg(message: _100.BlockMetadata): _100.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _100.BlockMetadataProtoMsg): _100.BlockMetadata;
                    toProto(message: _100.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _100.BlockMetadata): _100.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _100.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_100.BlockMetadata_DeliverTx>): _100.BlockMetadata_DeliverTx;
                    fromAmino(object: _100.BlockMetadata_DeliverTxAmino): _100.BlockMetadata_DeliverTx;
                    toAmino(message: _100.BlockMetadata_DeliverTx): _100.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _100.BlockMetadata_DeliverTxAminoMsg): _100.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _100.BlockMetadata_DeliverTx): _100.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _100.BlockMetadata_DeliverTxProtoMsg): _100.BlockMetadata_DeliverTx;
                    toProto(message: _100.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _100.BlockMetadata_DeliverTx): _100.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _99.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.CommitInfo;
                    fromPartial(object: Partial<_99.CommitInfo>): _99.CommitInfo;
                    fromAmino(object: _99.CommitInfoAmino): _99.CommitInfo;
                    toAmino(message: _99.CommitInfo): _99.CommitInfoAmino;
                    fromAminoMsg(object: _99.CommitInfoAminoMsg): _99.CommitInfo;
                    toAminoMsg(message: _99.CommitInfo): _99.CommitInfoAminoMsg;
                    fromProtoMsg(message: _99.CommitInfoProtoMsg): _99.CommitInfo;
                    toProto(message: _99.CommitInfo): Uint8Array;
                    toProtoMsg(message: _99.CommitInfo): _99.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _99.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.StoreInfo;
                    fromPartial(object: Partial<_99.StoreInfo>): _99.StoreInfo;
                    fromAmino(object: _99.StoreInfoAmino): _99.StoreInfo;
                    toAmino(message: _99.StoreInfo): _99.StoreInfoAmino;
                    fromAminoMsg(object: _99.StoreInfoAminoMsg): _99.StoreInfo;
                    toAminoMsg(message: _99.StoreInfo): _99.StoreInfoAminoMsg;
                    fromProtoMsg(message: _99.StoreInfoProtoMsg): _99.StoreInfo;
                    toProto(message: _99.StoreInfo): Uint8Array;
                    toProtoMsg(message: _99.StoreInfo): _99.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _99.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.CommitID;
                    fromPartial(object: Partial<_99.CommitID>): _99.CommitID;
                    fromAmino(object: _99.CommitIDAmino): _99.CommitID;
                    toAmino(message: _99.CommitID): _99.CommitIDAmino;
                    fromAminoMsg(object: _99.CommitIDAminoMsg): _99.CommitID;
                    toAminoMsg(message: _99.CommitID): _99.CommitIDAminoMsg;
                    fromProtoMsg(message: _99.CommitIDProtoMsg): _99.CommitID;
                    toProto(message: _99.CommitID): Uint8Array;
                    toProtoMsg(message: _99.CommitID): _99.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _349.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _101.GetNodeInfoRequest): Promise<_101.GetNodeInfoResponse>;
                    getSyncing(request?: _101.GetSyncingRequest): Promise<_101.GetSyncingResponse>;
                    getLatestBlock(request?: _101.GetLatestBlockRequest): Promise<_101.GetLatestBlockResponse>;
                    getBlockByHeight(request: _101.GetBlockByHeightRequest): Promise<_101.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _101.GetLatestValidatorSetRequest): Promise<_101.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _101.GetValidatorSetByHeightRequest): Promise<_101.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _101.ABCIQueryRequest): Promise<_101.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _328.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _102.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.Block;
                    fromPartial(object: Partial<_102.Block>): _102.Block;
                    fromAmino(object: _102.BlockAmino): _102.Block;
                    toAmino(message: _102.Block): _102.BlockAmino;
                    fromAminoMsg(object: _102.BlockAminoMsg): _102.Block;
                    toAminoMsg(message: _102.Block): _102.BlockAminoMsg;
                    fromProtoMsg(message: _102.BlockProtoMsg): _102.Block;
                    toProto(message: _102.Block): Uint8Array;
                    toProtoMsg(message: _102.Block): _102.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _102.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.Header;
                    fromPartial(object: Partial<_102.Header>): _102.Header;
                    fromAmino(object: _102.HeaderAmino): _102.Header;
                    toAmino(message: _102.Header): _102.HeaderAmino;
                    fromAminoMsg(object: _102.HeaderAminoMsg): _102.Header;
                    toAminoMsg(message: _102.Header): _102.HeaderAminoMsg;
                    fromProtoMsg(message: _102.HeaderProtoMsg): _102.Header;
                    toProto(message: _102.Header): Uint8Array;
                    toProtoMsg(message: _102.Header): _102.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _101.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_101.GetValidatorSetByHeightRequest>): _101.GetValidatorSetByHeightRequest;
                    fromAmino(object: _101.GetValidatorSetByHeightRequestAmino): _101.GetValidatorSetByHeightRequest;
                    toAmino(message: _101.GetValidatorSetByHeightRequest): _101.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _101.GetValidatorSetByHeightRequestAminoMsg): _101.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _101.GetValidatorSetByHeightRequest): _101.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _101.GetValidatorSetByHeightRequestProtoMsg): _101.GetValidatorSetByHeightRequest;
                    toProto(message: _101.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _101.GetValidatorSetByHeightRequest): _101.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _101.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_101.GetValidatorSetByHeightResponse>): _101.GetValidatorSetByHeightResponse;
                    fromAmino(object: _101.GetValidatorSetByHeightResponseAmino): _101.GetValidatorSetByHeightResponse;
                    toAmino(message: _101.GetValidatorSetByHeightResponse): _101.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _101.GetValidatorSetByHeightResponseAminoMsg): _101.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _101.GetValidatorSetByHeightResponse): _101.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _101.GetValidatorSetByHeightResponseProtoMsg): _101.GetValidatorSetByHeightResponse;
                    toProto(message: _101.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _101.GetValidatorSetByHeightResponse): _101.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _101.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_101.GetLatestValidatorSetRequest>): _101.GetLatestValidatorSetRequest;
                    fromAmino(object: _101.GetLatestValidatorSetRequestAmino): _101.GetLatestValidatorSetRequest;
                    toAmino(message: _101.GetLatestValidatorSetRequest): _101.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _101.GetLatestValidatorSetRequestAminoMsg): _101.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _101.GetLatestValidatorSetRequest): _101.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _101.GetLatestValidatorSetRequestProtoMsg): _101.GetLatestValidatorSetRequest;
                    toProto(message: _101.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _101.GetLatestValidatorSetRequest): _101.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _101.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_101.GetLatestValidatorSetResponse>): _101.GetLatestValidatorSetResponse;
                    fromAmino(object: _101.GetLatestValidatorSetResponseAmino): _101.GetLatestValidatorSetResponse;
                    toAmino(message: _101.GetLatestValidatorSetResponse): _101.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _101.GetLatestValidatorSetResponseAminoMsg): _101.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _101.GetLatestValidatorSetResponse): _101.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _101.GetLatestValidatorSetResponseProtoMsg): _101.GetLatestValidatorSetResponse;
                    toProto(message: _101.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _101.GetLatestValidatorSetResponse): _101.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _101.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.Validator;
                    fromPartial(object: Partial<_101.Validator>): _101.Validator;
                    fromAmino(object: _101.ValidatorAmino): _101.Validator;
                    toAmino(message: _101.Validator): _101.ValidatorAmino;
                    fromAminoMsg(object: _101.ValidatorAminoMsg): _101.Validator;
                    toAminoMsg(message: _101.Validator): _101.ValidatorAminoMsg;
                    fromProtoMsg(message: _101.ValidatorProtoMsg): _101.Validator;
                    toProto(message: _101.Validator): Uint8Array;
                    toProtoMsg(message: _101.Validator): _101.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _101.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_101.GetBlockByHeightRequest>): _101.GetBlockByHeightRequest;
                    fromAmino(object: _101.GetBlockByHeightRequestAmino): _101.GetBlockByHeightRequest;
                    toAmino(message: _101.GetBlockByHeightRequest): _101.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _101.GetBlockByHeightRequestAminoMsg): _101.GetBlockByHeightRequest;
                    toAminoMsg(message: _101.GetBlockByHeightRequest): _101.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _101.GetBlockByHeightRequestProtoMsg): _101.GetBlockByHeightRequest;
                    toProto(message: _101.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _101.GetBlockByHeightRequest): _101.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _101.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_101.GetBlockByHeightResponse>): _101.GetBlockByHeightResponse;
                    fromAmino(object: _101.GetBlockByHeightResponseAmino): _101.GetBlockByHeightResponse;
                    toAmino(message: _101.GetBlockByHeightResponse): _101.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _101.GetBlockByHeightResponseAminoMsg): _101.GetBlockByHeightResponse;
                    toAminoMsg(message: _101.GetBlockByHeightResponse): _101.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _101.GetBlockByHeightResponseProtoMsg): _101.GetBlockByHeightResponse;
                    toProto(message: _101.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _101.GetBlockByHeightResponse): _101.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _101.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.GetLatestBlockRequest;
                    fromPartial(_: Partial<_101.GetLatestBlockRequest>): _101.GetLatestBlockRequest;
                    fromAmino(_: _101.GetLatestBlockRequestAmino): _101.GetLatestBlockRequest;
                    toAmino(_: _101.GetLatestBlockRequest): _101.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _101.GetLatestBlockRequestAminoMsg): _101.GetLatestBlockRequest;
                    toAminoMsg(message: _101.GetLatestBlockRequest): _101.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _101.GetLatestBlockRequestProtoMsg): _101.GetLatestBlockRequest;
                    toProto(message: _101.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _101.GetLatestBlockRequest): _101.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _101.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetLatestBlockResponse;
                    fromPartial(object: Partial<_101.GetLatestBlockResponse>): _101.GetLatestBlockResponse;
                    fromAmino(object: _101.GetLatestBlockResponseAmino): _101.GetLatestBlockResponse;
                    toAmino(message: _101.GetLatestBlockResponse): _101.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _101.GetLatestBlockResponseAminoMsg): _101.GetLatestBlockResponse;
                    toAminoMsg(message: _101.GetLatestBlockResponse): _101.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _101.GetLatestBlockResponseProtoMsg): _101.GetLatestBlockResponse;
                    toProto(message: _101.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _101.GetLatestBlockResponse): _101.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _101.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.GetSyncingRequest;
                    fromPartial(_: Partial<_101.GetSyncingRequest>): _101.GetSyncingRequest;
                    fromAmino(_: _101.GetSyncingRequestAmino): _101.GetSyncingRequest;
                    toAmino(_: _101.GetSyncingRequest): _101.GetSyncingRequestAmino;
                    fromAminoMsg(object: _101.GetSyncingRequestAminoMsg): _101.GetSyncingRequest;
                    toAminoMsg(message: _101.GetSyncingRequest): _101.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _101.GetSyncingRequestProtoMsg): _101.GetSyncingRequest;
                    toProto(message: _101.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _101.GetSyncingRequest): _101.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _101.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetSyncingResponse;
                    fromPartial(object: Partial<_101.GetSyncingResponse>): _101.GetSyncingResponse;
                    fromAmino(object: _101.GetSyncingResponseAmino): _101.GetSyncingResponse;
                    toAmino(message: _101.GetSyncingResponse): _101.GetSyncingResponseAmino;
                    fromAminoMsg(object: _101.GetSyncingResponseAminoMsg): _101.GetSyncingResponse;
                    toAminoMsg(message: _101.GetSyncingResponse): _101.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _101.GetSyncingResponseProtoMsg): _101.GetSyncingResponse;
                    toProto(message: _101.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _101.GetSyncingResponse): _101.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _101.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.GetNodeInfoRequest;
                    fromPartial(_: Partial<_101.GetNodeInfoRequest>): _101.GetNodeInfoRequest;
                    fromAmino(_: _101.GetNodeInfoRequestAmino): _101.GetNodeInfoRequest;
                    toAmino(_: _101.GetNodeInfoRequest): _101.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _101.GetNodeInfoRequestAminoMsg): _101.GetNodeInfoRequest;
                    toAminoMsg(message: _101.GetNodeInfoRequest): _101.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _101.GetNodeInfoRequestProtoMsg): _101.GetNodeInfoRequest;
                    toProto(message: _101.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _101.GetNodeInfoRequest): _101.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _101.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GetNodeInfoResponse;
                    fromPartial(object: Partial<_101.GetNodeInfoResponse>): _101.GetNodeInfoResponse;
                    fromAmino(object: _101.GetNodeInfoResponseAmino): _101.GetNodeInfoResponse;
                    toAmino(message: _101.GetNodeInfoResponse): _101.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _101.GetNodeInfoResponseAminoMsg): _101.GetNodeInfoResponse;
                    toAminoMsg(message: _101.GetNodeInfoResponse): _101.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _101.GetNodeInfoResponseProtoMsg): _101.GetNodeInfoResponse;
                    toProto(message: _101.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _101.GetNodeInfoResponse): _101.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _101.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.VersionInfo;
                    fromPartial(object: Partial<_101.VersionInfo>): _101.VersionInfo;
                    fromAmino(object: _101.VersionInfoAmino): _101.VersionInfo;
                    toAmino(message: _101.VersionInfo): _101.VersionInfoAmino;
                    fromAminoMsg(object: _101.VersionInfoAminoMsg): _101.VersionInfo;
                    toAminoMsg(message: _101.VersionInfo): _101.VersionInfoAminoMsg;
                    fromProtoMsg(message: _101.VersionInfoProtoMsg): _101.VersionInfo;
                    toProto(message: _101.VersionInfo): Uint8Array;
                    toProtoMsg(message: _101.VersionInfo): _101.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _101.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.Module;
                    fromPartial(object: Partial<_101.Module>): _101.Module;
                    fromAmino(object: _101.ModuleAmino): _101.Module;
                    toAmino(message: _101.Module): _101.ModuleAmino;
                    fromAminoMsg(object: _101.ModuleAminoMsg): _101.Module;
                    toAminoMsg(message: _101.Module): _101.ModuleAminoMsg;
                    fromProtoMsg(message: _101.ModuleProtoMsg): _101.Module;
                    toProto(message: _101.Module): Uint8Array;
                    toProtoMsg(message: _101.Module): _101.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _101.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.ABCIQueryRequest;
                    fromPartial(object: Partial<_101.ABCIQueryRequest>): _101.ABCIQueryRequest;
                    fromAmino(object: _101.ABCIQueryRequestAmino): _101.ABCIQueryRequest;
                    toAmino(message: _101.ABCIQueryRequest): _101.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _101.ABCIQueryRequestAminoMsg): _101.ABCIQueryRequest;
                    toAminoMsg(message: _101.ABCIQueryRequest): _101.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _101.ABCIQueryRequestProtoMsg): _101.ABCIQueryRequest;
                    toProto(message: _101.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _101.ABCIQueryRequest): _101.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _101.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.ABCIQueryResponse;
                    fromPartial(object: Partial<_101.ABCIQueryResponse>): _101.ABCIQueryResponse;
                    fromAmino(object: _101.ABCIQueryResponseAmino): _101.ABCIQueryResponse;
                    toAmino(message: _101.ABCIQueryResponse): _101.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _101.ABCIQueryResponseAminoMsg): _101.ABCIQueryResponse;
                    toAminoMsg(message: _101.ABCIQueryResponse): _101.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _101.ABCIQueryResponseProtoMsg): _101.ABCIQueryResponse;
                    toProto(message: _101.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _101.ABCIQueryResponse): _101.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _101.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.ProofOp;
                    fromPartial(object: Partial<_101.ProofOp>): _101.ProofOp;
                    fromAmino(object: _101.ProofOpAmino): _101.ProofOp;
                    toAmino(message: _101.ProofOp): _101.ProofOpAmino;
                    fromAminoMsg(object: _101.ProofOpAminoMsg): _101.ProofOp;
                    toAminoMsg(message: _101.ProofOp): _101.ProofOpAminoMsg;
                    fromProtoMsg(message: _101.ProofOpProtoMsg): _101.ProofOp;
                    toProto(message: _101.ProofOp): Uint8Array;
                    toProtoMsg(message: _101.ProofOp): _101.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _101.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.ProofOps;
                    fromPartial(object: Partial<_101.ProofOps>): _101.ProofOps;
                    fromAmino(object: _101.ProofOpsAmino): _101.ProofOps;
                    toAmino(message: _101.ProofOps): _101.ProofOpsAmino;
                    fromAminoMsg(object: _101.ProofOpsAminoMsg): _101.ProofOps;
                    toAminoMsg(message: _101.ProofOps): _101.ProofOpsAminoMsg;
                    fromProtoMsg(message: _101.ProofOpsProtoMsg): _101.ProofOps;
                    toProto(message: _101.ProofOps): Uint8Array;
                    toProtoMsg(message: _101.ProofOps): _101.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _103.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Coin;
                fromPartial(object: Partial<_103.Coin>): _103.Coin;
                fromAmino(object: _103.CoinAmino): _103.Coin;
                toAmino(message: _103.Coin): _103.CoinAmino;
                fromAminoMsg(object: _103.CoinAminoMsg): _103.Coin;
                toAminoMsg(message: _103.Coin): _103.CoinAminoMsg;
                fromProtoMsg(message: _103.CoinProtoMsg): _103.Coin;
                toProto(message: _103.Coin): Uint8Array;
                toProtoMsg(message: _103.Coin): _103.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _103.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DecCoin;
                fromPartial(object: Partial<_103.DecCoin>): _103.DecCoin;
                fromAmino(object: _103.DecCoinAmino): _103.DecCoin;
                toAmino(message: _103.DecCoin): _103.DecCoinAmino;
                fromAminoMsg(object: _103.DecCoinAminoMsg): _103.DecCoin;
                toAminoMsg(message: _103.DecCoin): _103.DecCoinAminoMsg;
                fromProtoMsg(message: _103.DecCoinProtoMsg): _103.DecCoin;
                toProto(message: _103.DecCoin): Uint8Array;
                toProtoMsg(message: _103.DecCoin): _103.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _103.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.IntProto;
                fromPartial(object: Partial<_103.IntProto>): _103.IntProto;
                fromAmino(object: _103.IntProtoAmino): _103.IntProto;
                toAmino(message: _103.IntProto): _103.IntProtoAmino;
                fromAminoMsg(object: _103.IntProtoAminoMsg): _103.IntProto;
                toAminoMsg(message: _103.IntProto): _103.IntProtoAminoMsg;
                fromProtoMsg(message: _103.IntProtoProtoMsg): _103.IntProto;
                toProto(message: _103.IntProto): Uint8Array;
                toProtoMsg(message: _103.IntProto): _103.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _103.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DecProto;
                fromPartial(object: Partial<_103.DecProto>): _103.DecProto;
                fromAmino(object: _103.DecProtoAmino): _103.DecProto;
                toAmino(message: _103.DecProto): _103.DecProtoAmino;
                fromAminoMsg(object: _103.DecProtoAminoMsg): _103.DecProto;
                toAminoMsg(message: _103.DecProto): _103.DecProtoAminoMsg;
                fromProtoMsg(message: _103.DecProtoProtoMsg): _103.DecProto;
                toProto(message: _103.DecProto): Uint8Array;
                toProtoMsg(message: _103.DecProto): _103.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _104.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.Module;
                    fromPartial(object: Partial<_104.Module>): _104.Module;
                    fromAmino(object: _104.ModuleAmino): _104.Module;
                    toAmino(message: _104.Module): _104.ModuleAmino;
                    fromAminoMsg(object: _104.ModuleAminoMsg): _104.Module;
                    toAminoMsg(message: _104.Module): _104.ModuleAminoMsg;
                    fromProtoMsg(message: _104.ModuleProtoMsg): _104.Module;
                    toProto(message: _104.Module): Uint8Array;
                    toProtoMsg(message: _104.Module): _104.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _106.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GenesisOwners;
                fromPartial(object: Partial<_106.GenesisOwners>): _106.GenesisOwners;
                fromAmino(object: _106.GenesisOwnersAmino): _106.GenesisOwners;
                toAmino(message: _106.GenesisOwners): _106.GenesisOwnersAmino;
                fromAminoMsg(object: _106.GenesisOwnersAminoMsg): _106.GenesisOwners;
                toAminoMsg(message: _106.GenesisOwners): _106.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _106.GenesisOwnersProtoMsg): _106.GenesisOwners;
                toProto(message: _106.GenesisOwners): Uint8Array;
                toProtoMsg(message: _106.GenesisOwners): _106.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _105.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Capability;
                fromPartial(object: Partial<_105.Capability>): _105.Capability;
                fromAmino(object: _105.CapabilityAmino): _105.Capability;
                toAmino(message: _105.Capability): _105.CapabilityAmino;
                fromAminoMsg(object: _105.CapabilityAminoMsg): _105.Capability;
                toAminoMsg(message: _105.Capability): _105.CapabilityAminoMsg;
                fromProtoMsg(message: _105.CapabilityProtoMsg): _105.Capability;
                toProto(message: _105.Capability): Uint8Array;
                toProtoMsg(message: _105.Capability): _105.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _105.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Owner;
                fromPartial(object: Partial<_105.Owner>): _105.Owner;
                fromAmino(object: _105.OwnerAmino): _105.Owner;
                toAmino(message: _105.Owner): _105.OwnerAmino;
                fromAminoMsg(object: _105.OwnerAminoMsg): _105.Owner;
                toAminoMsg(message: _105.Owner): _105.OwnerAminoMsg;
                fromProtoMsg(message: _105.OwnerProtoMsg): _105.Owner;
                toProto(message: _105.Owner): Uint8Array;
                toProtoMsg(message: _105.Owner): _105.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _105.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.CapabilityOwners;
                fromPartial(object: Partial<_105.CapabilityOwners>): _105.CapabilityOwners;
                fromAmino(object: _105.CapabilityOwnersAmino): _105.CapabilityOwners;
                toAmino(message: _105.CapabilityOwners): _105.CapabilityOwnersAmino;
                fromAminoMsg(object: _105.CapabilityOwnersAminoMsg): _105.CapabilityOwners;
                toAminoMsg(message: _105.CapabilityOwners): _105.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _105.CapabilityOwnersProtoMsg): _105.CapabilityOwners;
                toProto(message: _105.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _105.CapabilityOwners): _105.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _107.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.Module;
                    fromPartial(object: Partial<_107.Module>): _107.Module;
                    fromAmino(object: _107.ModuleAmino): _107.Module;
                    toAmino(message: _107.Module): _107.ModuleAmino;
                    fromAminoMsg(object: _107.ModuleAminoMsg): _107.Module;
                    toAminoMsg(message: _107.Module): _107.ModuleAminoMsg;
                    fromProtoMsg(message: _107.ModuleProtoMsg): _107.Module;
                    toProto(message: _107.Module): Uint8Array;
                    toProtoMsg(message: _107.Module): _107.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _368.MsgClientImpl;
            QueryClientImpl: typeof _350.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _329.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _109.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _109.MsgUpdateParams): {
                        typeUrl: string;
                        value: _109.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _109.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _109.MsgUpdateParams): {
                        typeUrl: string;
                        value: _109.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _109.MsgUpdateParams) => _109.MsgUpdateParamsAmino;
                    fromAmino: (object: _109.MsgUpdateParamsAmino) => _109.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _109.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MsgUpdateParams;
                fromPartial(object: Partial<_109.MsgUpdateParams>): _109.MsgUpdateParams;
                fromAmino(object: _109.MsgUpdateParamsAmino): _109.MsgUpdateParams;
                toAmino(message: _109.MsgUpdateParams): _109.MsgUpdateParamsAmino;
                fromAminoMsg(object: _109.MsgUpdateParamsAminoMsg): _109.MsgUpdateParams;
                toAminoMsg(message: _109.MsgUpdateParams): _109.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _109.MsgUpdateParamsProtoMsg): _109.MsgUpdateParams;
                toProto(message: _109.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _109.MsgUpdateParams): _109.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _109.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_109.MsgUpdateParamsResponse>): _109.MsgUpdateParamsResponse;
                fromAmino(_: _109.MsgUpdateParamsResponseAmino): _109.MsgUpdateParamsResponse;
                toAmino(_: _109.MsgUpdateParamsResponse): _109.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _109.MsgUpdateParamsResponseAminoMsg): _109.MsgUpdateParamsResponse;
                toAminoMsg(message: _109.MsgUpdateParamsResponse): _109.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _109.MsgUpdateParamsResponseProtoMsg): _109.MsgUpdateParamsResponse;
                toProto(message: _109.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _109.MsgUpdateParamsResponse): _109.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _108.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.QueryParamsRequest;
                fromPartial(_: Partial<_108.QueryParamsRequest>): _108.QueryParamsRequest;
                fromAmino(_: _108.QueryParamsRequestAmino): _108.QueryParamsRequest;
                toAmino(_: _108.QueryParamsRequest): _108.QueryParamsRequestAmino;
                fromAminoMsg(object: _108.QueryParamsRequestAminoMsg): _108.QueryParamsRequest;
                toAminoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryParamsRequestProtoMsg): _108.QueryParamsRequest;
                toProto(message: _108.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _108.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryParamsResponse;
                fromPartial(object: Partial<_108.QueryParamsResponse>): _108.QueryParamsResponse;
                fromAmino(object: _108.QueryParamsResponseAmino): _108.QueryParamsResponse;
                toAmino(message: _108.QueryParamsResponse): _108.QueryParamsResponseAmino;
                fromAminoMsg(object: _108.QueryParamsResponseAminoMsg): _108.QueryParamsResponse;
                toAminoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryParamsResponseProtoMsg): _108.QueryParamsResponse;
                toProto(message: _108.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _110.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.Module;
                    fromPartial(object: Partial<_110.Module>): _110.Module;
                    fromAmino(object: _110.ModuleAmino): _110.Module;
                    toAmino(message: _110.Module): _110.ModuleAmino;
                    fromAminoMsg(object: _110.ModuleAminoMsg): _110.Module;
                    toAminoMsg(message: _110.Module): _110.ModuleAminoMsg;
                    fromProtoMsg(message: _110.ModuleProtoMsg): _110.Module;
                    toProto(message: _110.Module): Uint8Array;
                    toProtoMsg(message: _110.Module): _110.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _369.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _112.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _112.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _112.MsgVerifyInvariant;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _112.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _112.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _112.MsgVerifyInvariant;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _112.MsgVerifyInvariant) => _112.MsgVerifyInvariantAmino;
                    fromAmino: (object: _112.MsgVerifyInvariantAmino) => _112.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _112.MsgUpdateParams) => _112.MsgUpdateParamsAmino;
                    fromAmino: (object: _112.MsgUpdateParamsAmino) => _112.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _112.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgVerifyInvariant;
                fromPartial(object: Partial<_112.MsgVerifyInvariant>): _112.MsgVerifyInvariant;
                fromAmino(object: _112.MsgVerifyInvariantAmino): _112.MsgVerifyInvariant;
                toAmino(message: _112.MsgVerifyInvariant): _112.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _112.MsgVerifyInvariantAminoMsg): _112.MsgVerifyInvariant;
                toAminoMsg(message: _112.MsgVerifyInvariant): _112.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _112.MsgVerifyInvariantProtoMsg): _112.MsgVerifyInvariant;
                toProto(message: _112.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _112.MsgVerifyInvariant): _112.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _112.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_112.MsgVerifyInvariantResponse>): _112.MsgVerifyInvariantResponse;
                fromAmino(_: _112.MsgVerifyInvariantResponseAmino): _112.MsgVerifyInvariantResponse;
                toAmino(_: _112.MsgVerifyInvariantResponse): _112.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _112.MsgVerifyInvariantResponseAminoMsg): _112.MsgVerifyInvariantResponse;
                toAminoMsg(message: _112.MsgVerifyInvariantResponse): _112.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _112.MsgVerifyInvariantResponseProtoMsg): _112.MsgVerifyInvariantResponse;
                toProto(message: _112.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _112.MsgVerifyInvariantResponse): _112.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _112.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgUpdateParams;
                fromPartial(object: Partial<_112.MsgUpdateParams>): _112.MsgUpdateParams;
                fromAmino(object: _112.MsgUpdateParamsAmino): _112.MsgUpdateParams;
                toAmino(message: _112.MsgUpdateParams): _112.MsgUpdateParamsAmino;
                fromAminoMsg(object: _112.MsgUpdateParamsAminoMsg): _112.MsgUpdateParams;
                toAminoMsg(message: _112.MsgUpdateParams): _112.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _112.MsgUpdateParamsProtoMsg): _112.MsgUpdateParams;
                toProto(message: _112.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _112.MsgUpdateParams): _112.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _112.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_112.MsgUpdateParamsResponse>): _112.MsgUpdateParamsResponse;
                fromAmino(_: _112.MsgUpdateParamsResponseAmino): _112.MsgUpdateParamsResponse;
                toAmino(_: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _112.MsgUpdateParamsResponseAminoMsg): _112.MsgUpdateParamsResponse;
                toAminoMsg(message: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _112.MsgUpdateParamsResponseProtoMsg): _112.MsgUpdateParamsResponse;
                toProto(message: _112.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _113.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.PubKey;
                fromPartial(object: Partial<_113.PubKey>): _113.PubKey;
                fromAmino(object: _113.PubKeyAmino): _113.PubKey;
                toAmino(message: _113.PubKey): _113.PubKeyAmino;
                fromAminoMsg(object: _113.PubKeyAminoMsg): _113.PubKey;
                toAminoMsg(message: _113.PubKey): _113.PubKeyAminoMsg;
                fromProtoMsg(message: _113.PubKeyProtoMsg): _113.PubKey;
                toProto(message: _113.PubKey): Uint8Array;
                toProtoMsg(message: _113.PubKey): _113.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _113.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.PrivKey;
                fromPartial(object: Partial<_113.PrivKey>): _113.PrivKey;
                fromAmino(object: _113.PrivKeyAmino): _113.PrivKey;
                toAmino(message: _113.PrivKey): _113.PrivKeyAmino;
                fromAminoMsg(object: _113.PrivKeyAminoMsg): _113.PrivKey;
                toAminoMsg(message: _113.PrivKey): _113.PrivKeyAminoMsg;
                fromProtoMsg(message: _113.PrivKeyProtoMsg): _113.PrivKey;
                toProto(message: _113.PrivKey): Uint8Array;
                toProtoMsg(message: _113.PrivKey): _113.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _114.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.BIP44Params;
                    fromPartial(object: Partial<_114.BIP44Params>): _114.BIP44Params;
                    fromAmino(object: _114.BIP44ParamsAmino): _114.BIP44Params;
                    toAmino(message: _114.BIP44Params): _114.BIP44ParamsAmino;
                    fromAminoMsg(object: _114.BIP44ParamsAminoMsg): _114.BIP44Params;
                    toAminoMsg(message: _114.BIP44Params): _114.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _114.BIP44ParamsProtoMsg): _114.BIP44Params;
                    toProto(message: _114.BIP44Params): Uint8Array;
                    toProtoMsg(message: _114.BIP44Params): _114.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _115.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Record;
                    fromPartial(object: Partial<_115.Record>): _115.Record;
                    fromAmino(object: _115.RecordAmino): _115.Record;
                    toAmino(message: _115.Record): _115.RecordAmino;
                    fromAminoMsg(object: _115.RecordAminoMsg): _115.Record;
                    toAminoMsg(message: _115.Record): _115.RecordAminoMsg;
                    fromProtoMsg(message: _115.RecordProtoMsg): _115.Record;
                    toProto(message: _115.Record): Uint8Array;
                    toProtoMsg(message: _115.Record): _115.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _115.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Record_Local;
                    fromPartial(object: Partial<_115.Record_Local>): _115.Record_Local;
                    fromAmino(object: _115.Record_LocalAmino): _115.Record_Local;
                    toAmino(message: _115.Record_Local): _115.Record_LocalAmino;
                    fromAminoMsg(object: _115.Record_LocalAminoMsg): _115.Record_Local;
                    toAminoMsg(message: _115.Record_Local): _115.Record_LocalAminoMsg;
                    fromProtoMsg(message: _115.Record_LocalProtoMsg): _115.Record_Local;
                    toProto(message: _115.Record_Local): Uint8Array;
                    toProtoMsg(message: _115.Record_Local): _115.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _115.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Record_Ledger;
                    fromPartial(object: Partial<_115.Record_Ledger>): _115.Record_Ledger;
                    fromAmino(object: _115.Record_LedgerAmino): _115.Record_Ledger;
                    toAmino(message: _115.Record_Ledger): _115.Record_LedgerAmino;
                    fromAminoMsg(object: _115.Record_LedgerAminoMsg): _115.Record_Ledger;
                    toAminoMsg(message: _115.Record_Ledger): _115.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _115.Record_LedgerProtoMsg): _115.Record_Ledger;
                    toProto(message: _115.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _115.Record_Ledger): _115.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _115.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _115.Record_Multi;
                    fromPartial(_: Partial<_115.Record_Multi>): _115.Record_Multi;
                    fromAmino(_: _115.Record_MultiAmino): _115.Record_Multi;
                    toAmino(_: _115.Record_Multi): _115.Record_MultiAmino;
                    fromAminoMsg(object: _115.Record_MultiAminoMsg): _115.Record_Multi;
                    toAminoMsg(message: _115.Record_Multi): _115.Record_MultiAminoMsg;
                    fromProtoMsg(message: _115.Record_MultiProtoMsg): _115.Record_Multi;
                    toProto(message: _115.Record_Multi): Uint8Array;
                    toProtoMsg(message: _115.Record_Multi): _115.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _115.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _115.Record_Offline;
                    fromPartial(_: Partial<_115.Record_Offline>): _115.Record_Offline;
                    fromAmino(_: _115.Record_OfflineAmino): _115.Record_Offline;
                    toAmino(_: _115.Record_Offline): _115.Record_OfflineAmino;
                    fromAminoMsg(object: _115.Record_OfflineAminoMsg): _115.Record_Offline;
                    toAminoMsg(message: _115.Record_Offline): _115.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _115.Record_OfflineProtoMsg): _115.Record_Offline;
                    toProto(message: _115.Record_Offline): Uint8Array;
                    toProtoMsg(message: _115.Record_Offline): _115.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _116.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.LegacyAminoPubKey;
                fromPartial(object: Partial<_116.LegacyAminoPubKey>): _116.LegacyAminoPubKey;
                fromAmino(object: _116.LegacyAminoPubKeyAmino): _116.LegacyAminoPubKey;
                toAmino(message: _116.LegacyAminoPubKey): _116.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _116.LegacyAminoPubKeyAminoMsg): _116.LegacyAminoPubKey;
                toAminoMsg(message: _116.LegacyAminoPubKey): _116.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _116.LegacyAminoPubKeyProtoMsg): _116.LegacyAminoPubKey;
                toProto(message: _116.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _116.LegacyAminoPubKey): _116.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _117.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.PubKey;
                fromPartial(object: Partial<_117.PubKey>): _117.PubKey;
                fromAmino(object: _117.PubKeyAmino): _117.PubKey;
                toAmino(message: _117.PubKey): _117.PubKeyAmino;
                fromAminoMsg(object: _117.PubKeyAminoMsg): _117.PubKey;
                toAminoMsg(message: _117.PubKey): _117.PubKeyAminoMsg;
                fromProtoMsg(message: _117.PubKeyProtoMsg): _117.PubKey;
                toProto(message: _117.PubKey): Uint8Array;
                toProtoMsg(message: _117.PubKey): _117.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _117.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.PrivKey;
                fromPartial(object: Partial<_117.PrivKey>): _117.PrivKey;
                fromAmino(object: _117.PrivKeyAmino): _117.PrivKey;
                toAmino(message: _117.PrivKey): _117.PrivKeyAmino;
                fromAminoMsg(object: _117.PrivKeyAminoMsg): _117.PrivKey;
                toAminoMsg(message: _117.PrivKey): _117.PrivKeyAminoMsg;
                fromProtoMsg(message: _117.PrivKeyProtoMsg): _117.PrivKey;
                toProto(message: _117.PrivKey): Uint8Array;
                toProtoMsg(message: _117.PrivKey): _117.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _118.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.PubKey;
                fromPartial(object: Partial<_118.PubKey>): _118.PubKey;
                fromAmino(object: _118.PubKeyAmino): _118.PubKey;
                toAmino(message: _118.PubKey): _118.PubKeyAmino;
                fromAminoMsg(object: _118.PubKeyAminoMsg): _118.PubKey;
                toAminoMsg(message: _118.PubKey): _118.PubKeyAminoMsg;
                fromProtoMsg(message: _118.PubKeyProtoMsg): _118.PubKey;
                toProto(message: _118.PubKey): Uint8Array;
                toProtoMsg(message: _118.PubKey): _118.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _118.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.PrivKey;
                fromPartial(object: Partial<_118.PrivKey>): _118.PrivKey;
                fromAmino(object: _118.PrivKeyAmino): _118.PrivKey;
                toAmino(message: _118.PrivKey): _118.PrivKeyAmino;
                fromAminoMsg(object: _118.PrivKeyAminoMsg): _118.PrivKey;
                toAminoMsg(message: _118.PrivKey): _118.PrivKeyAminoMsg;
                fromProtoMsg(message: _118.PrivKeyProtoMsg): _118.PrivKey;
                toProto(message: _118.PrivKey): Uint8Array;
                toProtoMsg(message: _118.PrivKey): _118.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _119.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Module;
                    fromPartial(object: Partial<_119.Module>): _119.Module;
                    fromAmino(object: _119.ModuleAmino): _119.Module;
                    toAmino(message: _119.Module): _119.ModuleAmino;
                    fromAminoMsg(object: _119.ModuleAminoMsg): _119.Module;
                    toAminoMsg(message: _119.Module): _119.ModuleAminoMsg;
                    fromProtoMsg(message: _119.ModuleProtoMsg): _119.Module;
                    toProto(message: _119.Module): Uint8Array;
                    toProtoMsg(message: _119.Module): _119.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _370.MsgClientImpl;
            QueryClientImpl: typeof _351.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                validatorDistributionInfo(request: _122.QueryValidatorDistributionInfoRequest): Promise<_122.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _122.QueryValidatorOutstandingRewardsRequest): Promise<_122.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _122.QueryValidatorCommissionRequest): Promise<_122.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _122.QueryValidatorSlashesRequest): Promise<_122.QueryValidatorSlashesResponse>;
                delegationRewards(request: _122.QueryDelegationRewardsRequest): Promise<_122.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _122.QueryDelegationTotalRewardsRequest): Promise<_122.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _122.QueryDelegatorValidatorsRequest): Promise<_122.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _122.QueryDelegatorWithdrawAddressRequest): Promise<_122.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _122.QueryCommunityPoolRequest): Promise<_122.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _330.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _123.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _123.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _123.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _123.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _123.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _123.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _123.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _123.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _123.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _123.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _123.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _123.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _123.MsgFundCommunityPool;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _123.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _123.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _123.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _123.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _123.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _123.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _123.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _123.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _123.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _123.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _123.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _123.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _123.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _123.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _123.MsgFundCommunityPool;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _123.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _123.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSetWithdrawAddress) => _123.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _123.MsgSetWithdrawAddressAmino) => _123.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _123.MsgWithdrawDelegatorReward) => _123.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _123.MsgWithdrawDelegatorRewardAmino) => _123.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _123.MsgWithdrawValidatorCommission) => _123.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _123.MsgWithdrawValidatorCommissionAmino) => _123.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _123.MsgFundCommunityPool) => _123.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _123.MsgFundCommunityPoolAmino) => _123.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateParams) => _123.MsgUpdateParamsAmino;
                    fromAmino: (object: _123.MsgUpdateParamsAmino) => _123.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCommunityPoolSpend) => _123.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _123.MsgCommunityPoolSpendAmino) => _123.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _123.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_123.MsgSetWithdrawAddress>): _123.MsgSetWithdrawAddress;
                fromAmino(object: _123.MsgSetWithdrawAddressAmino): _123.MsgSetWithdrawAddress;
                toAmino(message: _123.MsgSetWithdrawAddress): _123.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _123.MsgSetWithdrawAddressAminoMsg): _123.MsgSetWithdrawAddress;
                toAminoMsg(message: _123.MsgSetWithdrawAddress): _123.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _123.MsgSetWithdrawAddressProtoMsg): _123.MsgSetWithdrawAddress;
                toProto(message: _123.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _123.MsgSetWithdrawAddress): _123.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _123.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_123.MsgSetWithdrawAddressResponse>): _123.MsgSetWithdrawAddressResponse;
                fromAmino(_: _123.MsgSetWithdrawAddressResponseAmino): _123.MsgSetWithdrawAddressResponse;
                toAmino(_: _123.MsgSetWithdrawAddressResponse): _123.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _123.MsgSetWithdrawAddressResponseAminoMsg): _123.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _123.MsgSetWithdrawAddressResponse): _123.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSetWithdrawAddressResponseProtoMsg): _123.MsgSetWithdrawAddressResponse;
                toProto(message: _123.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSetWithdrawAddressResponse): _123.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _123.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_123.MsgWithdrawDelegatorReward>): _123.MsgWithdrawDelegatorReward;
                fromAmino(object: _123.MsgWithdrawDelegatorRewardAmino): _123.MsgWithdrawDelegatorReward;
                toAmino(message: _123.MsgWithdrawDelegatorReward): _123.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _123.MsgWithdrawDelegatorRewardAminoMsg): _123.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _123.MsgWithdrawDelegatorReward): _123.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _123.MsgWithdrawDelegatorRewardProtoMsg): _123.MsgWithdrawDelegatorReward;
                toProto(message: _123.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _123.MsgWithdrawDelegatorReward): _123.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _123.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_123.MsgWithdrawDelegatorRewardResponse>): _123.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _123.MsgWithdrawDelegatorRewardResponseAmino): _123.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _123.MsgWithdrawDelegatorRewardResponse): _123.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _123.MsgWithdrawDelegatorRewardResponseAminoMsg): _123.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _123.MsgWithdrawDelegatorRewardResponse): _123.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _123.MsgWithdrawDelegatorRewardResponseProtoMsg): _123.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _123.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _123.MsgWithdrawDelegatorRewardResponse): _123.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _123.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_123.MsgWithdrawValidatorCommission>): _123.MsgWithdrawValidatorCommission;
                fromAmino(object: _123.MsgWithdrawValidatorCommissionAmino): _123.MsgWithdrawValidatorCommission;
                toAmino(message: _123.MsgWithdrawValidatorCommission): _123.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _123.MsgWithdrawValidatorCommissionAminoMsg): _123.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _123.MsgWithdrawValidatorCommission): _123.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _123.MsgWithdrawValidatorCommissionProtoMsg): _123.MsgWithdrawValidatorCommission;
                toProto(message: _123.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _123.MsgWithdrawValidatorCommission): _123.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _123.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_123.MsgWithdrawValidatorCommissionResponse>): _123.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _123.MsgWithdrawValidatorCommissionResponseAmino): _123.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _123.MsgWithdrawValidatorCommissionResponse): _123.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _123.MsgWithdrawValidatorCommissionResponseAminoMsg): _123.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _123.MsgWithdrawValidatorCommissionResponse): _123.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _123.MsgWithdrawValidatorCommissionResponseProtoMsg): _123.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _123.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _123.MsgWithdrawValidatorCommissionResponse): _123.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _123.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgFundCommunityPool;
                fromPartial(object: Partial<_123.MsgFundCommunityPool>): _123.MsgFundCommunityPool;
                fromAmino(object: _123.MsgFundCommunityPoolAmino): _123.MsgFundCommunityPool;
                toAmino(message: _123.MsgFundCommunityPool): _123.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _123.MsgFundCommunityPoolAminoMsg): _123.MsgFundCommunityPool;
                toAminoMsg(message: _123.MsgFundCommunityPool): _123.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _123.MsgFundCommunityPoolProtoMsg): _123.MsgFundCommunityPool;
                toProto(message: _123.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _123.MsgFundCommunityPool): _123.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _123.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_123.MsgFundCommunityPoolResponse>): _123.MsgFundCommunityPoolResponse;
                fromAmino(_: _123.MsgFundCommunityPoolResponseAmino): _123.MsgFundCommunityPoolResponse;
                toAmino(_: _123.MsgFundCommunityPoolResponse): _123.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _123.MsgFundCommunityPoolResponseAminoMsg): _123.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _123.MsgFundCommunityPoolResponse): _123.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _123.MsgFundCommunityPoolResponseProtoMsg): _123.MsgFundCommunityPoolResponse;
                toProto(message: _123.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _123.MsgFundCommunityPoolResponse): _123.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _123.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgUpdateParams;
                fromPartial(object: Partial<_123.MsgUpdateParams>): _123.MsgUpdateParams;
                fromAmino(object: _123.MsgUpdateParamsAmino): _123.MsgUpdateParams;
                toAmino(message: _123.MsgUpdateParams): _123.MsgUpdateParamsAmino;
                fromAminoMsg(object: _123.MsgUpdateParamsAminoMsg): _123.MsgUpdateParams;
                toAminoMsg(message: _123.MsgUpdateParams): _123.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateParamsProtoMsg): _123.MsgUpdateParams;
                toProto(message: _123.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateParams): _123.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_123.MsgUpdateParamsResponse>): _123.MsgUpdateParamsResponse;
                fromAmino(_: _123.MsgUpdateParamsResponseAmino): _123.MsgUpdateParamsResponse;
                toAmino(_: _123.MsgUpdateParamsResponse): _123.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateParamsResponseAminoMsg): _123.MsgUpdateParamsResponse;
                toAminoMsg(message: _123.MsgUpdateParamsResponse): _123.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateParamsResponseProtoMsg): _123.MsgUpdateParamsResponse;
                toProto(message: _123.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateParamsResponse): _123.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _123.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_123.MsgCommunityPoolSpend>): _123.MsgCommunityPoolSpend;
                fromAmino(object: _123.MsgCommunityPoolSpendAmino): _123.MsgCommunityPoolSpend;
                toAmino(message: _123.MsgCommunityPoolSpend): _123.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _123.MsgCommunityPoolSpendAminoMsg): _123.MsgCommunityPoolSpend;
                toAminoMsg(message: _123.MsgCommunityPoolSpend): _123.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _123.MsgCommunityPoolSpendProtoMsg): _123.MsgCommunityPoolSpend;
                toProto(message: _123.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _123.MsgCommunityPoolSpend): _123.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _123.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_123.MsgCommunityPoolSpendResponse>): _123.MsgCommunityPoolSpendResponse;
                fromAmino(_: _123.MsgCommunityPoolSpendResponseAmino): _123.MsgCommunityPoolSpendResponse;
                toAmino(_: _123.MsgCommunityPoolSpendResponse): _123.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _123.MsgCommunityPoolSpendResponseAminoMsg): _123.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _123.MsgCommunityPoolSpendResponse): _123.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _123.MsgCommunityPoolSpendResponseProtoMsg): _123.MsgCommunityPoolSpendResponse;
                toProto(message: _123.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCommunityPoolSpendResponse): _123.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _122.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.QueryParamsRequest;
                fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
                fromAmino(_: _122.QueryParamsRequestAmino): _122.QueryParamsRequest;
                toAmino(_: _122.QueryParamsRequest): _122.QueryParamsRequestAmino;
                fromAminoMsg(object: _122.QueryParamsRequestAminoMsg): _122.QueryParamsRequest;
                toAminoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryParamsRequestProtoMsg): _122.QueryParamsRequest;
                toProto(message: _122.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryParamsResponse;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
                fromAmino(object: _122.QueryParamsResponseAmino): _122.QueryParamsResponse;
                toAmino(message: _122.QueryParamsResponse): _122.QueryParamsResponseAmino;
                fromAminoMsg(object: _122.QueryParamsResponseAminoMsg): _122.QueryParamsResponse;
                toAminoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryParamsResponseProtoMsg): _122.QueryParamsResponse;
                toProto(message: _122.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _122.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_122.QueryValidatorDistributionInfoRequest>): _122.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _122.QueryValidatorDistributionInfoRequestAmino): _122.QueryValidatorDistributionInfoRequest;
                toAmino(message: _122.QueryValidatorDistributionInfoRequest): _122.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _122.QueryValidatorDistributionInfoRequestAminoMsg): _122.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _122.QueryValidatorDistributionInfoRequest): _122.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorDistributionInfoRequestProtoMsg): _122.QueryValidatorDistributionInfoRequest;
                toProto(message: _122.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorDistributionInfoRequest): _122.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _122.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_122.QueryValidatorDistributionInfoResponse>): _122.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _122.QueryValidatorDistributionInfoResponseAmino): _122.QueryValidatorDistributionInfoResponse;
                toAmino(message: _122.QueryValidatorDistributionInfoResponse): _122.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _122.QueryValidatorDistributionInfoResponseAminoMsg): _122.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _122.QueryValidatorDistributionInfoResponse): _122.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorDistributionInfoResponseProtoMsg): _122.QueryValidatorDistributionInfoResponse;
                toProto(message: _122.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorDistributionInfoResponse): _122.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _122.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_122.QueryValidatorOutstandingRewardsRequest>): _122.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _122.QueryValidatorOutstandingRewardsRequestAmino): _122.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _122.QueryValidatorOutstandingRewardsRequest): _122.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _122.QueryValidatorOutstandingRewardsRequestAminoMsg): _122.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _122.QueryValidatorOutstandingRewardsRequest): _122.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorOutstandingRewardsRequestProtoMsg): _122.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _122.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorOutstandingRewardsRequest): _122.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _122.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_122.QueryValidatorOutstandingRewardsResponse>): _122.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _122.QueryValidatorOutstandingRewardsResponseAmino): _122.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _122.QueryValidatorOutstandingRewardsResponse): _122.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _122.QueryValidatorOutstandingRewardsResponseAminoMsg): _122.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _122.QueryValidatorOutstandingRewardsResponse): _122.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorOutstandingRewardsResponseProtoMsg): _122.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _122.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorOutstandingRewardsResponse): _122.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _122.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_122.QueryValidatorCommissionRequest>): _122.QueryValidatorCommissionRequest;
                fromAmino(object: _122.QueryValidatorCommissionRequestAmino): _122.QueryValidatorCommissionRequest;
                toAmino(message: _122.QueryValidatorCommissionRequest): _122.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _122.QueryValidatorCommissionRequestAminoMsg): _122.QueryValidatorCommissionRequest;
                toAminoMsg(message: _122.QueryValidatorCommissionRequest): _122.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorCommissionRequestProtoMsg): _122.QueryValidatorCommissionRequest;
                toProto(message: _122.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorCommissionRequest): _122.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _122.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_122.QueryValidatorCommissionResponse>): _122.QueryValidatorCommissionResponse;
                fromAmino(object: _122.QueryValidatorCommissionResponseAmino): _122.QueryValidatorCommissionResponse;
                toAmino(message: _122.QueryValidatorCommissionResponse): _122.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _122.QueryValidatorCommissionResponseAminoMsg): _122.QueryValidatorCommissionResponse;
                toAminoMsg(message: _122.QueryValidatorCommissionResponse): _122.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorCommissionResponseProtoMsg): _122.QueryValidatorCommissionResponse;
                toProto(message: _122.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorCommissionResponse): _122.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _122.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_122.QueryValidatorSlashesRequest>): _122.QueryValidatorSlashesRequest;
                fromAmino(object: _122.QueryValidatorSlashesRequestAmino): _122.QueryValidatorSlashesRequest;
                toAmino(message: _122.QueryValidatorSlashesRequest): _122.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _122.QueryValidatorSlashesRequestAminoMsg): _122.QueryValidatorSlashesRequest;
                toAminoMsg(message: _122.QueryValidatorSlashesRequest): _122.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorSlashesRequestProtoMsg): _122.QueryValidatorSlashesRequest;
                toProto(message: _122.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorSlashesRequest): _122.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _122.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_122.QueryValidatorSlashesResponse>): _122.QueryValidatorSlashesResponse;
                fromAmino(object: _122.QueryValidatorSlashesResponseAmino): _122.QueryValidatorSlashesResponse;
                toAmino(message: _122.QueryValidatorSlashesResponse): _122.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _122.QueryValidatorSlashesResponseAminoMsg): _122.QueryValidatorSlashesResponse;
                toAminoMsg(message: _122.QueryValidatorSlashesResponse): _122.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryValidatorSlashesResponseProtoMsg): _122.QueryValidatorSlashesResponse;
                toProto(message: _122.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryValidatorSlashesResponse): _122.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _122.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_122.QueryDelegationRewardsRequest>): _122.QueryDelegationRewardsRequest;
                fromAmino(object: _122.QueryDelegationRewardsRequestAmino): _122.QueryDelegationRewardsRequest;
                toAmino(message: _122.QueryDelegationRewardsRequest): _122.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _122.QueryDelegationRewardsRequestAminoMsg): _122.QueryDelegationRewardsRequest;
                toAminoMsg(message: _122.QueryDelegationRewardsRequest): _122.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryDelegationRewardsRequestProtoMsg): _122.QueryDelegationRewardsRequest;
                toProto(message: _122.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDelegationRewardsRequest): _122.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _122.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_122.QueryDelegationRewardsResponse>): _122.QueryDelegationRewardsResponse;
                fromAmino(object: _122.QueryDelegationRewardsResponseAmino): _122.QueryDelegationRewardsResponse;
                toAmino(message: _122.QueryDelegationRewardsResponse): _122.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _122.QueryDelegationRewardsResponseAminoMsg): _122.QueryDelegationRewardsResponse;
                toAminoMsg(message: _122.QueryDelegationRewardsResponse): _122.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryDelegationRewardsResponseProtoMsg): _122.QueryDelegationRewardsResponse;
                toProto(message: _122.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDelegationRewardsResponse): _122.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _122.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_122.QueryDelegationTotalRewardsRequest>): _122.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _122.QueryDelegationTotalRewardsRequestAmino): _122.QueryDelegationTotalRewardsRequest;
                toAmino(message: _122.QueryDelegationTotalRewardsRequest): _122.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _122.QueryDelegationTotalRewardsRequestAminoMsg): _122.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _122.QueryDelegationTotalRewardsRequest): _122.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryDelegationTotalRewardsRequestProtoMsg): _122.QueryDelegationTotalRewardsRequest;
                toProto(message: _122.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDelegationTotalRewardsRequest): _122.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _122.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_122.QueryDelegationTotalRewardsResponse>): _122.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _122.QueryDelegationTotalRewardsResponseAmino): _122.QueryDelegationTotalRewardsResponse;
                toAmino(message: _122.QueryDelegationTotalRewardsResponse): _122.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _122.QueryDelegationTotalRewardsResponseAminoMsg): _122.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _122.QueryDelegationTotalRewardsResponse): _122.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryDelegationTotalRewardsResponseProtoMsg): _122.QueryDelegationTotalRewardsResponse;
                toProto(message: _122.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDelegationTotalRewardsResponse): _122.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _122.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_122.QueryDelegatorValidatorsRequest>): _122.QueryDelegatorValidatorsRequest;
                fromAmino(object: _122.QueryDelegatorValidatorsRequestAmino): _122.QueryDelegatorValidatorsRequest;
                toAmino(message: _122.QueryDelegatorValidatorsRequest): _122.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _122.QueryDelegatorValidatorsRequestAminoMsg): _122.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _122.QueryDelegatorValidatorsRequest): _122.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryDelegatorValidatorsRequestProtoMsg): _122.QueryDelegatorValidatorsRequest;
                toProto(message: _122.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDelegatorValidatorsRequest): _122.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _122.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_122.QueryDelegatorValidatorsResponse>): _122.QueryDelegatorValidatorsResponse;
                fromAmino(object: _122.QueryDelegatorValidatorsResponseAmino): _122.QueryDelegatorValidatorsResponse;
                toAmino(message: _122.QueryDelegatorValidatorsResponse): _122.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _122.QueryDelegatorValidatorsResponseAminoMsg): _122.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _122.QueryDelegatorValidatorsResponse): _122.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryDelegatorValidatorsResponseProtoMsg): _122.QueryDelegatorValidatorsResponse;
                toProto(message: _122.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDelegatorValidatorsResponse): _122.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _122.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_122.QueryDelegatorWithdrawAddressRequest>): _122.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _122.QueryDelegatorWithdrawAddressRequestAmino): _122.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _122.QueryDelegatorWithdrawAddressRequest): _122.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _122.QueryDelegatorWithdrawAddressRequestAminoMsg): _122.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _122.QueryDelegatorWithdrawAddressRequest): _122.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _122.QueryDelegatorWithdrawAddressRequestProtoMsg): _122.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _122.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _122.QueryDelegatorWithdrawAddressRequest): _122.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _122.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_122.QueryDelegatorWithdrawAddressResponse>): _122.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _122.QueryDelegatorWithdrawAddressResponseAmino): _122.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _122.QueryDelegatorWithdrawAddressResponse): _122.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _122.QueryDelegatorWithdrawAddressResponseAminoMsg): _122.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _122.QueryDelegatorWithdrawAddressResponse): _122.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _122.QueryDelegatorWithdrawAddressResponseProtoMsg): _122.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _122.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _122.QueryDelegatorWithdrawAddressResponse): _122.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _122.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_122.QueryCommunityPoolRequest>): _122.QueryCommunityPoolRequest;
                fromAmino(_: _122.QueryCommunityPoolRequestAmino): _122.QueryCommunityPoolRequest;
                toAmino(_: _122.QueryCommunityPoolRequest): _122.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _122.QueryCommunityPoolRequestAminoMsg): _122.QueryCommunityPoolRequest;
                toAminoMsg(message: _122.QueryCommunityPoolRequest): _122.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _122.QueryCommunityPoolRequestProtoMsg): _122.QueryCommunityPoolRequest;
                toProto(message: _122.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _122.QueryCommunityPoolRequest): _122.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _122.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_122.QueryCommunityPoolResponse>): _122.QueryCommunityPoolResponse;
                fromAmino(object: _122.QueryCommunityPoolResponseAmino): _122.QueryCommunityPoolResponse;
                toAmino(message: _122.QueryCommunityPoolResponse): _122.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _122.QueryCommunityPoolResponseAminoMsg): _122.QueryCommunityPoolResponse;
                toAminoMsg(message: _122.QueryCommunityPoolResponse): _122.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _122.QueryCommunityPoolResponseProtoMsg): _122.QueryCommunityPoolResponse;
                toProto(message: _122.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _122.QueryCommunityPoolResponse): _122.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _121.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_121.DelegatorWithdrawInfo>): _121.DelegatorWithdrawInfo;
                fromAmino(object: _121.DelegatorWithdrawInfoAmino): _121.DelegatorWithdrawInfo;
                toAmino(message: _121.DelegatorWithdrawInfo): _121.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _121.DelegatorWithdrawInfoAminoMsg): _121.DelegatorWithdrawInfo;
                toAminoMsg(message: _121.DelegatorWithdrawInfo): _121.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _121.DelegatorWithdrawInfoProtoMsg): _121.DelegatorWithdrawInfo;
                toProto(message: _121.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _121.DelegatorWithdrawInfo): _121.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _121.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_121.ValidatorOutstandingRewardsRecord>): _121.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _121.ValidatorOutstandingRewardsRecordAmino): _121.ValidatorOutstandingRewardsRecord;
                toAmino(message: _121.ValidatorOutstandingRewardsRecord): _121.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _121.ValidatorOutstandingRewardsRecordAminoMsg): _121.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _121.ValidatorOutstandingRewardsRecord): _121.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _121.ValidatorOutstandingRewardsRecordProtoMsg): _121.ValidatorOutstandingRewardsRecord;
                toProto(message: _121.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _121.ValidatorOutstandingRewardsRecord): _121.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _121.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_121.ValidatorAccumulatedCommissionRecord>): _121.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _121.ValidatorAccumulatedCommissionRecordAmino): _121.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _121.ValidatorAccumulatedCommissionRecord): _121.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _121.ValidatorAccumulatedCommissionRecordAminoMsg): _121.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _121.ValidatorAccumulatedCommissionRecord): _121.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _121.ValidatorAccumulatedCommissionRecordProtoMsg): _121.ValidatorAccumulatedCommissionRecord;
                toProto(message: _121.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _121.ValidatorAccumulatedCommissionRecord): _121.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _121.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_121.ValidatorHistoricalRewardsRecord>): _121.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _121.ValidatorHistoricalRewardsRecordAmino): _121.ValidatorHistoricalRewardsRecord;
                toAmino(message: _121.ValidatorHistoricalRewardsRecord): _121.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _121.ValidatorHistoricalRewardsRecordAminoMsg): _121.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _121.ValidatorHistoricalRewardsRecord): _121.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _121.ValidatorHistoricalRewardsRecordProtoMsg): _121.ValidatorHistoricalRewardsRecord;
                toProto(message: _121.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _121.ValidatorHistoricalRewardsRecord): _121.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _121.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_121.ValidatorCurrentRewardsRecord>): _121.ValidatorCurrentRewardsRecord;
                fromAmino(object: _121.ValidatorCurrentRewardsRecordAmino): _121.ValidatorCurrentRewardsRecord;
                toAmino(message: _121.ValidatorCurrentRewardsRecord): _121.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _121.ValidatorCurrentRewardsRecordAminoMsg): _121.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _121.ValidatorCurrentRewardsRecord): _121.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _121.ValidatorCurrentRewardsRecordProtoMsg): _121.ValidatorCurrentRewardsRecord;
                toProto(message: _121.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _121.ValidatorCurrentRewardsRecord): _121.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _121.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_121.DelegatorStartingInfoRecord>): _121.DelegatorStartingInfoRecord;
                fromAmino(object: _121.DelegatorStartingInfoRecordAmino): _121.DelegatorStartingInfoRecord;
                toAmino(message: _121.DelegatorStartingInfoRecord): _121.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _121.DelegatorStartingInfoRecordAminoMsg): _121.DelegatorStartingInfoRecord;
                toAminoMsg(message: _121.DelegatorStartingInfoRecord): _121.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _121.DelegatorStartingInfoRecordProtoMsg): _121.DelegatorStartingInfoRecord;
                toProto(message: _121.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _121.DelegatorStartingInfoRecord): _121.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _121.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_121.ValidatorSlashEventRecord>): _121.ValidatorSlashEventRecord;
                fromAmino(object: _121.ValidatorSlashEventRecordAmino): _121.ValidatorSlashEventRecord;
                toAmino(message: _121.ValidatorSlashEventRecord): _121.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _121.ValidatorSlashEventRecordAminoMsg): _121.ValidatorSlashEventRecord;
                toAminoMsg(message: _121.ValidatorSlashEventRecord): _121.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _121.ValidatorSlashEventRecordProtoMsg): _121.ValidatorSlashEventRecord;
                toProto(message: _121.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _121.ValidatorSlashEventRecord): _121.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _120.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.Params;
                fromPartial(object: Partial<_120.Params>): _120.Params;
                fromAmino(object: _120.ParamsAmino): _120.Params;
                toAmino(message: _120.Params): _120.ParamsAmino;
                fromAminoMsg(object: _120.ParamsAminoMsg): _120.Params;
                toAminoMsg(message: _120.Params): _120.ParamsAminoMsg;
                fromProtoMsg(message: _120.ParamsProtoMsg): _120.Params;
                toProto(message: _120.Params): Uint8Array;
                toProtoMsg(message: _120.Params): _120.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _120.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_120.ValidatorHistoricalRewards>): _120.ValidatorHistoricalRewards;
                fromAmino(object: _120.ValidatorHistoricalRewardsAmino): _120.ValidatorHistoricalRewards;
                toAmino(message: _120.ValidatorHistoricalRewards): _120.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _120.ValidatorHistoricalRewardsAminoMsg): _120.ValidatorHistoricalRewards;
                toAminoMsg(message: _120.ValidatorHistoricalRewards): _120.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _120.ValidatorHistoricalRewardsProtoMsg): _120.ValidatorHistoricalRewards;
                toProto(message: _120.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _120.ValidatorHistoricalRewards): _120.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _120.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorCurrentRewards;
                fromPartial(object: Partial<_120.ValidatorCurrentRewards>): _120.ValidatorCurrentRewards;
                fromAmino(object: _120.ValidatorCurrentRewardsAmino): _120.ValidatorCurrentRewards;
                toAmino(message: _120.ValidatorCurrentRewards): _120.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _120.ValidatorCurrentRewardsAminoMsg): _120.ValidatorCurrentRewards;
                toAminoMsg(message: _120.ValidatorCurrentRewards): _120.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _120.ValidatorCurrentRewardsProtoMsg): _120.ValidatorCurrentRewards;
                toProto(message: _120.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _120.ValidatorCurrentRewards): _120.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _120.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_120.ValidatorAccumulatedCommission>): _120.ValidatorAccumulatedCommission;
                fromAmino(object: _120.ValidatorAccumulatedCommissionAmino): _120.ValidatorAccumulatedCommission;
                toAmino(message: _120.ValidatorAccumulatedCommission): _120.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _120.ValidatorAccumulatedCommissionAminoMsg): _120.ValidatorAccumulatedCommission;
                toAminoMsg(message: _120.ValidatorAccumulatedCommission): _120.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _120.ValidatorAccumulatedCommissionProtoMsg): _120.ValidatorAccumulatedCommission;
                toProto(message: _120.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _120.ValidatorAccumulatedCommission): _120.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _120.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_120.ValidatorOutstandingRewards>): _120.ValidatorOutstandingRewards;
                fromAmino(object: _120.ValidatorOutstandingRewardsAmino): _120.ValidatorOutstandingRewards;
                toAmino(message: _120.ValidatorOutstandingRewards): _120.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _120.ValidatorOutstandingRewardsAminoMsg): _120.ValidatorOutstandingRewards;
                toAminoMsg(message: _120.ValidatorOutstandingRewards): _120.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _120.ValidatorOutstandingRewardsProtoMsg): _120.ValidatorOutstandingRewards;
                toProto(message: _120.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _120.ValidatorOutstandingRewards): _120.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _120.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorSlashEvent;
                fromPartial(object: Partial<_120.ValidatorSlashEvent>): _120.ValidatorSlashEvent;
                fromAmino(object: _120.ValidatorSlashEventAmino): _120.ValidatorSlashEvent;
                toAmino(message: _120.ValidatorSlashEvent): _120.ValidatorSlashEventAmino;
                fromAminoMsg(object: _120.ValidatorSlashEventAminoMsg): _120.ValidatorSlashEvent;
                toAminoMsg(message: _120.ValidatorSlashEvent): _120.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _120.ValidatorSlashEventProtoMsg): _120.ValidatorSlashEvent;
                toProto(message: _120.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _120.ValidatorSlashEvent): _120.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _120.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorSlashEvents;
                fromPartial(object: Partial<_120.ValidatorSlashEvents>): _120.ValidatorSlashEvents;
                fromAmino(object: _120.ValidatorSlashEventsAmino): _120.ValidatorSlashEvents;
                toAmino(message: _120.ValidatorSlashEvents): _120.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _120.ValidatorSlashEventsAminoMsg): _120.ValidatorSlashEvents;
                toAminoMsg(message: _120.ValidatorSlashEvents): _120.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _120.ValidatorSlashEventsProtoMsg): _120.ValidatorSlashEvents;
                toProto(message: _120.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _120.ValidatorSlashEvents): _120.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _120.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.FeePool;
                fromPartial(object: Partial<_120.FeePool>): _120.FeePool;
                fromAmino(object: _120.FeePoolAmino): _120.FeePool;
                toAmino(message: _120.FeePool): _120.FeePoolAmino;
                fromAminoMsg(object: _120.FeePoolAminoMsg): _120.FeePool;
                toAminoMsg(message: _120.FeePool): _120.FeePoolAminoMsg;
                fromProtoMsg(message: _120.FeePoolProtoMsg): _120.FeePool;
                toProto(message: _120.FeePool): Uint8Array;
                toProtoMsg(message: _120.FeePool): _120.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _120.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_120.CommunityPoolSpendProposal>): _120.CommunityPoolSpendProposal;
                fromAmino(object: _120.CommunityPoolSpendProposalAmino): _120.CommunityPoolSpendProposal;
                toAmino(message: _120.CommunityPoolSpendProposal): _120.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _120.CommunityPoolSpendProposalAminoMsg): _120.CommunityPoolSpendProposal;
                toAminoMsg(message: _120.CommunityPoolSpendProposal): _120.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _120.CommunityPoolSpendProposalProtoMsg): _120.CommunityPoolSpendProposal;
                toProto(message: _120.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _120.CommunityPoolSpendProposal): _120.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _120.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.DelegatorStartingInfo;
                fromPartial(object: Partial<_120.DelegatorStartingInfo>): _120.DelegatorStartingInfo;
                fromAmino(object: _120.DelegatorStartingInfoAmino): _120.DelegatorStartingInfo;
                toAmino(message: _120.DelegatorStartingInfo): _120.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _120.DelegatorStartingInfoAminoMsg): _120.DelegatorStartingInfo;
                toAminoMsg(message: _120.DelegatorStartingInfo): _120.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _120.DelegatorStartingInfoProtoMsg): _120.DelegatorStartingInfo;
                toProto(message: _120.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _120.DelegatorStartingInfo): _120.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _120.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.DelegationDelegatorReward;
                fromPartial(object: Partial<_120.DelegationDelegatorReward>): _120.DelegationDelegatorReward;
                fromAmino(object: _120.DelegationDelegatorRewardAmino): _120.DelegationDelegatorReward;
                toAmino(message: _120.DelegationDelegatorReward): _120.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _120.DelegationDelegatorRewardAminoMsg): _120.DelegationDelegatorReward;
                toAminoMsg(message: _120.DelegationDelegatorReward): _120.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _120.DelegationDelegatorRewardProtoMsg): _120.DelegationDelegatorReward;
                toProto(message: _120.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _120.DelegationDelegatorReward): _120.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _120.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_120.CommunityPoolSpendProposalWithDeposit>): _120.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _120.CommunityPoolSpendProposalWithDepositAmino): _120.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _120.CommunityPoolSpendProposalWithDeposit): _120.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _120.CommunityPoolSpendProposalWithDepositAminoMsg): _120.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _120.CommunityPoolSpendProposalWithDeposit): _120.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _120.CommunityPoolSpendProposalWithDepositProtoMsg): _120.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _120.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _120.CommunityPoolSpendProposalWithDeposit): _120.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _124.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _124.Module;
                    fromPartial(_: Partial<_124.Module>): _124.Module;
                    fromAmino(_: _124.ModuleAmino): _124.Module;
                    toAmino(_: _124.Module): _124.ModuleAmino;
                    fromAminoMsg(object: _124.ModuleAminoMsg): _124.Module;
                    toAminoMsg(message: _124.Module): _124.ModuleAminoMsg;
                    fromProtoMsg(message: _124.ModuleProtoMsg): _124.Module;
                    toProto(message: _124.Module): Uint8Array;
                    toProtoMsg(message: _124.Module): _124.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _371.MsgClientImpl;
            QueryClientImpl: typeof _352.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _127.QueryEvidenceRequest): Promise<_127.QueryEvidenceResponse>;
                allEvidence(request?: _127.QueryAllEvidenceRequest): Promise<_127.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _331.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _128.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _128.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _128.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _128.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _128.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _128.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _128.MsgSubmitEvidence) => _128.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _128.MsgSubmitEvidenceAmino) => _128.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _128.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgSubmitEvidence;
                fromPartial(object: Partial<_128.MsgSubmitEvidence>): _128.MsgSubmitEvidence;
                fromAmino(object: _128.MsgSubmitEvidenceAmino): _128.MsgSubmitEvidence;
                toAmino(message: _128.MsgSubmitEvidence): _128.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _128.MsgSubmitEvidenceAminoMsg): _128.MsgSubmitEvidence;
                toAminoMsg(message: _128.MsgSubmitEvidence): _128.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _128.MsgSubmitEvidenceProtoMsg): _128.MsgSubmitEvidence;
                toProto(message: _128.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _128.MsgSubmitEvidence): _128.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _128.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_128.MsgSubmitEvidenceResponse>): _128.MsgSubmitEvidenceResponse;
                fromAmino(object: _128.MsgSubmitEvidenceResponseAmino): _128.MsgSubmitEvidenceResponse;
                toAmino(message: _128.MsgSubmitEvidenceResponse): _128.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _128.MsgSubmitEvidenceResponseAminoMsg): _128.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _128.MsgSubmitEvidenceResponse): _128.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _128.MsgSubmitEvidenceResponseProtoMsg): _128.MsgSubmitEvidenceResponse;
                toProto(message: _128.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _128.MsgSubmitEvidenceResponse): _128.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _127.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryEvidenceRequest;
                fromPartial(object: Partial<_127.QueryEvidenceRequest>): _127.QueryEvidenceRequest;
                fromAmino(object: _127.QueryEvidenceRequestAmino): _127.QueryEvidenceRequest;
                toAmino(message: _127.QueryEvidenceRequest): _127.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _127.QueryEvidenceRequestAminoMsg): _127.QueryEvidenceRequest;
                toAminoMsg(message: _127.QueryEvidenceRequest): _127.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _127.QueryEvidenceRequestProtoMsg): _127.QueryEvidenceRequest;
                toProto(message: _127.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _127.QueryEvidenceRequest): _127.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _127.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryEvidenceResponse;
                fromPartial(object: Partial<_127.QueryEvidenceResponse>): _127.QueryEvidenceResponse;
                fromAmino(object: _127.QueryEvidenceResponseAmino): _127.QueryEvidenceResponse;
                toAmino(message: _127.QueryEvidenceResponse): _127.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _127.QueryEvidenceResponseAminoMsg): _127.QueryEvidenceResponse;
                toAminoMsg(message: _127.QueryEvidenceResponse): _127.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _127.QueryEvidenceResponseProtoMsg): _127.QueryEvidenceResponse;
                toProto(message: _127.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _127.QueryEvidenceResponse): _127.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _127.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_127.QueryAllEvidenceRequest>): _127.QueryAllEvidenceRequest;
                fromAmino(object: _127.QueryAllEvidenceRequestAmino): _127.QueryAllEvidenceRequest;
                toAmino(message: _127.QueryAllEvidenceRequest): _127.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _127.QueryAllEvidenceRequestAminoMsg): _127.QueryAllEvidenceRequest;
                toAminoMsg(message: _127.QueryAllEvidenceRequest): _127.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _127.QueryAllEvidenceRequestProtoMsg): _127.QueryAllEvidenceRequest;
                toProto(message: _127.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _127.QueryAllEvidenceRequest): _127.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _127.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_127.QueryAllEvidenceResponse>): _127.QueryAllEvidenceResponse;
                fromAmino(object: _127.QueryAllEvidenceResponseAmino): _127.QueryAllEvidenceResponse;
                toAmino(message: _127.QueryAllEvidenceResponse): _127.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _127.QueryAllEvidenceResponseAminoMsg): _127.QueryAllEvidenceResponse;
                toAminoMsg(message: _127.QueryAllEvidenceResponse): _127.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _127.QueryAllEvidenceResponseProtoMsg): _127.QueryAllEvidenceResponse;
                toProto(message: _127.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _127.QueryAllEvidenceResponse): _127.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _126.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GenesisState;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
                fromAmino(object: _126.GenesisStateAmino): _126.GenesisState;
                toAmino(message: _126.GenesisState): _126.GenesisStateAmino;
                fromAminoMsg(object: _126.GenesisStateAminoMsg): _126.GenesisState;
                toAminoMsg(message: _126.GenesisState): _126.GenesisStateAminoMsg;
                fromProtoMsg(message: _126.GenesisStateProtoMsg): _126.GenesisState;
                toProto(message: _126.GenesisState): Uint8Array;
                toProtoMsg(message: _126.GenesisState): _126.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _125.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.Equivocation;
                fromPartial(object: Partial<_125.Equivocation>): _125.Equivocation;
                fromAmino(object: _125.EquivocationAmino): _125.Equivocation;
                toAmino(message: _125.Equivocation): _125.EquivocationAmino;
                fromAminoMsg(object: _125.EquivocationAminoMsg): _125.Equivocation;
                toAminoMsg(message: _125.Equivocation): _125.EquivocationAminoMsg;
                fromProtoMsg(message: _125.EquivocationProtoMsg): _125.Equivocation;
                toProto(message: _125.Equivocation): Uint8Array;
                toProtoMsg(message: _125.Equivocation): _125.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _129.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _129.Module;
                    fromPartial(_: Partial<_129.Module>): _129.Module;
                    fromAmino(_: _129.ModuleAmino): _129.Module;
                    toAmino(_: _129.Module): _129.ModuleAmino;
                    fromAminoMsg(object: _129.ModuleAminoMsg): _129.Module;
                    toAminoMsg(message: _129.Module): _129.ModuleAminoMsg;
                    fromProtoMsg(message: _129.ModuleProtoMsg): _129.Module;
                    toProto(message: _129.Module): Uint8Array;
                    toProtoMsg(message: _129.Module): _129.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _372.MsgClientImpl;
            QueryClientImpl: typeof _353.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _132.QueryAllowanceRequest): Promise<_132.QueryAllowanceResponse>;
                allowances(request: _132.QueryAllowancesRequest): Promise<_132.QueryAllowancesResponse>;
                allowancesByGranter(request: _132.QueryAllowancesByGranterRequest): Promise<_132.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _332.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _133.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _133.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _133.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _133.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _133.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _133.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _133.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _133.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _133.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _133.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _133.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _133.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _133.MsgGrantAllowance) => _133.MsgGrantAllowanceAmino;
                    fromAmino: (object: _133.MsgGrantAllowanceAmino) => _133.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _133.MsgRevokeAllowance) => _133.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _133.MsgRevokeAllowanceAmino) => _133.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _133.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgGrantAllowance;
                fromPartial(object: Partial<_133.MsgGrantAllowance>): _133.MsgGrantAllowance;
                fromAmino(object: _133.MsgGrantAllowanceAmino): _133.MsgGrantAllowance;
                toAmino(message: _133.MsgGrantAllowance): _133.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _133.MsgGrantAllowanceAminoMsg): _133.MsgGrantAllowance;
                toAminoMsg(message: _133.MsgGrantAllowance): _133.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _133.MsgGrantAllowanceProtoMsg): _133.MsgGrantAllowance;
                toProto(message: _133.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _133.MsgGrantAllowance): _133.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _133.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_133.MsgGrantAllowanceResponse>): _133.MsgGrantAllowanceResponse;
                fromAmino(_: _133.MsgGrantAllowanceResponseAmino): _133.MsgGrantAllowanceResponse;
                toAmino(_: _133.MsgGrantAllowanceResponse): _133.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _133.MsgGrantAllowanceResponseAminoMsg): _133.MsgGrantAllowanceResponse;
                toAminoMsg(message: _133.MsgGrantAllowanceResponse): _133.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _133.MsgGrantAllowanceResponseProtoMsg): _133.MsgGrantAllowanceResponse;
                toProto(message: _133.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _133.MsgGrantAllowanceResponse): _133.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _133.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgRevokeAllowance;
                fromPartial(object: Partial<_133.MsgRevokeAllowance>): _133.MsgRevokeAllowance;
                fromAmino(object: _133.MsgRevokeAllowanceAmino): _133.MsgRevokeAllowance;
                toAmino(message: _133.MsgRevokeAllowance): _133.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _133.MsgRevokeAllowanceAminoMsg): _133.MsgRevokeAllowance;
                toAminoMsg(message: _133.MsgRevokeAllowance): _133.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _133.MsgRevokeAllowanceProtoMsg): _133.MsgRevokeAllowance;
                toProto(message: _133.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _133.MsgRevokeAllowance): _133.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _133.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_133.MsgRevokeAllowanceResponse>): _133.MsgRevokeAllowanceResponse;
                fromAmino(_: _133.MsgRevokeAllowanceResponseAmino): _133.MsgRevokeAllowanceResponse;
                toAmino(_: _133.MsgRevokeAllowanceResponse): _133.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _133.MsgRevokeAllowanceResponseAminoMsg): _133.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _133.MsgRevokeAllowanceResponse): _133.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _133.MsgRevokeAllowanceResponseProtoMsg): _133.MsgRevokeAllowanceResponse;
                toProto(message: _133.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _133.MsgRevokeAllowanceResponse): _133.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _130.BasicAllowance | _130.PeriodicAllowance | _130.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _132.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAllowanceRequest;
                fromPartial(object: Partial<_132.QueryAllowanceRequest>): _132.QueryAllowanceRequest;
                fromAmino(object: _132.QueryAllowanceRequestAmino): _132.QueryAllowanceRequest;
                toAmino(message: _132.QueryAllowanceRequest): _132.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _132.QueryAllowanceRequestAminoMsg): _132.QueryAllowanceRequest;
                toAminoMsg(message: _132.QueryAllowanceRequest): _132.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _132.QueryAllowanceRequestProtoMsg): _132.QueryAllowanceRequest;
                toProto(message: _132.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAllowanceRequest): _132.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _132.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAllowanceResponse;
                fromPartial(object: Partial<_132.QueryAllowanceResponse>): _132.QueryAllowanceResponse;
                fromAmino(object: _132.QueryAllowanceResponseAmino): _132.QueryAllowanceResponse;
                toAmino(message: _132.QueryAllowanceResponse): _132.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _132.QueryAllowanceResponseAminoMsg): _132.QueryAllowanceResponse;
                toAminoMsg(message: _132.QueryAllowanceResponse): _132.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _132.QueryAllowanceResponseProtoMsg): _132.QueryAllowanceResponse;
                toProto(message: _132.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAllowanceResponse): _132.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _132.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAllowancesRequest;
                fromPartial(object: Partial<_132.QueryAllowancesRequest>): _132.QueryAllowancesRequest;
                fromAmino(object: _132.QueryAllowancesRequestAmino): _132.QueryAllowancesRequest;
                toAmino(message: _132.QueryAllowancesRequest): _132.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _132.QueryAllowancesRequestAminoMsg): _132.QueryAllowancesRequest;
                toAminoMsg(message: _132.QueryAllowancesRequest): _132.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _132.QueryAllowancesRequestProtoMsg): _132.QueryAllowancesRequest;
                toProto(message: _132.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAllowancesRequest): _132.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _132.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAllowancesResponse;
                fromPartial(object: Partial<_132.QueryAllowancesResponse>): _132.QueryAllowancesResponse;
                fromAmino(object: _132.QueryAllowancesResponseAmino): _132.QueryAllowancesResponse;
                toAmino(message: _132.QueryAllowancesResponse): _132.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _132.QueryAllowancesResponseAminoMsg): _132.QueryAllowancesResponse;
                toAminoMsg(message: _132.QueryAllowancesResponse): _132.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _132.QueryAllowancesResponseProtoMsg): _132.QueryAllowancesResponse;
                toProto(message: _132.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAllowancesResponse): _132.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _132.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_132.QueryAllowancesByGranterRequest>): _132.QueryAllowancesByGranterRequest;
                fromAmino(object: _132.QueryAllowancesByGranterRequestAmino): _132.QueryAllowancesByGranterRequest;
                toAmino(message: _132.QueryAllowancesByGranterRequest): _132.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _132.QueryAllowancesByGranterRequestAminoMsg): _132.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _132.QueryAllowancesByGranterRequest): _132.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _132.QueryAllowancesByGranterRequestProtoMsg): _132.QueryAllowancesByGranterRequest;
                toProto(message: _132.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _132.QueryAllowancesByGranterRequest): _132.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _132.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_132.QueryAllowancesByGranterResponse>): _132.QueryAllowancesByGranterResponse;
                fromAmino(object: _132.QueryAllowancesByGranterResponseAmino): _132.QueryAllowancesByGranterResponse;
                toAmino(message: _132.QueryAllowancesByGranterResponse): _132.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _132.QueryAllowancesByGranterResponseAminoMsg): _132.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _132.QueryAllowancesByGranterResponse): _132.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _132.QueryAllowancesByGranterResponseProtoMsg): _132.QueryAllowancesByGranterResponse;
                toProto(message: _132.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _132.QueryAllowancesByGranterResponse): _132.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _130.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.BasicAllowance;
                fromPartial(object: Partial<_130.BasicAllowance>): _130.BasicAllowance;
                fromAmino(object: _130.BasicAllowanceAmino): _130.BasicAllowance;
                toAmino(message: _130.BasicAllowance): _130.BasicAllowanceAmino;
                fromAminoMsg(object: _130.BasicAllowanceAminoMsg): _130.BasicAllowance;
                toAminoMsg(message: _130.BasicAllowance): _130.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _130.BasicAllowanceProtoMsg): _130.BasicAllowance;
                toProto(message: _130.BasicAllowance): Uint8Array;
                toProtoMsg(message: _130.BasicAllowance): _130.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _130.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.PeriodicAllowance;
                fromPartial(object: Partial<_130.PeriodicAllowance>): _130.PeriodicAllowance;
                fromAmino(object: _130.PeriodicAllowanceAmino): _130.PeriodicAllowance;
                toAmino(message: _130.PeriodicAllowance): _130.PeriodicAllowanceAmino;
                fromAminoMsg(object: _130.PeriodicAllowanceAminoMsg): _130.PeriodicAllowance;
                toAminoMsg(message: _130.PeriodicAllowance): _130.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _130.PeriodicAllowanceProtoMsg): _130.PeriodicAllowance;
                toProto(message: _130.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _130.PeriodicAllowance): _130.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _130.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.AllowedMsgAllowance;
                fromPartial(object: Partial<_130.AllowedMsgAllowance>): _130.AllowedMsgAllowance;
                fromAmino(object: _130.AllowedMsgAllowanceAmino): _130.AllowedMsgAllowance;
                toAmino(message: _130.AllowedMsgAllowance): _130.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _130.AllowedMsgAllowanceAminoMsg): _130.AllowedMsgAllowance;
                toAminoMsg(message: _130.AllowedMsgAllowance): _130.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _130.AllowedMsgAllowanceProtoMsg): _130.AllowedMsgAllowance;
                toProto(message: _130.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _130.AllowedMsgAllowance): _130.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _130.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Grant;
                fromPartial(object: Partial<_130.Grant>): _130.Grant;
                fromAmino(object: _130.GrantAmino): _130.Grant;
                toAmino(message: _130.Grant): _130.GrantAmino;
                fromAminoMsg(object: _130.GrantAminoMsg): _130.Grant;
                toAminoMsg(message: _130.Grant): _130.GrantAminoMsg;
                fromProtoMsg(message: _130.GrantProtoMsg): _130.Grant;
                toProto(message: _130.Grant): Uint8Array;
                toProtoMsg(message: _130.Grant): _130.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _134.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _134.Module;
                    fromPartial(_: Partial<_134.Module>): _134.Module;
                    fromAmino(_: _134.ModuleAmino): _134.Module;
                    toAmino(_: _134.Module): _134.ModuleAmino;
                    fromAminoMsg(object: _134.ModuleAminoMsg): _134.Module;
                    toAminoMsg(message: _134.Module): _134.ModuleAminoMsg;
                    fromProtoMsg(message: _134.ModuleProtoMsg): _134.Module;
                    toProto(message: _134.Module): Uint8Array;
                    toProtoMsg(message: _134.Module): _134.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _135.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.GenesisState;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
                fromAmino(object: _135.GenesisStateAmino): _135.GenesisState;
                toAmino(message: _135.GenesisState): _135.GenesisStateAmino;
                fromAminoMsg(object: _135.GenesisStateAminoMsg): _135.GenesisState;
                toAminoMsg(message: _135.GenesisState): _135.GenesisStateAminoMsg;
                fromProtoMsg(message: _135.GenesisStateProtoMsg): _135.GenesisState;
                toProto(message: _135.GenesisState): Uint8Array;
                toProtoMsg(message: _135.GenesisState): _135.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _136.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _136.Module;
                    fromPartial(object: Partial<_136.Module>): _136.Module;
                    fromAmino(object: _136.ModuleAmino): _136.Module;
                    toAmino(message: _136.Module): _136.ModuleAmino;
                    fromAminoMsg(object: _136.ModuleAminoMsg): _136.Module;
                    toAminoMsg(message: _136.Module): _136.ModuleAminoMsg;
                    fromProtoMsg(message: _136.ModuleProtoMsg): _136.Module;
                    toProto(message: _136.Module): Uint8Array;
                    toProtoMsg(message: _136.Module): _136.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _373.MsgClientImpl;
            QueryClientImpl: typeof _354.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _139.QueryProposalRequest): Promise<_139.QueryProposalResponse>;
                proposals(request: _139.QueryProposalsRequest): Promise<_139.QueryProposalsResponse>;
                vote(request: _139.QueryVoteRequest): Promise<_139.QueryVoteResponse>;
                votes(request: _139.QueryVotesRequest): Promise<_139.QueryVotesResponse>;
                params(request: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                deposit(request: _139.QueryDepositRequest): Promise<_139.QueryDepositResponse>;
                deposits(request: _139.QueryDepositsRequest): Promise<_139.QueryDepositsResponse>;
                tallyResult(request: _139.QueryTallyResultRequest): Promise<_139.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _333.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _140.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _140.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _140.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _140.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _140.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _140.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _140.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _140.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _140.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _140.MsgExecLegacyContent;
                    };
                    vote(value: _140.MsgVote): {
                        typeUrl: string;
                        value: _140.MsgVote;
                    };
                    voteWeighted(value: _140.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _140.MsgVoteWeighted;
                    };
                    deposit(value: _140.MsgDeposit): {
                        typeUrl: string;
                        value: _140.MsgDeposit;
                    };
                    updateParams(value: _140.MsgUpdateParams): {
                        typeUrl: string;
                        value: _140.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _140.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _140.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _140.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _140.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _140.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _140.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _140.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _140.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _140.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _140.MsgExecLegacyContent;
                    };
                    vote(value: _140.MsgVote): {
                        typeUrl: string;
                        value: _140.MsgVote;
                    };
                    voteWeighted(value: _140.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _140.MsgVoteWeighted;
                    };
                    deposit(value: _140.MsgDeposit): {
                        typeUrl: string;
                        value: _140.MsgDeposit;
                    };
                    updateParams(value: _140.MsgUpdateParams): {
                        typeUrl: string;
                        value: _140.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _140.MsgSubmitProposal) => _140.MsgSubmitProposalAmino;
                    fromAmino: (object: _140.MsgSubmitProposalAmino) => _140.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _140.MsgExecLegacyContent) => _140.MsgExecLegacyContentAmino;
                    fromAmino: (object: _140.MsgExecLegacyContentAmino) => _140.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _140.MsgVote) => _140.MsgVoteAmino;
                    fromAmino: (object: _140.MsgVoteAmino) => _140.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _140.MsgVoteWeighted) => _140.MsgVoteWeightedAmino;
                    fromAmino: (object: _140.MsgVoteWeightedAmino) => _140.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _140.MsgDeposit) => _140.MsgDepositAmino;
                    fromAmino: (object: _140.MsgDepositAmino) => _140.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _140.MsgUpdateParams) => _140.MsgUpdateParamsAmino;
                    fromAmino: (object: _140.MsgUpdateParamsAmino) => _140.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _140.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgSubmitProposal;
                fromPartial(object: Partial<_140.MsgSubmitProposal>): _140.MsgSubmitProposal;
                fromAmino(object: _140.MsgSubmitProposalAmino): _140.MsgSubmitProposal;
                toAmino(message: _140.MsgSubmitProposal): _140.MsgSubmitProposalAmino;
                fromAminoMsg(object: _140.MsgSubmitProposalAminoMsg): _140.MsgSubmitProposal;
                toAminoMsg(message: _140.MsgSubmitProposal): _140.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _140.MsgSubmitProposalProtoMsg): _140.MsgSubmitProposal;
                toProto(message: _140.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _140.MsgSubmitProposal): _140.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _140.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_140.MsgSubmitProposalResponse>): _140.MsgSubmitProposalResponse;
                fromAmino(object: _140.MsgSubmitProposalResponseAmino): _140.MsgSubmitProposalResponse;
                toAmino(message: _140.MsgSubmitProposalResponse): _140.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _140.MsgSubmitProposalResponseAminoMsg): _140.MsgSubmitProposalResponse;
                toAminoMsg(message: _140.MsgSubmitProposalResponse): _140.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _140.MsgSubmitProposalResponseProtoMsg): _140.MsgSubmitProposalResponse;
                toProto(message: _140.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _140.MsgSubmitProposalResponse): _140.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _140.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgExecLegacyContent;
                fromPartial(object: Partial<_140.MsgExecLegacyContent>): _140.MsgExecLegacyContent;
                fromAmino(object: _140.MsgExecLegacyContentAmino): _140.MsgExecLegacyContent;
                toAmino(message: _140.MsgExecLegacyContent): _140.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _140.MsgExecLegacyContentAminoMsg): _140.MsgExecLegacyContent;
                toAminoMsg(message: _140.MsgExecLegacyContent): _140.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _140.MsgExecLegacyContentProtoMsg): _140.MsgExecLegacyContent;
                toProto(message: _140.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _140.MsgExecLegacyContent): _140.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _140.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _140.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_140.MsgExecLegacyContentResponse>): _140.MsgExecLegacyContentResponse;
                fromAmino(_: _140.MsgExecLegacyContentResponseAmino): _140.MsgExecLegacyContentResponse;
                toAmino(_: _140.MsgExecLegacyContentResponse): _140.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _140.MsgExecLegacyContentResponseAminoMsg): _140.MsgExecLegacyContentResponse;
                toAminoMsg(message: _140.MsgExecLegacyContentResponse): _140.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _140.MsgExecLegacyContentResponseProtoMsg): _140.MsgExecLegacyContentResponse;
                toProto(message: _140.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _140.MsgExecLegacyContentResponse): _140.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _140.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgVote;
                fromPartial(object: Partial<_140.MsgVote>): _140.MsgVote;
                fromAmino(object: _140.MsgVoteAmino): _140.MsgVote;
                toAmino(message: _140.MsgVote): _140.MsgVoteAmino;
                fromAminoMsg(object: _140.MsgVoteAminoMsg): _140.MsgVote;
                toAminoMsg(message: _140.MsgVote): _140.MsgVoteAminoMsg;
                fromProtoMsg(message: _140.MsgVoteProtoMsg): _140.MsgVote;
                toProto(message: _140.MsgVote): Uint8Array;
                toProtoMsg(message: _140.MsgVote): _140.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _140.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _140.MsgVoteResponse;
                fromPartial(_: Partial<_140.MsgVoteResponse>): _140.MsgVoteResponse;
                fromAmino(_: _140.MsgVoteResponseAmino): _140.MsgVoteResponse;
                toAmino(_: _140.MsgVoteResponse): _140.MsgVoteResponseAmino;
                fromAminoMsg(object: _140.MsgVoteResponseAminoMsg): _140.MsgVoteResponse;
                toAminoMsg(message: _140.MsgVoteResponse): _140.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _140.MsgVoteResponseProtoMsg): _140.MsgVoteResponse;
                toProto(message: _140.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _140.MsgVoteResponse): _140.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _140.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgVoteWeighted;
                fromPartial(object: Partial<_140.MsgVoteWeighted>): _140.MsgVoteWeighted;
                fromAmino(object: _140.MsgVoteWeightedAmino): _140.MsgVoteWeighted;
                toAmino(message: _140.MsgVoteWeighted): _140.MsgVoteWeightedAmino;
                fromAminoMsg(object: _140.MsgVoteWeightedAminoMsg): _140.MsgVoteWeighted;
                toAminoMsg(message: _140.MsgVoteWeighted): _140.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _140.MsgVoteWeightedProtoMsg): _140.MsgVoteWeighted;
                toProto(message: _140.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _140.MsgVoteWeighted): _140.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _140.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _140.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_140.MsgVoteWeightedResponse>): _140.MsgVoteWeightedResponse;
                fromAmino(_: _140.MsgVoteWeightedResponseAmino): _140.MsgVoteWeightedResponse;
                toAmino(_: _140.MsgVoteWeightedResponse): _140.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _140.MsgVoteWeightedResponseAminoMsg): _140.MsgVoteWeightedResponse;
                toAminoMsg(message: _140.MsgVoteWeightedResponse): _140.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _140.MsgVoteWeightedResponseProtoMsg): _140.MsgVoteWeightedResponse;
                toProto(message: _140.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _140.MsgVoteWeightedResponse): _140.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _140.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgDeposit;
                fromPartial(object: Partial<_140.MsgDeposit>): _140.MsgDeposit;
                fromAmino(object: _140.MsgDepositAmino): _140.MsgDeposit;
                toAmino(message: _140.MsgDeposit): _140.MsgDepositAmino;
                fromAminoMsg(object: _140.MsgDepositAminoMsg): _140.MsgDeposit;
                toAminoMsg(message: _140.MsgDeposit): _140.MsgDepositAminoMsg;
                fromProtoMsg(message: _140.MsgDepositProtoMsg): _140.MsgDeposit;
                toProto(message: _140.MsgDeposit): Uint8Array;
                toProtoMsg(message: _140.MsgDeposit): _140.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _140.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _140.MsgDepositResponse;
                fromPartial(_: Partial<_140.MsgDepositResponse>): _140.MsgDepositResponse;
                fromAmino(_: _140.MsgDepositResponseAmino): _140.MsgDepositResponse;
                toAmino(_: _140.MsgDepositResponse): _140.MsgDepositResponseAmino;
                fromAminoMsg(object: _140.MsgDepositResponseAminoMsg): _140.MsgDepositResponse;
                toAminoMsg(message: _140.MsgDepositResponse): _140.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _140.MsgDepositResponseProtoMsg): _140.MsgDepositResponse;
                toProto(message: _140.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _140.MsgDepositResponse): _140.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _140.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.MsgUpdateParams;
                fromPartial(object: Partial<_140.MsgUpdateParams>): _140.MsgUpdateParams;
                fromAmino(object: _140.MsgUpdateParamsAmino): _140.MsgUpdateParams;
                toAmino(message: _140.MsgUpdateParams): _140.MsgUpdateParamsAmino;
                fromAminoMsg(object: _140.MsgUpdateParamsAminoMsg): _140.MsgUpdateParams;
                toAminoMsg(message: _140.MsgUpdateParams): _140.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _140.MsgUpdateParamsProtoMsg): _140.MsgUpdateParams;
                toProto(message: _140.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _140.MsgUpdateParams): _140.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _140.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _140.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_140.MsgUpdateParamsResponse>): _140.MsgUpdateParamsResponse;
                fromAmino(_: _140.MsgUpdateParamsResponseAmino): _140.MsgUpdateParamsResponse;
                toAmino(_: _140.MsgUpdateParamsResponse): _140.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _140.MsgUpdateParamsResponseAminoMsg): _140.MsgUpdateParamsResponse;
                toAminoMsg(message: _140.MsgUpdateParamsResponse): _140.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _140.MsgUpdateParamsResponseProtoMsg): _140.MsgUpdateParamsResponse;
                toProto(message: _140.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _140.MsgUpdateParamsResponse): _140.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("../kava/committee/v1beta1/proposal").CommitteeChangeProposal | import("../kava/committee/v1beta1/proposal").CommitteeDeleteProposal | _120.CommunityPoolSpendProposal | _120.CommunityPoolSpendProposalWithDeposit | _168.ParameterChangeProposal | _190.SoftwareUpgradeProposal | _190.CancelSoftwareUpgradeProposal | _142.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _139.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryProposalRequest;
                fromPartial(object: Partial<_139.QueryProposalRequest>): _139.QueryProposalRequest;
                fromAmino(object: _139.QueryProposalRequestAmino): _139.QueryProposalRequest;
                toAmino(message: _139.QueryProposalRequest): _139.QueryProposalRequestAmino;
                fromAminoMsg(object: _139.QueryProposalRequestAminoMsg): _139.QueryProposalRequest;
                toAminoMsg(message: _139.QueryProposalRequest): _139.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _139.QueryProposalRequestProtoMsg): _139.QueryProposalRequest;
                toProto(message: _139.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _139.QueryProposalRequest): _139.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _139.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryProposalResponse;
                fromPartial(object: Partial<_139.QueryProposalResponse>): _139.QueryProposalResponse;
                fromAmino(object: _139.QueryProposalResponseAmino): _139.QueryProposalResponse;
                toAmino(message: _139.QueryProposalResponse): _139.QueryProposalResponseAmino;
                fromAminoMsg(object: _139.QueryProposalResponseAminoMsg): _139.QueryProposalResponse;
                toAminoMsg(message: _139.QueryProposalResponse): _139.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _139.QueryProposalResponseProtoMsg): _139.QueryProposalResponse;
                toProto(message: _139.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _139.QueryProposalResponse): _139.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _139.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryProposalsRequest;
                fromPartial(object: Partial<_139.QueryProposalsRequest>): _139.QueryProposalsRequest;
                fromAmino(object: _139.QueryProposalsRequestAmino): _139.QueryProposalsRequest;
                toAmino(message: _139.QueryProposalsRequest): _139.QueryProposalsRequestAmino;
                fromAminoMsg(object: _139.QueryProposalsRequestAminoMsg): _139.QueryProposalsRequest;
                toAminoMsg(message: _139.QueryProposalsRequest): _139.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _139.QueryProposalsRequestProtoMsg): _139.QueryProposalsRequest;
                toProto(message: _139.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _139.QueryProposalsRequest): _139.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _139.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryProposalsResponse;
                fromPartial(object: Partial<_139.QueryProposalsResponse>): _139.QueryProposalsResponse;
                fromAmino(object: _139.QueryProposalsResponseAmino): _139.QueryProposalsResponse;
                toAmino(message: _139.QueryProposalsResponse): _139.QueryProposalsResponseAmino;
                fromAminoMsg(object: _139.QueryProposalsResponseAminoMsg): _139.QueryProposalsResponse;
                toAminoMsg(message: _139.QueryProposalsResponse): _139.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _139.QueryProposalsResponseProtoMsg): _139.QueryProposalsResponse;
                toProto(message: _139.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _139.QueryProposalsResponse): _139.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _139.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryVoteRequest;
                fromPartial(object: Partial<_139.QueryVoteRequest>): _139.QueryVoteRequest;
                fromAmino(object: _139.QueryVoteRequestAmino): _139.QueryVoteRequest;
                toAmino(message: _139.QueryVoteRequest): _139.QueryVoteRequestAmino;
                fromAminoMsg(object: _139.QueryVoteRequestAminoMsg): _139.QueryVoteRequest;
                toAminoMsg(message: _139.QueryVoteRequest): _139.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _139.QueryVoteRequestProtoMsg): _139.QueryVoteRequest;
                toProto(message: _139.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _139.QueryVoteRequest): _139.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _139.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryVoteResponse;
                fromPartial(object: Partial<_139.QueryVoteResponse>): _139.QueryVoteResponse;
                fromAmino(object: _139.QueryVoteResponseAmino): _139.QueryVoteResponse;
                toAmino(message: _139.QueryVoteResponse): _139.QueryVoteResponseAmino;
                fromAminoMsg(object: _139.QueryVoteResponseAminoMsg): _139.QueryVoteResponse;
                toAminoMsg(message: _139.QueryVoteResponse): _139.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _139.QueryVoteResponseProtoMsg): _139.QueryVoteResponse;
                toProto(message: _139.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _139.QueryVoteResponse): _139.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _139.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryVotesRequest;
                fromPartial(object: Partial<_139.QueryVotesRequest>): _139.QueryVotesRequest;
                fromAmino(object: _139.QueryVotesRequestAmino): _139.QueryVotesRequest;
                toAmino(message: _139.QueryVotesRequest): _139.QueryVotesRequestAmino;
                fromAminoMsg(object: _139.QueryVotesRequestAminoMsg): _139.QueryVotesRequest;
                toAminoMsg(message: _139.QueryVotesRequest): _139.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _139.QueryVotesRequestProtoMsg): _139.QueryVotesRequest;
                toProto(message: _139.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _139.QueryVotesRequest): _139.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _139.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryVotesResponse;
                fromPartial(object: Partial<_139.QueryVotesResponse>): _139.QueryVotesResponse;
                fromAmino(object: _139.QueryVotesResponseAmino): _139.QueryVotesResponse;
                toAmino(message: _139.QueryVotesResponse): _139.QueryVotesResponseAmino;
                fromAminoMsg(object: _139.QueryVotesResponseAminoMsg): _139.QueryVotesResponse;
                toAminoMsg(message: _139.QueryVotesResponse): _139.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _139.QueryVotesResponseProtoMsg): _139.QueryVotesResponse;
                toProto(message: _139.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _139.QueryVotesResponse): _139.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _139.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryParamsRequest;
                fromPartial(object: Partial<_139.QueryParamsRequest>): _139.QueryParamsRequest;
                fromAmino(object: _139.QueryParamsRequestAmino): _139.QueryParamsRequest;
                toAmino(message: _139.QueryParamsRequest): _139.QueryParamsRequestAmino;
                fromAminoMsg(object: _139.QueryParamsRequestAminoMsg): _139.QueryParamsRequest;
                toAminoMsg(message: _139.QueryParamsRequest): _139.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _139.QueryParamsRequestProtoMsg): _139.QueryParamsRequest;
                toProto(message: _139.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _139.QueryParamsRequest): _139.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _139.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryParamsResponse;
                fromPartial(object: Partial<_139.QueryParamsResponse>): _139.QueryParamsResponse;
                fromAmino(object: _139.QueryParamsResponseAmino): _139.QueryParamsResponse;
                toAmino(message: _139.QueryParamsResponse): _139.QueryParamsResponseAmino;
                fromAminoMsg(object: _139.QueryParamsResponseAminoMsg): _139.QueryParamsResponse;
                toAminoMsg(message: _139.QueryParamsResponse): _139.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _139.QueryParamsResponseProtoMsg): _139.QueryParamsResponse;
                toProto(message: _139.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _139.QueryParamsResponse): _139.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _139.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryDepositRequest;
                fromPartial(object: Partial<_139.QueryDepositRequest>): _139.QueryDepositRequest;
                fromAmino(object: _139.QueryDepositRequestAmino): _139.QueryDepositRequest;
                toAmino(message: _139.QueryDepositRequest): _139.QueryDepositRequestAmino;
                fromAminoMsg(object: _139.QueryDepositRequestAminoMsg): _139.QueryDepositRequest;
                toAminoMsg(message: _139.QueryDepositRequest): _139.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _139.QueryDepositRequestProtoMsg): _139.QueryDepositRequest;
                toProto(message: _139.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _139.QueryDepositRequest): _139.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _139.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryDepositResponse;
                fromPartial(object: Partial<_139.QueryDepositResponse>): _139.QueryDepositResponse;
                fromAmino(object: _139.QueryDepositResponseAmino): _139.QueryDepositResponse;
                toAmino(message: _139.QueryDepositResponse): _139.QueryDepositResponseAmino;
                fromAminoMsg(object: _139.QueryDepositResponseAminoMsg): _139.QueryDepositResponse;
                toAminoMsg(message: _139.QueryDepositResponse): _139.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _139.QueryDepositResponseProtoMsg): _139.QueryDepositResponse;
                toProto(message: _139.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _139.QueryDepositResponse): _139.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _139.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryDepositsRequest;
                fromPartial(object: Partial<_139.QueryDepositsRequest>): _139.QueryDepositsRequest;
                fromAmino(object: _139.QueryDepositsRequestAmino): _139.QueryDepositsRequest;
                toAmino(message: _139.QueryDepositsRequest): _139.QueryDepositsRequestAmino;
                fromAminoMsg(object: _139.QueryDepositsRequestAminoMsg): _139.QueryDepositsRequest;
                toAminoMsg(message: _139.QueryDepositsRequest): _139.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _139.QueryDepositsRequestProtoMsg): _139.QueryDepositsRequest;
                toProto(message: _139.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _139.QueryDepositsRequest): _139.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _139.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryDepositsResponse;
                fromPartial(object: Partial<_139.QueryDepositsResponse>): _139.QueryDepositsResponse;
                fromAmino(object: _139.QueryDepositsResponseAmino): _139.QueryDepositsResponse;
                toAmino(message: _139.QueryDepositsResponse): _139.QueryDepositsResponseAmino;
                fromAminoMsg(object: _139.QueryDepositsResponseAminoMsg): _139.QueryDepositsResponse;
                toAminoMsg(message: _139.QueryDepositsResponse): _139.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _139.QueryDepositsResponseProtoMsg): _139.QueryDepositsResponse;
                toProto(message: _139.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _139.QueryDepositsResponse): _139.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _139.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryTallyResultRequest;
                fromPartial(object: Partial<_139.QueryTallyResultRequest>): _139.QueryTallyResultRequest;
                fromAmino(object: _139.QueryTallyResultRequestAmino): _139.QueryTallyResultRequest;
                toAmino(message: _139.QueryTallyResultRequest): _139.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _139.QueryTallyResultRequestAminoMsg): _139.QueryTallyResultRequest;
                toAminoMsg(message: _139.QueryTallyResultRequest): _139.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _139.QueryTallyResultRequestProtoMsg): _139.QueryTallyResultRequest;
                toProto(message: _139.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _139.QueryTallyResultRequest): _139.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _139.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.QueryTallyResultResponse;
                fromPartial(object: Partial<_139.QueryTallyResultResponse>): _139.QueryTallyResultResponse;
                fromAmino(object: _139.QueryTallyResultResponseAmino): _139.QueryTallyResultResponse;
                toAmino(message: _139.QueryTallyResultResponse): _139.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _139.QueryTallyResultResponseAminoMsg): _139.QueryTallyResultResponse;
                toAminoMsg(message: _139.QueryTallyResultResponse): _139.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _139.QueryTallyResultResponseProtoMsg): _139.QueryTallyResultResponse;
                toProto(message: _139.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _139.QueryTallyResultResponse): _139.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _138.VoteOption;
            voteOptionToJSON(object: _138.VoteOption): string;
            proposalStatusFromJSON(object: any): _138.ProposalStatus;
            proposalStatusToJSON(object: _138.ProposalStatus): string;
            VoteOption: typeof _138.VoteOption;
            VoteOptionSDKType: typeof _138.VoteOption;
            VoteOptionAmino: typeof _138.VoteOption;
            ProposalStatus: typeof _138.ProposalStatus;
            ProposalStatusSDKType: typeof _138.ProposalStatus;
            ProposalStatusAmino: typeof _138.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _138.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.WeightedVoteOption;
                fromPartial(object: Partial<_138.WeightedVoteOption>): _138.WeightedVoteOption;
                fromAmino(object: _138.WeightedVoteOptionAmino): _138.WeightedVoteOption;
                toAmino(message: _138.WeightedVoteOption): _138.WeightedVoteOptionAmino;
                fromAminoMsg(object: _138.WeightedVoteOptionAminoMsg): _138.WeightedVoteOption;
                toAminoMsg(message: _138.WeightedVoteOption): _138.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _138.WeightedVoteOptionProtoMsg): _138.WeightedVoteOption;
                toProto(message: _138.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _138.WeightedVoteOption): _138.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _138.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.Deposit;
                fromPartial(object: Partial<_138.Deposit>): _138.Deposit;
                fromAmino(object: _138.DepositAmino): _138.Deposit;
                toAmino(message: _138.Deposit): _138.DepositAmino;
                fromAminoMsg(object: _138.DepositAminoMsg): _138.Deposit;
                toAminoMsg(message: _138.Deposit): _138.DepositAminoMsg;
                fromProtoMsg(message: _138.DepositProtoMsg): _138.Deposit;
                toProto(message: _138.Deposit): Uint8Array;
                toProtoMsg(message: _138.Deposit): _138.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _138.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.Proposal;
                fromPartial(object: Partial<_138.Proposal>): _138.Proposal;
                fromAmino(object: _138.ProposalAmino): _138.Proposal;
                toAmino(message: _138.Proposal): _138.ProposalAmino;
                fromAminoMsg(object: _138.ProposalAminoMsg): _138.Proposal;
                toAminoMsg(message: _138.Proposal): _138.ProposalAminoMsg;
                fromProtoMsg(message: _138.ProposalProtoMsg): _138.Proposal;
                toProto(message: _138.Proposal): Uint8Array;
                toProtoMsg(message: _138.Proposal): _138.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _138.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.TallyResult;
                fromPartial(object: Partial<_138.TallyResult>): _138.TallyResult;
                fromAmino(object: _138.TallyResultAmino): _138.TallyResult;
                toAmino(message: _138.TallyResult): _138.TallyResultAmino;
                fromAminoMsg(object: _138.TallyResultAminoMsg): _138.TallyResult;
                toAminoMsg(message: _138.TallyResult): _138.TallyResultAminoMsg;
                fromProtoMsg(message: _138.TallyResultProtoMsg): _138.TallyResult;
                toProto(message: _138.TallyResult): Uint8Array;
                toProtoMsg(message: _138.TallyResult): _138.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _138.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.Vote;
                fromPartial(object: Partial<_138.Vote>): _138.Vote;
                fromAmino(object: _138.VoteAmino): _138.Vote;
                toAmino(message: _138.Vote): _138.VoteAmino;
                fromAminoMsg(object: _138.VoteAminoMsg): _138.Vote;
                toAminoMsg(message: _138.Vote): _138.VoteAminoMsg;
                fromProtoMsg(message: _138.VoteProtoMsg): _138.Vote;
                toProto(message: _138.Vote): Uint8Array;
                toProtoMsg(message: _138.Vote): _138.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _138.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.DepositParams;
                fromPartial(object: Partial<_138.DepositParams>): _138.DepositParams;
                fromAmino(object: _138.DepositParamsAmino): _138.DepositParams;
                toAmino(message: _138.DepositParams): _138.DepositParamsAmino;
                fromAminoMsg(object: _138.DepositParamsAminoMsg): _138.DepositParams;
                toAminoMsg(message: _138.DepositParams): _138.DepositParamsAminoMsg;
                fromProtoMsg(message: _138.DepositParamsProtoMsg): _138.DepositParams;
                toProto(message: _138.DepositParams): Uint8Array;
                toProtoMsg(message: _138.DepositParams): _138.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _138.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.VotingParams;
                fromPartial(object: Partial<_138.VotingParams>): _138.VotingParams;
                fromAmino(object: _138.VotingParamsAmino): _138.VotingParams;
                toAmino(message: _138.VotingParams): _138.VotingParamsAmino;
                fromAminoMsg(object: _138.VotingParamsAminoMsg): _138.VotingParams;
                toAminoMsg(message: _138.VotingParams): _138.VotingParamsAminoMsg;
                fromProtoMsg(message: _138.VotingParamsProtoMsg): _138.VotingParams;
                toProto(message: _138.VotingParams): Uint8Array;
                toProtoMsg(message: _138.VotingParams): _138.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _138.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.TallyParams;
                fromPartial(object: Partial<_138.TallyParams>): _138.TallyParams;
                fromAmino(object: _138.TallyParamsAmino): _138.TallyParams;
                toAmino(message: _138.TallyParams): _138.TallyParamsAmino;
                fromAminoMsg(object: _138.TallyParamsAminoMsg): _138.TallyParams;
                toAminoMsg(message: _138.TallyParams): _138.TallyParamsAminoMsg;
                fromProtoMsg(message: _138.TallyParamsProtoMsg): _138.TallyParams;
                toProto(message: _138.TallyParams): Uint8Array;
                toProtoMsg(message: _138.TallyParams): _138.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _138.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.Params;
                fromPartial(object: Partial<_138.Params>): _138.Params;
                fromAmino(object: _138.ParamsAmino): _138.Params;
                toAmino(message: _138.Params): _138.ParamsAmino;
                fromAminoMsg(object: _138.ParamsAminoMsg): _138.Params;
                toAminoMsg(message: _138.Params): _138.ParamsAminoMsg;
                fromProtoMsg(message: _138.ParamsProtoMsg): _138.Params;
                toProto(message: _138.Params): Uint8Array;
                toProtoMsg(message: _138.Params): _138.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _137.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.GenesisState;
                fromPartial(object: Partial<_137.GenesisState>): _137.GenesisState;
                fromAmino(object: _137.GenesisStateAmino): _137.GenesisState;
                toAmino(message: _137.GenesisState): _137.GenesisStateAmino;
                fromAminoMsg(object: _137.GenesisStateAminoMsg): _137.GenesisState;
                toAminoMsg(message: _137.GenesisState): _137.GenesisStateAminoMsg;
                fromProtoMsg(message: _137.GenesisStateProtoMsg): _137.GenesisState;
                toProto(message: _137.GenesisState): Uint8Array;
                toProtoMsg(message: _137.GenesisState): _137.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _374.MsgClientImpl;
            QueryClientImpl: typeof _355.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _143.QueryProposalRequest): Promise<_143.QueryProposalResponse>;
                proposals(request: _143.QueryProposalsRequest): Promise<_143.QueryProposalsResponse>;
                vote(request: _143.QueryVoteRequest): Promise<_143.QueryVoteResponse>;
                votes(request: _143.QueryVotesRequest): Promise<_143.QueryVotesResponse>;
                params(request: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                deposit(request: _143.QueryDepositRequest): Promise<_143.QueryDepositResponse>;
                deposits(request: _143.QueryDepositsRequest): Promise<_143.QueryDepositsResponse>;
                tallyResult(request: _143.QueryTallyResultRequest): Promise<_143.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _334.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _144.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _144.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _144.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _144.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _144.MsgSubmitProposal;
                    };
                    vote(value: _144.MsgVote): {
                        typeUrl: string;
                        value: _144.MsgVote;
                    };
                    voteWeighted(value: _144.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _144.MsgVoteWeighted;
                    };
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _144.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _144.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _144.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _144.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _144.MsgSubmitProposal;
                    };
                    vote(value: _144.MsgVote): {
                        typeUrl: string;
                        value: _144.MsgVote;
                    };
                    voteWeighted(value: _144.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _144.MsgVoteWeighted;
                    };
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSubmitProposal) => _144.MsgSubmitProposalAmino;
                    fromAmino: (object: _144.MsgSubmitProposalAmino) => _144.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _144.MsgVote) => _144.MsgVoteAmino;
                    fromAmino: (object: _144.MsgVoteAmino) => _144.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _144.MsgVoteWeighted) => _144.MsgVoteWeightedAmino;
                    fromAmino: (object: _144.MsgVoteWeightedAmino) => _144.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _144.MsgDeposit) => _144.MsgDepositAmino;
                    fromAmino: (object: _144.MsgDepositAmino) => _144.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _144.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgSubmitProposal;
                fromPartial(object: Partial<_144.MsgSubmitProposal>): _144.MsgSubmitProposal;
                fromAmino(object: _144.MsgSubmitProposalAmino): _144.MsgSubmitProposal;
                toAmino(message: _144.MsgSubmitProposal): _144.MsgSubmitProposalAmino;
                fromAminoMsg(object: _144.MsgSubmitProposalAminoMsg): _144.MsgSubmitProposal;
                toAminoMsg(message: _144.MsgSubmitProposal): _144.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _144.MsgSubmitProposalProtoMsg): _144.MsgSubmitProposal;
                toProto(message: _144.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _144.MsgSubmitProposal): _144.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _144.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_144.MsgSubmitProposalResponse>): _144.MsgSubmitProposalResponse;
                fromAmino(object: _144.MsgSubmitProposalResponseAmino): _144.MsgSubmitProposalResponse;
                toAmino(message: _144.MsgSubmitProposalResponse): _144.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _144.MsgSubmitProposalResponseAminoMsg): _144.MsgSubmitProposalResponse;
                toAminoMsg(message: _144.MsgSubmitProposalResponse): _144.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSubmitProposalResponseProtoMsg): _144.MsgSubmitProposalResponse;
                toProto(message: _144.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSubmitProposalResponse): _144.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _144.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgVote;
                fromPartial(object: Partial<_144.MsgVote>): _144.MsgVote;
                fromAmino(object: _144.MsgVoteAmino): _144.MsgVote;
                toAmino(message: _144.MsgVote): _144.MsgVoteAmino;
                fromAminoMsg(object: _144.MsgVoteAminoMsg): _144.MsgVote;
                toAminoMsg(message: _144.MsgVote): _144.MsgVoteAminoMsg;
                fromProtoMsg(message: _144.MsgVoteProtoMsg): _144.MsgVote;
                toProto(message: _144.MsgVote): Uint8Array;
                toProtoMsg(message: _144.MsgVote): _144.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _144.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgVoteResponse;
                fromPartial(_: Partial<_144.MsgVoteResponse>): _144.MsgVoteResponse;
                fromAmino(_: _144.MsgVoteResponseAmino): _144.MsgVoteResponse;
                toAmino(_: _144.MsgVoteResponse): _144.MsgVoteResponseAmino;
                fromAminoMsg(object: _144.MsgVoteResponseAminoMsg): _144.MsgVoteResponse;
                toAminoMsg(message: _144.MsgVoteResponse): _144.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _144.MsgVoteResponseProtoMsg): _144.MsgVoteResponse;
                toProto(message: _144.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _144.MsgVoteResponse): _144.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _144.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgVoteWeighted;
                fromPartial(object: Partial<_144.MsgVoteWeighted>): _144.MsgVoteWeighted;
                fromAmino(object: _144.MsgVoteWeightedAmino): _144.MsgVoteWeighted;
                toAmino(message: _144.MsgVoteWeighted): _144.MsgVoteWeightedAmino;
                fromAminoMsg(object: _144.MsgVoteWeightedAminoMsg): _144.MsgVoteWeighted;
                toAminoMsg(message: _144.MsgVoteWeighted): _144.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _144.MsgVoteWeightedProtoMsg): _144.MsgVoteWeighted;
                toProto(message: _144.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _144.MsgVoteWeighted): _144.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _144.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_144.MsgVoteWeightedResponse>): _144.MsgVoteWeightedResponse;
                fromAmino(_: _144.MsgVoteWeightedResponseAmino): _144.MsgVoteWeightedResponse;
                toAmino(_: _144.MsgVoteWeightedResponse): _144.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _144.MsgVoteWeightedResponseAminoMsg): _144.MsgVoteWeightedResponse;
                toAminoMsg(message: _144.MsgVoteWeightedResponse): _144.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _144.MsgVoteWeightedResponseProtoMsg): _144.MsgVoteWeightedResponse;
                toProto(message: _144.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _144.MsgVoteWeightedResponse): _144.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _144.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgDeposit;
                fromPartial(object: Partial<_144.MsgDeposit>): _144.MsgDeposit;
                fromAmino(object: _144.MsgDepositAmino): _144.MsgDeposit;
                toAmino(message: _144.MsgDeposit): _144.MsgDepositAmino;
                fromAminoMsg(object: _144.MsgDepositAminoMsg): _144.MsgDeposit;
                toAminoMsg(message: _144.MsgDeposit): _144.MsgDepositAminoMsg;
                fromProtoMsg(message: _144.MsgDepositProtoMsg): _144.MsgDeposit;
                toProto(message: _144.MsgDeposit): Uint8Array;
                toProtoMsg(message: _144.MsgDeposit): _144.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _144.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgDepositResponse;
                fromPartial(_: Partial<_144.MsgDepositResponse>): _144.MsgDepositResponse;
                fromAmino(_: _144.MsgDepositResponseAmino): _144.MsgDepositResponse;
                toAmino(_: _144.MsgDepositResponse): _144.MsgDepositResponseAmino;
                fromAminoMsg(object: _144.MsgDepositResponseAminoMsg): _144.MsgDepositResponse;
                toAminoMsg(message: _144.MsgDepositResponse): _144.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _144.MsgDepositResponseProtoMsg): _144.MsgDepositResponse;
                toProto(message: _144.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _144.MsgDepositResponse): _144.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("../kava/committee/v1beta1/proposal").CommitteeChangeProposal | import("../kava/committee/v1beta1/proposal").CommitteeDeleteProposal | _120.CommunityPoolSpendProposal | _120.CommunityPoolSpendProposalWithDeposit | _168.ParameterChangeProposal | _190.SoftwareUpgradeProposal | _190.CancelSoftwareUpgradeProposal | _142.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _143.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryProposalRequest;
                fromPartial(object: Partial<_143.QueryProposalRequest>): _143.QueryProposalRequest;
                fromAmino(object: _143.QueryProposalRequestAmino): _143.QueryProposalRequest;
                toAmino(message: _143.QueryProposalRequest): _143.QueryProposalRequestAmino;
                fromAminoMsg(object: _143.QueryProposalRequestAminoMsg): _143.QueryProposalRequest;
                toAminoMsg(message: _143.QueryProposalRequest): _143.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _143.QueryProposalRequestProtoMsg): _143.QueryProposalRequest;
                toProto(message: _143.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _143.QueryProposalRequest): _143.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _143.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryProposalResponse;
                fromPartial(object: Partial<_143.QueryProposalResponse>): _143.QueryProposalResponse;
                fromAmino(object: _143.QueryProposalResponseAmino): _143.QueryProposalResponse;
                toAmino(message: _143.QueryProposalResponse): _143.QueryProposalResponseAmino;
                fromAminoMsg(object: _143.QueryProposalResponseAminoMsg): _143.QueryProposalResponse;
                toAminoMsg(message: _143.QueryProposalResponse): _143.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _143.QueryProposalResponseProtoMsg): _143.QueryProposalResponse;
                toProto(message: _143.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _143.QueryProposalResponse): _143.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _143.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryProposalsRequest;
                fromPartial(object: Partial<_143.QueryProposalsRequest>): _143.QueryProposalsRequest;
                fromAmino(object: _143.QueryProposalsRequestAmino): _143.QueryProposalsRequest;
                toAmino(message: _143.QueryProposalsRequest): _143.QueryProposalsRequestAmino;
                fromAminoMsg(object: _143.QueryProposalsRequestAminoMsg): _143.QueryProposalsRequest;
                toAminoMsg(message: _143.QueryProposalsRequest): _143.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryProposalsRequestProtoMsg): _143.QueryProposalsRequest;
                toProto(message: _143.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryProposalsRequest): _143.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _143.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryProposalsResponse;
                fromPartial(object: Partial<_143.QueryProposalsResponse>): _143.QueryProposalsResponse;
                fromAmino(object: _143.QueryProposalsResponseAmino): _143.QueryProposalsResponse;
                toAmino(message: _143.QueryProposalsResponse): _143.QueryProposalsResponseAmino;
                fromAminoMsg(object: _143.QueryProposalsResponseAminoMsg): _143.QueryProposalsResponse;
                toAminoMsg(message: _143.QueryProposalsResponse): _143.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryProposalsResponseProtoMsg): _143.QueryProposalsResponse;
                toProto(message: _143.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryProposalsResponse): _143.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _143.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryVoteRequest;
                fromPartial(object: Partial<_143.QueryVoteRequest>): _143.QueryVoteRequest;
                fromAmino(object: _143.QueryVoteRequestAmino): _143.QueryVoteRequest;
                toAmino(message: _143.QueryVoteRequest): _143.QueryVoteRequestAmino;
                fromAminoMsg(object: _143.QueryVoteRequestAminoMsg): _143.QueryVoteRequest;
                toAminoMsg(message: _143.QueryVoteRequest): _143.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _143.QueryVoteRequestProtoMsg): _143.QueryVoteRequest;
                toProto(message: _143.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _143.QueryVoteRequest): _143.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _143.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryVoteResponse;
                fromPartial(object: Partial<_143.QueryVoteResponse>): _143.QueryVoteResponse;
                fromAmino(object: _143.QueryVoteResponseAmino): _143.QueryVoteResponse;
                toAmino(message: _143.QueryVoteResponse): _143.QueryVoteResponseAmino;
                fromAminoMsg(object: _143.QueryVoteResponseAminoMsg): _143.QueryVoteResponse;
                toAminoMsg(message: _143.QueryVoteResponse): _143.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _143.QueryVoteResponseProtoMsg): _143.QueryVoteResponse;
                toProto(message: _143.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _143.QueryVoteResponse): _143.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _143.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryVotesRequest;
                fromPartial(object: Partial<_143.QueryVotesRequest>): _143.QueryVotesRequest;
                fromAmino(object: _143.QueryVotesRequestAmino): _143.QueryVotesRequest;
                toAmino(message: _143.QueryVotesRequest): _143.QueryVotesRequestAmino;
                fromAminoMsg(object: _143.QueryVotesRequestAminoMsg): _143.QueryVotesRequest;
                toAminoMsg(message: _143.QueryVotesRequest): _143.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _143.QueryVotesRequestProtoMsg): _143.QueryVotesRequest;
                toProto(message: _143.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _143.QueryVotesRequest): _143.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _143.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryVotesResponse;
                fromPartial(object: Partial<_143.QueryVotesResponse>): _143.QueryVotesResponse;
                fromAmino(object: _143.QueryVotesResponseAmino): _143.QueryVotesResponse;
                toAmino(message: _143.QueryVotesResponse): _143.QueryVotesResponseAmino;
                fromAminoMsg(object: _143.QueryVotesResponseAminoMsg): _143.QueryVotesResponse;
                toAminoMsg(message: _143.QueryVotesResponse): _143.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _143.QueryVotesResponseProtoMsg): _143.QueryVotesResponse;
                toProto(message: _143.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _143.QueryVotesResponse): _143.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _143.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryParamsRequest;
                fromPartial(object: Partial<_143.QueryParamsRequest>): _143.QueryParamsRequest;
                fromAmino(object: _143.QueryParamsRequestAmino): _143.QueryParamsRequest;
                toAmino(message: _143.QueryParamsRequest): _143.QueryParamsRequestAmino;
                fromAminoMsg(object: _143.QueryParamsRequestAminoMsg): _143.QueryParamsRequest;
                toAminoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryParamsRequestProtoMsg): _143.QueryParamsRequest;
                toProto(message: _143.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _143.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryParamsResponse;
                fromPartial(object: Partial<_143.QueryParamsResponse>): _143.QueryParamsResponse;
                fromAmino(object: _143.QueryParamsResponseAmino): _143.QueryParamsResponse;
                toAmino(message: _143.QueryParamsResponse): _143.QueryParamsResponseAmino;
                fromAminoMsg(object: _143.QueryParamsResponseAminoMsg): _143.QueryParamsResponse;
                toAminoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryParamsResponseProtoMsg): _143.QueryParamsResponse;
                toProto(message: _143.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _143.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryDepositRequest;
                fromPartial(object: Partial<_143.QueryDepositRequest>): _143.QueryDepositRequest;
                fromAmino(object: _143.QueryDepositRequestAmino): _143.QueryDepositRequest;
                toAmino(message: _143.QueryDepositRequest): _143.QueryDepositRequestAmino;
                fromAminoMsg(object: _143.QueryDepositRequestAminoMsg): _143.QueryDepositRequest;
                toAminoMsg(message: _143.QueryDepositRequest): _143.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _143.QueryDepositRequestProtoMsg): _143.QueryDepositRequest;
                toProto(message: _143.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _143.QueryDepositRequest): _143.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _143.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryDepositResponse;
                fromPartial(object: Partial<_143.QueryDepositResponse>): _143.QueryDepositResponse;
                fromAmino(object: _143.QueryDepositResponseAmino): _143.QueryDepositResponse;
                toAmino(message: _143.QueryDepositResponse): _143.QueryDepositResponseAmino;
                fromAminoMsg(object: _143.QueryDepositResponseAminoMsg): _143.QueryDepositResponse;
                toAminoMsg(message: _143.QueryDepositResponse): _143.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _143.QueryDepositResponseProtoMsg): _143.QueryDepositResponse;
                toProto(message: _143.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _143.QueryDepositResponse): _143.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _143.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryDepositsRequest;
                fromPartial(object: Partial<_143.QueryDepositsRequest>): _143.QueryDepositsRequest;
                fromAmino(object: _143.QueryDepositsRequestAmino): _143.QueryDepositsRequest;
                toAmino(message: _143.QueryDepositsRequest): _143.QueryDepositsRequestAmino;
                fromAminoMsg(object: _143.QueryDepositsRequestAminoMsg): _143.QueryDepositsRequest;
                toAminoMsg(message: _143.QueryDepositsRequest): _143.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryDepositsRequestProtoMsg): _143.QueryDepositsRequest;
                toProto(message: _143.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryDepositsRequest): _143.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _143.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryDepositsResponse;
                fromPartial(object: Partial<_143.QueryDepositsResponse>): _143.QueryDepositsResponse;
                fromAmino(object: _143.QueryDepositsResponseAmino): _143.QueryDepositsResponse;
                toAmino(message: _143.QueryDepositsResponse): _143.QueryDepositsResponseAmino;
                fromAminoMsg(object: _143.QueryDepositsResponseAminoMsg): _143.QueryDepositsResponse;
                toAminoMsg(message: _143.QueryDepositsResponse): _143.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryDepositsResponseProtoMsg): _143.QueryDepositsResponse;
                toProto(message: _143.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryDepositsResponse): _143.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _143.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryTallyResultRequest;
                fromPartial(object: Partial<_143.QueryTallyResultRequest>): _143.QueryTallyResultRequest;
                fromAmino(object: _143.QueryTallyResultRequestAmino): _143.QueryTallyResultRequest;
                toAmino(message: _143.QueryTallyResultRequest): _143.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _143.QueryTallyResultRequestAminoMsg): _143.QueryTallyResultRequest;
                toAminoMsg(message: _143.QueryTallyResultRequest): _143.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _143.QueryTallyResultRequestProtoMsg): _143.QueryTallyResultRequest;
                toProto(message: _143.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _143.QueryTallyResultRequest): _143.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _143.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.QueryTallyResultResponse;
                fromPartial(object: Partial<_143.QueryTallyResultResponse>): _143.QueryTallyResultResponse;
                fromAmino(object: _143.QueryTallyResultResponseAmino): _143.QueryTallyResultResponse;
                toAmino(message: _143.QueryTallyResultResponse): _143.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _143.QueryTallyResultResponseAminoMsg): _143.QueryTallyResultResponse;
                toAminoMsg(message: _143.QueryTallyResultResponse): _143.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _143.QueryTallyResultResponseProtoMsg): _143.QueryTallyResultResponse;
                toProto(message: _143.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _143.QueryTallyResultResponse): _143.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _142.VoteOption;
            voteOptionToJSON(object: _142.VoteOption): string;
            proposalStatusFromJSON(object: any): _142.ProposalStatus;
            proposalStatusToJSON(object: _142.ProposalStatus): string;
            VoteOption: typeof _142.VoteOption;
            VoteOptionSDKType: typeof _142.VoteOption;
            VoteOptionAmino: typeof _142.VoteOption;
            ProposalStatus: typeof _142.ProposalStatus;
            ProposalStatusSDKType: typeof _142.ProposalStatus;
            ProposalStatusAmino: typeof _142.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _142.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.WeightedVoteOption;
                fromPartial(object: Partial<_142.WeightedVoteOption>): _142.WeightedVoteOption;
                fromAmino(object: _142.WeightedVoteOptionAmino): _142.WeightedVoteOption;
                toAmino(message: _142.WeightedVoteOption): _142.WeightedVoteOptionAmino;
                fromAminoMsg(object: _142.WeightedVoteOptionAminoMsg): _142.WeightedVoteOption;
                toAminoMsg(message: _142.WeightedVoteOption): _142.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _142.WeightedVoteOptionProtoMsg): _142.WeightedVoteOption;
                toProto(message: _142.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _142.WeightedVoteOption): _142.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _142.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.TextProposal;
                fromPartial(object: Partial<_142.TextProposal>): _142.TextProposal;
                fromAmino(object: _142.TextProposalAmino): _142.TextProposal;
                toAmino(message: _142.TextProposal): _142.TextProposalAmino;
                fromAminoMsg(object: _142.TextProposalAminoMsg): _142.TextProposal;
                toAminoMsg(message: _142.TextProposal): _142.TextProposalAminoMsg;
                fromProtoMsg(message: _142.TextProposalProtoMsg): _142.TextProposal;
                toProto(message: _142.TextProposal): Uint8Array;
                toProtoMsg(message: _142.TextProposal): _142.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _142.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Deposit;
                fromPartial(object: Partial<_142.Deposit>): _142.Deposit;
                fromAmino(object: _142.DepositAmino): _142.Deposit;
                toAmino(message: _142.Deposit): _142.DepositAmino;
                fromAminoMsg(object: _142.DepositAminoMsg): _142.Deposit;
                toAminoMsg(message: _142.Deposit): _142.DepositAminoMsg;
                fromProtoMsg(message: _142.DepositProtoMsg): _142.Deposit;
                toProto(message: _142.Deposit): Uint8Array;
                toProtoMsg(message: _142.Deposit): _142.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _142.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Proposal;
                fromPartial(object: Partial<_142.Proposal>): _142.Proposal;
                fromAmino(object: _142.ProposalAmino): _142.Proposal;
                toAmino(message: _142.Proposal): _142.ProposalAmino;
                fromAminoMsg(object: _142.ProposalAminoMsg): _142.Proposal;
                toAminoMsg(message: _142.Proposal): _142.ProposalAminoMsg;
                fromProtoMsg(message: _142.ProposalProtoMsg): _142.Proposal;
                toProto(message: _142.Proposal): Uint8Array;
                toProtoMsg(message: _142.Proposal): _142.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _142.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.TallyResult;
                fromPartial(object: Partial<_142.TallyResult>): _142.TallyResult;
                fromAmino(object: _142.TallyResultAmino): _142.TallyResult;
                toAmino(message: _142.TallyResult): _142.TallyResultAmino;
                fromAminoMsg(object: _142.TallyResultAminoMsg): _142.TallyResult;
                toAminoMsg(message: _142.TallyResult): _142.TallyResultAminoMsg;
                fromProtoMsg(message: _142.TallyResultProtoMsg): _142.TallyResult;
                toProto(message: _142.TallyResult): Uint8Array;
                toProtoMsg(message: _142.TallyResult): _142.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _142.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Vote;
                fromPartial(object: Partial<_142.Vote>): _142.Vote;
                fromAmino(object: _142.VoteAmino): _142.Vote;
                toAmino(message: _142.Vote): _142.VoteAmino;
                fromAminoMsg(object: _142.VoteAminoMsg): _142.Vote;
                toAminoMsg(message: _142.Vote): _142.VoteAminoMsg;
                fromProtoMsg(message: _142.VoteProtoMsg): _142.Vote;
                toProto(message: _142.Vote): Uint8Array;
                toProtoMsg(message: _142.Vote): _142.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _142.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DepositParams;
                fromPartial(object: Partial<_142.DepositParams>): _142.DepositParams;
                fromAmino(object: _142.DepositParamsAmino): _142.DepositParams;
                toAmino(message: _142.DepositParams): _142.DepositParamsAmino;
                fromAminoMsg(object: _142.DepositParamsAminoMsg): _142.DepositParams;
                toAminoMsg(message: _142.DepositParams): _142.DepositParamsAminoMsg;
                fromProtoMsg(message: _142.DepositParamsProtoMsg): _142.DepositParams;
                toProto(message: _142.DepositParams): Uint8Array;
                toProtoMsg(message: _142.DepositParams): _142.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _142.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.VotingParams;
                fromPartial(object: Partial<_142.VotingParams>): _142.VotingParams;
                fromAmino(object: _142.VotingParamsAmino): _142.VotingParams;
                toAmino(message: _142.VotingParams): _142.VotingParamsAmino;
                fromAminoMsg(object: _142.VotingParamsAminoMsg): _142.VotingParams;
                toAminoMsg(message: _142.VotingParams): _142.VotingParamsAminoMsg;
                fromProtoMsg(message: _142.VotingParamsProtoMsg): _142.VotingParams;
                toProto(message: _142.VotingParams): Uint8Array;
                toProtoMsg(message: _142.VotingParams): _142.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _142.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.TallyParams;
                fromPartial(object: Partial<_142.TallyParams>): _142.TallyParams;
                fromAmino(object: _142.TallyParamsAmino): _142.TallyParams;
                toAmino(message: _142.TallyParams): _142.TallyParamsAmino;
                fromAminoMsg(object: _142.TallyParamsAminoMsg): _142.TallyParams;
                toAminoMsg(message: _142.TallyParams): _142.TallyParamsAminoMsg;
                fromProtoMsg(message: _142.TallyParamsProtoMsg): _142.TallyParams;
                toProto(message: _142.TallyParams): Uint8Array;
                toProtoMsg(message: _142.TallyParams): _142.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _141.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.GenesisState;
                fromPartial(object: Partial<_141.GenesisState>): _141.GenesisState;
                fromAmino(object: _141.GenesisStateAmino): _141.GenesisState;
                toAmino(message: _141.GenesisState): _141.GenesisStateAmino;
                fromAminoMsg(object: _141.GenesisStateAminoMsg): _141.GenesisState;
                toAminoMsg(message: _141.GenesisState): _141.GenesisStateAminoMsg;
                fromProtoMsg(message: _141.GenesisStateProtoMsg): _141.GenesisState;
                toProto(message: _141.GenesisState): Uint8Array;
                toProtoMsg(message: _141.GenesisState): _141.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _145.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.Module;
                    fromPartial(object: Partial<_145.Module>): _145.Module;
                    fromAmino(object: _145.ModuleAmino): _145.Module;
                    toAmino(message: _145.Module): _145.ModuleAmino;
                    fromAminoMsg(object: _145.ModuleAminoMsg): _145.Module;
                    toAminoMsg(message: _145.Module): _145.ModuleAminoMsg;
                    fromProtoMsg(message: _145.ModuleProtoMsg): _145.Module;
                    toProto(message: _145.Module): Uint8Array;
                    toProtoMsg(message: _145.Module): _145.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _375.MsgClientImpl;
            QueryClientImpl: typeof _356.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _148.QueryGroupInfoRequest): Promise<_148.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _148.QueryGroupPolicyInfoRequest): Promise<_148.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _148.QueryGroupMembersRequest): Promise<_148.QueryGroupMembersResponse>;
                groupsByAdmin(request: _148.QueryGroupsByAdminRequest): Promise<_148.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _148.QueryGroupPoliciesByGroupRequest): Promise<_148.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _148.QueryGroupPoliciesByAdminRequest): Promise<_148.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _148.QueryProposalRequest): Promise<_148.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _148.QueryProposalsByGroupPolicyRequest): Promise<_148.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _148.QueryVoteByProposalVoterRequest): Promise<_148.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _148.QueryVotesByProposalRequest): Promise<_148.QueryVotesByProposalResponse>;
                votesByVoter(request: _148.QueryVotesByVoterRequest): Promise<_148.QueryVotesByVoterResponse>;
                groupsByMember(request: _148.QueryGroupsByMemberRequest): Promise<_148.QueryGroupsByMemberResponse>;
                tallyResult(request: _148.QueryTallyResultRequest): Promise<_148.QueryTallyResultResponse>;
                groups(request?: _148.QueryGroupsRequest): Promise<_148.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _335.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _149.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _149.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _149.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _149.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _149.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _149.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _149.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _149.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _149.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _149.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _149.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _149.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _149.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _149.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _149.MsgCreateGroup): {
                        typeUrl: string;
                        value: _149.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _149.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _149.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _149.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _149.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _149.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _149.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _149.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _149.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _149.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _149.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _149.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _149.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _149.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _149.MsgWithdrawProposal;
                    };
                    vote(value: _149.MsgVote): {
                        typeUrl: string;
                        value: _149.MsgVote;
                    };
                    exec(value: _149.MsgExec): {
                        typeUrl: string;
                        value: _149.MsgExec;
                    };
                    leaveGroup(value: _149.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _149.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _149.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _149.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _149.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _149.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _149.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _149.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _149.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _149.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _149.MsgCreateGroup): {
                        typeUrl: string;
                        value: _149.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _149.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _149.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _149.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _149.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _149.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _149.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _149.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _149.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _149.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _149.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _149.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _149.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _149.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _149.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _149.MsgWithdrawProposal;
                    };
                    vote(value: _149.MsgVote): {
                        typeUrl: string;
                        value: _149.MsgVote;
                    };
                    exec(value: _149.MsgExec): {
                        typeUrl: string;
                        value: _149.MsgExec;
                    };
                    leaveGroup(value: _149.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _149.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _149.MsgCreateGroup) => _149.MsgCreateGroupAmino;
                    fromAmino: (object: _149.MsgCreateGroupAmino) => _149.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateGroupMembers) => _149.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _149.MsgUpdateGroupMembersAmino) => _149.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateGroupAdmin) => _149.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _149.MsgUpdateGroupAdminAmino) => _149.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateGroupMetadata) => _149.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _149.MsgUpdateGroupMetadataAmino) => _149.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _149.MsgCreateGroupPolicy) => _149.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _149.MsgCreateGroupPolicyAmino) => _149.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _149.MsgCreateGroupWithPolicy) => _149.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _149.MsgCreateGroupWithPolicyAmino) => _149.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateGroupPolicyAdmin) => _149.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _149.MsgUpdateGroupPolicyAdminAmino) => _149.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateGroupPolicyDecisionPolicy) => _149.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _149.MsgUpdateGroupPolicyDecisionPolicyAmino) => _149.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateGroupPolicyMetadata) => _149.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _149.MsgUpdateGroupPolicyMetadataAmino) => _149.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSubmitProposal) => _149.MsgSubmitProposalAmino;
                    fromAmino: (object: _149.MsgSubmitProposalAmino) => _149.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _149.MsgWithdrawProposal) => _149.MsgWithdrawProposalAmino;
                    fromAmino: (object: _149.MsgWithdrawProposalAmino) => _149.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _149.MsgVote) => _149.MsgVoteAmino;
                    fromAmino: (object: _149.MsgVoteAmino) => _149.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _149.MsgExec) => _149.MsgExecAmino;
                    fromAmino: (object: _149.MsgExecAmino) => _149.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _149.MsgLeaveGroup) => _149.MsgLeaveGroupAmino;
                    fromAmino: (object: _149.MsgLeaveGroupAmino) => _149.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _150.VoteOption;
            voteOptionToJSON(object: _150.VoteOption): string;
            proposalStatusFromJSON(object: any): _150.ProposalStatus;
            proposalStatusToJSON(object: _150.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _150.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _150.ProposalExecutorResult): string;
            VoteOption: typeof _150.VoteOption;
            VoteOptionSDKType: typeof _150.VoteOption;
            VoteOptionAmino: typeof _150.VoteOption;
            ProposalStatus: typeof _150.ProposalStatus;
            ProposalStatusSDKType: typeof _150.ProposalStatus;
            ProposalStatusAmino: typeof _150.ProposalStatus;
            ProposalExecutorResult: typeof _150.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _150.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _150.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _150.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Member;
                fromPartial(object: Partial<_150.Member>): _150.Member;
                fromAmino(object: _150.MemberAmino): _150.Member;
                toAmino(message: _150.Member): _150.MemberAmino;
                fromAminoMsg(object: _150.MemberAminoMsg): _150.Member;
                toAminoMsg(message: _150.Member): _150.MemberAminoMsg;
                fromProtoMsg(message: _150.MemberProtoMsg): _150.Member;
                toProto(message: _150.Member): Uint8Array;
                toProtoMsg(message: _150.Member): _150.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _150.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.MemberRequest;
                fromPartial(object: Partial<_150.MemberRequest>): _150.MemberRequest;
                fromAmino(object: _150.MemberRequestAmino): _150.MemberRequest;
                toAmino(message: _150.MemberRequest): _150.MemberRequestAmino;
                fromAminoMsg(object: _150.MemberRequestAminoMsg): _150.MemberRequest;
                toAminoMsg(message: _150.MemberRequest): _150.MemberRequestAminoMsg;
                fromProtoMsg(message: _150.MemberRequestProtoMsg): _150.MemberRequest;
                toProto(message: _150.MemberRequest): Uint8Array;
                toProtoMsg(message: _150.MemberRequest): _150.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _150.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_150.ThresholdDecisionPolicy>): _150.ThresholdDecisionPolicy;
                fromAmino(object: _150.ThresholdDecisionPolicyAmino): _150.ThresholdDecisionPolicy;
                toAmino(message: _150.ThresholdDecisionPolicy): _150.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _150.ThresholdDecisionPolicyAminoMsg): _150.ThresholdDecisionPolicy;
                toAminoMsg(message: _150.ThresholdDecisionPolicy): _150.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _150.ThresholdDecisionPolicyProtoMsg): _150.ThresholdDecisionPolicy;
                toProto(message: _150.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _150.ThresholdDecisionPolicy): _150.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _150.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.PercentageDecisionPolicy;
                fromPartial(object: Partial<_150.PercentageDecisionPolicy>): _150.PercentageDecisionPolicy;
                fromAmino(object: _150.PercentageDecisionPolicyAmino): _150.PercentageDecisionPolicy;
                toAmino(message: _150.PercentageDecisionPolicy): _150.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _150.PercentageDecisionPolicyAminoMsg): _150.PercentageDecisionPolicy;
                toAminoMsg(message: _150.PercentageDecisionPolicy): _150.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _150.PercentageDecisionPolicyProtoMsg): _150.PercentageDecisionPolicy;
                toProto(message: _150.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _150.PercentageDecisionPolicy): _150.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _150.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.DecisionPolicyWindows;
                fromPartial(object: Partial<_150.DecisionPolicyWindows>): _150.DecisionPolicyWindows;
                fromAmino(object: _150.DecisionPolicyWindowsAmino): _150.DecisionPolicyWindows;
                toAmino(message: _150.DecisionPolicyWindows): _150.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _150.DecisionPolicyWindowsAminoMsg): _150.DecisionPolicyWindows;
                toAminoMsg(message: _150.DecisionPolicyWindows): _150.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _150.DecisionPolicyWindowsProtoMsg): _150.DecisionPolicyWindows;
                toProto(message: _150.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _150.DecisionPolicyWindows): _150.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _150.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.GroupInfo;
                fromPartial(object: Partial<_150.GroupInfo>): _150.GroupInfo;
                fromAmino(object: _150.GroupInfoAmino): _150.GroupInfo;
                toAmino(message: _150.GroupInfo): _150.GroupInfoAmino;
                fromAminoMsg(object: _150.GroupInfoAminoMsg): _150.GroupInfo;
                toAminoMsg(message: _150.GroupInfo): _150.GroupInfoAminoMsg;
                fromProtoMsg(message: _150.GroupInfoProtoMsg): _150.GroupInfo;
                toProto(message: _150.GroupInfo): Uint8Array;
                toProtoMsg(message: _150.GroupInfo): _150.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _150.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.GroupMember;
                fromPartial(object: Partial<_150.GroupMember>): _150.GroupMember;
                fromAmino(object: _150.GroupMemberAmino): _150.GroupMember;
                toAmino(message: _150.GroupMember): _150.GroupMemberAmino;
                fromAminoMsg(object: _150.GroupMemberAminoMsg): _150.GroupMember;
                toAminoMsg(message: _150.GroupMember): _150.GroupMemberAminoMsg;
                fromProtoMsg(message: _150.GroupMemberProtoMsg): _150.GroupMember;
                toProto(message: _150.GroupMember): Uint8Array;
                toProtoMsg(message: _150.GroupMember): _150.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _150.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.GroupPolicyInfo;
                fromPartial(object: Partial<_150.GroupPolicyInfo>): _150.GroupPolicyInfo;
                fromAmino(object: _150.GroupPolicyInfoAmino): _150.GroupPolicyInfo;
                toAmino(message: _150.GroupPolicyInfo): _150.GroupPolicyInfoAmino;
                fromAminoMsg(object: _150.GroupPolicyInfoAminoMsg): _150.GroupPolicyInfo;
                toAminoMsg(message: _150.GroupPolicyInfo): _150.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _150.GroupPolicyInfoProtoMsg): _150.GroupPolicyInfo;
                toProto(message: _150.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _150.GroupPolicyInfo): _150.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _150.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Proposal;
                fromPartial(object: Partial<_150.Proposal>): _150.Proposal;
                fromAmino(object: _150.ProposalAmino): _150.Proposal;
                toAmino(message: _150.Proposal): _150.ProposalAmino;
                fromAminoMsg(object: _150.ProposalAminoMsg): _150.Proposal;
                toAminoMsg(message: _150.Proposal): _150.ProposalAminoMsg;
                fromProtoMsg(message: _150.ProposalProtoMsg): _150.Proposal;
                toProto(message: _150.Proposal): Uint8Array;
                toProtoMsg(message: _150.Proposal): _150.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _150.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.TallyResult;
                fromPartial(object: Partial<_150.TallyResult>): _150.TallyResult;
                fromAmino(object: _150.TallyResultAmino): _150.TallyResult;
                toAmino(message: _150.TallyResult): _150.TallyResultAmino;
                fromAminoMsg(object: _150.TallyResultAminoMsg): _150.TallyResult;
                toAminoMsg(message: _150.TallyResult): _150.TallyResultAminoMsg;
                fromProtoMsg(message: _150.TallyResultProtoMsg): _150.TallyResult;
                toProto(message: _150.TallyResult): Uint8Array;
                toProtoMsg(message: _150.TallyResult): _150.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _150.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Vote;
                fromPartial(object: Partial<_150.Vote>): _150.Vote;
                fromAmino(object: _150.VoteAmino): _150.Vote;
                toAmino(message: _150.Vote): _150.VoteAmino;
                fromAminoMsg(object: _150.VoteAminoMsg): _150.Vote;
                toAminoMsg(message: _150.Vote): _150.VoteAminoMsg;
                fromProtoMsg(message: _150.VoteProtoMsg): _150.Vote;
                toProto(message: _150.Vote): Uint8Array;
                toProtoMsg(message: _150.Vote): _150.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _150.ThresholdDecisionPolicy | _150.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _149.Exec;
            execToJSON(object: _149.Exec): string;
            Exec: typeof _149.Exec;
            ExecSDKType: typeof _149.Exec;
            ExecAmino: typeof _149.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _149.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgCreateGroup;
                fromPartial(object: Partial<_149.MsgCreateGroup>): _149.MsgCreateGroup;
                fromAmino(object: _149.MsgCreateGroupAmino): _149.MsgCreateGroup;
                toAmino(message: _149.MsgCreateGroup): _149.MsgCreateGroupAmino;
                fromAminoMsg(object: _149.MsgCreateGroupAminoMsg): _149.MsgCreateGroup;
                toAminoMsg(message: _149.MsgCreateGroup): _149.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _149.MsgCreateGroupProtoMsg): _149.MsgCreateGroup;
                toProto(message: _149.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _149.MsgCreateGroup): _149.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _149.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgCreateGroupResponse;
                fromPartial(object: Partial<_149.MsgCreateGroupResponse>): _149.MsgCreateGroupResponse;
                fromAmino(object: _149.MsgCreateGroupResponseAmino): _149.MsgCreateGroupResponse;
                toAmino(message: _149.MsgCreateGroupResponse): _149.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _149.MsgCreateGroupResponseAminoMsg): _149.MsgCreateGroupResponse;
                toAminoMsg(message: _149.MsgCreateGroupResponse): _149.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _149.MsgCreateGroupResponseProtoMsg): _149.MsgCreateGroupResponse;
                toProto(message: _149.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _149.MsgCreateGroupResponse): _149.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _149.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_149.MsgUpdateGroupMembers>): _149.MsgUpdateGroupMembers;
                fromAmino(object: _149.MsgUpdateGroupMembersAmino): _149.MsgUpdateGroupMembers;
                toAmino(message: _149.MsgUpdateGroupMembers): _149.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupMembersAminoMsg): _149.MsgUpdateGroupMembers;
                toAminoMsg(message: _149.MsgUpdateGroupMembers): _149.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupMembersProtoMsg): _149.MsgUpdateGroupMembers;
                toProto(message: _149.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupMembers): _149.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_149.MsgUpdateGroupMembersResponse>): _149.MsgUpdateGroupMembersResponse;
                fromAmino(_: _149.MsgUpdateGroupMembersResponseAmino): _149.MsgUpdateGroupMembersResponse;
                toAmino(_: _149.MsgUpdateGroupMembersResponse): _149.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupMembersResponseAminoMsg): _149.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _149.MsgUpdateGroupMembersResponse): _149.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupMembersResponseProtoMsg): _149.MsgUpdateGroupMembersResponse;
                toProto(message: _149.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupMembersResponse): _149.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _149.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_149.MsgUpdateGroupAdmin>): _149.MsgUpdateGroupAdmin;
                fromAmino(object: _149.MsgUpdateGroupAdminAmino): _149.MsgUpdateGroupAdmin;
                toAmino(message: _149.MsgUpdateGroupAdmin): _149.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupAdminAminoMsg): _149.MsgUpdateGroupAdmin;
                toAminoMsg(message: _149.MsgUpdateGroupAdmin): _149.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupAdminProtoMsg): _149.MsgUpdateGroupAdmin;
                toProto(message: _149.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupAdmin): _149.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_149.MsgUpdateGroupAdminResponse>): _149.MsgUpdateGroupAdminResponse;
                fromAmino(_: _149.MsgUpdateGroupAdminResponseAmino): _149.MsgUpdateGroupAdminResponse;
                toAmino(_: _149.MsgUpdateGroupAdminResponse): _149.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupAdminResponseAminoMsg): _149.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _149.MsgUpdateGroupAdminResponse): _149.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupAdminResponseProtoMsg): _149.MsgUpdateGroupAdminResponse;
                toProto(message: _149.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupAdminResponse): _149.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _149.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_149.MsgUpdateGroupMetadata>): _149.MsgUpdateGroupMetadata;
                fromAmino(object: _149.MsgUpdateGroupMetadataAmino): _149.MsgUpdateGroupMetadata;
                toAmino(message: _149.MsgUpdateGroupMetadata): _149.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupMetadataAminoMsg): _149.MsgUpdateGroupMetadata;
                toAminoMsg(message: _149.MsgUpdateGroupMetadata): _149.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupMetadataProtoMsg): _149.MsgUpdateGroupMetadata;
                toProto(message: _149.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupMetadata): _149.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_149.MsgUpdateGroupMetadataResponse>): _149.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _149.MsgUpdateGroupMetadataResponseAmino): _149.MsgUpdateGroupMetadataResponse;
                toAmino(_: _149.MsgUpdateGroupMetadataResponse): _149.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupMetadataResponseAminoMsg): _149.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _149.MsgUpdateGroupMetadataResponse): _149.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupMetadataResponseProtoMsg): _149.MsgUpdateGroupMetadataResponse;
                toProto(message: _149.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupMetadataResponse): _149.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _149.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_149.MsgCreateGroupPolicy>): _149.MsgCreateGroupPolicy;
                fromAmino(object: _149.MsgCreateGroupPolicyAmino): _149.MsgCreateGroupPolicy;
                toAmino(message: _149.MsgCreateGroupPolicy): _149.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _149.MsgCreateGroupPolicyAminoMsg): _149.MsgCreateGroupPolicy;
                toAminoMsg(message: _149.MsgCreateGroupPolicy): _149.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _149.MsgCreateGroupPolicyProtoMsg): _149.MsgCreateGroupPolicy;
                toProto(message: _149.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _149.MsgCreateGroupPolicy): _149.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _149.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_149.MsgCreateGroupPolicyResponse>): _149.MsgCreateGroupPolicyResponse;
                fromAmino(object: _149.MsgCreateGroupPolicyResponseAmino): _149.MsgCreateGroupPolicyResponse;
                toAmino(message: _149.MsgCreateGroupPolicyResponse): _149.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _149.MsgCreateGroupPolicyResponseAminoMsg): _149.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _149.MsgCreateGroupPolicyResponse): _149.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _149.MsgCreateGroupPolicyResponseProtoMsg): _149.MsgCreateGroupPolicyResponse;
                toProto(message: _149.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _149.MsgCreateGroupPolicyResponse): _149.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _149.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_149.MsgUpdateGroupPolicyAdmin>): _149.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _149.MsgUpdateGroupPolicyAdminAmino): _149.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _149.MsgUpdateGroupPolicyAdmin): _149.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupPolicyAdminAminoMsg): _149.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _149.MsgUpdateGroupPolicyAdmin): _149.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupPolicyAdminProtoMsg): _149.MsgUpdateGroupPolicyAdmin;
                toProto(message: _149.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupPolicyAdmin): _149.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_149.MsgUpdateGroupPolicyAdminResponse>): _149.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _149.MsgUpdateGroupPolicyAdminResponseAmino): _149.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _149.MsgUpdateGroupPolicyAdminResponse): _149.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupPolicyAdminResponseAminoMsg): _149.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _149.MsgUpdateGroupPolicyAdminResponse): _149.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupPolicyAdminResponseProtoMsg): _149.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _149.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupPolicyAdminResponse): _149.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _149.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_149.MsgCreateGroupWithPolicy>): _149.MsgCreateGroupWithPolicy;
                fromAmino(object: _149.MsgCreateGroupWithPolicyAmino): _149.MsgCreateGroupWithPolicy;
                toAmino(message: _149.MsgCreateGroupWithPolicy): _149.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _149.MsgCreateGroupWithPolicyAminoMsg): _149.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _149.MsgCreateGroupWithPolicy): _149.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _149.MsgCreateGroupWithPolicyProtoMsg): _149.MsgCreateGroupWithPolicy;
                toProto(message: _149.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _149.MsgCreateGroupWithPolicy): _149.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _149.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_149.MsgCreateGroupWithPolicyResponse>): _149.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _149.MsgCreateGroupWithPolicyResponseAmino): _149.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _149.MsgCreateGroupWithPolicyResponse): _149.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _149.MsgCreateGroupWithPolicyResponseAminoMsg): _149.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _149.MsgCreateGroupWithPolicyResponse): _149.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _149.MsgCreateGroupWithPolicyResponseProtoMsg): _149.MsgCreateGroupWithPolicyResponse;
                toProto(message: _149.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _149.MsgCreateGroupWithPolicyResponse): _149.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _149.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_149.MsgUpdateGroupPolicyDecisionPolicy>): _149.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _149.MsgUpdateGroupPolicyDecisionPolicyAmino): _149.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _149.MsgUpdateGroupPolicyDecisionPolicy): _149.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _149.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _149.MsgUpdateGroupPolicyDecisionPolicy): _149.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _149.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _149.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupPolicyDecisionPolicy): _149.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_149.MsgUpdateGroupPolicyDecisionPolicyResponse>): _149.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _149.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _149.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _149.MsgUpdateGroupPolicyDecisionPolicyResponse): _149.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _149.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _149.MsgUpdateGroupPolicyDecisionPolicyResponse): _149.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _149.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _149.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupPolicyDecisionPolicyResponse): _149.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _149.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_149.MsgUpdateGroupPolicyMetadata>): _149.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _149.MsgUpdateGroupPolicyMetadataAmino): _149.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _149.MsgUpdateGroupPolicyMetadata): _149.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupPolicyMetadataAminoMsg): _149.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _149.MsgUpdateGroupPolicyMetadata): _149.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupPolicyMetadataProtoMsg): _149.MsgUpdateGroupPolicyMetadata;
                toProto(message: _149.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupPolicyMetadata): _149.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_149.MsgUpdateGroupPolicyMetadataResponse>): _149.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _149.MsgUpdateGroupPolicyMetadataResponseAmino): _149.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _149.MsgUpdateGroupPolicyMetadataResponse): _149.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _149.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _149.MsgUpdateGroupPolicyMetadataResponse): _149.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _149.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _149.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateGroupPolicyMetadataResponse): _149.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _149.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgSubmitProposal;
                fromPartial(object: Partial<_149.MsgSubmitProposal>): _149.MsgSubmitProposal;
                fromAmino(object: _149.MsgSubmitProposalAmino): _149.MsgSubmitProposal;
                toAmino(message: _149.MsgSubmitProposal): _149.MsgSubmitProposalAmino;
                fromAminoMsg(object: _149.MsgSubmitProposalAminoMsg): _149.MsgSubmitProposal;
                toAminoMsg(message: _149.MsgSubmitProposal): _149.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _149.MsgSubmitProposalProtoMsg): _149.MsgSubmitProposal;
                toProto(message: _149.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _149.MsgSubmitProposal): _149.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _149.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_149.MsgSubmitProposalResponse>): _149.MsgSubmitProposalResponse;
                fromAmino(object: _149.MsgSubmitProposalResponseAmino): _149.MsgSubmitProposalResponse;
                toAmino(message: _149.MsgSubmitProposalResponse): _149.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _149.MsgSubmitProposalResponseAminoMsg): _149.MsgSubmitProposalResponse;
                toAminoMsg(message: _149.MsgSubmitProposalResponse): _149.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSubmitProposalResponseProtoMsg): _149.MsgSubmitProposalResponse;
                toProto(message: _149.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSubmitProposalResponse): _149.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _149.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgWithdrawProposal;
                fromPartial(object: Partial<_149.MsgWithdrawProposal>): _149.MsgWithdrawProposal;
                fromAmino(object: _149.MsgWithdrawProposalAmino): _149.MsgWithdrawProposal;
                toAmino(message: _149.MsgWithdrawProposal): _149.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _149.MsgWithdrawProposalAminoMsg): _149.MsgWithdrawProposal;
                toAminoMsg(message: _149.MsgWithdrawProposal): _149.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _149.MsgWithdrawProposalProtoMsg): _149.MsgWithdrawProposal;
                toProto(message: _149.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _149.MsgWithdrawProposal): _149.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _149.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_149.MsgWithdrawProposalResponse>): _149.MsgWithdrawProposalResponse;
                fromAmino(_: _149.MsgWithdrawProposalResponseAmino): _149.MsgWithdrawProposalResponse;
                toAmino(_: _149.MsgWithdrawProposalResponse): _149.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _149.MsgWithdrawProposalResponseAminoMsg): _149.MsgWithdrawProposalResponse;
                toAminoMsg(message: _149.MsgWithdrawProposalResponse): _149.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _149.MsgWithdrawProposalResponseProtoMsg): _149.MsgWithdrawProposalResponse;
                toProto(message: _149.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _149.MsgWithdrawProposalResponse): _149.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _149.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgVote;
                fromPartial(object: Partial<_149.MsgVote>): _149.MsgVote;
                fromAmino(object: _149.MsgVoteAmino): _149.MsgVote;
                toAmino(message: _149.MsgVote): _149.MsgVoteAmino;
                fromAminoMsg(object: _149.MsgVoteAminoMsg): _149.MsgVote;
                toAminoMsg(message: _149.MsgVote): _149.MsgVoteAminoMsg;
                fromProtoMsg(message: _149.MsgVoteProtoMsg): _149.MsgVote;
                toProto(message: _149.MsgVote): Uint8Array;
                toProtoMsg(message: _149.MsgVote): _149.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _149.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgVoteResponse;
                fromPartial(_: Partial<_149.MsgVoteResponse>): _149.MsgVoteResponse;
                fromAmino(_: _149.MsgVoteResponseAmino): _149.MsgVoteResponse;
                toAmino(_: _149.MsgVoteResponse): _149.MsgVoteResponseAmino;
                fromAminoMsg(object: _149.MsgVoteResponseAminoMsg): _149.MsgVoteResponse;
                toAminoMsg(message: _149.MsgVoteResponse): _149.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _149.MsgVoteResponseProtoMsg): _149.MsgVoteResponse;
                toProto(message: _149.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _149.MsgVoteResponse): _149.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _149.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgExec;
                fromPartial(object: Partial<_149.MsgExec>): _149.MsgExec;
                fromAmino(object: _149.MsgExecAmino): _149.MsgExec;
                toAmino(message: _149.MsgExec): _149.MsgExecAmino;
                fromAminoMsg(object: _149.MsgExecAminoMsg): _149.MsgExec;
                toAminoMsg(message: _149.MsgExec): _149.MsgExecAminoMsg;
                fromProtoMsg(message: _149.MsgExecProtoMsg): _149.MsgExec;
                toProto(message: _149.MsgExec): Uint8Array;
                toProtoMsg(message: _149.MsgExec): _149.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _149.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgExecResponse;
                fromPartial(object: Partial<_149.MsgExecResponse>): _149.MsgExecResponse;
                fromAmino(object: _149.MsgExecResponseAmino): _149.MsgExecResponse;
                toAmino(message: _149.MsgExecResponse): _149.MsgExecResponseAmino;
                fromAminoMsg(object: _149.MsgExecResponseAminoMsg): _149.MsgExecResponse;
                toAminoMsg(message: _149.MsgExecResponse): _149.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _149.MsgExecResponseProtoMsg): _149.MsgExecResponse;
                toProto(message: _149.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _149.MsgExecResponse): _149.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _149.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgLeaveGroup;
                fromPartial(object: Partial<_149.MsgLeaveGroup>): _149.MsgLeaveGroup;
                fromAmino(object: _149.MsgLeaveGroupAmino): _149.MsgLeaveGroup;
                toAmino(message: _149.MsgLeaveGroup): _149.MsgLeaveGroupAmino;
                fromAminoMsg(object: _149.MsgLeaveGroupAminoMsg): _149.MsgLeaveGroup;
                toAminoMsg(message: _149.MsgLeaveGroup): _149.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _149.MsgLeaveGroupProtoMsg): _149.MsgLeaveGroup;
                toProto(message: _149.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _149.MsgLeaveGroup): _149.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _149.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_149.MsgLeaveGroupResponse>): _149.MsgLeaveGroupResponse;
                fromAmino(_: _149.MsgLeaveGroupResponseAmino): _149.MsgLeaveGroupResponse;
                toAmino(_: _149.MsgLeaveGroupResponse): _149.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _149.MsgLeaveGroupResponseAminoMsg): _149.MsgLeaveGroupResponse;
                toAminoMsg(message: _149.MsgLeaveGroupResponse): _149.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _149.MsgLeaveGroupResponseProtoMsg): _149.MsgLeaveGroupResponse;
                toProto(message: _149.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _149.MsgLeaveGroupResponse): _149.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupInfoRequest;
                fromPartial(object: Partial<_148.QueryGroupInfoRequest>): _148.QueryGroupInfoRequest;
                fromAmino(object: _148.QueryGroupInfoRequestAmino): _148.QueryGroupInfoRequest;
                toAmino(message: _148.QueryGroupInfoRequest): _148.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _148.QueryGroupInfoRequestAminoMsg): _148.QueryGroupInfoRequest;
                toAminoMsg(message: _148.QueryGroupInfoRequest): _148.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupInfoRequestProtoMsg): _148.QueryGroupInfoRequest;
                toProto(message: _148.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupInfoRequest): _148.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupInfoResponse;
                fromPartial(object: Partial<_148.QueryGroupInfoResponse>): _148.QueryGroupInfoResponse;
                fromAmino(object: _148.QueryGroupInfoResponseAmino): _148.QueryGroupInfoResponse;
                toAmino(message: _148.QueryGroupInfoResponse): _148.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _148.QueryGroupInfoResponseAminoMsg): _148.QueryGroupInfoResponse;
                toAminoMsg(message: _148.QueryGroupInfoResponse): _148.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupInfoResponseProtoMsg): _148.QueryGroupInfoResponse;
                toProto(message: _148.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupInfoResponse): _148.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_148.QueryGroupPolicyInfoRequest>): _148.QueryGroupPolicyInfoRequest;
                fromAmino(object: _148.QueryGroupPolicyInfoRequestAmino): _148.QueryGroupPolicyInfoRequest;
                toAmino(message: _148.QueryGroupPolicyInfoRequest): _148.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _148.QueryGroupPolicyInfoRequestAminoMsg): _148.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _148.QueryGroupPolicyInfoRequest): _148.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupPolicyInfoRequestProtoMsg): _148.QueryGroupPolicyInfoRequest;
                toProto(message: _148.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupPolicyInfoRequest): _148.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_148.QueryGroupPolicyInfoResponse>): _148.QueryGroupPolicyInfoResponse;
                fromAmino(object: _148.QueryGroupPolicyInfoResponseAmino): _148.QueryGroupPolicyInfoResponse;
                toAmino(message: _148.QueryGroupPolicyInfoResponse): _148.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _148.QueryGroupPolicyInfoResponseAminoMsg): _148.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _148.QueryGroupPolicyInfoResponse): _148.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupPolicyInfoResponseProtoMsg): _148.QueryGroupPolicyInfoResponse;
                toProto(message: _148.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupPolicyInfoResponse): _148.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupMembersRequest;
                fromPartial(object: Partial<_148.QueryGroupMembersRequest>): _148.QueryGroupMembersRequest;
                fromAmino(object: _148.QueryGroupMembersRequestAmino): _148.QueryGroupMembersRequest;
                toAmino(message: _148.QueryGroupMembersRequest): _148.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _148.QueryGroupMembersRequestAminoMsg): _148.QueryGroupMembersRequest;
                toAminoMsg(message: _148.QueryGroupMembersRequest): _148.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupMembersRequestProtoMsg): _148.QueryGroupMembersRequest;
                toProto(message: _148.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupMembersRequest): _148.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupMembersResponse;
                fromPartial(object: Partial<_148.QueryGroupMembersResponse>): _148.QueryGroupMembersResponse;
                fromAmino(object: _148.QueryGroupMembersResponseAmino): _148.QueryGroupMembersResponse;
                toAmino(message: _148.QueryGroupMembersResponse): _148.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _148.QueryGroupMembersResponseAminoMsg): _148.QueryGroupMembersResponse;
                toAminoMsg(message: _148.QueryGroupMembersResponse): _148.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupMembersResponseProtoMsg): _148.QueryGroupMembersResponse;
                toProto(message: _148.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupMembersResponse): _148.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_148.QueryGroupsByAdminRequest>): _148.QueryGroupsByAdminRequest;
                fromAmino(object: _148.QueryGroupsByAdminRequestAmino): _148.QueryGroupsByAdminRequest;
                toAmino(message: _148.QueryGroupsByAdminRequest): _148.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _148.QueryGroupsByAdminRequestAminoMsg): _148.QueryGroupsByAdminRequest;
                toAminoMsg(message: _148.QueryGroupsByAdminRequest): _148.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupsByAdminRequestProtoMsg): _148.QueryGroupsByAdminRequest;
                toProto(message: _148.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupsByAdminRequest): _148.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_148.QueryGroupsByAdminResponse>): _148.QueryGroupsByAdminResponse;
                fromAmino(object: _148.QueryGroupsByAdminResponseAmino): _148.QueryGroupsByAdminResponse;
                toAmino(message: _148.QueryGroupsByAdminResponse): _148.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _148.QueryGroupsByAdminResponseAminoMsg): _148.QueryGroupsByAdminResponse;
                toAminoMsg(message: _148.QueryGroupsByAdminResponse): _148.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupsByAdminResponseProtoMsg): _148.QueryGroupsByAdminResponse;
                toProto(message: _148.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupsByAdminResponse): _148.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_148.QueryGroupPoliciesByGroupRequest>): _148.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _148.QueryGroupPoliciesByGroupRequestAmino): _148.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _148.QueryGroupPoliciesByGroupRequest): _148.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _148.QueryGroupPoliciesByGroupRequestAminoMsg): _148.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _148.QueryGroupPoliciesByGroupRequest): _148.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupPoliciesByGroupRequestProtoMsg): _148.QueryGroupPoliciesByGroupRequest;
                toProto(message: _148.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupPoliciesByGroupRequest): _148.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_148.QueryGroupPoliciesByGroupResponse>): _148.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _148.QueryGroupPoliciesByGroupResponseAmino): _148.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _148.QueryGroupPoliciesByGroupResponse): _148.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _148.QueryGroupPoliciesByGroupResponseAminoMsg): _148.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _148.QueryGroupPoliciesByGroupResponse): _148.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupPoliciesByGroupResponseProtoMsg): _148.QueryGroupPoliciesByGroupResponse;
                toProto(message: _148.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupPoliciesByGroupResponse): _148.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_148.QueryGroupPoliciesByAdminRequest>): _148.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _148.QueryGroupPoliciesByAdminRequestAmino): _148.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _148.QueryGroupPoliciesByAdminRequest): _148.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _148.QueryGroupPoliciesByAdminRequestAminoMsg): _148.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _148.QueryGroupPoliciesByAdminRequest): _148.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupPoliciesByAdminRequestProtoMsg): _148.QueryGroupPoliciesByAdminRequest;
                toProto(message: _148.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupPoliciesByAdminRequest): _148.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_148.QueryGroupPoliciesByAdminResponse>): _148.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _148.QueryGroupPoliciesByAdminResponseAmino): _148.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _148.QueryGroupPoliciesByAdminResponse): _148.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _148.QueryGroupPoliciesByAdminResponseAminoMsg): _148.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _148.QueryGroupPoliciesByAdminResponse): _148.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupPoliciesByAdminResponseProtoMsg): _148.QueryGroupPoliciesByAdminResponse;
                toProto(message: _148.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupPoliciesByAdminResponse): _148.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _148.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryProposalRequest;
                fromPartial(object: Partial<_148.QueryProposalRequest>): _148.QueryProposalRequest;
                fromAmino(object: _148.QueryProposalRequestAmino): _148.QueryProposalRequest;
                toAmino(message: _148.QueryProposalRequest): _148.QueryProposalRequestAmino;
                fromAminoMsg(object: _148.QueryProposalRequestAminoMsg): _148.QueryProposalRequest;
                toAminoMsg(message: _148.QueryProposalRequest): _148.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _148.QueryProposalRequestProtoMsg): _148.QueryProposalRequest;
                toProto(message: _148.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _148.QueryProposalRequest): _148.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _148.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryProposalResponse;
                fromPartial(object: Partial<_148.QueryProposalResponse>): _148.QueryProposalResponse;
                fromAmino(object: _148.QueryProposalResponseAmino): _148.QueryProposalResponse;
                toAmino(message: _148.QueryProposalResponse): _148.QueryProposalResponseAmino;
                fromAminoMsg(object: _148.QueryProposalResponseAminoMsg): _148.QueryProposalResponse;
                toAminoMsg(message: _148.QueryProposalResponse): _148.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _148.QueryProposalResponseProtoMsg): _148.QueryProposalResponse;
                toProto(message: _148.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _148.QueryProposalResponse): _148.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _148.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_148.QueryProposalsByGroupPolicyRequest>): _148.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _148.QueryProposalsByGroupPolicyRequestAmino): _148.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _148.QueryProposalsByGroupPolicyRequest): _148.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _148.QueryProposalsByGroupPolicyRequestAminoMsg): _148.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _148.QueryProposalsByGroupPolicyRequest): _148.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _148.QueryProposalsByGroupPolicyRequestProtoMsg): _148.QueryProposalsByGroupPolicyRequest;
                toProto(message: _148.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _148.QueryProposalsByGroupPolicyRequest): _148.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _148.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_148.QueryProposalsByGroupPolicyResponse>): _148.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _148.QueryProposalsByGroupPolicyResponseAmino): _148.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _148.QueryProposalsByGroupPolicyResponse): _148.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _148.QueryProposalsByGroupPolicyResponseAminoMsg): _148.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _148.QueryProposalsByGroupPolicyResponse): _148.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _148.QueryProposalsByGroupPolicyResponseProtoMsg): _148.QueryProposalsByGroupPolicyResponse;
                toProto(message: _148.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _148.QueryProposalsByGroupPolicyResponse): _148.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _148.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_148.QueryVoteByProposalVoterRequest>): _148.QueryVoteByProposalVoterRequest;
                fromAmino(object: _148.QueryVoteByProposalVoterRequestAmino): _148.QueryVoteByProposalVoterRequest;
                toAmino(message: _148.QueryVoteByProposalVoterRequest): _148.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _148.QueryVoteByProposalVoterRequestAminoMsg): _148.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _148.QueryVoteByProposalVoterRequest): _148.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _148.QueryVoteByProposalVoterRequestProtoMsg): _148.QueryVoteByProposalVoterRequest;
                toProto(message: _148.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _148.QueryVoteByProposalVoterRequest): _148.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _148.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_148.QueryVoteByProposalVoterResponse>): _148.QueryVoteByProposalVoterResponse;
                fromAmino(object: _148.QueryVoteByProposalVoterResponseAmino): _148.QueryVoteByProposalVoterResponse;
                toAmino(message: _148.QueryVoteByProposalVoterResponse): _148.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _148.QueryVoteByProposalVoterResponseAminoMsg): _148.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _148.QueryVoteByProposalVoterResponse): _148.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _148.QueryVoteByProposalVoterResponseProtoMsg): _148.QueryVoteByProposalVoterResponse;
                toProto(message: _148.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _148.QueryVoteByProposalVoterResponse): _148.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _148.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_148.QueryVotesByProposalRequest>): _148.QueryVotesByProposalRequest;
                fromAmino(object: _148.QueryVotesByProposalRequestAmino): _148.QueryVotesByProposalRequest;
                toAmino(message: _148.QueryVotesByProposalRequest): _148.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _148.QueryVotesByProposalRequestAminoMsg): _148.QueryVotesByProposalRequest;
                toAminoMsg(message: _148.QueryVotesByProposalRequest): _148.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _148.QueryVotesByProposalRequestProtoMsg): _148.QueryVotesByProposalRequest;
                toProto(message: _148.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _148.QueryVotesByProposalRequest): _148.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _148.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_148.QueryVotesByProposalResponse>): _148.QueryVotesByProposalResponse;
                fromAmino(object: _148.QueryVotesByProposalResponseAmino): _148.QueryVotesByProposalResponse;
                toAmino(message: _148.QueryVotesByProposalResponse): _148.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _148.QueryVotesByProposalResponseAminoMsg): _148.QueryVotesByProposalResponse;
                toAminoMsg(message: _148.QueryVotesByProposalResponse): _148.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _148.QueryVotesByProposalResponseProtoMsg): _148.QueryVotesByProposalResponse;
                toProto(message: _148.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _148.QueryVotesByProposalResponse): _148.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _148.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_148.QueryVotesByVoterRequest>): _148.QueryVotesByVoterRequest;
                fromAmino(object: _148.QueryVotesByVoterRequestAmino): _148.QueryVotesByVoterRequest;
                toAmino(message: _148.QueryVotesByVoterRequest): _148.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _148.QueryVotesByVoterRequestAminoMsg): _148.QueryVotesByVoterRequest;
                toAminoMsg(message: _148.QueryVotesByVoterRequest): _148.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _148.QueryVotesByVoterRequestProtoMsg): _148.QueryVotesByVoterRequest;
                toProto(message: _148.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _148.QueryVotesByVoterRequest): _148.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _148.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_148.QueryVotesByVoterResponse>): _148.QueryVotesByVoterResponse;
                fromAmino(object: _148.QueryVotesByVoterResponseAmino): _148.QueryVotesByVoterResponse;
                toAmino(message: _148.QueryVotesByVoterResponse): _148.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _148.QueryVotesByVoterResponseAminoMsg): _148.QueryVotesByVoterResponse;
                toAminoMsg(message: _148.QueryVotesByVoterResponse): _148.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _148.QueryVotesByVoterResponseProtoMsg): _148.QueryVotesByVoterResponse;
                toProto(message: _148.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _148.QueryVotesByVoterResponse): _148.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_148.QueryGroupsByMemberRequest>): _148.QueryGroupsByMemberRequest;
                fromAmino(object: _148.QueryGroupsByMemberRequestAmino): _148.QueryGroupsByMemberRequest;
                toAmino(message: _148.QueryGroupsByMemberRequest): _148.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _148.QueryGroupsByMemberRequestAminoMsg): _148.QueryGroupsByMemberRequest;
                toAminoMsg(message: _148.QueryGroupsByMemberRequest): _148.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupsByMemberRequestProtoMsg): _148.QueryGroupsByMemberRequest;
                toProto(message: _148.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupsByMemberRequest): _148.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_148.QueryGroupsByMemberResponse>): _148.QueryGroupsByMemberResponse;
                fromAmino(object: _148.QueryGroupsByMemberResponseAmino): _148.QueryGroupsByMemberResponse;
                toAmino(message: _148.QueryGroupsByMemberResponse): _148.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _148.QueryGroupsByMemberResponseAminoMsg): _148.QueryGroupsByMemberResponse;
                toAminoMsg(message: _148.QueryGroupsByMemberResponse): _148.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupsByMemberResponseProtoMsg): _148.QueryGroupsByMemberResponse;
                toProto(message: _148.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupsByMemberResponse): _148.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _148.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryTallyResultRequest;
                fromPartial(object: Partial<_148.QueryTallyResultRequest>): _148.QueryTallyResultRequest;
                fromAmino(object: _148.QueryTallyResultRequestAmino): _148.QueryTallyResultRequest;
                toAmino(message: _148.QueryTallyResultRequest): _148.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _148.QueryTallyResultRequestAminoMsg): _148.QueryTallyResultRequest;
                toAminoMsg(message: _148.QueryTallyResultRequest): _148.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _148.QueryTallyResultRequestProtoMsg): _148.QueryTallyResultRequest;
                toProto(message: _148.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _148.QueryTallyResultRequest): _148.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _148.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryTallyResultResponse;
                fromPartial(object: Partial<_148.QueryTallyResultResponse>): _148.QueryTallyResultResponse;
                fromAmino(object: _148.QueryTallyResultResponseAmino): _148.QueryTallyResultResponse;
                toAmino(message: _148.QueryTallyResultResponse): _148.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _148.QueryTallyResultResponseAminoMsg): _148.QueryTallyResultResponse;
                toAminoMsg(message: _148.QueryTallyResultResponse): _148.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _148.QueryTallyResultResponseProtoMsg): _148.QueryTallyResultResponse;
                toProto(message: _148.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _148.QueryTallyResultResponse): _148.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _148.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupsRequest;
                fromPartial(object: Partial<_148.QueryGroupsRequest>): _148.QueryGroupsRequest;
                fromAmino(object: _148.QueryGroupsRequestAmino): _148.QueryGroupsRequest;
                toAmino(message: _148.QueryGroupsRequest): _148.QueryGroupsRequestAmino;
                fromAminoMsg(object: _148.QueryGroupsRequestAminoMsg): _148.QueryGroupsRequest;
                toAminoMsg(message: _148.QueryGroupsRequest): _148.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGroupsRequestProtoMsg): _148.QueryGroupsRequest;
                toProto(message: _148.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGroupsRequest): _148.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _148.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryGroupsResponse;
                fromPartial(object: Partial<_148.QueryGroupsResponse>): _148.QueryGroupsResponse;
                fromAmino(object: _148.QueryGroupsResponseAmino): _148.QueryGroupsResponse;
                toAmino(message: _148.QueryGroupsResponse): _148.QueryGroupsResponseAmino;
                fromAminoMsg(object: _148.QueryGroupsResponseAminoMsg): _148.QueryGroupsResponse;
                toAminoMsg(message: _148.QueryGroupsResponse): _148.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGroupsResponseProtoMsg): _148.QueryGroupsResponse;
                toProto(message: _148.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGroupsResponse): _148.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _147.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GenesisState;
                fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
                fromAmino(object: _147.GenesisStateAmino): _147.GenesisState;
                toAmino(message: _147.GenesisState): _147.GenesisStateAmino;
                fromAminoMsg(object: _147.GenesisStateAminoMsg): _147.GenesisState;
                toAminoMsg(message: _147.GenesisState): _147.GenesisStateAminoMsg;
                fromProtoMsg(message: _147.GenesisStateProtoMsg): _147.GenesisState;
                toProto(message: _147.GenesisState): Uint8Array;
                toProtoMsg(message: _147.GenesisState): _147.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _146.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventCreateGroup;
                fromPartial(object: Partial<_146.EventCreateGroup>): _146.EventCreateGroup;
                fromAmino(object: _146.EventCreateGroupAmino): _146.EventCreateGroup;
                toAmino(message: _146.EventCreateGroup): _146.EventCreateGroupAmino;
                fromAminoMsg(object: _146.EventCreateGroupAminoMsg): _146.EventCreateGroup;
                toAminoMsg(message: _146.EventCreateGroup): _146.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _146.EventCreateGroupProtoMsg): _146.EventCreateGroup;
                toProto(message: _146.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _146.EventCreateGroup): _146.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _146.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventUpdateGroup;
                fromPartial(object: Partial<_146.EventUpdateGroup>): _146.EventUpdateGroup;
                fromAmino(object: _146.EventUpdateGroupAmino): _146.EventUpdateGroup;
                toAmino(message: _146.EventUpdateGroup): _146.EventUpdateGroupAmino;
                fromAminoMsg(object: _146.EventUpdateGroupAminoMsg): _146.EventUpdateGroup;
                toAminoMsg(message: _146.EventUpdateGroup): _146.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _146.EventUpdateGroupProtoMsg): _146.EventUpdateGroup;
                toProto(message: _146.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _146.EventUpdateGroup): _146.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _146.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventCreateGroupPolicy;
                fromPartial(object: Partial<_146.EventCreateGroupPolicy>): _146.EventCreateGroupPolicy;
                fromAmino(object: _146.EventCreateGroupPolicyAmino): _146.EventCreateGroupPolicy;
                toAmino(message: _146.EventCreateGroupPolicy): _146.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _146.EventCreateGroupPolicyAminoMsg): _146.EventCreateGroupPolicy;
                toAminoMsg(message: _146.EventCreateGroupPolicy): _146.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _146.EventCreateGroupPolicyProtoMsg): _146.EventCreateGroupPolicy;
                toProto(message: _146.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _146.EventCreateGroupPolicy): _146.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _146.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_146.EventUpdateGroupPolicy>): _146.EventUpdateGroupPolicy;
                fromAmino(object: _146.EventUpdateGroupPolicyAmino): _146.EventUpdateGroupPolicy;
                toAmino(message: _146.EventUpdateGroupPolicy): _146.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _146.EventUpdateGroupPolicyAminoMsg): _146.EventUpdateGroupPolicy;
                toAminoMsg(message: _146.EventUpdateGroupPolicy): _146.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _146.EventUpdateGroupPolicyProtoMsg): _146.EventUpdateGroupPolicy;
                toProto(message: _146.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _146.EventUpdateGroupPolicy): _146.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _146.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventSubmitProposal;
                fromPartial(object: Partial<_146.EventSubmitProposal>): _146.EventSubmitProposal;
                fromAmino(object: _146.EventSubmitProposalAmino): _146.EventSubmitProposal;
                toAmino(message: _146.EventSubmitProposal): _146.EventSubmitProposalAmino;
                fromAminoMsg(object: _146.EventSubmitProposalAminoMsg): _146.EventSubmitProposal;
                toAminoMsg(message: _146.EventSubmitProposal): _146.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _146.EventSubmitProposalProtoMsg): _146.EventSubmitProposal;
                toProto(message: _146.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _146.EventSubmitProposal): _146.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _146.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventWithdrawProposal;
                fromPartial(object: Partial<_146.EventWithdrawProposal>): _146.EventWithdrawProposal;
                fromAmino(object: _146.EventWithdrawProposalAmino): _146.EventWithdrawProposal;
                toAmino(message: _146.EventWithdrawProposal): _146.EventWithdrawProposalAmino;
                fromAminoMsg(object: _146.EventWithdrawProposalAminoMsg): _146.EventWithdrawProposal;
                toAminoMsg(message: _146.EventWithdrawProposal): _146.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _146.EventWithdrawProposalProtoMsg): _146.EventWithdrawProposal;
                toProto(message: _146.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _146.EventWithdrawProposal): _146.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _146.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventVote;
                fromPartial(object: Partial<_146.EventVote>): _146.EventVote;
                fromAmino(object: _146.EventVoteAmino): _146.EventVote;
                toAmino(message: _146.EventVote): _146.EventVoteAmino;
                fromAminoMsg(object: _146.EventVoteAminoMsg): _146.EventVote;
                toAminoMsg(message: _146.EventVote): _146.EventVoteAminoMsg;
                fromProtoMsg(message: _146.EventVoteProtoMsg): _146.EventVote;
                toProto(message: _146.EventVote): Uint8Array;
                toProtoMsg(message: _146.EventVote): _146.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _146.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventExec;
                fromPartial(object: Partial<_146.EventExec>): _146.EventExec;
                fromAmino(object: _146.EventExecAmino): _146.EventExec;
                toAmino(message: _146.EventExec): _146.EventExecAmino;
                fromAminoMsg(object: _146.EventExecAminoMsg): _146.EventExec;
                toAminoMsg(message: _146.EventExec): _146.EventExecAminoMsg;
                fromProtoMsg(message: _146.EventExecProtoMsg): _146.EventExec;
                toProto(message: _146.EventExec): Uint8Array;
                toProtoMsg(message: _146.EventExec): _146.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _146.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventLeaveGroup;
                fromPartial(object: Partial<_146.EventLeaveGroup>): _146.EventLeaveGroup;
                fromAmino(object: _146.EventLeaveGroupAmino): _146.EventLeaveGroup;
                toAmino(message: _146.EventLeaveGroup): _146.EventLeaveGroupAmino;
                fromAminoMsg(object: _146.EventLeaveGroupAminoMsg): _146.EventLeaveGroup;
                toAminoMsg(message: _146.EventLeaveGroup): _146.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _146.EventLeaveGroupProtoMsg): _146.EventLeaveGroup;
                toProto(message: _146.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _146.EventLeaveGroup): _146.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _146.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.EventProposalPruned;
                fromPartial(object: Partial<_146.EventProposalPruned>): _146.EventProposalPruned;
                fromAmino(object: _146.EventProposalPrunedAmino): _146.EventProposalPruned;
                toAmino(message: _146.EventProposalPruned): _146.EventProposalPrunedAmino;
                fromAminoMsg(object: _146.EventProposalPrunedAminoMsg): _146.EventProposalPruned;
                toAminoMsg(message: _146.EventProposalPruned): _146.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _146.EventProposalPrunedProtoMsg): _146.EventProposalPruned;
                toProto(message: _146.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _146.EventProposalPruned): _146.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _151.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _151.Module;
                    fromPartial(object: Partial<_151.Module>): _151.Module;
                    fromAmino(object: _151.ModuleAmino): _151.Module;
                    toAmino(message: _151.Module): _151.ModuleAmino;
                    fromAminoMsg(object: _151.ModuleAminoMsg): _151.Module;
                    toAminoMsg(message: _151.Module): _151.ModuleAminoMsg;
                    fromProtoMsg(message: _151.ModuleProtoMsg): _151.Module;
                    toProto(message: _151.Module): Uint8Array;
                    toProtoMsg(message: _151.Module): _151.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _376.MsgClientImpl;
            QueryClientImpl: typeof _357.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                inflation(request?: _154.QueryInflationRequest): Promise<_154.QueryInflationResponse>;
                annualProvisions(request?: _154.QueryAnnualProvisionsRequest): Promise<_154.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _336.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _155.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _155.MsgUpdateParams): {
                        typeUrl: string;
                        value: _155.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _155.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _155.MsgUpdateParams): {
                        typeUrl: string;
                        value: _155.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _155.MsgUpdateParams) => _155.MsgUpdateParamsAmino;
                    fromAmino: (object: _155.MsgUpdateParamsAmino) => _155.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _155.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgUpdateParams;
                fromPartial(object: Partial<_155.MsgUpdateParams>): _155.MsgUpdateParams;
                fromAmino(object: _155.MsgUpdateParamsAmino): _155.MsgUpdateParams;
                toAmino(message: _155.MsgUpdateParams): _155.MsgUpdateParamsAmino;
                fromAminoMsg(object: _155.MsgUpdateParamsAminoMsg): _155.MsgUpdateParams;
                toAminoMsg(message: _155.MsgUpdateParams): _155.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateParamsProtoMsg): _155.MsgUpdateParams;
                toProto(message: _155.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateParams): _155.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _155.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_155.MsgUpdateParamsResponse>): _155.MsgUpdateParamsResponse;
                fromAmino(_: _155.MsgUpdateParamsResponseAmino): _155.MsgUpdateParamsResponse;
                toAmino(_: _155.MsgUpdateParamsResponse): _155.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _155.MsgUpdateParamsResponseAminoMsg): _155.MsgUpdateParamsResponse;
                toAminoMsg(message: _155.MsgUpdateParamsResponse): _155.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateParamsResponseProtoMsg): _155.MsgUpdateParamsResponse;
                toProto(message: _155.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateParamsResponse): _155.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _154.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _154.QueryParamsRequest;
                fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
                fromAmino(_: _154.QueryParamsRequestAmino): _154.QueryParamsRequest;
                toAmino(_: _154.QueryParamsRequest): _154.QueryParamsRequestAmino;
                fromAminoMsg(object: _154.QueryParamsRequestAminoMsg): _154.QueryParamsRequest;
                toAminoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryParamsRequestProtoMsg): _154.QueryParamsRequest;
                toProto(message: _154.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _154.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryParamsResponse;
                fromPartial(object: Partial<_154.QueryParamsResponse>): _154.QueryParamsResponse;
                fromAmino(object: _154.QueryParamsResponseAmino): _154.QueryParamsResponse;
                toAmino(message: _154.QueryParamsResponse): _154.QueryParamsResponseAmino;
                fromAminoMsg(object: _154.QueryParamsResponseAminoMsg): _154.QueryParamsResponse;
                toAminoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryParamsResponseProtoMsg): _154.QueryParamsResponse;
                toProto(message: _154.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _154.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _154.QueryInflationRequest;
                fromPartial(_: Partial<_154.QueryInflationRequest>): _154.QueryInflationRequest;
                fromAmino(_: _154.QueryInflationRequestAmino): _154.QueryInflationRequest;
                toAmino(_: _154.QueryInflationRequest): _154.QueryInflationRequestAmino;
                fromAminoMsg(object: _154.QueryInflationRequestAminoMsg): _154.QueryInflationRequest;
                toAminoMsg(message: _154.QueryInflationRequest): _154.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _154.QueryInflationRequestProtoMsg): _154.QueryInflationRequest;
                toProto(message: _154.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _154.QueryInflationRequest): _154.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _154.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryInflationResponse;
                fromPartial(object: Partial<_154.QueryInflationResponse>): _154.QueryInflationResponse;
                fromAmino(object: _154.QueryInflationResponseAmino): _154.QueryInflationResponse;
                toAmino(message: _154.QueryInflationResponse): _154.QueryInflationResponseAmino;
                fromAminoMsg(object: _154.QueryInflationResponseAminoMsg): _154.QueryInflationResponse;
                toAminoMsg(message: _154.QueryInflationResponse): _154.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _154.QueryInflationResponseProtoMsg): _154.QueryInflationResponse;
                toProto(message: _154.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _154.QueryInflationResponse): _154.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _154.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _154.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_154.QueryAnnualProvisionsRequest>): _154.QueryAnnualProvisionsRequest;
                fromAmino(_: _154.QueryAnnualProvisionsRequestAmino): _154.QueryAnnualProvisionsRequest;
                toAmino(_: _154.QueryAnnualProvisionsRequest): _154.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _154.QueryAnnualProvisionsRequestAminoMsg): _154.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _154.QueryAnnualProvisionsRequest): _154.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryAnnualProvisionsRequestProtoMsg): _154.QueryAnnualProvisionsRequest;
                toProto(message: _154.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryAnnualProvisionsRequest): _154.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _154.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_154.QueryAnnualProvisionsResponse>): _154.QueryAnnualProvisionsResponse;
                fromAmino(object: _154.QueryAnnualProvisionsResponseAmino): _154.QueryAnnualProvisionsResponse;
                toAmino(message: _154.QueryAnnualProvisionsResponse): _154.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _154.QueryAnnualProvisionsResponseAminoMsg): _154.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _154.QueryAnnualProvisionsResponse): _154.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryAnnualProvisionsResponseProtoMsg): _154.QueryAnnualProvisionsResponse;
                toProto(message: _154.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryAnnualProvisionsResponse): _154.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _153.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.Minter;
                fromPartial(object: Partial<_153.Minter>): _153.Minter;
                fromAmino(object: _153.MinterAmino): _153.Minter;
                toAmino(message: _153.Minter): _153.MinterAmino;
                fromAminoMsg(object: _153.MinterAminoMsg): _153.Minter;
                toAminoMsg(message: _153.Minter): _153.MinterAminoMsg;
                fromProtoMsg(message: _153.MinterProtoMsg): _153.Minter;
                toProto(message: _153.Minter): Uint8Array;
                toProtoMsg(message: _153.Minter): _153.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _153.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.Params;
                fromPartial(object: Partial<_153.Params>): _153.Params;
                fromAmino(object: _153.ParamsAmino): _153.Params;
                toAmino(message: _153.Params): _153.ParamsAmino;
                fromAminoMsg(object: _153.ParamsAminoMsg): _153.Params;
                toAminoMsg(message: _153.Params): _153.ParamsAminoMsg;
                fromProtoMsg(message: _153.ParamsProtoMsg): _153.Params;
                toProto(message: _153.Params): Uint8Array;
                toProtoMsg(message: _153.Params): _153.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _152.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.GenesisState;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
                fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
                toAminoMsg(message: _152.GenesisState): _152.GenesisStateAminoMsg;
                fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
                toProto(message: _152.GenesisState): Uint8Array;
                toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
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
                    encode(_: _157.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _157.Module;
                    fromPartial(_: Partial<_157.Module>): _157.Module;
                    fromAmino(_: _157.ModuleAmino): _157.Module;
                    toAmino(_: _157.Module): _157.ModuleAmino;
                    fromAminoMsg(object: _157.ModuleAminoMsg): _157.Module;
                    toAminoMsg(message: _157.Module): _157.ModuleAminoMsg;
                    fromProtoMsg(message: _157.ModuleProtoMsg): _157.Module;
                    toProto(message: _157.Module): Uint8Array;
                    toProtoMsg(message: _157.Module): _157.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _377.MsgClientImpl;
            QueryClientImpl: typeof _358.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _161.QueryBalanceRequest): Promise<_161.QueryBalanceResponse>;
                owner(request: _161.QueryOwnerRequest): Promise<_161.QueryOwnerResponse>;
                supply(request: _161.QuerySupplyRequest): Promise<_161.QuerySupplyResponse>;
                nFTs(request: _161.QueryNFTsRequest): Promise<_161.QueryNFTsResponse>;
                nFT(request: _161.QueryNFTRequest): Promise<_161.QueryNFTResponse>;
                class(request: _161.QueryClassRequest): Promise<_161.QueryClassResponse>;
                classes(request?: _161.QueryClassesRequest): Promise<_161.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _337.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _162.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _162.MsgSend): {
                        typeUrl: string;
                        value: _162.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _162.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _162.MsgSend): {
                        typeUrl: string;
                        value: _162.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _162.MsgSend) => _162.MsgSendAmino;
                    fromAmino: (object: _162.MsgSendAmino) => _162.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _162.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MsgSend;
                fromPartial(object: Partial<_162.MsgSend>): _162.MsgSend;
                fromAmino(object: _162.MsgSendAmino): _162.MsgSend;
                toAmino(message: _162.MsgSend): _162.MsgSendAmino;
                fromAminoMsg(object: _162.MsgSendAminoMsg): _162.MsgSend;
                toAminoMsg(message: _162.MsgSend): _162.MsgSendAminoMsg;
                fromProtoMsg(message: _162.MsgSendProtoMsg): _162.MsgSend;
                toProto(message: _162.MsgSend): Uint8Array;
                toProtoMsg(message: _162.MsgSend): _162.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _162.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _162.MsgSendResponse;
                fromPartial(_: Partial<_162.MsgSendResponse>): _162.MsgSendResponse;
                fromAmino(_: _162.MsgSendResponseAmino): _162.MsgSendResponse;
                toAmino(_: _162.MsgSendResponse): _162.MsgSendResponseAmino;
                fromAminoMsg(object: _162.MsgSendResponseAminoMsg): _162.MsgSendResponse;
                toAminoMsg(message: _162.MsgSendResponse): _162.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _162.MsgSendResponseProtoMsg): _162.MsgSendResponse;
                toProto(message: _162.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _162.MsgSendResponse): _162.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _161.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryBalanceRequest;
                fromPartial(object: Partial<_161.QueryBalanceRequest>): _161.QueryBalanceRequest;
                fromAmino(object: _161.QueryBalanceRequestAmino): _161.QueryBalanceRequest;
                toAmino(message: _161.QueryBalanceRequest): _161.QueryBalanceRequestAmino;
                fromAminoMsg(object: _161.QueryBalanceRequestAminoMsg): _161.QueryBalanceRequest;
                toAminoMsg(message: _161.QueryBalanceRequest): _161.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _161.QueryBalanceRequestProtoMsg): _161.QueryBalanceRequest;
                toProto(message: _161.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _161.QueryBalanceRequest): _161.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _161.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryBalanceResponse;
                fromPartial(object: Partial<_161.QueryBalanceResponse>): _161.QueryBalanceResponse;
                fromAmino(object: _161.QueryBalanceResponseAmino): _161.QueryBalanceResponse;
                toAmino(message: _161.QueryBalanceResponse): _161.QueryBalanceResponseAmino;
                fromAminoMsg(object: _161.QueryBalanceResponseAminoMsg): _161.QueryBalanceResponse;
                toAminoMsg(message: _161.QueryBalanceResponse): _161.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _161.QueryBalanceResponseProtoMsg): _161.QueryBalanceResponse;
                toProto(message: _161.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _161.QueryBalanceResponse): _161.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _161.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryOwnerRequest;
                fromPartial(object: Partial<_161.QueryOwnerRequest>): _161.QueryOwnerRequest;
                fromAmino(object: _161.QueryOwnerRequestAmino): _161.QueryOwnerRequest;
                toAmino(message: _161.QueryOwnerRequest): _161.QueryOwnerRequestAmino;
                fromAminoMsg(object: _161.QueryOwnerRequestAminoMsg): _161.QueryOwnerRequest;
                toAminoMsg(message: _161.QueryOwnerRequest): _161.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _161.QueryOwnerRequestProtoMsg): _161.QueryOwnerRequest;
                toProto(message: _161.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _161.QueryOwnerRequest): _161.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _161.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryOwnerResponse;
                fromPartial(object: Partial<_161.QueryOwnerResponse>): _161.QueryOwnerResponse;
                fromAmino(object: _161.QueryOwnerResponseAmino): _161.QueryOwnerResponse;
                toAmino(message: _161.QueryOwnerResponse): _161.QueryOwnerResponseAmino;
                fromAminoMsg(object: _161.QueryOwnerResponseAminoMsg): _161.QueryOwnerResponse;
                toAminoMsg(message: _161.QueryOwnerResponse): _161.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _161.QueryOwnerResponseProtoMsg): _161.QueryOwnerResponse;
                toProto(message: _161.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _161.QueryOwnerResponse): _161.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _161.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QuerySupplyRequest;
                fromPartial(object: Partial<_161.QuerySupplyRequest>): _161.QuerySupplyRequest;
                fromAmino(object: _161.QuerySupplyRequestAmino): _161.QuerySupplyRequest;
                toAmino(message: _161.QuerySupplyRequest): _161.QuerySupplyRequestAmino;
                fromAminoMsg(object: _161.QuerySupplyRequestAminoMsg): _161.QuerySupplyRequest;
                toAminoMsg(message: _161.QuerySupplyRequest): _161.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _161.QuerySupplyRequestProtoMsg): _161.QuerySupplyRequest;
                toProto(message: _161.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _161.QuerySupplyRequest): _161.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _161.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QuerySupplyResponse;
                fromPartial(object: Partial<_161.QuerySupplyResponse>): _161.QuerySupplyResponse;
                fromAmino(object: _161.QuerySupplyResponseAmino): _161.QuerySupplyResponse;
                toAmino(message: _161.QuerySupplyResponse): _161.QuerySupplyResponseAmino;
                fromAminoMsg(object: _161.QuerySupplyResponseAminoMsg): _161.QuerySupplyResponse;
                toAminoMsg(message: _161.QuerySupplyResponse): _161.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _161.QuerySupplyResponseProtoMsg): _161.QuerySupplyResponse;
                toProto(message: _161.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _161.QuerySupplyResponse): _161.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _161.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryNFTsRequest;
                fromPartial(object: Partial<_161.QueryNFTsRequest>): _161.QueryNFTsRequest;
                fromAmino(object: _161.QueryNFTsRequestAmino): _161.QueryNFTsRequest;
                toAmino(message: _161.QueryNFTsRequest): _161.QueryNFTsRequestAmino;
                fromAminoMsg(object: _161.QueryNFTsRequestAminoMsg): _161.QueryNFTsRequest;
                toAminoMsg(message: _161.QueryNFTsRequest): _161.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _161.QueryNFTsRequestProtoMsg): _161.QueryNFTsRequest;
                toProto(message: _161.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _161.QueryNFTsRequest): _161.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _161.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryNFTsResponse;
                fromPartial(object: Partial<_161.QueryNFTsResponse>): _161.QueryNFTsResponse;
                fromAmino(object: _161.QueryNFTsResponseAmino): _161.QueryNFTsResponse;
                toAmino(message: _161.QueryNFTsResponse): _161.QueryNFTsResponseAmino;
                fromAminoMsg(object: _161.QueryNFTsResponseAminoMsg): _161.QueryNFTsResponse;
                toAminoMsg(message: _161.QueryNFTsResponse): _161.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _161.QueryNFTsResponseProtoMsg): _161.QueryNFTsResponse;
                toProto(message: _161.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _161.QueryNFTsResponse): _161.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _161.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryNFTRequest;
                fromPartial(object: Partial<_161.QueryNFTRequest>): _161.QueryNFTRequest;
                fromAmino(object: _161.QueryNFTRequestAmino): _161.QueryNFTRequest;
                toAmino(message: _161.QueryNFTRequest): _161.QueryNFTRequestAmino;
                fromAminoMsg(object: _161.QueryNFTRequestAminoMsg): _161.QueryNFTRequest;
                toAminoMsg(message: _161.QueryNFTRequest): _161.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _161.QueryNFTRequestProtoMsg): _161.QueryNFTRequest;
                toProto(message: _161.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _161.QueryNFTRequest): _161.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _161.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryNFTResponse;
                fromPartial(object: Partial<_161.QueryNFTResponse>): _161.QueryNFTResponse;
                fromAmino(object: _161.QueryNFTResponseAmino): _161.QueryNFTResponse;
                toAmino(message: _161.QueryNFTResponse): _161.QueryNFTResponseAmino;
                fromAminoMsg(object: _161.QueryNFTResponseAminoMsg): _161.QueryNFTResponse;
                toAminoMsg(message: _161.QueryNFTResponse): _161.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _161.QueryNFTResponseProtoMsg): _161.QueryNFTResponse;
                toProto(message: _161.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _161.QueryNFTResponse): _161.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _161.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryClassRequest;
                fromPartial(object: Partial<_161.QueryClassRequest>): _161.QueryClassRequest;
                fromAmino(object: _161.QueryClassRequestAmino): _161.QueryClassRequest;
                toAmino(message: _161.QueryClassRequest): _161.QueryClassRequestAmino;
                fromAminoMsg(object: _161.QueryClassRequestAminoMsg): _161.QueryClassRequest;
                toAminoMsg(message: _161.QueryClassRequest): _161.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _161.QueryClassRequestProtoMsg): _161.QueryClassRequest;
                toProto(message: _161.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _161.QueryClassRequest): _161.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _161.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryClassResponse;
                fromPartial(object: Partial<_161.QueryClassResponse>): _161.QueryClassResponse;
                fromAmino(object: _161.QueryClassResponseAmino): _161.QueryClassResponse;
                toAmino(message: _161.QueryClassResponse): _161.QueryClassResponseAmino;
                fromAminoMsg(object: _161.QueryClassResponseAminoMsg): _161.QueryClassResponse;
                toAminoMsg(message: _161.QueryClassResponse): _161.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _161.QueryClassResponseProtoMsg): _161.QueryClassResponse;
                toProto(message: _161.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _161.QueryClassResponse): _161.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _161.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryClassesRequest;
                fromPartial(object: Partial<_161.QueryClassesRequest>): _161.QueryClassesRequest;
                fromAmino(object: _161.QueryClassesRequestAmino): _161.QueryClassesRequest;
                toAmino(message: _161.QueryClassesRequest): _161.QueryClassesRequestAmino;
                fromAminoMsg(object: _161.QueryClassesRequestAminoMsg): _161.QueryClassesRequest;
                toAminoMsg(message: _161.QueryClassesRequest): _161.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _161.QueryClassesRequestProtoMsg): _161.QueryClassesRequest;
                toProto(message: _161.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _161.QueryClassesRequest): _161.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _161.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.QueryClassesResponse;
                fromPartial(object: Partial<_161.QueryClassesResponse>): _161.QueryClassesResponse;
                fromAmino(object: _161.QueryClassesResponseAmino): _161.QueryClassesResponse;
                toAmino(message: _161.QueryClassesResponse): _161.QueryClassesResponseAmino;
                fromAminoMsg(object: _161.QueryClassesResponseAminoMsg): _161.QueryClassesResponse;
                toAminoMsg(message: _161.QueryClassesResponse): _161.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _161.QueryClassesResponseProtoMsg): _161.QueryClassesResponse;
                toProto(message: _161.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _161.QueryClassesResponse): _161.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _160.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Class;
                fromPartial(object: Partial<_160.Class>): _160.Class;
                fromAmino(object: _160.ClassAmino): _160.Class;
                toAmino(message: _160.Class): _160.ClassAmino;
                fromAminoMsg(object: _160.ClassAminoMsg): _160.Class;
                toAminoMsg(message: _160.Class): _160.ClassAminoMsg;
                fromProtoMsg(message: _160.ClassProtoMsg): _160.Class;
                toProto(message: _160.Class): Uint8Array;
                toProtoMsg(message: _160.Class): _160.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _160.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.NFT;
                fromPartial(object: Partial<_160.NFT>): _160.NFT;
                fromAmino(object: _160.NFTAmino): _160.NFT;
                toAmino(message: _160.NFT): _160.NFTAmino;
                fromAminoMsg(object: _160.NFTAminoMsg): _160.NFT;
                toAminoMsg(message: _160.NFT): _160.NFTAminoMsg;
                fromProtoMsg(message: _160.NFTProtoMsg): _160.NFT;
                toProto(message: _160.NFT): Uint8Array;
                toProtoMsg(message: _160.NFT): _160.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _159.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.GenesisState;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
                fromAmino(object: _159.GenesisStateAmino): _159.GenesisState;
                toAmino(message: _159.GenesisState): _159.GenesisStateAmino;
                fromAminoMsg(object: _159.GenesisStateAminoMsg): _159.GenesisState;
                toAminoMsg(message: _159.GenesisState): _159.GenesisStateAminoMsg;
                fromProtoMsg(message: _159.GenesisStateProtoMsg): _159.GenesisState;
                toProto(message: _159.GenesisState): Uint8Array;
                toProtoMsg(message: _159.GenesisState): _159.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _159.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.Entry;
                fromPartial(object: Partial<_159.Entry>): _159.Entry;
                fromAmino(object: _159.EntryAmino): _159.Entry;
                toAmino(message: _159.Entry): _159.EntryAmino;
                fromAminoMsg(object: _159.EntryAminoMsg): _159.Entry;
                toAminoMsg(message: _159.Entry): _159.EntryAminoMsg;
                fromProtoMsg(message: _159.EntryProtoMsg): _159.Entry;
                toProto(message: _159.Entry): Uint8Array;
                toProtoMsg(message: _159.Entry): _159.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _158.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.EventSend;
                fromPartial(object: Partial<_158.EventSend>): _158.EventSend;
                fromAmino(object: _158.EventSendAmino): _158.EventSend;
                toAmino(message: _158.EventSend): _158.EventSendAmino;
                fromAminoMsg(object: _158.EventSendAminoMsg): _158.EventSend;
                toAminoMsg(message: _158.EventSend): _158.EventSendAminoMsg;
                fromProtoMsg(message: _158.EventSendProtoMsg): _158.EventSend;
                toProto(message: _158.EventSend): Uint8Array;
                toProtoMsg(message: _158.EventSend): _158.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _158.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.EventMint;
                fromPartial(object: Partial<_158.EventMint>): _158.EventMint;
                fromAmino(object: _158.EventMintAmino): _158.EventMint;
                toAmino(message: _158.EventMint): _158.EventMintAmino;
                fromAminoMsg(object: _158.EventMintAminoMsg): _158.EventMint;
                toAminoMsg(message: _158.EventMint): _158.EventMintAminoMsg;
                fromProtoMsg(message: _158.EventMintProtoMsg): _158.EventMint;
                toProto(message: _158.EventMint): Uint8Array;
                toProtoMsg(message: _158.EventMint): _158.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _158.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _158.EventBurn;
                fromPartial(object: Partial<_158.EventBurn>): _158.EventBurn;
                fromAmino(object: _158.EventBurnAmino): _158.EventBurn;
                toAmino(message: _158.EventBurn): _158.EventBurnAmino;
                fromAminoMsg(object: _158.EventBurnAminoMsg): _158.EventBurn;
                toAminoMsg(message: _158.EventBurn): _158.EventBurnAminoMsg;
                fromProtoMsg(message: _158.EventBurnProtoMsg): _158.EventBurn;
                toProto(message: _158.EventBurn): Uint8Array;
                toProtoMsg(message: _158.EventBurn): _158.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _163.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _163.Module;
                    fromPartial(_: Partial<_163.Module>): _163.Module;
                    fromAmino(_: _163.ModuleAmino): _163.Module;
                    toAmino(_: _163.Module): _163.ModuleAmino;
                    fromAminoMsg(object: _163.ModuleAminoMsg): _163.Module;
                    toAminoMsg(message: _163.Module): _163.ModuleAminoMsg;
                    fromProtoMsg(message: _163.ModuleProtoMsg): _163.Module;
                    toProto(message: _163.Module): Uint8Array;
                    toProtoMsg(message: _163.Module): _163.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _359.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _164.GetRequest): Promise<_164.GetResponse>;
                    list(request: _164.ListRequest): Promise<_164.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _164.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.GetRequest;
                    fromPartial(object: Partial<_164.GetRequest>): _164.GetRequest;
                    fromAmino(object: _164.GetRequestAmino): _164.GetRequest;
                    toAmino(message: _164.GetRequest): _164.GetRequestAmino;
                    fromAminoMsg(object: _164.GetRequestAminoMsg): _164.GetRequest;
                    toAminoMsg(message: _164.GetRequest): _164.GetRequestAminoMsg;
                    fromProtoMsg(message: _164.GetRequestProtoMsg): _164.GetRequest;
                    toProto(message: _164.GetRequest): Uint8Array;
                    toProtoMsg(message: _164.GetRequest): _164.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _164.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.GetResponse;
                    fromPartial(object: Partial<_164.GetResponse>): _164.GetResponse;
                    fromAmino(object: _164.GetResponseAmino): _164.GetResponse;
                    toAmino(message: _164.GetResponse): _164.GetResponseAmino;
                    fromAminoMsg(object: _164.GetResponseAminoMsg): _164.GetResponse;
                    toAminoMsg(message: _164.GetResponse): _164.GetResponseAminoMsg;
                    fromProtoMsg(message: _164.GetResponseProtoMsg): _164.GetResponse;
                    toProto(message: _164.GetResponse): Uint8Array;
                    toProtoMsg(message: _164.GetResponse): _164.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _164.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.ListRequest;
                    fromPartial(object: Partial<_164.ListRequest>): _164.ListRequest;
                    fromAmino(object: _164.ListRequestAmino): _164.ListRequest;
                    toAmino(message: _164.ListRequest): _164.ListRequestAmino;
                    fromAminoMsg(object: _164.ListRequestAminoMsg): _164.ListRequest;
                    toAminoMsg(message: _164.ListRequest): _164.ListRequestAminoMsg;
                    fromProtoMsg(message: _164.ListRequestProtoMsg): _164.ListRequest;
                    toProto(message: _164.ListRequest): Uint8Array;
                    toProtoMsg(message: _164.ListRequest): _164.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _164.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.ListRequest_Prefix;
                    fromPartial(object: Partial<_164.ListRequest_Prefix>): _164.ListRequest_Prefix;
                    fromAmino(object: _164.ListRequest_PrefixAmino): _164.ListRequest_Prefix;
                    toAmino(message: _164.ListRequest_Prefix): _164.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _164.ListRequest_PrefixAminoMsg): _164.ListRequest_Prefix;
                    toAminoMsg(message: _164.ListRequest_Prefix): _164.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _164.ListRequest_PrefixProtoMsg): _164.ListRequest_Prefix;
                    toProto(message: _164.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _164.ListRequest_Prefix): _164.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _164.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.ListRequest_Range;
                    fromPartial(object: Partial<_164.ListRequest_Range>): _164.ListRequest_Range;
                    fromAmino(object: _164.ListRequest_RangeAmino): _164.ListRequest_Range;
                    toAmino(message: _164.ListRequest_Range): _164.ListRequest_RangeAmino;
                    fromAminoMsg(object: _164.ListRequest_RangeAminoMsg): _164.ListRequest_Range;
                    toAminoMsg(message: _164.ListRequest_Range): _164.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _164.ListRequest_RangeProtoMsg): _164.ListRequest_Range;
                    toProto(message: _164.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _164.ListRequest_Range): _164.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _164.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.ListResponse;
                    fromPartial(object: Partial<_164.ListResponse>): _164.ListResponse;
                    fromAmino(object: _164.ListResponseAmino): _164.ListResponse;
                    toAmino(message: _164.ListResponse): _164.ListResponseAmino;
                    fromAminoMsg(object: _164.ListResponseAminoMsg): _164.ListResponse;
                    toAminoMsg(message: _164.ListResponse): _164.ListResponseAminoMsg;
                    fromProtoMsg(message: _164.ListResponseProtoMsg): _164.ListResponse;
                    toProto(message: _164.ListResponse): Uint8Array;
                    toProtoMsg(message: _164.ListResponse): _164.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _164.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.IndexValue;
                    fromPartial(object: Partial<_164.IndexValue>): _164.IndexValue;
                    fromAmino(object: _164.IndexValueAmino): _164.IndexValue;
                    toAmino(message: _164.IndexValue): _164.IndexValueAmino;
                    fromAminoMsg(object: _164.IndexValueAminoMsg): _164.IndexValue;
                    toAminoMsg(message: _164.IndexValue): _164.IndexValueAminoMsg;
                    fromProtoMsg(message: _164.IndexValueProtoMsg): _164.IndexValue;
                    toProto(message: _164.IndexValue): Uint8Array;
                    toProtoMsg(message: _164.IndexValue): _164.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _165.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.TableDescriptor;
                fromPartial(object: Partial<_165.TableDescriptor>): _165.TableDescriptor;
                fromAmino(object: _165.TableDescriptorAmino): _165.TableDescriptor;
                toAmino(message: _165.TableDescriptor): _165.TableDescriptorAmino;
                fromAminoMsg(object: _165.TableDescriptorAminoMsg): _165.TableDescriptor;
                toAminoMsg(message: _165.TableDescriptor): _165.TableDescriptorAminoMsg;
                fromProtoMsg(message: _165.TableDescriptorProtoMsg): _165.TableDescriptor;
                toProto(message: _165.TableDescriptor): Uint8Array;
                toProtoMsg(message: _165.TableDescriptor): _165.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _165.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_165.PrimaryKeyDescriptor>): _165.PrimaryKeyDescriptor;
                fromAmino(object: _165.PrimaryKeyDescriptorAmino): _165.PrimaryKeyDescriptor;
                toAmino(message: _165.PrimaryKeyDescriptor): _165.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _165.PrimaryKeyDescriptorAminoMsg): _165.PrimaryKeyDescriptor;
                toAminoMsg(message: _165.PrimaryKeyDescriptor): _165.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _165.PrimaryKeyDescriptorProtoMsg): _165.PrimaryKeyDescriptor;
                toProto(message: _165.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _165.PrimaryKeyDescriptor): _165.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _165.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_165.SecondaryIndexDescriptor>): _165.SecondaryIndexDescriptor;
                fromAmino(object: _165.SecondaryIndexDescriptorAmino): _165.SecondaryIndexDescriptor;
                toAmino(message: _165.SecondaryIndexDescriptor): _165.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _165.SecondaryIndexDescriptorAminoMsg): _165.SecondaryIndexDescriptor;
                toAminoMsg(message: _165.SecondaryIndexDescriptor): _165.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _165.SecondaryIndexDescriptorProtoMsg): _165.SecondaryIndexDescriptor;
                toProto(message: _165.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _165.SecondaryIndexDescriptor): _165.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _165.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.SingletonDescriptor;
                fromPartial(object: Partial<_165.SingletonDescriptor>): _165.SingletonDescriptor;
                fromAmino(object: _165.SingletonDescriptorAmino): _165.SingletonDescriptor;
                toAmino(message: _165.SingletonDescriptor): _165.SingletonDescriptorAmino;
                fromAminoMsg(object: _165.SingletonDescriptorAminoMsg): _165.SingletonDescriptor;
                toAminoMsg(message: _165.SingletonDescriptor): _165.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _165.SingletonDescriptorProtoMsg): _165.SingletonDescriptor;
                toProto(message: _165.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _165.SingletonDescriptor): _165.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _166.StorageType;
            storageTypeToJSON(object: _166.StorageType): string;
            StorageType: typeof _166.StorageType;
            StorageTypeSDKType: typeof _166.StorageType;
            StorageTypeAmino: typeof _166.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _166.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_166.ModuleSchemaDescriptor>): _166.ModuleSchemaDescriptor;
                fromAmino(object: _166.ModuleSchemaDescriptorAmino): _166.ModuleSchemaDescriptor;
                toAmino(message: _166.ModuleSchemaDescriptor): _166.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _166.ModuleSchemaDescriptorAminoMsg): _166.ModuleSchemaDescriptor;
                toAminoMsg(message: _166.ModuleSchemaDescriptor): _166.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _166.ModuleSchemaDescriptorProtoMsg): _166.ModuleSchemaDescriptor;
                toProto(message: _166.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _166.ModuleSchemaDescriptor): _166.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _166.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _166.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_166.ModuleSchemaDescriptor_FileEntry>): _166.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _166.ModuleSchemaDescriptor_FileEntryAmino): _166.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _166.ModuleSchemaDescriptor_FileEntry): _166.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _166.ModuleSchemaDescriptor_FileEntryAminoMsg): _166.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _166.ModuleSchemaDescriptor_FileEntry): _166.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _166.ModuleSchemaDescriptor_FileEntryProtoMsg): _166.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _166.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _166.ModuleSchemaDescriptor_FileEntry): _166.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _167.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _167.Module;
                    fromPartial(_: Partial<_167.Module>): _167.Module;
                    fromAmino(_: _167.ModuleAmino): _167.Module;
                    toAmino(_: _167.Module): _167.ModuleAmino;
                    fromAminoMsg(object: _167.ModuleAminoMsg): _167.Module;
                    toAminoMsg(message: _167.Module): _167.ModuleAminoMsg;
                    fromProtoMsg(message: _167.ModuleProtoMsg): _167.Module;
                    toProto(message: _167.Module): Uint8Array;
                    toProtoMsg(message: _167.Module): _167.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _360.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _169.QueryParamsRequest): Promise<_169.QueryParamsResponse>;
                subspaces(request?: _169.QuerySubspacesRequest): Promise<_169.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _338.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _169.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryParamsRequest;
                fromPartial(object: Partial<_169.QueryParamsRequest>): _169.QueryParamsRequest;
                fromAmino(object: _169.QueryParamsRequestAmino): _169.QueryParamsRequest;
                toAmino(message: _169.QueryParamsRequest): _169.QueryParamsRequestAmino;
                fromAminoMsg(object: _169.QueryParamsRequestAminoMsg): _169.QueryParamsRequest;
                toAminoMsg(message: _169.QueryParamsRequest): _169.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _169.QueryParamsRequestProtoMsg): _169.QueryParamsRequest;
                toProto(message: _169.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _169.QueryParamsRequest): _169.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _169.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QueryParamsResponse;
                fromPartial(object: Partial<_169.QueryParamsResponse>): _169.QueryParamsResponse;
                fromAmino(object: _169.QueryParamsResponseAmino): _169.QueryParamsResponse;
                toAmino(message: _169.QueryParamsResponse): _169.QueryParamsResponseAmino;
                fromAminoMsg(object: _169.QueryParamsResponseAminoMsg): _169.QueryParamsResponse;
                toAminoMsg(message: _169.QueryParamsResponse): _169.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _169.QueryParamsResponseProtoMsg): _169.QueryParamsResponse;
                toProto(message: _169.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _169.QueryParamsResponse): _169.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _169.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _169.QuerySubspacesRequest;
                fromPartial(_: Partial<_169.QuerySubspacesRequest>): _169.QuerySubspacesRequest;
                fromAmino(_: _169.QuerySubspacesRequestAmino): _169.QuerySubspacesRequest;
                toAmino(_: _169.QuerySubspacesRequest): _169.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _169.QuerySubspacesRequestAminoMsg): _169.QuerySubspacesRequest;
                toAminoMsg(message: _169.QuerySubspacesRequest): _169.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _169.QuerySubspacesRequestProtoMsg): _169.QuerySubspacesRequest;
                toProto(message: _169.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _169.QuerySubspacesRequest): _169.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _169.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.QuerySubspacesResponse;
                fromPartial(object: Partial<_169.QuerySubspacesResponse>): _169.QuerySubspacesResponse;
                fromAmino(object: _169.QuerySubspacesResponseAmino): _169.QuerySubspacesResponse;
                toAmino(message: _169.QuerySubspacesResponse): _169.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _169.QuerySubspacesResponseAminoMsg): _169.QuerySubspacesResponse;
                toAminoMsg(message: _169.QuerySubspacesResponse): _169.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _169.QuerySubspacesResponseProtoMsg): _169.QuerySubspacesResponse;
                toProto(message: _169.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _169.QuerySubspacesResponse): _169.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _169.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.Subspace;
                fromPartial(object: Partial<_169.Subspace>): _169.Subspace;
                fromAmino(object: _169.SubspaceAmino): _169.Subspace;
                toAmino(message: _169.Subspace): _169.SubspaceAmino;
                fromAminoMsg(object: _169.SubspaceAminoMsg): _169.Subspace;
                toAminoMsg(message: _169.Subspace): _169.SubspaceAminoMsg;
                fromProtoMsg(message: _169.SubspaceProtoMsg): _169.Subspace;
                toProto(message: _169.Subspace): Uint8Array;
                toProtoMsg(message: _169.Subspace): _169.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _168.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.ParameterChangeProposal;
                fromPartial(object: Partial<_168.ParameterChangeProposal>): _168.ParameterChangeProposal;
                fromAmino(object: _168.ParameterChangeProposalAmino): _168.ParameterChangeProposal;
                toAmino(message: _168.ParameterChangeProposal): _168.ParameterChangeProposalAmino;
                fromAminoMsg(object: _168.ParameterChangeProposalAminoMsg): _168.ParameterChangeProposal;
                toAminoMsg(message: _168.ParameterChangeProposal): _168.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _168.ParameterChangeProposalProtoMsg): _168.ParameterChangeProposal;
                toProto(message: _168.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _168.ParameterChangeProposal): _168.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _168.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.ParamChange;
                fromPartial(object: Partial<_168.ParamChange>): _168.ParamChange;
                fromAmino(object: _168.ParamChangeAmino): _168.ParamChange;
                toAmino(message: _168.ParamChange): _168.ParamChangeAmino;
                fromAminoMsg(object: _168.ParamChangeAminoMsg): _168.ParamChange;
                toAminoMsg(message: _168.ParamChange): _168.ParamChangeAminoMsg;
                fromProtoMsg(message: _168.ParamChangeProtoMsg): _168.ParamChange;
                toProto(message: _168.ParamChange): Uint8Array;
                toProtoMsg(message: _168.ParamChange): _168.ParamChangeProtoMsg;
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
                encode(_: _171.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.FileDescriptorsRequest;
                fromPartial(_: Partial<_171.FileDescriptorsRequest>): _171.FileDescriptorsRequest;
                fromAmino(_: _171.FileDescriptorsRequestAmino): _171.FileDescriptorsRequest;
                toAmino(_: _171.FileDescriptorsRequest): _171.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _171.FileDescriptorsRequestAminoMsg): _171.FileDescriptorsRequest;
                toAminoMsg(message: _171.FileDescriptorsRequest): _171.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _171.FileDescriptorsRequestProtoMsg): _171.FileDescriptorsRequest;
                toProto(message: _171.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _171.FileDescriptorsRequest): _171.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _171.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.FileDescriptorsResponse;
                fromPartial(object: Partial<_171.FileDescriptorsResponse>): _171.FileDescriptorsResponse;
                fromAmino(object: _171.FileDescriptorsResponseAmino): _171.FileDescriptorsResponse;
                toAmino(message: _171.FileDescriptorsResponse): _171.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _171.FileDescriptorsResponseAminoMsg): _171.FileDescriptorsResponse;
                toAminoMsg(message: _171.FileDescriptorsResponse): _171.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _171.FileDescriptorsResponseProtoMsg): _171.FileDescriptorsResponse;
                toProto(message: _171.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _171.FileDescriptorsResponse): _171.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _172.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _172.Module;
                    fromPartial(object: Partial<_172.Module>): _172.Module;
                    fromAmino(object: _172.ModuleAmino): _172.Module;
                    toAmino(message: _172.Module): _172.ModuleAmino;
                    fromAminoMsg(object: _172.ModuleAminoMsg): _172.Module;
                    toAminoMsg(message: _172.Module): _172.ModuleAminoMsg;
                    fromProtoMsg(message: _172.ModuleProtoMsg): _172.Module;
                    toProto(message: _172.Module): Uint8Array;
                    toProtoMsg(message: _172.Module): _172.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _378.MsgClientImpl;
            QueryClientImpl: typeof _361.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _174.QueryParamsRequest): Promise<_174.QueryParamsResponse>;
                signingInfo(request: _174.QuerySigningInfoRequest): Promise<_174.QuerySigningInfoResponse>;
                signingInfos(request?: _174.QuerySigningInfosRequest): Promise<_174.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _339.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _176.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _176.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _176.MsgUnjail): {
                        typeUrl: string;
                        value: _176.MsgUnjail;
                    };
                    updateParams(value: _176.MsgUpdateParams): {
                        typeUrl: string;
                        value: _176.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _176.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _176.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _176.MsgUnjail): {
                        typeUrl: string;
                        value: _176.MsgUnjail;
                    };
                    updateParams(value: _176.MsgUpdateParams): {
                        typeUrl: string;
                        value: _176.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _176.MsgUnjail) => _176.MsgUnjailAmino;
                    fromAmino: (object: _176.MsgUnjailAmino) => _176.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _176.MsgUpdateParams) => _176.MsgUpdateParamsAmino;
                    fromAmino: (object: _176.MsgUpdateParamsAmino) => _176.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _176.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.MsgUnjail;
                fromPartial(object: Partial<_176.MsgUnjail>): _176.MsgUnjail;
                fromAmino(object: _176.MsgUnjailAmino): _176.MsgUnjail;
                toAmino(message: _176.MsgUnjail): _176.MsgUnjailAmino;
                fromAminoMsg(object: _176.MsgUnjailAminoMsg): _176.MsgUnjail;
                toAminoMsg(message: _176.MsgUnjail): _176.MsgUnjailAminoMsg;
                fromProtoMsg(message: _176.MsgUnjailProtoMsg): _176.MsgUnjail;
                toProto(message: _176.MsgUnjail): Uint8Array;
                toProtoMsg(message: _176.MsgUnjail): _176.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _176.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.MsgUnjailResponse;
                fromPartial(_: Partial<_176.MsgUnjailResponse>): _176.MsgUnjailResponse;
                fromAmino(_: _176.MsgUnjailResponseAmino): _176.MsgUnjailResponse;
                toAmino(_: _176.MsgUnjailResponse): _176.MsgUnjailResponseAmino;
                fromAminoMsg(object: _176.MsgUnjailResponseAminoMsg): _176.MsgUnjailResponse;
                toAminoMsg(message: _176.MsgUnjailResponse): _176.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _176.MsgUnjailResponseProtoMsg): _176.MsgUnjailResponse;
                toProto(message: _176.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _176.MsgUnjailResponse): _176.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _176.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _176.MsgUpdateParams;
                fromPartial(object: Partial<_176.MsgUpdateParams>): _176.MsgUpdateParams;
                fromAmino(object: _176.MsgUpdateParamsAmino): _176.MsgUpdateParams;
                toAmino(message: _176.MsgUpdateParams): _176.MsgUpdateParamsAmino;
                fromAminoMsg(object: _176.MsgUpdateParamsAminoMsg): _176.MsgUpdateParams;
                toAminoMsg(message: _176.MsgUpdateParams): _176.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _176.MsgUpdateParamsProtoMsg): _176.MsgUpdateParams;
                toProto(message: _176.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _176.MsgUpdateParams): _176.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _176.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _176.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_176.MsgUpdateParamsResponse>): _176.MsgUpdateParamsResponse;
                fromAmino(_: _176.MsgUpdateParamsResponseAmino): _176.MsgUpdateParamsResponse;
                toAmino(_: _176.MsgUpdateParamsResponse): _176.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _176.MsgUpdateParamsResponseAminoMsg): _176.MsgUpdateParamsResponse;
                toAminoMsg(message: _176.MsgUpdateParamsResponse): _176.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _176.MsgUpdateParamsResponseProtoMsg): _176.MsgUpdateParamsResponse;
                toProto(message: _176.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _176.MsgUpdateParamsResponse): _176.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _175.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.ValidatorSigningInfo;
                fromPartial(object: Partial<_175.ValidatorSigningInfo>): _175.ValidatorSigningInfo;
                fromAmino(object: _175.ValidatorSigningInfoAmino): _175.ValidatorSigningInfo;
                toAmino(message: _175.ValidatorSigningInfo): _175.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _175.ValidatorSigningInfoAminoMsg): _175.ValidatorSigningInfo;
                toAminoMsg(message: _175.ValidatorSigningInfo): _175.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _175.ValidatorSigningInfoProtoMsg): _175.ValidatorSigningInfo;
                toProto(message: _175.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _175.ValidatorSigningInfo): _175.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _175.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _175.Params;
                fromPartial(object: Partial<_175.Params>): _175.Params;
                fromAmino(object: _175.ParamsAmino): _175.Params;
                toAmino(message: _175.Params): _175.ParamsAmino;
                fromAminoMsg(object: _175.ParamsAminoMsg): _175.Params;
                toAminoMsg(message: _175.Params): _175.ParamsAminoMsg;
                fromProtoMsg(message: _175.ParamsProtoMsg): _175.Params;
                toProto(message: _175.Params): Uint8Array;
                toProtoMsg(message: _175.Params): _175.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _174.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _174.QueryParamsRequest;
                fromPartial(_: Partial<_174.QueryParamsRequest>): _174.QueryParamsRequest;
                fromAmino(_: _174.QueryParamsRequestAmino): _174.QueryParamsRequest;
                toAmino(_: _174.QueryParamsRequest): _174.QueryParamsRequestAmino;
                fromAminoMsg(object: _174.QueryParamsRequestAminoMsg): _174.QueryParamsRequest;
                toAminoMsg(message: _174.QueryParamsRequest): _174.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _174.QueryParamsRequestProtoMsg): _174.QueryParamsRequest;
                toProto(message: _174.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _174.QueryParamsRequest): _174.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _174.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.QueryParamsResponse;
                fromPartial(object: Partial<_174.QueryParamsResponse>): _174.QueryParamsResponse;
                fromAmino(object: _174.QueryParamsResponseAmino): _174.QueryParamsResponse;
                toAmino(message: _174.QueryParamsResponse): _174.QueryParamsResponseAmino;
                fromAminoMsg(object: _174.QueryParamsResponseAminoMsg): _174.QueryParamsResponse;
                toAminoMsg(message: _174.QueryParamsResponse): _174.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _174.QueryParamsResponseProtoMsg): _174.QueryParamsResponse;
                toProto(message: _174.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _174.QueryParamsResponse): _174.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _174.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.QuerySigningInfoRequest;
                fromPartial(object: Partial<_174.QuerySigningInfoRequest>): _174.QuerySigningInfoRequest;
                fromAmino(object: _174.QuerySigningInfoRequestAmino): _174.QuerySigningInfoRequest;
                toAmino(message: _174.QuerySigningInfoRequest): _174.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _174.QuerySigningInfoRequestAminoMsg): _174.QuerySigningInfoRequest;
                toAminoMsg(message: _174.QuerySigningInfoRequest): _174.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _174.QuerySigningInfoRequestProtoMsg): _174.QuerySigningInfoRequest;
                toProto(message: _174.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _174.QuerySigningInfoRequest): _174.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _174.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.QuerySigningInfoResponse;
                fromPartial(object: Partial<_174.QuerySigningInfoResponse>): _174.QuerySigningInfoResponse;
                fromAmino(object: _174.QuerySigningInfoResponseAmino): _174.QuerySigningInfoResponse;
                toAmino(message: _174.QuerySigningInfoResponse): _174.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _174.QuerySigningInfoResponseAminoMsg): _174.QuerySigningInfoResponse;
                toAminoMsg(message: _174.QuerySigningInfoResponse): _174.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _174.QuerySigningInfoResponseProtoMsg): _174.QuerySigningInfoResponse;
                toProto(message: _174.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _174.QuerySigningInfoResponse): _174.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _174.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.QuerySigningInfosRequest;
                fromPartial(object: Partial<_174.QuerySigningInfosRequest>): _174.QuerySigningInfosRequest;
                fromAmino(object: _174.QuerySigningInfosRequestAmino): _174.QuerySigningInfosRequest;
                toAmino(message: _174.QuerySigningInfosRequest): _174.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _174.QuerySigningInfosRequestAminoMsg): _174.QuerySigningInfosRequest;
                toAminoMsg(message: _174.QuerySigningInfosRequest): _174.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _174.QuerySigningInfosRequestProtoMsg): _174.QuerySigningInfosRequest;
                toProto(message: _174.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _174.QuerySigningInfosRequest): _174.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _174.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.QuerySigningInfosResponse;
                fromPartial(object: Partial<_174.QuerySigningInfosResponse>): _174.QuerySigningInfosResponse;
                fromAmino(object: _174.QuerySigningInfosResponseAmino): _174.QuerySigningInfosResponse;
                toAmino(message: _174.QuerySigningInfosResponse): _174.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _174.QuerySigningInfosResponseAminoMsg): _174.QuerySigningInfosResponse;
                toAminoMsg(message: _174.QuerySigningInfosResponse): _174.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _174.QuerySigningInfosResponseProtoMsg): _174.QuerySigningInfosResponse;
                toProto(message: _174.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _174.QuerySigningInfosResponse): _174.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _173.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.GenesisState;
                fromPartial(object: Partial<_173.GenesisState>): _173.GenesisState;
                fromAmino(object: _173.GenesisStateAmino): _173.GenesisState;
                toAmino(message: _173.GenesisState): _173.GenesisStateAmino;
                fromAminoMsg(object: _173.GenesisStateAminoMsg): _173.GenesisState;
                toAminoMsg(message: _173.GenesisState): _173.GenesisStateAminoMsg;
                fromProtoMsg(message: _173.GenesisStateProtoMsg): _173.GenesisState;
                toProto(message: _173.GenesisState): Uint8Array;
                toProtoMsg(message: _173.GenesisState): _173.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _173.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.SigningInfo;
                fromPartial(object: Partial<_173.SigningInfo>): _173.SigningInfo;
                fromAmino(object: _173.SigningInfoAmino): _173.SigningInfo;
                toAmino(message: _173.SigningInfo): _173.SigningInfoAmino;
                fromAminoMsg(object: _173.SigningInfoAminoMsg): _173.SigningInfo;
                toAminoMsg(message: _173.SigningInfo): _173.SigningInfoAminoMsg;
                fromProtoMsg(message: _173.SigningInfoProtoMsg): _173.SigningInfo;
                toProto(message: _173.SigningInfo): Uint8Array;
                toProtoMsg(message: _173.SigningInfo): _173.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _173.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.ValidatorMissedBlocks;
                fromPartial(object: Partial<_173.ValidatorMissedBlocks>): _173.ValidatorMissedBlocks;
                fromAmino(object: _173.ValidatorMissedBlocksAmino): _173.ValidatorMissedBlocks;
                toAmino(message: _173.ValidatorMissedBlocks): _173.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _173.ValidatorMissedBlocksAminoMsg): _173.ValidatorMissedBlocks;
                toAminoMsg(message: _173.ValidatorMissedBlocks): _173.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _173.ValidatorMissedBlocksProtoMsg): _173.ValidatorMissedBlocks;
                toProto(message: _173.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _173.ValidatorMissedBlocks): _173.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _173.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MissedBlock;
                fromPartial(object: Partial<_173.MissedBlock>): _173.MissedBlock;
                fromAmino(object: _173.MissedBlockAmino): _173.MissedBlock;
                toAmino(message: _173.MissedBlock): _173.MissedBlockAmino;
                fromAminoMsg(object: _173.MissedBlockAminoMsg): _173.MissedBlock;
                toAminoMsg(message: _173.MissedBlock): _173.MissedBlockAminoMsg;
                fromProtoMsg(message: _173.MissedBlockProtoMsg): _173.MissedBlock;
                toProto(message: _173.MissedBlock): Uint8Array;
                toProtoMsg(message: _173.MissedBlock): _173.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _177.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.Module;
                    fromPartial(object: Partial<_177.Module>): _177.Module;
                    fromAmino(object: _177.ModuleAmino): _177.Module;
                    toAmino(message: _177.Module): _177.ModuleAmino;
                    fromAminoMsg(object: _177.ModuleAminoMsg): _177.Module;
                    toAminoMsg(message: _177.Module): _177.ModuleAminoMsg;
                    fromProtoMsg(message: _177.ModuleProtoMsg): _177.Module;
                    toProto(message: _177.Module): Uint8Array;
                    toProtoMsg(message: _177.Module): _177.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _379.MsgClientImpl;
            QueryClientImpl: typeof _362.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _180.QueryValidatorsRequest): Promise<_180.QueryValidatorsResponse>;
                validator(request: _180.QueryValidatorRequest): Promise<_180.QueryValidatorResponse>;
                validatorDelegations(request: _180.QueryValidatorDelegationsRequest): Promise<_180.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _180.QueryValidatorUnbondingDelegationsRequest): Promise<_180.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _180.QueryDelegationRequest): Promise<_180.QueryDelegationResponse>;
                unbondingDelegation(request: _180.QueryUnbondingDelegationRequest): Promise<_180.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _180.QueryDelegatorDelegationsRequest): Promise<_180.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _180.QueryDelegatorUnbondingDelegationsRequest): Promise<_180.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _180.QueryRedelegationsRequest): Promise<_180.QueryRedelegationsResponse>;
                delegatorValidators(request: _180.QueryDelegatorValidatorsRequest): Promise<_180.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _180.QueryDelegatorValidatorRequest): Promise<_180.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _180.QueryHistoricalInfoRequest): Promise<_180.QueryHistoricalInfoResponse>;
                pool(request?: _180.QueryPoolRequest): Promise<_180.QueryPoolResponse>;
                params(request?: _180.QueryParamsRequest): Promise<_180.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _340.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _182.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _182.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _182.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _182.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _182.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _182.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _182.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _182.MsgCreateValidator): {
                        typeUrl: string;
                        value: _182.MsgCreateValidator;
                    };
                    editValidator(value: _182.MsgEditValidator): {
                        typeUrl: string;
                        value: _182.MsgEditValidator;
                    };
                    delegate(value: _182.MsgDelegate): {
                        typeUrl: string;
                        value: _182.MsgDelegate;
                    };
                    beginRedelegate(value: _182.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _182.MsgBeginRedelegate;
                    };
                    undelegate(value: _182.MsgUndelegate): {
                        typeUrl: string;
                        value: _182.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _182.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _182.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _182.MsgUpdateParams): {
                        typeUrl: string;
                        value: _182.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _182.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _182.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _182.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _182.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _182.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _182.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _182.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _182.MsgCreateValidator): {
                        typeUrl: string;
                        value: _182.MsgCreateValidator;
                    };
                    editValidator(value: _182.MsgEditValidator): {
                        typeUrl: string;
                        value: _182.MsgEditValidator;
                    };
                    delegate(value: _182.MsgDelegate): {
                        typeUrl: string;
                        value: _182.MsgDelegate;
                    };
                    beginRedelegate(value: _182.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _182.MsgBeginRedelegate;
                    };
                    undelegate(value: _182.MsgUndelegate): {
                        typeUrl: string;
                        value: _182.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _182.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _182.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _182.MsgUpdateParams): {
                        typeUrl: string;
                        value: _182.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _182.MsgCreateValidator) => _182.MsgCreateValidatorAmino;
                    fromAmino: (object: _182.MsgCreateValidatorAmino) => _182.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _182.MsgEditValidator) => _182.MsgEditValidatorAmino;
                    fromAmino: (object: _182.MsgEditValidatorAmino) => _182.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _182.MsgDelegate) => _182.MsgDelegateAmino;
                    fromAmino: (object: _182.MsgDelegateAmino) => _182.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _182.MsgBeginRedelegate) => _182.MsgBeginRedelegateAmino;
                    fromAmino: (object: _182.MsgBeginRedelegateAmino) => _182.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _182.MsgUndelegate) => _182.MsgUndelegateAmino;
                    fromAmino: (object: _182.MsgUndelegateAmino) => _182.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _182.MsgCancelUnbondingDelegation) => _182.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _182.MsgCancelUnbondingDelegationAmino) => _182.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _182.MsgUpdateParams) => _182.MsgUpdateParamsAmino;
                    fromAmino: (object: _182.MsgUpdateParamsAmino) => _182.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _182.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgCreateValidator;
                fromPartial(object: Partial<_182.MsgCreateValidator>): _182.MsgCreateValidator;
                fromAmino(object: _182.MsgCreateValidatorAmino): _182.MsgCreateValidator;
                toAmino(message: _182.MsgCreateValidator): _182.MsgCreateValidatorAmino;
                fromAminoMsg(object: _182.MsgCreateValidatorAminoMsg): _182.MsgCreateValidator;
                toAminoMsg(message: _182.MsgCreateValidator): _182.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _182.MsgCreateValidatorProtoMsg): _182.MsgCreateValidator;
                toProto(message: _182.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _182.MsgCreateValidator): _182.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _182.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _182.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_182.MsgCreateValidatorResponse>): _182.MsgCreateValidatorResponse;
                fromAmino(_: _182.MsgCreateValidatorResponseAmino): _182.MsgCreateValidatorResponse;
                toAmino(_: _182.MsgCreateValidatorResponse): _182.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _182.MsgCreateValidatorResponseAminoMsg): _182.MsgCreateValidatorResponse;
                toAminoMsg(message: _182.MsgCreateValidatorResponse): _182.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _182.MsgCreateValidatorResponseProtoMsg): _182.MsgCreateValidatorResponse;
                toProto(message: _182.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _182.MsgCreateValidatorResponse): _182.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _182.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgEditValidator;
                fromPartial(object: Partial<_182.MsgEditValidator>): _182.MsgEditValidator;
                fromAmino(object: _182.MsgEditValidatorAmino): _182.MsgEditValidator;
                toAmino(message: _182.MsgEditValidator): _182.MsgEditValidatorAmino;
                fromAminoMsg(object: _182.MsgEditValidatorAminoMsg): _182.MsgEditValidator;
                toAminoMsg(message: _182.MsgEditValidator): _182.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _182.MsgEditValidatorProtoMsg): _182.MsgEditValidator;
                toProto(message: _182.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _182.MsgEditValidator): _182.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _182.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _182.MsgEditValidatorResponse;
                fromPartial(_: Partial<_182.MsgEditValidatorResponse>): _182.MsgEditValidatorResponse;
                fromAmino(_: _182.MsgEditValidatorResponseAmino): _182.MsgEditValidatorResponse;
                toAmino(_: _182.MsgEditValidatorResponse): _182.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _182.MsgEditValidatorResponseAminoMsg): _182.MsgEditValidatorResponse;
                toAminoMsg(message: _182.MsgEditValidatorResponse): _182.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _182.MsgEditValidatorResponseProtoMsg): _182.MsgEditValidatorResponse;
                toProto(message: _182.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _182.MsgEditValidatorResponse): _182.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _182.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgDelegate;
                fromPartial(object: Partial<_182.MsgDelegate>): _182.MsgDelegate;
                fromAmino(object: _182.MsgDelegateAmino): _182.MsgDelegate;
                toAmino(message: _182.MsgDelegate): _182.MsgDelegateAmino;
                fromAminoMsg(object: _182.MsgDelegateAminoMsg): _182.MsgDelegate;
                toAminoMsg(message: _182.MsgDelegate): _182.MsgDelegateAminoMsg;
                fromProtoMsg(message: _182.MsgDelegateProtoMsg): _182.MsgDelegate;
                toProto(message: _182.MsgDelegate): Uint8Array;
                toProtoMsg(message: _182.MsgDelegate): _182.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _182.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _182.MsgDelegateResponse;
                fromPartial(_: Partial<_182.MsgDelegateResponse>): _182.MsgDelegateResponse;
                fromAmino(_: _182.MsgDelegateResponseAmino): _182.MsgDelegateResponse;
                toAmino(_: _182.MsgDelegateResponse): _182.MsgDelegateResponseAmino;
                fromAminoMsg(object: _182.MsgDelegateResponseAminoMsg): _182.MsgDelegateResponse;
                toAminoMsg(message: _182.MsgDelegateResponse): _182.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _182.MsgDelegateResponseProtoMsg): _182.MsgDelegateResponse;
                toProto(message: _182.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _182.MsgDelegateResponse): _182.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _182.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgBeginRedelegate;
                fromPartial(object: Partial<_182.MsgBeginRedelegate>): _182.MsgBeginRedelegate;
                fromAmino(object: _182.MsgBeginRedelegateAmino): _182.MsgBeginRedelegate;
                toAmino(message: _182.MsgBeginRedelegate): _182.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _182.MsgBeginRedelegateAminoMsg): _182.MsgBeginRedelegate;
                toAminoMsg(message: _182.MsgBeginRedelegate): _182.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _182.MsgBeginRedelegateProtoMsg): _182.MsgBeginRedelegate;
                toProto(message: _182.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _182.MsgBeginRedelegate): _182.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _182.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_182.MsgBeginRedelegateResponse>): _182.MsgBeginRedelegateResponse;
                fromAmino(object: _182.MsgBeginRedelegateResponseAmino): _182.MsgBeginRedelegateResponse;
                toAmino(message: _182.MsgBeginRedelegateResponse): _182.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _182.MsgBeginRedelegateResponseAminoMsg): _182.MsgBeginRedelegateResponse;
                toAminoMsg(message: _182.MsgBeginRedelegateResponse): _182.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _182.MsgBeginRedelegateResponseProtoMsg): _182.MsgBeginRedelegateResponse;
                toProto(message: _182.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _182.MsgBeginRedelegateResponse): _182.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _182.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgUndelegate;
                fromPartial(object: Partial<_182.MsgUndelegate>): _182.MsgUndelegate;
                fromAmino(object: _182.MsgUndelegateAmino): _182.MsgUndelegate;
                toAmino(message: _182.MsgUndelegate): _182.MsgUndelegateAmino;
                fromAminoMsg(object: _182.MsgUndelegateAminoMsg): _182.MsgUndelegate;
                toAminoMsg(message: _182.MsgUndelegate): _182.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _182.MsgUndelegateProtoMsg): _182.MsgUndelegate;
                toProto(message: _182.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _182.MsgUndelegate): _182.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _182.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgUndelegateResponse;
                fromPartial(object: Partial<_182.MsgUndelegateResponse>): _182.MsgUndelegateResponse;
                fromAmino(object: _182.MsgUndelegateResponseAmino): _182.MsgUndelegateResponse;
                toAmino(message: _182.MsgUndelegateResponse): _182.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _182.MsgUndelegateResponseAminoMsg): _182.MsgUndelegateResponse;
                toAminoMsg(message: _182.MsgUndelegateResponse): _182.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _182.MsgUndelegateResponseProtoMsg): _182.MsgUndelegateResponse;
                toProto(message: _182.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _182.MsgUndelegateResponse): _182.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _182.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_182.MsgCancelUnbondingDelegation>): _182.MsgCancelUnbondingDelegation;
                fromAmino(object: _182.MsgCancelUnbondingDelegationAmino): _182.MsgCancelUnbondingDelegation;
                toAmino(message: _182.MsgCancelUnbondingDelegation): _182.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _182.MsgCancelUnbondingDelegationAminoMsg): _182.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _182.MsgCancelUnbondingDelegation): _182.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _182.MsgCancelUnbondingDelegationProtoMsg): _182.MsgCancelUnbondingDelegation;
                toProto(message: _182.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _182.MsgCancelUnbondingDelegation): _182.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _182.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _182.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_182.MsgCancelUnbondingDelegationResponse>): _182.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _182.MsgCancelUnbondingDelegationResponseAmino): _182.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _182.MsgCancelUnbondingDelegationResponse): _182.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _182.MsgCancelUnbondingDelegationResponseAminoMsg): _182.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _182.MsgCancelUnbondingDelegationResponse): _182.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _182.MsgCancelUnbondingDelegationResponseProtoMsg): _182.MsgCancelUnbondingDelegationResponse;
                toProto(message: _182.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _182.MsgCancelUnbondingDelegationResponse): _182.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _182.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _182.MsgUpdateParams;
                fromPartial(object: Partial<_182.MsgUpdateParams>): _182.MsgUpdateParams;
                fromAmino(object: _182.MsgUpdateParamsAmino): _182.MsgUpdateParams;
                toAmino(message: _182.MsgUpdateParams): _182.MsgUpdateParamsAmino;
                fromAminoMsg(object: _182.MsgUpdateParamsAminoMsg): _182.MsgUpdateParams;
                toAminoMsg(message: _182.MsgUpdateParams): _182.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _182.MsgUpdateParamsProtoMsg): _182.MsgUpdateParams;
                toProto(message: _182.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _182.MsgUpdateParams): _182.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _182.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _182.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_182.MsgUpdateParamsResponse>): _182.MsgUpdateParamsResponse;
                fromAmino(_: _182.MsgUpdateParamsResponseAmino): _182.MsgUpdateParamsResponse;
                toAmino(_: _182.MsgUpdateParamsResponse): _182.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _182.MsgUpdateParamsResponseAminoMsg): _182.MsgUpdateParamsResponse;
                toAminoMsg(message: _182.MsgUpdateParamsResponse): _182.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _182.MsgUpdateParamsResponseProtoMsg): _182.MsgUpdateParamsResponse;
                toProto(message: _182.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _182.MsgUpdateParamsResponse): _182.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _181.BondStatus;
            bondStatusToJSON(object: _181.BondStatus): string;
            infractionFromJSON(object: any): _181.Infraction;
            infractionToJSON(object: _181.Infraction): string;
            BondStatus: typeof _181.BondStatus;
            BondStatusSDKType: typeof _181.BondStatus;
            BondStatusAmino: typeof _181.BondStatus;
            Infraction: typeof _181.Infraction;
            InfractionSDKType: typeof _181.Infraction;
            InfractionAmino: typeof _181.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _181.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.HistoricalInfo;
                fromPartial(object: Partial<_181.HistoricalInfo>): _181.HistoricalInfo;
                fromAmino(object: _181.HistoricalInfoAmino): _181.HistoricalInfo;
                toAmino(message: _181.HistoricalInfo): _181.HistoricalInfoAmino;
                fromAminoMsg(object: _181.HistoricalInfoAminoMsg): _181.HistoricalInfo;
                toAminoMsg(message: _181.HistoricalInfo): _181.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _181.HistoricalInfoProtoMsg): _181.HistoricalInfo;
                toProto(message: _181.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _181.HistoricalInfo): _181.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _181.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.CommissionRates;
                fromPartial(object: Partial<_181.CommissionRates>): _181.CommissionRates;
                fromAmino(object: _181.CommissionRatesAmino): _181.CommissionRates;
                toAmino(message: _181.CommissionRates): _181.CommissionRatesAmino;
                fromAminoMsg(object: _181.CommissionRatesAminoMsg): _181.CommissionRates;
                toAminoMsg(message: _181.CommissionRates): _181.CommissionRatesAminoMsg;
                fromProtoMsg(message: _181.CommissionRatesProtoMsg): _181.CommissionRates;
                toProto(message: _181.CommissionRates): Uint8Array;
                toProtoMsg(message: _181.CommissionRates): _181.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _181.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Commission;
                fromPartial(object: Partial<_181.Commission>): _181.Commission;
                fromAmino(object: _181.CommissionAmino): _181.Commission;
                toAmino(message: _181.Commission): _181.CommissionAmino;
                fromAminoMsg(object: _181.CommissionAminoMsg): _181.Commission;
                toAminoMsg(message: _181.Commission): _181.CommissionAminoMsg;
                fromProtoMsg(message: _181.CommissionProtoMsg): _181.Commission;
                toProto(message: _181.Commission): Uint8Array;
                toProtoMsg(message: _181.Commission): _181.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _181.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Description;
                fromPartial(object: Partial<_181.Description>): _181.Description;
                fromAmino(object: _181.DescriptionAmino): _181.Description;
                toAmino(message: _181.Description): _181.DescriptionAmino;
                fromAminoMsg(object: _181.DescriptionAminoMsg): _181.Description;
                toAminoMsg(message: _181.Description): _181.DescriptionAminoMsg;
                fromProtoMsg(message: _181.DescriptionProtoMsg): _181.Description;
                toProto(message: _181.Description): Uint8Array;
                toProtoMsg(message: _181.Description): _181.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _181.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Validator;
                fromPartial(object: Partial<_181.Validator>): _181.Validator;
                fromAmino(object: _181.ValidatorAmino): _181.Validator;
                toAmino(message: _181.Validator): _181.ValidatorAmino;
                fromAminoMsg(object: _181.ValidatorAminoMsg): _181.Validator;
                toAminoMsg(message: _181.Validator): _181.ValidatorAminoMsg;
                fromProtoMsg(message: _181.ValidatorProtoMsg): _181.Validator;
                toProto(message: _181.Validator): Uint8Array;
                toProtoMsg(message: _181.Validator): _181.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _181.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.ValAddresses;
                fromPartial(object: Partial<_181.ValAddresses>): _181.ValAddresses;
                fromAmino(object: _181.ValAddressesAmino): _181.ValAddresses;
                toAmino(message: _181.ValAddresses): _181.ValAddressesAmino;
                fromAminoMsg(object: _181.ValAddressesAminoMsg): _181.ValAddresses;
                toAminoMsg(message: _181.ValAddresses): _181.ValAddressesAminoMsg;
                fromProtoMsg(message: _181.ValAddressesProtoMsg): _181.ValAddresses;
                toProto(message: _181.ValAddresses): Uint8Array;
                toProtoMsg(message: _181.ValAddresses): _181.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _181.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.DVPair;
                fromPartial(object: Partial<_181.DVPair>): _181.DVPair;
                fromAmino(object: _181.DVPairAmino): _181.DVPair;
                toAmino(message: _181.DVPair): _181.DVPairAmino;
                fromAminoMsg(object: _181.DVPairAminoMsg): _181.DVPair;
                toAminoMsg(message: _181.DVPair): _181.DVPairAminoMsg;
                fromProtoMsg(message: _181.DVPairProtoMsg): _181.DVPair;
                toProto(message: _181.DVPair): Uint8Array;
                toProtoMsg(message: _181.DVPair): _181.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _181.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.DVPairs;
                fromPartial(object: Partial<_181.DVPairs>): _181.DVPairs;
                fromAmino(object: _181.DVPairsAmino): _181.DVPairs;
                toAmino(message: _181.DVPairs): _181.DVPairsAmino;
                fromAminoMsg(object: _181.DVPairsAminoMsg): _181.DVPairs;
                toAminoMsg(message: _181.DVPairs): _181.DVPairsAminoMsg;
                fromProtoMsg(message: _181.DVPairsProtoMsg): _181.DVPairs;
                toProto(message: _181.DVPairs): Uint8Array;
                toProtoMsg(message: _181.DVPairs): _181.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _181.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.DVVTriplet;
                fromPartial(object: Partial<_181.DVVTriplet>): _181.DVVTriplet;
                fromAmino(object: _181.DVVTripletAmino): _181.DVVTriplet;
                toAmino(message: _181.DVVTriplet): _181.DVVTripletAmino;
                fromAminoMsg(object: _181.DVVTripletAminoMsg): _181.DVVTriplet;
                toAminoMsg(message: _181.DVVTriplet): _181.DVVTripletAminoMsg;
                fromProtoMsg(message: _181.DVVTripletProtoMsg): _181.DVVTriplet;
                toProto(message: _181.DVVTriplet): Uint8Array;
                toProtoMsg(message: _181.DVVTriplet): _181.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _181.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.DVVTriplets;
                fromPartial(object: Partial<_181.DVVTriplets>): _181.DVVTriplets;
                fromAmino(object: _181.DVVTripletsAmino): _181.DVVTriplets;
                toAmino(message: _181.DVVTriplets): _181.DVVTripletsAmino;
                fromAminoMsg(object: _181.DVVTripletsAminoMsg): _181.DVVTriplets;
                toAminoMsg(message: _181.DVVTriplets): _181.DVVTripletsAminoMsg;
                fromProtoMsg(message: _181.DVVTripletsProtoMsg): _181.DVVTriplets;
                toProto(message: _181.DVVTriplets): Uint8Array;
                toProtoMsg(message: _181.DVVTriplets): _181.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _181.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Delegation;
                fromPartial(object: Partial<_181.Delegation>): _181.Delegation;
                fromAmino(object: _181.DelegationAmino): _181.Delegation;
                toAmino(message: _181.Delegation): _181.DelegationAmino;
                fromAminoMsg(object: _181.DelegationAminoMsg): _181.Delegation;
                toAminoMsg(message: _181.Delegation): _181.DelegationAminoMsg;
                fromProtoMsg(message: _181.DelegationProtoMsg): _181.Delegation;
                toProto(message: _181.Delegation): Uint8Array;
                toProtoMsg(message: _181.Delegation): _181.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _181.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.UnbondingDelegation;
                fromPartial(object: Partial<_181.UnbondingDelegation>): _181.UnbondingDelegation;
                fromAmino(object: _181.UnbondingDelegationAmino): _181.UnbondingDelegation;
                toAmino(message: _181.UnbondingDelegation): _181.UnbondingDelegationAmino;
                fromAminoMsg(object: _181.UnbondingDelegationAminoMsg): _181.UnbondingDelegation;
                toAminoMsg(message: _181.UnbondingDelegation): _181.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _181.UnbondingDelegationProtoMsg): _181.UnbondingDelegation;
                toProto(message: _181.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _181.UnbondingDelegation): _181.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _181.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.UnbondingDelegationEntry;
                fromPartial(object: Partial<_181.UnbondingDelegationEntry>): _181.UnbondingDelegationEntry;
                fromAmino(object: _181.UnbondingDelegationEntryAmino): _181.UnbondingDelegationEntry;
                toAmino(message: _181.UnbondingDelegationEntry): _181.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _181.UnbondingDelegationEntryAminoMsg): _181.UnbondingDelegationEntry;
                toAminoMsg(message: _181.UnbondingDelegationEntry): _181.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _181.UnbondingDelegationEntryProtoMsg): _181.UnbondingDelegationEntry;
                toProto(message: _181.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _181.UnbondingDelegationEntry): _181.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _181.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.RedelegationEntry;
                fromPartial(object: Partial<_181.RedelegationEntry>): _181.RedelegationEntry;
                fromAmino(object: _181.RedelegationEntryAmino): _181.RedelegationEntry;
                toAmino(message: _181.RedelegationEntry): _181.RedelegationEntryAmino;
                fromAminoMsg(object: _181.RedelegationEntryAminoMsg): _181.RedelegationEntry;
                toAminoMsg(message: _181.RedelegationEntry): _181.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _181.RedelegationEntryProtoMsg): _181.RedelegationEntry;
                toProto(message: _181.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _181.RedelegationEntry): _181.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _181.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Redelegation;
                fromPartial(object: Partial<_181.Redelegation>): _181.Redelegation;
                fromAmino(object: _181.RedelegationAmino): _181.Redelegation;
                toAmino(message: _181.Redelegation): _181.RedelegationAmino;
                fromAminoMsg(object: _181.RedelegationAminoMsg): _181.Redelegation;
                toAminoMsg(message: _181.Redelegation): _181.RedelegationAminoMsg;
                fromProtoMsg(message: _181.RedelegationProtoMsg): _181.Redelegation;
                toProto(message: _181.Redelegation): Uint8Array;
                toProtoMsg(message: _181.Redelegation): _181.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _181.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Params;
                fromPartial(object: Partial<_181.Params>): _181.Params;
                fromAmino(object: _181.ParamsAmino): _181.Params;
                toAmino(message: _181.Params): _181.ParamsAmino;
                fromAminoMsg(object: _181.ParamsAminoMsg): _181.Params;
                toAminoMsg(message: _181.Params): _181.ParamsAminoMsg;
                fromProtoMsg(message: _181.ParamsProtoMsg): _181.Params;
                toProto(message: _181.Params): Uint8Array;
                toProtoMsg(message: _181.Params): _181.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _181.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.DelegationResponse;
                fromPartial(object: Partial<_181.DelegationResponse>): _181.DelegationResponse;
                fromAmino(object: _181.DelegationResponseAmino): _181.DelegationResponse;
                toAmino(message: _181.DelegationResponse): _181.DelegationResponseAmino;
                fromAminoMsg(object: _181.DelegationResponseAminoMsg): _181.DelegationResponse;
                toAminoMsg(message: _181.DelegationResponse): _181.DelegationResponseAminoMsg;
                fromProtoMsg(message: _181.DelegationResponseProtoMsg): _181.DelegationResponse;
                toProto(message: _181.DelegationResponse): Uint8Array;
                toProtoMsg(message: _181.DelegationResponse): _181.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _181.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.RedelegationEntryResponse;
                fromPartial(object: Partial<_181.RedelegationEntryResponse>): _181.RedelegationEntryResponse;
                fromAmino(object: _181.RedelegationEntryResponseAmino): _181.RedelegationEntryResponse;
                toAmino(message: _181.RedelegationEntryResponse): _181.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _181.RedelegationEntryResponseAminoMsg): _181.RedelegationEntryResponse;
                toAminoMsg(message: _181.RedelegationEntryResponse): _181.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _181.RedelegationEntryResponseProtoMsg): _181.RedelegationEntryResponse;
                toProto(message: _181.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _181.RedelegationEntryResponse): _181.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _181.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.RedelegationResponse;
                fromPartial(object: Partial<_181.RedelegationResponse>): _181.RedelegationResponse;
                fromAmino(object: _181.RedelegationResponseAmino): _181.RedelegationResponse;
                toAmino(message: _181.RedelegationResponse): _181.RedelegationResponseAmino;
                fromAminoMsg(object: _181.RedelegationResponseAminoMsg): _181.RedelegationResponse;
                toAminoMsg(message: _181.RedelegationResponse): _181.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _181.RedelegationResponseProtoMsg): _181.RedelegationResponse;
                toProto(message: _181.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _181.RedelegationResponse): _181.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _181.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.Pool;
                fromPartial(object: Partial<_181.Pool>): _181.Pool;
                fromAmino(object: _181.PoolAmino): _181.Pool;
                toAmino(message: _181.Pool): _181.PoolAmino;
                fromAminoMsg(object: _181.PoolAminoMsg): _181.Pool;
                toAminoMsg(message: _181.Pool): _181.PoolAminoMsg;
                fromProtoMsg(message: _181.PoolProtoMsg): _181.Pool;
                toProto(message: _181.Pool): Uint8Array;
                toProtoMsg(message: _181.Pool): _181.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _181.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _181.ValidatorUpdates;
                fromPartial(object: Partial<_181.ValidatorUpdates>): _181.ValidatorUpdates;
                fromAmino(object: _181.ValidatorUpdatesAmino): _181.ValidatorUpdates;
                toAmino(message: _181.ValidatorUpdates): _181.ValidatorUpdatesAmino;
                fromAminoMsg(object: _181.ValidatorUpdatesAminoMsg): _181.ValidatorUpdates;
                toAminoMsg(message: _181.ValidatorUpdates): _181.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _181.ValidatorUpdatesProtoMsg): _181.ValidatorUpdates;
                toProto(message: _181.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _181.ValidatorUpdates): _181.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _180.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorsRequest;
                fromPartial(object: Partial<_180.QueryValidatorsRequest>): _180.QueryValidatorsRequest;
                fromAmino(object: _180.QueryValidatorsRequestAmino): _180.QueryValidatorsRequest;
                toAmino(message: _180.QueryValidatorsRequest): _180.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _180.QueryValidatorsRequestAminoMsg): _180.QueryValidatorsRequest;
                toAminoMsg(message: _180.QueryValidatorsRequest): _180.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorsRequestProtoMsg): _180.QueryValidatorsRequest;
                toProto(message: _180.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorsRequest): _180.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _180.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorsResponse;
                fromPartial(object: Partial<_180.QueryValidatorsResponse>): _180.QueryValidatorsResponse;
                fromAmino(object: _180.QueryValidatorsResponseAmino): _180.QueryValidatorsResponse;
                toAmino(message: _180.QueryValidatorsResponse): _180.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _180.QueryValidatorsResponseAminoMsg): _180.QueryValidatorsResponse;
                toAminoMsg(message: _180.QueryValidatorsResponse): _180.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorsResponseProtoMsg): _180.QueryValidatorsResponse;
                toProto(message: _180.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorsResponse): _180.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _180.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorRequest;
                fromPartial(object: Partial<_180.QueryValidatorRequest>): _180.QueryValidatorRequest;
                fromAmino(object: _180.QueryValidatorRequestAmino): _180.QueryValidatorRequest;
                toAmino(message: _180.QueryValidatorRequest): _180.QueryValidatorRequestAmino;
                fromAminoMsg(object: _180.QueryValidatorRequestAminoMsg): _180.QueryValidatorRequest;
                toAminoMsg(message: _180.QueryValidatorRequest): _180.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorRequestProtoMsg): _180.QueryValidatorRequest;
                toProto(message: _180.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorRequest): _180.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _180.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorResponse;
                fromPartial(object: Partial<_180.QueryValidatorResponse>): _180.QueryValidatorResponse;
                fromAmino(object: _180.QueryValidatorResponseAmino): _180.QueryValidatorResponse;
                toAmino(message: _180.QueryValidatorResponse): _180.QueryValidatorResponseAmino;
                fromAminoMsg(object: _180.QueryValidatorResponseAminoMsg): _180.QueryValidatorResponse;
                toAminoMsg(message: _180.QueryValidatorResponse): _180.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorResponseProtoMsg): _180.QueryValidatorResponse;
                toProto(message: _180.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorResponse): _180.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _180.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_180.QueryValidatorDelegationsRequest>): _180.QueryValidatorDelegationsRequest;
                fromAmino(object: _180.QueryValidatorDelegationsRequestAmino): _180.QueryValidatorDelegationsRequest;
                toAmino(message: _180.QueryValidatorDelegationsRequest): _180.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _180.QueryValidatorDelegationsRequestAminoMsg): _180.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _180.QueryValidatorDelegationsRequest): _180.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorDelegationsRequestProtoMsg): _180.QueryValidatorDelegationsRequest;
                toProto(message: _180.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorDelegationsRequest): _180.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _180.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_180.QueryValidatorDelegationsResponse>): _180.QueryValidatorDelegationsResponse;
                fromAmino(object: _180.QueryValidatorDelegationsResponseAmino): _180.QueryValidatorDelegationsResponse;
                toAmino(message: _180.QueryValidatorDelegationsResponse): _180.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _180.QueryValidatorDelegationsResponseAminoMsg): _180.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _180.QueryValidatorDelegationsResponse): _180.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorDelegationsResponseProtoMsg): _180.QueryValidatorDelegationsResponse;
                toProto(message: _180.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorDelegationsResponse): _180.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _180.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_180.QueryValidatorUnbondingDelegationsRequest>): _180.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _180.QueryValidatorUnbondingDelegationsRequestAmino): _180.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _180.QueryValidatorUnbondingDelegationsRequest): _180.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _180.QueryValidatorUnbondingDelegationsRequestAminoMsg): _180.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _180.QueryValidatorUnbondingDelegationsRequest): _180.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorUnbondingDelegationsRequestProtoMsg): _180.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _180.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorUnbondingDelegationsRequest): _180.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _180.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_180.QueryValidatorUnbondingDelegationsResponse>): _180.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _180.QueryValidatorUnbondingDelegationsResponseAmino): _180.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _180.QueryValidatorUnbondingDelegationsResponse): _180.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _180.QueryValidatorUnbondingDelegationsResponseAminoMsg): _180.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _180.QueryValidatorUnbondingDelegationsResponse): _180.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryValidatorUnbondingDelegationsResponseProtoMsg): _180.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _180.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryValidatorUnbondingDelegationsResponse): _180.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _180.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegationRequest;
                fromPartial(object: Partial<_180.QueryDelegationRequest>): _180.QueryDelegationRequest;
                fromAmino(object: _180.QueryDelegationRequestAmino): _180.QueryDelegationRequest;
                toAmino(message: _180.QueryDelegationRequest): _180.QueryDelegationRequestAmino;
                fromAminoMsg(object: _180.QueryDelegationRequestAminoMsg): _180.QueryDelegationRequest;
                toAminoMsg(message: _180.QueryDelegationRequest): _180.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _180.QueryDelegationRequestProtoMsg): _180.QueryDelegationRequest;
                toProto(message: _180.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _180.QueryDelegationRequest): _180.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _180.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegationResponse;
                fromPartial(object: Partial<_180.QueryDelegationResponse>): _180.QueryDelegationResponse;
                fromAmino(object: _180.QueryDelegationResponseAmino): _180.QueryDelegationResponse;
                toAmino(message: _180.QueryDelegationResponse): _180.QueryDelegationResponseAmino;
                fromAminoMsg(object: _180.QueryDelegationResponseAminoMsg): _180.QueryDelegationResponse;
                toAminoMsg(message: _180.QueryDelegationResponse): _180.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _180.QueryDelegationResponseProtoMsg): _180.QueryDelegationResponse;
                toProto(message: _180.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _180.QueryDelegationResponse): _180.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _180.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_180.QueryUnbondingDelegationRequest>): _180.QueryUnbondingDelegationRequest;
                fromAmino(object: _180.QueryUnbondingDelegationRequestAmino): _180.QueryUnbondingDelegationRequest;
                toAmino(message: _180.QueryUnbondingDelegationRequest): _180.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _180.QueryUnbondingDelegationRequestAminoMsg): _180.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _180.QueryUnbondingDelegationRequest): _180.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _180.QueryUnbondingDelegationRequestProtoMsg): _180.QueryUnbondingDelegationRequest;
                toProto(message: _180.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _180.QueryUnbondingDelegationRequest): _180.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _180.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_180.QueryUnbondingDelegationResponse>): _180.QueryUnbondingDelegationResponse;
                fromAmino(object: _180.QueryUnbondingDelegationResponseAmino): _180.QueryUnbondingDelegationResponse;
                toAmino(message: _180.QueryUnbondingDelegationResponse): _180.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _180.QueryUnbondingDelegationResponseAminoMsg): _180.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _180.QueryUnbondingDelegationResponse): _180.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _180.QueryUnbondingDelegationResponseProtoMsg): _180.QueryUnbondingDelegationResponse;
                toProto(message: _180.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _180.QueryUnbondingDelegationResponse): _180.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_180.QueryDelegatorDelegationsRequest>): _180.QueryDelegatorDelegationsRequest;
                fromAmino(object: _180.QueryDelegatorDelegationsRequestAmino): _180.QueryDelegatorDelegationsRequest;
                toAmino(message: _180.QueryDelegatorDelegationsRequest): _180.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _180.QueryDelegatorDelegationsRequestAminoMsg): _180.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _180.QueryDelegatorDelegationsRequest): _180.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorDelegationsRequestProtoMsg): _180.QueryDelegatorDelegationsRequest;
                toProto(message: _180.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorDelegationsRequest): _180.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_180.QueryDelegatorDelegationsResponse>): _180.QueryDelegatorDelegationsResponse;
                fromAmino(object: _180.QueryDelegatorDelegationsResponseAmino): _180.QueryDelegatorDelegationsResponse;
                toAmino(message: _180.QueryDelegatorDelegationsResponse): _180.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _180.QueryDelegatorDelegationsResponseAminoMsg): _180.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _180.QueryDelegatorDelegationsResponse): _180.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorDelegationsResponseProtoMsg): _180.QueryDelegatorDelegationsResponse;
                toProto(message: _180.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorDelegationsResponse): _180.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_180.QueryDelegatorUnbondingDelegationsRequest>): _180.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _180.QueryDelegatorUnbondingDelegationsRequestAmino): _180.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _180.QueryDelegatorUnbondingDelegationsRequest): _180.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _180.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _180.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _180.QueryDelegatorUnbondingDelegationsRequest): _180.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _180.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _180.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorUnbondingDelegationsRequest): _180.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_180.QueryDelegatorUnbondingDelegationsResponse>): _180.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _180.QueryDelegatorUnbondingDelegationsResponseAmino): _180.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _180.QueryDelegatorUnbondingDelegationsResponse): _180.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _180.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _180.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _180.QueryDelegatorUnbondingDelegationsResponse): _180.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _180.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _180.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorUnbondingDelegationsResponse): _180.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _180.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryRedelegationsRequest;
                fromPartial(object: Partial<_180.QueryRedelegationsRequest>): _180.QueryRedelegationsRequest;
                fromAmino(object: _180.QueryRedelegationsRequestAmino): _180.QueryRedelegationsRequest;
                toAmino(message: _180.QueryRedelegationsRequest): _180.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _180.QueryRedelegationsRequestAminoMsg): _180.QueryRedelegationsRequest;
                toAminoMsg(message: _180.QueryRedelegationsRequest): _180.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryRedelegationsRequestProtoMsg): _180.QueryRedelegationsRequest;
                toProto(message: _180.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryRedelegationsRequest): _180.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _180.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryRedelegationsResponse;
                fromPartial(object: Partial<_180.QueryRedelegationsResponse>): _180.QueryRedelegationsResponse;
                fromAmino(object: _180.QueryRedelegationsResponseAmino): _180.QueryRedelegationsResponse;
                toAmino(message: _180.QueryRedelegationsResponse): _180.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _180.QueryRedelegationsResponseAminoMsg): _180.QueryRedelegationsResponse;
                toAminoMsg(message: _180.QueryRedelegationsResponse): _180.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryRedelegationsResponseProtoMsg): _180.QueryRedelegationsResponse;
                toProto(message: _180.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryRedelegationsResponse): _180.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_180.QueryDelegatorValidatorsRequest>): _180.QueryDelegatorValidatorsRequest;
                fromAmino(object: _180.QueryDelegatorValidatorsRequestAmino): _180.QueryDelegatorValidatorsRequest;
                toAmino(message: _180.QueryDelegatorValidatorsRequest): _180.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _180.QueryDelegatorValidatorsRequestAminoMsg): _180.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _180.QueryDelegatorValidatorsRequest): _180.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorValidatorsRequestProtoMsg): _180.QueryDelegatorValidatorsRequest;
                toProto(message: _180.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorValidatorsRequest): _180.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_180.QueryDelegatorValidatorsResponse>): _180.QueryDelegatorValidatorsResponse;
                fromAmino(object: _180.QueryDelegatorValidatorsResponseAmino): _180.QueryDelegatorValidatorsResponse;
                toAmino(message: _180.QueryDelegatorValidatorsResponse): _180.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _180.QueryDelegatorValidatorsResponseAminoMsg): _180.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _180.QueryDelegatorValidatorsResponse): _180.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorValidatorsResponseProtoMsg): _180.QueryDelegatorValidatorsResponse;
                toProto(message: _180.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorValidatorsResponse): _180.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_180.QueryDelegatorValidatorRequest>): _180.QueryDelegatorValidatorRequest;
                fromAmino(object: _180.QueryDelegatorValidatorRequestAmino): _180.QueryDelegatorValidatorRequest;
                toAmino(message: _180.QueryDelegatorValidatorRequest): _180.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _180.QueryDelegatorValidatorRequestAminoMsg): _180.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _180.QueryDelegatorValidatorRequest): _180.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorValidatorRequestProtoMsg): _180.QueryDelegatorValidatorRequest;
                toProto(message: _180.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorValidatorRequest): _180.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _180.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_180.QueryDelegatorValidatorResponse>): _180.QueryDelegatorValidatorResponse;
                fromAmino(object: _180.QueryDelegatorValidatorResponseAmino): _180.QueryDelegatorValidatorResponse;
                toAmino(message: _180.QueryDelegatorValidatorResponse): _180.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _180.QueryDelegatorValidatorResponseAminoMsg): _180.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _180.QueryDelegatorValidatorResponse): _180.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _180.QueryDelegatorValidatorResponseProtoMsg): _180.QueryDelegatorValidatorResponse;
                toProto(message: _180.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _180.QueryDelegatorValidatorResponse): _180.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _180.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_180.QueryHistoricalInfoRequest>): _180.QueryHistoricalInfoRequest;
                fromAmino(object: _180.QueryHistoricalInfoRequestAmino): _180.QueryHistoricalInfoRequest;
                toAmino(message: _180.QueryHistoricalInfoRequest): _180.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _180.QueryHistoricalInfoRequestAminoMsg): _180.QueryHistoricalInfoRequest;
                toAminoMsg(message: _180.QueryHistoricalInfoRequest): _180.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _180.QueryHistoricalInfoRequestProtoMsg): _180.QueryHistoricalInfoRequest;
                toProto(message: _180.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _180.QueryHistoricalInfoRequest): _180.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _180.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_180.QueryHistoricalInfoResponse>): _180.QueryHistoricalInfoResponse;
                fromAmino(object: _180.QueryHistoricalInfoResponseAmino): _180.QueryHistoricalInfoResponse;
                toAmino(message: _180.QueryHistoricalInfoResponse): _180.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _180.QueryHistoricalInfoResponseAminoMsg): _180.QueryHistoricalInfoResponse;
                toAminoMsg(message: _180.QueryHistoricalInfoResponse): _180.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _180.QueryHistoricalInfoResponseProtoMsg): _180.QueryHistoricalInfoResponse;
                toProto(message: _180.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _180.QueryHistoricalInfoResponse): _180.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _180.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _180.QueryPoolRequest;
                fromPartial(_: Partial<_180.QueryPoolRequest>): _180.QueryPoolRequest;
                fromAmino(_: _180.QueryPoolRequestAmino): _180.QueryPoolRequest;
                toAmino(_: _180.QueryPoolRequest): _180.QueryPoolRequestAmino;
                fromAminoMsg(object: _180.QueryPoolRequestAminoMsg): _180.QueryPoolRequest;
                toAminoMsg(message: _180.QueryPoolRequest): _180.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _180.QueryPoolRequestProtoMsg): _180.QueryPoolRequest;
                toProto(message: _180.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _180.QueryPoolRequest): _180.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _180.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryPoolResponse;
                fromPartial(object: Partial<_180.QueryPoolResponse>): _180.QueryPoolResponse;
                fromAmino(object: _180.QueryPoolResponseAmino): _180.QueryPoolResponse;
                toAmino(message: _180.QueryPoolResponse): _180.QueryPoolResponseAmino;
                fromAminoMsg(object: _180.QueryPoolResponseAminoMsg): _180.QueryPoolResponse;
                toAminoMsg(message: _180.QueryPoolResponse): _180.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _180.QueryPoolResponseProtoMsg): _180.QueryPoolResponse;
                toProto(message: _180.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _180.QueryPoolResponse): _180.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _180.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _180.QueryParamsRequest;
                fromPartial(_: Partial<_180.QueryParamsRequest>): _180.QueryParamsRequest;
                fromAmino(_: _180.QueryParamsRequestAmino): _180.QueryParamsRequest;
                toAmino(_: _180.QueryParamsRequest): _180.QueryParamsRequestAmino;
                fromAminoMsg(object: _180.QueryParamsRequestAminoMsg): _180.QueryParamsRequest;
                toAminoMsg(message: _180.QueryParamsRequest): _180.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _180.QueryParamsRequestProtoMsg): _180.QueryParamsRequest;
                toProto(message: _180.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryParamsRequest): _180.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _180.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _180.QueryParamsResponse;
                fromPartial(object: Partial<_180.QueryParamsResponse>): _180.QueryParamsResponse;
                fromAmino(object: _180.QueryParamsResponseAmino): _180.QueryParamsResponse;
                toAmino(message: _180.QueryParamsResponse): _180.QueryParamsResponseAmino;
                fromAminoMsg(object: _180.QueryParamsResponseAminoMsg): _180.QueryParamsResponse;
                toAminoMsg(message: _180.QueryParamsResponse): _180.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _180.QueryParamsResponseProtoMsg): _180.QueryParamsResponse;
                toProto(message: _180.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryParamsResponse): _180.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _179.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.GenesisState;
                fromPartial(object: Partial<_179.GenesisState>): _179.GenesisState;
                fromAmino(object: _179.GenesisStateAmino): _179.GenesisState;
                toAmino(message: _179.GenesisState): _179.GenesisStateAmino;
                fromAminoMsg(object: _179.GenesisStateAminoMsg): _179.GenesisState;
                toAminoMsg(message: _179.GenesisState): _179.GenesisStateAminoMsg;
                fromProtoMsg(message: _179.GenesisStateProtoMsg): _179.GenesisState;
                toProto(message: _179.GenesisState): Uint8Array;
                toProtoMsg(message: _179.GenesisState): _179.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _179.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _179.LastValidatorPower;
                fromPartial(object: Partial<_179.LastValidatorPower>): _179.LastValidatorPower;
                fromAmino(object: _179.LastValidatorPowerAmino): _179.LastValidatorPower;
                toAmino(message: _179.LastValidatorPower): _179.LastValidatorPowerAmino;
                fromAminoMsg(object: _179.LastValidatorPowerAminoMsg): _179.LastValidatorPower;
                toAminoMsg(message: _179.LastValidatorPower): _179.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _179.LastValidatorPowerProtoMsg): _179.LastValidatorPower;
                toProto(message: _179.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _179.LastValidatorPower): _179.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _178.AuthorizationType;
            authorizationTypeToJSON(object: _178.AuthorizationType): string;
            AuthorizationType: typeof _178.AuthorizationType;
            AuthorizationTypeSDKType: typeof _178.AuthorizationType;
            AuthorizationTypeAmino: typeof _178.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _178.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _178.StakeAuthorization;
                fromPartial(object: Partial<_178.StakeAuthorization>): _178.StakeAuthorization;
                fromAmino(object: _178.StakeAuthorizationAmino): _178.StakeAuthorization;
                toAmino(message: _178.StakeAuthorization): _178.StakeAuthorizationAmino;
                fromAminoMsg(object: _178.StakeAuthorizationAminoMsg): _178.StakeAuthorization;
                toAminoMsg(message: _178.StakeAuthorization): _178.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _178.StakeAuthorizationProtoMsg): _178.StakeAuthorization;
                toProto(message: _178.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _178.StakeAuthorization): _178.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _178.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _178.StakeAuthorization_Validators;
                fromPartial(object: Partial<_178.StakeAuthorization_Validators>): _178.StakeAuthorization_Validators;
                fromAmino(object: _178.StakeAuthorization_ValidatorsAmino): _178.StakeAuthorization_Validators;
                toAmino(message: _178.StakeAuthorization_Validators): _178.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _178.StakeAuthorization_ValidatorsAminoMsg): _178.StakeAuthorization_Validators;
                toAminoMsg(message: _178.StakeAuthorization_Validators): _178.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _178.StakeAuthorization_ValidatorsProtoMsg): _178.StakeAuthorization_Validators;
                toProto(message: _178.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _178.StakeAuthorization_Validators): _178.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _183.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.Config;
                    fromPartial(object: Partial<_183.Config>): _183.Config;
                    fromAmino(object: _183.ConfigAmino): _183.Config;
                    toAmino(message: _183.Config): _183.ConfigAmino;
                    fromAminoMsg(object: _183.ConfigAminoMsg): _183.Config;
                    toAminoMsg(message: _183.Config): _183.ConfigAminoMsg;
                    fromProtoMsg(message: _183.ConfigProtoMsg): _183.Config;
                    toProto(message: _183.Config): Uint8Array;
                    toProtoMsg(message: _183.Config): _183.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _184.SignMode;
                signModeToJSON(object: _184.SignMode): string;
                SignMode: typeof _184.SignMode;
                SignModeSDKType: typeof _184.SignMode;
                SignModeAmino: typeof _184.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _184.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.SignatureDescriptors;
                    fromPartial(object: Partial<_184.SignatureDescriptors>): _184.SignatureDescriptors;
                    fromAmino(object: _184.SignatureDescriptorsAmino): _184.SignatureDescriptors;
                    toAmino(message: _184.SignatureDescriptors): _184.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _184.SignatureDescriptorsAminoMsg): _184.SignatureDescriptors;
                    toAminoMsg(message: _184.SignatureDescriptors): _184.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _184.SignatureDescriptorsProtoMsg): _184.SignatureDescriptors;
                    toProto(message: _184.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _184.SignatureDescriptors): _184.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _184.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.SignatureDescriptor;
                    fromPartial(object: Partial<_184.SignatureDescriptor>): _184.SignatureDescriptor;
                    fromAmino(object: _184.SignatureDescriptorAmino): _184.SignatureDescriptor;
                    toAmino(message: _184.SignatureDescriptor): _184.SignatureDescriptorAmino;
                    fromAminoMsg(object: _184.SignatureDescriptorAminoMsg): _184.SignatureDescriptor;
                    toAminoMsg(message: _184.SignatureDescriptor): _184.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _184.SignatureDescriptorProtoMsg): _184.SignatureDescriptor;
                    toProto(message: _184.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _184.SignatureDescriptor): _184.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _184.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_184.SignatureDescriptor_Data>): _184.SignatureDescriptor_Data;
                    fromAmino(object: _184.SignatureDescriptor_DataAmino): _184.SignatureDescriptor_Data;
                    toAmino(message: _184.SignatureDescriptor_Data): _184.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _184.SignatureDescriptor_DataAminoMsg): _184.SignatureDescriptor_Data;
                    toAminoMsg(message: _184.SignatureDescriptor_Data): _184.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _184.SignatureDescriptor_DataProtoMsg): _184.SignatureDescriptor_Data;
                    toProto(message: _184.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _184.SignatureDescriptor_Data): _184.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _184.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_184.SignatureDescriptor_Data_Single>): _184.SignatureDescriptor_Data_Single;
                    fromAmino(object: _184.SignatureDescriptor_Data_SingleAmino): _184.SignatureDescriptor_Data_Single;
                    toAmino(message: _184.SignatureDescriptor_Data_Single): _184.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _184.SignatureDescriptor_Data_SingleAminoMsg): _184.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _184.SignatureDescriptor_Data_Single): _184.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _184.SignatureDescriptor_Data_SingleProtoMsg): _184.SignatureDescriptor_Data_Single;
                    toProto(message: _184.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _184.SignatureDescriptor_Data_Single): _184.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _184.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_184.SignatureDescriptor_Data_Multi>): _184.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _184.SignatureDescriptor_Data_MultiAmino): _184.SignatureDescriptor_Data_Multi;
                    toAmino(message: _184.SignatureDescriptor_Data_Multi): _184.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _184.SignatureDescriptor_Data_MultiAminoMsg): _184.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _184.SignatureDescriptor_Data_Multi): _184.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _184.SignatureDescriptor_Data_MultiProtoMsg): _184.SignatureDescriptor_Data_Multi;
                    toProto(message: _184.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _184.SignatureDescriptor_Data_Multi): _184.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _363.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _185.SimulateRequest): Promise<_185.SimulateResponse>;
                getTx(request: _185.GetTxRequest): Promise<_185.GetTxResponse>;
                broadcastTx(request: _185.BroadcastTxRequest): Promise<_185.BroadcastTxResponse>;
                getTxsEvent(request: _185.GetTxsEventRequest): Promise<_185.GetTxsEventResponse>;
                getBlockWithTxs(request: _185.GetBlockWithTxsRequest): Promise<_185.GetBlockWithTxsResponse>;
                txDecode(request: _185.TxDecodeRequest): Promise<_185.TxDecodeResponse>;
                txEncode(request: _185.TxEncodeRequest): Promise<_185.TxEncodeResponse>;
                txEncodeAmino(request: _185.TxEncodeAminoRequest): Promise<_185.TxEncodeAminoResponse>;
                txDecodeAmino(request: _185.TxDecodeAminoRequest): Promise<_185.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _341.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _186.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.Tx;
                fromPartial(object: Partial<_186.Tx>): _186.Tx;
                fromAmino(object: _186.TxAmino): _186.Tx;
                toAmino(message: _186.Tx): _186.TxAmino;
                fromAminoMsg(object: _186.TxAminoMsg): _186.Tx;
                toAminoMsg(message: _186.Tx): _186.TxAminoMsg;
                fromProtoMsg(message: _186.TxProtoMsg): _186.Tx;
                toProto(message: _186.Tx): Uint8Array;
                toProtoMsg(message: _186.Tx): _186.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _186.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.TxRaw;
                fromPartial(object: Partial<_186.TxRaw>): _186.TxRaw;
                fromAmino(object: _186.TxRawAmino): _186.TxRaw;
                toAmino(message: _186.TxRaw): _186.TxRawAmino;
                fromAminoMsg(object: _186.TxRawAminoMsg): _186.TxRaw;
                toAminoMsg(message: _186.TxRaw): _186.TxRawAminoMsg;
                fromProtoMsg(message: _186.TxRawProtoMsg): _186.TxRaw;
                toProto(message: _186.TxRaw): Uint8Array;
                toProtoMsg(message: _186.TxRaw): _186.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _186.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.SignDoc;
                fromPartial(object: Partial<_186.SignDoc>): _186.SignDoc;
                fromAmino(object: _186.SignDocAmino): _186.SignDoc;
                toAmino(message: _186.SignDoc): _186.SignDocAmino;
                fromAminoMsg(object: _186.SignDocAminoMsg): _186.SignDoc;
                toAminoMsg(message: _186.SignDoc): _186.SignDocAminoMsg;
                fromProtoMsg(message: _186.SignDocProtoMsg): _186.SignDoc;
                toProto(message: _186.SignDoc): Uint8Array;
                toProtoMsg(message: _186.SignDoc): _186.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _186.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.SignDocDirectAux;
                fromPartial(object: Partial<_186.SignDocDirectAux>): _186.SignDocDirectAux;
                fromAmino(object: _186.SignDocDirectAuxAmino): _186.SignDocDirectAux;
                toAmino(message: _186.SignDocDirectAux): _186.SignDocDirectAuxAmino;
                fromAminoMsg(object: _186.SignDocDirectAuxAminoMsg): _186.SignDocDirectAux;
                toAminoMsg(message: _186.SignDocDirectAux): _186.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _186.SignDocDirectAuxProtoMsg): _186.SignDocDirectAux;
                toProto(message: _186.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _186.SignDocDirectAux): _186.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _186.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.TxBody;
                fromPartial(object: Partial<_186.TxBody>): _186.TxBody;
                fromAmino(object: _186.TxBodyAmino): _186.TxBody;
                toAmino(message: _186.TxBody): _186.TxBodyAmino;
                fromAminoMsg(object: _186.TxBodyAminoMsg): _186.TxBody;
                toAminoMsg(message: _186.TxBody): _186.TxBodyAminoMsg;
                fromProtoMsg(message: _186.TxBodyProtoMsg): _186.TxBody;
                toProto(message: _186.TxBody): Uint8Array;
                toProtoMsg(message: _186.TxBody): _186.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _186.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.AuthInfo;
                fromPartial(object: Partial<_186.AuthInfo>): _186.AuthInfo;
                fromAmino(object: _186.AuthInfoAmino): _186.AuthInfo;
                toAmino(message: _186.AuthInfo): _186.AuthInfoAmino;
                fromAminoMsg(object: _186.AuthInfoAminoMsg): _186.AuthInfo;
                toAminoMsg(message: _186.AuthInfo): _186.AuthInfoAminoMsg;
                fromProtoMsg(message: _186.AuthInfoProtoMsg): _186.AuthInfo;
                toProto(message: _186.AuthInfo): Uint8Array;
                toProtoMsg(message: _186.AuthInfo): _186.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _186.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.SignerInfo;
                fromPartial(object: Partial<_186.SignerInfo>): _186.SignerInfo;
                fromAmino(object: _186.SignerInfoAmino): _186.SignerInfo;
                toAmino(message: _186.SignerInfo): _186.SignerInfoAmino;
                fromAminoMsg(object: _186.SignerInfoAminoMsg): _186.SignerInfo;
                toAminoMsg(message: _186.SignerInfo): _186.SignerInfoAminoMsg;
                fromProtoMsg(message: _186.SignerInfoProtoMsg): _186.SignerInfo;
                toProto(message: _186.SignerInfo): Uint8Array;
                toProtoMsg(message: _186.SignerInfo): _186.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _186.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.ModeInfo;
                fromPartial(object: Partial<_186.ModeInfo>): _186.ModeInfo;
                fromAmino(object: _186.ModeInfoAmino): _186.ModeInfo;
                toAmino(message: _186.ModeInfo): _186.ModeInfoAmino;
                fromAminoMsg(object: _186.ModeInfoAminoMsg): _186.ModeInfo;
                toAminoMsg(message: _186.ModeInfo): _186.ModeInfoAminoMsg;
                fromProtoMsg(message: _186.ModeInfoProtoMsg): _186.ModeInfo;
                toProto(message: _186.ModeInfo): Uint8Array;
                toProtoMsg(message: _186.ModeInfo): _186.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _186.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.ModeInfo_Single;
                fromPartial(object: Partial<_186.ModeInfo_Single>): _186.ModeInfo_Single;
                fromAmino(object: _186.ModeInfo_SingleAmino): _186.ModeInfo_Single;
                toAmino(message: _186.ModeInfo_Single): _186.ModeInfo_SingleAmino;
                fromAminoMsg(object: _186.ModeInfo_SingleAminoMsg): _186.ModeInfo_Single;
                toAminoMsg(message: _186.ModeInfo_Single): _186.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _186.ModeInfo_SingleProtoMsg): _186.ModeInfo_Single;
                toProto(message: _186.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _186.ModeInfo_Single): _186.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _186.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.ModeInfo_Multi;
                fromPartial(object: Partial<_186.ModeInfo_Multi>): _186.ModeInfo_Multi;
                fromAmino(object: _186.ModeInfo_MultiAmino): _186.ModeInfo_Multi;
                toAmino(message: _186.ModeInfo_Multi): _186.ModeInfo_MultiAmino;
                fromAminoMsg(object: _186.ModeInfo_MultiAminoMsg): _186.ModeInfo_Multi;
                toAminoMsg(message: _186.ModeInfo_Multi): _186.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _186.ModeInfo_MultiProtoMsg): _186.ModeInfo_Multi;
                toProto(message: _186.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _186.ModeInfo_Multi): _186.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _186.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.Fee;
                fromPartial(object: Partial<_186.Fee>): _186.Fee;
                fromAmino(object: _186.FeeAmino): _186.Fee;
                toAmino(message: _186.Fee): _186.FeeAmino;
                fromAminoMsg(object: _186.FeeAminoMsg): _186.Fee;
                toAminoMsg(message: _186.Fee): _186.FeeAminoMsg;
                fromProtoMsg(message: _186.FeeProtoMsg): _186.Fee;
                toProto(message: _186.Fee): Uint8Array;
                toProtoMsg(message: _186.Fee): _186.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _186.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.Tip;
                fromPartial(object: Partial<_186.Tip>): _186.Tip;
                fromAmino(object: _186.TipAmino): _186.Tip;
                toAmino(message: _186.Tip): _186.TipAmino;
                fromAminoMsg(object: _186.TipAminoMsg): _186.Tip;
                toAminoMsg(message: _186.Tip): _186.TipAminoMsg;
                fromProtoMsg(message: _186.TipProtoMsg): _186.Tip;
                toProto(message: _186.Tip): Uint8Array;
                toProtoMsg(message: _186.Tip): _186.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _186.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _186.AuxSignerData;
                fromPartial(object: Partial<_186.AuxSignerData>): _186.AuxSignerData;
                fromAmino(object: _186.AuxSignerDataAmino): _186.AuxSignerData;
                toAmino(message: _186.AuxSignerData): _186.AuxSignerDataAmino;
                fromAminoMsg(object: _186.AuxSignerDataAminoMsg): _186.AuxSignerData;
                toAminoMsg(message: _186.AuxSignerData): _186.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _186.AuxSignerDataProtoMsg): _186.AuxSignerData;
                toProto(message: _186.AuxSignerData): Uint8Array;
                toProtoMsg(message: _186.AuxSignerData): _186.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _185.OrderBy;
            orderByToJSON(object: _185.OrderBy): string;
            broadcastModeFromJSON(object: any): _185.BroadcastMode;
            broadcastModeToJSON(object: _185.BroadcastMode): string;
            OrderBy: typeof _185.OrderBy;
            OrderBySDKType: typeof _185.OrderBy;
            OrderByAmino: typeof _185.OrderBy;
            BroadcastMode: typeof _185.BroadcastMode;
            BroadcastModeSDKType: typeof _185.BroadcastMode;
            BroadcastModeAmino: typeof _185.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _185.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.GetTxsEventRequest;
                fromPartial(object: Partial<_185.GetTxsEventRequest>): _185.GetTxsEventRequest;
                fromAmino(object: _185.GetTxsEventRequestAmino): _185.GetTxsEventRequest;
                toAmino(message: _185.GetTxsEventRequest): _185.GetTxsEventRequestAmino;
                fromAminoMsg(object: _185.GetTxsEventRequestAminoMsg): _185.GetTxsEventRequest;
                toAminoMsg(message: _185.GetTxsEventRequest): _185.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _185.GetTxsEventRequestProtoMsg): _185.GetTxsEventRequest;
                toProto(message: _185.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _185.GetTxsEventRequest): _185.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _185.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.GetTxsEventResponse;
                fromPartial(object: Partial<_185.GetTxsEventResponse>): _185.GetTxsEventResponse;
                fromAmino(object: _185.GetTxsEventResponseAmino): _185.GetTxsEventResponse;
                toAmino(message: _185.GetTxsEventResponse): _185.GetTxsEventResponseAmino;
                fromAminoMsg(object: _185.GetTxsEventResponseAminoMsg): _185.GetTxsEventResponse;
                toAminoMsg(message: _185.GetTxsEventResponse): _185.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _185.GetTxsEventResponseProtoMsg): _185.GetTxsEventResponse;
                toProto(message: _185.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _185.GetTxsEventResponse): _185.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _185.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.BroadcastTxRequest;
                fromPartial(object: Partial<_185.BroadcastTxRequest>): _185.BroadcastTxRequest;
                fromAmino(object: _185.BroadcastTxRequestAmino): _185.BroadcastTxRequest;
                toAmino(message: _185.BroadcastTxRequest): _185.BroadcastTxRequestAmino;
                fromAminoMsg(object: _185.BroadcastTxRequestAminoMsg): _185.BroadcastTxRequest;
                toAminoMsg(message: _185.BroadcastTxRequest): _185.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _185.BroadcastTxRequestProtoMsg): _185.BroadcastTxRequest;
                toProto(message: _185.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _185.BroadcastTxRequest): _185.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _185.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.BroadcastTxResponse;
                fromPartial(object: Partial<_185.BroadcastTxResponse>): _185.BroadcastTxResponse;
                fromAmino(object: _185.BroadcastTxResponseAmino): _185.BroadcastTxResponse;
                toAmino(message: _185.BroadcastTxResponse): _185.BroadcastTxResponseAmino;
                fromAminoMsg(object: _185.BroadcastTxResponseAminoMsg): _185.BroadcastTxResponse;
                toAminoMsg(message: _185.BroadcastTxResponse): _185.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _185.BroadcastTxResponseProtoMsg): _185.BroadcastTxResponse;
                toProto(message: _185.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _185.BroadcastTxResponse): _185.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _185.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.SimulateRequest;
                fromPartial(object: Partial<_185.SimulateRequest>): _185.SimulateRequest;
                fromAmino(object: _185.SimulateRequestAmino): _185.SimulateRequest;
                toAmino(message: _185.SimulateRequest): _185.SimulateRequestAmino;
                fromAminoMsg(object: _185.SimulateRequestAminoMsg): _185.SimulateRequest;
                toAminoMsg(message: _185.SimulateRequest): _185.SimulateRequestAminoMsg;
                fromProtoMsg(message: _185.SimulateRequestProtoMsg): _185.SimulateRequest;
                toProto(message: _185.SimulateRequest): Uint8Array;
                toProtoMsg(message: _185.SimulateRequest): _185.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _185.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.SimulateResponse;
                fromPartial(object: Partial<_185.SimulateResponse>): _185.SimulateResponse;
                fromAmino(object: _185.SimulateResponseAmino): _185.SimulateResponse;
                toAmino(message: _185.SimulateResponse): _185.SimulateResponseAmino;
                fromAminoMsg(object: _185.SimulateResponseAminoMsg): _185.SimulateResponse;
                toAminoMsg(message: _185.SimulateResponse): _185.SimulateResponseAminoMsg;
                fromProtoMsg(message: _185.SimulateResponseProtoMsg): _185.SimulateResponse;
                toProto(message: _185.SimulateResponse): Uint8Array;
                toProtoMsg(message: _185.SimulateResponse): _185.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _185.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.GetTxRequest;
                fromPartial(object: Partial<_185.GetTxRequest>): _185.GetTxRequest;
                fromAmino(object: _185.GetTxRequestAmino): _185.GetTxRequest;
                toAmino(message: _185.GetTxRequest): _185.GetTxRequestAmino;
                fromAminoMsg(object: _185.GetTxRequestAminoMsg): _185.GetTxRequest;
                toAminoMsg(message: _185.GetTxRequest): _185.GetTxRequestAminoMsg;
                fromProtoMsg(message: _185.GetTxRequestProtoMsg): _185.GetTxRequest;
                toProto(message: _185.GetTxRequest): Uint8Array;
                toProtoMsg(message: _185.GetTxRequest): _185.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _185.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.GetTxResponse;
                fromPartial(object: Partial<_185.GetTxResponse>): _185.GetTxResponse;
                fromAmino(object: _185.GetTxResponseAmino): _185.GetTxResponse;
                toAmino(message: _185.GetTxResponse): _185.GetTxResponseAmino;
                fromAminoMsg(object: _185.GetTxResponseAminoMsg): _185.GetTxResponse;
                toAminoMsg(message: _185.GetTxResponse): _185.GetTxResponseAminoMsg;
                fromProtoMsg(message: _185.GetTxResponseProtoMsg): _185.GetTxResponse;
                toProto(message: _185.GetTxResponse): Uint8Array;
                toProtoMsg(message: _185.GetTxResponse): _185.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _185.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_185.GetBlockWithTxsRequest>): _185.GetBlockWithTxsRequest;
                fromAmino(object: _185.GetBlockWithTxsRequestAmino): _185.GetBlockWithTxsRequest;
                toAmino(message: _185.GetBlockWithTxsRequest): _185.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _185.GetBlockWithTxsRequestAminoMsg): _185.GetBlockWithTxsRequest;
                toAminoMsg(message: _185.GetBlockWithTxsRequest): _185.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _185.GetBlockWithTxsRequestProtoMsg): _185.GetBlockWithTxsRequest;
                toProto(message: _185.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _185.GetBlockWithTxsRequest): _185.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _185.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_185.GetBlockWithTxsResponse>): _185.GetBlockWithTxsResponse;
                fromAmino(object: _185.GetBlockWithTxsResponseAmino): _185.GetBlockWithTxsResponse;
                toAmino(message: _185.GetBlockWithTxsResponse): _185.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _185.GetBlockWithTxsResponseAminoMsg): _185.GetBlockWithTxsResponse;
                toAminoMsg(message: _185.GetBlockWithTxsResponse): _185.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _185.GetBlockWithTxsResponseProtoMsg): _185.GetBlockWithTxsResponse;
                toProto(message: _185.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _185.GetBlockWithTxsResponse): _185.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _185.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxDecodeRequest;
                fromPartial(object: Partial<_185.TxDecodeRequest>): _185.TxDecodeRequest;
                fromAmino(object: _185.TxDecodeRequestAmino): _185.TxDecodeRequest;
                toAmino(message: _185.TxDecodeRequest): _185.TxDecodeRequestAmino;
                fromAminoMsg(object: _185.TxDecodeRequestAminoMsg): _185.TxDecodeRequest;
                toAminoMsg(message: _185.TxDecodeRequest): _185.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _185.TxDecodeRequestProtoMsg): _185.TxDecodeRequest;
                toProto(message: _185.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _185.TxDecodeRequest): _185.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _185.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxDecodeResponse;
                fromPartial(object: Partial<_185.TxDecodeResponse>): _185.TxDecodeResponse;
                fromAmino(object: _185.TxDecodeResponseAmino): _185.TxDecodeResponse;
                toAmino(message: _185.TxDecodeResponse): _185.TxDecodeResponseAmino;
                fromAminoMsg(object: _185.TxDecodeResponseAminoMsg): _185.TxDecodeResponse;
                toAminoMsg(message: _185.TxDecodeResponse): _185.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _185.TxDecodeResponseProtoMsg): _185.TxDecodeResponse;
                toProto(message: _185.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _185.TxDecodeResponse): _185.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _185.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxEncodeRequest;
                fromPartial(object: Partial<_185.TxEncodeRequest>): _185.TxEncodeRequest;
                fromAmino(object: _185.TxEncodeRequestAmino): _185.TxEncodeRequest;
                toAmino(message: _185.TxEncodeRequest): _185.TxEncodeRequestAmino;
                fromAminoMsg(object: _185.TxEncodeRequestAminoMsg): _185.TxEncodeRequest;
                toAminoMsg(message: _185.TxEncodeRequest): _185.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _185.TxEncodeRequestProtoMsg): _185.TxEncodeRequest;
                toProto(message: _185.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _185.TxEncodeRequest): _185.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _185.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxEncodeResponse;
                fromPartial(object: Partial<_185.TxEncodeResponse>): _185.TxEncodeResponse;
                fromAmino(object: _185.TxEncodeResponseAmino): _185.TxEncodeResponse;
                toAmino(message: _185.TxEncodeResponse): _185.TxEncodeResponseAmino;
                fromAminoMsg(object: _185.TxEncodeResponseAminoMsg): _185.TxEncodeResponse;
                toAminoMsg(message: _185.TxEncodeResponse): _185.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _185.TxEncodeResponseProtoMsg): _185.TxEncodeResponse;
                toProto(message: _185.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _185.TxEncodeResponse): _185.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _185.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxEncodeAminoRequest;
                fromPartial(object: Partial<_185.TxEncodeAminoRequest>): _185.TxEncodeAminoRequest;
                fromAmino(object: _185.TxEncodeAminoRequestAmino): _185.TxEncodeAminoRequest;
                toAmino(message: _185.TxEncodeAminoRequest): _185.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _185.TxEncodeAminoRequestAminoMsg): _185.TxEncodeAminoRequest;
                toAminoMsg(message: _185.TxEncodeAminoRequest): _185.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _185.TxEncodeAminoRequestProtoMsg): _185.TxEncodeAminoRequest;
                toProto(message: _185.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _185.TxEncodeAminoRequest): _185.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _185.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxEncodeAminoResponse;
                fromPartial(object: Partial<_185.TxEncodeAminoResponse>): _185.TxEncodeAminoResponse;
                fromAmino(object: _185.TxEncodeAminoResponseAmino): _185.TxEncodeAminoResponse;
                toAmino(message: _185.TxEncodeAminoResponse): _185.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _185.TxEncodeAminoResponseAminoMsg): _185.TxEncodeAminoResponse;
                toAminoMsg(message: _185.TxEncodeAminoResponse): _185.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _185.TxEncodeAminoResponseProtoMsg): _185.TxEncodeAminoResponse;
                toProto(message: _185.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _185.TxEncodeAminoResponse): _185.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _185.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxDecodeAminoRequest;
                fromPartial(object: Partial<_185.TxDecodeAminoRequest>): _185.TxDecodeAminoRequest;
                fromAmino(object: _185.TxDecodeAminoRequestAmino): _185.TxDecodeAminoRequest;
                toAmino(message: _185.TxDecodeAminoRequest): _185.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _185.TxDecodeAminoRequestAminoMsg): _185.TxDecodeAminoRequest;
                toAminoMsg(message: _185.TxDecodeAminoRequest): _185.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _185.TxDecodeAminoRequestProtoMsg): _185.TxDecodeAminoRequest;
                toProto(message: _185.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _185.TxDecodeAminoRequest): _185.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _185.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _185.TxDecodeAminoResponse;
                fromPartial(object: Partial<_185.TxDecodeAminoResponse>): _185.TxDecodeAminoResponse;
                fromAmino(object: _185.TxDecodeAminoResponseAmino): _185.TxDecodeAminoResponse;
                toAmino(message: _185.TxDecodeAminoResponse): _185.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _185.TxDecodeAminoResponseAminoMsg): _185.TxDecodeAminoResponse;
                toAminoMsg(message: _185.TxDecodeAminoResponse): _185.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _185.TxDecodeAminoResponseProtoMsg): _185.TxDecodeAminoResponse;
                toProto(message: _185.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _185.TxDecodeAminoResponse): _185.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _187.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.Module;
                    fromPartial(object: Partial<_187.Module>): _187.Module;
                    fromAmino(object: _187.ModuleAmino): _187.Module;
                    toAmino(message: _187.Module): _187.ModuleAmino;
                    fromAminoMsg(object: _187.ModuleAminoMsg): _187.Module;
                    toAminoMsg(message: _187.Module): _187.ModuleAminoMsg;
                    fromProtoMsg(message: _187.ModuleProtoMsg): _187.Module;
                    toProto(message: _187.Module): Uint8Array;
                    toProtoMsg(message: _187.Module): _187.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _380.MsgClientImpl;
            QueryClientImpl: typeof _364.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _188.QueryCurrentPlanRequest): Promise<_188.QueryCurrentPlanResponse>;
                appliedPlan(request: _188.QueryAppliedPlanRequest): Promise<_188.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _188.QueryUpgradedConsensusStateRequest): Promise<_188.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _188.QueryModuleVersionsRequest): Promise<_188.QueryModuleVersionsResponse>;
                authority(request?: _188.QueryAuthorityRequest): Promise<_188.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _342.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _189.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _189.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _189.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _189.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _189.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _189.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _189.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _189.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _189.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _189.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _189.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _189.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _189.MsgSoftwareUpgrade) => _189.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _189.MsgSoftwareUpgradeAmino) => _189.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _189.MsgCancelUpgrade) => _189.MsgCancelUpgradeAmino;
                    fromAmino: (object: _189.MsgCancelUpgradeAmino) => _189.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _190.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.Plan;
                fromPartial(object: Partial<_190.Plan>): _190.Plan;
                fromAmino(object: _190.PlanAmino): _190.Plan;
                toAmino(message: _190.Plan): _190.PlanAmino;
                fromAminoMsg(object: _190.PlanAminoMsg): _190.Plan;
                toAminoMsg(message: _190.Plan): _190.PlanAminoMsg;
                fromProtoMsg(message: _190.PlanProtoMsg): _190.Plan;
                toProto(message: _190.Plan): Uint8Array;
                toProtoMsg(message: _190.Plan): _190.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _190.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_190.SoftwareUpgradeProposal>): _190.SoftwareUpgradeProposal;
                fromAmino(object: _190.SoftwareUpgradeProposalAmino): _190.SoftwareUpgradeProposal;
                toAmino(message: _190.SoftwareUpgradeProposal): _190.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _190.SoftwareUpgradeProposalAminoMsg): _190.SoftwareUpgradeProposal;
                toAminoMsg(message: _190.SoftwareUpgradeProposal): _190.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _190.SoftwareUpgradeProposalProtoMsg): _190.SoftwareUpgradeProposal;
                toProto(message: _190.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _190.SoftwareUpgradeProposal): _190.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _190.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_190.CancelSoftwareUpgradeProposal>): _190.CancelSoftwareUpgradeProposal;
                fromAmino(object: _190.CancelSoftwareUpgradeProposalAmino): _190.CancelSoftwareUpgradeProposal;
                toAmino(message: _190.CancelSoftwareUpgradeProposal): _190.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _190.CancelSoftwareUpgradeProposalAminoMsg): _190.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _190.CancelSoftwareUpgradeProposal): _190.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _190.CancelSoftwareUpgradeProposalProtoMsg): _190.CancelSoftwareUpgradeProposal;
                toProto(message: _190.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _190.CancelSoftwareUpgradeProposal): _190.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _190.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.ModuleVersion;
                fromPartial(object: Partial<_190.ModuleVersion>): _190.ModuleVersion;
                fromAmino(object: _190.ModuleVersionAmino): _190.ModuleVersion;
                toAmino(message: _190.ModuleVersion): _190.ModuleVersionAmino;
                fromAminoMsg(object: _190.ModuleVersionAminoMsg): _190.ModuleVersion;
                toAminoMsg(message: _190.ModuleVersion): _190.ModuleVersionAminoMsg;
                fromProtoMsg(message: _190.ModuleVersionProtoMsg): _190.ModuleVersion;
                toProto(message: _190.ModuleVersion): Uint8Array;
                toProtoMsg(message: _190.ModuleVersion): _190.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _189.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _189.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_189.MsgSoftwareUpgrade>): _189.MsgSoftwareUpgrade;
                fromAmino(object: _189.MsgSoftwareUpgradeAmino): _189.MsgSoftwareUpgrade;
                toAmino(message: _189.MsgSoftwareUpgrade): _189.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _189.MsgSoftwareUpgradeAminoMsg): _189.MsgSoftwareUpgrade;
                toAminoMsg(message: _189.MsgSoftwareUpgrade): _189.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _189.MsgSoftwareUpgradeProtoMsg): _189.MsgSoftwareUpgrade;
                toProto(message: _189.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _189.MsgSoftwareUpgrade): _189.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _189.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _189.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_189.MsgSoftwareUpgradeResponse>): _189.MsgSoftwareUpgradeResponse;
                fromAmino(_: _189.MsgSoftwareUpgradeResponseAmino): _189.MsgSoftwareUpgradeResponse;
                toAmino(_: _189.MsgSoftwareUpgradeResponse): _189.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _189.MsgSoftwareUpgradeResponseAminoMsg): _189.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _189.MsgSoftwareUpgradeResponse): _189.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _189.MsgSoftwareUpgradeResponseProtoMsg): _189.MsgSoftwareUpgradeResponse;
                toProto(message: _189.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _189.MsgSoftwareUpgradeResponse): _189.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _189.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _189.MsgCancelUpgrade;
                fromPartial(object: Partial<_189.MsgCancelUpgrade>): _189.MsgCancelUpgrade;
                fromAmino(object: _189.MsgCancelUpgradeAmino): _189.MsgCancelUpgrade;
                toAmino(message: _189.MsgCancelUpgrade): _189.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _189.MsgCancelUpgradeAminoMsg): _189.MsgCancelUpgrade;
                toAminoMsg(message: _189.MsgCancelUpgrade): _189.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _189.MsgCancelUpgradeProtoMsg): _189.MsgCancelUpgrade;
                toProto(message: _189.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _189.MsgCancelUpgrade): _189.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _189.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _189.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_189.MsgCancelUpgradeResponse>): _189.MsgCancelUpgradeResponse;
                fromAmino(_: _189.MsgCancelUpgradeResponseAmino): _189.MsgCancelUpgradeResponse;
                toAmino(_: _189.MsgCancelUpgradeResponse): _189.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _189.MsgCancelUpgradeResponseAminoMsg): _189.MsgCancelUpgradeResponse;
                toAminoMsg(message: _189.MsgCancelUpgradeResponse): _189.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _189.MsgCancelUpgradeResponseProtoMsg): _189.MsgCancelUpgradeResponse;
                toProto(message: _189.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _189.MsgCancelUpgradeResponse): _189.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _188.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _188.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_188.QueryCurrentPlanRequest>): _188.QueryCurrentPlanRequest;
                fromAmino(_: _188.QueryCurrentPlanRequestAmino): _188.QueryCurrentPlanRequest;
                toAmino(_: _188.QueryCurrentPlanRequest): _188.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _188.QueryCurrentPlanRequestAminoMsg): _188.QueryCurrentPlanRequest;
                toAminoMsg(message: _188.QueryCurrentPlanRequest): _188.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _188.QueryCurrentPlanRequestProtoMsg): _188.QueryCurrentPlanRequest;
                toProto(message: _188.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _188.QueryCurrentPlanRequest): _188.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _188.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_188.QueryCurrentPlanResponse>): _188.QueryCurrentPlanResponse;
                fromAmino(object: _188.QueryCurrentPlanResponseAmino): _188.QueryCurrentPlanResponse;
                toAmino(message: _188.QueryCurrentPlanResponse): _188.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _188.QueryCurrentPlanResponseAminoMsg): _188.QueryCurrentPlanResponse;
                toAminoMsg(message: _188.QueryCurrentPlanResponse): _188.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _188.QueryCurrentPlanResponseProtoMsg): _188.QueryCurrentPlanResponse;
                toProto(message: _188.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _188.QueryCurrentPlanResponse): _188.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _188.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_188.QueryAppliedPlanRequest>): _188.QueryAppliedPlanRequest;
                fromAmino(object: _188.QueryAppliedPlanRequestAmino): _188.QueryAppliedPlanRequest;
                toAmino(message: _188.QueryAppliedPlanRequest): _188.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _188.QueryAppliedPlanRequestAminoMsg): _188.QueryAppliedPlanRequest;
                toAminoMsg(message: _188.QueryAppliedPlanRequest): _188.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _188.QueryAppliedPlanRequestProtoMsg): _188.QueryAppliedPlanRequest;
                toProto(message: _188.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _188.QueryAppliedPlanRequest): _188.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _188.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_188.QueryAppliedPlanResponse>): _188.QueryAppliedPlanResponse;
                fromAmino(object: _188.QueryAppliedPlanResponseAmino): _188.QueryAppliedPlanResponse;
                toAmino(message: _188.QueryAppliedPlanResponse): _188.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _188.QueryAppliedPlanResponseAminoMsg): _188.QueryAppliedPlanResponse;
                toAminoMsg(message: _188.QueryAppliedPlanResponse): _188.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _188.QueryAppliedPlanResponseProtoMsg): _188.QueryAppliedPlanResponse;
                toProto(message: _188.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _188.QueryAppliedPlanResponse): _188.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _188.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_188.QueryUpgradedConsensusStateRequest>): _188.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _188.QueryUpgradedConsensusStateRequestAmino): _188.QueryUpgradedConsensusStateRequest;
                toAmino(message: _188.QueryUpgradedConsensusStateRequest): _188.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _188.QueryUpgradedConsensusStateRequestAminoMsg): _188.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _188.QueryUpgradedConsensusStateRequest): _188.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _188.QueryUpgradedConsensusStateRequestProtoMsg): _188.QueryUpgradedConsensusStateRequest;
                toProto(message: _188.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _188.QueryUpgradedConsensusStateRequest): _188.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _188.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_188.QueryUpgradedConsensusStateResponse>): _188.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _188.QueryUpgradedConsensusStateResponseAmino): _188.QueryUpgradedConsensusStateResponse;
                toAmino(message: _188.QueryUpgradedConsensusStateResponse): _188.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _188.QueryUpgradedConsensusStateResponseAminoMsg): _188.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _188.QueryUpgradedConsensusStateResponse): _188.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _188.QueryUpgradedConsensusStateResponseProtoMsg): _188.QueryUpgradedConsensusStateResponse;
                toProto(message: _188.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _188.QueryUpgradedConsensusStateResponse): _188.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _188.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_188.QueryModuleVersionsRequest>): _188.QueryModuleVersionsRequest;
                fromAmino(object: _188.QueryModuleVersionsRequestAmino): _188.QueryModuleVersionsRequest;
                toAmino(message: _188.QueryModuleVersionsRequest): _188.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _188.QueryModuleVersionsRequestAminoMsg): _188.QueryModuleVersionsRequest;
                toAminoMsg(message: _188.QueryModuleVersionsRequest): _188.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _188.QueryModuleVersionsRequestProtoMsg): _188.QueryModuleVersionsRequest;
                toProto(message: _188.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _188.QueryModuleVersionsRequest): _188.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _188.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_188.QueryModuleVersionsResponse>): _188.QueryModuleVersionsResponse;
                fromAmino(object: _188.QueryModuleVersionsResponseAmino): _188.QueryModuleVersionsResponse;
                toAmino(message: _188.QueryModuleVersionsResponse): _188.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _188.QueryModuleVersionsResponseAminoMsg): _188.QueryModuleVersionsResponse;
                toAminoMsg(message: _188.QueryModuleVersionsResponse): _188.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _188.QueryModuleVersionsResponseProtoMsg): _188.QueryModuleVersionsResponse;
                toProto(message: _188.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _188.QueryModuleVersionsResponse): _188.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _188.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _188.QueryAuthorityRequest;
                fromPartial(_: Partial<_188.QueryAuthorityRequest>): _188.QueryAuthorityRequest;
                fromAmino(_: _188.QueryAuthorityRequestAmino): _188.QueryAuthorityRequest;
                toAmino(_: _188.QueryAuthorityRequest): _188.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _188.QueryAuthorityRequestAminoMsg): _188.QueryAuthorityRequest;
                toAminoMsg(message: _188.QueryAuthorityRequest): _188.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _188.QueryAuthorityRequestProtoMsg): _188.QueryAuthorityRequest;
                toProto(message: _188.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _188.QueryAuthorityRequest): _188.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _188.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _188.QueryAuthorityResponse;
                fromPartial(object: Partial<_188.QueryAuthorityResponse>): _188.QueryAuthorityResponse;
                fromAmino(object: _188.QueryAuthorityResponseAmino): _188.QueryAuthorityResponse;
                toAmino(message: _188.QueryAuthorityResponse): _188.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _188.QueryAuthorityResponseAminoMsg): _188.QueryAuthorityResponse;
                toAminoMsg(message: _188.QueryAuthorityResponse): _188.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _188.QueryAuthorityResponseProtoMsg): _188.QueryAuthorityResponse;
                toProto(message: _188.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _188.QueryAuthorityResponse): _188.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _191.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _191.Module;
                    fromPartial(_: Partial<_191.Module>): _191.Module;
                    fromAmino(_: _191.ModuleAmino): _191.Module;
                    toAmino(_: _191.Module): _191.ModuleAmino;
                    fromAminoMsg(object: _191.ModuleAminoMsg): _191.Module;
                    toAminoMsg(message: _191.Module): _191.ModuleAminoMsg;
                    fromProtoMsg(message: _191.ModuleProtoMsg): _191.Module;
                    toProto(message: _191.Module): Uint8Array;
                    toProtoMsg(message: _191.Module): _191.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _381.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _192.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _192.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _192.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _192.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _192.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _192.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _192.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _192.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _192.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _192.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _192.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _192.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _192.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _192.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _192.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _192.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _192.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _192.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _192.MsgCreateVestingAccount) => _192.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _192.MsgCreateVestingAccountAmino) => _192.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _192.MsgCreatePermanentLockedAccount) => _192.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _192.MsgCreatePermanentLockedAccountAmino) => _192.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _192.MsgCreatePeriodicVestingAccount) => _192.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _192.MsgCreatePeriodicVestingAccountAmino) => _192.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _193.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.BaseVestingAccount;
                fromPartial(object: Partial<_193.BaseVestingAccount>): _193.BaseVestingAccount;
                fromAmino(object: _193.BaseVestingAccountAmino): _193.BaseVestingAccount;
                toAmino(message: _193.BaseVestingAccount): _193.BaseVestingAccountAmino;
                fromAminoMsg(object: _193.BaseVestingAccountAminoMsg): _193.BaseVestingAccount;
                toAminoMsg(message: _193.BaseVestingAccount): _193.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _193.BaseVestingAccountProtoMsg): _193.BaseVestingAccount;
                toProto(message: _193.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _193.BaseVestingAccount): _193.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _193.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.ContinuousVestingAccount;
                fromPartial(object: Partial<_193.ContinuousVestingAccount>): _193.ContinuousVestingAccount;
                fromAmino(object: _193.ContinuousVestingAccountAmino): _193.ContinuousVestingAccount;
                toAmino(message: _193.ContinuousVestingAccount): _193.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _193.ContinuousVestingAccountAminoMsg): _193.ContinuousVestingAccount;
                toAminoMsg(message: _193.ContinuousVestingAccount): _193.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _193.ContinuousVestingAccountProtoMsg): _193.ContinuousVestingAccount;
                toProto(message: _193.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _193.ContinuousVestingAccount): _193.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _193.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.DelayedVestingAccount;
                fromPartial(object: Partial<_193.DelayedVestingAccount>): _193.DelayedVestingAccount;
                fromAmino(object: _193.DelayedVestingAccountAmino): _193.DelayedVestingAccount;
                toAmino(message: _193.DelayedVestingAccount): _193.DelayedVestingAccountAmino;
                fromAminoMsg(object: _193.DelayedVestingAccountAminoMsg): _193.DelayedVestingAccount;
                toAminoMsg(message: _193.DelayedVestingAccount): _193.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _193.DelayedVestingAccountProtoMsg): _193.DelayedVestingAccount;
                toProto(message: _193.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _193.DelayedVestingAccount): _193.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _193.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.Period;
                fromPartial(object: Partial<_193.Period>): _193.Period;
                fromAmino(object: _193.PeriodAmino): _193.Period;
                toAmino(message: _193.Period): _193.PeriodAmino;
                fromAminoMsg(object: _193.PeriodAminoMsg): _193.Period;
                toAminoMsg(message: _193.Period): _193.PeriodAminoMsg;
                fromProtoMsg(message: _193.PeriodProtoMsg): _193.Period;
                toProto(message: _193.Period): Uint8Array;
                toProtoMsg(message: _193.Period): _193.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _193.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.PeriodicVestingAccount;
                fromPartial(object: Partial<_193.PeriodicVestingAccount>): _193.PeriodicVestingAccount;
                fromAmino(object: _193.PeriodicVestingAccountAmino): _193.PeriodicVestingAccount;
                toAmino(message: _193.PeriodicVestingAccount): _193.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _193.PeriodicVestingAccountAminoMsg): _193.PeriodicVestingAccount;
                toAminoMsg(message: _193.PeriodicVestingAccount): _193.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _193.PeriodicVestingAccountProtoMsg): _193.PeriodicVestingAccount;
                toProto(message: _193.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _193.PeriodicVestingAccount): _193.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _193.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.PermanentLockedAccount;
                fromPartial(object: Partial<_193.PermanentLockedAccount>): _193.PermanentLockedAccount;
                fromAmino(object: _193.PermanentLockedAccountAmino): _193.PermanentLockedAccount;
                toAmino(message: _193.PermanentLockedAccount): _193.PermanentLockedAccountAmino;
                fromAminoMsg(object: _193.PermanentLockedAccountAminoMsg): _193.PermanentLockedAccount;
                toAminoMsg(message: _193.PermanentLockedAccount): _193.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _193.PermanentLockedAccountProtoMsg): _193.PermanentLockedAccount;
                toProto(message: _193.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _193.PermanentLockedAccount): _193.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _192.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _192.MsgCreateVestingAccount;
                fromPartial(object: Partial<_192.MsgCreateVestingAccount>): _192.MsgCreateVestingAccount;
                fromAmino(object: _192.MsgCreateVestingAccountAmino): _192.MsgCreateVestingAccount;
                toAmino(message: _192.MsgCreateVestingAccount): _192.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _192.MsgCreateVestingAccountAminoMsg): _192.MsgCreateVestingAccount;
                toAminoMsg(message: _192.MsgCreateVestingAccount): _192.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _192.MsgCreateVestingAccountProtoMsg): _192.MsgCreateVestingAccount;
                toProto(message: _192.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _192.MsgCreateVestingAccount): _192.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _192.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _192.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_192.MsgCreateVestingAccountResponse>): _192.MsgCreateVestingAccountResponse;
                fromAmino(_: _192.MsgCreateVestingAccountResponseAmino): _192.MsgCreateVestingAccountResponse;
                toAmino(_: _192.MsgCreateVestingAccountResponse): _192.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _192.MsgCreateVestingAccountResponseAminoMsg): _192.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _192.MsgCreateVestingAccountResponse): _192.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _192.MsgCreateVestingAccountResponseProtoMsg): _192.MsgCreateVestingAccountResponse;
                toProto(message: _192.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _192.MsgCreateVestingAccountResponse): _192.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _192.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _192.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_192.MsgCreatePermanentLockedAccount>): _192.MsgCreatePermanentLockedAccount;
                fromAmino(object: _192.MsgCreatePermanentLockedAccountAmino): _192.MsgCreatePermanentLockedAccount;
                toAmino(message: _192.MsgCreatePermanentLockedAccount): _192.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _192.MsgCreatePermanentLockedAccountAminoMsg): _192.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _192.MsgCreatePermanentLockedAccount): _192.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _192.MsgCreatePermanentLockedAccountProtoMsg): _192.MsgCreatePermanentLockedAccount;
                toProto(message: _192.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _192.MsgCreatePermanentLockedAccount): _192.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _192.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _192.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_192.MsgCreatePermanentLockedAccountResponse>): _192.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _192.MsgCreatePermanentLockedAccountResponseAmino): _192.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _192.MsgCreatePermanentLockedAccountResponse): _192.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _192.MsgCreatePermanentLockedAccountResponseAminoMsg): _192.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _192.MsgCreatePermanentLockedAccountResponse): _192.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _192.MsgCreatePermanentLockedAccountResponseProtoMsg): _192.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _192.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _192.MsgCreatePermanentLockedAccountResponse): _192.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _192.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _192.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_192.MsgCreatePeriodicVestingAccount>): _192.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _192.MsgCreatePeriodicVestingAccountAmino): _192.MsgCreatePeriodicVestingAccount;
                toAmino(message: _192.MsgCreatePeriodicVestingAccount): _192.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _192.MsgCreatePeriodicVestingAccountAminoMsg): _192.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _192.MsgCreatePeriodicVestingAccount): _192.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _192.MsgCreatePeriodicVestingAccountProtoMsg): _192.MsgCreatePeriodicVestingAccount;
                toProto(message: _192.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _192.MsgCreatePeriodicVestingAccount): _192.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _192.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _192.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_192.MsgCreatePeriodicVestingAccountResponse>): _192.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _192.MsgCreatePeriodicVestingAccountResponseAmino): _192.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _192.MsgCreatePeriodicVestingAccountResponse): _192.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _192.MsgCreatePeriodicVestingAccountResponseAminoMsg): _192.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _192.MsgCreatePeriodicVestingAccountResponse): _192.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _192.MsgCreatePeriodicVestingAccountResponseProtoMsg): _192.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _192.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _192.MsgCreatePeriodicVestingAccountResponse): _192.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _365.MsgClientImpl;
                };
                authz: {
                    v1beta1: _366.MsgClientImpl;
                };
                bank: {
                    v1beta1: _367.MsgClientImpl;
                };
                consensus: {
                    v1: _368.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _369.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _370.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _371.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _372.MsgClientImpl;
                };
                gov: {
                    v1: _373.MsgClientImpl;
                    v1beta1: _374.MsgClientImpl;
                };
                group: {
                    v1: _375.MsgClientImpl;
                };
                mint: {
                    v1beta1: _376.MsgClientImpl;
                };
                nft: {
                    v1beta1: _377.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _378.MsgClientImpl;
                };
                staking: {
                    v1beta1: _379.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _380.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _381.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _72.QueryConfigRequest): Promise<_72.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _76.QueryAccountsRequest): Promise<_76.QueryAccountsResponse>;
                        account(request: _76.QueryAccountRequest): Promise<_76.QueryAccountResponse>;
                        accountAddressByID(request: _76.QueryAccountAddressByIDRequest): Promise<_76.QueryAccountAddressByIDResponse>;
                        params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        moduleAccounts(request?: _76.QueryModuleAccountsRequest): Promise<_76.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _76.QueryModuleAccountByNameRequest): Promise<_76.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _76.Bech32PrefixRequest): Promise<_76.Bech32PrefixResponse>;
                        addressBytesToString(request: _76.AddressBytesToStringRequest): Promise<_76.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _76.AddressStringToBytesRequest): Promise<_76.AddressStringToBytesResponse>;
                        accountInfo(request: _76.QueryAccountInfoRequest): Promise<_76.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _82.QueryGrantsRequest): Promise<_82.QueryGrantsResponse>;
                        granterGrants(request: _82.QueryGranterGrantsRequest): Promise<_82.QueryGranterGrantsResponse>;
                        granteeGrants(request: _82.QueryGranteeGrantsRequest): Promise<_82.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _85.AppOptionsRequest): Promise<_85.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _90.QueryBalanceRequest): Promise<_90.QueryBalanceResponse>;
                        allBalances(request: _90.QueryAllBalancesRequest): Promise<_90.QueryAllBalancesResponse>;
                        spendableBalances(request: _90.QuerySpendableBalancesRequest): Promise<_90.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _90.QuerySpendableBalanceByDenomRequest): Promise<_90.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _90.QueryTotalSupplyRequest): Promise<_90.QueryTotalSupplyResponse>;
                        supplyOf(request: _90.QuerySupplyOfRequest): Promise<_90.QuerySupplyOfResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                        denomMetadata(request: _90.QueryDenomMetadataRequest): Promise<_90.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _90.QueryDenomsMetadataRequest): Promise<_90.QueryDenomsMetadataResponse>;
                        denomOwners(request: _90.QueryDenomOwnersRequest): Promise<_90.QueryDenomOwnersResponse>;
                        sendEnabled(request: _90.QuerySendEnabledRequest): Promise<_90.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _94.ConfigRequest): Promise<_94.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _101.GetNodeInfoRequest): Promise<_101.GetNodeInfoResponse>;
                            getSyncing(request?: _101.GetSyncingRequest): Promise<_101.GetSyncingResponse>;
                            getLatestBlock(request?: _101.GetLatestBlockRequest): Promise<_101.GetLatestBlockResponse>;
                            getBlockByHeight(request: _101.GetBlockByHeightRequest): Promise<_101.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _101.GetLatestValidatorSetRequest): Promise<_101.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _101.GetValidatorSetByHeightRequest): Promise<_101.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _101.ABCIQueryRequest): Promise<_101.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                        validatorDistributionInfo(request: _122.QueryValidatorDistributionInfoRequest): Promise<_122.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _122.QueryValidatorOutstandingRewardsRequest): Promise<_122.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _122.QueryValidatorCommissionRequest): Promise<_122.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _122.QueryValidatorSlashesRequest): Promise<_122.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _122.QueryDelegationRewardsRequest): Promise<_122.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _122.QueryDelegationTotalRewardsRequest): Promise<_122.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _122.QueryDelegatorValidatorsRequest): Promise<_122.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _122.QueryDelegatorWithdrawAddressRequest): Promise<_122.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _122.QueryCommunityPoolRequest): Promise<_122.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _127.QueryEvidenceRequest): Promise<_127.QueryEvidenceResponse>;
                        allEvidence(request?: _127.QueryAllEvidenceRequest): Promise<_127.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _132.QueryAllowanceRequest): Promise<_132.QueryAllowanceResponse>;
                        allowances(request: _132.QueryAllowancesRequest): Promise<_132.QueryAllowancesResponse>;
                        allowancesByGranter(request: _132.QueryAllowancesByGranterRequest): Promise<_132.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _139.QueryProposalRequest): Promise<_139.QueryProposalResponse>;
                        proposals(request: _139.QueryProposalsRequest): Promise<_139.QueryProposalsResponse>;
                        vote(request: _139.QueryVoteRequest): Promise<_139.QueryVoteResponse>;
                        votes(request: _139.QueryVotesRequest): Promise<_139.QueryVotesResponse>;
                        params(request: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                        deposit(request: _139.QueryDepositRequest): Promise<_139.QueryDepositResponse>;
                        deposits(request: _139.QueryDepositsRequest): Promise<_139.QueryDepositsResponse>;
                        tallyResult(request: _139.QueryTallyResultRequest): Promise<_139.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _143.QueryProposalRequest): Promise<_143.QueryProposalResponse>;
                        proposals(request: _143.QueryProposalsRequest): Promise<_143.QueryProposalsResponse>;
                        vote(request: _143.QueryVoteRequest): Promise<_143.QueryVoteResponse>;
                        votes(request: _143.QueryVotesRequest): Promise<_143.QueryVotesResponse>;
                        params(request: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                        deposit(request: _143.QueryDepositRequest): Promise<_143.QueryDepositResponse>;
                        deposits(request: _143.QueryDepositsRequest): Promise<_143.QueryDepositsResponse>;
                        tallyResult(request: _143.QueryTallyResultRequest): Promise<_143.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _148.QueryGroupInfoRequest): Promise<_148.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _148.QueryGroupPolicyInfoRequest): Promise<_148.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _148.QueryGroupMembersRequest): Promise<_148.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _148.QueryGroupsByAdminRequest): Promise<_148.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _148.QueryGroupPoliciesByGroupRequest): Promise<_148.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _148.QueryGroupPoliciesByAdminRequest): Promise<_148.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _148.QueryProposalRequest): Promise<_148.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _148.QueryProposalsByGroupPolicyRequest): Promise<_148.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _148.QueryVoteByProposalVoterRequest): Promise<_148.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _148.QueryVotesByProposalRequest): Promise<_148.QueryVotesByProposalResponse>;
                        votesByVoter(request: _148.QueryVotesByVoterRequest): Promise<_148.QueryVotesByVoterResponse>;
                        groupsByMember(request: _148.QueryGroupsByMemberRequest): Promise<_148.QueryGroupsByMemberResponse>;
                        tallyResult(request: _148.QueryTallyResultRequest): Promise<_148.QueryTallyResultResponse>;
                        groups(request?: _148.QueryGroupsRequest): Promise<_148.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        inflation(request?: _154.QueryInflationRequest): Promise<_154.QueryInflationResponse>;
                        annualProvisions(request?: _154.QueryAnnualProvisionsRequest): Promise<_154.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _161.QueryBalanceRequest): Promise<_161.QueryBalanceResponse>;
                        owner(request: _161.QueryOwnerRequest): Promise<_161.QueryOwnerResponse>;
                        supply(request: _161.QuerySupplyRequest): Promise<_161.QuerySupplyResponse>;
                        nFTs(request: _161.QueryNFTsRequest): Promise<_161.QueryNFTsResponse>;
                        nFT(request: _161.QueryNFTRequest): Promise<_161.QueryNFTResponse>;
                        class(request: _161.QueryClassRequest): Promise<_161.QueryClassResponse>;
                        classes(request?: _161.QueryClassesRequest): Promise<_161.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _164.GetRequest): Promise<_164.GetResponse>;
                            list(request: _164.ListRequest): Promise<_164.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _169.QueryParamsRequest): Promise<_169.QueryParamsResponse>;
                        subspaces(request?: _169.QuerySubspacesRequest): Promise<_169.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _174.QueryParamsRequest): Promise<_174.QueryParamsResponse>;
                        signingInfo(request: _174.QuerySigningInfoRequest): Promise<_174.QuerySigningInfoResponse>;
                        signingInfos(request?: _174.QuerySigningInfosRequest): Promise<_174.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _180.QueryValidatorsRequest): Promise<_180.QueryValidatorsResponse>;
                        validator(request: _180.QueryValidatorRequest): Promise<_180.QueryValidatorResponse>;
                        validatorDelegations(request: _180.QueryValidatorDelegationsRequest): Promise<_180.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _180.QueryValidatorUnbondingDelegationsRequest): Promise<_180.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _180.QueryDelegationRequest): Promise<_180.QueryDelegationResponse>;
                        unbondingDelegation(request: _180.QueryUnbondingDelegationRequest): Promise<_180.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _180.QueryDelegatorDelegationsRequest): Promise<_180.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _180.QueryDelegatorUnbondingDelegationsRequest): Promise<_180.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _180.QueryRedelegationsRequest): Promise<_180.QueryRedelegationsResponse>;
                        delegatorValidators(request: _180.QueryDelegatorValidatorsRequest): Promise<_180.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _180.QueryDelegatorValidatorRequest): Promise<_180.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _180.QueryHistoricalInfoRequest): Promise<_180.QueryHistoricalInfoResponse>;
                        pool(request?: _180.QueryPoolRequest): Promise<_180.QueryPoolResponse>;
                        params(request?: _180.QueryParamsRequest): Promise<_180.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _185.SimulateRequest): Promise<_185.SimulateResponse>;
                        getTx(request: _185.GetTxRequest): Promise<_185.GetTxResponse>;
                        broadcastTx(request: _185.BroadcastTxRequest): Promise<_185.BroadcastTxResponse>;
                        getTxsEvent(request: _185.GetTxsEventRequest): Promise<_185.GetTxsEventResponse>;
                        getBlockWithTxs(request: _185.GetBlockWithTxsRequest): Promise<_185.GetBlockWithTxsResponse>;
                        txDecode(request: _185.TxDecodeRequest): Promise<_185.TxDecodeResponse>;
                        txEncode(request: _185.TxEncodeRequest): Promise<_185.TxEncodeResponse>;
                        txEncodeAmino(request: _185.TxEncodeAminoRequest): Promise<_185.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _185.TxDecodeAminoRequest): Promise<_185.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _188.QueryCurrentPlanRequest): Promise<_188.QueryCurrentPlanResponse>;
                        appliedPlan(request: _188.QueryAppliedPlanRequest): Promise<_188.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _188.QueryUpgradedConsensusStateRequest): Promise<_188.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _188.QueryModuleVersionsRequest): Promise<_188.QueryModuleVersionsResponse>;
                        authority(request?: _188.QueryAuthorityRequest): Promise<_188.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _324.LCDQueryClient;
                };
                authz: {
                    v1beta1: _325.LCDQueryClient;
                };
                bank: {
                    v1beta1: _326.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _327.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _328.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _329.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _330.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _331.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _332.LCDQueryClient;
                };
                gov: {
                    v1: _333.LCDQueryClient;
                    v1beta1: _334.LCDQueryClient;
                };
                group: {
                    v1: _335.LCDQueryClient;
                };
                mint: {
                    v1beta1: _336.LCDQueryClient;
                };
                nft: {
                    v1beta1: _337.LCDQueryClient;
                };
                params: {
                    v1beta1: _338.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _339.LCDQueryClient;
                };
                staking: {
                    v1beta1: _340.LCDQueryClient;
                };
                tx: {
                    v1beta1: _341.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _342.LCDQueryClient;
                };
            };
        }>;
    };
}
