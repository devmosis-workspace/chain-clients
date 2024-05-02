import * as _5 from "./app/runtime/v1alpha1/module";
import * as _6 from "./app/v1alpha1/config";
import * as _7 from "./app/v1alpha1/module";
import * as _8 from "./app/v1alpha1/query";
import * as _9 from "./auth/module/v1/module";
import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./auth/v1beta1/tx";
import * as _14 from "./authz/module/v1/module";
import * as _15 from "./authz/v1beta1/authz";
import * as _16 from "./authz/v1beta1/event";
import * as _17 from "./authz/v1beta1/genesis";
import * as _18 from "./authz/v1beta1/query";
import * as _19 from "./authz/v1beta1/tx";
import * as _20 from "./autocli/v1/options";
import * as _21 from "./autocli/v1/query";
import * as _22 from "./bank/module/v1/module";
import * as _23 from "./bank/v1beta1/authz";
import * as _24 from "./bank/v1beta1/bank";
import * as _25 from "./bank/v1beta1/genesis";
import * as _26 from "./bank/v1beta1/query";
import * as _27 from "./bank/v1beta1/tx";
import * as _28 from "./base/abci/v1beta1/abci";
import * as _29 from "./base/kv/v1beta1/kv";
import * as _30 from "./base/node/v1beta1/query";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/snapshots/v1beta1/snapshot";
import * as _35 from "./base/store/v1beta1/commit_info";
import * as _36 from "./base/store/v1beta1/listening";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/tendermint/v1beta1/types";
import * as _39 from "./base/v1beta1/coin";
import * as _40 from "./capability/module/v1/module";
import * as _41 from "./capability/v1beta1/capability";
import * as _42 from "./capability/v1beta1/genesis";
import * as _43 from "./consensus/module/v1/module";
import * as _44 from "./consensus/v1/query";
import * as _45 from "./consensus/v1/tx";
import * as _46 from "./crisis/module/v1/module";
import * as _47 from "./crisis/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/tx";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/hd/v1/hd";
import * as _51 from "./crypto/keyring/v1/record";
import * as _52 from "./crypto/multisig/keys";
import * as _53 from "./crypto/secp256k1/keys";
import * as _54 from "./crypto/secp256r1/keys";
import * as _55 from "./distribution/module/v1/module";
import * as _56 from "./distribution/v1beta1/distribution";
import * as _57 from "./distribution/v1beta1/genesis";
import * as _58 from "./distribution/v1beta1/query";
import * as _59 from "./distribution/v1beta1/tx";
import * as _60 from "./evidence/module/v1/module";
import * as _61 from "./evidence/v1beta1/evidence";
import * as _62 from "./evidence/v1beta1/genesis";
import * as _63 from "./evidence/v1beta1/query";
import * as _64 from "./evidence/v1beta1/tx";
import * as _65 from "./feegrant/module/v1/module";
import * as _66 from "./feegrant/v1beta1/feegrant";
import * as _67 from "./feegrant/v1beta1/genesis";
import * as _68 from "./feegrant/v1beta1/query";
import * as _69 from "./feegrant/v1beta1/tx";
import * as _70 from "./genutil/module/v1/module";
import * as _71 from "./genutil/v1beta1/genesis";
import * as _72 from "./gov/module/v1/module";
import * as _73 from "./gov/v1/genesis";
import * as _74 from "./gov/v1/gov";
import * as _75 from "./gov/v1/query";
import * as _76 from "./gov/v1/tx";
import * as _77 from "./gov/v1beta1/genesis";
import * as _78 from "./gov/v1beta1/gov";
import * as _79 from "./gov/v1beta1/query";
import * as _80 from "./gov/v1beta1/tx";
import * as _81 from "./group/module/v1/module";
import * as _82 from "./group/v1/events";
import * as _83 from "./group/v1/genesis";
import * as _84 from "./group/v1/query";
import * as _85 from "./group/v1/tx";
import * as _86 from "./group/v1/types";
import * as _87 from "./mint/module/v1/module";
import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _91 from "./mint/v1beta1/tx";
import * as _93 from "./nft/module/v1/module";
import * as _94 from "./nft/v1beta1/event";
import * as _95 from "./nft/v1beta1/genesis";
import * as _96 from "./nft/v1beta1/nft";
import * as _97 from "./nft/v1beta1/query";
import * as _98 from "./nft/v1beta1/tx";
import * as _99 from "./orm/module/v1alpha1/module";
import * as _100 from "./orm/query/v1alpha1/query";
import * as _101 from "./orm/v1/orm";
import * as _102 from "./orm/v1alpha1/schema";
import * as _103 from "./params/module/v1/module";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _107 from "./reflection/v1/reflection";
import * as _108 from "./slashing/module/v1/module";
import * as _109 from "./slashing/v1beta1/genesis";
import * as _110 from "./slashing/v1beta1/query";
import * as _111 from "./slashing/v1beta1/slashing";
import * as _112 from "./slashing/v1beta1/tx";
import * as _113 from "./staking/module/v1/module";
import * as _114 from "./staking/v1beta1/authz";
import * as _115 from "./staking/v1beta1/genesis";
import * as _116 from "./staking/v1beta1/query";
import * as _117 from "./staking/v1beta1/staking";
import * as _118 from "./staking/v1beta1/tx";
import * as _119 from "./tx/config/v1/config";
import * as _120 from "./tx/signing/v1beta1/signing";
import * as _121 from "./tx/v1beta1/service";
import * as _122 from "./tx/v1beta1/tx";
import * as _123 from "./upgrade/module/v1/module";
import * as _124 from "./upgrade/v1beta1/query";
import * as _125 from "./upgrade/v1beta1/tx";
import * as _126 from "./upgrade/v1beta1/upgrade";
import * as _127 from "./vesting/module/v1/module";
import * as _128 from "./vesting/v1beta1/tx";
import * as _129 from "./vesting/v1beta1/vesting";
import * as _186 from "./auth/v1beta1/query.lcd";
import * as _187 from "./authz/v1beta1/query.lcd";
import * as _188 from "./bank/v1beta1/query.lcd";
import * as _189 from "./base/node/v1beta1/query.lcd";
import * as _190 from "./base/tendermint/v1beta1/query.lcd";
import * as _191 from "./consensus/v1/query.lcd";
import * as _192 from "./distribution/v1beta1/query.lcd";
import * as _193 from "./evidence/v1beta1/query.lcd";
import * as _194 from "./feegrant/v1beta1/query.lcd";
import * as _195 from "./gov/v1/query.lcd";
import * as _196 from "./gov/v1beta1/query.lcd";
import * as _197 from "./group/v1/query.lcd";
import * as _198 from "./mint/v1beta1/query.lcd";
import * as _199 from "./nft/v1beta1/query.lcd";
import * as _200 from "./params/v1beta1/query.lcd";
import * as _201 from "./slashing/v1beta1/query.lcd";
import * as _202 from "./staking/v1beta1/query.lcd";
import * as _203 from "./tx/v1beta1/service.lcd";
import * as _204 from "./upgrade/v1beta1/query.lcd";
import * as _205 from "./app/v1alpha1/query.rpc.Query";
import * as _206 from "./auth/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/query.rpc.Query";
import * as _208 from "./autocli/v1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _212 from "./consensus/v1/query.rpc.Query";
import * as _213 from "./distribution/v1beta1/query.rpc.Query";
import * as _214 from "./evidence/v1beta1/query.rpc.Query";
import * as _215 from "./feegrant/v1beta1/query.rpc.Query";
import * as _216 from "./gov/v1/query.rpc.Query";
import * as _217 from "./gov/v1beta1/query.rpc.Query";
import * as _218 from "./group/v1/query.rpc.Query";
import * as _219 from "./mint/v1beta1/query.rpc.Query";
import * as _220 from "./nft/v1beta1/query.rpc.Query";
import * as _221 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _222 from "./params/v1beta1/query.rpc.Query";
import * as _223 from "./slashing/v1beta1/query.rpc.Query";
import * as _224 from "./staking/v1beta1/query.rpc.Query";
import * as _225 from "./tx/v1beta1/service.rpc.Service";
import * as _226 from "./upgrade/v1beta1/query.rpc.Query";
import * as _227 from "./auth/v1beta1/tx.rpc.msg";
import * as _228 from "./authz/v1beta1/tx.rpc.msg";
import * as _229 from "./bank/v1beta1/tx.rpc.msg";
import * as _230 from "./consensus/v1/tx.rpc.msg";
import * as _231 from "./crisis/v1beta1/tx.rpc.msg";
import * as _232 from "./distribution/v1beta1/tx.rpc.msg";
import * as _233 from "./evidence/v1beta1/tx.rpc.msg";
import * as _234 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _235 from "./gov/v1/tx.rpc.msg";
import * as _236 from "./gov/v1beta1/tx.rpc.msg";
import * as _237 from "./group/v1/tx.rpc.msg";
import * as _238 from "./mint/v1beta1/tx.rpc.msg";
import * as _239 from "./nft/v1beta1/tx.rpc.msg";
import * as _240 from "./slashing/v1beta1/tx.rpc.msg";
import * as _241 from "./staking/v1beta1/tx.rpc.msg";
import * as _242 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _243 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _5.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.Module;
                    fromPartial(object: Partial<_5.Module>): _5.Module;
                    fromAmino(object: _5.ModuleAmino): _5.Module;
                    toAmino(message: _5.Module): _5.ModuleAmino;
                    fromAminoMsg(object: _5.ModuleAminoMsg): _5.Module;
                    toAminoMsg(message: _5.Module): _5.ModuleAminoMsg;
                    fromProtoMsg(message: _5.ModuleProtoMsg): _5.Module;
                    toProto(message: _5.Module): Uint8Array;
                    toProtoMsg(message: _5.Module): _5.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _5.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.StoreKeyConfig;
                    fromPartial(object: Partial<_5.StoreKeyConfig>): _5.StoreKeyConfig;
                    fromAmino(object: _5.StoreKeyConfigAmino): _5.StoreKeyConfig;
                    toAmino(message: _5.StoreKeyConfig): _5.StoreKeyConfigAmino;
                    fromAminoMsg(object: _5.StoreKeyConfigAminoMsg): _5.StoreKeyConfig;
                    toAminoMsg(message: _5.StoreKeyConfig): _5.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _5.StoreKeyConfigProtoMsg): _5.StoreKeyConfig;
                    toProto(message: _5.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _5.StoreKeyConfig): _5.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                config(request?: _8.QueryConfigRequest): Promise<_8.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _8.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryConfigRequest;
                fromPartial(_: Partial<_8.QueryConfigRequest>): _8.QueryConfigRequest;
                fromAmino(_: _8.QueryConfigRequestAmino): _8.QueryConfigRequest;
                toAmino(_: _8.QueryConfigRequest): _8.QueryConfigRequestAmino;
                fromAminoMsg(object: _8.QueryConfigRequestAminoMsg): _8.QueryConfigRequest;
                toAminoMsg(message: _8.QueryConfigRequest): _8.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _8.QueryConfigRequestProtoMsg): _8.QueryConfigRequest;
                toProto(message: _8.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _8.QueryConfigRequest): _8.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _8.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryConfigResponse;
                fromPartial(object: Partial<_8.QueryConfigResponse>): _8.QueryConfigResponse;
                fromAmino(object: _8.QueryConfigResponseAmino): _8.QueryConfigResponse;
                toAmino(message: _8.QueryConfigResponse): _8.QueryConfigResponseAmino;
                fromAminoMsg(object: _8.QueryConfigResponseAminoMsg): _8.QueryConfigResponse;
                toAminoMsg(message: _8.QueryConfigResponse): _8.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _8.QueryConfigResponseProtoMsg): _8.QueryConfigResponse;
                toProto(message: _8.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _8.QueryConfigResponse): _8.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _7.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ModuleDescriptor;
                fromPartial(object: Partial<_7.ModuleDescriptor>): _7.ModuleDescriptor;
                fromAmino(object: _7.ModuleDescriptorAmino): _7.ModuleDescriptor;
                toAmino(message: _7.ModuleDescriptor): _7.ModuleDescriptorAmino;
                fromAminoMsg(object: _7.ModuleDescriptorAminoMsg): _7.ModuleDescriptor;
                toAminoMsg(message: _7.ModuleDescriptor): _7.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _7.ModuleDescriptorProtoMsg): _7.ModuleDescriptor;
                toProto(message: _7.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _7.ModuleDescriptor): _7.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _7.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PackageReference;
                fromPartial(object: Partial<_7.PackageReference>): _7.PackageReference;
                fromAmino(object: _7.PackageReferenceAmino): _7.PackageReference;
                toAmino(message: _7.PackageReference): _7.PackageReferenceAmino;
                fromAminoMsg(object: _7.PackageReferenceAminoMsg): _7.PackageReference;
                toAminoMsg(message: _7.PackageReference): _7.PackageReferenceAminoMsg;
                fromProtoMsg(message: _7.PackageReferenceProtoMsg): _7.PackageReference;
                toProto(message: _7.PackageReference): Uint8Array;
                toProtoMsg(message: _7.PackageReference): _7.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _7.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MigrateFromInfo;
                fromPartial(object: Partial<_7.MigrateFromInfo>): _7.MigrateFromInfo;
                fromAmino(object: _7.MigrateFromInfoAmino): _7.MigrateFromInfo;
                toAmino(message: _7.MigrateFromInfo): _7.MigrateFromInfoAmino;
                fromAminoMsg(object: _7.MigrateFromInfoAminoMsg): _7.MigrateFromInfo;
                toAminoMsg(message: _7.MigrateFromInfo): _7.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _7.MigrateFromInfoProtoMsg): _7.MigrateFromInfo;
                toProto(message: _7.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _7.MigrateFromInfo): _7.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _6.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Config;
                fromPartial(object: Partial<_6.Config>): _6.Config;
                fromAmino(object: _6.ConfigAmino): _6.Config;
                toAmino(message: _6.Config): _6.ConfigAmino;
                fromAminoMsg(object: _6.ConfigAminoMsg): _6.Config;
                toAminoMsg(message: _6.Config): _6.ConfigAminoMsg;
                fromProtoMsg(message: _6.ConfigProtoMsg): _6.Config;
                toProto(message: _6.Config): Uint8Array;
                toProtoMsg(message: _6.Config): _6.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _6.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ModuleConfig;
                fromPartial(object: Partial<_6.ModuleConfig>): _6.ModuleConfig;
                fromAmino(object: _6.ModuleConfigAmino): _6.ModuleConfig;
                toAmino(message: _6.ModuleConfig): _6.ModuleConfigAmino;
                fromAminoMsg(object: _6.ModuleConfigAminoMsg): _6.ModuleConfig;
                toAminoMsg(message: _6.ModuleConfig): _6.ModuleConfigAminoMsg;
                fromProtoMsg(message: _6.ModuleConfigProtoMsg): _6.ModuleConfig;
                toProto(message: _6.ModuleConfig): Uint8Array;
                toProtoMsg(message: _6.ModuleConfig): _6.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _6.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.GolangBinding;
                fromPartial(object: Partial<_6.GolangBinding>): _6.GolangBinding;
                fromAmino(object: _6.GolangBindingAmino): _6.GolangBinding;
                toAmino(message: _6.GolangBinding): _6.GolangBindingAmino;
                fromAminoMsg(object: _6.GolangBindingAminoMsg): _6.GolangBinding;
                toAminoMsg(message: _6.GolangBinding): _6.GolangBindingAminoMsg;
                fromProtoMsg(message: _6.GolangBindingProtoMsg): _6.GolangBinding;
                toProto(message: _6.GolangBinding): Uint8Array;
                toProtoMsg(message: _6.GolangBinding): _6.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _9.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.Module;
                    fromPartial(object: Partial<_9.Module>): _9.Module;
                    fromAmino(object: _9.ModuleAmino): _9.Module;
                    toAmino(message: _9.Module): _9.ModuleAmino;
                    fromAminoMsg(object: _9.ModuleAminoMsg): _9.Module;
                    toAminoMsg(message: _9.Module): _9.ModuleAminoMsg;
                    fromProtoMsg(message: _9.ModuleProtoMsg): _9.Module;
                    toProto(message: _9.Module): Uint8Array;
                    toProtoMsg(message: _9.Module): _9.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _9.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.ModuleAccountPermission;
                    fromPartial(object: Partial<_9.ModuleAccountPermission>): _9.ModuleAccountPermission;
                    fromAmino(object: _9.ModuleAccountPermissionAmino): _9.ModuleAccountPermission;
                    toAmino(message: _9.ModuleAccountPermission): _9.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _9.ModuleAccountPermissionAminoMsg): _9.ModuleAccountPermission;
                    toAminoMsg(message: _9.ModuleAccountPermission): _9.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _9.ModuleAccountPermissionProtoMsg): _9.ModuleAccountPermission;
                    toProto(message: _9.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _9.ModuleAccountPermission): _9.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _12.QueryAccountsRequest): Promise<_12.QueryAccountsResponse>;
                account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                accountAddressByID(request: _12.QueryAccountAddressByIDRequest): Promise<_12.QueryAccountAddressByIDResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                moduleAccounts(request?: _12.QueryModuleAccountsRequest): Promise<_12.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _12.QueryModuleAccountByNameRequest): Promise<_12.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _12.Bech32PrefixRequest): Promise<_12.Bech32PrefixResponse>;
                addressBytesToString(request: _12.AddressBytesToStringRequest): Promise<_12.AddressBytesToStringResponse>;
                addressStringToBytes(request: _12.AddressStringToBytesRequest): Promise<_12.AddressStringToBytesResponse>;
                accountInfo(request: _12.QueryAccountInfoRequest): Promise<_12.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _13.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _13.MsgUpdateParams): {
                        typeUrl: string;
                        value: _13.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _13.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _13.MsgUpdateParams): {
                        typeUrl: string;
                        value: _13.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _13.MsgUpdateParams) => _13.MsgUpdateParamsAmino;
                    fromAmino: (object: _13.MsgUpdateParamsAmino) => _13.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _13.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgUpdateParams;
                fromPartial(object: Partial<_13.MsgUpdateParams>): _13.MsgUpdateParams;
                fromAmino(object: _13.MsgUpdateParamsAmino): _13.MsgUpdateParams;
                toAmino(message: _13.MsgUpdateParams): _13.MsgUpdateParamsAmino;
                fromAminoMsg(object: _13.MsgUpdateParamsAminoMsg): _13.MsgUpdateParams;
                toAminoMsg(message: _13.MsgUpdateParams): _13.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _13.MsgUpdateParamsProtoMsg): _13.MsgUpdateParams;
                toProto(message: _13.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _13.MsgUpdateParams): _13.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _13.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_13.MsgUpdateParamsResponse>): _13.MsgUpdateParamsResponse;
                fromAmino(_: _13.MsgUpdateParamsResponseAmino): _13.MsgUpdateParamsResponse;
                toAmino(_: _13.MsgUpdateParamsResponse): _13.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _13.MsgUpdateParamsResponseAminoMsg): _13.MsgUpdateParamsResponse;
                toAminoMsg(message: _13.MsgUpdateParamsResponse): _13.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _13.MsgUpdateParamsResponseProtoMsg): _13.MsgUpdateParamsResponse;
                toProto(message: _13.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _13.MsgUpdateParamsResponse): _13.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _12.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountsRequest;
                fromPartial(object: Partial<_12.QueryAccountsRequest>): _12.QueryAccountsRequest;
                fromAmino(object: _12.QueryAccountsRequestAmino): _12.QueryAccountsRequest;
                toAmino(message: _12.QueryAccountsRequest): _12.QueryAccountsRequestAmino;
                fromAminoMsg(object: _12.QueryAccountsRequestAminoMsg): _12.QueryAccountsRequest;
                toAminoMsg(message: _12.QueryAccountsRequest): _12.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAccountsRequestProtoMsg): _12.QueryAccountsRequest;
                toProto(message: _12.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAccountsRequest): _12.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _12.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountsResponse;
                fromPartial(object: Partial<_12.QueryAccountsResponse>): _12.QueryAccountsResponse;
                fromAmino(object: _12.QueryAccountsResponseAmino): _12.QueryAccountsResponse;
                toAmino(message: _12.QueryAccountsResponse): _12.QueryAccountsResponseAmino;
                fromAminoMsg(object: _12.QueryAccountsResponseAminoMsg): _12.QueryAccountsResponse;
                toAminoMsg(message: _12.QueryAccountsResponse): _12.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAccountsResponseProtoMsg): _12.QueryAccountsResponse;
                toProto(message: _12.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAccountsResponse): _12.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _12.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountRequest;
                fromPartial(object: Partial<_12.QueryAccountRequest>): _12.QueryAccountRequest;
                fromAmino(object: _12.QueryAccountRequestAmino): _12.QueryAccountRequest;
                toAmino(message: _12.QueryAccountRequest): _12.QueryAccountRequestAmino;
                fromAminoMsg(object: _12.QueryAccountRequestAminoMsg): _12.QueryAccountRequest;
                toAminoMsg(message: _12.QueryAccountRequest): _12.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAccountRequestProtoMsg): _12.QueryAccountRequest;
                toProto(message: _12.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAccountRequest): _12.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _12.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountResponse;
                fromPartial(object: Partial<_12.QueryAccountResponse>): _12.QueryAccountResponse;
                fromAmino(object: _12.QueryAccountResponseAmino): _12.QueryAccountResponse;
                toAmino(message: _12.QueryAccountResponse): _12.QueryAccountResponseAmino;
                fromAminoMsg(object: _12.QueryAccountResponseAminoMsg): _12.QueryAccountResponse;
                toAminoMsg(message: _12.QueryAccountResponse): _12.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAccountResponseProtoMsg): _12.QueryAccountResponse;
                toProto(message: _12.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAccountResponse): _12.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _12.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
                fromAmino(_: _12.QueryParamsRequestAmino): _12.QueryParamsRequest;
                toAmino(_: _12.QueryParamsRequest): _12.QueryParamsRequestAmino;
                fromAminoMsg(object: _12.QueryParamsRequestAminoMsg): _12.QueryParamsRequest;
                toAminoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryParamsRequestProtoMsg): _12.QueryParamsRequest;
                toProto(message: _12.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _12.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
                fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
                toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
                fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
                toAminoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
                toProto(message: _12.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _12.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_12.QueryModuleAccountsRequest>): _12.QueryModuleAccountsRequest;
                fromAmino(_: _12.QueryModuleAccountsRequestAmino): _12.QueryModuleAccountsRequest;
                toAmino(_: _12.QueryModuleAccountsRequest): _12.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _12.QueryModuleAccountsRequestAminoMsg): _12.QueryModuleAccountsRequest;
                toAminoMsg(message: _12.QueryModuleAccountsRequest): _12.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryModuleAccountsRequestProtoMsg): _12.QueryModuleAccountsRequest;
                toProto(message: _12.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryModuleAccountsRequest): _12.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _12.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_12.QueryModuleAccountsResponse>): _12.QueryModuleAccountsResponse;
                fromAmino(object: _12.QueryModuleAccountsResponseAmino): _12.QueryModuleAccountsResponse;
                toAmino(message: _12.QueryModuleAccountsResponse): _12.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _12.QueryModuleAccountsResponseAminoMsg): _12.QueryModuleAccountsResponse;
                toAminoMsg(message: _12.QueryModuleAccountsResponse): _12.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryModuleAccountsResponseProtoMsg): _12.QueryModuleAccountsResponse;
                toProto(message: _12.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryModuleAccountsResponse): _12.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _12.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_12.QueryModuleAccountByNameRequest>): _12.QueryModuleAccountByNameRequest;
                fromAmino(object: _12.QueryModuleAccountByNameRequestAmino): _12.QueryModuleAccountByNameRequest;
                toAmino(message: _12.QueryModuleAccountByNameRequest): _12.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _12.QueryModuleAccountByNameRequestAminoMsg): _12.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _12.QueryModuleAccountByNameRequest): _12.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _12.QueryModuleAccountByNameRequestProtoMsg): _12.QueryModuleAccountByNameRequest;
                toProto(message: _12.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _12.QueryModuleAccountByNameRequest): _12.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _12.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_12.QueryModuleAccountByNameResponse>): _12.QueryModuleAccountByNameResponse;
                fromAmino(object: _12.QueryModuleAccountByNameResponseAmino): _12.QueryModuleAccountByNameResponse;
                toAmino(message: _12.QueryModuleAccountByNameResponse): _12.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _12.QueryModuleAccountByNameResponseAminoMsg): _12.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _12.QueryModuleAccountByNameResponse): _12.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _12.QueryModuleAccountByNameResponseProtoMsg): _12.QueryModuleAccountByNameResponse;
                toProto(message: _12.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _12.QueryModuleAccountByNameResponse): _12.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _12.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.Bech32PrefixRequest;
                fromPartial(_: Partial<_12.Bech32PrefixRequest>): _12.Bech32PrefixRequest;
                fromAmino(_: _12.Bech32PrefixRequestAmino): _12.Bech32PrefixRequest;
                toAmino(_: _12.Bech32PrefixRequest): _12.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _12.Bech32PrefixRequestAminoMsg): _12.Bech32PrefixRequest;
                toAminoMsg(message: _12.Bech32PrefixRequest): _12.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _12.Bech32PrefixRequestProtoMsg): _12.Bech32PrefixRequest;
                toProto(message: _12.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _12.Bech32PrefixRequest): _12.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _12.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Bech32PrefixResponse;
                fromPartial(object: Partial<_12.Bech32PrefixResponse>): _12.Bech32PrefixResponse;
                fromAmino(object: _12.Bech32PrefixResponseAmino): _12.Bech32PrefixResponse;
                toAmino(message: _12.Bech32PrefixResponse): _12.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _12.Bech32PrefixResponseAminoMsg): _12.Bech32PrefixResponse;
                toAminoMsg(message: _12.Bech32PrefixResponse): _12.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _12.Bech32PrefixResponseProtoMsg): _12.Bech32PrefixResponse;
                toProto(message: _12.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _12.Bech32PrefixResponse): _12.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _12.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.AddressBytesToStringRequest;
                fromPartial(object: Partial<_12.AddressBytesToStringRequest>): _12.AddressBytesToStringRequest;
                fromAmino(object: _12.AddressBytesToStringRequestAmino): _12.AddressBytesToStringRequest;
                toAmino(message: _12.AddressBytesToStringRequest): _12.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _12.AddressBytesToStringRequestAminoMsg): _12.AddressBytesToStringRequest;
                toAminoMsg(message: _12.AddressBytesToStringRequest): _12.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _12.AddressBytesToStringRequestProtoMsg): _12.AddressBytesToStringRequest;
                toProto(message: _12.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _12.AddressBytesToStringRequest): _12.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _12.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.AddressBytesToStringResponse;
                fromPartial(object: Partial<_12.AddressBytesToStringResponse>): _12.AddressBytesToStringResponse;
                fromAmino(object: _12.AddressBytesToStringResponseAmino): _12.AddressBytesToStringResponse;
                toAmino(message: _12.AddressBytesToStringResponse): _12.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _12.AddressBytesToStringResponseAminoMsg): _12.AddressBytesToStringResponse;
                toAminoMsg(message: _12.AddressBytesToStringResponse): _12.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _12.AddressBytesToStringResponseProtoMsg): _12.AddressBytesToStringResponse;
                toProto(message: _12.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _12.AddressBytesToStringResponse): _12.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _12.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.AddressStringToBytesRequest;
                fromPartial(object: Partial<_12.AddressStringToBytesRequest>): _12.AddressStringToBytesRequest;
                fromAmino(object: _12.AddressStringToBytesRequestAmino): _12.AddressStringToBytesRequest;
                toAmino(message: _12.AddressStringToBytesRequest): _12.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _12.AddressStringToBytesRequestAminoMsg): _12.AddressStringToBytesRequest;
                toAminoMsg(message: _12.AddressStringToBytesRequest): _12.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _12.AddressStringToBytesRequestProtoMsg): _12.AddressStringToBytesRequest;
                toProto(message: _12.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _12.AddressStringToBytesRequest): _12.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _12.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.AddressStringToBytesResponse;
                fromPartial(object: Partial<_12.AddressStringToBytesResponse>): _12.AddressStringToBytesResponse;
                fromAmino(object: _12.AddressStringToBytesResponseAmino): _12.AddressStringToBytesResponse;
                toAmino(message: _12.AddressStringToBytesResponse): _12.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _12.AddressStringToBytesResponseAminoMsg): _12.AddressStringToBytesResponse;
                toAminoMsg(message: _12.AddressStringToBytesResponse): _12.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _12.AddressStringToBytesResponseProtoMsg): _12.AddressStringToBytesResponse;
                toProto(message: _12.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _12.AddressStringToBytesResponse): _12.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _12.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_12.QueryAccountAddressByIDRequest>): _12.QueryAccountAddressByIDRequest;
                fromAmino(object: _12.QueryAccountAddressByIDRequestAmino): _12.QueryAccountAddressByIDRequest;
                toAmino(message: _12.QueryAccountAddressByIDRequest): _12.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _12.QueryAccountAddressByIDRequestAminoMsg): _12.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _12.QueryAccountAddressByIDRequest): _12.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAccountAddressByIDRequestProtoMsg): _12.QueryAccountAddressByIDRequest;
                toProto(message: _12.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAccountAddressByIDRequest): _12.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _12.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_12.QueryAccountAddressByIDResponse>): _12.QueryAccountAddressByIDResponse;
                fromAmino(object: _12.QueryAccountAddressByIDResponseAmino): _12.QueryAccountAddressByIDResponse;
                toAmino(message: _12.QueryAccountAddressByIDResponse): _12.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _12.QueryAccountAddressByIDResponseAminoMsg): _12.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _12.QueryAccountAddressByIDResponse): _12.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAccountAddressByIDResponseProtoMsg): _12.QueryAccountAddressByIDResponse;
                toProto(message: _12.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAccountAddressByIDResponse): _12.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _12.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountInfoRequest;
                fromPartial(object: Partial<_12.QueryAccountInfoRequest>): _12.QueryAccountInfoRequest;
                fromAmino(object: _12.QueryAccountInfoRequestAmino): _12.QueryAccountInfoRequest;
                toAmino(message: _12.QueryAccountInfoRequest): _12.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _12.QueryAccountInfoRequestAminoMsg): _12.QueryAccountInfoRequest;
                toAminoMsg(message: _12.QueryAccountInfoRequest): _12.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAccountInfoRequestProtoMsg): _12.QueryAccountInfoRequest;
                toProto(message: _12.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAccountInfoRequest): _12.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _12.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAccountInfoResponse;
                fromPartial(object: Partial<_12.QueryAccountInfoResponse>): _12.QueryAccountInfoResponse;
                fromAmino(object: _12.QueryAccountInfoResponseAmino): _12.QueryAccountInfoResponse;
                toAmino(message: _12.QueryAccountInfoResponse): _12.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _12.QueryAccountInfoResponseAminoMsg): _12.QueryAccountInfoResponse;
                toAminoMsg(message: _12.QueryAccountInfoResponse): _12.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAccountInfoResponseProtoMsg): _12.QueryAccountInfoResponse;
                toProto(message: _12.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAccountInfoResponse): _12.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _10.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _10.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                toAminoMsg(message: _11.GenesisState): _11.GenesisStateAminoMsg;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _10.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BaseAccount;
                fromPartial(object: Partial<_10.BaseAccount>): _10.BaseAccount;
                fromAmino(object: _10.BaseAccountAmino): _10.BaseAccount;
                toAmino(message: _10.BaseAccount): _10.BaseAccountAmino;
                fromAminoMsg(object: _10.BaseAccountAminoMsg): _10.BaseAccount;
                toAminoMsg(message: _10.BaseAccount): _10.BaseAccountAminoMsg;
                fromProtoMsg(message: _10.BaseAccountProtoMsg): _10.BaseAccount;
                toProto(message: _10.BaseAccount): Uint8Array;
                toProtoMsg(message: _10.BaseAccount): _10.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _10.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ModuleAccount;
                fromPartial(object: Partial<_10.ModuleAccount>): _10.ModuleAccount;
                fromAmino(object: _10.ModuleAccountAmino): _10.ModuleAccount;
                toAmino(message: _10.ModuleAccount): _10.ModuleAccountAmino;
                fromAminoMsg(object: _10.ModuleAccountAminoMsg): _10.ModuleAccount;
                toAminoMsg(message: _10.ModuleAccount): _10.ModuleAccountAminoMsg;
                fromProtoMsg(message: _10.ModuleAccountProtoMsg): _10.ModuleAccount;
                toProto(message: _10.ModuleAccount): Uint8Array;
                toProtoMsg(message: _10.ModuleAccount): _10.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _10.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ModuleCredential;
                fromPartial(object: Partial<_10.ModuleCredential>): _10.ModuleCredential;
                fromAmino(object: _10.ModuleCredentialAmino): _10.ModuleCredential;
                toAmino(message: _10.ModuleCredential): _10.ModuleCredentialAmino;
                fromAminoMsg(object: _10.ModuleCredentialAminoMsg): _10.ModuleCredential;
                toAminoMsg(message: _10.ModuleCredential): _10.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _10.ModuleCredentialProtoMsg): _10.ModuleCredential;
                toProto(message: _10.ModuleCredential): Uint8Array;
                toProtoMsg(message: _10.ModuleCredential): _10.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
                fromAmino(object: _10.ParamsAmino): _10.Params;
                toAmino(message: _10.Params): _10.ParamsAmino;
                fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
                toAminoMsg(message: _10.Params): _10.ParamsAminoMsg;
                fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
                toProto(message: _10.Params): Uint8Array;
                toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _14.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _14.Module;
                    fromPartial(_: Partial<_14.Module>): _14.Module;
                    fromAmino(_: _14.ModuleAmino): _14.Module;
                    toAmino(_: _14.Module): _14.ModuleAmino;
                    fromAminoMsg(object: _14.ModuleAminoMsg): _14.Module;
                    toAminoMsg(message: _14.Module): _14.ModuleAminoMsg;
                    fromProtoMsg(message: _14.ModuleProtoMsg): _14.Module;
                    toProto(message: _14.Module): Uint8Array;
                    toProtoMsg(message: _14.Module): _14.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _18.QueryGrantsRequest): Promise<_18.QueryGrantsResponse>;
                granterGrants(request: _18.QueryGranterGrantsRequest): Promise<_18.QueryGranterGrantsResponse>;
                granteeGrants(request: _18.QueryGranteeGrantsRequest): Promise<_18.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _19.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _19.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _19.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _19.MsgGrant): {
                        typeUrl: string;
                        value: _19.MsgGrant;
                    };
                    exec(value: _19.MsgExec): {
                        typeUrl: string;
                        value: _19.MsgExec;
                    };
                    revoke(value: _19.MsgRevoke): {
                        typeUrl: string;
                        value: _19.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _19.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _19.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _19.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _19.MsgGrant): {
                        typeUrl: string;
                        value: _19.MsgGrant;
                    };
                    exec(value: _19.MsgExec): {
                        typeUrl: string;
                        value: _19.MsgExec;
                    };
                    revoke(value: _19.MsgRevoke): {
                        typeUrl: string;
                        value: _19.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _19.MsgGrant) => _19.MsgGrantAmino;
                    fromAmino: (object: _19.MsgGrantAmino) => _19.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _19.MsgExec) => _19.MsgExecAmino;
                    fromAmino: (object: _19.MsgExecAmino) => _19.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _19.MsgRevoke) => _19.MsgRevokeAmino;
                    fromAmino: (object: _19.MsgRevokeAmino) => _19.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _19.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgGrant;
                fromPartial(object: Partial<_19.MsgGrant>): _19.MsgGrant;
                fromAmino(object: _19.MsgGrantAmino): _19.MsgGrant;
                toAmino(message: _19.MsgGrant): _19.MsgGrantAmino;
                fromAminoMsg(object: _19.MsgGrantAminoMsg): _19.MsgGrant;
                toAminoMsg(message: _19.MsgGrant): _19.MsgGrantAminoMsg;
                fromProtoMsg(message: _19.MsgGrantProtoMsg): _19.MsgGrant;
                toProto(message: _19.MsgGrant): Uint8Array;
                toProtoMsg(message: _19.MsgGrant): _19.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _19.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgExecResponse;
                fromPartial(object: Partial<_19.MsgExecResponse>): _19.MsgExecResponse;
                fromAmino(object: _19.MsgExecResponseAmino): _19.MsgExecResponse;
                toAmino(message: _19.MsgExecResponse): _19.MsgExecResponseAmino;
                fromAminoMsg(object: _19.MsgExecResponseAminoMsg): _19.MsgExecResponse;
                toAminoMsg(message: _19.MsgExecResponse): _19.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _19.MsgExecResponseProtoMsg): _19.MsgExecResponse;
                toProto(message: _19.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _19.MsgExecResponse): _19.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _19.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgExec;
                fromPartial(object: Partial<_19.MsgExec>): _19.MsgExec;
                fromAmino(object: _19.MsgExecAmino): _19.MsgExec;
                toAmino(message: _19.MsgExec): _19.MsgExecAmino;
                fromAminoMsg(object: _19.MsgExecAminoMsg): _19.MsgExec;
                toAminoMsg(message: _19.MsgExec): _19.MsgExecAminoMsg;
                fromProtoMsg(message: _19.MsgExecProtoMsg): _19.MsgExec;
                toProto(message: _19.MsgExec): Uint8Array;
                toProtoMsg(message: _19.MsgExec): _19.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _19.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgGrantResponse;
                fromPartial(_: Partial<_19.MsgGrantResponse>): _19.MsgGrantResponse;
                fromAmino(_: _19.MsgGrantResponseAmino): _19.MsgGrantResponse;
                toAmino(_: _19.MsgGrantResponse): _19.MsgGrantResponseAmino;
                fromAminoMsg(object: _19.MsgGrantResponseAminoMsg): _19.MsgGrantResponse;
                toAminoMsg(message: _19.MsgGrantResponse): _19.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _19.MsgGrantResponseProtoMsg): _19.MsgGrantResponse;
                toProto(message: _19.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _19.MsgGrantResponse): _19.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _19.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgRevoke;
                fromPartial(object: Partial<_19.MsgRevoke>): _19.MsgRevoke;
                fromAmino(object: _19.MsgRevokeAmino): _19.MsgRevoke;
                toAmino(message: _19.MsgRevoke): _19.MsgRevokeAmino;
                fromAminoMsg(object: _19.MsgRevokeAminoMsg): _19.MsgRevoke;
                toAminoMsg(message: _19.MsgRevoke): _19.MsgRevokeAminoMsg;
                fromProtoMsg(message: _19.MsgRevokeProtoMsg): _19.MsgRevoke;
                toProto(message: _19.MsgRevoke): Uint8Array;
                toProtoMsg(message: _19.MsgRevoke): _19.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _19.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgRevokeResponse;
                fromPartial(_: Partial<_19.MsgRevokeResponse>): _19.MsgRevokeResponse;
                fromAmino(_: _19.MsgRevokeResponseAmino): _19.MsgRevokeResponse;
                toAmino(_: _19.MsgRevokeResponse): _19.MsgRevokeResponseAmino;
                fromAminoMsg(object: _19.MsgRevokeResponseAminoMsg): _19.MsgRevokeResponse;
                toAminoMsg(message: _19.MsgRevokeResponse): _19.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _19.MsgRevokeResponseProtoMsg): _19.MsgRevokeResponse;
                toProto(message: _19.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _19.MsgRevokeResponse): _19.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _18.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryGrantsRequest;
                fromPartial(object: Partial<_18.QueryGrantsRequest>): _18.QueryGrantsRequest;
                fromAmino(object: _18.QueryGrantsRequestAmino): _18.QueryGrantsRequest;
                toAmino(message: _18.QueryGrantsRequest): _18.QueryGrantsRequestAmino;
                fromAminoMsg(object: _18.QueryGrantsRequestAminoMsg): _18.QueryGrantsRequest;
                toAminoMsg(message: _18.QueryGrantsRequest): _18.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryGrantsRequestProtoMsg): _18.QueryGrantsRequest;
                toProto(message: _18.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryGrantsRequest): _18.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _18.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryGrantsResponse;
                fromPartial(object: Partial<_18.QueryGrantsResponse>): _18.QueryGrantsResponse;
                fromAmino(object: _18.QueryGrantsResponseAmino): _18.QueryGrantsResponse;
                toAmino(message: _18.QueryGrantsResponse): _18.QueryGrantsResponseAmino;
                fromAminoMsg(object: _18.QueryGrantsResponseAminoMsg): _18.QueryGrantsResponse;
                toAminoMsg(message: _18.QueryGrantsResponse): _18.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryGrantsResponseProtoMsg): _18.QueryGrantsResponse;
                toProto(message: _18.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryGrantsResponse): _18.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _18.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_18.QueryGranterGrantsRequest>): _18.QueryGranterGrantsRequest;
                fromAmino(object: _18.QueryGranterGrantsRequestAmino): _18.QueryGranterGrantsRequest;
                toAmino(message: _18.QueryGranterGrantsRequest): _18.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _18.QueryGranterGrantsRequestAminoMsg): _18.QueryGranterGrantsRequest;
                toAminoMsg(message: _18.QueryGranterGrantsRequest): _18.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryGranterGrantsRequestProtoMsg): _18.QueryGranterGrantsRequest;
                toProto(message: _18.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryGranterGrantsRequest): _18.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _18.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_18.QueryGranterGrantsResponse>): _18.QueryGranterGrantsResponse;
                fromAmino(object: _18.QueryGranterGrantsResponseAmino): _18.QueryGranterGrantsResponse;
                toAmino(message: _18.QueryGranterGrantsResponse): _18.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _18.QueryGranterGrantsResponseAminoMsg): _18.QueryGranterGrantsResponse;
                toAminoMsg(message: _18.QueryGranterGrantsResponse): _18.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryGranterGrantsResponseProtoMsg): _18.QueryGranterGrantsResponse;
                toProto(message: _18.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryGranterGrantsResponse): _18.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _18.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_18.QueryGranteeGrantsRequest>): _18.QueryGranteeGrantsRequest;
                fromAmino(object: _18.QueryGranteeGrantsRequestAmino): _18.QueryGranteeGrantsRequest;
                toAmino(message: _18.QueryGranteeGrantsRequest): _18.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _18.QueryGranteeGrantsRequestAminoMsg): _18.QueryGranteeGrantsRequest;
                toAminoMsg(message: _18.QueryGranteeGrantsRequest): _18.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _18.QueryGranteeGrantsRequestProtoMsg): _18.QueryGranteeGrantsRequest;
                toProto(message: _18.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryGranteeGrantsRequest): _18.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _18.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_18.QueryGranteeGrantsResponse>): _18.QueryGranteeGrantsResponse;
                fromAmino(object: _18.QueryGranteeGrantsResponseAmino): _18.QueryGranteeGrantsResponse;
                toAmino(message: _18.QueryGranteeGrantsResponse): _18.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _18.QueryGranteeGrantsResponseAminoMsg): _18.QueryGranteeGrantsResponse;
                toAminoMsg(message: _18.QueryGranteeGrantsResponse): _18.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _18.QueryGranteeGrantsResponseProtoMsg): _18.QueryGranteeGrantsResponse;
                toProto(message: _18.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryGranteeGrantsResponse): _18.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _17.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GenesisState;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
                fromAmino(object: _17.GenesisStateAmino): _17.GenesisState;
                toAmino(message: _17.GenesisState): _17.GenesisStateAmino;
                fromAminoMsg(object: _17.GenesisStateAminoMsg): _17.GenesisState;
                toAminoMsg(message: _17.GenesisState): _17.GenesisStateAminoMsg;
                fromProtoMsg(message: _17.GenesisStateProtoMsg): _17.GenesisState;
                toProto(message: _17.GenesisState): Uint8Array;
                toProtoMsg(message: _17.GenesisState): _17.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _16.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventGrant;
                fromPartial(object: Partial<_16.EventGrant>): _16.EventGrant;
                fromAmino(object: _16.EventGrantAmino): _16.EventGrant;
                toAmino(message: _16.EventGrant): _16.EventGrantAmino;
                fromAminoMsg(object: _16.EventGrantAminoMsg): _16.EventGrant;
                toAminoMsg(message: _16.EventGrant): _16.EventGrantAminoMsg;
                fromProtoMsg(message: _16.EventGrantProtoMsg): _16.EventGrant;
                toProto(message: _16.EventGrant): Uint8Array;
                toProtoMsg(message: _16.EventGrant): _16.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _16.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventRevoke;
                fromPartial(object: Partial<_16.EventRevoke>): _16.EventRevoke;
                fromAmino(object: _16.EventRevokeAmino): _16.EventRevoke;
                toAmino(message: _16.EventRevoke): _16.EventRevokeAmino;
                fromAminoMsg(object: _16.EventRevokeAminoMsg): _16.EventRevoke;
                toAminoMsg(message: _16.EventRevoke): _16.EventRevokeAminoMsg;
                fromProtoMsg(message: _16.EventRevokeProtoMsg): _16.EventRevoke;
                toProto(message: _16.EventRevoke): Uint8Array;
                toProtoMsg(message: _16.EventRevoke): _16.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _15.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenericAuthorization;
                fromPartial(object: Partial<_15.GenericAuthorization>): _15.GenericAuthorization;
                fromAmino(object: _15.GenericAuthorizationAmino): _15.GenericAuthorization;
                toAmino(message: _15.GenericAuthorization): _15.GenericAuthorizationAmino;
                fromAminoMsg(object: _15.GenericAuthorizationAminoMsg): _15.GenericAuthorization;
                toAminoMsg(message: _15.GenericAuthorization): _15.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _15.GenericAuthorizationProtoMsg): _15.GenericAuthorization;
                toProto(message: _15.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _15.GenericAuthorization): _15.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _15.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Grant;
                fromPartial(object: Partial<_15.Grant>): _15.Grant;
                fromAmino(object: _15.GrantAmino): _15.Grant;
                toAmino(message: _15.Grant): _15.GrantAmino;
                fromAminoMsg(object: _15.GrantAminoMsg): _15.Grant;
                toAminoMsg(message: _15.Grant): _15.GrantAminoMsg;
                fromProtoMsg(message: _15.GrantProtoMsg): _15.Grant;
                toProto(message: _15.Grant): Uint8Array;
                toProtoMsg(message: _15.Grant): _15.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _15.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GrantAuthorization;
                fromPartial(object: Partial<_15.GrantAuthorization>): _15.GrantAuthorization;
                fromAmino(object: _15.GrantAuthorizationAmino): _15.GrantAuthorization;
                toAmino(message: _15.GrantAuthorization): _15.GrantAuthorizationAmino;
                fromAminoMsg(object: _15.GrantAuthorizationAminoMsg): _15.GrantAuthorization;
                toAminoMsg(message: _15.GrantAuthorization): _15.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _15.GrantAuthorizationProtoMsg): _15.GrantAuthorization;
                toProto(message: _15.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _15.GrantAuthorization): _15.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _15.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GrantQueueItem;
                fromPartial(object: Partial<_15.GrantQueueItem>): _15.GrantQueueItem;
                fromAmino(object: _15.GrantQueueItemAmino): _15.GrantQueueItem;
                toAmino(message: _15.GrantQueueItem): _15.GrantQueueItemAmino;
                fromAminoMsg(object: _15.GrantQueueItemAminoMsg): _15.GrantQueueItem;
                toAminoMsg(message: _15.GrantQueueItem): _15.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _15.GrantQueueItemProtoMsg): _15.GrantQueueItem;
                toProto(message: _15.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _15.GrantQueueItem): _15.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _23.SendAuthorization | _114.StakeAuthorization | _15.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                appOptions(request?: _21.AppOptionsRequest): Promise<_21.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _21.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.AppOptionsRequest;
                fromPartial(_: Partial<_21.AppOptionsRequest>): _21.AppOptionsRequest;
                fromAmino(_: _21.AppOptionsRequestAmino): _21.AppOptionsRequest;
                toAmino(_: _21.AppOptionsRequest): _21.AppOptionsRequestAmino;
                fromAminoMsg(object: _21.AppOptionsRequestAminoMsg): _21.AppOptionsRequest;
                toAminoMsg(message: _21.AppOptionsRequest): _21.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _21.AppOptionsRequestProtoMsg): _21.AppOptionsRequest;
                toProto(message: _21.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _21.AppOptionsRequest): _21.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _21.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_21.AppOptionsResponse_ModuleOptionsEntry>): _21.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _21.AppOptionsResponse_ModuleOptionsEntryAmino): _21.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _21.AppOptionsResponse_ModuleOptionsEntry): _21.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _21.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _21.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _21.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _21.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _21.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _21.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.AppOptionsResponse;
                fromPartial(object: Partial<_21.AppOptionsResponse>): _21.AppOptionsResponse;
                fromAmino(object: _21.AppOptionsResponseAmino): _21.AppOptionsResponse;
                toAmino(message: _21.AppOptionsResponse): _21.AppOptionsResponseAmino;
                fromAminoMsg(object: _21.AppOptionsResponseAminoMsg): _21.AppOptionsResponse;
                toAminoMsg(message: _21.AppOptionsResponse): _21.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _21.AppOptionsResponseProtoMsg): _21.AppOptionsResponse;
                toProto(message: _21.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _21.AppOptionsResponse): _21.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _20.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ModuleOptions;
                fromPartial(object: Partial<_20.ModuleOptions>): _20.ModuleOptions;
                fromAmino(object: _20.ModuleOptionsAmino): _20.ModuleOptions;
                toAmino(message: _20.ModuleOptions): _20.ModuleOptionsAmino;
                fromAminoMsg(object: _20.ModuleOptionsAminoMsg): _20.ModuleOptions;
                toAminoMsg(message: _20.ModuleOptions): _20.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _20.ModuleOptionsProtoMsg): _20.ModuleOptions;
                toProto(message: _20.ModuleOptions): Uint8Array;
                toProtoMsg(message: _20.ModuleOptions): _20.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _20.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_20.ServiceCommandDescriptor_SubCommandsEntry>): _20.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _20.ServiceCommandDescriptor_SubCommandsEntryAmino): _20.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _20.ServiceCommandDescriptor_SubCommandsEntry): _20.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _20.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _20.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _20.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _20.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _20.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _20.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ServiceCommandDescriptor;
                fromPartial(object: Partial<_20.ServiceCommandDescriptor>): _20.ServiceCommandDescriptor;
                fromAmino(object: _20.ServiceCommandDescriptorAmino): _20.ServiceCommandDescriptor;
                toAmino(message: _20.ServiceCommandDescriptor): _20.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _20.ServiceCommandDescriptorAminoMsg): _20.ServiceCommandDescriptor;
                toAminoMsg(message: _20.ServiceCommandDescriptor): _20.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _20.ServiceCommandDescriptorProtoMsg): _20.ServiceCommandDescriptor;
                toProto(message: _20.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _20.ServiceCommandDescriptor): _20.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _20.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_20.RpcCommandOptions_FlagOptionsEntry>): _20.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _20.RpcCommandOptions_FlagOptionsEntryAmino): _20.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _20.RpcCommandOptions_FlagOptionsEntry): _20.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _20.RpcCommandOptions_FlagOptionsEntryAminoMsg): _20.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _20.RpcCommandOptions_FlagOptionsEntryProtoMsg): _20.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _20.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _20.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.RpcCommandOptions;
                fromPartial(object: Partial<_20.RpcCommandOptions>): _20.RpcCommandOptions;
                fromAmino(object: _20.RpcCommandOptionsAmino): _20.RpcCommandOptions;
                toAmino(message: _20.RpcCommandOptions): _20.RpcCommandOptionsAmino;
                fromAminoMsg(object: _20.RpcCommandOptionsAminoMsg): _20.RpcCommandOptions;
                toAminoMsg(message: _20.RpcCommandOptions): _20.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _20.RpcCommandOptionsProtoMsg): _20.RpcCommandOptions;
                toProto(message: _20.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _20.RpcCommandOptions): _20.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _20.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.FlagOptions;
                fromPartial(object: Partial<_20.FlagOptions>): _20.FlagOptions;
                fromAmino(object: _20.FlagOptionsAmino): _20.FlagOptions;
                toAmino(message: _20.FlagOptions): _20.FlagOptionsAmino;
                fromAminoMsg(object: _20.FlagOptionsAminoMsg): _20.FlagOptions;
                toAminoMsg(message: _20.FlagOptions): _20.FlagOptionsAminoMsg;
                fromProtoMsg(message: _20.FlagOptionsProtoMsg): _20.FlagOptions;
                toProto(message: _20.FlagOptions): Uint8Array;
                toProtoMsg(message: _20.FlagOptions): _20.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _20.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.PositionalArgDescriptor;
                fromPartial(object: Partial<_20.PositionalArgDescriptor>): _20.PositionalArgDescriptor;
                fromAmino(object: _20.PositionalArgDescriptorAmino): _20.PositionalArgDescriptor;
                toAmino(message: _20.PositionalArgDescriptor): _20.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _20.PositionalArgDescriptorAminoMsg): _20.PositionalArgDescriptor;
                toAminoMsg(message: _20.PositionalArgDescriptor): _20.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _20.PositionalArgDescriptorProtoMsg): _20.PositionalArgDescriptor;
                toProto(message: _20.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _20.PositionalArgDescriptor): _20.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _22.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Module;
                    fromPartial(object: Partial<_22.Module>): _22.Module;
                    fromAmino(object: _22.ModuleAmino): _22.Module;
                    toAmino(message: _22.Module): _22.ModuleAmino;
                    fromAminoMsg(object: _22.ModuleAminoMsg): _22.Module;
                    toAminoMsg(message: _22.Module): _22.ModuleAminoMsg;
                    fromProtoMsg(message: _22.ModuleProtoMsg): _22.Module;
                    toProto(message: _22.Module): Uint8Array;
                    toProtoMsg(message: _22.Module): _22.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _26.QueryBalanceRequest): Promise<_26.QueryBalanceResponse>;
                allBalances(request: _26.QueryAllBalancesRequest): Promise<_26.QueryAllBalancesResponse>;
                spendableBalances(request: _26.QuerySpendableBalancesRequest): Promise<_26.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _26.QuerySpendableBalanceByDenomRequest): Promise<_26.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _26.QueryTotalSupplyRequest): Promise<_26.QueryTotalSupplyResponse>;
                supplyOf(request: _26.QuerySupplyOfRequest): Promise<_26.QuerySupplyOfResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                denomMetadata(request: _26.QueryDenomMetadataRequest): Promise<_26.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _26.QueryDenomsMetadataRequest): Promise<_26.QueryDenomsMetadataResponse>;
                denomOwners(request: _26.QueryDenomOwnersRequest): Promise<_26.QueryDenomOwnersResponse>;
                sendEnabled(request: _26.QuerySendEnabledRequest): Promise<_26.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _27.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                    setSendEnabled(value: _27.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _27.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _27.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _27.MsgSend): {
                        typeUrl: string;
                        value: _27.MsgSend;
                    };
                    multiSend(value: _27.MsgMultiSend): {
                        typeUrl: string;
                        value: _27.MsgMultiSend;
                    };
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                    setSendEnabled(value: _27.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _27.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _27.MsgSend) => _27.MsgSendAmino;
                    fromAmino: (object: _27.MsgSendAmino) => _27.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _27.MsgMultiSend) => _27.MsgMultiSendAmino;
                    fromAmino: (object: _27.MsgMultiSendAmino) => _27.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _27.MsgUpdateParams) => _27.MsgUpdateParamsAmino;
                    fromAmino: (object: _27.MsgUpdateParamsAmino) => _27.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _27.MsgSetSendEnabled) => _27.MsgSetSendEnabledAmino;
                    fromAmino: (object: _27.MsgSetSendEnabledAmino) => _27.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _27.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSend;
                fromPartial(object: Partial<_27.MsgSend>): _27.MsgSend;
                fromAmino(object: _27.MsgSendAmino): _27.MsgSend;
                toAmino(message: _27.MsgSend): _27.MsgSendAmino;
                fromAminoMsg(object: _27.MsgSendAminoMsg): _27.MsgSend;
                toAminoMsg(message: _27.MsgSend): _27.MsgSendAminoMsg;
                fromProtoMsg(message: _27.MsgSendProtoMsg): _27.MsgSend;
                toProto(message: _27.MsgSend): Uint8Array;
                toProtoMsg(message: _27.MsgSend): _27.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _27.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgSendResponse;
                fromPartial(_: Partial<_27.MsgSendResponse>): _27.MsgSendResponse;
                fromAmino(_: _27.MsgSendResponseAmino): _27.MsgSendResponse;
                toAmino(_: _27.MsgSendResponse): _27.MsgSendResponseAmino;
                fromAminoMsg(object: _27.MsgSendResponseAminoMsg): _27.MsgSendResponse;
                toAminoMsg(message: _27.MsgSendResponse): _27.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _27.MsgSendResponseProtoMsg): _27.MsgSendResponse;
                toProto(message: _27.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _27.MsgSendResponse): _27.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _27.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgMultiSend;
                fromPartial(object: Partial<_27.MsgMultiSend>): _27.MsgMultiSend;
                fromAmino(object: _27.MsgMultiSendAmino): _27.MsgMultiSend;
                toAmino(message: _27.MsgMultiSend): _27.MsgMultiSendAmino;
                fromAminoMsg(object: _27.MsgMultiSendAminoMsg): _27.MsgMultiSend;
                toAminoMsg(message: _27.MsgMultiSend): _27.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _27.MsgMultiSendProtoMsg): _27.MsgMultiSend;
                toProto(message: _27.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _27.MsgMultiSend): _27.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _27.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgMultiSendResponse;
                fromPartial(_: Partial<_27.MsgMultiSendResponse>): _27.MsgMultiSendResponse;
                fromAmino(_: _27.MsgMultiSendResponseAmino): _27.MsgMultiSendResponse;
                toAmino(_: _27.MsgMultiSendResponse): _27.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _27.MsgMultiSendResponseAminoMsg): _27.MsgMultiSendResponse;
                toAminoMsg(message: _27.MsgMultiSendResponse): _27.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _27.MsgMultiSendResponseProtoMsg): _27.MsgMultiSendResponse;
                toProto(message: _27.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _27.MsgMultiSendResponse): _27.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _27.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgUpdateParams;
                fromPartial(object: Partial<_27.MsgUpdateParams>): _27.MsgUpdateParams;
                fromAmino(object: _27.MsgUpdateParamsAmino): _27.MsgUpdateParams;
                toAmino(message: _27.MsgUpdateParams): _27.MsgUpdateParamsAmino;
                fromAminoMsg(object: _27.MsgUpdateParamsAminoMsg): _27.MsgUpdateParams;
                toAminoMsg(message: _27.MsgUpdateParams): _27.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _27.MsgUpdateParamsProtoMsg): _27.MsgUpdateParams;
                toProto(message: _27.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _27.MsgUpdateParams): _27.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _27.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_27.MsgUpdateParamsResponse>): _27.MsgUpdateParamsResponse;
                fromAmino(_: _27.MsgUpdateParamsResponseAmino): _27.MsgUpdateParamsResponse;
                toAmino(_: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _27.MsgUpdateParamsResponseAminoMsg): _27.MsgUpdateParamsResponse;
                toAminoMsg(message: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _27.MsgUpdateParamsResponseProtoMsg): _27.MsgUpdateParamsResponse;
                toProto(message: _27.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _27.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgSetSendEnabled;
                fromPartial(object: Partial<_27.MsgSetSendEnabled>): _27.MsgSetSendEnabled;
                fromAmino(object: _27.MsgSetSendEnabledAmino): _27.MsgSetSendEnabled;
                toAmino(message: _27.MsgSetSendEnabled): _27.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _27.MsgSetSendEnabledAminoMsg): _27.MsgSetSendEnabled;
                toAminoMsg(message: _27.MsgSetSendEnabled): _27.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _27.MsgSetSendEnabledProtoMsg): _27.MsgSetSendEnabled;
                toProto(message: _27.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _27.MsgSetSendEnabled): _27.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _27.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_27.MsgSetSendEnabledResponse>): _27.MsgSetSendEnabledResponse;
                fromAmino(_: _27.MsgSetSendEnabledResponseAmino): _27.MsgSetSendEnabledResponse;
                toAmino(_: _27.MsgSetSendEnabledResponse): _27.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _27.MsgSetSendEnabledResponseAminoMsg): _27.MsgSetSendEnabledResponse;
                toAminoMsg(message: _27.MsgSetSendEnabledResponse): _27.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _27.MsgSetSendEnabledResponseProtoMsg): _27.MsgSetSendEnabledResponse;
                toProto(message: _27.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _27.MsgSetSendEnabledResponse): _27.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _26.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryBalanceRequest;
                fromPartial(object: Partial<_26.QueryBalanceRequest>): _26.QueryBalanceRequest;
                fromAmino(object: _26.QueryBalanceRequestAmino): _26.QueryBalanceRequest;
                toAmino(message: _26.QueryBalanceRequest): _26.QueryBalanceRequestAmino;
                fromAminoMsg(object: _26.QueryBalanceRequestAminoMsg): _26.QueryBalanceRequest;
                toAminoMsg(message: _26.QueryBalanceRequest): _26.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _26.QueryBalanceRequestProtoMsg): _26.QueryBalanceRequest;
                toProto(message: _26.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _26.QueryBalanceRequest): _26.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _26.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryBalanceResponse;
                fromPartial(object: Partial<_26.QueryBalanceResponse>): _26.QueryBalanceResponse;
                fromAmino(object: _26.QueryBalanceResponseAmino): _26.QueryBalanceResponse;
                toAmino(message: _26.QueryBalanceResponse): _26.QueryBalanceResponseAmino;
                fromAminoMsg(object: _26.QueryBalanceResponseAminoMsg): _26.QueryBalanceResponse;
                toAminoMsg(message: _26.QueryBalanceResponse): _26.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _26.QueryBalanceResponseProtoMsg): _26.QueryBalanceResponse;
                toProto(message: _26.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _26.QueryBalanceResponse): _26.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _26.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAllBalancesRequest;
                fromPartial(object: Partial<_26.QueryAllBalancesRequest>): _26.QueryAllBalancesRequest;
                fromAmino(object: _26.QueryAllBalancesRequestAmino): _26.QueryAllBalancesRequest;
                toAmino(message: _26.QueryAllBalancesRequest): _26.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _26.QueryAllBalancesRequestAminoMsg): _26.QueryAllBalancesRequest;
                toAminoMsg(message: _26.QueryAllBalancesRequest): _26.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAllBalancesRequestProtoMsg): _26.QueryAllBalancesRequest;
                toProto(message: _26.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAllBalancesRequest): _26.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _26.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAllBalancesResponse;
                fromPartial(object: Partial<_26.QueryAllBalancesResponse>): _26.QueryAllBalancesResponse;
                fromAmino(object: _26.QueryAllBalancesResponseAmino): _26.QueryAllBalancesResponse;
                toAmino(message: _26.QueryAllBalancesResponse): _26.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _26.QueryAllBalancesResponseAminoMsg): _26.QueryAllBalancesResponse;
                toAminoMsg(message: _26.QueryAllBalancesResponse): _26.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAllBalancesResponseProtoMsg): _26.QueryAllBalancesResponse;
                toProto(message: _26.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAllBalancesResponse): _26.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _26.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_26.QuerySpendableBalancesRequest>): _26.QuerySpendableBalancesRequest;
                fromAmino(object: _26.QuerySpendableBalancesRequestAmino): _26.QuerySpendableBalancesRequest;
                toAmino(message: _26.QuerySpendableBalancesRequest): _26.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _26.QuerySpendableBalancesRequestAminoMsg): _26.QuerySpendableBalancesRequest;
                toAminoMsg(message: _26.QuerySpendableBalancesRequest): _26.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _26.QuerySpendableBalancesRequestProtoMsg): _26.QuerySpendableBalancesRequest;
                toProto(message: _26.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _26.QuerySpendableBalancesRequest): _26.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _26.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_26.QuerySpendableBalancesResponse>): _26.QuerySpendableBalancesResponse;
                fromAmino(object: _26.QuerySpendableBalancesResponseAmino): _26.QuerySpendableBalancesResponse;
                toAmino(message: _26.QuerySpendableBalancesResponse): _26.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _26.QuerySpendableBalancesResponseAminoMsg): _26.QuerySpendableBalancesResponse;
                toAminoMsg(message: _26.QuerySpendableBalancesResponse): _26.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _26.QuerySpendableBalancesResponseProtoMsg): _26.QuerySpendableBalancesResponse;
                toProto(message: _26.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _26.QuerySpendableBalancesResponse): _26.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _26.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_26.QuerySpendableBalanceByDenomRequest>): _26.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _26.QuerySpendableBalanceByDenomRequestAmino): _26.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _26.QuerySpendableBalanceByDenomRequest): _26.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _26.QuerySpendableBalanceByDenomRequestAminoMsg): _26.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _26.QuerySpendableBalanceByDenomRequest): _26.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _26.QuerySpendableBalanceByDenomRequestProtoMsg): _26.QuerySpendableBalanceByDenomRequest;
                toProto(message: _26.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _26.QuerySpendableBalanceByDenomRequest): _26.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _26.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_26.QuerySpendableBalanceByDenomResponse>): _26.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _26.QuerySpendableBalanceByDenomResponseAmino): _26.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _26.QuerySpendableBalanceByDenomResponse): _26.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _26.QuerySpendableBalanceByDenomResponseAminoMsg): _26.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _26.QuerySpendableBalanceByDenomResponse): _26.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _26.QuerySpendableBalanceByDenomResponseProtoMsg): _26.QuerySpendableBalanceByDenomResponse;
                toProto(message: _26.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _26.QuerySpendableBalanceByDenomResponse): _26.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _26.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_26.QueryTotalSupplyRequest>): _26.QueryTotalSupplyRequest;
                fromAmino(object: _26.QueryTotalSupplyRequestAmino): _26.QueryTotalSupplyRequest;
                toAmino(message: _26.QueryTotalSupplyRequest): _26.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _26.QueryTotalSupplyRequestAminoMsg): _26.QueryTotalSupplyRequest;
                toAminoMsg(message: _26.QueryTotalSupplyRequest): _26.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _26.QueryTotalSupplyRequestProtoMsg): _26.QueryTotalSupplyRequest;
                toProto(message: _26.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _26.QueryTotalSupplyRequest): _26.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _26.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_26.QueryTotalSupplyResponse>): _26.QueryTotalSupplyResponse;
                fromAmino(object: _26.QueryTotalSupplyResponseAmino): _26.QueryTotalSupplyResponse;
                toAmino(message: _26.QueryTotalSupplyResponse): _26.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _26.QueryTotalSupplyResponseAminoMsg): _26.QueryTotalSupplyResponse;
                toAminoMsg(message: _26.QueryTotalSupplyResponse): _26.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _26.QueryTotalSupplyResponseProtoMsg): _26.QueryTotalSupplyResponse;
                toProto(message: _26.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _26.QueryTotalSupplyResponse): _26.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _26.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySupplyOfRequest;
                fromPartial(object: Partial<_26.QuerySupplyOfRequest>): _26.QuerySupplyOfRequest;
                fromAmino(object: _26.QuerySupplyOfRequestAmino): _26.QuerySupplyOfRequest;
                toAmino(message: _26.QuerySupplyOfRequest): _26.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _26.QuerySupplyOfRequestAminoMsg): _26.QuerySupplyOfRequest;
                toAminoMsg(message: _26.QuerySupplyOfRequest): _26.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _26.QuerySupplyOfRequestProtoMsg): _26.QuerySupplyOfRequest;
                toProto(message: _26.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _26.QuerySupplyOfRequest): _26.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _26.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySupplyOfResponse;
                fromPartial(object: Partial<_26.QuerySupplyOfResponse>): _26.QuerySupplyOfResponse;
                fromAmino(object: _26.QuerySupplyOfResponseAmino): _26.QuerySupplyOfResponse;
                toAmino(message: _26.QuerySupplyOfResponse): _26.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _26.QuerySupplyOfResponseAminoMsg): _26.QuerySupplyOfResponse;
                toAminoMsg(message: _26.QuerySupplyOfResponse): _26.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _26.QuerySupplyOfResponseProtoMsg): _26.QuerySupplyOfResponse;
                toProto(message: _26.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _26.QuerySupplyOfResponse): _26.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _26.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryParamsRequest;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
                fromAmino(_: _26.QueryParamsRequestAmino): _26.QueryParamsRequest;
                toAmino(_: _26.QueryParamsRequest): _26.QueryParamsRequestAmino;
                fromAminoMsg(object: _26.QueryParamsRequestAminoMsg): _26.QueryParamsRequest;
                toAminoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryParamsRequestProtoMsg): _26.QueryParamsRequest;
                toProto(message: _26.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _26.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
                fromAmino(object: _26.QueryParamsResponseAmino): _26.QueryParamsResponse;
                toAmino(message: _26.QueryParamsResponse): _26.QueryParamsResponseAmino;
                fromAminoMsg(object: _26.QueryParamsResponseAminoMsg): _26.QueryParamsResponse;
                toAminoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryParamsResponseProtoMsg): _26.QueryParamsResponse;
                toProto(message: _26.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _26.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_26.QueryDenomsMetadataRequest>): _26.QueryDenomsMetadataRequest;
                fromAmino(object: _26.QueryDenomsMetadataRequestAmino): _26.QueryDenomsMetadataRequest;
                toAmino(message: _26.QueryDenomsMetadataRequest): _26.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _26.QueryDenomsMetadataRequestAminoMsg): _26.QueryDenomsMetadataRequest;
                toAminoMsg(message: _26.QueryDenomsMetadataRequest): _26.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDenomsMetadataRequestProtoMsg): _26.QueryDenomsMetadataRequest;
                toProto(message: _26.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDenomsMetadataRequest): _26.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _26.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_26.QueryDenomsMetadataResponse>): _26.QueryDenomsMetadataResponse;
                fromAmino(object: _26.QueryDenomsMetadataResponseAmino): _26.QueryDenomsMetadataResponse;
                toAmino(message: _26.QueryDenomsMetadataResponse): _26.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _26.QueryDenomsMetadataResponseAminoMsg): _26.QueryDenomsMetadataResponse;
                toAminoMsg(message: _26.QueryDenomsMetadataResponse): _26.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDenomsMetadataResponseProtoMsg): _26.QueryDenomsMetadataResponse;
                toProto(message: _26.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDenomsMetadataResponse): _26.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _26.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_26.QueryDenomMetadataRequest>): _26.QueryDenomMetadataRequest;
                fromAmino(object: _26.QueryDenomMetadataRequestAmino): _26.QueryDenomMetadataRequest;
                toAmino(message: _26.QueryDenomMetadataRequest): _26.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _26.QueryDenomMetadataRequestAminoMsg): _26.QueryDenomMetadataRequest;
                toAminoMsg(message: _26.QueryDenomMetadataRequest): _26.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDenomMetadataRequestProtoMsg): _26.QueryDenomMetadataRequest;
                toProto(message: _26.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDenomMetadataRequest): _26.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _26.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_26.QueryDenomMetadataResponse>): _26.QueryDenomMetadataResponse;
                fromAmino(object: _26.QueryDenomMetadataResponseAmino): _26.QueryDenomMetadataResponse;
                toAmino(message: _26.QueryDenomMetadataResponse): _26.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _26.QueryDenomMetadataResponseAminoMsg): _26.QueryDenomMetadataResponse;
                toAminoMsg(message: _26.QueryDenomMetadataResponse): _26.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDenomMetadataResponseProtoMsg): _26.QueryDenomMetadataResponse;
                toProto(message: _26.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDenomMetadataResponse): _26.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _26.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_26.QueryDenomOwnersRequest>): _26.QueryDenomOwnersRequest;
                fromAmino(object: _26.QueryDenomOwnersRequestAmino): _26.QueryDenomOwnersRequest;
                toAmino(message: _26.QueryDenomOwnersRequest): _26.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _26.QueryDenomOwnersRequestAminoMsg): _26.QueryDenomOwnersRequest;
                toAminoMsg(message: _26.QueryDenomOwnersRequest): _26.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _26.QueryDenomOwnersRequestProtoMsg): _26.QueryDenomOwnersRequest;
                toProto(message: _26.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _26.QueryDenomOwnersRequest): _26.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _26.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.DenomOwner;
                fromPartial(object: Partial<_26.DenomOwner>): _26.DenomOwner;
                fromAmino(object: _26.DenomOwnerAmino): _26.DenomOwner;
                toAmino(message: _26.DenomOwner): _26.DenomOwnerAmino;
                fromAminoMsg(object: _26.DenomOwnerAminoMsg): _26.DenomOwner;
                toAminoMsg(message: _26.DenomOwner): _26.DenomOwnerAminoMsg;
                fromProtoMsg(message: _26.DenomOwnerProtoMsg): _26.DenomOwner;
                toProto(message: _26.DenomOwner): Uint8Array;
                toProtoMsg(message: _26.DenomOwner): _26.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _26.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_26.QueryDenomOwnersResponse>): _26.QueryDenomOwnersResponse;
                fromAmino(object: _26.QueryDenomOwnersResponseAmino): _26.QueryDenomOwnersResponse;
                toAmino(message: _26.QueryDenomOwnersResponse): _26.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _26.QueryDenomOwnersResponseAminoMsg): _26.QueryDenomOwnersResponse;
                toAminoMsg(message: _26.QueryDenomOwnersResponse): _26.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _26.QueryDenomOwnersResponseProtoMsg): _26.QueryDenomOwnersResponse;
                toProto(message: _26.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _26.QueryDenomOwnersResponse): _26.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _26.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySendEnabledRequest;
                fromPartial(object: Partial<_26.QuerySendEnabledRequest>): _26.QuerySendEnabledRequest;
                fromAmino(object: _26.QuerySendEnabledRequestAmino): _26.QuerySendEnabledRequest;
                toAmino(message: _26.QuerySendEnabledRequest): _26.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _26.QuerySendEnabledRequestAminoMsg): _26.QuerySendEnabledRequest;
                toAminoMsg(message: _26.QuerySendEnabledRequest): _26.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _26.QuerySendEnabledRequestProtoMsg): _26.QuerySendEnabledRequest;
                toProto(message: _26.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _26.QuerySendEnabledRequest): _26.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _26.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QuerySendEnabledResponse;
                fromPartial(object: Partial<_26.QuerySendEnabledResponse>): _26.QuerySendEnabledResponse;
                fromAmino(object: _26.QuerySendEnabledResponseAmino): _26.QuerySendEnabledResponse;
                toAmino(message: _26.QuerySendEnabledResponse): _26.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _26.QuerySendEnabledResponseAminoMsg): _26.QuerySendEnabledResponse;
                toAminoMsg(message: _26.QuerySendEnabledResponse): _26.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _26.QuerySendEnabledResponseProtoMsg): _26.QuerySendEnabledResponse;
                toProto(message: _26.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _26.QuerySendEnabledResponse): _26.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                toAminoMsg(message: _25.GenesisState): _25.GenesisStateAminoMsg;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _25.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Balance;
                fromPartial(object: Partial<_25.Balance>): _25.Balance;
                fromAmino(object: _25.BalanceAmino): _25.Balance;
                toAmino(message: _25.Balance): _25.BalanceAmino;
                fromAminoMsg(object: _25.BalanceAminoMsg): _25.Balance;
                toAminoMsg(message: _25.Balance): _25.BalanceAminoMsg;
                fromProtoMsg(message: _25.BalanceProtoMsg): _25.Balance;
                toProto(message: _25.Balance): Uint8Array;
                toProtoMsg(message: _25.Balance): _25.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _24.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Params;
                fromPartial(object: Partial<_24.Params>): _24.Params;
                fromAmino(object: _24.ParamsAmino): _24.Params;
                toAmino(message: _24.Params): _24.ParamsAmino;
                fromAminoMsg(object: _24.ParamsAminoMsg): _24.Params;
                toAminoMsg(message: _24.Params): _24.ParamsAminoMsg;
                fromProtoMsg(message: _24.ParamsProtoMsg): _24.Params;
                toProto(message: _24.Params): Uint8Array;
                toProtoMsg(message: _24.Params): _24.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _24.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.SendEnabled;
                fromPartial(object: Partial<_24.SendEnabled>): _24.SendEnabled;
                fromAmino(object: _24.SendEnabledAmino): _24.SendEnabled;
                toAmino(message: _24.SendEnabled): _24.SendEnabledAmino;
                fromAminoMsg(object: _24.SendEnabledAminoMsg): _24.SendEnabled;
                toAminoMsg(message: _24.SendEnabled): _24.SendEnabledAminoMsg;
                fromProtoMsg(message: _24.SendEnabledProtoMsg): _24.SendEnabled;
                toProto(message: _24.SendEnabled): Uint8Array;
                toProtoMsg(message: _24.SendEnabled): _24.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _24.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Input;
                fromPartial(object: Partial<_24.Input>): _24.Input;
                fromAmino(object: _24.InputAmino): _24.Input;
                toAmino(message: _24.Input): _24.InputAmino;
                fromAminoMsg(object: _24.InputAminoMsg): _24.Input;
                toAminoMsg(message: _24.Input): _24.InputAminoMsg;
                fromProtoMsg(message: _24.InputProtoMsg): _24.Input;
                toProto(message: _24.Input): Uint8Array;
                toProtoMsg(message: _24.Input): _24.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _24.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Output;
                fromPartial(object: Partial<_24.Output>): _24.Output;
                fromAmino(object: _24.OutputAmino): _24.Output;
                toAmino(message: _24.Output): _24.OutputAmino;
                fromAminoMsg(object: _24.OutputAminoMsg): _24.Output;
                toAminoMsg(message: _24.Output): _24.OutputAminoMsg;
                fromProtoMsg(message: _24.OutputProtoMsg): _24.Output;
                toProto(message: _24.Output): Uint8Array;
                toProtoMsg(message: _24.Output): _24.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _24.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Supply;
                fromPartial(object: Partial<_24.Supply>): _24.Supply;
                fromAmino(object: _24.SupplyAmino): _24.Supply;
                toAmino(message: _24.Supply): _24.SupplyAmino;
                fromAminoMsg(object: _24.SupplyAminoMsg): _24.Supply;
                toAminoMsg(message: _24.Supply): _24.SupplyAminoMsg;
                fromProtoMsg(message: _24.SupplyProtoMsg): _24.Supply;
                toProto(message: _24.Supply): Uint8Array;
                toProtoMsg(message: _24.Supply): _24.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _24.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.DenomUnit;
                fromPartial(object: Partial<_24.DenomUnit>): _24.DenomUnit;
                fromAmino(object: _24.DenomUnitAmino): _24.DenomUnit;
                toAmino(message: _24.DenomUnit): _24.DenomUnitAmino;
                fromAminoMsg(object: _24.DenomUnitAminoMsg): _24.DenomUnit;
                toAminoMsg(message: _24.DenomUnit): _24.DenomUnitAminoMsg;
                fromProtoMsg(message: _24.DenomUnitProtoMsg): _24.DenomUnit;
                toProto(message: _24.DenomUnit): Uint8Array;
                toProtoMsg(message: _24.DenomUnit): _24.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _24.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Metadata;
                fromPartial(object: Partial<_24.Metadata>): _24.Metadata;
                fromAmino(object: _24.MetadataAmino): _24.Metadata;
                toAmino(message: _24.Metadata): _24.MetadataAmino;
                fromAminoMsg(object: _24.MetadataAminoMsg): _24.Metadata;
                toAminoMsg(message: _24.Metadata): _24.MetadataAminoMsg;
                fromProtoMsg(message: _24.MetadataProtoMsg): _24.Metadata;
                toProto(message: _24.Metadata): Uint8Array;
                toProtoMsg(message: _24.Metadata): _24.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _23.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.SendAuthorization;
                fromPartial(object: Partial<_23.SendAuthorization>): _23.SendAuthorization;
                fromAmino(object: _23.SendAuthorizationAmino): _23.SendAuthorization;
                toAmino(message: _23.SendAuthorization): _23.SendAuthorizationAmino;
                fromAminoMsg(object: _23.SendAuthorizationAminoMsg): _23.SendAuthorization;
                toAminoMsg(message: _23.SendAuthorization): _23.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _23.SendAuthorizationProtoMsg): _23.SendAuthorization;
                toProto(message: _23.SendAuthorization): Uint8Array;
                toProtoMsg(message: _23.SendAuthorization): _23.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _28.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.TxResponse;
                    fromPartial(object: Partial<_28.TxResponse>): _28.TxResponse;
                    fromAmino(object: _28.TxResponseAmino): _28.TxResponse;
                    toAmino(message: _28.TxResponse): _28.TxResponseAmino;
                    fromAminoMsg(object: _28.TxResponseAminoMsg): _28.TxResponse;
                    toAminoMsg(message: _28.TxResponse): _28.TxResponseAminoMsg;
                    fromProtoMsg(message: _28.TxResponseProtoMsg): _28.TxResponse;
                    toProto(message: _28.TxResponse): Uint8Array;
                    toProtoMsg(message: _28.TxResponse): _28.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _28.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ABCIMessageLog;
                    fromPartial(object: Partial<_28.ABCIMessageLog>): _28.ABCIMessageLog;
                    fromAmino(object: _28.ABCIMessageLogAmino): _28.ABCIMessageLog;
                    toAmino(message: _28.ABCIMessageLog): _28.ABCIMessageLogAmino;
                    fromAminoMsg(object: _28.ABCIMessageLogAminoMsg): _28.ABCIMessageLog;
                    toAminoMsg(message: _28.ABCIMessageLog): _28.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _28.ABCIMessageLogProtoMsg): _28.ABCIMessageLog;
                    toProto(message: _28.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _28.ABCIMessageLog): _28.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _28.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.StringEvent;
                    fromPartial(object: Partial<_28.StringEvent>): _28.StringEvent;
                    fromAmino(object: _28.StringEventAmino): _28.StringEvent;
                    toAmino(message: _28.StringEvent): _28.StringEventAmino;
                    fromAminoMsg(object: _28.StringEventAminoMsg): _28.StringEvent;
                    toAminoMsg(message: _28.StringEvent): _28.StringEventAminoMsg;
                    fromProtoMsg(message: _28.StringEventProtoMsg): _28.StringEvent;
                    toProto(message: _28.StringEvent): Uint8Array;
                    toProtoMsg(message: _28.StringEvent): _28.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _28.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.Attribute;
                    fromPartial(object: Partial<_28.Attribute>): _28.Attribute;
                    fromAmino(object: _28.AttributeAmino): _28.Attribute;
                    toAmino(message: _28.Attribute): _28.AttributeAmino;
                    fromAminoMsg(object: _28.AttributeAminoMsg): _28.Attribute;
                    toAminoMsg(message: _28.Attribute): _28.AttributeAminoMsg;
                    fromProtoMsg(message: _28.AttributeProtoMsg): _28.Attribute;
                    toProto(message: _28.Attribute): Uint8Array;
                    toProtoMsg(message: _28.Attribute): _28.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _28.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.GasInfo;
                    fromPartial(object: Partial<_28.GasInfo>): _28.GasInfo;
                    fromAmino(object: _28.GasInfoAmino): _28.GasInfo;
                    toAmino(message: _28.GasInfo): _28.GasInfoAmino;
                    fromAminoMsg(object: _28.GasInfoAminoMsg): _28.GasInfo;
                    toAminoMsg(message: _28.GasInfo): _28.GasInfoAminoMsg;
                    fromProtoMsg(message: _28.GasInfoProtoMsg): _28.GasInfo;
                    toProto(message: _28.GasInfo): Uint8Array;
                    toProtoMsg(message: _28.GasInfo): _28.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _28.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.Result;
                    fromPartial(object: Partial<_28.Result>): _28.Result;
                    fromAmino(object: _28.ResultAmino): _28.Result;
                    toAmino(message: _28.Result): _28.ResultAmino;
                    fromAminoMsg(object: _28.ResultAminoMsg): _28.Result;
                    toAminoMsg(message: _28.Result): _28.ResultAminoMsg;
                    fromProtoMsg(message: _28.ResultProtoMsg): _28.Result;
                    toProto(message: _28.Result): Uint8Array;
                    toProtoMsg(message: _28.Result): _28.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _28.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.SimulationResponse;
                    fromPartial(object: Partial<_28.SimulationResponse>): _28.SimulationResponse;
                    fromAmino(object: _28.SimulationResponseAmino): _28.SimulationResponse;
                    toAmino(message: _28.SimulationResponse): _28.SimulationResponseAmino;
                    fromAminoMsg(object: _28.SimulationResponseAminoMsg): _28.SimulationResponse;
                    toAminoMsg(message: _28.SimulationResponse): _28.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _28.SimulationResponseProtoMsg): _28.SimulationResponse;
                    toProto(message: _28.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _28.SimulationResponse): _28.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _28.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.MsgData;
                    fromPartial(object: Partial<_28.MsgData>): _28.MsgData;
                    fromAmino(object: _28.MsgDataAmino): _28.MsgData;
                    toAmino(message: _28.MsgData): _28.MsgDataAmino;
                    fromAminoMsg(object: _28.MsgDataAminoMsg): _28.MsgData;
                    toAminoMsg(message: _28.MsgData): _28.MsgDataAminoMsg;
                    fromProtoMsg(message: _28.MsgDataProtoMsg): _28.MsgData;
                    toProto(message: _28.MsgData): Uint8Array;
                    toProtoMsg(message: _28.MsgData): _28.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _28.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.TxMsgData;
                    fromPartial(object: Partial<_28.TxMsgData>): _28.TxMsgData;
                    fromAmino(object: _28.TxMsgDataAmino): _28.TxMsgData;
                    toAmino(message: _28.TxMsgData): _28.TxMsgDataAmino;
                    fromAminoMsg(object: _28.TxMsgDataAminoMsg): _28.TxMsgData;
                    toAminoMsg(message: _28.TxMsgData): _28.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _28.TxMsgDataProtoMsg): _28.TxMsgData;
                    toProto(message: _28.TxMsgData): Uint8Array;
                    toProtoMsg(message: _28.TxMsgData): _28.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _28.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.SearchTxsResult;
                    fromPartial(object: Partial<_28.SearchTxsResult>): _28.SearchTxsResult;
                    fromAmino(object: _28.SearchTxsResultAmino): _28.SearchTxsResult;
                    toAmino(message: _28.SearchTxsResult): _28.SearchTxsResultAmino;
                    fromAminoMsg(object: _28.SearchTxsResultAminoMsg): _28.SearchTxsResult;
                    toAminoMsg(message: _28.SearchTxsResult): _28.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _28.SearchTxsResultProtoMsg): _28.SearchTxsResult;
                    toProto(message: _28.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _28.SearchTxsResult): _28.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _29.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Pairs;
                    fromPartial(object: Partial<_29.Pairs>): _29.Pairs;
                    fromAmino(object: _29.PairsAmino): _29.Pairs;
                    toAmino(message: _29.Pairs): _29.PairsAmino;
                    fromAminoMsg(object: _29.PairsAminoMsg): _29.Pairs;
                    toAminoMsg(message: _29.Pairs): _29.PairsAminoMsg;
                    fromProtoMsg(message: _29.PairsProtoMsg): _29.Pairs;
                    toProto(message: _29.Pairs): Uint8Array;
                    toProtoMsg(message: _29.Pairs): _29.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _29.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.Pair;
                    fromPartial(object: Partial<_29.Pair>): _29.Pair;
                    fromAmino(object: _29.PairAmino): _29.Pair;
                    toAmino(message: _29.Pair): _29.PairAmino;
                    fromAminoMsg(object: _29.PairAminoMsg): _29.Pair;
                    toAminoMsg(message: _29.Pair): _29.PairAminoMsg;
                    fromProtoMsg(message: _29.PairProtoMsg): _29.Pair;
                    toProto(message: _29.Pair): Uint8Array;
                    toProtoMsg(message: _29.Pair): _29.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _210.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                };
                LCDQueryClient: typeof _189.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _30.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _30.ConfigRequest;
                    fromPartial(_: Partial<_30.ConfigRequest>): _30.ConfigRequest;
                    fromAmino(_: _30.ConfigRequestAmino): _30.ConfigRequest;
                    toAmino(_: _30.ConfigRequest): _30.ConfigRequestAmino;
                    fromAminoMsg(object: _30.ConfigRequestAminoMsg): _30.ConfigRequest;
                    toAminoMsg(message: _30.ConfigRequest): _30.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _30.ConfigRequestProtoMsg): _30.ConfigRequest;
                    toProto(message: _30.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _30.ConfigRequest): _30.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _30.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.ConfigResponse;
                    fromPartial(object: Partial<_30.ConfigResponse>): _30.ConfigResponse;
                    fromAmino(object: _30.ConfigResponseAmino): _30.ConfigResponse;
                    toAmino(message: _30.ConfigResponse): _30.ConfigResponseAmino;
                    fromAminoMsg(object: _30.ConfigResponseAminoMsg): _30.ConfigResponse;
                    toAminoMsg(message: _30.ConfigResponse): _30.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _30.ConfigResponseProtoMsg): _30.ConfigResponse;
                    toProto(message: _30.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _30.ConfigResponse): _30.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _31.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.PageRequest;
                    fromPartial(object: Partial<_31.PageRequest>): _31.PageRequest;
                    fromAmino(object: _31.PageRequestAmino): _31.PageRequest;
                    toAmino(message: _31.PageRequest): _31.PageRequestAmino;
                    fromAminoMsg(object: _31.PageRequestAminoMsg): _31.PageRequest;
                    toAminoMsg(message: _31.PageRequest): _31.PageRequestAminoMsg;
                    fromProtoMsg(message: _31.PageRequestProtoMsg): _31.PageRequest;
                    toProto(message: _31.PageRequest): Uint8Array;
                    toProtoMsg(message: _31.PageRequest): _31.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _31.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.PageResponse;
                    fromPartial(object: Partial<_31.PageResponse>): _31.PageResponse;
                    fromAmino(object: _31.PageResponseAmino): _31.PageResponse;
                    toAmino(message: _31.PageResponse): _31.PageResponseAmino;
                    fromAminoMsg(object: _31.PageResponseAminoMsg): _31.PageResponse;
                    toAminoMsg(message: _31.PageResponse): _31.PageResponseAminoMsg;
                    fromProtoMsg(message: _31.PageResponseProtoMsg): _31.PageResponse;
                    toProto(message: _31.PageResponse): Uint8Array;
                    toProtoMsg(message: _31.PageResponse): _31.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _32.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_32.ListAllInterfacesRequest>): _32.ListAllInterfacesRequest;
                    fromAmino(_: _32.ListAllInterfacesRequestAmino): _32.ListAllInterfacesRequest;
                    toAmino(_: _32.ListAllInterfacesRequest): _32.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _32.ListAllInterfacesRequestAminoMsg): _32.ListAllInterfacesRequest;
                    toAminoMsg(message: _32.ListAllInterfacesRequest): _32.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _32.ListAllInterfacesRequestProtoMsg): _32.ListAllInterfacesRequest;
                    toProto(message: _32.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _32.ListAllInterfacesRequest): _32.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _32.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_32.ListAllInterfacesResponse>): _32.ListAllInterfacesResponse;
                    fromAmino(object: _32.ListAllInterfacesResponseAmino): _32.ListAllInterfacesResponse;
                    toAmino(message: _32.ListAllInterfacesResponse): _32.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _32.ListAllInterfacesResponseAminoMsg): _32.ListAllInterfacesResponse;
                    toAminoMsg(message: _32.ListAllInterfacesResponse): _32.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _32.ListAllInterfacesResponseProtoMsg): _32.ListAllInterfacesResponse;
                    toProto(message: _32.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _32.ListAllInterfacesResponse): _32.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _32.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ListImplementationsRequest;
                    fromPartial(object: Partial<_32.ListImplementationsRequest>): _32.ListImplementationsRequest;
                    fromAmino(object: _32.ListImplementationsRequestAmino): _32.ListImplementationsRequest;
                    toAmino(message: _32.ListImplementationsRequest): _32.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _32.ListImplementationsRequestAminoMsg): _32.ListImplementationsRequest;
                    toAminoMsg(message: _32.ListImplementationsRequest): _32.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _32.ListImplementationsRequestProtoMsg): _32.ListImplementationsRequest;
                    toProto(message: _32.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _32.ListImplementationsRequest): _32.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _32.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ListImplementationsResponse;
                    fromPartial(object: Partial<_32.ListImplementationsResponse>): _32.ListImplementationsResponse;
                    fromAmino(object: _32.ListImplementationsResponseAmino): _32.ListImplementationsResponse;
                    toAmino(message: _32.ListImplementationsResponse): _32.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _32.ListImplementationsResponseAminoMsg): _32.ListImplementationsResponse;
                    toAminoMsg(message: _32.ListImplementationsResponse): _32.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _32.ListImplementationsResponseProtoMsg): _32.ListImplementationsResponse;
                    toProto(message: _32.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _32.ListImplementationsResponse): _32.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _33.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.AppDescriptor;
                    fromPartial(object: Partial<_33.AppDescriptor>): _33.AppDescriptor;
                    fromAmino(object: _33.AppDescriptorAmino): _33.AppDescriptor;
                    toAmino(message: _33.AppDescriptor): _33.AppDescriptorAmino;
                    fromAminoMsg(object: _33.AppDescriptorAminoMsg): _33.AppDescriptor;
                    toAminoMsg(message: _33.AppDescriptor): _33.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _33.AppDescriptorProtoMsg): _33.AppDescriptor;
                    toProto(message: _33.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _33.AppDescriptor): _33.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _33.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.TxDescriptor;
                    fromPartial(object: Partial<_33.TxDescriptor>): _33.TxDescriptor;
                    fromAmino(object: _33.TxDescriptorAmino): _33.TxDescriptor;
                    toAmino(message: _33.TxDescriptor): _33.TxDescriptorAmino;
                    fromAminoMsg(object: _33.TxDescriptorAminoMsg): _33.TxDescriptor;
                    toAminoMsg(message: _33.TxDescriptor): _33.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _33.TxDescriptorProtoMsg): _33.TxDescriptor;
                    toProto(message: _33.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _33.TxDescriptor): _33.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _33.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.AuthnDescriptor;
                    fromPartial(object: Partial<_33.AuthnDescriptor>): _33.AuthnDescriptor;
                    fromAmino(object: _33.AuthnDescriptorAmino): _33.AuthnDescriptor;
                    toAmino(message: _33.AuthnDescriptor): _33.AuthnDescriptorAmino;
                    fromAminoMsg(object: _33.AuthnDescriptorAminoMsg): _33.AuthnDescriptor;
                    toAminoMsg(message: _33.AuthnDescriptor): _33.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _33.AuthnDescriptorProtoMsg): _33.AuthnDescriptor;
                    toProto(message: _33.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _33.AuthnDescriptor): _33.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _33.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SigningModeDescriptor;
                    fromPartial(object: Partial<_33.SigningModeDescriptor>): _33.SigningModeDescriptor;
                    fromAmino(object: _33.SigningModeDescriptorAmino): _33.SigningModeDescriptor;
                    toAmino(message: _33.SigningModeDescriptor): _33.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _33.SigningModeDescriptorAminoMsg): _33.SigningModeDescriptor;
                    toAminoMsg(message: _33.SigningModeDescriptor): _33.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _33.SigningModeDescriptorProtoMsg): _33.SigningModeDescriptor;
                    toProto(message: _33.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _33.SigningModeDescriptor): _33.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _33.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ChainDescriptor;
                    fromPartial(object: Partial<_33.ChainDescriptor>): _33.ChainDescriptor;
                    fromAmino(object: _33.ChainDescriptorAmino): _33.ChainDescriptor;
                    toAmino(message: _33.ChainDescriptor): _33.ChainDescriptorAmino;
                    fromAminoMsg(object: _33.ChainDescriptorAminoMsg): _33.ChainDescriptor;
                    toAminoMsg(message: _33.ChainDescriptor): _33.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _33.ChainDescriptorProtoMsg): _33.ChainDescriptor;
                    toProto(message: _33.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _33.ChainDescriptor): _33.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _33.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.CodecDescriptor;
                    fromPartial(object: Partial<_33.CodecDescriptor>): _33.CodecDescriptor;
                    fromAmino(object: _33.CodecDescriptorAmino): _33.CodecDescriptor;
                    toAmino(message: _33.CodecDescriptor): _33.CodecDescriptorAmino;
                    fromAminoMsg(object: _33.CodecDescriptorAminoMsg): _33.CodecDescriptor;
                    toAminoMsg(message: _33.CodecDescriptor): _33.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _33.CodecDescriptorProtoMsg): _33.CodecDescriptor;
                    toProto(message: _33.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _33.CodecDescriptor): _33.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _33.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.InterfaceDescriptor;
                    fromPartial(object: Partial<_33.InterfaceDescriptor>): _33.InterfaceDescriptor;
                    fromAmino(object: _33.InterfaceDescriptorAmino): _33.InterfaceDescriptor;
                    toAmino(message: _33.InterfaceDescriptor): _33.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _33.InterfaceDescriptorAminoMsg): _33.InterfaceDescriptor;
                    toAminoMsg(message: _33.InterfaceDescriptor): _33.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _33.InterfaceDescriptorProtoMsg): _33.InterfaceDescriptor;
                    toProto(message: _33.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _33.InterfaceDescriptor): _33.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _33.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_33.InterfaceImplementerDescriptor>): _33.InterfaceImplementerDescriptor;
                    fromAmino(object: _33.InterfaceImplementerDescriptorAmino): _33.InterfaceImplementerDescriptor;
                    toAmino(message: _33.InterfaceImplementerDescriptor): _33.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _33.InterfaceImplementerDescriptorAminoMsg): _33.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _33.InterfaceImplementerDescriptor): _33.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _33.InterfaceImplementerDescriptorProtoMsg): _33.InterfaceImplementerDescriptor;
                    toProto(message: _33.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _33.InterfaceImplementerDescriptor): _33.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _33.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_33.InterfaceAcceptingMessageDescriptor>): _33.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _33.InterfaceAcceptingMessageDescriptorAmino): _33.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _33.InterfaceAcceptingMessageDescriptor): _33.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _33.InterfaceAcceptingMessageDescriptorAminoMsg): _33.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _33.InterfaceAcceptingMessageDescriptor): _33.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _33.InterfaceAcceptingMessageDescriptorProtoMsg): _33.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _33.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _33.InterfaceAcceptingMessageDescriptor): _33.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _33.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ConfigurationDescriptor;
                    fromPartial(object: Partial<_33.ConfigurationDescriptor>): _33.ConfigurationDescriptor;
                    fromAmino(object: _33.ConfigurationDescriptorAmino): _33.ConfigurationDescriptor;
                    toAmino(message: _33.ConfigurationDescriptor): _33.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _33.ConfigurationDescriptorAminoMsg): _33.ConfigurationDescriptor;
                    toAminoMsg(message: _33.ConfigurationDescriptor): _33.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _33.ConfigurationDescriptorProtoMsg): _33.ConfigurationDescriptor;
                    toProto(message: _33.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _33.ConfigurationDescriptor): _33.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _33.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.MsgDescriptor;
                    fromPartial(object: Partial<_33.MsgDescriptor>): _33.MsgDescriptor;
                    fromAmino(object: _33.MsgDescriptorAmino): _33.MsgDescriptor;
                    toAmino(message: _33.MsgDescriptor): _33.MsgDescriptorAmino;
                    fromAminoMsg(object: _33.MsgDescriptorAminoMsg): _33.MsgDescriptor;
                    toAminoMsg(message: _33.MsgDescriptor): _33.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _33.MsgDescriptorProtoMsg): _33.MsgDescriptor;
                    toProto(message: _33.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _33.MsgDescriptor): _33.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_33.GetAuthnDescriptorRequest>): _33.GetAuthnDescriptorRequest;
                    fromAmino(_: _33.GetAuthnDescriptorRequestAmino): _33.GetAuthnDescriptorRequest;
                    toAmino(_: _33.GetAuthnDescriptorRequest): _33.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetAuthnDescriptorRequestAminoMsg): _33.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _33.GetAuthnDescriptorRequest): _33.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetAuthnDescriptorRequestProtoMsg): _33.GetAuthnDescriptorRequest;
                    toProto(message: _33.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetAuthnDescriptorRequest): _33.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_33.GetAuthnDescriptorResponse>): _33.GetAuthnDescriptorResponse;
                    fromAmino(object: _33.GetAuthnDescriptorResponseAmino): _33.GetAuthnDescriptorResponse;
                    toAmino(message: _33.GetAuthnDescriptorResponse): _33.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetAuthnDescriptorResponseAminoMsg): _33.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _33.GetAuthnDescriptorResponse): _33.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetAuthnDescriptorResponseProtoMsg): _33.GetAuthnDescriptorResponse;
                    toProto(message: _33.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetAuthnDescriptorResponse): _33.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_33.GetChainDescriptorRequest>): _33.GetChainDescriptorRequest;
                    fromAmino(_: _33.GetChainDescriptorRequestAmino): _33.GetChainDescriptorRequest;
                    toAmino(_: _33.GetChainDescriptorRequest): _33.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetChainDescriptorRequestAminoMsg): _33.GetChainDescriptorRequest;
                    toAminoMsg(message: _33.GetChainDescriptorRequest): _33.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetChainDescriptorRequestProtoMsg): _33.GetChainDescriptorRequest;
                    toProto(message: _33.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetChainDescriptorRequest): _33.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_33.GetChainDescriptorResponse>): _33.GetChainDescriptorResponse;
                    fromAmino(object: _33.GetChainDescriptorResponseAmino): _33.GetChainDescriptorResponse;
                    toAmino(message: _33.GetChainDescriptorResponse): _33.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetChainDescriptorResponseAminoMsg): _33.GetChainDescriptorResponse;
                    toAminoMsg(message: _33.GetChainDescriptorResponse): _33.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetChainDescriptorResponseProtoMsg): _33.GetChainDescriptorResponse;
                    toProto(message: _33.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetChainDescriptorResponse): _33.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_33.GetCodecDescriptorRequest>): _33.GetCodecDescriptorRequest;
                    fromAmino(_: _33.GetCodecDescriptorRequestAmino): _33.GetCodecDescriptorRequest;
                    toAmino(_: _33.GetCodecDescriptorRequest): _33.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetCodecDescriptorRequestAminoMsg): _33.GetCodecDescriptorRequest;
                    toAminoMsg(message: _33.GetCodecDescriptorRequest): _33.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetCodecDescriptorRequestProtoMsg): _33.GetCodecDescriptorRequest;
                    toProto(message: _33.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetCodecDescriptorRequest): _33.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_33.GetCodecDescriptorResponse>): _33.GetCodecDescriptorResponse;
                    fromAmino(object: _33.GetCodecDescriptorResponseAmino): _33.GetCodecDescriptorResponse;
                    toAmino(message: _33.GetCodecDescriptorResponse): _33.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetCodecDescriptorResponseAminoMsg): _33.GetCodecDescriptorResponse;
                    toAminoMsg(message: _33.GetCodecDescriptorResponse): _33.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetCodecDescriptorResponseProtoMsg): _33.GetCodecDescriptorResponse;
                    toProto(message: _33.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetCodecDescriptorResponse): _33.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_33.GetConfigurationDescriptorRequest>): _33.GetConfigurationDescriptorRequest;
                    fromAmino(_: _33.GetConfigurationDescriptorRequestAmino): _33.GetConfigurationDescriptorRequest;
                    toAmino(_: _33.GetConfigurationDescriptorRequest): _33.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetConfigurationDescriptorRequestAminoMsg): _33.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _33.GetConfigurationDescriptorRequest): _33.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetConfigurationDescriptorRequestProtoMsg): _33.GetConfigurationDescriptorRequest;
                    toProto(message: _33.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetConfigurationDescriptorRequest): _33.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_33.GetConfigurationDescriptorResponse>): _33.GetConfigurationDescriptorResponse;
                    fromAmino(object: _33.GetConfigurationDescriptorResponseAmino): _33.GetConfigurationDescriptorResponse;
                    toAmino(message: _33.GetConfigurationDescriptorResponse): _33.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetConfigurationDescriptorResponseAminoMsg): _33.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _33.GetConfigurationDescriptorResponse): _33.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetConfigurationDescriptorResponseProtoMsg): _33.GetConfigurationDescriptorResponse;
                    toProto(message: _33.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetConfigurationDescriptorResponse): _33.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_33.GetQueryServicesDescriptorRequest>): _33.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _33.GetQueryServicesDescriptorRequestAmino): _33.GetQueryServicesDescriptorRequest;
                    toAmino(_: _33.GetQueryServicesDescriptorRequest): _33.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetQueryServicesDescriptorRequestAminoMsg): _33.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _33.GetQueryServicesDescriptorRequest): _33.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetQueryServicesDescriptorRequestProtoMsg): _33.GetQueryServicesDescriptorRequest;
                    toProto(message: _33.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetQueryServicesDescriptorRequest): _33.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_33.GetQueryServicesDescriptorResponse>): _33.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _33.GetQueryServicesDescriptorResponseAmino): _33.GetQueryServicesDescriptorResponse;
                    toAmino(message: _33.GetQueryServicesDescriptorResponse): _33.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetQueryServicesDescriptorResponseAminoMsg): _33.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _33.GetQueryServicesDescriptorResponse): _33.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetQueryServicesDescriptorResponseProtoMsg): _33.GetQueryServicesDescriptorResponse;
                    toProto(message: _33.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetQueryServicesDescriptorResponse): _33.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _33.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_33.GetTxDescriptorRequest>): _33.GetTxDescriptorRequest;
                    fromAmino(_: _33.GetTxDescriptorRequestAmino): _33.GetTxDescriptorRequest;
                    toAmino(_: _33.GetTxDescriptorRequest): _33.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _33.GetTxDescriptorRequestAminoMsg): _33.GetTxDescriptorRequest;
                    toAminoMsg(message: _33.GetTxDescriptorRequest): _33.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _33.GetTxDescriptorRequestProtoMsg): _33.GetTxDescriptorRequest;
                    toProto(message: _33.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _33.GetTxDescriptorRequest): _33.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _33.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_33.GetTxDescriptorResponse>): _33.GetTxDescriptorResponse;
                    fromAmino(object: _33.GetTxDescriptorResponseAmino): _33.GetTxDescriptorResponse;
                    toAmino(message: _33.GetTxDescriptorResponse): _33.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _33.GetTxDescriptorResponseAminoMsg): _33.GetTxDescriptorResponse;
                    toAminoMsg(message: _33.GetTxDescriptorResponse): _33.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _33.GetTxDescriptorResponseProtoMsg): _33.GetTxDescriptorResponse;
                    toProto(message: _33.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _33.GetTxDescriptorResponse): _33.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _33.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.QueryServicesDescriptor;
                    fromPartial(object: Partial<_33.QueryServicesDescriptor>): _33.QueryServicesDescriptor;
                    fromAmino(object: _33.QueryServicesDescriptorAmino): _33.QueryServicesDescriptor;
                    toAmino(message: _33.QueryServicesDescriptor): _33.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _33.QueryServicesDescriptorAminoMsg): _33.QueryServicesDescriptor;
                    toAminoMsg(message: _33.QueryServicesDescriptor): _33.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _33.QueryServicesDescriptorProtoMsg): _33.QueryServicesDescriptor;
                    toProto(message: _33.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _33.QueryServicesDescriptor): _33.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _33.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.QueryServiceDescriptor;
                    fromPartial(object: Partial<_33.QueryServiceDescriptor>): _33.QueryServiceDescriptor;
                    fromAmino(object: _33.QueryServiceDescriptorAmino): _33.QueryServiceDescriptor;
                    toAmino(message: _33.QueryServiceDescriptor): _33.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _33.QueryServiceDescriptorAminoMsg): _33.QueryServiceDescriptor;
                    toAminoMsg(message: _33.QueryServiceDescriptor): _33.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _33.QueryServiceDescriptorProtoMsg): _33.QueryServiceDescriptor;
                    toProto(message: _33.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _33.QueryServiceDescriptor): _33.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _33.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.QueryMethodDescriptor;
                    fromPartial(object: Partial<_33.QueryMethodDescriptor>): _33.QueryMethodDescriptor;
                    fromAmino(object: _33.QueryMethodDescriptorAmino): _33.QueryMethodDescriptor;
                    toAmino(message: _33.QueryMethodDescriptor): _33.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _33.QueryMethodDescriptorAminoMsg): _33.QueryMethodDescriptor;
                    toAminoMsg(message: _33.QueryMethodDescriptor): _33.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _33.QueryMethodDescriptorProtoMsg): _33.QueryMethodDescriptor;
                    toProto(message: _33.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _33.QueryMethodDescriptor): _33.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _34.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Snapshot;
                    fromPartial(object: Partial<_34.Snapshot>): _34.Snapshot;
                    fromAmino(object: _34.SnapshotAmino): _34.Snapshot;
                    toAmino(message: _34.Snapshot): _34.SnapshotAmino;
                    fromAminoMsg(object: _34.SnapshotAminoMsg): _34.Snapshot;
                    toAminoMsg(message: _34.Snapshot): _34.SnapshotAminoMsg;
                    fromProtoMsg(message: _34.SnapshotProtoMsg): _34.Snapshot;
                    toProto(message: _34.Snapshot): Uint8Array;
                    toProtoMsg(message: _34.Snapshot): _34.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _34.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Metadata;
                    fromPartial(object: Partial<_34.Metadata>): _34.Metadata;
                    fromAmino(object: _34.MetadataAmino): _34.Metadata;
                    toAmino(message: _34.Metadata): _34.MetadataAmino;
                    fromAminoMsg(object: _34.MetadataAminoMsg): _34.Metadata;
                    toAminoMsg(message: _34.Metadata): _34.MetadataAminoMsg;
                    fromProtoMsg(message: _34.MetadataProtoMsg): _34.Metadata;
                    toProto(message: _34.Metadata): Uint8Array;
                    toProtoMsg(message: _34.Metadata): _34.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _34.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotItem;
                    fromPartial(object: Partial<_34.SnapshotItem>): _34.SnapshotItem;
                    fromAmino(object: _34.SnapshotItemAmino): _34.SnapshotItem;
                    toAmino(message: _34.SnapshotItem): _34.SnapshotItemAmino;
                    fromAminoMsg(object: _34.SnapshotItemAminoMsg): _34.SnapshotItem;
                    toAminoMsg(message: _34.SnapshotItem): _34.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _34.SnapshotItemProtoMsg): _34.SnapshotItem;
                    toProto(message: _34.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _34.SnapshotItem): _34.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _34.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotStoreItem;
                    fromPartial(object: Partial<_34.SnapshotStoreItem>): _34.SnapshotStoreItem;
                    fromAmino(object: _34.SnapshotStoreItemAmino): _34.SnapshotStoreItem;
                    toAmino(message: _34.SnapshotStoreItem): _34.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _34.SnapshotStoreItemAminoMsg): _34.SnapshotStoreItem;
                    toAminoMsg(message: _34.SnapshotStoreItem): _34.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _34.SnapshotStoreItemProtoMsg): _34.SnapshotStoreItem;
                    toProto(message: _34.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _34.SnapshotStoreItem): _34.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _34.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotIAVLItem;
                    fromPartial(object: Partial<_34.SnapshotIAVLItem>): _34.SnapshotIAVLItem;
                    fromAmino(object: _34.SnapshotIAVLItemAmino): _34.SnapshotIAVLItem;
                    toAmino(message: _34.SnapshotIAVLItem): _34.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _34.SnapshotIAVLItemAminoMsg): _34.SnapshotIAVLItem;
                    toAminoMsg(message: _34.SnapshotIAVLItem): _34.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _34.SnapshotIAVLItemProtoMsg): _34.SnapshotIAVLItem;
                    toProto(message: _34.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _34.SnapshotIAVLItem): _34.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _34.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_34.SnapshotExtensionMeta>): _34.SnapshotExtensionMeta;
                    fromAmino(object: _34.SnapshotExtensionMetaAmino): _34.SnapshotExtensionMeta;
                    toAmino(message: _34.SnapshotExtensionMeta): _34.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _34.SnapshotExtensionMetaAminoMsg): _34.SnapshotExtensionMeta;
                    toAminoMsg(message: _34.SnapshotExtensionMeta): _34.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _34.SnapshotExtensionMetaProtoMsg): _34.SnapshotExtensionMeta;
                    toProto(message: _34.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _34.SnapshotExtensionMeta): _34.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _34.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_34.SnapshotExtensionPayload>): _34.SnapshotExtensionPayload;
                    fromAmino(object: _34.SnapshotExtensionPayloadAmino): _34.SnapshotExtensionPayload;
                    toAmino(message: _34.SnapshotExtensionPayload): _34.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _34.SnapshotExtensionPayloadAminoMsg): _34.SnapshotExtensionPayload;
                    toAminoMsg(message: _34.SnapshotExtensionPayload): _34.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _34.SnapshotExtensionPayloadProtoMsg): _34.SnapshotExtensionPayload;
                    toProto(message: _34.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _34.SnapshotExtensionPayload): _34.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _34.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotKVItem;
                    fromPartial(object: Partial<_34.SnapshotKVItem>): _34.SnapshotKVItem;
                    fromAmino(object: _34.SnapshotKVItemAmino): _34.SnapshotKVItem;
                    toAmino(message: _34.SnapshotKVItem): _34.SnapshotKVItemAmino;
                    fromAminoMsg(object: _34.SnapshotKVItemAminoMsg): _34.SnapshotKVItem;
                    toAminoMsg(message: _34.SnapshotKVItem): _34.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _34.SnapshotKVItemProtoMsg): _34.SnapshotKVItem;
                    toProto(message: _34.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _34.SnapshotKVItem): _34.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _34.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SnapshotSchema;
                    fromPartial(object: Partial<_34.SnapshotSchema>): _34.SnapshotSchema;
                    fromAmino(object: _34.SnapshotSchemaAmino): _34.SnapshotSchema;
                    toAmino(message: _34.SnapshotSchema): _34.SnapshotSchemaAmino;
                    fromAminoMsg(object: _34.SnapshotSchemaAminoMsg): _34.SnapshotSchema;
                    toAminoMsg(message: _34.SnapshotSchema): _34.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _34.SnapshotSchemaProtoMsg): _34.SnapshotSchema;
                    toProto(message: _34.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _34.SnapshotSchema): _34.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _36.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.StoreKVPair;
                    fromPartial(object: Partial<_36.StoreKVPair>): _36.StoreKVPair;
                    fromAmino(object: _36.StoreKVPairAmino): _36.StoreKVPair;
                    toAmino(message: _36.StoreKVPair): _36.StoreKVPairAmino;
                    fromAminoMsg(object: _36.StoreKVPairAminoMsg): _36.StoreKVPair;
                    toAminoMsg(message: _36.StoreKVPair): _36.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _36.StoreKVPairProtoMsg): _36.StoreKVPair;
                    toProto(message: _36.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _36.StoreKVPair): _36.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _36.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.BlockMetadata;
                    fromPartial(object: Partial<_36.BlockMetadata>): _36.BlockMetadata;
                    fromAmino(object: _36.BlockMetadataAmino): _36.BlockMetadata;
                    toAmino(message: _36.BlockMetadata): _36.BlockMetadataAmino;
                    fromAminoMsg(object: _36.BlockMetadataAminoMsg): _36.BlockMetadata;
                    toAminoMsg(message: _36.BlockMetadata): _36.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _36.BlockMetadataProtoMsg): _36.BlockMetadata;
                    toProto(message: _36.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _36.BlockMetadata): _36.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _36.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_36.BlockMetadata_DeliverTx>): _36.BlockMetadata_DeliverTx;
                    fromAmino(object: _36.BlockMetadata_DeliverTxAmino): _36.BlockMetadata_DeliverTx;
                    toAmino(message: _36.BlockMetadata_DeliverTx): _36.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _36.BlockMetadata_DeliverTxAminoMsg): _36.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _36.BlockMetadata_DeliverTx): _36.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _36.BlockMetadata_DeliverTxProtoMsg): _36.BlockMetadata_DeliverTx;
                    toProto(message: _36.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _36.BlockMetadata_DeliverTx): _36.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _35.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.CommitInfo;
                    fromPartial(object: Partial<_35.CommitInfo>): _35.CommitInfo;
                    fromAmino(object: _35.CommitInfoAmino): _35.CommitInfo;
                    toAmino(message: _35.CommitInfo): _35.CommitInfoAmino;
                    fromAminoMsg(object: _35.CommitInfoAminoMsg): _35.CommitInfo;
                    toAminoMsg(message: _35.CommitInfo): _35.CommitInfoAminoMsg;
                    fromProtoMsg(message: _35.CommitInfoProtoMsg): _35.CommitInfo;
                    toProto(message: _35.CommitInfo): Uint8Array;
                    toProtoMsg(message: _35.CommitInfo): _35.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _35.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.StoreInfo;
                    fromPartial(object: Partial<_35.StoreInfo>): _35.StoreInfo;
                    fromAmino(object: _35.StoreInfoAmino): _35.StoreInfo;
                    toAmino(message: _35.StoreInfo): _35.StoreInfoAmino;
                    fromAminoMsg(object: _35.StoreInfoAminoMsg): _35.StoreInfo;
                    toAminoMsg(message: _35.StoreInfo): _35.StoreInfoAminoMsg;
                    fromProtoMsg(message: _35.StoreInfoProtoMsg): _35.StoreInfo;
                    toProto(message: _35.StoreInfo): Uint8Array;
                    toProtoMsg(message: _35.StoreInfo): _35.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _35.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.CommitID;
                    fromPartial(object: Partial<_35.CommitID>): _35.CommitID;
                    fromAmino(object: _35.CommitIDAmino): _35.CommitID;
                    toAmino(message: _35.CommitID): _35.CommitIDAmino;
                    fromAminoMsg(object: _35.CommitIDAminoMsg): _35.CommitID;
                    toAminoMsg(message: _35.CommitID): _35.CommitIDAminoMsg;
                    fromProtoMsg(message: _35.CommitIDProtoMsg): _35.CommitID;
                    toProto(message: _35.CommitID): Uint8Array;
                    toProtoMsg(message: _35.CommitID): _35.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _211.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                    getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                    getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                    getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _37.ABCIQueryRequest): Promise<_37.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _190.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _38.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Block;
                    fromPartial(object: Partial<_38.Block>): _38.Block;
                    fromAmino(object: _38.BlockAmino): _38.Block;
                    toAmino(message: _38.Block): _38.BlockAmino;
                    fromAminoMsg(object: _38.BlockAminoMsg): _38.Block;
                    toAminoMsg(message: _38.Block): _38.BlockAminoMsg;
                    fromProtoMsg(message: _38.BlockProtoMsg): _38.Block;
                    toProto(message: _38.Block): Uint8Array;
                    toProtoMsg(message: _38.Block): _38.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _38.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.Header;
                    fromPartial(object: Partial<_38.Header>): _38.Header;
                    fromAmino(object: _38.HeaderAmino): _38.Header;
                    toAmino(message: _38.Header): _38.HeaderAmino;
                    fromAminoMsg(object: _38.HeaderAminoMsg): _38.Header;
                    toAminoMsg(message: _38.Header): _38.HeaderAminoMsg;
                    fromProtoMsg(message: _38.HeaderProtoMsg): _38.Header;
                    toProto(message: _38.Header): Uint8Array;
                    toProtoMsg(message: _38.Header): _38.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _37.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightRequest>): _37.GetValidatorSetByHeightRequest;
                    fromAmino(object: _37.GetValidatorSetByHeightRequestAmino): _37.GetValidatorSetByHeightRequest;
                    toAmino(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _37.GetValidatorSetByHeightRequestAminoMsg): _37.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _37.GetValidatorSetByHeightRequestProtoMsg): _37.GetValidatorSetByHeightRequest;
                    toProto(message: _37.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _37.GetValidatorSetByHeightRequest): _37.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _37.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_37.GetValidatorSetByHeightResponse>): _37.GetValidatorSetByHeightResponse;
                    fromAmino(object: _37.GetValidatorSetByHeightResponseAmino): _37.GetValidatorSetByHeightResponse;
                    toAmino(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _37.GetValidatorSetByHeightResponseAminoMsg): _37.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _37.GetValidatorSetByHeightResponseProtoMsg): _37.GetValidatorSetByHeightResponse;
                    toProto(message: _37.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _37.GetValidatorSetByHeightResponse): _37.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _37.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetRequest>): _37.GetLatestValidatorSetRequest;
                    fromAmino(object: _37.GetLatestValidatorSetRequestAmino): _37.GetLatestValidatorSetRequest;
                    toAmino(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _37.GetLatestValidatorSetRequestAminoMsg): _37.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _37.GetLatestValidatorSetRequestProtoMsg): _37.GetLatestValidatorSetRequest;
                    toProto(message: _37.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _37.GetLatestValidatorSetRequest): _37.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _37.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_37.GetLatestValidatorSetResponse>): _37.GetLatestValidatorSetResponse;
                    fromAmino(object: _37.GetLatestValidatorSetResponseAmino): _37.GetLatestValidatorSetResponse;
                    toAmino(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _37.GetLatestValidatorSetResponseAminoMsg): _37.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _37.GetLatestValidatorSetResponseProtoMsg): _37.GetLatestValidatorSetResponse;
                    toProto(message: _37.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _37.GetLatestValidatorSetResponse): _37.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _37.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Validator;
                    fromPartial(object: Partial<_37.Validator>): _37.Validator;
                    fromAmino(object: _37.ValidatorAmino): _37.Validator;
                    toAmino(message: _37.Validator): _37.ValidatorAmino;
                    fromAminoMsg(object: _37.ValidatorAminoMsg): _37.Validator;
                    toAminoMsg(message: _37.Validator): _37.ValidatorAminoMsg;
                    fromProtoMsg(message: _37.ValidatorProtoMsg): _37.Validator;
                    toProto(message: _37.Validator): Uint8Array;
                    toProtoMsg(message: _37.Validator): _37.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _37.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_37.GetBlockByHeightRequest>): _37.GetBlockByHeightRequest;
                    fromAmino(object: _37.GetBlockByHeightRequestAmino): _37.GetBlockByHeightRequest;
                    toAmino(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _37.GetBlockByHeightRequestAminoMsg): _37.GetBlockByHeightRequest;
                    toAminoMsg(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _37.GetBlockByHeightRequestProtoMsg): _37.GetBlockByHeightRequest;
                    toProto(message: _37.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _37.GetBlockByHeightRequest): _37.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _37.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_37.GetBlockByHeightResponse>): _37.GetBlockByHeightResponse;
                    fromAmino(object: _37.GetBlockByHeightResponseAmino): _37.GetBlockByHeightResponse;
                    toAmino(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _37.GetBlockByHeightResponseAminoMsg): _37.GetBlockByHeightResponse;
                    toAminoMsg(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _37.GetBlockByHeightResponseProtoMsg): _37.GetBlockByHeightResponse;
                    toProto(message: _37.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _37.GetBlockByHeightResponse): _37.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _37.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetLatestBlockRequest;
                    fromPartial(_: Partial<_37.GetLatestBlockRequest>): _37.GetLatestBlockRequest;
                    fromAmino(_: _37.GetLatestBlockRequestAmino): _37.GetLatestBlockRequest;
                    toAmino(_: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _37.GetLatestBlockRequestAminoMsg): _37.GetLatestBlockRequest;
                    toAminoMsg(message: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _37.GetLatestBlockRequestProtoMsg): _37.GetLatestBlockRequest;
                    toProto(message: _37.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _37.GetLatestBlockRequest): _37.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _37.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetLatestBlockResponse;
                    fromPartial(object: Partial<_37.GetLatestBlockResponse>): _37.GetLatestBlockResponse;
                    fromAmino(object: _37.GetLatestBlockResponseAmino): _37.GetLatestBlockResponse;
                    toAmino(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _37.GetLatestBlockResponseAminoMsg): _37.GetLatestBlockResponse;
                    toAminoMsg(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _37.GetLatestBlockResponseProtoMsg): _37.GetLatestBlockResponse;
                    toProto(message: _37.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _37.GetLatestBlockResponse): _37.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _37.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetSyncingRequest;
                    fromPartial(_: Partial<_37.GetSyncingRequest>): _37.GetSyncingRequest;
                    fromAmino(_: _37.GetSyncingRequestAmino): _37.GetSyncingRequest;
                    toAmino(_: _37.GetSyncingRequest): _37.GetSyncingRequestAmino;
                    fromAminoMsg(object: _37.GetSyncingRequestAminoMsg): _37.GetSyncingRequest;
                    toAminoMsg(message: _37.GetSyncingRequest): _37.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _37.GetSyncingRequestProtoMsg): _37.GetSyncingRequest;
                    toProto(message: _37.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _37.GetSyncingRequest): _37.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _37.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetSyncingResponse;
                    fromPartial(object: Partial<_37.GetSyncingResponse>): _37.GetSyncingResponse;
                    fromAmino(object: _37.GetSyncingResponseAmino): _37.GetSyncingResponse;
                    toAmino(message: _37.GetSyncingResponse): _37.GetSyncingResponseAmino;
                    fromAminoMsg(object: _37.GetSyncingResponseAminoMsg): _37.GetSyncingResponse;
                    toAminoMsg(message: _37.GetSyncingResponse): _37.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _37.GetSyncingResponseProtoMsg): _37.GetSyncingResponse;
                    toProto(message: _37.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _37.GetSyncingResponse): _37.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _37.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.GetNodeInfoRequest;
                    fromPartial(_: Partial<_37.GetNodeInfoRequest>): _37.GetNodeInfoRequest;
                    fromAmino(_: _37.GetNodeInfoRequestAmino): _37.GetNodeInfoRequest;
                    toAmino(_: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _37.GetNodeInfoRequestAminoMsg): _37.GetNodeInfoRequest;
                    toAminoMsg(message: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _37.GetNodeInfoRequestProtoMsg): _37.GetNodeInfoRequest;
                    toProto(message: _37.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _37.GetNodeInfoRequest): _37.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _37.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.GetNodeInfoResponse;
                    fromPartial(object: Partial<_37.GetNodeInfoResponse>): _37.GetNodeInfoResponse;
                    fromAmino(object: _37.GetNodeInfoResponseAmino): _37.GetNodeInfoResponse;
                    toAmino(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _37.GetNodeInfoResponseAminoMsg): _37.GetNodeInfoResponse;
                    toAminoMsg(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _37.GetNodeInfoResponseProtoMsg): _37.GetNodeInfoResponse;
                    toProto(message: _37.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _37.GetNodeInfoResponse): _37.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _37.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.VersionInfo;
                    fromPartial(object: Partial<_37.VersionInfo>): _37.VersionInfo;
                    fromAmino(object: _37.VersionInfoAmino): _37.VersionInfo;
                    toAmino(message: _37.VersionInfo): _37.VersionInfoAmino;
                    fromAminoMsg(object: _37.VersionInfoAminoMsg): _37.VersionInfo;
                    toAminoMsg(message: _37.VersionInfo): _37.VersionInfoAminoMsg;
                    fromProtoMsg(message: _37.VersionInfoProtoMsg): _37.VersionInfo;
                    toProto(message: _37.VersionInfo): Uint8Array;
                    toProtoMsg(message: _37.VersionInfo): _37.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _37.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Module;
                    fromPartial(object: Partial<_37.Module>): _37.Module;
                    fromAmino(object: _37.ModuleAmino): _37.Module;
                    toAmino(message: _37.Module): _37.ModuleAmino;
                    fromAminoMsg(object: _37.ModuleAminoMsg): _37.Module;
                    toAminoMsg(message: _37.Module): _37.ModuleAminoMsg;
                    fromProtoMsg(message: _37.ModuleProtoMsg): _37.Module;
                    toProto(message: _37.Module): Uint8Array;
                    toProtoMsg(message: _37.Module): _37.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _37.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ABCIQueryRequest;
                    fromPartial(object: Partial<_37.ABCIQueryRequest>): _37.ABCIQueryRequest;
                    fromAmino(object: _37.ABCIQueryRequestAmino): _37.ABCIQueryRequest;
                    toAmino(message: _37.ABCIQueryRequest): _37.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _37.ABCIQueryRequestAminoMsg): _37.ABCIQueryRequest;
                    toAminoMsg(message: _37.ABCIQueryRequest): _37.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _37.ABCIQueryRequestProtoMsg): _37.ABCIQueryRequest;
                    toProto(message: _37.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _37.ABCIQueryRequest): _37.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _37.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ABCIQueryResponse;
                    fromPartial(object: Partial<_37.ABCIQueryResponse>): _37.ABCIQueryResponse;
                    fromAmino(object: _37.ABCIQueryResponseAmino): _37.ABCIQueryResponse;
                    toAmino(message: _37.ABCIQueryResponse): _37.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _37.ABCIQueryResponseAminoMsg): _37.ABCIQueryResponse;
                    toAminoMsg(message: _37.ABCIQueryResponse): _37.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _37.ABCIQueryResponseProtoMsg): _37.ABCIQueryResponse;
                    toProto(message: _37.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _37.ABCIQueryResponse): _37.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _37.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ProofOp;
                    fromPartial(object: Partial<_37.ProofOp>): _37.ProofOp;
                    fromAmino(object: _37.ProofOpAmino): _37.ProofOp;
                    toAmino(message: _37.ProofOp): _37.ProofOpAmino;
                    fromAminoMsg(object: _37.ProofOpAminoMsg): _37.ProofOp;
                    toAminoMsg(message: _37.ProofOp): _37.ProofOpAminoMsg;
                    fromProtoMsg(message: _37.ProofOpProtoMsg): _37.ProofOp;
                    toProto(message: _37.ProofOp): Uint8Array;
                    toProtoMsg(message: _37.ProofOp): _37.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _37.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ProofOps;
                    fromPartial(object: Partial<_37.ProofOps>): _37.ProofOps;
                    fromAmino(object: _37.ProofOpsAmino): _37.ProofOps;
                    toAmino(message: _37.ProofOps): _37.ProofOpsAmino;
                    fromAminoMsg(object: _37.ProofOpsAminoMsg): _37.ProofOps;
                    toAminoMsg(message: _37.ProofOps): _37.ProofOpsAminoMsg;
                    fromProtoMsg(message: _37.ProofOpsProtoMsg): _37.ProofOps;
                    toProto(message: _37.ProofOps): Uint8Array;
                    toProtoMsg(message: _37.ProofOps): _37.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _39.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Coin;
                fromPartial(object: Partial<_39.Coin>): _39.Coin;
                fromAmino(object: _39.CoinAmino): _39.Coin;
                toAmino(message: _39.Coin): _39.CoinAmino;
                fromAminoMsg(object: _39.CoinAminoMsg): _39.Coin;
                toAminoMsg(message: _39.Coin): _39.CoinAminoMsg;
                fromProtoMsg(message: _39.CoinProtoMsg): _39.Coin;
                toProto(message: _39.Coin): Uint8Array;
                toProtoMsg(message: _39.Coin): _39.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _39.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DecCoin;
                fromPartial(object: Partial<_39.DecCoin>): _39.DecCoin;
                fromAmino(object: _39.DecCoinAmino): _39.DecCoin;
                toAmino(message: _39.DecCoin): _39.DecCoinAmino;
                fromAminoMsg(object: _39.DecCoinAminoMsg): _39.DecCoin;
                toAminoMsg(message: _39.DecCoin): _39.DecCoinAminoMsg;
                fromProtoMsg(message: _39.DecCoinProtoMsg): _39.DecCoin;
                toProto(message: _39.DecCoin): Uint8Array;
                toProtoMsg(message: _39.DecCoin): _39.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _39.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.IntProto;
                fromPartial(object: Partial<_39.IntProto>): _39.IntProto;
                fromAmino(object: _39.IntProtoAmino): _39.IntProto;
                toAmino(message: _39.IntProto): _39.IntProtoAmino;
                fromAminoMsg(object: _39.IntProtoAminoMsg): _39.IntProto;
                toAminoMsg(message: _39.IntProto): _39.IntProtoAminoMsg;
                fromProtoMsg(message: _39.IntProtoProtoMsg): _39.IntProto;
                toProto(message: _39.IntProto): Uint8Array;
                toProtoMsg(message: _39.IntProto): _39.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _39.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DecProto;
                fromPartial(object: Partial<_39.DecProto>): _39.DecProto;
                fromAmino(object: _39.DecProtoAmino): _39.DecProto;
                toAmino(message: _39.DecProto): _39.DecProtoAmino;
                fromAminoMsg(object: _39.DecProtoAminoMsg): _39.DecProto;
                toAminoMsg(message: _39.DecProto): _39.DecProtoAminoMsg;
                fromProtoMsg(message: _39.DecProtoProtoMsg): _39.DecProto;
                toProto(message: _39.DecProto): Uint8Array;
                toProtoMsg(message: _39.DecProto): _39.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _40.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Module;
                    fromPartial(object: Partial<_40.Module>): _40.Module;
                    fromAmino(object: _40.ModuleAmino): _40.Module;
                    toAmino(message: _40.Module): _40.ModuleAmino;
                    fromAminoMsg(object: _40.ModuleAminoMsg): _40.Module;
                    toAminoMsg(message: _40.Module): _40.ModuleAminoMsg;
                    fromProtoMsg(message: _40.ModuleProtoMsg): _40.Module;
                    toProto(message: _40.Module): Uint8Array;
                    toProtoMsg(message: _40.Module): _40.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _42.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.GenesisOwners;
                fromPartial(object: Partial<_42.GenesisOwners>): _42.GenesisOwners;
                fromAmino(object: _42.GenesisOwnersAmino): _42.GenesisOwners;
                toAmino(message: _42.GenesisOwners): _42.GenesisOwnersAmino;
                fromAminoMsg(object: _42.GenesisOwnersAminoMsg): _42.GenesisOwners;
                toAminoMsg(message: _42.GenesisOwners): _42.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _42.GenesisOwnersProtoMsg): _42.GenesisOwners;
                toProto(message: _42.GenesisOwners): Uint8Array;
                toProtoMsg(message: _42.GenesisOwners): _42.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _42.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.GenesisState;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
                fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
                toAminoMsg(message: _42.GenesisState): _42.GenesisStateAminoMsg;
                fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
                toProto(message: _42.GenesisState): Uint8Array;
                toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _41.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Capability;
                fromPartial(object: Partial<_41.Capability>): _41.Capability;
                fromAmino(object: _41.CapabilityAmino): _41.Capability;
                toAmino(message: _41.Capability): _41.CapabilityAmino;
                fromAminoMsg(object: _41.CapabilityAminoMsg): _41.Capability;
                toAminoMsg(message: _41.Capability): _41.CapabilityAminoMsg;
                fromProtoMsg(message: _41.CapabilityProtoMsg): _41.Capability;
                toProto(message: _41.Capability): Uint8Array;
                toProtoMsg(message: _41.Capability): _41.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _41.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Owner;
                fromPartial(object: Partial<_41.Owner>): _41.Owner;
                fromAmino(object: _41.OwnerAmino): _41.Owner;
                toAmino(message: _41.Owner): _41.OwnerAmino;
                fromAminoMsg(object: _41.OwnerAminoMsg): _41.Owner;
                toAminoMsg(message: _41.Owner): _41.OwnerAminoMsg;
                fromProtoMsg(message: _41.OwnerProtoMsg): _41.Owner;
                toProto(message: _41.Owner): Uint8Array;
                toProtoMsg(message: _41.Owner): _41.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _41.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.CapabilityOwners;
                fromPartial(object: Partial<_41.CapabilityOwners>): _41.CapabilityOwners;
                fromAmino(object: _41.CapabilityOwnersAmino): _41.CapabilityOwners;
                toAmino(message: _41.CapabilityOwners): _41.CapabilityOwnersAmino;
                fromAminoMsg(object: _41.CapabilityOwnersAminoMsg): _41.CapabilityOwners;
                toAminoMsg(message: _41.CapabilityOwners): _41.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _41.CapabilityOwnersProtoMsg): _41.CapabilityOwners;
                toProto(message: _41.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _41.CapabilityOwners): _41.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _43.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Module;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                    fromAmino(object: _43.ModuleAmino): _43.Module;
                    toAmino(message: _43.Module): _43.ModuleAmino;
                    fromAminoMsg(object: _43.ModuleAminoMsg): _43.Module;
                    toAminoMsg(message: _43.Module): _43.ModuleAminoMsg;
                    fromProtoMsg(message: _43.ModuleProtoMsg): _43.Module;
                    toProto(message: _43.Module): Uint8Array;
                    toProtoMsg(message: _43.Module): _43.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _45.MsgUpdateParams) => _45.MsgUpdateParamsAmino;
                    fromAmino: (object: _45.MsgUpdateParamsAmino) => _45.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _45.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgUpdateParams;
                fromPartial(object: Partial<_45.MsgUpdateParams>): _45.MsgUpdateParams;
                fromAmino(object: _45.MsgUpdateParamsAmino): _45.MsgUpdateParams;
                toAmino(message: _45.MsgUpdateParams): _45.MsgUpdateParamsAmino;
                fromAminoMsg(object: _45.MsgUpdateParamsAminoMsg): _45.MsgUpdateParams;
                toAminoMsg(message: _45.MsgUpdateParams): _45.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _45.MsgUpdateParamsProtoMsg): _45.MsgUpdateParams;
                toProto(message: _45.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _45.MsgUpdateParams): _45.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _45.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_45.MsgUpdateParamsResponse>): _45.MsgUpdateParamsResponse;
                fromAmino(_: _45.MsgUpdateParamsResponseAmino): _45.MsgUpdateParamsResponse;
                toAmino(_: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _45.MsgUpdateParamsResponseAminoMsg): _45.MsgUpdateParamsResponse;
                toAminoMsg(message: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _45.MsgUpdateParamsResponseProtoMsg): _45.MsgUpdateParamsResponse;
                toProto(message: _45.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _44.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.QueryParamsRequest;
                fromPartial(_: Partial<_44.QueryParamsRequest>): _44.QueryParamsRequest;
                fromAmino(_: _44.QueryParamsRequestAmino): _44.QueryParamsRequest;
                toAmino(_: _44.QueryParamsRequest): _44.QueryParamsRequestAmino;
                fromAminoMsg(object: _44.QueryParamsRequestAminoMsg): _44.QueryParamsRequest;
                toAminoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryParamsRequestProtoMsg): _44.QueryParamsRequest;
                toProto(message: _44.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _44.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryParamsResponse;
                fromPartial(object: Partial<_44.QueryParamsResponse>): _44.QueryParamsResponse;
                fromAmino(object: _44.QueryParamsResponseAmino): _44.QueryParamsResponse;
                toAmino(message: _44.QueryParamsResponse): _44.QueryParamsResponseAmino;
                fromAminoMsg(object: _44.QueryParamsResponseAminoMsg): _44.QueryParamsResponse;
                toAminoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryParamsResponseProtoMsg): _44.QueryParamsResponse;
                toProto(message: _44.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _46.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Module;
                    fromPartial(object: Partial<_46.Module>): _46.Module;
                    fromAmino(object: _46.ModuleAmino): _46.Module;
                    toAmino(message: _46.Module): _46.ModuleAmino;
                    fromAminoMsg(object: _46.ModuleAminoMsg): _46.Module;
                    toAminoMsg(message: _46.Module): _46.ModuleAminoMsg;
                    fromProtoMsg(message: _46.ModuleProtoMsg): _46.Module;
                    toProto(message: _46.Module): Uint8Array;
                    toProtoMsg(message: _46.Module): _46.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _48.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                    updateParams(value: _48.MsgUpdateParams): {
                        typeUrl: string;
                        value: _48.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _48.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                    updateParams(value: _48.MsgUpdateParams): {
                        typeUrl: string;
                        value: _48.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _48.MsgVerifyInvariant) => _48.MsgVerifyInvariantAmino;
                    fromAmino: (object: _48.MsgVerifyInvariantAmino) => _48.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _48.MsgUpdateParams) => _48.MsgUpdateParamsAmino;
                    fromAmino: (object: _48.MsgUpdateParamsAmino) => _48.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _48.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgVerifyInvariant;
                fromPartial(object: Partial<_48.MsgVerifyInvariant>): _48.MsgVerifyInvariant;
                fromAmino(object: _48.MsgVerifyInvariantAmino): _48.MsgVerifyInvariant;
                toAmino(message: _48.MsgVerifyInvariant): _48.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _48.MsgVerifyInvariantAminoMsg): _48.MsgVerifyInvariant;
                toAminoMsg(message: _48.MsgVerifyInvariant): _48.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _48.MsgVerifyInvariantProtoMsg): _48.MsgVerifyInvariant;
                toProto(message: _48.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _48.MsgVerifyInvariant): _48.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _48.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_48.MsgVerifyInvariantResponse>): _48.MsgVerifyInvariantResponse;
                fromAmino(_: _48.MsgVerifyInvariantResponseAmino): _48.MsgVerifyInvariantResponse;
                toAmino(_: _48.MsgVerifyInvariantResponse): _48.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _48.MsgVerifyInvariantResponseAminoMsg): _48.MsgVerifyInvariantResponse;
                toAminoMsg(message: _48.MsgVerifyInvariantResponse): _48.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _48.MsgVerifyInvariantResponseProtoMsg): _48.MsgVerifyInvariantResponse;
                toProto(message: _48.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _48.MsgVerifyInvariantResponse): _48.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _48.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgUpdateParams;
                fromPartial(object: Partial<_48.MsgUpdateParams>): _48.MsgUpdateParams;
                fromAmino(object: _48.MsgUpdateParamsAmino): _48.MsgUpdateParams;
                toAmino(message: _48.MsgUpdateParams): _48.MsgUpdateParamsAmino;
                fromAminoMsg(object: _48.MsgUpdateParamsAminoMsg): _48.MsgUpdateParams;
                toAminoMsg(message: _48.MsgUpdateParams): _48.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _48.MsgUpdateParamsProtoMsg): _48.MsgUpdateParams;
                toProto(message: _48.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _48.MsgUpdateParams): _48.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _48.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_48.MsgUpdateParamsResponse>): _48.MsgUpdateParamsResponse;
                fromAmino(_: _48.MsgUpdateParamsResponseAmino): _48.MsgUpdateParamsResponse;
                toAmino(_: _48.MsgUpdateParamsResponse): _48.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _48.MsgUpdateParamsResponseAminoMsg): _48.MsgUpdateParamsResponse;
                toAminoMsg(message: _48.MsgUpdateParamsResponse): _48.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _48.MsgUpdateParamsResponseProtoMsg): _48.MsgUpdateParamsResponse;
                toProto(message: _48.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _48.MsgUpdateParamsResponse): _48.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _47.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _49.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.PubKey;
                fromPartial(object: Partial<_49.PubKey>): _49.PubKey;
                fromAmino(object: _49.PubKeyAmino): _49.PubKey;
                toAmino(message: _49.PubKey): _49.PubKeyAmino;
                fromAminoMsg(object: _49.PubKeyAminoMsg): _49.PubKey;
                toAminoMsg(message: _49.PubKey): _49.PubKeyAminoMsg;
                fromProtoMsg(message: _49.PubKeyProtoMsg): _49.PubKey;
                toProto(message: _49.PubKey): Uint8Array;
                toProtoMsg(message: _49.PubKey): _49.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _49.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.PrivKey;
                fromPartial(object: Partial<_49.PrivKey>): _49.PrivKey;
                fromAmino(object: _49.PrivKeyAmino): _49.PrivKey;
                toAmino(message: _49.PrivKey): _49.PrivKeyAmino;
                fromAminoMsg(object: _49.PrivKeyAminoMsg): _49.PrivKey;
                toAminoMsg(message: _49.PrivKey): _49.PrivKeyAminoMsg;
                fromProtoMsg(message: _49.PrivKeyProtoMsg): _49.PrivKey;
                toProto(message: _49.PrivKey): Uint8Array;
                toProtoMsg(message: _49.PrivKey): _49.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _50.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.BIP44Params;
                    fromPartial(object: Partial<_50.BIP44Params>): _50.BIP44Params;
                    fromAmino(object: _50.BIP44ParamsAmino): _50.BIP44Params;
                    toAmino(message: _50.BIP44Params): _50.BIP44ParamsAmino;
                    fromAminoMsg(object: _50.BIP44ParamsAminoMsg): _50.BIP44Params;
                    toAminoMsg(message: _50.BIP44Params): _50.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _50.BIP44ParamsProtoMsg): _50.BIP44Params;
                    toProto(message: _50.BIP44Params): Uint8Array;
                    toProtoMsg(message: _50.BIP44Params): _50.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _51.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Record;
                    fromPartial(object: Partial<_51.Record>): _51.Record;
                    fromAmino(object: _51.RecordAmino): _51.Record;
                    toAmino(message: _51.Record): _51.RecordAmino;
                    fromAminoMsg(object: _51.RecordAminoMsg): _51.Record;
                    toAminoMsg(message: _51.Record): _51.RecordAminoMsg;
                    fromProtoMsg(message: _51.RecordProtoMsg): _51.Record;
                    toProto(message: _51.Record): Uint8Array;
                    toProtoMsg(message: _51.Record): _51.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _51.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Record_Local;
                    fromPartial(object: Partial<_51.Record_Local>): _51.Record_Local;
                    fromAmino(object: _51.Record_LocalAmino): _51.Record_Local;
                    toAmino(message: _51.Record_Local): _51.Record_LocalAmino;
                    fromAminoMsg(object: _51.Record_LocalAminoMsg): _51.Record_Local;
                    toAminoMsg(message: _51.Record_Local): _51.Record_LocalAminoMsg;
                    fromProtoMsg(message: _51.Record_LocalProtoMsg): _51.Record_Local;
                    toProto(message: _51.Record_Local): Uint8Array;
                    toProtoMsg(message: _51.Record_Local): _51.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _51.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Record_Ledger;
                    fromPartial(object: Partial<_51.Record_Ledger>): _51.Record_Ledger;
                    fromAmino(object: _51.Record_LedgerAmino): _51.Record_Ledger;
                    toAmino(message: _51.Record_Ledger): _51.Record_LedgerAmino;
                    fromAminoMsg(object: _51.Record_LedgerAminoMsg): _51.Record_Ledger;
                    toAminoMsg(message: _51.Record_Ledger): _51.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _51.Record_LedgerProtoMsg): _51.Record_Ledger;
                    toProto(message: _51.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _51.Record_Ledger): _51.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _51.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.Record_Multi;
                    fromPartial(_: Partial<_51.Record_Multi>): _51.Record_Multi;
                    fromAmino(_: _51.Record_MultiAmino): _51.Record_Multi;
                    toAmino(_: _51.Record_Multi): _51.Record_MultiAmino;
                    fromAminoMsg(object: _51.Record_MultiAminoMsg): _51.Record_Multi;
                    toAminoMsg(message: _51.Record_Multi): _51.Record_MultiAminoMsg;
                    fromProtoMsg(message: _51.Record_MultiProtoMsg): _51.Record_Multi;
                    toProto(message: _51.Record_Multi): Uint8Array;
                    toProtoMsg(message: _51.Record_Multi): _51.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _51.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.Record_Offline;
                    fromPartial(_: Partial<_51.Record_Offline>): _51.Record_Offline;
                    fromAmino(_: _51.Record_OfflineAmino): _51.Record_Offline;
                    toAmino(_: _51.Record_Offline): _51.Record_OfflineAmino;
                    fromAminoMsg(object: _51.Record_OfflineAminoMsg): _51.Record_Offline;
                    toAminoMsg(message: _51.Record_Offline): _51.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _51.Record_OfflineProtoMsg): _51.Record_Offline;
                    toProto(message: _51.Record_Offline): Uint8Array;
                    toProtoMsg(message: _51.Record_Offline): _51.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _52.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.LegacyAminoPubKey;
                fromPartial(object: Partial<_52.LegacyAminoPubKey>): _52.LegacyAminoPubKey;
                fromAmino(object: _52.LegacyAminoPubKeyAmino): _52.LegacyAminoPubKey;
                toAmino(message: _52.LegacyAminoPubKey): _52.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _52.LegacyAminoPubKeyAminoMsg): _52.LegacyAminoPubKey;
                toAminoMsg(message: _52.LegacyAminoPubKey): _52.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _52.LegacyAminoPubKeyProtoMsg): _52.LegacyAminoPubKey;
                toProto(message: _52.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _52.LegacyAminoPubKey): _52.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _53.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.PubKey;
                fromPartial(object: Partial<_53.PubKey>): _53.PubKey;
                fromAmino(object: _53.PubKeyAmino): _53.PubKey;
                toAmino(message: _53.PubKey): _53.PubKeyAmino;
                fromAminoMsg(object: _53.PubKeyAminoMsg): _53.PubKey;
                toAminoMsg(message: _53.PubKey): _53.PubKeyAminoMsg;
                fromProtoMsg(message: _53.PubKeyProtoMsg): _53.PubKey;
                toProto(message: _53.PubKey): Uint8Array;
                toProtoMsg(message: _53.PubKey): _53.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _53.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.PrivKey;
                fromPartial(object: Partial<_53.PrivKey>): _53.PrivKey;
                fromAmino(object: _53.PrivKeyAmino): _53.PrivKey;
                toAmino(message: _53.PrivKey): _53.PrivKeyAmino;
                fromAminoMsg(object: _53.PrivKeyAminoMsg): _53.PrivKey;
                toAminoMsg(message: _53.PrivKey): _53.PrivKeyAminoMsg;
                fromProtoMsg(message: _53.PrivKeyProtoMsg): _53.PrivKey;
                toProto(message: _53.PrivKey): Uint8Array;
                toProtoMsg(message: _53.PrivKey): _53.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _54.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PubKey;
                fromPartial(object: Partial<_54.PubKey>): _54.PubKey;
                fromAmino(object: _54.PubKeyAmino): _54.PubKey;
                toAmino(message: _54.PubKey): _54.PubKeyAmino;
                fromAminoMsg(object: _54.PubKeyAminoMsg): _54.PubKey;
                toAminoMsg(message: _54.PubKey): _54.PubKeyAminoMsg;
                fromProtoMsg(message: _54.PubKeyProtoMsg): _54.PubKey;
                toProto(message: _54.PubKey): Uint8Array;
                toProtoMsg(message: _54.PubKey): _54.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _54.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.PrivKey;
                fromPartial(object: Partial<_54.PrivKey>): _54.PrivKey;
                fromAmino(object: _54.PrivKeyAmino): _54.PrivKey;
                toAmino(message: _54.PrivKey): _54.PrivKeyAmino;
                fromAminoMsg(object: _54.PrivKeyAminoMsg): _54.PrivKey;
                toAminoMsg(message: _54.PrivKey): _54.PrivKeyAminoMsg;
                fromProtoMsg(message: _54.PrivKeyProtoMsg): _54.PrivKey;
                toProto(message: _54.PrivKey): Uint8Array;
                toProtoMsg(message: _54.PrivKey): _54.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _55.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Module;
                    fromPartial(object: Partial<_55.Module>): _55.Module;
                    fromAmino(object: _55.ModuleAmino): _55.Module;
                    toAmino(message: _55.Module): _55.ModuleAmino;
                    fromAminoMsg(object: _55.ModuleAminoMsg): _55.Module;
                    toAminoMsg(message: _55.Module): _55.ModuleAminoMsg;
                    fromProtoMsg(message: _55.ModuleProtoMsg): _55.Module;
                    toProto(message: _55.Module): Uint8Array;
                    toProtoMsg(message: _55.Module): _55.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                validatorDistributionInfo(request: _58.QueryValidatorDistributionInfoRequest): Promise<_58.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _59.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _59.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                    updateParams(value: _59.MsgUpdateParams): {
                        typeUrl: string;
                        value: _59.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _59.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _59.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _59.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _59.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _59.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _59.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _59.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _59.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _59.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _59.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _59.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _59.MsgFundCommunityPool;
                    };
                    updateParams(value: _59.MsgUpdateParams): {
                        typeUrl: string;
                        value: _59.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _59.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _59.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSetWithdrawAddress) => _59.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _59.MsgSetWithdrawAddressAmino) => _59.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _59.MsgWithdrawDelegatorReward) => _59.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _59.MsgWithdrawDelegatorRewardAmino) => _59.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _59.MsgWithdrawValidatorCommission) => _59.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _59.MsgWithdrawValidatorCommissionAmino) => _59.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _59.MsgFundCommunityPool) => _59.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _59.MsgFundCommunityPoolAmino) => _59.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _59.MsgUpdateParams) => _59.MsgUpdateParamsAmino;
                    fromAmino: (object: _59.MsgUpdateParamsAmino) => _59.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _59.MsgCommunityPoolSpend) => _59.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _59.MsgCommunityPoolSpendAmino) => _59.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _59.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_59.MsgSetWithdrawAddress>): _59.MsgSetWithdrawAddress;
                fromAmino(object: _59.MsgSetWithdrawAddressAmino): _59.MsgSetWithdrawAddress;
                toAmino(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _59.MsgSetWithdrawAddressAminoMsg): _59.MsgSetWithdrawAddress;
                toAminoMsg(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _59.MsgSetWithdrawAddressProtoMsg): _59.MsgSetWithdrawAddress;
                toProto(message: _59.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _59.MsgSetWithdrawAddress): _59.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _59.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_59.MsgSetWithdrawAddressResponse>): _59.MsgSetWithdrawAddressResponse;
                fromAmino(_: _59.MsgSetWithdrawAddressResponseAmino): _59.MsgSetWithdrawAddressResponse;
                toAmino(_: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _59.MsgSetWithdrawAddressResponseAminoMsg): _59.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSetWithdrawAddressResponseProtoMsg): _59.MsgSetWithdrawAddressResponse;
                toProto(message: _59.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSetWithdrawAddressResponse): _59.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_59.MsgWithdrawDelegatorReward>): _59.MsgWithdrawDelegatorReward;
                fromAmino(object: _59.MsgWithdrawDelegatorRewardAmino): _59.MsgWithdrawDelegatorReward;
                toAmino(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _59.MsgWithdrawDelegatorRewardAminoMsg): _59.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawDelegatorRewardProtoMsg): _59.MsgWithdrawDelegatorReward;
                toProto(message: _59.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawDelegatorReward): _59.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_59.MsgWithdrawDelegatorRewardResponse>): _59.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _59.MsgWithdrawDelegatorRewardResponseAmino): _59.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _59.MsgWithdrawDelegatorRewardResponseAminoMsg): _59.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawDelegatorRewardResponseProtoMsg): _59.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _59.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawDelegatorRewardResponse): _59.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommission>): _59.MsgWithdrawValidatorCommission;
                fromAmino(object: _59.MsgWithdrawValidatorCommissionAmino): _59.MsgWithdrawValidatorCommission;
                toAmino(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _59.MsgWithdrawValidatorCommissionAminoMsg): _59.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawValidatorCommissionProtoMsg): _59.MsgWithdrawValidatorCommission;
                toProto(message: _59.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawValidatorCommission): _59.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _59.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_59.MsgWithdrawValidatorCommissionResponse>): _59.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _59.MsgWithdrawValidatorCommissionResponseAmino): _59.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _59.MsgWithdrawValidatorCommissionResponseAminoMsg): _59.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _59.MsgWithdrawValidatorCommissionResponseProtoMsg): _59.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _59.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawValidatorCommissionResponse): _59.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _59.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgFundCommunityPool;
                fromPartial(object: Partial<_59.MsgFundCommunityPool>): _59.MsgFundCommunityPool;
                fromAmino(object: _59.MsgFundCommunityPoolAmino): _59.MsgFundCommunityPool;
                toAmino(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _59.MsgFundCommunityPoolAminoMsg): _59.MsgFundCommunityPool;
                toAminoMsg(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _59.MsgFundCommunityPoolProtoMsg): _59.MsgFundCommunityPool;
                toProto(message: _59.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _59.MsgFundCommunityPool): _59.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _59.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_59.MsgFundCommunityPoolResponse>): _59.MsgFundCommunityPoolResponse;
                fromAmino(_: _59.MsgFundCommunityPoolResponseAmino): _59.MsgFundCommunityPoolResponse;
                toAmino(_: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _59.MsgFundCommunityPoolResponseAminoMsg): _59.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _59.MsgFundCommunityPoolResponseProtoMsg): _59.MsgFundCommunityPoolResponse;
                toProto(message: _59.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _59.MsgFundCommunityPoolResponse): _59.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _59.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgUpdateParams;
                fromPartial(object: Partial<_59.MsgUpdateParams>): _59.MsgUpdateParams;
                fromAmino(object: _59.MsgUpdateParamsAmino): _59.MsgUpdateParams;
                toAmino(message: _59.MsgUpdateParams): _59.MsgUpdateParamsAmino;
                fromAminoMsg(object: _59.MsgUpdateParamsAminoMsg): _59.MsgUpdateParams;
                toAminoMsg(message: _59.MsgUpdateParams): _59.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _59.MsgUpdateParamsProtoMsg): _59.MsgUpdateParams;
                toProto(message: _59.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _59.MsgUpdateParams): _59.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _59.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_59.MsgUpdateParamsResponse>): _59.MsgUpdateParamsResponse;
                fromAmino(_: _59.MsgUpdateParamsResponseAmino): _59.MsgUpdateParamsResponse;
                toAmino(_: _59.MsgUpdateParamsResponse): _59.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _59.MsgUpdateParamsResponseAminoMsg): _59.MsgUpdateParamsResponse;
                toAminoMsg(message: _59.MsgUpdateParamsResponse): _59.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _59.MsgUpdateParamsResponseProtoMsg): _59.MsgUpdateParamsResponse;
                toProto(message: _59.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _59.MsgUpdateParamsResponse): _59.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _59.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_59.MsgCommunityPoolSpend>): _59.MsgCommunityPoolSpend;
                fromAmino(object: _59.MsgCommunityPoolSpendAmino): _59.MsgCommunityPoolSpend;
                toAmino(message: _59.MsgCommunityPoolSpend): _59.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _59.MsgCommunityPoolSpendAminoMsg): _59.MsgCommunityPoolSpend;
                toAminoMsg(message: _59.MsgCommunityPoolSpend): _59.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _59.MsgCommunityPoolSpendProtoMsg): _59.MsgCommunityPoolSpend;
                toProto(message: _59.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _59.MsgCommunityPoolSpend): _59.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _59.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_59.MsgCommunityPoolSpendResponse>): _59.MsgCommunityPoolSpendResponse;
                fromAmino(_: _59.MsgCommunityPoolSpendResponseAmino): _59.MsgCommunityPoolSpendResponse;
                toAmino(_: _59.MsgCommunityPoolSpendResponse): _59.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _59.MsgCommunityPoolSpendResponseAminoMsg): _59.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _59.MsgCommunityPoolSpendResponse): _59.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _59.MsgCommunityPoolSpendResponseProtoMsg): _59.MsgCommunityPoolSpendResponse;
                toProto(message: _59.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _59.MsgCommunityPoolSpendResponse): _59.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _58.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryParamsRequest;
                fromPartial(_: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                fromAmino(_: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                toAmino(_: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
                fromAminoMsg(object: _58.QueryParamsRequestAminoMsg): _58.QueryParamsRequest;
                toAminoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryParamsRequestProtoMsg): _58.QueryParamsRequest;
                toProto(message: _58.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _58.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryParamsResponse;
                fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
                fromAmino(object: _58.QueryParamsResponseAmino): _58.QueryParamsResponse;
                toAmino(message: _58.QueryParamsResponse): _58.QueryParamsResponseAmino;
                fromAminoMsg(object: _58.QueryParamsResponseAminoMsg): _58.QueryParamsResponse;
                toAminoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryParamsResponseProtoMsg): _58.QueryParamsResponse;
                toProto(message: _58.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_58.QueryValidatorDistributionInfoRequest>): _58.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _58.QueryValidatorDistributionInfoRequestAmino): _58.QueryValidatorDistributionInfoRequest;
                toAmino(message: _58.QueryValidatorDistributionInfoRequest): _58.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorDistributionInfoRequestAminoMsg): _58.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _58.QueryValidatorDistributionInfoRequest): _58.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorDistributionInfoRequestProtoMsg): _58.QueryValidatorDistributionInfoRequest;
                toProto(message: _58.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorDistributionInfoRequest): _58.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_58.QueryValidatorDistributionInfoResponse>): _58.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _58.QueryValidatorDistributionInfoResponseAmino): _58.QueryValidatorDistributionInfoResponse;
                toAmino(message: _58.QueryValidatorDistributionInfoResponse): _58.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorDistributionInfoResponseAminoMsg): _58.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _58.QueryValidatorDistributionInfoResponse): _58.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorDistributionInfoResponseProtoMsg): _58.QueryValidatorDistributionInfoResponse;
                toProto(message: _58.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorDistributionInfoResponse): _58.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsRequest>): _58.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _58.QueryValidatorOutstandingRewardsRequestAmino): _58.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorOutstandingRewardsRequestAminoMsg): _58.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorOutstandingRewardsRequestProtoMsg): _58.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _58.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorOutstandingRewardsRequest): _58.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_58.QueryValidatorOutstandingRewardsResponse>): _58.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _58.QueryValidatorOutstandingRewardsResponseAmino): _58.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorOutstandingRewardsResponseAminoMsg): _58.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorOutstandingRewardsResponseProtoMsg): _58.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _58.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorOutstandingRewardsResponse): _58.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_58.QueryValidatorCommissionRequest>): _58.QueryValidatorCommissionRequest;
                fromAmino(object: _58.QueryValidatorCommissionRequestAmino): _58.QueryValidatorCommissionRequest;
                toAmino(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorCommissionRequestAminoMsg): _58.QueryValidatorCommissionRequest;
                toAminoMsg(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorCommissionRequestProtoMsg): _58.QueryValidatorCommissionRequest;
                toProto(message: _58.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorCommissionRequest): _58.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_58.QueryValidatorCommissionResponse>): _58.QueryValidatorCommissionResponse;
                fromAmino(object: _58.QueryValidatorCommissionResponseAmino): _58.QueryValidatorCommissionResponse;
                toAmino(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorCommissionResponseAminoMsg): _58.QueryValidatorCommissionResponse;
                toAminoMsg(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorCommissionResponseProtoMsg): _58.QueryValidatorCommissionResponse;
                toProto(message: _58.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorCommissionResponse): _58.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _58.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_58.QueryValidatorSlashesRequest>): _58.QueryValidatorSlashesRequest;
                fromAmino(object: _58.QueryValidatorSlashesRequestAmino): _58.QueryValidatorSlashesRequest;
                toAmino(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _58.QueryValidatorSlashesRequestAminoMsg): _58.QueryValidatorSlashesRequest;
                toAminoMsg(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorSlashesRequestProtoMsg): _58.QueryValidatorSlashesRequest;
                toProto(message: _58.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorSlashesRequest): _58.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _58.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_58.QueryValidatorSlashesResponse>): _58.QueryValidatorSlashesResponse;
                fromAmino(object: _58.QueryValidatorSlashesResponseAmino): _58.QueryValidatorSlashesResponse;
                toAmino(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _58.QueryValidatorSlashesResponseAminoMsg): _58.QueryValidatorSlashesResponse;
                toAminoMsg(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _58.QueryValidatorSlashesResponseProtoMsg): _58.QueryValidatorSlashesResponse;
                toProto(message: _58.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _58.QueryValidatorSlashesResponse): _58.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationRewardsRequest>): _58.QueryDelegationRewardsRequest;
                fromAmino(object: _58.QueryDelegationRewardsRequestAmino): _58.QueryDelegationRewardsRequest;
                toAmino(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegationRewardsRequestAminoMsg): _58.QueryDelegationRewardsRequest;
                toAminoMsg(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationRewardsRequestProtoMsg): _58.QueryDelegationRewardsRequest;
                toProto(message: _58.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationRewardsRequest): _58.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationRewardsResponse>): _58.QueryDelegationRewardsResponse;
                fromAmino(object: _58.QueryDelegationRewardsResponseAmino): _58.QueryDelegationRewardsResponse;
                toAmino(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegationRewardsResponseAminoMsg): _58.QueryDelegationRewardsResponse;
                toAminoMsg(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationRewardsResponseProtoMsg): _58.QueryDelegationRewardsResponse;
                toProto(message: _58.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationRewardsResponse): _58.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsRequest>): _58.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _58.QueryDelegationTotalRewardsRequestAmino): _58.QueryDelegationTotalRewardsRequest;
                toAmino(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegationTotalRewardsRequestAminoMsg): _58.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationTotalRewardsRequestProtoMsg): _58.QueryDelegationTotalRewardsRequest;
                toProto(message: _58.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationTotalRewardsRequest): _58.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_58.QueryDelegationTotalRewardsResponse>): _58.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _58.QueryDelegationTotalRewardsResponseAmino): _58.QueryDelegationTotalRewardsResponse;
                toAmino(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegationTotalRewardsResponseAminoMsg): _58.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegationTotalRewardsResponseProtoMsg): _58.QueryDelegationTotalRewardsResponse;
                toProto(message: _58.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegationTotalRewardsResponse): _58.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsRequest>): _58.QueryDelegatorValidatorsRequest;
                fromAmino(object: _58.QueryDelegatorValidatorsRequestAmino): _58.QueryDelegatorValidatorsRequest;
                toAmino(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _58.QueryDelegatorValidatorsRequestAminoMsg): _58.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorValidatorsRequestProtoMsg): _58.QueryDelegatorValidatorsRequest;
                toProto(message: _58.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorValidatorsRequest): _58.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_58.QueryDelegatorValidatorsResponse>): _58.QueryDelegatorValidatorsResponse;
                fromAmino(object: _58.QueryDelegatorValidatorsResponseAmino): _58.QueryDelegatorValidatorsResponse;
                toAmino(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _58.QueryDelegatorValidatorsResponseAminoMsg): _58.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorValidatorsResponseProtoMsg): _58.QueryDelegatorValidatorsResponse;
                toProto(message: _58.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorValidatorsResponse): _58.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressRequest>): _58.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _58.QueryDelegatorWithdrawAddressRequestAmino): _58.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _58.QueryDelegatorWithdrawAddressRequestAminoMsg): _58.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorWithdrawAddressRequestProtoMsg): _58.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _58.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorWithdrawAddressRequest): _58.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _58.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_58.QueryDelegatorWithdrawAddressResponse>): _58.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _58.QueryDelegatorWithdrawAddressResponseAmino): _58.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _58.QueryDelegatorWithdrawAddressResponseAminoMsg): _58.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDelegatorWithdrawAddressResponseProtoMsg): _58.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _58.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDelegatorWithdrawAddressResponse): _58.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _58.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_58.QueryCommunityPoolRequest>): _58.QueryCommunityPoolRequest;
                fromAmino(_: _58.QueryCommunityPoolRequestAmino): _58.QueryCommunityPoolRequest;
                toAmino(_: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _58.QueryCommunityPoolRequestAminoMsg): _58.QueryCommunityPoolRequest;
                toAminoMsg(message: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _58.QueryCommunityPoolRequestProtoMsg): _58.QueryCommunityPoolRequest;
                toProto(message: _58.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _58.QueryCommunityPoolRequest): _58.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _58.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_58.QueryCommunityPoolResponse>): _58.QueryCommunityPoolResponse;
                fromAmino(object: _58.QueryCommunityPoolResponseAmino): _58.QueryCommunityPoolResponse;
                toAmino(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _58.QueryCommunityPoolResponseAminoMsg): _58.QueryCommunityPoolResponse;
                toAminoMsg(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _58.QueryCommunityPoolResponseProtoMsg): _58.QueryCommunityPoolResponse;
                toProto(message: _58.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _58.QueryCommunityPoolResponse): _58.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _57.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_57.DelegatorWithdrawInfo>): _57.DelegatorWithdrawInfo;
                fromAmino(object: _57.DelegatorWithdrawInfoAmino): _57.DelegatorWithdrawInfo;
                toAmino(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _57.DelegatorWithdrawInfoAminoMsg): _57.DelegatorWithdrawInfo;
                toAminoMsg(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _57.DelegatorWithdrawInfoProtoMsg): _57.DelegatorWithdrawInfo;
                toProto(message: _57.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _57.DelegatorWithdrawInfo): _57.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorOutstandingRewardsRecord>): _57.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _57.ValidatorOutstandingRewardsRecordAmino): _57.ValidatorOutstandingRewardsRecord;
                toAmino(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorOutstandingRewardsRecordAminoMsg): _57.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorOutstandingRewardsRecordProtoMsg): _57.ValidatorOutstandingRewardsRecord;
                toProto(message: _57.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorOutstandingRewardsRecord): _57.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_57.ValidatorAccumulatedCommissionRecord>): _57.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _57.ValidatorAccumulatedCommissionRecordAmino): _57.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _57.ValidatorAccumulatedCommissionRecordAminoMsg): _57.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorAccumulatedCommissionRecordProtoMsg): _57.ValidatorAccumulatedCommissionRecord;
                toProto(message: _57.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorAccumulatedCommissionRecord): _57.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorHistoricalRewardsRecord>): _57.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _57.ValidatorHistoricalRewardsRecordAmino): _57.ValidatorHistoricalRewardsRecord;
                toAmino(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorHistoricalRewardsRecordAminoMsg): _57.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorHistoricalRewardsRecordProtoMsg): _57.ValidatorHistoricalRewardsRecord;
                toProto(message: _57.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorHistoricalRewardsRecord): _57.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_57.ValidatorCurrentRewardsRecord>): _57.ValidatorCurrentRewardsRecord;
                fromAmino(object: _57.ValidatorCurrentRewardsRecordAmino): _57.ValidatorCurrentRewardsRecord;
                toAmino(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _57.ValidatorCurrentRewardsRecordAminoMsg): _57.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorCurrentRewardsRecordProtoMsg): _57.ValidatorCurrentRewardsRecord;
                toProto(message: _57.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorCurrentRewardsRecord): _57.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _57.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_57.DelegatorStartingInfoRecord>): _57.DelegatorStartingInfoRecord;
                fromAmino(object: _57.DelegatorStartingInfoRecordAmino): _57.DelegatorStartingInfoRecord;
                toAmino(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _57.DelegatorStartingInfoRecordAminoMsg): _57.DelegatorStartingInfoRecord;
                toAminoMsg(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _57.DelegatorStartingInfoRecordProtoMsg): _57.DelegatorStartingInfoRecord;
                toProto(message: _57.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _57.DelegatorStartingInfoRecord): _57.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _57.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_57.ValidatorSlashEventRecord>): _57.ValidatorSlashEventRecord;
                fromAmino(object: _57.ValidatorSlashEventRecordAmino): _57.ValidatorSlashEventRecord;
                toAmino(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _57.ValidatorSlashEventRecordAminoMsg): _57.ValidatorSlashEventRecord;
                toAminoMsg(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _57.ValidatorSlashEventRecordProtoMsg): _57.ValidatorSlashEventRecord;
                toProto(message: _57.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _57.ValidatorSlashEventRecord): _57.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _57.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.GenesisState;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
                fromAmino(object: _57.GenesisStateAmino): _57.GenesisState;
                toAmino(message: _57.GenesisState): _57.GenesisStateAmino;
                fromAminoMsg(object: _57.GenesisStateAminoMsg): _57.GenesisState;
                toAminoMsg(message: _57.GenesisState): _57.GenesisStateAminoMsg;
                fromProtoMsg(message: _57.GenesisStateProtoMsg): _57.GenesisState;
                toProto(message: _57.GenesisState): Uint8Array;
                toProtoMsg(message: _57.GenesisState): _57.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
                fromAmino(object: _56.ParamsAmino): _56.Params;
                toAmino(message: _56.Params): _56.ParamsAmino;
                fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                toAminoMsg(message: _56.Params): _56.ParamsAminoMsg;
                fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                toProto(message: _56.Params): Uint8Array;
                toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_56.ValidatorHistoricalRewards>): _56.ValidatorHistoricalRewards;
                fromAmino(object: _56.ValidatorHistoricalRewardsAmino): _56.ValidatorHistoricalRewards;
                toAmino(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _56.ValidatorHistoricalRewardsAminoMsg): _56.ValidatorHistoricalRewards;
                toAminoMsg(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorHistoricalRewardsProtoMsg): _56.ValidatorHistoricalRewards;
                toProto(message: _56.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorHistoricalRewards): _56.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorCurrentRewards;
                fromPartial(object: Partial<_56.ValidatorCurrentRewards>): _56.ValidatorCurrentRewards;
                fromAmino(object: _56.ValidatorCurrentRewardsAmino): _56.ValidatorCurrentRewards;
                toAmino(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _56.ValidatorCurrentRewardsAminoMsg): _56.ValidatorCurrentRewards;
                toAminoMsg(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorCurrentRewardsProtoMsg): _56.ValidatorCurrentRewards;
                toProto(message: _56.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorCurrentRewards): _56.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _56.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_56.ValidatorAccumulatedCommission>): _56.ValidatorAccumulatedCommission;
                fromAmino(object: _56.ValidatorAccumulatedCommissionAmino): _56.ValidatorAccumulatedCommission;
                toAmino(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _56.ValidatorAccumulatedCommissionAminoMsg): _56.ValidatorAccumulatedCommission;
                toAminoMsg(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _56.ValidatorAccumulatedCommissionProtoMsg): _56.ValidatorAccumulatedCommission;
                toProto(message: _56.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _56.ValidatorAccumulatedCommission): _56.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _56.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_56.ValidatorOutstandingRewards>): _56.ValidatorOutstandingRewards;
                fromAmino(object: _56.ValidatorOutstandingRewardsAmino): _56.ValidatorOutstandingRewards;
                toAmino(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _56.ValidatorOutstandingRewardsAminoMsg): _56.ValidatorOutstandingRewards;
                toAminoMsg(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _56.ValidatorOutstandingRewardsProtoMsg): _56.ValidatorOutstandingRewards;
                toProto(message: _56.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _56.ValidatorOutstandingRewards): _56.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _56.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorSlashEvent;
                fromPartial(object: Partial<_56.ValidatorSlashEvent>): _56.ValidatorSlashEvent;
                fromAmino(object: _56.ValidatorSlashEventAmino): _56.ValidatorSlashEvent;
                toAmino(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventAmino;
                fromAminoMsg(object: _56.ValidatorSlashEventAminoMsg): _56.ValidatorSlashEvent;
                toAminoMsg(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _56.ValidatorSlashEventProtoMsg): _56.ValidatorSlashEvent;
                toProto(message: _56.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _56.ValidatorSlashEvent): _56.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _56.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.ValidatorSlashEvents;
                fromPartial(object: Partial<_56.ValidatorSlashEvents>): _56.ValidatorSlashEvents;
                fromAmino(object: _56.ValidatorSlashEventsAmino): _56.ValidatorSlashEvents;
                toAmino(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _56.ValidatorSlashEventsAminoMsg): _56.ValidatorSlashEvents;
                toAminoMsg(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _56.ValidatorSlashEventsProtoMsg): _56.ValidatorSlashEvents;
                toProto(message: _56.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _56.ValidatorSlashEvents): _56.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _56.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.FeePool;
                fromPartial(object: Partial<_56.FeePool>): _56.FeePool;
                fromAmino(object: _56.FeePoolAmino): _56.FeePool;
                toAmino(message: _56.FeePool): _56.FeePoolAmino;
                fromAminoMsg(object: _56.FeePoolAminoMsg): _56.FeePool;
                toAminoMsg(message: _56.FeePool): _56.FeePoolAminoMsg;
                fromProtoMsg(message: _56.FeePoolProtoMsg): _56.FeePool;
                toProto(message: _56.FeePool): Uint8Array;
                toProtoMsg(message: _56.FeePool): _56.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _56.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposal>): _56.CommunityPoolSpendProposal;
                fromAmino(object: _56.CommunityPoolSpendProposalAmino): _56.CommunityPoolSpendProposal;
                toAmino(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _56.CommunityPoolSpendProposalAminoMsg): _56.CommunityPoolSpendProposal;
                toAminoMsg(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _56.CommunityPoolSpendProposalProtoMsg): _56.CommunityPoolSpendProposal;
                toProto(message: _56.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _56.CommunityPoolSpendProposal): _56.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _56.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DelegatorStartingInfo;
                fromPartial(object: Partial<_56.DelegatorStartingInfo>): _56.DelegatorStartingInfo;
                fromAmino(object: _56.DelegatorStartingInfoAmino): _56.DelegatorStartingInfo;
                toAmino(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _56.DelegatorStartingInfoAminoMsg): _56.DelegatorStartingInfo;
                toAminoMsg(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _56.DelegatorStartingInfoProtoMsg): _56.DelegatorStartingInfo;
                toProto(message: _56.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _56.DelegatorStartingInfo): _56.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _56.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.DelegationDelegatorReward;
                fromPartial(object: Partial<_56.DelegationDelegatorReward>): _56.DelegationDelegatorReward;
                fromAmino(object: _56.DelegationDelegatorRewardAmino): _56.DelegationDelegatorReward;
                toAmino(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _56.DelegationDelegatorRewardAminoMsg): _56.DelegationDelegatorReward;
                toAminoMsg(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _56.DelegationDelegatorRewardProtoMsg): _56.DelegationDelegatorReward;
                toProto(message: _56.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _56.DelegationDelegatorReward): _56.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _56.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_56.CommunityPoolSpendProposalWithDeposit>): _56.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _56.CommunityPoolSpendProposalWithDepositAmino): _56.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _56.CommunityPoolSpendProposalWithDepositAminoMsg): _56.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _56.CommunityPoolSpendProposalWithDepositProtoMsg): _56.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _56.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _56.CommunityPoolSpendProposalWithDeposit): _56.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _60.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _60.Module;
                    fromPartial(_: Partial<_60.Module>): _60.Module;
                    fromAmino(_: _60.ModuleAmino): _60.Module;
                    toAmino(_: _60.Module): _60.ModuleAmino;
                    fromAminoMsg(object: _60.ModuleAminoMsg): _60.Module;
                    toAminoMsg(message: _60.Module): _60.ModuleAminoMsg;
                    fromProtoMsg(message: _60.ModuleProtoMsg): _60.Module;
                    toProto(message: _60.Module): Uint8Array;
                    toProtoMsg(message: _60.Module): _60.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _63.QueryEvidenceRequest): Promise<_63.QueryEvidenceResponse>;
                allEvidence(request?: _63.QueryAllEvidenceRequest): Promise<_63.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _64.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _64.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _64.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _64.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _64.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _64.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _64.MsgSubmitEvidence) => _64.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _64.MsgSubmitEvidenceAmino) => _64.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _64.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgSubmitEvidence;
                fromPartial(object: Partial<_64.MsgSubmitEvidence>): _64.MsgSubmitEvidence;
                fromAmino(object: _64.MsgSubmitEvidenceAmino): _64.MsgSubmitEvidence;
                toAmino(message: _64.MsgSubmitEvidence): _64.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _64.MsgSubmitEvidenceAminoMsg): _64.MsgSubmitEvidence;
                toAminoMsg(message: _64.MsgSubmitEvidence): _64.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _64.MsgSubmitEvidenceProtoMsg): _64.MsgSubmitEvidence;
                toProto(message: _64.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _64.MsgSubmitEvidence): _64.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _64.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_64.MsgSubmitEvidenceResponse>): _64.MsgSubmitEvidenceResponse;
                fromAmino(object: _64.MsgSubmitEvidenceResponseAmino): _64.MsgSubmitEvidenceResponse;
                toAmino(message: _64.MsgSubmitEvidenceResponse): _64.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _64.MsgSubmitEvidenceResponseAminoMsg): _64.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _64.MsgSubmitEvidenceResponse): _64.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _64.MsgSubmitEvidenceResponseProtoMsg): _64.MsgSubmitEvidenceResponse;
                toProto(message: _64.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _64.MsgSubmitEvidenceResponse): _64.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _63.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryEvidenceRequest;
                fromPartial(object: Partial<_63.QueryEvidenceRequest>): _63.QueryEvidenceRequest;
                fromAmino(object: _63.QueryEvidenceRequestAmino): _63.QueryEvidenceRequest;
                toAmino(message: _63.QueryEvidenceRequest): _63.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _63.QueryEvidenceRequestAminoMsg): _63.QueryEvidenceRequest;
                toAminoMsg(message: _63.QueryEvidenceRequest): _63.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _63.QueryEvidenceRequestProtoMsg): _63.QueryEvidenceRequest;
                toProto(message: _63.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _63.QueryEvidenceRequest): _63.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _63.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryEvidenceResponse;
                fromPartial(object: Partial<_63.QueryEvidenceResponse>): _63.QueryEvidenceResponse;
                fromAmino(object: _63.QueryEvidenceResponseAmino): _63.QueryEvidenceResponse;
                toAmino(message: _63.QueryEvidenceResponse): _63.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _63.QueryEvidenceResponseAminoMsg): _63.QueryEvidenceResponse;
                toAminoMsg(message: _63.QueryEvidenceResponse): _63.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _63.QueryEvidenceResponseProtoMsg): _63.QueryEvidenceResponse;
                toProto(message: _63.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _63.QueryEvidenceResponse): _63.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _63.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_63.QueryAllEvidenceRequest>): _63.QueryAllEvidenceRequest;
                fromAmino(object: _63.QueryAllEvidenceRequestAmino): _63.QueryAllEvidenceRequest;
                toAmino(message: _63.QueryAllEvidenceRequest): _63.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _63.QueryAllEvidenceRequestAminoMsg): _63.QueryAllEvidenceRequest;
                toAminoMsg(message: _63.QueryAllEvidenceRequest): _63.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _63.QueryAllEvidenceRequestProtoMsg): _63.QueryAllEvidenceRequest;
                toProto(message: _63.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAllEvidenceRequest): _63.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _63.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_63.QueryAllEvidenceResponse>): _63.QueryAllEvidenceResponse;
                fromAmino(object: _63.QueryAllEvidenceResponseAmino): _63.QueryAllEvidenceResponse;
                toAmino(message: _63.QueryAllEvidenceResponse): _63.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _63.QueryAllEvidenceResponseAminoMsg): _63.QueryAllEvidenceResponse;
                toAminoMsg(message: _63.QueryAllEvidenceResponse): _63.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _63.QueryAllEvidenceResponseProtoMsg): _63.QueryAllEvidenceResponse;
                toProto(message: _63.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAllEvidenceResponse): _63.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _61.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Equivocation;
                fromPartial(object: Partial<_61.Equivocation>): _61.Equivocation;
                fromAmino(object: _61.EquivocationAmino): _61.Equivocation;
                toAmino(message: _61.Equivocation): _61.EquivocationAmino;
                fromAminoMsg(object: _61.EquivocationAminoMsg): _61.Equivocation;
                toAminoMsg(message: _61.Equivocation): _61.EquivocationAminoMsg;
                fromProtoMsg(message: _61.EquivocationProtoMsg): _61.Equivocation;
                toProto(message: _61.Equivocation): Uint8Array;
                toProtoMsg(message: _61.Equivocation): _61.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _65.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _65.Module;
                    fromPartial(_: Partial<_65.Module>): _65.Module;
                    fromAmino(_: _65.ModuleAmino): _65.Module;
                    toAmino(_: _65.Module): _65.ModuleAmino;
                    fromAminoMsg(object: _65.ModuleAminoMsg): _65.Module;
                    toAminoMsg(message: _65.Module): _65.ModuleAminoMsg;
                    fromProtoMsg(message: _65.ModuleProtoMsg): _65.Module;
                    toProto(message: _65.Module): Uint8Array;
                    toProtoMsg(message: _65.Module): _65.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _68.QueryAllowanceRequest): Promise<_68.QueryAllowanceResponse>;
                allowances(request: _68.QueryAllowancesRequest): Promise<_68.QueryAllowancesResponse>;
                allowancesByGranter(request: _68.QueryAllowancesByGranterRequest): Promise<_68.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _69.MsgGrantAllowance) => _69.MsgGrantAllowanceAmino;
                    fromAmino: (object: _69.MsgGrantAllowanceAmino) => _69.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _69.MsgRevokeAllowance) => _69.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _69.MsgRevokeAllowanceAmino) => _69.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _69.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgGrantAllowance;
                fromPartial(object: Partial<_69.MsgGrantAllowance>): _69.MsgGrantAllowance;
                fromAmino(object: _69.MsgGrantAllowanceAmino): _69.MsgGrantAllowance;
                toAmino(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _69.MsgGrantAllowanceAminoMsg): _69.MsgGrantAllowance;
                toAminoMsg(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _69.MsgGrantAllowanceProtoMsg): _69.MsgGrantAllowance;
                toProto(message: _69.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _69.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_69.MsgGrantAllowanceResponse>): _69.MsgGrantAllowanceResponse;
                fromAmino(_: _69.MsgGrantAllowanceResponseAmino): _69.MsgGrantAllowanceResponse;
                toAmino(_: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _69.MsgGrantAllowanceResponseAminoMsg): _69.MsgGrantAllowanceResponse;
                toAminoMsg(message: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgGrantAllowanceResponseProtoMsg): _69.MsgGrantAllowanceResponse;
                toProto(message: _69.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _69.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgRevokeAllowance;
                fromPartial(object: Partial<_69.MsgRevokeAllowance>): _69.MsgRevokeAllowance;
                fromAmino(object: _69.MsgRevokeAllowanceAmino): _69.MsgRevokeAllowance;
                toAmino(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _69.MsgRevokeAllowanceAminoMsg): _69.MsgRevokeAllowance;
                toAminoMsg(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _69.MsgRevokeAllowanceProtoMsg): _69.MsgRevokeAllowance;
                toProto(message: _69.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _69.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_69.MsgRevokeAllowanceResponse>): _69.MsgRevokeAllowanceResponse;
                fromAmino(_: _69.MsgRevokeAllowanceResponseAmino): _69.MsgRevokeAllowanceResponse;
                toAmino(_: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _69.MsgRevokeAllowanceResponseAminoMsg): _69.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgRevokeAllowanceResponseProtoMsg): _69.MsgRevokeAllowanceResponse;
                toProto(message: _69.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _66.BasicAllowance | _66.PeriodicAllowance | _66.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowanceRequest;
                fromPartial(object: Partial<_68.QueryAllowanceRequest>): _68.QueryAllowanceRequest;
                fromAmino(object: _68.QueryAllowanceRequestAmino): _68.QueryAllowanceRequest;
                toAmino(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _68.QueryAllowanceRequestAminoMsg): _68.QueryAllowanceRequest;
                toAminoMsg(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowanceRequestProtoMsg): _68.QueryAllowanceRequest;
                toProto(message: _68.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowanceResponse;
                fromPartial(object: Partial<_68.QueryAllowanceResponse>): _68.QueryAllowanceResponse;
                fromAmino(object: _68.QueryAllowanceResponseAmino): _68.QueryAllowanceResponse;
                toAmino(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _68.QueryAllowanceResponseAminoMsg): _68.QueryAllowanceResponse;
                toAminoMsg(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowanceResponseProtoMsg): _68.QueryAllowanceResponse;
                toProto(message: _68.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesRequest;
                fromPartial(object: Partial<_68.QueryAllowancesRequest>): _68.QueryAllowancesRequest;
                fromAmino(object: _68.QueryAllowancesRequestAmino): _68.QueryAllowancesRequest;
                toAmino(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _68.QueryAllowancesRequestAminoMsg): _68.QueryAllowancesRequest;
                toAminoMsg(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesRequestProtoMsg): _68.QueryAllowancesRequest;
                toProto(message: _68.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesResponse;
                fromPartial(object: Partial<_68.QueryAllowancesResponse>): _68.QueryAllowancesResponse;
                fromAmino(object: _68.QueryAllowancesResponseAmino): _68.QueryAllowancesResponse;
                toAmino(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _68.QueryAllowancesResponseAminoMsg): _68.QueryAllowancesResponse;
                toAminoMsg(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesResponseProtoMsg): _68.QueryAllowancesResponse;
                toProto(message: _68.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_68.QueryAllowancesByGranterRequest>): _68.QueryAllowancesByGranterRequest;
                fromAmino(object: _68.QueryAllowancesByGranterRequestAmino): _68.QueryAllowancesByGranterRequest;
                toAmino(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _68.QueryAllowancesByGranterRequestAminoMsg): _68.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesByGranterRequestProtoMsg): _68.QueryAllowancesByGranterRequest;
                toProto(message: _68.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_68.QueryAllowancesByGranterResponse>): _68.QueryAllowancesByGranterResponse;
                fromAmino(object: _68.QueryAllowancesByGranterResponseAmino): _68.QueryAllowancesByGranterResponse;
                toAmino(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _68.QueryAllowancesByGranterResponseAminoMsg): _68.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesByGranterResponseProtoMsg): _68.QueryAllowancesByGranterResponse;
                toProto(message: _68.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.GenesisState;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                toProto(message: _67.GenesisState): Uint8Array;
                toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _66.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.BasicAllowance;
                fromPartial(object: Partial<_66.BasicAllowance>): _66.BasicAllowance;
                fromAmino(object: _66.BasicAllowanceAmino): _66.BasicAllowance;
                toAmino(message: _66.BasicAllowance): _66.BasicAllowanceAmino;
                fromAminoMsg(object: _66.BasicAllowanceAminoMsg): _66.BasicAllowance;
                toAminoMsg(message: _66.BasicAllowance): _66.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _66.BasicAllowanceProtoMsg): _66.BasicAllowance;
                toProto(message: _66.BasicAllowance): Uint8Array;
                toProtoMsg(message: _66.BasicAllowance): _66.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _66.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.PeriodicAllowance;
                fromPartial(object: Partial<_66.PeriodicAllowance>): _66.PeriodicAllowance;
                fromAmino(object: _66.PeriodicAllowanceAmino): _66.PeriodicAllowance;
                toAmino(message: _66.PeriodicAllowance): _66.PeriodicAllowanceAmino;
                fromAminoMsg(object: _66.PeriodicAllowanceAminoMsg): _66.PeriodicAllowance;
                toAminoMsg(message: _66.PeriodicAllowance): _66.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _66.PeriodicAllowanceProtoMsg): _66.PeriodicAllowance;
                toProto(message: _66.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _66.PeriodicAllowance): _66.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _66.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.AllowedMsgAllowance;
                fromPartial(object: Partial<_66.AllowedMsgAllowance>): _66.AllowedMsgAllowance;
                fromAmino(object: _66.AllowedMsgAllowanceAmino): _66.AllowedMsgAllowance;
                toAmino(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _66.AllowedMsgAllowanceAminoMsg): _66.AllowedMsgAllowance;
                toAminoMsg(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _66.AllowedMsgAllowanceProtoMsg): _66.AllowedMsgAllowance;
                toProto(message: _66.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _66.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Grant;
                fromPartial(object: Partial<_66.Grant>): _66.Grant;
                fromAmino(object: _66.GrantAmino): _66.Grant;
                toAmino(message: _66.Grant): _66.GrantAmino;
                fromAminoMsg(object: _66.GrantAminoMsg): _66.Grant;
                toAminoMsg(message: _66.Grant): _66.GrantAminoMsg;
                fromProtoMsg(message: _66.GrantProtoMsg): _66.Grant;
                toProto(message: _66.Grant): Uint8Array;
                toProtoMsg(message: _66.Grant): _66.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _70.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _70.Module;
                    fromPartial(_: Partial<_70.Module>): _70.Module;
                    fromAmino(_: _70.ModuleAmino): _70.Module;
                    toAmino(_: _70.Module): _70.ModuleAmino;
                    fromAminoMsg(object: _70.ModuleAminoMsg): _70.Module;
                    toAminoMsg(message: _70.Module): _70.ModuleAminoMsg;
                    fromProtoMsg(message: _70.ModuleProtoMsg): _70.Module;
                    toProto(message: _70.Module): Uint8Array;
                    toProtoMsg(message: _70.Module): _70.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _71.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GenesisState;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
                fromAmino(object: _71.GenesisStateAmino): _71.GenesisState;
                toAmino(message: _71.GenesisState): _71.GenesisStateAmino;
                fromAminoMsg(object: _71.GenesisStateAminoMsg): _71.GenesisState;
                toAminoMsg(message: _71.GenesisState): _71.GenesisStateAminoMsg;
                fromProtoMsg(message: _71.GenesisStateProtoMsg): _71.GenesisState;
                toProto(message: _71.GenesisState): Uint8Array;
                toProtoMsg(message: _71.GenesisState): _71.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _72.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _72.Module;
                    fromPartial(object: Partial<_72.Module>): _72.Module;
                    fromAmino(object: _72.ModuleAmino): _72.Module;
                    toAmino(message: _72.Module): _72.ModuleAmino;
                    fromAminoMsg(object: _72.ModuleAminoMsg): _72.Module;
                    toAminoMsg(message: _72.Module): _72.ModuleAminoMsg;
                    fromProtoMsg(message: _72.ModuleProtoMsg): _72.Module;
                    toProto(message: _72.Module): Uint8Array;
                    toProtoMsg(message: _72.Module): _72.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _76.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _76.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _76.MsgExecLegacyContent;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _76.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _76.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _76.MsgExecLegacyContent;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _76.MsgSubmitProposal) => _76.MsgSubmitProposalAmino;
                    fromAmino: (object: _76.MsgSubmitProposalAmino) => _76.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _76.MsgExecLegacyContent) => _76.MsgExecLegacyContentAmino;
                    fromAmino: (object: _76.MsgExecLegacyContentAmino) => _76.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVote) => _76.MsgVoteAmino;
                    fromAmino: (object: _76.MsgVoteAmino) => _76.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVoteWeighted) => _76.MsgVoteWeightedAmino;
                    fromAmino: (object: _76.MsgVoteWeightedAmino) => _76.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _76.MsgDeposit) => _76.MsgDepositAmino;
                    fromAmino: (object: _76.MsgDepositAmino) => _76.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateParams) => _76.MsgUpdateParamsAmino;
                    fromAmino: (object: _76.MsgUpdateParamsAmino) => _76.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _76.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgSubmitProposal;
                fromPartial(object: Partial<_76.MsgSubmitProposal>): _76.MsgSubmitProposal;
                fromAmino(object: _76.MsgSubmitProposalAmino): _76.MsgSubmitProposal;
                toAmino(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalAmino;
                fromAminoMsg(object: _76.MsgSubmitProposalAminoMsg): _76.MsgSubmitProposal;
                toAminoMsg(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _76.MsgSubmitProposalProtoMsg): _76.MsgSubmitProposal;
                toProto(message: _76.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _76.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_76.MsgSubmitProposalResponse>): _76.MsgSubmitProposalResponse;
                fromAmino(object: _76.MsgSubmitProposalResponseAmino): _76.MsgSubmitProposalResponse;
                toAmino(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _76.MsgSubmitProposalResponseAminoMsg): _76.MsgSubmitProposalResponse;
                toAminoMsg(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _76.MsgSubmitProposalResponseProtoMsg): _76.MsgSubmitProposalResponse;
                toProto(message: _76.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _76.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgExecLegacyContent;
                fromPartial(object: Partial<_76.MsgExecLegacyContent>): _76.MsgExecLegacyContent;
                fromAmino(object: _76.MsgExecLegacyContentAmino): _76.MsgExecLegacyContent;
                toAmino(message: _76.MsgExecLegacyContent): _76.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _76.MsgExecLegacyContentAminoMsg): _76.MsgExecLegacyContent;
                toAminoMsg(message: _76.MsgExecLegacyContent): _76.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _76.MsgExecLegacyContentProtoMsg): _76.MsgExecLegacyContent;
                toProto(message: _76.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _76.MsgExecLegacyContent): _76.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _76.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_76.MsgExecLegacyContentResponse>): _76.MsgExecLegacyContentResponse;
                fromAmino(_: _76.MsgExecLegacyContentResponseAmino): _76.MsgExecLegacyContentResponse;
                toAmino(_: _76.MsgExecLegacyContentResponse): _76.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _76.MsgExecLegacyContentResponseAminoMsg): _76.MsgExecLegacyContentResponse;
                toAminoMsg(message: _76.MsgExecLegacyContentResponse): _76.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _76.MsgExecLegacyContentResponseProtoMsg): _76.MsgExecLegacyContentResponse;
                toProto(message: _76.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _76.MsgExecLegacyContentResponse): _76.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _76.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgVote;
                fromPartial(object: Partial<_76.MsgVote>): _76.MsgVote;
                fromAmino(object: _76.MsgVoteAmino): _76.MsgVote;
                toAmino(message: _76.MsgVote): _76.MsgVoteAmino;
                fromAminoMsg(object: _76.MsgVoteAminoMsg): _76.MsgVote;
                toAminoMsg(message: _76.MsgVote): _76.MsgVoteAminoMsg;
                fromProtoMsg(message: _76.MsgVoteProtoMsg): _76.MsgVote;
                toProto(message: _76.MsgVote): Uint8Array;
                toProtoMsg(message: _76.MsgVote): _76.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _76.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgVoteResponse;
                fromPartial(_: Partial<_76.MsgVoteResponse>): _76.MsgVoteResponse;
                fromAmino(_: _76.MsgVoteResponseAmino): _76.MsgVoteResponse;
                toAmino(_: _76.MsgVoteResponse): _76.MsgVoteResponseAmino;
                fromAminoMsg(object: _76.MsgVoteResponseAminoMsg): _76.MsgVoteResponse;
                toAminoMsg(message: _76.MsgVoteResponse): _76.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _76.MsgVoteResponseProtoMsg): _76.MsgVoteResponse;
                toProto(message: _76.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _76.MsgVoteResponse): _76.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _76.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgVoteWeighted;
                fromPartial(object: Partial<_76.MsgVoteWeighted>): _76.MsgVoteWeighted;
                fromAmino(object: _76.MsgVoteWeightedAmino): _76.MsgVoteWeighted;
                toAmino(message: _76.MsgVoteWeighted): _76.MsgVoteWeightedAmino;
                fromAminoMsg(object: _76.MsgVoteWeightedAminoMsg): _76.MsgVoteWeighted;
                toAminoMsg(message: _76.MsgVoteWeighted): _76.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _76.MsgVoteWeightedProtoMsg): _76.MsgVoteWeighted;
                toProto(message: _76.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _76.MsgVoteWeighted): _76.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _76.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_76.MsgVoteWeightedResponse>): _76.MsgVoteWeightedResponse;
                fromAmino(_: _76.MsgVoteWeightedResponseAmino): _76.MsgVoteWeightedResponse;
                toAmino(_: _76.MsgVoteWeightedResponse): _76.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _76.MsgVoteWeightedResponseAminoMsg): _76.MsgVoteWeightedResponse;
                toAminoMsg(message: _76.MsgVoteWeightedResponse): _76.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _76.MsgVoteWeightedResponseProtoMsg): _76.MsgVoteWeightedResponse;
                toProto(message: _76.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _76.MsgVoteWeightedResponse): _76.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _76.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgDeposit;
                fromPartial(object: Partial<_76.MsgDeposit>): _76.MsgDeposit;
                fromAmino(object: _76.MsgDepositAmino): _76.MsgDeposit;
                toAmino(message: _76.MsgDeposit): _76.MsgDepositAmino;
                fromAminoMsg(object: _76.MsgDepositAminoMsg): _76.MsgDeposit;
                toAminoMsg(message: _76.MsgDeposit): _76.MsgDepositAminoMsg;
                fromProtoMsg(message: _76.MsgDepositProtoMsg): _76.MsgDeposit;
                toProto(message: _76.MsgDeposit): Uint8Array;
                toProtoMsg(message: _76.MsgDeposit): _76.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _76.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgDepositResponse;
                fromPartial(_: Partial<_76.MsgDepositResponse>): _76.MsgDepositResponse;
                fromAmino(_: _76.MsgDepositResponseAmino): _76.MsgDepositResponse;
                toAmino(_: _76.MsgDepositResponse): _76.MsgDepositResponseAmino;
                fromAminoMsg(object: _76.MsgDepositResponseAminoMsg): _76.MsgDepositResponse;
                toAminoMsg(message: _76.MsgDepositResponse): _76.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _76.MsgDepositResponseProtoMsg): _76.MsgDepositResponse;
                toProto(message: _76.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _76.MsgDepositResponse): _76.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _76.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUpdateParams;
                fromPartial(object: Partial<_76.MsgUpdateParams>): _76.MsgUpdateParams;
                fromAmino(object: _76.MsgUpdateParamsAmino): _76.MsgUpdateParams;
                toAmino(message: _76.MsgUpdateParams): _76.MsgUpdateParamsAmino;
                fromAminoMsg(object: _76.MsgUpdateParamsAminoMsg): _76.MsgUpdateParams;
                toAminoMsg(message: _76.MsgUpdateParams): _76.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateParamsProtoMsg): _76.MsgUpdateParams;
                toProto(message: _76.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateParams): _76.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_76.MsgUpdateParamsResponse>): _76.MsgUpdateParamsResponse;
                fromAmino(_: _76.MsgUpdateParamsResponseAmino): _76.MsgUpdateParamsResponse;
                toAmino(_: _76.MsgUpdateParamsResponse): _76.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateParamsResponseAminoMsg): _76.MsgUpdateParamsResponse;
                toAminoMsg(message: _76.MsgUpdateParamsResponse): _76.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateParamsResponseProtoMsg): _76.MsgUpdateParamsResponse;
                toProto(message: _76.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateParamsResponse): _76.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _56.CommunityPoolSpendProposal | _56.CommunityPoolSpendProposalWithDeposit | _104.ParameterChangeProposal | _126.SoftwareUpgradeProposal | _126.CancelSoftwareUpgradeProposal | _78.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _75.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalRequest;
                fromPartial(object: Partial<_75.QueryProposalRequest>): _75.QueryProposalRequest;
                fromAmino(object: _75.QueryProposalRequestAmino): _75.QueryProposalRequest;
                toAmino(message: _75.QueryProposalRequest): _75.QueryProposalRequestAmino;
                fromAminoMsg(object: _75.QueryProposalRequestAminoMsg): _75.QueryProposalRequest;
                toAminoMsg(message: _75.QueryProposalRequest): _75.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _75.QueryProposalRequestProtoMsg): _75.QueryProposalRequest;
                toProto(message: _75.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _75.QueryProposalRequest): _75.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _75.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalResponse;
                fromPartial(object: Partial<_75.QueryProposalResponse>): _75.QueryProposalResponse;
                fromAmino(object: _75.QueryProposalResponseAmino): _75.QueryProposalResponse;
                toAmino(message: _75.QueryProposalResponse): _75.QueryProposalResponseAmino;
                fromAminoMsg(object: _75.QueryProposalResponseAminoMsg): _75.QueryProposalResponse;
                toAminoMsg(message: _75.QueryProposalResponse): _75.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _75.QueryProposalResponseProtoMsg): _75.QueryProposalResponse;
                toProto(message: _75.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _75.QueryProposalResponse): _75.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _75.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalsRequest;
                fromPartial(object: Partial<_75.QueryProposalsRequest>): _75.QueryProposalsRequest;
                fromAmino(object: _75.QueryProposalsRequestAmino): _75.QueryProposalsRequest;
                toAmino(message: _75.QueryProposalsRequest): _75.QueryProposalsRequestAmino;
                fromAminoMsg(object: _75.QueryProposalsRequestAminoMsg): _75.QueryProposalsRequest;
                toAminoMsg(message: _75.QueryProposalsRequest): _75.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryProposalsRequestProtoMsg): _75.QueryProposalsRequest;
                toProto(message: _75.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryProposalsRequest): _75.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _75.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalsResponse;
                fromPartial(object: Partial<_75.QueryProposalsResponse>): _75.QueryProposalsResponse;
                fromAmino(object: _75.QueryProposalsResponseAmino): _75.QueryProposalsResponse;
                toAmino(message: _75.QueryProposalsResponse): _75.QueryProposalsResponseAmino;
                fromAminoMsg(object: _75.QueryProposalsResponseAminoMsg): _75.QueryProposalsResponse;
                toAminoMsg(message: _75.QueryProposalsResponse): _75.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryProposalsResponseProtoMsg): _75.QueryProposalsResponse;
                toProto(message: _75.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryProposalsResponse): _75.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _75.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVoteRequest;
                fromPartial(object: Partial<_75.QueryVoteRequest>): _75.QueryVoteRequest;
                fromAmino(object: _75.QueryVoteRequestAmino): _75.QueryVoteRequest;
                toAmino(message: _75.QueryVoteRequest): _75.QueryVoteRequestAmino;
                fromAminoMsg(object: _75.QueryVoteRequestAminoMsg): _75.QueryVoteRequest;
                toAminoMsg(message: _75.QueryVoteRequest): _75.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _75.QueryVoteRequestProtoMsg): _75.QueryVoteRequest;
                toProto(message: _75.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _75.QueryVoteRequest): _75.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _75.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVoteResponse;
                fromPartial(object: Partial<_75.QueryVoteResponse>): _75.QueryVoteResponse;
                fromAmino(object: _75.QueryVoteResponseAmino): _75.QueryVoteResponse;
                toAmino(message: _75.QueryVoteResponse): _75.QueryVoteResponseAmino;
                fromAminoMsg(object: _75.QueryVoteResponseAminoMsg): _75.QueryVoteResponse;
                toAminoMsg(message: _75.QueryVoteResponse): _75.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _75.QueryVoteResponseProtoMsg): _75.QueryVoteResponse;
                toProto(message: _75.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _75.QueryVoteResponse): _75.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _75.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVotesRequest;
                fromPartial(object: Partial<_75.QueryVotesRequest>): _75.QueryVotesRequest;
                fromAmino(object: _75.QueryVotesRequestAmino): _75.QueryVotesRequest;
                toAmino(message: _75.QueryVotesRequest): _75.QueryVotesRequestAmino;
                fromAminoMsg(object: _75.QueryVotesRequestAminoMsg): _75.QueryVotesRequest;
                toAminoMsg(message: _75.QueryVotesRequest): _75.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _75.QueryVotesRequestProtoMsg): _75.QueryVotesRequest;
                toProto(message: _75.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _75.QueryVotesRequest): _75.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _75.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVotesResponse;
                fromPartial(object: Partial<_75.QueryVotesResponse>): _75.QueryVotesResponse;
                fromAmino(object: _75.QueryVotesResponseAmino): _75.QueryVotesResponse;
                toAmino(message: _75.QueryVotesResponse): _75.QueryVotesResponseAmino;
                fromAminoMsg(object: _75.QueryVotesResponseAminoMsg): _75.QueryVotesResponse;
                toAminoMsg(message: _75.QueryVotesResponse): _75.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _75.QueryVotesResponseProtoMsg): _75.QueryVotesResponse;
                toProto(message: _75.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _75.QueryVotesResponse): _75.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _75.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryParamsRequest;
                fromPartial(object: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
                fromAmino(object: _75.QueryParamsRequestAmino): _75.QueryParamsRequest;
                toAmino(message: _75.QueryParamsRequest): _75.QueryParamsRequestAmino;
                fromAminoMsg(object: _75.QueryParamsRequestAminoMsg): _75.QueryParamsRequest;
                toAminoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryParamsRequestProtoMsg): _75.QueryParamsRequest;
                toProto(message: _75.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _75.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryParamsResponse;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
                fromAmino(object: _75.QueryParamsResponseAmino): _75.QueryParamsResponse;
                toAmino(message: _75.QueryParamsResponse): _75.QueryParamsResponseAmino;
                fromAminoMsg(object: _75.QueryParamsResponseAminoMsg): _75.QueryParamsResponse;
                toAminoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryParamsResponseProtoMsg): _75.QueryParamsResponse;
                toProto(message: _75.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _75.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDepositRequest;
                fromPartial(object: Partial<_75.QueryDepositRequest>): _75.QueryDepositRequest;
                fromAmino(object: _75.QueryDepositRequestAmino): _75.QueryDepositRequest;
                toAmino(message: _75.QueryDepositRequest): _75.QueryDepositRequestAmino;
                fromAminoMsg(object: _75.QueryDepositRequestAminoMsg): _75.QueryDepositRequest;
                toAminoMsg(message: _75.QueryDepositRequest): _75.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDepositRequestProtoMsg): _75.QueryDepositRequest;
                toProto(message: _75.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDepositRequest): _75.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _75.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDepositResponse;
                fromPartial(object: Partial<_75.QueryDepositResponse>): _75.QueryDepositResponse;
                fromAmino(object: _75.QueryDepositResponseAmino): _75.QueryDepositResponse;
                toAmino(message: _75.QueryDepositResponse): _75.QueryDepositResponseAmino;
                fromAminoMsg(object: _75.QueryDepositResponseAminoMsg): _75.QueryDepositResponse;
                toAminoMsg(message: _75.QueryDepositResponse): _75.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDepositResponseProtoMsg): _75.QueryDepositResponse;
                toProto(message: _75.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDepositResponse): _75.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _75.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDepositsRequest;
                fromPartial(object: Partial<_75.QueryDepositsRequest>): _75.QueryDepositsRequest;
                fromAmino(object: _75.QueryDepositsRequestAmino): _75.QueryDepositsRequest;
                toAmino(message: _75.QueryDepositsRequest): _75.QueryDepositsRequestAmino;
                fromAminoMsg(object: _75.QueryDepositsRequestAminoMsg): _75.QueryDepositsRequest;
                toAminoMsg(message: _75.QueryDepositsRequest): _75.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDepositsRequestProtoMsg): _75.QueryDepositsRequest;
                toProto(message: _75.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDepositsRequest): _75.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _75.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryDepositsResponse;
                fromPartial(object: Partial<_75.QueryDepositsResponse>): _75.QueryDepositsResponse;
                fromAmino(object: _75.QueryDepositsResponseAmino): _75.QueryDepositsResponse;
                toAmino(message: _75.QueryDepositsResponse): _75.QueryDepositsResponseAmino;
                fromAminoMsg(object: _75.QueryDepositsResponseAminoMsg): _75.QueryDepositsResponse;
                toAminoMsg(message: _75.QueryDepositsResponse): _75.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDepositsResponseProtoMsg): _75.QueryDepositsResponse;
                toProto(message: _75.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDepositsResponse): _75.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _75.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryTallyResultRequest;
                fromPartial(object: Partial<_75.QueryTallyResultRequest>): _75.QueryTallyResultRequest;
                fromAmino(object: _75.QueryTallyResultRequestAmino): _75.QueryTallyResultRequest;
                toAmino(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _75.QueryTallyResultRequestAminoMsg): _75.QueryTallyResultRequest;
                toAminoMsg(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _75.QueryTallyResultRequestProtoMsg): _75.QueryTallyResultRequest;
                toProto(message: _75.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _75.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryTallyResultResponse;
                fromPartial(object: Partial<_75.QueryTallyResultResponse>): _75.QueryTallyResultResponse;
                fromAmino(object: _75.QueryTallyResultResponseAmino): _75.QueryTallyResultResponse;
                toAmino(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _75.QueryTallyResultResponseAminoMsg): _75.QueryTallyResultResponse;
                toAminoMsg(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _75.QueryTallyResultResponseProtoMsg): _75.QueryTallyResultResponse;
                toProto(message: _75.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _74.VoteOption;
            voteOptionToJSON(object: _74.VoteOption): string;
            proposalStatusFromJSON(object: any): _74.ProposalStatus;
            proposalStatusToJSON(object: _74.ProposalStatus): string;
            VoteOption: typeof _74.VoteOption;
            VoteOptionSDKType: typeof _74.VoteOption;
            VoteOptionAmino: typeof _74.VoteOption;
            ProposalStatus: typeof _74.ProposalStatus;
            ProposalStatusSDKType: typeof _74.ProposalStatus;
            ProposalStatusAmino: typeof _74.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _74.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.WeightedVoteOption;
                fromPartial(object: Partial<_74.WeightedVoteOption>): _74.WeightedVoteOption;
                fromAmino(object: _74.WeightedVoteOptionAmino): _74.WeightedVoteOption;
                toAmino(message: _74.WeightedVoteOption): _74.WeightedVoteOptionAmino;
                fromAminoMsg(object: _74.WeightedVoteOptionAminoMsg): _74.WeightedVoteOption;
                toAminoMsg(message: _74.WeightedVoteOption): _74.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _74.WeightedVoteOptionProtoMsg): _74.WeightedVoteOption;
                toProto(message: _74.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _74.WeightedVoteOption): _74.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _74.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Deposit;
                fromPartial(object: Partial<_74.Deposit>): _74.Deposit;
                fromAmino(object: _74.DepositAmino): _74.Deposit;
                toAmino(message: _74.Deposit): _74.DepositAmino;
                fromAminoMsg(object: _74.DepositAminoMsg): _74.Deposit;
                toAminoMsg(message: _74.Deposit): _74.DepositAminoMsg;
                fromProtoMsg(message: _74.DepositProtoMsg): _74.Deposit;
                toProto(message: _74.Deposit): Uint8Array;
                toProtoMsg(message: _74.Deposit): _74.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _74.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Proposal;
                fromPartial(object: Partial<_74.Proposal>): _74.Proposal;
                fromAmino(object: _74.ProposalAmino): _74.Proposal;
                toAmino(message: _74.Proposal): _74.ProposalAmino;
                fromAminoMsg(object: _74.ProposalAminoMsg): _74.Proposal;
                toAminoMsg(message: _74.Proposal): _74.ProposalAminoMsg;
                fromProtoMsg(message: _74.ProposalProtoMsg): _74.Proposal;
                toProto(message: _74.Proposal): Uint8Array;
                toProtoMsg(message: _74.Proposal): _74.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _74.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.TallyResult;
                fromPartial(object: Partial<_74.TallyResult>): _74.TallyResult;
                fromAmino(object: _74.TallyResultAmino): _74.TallyResult;
                toAmino(message: _74.TallyResult): _74.TallyResultAmino;
                fromAminoMsg(object: _74.TallyResultAminoMsg): _74.TallyResult;
                toAminoMsg(message: _74.TallyResult): _74.TallyResultAminoMsg;
                fromProtoMsg(message: _74.TallyResultProtoMsg): _74.TallyResult;
                toProto(message: _74.TallyResult): Uint8Array;
                toProtoMsg(message: _74.TallyResult): _74.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _74.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Vote;
                fromPartial(object: Partial<_74.Vote>): _74.Vote;
                fromAmino(object: _74.VoteAmino): _74.Vote;
                toAmino(message: _74.Vote): _74.VoteAmino;
                fromAminoMsg(object: _74.VoteAminoMsg): _74.Vote;
                toAminoMsg(message: _74.Vote): _74.VoteAminoMsg;
                fromProtoMsg(message: _74.VoteProtoMsg): _74.Vote;
                toProto(message: _74.Vote): Uint8Array;
                toProtoMsg(message: _74.Vote): _74.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _74.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.DepositParams;
                fromPartial(object: Partial<_74.DepositParams>): _74.DepositParams;
                fromAmino(object: _74.DepositParamsAmino): _74.DepositParams;
                toAmino(message: _74.DepositParams): _74.DepositParamsAmino;
                fromAminoMsg(object: _74.DepositParamsAminoMsg): _74.DepositParams;
                toAminoMsg(message: _74.DepositParams): _74.DepositParamsAminoMsg;
                fromProtoMsg(message: _74.DepositParamsProtoMsg): _74.DepositParams;
                toProto(message: _74.DepositParams): Uint8Array;
                toProtoMsg(message: _74.DepositParams): _74.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _74.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.VotingParams;
                fromPartial(object: Partial<_74.VotingParams>): _74.VotingParams;
                fromAmino(object: _74.VotingParamsAmino): _74.VotingParams;
                toAmino(message: _74.VotingParams): _74.VotingParamsAmino;
                fromAminoMsg(object: _74.VotingParamsAminoMsg): _74.VotingParams;
                toAminoMsg(message: _74.VotingParams): _74.VotingParamsAminoMsg;
                fromProtoMsg(message: _74.VotingParamsProtoMsg): _74.VotingParams;
                toProto(message: _74.VotingParams): Uint8Array;
                toProtoMsg(message: _74.VotingParams): _74.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _74.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.TallyParams;
                fromPartial(object: Partial<_74.TallyParams>): _74.TallyParams;
                fromAmino(object: _74.TallyParamsAmino): _74.TallyParams;
                toAmino(message: _74.TallyParams): _74.TallyParamsAmino;
                fromAminoMsg(object: _74.TallyParamsAminoMsg): _74.TallyParams;
                toAminoMsg(message: _74.TallyParams): _74.TallyParamsAminoMsg;
                fromProtoMsg(message: _74.TallyParamsProtoMsg): _74.TallyParams;
                toProto(message: _74.TallyParams): Uint8Array;
                toProtoMsg(message: _74.TallyParams): _74.TallyParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSubmitProposal) => _80.MsgSubmitProposalAmino;
                    fromAmino: (object: _80.MsgSubmitProposalAmino) => _80.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _80.MsgVote) => _80.MsgVoteAmino;
                    fromAmino: (object: _80.MsgVoteAmino) => _80.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _80.MsgVoteWeighted) => _80.MsgVoteWeightedAmino;
                    fromAmino: (object: _80.MsgVoteWeightedAmino) => _80.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _80.MsgDeposit) => _80.MsgDepositAmino;
                    fromAmino: (object: _80.MsgDepositAmino) => _80.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposal;
                fromPartial(object: Partial<_80.MsgSubmitProposal>): _80.MsgSubmitProposal;
                fromAmino(object: _80.MsgSubmitProposalAmino): _80.MsgSubmitProposal;
                toAmino(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalAminoMsg): _80.MsgSubmitProposal;
                toAminoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalProtoMsg): _80.MsgSubmitProposal;
                toProto(message: _80.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_80.MsgSubmitProposalResponse>): _80.MsgSubmitProposalResponse;
                fromAmino(object: _80.MsgSubmitProposalResponseAmino): _80.MsgSubmitProposalResponse;
                toAmino(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalResponseAminoMsg): _80.MsgSubmitProposalResponse;
                toAminoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalResponseProtoMsg): _80.MsgSubmitProposalResponse;
                toProto(message: _80.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _80.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgVote;
                fromPartial(object: Partial<_80.MsgVote>): _80.MsgVote;
                fromAmino(object: _80.MsgVoteAmino): _80.MsgVote;
                toAmino(message: _80.MsgVote): _80.MsgVoteAmino;
                fromAminoMsg(object: _80.MsgVoteAminoMsg): _80.MsgVote;
                toAminoMsg(message: _80.MsgVote): _80.MsgVoteAminoMsg;
                fromProtoMsg(message: _80.MsgVoteProtoMsg): _80.MsgVote;
                toProto(message: _80.MsgVote): Uint8Array;
                toProtoMsg(message: _80.MsgVote): _80.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _80.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgVoteResponse;
                fromPartial(_: Partial<_80.MsgVoteResponse>): _80.MsgVoteResponse;
                fromAmino(_: _80.MsgVoteResponseAmino): _80.MsgVoteResponse;
                toAmino(_: _80.MsgVoteResponse): _80.MsgVoteResponseAmino;
                fromAminoMsg(object: _80.MsgVoteResponseAminoMsg): _80.MsgVoteResponse;
                toAminoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _80.MsgVoteResponseProtoMsg): _80.MsgVoteResponse;
                toProto(message: _80.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _80.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgVoteWeighted;
                fromPartial(object: Partial<_80.MsgVoteWeighted>): _80.MsgVoteWeighted;
                fromAmino(object: _80.MsgVoteWeightedAmino): _80.MsgVoteWeighted;
                toAmino(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedAmino;
                fromAminoMsg(object: _80.MsgVoteWeightedAminoMsg): _80.MsgVoteWeighted;
                toAminoMsg(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _80.MsgVoteWeightedProtoMsg): _80.MsgVoteWeighted;
                toProto(message: _80.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _80.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_80.MsgVoteWeightedResponse>): _80.MsgVoteWeightedResponse;
                fromAmino(_: _80.MsgVoteWeightedResponseAmino): _80.MsgVoteWeightedResponse;
                toAmino(_: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _80.MsgVoteWeightedResponseAminoMsg): _80.MsgVoteWeightedResponse;
                toAminoMsg(message: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _80.MsgVoteWeightedResponseProtoMsg): _80.MsgVoteWeightedResponse;
                toProto(message: _80.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _80.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgDeposit;
                fromPartial(object: Partial<_80.MsgDeposit>): _80.MsgDeposit;
                fromAmino(object: _80.MsgDepositAmino): _80.MsgDeposit;
                toAmino(message: _80.MsgDeposit): _80.MsgDepositAmino;
                fromAminoMsg(object: _80.MsgDepositAminoMsg): _80.MsgDeposit;
                toAminoMsg(message: _80.MsgDeposit): _80.MsgDepositAminoMsg;
                fromProtoMsg(message: _80.MsgDepositProtoMsg): _80.MsgDeposit;
                toProto(message: _80.MsgDeposit): Uint8Array;
                toProtoMsg(message: _80.MsgDeposit): _80.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _80.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgDepositResponse;
                fromPartial(_: Partial<_80.MsgDepositResponse>): _80.MsgDepositResponse;
                fromAmino(_: _80.MsgDepositResponseAmino): _80.MsgDepositResponse;
                toAmino(_: _80.MsgDepositResponse): _80.MsgDepositResponseAmino;
                fromAminoMsg(object: _80.MsgDepositResponseAminoMsg): _80.MsgDepositResponse;
                toAminoMsg(message: _80.MsgDepositResponse): _80.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _80.MsgDepositResponseProtoMsg): _80.MsgDepositResponse;
                toProto(message: _80.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _80.MsgDepositResponse): _80.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _56.CommunityPoolSpendProposal | _56.CommunityPoolSpendProposalWithDeposit | _104.ParameterChangeProposal | _126.SoftwareUpgradeProposal | _126.CancelSoftwareUpgradeProposal | _78.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalRequest;
                fromPartial(object: Partial<_79.QueryProposalRequest>): _79.QueryProposalRequest;
                fromAmino(object: _79.QueryProposalRequestAmino): _79.QueryProposalRequest;
                toAmino(message: _79.QueryProposalRequest): _79.QueryProposalRequestAmino;
                fromAminoMsg(object: _79.QueryProposalRequestAminoMsg): _79.QueryProposalRequest;
                toAminoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalRequestProtoMsg): _79.QueryProposalRequest;
                toProto(message: _79.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalResponse;
                fromPartial(object: Partial<_79.QueryProposalResponse>): _79.QueryProposalResponse;
                fromAmino(object: _79.QueryProposalResponseAmino): _79.QueryProposalResponse;
                toAmino(message: _79.QueryProposalResponse): _79.QueryProposalResponseAmino;
                fromAminoMsg(object: _79.QueryProposalResponseAminoMsg): _79.QueryProposalResponse;
                toAminoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalResponseProtoMsg): _79.QueryProposalResponse;
                toProto(message: _79.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsRequest;
                fromPartial(object: Partial<_79.QueryProposalsRequest>): _79.QueryProposalsRequest;
                fromAmino(object: _79.QueryProposalsRequestAmino): _79.QueryProposalsRequest;
                toAmino(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestAmino;
                fromAminoMsg(object: _79.QueryProposalsRequestAminoMsg): _79.QueryProposalsRequest;
                toAminoMsg(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsRequestProtoMsg): _79.QueryProposalsRequest;
                toProto(message: _79.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsResponse;
                fromPartial(object: Partial<_79.QueryProposalsResponse>): _79.QueryProposalsResponse;
                fromAmino(object: _79.QueryProposalsResponseAmino): _79.QueryProposalsResponse;
                toAmino(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseAmino;
                fromAminoMsg(object: _79.QueryProposalsResponseAminoMsg): _79.QueryProposalsResponse;
                toAminoMsg(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsResponseProtoMsg): _79.QueryProposalsResponse;
                toProto(message: _79.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _79.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteRequest;
                fromPartial(object: Partial<_79.QueryVoteRequest>): _79.QueryVoteRequest;
                fromAmino(object: _79.QueryVoteRequestAmino): _79.QueryVoteRequest;
                toAmino(message: _79.QueryVoteRequest): _79.QueryVoteRequestAmino;
                fromAminoMsg(object: _79.QueryVoteRequestAminoMsg): _79.QueryVoteRequest;
                toAminoMsg(message: _79.QueryVoteRequest): _79.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVoteRequestProtoMsg): _79.QueryVoteRequest;
                toProto(message: _79.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVoteRequest): _79.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _79.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteResponse;
                fromPartial(object: Partial<_79.QueryVoteResponse>): _79.QueryVoteResponse;
                fromAmino(object: _79.QueryVoteResponseAmino): _79.QueryVoteResponse;
                toAmino(message: _79.QueryVoteResponse): _79.QueryVoteResponseAmino;
                fromAminoMsg(object: _79.QueryVoteResponseAminoMsg): _79.QueryVoteResponse;
                toAminoMsg(message: _79.QueryVoteResponse): _79.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVoteResponseProtoMsg): _79.QueryVoteResponse;
                toProto(message: _79.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVoteResponse): _79.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _79.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesRequest;
                fromPartial(object: Partial<_79.QueryVotesRequest>): _79.QueryVotesRequest;
                fromAmino(object: _79.QueryVotesRequestAmino): _79.QueryVotesRequest;
                toAmino(message: _79.QueryVotesRequest): _79.QueryVotesRequestAmino;
                fromAminoMsg(object: _79.QueryVotesRequestAminoMsg): _79.QueryVotesRequest;
                toAminoMsg(message: _79.QueryVotesRequest): _79.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVotesRequestProtoMsg): _79.QueryVotesRequest;
                toProto(message: _79.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVotesRequest): _79.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _79.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesResponse;
                fromPartial(object: Partial<_79.QueryVotesResponse>): _79.QueryVotesResponse;
                fromAmino(object: _79.QueryVotesResponseAmino): _79.QueryVotesResponse;
                toAmino(message: _79.QueryVotesResponse): _79.QueryVotesResponseAmino;
                fromAminoMsg(object: _79.QueryVotesResponseAminoMsg): _79.QueryVotesResponse;
                toAminoMsg(message: _79.QueryVotesResponse): _79.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVotesResponseProtoMsg): _79.QueryVotesResponse;
                toProto(message: _79.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVotesResponse): _79.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsRequest;
                fromPartial(object: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(object: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(message: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                toAminoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                toProto(message: _79.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _79.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsResponse;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
                fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                toAminoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                toProto(message: _79.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _79.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositRequest;
                fromPartial(object: Partial<_79.QueryDepositRequest>): _79.QueryDepositRequest;
                fromAmino(object: _79.QueryDepositRequestAmino): _79.QueryDepositRequest;
                toAmino(message: _79.QueryDepositRequest): _79.QueryDepositRequestAmino;
                fromAminoMsg(object: _79.QueryDepositRequestAminoMsg): _79.QueryDepositRequest;
                toAminoMsg(message: _79.QueryDepositRequest): _79.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDepositRequestProtoMsg): _79.QueryDepositRequest;
                toProto(message: _79.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDepositRequest): _79.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _79.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositResponse;
                fromPartial(object: Partial<_79.QueryDepositResponse>): _79.QueryDepositResponse;
                fromAmino(object: _79.QueryDepositResponseAmino): _79.QueryDepositResponse;
                toAmino(message: _79.QueryDepositResponse): _79.QueryDepositResponseAmino;
                fromAminoMsg(object: _79.QueryDepositResponseAminoMsg): _79.QueryDepositResponse;
                toAminoMsg(message: _79.QueryDepositResponse): _79.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDepositResponseProtoMsg): _79.QueryDepositResponse;
                toProto(message: _79.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDepositResponse): _79.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _79.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositsRequest;
                fromPartial(object: Partial<_79.QueryDepositsRequest>): _79.QueryDepositsRequest;
                fromAmino(object: _79.QueryDepositsRequestAmino): _79.QueryDepositsRequest;
                toAmino(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestAmino;
                fromAminoMsg(object: _79.QueryDepositsRequestAminoMsg): _79.QueryDepositsRequest;
                toAminoMsg(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDepositsRequestProtoMsg): _79.QueryDepositsRequest;
                toProto(message: _79.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _79.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositsResponse;
                fromPartial(object: Partial<_79.QueryDepositsResponse>): _79.QueryDepositsResponse;
                fromAmino(object: _79.QueryDepositsResponseAmino): _79.QueryDepositsResponse;
                toAmino(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseAmino;
                fromAminoMsg(object: _79.QueryDepositsResponseAminoMsg): _79.QueryDepositsResponse;
                toAminoMsg(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDepositsResponseProtoMsg): _79.QueryDepositsResponse;
                toProto(message: _79.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultRequest;
                fromPartial(object: Partial<_79.QueryTallyResultRequest>): _79.QueryTallyResultRequest;
                fromAmino(object: _79.QueryTallyResultRequestAmino): _79.QueryTallyResultRequest;
                toAmino(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _79.QueryTallyResultRequestAminoMsg): _79.QueryTallyResultRequest;
                toAminoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultRequestProtoMsg): _79.QueryTallyResultRequest;
                toProto(message: _79.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultResponse;
                fromPartial(object: Partial<_79.QueryTallyResultResponse>): _79.QueryTallyResultResponse;
                fromAmino(object: _79.QueryTallyResultResponseAmino): _79.QueryTallyResultResponse;
                toAmino(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _79.QueryTallyResultResponseAminoMsg): _79.QueryTallyResultResponse;
                toAminoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultResponseProtoMsg): _79.QueryTallyResultResponse;
                toProto(message: _79.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _78.VoteOption;
            voteOptionToJSON(object: _78.VoteOption): string;
            proposalStatusFromJSON(object: any): _78.ProposalStatus;
            proposalStatusToJSON(object: _78.ProposalStatus): string;
            VoteOption: typeof _78.VoteOption;
            VoteOptionSDKType: typeof _78.VoteOption;
            VoteOptionAmino: typeof _78.VoteOption;
            ProposalStatus: typeof _78.ProposalStatus;
            ProposalStatusSDKType: typeof _78.ProposalStatus;
            ProposalStatusAmino: typeof _78.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _78.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.WeightedVoteOption;
                fromPartial(object: Partial<_78.WeightedVoteOption>): _78.WeightedVoteOption;
                fromAmino(object: _78.WeightedVoteOptionAmino): _78.WeightedVoteOption;
                toAmino(message: _78.WeightedVoteOption): _78.WeightedVoteOptionAmino;
                fromAminoMsg(object: _78.WeightedVoteOptionAminoMsg): _78.WeightedVoteOption;
                toAminoMsg(message: _78.WeightedVoteOption): _78.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _78.WeightedVoteOptionProtoMsg): _78.WeightedVoteOption;
                toProto(message: _78.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _78.WeightedVoteOption): _78.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _78.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TextProposal;
                fromPartial(object: Partial<_78.TextProposal>): _78.TextProposal;
                fromAmino(object: _78.TextProposalAmino): _78.TextProposal;
                toAmino(message: _78.TextProposal): _78.TextProposalAmino;
                fromAminoMsg(object: _78.TextProposalAminoMsg): _78.TextProposal;
                toAminoMsg(message: _78.TextProposal): _78.TextProposalAminoMsg;
                fromProtoMsg(message: _78.TextProposalProtoMsg): _78.TextProposal;
                toProto(message: _78.TextProposal): Uint8Array;
                toProtoMsg(message: _78.TextProposal): _78.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _78.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Deposit;
                fromPartial(object: Partial<_78.Deposit>): _78.Deposit;
                fromAmino(object: _78.DepositAmino): _78.Deposit;
                toAmino(message: _78.Deposit): _78.DepositAmino;
                fromAminoMsg(object: _78.DepositAminoMsg): _78.Deposit;
                toAminoMsg(message: _78.Deposit): _78.DepositAminoMsg;
                fromProtoMsg(message: _78.DepositProtoMsg): _78.Deposit;
                toProto(message: _78.Deposit): Uint8Array;
                toProtoMsg(message: _78.Deposit): _78.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _78.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Proposal;
                fromPartial(object: Partial<_78.Proposal>): _78.Proposal;
                fromAmino(object: _78.ProposalAmino): _78.Proposal;
                toAmino(message: _78.Proposal): _78.ProposalAmino;
                fromAminoMsg(object: _78.ProposalAminoMsg): _78.Proposal;
                toAminoMsg(message: _78.Proposal): _78.ProposalAminoMsg;
                fromProtoMsg(message: _78.ProposalProtoMsg): _78.Proposal;
                toProto(message: _78.Proposal): Uint8Array;
                toProtoMsg(message: _78.Proposal): _78.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _78.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TallyResult;
                fromPartial(object: Partial<_78.TallyResult>): _78.TallyResult;
                fromAmino(object: _78.TallyResultAmino): _78.TallyResult;
                toAmino(message: _78.TallyResult): _78.TallyResultAmino;
                fromAminoMsg(object: _78.TallyResultAminoMsg): _78.TallyResult;
                toAminoMsg(message: _78.TallyResult): _78.TallyResultAminoMsg;
                fromProtoMsg(message: _78.TallyResultProtoMsg): _78.TallyResult;
                toProto(message: _78.TallyResult): Uint8Array;
                toProtoMsg(message: _78.TallyResult): _78.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _78.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Vote;
                fromPartial(object: Partial<_78.Vote>): _78.Vote;
                fromAmino(object: _78.VoteAmino): _78.Vote;
                toAmino(message: _78.Vote): _78.VoteAmino;
                fromAminoMsg(object: _78.VoteAminoMsg): _78.Vote;
                toAminoMsg(message: _78.Vote): _78.VoteAminoMsg;
                fromProtoMsg(message: _78.VoteProtoMsg): _78.Vote;
                toProto(message: _78.Vote): Uint8Array;
                toProtoMsg(message: _78.Vote): _78.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _78.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DepositParams;
                fromPartial(object: Partial<_78.DepositParams>): _78.DepositParams;
                fromAmino(object: _78.DepositParamsAmino): _78.DepositParams;
                toAmino(message: _78.DepositParams): _78.DepositParamsAmino;
                fromAminoMsg(object: _78.DepositParamsAminoMsg): _78.DepositParams;
                toAminoMsg(message: _78.DepositParams): _78.DepositParamsAminoMsg;
                fromProtoMsg(message: _78.DepositParamsProtoMsg): _78.DepositParams;
                toProto(message: _78.DepositParams): Uint8Array;
                toProtoMsg(message: _78.DepositParams): _78.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _78.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.VotingParams;
                fromPartial(object: Partial<_78.VotingParams>): _78.VotingParams;
                fromAmino(object: _78.VotingParamsAmino): _78.VotingParams;
                toAmino(message: _78.VotingParams): _78.VotingParamsAmino;
                fromAminoMsg(object: _78.VotingParamsAminoMsg): _78.VotingParams;
                toAminoMsg(message: _78.VotingParams): _78.VotingParamsAminoMsg;
                fromProtoMsg(message: _78.VotingParamsProtoMsg): _78.VotingParams;
                toProto(message: _78.VotingParams): Uint8Array;
                toProtoMsg(message: _78.VotingParams): _78.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _78.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TallyParams;
                fromPartial(object: Partial<_78.TallyParams>): _78.TallyParams;
                fromAmino(object: _78.TallyParamsAmino): _78.TallyParams;
                toAmino(message: _78.TallyParams): _78.TallyParamsAmino;
                fromAminoMsg(object: _78.TallyParamsAminoMsg): _78.TallyParams;
                toAminoMsg(message: _78.TallyParams): _78.TallyParamsAminoMsg;
                fromProtoMsg(message: _78.TallyParamsProtoMsg): _78.TallyParams;
                toProto(message: _78.TallyParams): Uint8Array;
                toProtoMsg(message: _78.TallyParams): _78.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _77.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _81.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _81.Module;
                    fromPartial(object: Partial<_81.Module>): _81.Module;
                    fromAmino(object: _81.ModuleAmino): _81.Module;
                    toAmino(message: _81.Module): _81.ModuleAmino;
                    fromAminoMsg(object: _81.ModuleAminoMsg): _81.Module;
                    toAminoMsg(message: _81.Module): _81.ModuleAminoMsg;
                    fromProtoMsg(message: _81.ModuleProtoMsg): _81.Module;
                    toProto(message: _81.Module): Uint8Array;
                    toProtoMsg(message: _81.Module): _81.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                groupInfo(request: _84.QueryGroupInfoRequest): Promise<_84.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _84.QueryGroupPolicyInfoRequest): Promise<_84.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _84.QueryGroupMembersRequest): Promise<_84.QueryGroupMembersResponse>;
                groupsByAdmin(request: _84.QueryGroupsByAdminRequest): Promise<_84.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _84.QueryGroupPoliciesByGroupRequest): Promise<_84.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _84.QueryGroupPoliciesByAdminRequest): Promise<_84.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _84.QueryProposalRequest): Promise<_84.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _84.QueryProposalsByGroupPolicyRequest): Promise<_84.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _84.QueryVoteByProposalVoterRequest): Promise<_84.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _84.QueryVotesByProposalRequest): Promise<_84.QueryVotesByProposalResponse>;
                votesByVoter(request: _84.QueryVotesByVoterRequest): Promise<_84.QueryVotesByVoterResponse>;
                groupsByMember(request: _84.QueryGroupsByMemberRequest): Promise<_84.QueryGroupsByMemberResponse>;
                tallyResult(request: _84.QueryTallyResultRequest): Promise<_84.QueryTallyResultResponse>;
                groups(request?: _84.QueryGroupsRequest): Promise<_84.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _85.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _85.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _85.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _85.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _85.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _85.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _85.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _85.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _85.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _85.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _85.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _85.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _85.MsgCreateGroup): {
                        typeUrl: string;
                        value: _85.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _85.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _85.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _85.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _85.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _85.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _85.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _85.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _85.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _85.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _85.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _85.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _85.MsgWithdrawProposal;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    exec(value: _85.MsgExec): {
                        typeUrl: string;
                        value: _85.MsgExec;
                    };
                    leaveGroup(value: _85.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _85.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _85.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _85.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _85.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _85.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _85.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _85.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _85.MsgCreateGroup): {
                        typeUrl: string;
                        value: _85.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _85.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _85.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _85.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _85.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _85.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _85.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _85.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _85.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _85.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _85.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _85.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _85.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _85.MsgWithdrawProposal;
                    };
                    vote(value: _85.MsgVote): {
                        typeUrl: string;
                        value: _85.MsgVote;
                    };
                    exec(value: _85.MsgExec): {
                        typeUrl: string;
                        value: _85.MsgExec;
                    };
                    leaveGroup(value: _85.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _85.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreateGroup) => _85.MsgCreateGroupAmino;
                    fromAmino: (object: _85.MsgCreateGroupAmino) => _85.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateGroupMembers) => _85.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _85.MsgUpdateGroupMembersAmino) => _85.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateGroupAdmin) => _85.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _85.MsgUpdateGroupAdminAmino) => _85.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateGroupMetadata) => _85.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _85.MsgUpdateGroupMetadataAmino) => _85.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreateGroupPolicy) => _85.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _85.MsgCreateGroupPolicyAmino) => _85.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreateGroupWithPolicy) => _85.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _85.MsgCreateGroupWithPolicyAmino) => _85.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateGroupPolicyAdmin) => _85.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _85.MsgUpdateGroupPolicyAdminAmino) => _85.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateGroupPolicyDecisionPolicy) => _85.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _85.MsgUpdateGroupPolicyDecisionPolicyAmino) => _85.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateGroupPolicyMetadata) => _85.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _85.MsgUpdateGroupPolicyMetadataAmino) => _85.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _85.MsgSubmitProposal) => _85.MsgSubmitProposalAmino;
                    fromAmino: (object: _85.MsgSubmitProposalAmino) => _85.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _85.MsgWithdrawProposal) => _85.MsgWithdrawProposalAmino;
                    fromAmino: (object: _85.MsgWithdrawProposalAmino) => _85.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _85.MsgVote) => _85.MsgVoteAmino;
                    fromAmino: (object: _85.MsgVoteAmino) => _85.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _85.MsgExec) => _85.MsgExecAmino;
                    fromAmino: (object: _85.MsgExecAmino) => _85.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _85.MsgLeaveGroup) => _85.MsgLeaveGroupAmino;
                    fromAmino: (object: _85.MsgLeaveGroupAmino) => _85.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _86.VoteOption;
            voteOptionToJSON(object: _86.VoteOption): string;
            proposalStatusFromJSON(object: any): _86.ProposalStatus;
            proposalStatusToJSON(object: _86.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _86.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _86.ProposalExecutorResult): string;
            VoteOption: typeof _86.VoteOption;
            VoteOptionSDKType: typeof _86.VoteOption;
            VoteOptionAmino: typeof _86.VoteOption;
            ProposalStatus: typeof _86.ProposalStatus;
            ProposalStatusSDKType: typeof _86.ProposalStatus;
            ProposalStatusAmino: typeof _86.ProposalStatus;
            ProposalExecutorResult: typeof _86.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _86.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _86.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _86.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Member;
                fromPartial(object: Partial<_86.Member>): _86.Member;
                fromAmino(object: _86.MemberAmino): _86.Member;
                toAmino(message: _86.Member): _86.MemberAmino;
                fromAminoMsg(object: _86.MemberAminoMsg): _86.Member;
                toAminoMsg(message: _86.Member): _86.MemberAminoMsg;
                fromProtoMsg(message: _86.MemberProtoMsg): _86.Member;
                toProto(message: _86.Member): Uint8Array;
                toProtoMsg(message: _86.Member): _86.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _86.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MemberRequest;
                fromPartial(object: Partial<_86.MemberRequest>): _86.MemberRequest;
                fromAmino(object: _86.MemberRequestAmino): _86.MemberRequest;
                toAmino(message: _86.MemberRequest): _86.MemberRequestAmino;
                fromAminoMsg(object: _86.MemberRequestAminoMsg): _86.MemberRequest;
                toAminoMsg(message: _86.MemberRequest): _86.MemberRequestAminoMsg;
                fromProtoMsg(message: _86.MemberRequestProtoMsg): _86.MemberRequest;
                toProto(message: _86.MemberRequest): Uint8Array;
                toProtoMsg(message: _86.MemberRequest): _86.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _86.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_86.ThresholdDecisionPolicy>): _86.ThresholdDecisionPolicy;
                fromAmino(object: _86.ThresholdDecisionPolicyAmino): _86.ThresholdDecisionPolicy;
                toAmino(message: _86.ThresholdDecisionPolicy): _86.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _86.ThresholdDecisionPolicyAminoMsg): _86.ThresholdDecisionPolicy;
                toAminoMsg(message: _86.ThresholdDecisionPolicy): _86.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _86.ThresholdDecisionPolicyProtoMsg): _86.ThresholdDecisionPolicy;
                toProto(message: _86.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _86.ThresholdDecisionPolicy): _86.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _86.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.PercentageDecisionPolicy;
                fromPartial(object: Partial<_86.PercentageDecisionPolicy>): _86.PercentageDecisionPolicy;
                fromAmino(object: _86.PercentageDecisionPolicyAmino): _86.PercentageDecisionPolicy;
                toAmino(message: _86.PercentageDecisionPolicy): _86.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _86.PercentageDecisionPolicyAminoMsg): _86.PercentageDecisionPolicy;
                toAminoMsg(message: _86.PercentageDecisionPolicy): _86.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _86.PercentageDecisionPolicyProtoMsg): _86.PercentageDecisionPolicy;
                toProto(message: _86.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _86.PercentageDecisionPolicy): _86.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _86.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.DecisionPolicyWindows;
                fromPartial(object: Partial<_86.DecisionPolicyWindows>): _86.DecisionPolicyWindows;
                fromAmino(object: _86.DecisionPolicyWindowsAmino): _86.DecisionPolicyWindows;
                toAmino(message: _86.DecisionPolicyWindows): _86.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _86.DecisionPolicyWindowsAminoMsg): _86.DecisionPolicyWindows;
                toAminoMsg(message: _86.DecisionPolicyWindows): _86.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _86.DecisionPolicyWindowsProtoMsg): _86.DecisionPolicyWindows;
                toProto(message: _86.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _86.DecisionPolicyWindows): _86.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _86.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GroupInfo;
                fromPartial(object: Partial<_86.GroupInfo>): _86.GroupInfo;
                fromAmino(object: _86.GroupInfoAmino): _86.GroupInfo;
                toAmino(message: _86.GroupInfo): _86.GroupInfoAmino;
                fromAminoMsg(object: _86.GroupInfoAminoMsg): _86.GroupInfo;
                toAminoMsg(message: _86.GroupInfo): _86.GroupInfoAminoMsg;
                fromProtoMsg(message: _86.GroupInfoProtoMsg): _86.GroupInfo;
                toProto(message: _86.GroupInfo): Uint8Array;
                toProtoMsg(message: _86.GroupInfo): _86.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _86.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GroupMember;
                fromPartial(object: Partial<_86.GroupMember>): _86.GroupMember;
                fromAmino(object: _86.GroupMemberAmino): _86.GroupMember;
                toAmino(message: _86.GroupMember): _86.GroupMemberAmino;
                fromAminoMsg(object: _86.GroupMemberAminoMsg): _86.GroupMember;
                toAminoMsg(message: _86.GroupMember): _86.GroupMemberAminoMsg;
                fromProtoMsg(message: _86.GroupMemberProtoMsg): _86.GroupMember;
                toProto(message: _86.GroupMember): Uint8Array;
                toProtoMsg(message: _86.GroupMember): _86.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _86.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GroupPolicyInfo;
                fromPartial(object: Partial<_86.GroupPolicyInfo>): _86.GroupPolicyInfo;
                fromAmino(object: _86.GroupPolicyInfoAmino): _86.GroupPolicyInfo;
                toAmino(message: _86.GroupPolicyInfo): _86.GroupPolicyInfoAmino;
                fromAminoMsg(object: _86.GroupPolicyInfoAminoMsg): _86.GroupPolicyInfo;
                toAminoMsg(message: _86.GroupPolicyInfo): _86.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _86.GroupPolicyInfoProtoMsg): _86.GroupPolicyInfo;
                toProto(message: _86.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _86.GroupPolicyInfo): _86.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _86.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Proposal;
                fromPartial(object: Partial<_86.Proposal>): _86.Proposal;
                fromAmino(object: _86.ProposalAmino): _86.Proposal;
                toAmino(message: _86.Proposal): _86.ProposalAmino;
                fromAminoMsg(object: _86.ProposalAminoMsg): _86.Proposal;
                toAminoMsg(message: _86.Proposal): _86.ProposalAminoMsg;
                fromProtoMsg(message: _86.ProposalProtoMsg): _86.Proposal;
                toProto(message: _86.Proposal): Uint8Array;
                toProtoMsg(message: _86.Proposal): _86.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _86.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.TallyResult;
                fromPartial(object: Partial<_86.TallyResult>): _86.TallyResult;
                fromAmino(object: _86.TallyResultAmino): _86.TallyResult;
                toAmino(message: _86.TallyResult): _86.TallyResultAmino;
                fromAminoMsg(object: _86.TallyResultAminoMsg): _86.TallyResult;
                toAminoMsg(message: _86.TallyResult): _86.TallyResultAminoMsg;
                fromProtoMsg(message: _86.TallyResultProtoMsg): _86.TallyResult;
                toProto(message: _86.TallyResult): Uint8Array;
                toProtoMsg(message: _86.TallyResult): _86.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _86.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Vote;
                fromPartial(object: Partial<_86.Vote>): _86.Vote;
                fromAmino(object: _86.VoteAmino): _86.Vote;
                toAmino(message: _86.Vote): _86.VoteAmino;
                fromAminoMsg(object: _86.VoteAminoMsg): _86.Vote;
                toAminoMsg(message: _86.Vote): _86.VoteAminoMsg;
                fromProtoMsg(message: _86.VoteProtoMsg): _86.Vote;
                toProto(message: _86.Vote): Uint8Array;
                toProtoMsg(message: _86.Vote): _86.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _86.ThresholdDecisionPolicy | _86.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _85.Exec;
            execToJSON(object: _85.Exec): string;
            Exec: typeof _85.Exec;
            ExecSDKType: typeof _85.Exec;
            ExecAmino: typeof _85.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _85.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCreateGroup;
                fromPartial(object: Partial<_85.MsgCreateGroup>): _85.MsgCreateGroup;
                fromAmino(object: _85.MsgCreateGroupAmino): _85.MsgCreateGroup;
                toAmino(message: _85.MsgCreateGroup): _85.MsgCreateGroupAmino;
                fromAminoMsg(object: _85.MsgCreateGroupAminoMsg): _85.MsgCreateGroup;
                toAminoMsg(message: _85.MsgCreateGroup): _85.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _85.MsgCreateGroupProtoMsg): _85.MsgCreateGroup;
                toProto(message: _85.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _85.MsgCreateGroup): _85.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _85.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCreateGroupResponse;
                fromPartial(object: Partial<_85.MsgCreateGroupResponse>): _85.MsgCreateGroupResponse;
                fromAmino(object: _85.MsgCreateGroupResponseAmino): _85.MsgCreateGroupResponse;
                toAmino(message: _85.MsgCreateGroupResponse): _85.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _85.MsgCreateGroupResponseAminoMsg): _85.MsgCreateGroupResponse;
                toAminoMsg(message: _85.MsgCreateGroupResponse): _85.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _85.MsgCreateGroupResponseProtoMsg): _85.MsgCreateGroupResponse;
                toProto(message: _85.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreateGroupResponse): _85.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _85.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_85.MsgUpdateGroupMembers>): _85.MsgUpdateGroupMembers;
                fromAmino(object: _85.MsgUpdateGroupMembersAmino): _85.MsgUpdateGroupMembers;
                toAmino(message: _85.MsgUpdateGroupMembers): _85.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupMembersAminoMsg): _85.MsgUpdateGroupMembers;
                toAminoMsg(message: _85.MsgUpdateGroupMembers): _85.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupMembersProtoMsg): _85.MsgUpdateGroupMembers;
                toProto(message: _85.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupMembers): _85.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _85.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_85.MsgUpdateGroupMembersResponse>): _85.MsgUpdateGroupMembersResponse;
                fromAmino(_: _85.MsgUpdateGroupMembersResponseAmino): _85.MsgUpdateGroupMembersResponse;
                toAmino(_: _85.MsgUpdateGroupMembersResponse): _85.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupMembersResponseAminoMsg): _85.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _85.MsgUpdateGroupMembersResponse): _85.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupMembersResponseProtoMsg): _85.MsgUpdateGroupMembersResponse;
                toProto(message: _85.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupMembersResponse): _85.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _85.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_85.MsgUpdateGroupAdmin>): _85.MsgUpdateGroupAdmin;
                fromAmino(object: _85.MsgUpdateGroupAdminAmino): _85.MsgUpdateGroupAdmin;
                toAmino(message: _85.MsgUpdateGroupAdmin): _85.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupAdminAminoMsg): _85.MsgUpdateGroupAdmin;
                toAminoMsg(message: _85.MsgUpdateGroupAdmin): _85.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupAdminProtoMsg): _85.MsgUpdateGroupAdmin;
                toProto(message: _85.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupAdmin): _85.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _85.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_85.MsgUpdateGroupAdminResponse>): _85.MsgUpdateGroupAdminResponse;
                fromAmino(_: _85.MsgUpdateGroupAdminResponseAmino): _85.MsgUpdateGroupAdminResponse;
                toAmino(_: _85.MsgUpdateGroupAdminResponse): _85.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupAdminResponseAminoMsg): _85.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _85.MsgUpdateGroupAdminResponse): _85.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupAdminResponseProtoMsg): _85.MsgUpdateGroupAdminResponse;
                toProto(message: _85.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupAdminResponse): _85.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _85.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_85.MsgUpdateGroupMetadata>): _85.MsgUpdateGroupMetadata;
                fromAmino(object: _85.MsgUpdateGroupMetadataAmino): _85.MsgUpdateGroupMetadata;
                toAmino(message: _85.MsgUpdateGroupMetadata): _85.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupMetadataAminoMsg): _85.MsgUpdateGroupMetadata;
                toAminoMsg(message: _85.MsgUpdateGroupMetadata): _85.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupMetadataProtoMsg): _85.MsgUpdateGroupMetadata;
                toProto(message: _85.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupMetadata): _85.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _85.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_85.MsgUpdateGroupMetadataResponse>): _85.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _85.MsgUpdateGroupMetadataResponseAmino): _85.MsgUpdateGroupMetadataResponse;
                toAmino(_: _85.MsgUpdateGroupMetadataResponse): _85.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupMetadataResponseAminoMsg): _85.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _85.MsgUpdateGroupMetadataResponse): _85.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupMetadataResponseProtoMsg): _85.MsgUpdateGroupMetadataResponse;
                toProto(message: _85.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupMetadataResponse): _85.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _85.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_85.MsgCreateGroupPolicy>): _85.MsgCreateGroupPolicy;
                fromAmino(object: _85.MsgCreateGroupPolicyAmino): _85.MsgCreateGroupPolicy;
                toAmino(message: _85.MsgCreateGroupPolicy): _85.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _85.MsgCreateGroupPolicyAminoMsg): _85.MsgCreateGroupPolicy;
                toAminoMsg(message: _85.MsgCreateGroupPolicy): _85.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _85.MsgCreateGroupPolicyProtoMsg): _85.MsgCreateGroupPolicy;
                toProto(message: _85.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _85.MsgCreateGroupPolicy): _85.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _85.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_85.MsgCreateGroupPolicyResponse>): _85.MsgCreateGroupPolicyResponse;
                fromAmino(object: _85.MsgCreateGroupPolicyResponseAmino): _85.MsgCreateGroupPolicyResponse;
                toAmino(message: _85.MsgCreateGroupPolicyResponse): _85.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _85.MsgCreateGroupPolicyResponseAminoMsg): _85.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _85.MsgCreateGroupPolicyResponse): _85.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _85.MsgCreateGroupPolicyResponseProtoMsg): _85.MsgCreateGroupPolicyResponse;
                toProto(message: _85.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreateGroupPolicyResponse): _85.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _85.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_85.MsgUpdateGroupPolicyAdmin>): _85.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _85.MsgUpdateGroupPolicyAdminAmino): _85.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _85.MsgUpdateGroupPolicyAdmin): _85.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupPolicyAdminAminoMsg): _85.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _85.MsgUpdateGroupPolicyAdmin): _85.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupPolicyAdminProtoMsg): _85.MsgUpdateGroupPolicyAdmin;
                toProto(message: _85.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupPolicyAdmin): _85.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _85.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_85.MsgUpdateGroupPolicyAdminResponse>): _85.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _85.MsgUpdateGroupPolicyAdminResponseAmino): _85.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _85.MsgUpdateGroupPolicyAdminResponse): _85.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupPolicyAdminResponseAminoMsg): _85.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _85.MsgUpdateGroupPolicyAdminResponse): _85.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupPolicyAdminResponseProtoMsg): _85.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _85.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupPolicyAdminResponse): _85.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _85.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_85.MsgCreateGroupWithPolicy>): _85.MsgCreateGroupWithPolicy;
                fromAmino(object: _85.MsgCreateGroupWithPolicyAmino): _85.MsgCreateGroupWithPolicy;
                toAmino(message: _85.MsgCreateGroupWithPolicy): _85.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _85.MsgCreateGroupWithPolicyAminoMsg): _85.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _85.MsgCreateGroupWithPolicy): _85.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _85.MsgCreateGroupWithPolicyProtoMsg): _85.MsgCreateGroupWithPolicy;
                toProto(message: _85.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _85.MsgCreateGroupWithPolicy): _85.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _85.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_85.MsgCreateGroupWithPolicyResponse>): _85.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _85.MsgCreateGroupWithPolicyResponseAmino): _85.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _85.MsgCreateGroupWithPolicyResponse): _85.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _85.MsgCreateGroupWithPolicyResponseAminoMsg): _85.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _85.MsgCreateGroupWithPolicyResponse): _85.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _85.MsgCreateGroupWithPolicyResponseProtoMsg): _85.MsgCreateGroupWithPolicyResponse;
                toProto(message: _85.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreateGroupWithPolicyResponse): _85.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _85.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_85.MsgUpdateGroupPolicyDecisionPolicy>): _85.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _85.MsgUpdateGroupPolicyDecisionPolicyAmino): _85.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _85.MsgUpdateGroupPolicyDecisionPolicy): _85.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _85.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _85.MsgUpdateGroupPolicyDecisionPolicy): _85.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _85.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _85.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupPolicyDecisionPolicy): _85.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _85.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_85.MsgUpdateGroupPolicyDecisionPolicyResponse>): _85.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _85.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _85.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _85.MsgUpdateGroupPolicyDecisionPolicyResponse): _85.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _85.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _85.MsgUpdateGroupPolicyDecisionPolicyResponse): _85.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _85.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _85.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupPolicyDecisionPolicyResponse): _85.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _85.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_85.MsgUpdateGroupPolicyMetadata>): _85.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _85.MsgUpdateGroupPolicyMetadataAmino): _85.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _85.MsgUpdateGroupPolicyMetadata): _85.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupPolicyMetadataAminoMsg): _85.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _85.MsgUpdateGroupPolicyMetadata): _85.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupPolicyMetadataProtoMsg): _85.MsgUpdateGroupPolicyMetadata;
                toProto(message: _85.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupPolicyMetadata): _85.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _85.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_85.MsgUpdateGroupPolicyMetadataResponse>): _85.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _85.MsgUpdateGroupPolicyMetadataResponseAmino): _85.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _85.MsgUpdateGroupPolicyMetadataResponse): _85.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _85.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _85.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _85.MsgUpdateGroupPolicyMetadataResponse): _85.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _85.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _85.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateGroupPolicyMetadataResponse): _85.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _85.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgSubmitProposal;
                fromPartial(object: Partial<_85.MsgSubmitProposal>): _85.MsgSubmitProposal;
                fromAmino(object: _85.MsgSubmitProposalAmino): _85.MsgSubmitProposal;
                toAmino(message: _85.MsgSubmitProposal): _85.MsgSubmitProposalAmino;
                fromAminoMsg(object: _85.MsgSubmitProposalAminoMsg): _85.MsgSubmitProposal;
                toAminoMsg(message: _85.MsgSubmitProposal): _85.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _85.MsgSubmitProposalProtoMsg): _85.MsgSubmitProposal;
                toProto(message: _85.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _85.MsgSubmitProposal): _85.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _85.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_85.MsgSubmitProposalResponse>): _85.MsgSubmitProposalResponse;
                fromAmino(object: _85.MsgSubmitProposalResponseAmino): _85.MsgSubmitProposalResponse;
                toAmino(message: _85.MsgSubmitProposalResponse): _85.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _85.MsgSubmitProposalResponseAminoMsg): _85.MsgSubmitProposalResponse;
                toAminoMsg(message: _85.MsgSubmitProposalResponse): _85.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _85.MsgSubmitProposalResponseProtoMsg): _85.MsgSubmitProposalResponse;
                toProto(message: _85.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _85.MsgSubmitProposalResponse): _85.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _85.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgWithdrawProposal;
                fromPartial(object: Partial<_85.MsgWithdrawProposal>): _85.MsgWithdrawProposal;
                fromAmino(object: _85.MsgWithdrawProposalAmino): _85.MsgWithdrawProposal;
                toAmino(message: _85.MsgWithdrawProposal): _85.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _85.MsgWithdrawProposalAminoMsg): _85.MsgWithdrawProposal;
                toAminoMsg(message: _85.MsgWithdrawProposal): _85.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _85.MsgWithdrawProposalProtoMsg): _85.MsgWithdrawProposal;
                toProto(message: _85.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _85.MsgWithdrawProposal): _85.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _85.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_85.MsgWithdrawProposalResponse>): _85.MsgWithdrawProposalResponse;
                fromAmino(_: _85.MsgWithdrawProposalResponseAmino): _85.MsgWithdrawProposalResponse;
                toAmino(_: _85.MsgWithdrawProposalResponse): _85.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _85.MsgWithdrawProposalResponseAminoMsg): _85.MsgWithdrawProposalResponse;
                toAminoMsg(message: _85.MsgWithdrawProposalResponse): _85.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _85.MsgWithdrawProposalResponseProtoMsg): _85.MsgWithdrawProposalResponse;
                toProto(message: _85.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _85.MsgWithdrawProposalResponse): _85.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _85.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgVote;
                fromPartial(object: Partial<_85.MsgVote>): _85.MsgVote;
                fromAmino(object: _85.MsgVoteAmino): _85.MsgVote;
                toAmino(message: _85.MsgVote): _85.MsgVoteAmino;
                fromAminoMsg(object: _85.MsgVoteAminoMsg): _85.MsgVote;
                toAminoMsg(message: _85.MsgVote): _85.MsgVoteAminoMsg;
                fromProtoMsg(message: _85.MsgVoteProtoMsg): _85.MsgVote;
                toProto(message: _85.MsgVote): Uint8Array;
                toProtoMsg(message: _85.MsgVote): _85.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _85.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgVoteResponse;
                fromPartial(_: Partial<_85.MsgVoteResponse>): _85.MsgVoteResponse;
                fromAmino(_: _85.MsgVoteResponseAmino): _85.MsgVoteResponse;
                toAmino(_: _85.MsgVoteResponse): _85.MsgVoteResponseAmino;
                fromAminoMsg(object: _85.MsgVoteResponseAminoMsg): _85.MsgVoteResponse;
                toAminoMsg(message: _85.MsgVoteResponse): _85.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _85.MsgVoteResponseProtoMsg): _85.MsgVoteResponse;
                toProto(message: _85.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _85.MsgVoteResponse): _85.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _85.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgExec;
                fromPartial(object: Partial<_85.MsgExec>): _85.MsgExec;
                fromAmino(object: _85.MsgExecAmino): _85.MsgExec;
                toAmino(message: _85.MsgExec): _85.MsgExecAmino;
                fromAminoMsg(object: _85.MsgExecAminoMsg): _85.MsgExec;
                toAminoMsg(message: _85.MsgExec): _85.MsgExecAminoMsg;
                fromProtoMsg(message: _85.MsgExecProtoMsg): _85.MsgExec;
                toProto(message: _85.MsgExec): Uint8Array;
                toProtoMsg(message: _85.MsgExec): _85.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _85.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgExecResponse;
                fromPartial(object: Partial<_85.MsgExecResponse>): _85.MsgExecResponse;
                fromAmino(object: _85.MsgExecResponseAmino): _85.MsgExecResponse;
                toAmino(message: _85.MsgExecResponse): _85.MsgExecResponseAmino;
                fromAminoMsg(object: _85.MsgExecResponseAminoMsg): _85.MsgExecResponse;
                toAminoMsg(message: _85.MsgExecResponse): _85.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _85.MsgExecResponseProtoMsg): _85.MsgExecResponse;
                toProto(message: _85.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _85.MsgExecResponse): _85.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _85.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgLeaveGroup;
                fromPartial(object: Partial<_85.MsgLeaveGroup>): _85.MsgLeaveGroup;
                fromAmino(object: _85.MsgLeaveGroupAmino): _85.MsgLeaveGroup;
                toAmino(message: _85.MsgLeaveGroup): _85.MsgLeaveGroupAmino;
                fromAminoMsg(object: _85.MsgLeaveGroupAminoMsg): _85.MsgLeaveGroup;
                toAminoMsg(message: _85.MsgLeaveGroup): _85.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _85.MsgLeaveGroupProtoMsg): _85.MsgLeaveGroup;
                toProto(message: _85.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _85.MsgLeaveGroup): _85.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _85.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_85.MsgLeaveGroupResponse>): _85.MsgLeaveGroupResponse;
                fromAmino(_: _85.MsgLeaveGroupResponseAmino): _85.MsgLeaveGroupResponse;
                toAmino(_: _85.MsgLeaveGroupResponse): _85.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _85.MsgLeaveGroupResponseAminoMsg): _85.MsgLeaveGroupResponse;
                toAminoMsg(message: _85.MsgLeaveGroupResponse): _85.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _85.MsgLeaveGroupResponseProtoMsg): _85.MsgLeaveGroupResponse;
                toProto(message: _85.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _85.MsgLeaveGroupResponse): _85.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupInfoRequest;
                fromPartial(object: Partial<_84.QueryGroupInfoRequest>): _84.QueryGroupInfoRequest;
                fromAmino(object: _84.QueryGroupInfoRequestAmino): _84.QueryGroupInfoRequest;
                toAmino(message: _84.QueryGroupInfoRequest): _84.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _84.QueryGroupInfoRequestAminoMsg): _84.QueryGroupInfoRequest;
                toAminoMsg(message: _84.QueryGroupInfoRequest): _84.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupInfoRequestProtoMsg): _84.QueryGroupInfoRequest;
                toProto(message: _84.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupInfoRequest): _84.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupInfoResponse;
                fromPartial(object: Partial<_84.QueryGroupInfoResponse>): _84.QueryGroupInfoResponse;
                fromAmino(object: _84.QueryGroupInfoResponseAmino): _84.QueryGroupInfoResponse;
                toAmino(message: _84.QueryGroupInfoResponse): _84.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _84.QueryGroupInfoResponseAminoMsg): _84.QueryGroupInfoResponse;
                toAminoMsg(message: _84.QueryGroupInfoResponse): _84.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupInfoResponseProtoMsg): _84.QueryGroupInfoResponse;
                toProto(message: _84.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupInfoResponse): _84.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_84.QueryGroupPolicyInfoRequest>): _84.QueryGroupPolicyInfoRequest;
                fromAmino(object: _84.QueryGroupPolicyInfoRequestAmino): _84.QueryGroupPolicyInfoRequest;
                toAmino(message: _84.QueryGroupPolicyInfoRequest): _84.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _84.QueryGroupPolicyInfoRequestAminoMsg): _84.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _84.QueryGroupPolicyInfoRequest): _84.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupPolicyInfoRequestProtoMsg): _84.QueryGroupPolicyInfoRequest;
                toProto(message: _84.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupPolicyInfoRequest): _84.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_84.QueryGroupPolicyInfoResponse>): _84.QueryGroupPolicyInfoResponse;
                fromAmino(object: _84.QueryGroupPolicyInfoResponseAmino): _84.QueryGroupPolicyInfoResponse;
                toAmino(message: _84.QueryGroupPolicyInfoResponse): _84.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _84.QueryGroupPolicyInfoResponseAminoMsg): _84.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _84.QueryGroupPolicyInfoResponse): _84.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupPolicyInfoResponseProtoMsg): _84.QueryGroupPolicyInfoResponse;
                toProto(message: _84.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupPolicyInfoResponse): _84.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupMembersRequest;
                fromPartial(object: Partial<_84.QueryGroupMembersRequest>): _84.QueryGroupMembersRequest;
                fromAmino(object: _84.QueryGroupMembersRequestAmino): _84.QueryGroupMembersRequest;
                toAmino(message: _84.QueryGroupMembersRequest): _84.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _84.QueryGroupMembersRequestAminoMsg): _84.QueryGroupMembersRequest;
                toAminoMsg(message: _84.QueryGroupMembersRequest): _84.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupMembersRequestProtoMsg): _84.QueryGroupMembersRequest;
                toProto(message: _84.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupMembersRequest): _84.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupMembersResponse;
                fromPartial(object: Partial<_84.QueryGroupMembersResponse>): _84.QueryGroupMembersResponse;
                fromAmino(object: _84.QueryGroupMembersResponseAmino): _84.QueryGroupMembersResponse;
                toAmino(message: _84.QueryGroupMembersResponse): _84.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _84.QueryGroupMembersResponseAminoMsg): _84.QueryGroupMembersResponse;
                toAminoMsg(message: _84.QueryGroupMembersResponse): _84.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupMembersResponseProtoMsg): _84.QueryGroupMembersResponse;
                toProto(message: _84.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupMembersResponse): _84.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_84.QueryGroupsByAdminRequest>): _84.QueryGroupsByAdminRequest;
                fromAmino(object: _84.QueryGroupsByAdminRequestAmino): _84.QueryGroupsByAdminRequest;
                toAmino(message: _84.QueryGroupsByAdminRequest): _84.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _84.QueryGroupsByAdminRequestAminoMsg): _84.QueryGroupsByAdminRequest;
                toAminoMsg(message: _84.QueryGroupsByAdminRequest): _84.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupsByAdminRequestProtoMsg): _84.QueryGroupsByAdminRequest;
                toProto(message: _84.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupsByAdminRequest): _84.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_84.QueryGroupsByAdminResponse>): _84.QueryGroupsByAdminResponse;
                fromAmino(object: _84.QueryGroupsByAdminResponseAmino): _84.QueryGroupsByAdminResponse;
                toAmino(message: _84.QueryGroupsByAdminResponse): _84.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _84.QueryGroupsByAdminResponseAminoMsg): _84.QueryGroupsByAdminResponse;
                toAminoMsg(message: _84.QueryGroupsByAdminResponse): _84.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupsByAdminResponseProtoMsg): _84.QueryGroupsByAdminResponse;
                toProto(message: _84.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupsByAdminResponse): _84.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_84.QueryGroupPoliciesByGroupRequest>): _84.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _84.QueryGroupPoliciesByGroupRequestAmino): _84.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _84.QueryGroupPoliciesByGroupRequest): _84.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _84.QueryGroupPoliciesByGroupRequestAminoMsg): _84.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _84.QueryGroupPoliciesByGroupRequest): _84.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupPoliciesByGroupRequestProtoMsg): _84.QueryGroupPoliciesByGroupRequest;
                toProto(message: _84.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupPoliciesByGroupRequest): _84.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_84.QueryGroupPoliciesByGroupResponse>): _84.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _84.QueryGroupPoliciesByGroupResponseAmino): _84.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _84.QueryGroupPoliciesByGroupResponse): _84.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _84.QueryGroupPoliciesByGroupResponseAminoMsg): _84.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _84.QueryGroupPoliciesByGroupResponse): _84.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupPoliciesByGroupResponseProtoMsg): _84.QueryGroupPoliciesByGroupResponse;
                toProto(message: _84.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupPoliciesByGroupResponse): _84.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_84.QueryGroupPoliciesByAdminRequest>): _84.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _84.QueryGroupPoliciesByAdminRequestAmino): _84.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _84.QueryGroupPoliciesByAdminRequest): _84.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _84.QueryGroupPoliciesByAdminRequestAminoMsg): _84.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _84.QueryGroupPoliciesByAdminRequest): _84.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupPoliciesByAdminRequestProtoMsg): _84.QueryGroupPoliciesByAdminRequest;
                toProto(message: _84.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupPoliciesByAdminRequest): _84.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_84.QueryGroupPoliciesByAdminResponse>): _84.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _84.QueryGroupPoliciesByAdminResponseAmino): _84.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _84.QueryGroupPoliciesByAdminResponse): _84.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _84.QueryGroupPoliciesByAdminResponseAminoMsg): _84.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _84.QueryGroupPoliciesByAdminResponse): _84.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupPoliciesByAdminResponseProtoMsg): _84.QueryGroupPoliciesByAdminResponse;
                toProto(message: _84.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupPoliciesByAdminResponse): _84.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _84.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalRequest;
                fromPartial(object: Partial<_84.QueryProposalRequest>): _84.QueryProposalRequest;
                fromAmino(object: _84.QueryProposalRequestAmino): _84.QueryProposalRequest;
                toAmino(message: _84.QueryProposalRequest): _84.QueryProposalRequestAmino;
                fromAminoMsg(object: _84.QueryProposalRequestAminoMsg): _84.QueryProposalRequest;
                toAminoMsg(message: _84.QueryProposalRequest): _84.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _84.QueryProposalRequestProtoMsg): _84.QueryProposalRequest;
                toProto(message: _84.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _84.QueryProposalRequest): _84.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _84.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalResponse;
                fromPartial(object: Partial<_84.QueryProposalResponse>): _84.QueryProposalResponse;
                fromAmino(object: _84.QueryProposalResponseAmino): _84.QueryProposalResponse;
                toAmino(message: _84.QueryProposalResponse): _84.QueryProposalResponseAmino;
                fromAminoMsg(object: _84.QueryProposalResponseAminoMsg): _84.QueryProposalResponse;
                toAminoMsg(message: _84.QueryProposalResponse): _84.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _84.QueryProposalResponseProtoMsg): _84.QueryProposalResponse;
                toProto(message: _84.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _84.QueryProposalResponse): _84.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _84.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_84.QueryProposalsByGroupPolicyRequest>): _84.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _84.QueryProposalsByGroupPolicyRequestAmino): _84.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _84.QueryProposalsByGroupPolicyRequest): _84.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _84.QueryProposalsByGroupPolicyRequestAminoMsg): _84.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _84.QueryProposalsByGroupPolicyRequest): _84.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _84.QueryProposalsByGroupPolicyRequestProtoMsg): _84.QueryProposalsByGroupPolicyRequest;
                toProto(message: _84.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _84.QueryProposalsByGroupPolicyRequest): _84.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _84.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_84.QueryProposalsByGroupPolicyResponse>): _84.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _84.QueryProposalsByGroupPolicyResponseAmino): _84.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _84.QueryProposalsByGroupPolicyResponse): _84.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _84.QueryProposalsByGroupPolicyResponseAminoMsg): _84.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _84.QueryProposalsByGroupPolicyResponse): _84.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _84.QueryProposalsByGroupPolicyResponseProtoMsg): _84.QueryProposalsByGroupPolicyResponse;
                toProto(message: _84.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _84.QueryProposalsByGroupPolicyResponse): _84.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _84.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_84.QueryVoteByProposalVoterRequest>): _84.QueryVoteByProposalVoterRequest;
                fromAmino(object: _84.QueryVoteByProposalVoterRequestAmino): _84.QueryVoteByProposalVoterRequest;
                toAmino(message: _84.QueryVoteByProposalVoterRequest): _84.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _84.QueryVoteByProposalVoterRequestAminoMsg): _84.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _84.QueryVoteByProposalVoterRequest): _84.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _84.QueryVoteByProposalVoterRequestProtoMsg): _84.QueryVoteByProposalVoterRequest;
                toProto(message: _84.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVoteByProposalVoterRequest): _84.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _84.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_84.QueryVoteByProposalVoterResponse>): _84.QueryVoteByProposalVoterResponse;
                fromAmino(object: _84.QueryVoteByProposalVoterResponseAmino): _84.QueryVoteByProposalVoterResponse;
                toAmino(message: _84.QueryVoteByProposalVoterResponse): _84.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _84.QueryVoteByProposalVoterResponseAminoMsg): _84.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _84.QueryVoteByProposalVoterResponse): _84.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _84.QueryVoteByProposalVoterResponseProtoMsg): _84.QueryVoteByProposalVoterResponse;
                toProto(message: _84.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVoteByProposalVoterResponse): _84.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _84.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_84.QueryVotesByProposalRequest>): _84.QueryVotesByProposalRequest;
                fromAmino(object: _84.QueryVotesByProposalRequestAmino): _84.QueryVotesByProposalRequest;
                toAmino(message: _84.QueryVotesByProposalRequest): _84.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _84.QueryVotesByProposalRequestAminoMsg): _84.QueryVotesByProposalRequest;
                toAminoMsg(message: _84.QueryVotesByProposalRequest): _84.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _84.QueryVotesByProposalRequestProtoMsg): _84.QueryVotesByProposalRequest;
                toProto(message: _84.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVotesByProposalRequest): _84.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _84.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_84.QueryVotesByProposalResponse>): _84.QueryVotesByProposalResponse;
                fromAmino(object: _84.QueryVotesByProposalResponseAmino): _84.QueryVotesByProposalResponse;
                toAmino(message: _84.QueryVotesByProposalResponse): _84.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _84.QueryVotesByProposalResponseAminoMsg): _84.QueryVotesByProposalResponse;
                toAminoMsg(message: _84.QueryVotesByProposalResponse): _84.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _84.QueryVotesByProposalResponseProtoMsg): _84.QueryVotesByProposalResponse;
                toProto(message: _84.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVotesByProposalResponse): _84.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _84.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_84.QueryVotesByVoterRequest>): _84.QueryVotesByVoterRequest;
                fromAmino(object: _84.QueryVotesByVoterRequestAmino): _84.QueryVotesByVoterRequest;
                toAmino(message: _84.QueryVotesByVoterRequest): _84.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _84.QueryVotesByVoterRequestAminoMsg): _84.QueryVotesByVoterRequest;
                toAminoMsg(message: _84.QueryVotesByVoterRequest): _84.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _84.QueryVotesByVoterRequestProtoMsg): _84.QueryVotesByVoterRequest;
                toProto(message: _84.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVotesByVoterRequest): _84.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _84.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_84.QueryVotesByVoterResponse>): _84.QueryVotesByVoterResponse;
                fromAmino(object: _84.QueryVotesByVoterResponseAmino): _84.QueryVotesByVoterResponse;
                toAmino(message: _84.QueryVotesByVoterResponse): _84.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _84.QueryVotesByVoterResponseAminoMsg): _84.QueryVotesByVoterResponse;
                toAminoMsg(message: _84.QueryVotesByVoterResponse): _84.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _84.QueryVotesByVoterResponseProtoMsg): _84.QueryVotesByVoterResponse;
                toProto(message: _84.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVotesByVoterResponse): _84.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_84.QueryGroupsByMemberRequest>): _84.QueryGroupsByMemberRequest;
                fromAmino(object: _84.QueryGroupsByMemberRequestAmino): _84.QueryGroupsByMemberRequest;
                toAmino(message: _84.QueryGroupsByMemberRequest): _84.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _84.QueryGroupsByMemberRequestAminoMsg): _84.QueryGroupsByMemberRequest;
                toAminoMsg(message: _84.QueryGroupsByMemberRequest): _84.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupsByMemberRequestProtoMsg): _84.QueryGroupsByMemberRequest;
                toProto(message: _84.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupsByMemberRequest): _84.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_84.QueryGroupsByMemberResponse>): _84.QueryGroupsByMemberResponse;
                fromAmino(object: _84.QueryGroupsByMemberResponseAmino): _84.QueryGroupsByMemberResponse;
                toAmino(message: _84.QueryGroupsByMemberResponse): _84.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _84.QueryGroupsByMemberResponseAminoMsg): _84.QueryGroupsByMemberResponse;
                toAminoMsg(message: _84.QueryGroupsByMemberResponse): _84.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupsByMemberResponseProtoMsg): _84.QueryGroupsByMemberResponse;
                toProto(message: _84.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupsByMemberResponse): _84.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _84.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryTallyResultRequest;
                fromPartial(object: Partial<_84.QueryTallyResultRequest>): _84.QueryTallyResultRequest;
                fromAmino(object: _84.QueryTallyResultRequestAmino): _84.QueryTallyResultRequest;
                toAmino(message: _84.QueryTallyResultRequest): _84.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _84.QueryTallyResultRequestAminoMsg): _84.QueryTallyResultRequest;
                toAminoMsg(message: _84.QueryTallyResultRequest): _84.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _84.QueryTallyResultRequestProtoMsg): _84.QueryTallyResultRequest;
                toProto(message: _84.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _84.QueryTallyResultRequest): _84.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _84.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryTallyResultResponse;
                fromPartial(object: Partial<_84.QueryTallyResultResponse>): _84.QueryTallyResultResponse;
                fromAmino(object: _84.QueryTallyResultResponseAmino): _84.QueryTallyResultResponse;
                toAmino(message: _84.QueryTallyResultResponse): _84.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _84.QueryTallyResultResponseAminoMsg): _84.QueryTallyResultResponse;
                toAminoMsg(message: _84.QueryTallyResultResponse): _84.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _84.QueryTallyResultResponseProtoMsg): _84.QueryTallyResultResponse;
                toProto(message: _84.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _84.QueryTallyResultResponse): _84.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _84.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupsRequest;
                fromPartial(object: Partial<_84.QueryGroupsRequest>): _84.QueryGroupsRequest;
                fromAmino(object: _84.QueryGroupsRequestAmino): _84.QueryGroupsRequest;
                toAmino(message: _84.QueryGroupsRequest): _84.QueryGroupsRequestAmino;
                fromAminoMsg(object: _84.QueryGroupsRequestAminoMsg): _84.QueryGroupsRequest;
                toAminoMsg(message: _84.QueryGroupsRequest): _84.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryGroupsRequestProtoMsg): _84.QueryGroupsRequest;
                toProto(message: _84.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryGroupsRequest): _84.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _84.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryGroupsResponse;
                fromPartial(object: Partial<_84.QueryGroupsResponse>): _84.QueryGroupsResponse;
                fromAmino(object: _84.QueryGroupsResponseAmino): _84.QueryGroupsResponse;
                toAmino(message: _84.QueryGroupsResponse): _84.QueryGroupsResponseAmino;
                fromAminoMsg(object: _84.QueryGroupsResponseAminoMsg): _84.QueryGroupsResponse;
                toAminoMsg(message: _84.QueryGroupsResponse): _84.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryGroupsResponseProtoMsg): _84.QueryGroupsResponse;
                toProto(message: _84.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryGroupsResponse): _84.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _83.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.GenesisState;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
                fromAmino(object: _83.GenesisStateAmino): _83.GenesisState;
                toAmino(message: _83.GenesisState): _83.GenesisStateAmino;
                fromAminoMsg(object: _83.GenesisStateAminoMsg): _83.GenesisState;
                toAminoMsg(message: _83.GenesisState): _83.GenesisStateAminoMsg;
                fromProtoMsg(message: _83.GenesisStateProtoMsg): _83.GenesisState;
                toProto(message: _83.GenesisState): Uint8Array;
                toProtoMsg(message: _83.GenesisState): _83.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _82.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventCreateGroup;
                fromPartial(object: Partial<_82.EventCreateGroup>): _82.EventCreateGroup;
                fromAmino(object: _82.EventCreateGroupAmino): _82.EventCreateGroup;
                toAmino(message: _82.EventCreateGroup): _82.EventCreateGroupAmino;
                fromAminoMsg(object: _82.EventCreateGroupAminoMsg): _82.EventCreateGroup;
                toAminoMsg(message: _82.EventCreateGroup): _82.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _82.EventCreateGroupProtoMsg): _82.EventCreateGroup;
                toProto(message: _82.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _82.EventCreateGroup): _82.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _82.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventUpdateGroup;
                fromPartial(object: Partial<_82.EventUpdateGroup>): _82.EventUpdateGroup;
                fromAmino(object: _82.EventUpdateGroupAmino): _82.EventUpdateGroup;
                toAmino(message: _82.EventUpdateGroup): _82.EventUpdateGroupAmino;
                fromAminoMsg(object: _82.EventUpdateGroupAminoMsg): _82.EventUpdateGroup;
                toAminoMsg(message: _82.EventUpdateGroup): _82.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _82.EventUpdateGroupProtoMsg): _82.EventUpdateGroup;
                toProto(message: _82.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _82.EventUpdateGroup): _82.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _82.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventCreateGroupPolicy;
                fromPartial(object: Partial<_82.EventCreateGroupPolicy>): _82.EventCreateGroupPolicy;
                fromAmino(object: _82.EventCreateGroupPolicyAmino): _82.EventCreateGroupPolicy;
                toAmino(message: _82.EventCreateGroupPolicy): _82.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _82.EventCreateGroupPolicyAminoMsg): _82.EventCreateGroupPolicy;
                toAminoMsg(message: _82.EventCreateGroupPolicy): _82.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _82.EventCreateGroupPolicyProtoMsg): _82.EventCreateGroupPolicy;
                toProto(message: _82.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _82.EventCreateGroupPolicy): _82.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _82.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_82.EventUpdateGroupPolicy>): _82.EventUpdateGroupPolicy;
                fromAmino(object: _82.EventUpdateGroupPolicyAmino): _82.EventUpdateGroupPolicy;
                toAmino(message: _82.EventUpdateGroupPolicy): _82.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _82.EventUpdateGroupPolicyAminoMsg): _82.EventUpdateGroupPolicy;
                toAminoMsg(message: _82.EventUpdateGroupPolicy): _82.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _82.EventUpdateGroupPolicyProtoMsg): _82.EventUpdateGroupPolicy;
                toProto(message: _82.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _82.EventUpdateGroupPolicy): _82.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _82.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventSubmitProposal;
                fromPartial(object: Partial<_82.EventSubmitProposal>): _82.EventSubmitProposal;
                fromAmino(object: _82.EventSubmitProposalAmino): _82.EventSubmitProposal;
                toAmino(message: _82.EventSubmitProposal): _82.EventSubmitProposalAmino;
                fromAminoMsg(object: _82.EventSubmitProposalAminoMsg): _82.EventSubmitProposal;
                toAminoMsg(message: _82.EventSubmitProposal): _82.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _82.EventSubmitProposalProtoMsg): _82.EventSubmitProposal;
                toProto(message: _82.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _82.EventSubmitProposal): _82.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _82.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventWithdrawProposal;
                fromPartial(object: Partial<_82.EventWithdrawProposal>): _82.EventWithdrawProposal;
                fromAmino(object: _82.EventWithdrawProposalAmino): _82.EventWithdrawProposal;
                toAmino(message: _82.EventWithdrawProposal): _82.EventWithdrawProposalAmino;
                fromAminoMsg(object: _82.EventWithdrawProposalAminoMsg): _82.EventWithdrawProposal;
                toAminoMsg(message: _82.EventWithdrawProposal): _82.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _82.EventWithdrawProposalProtoMsg): _82.EventWithdrawProposal;
                toProto(message: _82.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _82.EventWithdrawProposal): _82.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _82.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventVote;
                fromPartial(object: Partial<_82.EventVote>): _82.EventVote;
                fromAmino(object: _82.EventVoteAmino): _82.EventVote;
                toAmino(message: _82.EventVote): _82.EventVoteAmino;
                fromAminoMsg(object: _82.EventVoteAminoMsg): _82.EventVote;
                toAminoMsg(message: _82.EventVote): _82.EventVoteAminoMsg;
                fromProtoMsg(message: _82.EventVoteProtoMsg): _82.EventVote;
                toProto(message: _82.EventVote): Uint8Array;
                toProtoMsg(message: _82.EventVote): _82.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _82.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventExec;
                fromPartial(object: Partial<_82.EventExec>): _82.EventExec;
                fromAmino(object: _82.EventExecAmino): _82.EventExec;
                toAmino(message: _82.EventExec): _82.EventExecAmino;
                fromAminoMsg(object: _82.EventExecAminoMsg): _82.EventExec;
                toAminoMsg(message: _82.EventExec): _82.EventExecAminoMsg;
                fromProtoMsg(message: _82.EventExecProtoMsg): _82.EventExec;
                toProto(message: _82.EventExec): Uint8Array;
                toProtoMsg(message: _82.EventExec): _82.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _82.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventLeaveGroup;
                fromPartial(object: Partial<_82.EventLeaveGroup>): _82.EventLeaveGroup;
                fromAmino(object: _82.EventLeaveGroupAmino): _82.EventLeaveGroup;
                toAmino(message: _82.EventLeaveGroup): _82.EventLeaveGroupAmino;
                fromAminoMsg(object: _82.EventLeaveGroupAminoMsg): _82.EventLeaveGroup;
                toAminoMsg(message: _82.EventLeaveGroup): _82.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _82.EventLeaveGroupProtoMsg): _82.EventLeaveGroup;
                toProto(message: _82.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _82.EventLeaveGroup): _82.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _82.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventProposalPruned;
                fromPartial(object: Partial<_82.EventProposalPruned>): _82.EventProposalPruned;
                fromAmino(object: _82.EventProposalPrunedAmino): _82.EventProposalPruned;
                toAmino(message: _82.EventProposalPruned): _82.EventProposalPrunedAmino;
                fromAminoMsg(object: _82.EventProposalPrunedAminoMsg): _82.EventProposalPruned;
                toAminoMsg(message: _82.EventProposalPruned): _82.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _82.EventProposalPrunedProtoMsg): _82.EventProposalPruned;
                toProto(message: _82.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _82.EventProposalPruned): _82.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _87.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.Module;
                    fromPartial(object: Partial<_87.Module>): _87.Module;
                    fromAmino(object: _87.ModuleAmino): _87.Module;
                    toAmino(message: _87.Module): _87.ModuleAmino;
                    fromAminoMsg(object: _87.ModuleAminoMsg): _87.Module;
                    toAminoMsg(message: _87.Module): _87.ModuleAminoMsg;
                    fromProtoMsg(message: _87.ModuleProtoMsg): _87.Module;
                    toProto(message: _87.Module): Uint8Array;
                    toProtoMsg(message: _87.Module): _87.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                inflation(request?: _90.QueryInflationRequest): Promise<_90.QueryInflationResponse>;
                annualProvisions(request?: _90.QueryAnnualProvisionsRequest): Promise<_90.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
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
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateParams) => _91.MsgUpdateParamsAmino;
                    fromAmino: (object: _91.MsgUpdateParamsAmino) => _91.MsgUpdateParams;
                };
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _90.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryInflationRequest;
                fromPartial(_: Partial<_90.QueryInflationRequest>): _90.QueryInflationRequest;
                fromAmino(_: _90.QueryInflationRequestAmino): _90.QueryInflationRequest;
                toAmino(_: _90.QueryInflationRequest): _90.QueryInflationRequestAmino;
                fromAminoMsg(object: _90.QueryInflationRequestAminoMsg): _90.QueryInflationRequest;
                toAminoMsg(message: _90.QueryInflationRequest): _90.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _90.QueryInflationRequestProtoMsg): _90.QueryInflationRequest;
                toProto(message: _90.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _90.QueryInflationRequest): _90.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _90.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryInflationResponse;
                fromPartial(object: Partial<_90.QueryInflationResponse>): _90.QueryInflationResponse;
                fromAmino(object: _90.QueryInflationResponseAmino): _90.QueryInflationResponse;
                toAmino(message: _90.QueryInflationResponse): _90.QueryInflationResponseAmino;
                fromAminoMsg(object: _90.QueryInflationResponseAminoMsg): _90.QueryInflationResponse;
                toAminoMsg(message: _90.QueryInflationResponse): _90.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _90.QueryInflationResponseProtoMsg): _90.QueryInflationResponse;
                toProto(message: _90.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _90.QueryInflationResponse): _90.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _90.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_90.QueryAnnualProvisionsRequest>): _90.QueryAnnualProvisionsRequest;
                fromAmino(_: _90.QueryAnnualProvisionsRequestAmino): _90.QueryAnnualProvisionsRequest;
                toAmino(_: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _90.QueryAnnualProvisionsRequestAminoMsg): _90.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAnnualProvisionsRequestProtoMsg): _90.QueryAnnualProvisionsRequest;
                toProto(message: _90.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _90.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_90.QueryAnnualProvisionsResponse>): _90.QueryAnnualProvisionsResponse;
                fromAmino(object: _90.QueryAnnualProvisionsResponseAmino): _90.QueryAnnualProvisionsResponse;
                toAmino(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _90.QueryAnnualProvisionsResponseAminoMsg): _90.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAnnualProvisionsResponseProtoMsg): _90.QueryAnnualProvisionsResponse;
                toProto(message: _90.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _89.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Minter;
                fromPartial(object: Partial<_89.Minter>): _89.Minter;
                fromAmino(object: _89.MinterAmino): _89.Minter;
                toAmino(message: _89.Minter): _89.MinterAmino;
                fromAminoMsg(object: _89.MinterAminoMsg): _89.Minter;
                toAminoMsg(message: _89.Minter): _89.MinterAminoMsg;
                fromProtoMsg(message: _89.MinterProtoMsg): _89.Minter;
                toProto(message: _89.Minter): Uint8Array;
                toProtoMsg(message: _89.Minter): _89.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _89.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Params;
                fromPartial(object: Partial<_89.Params>): _89.Params;
                fromAmino(object: _89.ParamsAmino): _89.Params;
                toAmino(message: _89.Params): _89.ParamsAmino;
                fromAminoMsg(object: _89.ParamsAminoMsg): _89.Params;
                toAminoMsg(message: _89.Params): _89.ParamsAminoMsg;
                fromProtoMsg(message: _89.ParamsProtoMsg): _89.Params;
                toProto(message: _89.Params): Uint8Array;
                toProtoMsg(message: _89.Params): _89.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _88.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GenesisState;
                fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
                fromAmino(object: _88.GenesisStateAmino): _88.GenesisState;
                toAmino(message: _88.GenesisState): _88.GenesisStateAmino;
                fromAminoMsg(object: _88.GenesisStateAminoMsg): _88.GenesisState;
                toAminoMsg(message: _88.GenesisState): _88.GenesisStateAminoMsg;
                fromProtoMsg(message: _88.GenesisStateProtoMsg): _88.GenesisState;
                toProto(message: _88.GenesisState): Uint8Array;
                toProtoMsg(message: _88.GenesisState): _88.GenesisStateProtoMsg;
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
                    encode(_: _93.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _93.Module;
                    fromPartial(_: Partial<_93.Module>): _93.Module;
                    fromAmino(_: _93.ModuleAmino): _93.Module;
                    toAmino(_: _93.Module): _93.ModuleAmino;
                    fromAminoMsg(object: _93.ModuleAminoMsg): _93.Module;
                    toAminoMsg(message: _93.Module): _93.ModuleAminoMsg;
                    fromProtoMsg(message: _93.ModuleProtoMsg): _93.Module;
                    toProto(message: _93.Module): Uint8Array;
                    toProtoMsg(message: _93.Module): _93.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _97.QueryBalanceRequest): Promise<_97.QueryBalanceResponse>;
                owner(request: _97.QueryOwnerRequest): Promise<_97.QueryOwnerResponse>;
                supply(request: _97.QuerySupplyRequest): Promise<_97.QuerySupplyResponse>;
                nFTs(request: _97.QueryNFTsRequest): Promise<_97.QueryNFTsResponse>;
                nFT(request: _97.QueryNFTRequest): Promise<_97.QueryNFTResponse>;
                class(request: _97.QueryClassRequest): Promise<_97.QueryClassResponse>;
                classes(request?: _97.QueryClassesRequest): Promise<_97.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _98.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _98.MsgSend): {
                        typeUrl: string;
                        value: _98.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _98.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _98.MsgSend): {
                        typeUrl: string;
                        value: _98.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _98.MsgSend) => _98.MsgSendAmino;
                    fromAmino: (object: _98.MsgSendAmino) => _98.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _98.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgSend;
                fromPartial(object: Partial<_98.MsgSend>): _98.MsgSend;
                fromAmino(object: _98.MsgSendAmino): _98.MsgSend;
                toAmino(message: _98.MsgSend): _98.MsgSendAmino;
                fromAminoMsg(object: _98.MsgSendAminoMsg): _98.MsgSend;
                toAminoMsg(message: _98.MsgSend): _98.MsgSendAminoMsg;
                fromProtoMsg(message: _98.MsgSendProtoMsg): _98.MsgSend;
                toProto(message: _98.MsgSend): Uint8Array;
                toProtoMsg(message: _98.MsgSend): _98.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _98.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgSendResponse;
                fromPartial(_: Partial<_98.MsgSendResponse>): _98.MsgSendResponse;
                fromAmino(_: _98.MsgSendResponseAmino): _98.MsgSendResponse;
                toAmino(_: _98.MsgSendResponse): _98.MsgSendResponseAmino;
                fromAminoMsg(object: _98.MsgSendResponseAminoMsg): _98.MsgSendResponse;
                toAminoMsg(message: _98.MsgSendResponse): _98.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _98.MsgSendResponseProtoMsg): _98.MsgSendResponse;
                toProto(message: _98.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _98.MsgSendResponse): _98.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _97.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryBalanceRequest;
                fromPartial(object: Partial<_97.QueryBalanceRequest>): _97.QueryBalanceRequest;
                fromAmino(object: _97.QueryBalanceRequestAmino): _97.QueryBalanceRequest;
                toAmino(message: _97.QueryBalanceRequest): _97.QueryBalanceRequestAmino;
                fromAminoMsg(object: _97.QueryBalanceRequestAminoMsg): _97.QueryBalanceRequest;
                toAminoMsg(message: _97.QueryBalanceRequest): _97.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _97.QueryBalanceRequestProtoMsg): _97.QueryBalanceRequest;
                toProto(message: _97.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _97.QueryBalanceRequest): _97.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _97.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryBalanceResponse;
                fromPartial(object: Partial<_97.QueryBalanceResponse>): _97.QueryBalanceResponse;
                fromAmino(object: _97.QueryBalanceResponseAmino): _97.QueryBalanceResponse;
                toAmino(message: _97.QueryBalanceResponse): _97.QueryBalanceResponseAmino;
                fromAminoMsg(object: _97.QueryBalanceResponseAminoMsg): _97.QueryBalanceResponse;
                toAminoMsg(message: _97.QueryBalanceResponse): _97.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _97.QueryBalanceResponseProtoMsg): _97.QueryBalanceResponse;
                toProto(message: _97.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _97.QueryBalanceResponse): _97.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _97.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryOwnerRequest;
                fromPartial(object: Partial<_97.QueryOwnerRequest>): _97.QueryOwnerRequest;
                fromAmino(object: _97.QueryOwnerRequestAmino): _97.QueryOwnerRequest;
                toAmino(message: _97.QueryOwnerRequest): _97.QueryOwnerRequestAmino;
                fromAminoMsg(object: _97.QueryOwnerRequestAminoMsg): _97.QueryOwnerRequest;
                toAminoMsg(message: _97.QueryOwnerRequest): _97.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _97.QueryOwnerRequestProtoMsg): _97.QueryOwnerRequest;
                toProto(message: _97.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _97.QueryOwnerRequest): _97.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _97.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryOwnerResponse;
                fromPartial(object: Partial<_97.QueryOwnerResponse>): _97.QueryOwnerResponse;
                fromAmino(object: _97.QueryOwnerResponseAmino): _97.QueryOwnerResponse;
                toAmino(message: _97.QueryOwnerResponse): _97.QueryOwnerResponseAmino;
                fromAminoMsg(object: _97.QueryOwnerResponseAminoMsg): _97.QueryOwnerResponse;
                toAminoMsg(message: _97.QueryOwnerResponse): _97.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _97.QueryOwnerResponseProtoMsg): _97.QueryOwnerResponse;
                toProto(message: _97.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _97.QueryOwnerResponse): _97.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _97.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QuerySupplyRequest;
                fromPartial(object: Partial<_97.QuerySupplyRequest>): _97.QuerySupplyRequest;
                fromAmino(object: _97.QuerySupplyRequestAmino): _97.QuerySupplyRequest;
                toAmino(message: _97.QuerySupplyRequest): _97.QuerySupplyRequestAmino;
                fromAminoMsg(object: _97.QuerySupplyRequestAminoMsg): _97.QuerySupplyRequest;
                toAminoMsg(message: _97.QuerySupplyRequest): _97.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySupplyRequestProtoMsg): _97.QuerySupplyRequest;
                toProto(message: _97.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySupplyRequest): _97.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _97.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QuerySupplyResponse;
                fromPartial(object: Partial<_97.QuerySupplyResponse>): _97.QuerySupplyResponse;
                fromAmino(object: _97.QuerySupplyResponseAmino): _97.QuerySupplyResponse;
                toAmino(message: _97.QuerySupplyResponse): _97.QuerySupplyResponseAmino;
                fromAminoMsg(object: _97.QuerySupplyResponseAminoMsg): _97.QuerySupplyResponse;
                toAminoMsg(message: _97.QuerySupplyResponse): _97.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySupplyResponseProtoMsg): _97.QuerySupplyResponse;
                toProto(message: _97.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySupplyResponse): _97.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _97.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryNFTsRequest;
                fromPartial(object: Partial<_97.QueryNFTsRequest>): _97.QueryNFTsRequest;
                fromAmino(object: _97.QueryNFTsRequestAmino): _97.QueryNFTsRequest;
                toAmino(message: _97.QueryNFTsRequest): _97.QueryNFTsRequestAmino;
                fromAminoMsg(object: _97.QueryNFTsRequestAminoMsg): _97.QueryNFTsRequest;
                toAminoMsg(message: _97.QueryNFTsRequest): _97.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryNFTsRequestProtoMsg): _97.QueryNFTsRequest;
                toProto(message: _97.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryNFTsRequest): _97.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _97.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryNFTsResponse;
                fromPartial(object: Partial<_97.QueryNFTsResponse>): _97.QueryNFTsResponse;
                fromAmino(object: _97.QueryNFTsResponseAmino): _97.QueryNFTsResponse;
                toAmino(message: _97.QueryNFTsResponse): _97.QueryNFTsResponseAmino;
                fromAminoMsg(object: _97.QueryNFTsResponseAminoMsg): _97.QueryNFTsResponse;
                toAminoMsg(message: _97.QueryNFTsResponse): _97.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryNFTsResponseProtoMsg): _97.QueryNFTsResponse;
                toProto(message: _97.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryNFTsResponse): _97.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _97.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryNFTRequest;
                fromPartial(object: Partial<_97.QueryNFTRequest>): _97.QueryNFTRequest;
                fromAmino(object: _97.QueryNFTRequestAmino): _97.QueryNFTRequest;
                toAmino(message: _97.QueryNFTRequest): _97.QueryNFTRequestAmino;
                fromAminoMsg(object: _97.QueryNFTRequestAminoMsg): _97.QueryNFTRequest;
                toAminoMsg(message: _97.QueryNFTRequest): _97.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _97.QueryNFTRequestProtoMsg): _97.QueryNFTRequest;
                toProto(message: _97.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _97.QueryNFTRequest): _97.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _97.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryNFTResponse;
                fromPartial(object: Partial<_97.QueryNFTResponse>): _97.QueryNFTResponse;
                fromAmino(object: _97.QueryNFTResponseAmino): _97.QueryNFTResponse;
                toAmino(message: _97.QueryNFTResponse): _97.QueryNFTResponseAmino;
                fromAminoMsg(object: _97.QueryNFTResponseAminoMsg): _97.QueryNFTResponse;
                toAminoMsg(message: _97.QueryNFTResponse): _97.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _97.QueryNFTResponseProtoMsg): _97.QueryNFTResponse;
                toProto(message: _97.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _97.QueryNFTResponse): _97.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _97.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryClassRequest;
                fromPartial(object: Partial<_97.QueryClassRequest>): _97.QueryClassRequest;
                fromAmino(object: _97.QueryClassRequestAmino): _97.QueryClassRequest;
                toAmino(message: _97.QueryClassRequest): _97.QueryClassRequestAmino;
                fromAminoMsg(object: _97.QueryClassRequestAminoMsg): _97.QueryClassRequest;
                toAminoMsg(message: _97.QueryClassRequest): _97.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _97.QueryClassRequestProtoMsg): _97.QueryClassRequest;
                toProto(message: _97.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _97.QueryClassRequest): _97.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _97.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryClassResponse;
                fromPartial(object: Partial<_97.QueryClassResponse>): _97.QueryClassResponse;
                fromAmino(object: _97.QueryClassResponseAmino): _97.QueryClassResponse;
                toAmino(message: _97.QueryClassResponse): _97.QueryClassResponseAmino;
                fromAminoMsg(object: _97.QueryClassResponseAminoMsg): _97.QueryClassResponse;
                toAminoMsg(message: _97.QueryClassResponse): _97.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _97.QueryClassResponseProtoMsg): _97.QueryClassResponse;
                toProto(message: _97.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _97.QueryClassResponse): _97.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _97.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryClassesRequest;
                fromPartial(object: Partial<_97.QueryClassesRequest>): _97.QueryClassesRequest;
                fromAmino(object: _97.QueryClassesRequestAmino): _97.QueryClassesRequest;
                toAmino(message: _97.QueryClassesRequest): _97.QueryClassesRequestAmino;
                fromAminoMsg(object: _97.QueryClassesRequestAminoMsg): _97.QueryClassesRequest;
                toAminoMsg(message: _97.QueryClassesRequest): _97.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryClassesRequestProtoMsg): _97.QueryClassesRequest;
                toProto(message: _97.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryClassesRequest): _97.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _97.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryClassesResponse;
                fromPartial(object: Partial<_97.QueryClassesResponse>): _97.QueryClassesResponse;
                fromAmino(object: _97.QueryClassesResponseAmino): _97.QueryClassesResponse;
                toAmino(message: _97.QueryClassesResponse): _97.QueryClassesResponseAmino;
                fromAminoMsg(object: _97.QueryClassesResponseAminoMsg): _97.QueryClassesResponse;
                toAminoMsg(message: _97.QueryClassesResponse): _97.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryClassesResponseProtoMsg): _97.QueryClassesResponse;
                toProto(message: _97.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryClassesResponse): _97.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _96.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Class;
                fromPartial(object: Partial<_96.Class>): _96.Class;
                fromAmino(object: _96.ClassAmino): _96.Class;
                toAmino(message: _96.Class): _96.ClassAmino;
                fromAminoMsg(object: _96.ClassAminoMsg): _96.Class;
                toAminoMsg(message: _96.Class): _96.ClassAminoMsg;
                fromProtoMsg(message: _96.ClassProtoMsg): _96.Class;
                toProto(message: _96.Class): Uint8Array;
                toProtoMsg(message: _96.Class): _96.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _96.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.NFT;
                fromPartial(object: Partial<_96.NFT>): _96.NFT;
                fromAmino(object: _96.NFTAmino): _96.NFT;
                toAmino(message: _96.NFT): _96.NFTAmino;
                fromAminoMsg(object: _96.NFTAminoMsg): _96.NFT;
                toAminoMsg(message: _96.NFT): _96.NFTAminoMsg;
                fromProtoMsg(message: _96.NFTProtoMsg): _96.NFT;
                toProto(message: _96.NFT): Uint8Array;
                toProtoMsg(message: _96.NFT): _96.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _95.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Entry;
                fromPartial(object: Partial<_95.Entry>): _95.Entry;
                fromAmino(object: _95.EntryAmino): _95.Entry;
                toAmino(message: _95.Entry): _95.EntryAmino;
                fromAminoMsg(object: _95.EntryAminoMsg): _95.Entry;
                toAminoMsg(message: _95.Entry): _95.EntryAminoMsg;
                fromProtoMsg(message: _95.EntryProtoMsg): _95.Entry;
                toProto(message: _95.Entry): Uint8Array;
                toProtoMsg(message: _95.Entry): _95.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _94.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.EventSend;
                fromPartial(object: Partial<_94.EventSend>): _94.EventSend;
                fromAmino(object: _94.EventSendAmino): _94.EventSend;
                toAmino(message: _94.EventSend): _94.EventSendAmino;
                fromAminoMsg(object: _94.EventSendAminoMsg): _94.EventSend;
                toAminoMsg(message: _94.EventSend): _94.EventSendAminoMsg;
                fromProtoMsg(message: _94.EventSendProtoMsg): _94.EventSend;
                toProto(message: _94.EventSend): Uint8Array;
                toProtoMsg(message: _94.EventSend): _94.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _94.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.EventMint;
                fromPartial(object: Partial<_94.EventMint>): _94.EventMint;
                fromAmino(object: _94.EventMintAmino): _94.EventMint;
                toAmino(message: _94.EventMint): _94.EventMintAmino;
                fromAminoMsg(object: _94.EventMintAminoMsg): _94.EventMint;
                toAminoMsg(message: _94.EventMint): _94.EventMintAminoMsg;
                fromProtoMsg(message: _94.EventMintProtoMsg): _94.EventMint;
                toProto(message: _94.EventMint): Uint8Array;
                toProtoMsg(message: _94.EventMint): _94.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _94.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.EventBurn;
                fromPartial(object: Partial<_94.EventBurn>): _94.EventBurn;
                fromAmino(object: _94.EventBurnAmino): _94.EventBurn;
                toAmino(message: _94.EventBurn): _94.EventBurnAmino;
                fromAminoMsg(object: _94.EventBurnAminoMsg): _94.EventBurn;
                toAminoMsg(message: _94.EventBurn): _94.EventBurnAminoMsg;
                fromProtoMsg(message: _94.EventBurnProtoMsg): _94.EventBurn;
                toProto(message: _94.EventBurn): Uint8Array;
                toProtoMsg(message: _94.EventBurn): _94.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _99.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _99.Module;
                    fromPartial(_: Partial<_99.Module>): _99.Module;
                    fromAmino(_: _99.ModuleAmino): _99.Module;
                    toAmino(_: _99.Module): _99.ModuleAmino;
                    fromAminoMsg(object: _99.ModuleAminoMsg): _99.Module;
                    toAminoMsg(message: _99.Module): _99.ModuleAminoMsg;
                    fromProtoMsg(message: _99.ModuleProtoMsg): _99.Module;
                    toProto(message: _99.Module): Uint8Array;
                    toProtoMsg(message: _99.Module): _99.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _221.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    get(request: _100.GetRequest): Promise<_100.GetResponse>;
                    list(request: _100.ListRequest): Promise<_100.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _100.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.GetRequest;
                    fromPartial(object: Partial<_100.GetRequest>): _100.GetRequest;
                    fromAmino(object: _100.GetRequestAmino): _100.GetRequest;
                    toAmino(message: _100.GetRequest): _100.GetRequestAmino;
                    fromAminoMsg(object: _100.GetRequestAminoMsg): _100.GetRequest;
                    toAminoMsg(message: _100.GetRequest): _100.GetRequestAminoMsg;
                    fromProtoMsg(message: _100.GetRequestProtoMsg): _100.GetRequest;
                    toProto(message: _100.GetRequest): Uint8Array;
                    toProtoMsg(message: _100.GetRequest): _100.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _100.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.GetResponse;
                    fromPartial(object: Partial<_100.GetResponse>): _100.GetResponse;
                    fromAmino(object: _100.GetResponseAmino): _100.GetResponse;
                    toAmino(message: _100.GetResponse): _100.GetResponseAmino;
                    fromAminoMsg(object: _100.GetResponseAminoMsg): _100.GetResponse;
                    toAminoMsg(message: _100.GetResponse): _100.GetResponseAminoMsg;
                    fromProtoMsg(message: _100.GetResponseProtoMsg): _100.GetResponse;
                    toProto(message: _100.GetResponse): Uint8Array;
                    toProtoMsg(message: _100.GetResponse): _100.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _100.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ListRequest;
                    fromPartial(object: Partial<_100.ListRequest>): _100.ListRequest;
                    fromAmino(object: _100.ListRequestAmino): _100.ListRequest;
                    toAmino(message: _100.ListRequest): _100.ListRequestAmino;
                    fromAminoMsg(object: _100.ListRequestAminoMsg): _100.ListRequest;
                    toAminoMsg(message: _100.ListRequest): _100.ListRequestAminoMsg;
                    fromProtoMsg(message: _100.ListRequestProtoMsg): _100.ListRequest;
                    toProto(message: _100.ListRequest): Uint8Array;
                    toProtoMsg(message: _100.ListRequest): _100.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _100.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ListRequest_Prefix;
                    fromPartial(object: Partial<_100.ListRequest_Prefix>): _100.ListRequest_Prefix;
                    fromAmino(object: _100.ListRequest_PrefixAmino): _100.ListRequest_Prefix;
                    toAmino(message: _100.ListRequest_Prefix): _100.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _100.ListRequest_PrefixAminoMsg): _100.ListRequest_Prefix;
                    toAminoMsg(message: _100.ListRequest_Prefix): _100.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _100.ListRequest_PrefixProtoMsg): _100.ListRequest_Prefix;
                    toProto(message: _100.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _100.ListRequest_Prefix): _100.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _100.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ListRequest_Range;
                    fromPartial(object: Partial<_100.ListRequest_Range>): _100.ListRequest_Range;
                    fromAmino(object: _100.ListRequest_RangeAmino): _100.ListRequest_Range;
                    toAmino(message: _100.ListRequest_Range): _100.ListRequest_RangeAmino;
                    fromAminoMsg(object: _100.ListRequest_RangeAminoMsg): _100.ListRequest_Range;
                    toAminoMsg(message: _100.ListRequest_Range): _100.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _100.ListRequest_RangeProtoMsg): _100.ListRequest_Range;
                    toProto(message: _100.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _100.ListRequest_Range): _100.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _100.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ListResponse;
                    fromPartial(object: Partial<_100.ListResponse>): _100.ListResponse;
                    fromAmino(object: _100.ListResponseAmino): _100.ListResponse;
                    toAmino(message: _100.ListResponse): _100.ListResponseAmino;
                    fromAminoMsg(object: _100.ListResponseAminoMsg): _100.ListResponse;
                    toAminoMsg(message: _100.ListResponse): _100.ListResponseAminoMsg;
                    fromProtoMsg(message: _100.ListResponseProtoMsg): _100.ListResponse;
                    toProto(message: _100.ListResponse): Uint8Array;
                    toProtoMsg(message: _100.ListResponse): _100.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _100.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.IndexValue;
                    fromPartial(object: Partial<_100.IndexValue>): _100.IndexValue;
                    fromAmino(object: _100.IndexValueAmino): _100.IndexValue;
                    toAmino(message: _100.IndexValue): _100.IndexValueAmino;
                    fromAminoMsg(object: _100.IndexValueAminoMsg): _100.IndexValue;
                    toAminoMsg(message: _100.IndexValue): _100.IndexValueAminoMsg;
                    fromProtoMsg(message: _100.IndexValueProtoMsg): _100.IndexValue;
                    toProto(message: _100.IndexValue): Uint8Array;
                    toProtoMsg(message: _100.IndexValue): _100.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _101.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.TableDescriptor;
                fromPartial(object: Partial<_101.TableDescriptor>): _101.TableDescriptor;
                fromAmino(object: _101.TableDescriptorAmino): _101.TableDescriptor;
                toAmino(message: _101.TableDescriptor): _101.TableDescriptorAmino;
                fromAminoMsg(object: _101.TableDescriptorAminoMsg): _101.TableDescriptor;
                toAminoMsg(message: _101.TableDescriptor): _101.TableDescriptorAminoMsg;
                fromProtoMsg(message: _101.TableDescriptorProtoMsg): _101.TableDescriptor;
                toProto(message: _101.TableDescriptor): Uint8Array;
                toProtoMsg(message: _101.TableDescriptor): _101.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _101.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_101.PrimaryKeyDescriptor>): _101.PrimaryKeyDescriptor;
                fromAmino(object: _101.PrimaryKeyDescriptorAmino): _101.PrimaryKeyDescriptor;
                toAmino(message: _101.PrimaryKeyDescriptor): _101.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _101.PrimaryKeyDescriptorAminoMsg): _101.PrimaryKeyDescriptor;
                toAminoMsg(message: _101.PrimaryKeyDescriptor): _101.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _101.PrimaryKeyDescriptorProtoMsg): _101.PrimaryKeyDescriptor;
                toProto(message: _101.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _101.PrimaryKeyDescriptor): _101.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _101.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_101.SecondaryIndexDescriptor>): _101.SecondaryIndexDescriptor;
                fromAmino(object: _101.SecondaryIndexDescriptorAmino): _101.SecondaryIndexDescriptor;
                toAmino(message: _101.SecondaryIndexDescriptor): _101.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _101.SecondaryIndexDescriptorAminoMsg): _101.SecondaryIndexDescriptor;
                toAminoMsg(message: _101.SecondaryIndexDescriptor): _101.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _101.SecondaryIndexDescriptorProtoMsg): _101.SecondaryIndexDescriptor;
                toProto(message: _101.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _101.SecondaryIndexDescriptor): _101.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _101.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.SingletonDescriptor;
                fromPartial(object: Partial<_101.SingletonDescriptor>): _101.SingletonDescriptor;
                fromAmino(object: _101.SingletonDescriptorAmino): _101.SingletonDescriptor;
                toAmino(message: _101.SingletonDescriptor): _101.SingletonDescriptorAmino;
                fromAminoMsg(object: _101.SingletonDescriptorAminoMsg): _101.SingletonDescriptor;
                toAminoMsg(message: _101.SingletonDescriptor): _101.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _101.SingletonDescriptorProtoMsg): _101.SingletonDescriptor;
                toProto(message: _101.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _101.SingletonDescriptor): _101.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _102.StorageType;
            storageTypeToJSON(object: _102.StorageType): string;
            StorageType: typeof _102.StorageType;
            StorageTypeSDKType: typeof _102.StorageType;
            StorageTypeAmino: typeof _102.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _102.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_102.ModuleSchemaDescriptor>): _102.ModuleSchemaDescriptor;
                fromAmino(object: _102.ModuleSchemaDescriptorAmino): _102.ModuleSchemaDescriptor;
                toAmino(message: _102.ModuleSchemaDescriptor): _102.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _102.ModuleSchemaDescriptorAminoMsg): _102.ModuleSchemaDescriptor;
                toAminoMsg(message: _102.ModuleSchemaDescriptor): _102.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _102.ModuleSchemaDescriptorProtoMsg): _102.ModuleSchemaDescriptor;
                toProto(message: _102.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _102.ModuleSchemaDescriptor): _102.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _102.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_102.ModuleSchemaDescriptor_FileEntry>): _102.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _102.ModuleSchemaDescriptor_FileEntryAmino): _102.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _102.ModuleSchemaDescriptor_FileEntry): _102.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _102.ModuleSchemaDescriptor_FileEntryAminoMsg): _102.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _102.ModuleSchemaDescriptor_FileEntry): _102.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _102.ModuleSchemaDescriptor_FileEntryProtoMsg): _102.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _102.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _102.ModuleSchemaDescriptor_FileEntry): _102.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _103.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _103.Module;
                    fromPartial(_: Partial<_103.Module>): _103.Module;
                    fromAmino(_: _103.ModuleAmino): _103.Module;
                    toAmino(_: _103.Module): _103.ModuleAmino;
                    fromAminoMsg(object: _103.ModuleAminoMsg): _103.Module;
                    toAminoMsg(message: _103.Module): _103.ModuleAminoMsg;
                    fromProtoMsg(message: _103.ModuleProtoMsg): _103.Module;
                    toProto(message: _103.Module): Uint8Array;
                    toProtoMsg(message: _103.Module): _103.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                subspaces(request?: _105.QuerySubspacesRequest): Promise<_105.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _105.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryParamsRequest;
                fromPartial(object: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                fromAmino(object: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                toAmino(message: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
                fromAminoMsg(object: _105.QueryParamsRequestAminoMsg): _105.QueryParamsRequest;
                toAminoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryParamsRequestProtoMsg): _105.QueryParamsRequest;
                toProto(message: _105.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _105.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryParamsResponse;
                fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
                fromAmino(object: _105.QueryParamsResponseAmino): _105.QueryParamsResponse;
                toAmino(message: _105.QueryParamsResponse): _105.QueryParamsResponseAmino;
                fromAminoMsg(object: _105.QueryParamsResponseAminoMsg): _105.QueryParamsResponse;
                toAminoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryParamsResponseProtoMsg): _105.QueryParamsResponse;
                toProto(message: _105.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _105.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.QuerySubspacesRequest;
                fromPartial(_: Partial<_105.QuerySubspacesRequest>): _105.QuerySubspacesRequest;
                fromAmino(_: _105.QuerySubspacesRequestAmino): _105.QuerySubspacesRequest;
                toAmino(_: _105.QuerySubspacesRequest): _105.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _105.QuerySubspacesRequestAminoMsg): _105.QuerySubspacesRequest;
                toAminoMsg(message: _105.QuerySubspacesRequest): _105.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _105.QuerySubspacesRequestProtoMsg): _105.QuerySubspacesRequest;
                toProto(message: _105.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _105.QuerySubspacesRequest): _105.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _105.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QuerySubspacesResponse;
                fromPartial(object: Partial<_105.QuerySubspacesResponse>): _105.QuerySubspacesResponse;
                fromAmino(object: _105.QuerySubspacesResponseAmino): _105.QuerySubspacesResponse;
                toAmino(message: _105.QuerySubspacesResponse): _105.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _105.QuerySubspacesResponseAminoMsg): _105.QuerySubspacesResponse;
                toAminoMsg(message: _105.QuerySubspacesResponse): _105.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _105.QuerySubspacesResponseProtoMsg): _105.QuerySubspacesResponse;
                toProto(message: _105.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _105.QuerySubspacesResponse): _105.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _105.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Subspace;
                fromPartial(object: Partial<_105.Subspace>): _105.Subspace;
                fromAmino(object: _105.SubspaceAmino): _105.Subspace;
                toAmino(message: _105.Subspace): _105.SubspaceAmino;
                fromAminoMsg(object: _105.SubspaceAminoMsg): _105.Subspace;
                toAminoMsg(message: _105.Subspace): _105.SubspaceAminoMsg;
                fromProtoMsg(message: _105.SubspaceProtoMsg): _105.Subspace;
                toProto(message: _105.Subspace): Uint8Array;
                toProtoMsg(message: _105.Subspace): _105.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _104.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ParameterChangeProposal;
                fromPartial(object: Partial<_104.ParameterChangeProposal>): _104.ParameterChangeProposal;
                fromAmino(object: _104.ParameterChangeProposalAmino): _104.ParameterChangeProposal;
                toAmino(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalAmino;
                fromAminoMsg(object: _104.ParameterChangeProposalAminoMsg): _104.ParameterChangeProposal;
                toAminoMsg(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _104.ParameterChangeProposalProtoMsg): _104.ParameterChangeProposal;
                toProto(message: _104.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _104.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ParamChange;
                fromPartial(object: Partial<_104.ParamChange>): _104.ParamChange;
                fromAmino(object: _104.ParamChangeAmino): _104.ParamChange;
                toAmino(message: _104.ParamChange): _104.ParamChangeAmino;
                fromAminoMsg(object: _104.ParamChangeAminoMsg): _104.ParamChange;
                toAminoMsg(message: _104.ParamChange): _104.ParamChangeAminoMsg;
                fromProtoMsg(message: _104.ParamChangeProtoMsg): _104.ParamChange;
                toProto(message: _104.ParamChange): Uint8Array;
                toProtoMsg(message: _104.ParamChange): _104.ParamChangeProtoMsg;
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
                encode(_: _107.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.FileDescriptorsRequest;
                fromPartial(_: Partial<_107.FileDescriptorsRequest>): _107.FileDescriptorsRequest;
                fromAmino(_: _107.FileDescriptorsRequestAmino): _107.FileDescriptorsRequest;
                toAmino(_: _107.FileDescriptorsRequest): _107.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _107.FileDescriptorsRequestAminoMsg): _107.FileDescriptorsRequest;
                toAminoMsg(message: _107.FileDescriptorsRequest): _107.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _107.FileDescriptorsRequestProtoMsg): _107.FileDescriptorsRequest;
                toProto(message: _107.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _107.FileDescriptorsRequest): _107.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _107.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.FileDescriptorsResponse;
                fromPartial(object: Partial<_107.FileDescriptorsResponse>): _107.FileDescriptorsResponse;
                fromAmino(object: _107.FileDescriptorsResponseAmino): _107.FileDescriptorsResponse;
                toAmino(message: _107.FileDescriptorsResponse): _107.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _107.FileDescriptorsResponseAminoMsg): _107.FileDescriptorsResponse;
                toAminoMsg(message: _107.FileDescriptorsResponse): _107.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _107.FileDescriptorsResponseProtoMsg): _107.FileDescriptorsResponse;
                toProto(message: _107.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _107.FileDescriptorsResponse): _107.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _108.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.Module;
                    fromPartial(object: Partial<_108.Module>): _108.Module;
                    fromAmino(object: _108.ModuleAmino): _108.Module;
                    toAmino(message: _108.Module): _108.ModuleAmino;
                    fromAminoMsg(object: _108.ModuleAminoMsg): _108.Module;
                    toAminoMsg(message: _108.Module): _108.ModuleAminoMsg;
                    fromProtoMsg(message: _108.ModuleProtoMsg): _108.Module;
                    toProto(message: _108.Module): Uint8Array;
                    toProtoMsg(message: _108.Module): _108.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                signingInfo(request: _110.QuerySigningInfoRequest): Promise<_110.QuerySigningInfoResponse>;
                signingInfos(request?: _110.QuerySigningInfosRequest): Promise<_110.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _112.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _112.MsgUnjail): {
                        typeUrl: string;
                        value: _112.MsgUnjail;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _112.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _112.MsgUnjail): {
                        typeUrl: string;
                        value: _112.MsgUnjail;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _112.MsgUnjail) => _112.MsgUnjailAmino;
                    fromAmino: (object: _112.MsgUnjailAmino) => _112.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _112.MsgUpdateParams) => _112.MsgUpdateParamsAmino;
                    fromAmino: (object: _112.MsgUpdateParamsAmino) => _112.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _112.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MsgUnjail;
                fromPartial(object: Partial<_112.MsgUnjail>): _112.MsgUnjail;
                fromAmino(object: _112.MsgUnjailAmino): _112.MsgUnjail;
                toAmino(message: _112.MsgUnjail): _112.MsgUnjailAmino;
                fromAminoMsg(object: _112.MsgUnjailAminoMsg): _112.MsgUnjail;
                toAminoMsg(message: _112.MsgUnjail): _112.MsgUnjailAminoMsg;
                fromProtoMsg(message: _112.MsgUnjailProtoMsg): _112.MsgUnjail;
                toProto(message: _112.MsgUnjail): Uint8Array;
                toProtoMsg(message: _112.MsgUnjail): _112.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _112.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.MsgUnjailResponse;
                fromPartial(_: Partial<_112.MsgUnjailResponse>): _112.MsgUnjailResponse;
                fromAmino(_: _112.MsgUnjailResponseAmino): _112.MsgUnjailResponse;
                toAmino(_: _112.MsgUnjailResponse): _112.MsgUnjailResponseAmino;
                fromAminoMsg(object: _112.MsgUnjailResponseAminoMsg): _112.MsgUnjailResponse;
                toAminoMsg(message: _112.MsgUnjailResponse): _112.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _112.MsgUnjailResponseProtoMsg): _112.MsgUnjailResponse;
                toProto(message: _112.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _112.MsgUnjailResponse): _112.MsgUnjailResponseProtoMsg;
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
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _111.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.ValidatorSigningInfo;
                fromPartial(object: Partial<_111.ValidatorSigningInfo>): _111.ValidatorSigningInfo;
                fromAmino(object: _111.ValidatorSigningInfoAmino): _111.ValidatorSigningInfo;
                toAmino(message: _111.ValidatorSigningInfo): _111.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _111.ValidatorSigningInfoAminoMsg): _111.ValidatorSigningInfo;
                toAminoMsg(message: _111.ValidatorSigningInfo): _111.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _111.ValidatorSigningInfoProtoMsg): _111.ValidatorSigningInfo;
                toProto(message: _111.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _111.ValidatorSigningInfo): _111.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _111.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Params;
                fromPartial(object: Partial<_111.Params>): _111.Params;
                fromAmino(object: _111.ParamsAmino): _111.Params;
                toAmino(message: _111.Params): _111.ParamsAmino;
                fromAminoMsg(object: _111.ParamsAminoMsg): _111.Params;
                toAminoMsg(message: _111.Params): _111.ParamsAminoMsg;
                fromProtoMsg(message: _111.ParamsProtoMsg): _111.Params;
                toProto(message: _111.Params): Uint8Array;
                toProtoMsg(message: _111.Params): _111.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _110.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.QueryParamsRequest;
                fromPartial(_: Partial<_110.QueryParamsRequest>): _110.QueryParamsRequest;
                fromAmino(_: _110.QueryParamsRequestAmino): _110.QueryParamsRequest;
                toAmino(_: _110.QueryParamsRequest): _110.QueryParamsRequestAmino;
                fromAminoMsg(object: _110.QueryParamsRequestAminoMsg): _110.QueryParamsRequest;
                toAminoMsg(message: _110.QueryParamsRequest): _110.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryParamsRequestProtoMsg): _110.QueryParamsRequest;
                toProto(message: _110.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryParamsRequest): _110.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _110.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryParamsResponse;
                fromPartial(object: Partial<_110.QueryParamsResponse>): _110.QueryParamsResponse;
                fromAmino(object: _110.QueryParamsResponseAmino): _110.QueryParamsResponse;
                toAmino(message: _110.QueryParamsResponse): _110.QueryParamsResponseAmino;
                fromAminoMsg(object: _110.QueryParamsResponseAminoMsg): _110.QueryParamsResponse;
                toAminoMsg(message: _110.QueryParamsResponse): _110.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryParamsResponseProtoMsg): _110.QueryParamsResponse;
                toProto(message: _110.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryParamsResponse): _110.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _110.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QuerySigningInfoRequest;
                fromPartial(object: Partial<_110.QuerySigningInfoRequest>): _110.QuerySigningInfoRequest;
                fromAmino(object: _110.QuerySigningInfoRequestAmino): _110.QuerySigningInfoRequest;
                toAmino(message: _110.QuerySigningInfoRequest): _110.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _110.QuerySigningInfoRequestAminoMsg): _110.QuerySigningInfoRequest;
                toAminoMsg(message: _110.QuerySigningInfoRequest): _110.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _110.QuerySigningInfoRequestProtoMsg): _110.QuerySigningInfoRequest;
                toProto(message: _110.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _110.QuerySigningInfoRequest): _110.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _110.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QuerySigningInfoResponse;
                fromPartial(object: Partial<_110.QuerySigningInfoResponse>): _110.QuerySigningInfoResponse;
                fromAmino(object: _110.QuerySigningInfoResponseAmino): _110.QuerySigningInfoResponse;
                toAmino(message: _110.QuerySigningInfoResponse): _110.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _110.QuerySigningInfoResponseAminoMsg): _110.QuerySigningInfoResponse;
                toAminoMsg(message: _110.QuerySigningInfoResponse): _110.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _110.QuerySigningInfoResponseProtoMsg): _110.QuerySigningInfoResponse;
                toProto(message: _110.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _110.QuerySigningInfoResponse): _110.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _110.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QuerySigningInfosRequest;
                fromPartial(object: Partial<_110.QuerySigningInfosRequest>): _110.QuerySigningInfosRequest;
                fromAmino(object: _110.QuerySigningInfosRequestAmino): _110.QuerySigningInfosRequest;
                toAmino(message: _110.QuerySigningInfosRequest): _110.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _110.QuerySigningInfosRequestAminoMsg): _110.QuerySigningInfosRequest;
                toAminoMsg(message: _110.QuerySigningInfosRequest): _110.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _110.QuerySigningInfosRequestProtoMsg): _110.QuerySigningInfosRequest;
                toProto(message: _110.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _110.QuerySigningInfosRequest): _110.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _110.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QuerySigningInfosResponse;
                fromPartial(object: Partial<_110.QuerySigningInfosResponse>): _110.QuerySigningInfosResponse;
                fromAmino(object: _110.QuerySigningInfosResponseAmino): _110.QuerySigningInfosResponse;
                toAmino(message: _110.QuerySigningInfosResponse): _110.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _110.QuerySigningInfosResponseAminoMsg): _110.QuerySigningInfosResponse;
                toAminoMsg(message: _110.QuerySigningInfosResponse): _110.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _110.QuerySigningInfosResponseProtoMsg): _110.QuerySigningInfosResponse;
                toProto(message: _110.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _110.QuerySigningInfosResponse): _110.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _109.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.GenesisState;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                toProto(message: _109.GenesisState): Uint8Array;
                toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _109.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.SigningInfo;
                fromPartial(object: Partial<_109.SigningInfo>): _109.SigningInfo;
                fromAmino(object: _109.SigningInfoAmino): _109.SigningInfo;
                toAmino(message: _109.SigningInfo): _109.SigningInfoAmino;
                fromAminoMsg(object: _109.SigningInfoAminoMsg): _109.SigningInfo;
                toAminoMsg(message: _109.SigningInfo): _109.SigningInfoAminoMsg;
                fromProtoMsg(message: _109.SigningInfoProtoMsg): _109.SigningInfo;
                toProto(message: _109.SigningInfo): Uint8Array;
                toProtoMsg(message: _109.SigningInfo): _109.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _109.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ValidatorMissedBlocks;
                fromPartial(object: Partial<_109.ValidatorMissedBlocks>): _109.ValidatorMissedBlocks;
                fromAmino(object: _109.ValidatorMissedBlocksAmino): _109.ValidatorMissedBlocks;
                toAmino(message: _109.ValidatorMissedBlocks): _109.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _109.ValidatorMissedBlocksAminoMsg): _109.ValidatorMissedBlocks;
                toAminoMsg(message: _109.ValidatorMissedBlocks): _109.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _109.ValidatorMissedBlocksProtoMsg): _109.ValidatorMissedBlocks;
                toProto(message: _109.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _109.ValidatorMissedBlocks): _109.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _109.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.MissedBlock;
                fromPartial(object: Partial<_109.MissedBlock>): _109.MissedBlock;
                fromAmino(object: _109.MissedBlockAmino): _109.MissedBlock;
                toAmino(message: _109.MissedBlock): _109.MissedBlockAmino;
                fromAminoMsg(object: _109.MissedBlockAminoMsg): _109.MissedBlock;
                toAminoMsg(message: _109.MissedBlock): _109.MissedBlockAminoMsg;
                fromProtoMsg(message: _109.MissedBlockProtoMsg): _109.MissedBlock;
                toProto(message: _109.MissedBlock): Uint8Array;
                toProtoMsg(message: _109.MissedBlock): _109.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _113.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.Module;
                    fromPartial(object: Partial<_113.Module>): _113.Module;
                    fromAmino(object: _113.ModuleAmino): _113.Module;
                    toAmino(message: _113.Module): _113.ModuleAmino;
                    fromAminoMsg(object: _113.ModuleAminoMsg): _113.Module;
                    toAminoMsg(message: _113.Module): _113.ModuleAminoMsg;
                    fromProtoMsg(message: _113.ModuleProtoMsg): _113.Module;
                    toProto(message: _113.Module): Uint8Array;
                    toProtoMsg(message: _113.Module): _113.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _116.QueryValidatorsRequest): Promise<_116.QueryValidatorsResponse>;
                validator(request: _116.QueryValidatorRequest): Promise<_116.QueryValidatorResponse>;
                validatorDelegations(request: _116.QueryValidatorDelegationsRequest): Promise<_116.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _116.QueryValidatorUnbondingDelegationsRequest): Promise<_116.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _116.QueryDelegationRequest): Promise<_116.QueryDelegationResponse>;
                unbondingDelegation(request: _116.QueryUnbondingDelegationRequest): Promise<_116.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _116.QueryDelegatorDelegationsRequest): Promise<_116.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _116.QueryDelegatorUnbondingDelegationsRequest): Promise<_116.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _116.QueryRedelegationsRequest): Promise<_116.QueryRedelegationsResponse>;
                delegatorValidators(request: _116.QueryDelegatorValidatorsRequest): Promise<_116.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _116.QueryDelegatorValidatorRequest): Promise<_116.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _116.QueryHistoricalInfoRequest): Promise<_116.QueryHistoricalInfoResponse>;
                pool(request?: _116.QueryPoolRequest): Promise<_116.QueryPoolResponse>;
                params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _118.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _118.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _118.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _118.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _118.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _118.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _118.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _118.MsgCreateValidator): {
                        typeUrl: string;
                        value: _118.MsgCreateValidator;
                    };
                    editValidator(value: _118.MsgEditValidator): {
                        typeUrl: string;
                        value: _118.MsgEditValidator;
                    };
                    delegate(value: _118.MsgDelegate): {
                        typeUrl: string;
                        value: _118.MsgDelegate;
                    };
                    beginRedelegate(value: _118.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _118.MsgBeginRedelegate;
                    };
                    undelegate(value: _118.MsgUndelegate): {
                        typeUrl: string;
                        value: _118.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _118.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _118.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _118.MsgUpdateParams): {
                        typeUrl: string;
                        value: _118.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _118.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _118.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _118.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _118.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _118.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _118.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _118.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _118.MsgCreateValidator): {
                        typeUrl: string;
                        value: _118.MsgCreateValidator;
                    };
                    editValidator(value: _118.MsgEditValidator): {
                        typeUrl: string;
                        value: _118.MsgEditValidator;
                    };
                    delegate(value: _118.MsgDelegate): {
                        typeUrl: string;
                        value: _118.MsgDelegate;
                    };
                    beginRedelegate(value: _118.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _118.MsgBeginRedelegate;
                    };
                    undelegate(value: _118.MsgUndelegate): {
                        typeUrl: string;
                        value: _118.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _118.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _118.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _118.MsgUpdateParams): {
                        typeUrl: string;
                        value: _118.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _118.MsgCreateValidator) => _118.MsgCreateValidatorAmino;
                    fromAmino: (object: _118.MsgCreateValidatorAmino) => _118.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _118.MsgEditValidator) => _118.MsgEditValidatorAmino;
                    fromAmino: (object: _118.MsgEditValidatorAmino) => _118.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _118.MsgDelegate) => _118.MsgDelegateAmino;
                    fromAmino: (object: _118.MsgDelegateAmino) => _118.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _118.MsgBeginRedelegate) => _118.MsgBeginRedelegateAmino;
                    fromAmino: (object: _118.MsgBeginRedelegateAmino) => _118.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _118.MsgUndelegate) => _118.MsgUndelegateAmino;
                    fromAmino: (object: _118.MsgUndelegateAmino) => _118.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _118.MsgCancelUnbondingDelegation) => _118.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _118.MsgCancelUnbondingDelegationAmino) => _118.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _118.MsgUpdateParams) => _118.MsgUpdateParamsAmino;
                    fromAmino: (object: _118.MsgUpdateParamsAmino) => _118.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _118.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgCreateValidator;
                fromPartial(object: Partial<_118.MsgCreateValidator>): _118.MsgCreateValidator;
                fromAmino(object: _118.MsgCreateValidatorAmino): _118.MsgCreateValidator;
                toAmino(message: _118.MsgCreateValidator): _118.MsgCreateValidatorAmino;
                fromAminoMsg(object: _118.MsgCreateValidatorAminoMsg): _118.MsgCreateValidator;
                toAminoMsg(message: _118.MsgCreateValidator): _118.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _118.MsgCreateValidatorProtoMsg): _118.MsgCreateValidator;
                toProto(message: _118.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _118.MsgCreateValidator): _118.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _118.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_118.MsgCreateValidatorResponse>): _118.MsgCreateValidatorResponse;
                fromAmino(_: _118.MsgCreateValidatorResponseAmino): _118.MsgCreateValidatorResponse;
                toAmino(_: _118.MsgCreateValidatorResponse): _118.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _118.MsgCreateValidatorResponseAminoMsg): _118.MsgCreateValidatorResponse;
                toAminoMsg(message: _118.MsgCreateValidatorResponse): _118.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _118.MsgCreateValidatorResponseProtoMsg): _118.MsgCreateValidatorResponse;
                toProto(message: _118.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _118.MsgCreateValidatorResponse): _118.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _118.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgEditValidator;
                fromPartial(object: Partial<_118.MsgEditValidator>): _118.MsgEditValidator;
                fromAmino(object: _118.MsgEditValidatorAmino): _118.MsgEditValidator;
                toAmino(message: _118.MsgEditValidator): _118.MsgEditValidatorAmino;
                fromAminoMsg(object: _118.MsgEditValidatorAminoMsg): _118.MsgEditValidator;
                toAminoMsg(message: _118.MsgEditValidator): _118.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _118.MsgEditValidatorProtoMsg): _118.MsgEditValidator;
                toProto(message: _118.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _118.MsgEditValidator): _118.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _118.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.MsgEditValidatorResponse;
                fromPartial(_: Partial<_118.MsgEditValidatorResponse>): _118.MsgEditValidatorResponse;
                fromAmino(_: _118.MsgEditValidatorResponseAmino): _118.MsgEditValidatorResponse;
                toAmino(_: _118.MsgEditValidatorResponse): _118.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _118.MsgEditValidatorResponseAminoMsg): _118.MsgEditValidatorResponse;
                toAminoMsg(message: _118.MsgEditValidatorResponse): _118.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _118.MsgEditValidatorResponseProtoMsg): _118.MsgEditValidatorResponse;
                toProto(message: _118.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _118.MsgEditValidatorResponse): _118.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _118.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgDelegate;
                fromPartial(object: Partial<_118.MsgDelegate>): _118.MsgDelegate;
                fromAmino(object: _118.MsgDelegateAmino): _118.MsgDelegate;
                toAmino(message: _118.MsgDelegate): _118.MsgDelegateAmino;
                fromAminoMsg(object: _118.MsgDelegateAminoMsg): _118.MsgDelegate;
                toAminoMsg(message: _118.MsgDelegate): _118.MsgDelegateAminoMsg;
                fromProtoMsg(message: _118.MsgDelegateProtoMsg): _118.MsgDelegate;
                toProto(message: _118.MsgDelegate): Uint8Array;
                toProtoMsg(message: _118.MsgDelegate): _118.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _118.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.MsgDelegateResponse;
                fromPartial(_: Partial<_118.MsgDelegateResponse>): _118.MsgDelegateResponse;
                fromAmino(_: _118.MsgDelegateResponseAmino): _118.MsgDelegateResponse;
                toAmino(_: _118.MsgDelegateResponse): _118.MsgDelegateResponseAmino;
                fromAminoMsg(object: _118.MsgDelegateResponseAminoMsg): _118.MsgDelegateResponse;
                toAminoMsg(message: _118.MsgDelegateResponse): _118.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _118.MsgDelegateResponseProtoMsg): _118.MsgDelegateResponse;
                toProto(message: _118.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _118.MsgDelegateResponse): _118.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _118.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgBeginRedelegate;
                fromPartial(object: Partial<_118.MsgBeginRedelegate>): _118.MsgBeginRedelegate;
                fromAmino(object: _118.MsgBeginRedelegateAmino): _118.MsgBeginRedelegate;
                toAmino(message: _118.MsgBeginRedelegate): _118.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _118.MsgBeginRedelegateAminoMsg): _118.MsgBeginRedelegate;
                toAminoMsg(message: _118.MsgBeginRedelegate): _118.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _118.MsgBeginRedelegateProtoMsg): _118.MsgBeginRedelegate;
                toProto(message: _118.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _118.MsgBeginRedelegate): _118.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _118.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_118.MsgBeginRedelegateResponse>): _118.MsgBeginRedelegateResponse;
                fromAmino(object: _118.MsgBeginRedelegateResponseAmino): _118.MsgBeginRedelegateResponse;
                toAmino(message: _118.MsgBeginRedelegateResponse): _118.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _118.MsgBeginRedelegateResponseAminoMsg): _118.MsgBeginRedelegateResponse;
                toAminoMsg(message: _118.MsgBeginRedelegateResponse): _118.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _118.MsgBeginRedelegateResponseProtoMsg): _118.MsgBeginRedelegateResponse;
                toProto(message: _118.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _118.MsgBeginRedelegateResponse): _118.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _118.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgUndelegate;
                fromPartial(object: Partial<_118.MsgUndelegate>): _118.MsgUndelegate;
                fromAmino(object: _118.MsgUndelegateAmino): _118.MsgUndelegate;
                toAmino(message: _118.MsgUndelegate): _118.MsgUndelegateAmino;
                fromAminoMsg(object: _118.MsgUndelegateAminoMsg): _118.MsgUndelegate;
                toAminoMsg(message: _118.MsgUndelegate): _118.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _118.MsgUndelegateProtoMsg): _118.MsgUndelegate;
                toProto(message: _118.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _118.MsgUndelegate): _118.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _118.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgUndelegateResponse;
                fromPartial(object: Partial<_118.MsgUndelegateResponse>): _118.MsgUndelegateResponse;
                fromAmino(object: _118.MsgUndelegateResponseAmino): _118.MsgUndelegateResponse;
                toAmino(message: _118.MsgUndelegateResponse): _118.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _118.MsgUndelegateResponseAminoMsg): _118.MsgUndelegateResponse;
                toAminoMsg(message: _118.MsgUndelegateResponse): _118.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _118.MsgUndelegateResponseProtoMsg): _118.MsgUndelegateResponse;
                toProto(message: _118.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _118.MsgUndelegateResponse): _118.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _118.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_118.MsgCancelUnbondingDelegation>): _118.MsgCancelUnbondingDelegation;
                fromAmino(object: _118.MsgCancelUnbondingDelegationAmino): _118.MsgCancelUnbondingDelegation;
                toAmino(message: _118.MsgCancelUnbondingDelegation): _118.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _118.MsgCancelUnbondingDelegationAminoMsg): _118.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _118.MsgCancelUnbondingDelegation): _118.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _118.MsgCancelUnbondingDelegationProtoMsg): _118.MsgCancelUnbondingDelegation;
                toProto(message: _118.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _118.MsgCancelUnbondingDelegation): _118.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _118.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_118.MsgCancelUnbondingDelegationResponse>): _118.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _118.MsgCancelUnbondingDelegationResponseAmino): _118.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _118.MsgCancelUnbondingDelegationResponse): _118.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _118.MsgCancelUnbondingDelegationResponseAminoMsg): _118.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _118.MsgCancelUnbondingDelegationResponse): _118.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _118.MsgCancelUnbondingDelegationResponseProtoMsg): _118.MsgCancelUnbondingDelegationResponse;
                toProto(message: _118.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _118.MsgCancelUnbondingDelegationResponse): _118.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _118.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MsgUpdateParams;
                fromPartial(object: Partial<_118.MsgUpdateParams>): _118.MsgUpdateParams;
                fromAmino(object: _118.MsgUpdateParamsAmino): _118.MsgUpdateParams;
                toAmino(message: _118.MsgUpdateParams): _118.MsgUpdateParamsAmino;
                fromAminoMsg(object: _118.MsgUpdateParamsAminoMsg): _118.MsgUpdateParams;
                toAminoMsg(message: _118.MsgUpdateParams): _118.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _118.MsgUpdateParamsProtoMsg): _118.MsgUpdateParams;
                toProto(message: _118.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _118.MsgUpdateParams): _118.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _118.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _118.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_118.MsgUpdateParamsResponse>): _118.MsgUpdateParamsResponse;
                fromAmino(_: _118.MsgUpdateParamsResponseAmino): _118.MsgUpdateParamsResponse;
                toAmino(_: _118.MsgUpdateParamsResponse): _118.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _118.MsgUpdateParamsResponseAminoMsg): _118.MsgUpdateParamsResponse;
                toAminoMsg(message: _118.MsgUpdateParamsResponse): _118.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _118.MsgUpdateParamsResponseProtoMsg): _118.MsgUpdateParamsResponse;
                toProto(message: _118.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _118.MsgUpdateParamsResponse): _118.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _117.BondStatus;
            bondStatusToJSON(object: _117.BondStatus): string;
            infractionFromJSON(object: any): _117.Infraction;
            infractionToJSON(object: _117.Infraction): string;
            BondStatus: typeof _117.BondStatus;
            BondStatusSDKType: typeof _117.BondStatus;
            BondStatusAmino: typeof _117.BondStatus;
            Infraction: typeof _117.Infraction;
            InfractionSDKType: typeof _117.Infraction;
            InfractionAmino: typeof _117.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _117.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.HistoricalInfo;
                fromPartial(object: Partial<_117.HistoricalInfo>): _117.HistoricalInfo;
                fromAmino(object: _117.HistoricalInfoAmino): _117.HistoricalInfo;
                toAmino(message: _117.HistoricalInfo): _117.HistoricalInfoAmino;
                fromAminoMsg(object: _117.HistoricalInfoAminoMsg): _117.HistoricalInfo;
                toAminoMsg(message: _117.HistoricalInfo): _117.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _117.HistoricalInfoProtoMsg): _117.HistoricalInfo;
                toProto(message: _117.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _117.HistoricalInfo): _117.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _117.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.CommissionRates;
                fromPartial(object: Partial<_117.CommissionRates>): _117.CommissionRates;
                fromAmino(object: _117.CommissionRatesAmino): _117.CommissionRates;
                toAmino(message: _117.CommissionRates): _117.CommissionRatesAmino;
                fromAminoMsg(object: _117.CommissionRatesAminoMsg): _117.CommissionRates;
                toAminoMsg(message: _117.CommissionRates): _117.CommissionRatesAminoMsg;
                fromProtoMsg(message: _117.CommissionRatesProtoMsg): _117.CommissionRates;
                toProto(message: _117.CommissionRates): Uint8Array;
                toProtoMsg(message: _117.CommissionRates): _117.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _117.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Commission;
                fromPartial(object: Partial<_117.Commission>): _117.Commission;
                fromAmino(object: _117.CommissionAmino): _117.Commission;
                toAmino(message: _117.Commission): _117.CommissionAmino;
                fromAminoMsg(object: _117.CommissionAminoMsg): _117.Commission;
                toAminoMsg(message: _117.Commission): _117.CommissionAminoMsg;
                fromProtoMsg(message: _117.CommissionProtoMsg): _117.Commission;
                toProto(message: _117.Commission): Uint8Array;
                toProtoMsg(message: _117.Commission): _117.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _117.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Description;
                fromPartial(object: Partial<_117.Description>): _117.Description;
                fromAmino(object: _117.DescriptionAmino): _117.Description;
                toAmino(message: _117.Description): _117.DescriptionAmino;
                fromAminoMsg(object: _117.DescriptionAminoMsg): _117.Description;
                toAminoMsg(message: _117.Description): _117.DescriptionAminoMsg;
                fromProtoMsg(message: _117.DescriptionProtoMsg): _117.Description;
                toProto(message: _117.Description): Uint8Array;
                toProtoMsg(message: _117.Description): _117.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _117.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Validator;
                fromPartial(object: Partial<_117.Validator>): _117.Validator;
                fromAmino(object: _117.ValidatorAmino): _117.Validator;
                toAmino(message: _117.Validator): _117.ValidatorAmino;
                fromAminoMsg(object: _117.ValidatorAminoMsg): _117.Validator;
                toAminoMsg(message: _117.Validator): _117.ValidatorAminoMsg;
                fromProtoMsg(message: _117.ValidatorProtoMsg): _117.Validator;
                toProto(message: _117.Validator): Uint8Array;
                toProtoMsg(message: _117.Validator): _117.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _117.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ValAddresses;
                fromPartial(object: Partial<_117.ValAddresses>): _117.ValAddresses;
                fromAmino(object: _117.ValAddressesAmino): _117.ValAddresses;
                toAmino(message: _117.ValAddresses): _117.ValAddressesAmino;
                fromAminoMsg(object: _117.ValAddressesAminoMsg): _117.ValAddresses;
                toAminoMsg(message: _117.ValAddresses): _117.ValAddressesAminoMsg;
                fromProtoMsg(message: _117.ValAddressesProtoMsg): _117.ValAddresses;
                toProto(message: _117.ValAddresses): Uint8Array;
                toProtoMsg(message: _117.ValAddresses): _117.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _117.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.DVPair;
                fromPartial(object: Partial<_117.DVPair>): _117.DVPair;
                fromAmino(object: _117.DVPairAmino): _117.DVPair;
                toAmino(message: _117.DVPair): _117.DVPairAmino;
                fromAminoMsg(object: _117.DVPairAminoMsg): _117.DVPair;
                toAminoMsg(message: _117.DVPair): _117.DVPairAminoMsg;
                fromProtoMsg(message: _117.DVPairProtoMsg): _117.DVPair;
                toProto(message: _117.DVPair): Uint8Array;
                toProtoMsg(message: _117.DVPair): _117.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _117.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.DVPairs;
                fromPartial(object: Partial<_117.DVPairs>): _117.DVPairs;
                fromAmino(object: _117.DVPairsAmino): _117.DVPairs;
                toAmino(message: _117.DVPairs): _117.DVPairsAmino;
                fromAminoMsg(object: _117.DVPairsAminoMsg): _117.DVPairs;
                toAminoMsg(message: _117.DVPairs): _117.DVPairsAminoMsg;
                fromProtoMsg(message: _117.DVPairsProtoMsg): _117.DVPairs;
                toProto(message: _117.DVPairs): Uint8Array;
                toProtoMsg(message: _117.DVPairs): _117.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _117.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.DVVTriplet;
                fromPartial(object: Partial<_117.DVVTriplet>): _117.DVVTriplet;
                fromAmino(object: _117.DVVTripletAmino): _117.DVVTriplet;
                toAmino(message: _117.DVVTriplet): _117.DVVTripletAmino;
                fromAminoMsg(object: _117.DVVTripletAminoMsg): _117.DVVTriplet;
                toAminoMsg(message: _117.DVVTriplet): _117.DVVTripletAminoMsg;
                fromProtoMsg(message: _117.DVVTripletProtoMsg): _117.DVVTriplet;
                toProto(message: _117.DVVTriplet): Uint8Array;
                toProtoMsg(message: _117.DVVTriplet): _117.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _117.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.DVVTriplets;
                fromPartial(object: Partial<_117.DVVTriplets>): _117.DVVTriplets;
                fromAmino(object: _117.DVVTripletsAmino): _117.DVVTriplets;
                toAmino(message: _117.DVVTriplets): _117.DVVTripletsAmino;
                fromAminoMsg(object: _117.DVVTripletsAminoMsg): _117.DVVTriplets;
                toAminoMsg(message: _117.DVVTriplets): _117.DVVTripletsAminoMsg;
                fromProtoMsg(message: _117.DVVTripletsProtoMsg): _117.DVVTriplets;
                toProto(message: _117.DVVTriplets): Uint8Array;
                toProtoMsg(message: _117.DVVTriplets): _117.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _117.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Delegation;
                fromPartial(object: Partial<_117.Delegation>): _117.Delegation;
                fromAmino(object: _117.DelegationAmino): _117.Delegation;
                toAmino(message: _117.Delegation): _117.DelegationAmino;
                fromAminoMsg(object: _117.DelegationAminoMsg): _117.Delegation;
                toAminoMsg(message: _117.Delegation): _117.DelegationAminoMsg;
                fromProtoMsg(message: _117.DelegationProtoMsg): _117.Delegation;
                toProto(message: _117.Delegation): Uint8Array;
                toProtoMsg(message: _117.Delegation): _117.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _117.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.UnbondingDelegation;
                fromPartial(object: Partial<_117.UnbondingDelegation>): _117.UnbondingDelegation;
                fromAmino(object: _117.UnbondingDelegationAmino): _117.UnbondingDelegation;
                toAmino(message: _117.UnbondingDelegation): _117.UnbondingDelegationAmino;
                fromAminoMsg(object: _117.UnbondingDelegationAminoMsg): _117.UnbondingDelegation;
                toAminoMsg(message: _117.UnbondingDelegation): _117.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _117.UnbondingDelegationProtoMsg): _117.UnbondingDelegation;
                toProto(message: _117.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _117.UnbondingDelegation): _117.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _117.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.UnbondingDelegationEntry;
                fromPartial(object: Partial<_117.UnbondingDelegationEntry>): _117.UnbondingDelegationEntry;
                fromAmino(object: _117.UnbondingDelegationEntryAmino): _117.UnbondingDelegationEntry;
                toAmino(message: _117.UnbondingDelegationEntry): _117.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _117.UnbondingDelegationEntryAminoMsg): _117.UnbondingDelegationEntry;
                toAminoMsg(message: _117.UnbondingDelegationEntry): _117.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _117.UnbondingDelegationEntryProtoMsg): _117.UnbondingDelegationEntry;
                toProto(message: _117.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _117.UnbondingDelegationEntry): _117.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _117.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.RedelegationEntry;
                fromPartial(object: Partial<_117.RedelegationEntry>): _117.RedelegationEntry;
                fromAmino(object: _117.RedelegationEntryAmino): _117.RedelegationEntry;
                toAmino(message: _117.RedelegationEntry): _117.RedelegationEntryAmino;
                fromAminoMsg(object: _117.RedelegationEntryAminoMsg): _117.RedelegationEntry;
                toAminoMsg(message: _117.RedelegationEntry): _117.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _117.RedelegationEntryProtoMsg): _117.RedelegationEntry;
                toProto(message: _117.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _117.RedelegationEntry): _117.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _117.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Redelegation;
                fromPartial(object: Partial<_117.Redelegation>): _117.Redelegation;
                fromAmino(object: _117.RedelegationAmino): _117.Redelegation;
                toAmino(message: _117.Redelegation): _117.RedelegationAmino;
                fromAminoMsg(object: _117.RedelegationAminoMsg): _117.Redelegation;
                toAminoMsg(message: _117.Redelegation): _117.RedelegationAminoMsg;
                fromProtoMsg(message: _117.RedelegationProtoMsg): _117.Redelegation;
                toProto(message: _117.Redelegation): Uint8Array;
                toProtoMsg(message: _117.Redelegation): _117.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _117.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Params;
                fromPartial(object: Partial<_117.Params>): _117.Params;
                fromAmino(object: _117.ParamsAmino): _117.Params;
                toAmino(message: _117.Params): _117.ParamsAmino;
                fromAminoMsg(object: _117.ParamsAminoMsg): _117.Params;
                toAminoMsg(message: _117.Params): _117.ParamsAminoMsg;
                fromProtoMsg(message: _117.ParamsProtoMsg): _117.Params;
                toProto(message: _117.Params): Uint8Array;
                toProtoMsg(message: _117.Params): _117.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _117.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.DelegationResponse;
                fromPartial(object: Partial<_117.DelegationResponse>): _117.DelegationResponse;
                fromAmino(object: _117.DelegationResponseAmino): _117.DelegationResponse;
                toAmino(message: _117.DelegationResponse): _117.DelegationResponseAmino;
                fromAminoMsg(object: _117.DelegationResponseAminoMsg): _117.DelegationResponse;
                toAminoMsg(message: _117.DelegationResponse): _117.DelegationResponseAminoMsg;
                fromProtoMsg(message: _117.DelegationResponseProtoMsg): _117.DelegationResponse;
                toProto(message: _117.DelegationResponse): Uint8Array;
                toProtoMsg(message: _117.DelegationResponse): _117.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _117.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.RedelegationEntryResponse;
                fromPartial(object: Partial<_117.RedelegationEntryResponse>): _117.RedelegationEntryResponse;
                fromAmino(object: _117.RedelegationEntryResponseAmino): _117.RedelegationEntryResponse;
                toAmino(message: _117.RedelegationEntryResponse): _117.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _117.RedelegationEntryResponseAminoMsg): _117.RedelegationEntryResponse;
                toAminoMsg(message: _117.RedelegationEntryResponse): _117.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _117.RedelegationEntryResponseProtoMsg): _117.RedelegationEntryResponse;
                toProto(message: _117.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _117.RedelegationEntryResponse): _117.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _117.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.RedelegationResponse;
                fromPartial(object: Partial<_117.RedelegationResponse>): _117.RedelegationResponse;
                fromAmino(object: _117.RedelegationResponseAmino): _117.RedelegationResponse;
                toAmino(message: _117.RedelegationResponse): _117.RedelegationResponseAmino;
                fromAminoMsg(object: _117.RedelegationResponseAminoMsg): _117.RedelegationResponse;
                toAminoMsg(message: _117.RedelegationResponse): _117.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _117.RedelegationResponseProtoMsg): _117.RedelegationResponse;
                toProto(message: _117.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _117.RedelegationResponse): _117.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _117.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.Pool;
                fromPartial(object: Partial<_117.Pool>): _117.Pool;
                fromAmino(object: _117.PoolAmino): _117.Pool;
                toAmino(message: _117.Pool): _117.PoolAmino;
                fromAminoMsg(object: _117.PoolAminoMsg): _117.Pool;
                toAminoMsg(message: _117.Pool): _117.PoolAminoMsg;
                fromProtoMsg(message: _117.PoolProtoMsg): _117.Pool;
                toProto(message: _117.Pool): Uint8Array;
                toProtoMsg(message: _117.Pool): _117.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _117.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.ValidatorUpdates;
                fromPartial(object: Partial<_117.ValidatorUpdates>): _117.ValidatorUpdates;
                fromAmino(object: _117.ValidatorUpdatesAmino): _117.ValidatorUpdates;
                toAmino(message: _117.ValidatorUpdates): _117.ValidatorUpdatesAmino;
                fromAminoMsg(object: _117.ValidatorUpdatesAminoMsg): _117.ValidatorUpdates;
                toAminoMsg(message: _117.ValidatorUpdates): _117.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _117.ValidatorUpdatesProtoMsg): _117.ValidatorUpdates;
                toProto(message: _117.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _117.ValidatorUpdates): _117.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _116.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorsRequest;
                fromPartial(object: Partial<_116.QueryValidatorsRequest>): _116.QueryValidatorsRequest;
                fromAmino(object: _116.QueryValidatorsRequestAmino): _116.QueryValidatorsRequest;
                toAmino(message: _116.QueryValidatorsRequest): _116.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _116.QueryValidatorsRequestAminoMsg): _116.QueryValidatorsRequest;
                toAminoMsg(message: _116.QueryValidatorsRequest): _116.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorsRequestProtoMsg): _116.QueryValidatorsRequest;
                toProto(message: _116.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorsRequest): _116.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _116.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorsResponse;
                fromPartial(object: Partial<_116.QueryValidatorsResponse>): _116.QueryValidatorsResponse;
                fromAmino(object: _116.QueryValidatorsResponseAmino): _116.QueryValidatorsResponse;
                toAmino(message: _116.QueryValidatorsResponse): _116.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _116.QueryValidatorsResponseAminoMsg): _116.QueryValidatorsResponse;
                toAminoMsg(message: _116.QueryValidatorsResponse): _116.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorsResponseProtoMsg): _116.QueryValidatorsResponse;
                toProto(message: _116.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorsResponse): _116.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _116.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorRequest;
                fromPartial(object: Partial<_116.QueryValidatorRequest>): _116.QueryValidatorRequest;
                fromAmino(object: _116.QueryValidatorRequestAmino): _116.QueryValidatorRequest;
                toAmino(message: _116.QueryValidatorRequest): _116.QueryValidatorRequestAmino;
                fromAminoMsg(object: _116.QueryValidatorRequestAminoMsg): _116.QueryValidatorRequest;
                toAminoMsg(message: _116.QueryValidatorRequest): _116.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorRequestProtoMsg): _116.QueryValidatorRequest;
                toProto(message: _116.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorRequest): _116.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _116.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorResponse;
                fromPartial(object: Partial<_116.QueryValidatorResponse>): _116.QueryValidatorResponse;
                fromAmino(object: _116.QueryValidatorResponseAmino): _116.QueryValidatorResponse;
                toAmino(message: _116.QueryValidatorResponse): _116.QueryValidatorResponseAmino;
                fromAminoMsg(object: _116.QueryValidatorResponseAminoMsg): _116.QueryValidatorResponse;
                toAminoMsg(message: _116.QueryValidatorResponse): _116.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorResponseProtoMsg): _116.QueryValidatorResponse;
                toProto(message: _116.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorResponse): _116.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _116.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_116.QueryValidatorDelegationsRequest>): _116.QueryValidatorDelegationsRequest;
                fromAmino(object: _116.QueryValidatorDelegationsRequestAmino): _116.QueryValidatorDelegationsRequest;
                toAmino(message: _116.QueryValidatorDelegationsRequest): _116.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _116.QueryValidatorDelegationsRequestAminoMsg): _116.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _116.QueryValidatorDelegationsRequest): _116.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorDelegationsRequestProtoMsg): _116.QueryValidatorDelegationsRequest;
                toProto(message: _116.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorDelegationsRequest): _116.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _116.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_116.QueryValidatorDelegationsResponse>): _116.QueryValidatorDelegationsResponse;
                fromAmino(object: _116.QueryValidatorDelegationsResponseAmino): _116.QueryValidatorDelegationsResponse;
                toAmino(message: _116.QueryValidatorDelegationsResponse): _116.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _116.QueryValidatorDelegationsResponseAminoMsg): _116.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _116.QueryValidatorDelegationsResponse): _116.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorDelegationsResponseProtoMsg): _116.QueryValidatorDelegationsResponse;
                toProto(message: _116.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorDelegationsResponse): _116.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _116.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_116.QueryValidatorUnbondingDelegationsRequest>): _116.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _116.QueryValidatorUnbondingDelegationsRequestAmino): _116.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _116.QueryValidatorUnbondingDelegationsRequest): _116.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _116.QueryValidatorUnbondingDelegationsRequestAminoMsg): _116.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _116.QueryValidatorUnbondingDelegationsRequest): _116.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorUnbondingDelegationsRequestProtoMsg): _116.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _116.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorUnbondingDelegationsRequest): _116.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _116.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_116.QueryValidatorUnbondingDelegationsResponse>): _116.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _116.QueryValidatorUnbondingDelegationsResponseAmino): _116.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _116.QueryValidatorUnbondingDelegationsResponse): _116.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _116.QueryValidatorUnbondingDelegationsResponseAminoMsg): _116.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _116.QueryValidatorUnbondingDelegationsResponse): _116.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryValidatorUnbondingDelegationsResponseProtoMsg): _116.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _116.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryValidatorUnbondingDelegationsResponse): _116.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _116.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegationRequest;
                fromPartial(object: Partial<_116.QueryDelegationRequest>): _116.QueryDelegationRequest;
                fromAmino(object: _116.QueryDelegationRequestAmino): _116.QueryDelegationRequest;
                toAmino(message: _116.QueryDelegationRequest): _116.QueryDelegationRequestAmino;
                fromAminoMsg(object: _116.QueryDelegationRequestAminoMsg): _116.QueryDelegationRequest;
                toAminoMsg(message: _116.QueryDelegationRequest): _116.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _116.QueryDelegationRequestProtoMsg): _116.QueryDelegationRequest;
                toProto(message: _116.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _116.QueryDelegationRequest): _116.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _116.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegationResponse;
                fromPartial(object: Partial<_116.QueryDelegationResponse>): _116.QueryDelegationResponse;
                fromAmino(object: _116.QueryDelegationResponseAmino): _116.QueryDelegationResponse;
                toAmino(message: _116.QueryDelegationResponse): _116.QueryDelegationResponseAmino;
                fromAminoMsg(object: _116.QueryDelegationResponseAminoMsg): _116.QueryDelegationResponse;
                toAminoMsg(message: _116.QueryDelegationResponse): _116.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _116.QueryDelegationResponseProtoMsg): _116.QueryDelegationResponse;
                toProto(message: _116.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _116.QueryDelegationResponse): _116.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _116.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_116.QueryUnbondingDelegationRequest>): _116.QueryUnbondingDelegationRequest;
                fromAmino(object: _116.QueryUnbondingDelegationRequestAmino): _116.QueryUnbondingDelegationRequest;
                toAmino(message: _116.QueryUnbondingDelegationRequest): _116.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _116.QueryUnbondingDelegationRequestAminoMsg): _116.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _116.QueryUnbondingDelegationRequest): _116.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _116.QueryUnbondingDelegationRequestProtoMsg): _116.QueryUnbondingDelegationRequest;
                toProto(message: _116.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _116.QueryUnbondingDelegationRequest): _116.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _116.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_116.QueryUnbondingDelegationResponse>): _116.QueryUnbondingDelegationResponse;
                fromAmino(object: _116.QueryUnbondingDelegationResponseAmino): _116.QueryUnbondingDelegationResponse;
                toAmino(message: _116.QueryUnbondingDelegationResponse): _116.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _116.QueryUnbondingDelegationResponseAminoMsg): _116.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _116.QueryUnbondingDelegationResponse): _116.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _116.QueryUnbondingDelegationResponseProtoMsg): _116.QueryUnbondingDelegationResponse;
                toProto(message: _116.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _116.QueryUnbondingDelegationResponse): _116.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_116.QueryDelegatorDelegationsRequest>): _116.QueryDelegatorDelegationsRequest;
                fromAmino(object: _116.QueryDelegatorDelegationsRequestAmino): _116.QueryDelegatorDelegationsRequest;
                toAmino(message: _116.QueryDelegatorDelegationsRequest): _116.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _116.QueryDelegatorDelegationsRequestAminoMsg): _116.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _116.QueryDelegatorDelegationsRequest): _116.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorDelegationsRequestProtoMsg): _116.QueryDelegatorDelegationsRequest;
                toProto(message: _116.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorDelegationsRequest): _116.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_116.QueryDelegatorDelegationsResponse>): _116.QueryDelegatorDelegationsResponse;
                fromAmino(object: _116.QueryDelegatorDelegationsResponseAmino): _116.QueryDelegatorDelegationsResponse;
                toAmino(message: _116.QueryDelegatorDelegationsResponse): _116.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _116.QueryDelegatorDelegationsResponseAminoMsg): _116.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _116.QueryDelegatorDelegationsResponse): _116.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorDelegationsResponseProtoMsg): _116.QueryDelegatorDelegationsResponse;
                toProto(message: _116.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorDelegationsResponse): _116.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_116.QueryDelegatorUnbondingDelegationsRequest>): _116.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _116.QueryDelegatorUnbondingDelegationsRequestAmino): _116.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _116.QueryDelegatorUnbondingDelegationsRequest): _116.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _116.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _116.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _116.QueryDelegatorUnbondingDelegationsRequest): _116.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _116.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _116.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorUnbondingDelegationsRequest): _116.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_116.QueryDelegatorUnbondingDelegationsResponse>): _116.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _116.QueryDelegatorUnbondingDelegationsResponseAmino): _116.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _116.QueryDelegatorUnbondingDelegationsResponse): _116.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _116.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _116.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _116.QueryDelegatorUnbondingDelegationsResponse): _116.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _116.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _116.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorUnbondingDelegationsResponse): _116.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _116.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryRedelegationsRequest;
                fromPartial(object: Partial<_116.QueryRedelegationsRequest>): _116.QueryRedelegationsRequest;
                fromAmino(object: _116.QueryRedelegationsRequestAmino): _116.QueryRedelegationsRequest;
                toAmino(message: _116.QueryRedelegationsRequest): _116.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _116.QueryRedelegationsRequestAminoMsg): _116.QueryRedelegationsRequest;
                toAminoMsg(message: _116.QueryRedelegationsRequest): _116.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryRedelegationsRequestProtoMsg): _116.QueryRedelegationsRequest;
                toProto(message: _116.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryRedelegationsRequest): _116.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _116.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryRedelegationsResponse;
                fromPartial(object: Partial<_116.QueryRedelegationsResponse>): _116.QueryRedelegationsResponse;
                fromAmino(object: _116.QueryRedelegationsResponseAmino): _116.QueryRedelegationsResponse;
                toAmino(message: _116.QueryRedelegationsResponse): _116.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _116.QueryRedelegationsResponseAminoMsg): _116.QueryRedelegationsResponse;
                toAminoMsg(message: _116.QueryRedelegationsResponse): _116.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryRedelegationsResponseProtoMsg): _116.QueryRedelegationsResponse;
                toProto(message: _116.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryRedelegationsResponse): _116.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_116.QueryDelegatorValidatorsRequest>): _116.QueryDelegatorValidatorsRequest;
                fromAmino(object: _116.QueryDelegatorValidatorsRequestAmino): _116.QueryDelegatorValidatorsRequest;
                toAmino(message: _116.QueryDelegatorValidatorsRequest): _116.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _116.QueryDelegatorValidatorsRequestAminoMsg): _116.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _116.QueryDelegatorValidatorsRequest): _116.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorValidatorsRequestProtoMsg): _116.QueryDelegatorValidatorsRequest;
                toProto(message: _116.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorValidatorsRequest): _116.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_116.QueryDelegatorValidatorsResponse>): _116.QueryDelegatorValidatorsResponse;
                fromAmino(object: _116.QueryDelegatorValidatorsResponseAmino): _116.QueryDelegatorValidatorsResponse;
                toAmino(message: _116.QueryDelegatorValidatorsResponse): _116.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _116.QueryDelegatorValidatorsResponseAminoMsg): _116.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _116.QueryDelegatorValidatorsResponse): _116.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorValidatorsResponseProtoMsg): _116.QueryDelegatorValidatorsResponse;
                toProto(message: _116.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorValidatorsResponse): _116.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_116.QueryDelegatorValidatorRequest>): _116.QueryDelegatorValidatorRequest;
                fromAmino(object: _116.QueryDelegatorValidatorRequestAmino): _116.QueryDelegatorValidatorRequest;
                toAmino(message: _116.QueryDelegatorValidatorRequest): _116.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _116.QueryDelegatorValidatorRequestAminoMsg): _116.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _116.QueryDelegatorValidatorRequest): _116.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorValidatorRequestProtoMsg): _116.QueryDelegatorValidatorRequest;
                toProto(message: _116.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorValidatorRequest): _116.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _116.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_116.QueryDelegatorValidatorResponse>): _116.QueryDelegatorValidatorResponse;
                fromAmino(object: _116.QueryDelegatorValidatorResponseAmino): _116.QueryDelegatorValidatorResponse;
                toAmino(message: _116.QueryDelegatorValidatorResponse): _116.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _116.QueryDelegatorValidatorResponseAminoMsg): _116.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _116.QueryDelegatorValidatorResponse): _116.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _116.QueryDelegatorValidatorResponseProtoMsg): _116.QueryDelegatorValidatorResponse;
                toProto(message: _116.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _116.QueryDelegatorValidatorResponse): _116.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _116.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_116.QueryHistoricalInfoRequest>): _116.QueryHistoricalInfoRequest;
                fromAmino(object: _116.QueryHistoricalInfoRequestAmino): _116.QueryHistoricalInfoRequest;
                toAmino(message: _116.QueryHistoricalInfoRequest): _116.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _116.QueryHistoricalInfoRequestAminoMsg): _116.QueryHistoricalInfoRequest;
                toAminoMsg(message: _116.QueryHistoricalInfoRequest): _116.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _116.QueryHistoricalInfoRequestProtoMsg): _116.QueryHistoricalInfoRequest;
                toProto(message: _116.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _116.QueryHistoricalInfoRequest): _116.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _116.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_116.QueryHistoricalInfoResponse>): _116.QueryHistoricalInfoResponse;
                fromAmino(object: _116.QueryHistoricalInfoResponseAmino): _116.QueryHistoricalInfoResponse;
                toAmino(message: _116.QueryHistoricalInfoResponse): _116.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _116.QueryHistoricalInfoResponseAminoMsg): _116.QueryHistoricalInfoResponse;
                toAminoMsg(message: _116.QueryHistoricalInfoResponse): _116.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _116.QueryHistoricalInfoResponseProtoMsg): _116.QueryHistoricalInfoResponse;
                toProto(message: _116.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _116.QueryHistoricalInfoResponse): _116.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _116.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.QueryPoolRequest;
                fromPartial(_: Partial<_116.QueryPoolRequest>): _116.QueryPoolRequest;
                fromAmino(_: _116.QueryPoolRequestAmino): _116.QueryPoolRequest;
                toAmino(_: _116.QueryPoolRequest): _116.QueryPoolRequestAmino;
                fromAminoMsg(object: _116.QueryPoolRequestAminoMsg): _116.QueryPoolRequest;
                toAminoMsg(message: _116.QueryPoolRequest): _116.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _116.QueryPoolRequestProtoMsg): _116.QueryPoolRequest;
                toProto(message: _116.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _116.QueryPoolRequest): _116.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _116.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryPoolResponse;
                fromPartial(object: Partial<_116.QueryPoolResponse>): _116.QueryPoolResponse;
                fromAmino(object: _116.QueryPoolResponseAmino): _116.QueryPoolResponse;
                toAmino(message: _116.QueryPoolResponse): _116.QueryPoolResponseAmino;
                fromAminoMsg(object: _116.QueryPoolResponseAminoMsg): _116.QueryPoolResponse;
                toAminoMsg(message: _116.QueryPoolResponse): _116.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _116.QueryPoolResponseProtoMsg): _116.QueryPoolResponse;
                toProto(message: _116.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _116.QueryPoolResponse): _116.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _116.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.QueryParamsRequest;
                fromPartial(_: Partial<_116.QueryParamsRequest>): _116.QueryParamsRequest;
                fromAmino(_: _116.QueryParamsRequestAmino): _116.QueryParamsRequest;
                toAmino(_: _116.QueryParamsRequest): _116.QueryParamsRequestAmino;
                fromAminoMsg(object: _116.QueryParamsRequestAminoMsg): _116.QueryParamsRequest;
                toAminoMsg(message: _116.QueryParamsRequest): _116.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryParamsRequestProtoMsg): _116.QueryParamsRequest;
                toProto(message: _116.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryParamsRequest): _116.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _116.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryParamsResponse;
                fromPartial(object: Partial<_116.QueryParamsResponse>): _116.QueryParamsResponse;
                fromAmino(object: _116.QueryParamsResponseAmino): _116.QueryParamsResponse;
                toAmino(message: _116.QueryParamsResponse): _116.QueryParamsResponseAmino;
                fromAminoMsg(object: _116.QueryParamsResponseAminoMsg): _116.QueryParamsResponse;
                toAminoMsg(message: _116.QueryParamsResponse): _116.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryParamsResponseProtoMsg): _116.QueryParamsResponse;
                toProto(message: _116.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryParamsResponse): _116.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _115.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.LastValidatorPower;
                fromPartial(object: Partial<_115.LastValidatorPower>): _115.LastValidatorPower;
                fromAmino(object: _115.LastValidatorPowerAmino): _115.LastValidatorPower;
                toAmino(message: _115.LastValidatorPower): _115.LastValidatorPowerAmino;
                fromAminoMsg(object: _115.LastValidatorPowerAminoMsg): _115.LastValidatorPower;
                toAminoMsg(message: _115.LastValidatorPower): _115.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _115.LastValidatorPowerProtoMsg): _115.LastValidatorPower;
                toProto(message: _115.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _115.LastValidatorPower): _115.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _114.AuthorizationType;
            authorizationTypeToJSON(object: _114.AuthorizationType): string;
            AuthorizationType: typeof _114.AuthorizationType;
            AuthorizationTypeSDKType: typeof _114.AuthorizationType;
            AuthorizationTypeAmino: typeof _114.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _114.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.StakeAuthorization;
                fromPartial(object: Partial<_114.StakeAuthorization>): _114.StakeAuthorization;
                fromAmino(object: _114.StakeAuthorizationAmino): _114.StakeAuthorization;
                toAmino(message: _114.StakeAuthorization): _114.StakeAuthorizationAmino;
                fromAminoMsg(object: _114.StakeAuthorizationAminoMsg): _114.StakeAuthorization;
                toAminoMsg(message: _114.StakeAuthorization): _114.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _114.StakeAuthorizationProtoMsg): _114.StakeAuthorization;
                toProto(message: _114.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _114.StakeAuthorization): _114.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _114.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.StakeAuthorization_Validators;
                fromPartial(object: Partial<_114.StakeAuthorization_Validators>): _114.StakeAuthorization_Validators;
                fromAmino(object: _114.StakeAuthorization_ValidatorsAmino): _114.StakeAuthorization_Validators;
                toAmino(message: _114.StakeAuthorization_Validators): _114.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _114.StakeAuthorization_ValidatorsAminoMsg): _114.StakeAuthorization_Validators;
                toAminoMsg(message: _114.StakeAuthorization_Validators): _114.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _114.StakeAuthorization_ValidatorsProtoMsg): _114.StakeAuthorization_Validators;
                toProto(message: _114.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _114.StakeAuthorization_Validators): _114.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _119.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Config;
                    fromPartial(object: Partial<_119.Config>): _119.Config;
                    fromAmino(object: _119.ConfigAmino): _119.Config;
                    toAmino(message: _119.Config): _119.ConfigAmino;
                    fromAminoMsg(object: _119.ConfigAminoMsg): _119.Config;
                    toAminoMsg(message: _119.Config): _119.ConfigAminoMsg;
                    fromProtoMsg(message: _119.ConfigProtoMsg): _119.Config;
                    toProto(message: _119.Config): Uint8Array;
                    toProtoMsg(message: _119.Config): _119.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _120.SignMode;
                signModeToJSON(object: _120.SignMode): string;
                SignMode: typeof _120.SignMode;
                SignModeSDKType: typeof _120.SignMode;
                SignModeAmino: typeof _120.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _120.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SignatureDescriptors;
                    fromPartial(object: Partial<_120.SignatureDescriptors>): _120.SignatureDescriptors;
                    fromAmino(object: _120.SignatureDescriptorsAmino): _120.SignatureDescriptors;
                    toAmino(message: _120.SignatureDescriptors): _120.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _120.SignatureDescriptorsAminoMsg): _120.SignatureDescriptors;
                    toAminoMsg(message: _120.SignatureDescriptors): _120.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _120.SignatureDescriptorsProtoMsg): _120.SignatureDescriptors;
                    toProto(message: _120.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _120.SignatureDescriptors): _120.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _120.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SignatureDescriptor;
                    fromPartial(object: Partial<_120.SignatureDescriptor>): _120.SignatureDescriptor;
                    fromAmino(object: _120.SignatureDescriptorAmino): _120.SignatureDescriptor;
                    toAmino(message: _120.SignatureDescriptor): _120.SignatureDescriptorAmino;
                    fromAminoMsg(object: _120.SignatureDescriptorAminoMsg): _120.SignatureDescriptor;
                    toAminoMsg(message: _120.SignatureDescriptor): _120.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _120.SignatureDescriptorProtoMsg): _120.SignatureDescriptor;
                    toProto(message: _120.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _120.SignatureDescriptor): _120.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _120.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_120.SignatureDescriptor_Data>): _120.SignatureDescriptor_Data;
                    fromAmino(object: _120.SignatureDescriptor_DataAmino): _120.SignatureDescriptor_Data;
                    toAmino(message: _120.SignatureDescriptor_Data): _120.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _120.SignatureDescriptor_DataAminoMsg): _120.SignatureDescriptor_Data;
                    toAminoMsg(message: _120.SignatureDescriptor_Data): _120.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _120.SignatureDescriptor_DataProtoMsg): _120.SignatureDescriptor_Data;
                    toProto(message: _120.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _120.SignatureDescriptor_Data): _120.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _120.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_120.SignatureDescriptor_Data_Single>): _120.SignatureDescriptor_Data_Single;
                    fromAmino(object: _120.SignatureDescriptor_Data_SingleAmino): _120.SignatureDescriptor_Data_Single;
                    toAmino(message: _120.SignatureDescriptor_Data_Single): _120.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _120.SignatureDescriptor_Data_SingleAminoMsg): _120.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _120.SignatureDescriptor_Data_Single): _120.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _120.SignatureDescriptor_Data_SingleProtoMsg): _120.SignatureDescriptor_Data_Single;
                    toProto(message: _120.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _120.SignatureDescriptor_Data_Single): _120.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _120.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_120.SignatureDescriptor_Data_Multi>): _120.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _120.SignatureDescriptor_Data_MultiAmino): _120.SignatureDescriptor_Data_Multi;
                    toAmino(message: _120.SignatureDescriptor_Data_Multi): _120.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _120.SignatureDescriptor_Data_MultiAminoMsg): _120.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _120.SignatureDescriptor_Data_Multi): _120.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _120.SignatureDescriptor_Data_MultiProtoMsg): _120.SignatureDescriptor_Data_Multi;
                    toProto(message: _120.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _120.SignatureDescriptor_Data_Multi): _120.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _225.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _121.SimulateRequest): Promise<_121.SimulateResponse>;
                getTx(request: _121.GetTxRequest): Promise<_121.GetTxResponse>;
                broadcastTx(request: _121.BroadcastTxRequest): Promise<_121.BroadcastTxResponse>;
                getTxsEvent(request: _121.GetTxsEventRequest): Promise<_121.GetTxsEventResponse>;
                getBlockWithTxs(request: _121.GetBlockWithTxsRequest): Promise<_121.GetBlockWithTxsResponse>;
                txDecode(request: _121.TxDecodeRequest): Promise<_121.TxDecodeResponse>;
                txEncode(request: _121.TxEncodeRequest): Promise<_121.TxEncodeResponse>;
                txEncodeAmino(request: _121.TxEncodeAminoRequest): Promise<_121.TxEncodeAminoResponse>;
                txDecodeAmino(request: _121.TxDecodeAminoRequest): Promise<_121.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _122.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Tx;
                fromPartial(object: Partial<_122.Tx>): _122.Tx;
                fromAmino(object: _122.TxAmino): _122.Tx;
                toAmino(message: _122.Tx): _122.TxAmino;
                fromAminoMsg(object: _122.TxAminoMsg): _122.Tx;
                toAminoMsg(message: _122.Tx): _122.TxAminoMsg;
                fromProtoMsg(message: _122.TxProtoMsg): _122.Tx;
                toProto(message: _122.Tx): Uint8Array;
                toProtoMsg(message: _122.Tx): _122.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _122.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TxRaw;
                fromPartial(object: Partial<_122.TxRaw>): _122.TxRaw;
                fromAmino(object: _122.TxRawAmino): _122.TxRaw;
                toAmino(message: _122.TxRaw): _122.TxRawAmino;
                fromAminoMsg(object: _122.TxRawAminoMsg): _122.TxRaw;
                toAminoMsg(message: _122.TxRaw): _122.TxRawAminoMsg;
                fromProtoMsg(message: _122.TxRawProtoMsg): _122.TxRaw;
                toProto(message: _122.TxRaw): Uint8Array;
                toProtoMsg(message: _122.TxRaw): _122.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _122.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SignDoc;
                fromPartial(object: Partial<_122.SignDoc>): _122.SignDoc;
                fromAmino(object: _122.SignDocAmino): _122.SignDoc;
                toAmino(message: _122.SignDoc): _122.SignDocAmino;
                fromAminoMsg(object: _122.SignDocAminoMsg): _122.SignDoc;
                toAminoMsg(message: _122.SignDoc): _122.SignDocAminoMsg;
                fromProtoMsg(message: _122.SignDocProtoMsg): _122.SignDoc;
                toProto(message: _122.SignDoc): Uint8Array;
                toProtoMsg(message: _122.SignDoc): _122.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _122.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SignDocDirectAux;
                fromPartial(object: Partial<_122.SignDocDirectAux>): _122.SignDocDirectAux;
                fromAmino(object: _122.SignDocDirectAuxAmino): _122.SignDocDirectAux;
                toAmino(message: _122.SignDocDirectAux): _122.SignDocDirectAuxAmino;
                fromAminoMsg(object: _122.SignDocDirectAuxAminoMsg): _122.SignDocDirectAux;
                toAminoMsg(message: _122.SignDocDirectAux): _122.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _122.SignDocDirectAuxProtoMsg): _122.SignDocDirectAux;
                toProto(message: _122.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _122.SignDocDirectAux): _122.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _122.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.TxBody;
                fromPartial(object: Partial<_122.TxBody>): _122.TxBody;
                fromAmino(object: _122.TxBodyAmino): _122.TxBody;
                toAmino(message: _122.TxBody): _122.TxBodyAmino;
                fromAminoMsg(object: _122.TxBodyAminoMsg): _122.TxBody;
                toAminoMsg(message: _122.TxBody): _122.TxBodyAminoMsg;
                fromProtoMsg(message: _122.TxBodyProtoMsg): _122.TxBody;
                toProto(message: _122.TxBody): Uint8Array;
                toProtoMsg(message: _122.TxBody): _122.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _122.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.AuthInfo;
                fromPartial(object: Partial<_122.AuthInfo>): _122.AuthInfo;
                fromAmino(object: _122.AuthInfoAmino): _122.AuthInfo;
                toAmino(message: _122.AuthInfo): _122.AuthInfoAmino;
                fromAminoMsg(object: _122.AuthInfoAminoMsg): _122.AuthInfo;
                toAminoMsg(message: _122.AuthInfo): _122.AuthInfoAminoMsg;
                fromProtoMsg(message: _122.AuthInfoProtoMsg): _122.AuthInfo;
                toProto(message: _122.AuthInfo): Uint8Array;
                toProtoMsg(message: _122.AuthInfo): _122.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _122.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SignerInfo;
                fromPartial(object: Partial<_122.SignerInfo>): _122.SignerInfo;
                fromAmino(object: _122.SignerInfoAmino): _122.SignerInfo;
                toAmino(message: _122.SignerInfo): _122.SignerInfoAmino;
                fromAminoMsg(object: _122.SignerInfoAminoMsg): _122.SignerInfo;
                toAminoMsg(message: _122.SignerInfo): _122.SignerInfoAminoMsg;
                fromProtoMsg(message: _122.SignerInfoProtoMsg): _122.SignerInfo;
                toProto(message: _122.SignerInfo): Uint8Array;
                toProtoMsg(message: _122.SignerInfo): _122.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _122.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ModeInfo;
                fromPartial(object: Partial<_122.ModeInfo>): _122.ModeInfo;
                fromAmino(object: _122.ModeInfoAmino): _122.ModeInfo;
                toAmino(message: _122.ModeInfo): _122.ModeInfoAmino;
                fromAminoMsg(object: _122.ModeInfoAminoMsg): _122.ModeInfo;
                toAminoMsg(message: _122.ModeInfo): _122.ModeInfoAminoMsg;
                fromProtoMsg(message: _122.ModeInfoProtoMsg): _122.ModeInfo;
                toProto(message: _122.ModeInfo): Uint8Array;
                toProtoMsg(message: _122.ModeInfo): _122.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _122.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ModeInfo_Single;
                fromPartial(object: Partial<_122.ModeInfo_Single>): _122.ModeInfo_Single;
                fromAmino(object: _122.ModeInfo_SingleAmino): _122.ModeInfo_Single;
                toAmino(message: _122.ModeInfo_Single): _122.ModeInfo_SingleAmino;
                fromAminoMsg(object: _122.ModeInfo_SingleAminoMsg): _122.ModeInfo_Single;
                toAminoMsg(message: _122.ModeInfo_Single): _122.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _122.ModeInfo_SingleProtoMsg): _122.ModeInfo_Single;
                toProto(message: _122.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _122.ModeInfo_Single): _122.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _122.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ModeInfo_Multi;
                fromPartial(object: Partial<_122.ModeInfo_Multi>): _122.ModeInfo_Multi;
                fromAmino(object: _122.ModeInfo_MultiAmino): _122.ModeInfo_Multi;
                toAmino(message: _122.ModeInfo_Multi): _122.ModeInfo_MultiAmino;
                fromAminoMsg(object: _122.ModeInfo_MultiAminoMsg): _122.ModeInfo_Multi;
                toAminoMsg(message: _122.ModeInfo_Multi): _122.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _122.ModeInfo_MultiProtoMsg): _122.ModeInfo_Multi;
                toProto(message: _122.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _122.ModeInfo_Multi): _122.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _122.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Fee;
                fromPartial(object: Partial<_122.Fee>): _122.Fee;
                fromAmino(object: _122.FeeAmino): _122.Fee;
                toAmino(message: _122.Fee): _122.FeeAmino;
                fromAminoMsg(object: _122.FeeAminoMsg): _122.Fee;
                toAminoMsg(message: _122.Fee): _122.FeeAminoMsg;
                fromProtoMsg(message: _122.FeeProtoMsg): _122.Fee;
                toProto(message: _122.Fee): Uint8Array;
                toProtoMsg(message: _122.Fee): _122.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _122.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Tip;
                fromPartial(object: Partial<_122.Tip>): _122.Tip;
                fromAmino(object: _122.TipAmino): _122.Tip;
                toAmino(message: _122.Tip): _122.TipAmino;
                fromAminoMsg(object: _122.TipAminoMsg): _122.Tip;
                toAminoMsg(message: _122.Tip): _122.TipAminoMsg;
                fromProtoMsg(message: _122.TipProtoMsg): _122.Tip;
                toProto(message: _122.Tip): Uint8Array;
                toProtoMsg(message: _122.Tip): _122.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _122.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.AuxSignerData;
                fromPartial(object: Partial<_122.AuxSignerData>): _122.AuxSignerData;
                fromAmino(object: _122.AuxSignerDataAmino): _122.AuxSignerData;
                toAmino(message: _122.AuxSignerData): _122.AuxSignerDataAmino;
                fromAminoMsg(object: _122.AuxSignerDataAminoMsg): _122.AuxSignerData;
                toAminoMsg(message: _122.AuxSignerData): _122.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _122.AuxSignerDataProtoMsg): _122.AuxSignerData;
                toProto(message: _122.AuxSignerData): Uint8Array;
                toProtoMsg(message: _122.AuxSignerData): _122.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _121.OrderBy;
            orderByToJSON(object: _121.OrderBy): string;
            broadcastModeFromJSON(object: any): _121.BroadcastMode;
            broadcastModeToJSON(object: _121.BroadcastMode): string;
            OrderBy: typeof _121.OrderBy;
            OrderBySDKType: typeof _121.OrderBy;
            OrderByAmino: typeof _121.OrderBy;
            BroadcastMode: typeof _121.BroadcastMode;
            BroadcastModeSDKType: typeof _121.BroadcastMode;
            BroadcastModeAmino: typeof _121.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _121.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GetTxsEventRequest;
                fromPartial(object: Partial<_121.GetTxsEventRequest>): _121.GetTxsEventRequest;
                fromAmino(object: _121.GetTxsEventRequestAmino): _121.GetTxsEventRequest;
                toAmino(message: _121.GetTxsEventRequest): _121.GetTxsEventRequestAmino;
                fromAminoMsg(object: _121.GetTxsEventRequestAminoMsg): _121.GetTxsEventRequest;
                toAminoMsg(message: _121.GetTxsEventRequest): _121.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _121.GetTxsEventRequestProtoMsg): _121.GetTxsEventRequest;
                toProto(message: _121.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _121.GetTxsEventRequest): _121.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _121.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GetTxsEventResponse;
                fromPartial(object: Partial<_121.GetTxsEventResponse>): _121.GetTxsEventResponse;
                fromAmino(object: _121.GetTxsEventResponseAmino): _121.GetTxsEventResponse;
                toAmino(message: _121.GetTxsEventResponse): _121.GetTxsEventResponseAmino;
                fromAminoMsg(object: _121.GetTxsEventResponseAminoMsg): _121.GetTxsEventResponse;
                toAminoMsg(message: _121.GetTxsEventResponse): _121.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _121.GetTxsEventResponseProtoMsg): _121.GetTxsEventResponse;
                toProto(message: _121.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _121.GetTxsEventResponse): _121.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _121.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.BroadcastTxRequest;
                fromPartial(object: Partial<_121.BroadcastTxRequest>): _121.BroadcastTxRequest;
                fromAmino(object: _121.BroadcastTxRequestAmino): _121.BroadcastTxRequest;
                toAmino(message: _121.BroadcastTxRequest): _121.BroadcastTxRequestAmino;
                fromAminoMsg(object: _121.BroadcastTxRequestAminoMsg): _121.BroadcastTxRequest;
                toAminoMsg(message: _121.BroadcastTxRequest): _121.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _121.BroadcastTxRequestProtoMsg): _121.BroadcastTxRequest;
                toProto(message: _121.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _121.BroadcastTxRequest): _121.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _121.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.BroadcastTxResponse;
                fromPartial(object: Partial<_121.BroadcastTxResponse>): _121.BroadcastTxResponse;
                fromAmino(object: _121.BroadcastTxResponseAmino): _121.BroadcastTxResponse;
                toAmino(message: _121.BroadcastTxResponse): _121.BroadcastTxResponseAmino;
                fromAminoMsg(object: _121.BroadcastTxResponseAminoMsg): _121.BroadcastTxResponse;
                toAminoMsg(message: _121.BroadcastTxResponse): _121.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _121.BroadcastTxResponseProtoMsg): _121.BroadcastTxResponse;
                toProto(message: _121.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _121.BroadcastTxResponse): _121.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _121.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.SimulateRequest;
                fromPartial(object: Partial<_121.SimulateRequest>): _121.SimulateRequest;
                fromAmino(object: _121.SimulateRequestAmino): _121.SimulateRequest;
                toAmino(message: _121.SimulateRequest): _121.SimulateRequestAmino;
                fromAminoMsg(object: _121.SimulateRequestAminoMsg): _121.SimulateRequest;
                toAminoMsg(message: _121.SimulateRequest): _121.SimulateRequestAminoMsg;
                fromProtoMsg(message: _121.SimulateRequestProtoMsg): _121.SimulateRequest;
                toProto(message: _121.SimulateRequest): Uint8Array;
                toProtoMsg(message: _121.SimulateRequest): _121.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _121.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.SimulateResponse;
                fromPartial(object: Partial<_121.SimulateResponse>): _121.SimulateResponse;
                fromAmino(object: _121.SimulateResponseAmino): _121.SimulateResponse;
                toAmino(message: _121.SimulateResponse): _121.SimulateResponseAmino;
                fromAminoMsg(object: _121.SimulateResponseAminoMsg): _121.SimulateResponse;
                toAminoMsg(message: _121.SimulateResponse): _121.SimulateResponseAminoMsg;
                fromProtoMsg(message: _121.SimulateResponseProtoMsg): _121.SimulateResponse;
                toProto(message: _121.SimulateResponse): Uint8Array;
                toProtoMsg(message: _121.SimulateResponse): _121.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _121.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GetTxRequest;
                fromPartial(object: Partial<_121.GetTxRequest>): _121.GetTxRequest;
                fromAmino(object: _121.GetTxRequestAmino): _121.GetTxRequest;
                toAmino(message: _121.GetTxRequest): _121.GetTxRequestAmino;
                fromAminoMsg(object: _121.GetTxRequestAminoMsg): _121.GetTxRequest;
                toAminoMsg(message: _121.GetTxRequest): _121.GetTxRequestAminoMsg;
                fromProtoMsg(message: _121.GetTxRequestProtoMsg): _121.GetTxRequest;
                toProto(message: _121.GetTxRequest): Uint8Array;
                toProtoMsg(message: _121.GetTxRequest): _121.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _121.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GetTxResponse;
                fromPartial(object: Partial<_121.GetTxResponse>): _121.GetTxResponse;
                fromAmino(object: _121.GetTxResponseAmino): _121.GetTxResponse;
                toAmino(message: _121.GetTxResponse): _121.GetTxResponseAmino;
                fromAminoMsg(object: _121.GetTxResponseAminoMsg): _121.GetTxResponse;
                toAminoMsg(message: _121.GetTxResponse): _121.GetTxResponseAminoMsg;
                fromProtoMsg(message: _121.GetTxResponseProtoMsg): _121.GetTxResponse;
                toProto(message: _121.GetTxResponse): Uint8Array;
                toProtoMsg(message: _121.GetTxResponse): _121.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _121.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_121.GetBlockWithTxsRequest>): _121.GetBlockWithTxsRequest;
                fromAmino(object: _121.GetBlockWithTxsRequestAmino): _121.GetBlockWithTxsRequest;
                toAmino(message: _121.GetBlockWithTxsRequest): _121.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _121.GetBlockWithTxsRequestAminoMsg): _121.GetBlockWithTxsRequest;
                toAminoMsg(message: _121.GetBlockWithTxsRequest): _121.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _121.GetBlockWithTxsRequestProtoMsg): _121.GetBlockWithTxsRequest;
                toProto(message: _121.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _121.GetBlockWithTxsRequest): _121.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _121.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_121.GetBlockWithTxsResponse>): _121.GetBlockWithTxsResponse;
                fromAmino(object: _121.GetBlockWithTxsResponseAmino): _121.GetBlockWithTxsResponse;
                toAmino(message: _121.GetBlockWithTxsResponse): _121.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _121.GetBlockWithTxsResponseAminoMsg): _121.GetBlockWithTxsResponse;
                toAminoMsg(message: _121.GetBlockWithTxsResponse): _121.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _121.GetBlockWithTxsResponseProtoMsg): _121.GetBlockWithTxsResponse;
                toProto(message: _121.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _121.GetBlockWithTxsResponse): _121.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _121.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxDecodeRequest;
                fromPartial(object: Partial<_121.TxDecodeRequest>): _121.TxDecodeRequest;
                fromAmino(object: _121.TxDecodeRequestAmino): _121.TxDecodeRequest;
                toAmino(message: _121.TxDecodeRequest): _121.TxDecodeRequestAmino;
                fromAminoMsg(object: _121.TxDecodeRequestAminoMsg): _121.TxDecodeRequest;
                toAminoMsg(message: _121.TxDecodeRequest): _121.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _121.TxDecodeRequestProtoMsg): _121.TxDecodeRequest;
                toProto(message: _121.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _121.TxDecodeRequest): _121.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _121.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxDecodeResponse;
                fromPartial(object: Partial<_121.TxDecodeResponse>): _121.TxDecodeResponse;
                fromAmino(object: _121.TxDecodeResponseAmino): _121.TxDecodeResponse;
                toAmino(message: _121.TxDecodeResponse): _121.TxDecodeResponseAmino;
                fromAminoMsg(object: _121.TxDecodeResponseAminoMsg): _121.TxDecodeResponse;
                toAminoMsg(message: _121.TxDecodeResponse): _121.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _121.TxDecodeResponseProtoMsg): _121.TxDecodeResponse;
                toProto(message: _121.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _121.TxDecodeResponse): _121.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _121.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxEncodeRequest;
                fromPartial(object: Partial<_121.TxEncodeRequest>): _121.TxEncodeRequest;
                fromAmino(object: _121.TxEncodeRequestAmino): _121.TxEncodeRequest;
                toAmino(message: _121.TxEncodeRequest): _121.TxEncodeRequestAmino;
                fromAminoMsg(object: _121.TxEncodeRequestAminoMsg): _121.TxEncodeRequest;
                toAminoMsg(message: _121.TxEncodeRequest): _121.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _121.TxEncodeRequestProtoMsg): _121.TxEncodeRequest;
                toProto(message: _121.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _121.TxEncodeRequest): _121.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _121.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxEncodeResponse;
                fromPartial(object: Partial<_121.TxEncodeResponse>): _121.TxEncodeResponse;
                fromAmino(object: _121.TxEncodeResponseAmino): _121.TxEncodeResponse;
                toAmino(message: _121.TxEncodeResponse): _121.TxEncodeResponseAmino;
                fromAminoMsg(object: _121.TxEncodeResponseAminoMsg): _121.TxEncodeResponse;
                toAminoMsg(message: _121.TxEncodeResponse): _121.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _121.TxEncodeResponseProtoMsg): _121.TxEncodeResponse;
                toProto(message: _121.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _121.TxEncodeResponse): _121.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _121.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxEncodeAminoRequest;
                fromPartial(object: Partial<_121.TxEncodeAminoRequest>): _121.TxEncodeAminoRequest;
                fromAmino(object: _121.TxEncodeAminoRequestAmino): _121.TxEncodeAminoRequest;
                toAmino(message: _121.TxEncodeAminoRequest): _121.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _121.TxEncodeAminoRequestAminoMsg): _121.TxEncodeAminoRequest;
                toAminoMsg(message: _121.TxEncodeAminoRequest): _121.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _121.TxEncodeAminoRequestProtoMsg): _121.TxEncodeAminoRequest;
                toProto(message: _121.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _121.TxEncodeAminoRequest): _121.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _121.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxEncodeAminoResponse;
                fromPartial(object: Partial<_121.TxEncodeAminoResponse>): _121.TxEncodeAminoResponse;
                fromAmino(object: _121.TxEncodeAminoResponseAmino): _121.TxEncodeAminoResponse;
                toAmino(message: _121.TxEncodeAminoResponse): _121.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _121.TxEncodeAminoResponseAminoMsg): _121.TxEncodeAminoResponse;
                toAminoMsg(message: _121.TxEncodeAminoResponse): _121.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _121.TxEncodeAminoResponseProtoMsg): _121.TxEncodeAminoResponse;
                toProto(message: _121.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _121.TxEncodeAminoResponse): _121.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _121.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxDecodeAminoRequest;
                fromPartial(object: Partial<_121.TxDecodeAminoRequest>): _121.TxDecodeAminoRequest;
                fromAmino(object: _121.TxDecodeAminoRequestAmino): _121.TxDecodeAminoRequest;
                toAmino(message: _121.TxDecodeAminoRequest): _121.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _121.TxDecodeAminoRequestAminoMsg): _121.TxDecodeAminoRequest;
                toAminoMsg(message: _121.TxDecodeAminoRequest): _121.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _121.TxDecodeAminoRequestProtoMsg): _121.TxDecodeAminoRequest;
                toProto(message: _121.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _121.TxDecodeAminoRequest): _121.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _121.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.TxDecodeAminoResponse;
                fromPartial(object: Partial<_121.TxDecodeAminoResponse>): _121.TxDecodeAminoResponse;
                fromAmino(object: _121.TxDecodeAminoResponseAmino): _121.TxDecodeAminoResponse;
                toAmino(message: _121.TxDecodeAminoResponse): _121.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _121.TxDecodeAminoResponseAminoMsg): _121.TxDecodeAminoResponse;
                toAminoMsg(message: _121.TxDecodeAminoResponse): _121.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _121.TxDecodeAminoResponseProtoMsg): _121.TxDecodeAminoResponse;
                toProto(message: _121.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _121.TxDecodeAminoResponse): _121.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _123.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.Module;
                    fromPartial(object: Partial<_123.Module>): _123.Module;
                    fromAmino(object: _123.ModuleAmino): _123.Module;
                    toAmino(message: _123.Module): _123.ModuleAmino;
                    fromAminoMsg(object: _123.ModuleAminoMsg): _123.Module;
                    toAminoMsg(message: _123.Module): _123.ModuleAminoMsg;
                    fromProtoMsg(message: _123.ModuleProtoMsg): _123.Module;
                    toProto(message: _123.Module): Uint8Array;
                    toProtoMsg(message: _123.Module): _123.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _124.QueryCurrentPlanRequest): Promise<_124.QueryCurrentPlanResponse>;
                appliedPlan(request: _124.QueryAppliedPlanRequest): Promise<_124.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _124.QueryUpgradedConsensusStateRequest): Promise<_124.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _124.QueryModuleVersionsRequest): Promise<_124.QueryModuleVersionsResponse>;
                authority(request?: _124.QueryAuthorityRequest): Promise<_124.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _125.MsgSoftwareUpgrade) => _125.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _125.MsgSoftwareUpgradeAmino) => _125.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _125.MsgCancelUpgrade) => _125.MsgCancelUpgradeAmino;
                    fromAmino: (object: _125.MsgCancelUpgradeAmino) => _125.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _126.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Plan;
                fromPartial(object: Partial<_126.Plan>): _126.Plan;
                fromAmino(object: _126.PlanAmino): _126.Plan;
                toAmino(message: _126.Plan): _126.PlanAmino;
                fromAminoMsg(object: _126.PlanAminoMsg): _126.Plan;
                toAminoMsg(message: _126.Plan): _126.PlanAminoMsg;
                fromProtoMsg(message: _126.PlanProtoMsg): _126.Plan;
                toProto(message: _126.Plan): Uint8Array;
                toProtoMsg(message: _126.Plan): _126.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _126.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_126.SoftwareUpgradeProposal>): _126.SoftwareUpgradeProposal;
                fromAmino(object: _126.SoftwareUpgradeProposalAmino): _126.SoftwareUpgradeProposal;
                toAmino(message: _126.SoftwareUpgradeProposal): _126.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _126.SoftwareUpgradeProposalAminoMsg): _126.SoftwareUpgradeProposal;
                toAminoMsg(message: _126.SoftwareUpgradeProposal): _126.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _126.SoftwareUpgradeProposalProtoMsg): _126.SoftwareUpgradeProposal;
                toProto(message: _126.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _126.SoftwareUpgradeProposal): _126.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _126.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_126.CancelSoftwareUpgradeProposal>): _126.CancelSoftwareUpgradeProposal;
                fromAmino(object: _126.CancelSoftwareUpgradeProposalAmino): _126.CancelSoftwareUpgradeProposal;
                toAmino(message: _126.CancelSoftwareUpgradeProposal): _126.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _126.CancelSoftwareUpgradeProposalAminoMsg): _126.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _126.CancelSoftwareUpgradeProposal): _126.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _126.CancelSoftwareUpgradeProposalProtoMsg): _126.CancelSoftwareUpgradeProposal;
                toProto(message: _126.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _126.CancelSoftwareUpgradeProposal): _126.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _126.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.ModuleVersion;
                fromPartial(object: Partial<_126.ModuleVersion>): _126.ModuleVersion;
                fromAmino(object: _126.ModuleVersionAmino): _126.ModuleVersion;
                toAmino(message: _126.ModuleVersion): _126.ModuleVersionAmino;
                fromAminoMsg(object: _126.ModuleVersionAminoMsg): _126.ModuleVersion;
                toAminoMsg(message: _126.ModuleVersion): _126.ModuleVersionAminoMsg;
                fromProtoMsg(message: _126.ModuleVersionProtoMsg): _126.ModuleVersion;
                toProto(message: _126.ModuleVersion): Uint8Array;
                toProtoMsg(message: _126.ModuleVersion): _126.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _125.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_125.MsgSoftwareUpgrade>): _125.MsgSoftwareUpgrade;
                fromAmino(object: _125.MsgSoftwareUpgradeAmino): _125.MsgSoftwareUpgrade;
                toAmino(message: _125.MsgSoftwareUpgrade): _125.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _125.MsgSoftwareUpgradeAminoMsg): _125.MsgSoftwareUpgrade;
                toAminoMsg(message: _125.MsgSoftwareUpgrade): _125.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _125.MsgSoftwareUpgradeProtoMsg): _125.MsgSoftwareUpgrade;
                toProto(message: _125.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _125.MsgSoftwareUpgrade): _125.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _125.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_125.MsgSoftwareUpgradeResponse>): _125.MsgSoftwareUpgradeResponse;
                fromAmino(_: _125.MsgSoftwareUpgradeResponseAmino): _125.MsgSoftwareUpgradeResponse;
                toAmino(_: _125.MsgSoftwareUpgradeResponse): _125.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _125.MsgSoftwareUpgradeResponseAminoMsg): _125.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _125.MsgSoftwareUpgradeResponse): _125.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _125.MsgSoftwareUpgradeResponseProtoMsg): _125.MsgSoftwareUpgradeResponse;
                toProto(message: _125.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _125.MsgSoftwareUpgradeResponse): _125.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _125.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MsgCancelUpgrade;
                fromPartial(object: Partial<_125.MsgCancelUpgrade>): _125.MsgCancelUpgrade;
                fromAmino(object: _125.MsgCancelUpgradeAmino): _125.MsgCancelUpgrade;
                toAmino(message: _125.MsgCancelUpgrade): _125.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _125.MsgCancelUpgradeAminoMsg): _125.MsgCancelUpgrade;
                toAminoMsg(message: _125.MsgCancelUpgrade): _125.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _125.MsgCancelUpgradeProtoMsg): _125.MsgCancelUpgrade;
                toProto(message: _125.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _125.MsgCancelUpgrade): _125.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _125.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_125.MsgCancelUpgradeResponse>): _125.MsgCancelUpgradeResponse;
                fromAmino(_: _125.MsgCancelUpgradeResponseAmino): _125.MsgCancelUpgradeResponse;
                toAmino(_: _125.MsgCancelUpgradeResponse): _125.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _125.MsgCancelUpgradeResponseAminoMsg): _125.MsgCancelUpgradeResponse;
                toAminoMsg(message: _125.MsgCancelUpgradeResponse): _125.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _125.MsgCancelUpgradeResponseProtoMsg): _125.MsgCancelUpgradeResponse;
                toProto(message: _125.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _125.MsgCancelUpgradeResponse): _125.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _124.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_124.QueryCurrentPlanRequest>): _124.QueryCurrentPlanRequest;
                fromAmino(_: _124.QueryCurrentPlanRequestAmino): _124.QueryCurrentPlanRequest;
                toAmino(_: _124.QueryCurrentPlanRequest): _124.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _124.QueryCurrentPlanRequestAminoMsg): _124.QueryCurrentPlanRequest;
                toAminoMsg(message: _124.QueryCurrentPlanRequest): _124.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _124.QueryCurrentPlanRequestProtoMsg): _124.QueryCurrentPlanRequest;
                toProto(message: _124.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _124.QueryCurrentPlanRequest): _124.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _124.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_124.QueryCurrentPlanResponse>): _124.QueryCurrentPlanResponse;
                fromAmino(object: _124.QueryCurrentPlanResponseAmino): _124.QueryCurrentPlanResponse;
                toAmino(message: _124.QueryCurrentPlanResponse): _124.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _124.QueryCurrentPlanResponseAminoMsg): _124.QueryCurrentPlanResponse;
                toAminoMsg(message: _124.QueryCurrentPlanResponse): _124.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _124.QueryCurrentPlanResponseProtoMsg): _124.QueryCurrentPlanResponse;
                toProto(message: _124.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _124.QueryCurrentPlanResponse): _124.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _124.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_124.QueryAppliedPlanRequest>): _124.QueryAppliedPlanRequest;
                fromAmino(object: _124.QueryAppliedPlanRequestAmino): _124.QueryAppliedPlanRequest;
                toAmino(message: _124.QueryAppliedPlanRequest): _124.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _124.QueryAppliedPlanRequestAminoMsg): _124.QueryAppliedPlanRequest;
                toAminoMsg(message: _124.QueryAppliedPlanRequest): _124.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _124.QueryAppliedPlanRequestProtoMsg): _124.QueryAppliedPlanRequest;
                toProto(message: _124.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _124.QueryAppliedPlanRequest): _124.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _124.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_124.QueryAppliedPlanResponse>): _124.QueryAppliedPlanResponse;
                fromAmino(object: _124.QueryAppliedPlanResponseAmino): _124.QueryAppliedPlanResponse;
                toAmino(message: _124.QueryAppliedPlanResponse): _124.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _124.QueryAppliedPlanResponseAminoMsg): _124.QueryAppliedPlanResponse;
                toAminoMsg(message: _124.QueryAppliedPlanResponse): _124.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _124.QueryAppliedPlanResponseProtoMsg): _124.QueryAppliedPlanResponse;
                toProto(message: _124.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _124.QueryAppliedPlanResponse): _124.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _124.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_124.QueryUpgradedConsensusStateRequest>): _124.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _124.QueryUpgradedConsensusStateRequestAmino): _124.QueryUpgradedConsensusStateRequest;
                toAmino(message: _124.QueryUpgradedConsensusStateRequest): _124.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _124.QueryUpgradedConsensusStateRequestAminoMsg): _124.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _124.QueryUpgradedConsensusStateRequest): _124.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _124.QueryUpgradedConsensusStateRequestProtoMsg): _124.QueryUpgradedConsensusStateRequest;
                toProto(message: _124.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _124.QueryUpgradedConsensusStateRequest): _124.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _124.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_124.QueryUpgradedConsensusStateResponse>): _124.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _124.QueryUpgradedConsensusStateResponseAmino): _124.QueryUpgradedConsensusStateResponse;
                toAmino(message: _124.QueryUpgradedConsensusStateResponse): _124.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _124.QueryUpgradedConsensusStateResponseAminoMsg): _124.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _124.QueryUpgradedConsensusStateResponse): _124.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _124.QueryUpgradedConsensusStateResponseProtoMsg): _124.QueryUpgradedConsensusStateResponse;
                toProto(message: _124.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _124.QueryUpgradedConsensusStateResponse): _124.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _124.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_124.QueryModuleVersionsRequest>): _124.QueryModuleVersionsRequest;
                fromAmino(object: _124.QueryModuleVersionsRequestAmino): _124.QueryModuleVersionsRequest;
                toAmino(message: _124.QueryModuleVersionsRequest): _124.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _124.QueryModuleVersionsRequestAminoMsg): _124.QueryModuleVersionsRequest;
                toAminoMsg(message: _124.QueryModuleVersionsRequest): _124.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _124.QueryModuleVersionsRequestProtoMsg): _124.QueryModuleVersionsRequest;
                toProto(message: _124.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _124.QueryModuleVersionsRequest): _124.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _124.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_124.QueryModuleVersionsResponse>): _124.QueryModuleVersionsResponse;
                fromAmino(object: _124.QueryModuleVersionsResponseAmino): _124.QueryModuleVersionsResponse;
                toAmino(message: _124.QueryModuleVersionsResponse): _124.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _124.QueryModuleVersionsResponseAminoMsg): _124.QueryModuleVersionsResponse;
                toAminoMsg(message: _124.QueryModuleVersionsResponse): _124.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _124.QueryModuleVersionsResponseProtoMsg): _124.QueryModuleVersionsResponse;
                toProto(message: _124.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _124.QueryModuleVersionsResponse): _124.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _124.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.QueryAuthorityRequest;
                fromPartial(_: Partial<_124.QueryAuthorityRequest>): _124.QueryAuthorityRequest;
                fromAmino(_: _124.QueryAuthorityRequestAmino): _124.QueryAuthorityRequest;
                toAmino(_: _124.QueryAuthorityRequest): _124.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _124.QueryAuthorityRequestAminoMsg): _124.QueryAuthorityRequest;
                toAminoMsg(message: _124.QueryAuthorityRequest): _124.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _124.QueryAuthorityRequestProtoMsg): _124.QueryAuthorityRequest;
                toProto(message: _124.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _124.QueryAuthorityRequest): _124.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _124.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.QueryAuthorityResponse;
                fromPartial(object: Partial<_124.QueryAuthorityResponse>): _124.QueryAuthorityResponse;
                fromAmino(object: _124.QueryAuthorityResponseAmino): _124.QueryAuthorityResponse;
                toAmino(message: _124.QueryAuthorityResponse): _124.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _124.QueryAuthorityResponseAminoMsg): _124.QueryAuthorityResponse;
                toAminoMsg(message: _124.QueryAuthorityResponse): _124.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _124.QueryAuthorityResponseProtoMsg): _124.QueryAuthorityResponse;
                toProto(message: _124.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _124.QueryAuthorityResponse): _124.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _127.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _127.Module;
                    fromPartial(_: Partial<_127.Module>): _127.Module;
                    fromAmino(_: _127.ModuleAmino): _127.Module;
                    toAmino(_: _127.Module): _127.ModuleAmino;
                    fromAminoMsg(object: _127.ModuleAminoMsg): _127.Module;
                    toAminoMsg(message: _127.Module): _127.ModuleAminoMsg;
                    fromProtoMsg(message: _127.ModuleProtoMsg): _127.Module;
                    toProto(message: _127.Module): Uint8Array;
                    toProtoMsg(message: _127.Module): _127.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _128.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _128.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _128.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _128.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _128.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _128.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _128.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _128.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _128.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _128.MsgCreateVestingAccount) => _128.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _128.MsgCreateVestingAccountAmino) => _128.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _128.MsgCreatePermanentLockedAccount) => _128.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _128.MsgCreatePermanentLockedAccountAmino) => _128.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _128.MsgCreatePeriodicVestingAccount) => _128.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _128.MsgCreatePeriodicVestingAccountAmino) => _128.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _129.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.BaseVestingAccount;
                fromPartial(object: Partial<_129.BaseVestingAccount>): _129.BaseVestingAccount;
                fromAmino(object: _129.BaseVestingAccountAmino): _129.BaseVestingAccount;
                toAmino(message: _129.BaseVestingAccount): _129.BaseVestingAccountAmino;
                fromAminoMsg(object: _129.BaseVestingAccountAminoMsg): _129.BaseVestingAccount;
                toAminoMsg(message: _129.BaseVestingAccount): _129.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _129.BaseVestingAccountProtoMsg): _129.BaseVestingAccount;
                toProto(message: _129.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _129.BaseVestingAccount): _129.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _129.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.ContinuousVestingAccount;
                fromPartial(object: Partial<_129.ContinuousVestingAccount>): _129.ContinuousVestingAccount;
                fromAmino(object: _129.ContinuousVestingAccountAmino): _129.ContinuousVestingAccount;
                toAmino(message: _129.ContinuousVestingAccount): _129.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _129.ContinuousVestingAccountAminoMsg): _129.ContinuousVestingAccount;
                toAminoMsg(message: _129.ContinuousVestingAccount): _129.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _129.ContinuousVestingAccountProtoMsg): _129.ContinuousVestingAccount;
                toProto(message: _129.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _129.ContinuousVestingAccount): _129.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _129.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.DelayedVestingAccount;
                fromPartial(object: Partial<_129.DelayedVestingAccount>): _129.DelayedVestingAccount;
                fromAmino(object: _129.DelayedVestingAccountAmino): _129.DelayedVestingAccount;
                toAmino(message: _129.DelayedVestingAccount): _129.DelayedVestingAccountAmino;
                fromAminoMsg(object: _129.DelayedVestingAccountAminoMsg): _129.DelayedVestingAccount;
                toAminoMsg(message: _129.DelayedVestingAccount): _129.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _129.DelayedVestingAccountProtoMsg): _129.DelayedVestingAccount;
                toProto(message: _129.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _129.DelayedVestingAccount): _129.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _129.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.Period;
                fromPartial(object: Partial<_129.Period>): _129.Period;
                fromAmino(object: _129.PeriodAmino): _129.Period;
                toAmino(message: _129.Period): _129.PeriodAmino;
                fromAminoMsg(object: _129.PeriodAminoMsg): _129.Period;
                toAminoMsg(message: _129.Period): _129.PeriodAminoMsg;
                fromProtoMsg(message: _129.PeriodProtoMsg): _129.Period;
                toProto(message: _129.Period): Uint8Array;
                toProtoMsg(message: _129.Period): _129.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _129.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.PeriodicVestingAccount;
                fromPartial(object: Partial<_129.PeriodicVestingAccount>): _129.PeriodicVestingAccount;
                fromAmino(object: _129.PeriodicVestingAccountAmino): _129.PeriodicVestingAccount;
                toAmino(message: _129.PeriodicVestingAccount): _129.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _129.PeriodicVestingAccountAminoMsg): _129.PeriodicVestingAccount;
                toAminoMsg(message: _129.PeriodicVestingAccount): _129.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _129.PeriodicVestingAccountProtoMsg): _129.PeriodicVestingAccount;
                toProto(message: _129.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _129.PeriodicVestingAccount): _129.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _129.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.PermanentLockedAccount;
                fromPartial(object: Partial<_129.PermanentLockedAccount>): _129.PermanentLockedAccount;
                fromAmino(object: _129.PermanentLockedAccountAmino): _129.PermanentLockedAccount;
                toAmino(message: _129.PermanentLockedAccount): _129.PermanentLockedAccountAmino;
                fromAminoMsg(object: _129.PermanentLockedAccountAminoMsg): _129.PermanentLockedAccount;
                toAminoMsg(message: _129.PermanentLockedAccount): _129.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _129.PermanentLockedAccountProtoMsg): _129.PermanentLockedAccount;
                toProto(message: _129.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _129.PermanentLockedAccount): _129.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _128.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgCreateVestingAccount;
                fromPartial(object: Partial<_128.MsgCreateVestingAccount>): _128.MsgCreateVestingAccount;
                fromAmino(object: _128.MsgCreateVestingAccountAmino): _128.MsgCreateVestingAccount;
                toAmino(message: _128.MsgCreateVestingAccount): _128.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _128.MsgCreateVestingAccountAminoMsg): _128.MsgCreateVestingAccount;
                toAminoMsg(message: _128.MsgCreateVestingAccount): _128.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _128.MsgCreateVestingAccountProtoMsg): _128.MsgCreateVestingAccount;
                toProto(message: _128.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _128.MsgCreateVestingAccount): _128.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _128.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_128.MsgCreateVestingAccountResponse>): _128.MsgCreateVestingAccountResponse;
                fromAmino(_: _128.MsgCreateVestingAccountResponseAmino): _128.MsgCreateVestingAccountResponse;
                toAmino(_: _128.MsgCreateVestingAccountResponse): _128.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _128.MsgCreateVestingAccountResponseAminoMsg): _128.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _128.MsgCreateVestingAccountResponse): _128.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _128.MsgCreateVestingAccountResponseProtoMsg): _128.MsgCreateVestingAccountResponse;
                toProto(message: _128.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _128.MsgCreateVestingAccountResponse): _128.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _128.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_128.MsgCreatePermanentLockedAccount>): _128.MsgCreatePermanentLockedAccount;
                fromAmino(object: _128.MsgCreatePermanentLockedAccountAmino): _128.MsgCreatePermanentLockedAccount;
                toAmino(message: _128.MsgCreatePermanentLockedAccount): _128.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _128.MsgCreatePermanentLockedAccountAminoMsg): _128.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _128.MsgCreatePermanentLockedAccount): _128.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _128.MsgCreatePermanentLockedAccountProtoMsg): _128.MsgCreatePermanentLockedAccount;
                toProto(message: _128.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _128.MsgCreatePermanentLockedAccount): _128.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _128.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_128.MsgCreatePermanentLockedAccountResponse>): _128.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _128.MsgCreatePermanentLockedAccountResponseAmino): _128.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _128.MsgCreatePermanentLockedAccountResponse): _128.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _128.MsgCreatePermanentLockedAccountResponseAminoMsg): _128.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _128.MsgCreatePermanentLockedAccountResponse): _128.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _128.MsgCreatePermanentLockedAccountResponseProtoMsg): _128.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _128.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _128.MsgCreatePermanentLockedAccountResponse): _128.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _128.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_128.MsgCreatePeriodicVestingAccount>): _128.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _128.MsgCreatePeriodicVestingAccountAmino): _128.MsgCreatePeriodicVestingAccount;
                toAmino(message: _128.MsgCreatePeriodicVestingAccount): _128.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _128.MsgCreatePeriodicVestingAccountAminoMsg): _128.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _128.MsgCreatePeriodicVestingAccount): _128.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _128.MsgCreatePeriodicVestingAccountProtoMsg): _128.MsgCreatePeriodicVestingAccount;
                toProto(message: _128.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _128.MsgCreatePeriodicVestingAccount): _128.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _128.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_128.MsgCreatePeriodicVestingAccountResponse>): _128.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _128.MsgCreatePeriodicVestingAccountResponseAmino): _128.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _128.MsgCreatePeriodicVestingAccountResponse): _128.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _128.MsgCreatePeriodicVestingAccountResponseAminoMsg): _128.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _128.MsgCreatePeriodicVestingAccountResponse): _128.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _128.MsgCreatePeriodicVestingAccountResponseProtoMsg): _128.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _128.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _128.MsgCreatePeriodicVestingAccountResponse): _128.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _227.MsgClientImpl;
                };
                authz: {
                    v1beta1: _228.MsgClientImpl;
                };
                bank: {
                    v1beta1: _229.MsgClientImpl;
                };
                consensus: {
                    v1: _230.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _231.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _232.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _233.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _234.MsgClientImpl;
                };
                gov: {
                    v1: _235.MsgClientImpl;
                    v1beta1: _236.MsgClientImpl;
                };
                group: {
                    v1: _237.MsgClientImpl;
                };
                mint: {
                    v1beta1: _238.MsgClientImpl;
                };
                nft: {
                    v1beta1: _239.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _240.MsgClientImpl;
                };
                staking: {
                    v1beta1: _241.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _242.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _243.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _8.QueryConfigRequest): Promise<_8.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _12.QueryAccountsRequest): Promise<_12.QueryAccountsResponse>;
                        account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                        accountAddressByID(request: _12.QueryAccountAddressByIDRequest): Promise<_12.QueryAccountAddressByIDResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        moduleAccounts(request?: _12.QueryModuleAccountsRequest): Promise<_12.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _12.QueryModuleAccountByNameRequest): Promise<_12.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _12.Bech32PrefixRequest): Promise<_12.Bech32PrefixResponse>;
                        addressBytesToString(request: _12.AddressBytesToStringRequest): Promise<_12.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _12.AddressStringToBytesRequest): Promise<_12.AddressStringToBytesResponse>;
                        accountInfo(request: _12.QueryAccountInfoRequest): Promise<_12.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _18.QueryGrantsRequest): Promise<_18.QueryGrantsResponse>;
                        granterGrants(request: _18.QueryGranterGrantsRequest): Promise<_18.QueryGranterGrantsResponse>;
                        granteeGrants(request: _18.QueryGranteeGrantsRequest): Promise<_18.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _21.AppOptionsRequest): Promise<_21.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _26.QueryBalanceRequest): Promise<_26.QueryBalanceResponse>;
                        allBalances(request: _26.QueryAllBalancesRequest): Promise<_26.QueryAllBalancesResponse>;
                        spendableBalances(request: _26.QuerySpendableBalancesRequest): Promise<_26.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _26.QuerySpendableBalanceByDenomRequest): Promise<_26.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _26.QueryTotalSupplyRequest): Promise<_26.QueryTotalSupplyResponse>;
                        supplyOf(request: _26.QuerySupplyOfRequest): Promise<_26.QuerySupplyOfResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        denomMetadata(request: _26.QueryDenomMetadataRequest): Promise<_26.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _26.QueryDenomsMetadataRequest): Promise<_26.QueryDenomsMetadataResponse>;
                        denomOwners(request: _26.QueryDenomOwnersRequest): Promise<_26.QueryDenomOwnersResponse>;
                        sendEnabled(request: _26.QuerySendEnabledRequest): Promise<_26.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _30.ConfigRequest): Promise<_30.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _37.GetNodeInfoRequest): Promise<_37.GetNodeInfoResponse>;
                            getSyncing(request?: _37.GetSyncingRequest): Promise<_37.GetSyncingResponse>;
                            getLatestBlock(request?: _37.GetLatestBlockRequest): Promise<_37.GetLatestBlockResponse>;
                            getBlockByHeight(request: _37.GetBlockByHeightRequest): Promise<_37.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _37.GetLatestValidatorSetRequest): Promise<_37.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _37.GetValidatorSetByHeightRequest): Promise<_37.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _37.ABCIQueryRequest): Promise<_37.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        validatorDistributionInfo(request: _58.QueryValidatorDistributionInfoRequest): Promise<_58.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _58.QueryValidatorOutstandingRewardsRequest): Promise<_58.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _58.QueryValidatorCommissionRequest): Promise<_58.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _58.QueryValidatorSlashesRequest): Promise<_58.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _58.QueryDelegationRewardsRequest): Promise<_58.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _58.QueryDelegationTotalRewardsRequest): Promise<_58.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _58.QueryDelegatorValidatorsRequest): Promise<_58.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _58.QueryDelegatorWithdrawAddressRequest): Promise<_58.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _58.QueryCommunityPoolRequest): Promise<_58.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _63.QueryEvidenceRequest): Promise<_63.QueryEvidenceResponse>;
                        allEvidence(request?: _63.QueryAllEvidenceRequest): Promise<_63.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _68.QueryAllowanceRequest): Promise<_68.QueryAllowanceResponse>;
                        allowances(request: _68.QueryAllowancesRequest): Promise<_68.QueryAllowancesResponse>;
                        allowancesByGranter(request: _68.QueryAllowancesByGranterRequest): Promise<_68.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                        proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                        vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                        votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                        params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                        deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                        tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                        proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                        vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                        votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                        params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                        deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                        tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _84.QueryGroupInfoRequest): Promise<_84.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _84.QueryGroupPolicyInfoRequest): Promise<_84.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _84.QueryGroupMembersRequest): Promise<_84.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _84.QueryGroupsByAdminRequest): Promise<_84.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _84.QueryGroupPoliciesByGroupRequest): Promise<_84.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _84.QueryGroupPoliciesByAdminRequest): Promise<_84.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _84.QueryProposalRequest): Promise<_84.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _84.QueryProposalsByGroupPolicyRequest): Promise<_84.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _84.QueryVoteByProposalVoterRequest): Promise<_84.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _84.QueryVotesByProposalRequest): Promise<_84.QueryVotesByProposalResponse>;
                        votesByVoter(request: _84.QueryVotesByVoterRequest): Promise<_84.QueryVotesByVoterResponse>;
                        groupsByMember(request: _84.QueryGroupsByMemberRequest): Promise<_84.QueryGroupsByMemberResponse>;
                        tallyResult(request: _84.QueryTallyResultRequest): Promise<_84.QueryTallyResultResponse>;
                        groups(request?: _84.QueryGroupsRequest): Promise<_84.QueryGroupsResponse>;
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
                        balance(request: _97.QueryBalanceRequest): Promise<_97.QueryBalanceResponse>;
                        owner(request: _97.QueryOwnerRequest): Promise<_97.QueryOwnerResponse>;
                        supply(request: _97.QuerySupplyRequest): Promise<_97.QuerySupplyResponse>;
                        nFTs(request: _97.QueryNFTsRequest): Promise<_97.QueryNFTsResponse>;
                        nFT(request: _97.QueryNFTRequest): Promise<_97.QueryNFTResponse>;
                        class(request: _97.QueryClassRequest): Promise<_97.QueryClassResponse>;
                        classes(request?: _97.QueryClassesRequest): Promise<_97.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _100.GetRequest): Promise<_100.GetResponse>;
                            list(request: _100.ListRequest): Promise<_100.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        subspaces(request?: _105.QuerySubspacesRequest): Promise<_105.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                        signingInfo(request: _110.QuerySigningInfoRequest): Promise<_110.QuerySigningInfoResponse>;
                        signingInfos(request?: _110.QuerySigningInfosRequest): Promise<_110.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _116.QueryValidatorsRequest): Promise<_116.QueryValidatorsResponse>;
                        validator(request: _116.QueryValidatorRequest): Promise<_116.QueryValidatorResponse>;
                        validatorDelegations(request: _116.QueryValidatorDelegationsRequest): Promise<_116.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _116.QueryValidatorUnbondingDelegationsRequest): Promise<_116.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _116.QueryDelegationRequest): Promise<_116.QueryDelegationResponse>;
                        unbondingDelegation(request: _116.QueryUnbondingDelegationRequest): Promise<_116.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _116.QueryDelegatorDelegationsRequest): Promise<_116.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _116.QueryDelegatorUnbondingDelegationsRequest): Promise<_116.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _116.QueryRedelegationsRequest): Promise<_116.QueryRedelegationsResponse>;
                        delegatorValidators(request: _116.QueryDelegatorValidatorsRequest): Promise<_116.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _116.QueryDelegatorValidatorRequest): Promise<_116.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _116.QueryHistoricalInfoRequest): Promise<_116.QueryHistoricalInfoResponse>;
                        pool(request?: _116.QueryPoolRequest): Promise<_116.QueryPoolResponse>;
                        params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _121.SimulateRequest): Promise<_121.SimulateResponse>;
                        getTx(request: _121.GetTxRequest): Promise<_121.GetTxResponse>;
                        broadcastTx(request: _121.BroadcastTxRequest): Promise<_121.BroadcastTxResponse>;
                        getTxsEvent(request: _121.GetTxsEventRequest): Promise<_121.GetTxsEventResponse>;
                        getBlockWithTxs(request: _121.GetBlockWithTxsRequest): Promise<_121.GetBlockWithTxsResponse>;
                        txDecode(request: _121.TxDecodeRequest): Promise<_121.TxDecodeResponse>;
                        txEncode(request: _121.TxEncodeRequest): Promise<_121.TxEncodeResponse>;
                        txEncodeAmino(request: _121.TxEncodeAminoRequest): Promise<_121.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _121.TxDecodeAminoRequest): Promise<_121.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _124.QueryCurrentPlanRequest): Promise<_124.QueryCurrentPlanResponse>;
                        appliedPlan(request: _124.QueryAppliedPlanRequest): Promise<_124.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _124.QueryUpgradedConsensusStateRequest): Promise<_124.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _124.QueryModuleVersionsRequest): Promise<_124.QueryModuleVersionsResponse>;
                        authority(request?: _124.QueryAuthorityRequest): Promise<_124.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _186.LCDQueryClient;
                };
                authz: {
                    v1beta1: _187.LCDQueryClient;
                };
                bank: {
                    v1beta1: _188.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _189.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _190.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _191.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _192.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _193.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _194.LCDQueryClient;
                };
                gov: {
                    v1: _195.LCDQueryClient;
                    v1beta1: _196.LCDQueryClient;
                };
                group: {
                    v1: _197.LCDQueryClient;
                };
                mint: {
                    v1beta1: _198.LCDQueryClient;
                };
                nft: {
                    v1beta1: _199.LCDQueryClient;
                };
                params: {
                    v1beta1: _200.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _201.LCDQueryClient;
                };
                staking: {
                    v1beta1: _202.LCDQueryClient;
                };
                tx: {
                    v1beta1: _203.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _204.LCDQueryClient;
                };
            };
        }>;
    };
}
