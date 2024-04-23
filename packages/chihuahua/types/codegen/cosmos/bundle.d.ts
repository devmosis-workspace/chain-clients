import * as _10 from "./app/runtime/v1alpha1/module";
import * as _11 from "./app/v1alpha1/config";
import * as _12 from "./app/v1alpha1/module";
import * as _13 from "./app/v1alpha1/query";
import * as _14 from "./auth/module/v1/module";
import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./auth/v1beta1/tx";
import * as _19 from "./authz/module/v1/module";
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./autocli/v1/options";
import * as _26 from "./autocli/v1/query";
import * as _27 from "./bank/module/v1/module";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/kv/v1beta1/kv";
import * as _35 from "./base/node/v1beta1/query";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/tendermint/v1beta1/query";
import * as _43 from "./base/tendermint/v1beta1/types";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./capability/module/v1/module";
import * as _46 from "./capability/v1beta1/capability";
import * as _47 from "./capability/v1beta1/genesis";
import * as _48 from "./consensus/module/v1/module";
import * as _49 from "./consensus/v1/query";
import * as _50 from "./consensus/v1/tx";
import * as _51 from "./crisis/module/v1/module";
import * as _52 from "./crisis/v1beta1/genesis";
import * as _53 from "./crisis/v1beta1/tx";
import * as _54 from "./crypto/ed25519/keys";
import * as _55 from "./crypto/hd/v1/hd";
import * as _56 from "./crypto/keyring/v1/record";
import * as _57 from "./crypto/multisig/keys";
import * as _58 from "./crypto/secp256k1/keys";
import * as _59 from "./crypto/secp256r1/keys";
import * as _60 from "./distribution/module/v1/module";
import * as _61 from "./distribution/v1beta1/distribution";
import * as _62 from "./distribution/v1beta1/genesis";
import * as _63 from "./distribution/v1beta1/query";
import * as _64 from "./distribution/v1beta1/tx";
import * as _65 from "./evidence/module/v1/module";
import * as _66 from "./evidence/v1beta1/evidence";
import * as _67 from "./evidence/v1beta1/genesis";
import * as _68 from "./evidence/v1beta1/query";
import * as _69 from "./evidence/v1beta1/tx";
import * as _70 from "./feegrant/module/v1/module";
import * as _71 from "./feegrant/v1beta1/feegrant";
import * as _72 from "./feegrant/v1beta1/genesis";
import * as _73 from "./feegrant/v1beta1/query";
import * as _74 from "./feegrant/v1beta1/tx";
import * as _75 from "./genutil/module/v1/module";
import * as _76 from "./genutil/v1beta1/genesis";
import * as _77 from "./gov/module/v1/module";
import * as _78 from "./gov/v1/genesis";
import * as _79 from "./gov/v1/gov";
import * as _80 from "./gov/v1/query";
import * as _81 from "./gov/v1/tx";
import * as _82 from "./gov/v1beta1/genesis";
import * as _83 from "./gov/v1beta1/gov";
import * as _84 from "./gov/v1beta1/query";
import * as _85 from "./gov/v1beta1/tx";
import * as _86 from "./group/module/v1/module";
import * as _87 from "./group/v1/events";
import * as _88 from "./group/v1/genesis";
import * as _89 from "./group/v1/query";
import * as _90 from "./group/v1/tx";
import * as _91 from "./group/v1/types";
import * as _92 from "./mint/module/v1/module";
import * as _93 from "./mint/v1beta1/genesis";
import * as _94 from "./mint/v1beta1/mint";
import * as _95 from "./mint/v1beta1/query";
import * as _96 from "./mint/v1beta1/tx";
import * as _98 from "./nft/module/v1/module";
import * as _99 from "./nft/v1beta1/event";
import * as _100 from "./nft/v1beta1/genesis";
import * as _101 from "./nft/v1beta1/nft";
import * as _102 from "./nft/v1beta1/query";
import * as _103 from "./nft/v1beta1/tx";
import * as _104 from "./orm/module/v1alpha1/module";
import * as _105 from "./orm/query/v1alpha1/query";
import * as _106 from "./orm/v1/orm";
import * as _107 from "./orm/v1alpha1/schema";
import * as _108 from "./params/module/v1/module";
import * as _109 from "./params/v1beta1/params";
import * as _110 from "./params/v1beta1/query";
import * as _112 from "./reflection/v1/reflection";
import * as _113 from "./slashing/module/v1/module";
import * as _114 from "./slashing/v1beta1/genesis";
import * as _115 from "./slashing/v1beta1/query";
import * as _116 from "./slashing/v1beta1/slashing";
import * as _117 from "./slashing/v1beta1/tx";
import * as _118 from "./staking/module/v1/module";
import * as _119 from "./staking/v1beta1/authz";
import * as _120 from "./staking/v1beta1/genesis";
import * as _121 from "./staking/v1beta1/query";
import * as _122 from "./staking/v1beta1/staking";
import * as _123 from "./staking/v1beta1/tx";
import * as _124 from "./tx/config/v1/config";
import * as _125 from "./tx/signing/v1beta1/signing";
import * as _126 from "./tx/v1beta1/service";
import * as _127 from "./tx/v1beta1/tx";
import * as _128 from "./upgrade/module/v1/module";
import * as _129 from "./upgrade/v1beta1/query";
import * as _130 from "./upgrade/v1beta1/tx";
import * as _131 from "./upgrade/v1beta1/upgrade";
import * as _132 from "./vesting/module/v1/module";
import * as _133 from "./vesting/v1beta1/tx";
import * as _134 from "./vesting/v1beta1/vesting";
import * as _198 from "./auth/v1beta1/query.lcd";
import * as _199 from "./authz/v1beta1/query.lcd";
import * as _200 from "./bank/v1beta1/query.lcd";
import * as _201 from "./base/node/v1beta1/query.lcd";
import * as _202 from "./base/tendermint/v1beta1/query.lcd";
import * as _203 from "./consensus/v1/query.lcd";
import * as _204 from "./distribution/v1beta1/query.lcd";
import * as _205 from "./evidence/v1beta1/query.lcd";
import * as _206 from "./feegrant/v1beta1/query.lcd";
import * as _207 from "./gov/v1/query.lcd";
import * as _208 from "./gov/v1beta1/query.lcd";
import * as _209 from "./group/v1/query.lcd";
import * as _210 from "./mint/v1beta1/query.lcd";
import * as _211 from "./nft/v1beta1/query.lcd";
import * as _212 from "./params/v1beta1/query.lcd";
import * as _213 from "./slashing/v1beta1/query.lcd";
import * as _214 from "./staking/v1beta1/query.lcd";
import * as _215 from "./tx/v1beta1/service.lcd";
import * as _216 from "./upgrade/v1beta1/query.lcd";
import * as _217 from "./app/v1alpha1/query.rpc.Query";
import * as _218 from "./auth/v1beta1/query.rpc.Query";
import * as _219 from "./authz/v1beta1/query.rpc.Query";
import * as _220 from "./autocli/v1/query.rpc.Query";
import * as _221 from "./bank/v1beta1/query.rpc.Query";
import * as _222 from "./base/node/v1beta1/query.rpc.Service";
import * as _223 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _224 from "./consensus/v1/query.rpc.Query";
import * as _225 from "./distribution/v1beta1/query.rpc.Query";
import * as _226 from "./evidence/v1beta1/query.rpc.Query";
import * as _227 from "./feegrant/v1beta1/query.rpc.Query";
import * as _228 from "./gov/v1/query.rpc.Query";
import * as _229 from "./gov/v1beta1/query.rpc.Query";
import * as _230 from "./group/v1/query.rpc.Query";
import * as _231 from "./mint/v1beta1/query.rpc.Query";
import * as _232 from "./nft/v1beta1/query.rpc.Query";
import * as _233 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _234 from "./params/v1beta1/query.rpc.Query";
import * as _235 from "./slashing/v1beta1/query.rpc.Query";
import * as _236 from "./staking/v1beta1/query.rpc.Query";
import * as _237 from "./tx/v1beta1/service.rpc.Service";
import * as _238 from "./upgrade/v1beta1/query.rpc.Query";
import * as _239 from "./auth/v1beta1/tx.rpc.msg";
import * as _240 from "./authz/v1beta1/tx.rpc.msg";
import * as _241 from "./bank/v1beta1/tx.rpc.msg";
import * as _242 from "./consensus/v1/tx.rpc.msg";
import * as _243 from "./crisis/v1beta1/tx.rpc.msg";
import * as _244 from "./distribution/v1beta1/tx.rpc.msg";
import * as _245 from "./evidence/v1beta1/tx.rpc.msg";
import * as _246 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _247 from "./gov/v1/tx.rpc.msg";
import * as _248 from "./gov/v1beta1/tx.rpc.msg";
import * as _249 from "./group/v1/tx.rpc.msg";
import * as _250 from "./mint/v1beta1/tx.rpc.msg";
import * as _251 from "./nft/v1beta1/tx.rpc.msg";
import * as _252 from "./slashing/v1beta1/tx.rpc.msg";
import * as _253 from "./staking/v1beta1/tx.rpc.msg";
import * as _254 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _255 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _10.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.Module;
                    fromPartial(object: Partial<_10.Module>): _10.Module;
                    fromAmino(object: _10.ModuleAmino): _10.Module;
                    toAmino(message: _10.Module): _10.ModuleAmino;
                    fromAminoMsg(object: _10.ModuleAminoMsg): _10.Module;
                    toAminoMsg(message: _10.Module): _10.ModuleAminoMsg;
                    fromProtoMsg(message: _10.ModuleProtoMsg): _10.Module;
                    toProto(message: _10.Module): Uint8Array;
                    toProtoMsg(message: _10.Module): _10.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _10.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.StoreKeyConfig;
                    fromPartial(object: Partial<_10.StoreKeyConfig>): _10.StoreKeyConfig;
                    fromAmino(object: _10.StoreKeyConfigAmino): _10.StoreKeyConfig;
                    toAmino(message: _10.StoreKeyConfig): _10.StoreKeyConfigAmino;
                    fromAminoMsg(object: _10.StoreKeyConfigAminoMsg): _10.StoreKeyConfig;
                    toAminoMsg(message: _10.StoreKeyConfig): _10.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _10.StoreKeyConfigProtoMsg): _10.StoreKeyConfig;
                    toProto(message: _10.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _10.StoreKeyConfig): _10.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _13.QueryConfigRequest): Promise<_13.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _13.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryConfigRequest;
                fromPartial(_: Partial<_13.QueryConfigRequest>): _13.QueryConfigRequest;
                fromAmino(_: _13.QueryConfigRequestAmino): _13.QueryConfigRequest;
                toAmino(_: _13.QueryConfigRequest): _13.QueryConfigRequestAmino;
                fromAminoMsg(object: _13.QueryConfigRequestAminoMsg): _13.QueryConfigRequest;
                toAminoMsg(message: _13.QueryConfigRequest): _13.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _13.QueryConfigRequestProtoMsg): _13.QueryConfigRequest;
                toProto(message: _13.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _13.QueryConfigRequest): _13.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _13.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryConfigResponse;
                fromPartial(object: Partial<_13.QueryConfigResponse>): _13.QueryConfigResponse;
                fromAmino(object: _13.QueryConfigResponseAmino): _13.QueryConfigResponse;
                toAmino(message: _13.QueryConfigResponse): _13.QueryConfigResponseAmino;
                fromAminoMsg(object: _13.QueryConfigResponseAminoMsg): _13.QueryConfigResponse;
                toAminoMsg(message: _13.QueryConfigResponse): _13.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _13.QueryConfigResponseProtoMsg): _13.QueryConfigResponse;
                toProto(message: _13.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _13.QueryConfigResponse): _13.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _12.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ModuleDescriptor;
                fromPartial(object: Partial<_12.ModuleDescriptor>): _12.ModuleDescriptor;
                fromAmino(object: _12.ModuleDescriptorAmino): _12.ModuleDescriptor;
                toAmino(message: _12.ModuleDescriptor): _12.ModuleDescriptorAmino;
                fromAminoMsg(object: _12.ModuleDescriptorAminoMsg): _12.ModuleDescriptor;
                toAminoMsg(message: _12.ModuleDescriptor): _12.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _12.ModuleDescriptorProtoMsg): _12.ModuleDescriptor;
                toProto(message: _12.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _12.ModuleDescriptor): _12.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _12.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.PackageReference;
                fromPartial(object: Partial<_12.PackageReference>): _12.PackageReference;
                fromAmino(object: _12.PackageReferenceAmino): _12.PackageReference;
                toAmino(message: _12.PackageReference): _12.PackageReferenceAmino;
                fromAminoMsg(object: _12.PackageReferenceAminoMsg): _12.PackageReference;
                toAminoMsg(message: _12.PackageReference): _12.PackageReferenceAminoMsg;
                fromProtoMsg(message: _12.PackageReferenceProtoMsg): _12.PackageReference;
                toProto(message: _12.PackageReference): Uint8Array;
                toProtoMsg(message: _12.PackageReference): _12.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _12.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MigrateFromInfo;
                fromPartial(object: Partial<_12.MigrateFromInfo>): _12.MigrateFromInfo;
                fromAmino(object: _12.MigrateFromInfoAmino): _12.MigrateFromInfo;
                toAmino(message: _12.MigrateFromInfo): _12.MigrateFromInfoAmino;
                fromAminoMsg(object: _12.MigrateFromInfoAminoMsg): _12.MigrateFromInfo;
                toAminoMsg(message: _12.MigrateFromInfo): _12.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _12.MigrateFromInfoProtoMsg): _12.MigrateFromInfo;
                toProto(message: _12.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _12.MigrateFromInfo): _12.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _11.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Config;
                fromPartial(object: Partial<_11.Config>): _11.Config;
                fromAmino(object: _11.ConfigAmino): _11.Config;
                toAmino(message: _11.Config): _11.ConfigAmino;
                fromAminoMsg(object: _11.ConfigAminoMsg): _11.Config;
                toAminoMsg(message: _11.Config): _11.ConfigAminoMsg;
                fromProtoMsg(message: _11.ConfigProtoMsg): _11.Config;
                toProto(message: _11.Config): Uint8Array;
                toProtoMsg(message: _11.Config): _11.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _11.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ModuleConfig;
                fromPartial(object: Partial<_11.ModuleConfig>): _11.ModuleConfig;
                fromAmino(object: _11.ModuleConfigAmino): _11.ModuleConfig;
                toAmino(message: _11.ModuleConfig): _11.ModuleConfigAmino;
                fromAminoMsg(object: _11.ModuleConfigAminoMsg): _11.ModuleConfig;
                toAminoMsg(message: _11.ModuleConfig): _11.ModuleConfigAminoMsg;
                fromProtoMsg(message: _11.ModuleConfigProtoMsg): _11.ModuleConfig;
                toProto(message: _11.ModuleConfig): Uint8Array;
                toProtoMsg(message: _11.ModuleConfig): _11.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _11.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GolangBinding;
                fromPartial(object: Partial<_11.GolangBinding>): _11.GolangBinding;
                fromAmino(object: _11.GolangBindingAmino): _11.GolangBinding;
                toAmino(message: _11.GolangBinding): _11.GolangBindingAmino;
                fromAminoMsg(object: _11.GolangBindingAminoMsg): _11.GolangBinding;
                toAminoMsg(message: _11.GolangBinding): _11.GolangBindingAminoMsg;
                fromProtoMsg(message: _11.GolangBindingProtoMsg): _11.GolangBinding;
                toProto(message: _11.GolangBinding): Uint8Array;
                toProtoMsg(message: _11.GolangBinding): _11.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _14.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Module;
                    fromPartial(object: Partial<_14.Module>): _14.Module;
                    fromAmino(object: _14.ModuleAmino): _14.Module;
                    toAmino(message: _14.Module): _14.ModuleAmino;
                    fromAminoMsg(object: _14.ModuleAminoMsg): _14.Module;
                    toAminoMsg(message: _14.Module): _14.ModuleAminoMsg;
                    fromProtoMsg(message: _14.ModuleProtoMsg): _14.Module;
                    toProto(message: _14.Module): Uint8Array;
                    toProtoMsg(message: _14.Module): _14.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _14.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.ModuleAccountPermission;
                    fromPartial(object: Partial<_14.ModuleAccountPermission>): _14.ModuleAccountPermission;
                    fromAmino(object: _14.ModuleAccountPermissionAmino): _14.ModuleAccountPermission;
                    toAmino(message: _14.ModuleAccountPermission): _14.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _14.ModuleAccountPermissionAminoMsg): _14.ModuleAccountPermission;
                    toAminoMsg(message: _14.ModuleAccountPermission): _14.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _14.ModuleAccountPermissionProtoMsg): _14.ModuleAccountPermission;
                    toProto(message: _14.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _14.ModuleAccountPermission): _14.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                accountAddressByID(request: _17.QueryAccountAddressByIDRequest): Promise<_17.QueryAccountAddressByIDResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                moduleAccounts(request?: _17.QueryModuleAccountsRequest): Promise<_17.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _17.Bech32PrefixRequest): Promise<_17.Bech32PrefixResponse>;
                addressBytesToString(request: _17.AddressBytesToStringRequest): Promise<_17.AddressBytesToStringResponse>;
                addressStringToBytes(request: _17.AddressStringToBytesRequest): Promise<_17.AddressStringToBytesResponse>;
                accountInfo(request: _17.QueryAccountInfoRequest): Promise<_17.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _18.MsgUpdateParams) => _18.MsgUpdateParamsAmino;
                    fromAmino: (object: _18.MsgUpdateParamsAmino) => _18.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _18.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgUpdateParams;
                fromPartial(object: Partial<_18.MsgUpdateParams>): _18.MsgUpdateParams;
                fromAmino(object: _18.MsgUpdateParamsAmino): _18.MsgUpdateParams;
                toAmino(message: _18.MsgUpdateParams): _18.MsgUpdateParamsAmino;
                fromAminoMsg(object: _18.MsgUpdateParamsAminoMsg): _18.MsgUpdateParams;
                toAminoMsg(message: _18.MsgUpdateParams): _18.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _18.MsgUpdateParamsProtoMsg): _18.MsgUpdateParams;
                toProto(message: _18.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateParams): _18.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _18.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_18.MsgUpdateParamsResponse>): _18.MsgUpdateParamsResponse;
                fromAmino(_: _18.MsgUpdateParamsResponseAmino): _18.MsgUpdateParamsResponse;
                toAmino(_: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _18.MsgUpdateParamsResponseAminoMsg): _18.MsgUpdateParamsResponse;
                toAminoMsg(message: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _18.MsgUpdateParamsResponseProtoMsg): _18.MsgUpdateParamsResponse;
                toProto(message: _18.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _17.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountsRequest;
                fromPartial(object: Partial<_17.QueryAccountsRequest>): _17.QueryAccountsRequest;
                fromAmino(object: _17.QueryAccountsRequestAmino): _17.QueryAccountsRequest;
                toAmino(message: _17.QueryAccountsRequest): _17.QueryAccountsRequestAmino;
                fromAminoMsg(object: _17.QueryAccountsRequestAminoMsg): _17.QueryAccountsRequest;
                toAminoMsg(message: _17.QueryAccountsRequest): _17.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAccountsRequestProtoMsg): _17.QueryAccountsRequest;
                toProto(message: _17.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAccountsRequest): _17.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _17.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountsResponse;
                fromPartial(object: Partial<_17.QueryAccountsResponse>): _17.QueryAccountsResponse;
                fromAmino(object: _17.QueryAccountsResponseAmino): _17.QueryAccountsResponse;
                toAmino(message: _17.QueryAccountsResponse): _17.QueryAccountsResponseAmino;
                fromAminoMsg(object: _17.QueryAccountsResponseAminoMsg): _17.QueryAccountsResponse;
                toAminoMsg(message: _17.QueryAccountsResponse): _17.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAccountsResponseProtoMsg): _17.QueryAccountsResponse;
                toProto(message: _17.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAccountsResponse): _17.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _17.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountRequest;
                fromPartial(object: Partial<_17.QueryAccountRequest>): _17.QueryAccountRequest;
                fromAmino(object: _17.QueryAccountRequestAmino): _17.QueryAccountRequest;
                toAmino(message: _17.QueryAccountRequest): _17.QueryAccountRequestAmino;
                fromAminoMsg(object: _17.QueryAccountRequestAminoMsg): _17.QueryAccountRequest;
                toAminoMsg(message: _17.QueryAccountRequest): _17.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAccountRequestProtoMsg): _17.QueryAccountRequest;
                toProto(message: _17.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAccountRequest): _17.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _17.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountResponse;
                fromPartial(object: Partial<_17.QueryAccountResponse>): _17.QueryAccountResponse;
                fromAmino(object: _17.QueryAccountResponseAmino): _17.QueryAccountResponse;
                toAmino(message: _17.QueryAccountResponse): _17.QueryAccountResponseAmino;
                fromAminoMsg(object: _17.QueryAccountResponseAminoMsg): _17.QueryAccountResponse;
                toAminoMsg(message: _17.QueryAccountResponse): _17.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAccountResponseProtoMsg): _17.QueryAccountResponse;
                toProto(message: _17.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAccountResponse): _17.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                toAminoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                toProto(message: _17.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                toAminoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                toProto(message: _17.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _17.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_17.QueryModuleAccountsRequest>): _17.QueryModuleAccountsRequest;
                fromAmino(_: _17.QueryModuleAccountsRequestAmino): _17.QueryModuleAccountsRequest;
                toAmino(_: _17.QueryModuleAccountsRequest): _17.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _17.QueryModuleAccountsRequestAminoMsg): _17.QueryModuleAccountsRequest;
                toAminoMsg(message: _17.QueryModuleAccountsRequest): _17.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryModuleAccountsRequestProtoMsg): _17.QueryModuleAccountsRequest;
                toProto(message: _17.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryModuleAccountsRequest): _17.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _17.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_17.QueryModuleAccountsResponse>): _17.QueryModuleAccountsResponse;
                fromAmino(object: _17.QueryModuleAccountsResponseAmino): _17.QueryModuleAccountsResponse;
                toAmino(message: _17.QueryModuleAccountsResponse): _17.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _17.QueryModuleAccountsResponseAminoMsg): _17.QueryModuleAccountsResponse;
                toAminoMsg(message: _17.QueryModuleAccountsResponse): _17.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryModuleAccountsResponseProtoMsg): _17.QueryModuleAccountsResponse;
                toProto(message: _17.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryModuleAccountsResponse): _17.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _17.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_17.QueryModuleAccountByNameRequest>): _17.QueryModuleAccountByNameRequest;
                fromAmino(object: _17.QueryModuleAccountByNameRequestAmino): _17.QueryModuleAccountByNameRequest;
                toAmino(message: _17.QueryModuleAccountByNameRequest): _17.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _17.QueryModuleAccountByNameRequestAminoMsg): _17.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _17.QueryModuleAccountByNameRequest): _17.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _17.QueryModuleAccountByNameRequestProtoMsg): _17.QueryModuleAccountByNameRequest;
                toProto(message: _17.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _17.QueryModuleAccountByNameRequest): _17.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _17.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_17.QueryModuleAccountByNameResponse>): _17.QueryModuleAccountByNameResponse;
                fromAmino(object: _17.QueryModuleAccountByNameResponseAmino): _17.QueryModuleAccountByNameResponse;
                toAmino(message: _17.QueryModuleAccountByNameResponse): _17.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _17.QueryModuleAccountByNameResponseAminoMsg): _17.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _17.QueryModuleAccountByNameResponse): _17.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _17.QueryModuleAccountByNameResponseProtoMsg): _17.QueryModuleAccountByNameResponse;
                toProto(message: _17.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _17.QueryModuleAccountByNameResponse): _17.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _17.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.Bech32PrefixRequest;
                fromPartial(_: Partial<_17.Bech32PrefixRequest>): _17.Bech32PrefixRequest;
                fromAmino(_: _17.Bech32PrefixRequestAmino): _17.Bech32PrefixRequest;
                toAmino(_: _17.Bech32PrefixRequest): _17.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _17.Bech32PrefixRequestAminoMsg): _17.Bech32PrefixRequest;
                toAminoMsg(message: _17.Bech32PrefixRequest): _17.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _17.Bech32PrefixRequestProtoMsg): _17.Bech32PrefixRequest;
                toProto(message: _17.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _17.Bech32PrefixRequest): _17.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _17.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Bech32PrefixResponse;
                fromPartial(object: Partial<_17.Bech32PrefixResponse>): _17.Bech32PrefixResponse;
                fromAmino(object: _17.Bech32PrefixResponseAmino): _17.Bech32PrefixResponse;
                toAmino(message: _17.Bech32PrefixResponse): _17.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _17.Bech32PrefixResponseAminoMsg): _17.Bech32PrefixResponse;
                toAminoMsg(message: _17.Bech32PrefixResponse): _17.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _17.Bech32PrefixResponseProtoMsg): _17.Bech32PrefixResponse;
                toProto(message: _17.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _17.Bech32PrefixResponse): _17.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _17.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.AddressBytesToStringRequest;
                fromPartial(object: Partial<_17.AddressBytesToStringRequest>): _17.AddressBytesToStringRequest;
                fromAmino(object: _17.AddressBytesToStringRequestAmino): _17.AddressBytesToStringRequest;
                toAmino(message: _17.AddressBytesToStringRequest): _17.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _17.AddressBytesToStringRequestAminoMsg): _17.AddressBytesToStringRequest;
                toAminoMsg(message: _17.AddressBytesToStringRequest): _17.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _17.AddressBytesToStringRequestProtoMsg): _17.AddressBytesToStringRequest;
                toProto(message: _17.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _17.AddressBytesToStringRequest): _17.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _17.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.AddressBytesToStringResponse;
                fromPartial(object: Partial<_17.AddressBytesToStringResponse>): _17.AddressBytesToStringResponse;
                fromAmino(object: _17.AddressBytesToStringResponseAmino): _17.AddressBytesToStringResponse;
                toAmino(message: _17.AddressBytesToStringResponse): _17.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _17.AddressBytesToStringResponseAminoMsg): _17.AddressBytesToStringResponse;
                toAminoMsg(message: _17.AddressBytesToStringResponse): _17.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _17.AddressBytesToStringResponseProtoMsg): _17.AddressBytesToStringResponse;
                toProto(message: _17.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _17.AddressBytesToStringResponse): _17.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _17.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.AddressStringToBytesRequest;
                fromPartial(object: Partial<_17.AddressStringToBytesRequest>): _17.AddressStringToBytesRequest;
                fromAmino(object: _17.AddressStringToBytesRequestAmino): _17.AddressStringToBytesRequest;
                toAmino(message: _17.AddressStringToBytesRequest): _17.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _17.AddressStringToBytesRequestAminoMsg): _17.AddressStringToBytesRequest;
                toAminoMsg(message: _17.AddressStringToBytesRequest): _17.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _17.AddressStringToBytesRequestProtoMsg): _17.AddressStringToBytesRequest;
                toProto(message: _17.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _17.AddressStringToBytesRequest): _17.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _17.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.AddressStringToBytesResponse;
                fromPartial(object: Partial<_17.AddressStringToBytesResponse>): _17.AddressStringToBytesResponse;
                fromAmino(object: _17.AddressStringToBytesResponseAmino): _17.AddressStringToBytesResponse;
                toAmino(message: _17.AddressStringToBytesResponse): _17.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _17.AddressStringToBytesResponseAminoMsg): _17.AddressStringToBytesResponse;
                toAminoMsg(message: _17.AddressStringToBytesResponse): _17.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _17.AddressStringToBytesResponseProtoMsg): _17.AddressStringToBytesResponse;
                toProto(message: _17.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _17.AddressStringToBytesResponse): _17.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _17.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_17.QueryAccountAddressByIDRequest>): _17.QueryAccountAddressByIDRequest;
                fromAmino(object: _17.QueryAccountAddressByIDRequestAmino): _17.QueryAccountAddressByIDRequest;
                toAmino(message: _17.QueryAccountAddressByIDRequest): _17.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _17.QueryAccountAddressByIDRequestAminoMsg): _17.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _17.QueryAccountAddressByIDRequest): _17.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAccountAddressByIDRequestProtoMsg): _17.QueryAccountAddressByIDRequest;
                toProto(message: _17.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAccountAddressByIDRequest): _17.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _17.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_17.QueryAccountAddressByIDResponse>): _17.QueryAccountAddressByIDResponse;
                fromAmino(object: _17.QueryAccountAddressByIDResponseAmino): _17.QueryAccountAddressByIDResponse;
                toAmino(message: _17.QueryAccountAddressByIDResponse): _17.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _17.QueryAccountAddressByIDResponseAminoMsg): _17.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _17.QueryAccountAddressByIDResponse): _17.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAccountAddressByIDResponseProtoMsg): _17.QueryAccountAddressByIDResponse;
                toProto(message: _17.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAccountAddressByIDResponse): _17.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _17.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountInfoRequest;
                fromPartial(object: Partial<_17.QueryAccountInfoRequest>): _17.QueryAccountInfoRequest;
                fromAmino(object: _17.QueryAccountInfoRequestAmino): _17.QueryAccountInfoRequest;
                toAmino(message: _17.QueryAccountInfoRequest): _17.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _17.QueryAccountInfoRequestAminoMsg): _17.QueryAccountInfoRequest;
                toAminoMsg(message: _17.QueryAccountInfoRequest): _17.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAccountInfoRequestProtoMsg): _17.QueryAccountInfoRequest;
                toProto(message: _17.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAccountInfoRequest): _17.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _17.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAccountInfoResponse;
                fromPartial(object: Partial<_17.QueryAccountInfoResponse>): _17.QueryAccountInfoResponse;
                fromAmino(object: _17.QueryAccountInfoResponseAmino): _17.QueryAccountInfoResponse;
                toAmino(message: _17.QueryAccountInfoResponse): _17.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _17.QueryAccountInfoResponseAminoMsg): _17.QueryAccountInfoResponse;
                toAminoMsg(message: _17.QueryAccountInfoResponse): _17.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAccountInfoResponseProtoMsg): _17.QueryAccountInfoResponse;
                toProto(message: _17.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAccountInfoResponse): _17.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                toAminoMsg(message: _16.GenesisState): _16.GenesisStateAminoMsg;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _15.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.BaseAccount;
                fromPartial(object: Partial<_15.BaseAccount>): _15.BaseAccount;
                fromAmino(object: _15.BaseAccountAmino): _15.BaseAccount;
                toAmino(message: _15.BaseAccount): _15.BaseAccountAmino;
                fromAminoMsg(object: _15.BaseAccountAminoMsg): _15.BaseAccount;
                toAminoMsg(message: _15.BaseAccount): _15.BaseAccountAminoMsg;
                fromProtoMsg(message: _15.BaseAccountProtoMsg): _15.BaseAccount;
                toProto(message: _15.BaseAccount): Uint8Array;
                toProtoMsg(message: _15.BaseAccount): _15.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _15.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ModuleAccount;
                fromPartial(object: Partial<_15.ModuleAccount>): _15.ModuleAccount;
                fromAmino(object: _15.ModuleAccountAmino): _15.ModuleAccount;
                toAmino(message: _15.ModuleAccount): _15.ModuleAccountAmino;
                fromAminoMsg(object: _15.ModuleAccountAminoMsg): _15.ModuleAccount;
                toAminoMsg(message: _15.ModuleAccount): _15.ModuleAccountAminoMsg;
                fromProtoMsg(message: _15.ModuleAccountProtoMsg): _15.ModuleAccount;
                toProto(message: _15.ModuleAccount): Uint8Array;
                toProtoMsg(message: _15.ModuleAccount): _15.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _15.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ModuleCredential;
                fromPartial(object: Partial<_15.ModuleCredential>): _15.ModuleCredential;
                fromAmino(object: _15.ModuleCredentialAmino): _15.ModuleCredential;
                toAmino(message: _15.ModuleCredential): _15.ModuleCredentialAmino;
                fromAminoMsg(object: _15.ModuleCredentialAminoMsg): _15.ModuleCredential;
                toAminoMsg(message: _15.ModuleCredential): _15.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _15.ModuleCredentialProtoMsg): _15.ModuleCredential;
                toProto(message: _15.ModuleCredential): Uint8Array;
                toProtoMsg(message: _15.ModuleCredential): _15.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _15.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Params;
                fromPartial(object: Partial<_15.Params>): _15.Params;
                fromAmino(object: _15.ParamsAmino): _15.Params;
                toAmino(message: _15.Params): _15.ParamsAmino;
                fromAminoMsg(object: _15.ParamsAminoMsg): _15.Params;
                toAminoMsg(message: _15.Params): _15.ParamsAminoMsg;
                fromProtoMsg(message: _15.ParamsProtoMsg): _15.Params;
                toProto(message: _15.Params): Uint8Array;
                toProtoMsg(message: _15.Params): _15.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _19.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _19.Module;
                    fromPartial(_: Partial<_19.Module>): _19.Module;
                    fromAmino(_: _19.ModuleAmino): _19.Module;
                    toAmino(_: _19.Module): _19.ModuleAmino;
                    fromAminoMsg(object: _19.ModuleAminoMsg): _19.Module;
                    toAminoMsg(message: _19.Module): _19.ModuleAminoMsg;
                    fromProtoMsg(message: _19.ModuleProtoMsg): _19.Module;
                    toProto(message: _19.Module): Uint8Array;
                    toProtoMsg(message: _19.Module): _19.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _23.QueryGrantsRequest): Promise<_23.QueryGrantsResponse>;
                granterGrants(request: _23.QueryGranterGrantsRequest): Promise<_23.QueryGranterGrantsResponse>;
                granteeGrants(request: _23.QueryGranteeGrantsRequest): Promise<_23.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _24.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _24.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _24.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _24.MsgGrant): {
                        typeUrl: string;
                        value: _24.MsgGrant;
                    };
                    exec(value: _24.MsgExec): {
                        typeUrl: string;
                        value: _24.MsgExec;
                    };
                    revoke(value: _24.MsgRevoke): {
                        typeUrl: string;
                        value: _24.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _24.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _24.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _24.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _24.MsgGrant): {
                        typeUrl: string;
                        value: _24.MsgGrant;
                    };
                    exec(value: _24.MsgExec): {
                        typeUrl: string;
                        value: _24.MsgExec;
                    };
                    revoke(value: _24.MsgRevoke): {
                        typeUrl: string;
                        value: _24.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _24.MsgGrant) => _24.MsgGrantAmino;
                    fromAmino: (object: _24.MsgGrantAmino) => _24.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _24.MsgExec) => _24.MsgExecAmino;
                    fromAmino: (object: _24.MsgExecAmino) => _24.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRevoke) => _24.MsgRevokeAmino;
                    fromAmino: (object: _24.MsgRevokeAmino) => _24.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _24.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgGrant;
                fromPartial(object: Partial<_24.MsgGrant>): _24.MsgGrant;
                fromAmino(object: _24.MsgGrantAmino): _24.MsgGrant;
                toAmino(message: _24.MsgGrant): _24.MsgGrantAmino;
                fromAminoMsg(object: _24.MsgGrantAminoMsg): _24.MsgGrant;
                toAminoMsg(message: _24.MsgGrant): _24.MsgGrantAminoMsg;
                fromProtoMsg(message: _24.MsgGrantProtoMsg): _24.MsgGrant;
                toProto(message: _24.MsgGrant): Uint8Array;
                toProtoMsg(message: _24.MsgGrant): _24.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _24.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgExecResponse;
                fromPartial(object: Partial<_24.MsgExecResponse>): _24.MsgExecResponse;
                fromAmino(object: _24.MsgExecResponseAmino): _24.MsgExecResponse;
                toAmino(message: _24.MsgExecResponse): _24.MsgExecResponseAmino;
                fromAminoMsg(object: _24.MsgExecResponseAminoMsg): _24.MsgExecResponse;
                toAminoMsg(message: _24.MsgExecResponse): _24.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _24.MsgExecResponseProtoMsg): _24.MsgExecResponse;
                toProto(message: _24.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _24.MsgExecResponse): _24.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _24.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgExec;
                fromPartial(object: Partial<_24.MsgExec>): _24.MsgExec;
                fromAmino(object: _24.MsgExecAmino): _24.MsgExec;
                toAmino(message: _24.MsgExec): _24.MsgExecAmino;
                fromAminoMsg(object: _24.MsgExecAminoMsg): _24.MsgExec;
                toAminoMsg(message: _24.MsgExec): _24.MsgExecAminoMsg;
                fromProtoMsg(message: _24.MsgExecProtoMsg): _24.MsgExec;
                toProto(message: _24.MsgExec): Uint8Array;
                toProtoMsg(message: _24.MsgExec): _24.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _24.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgGrantResponse;
                fromPartial(_: Partial<_24.MsgGrantResponse>): _24.MsgGrantResponse;
                fromAmino(_: _24.MsgGrantResponseAmino): _24.MsgGrantResponse;
                toAmino(_: _24.MsgGrantResponse): _24.MsgGrantResponseAmino;
                fromAminoMsg(object: _24.MsgGrantResponseAminoMsg): _24.MsgGrantResponse;
                toAminoMsg(message: _24.MsgGrantResponse): _24.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _24.MsgGrantResponseProtoMsg): _24.MsgGrantResponse;
                toProto(message: _24.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _24.MsgGrantResponse): _24.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _24.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRevoke;
                fromPartial(object: Partial<_24.MsgRevoke>): _24.MsgRevoke;
                fromAmino(object: _24.MsgRevokeAmino): _24.MsgRevoke;
                toAmino(message: _24.MsgRevoke): _24.MsgRevokeAmino;
                fromAminoMsg(object: _24.MsgRevokeAminoMsg): _24.MsgRevoke;
                toAminoMsg(message: _24.MsgRevoke): _24.MsgRevokeAminoMsg;
                fromProtoMsg(message: _24.MsgRevokeProtoMsg): _24.MsgRevoke;
                toProto(message: _24.MsgRevoke): Uint8Array;
                toProtoMsg(message: _24.MsgRevoke): _24.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _24.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRevokeResponse;
                fromPartial(_: Partial<_24.MsgRevokeResponse>): _24.MsgRevokeResponse;
                fromAmino(_: _24.MsgRevokeResponseAmino): _24.MsgRevokeResponse;
                toAmino(_: _24.MsgRevokeResponse): _24.MsgRevokeResponseAmino;
                fromAminoMsg(object: _24.MsgRevokeResponseAminoMsg): _24.MsgRevokeResponse;
                toAminoMsg(message: _24.MsgRevokeResponse): _24.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _24.MsgRevokeResponseProtoMsg): _24.MsgRevokeResponse;
                toProto(message: _24.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRevokeResponse): _24.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _23.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryGrantsRequest;
                fromPartial(object: Partial<_23.QueryGrantsRequest>): _23.QueryGrantsRequest;
                fromAmino(object: _23.QueryGrantsRequestAmino): _23.QueryGrantsRequest;
                toAmino(message: _23.QueryGrantsRequest): _23.QueryGrantsRequestAmino;
                fromAminoMsg(object: _23.QueryGrantsRequestAminoMsg): _23.QueryGrantsRequest;
                toAminoMsg(message: _23.QueryGrantsRequest): _23.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryGrantsRequestProtoMsg): _23.QueryGrantsRequest;
                toProto(message: _23.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryGrantsRequest): _23.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _23.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryGrantsResponse;
                fromPartial(object: Partial<_23.QueryGrantsResponse>): _23.QueryGrantsResponse;
                fromAmino(object: _23.QueryGrantsResponseAmino): _23.QueryGrantsResponse;
                toAmino(message: _23.QueryGrantsResponse): _23.QueryGrantsResponseAmino;
                fromAminoMsg(object: _23.QueryGrantsResponseAminoMsg): _23.QueryGrantsResponse;
                toAminoMsg(message: _23.QueryGrantsResponse): _23.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryGrantsResponseProtoMsg): _23.QueryGrantsResponse;
                toProto(message: _23.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryGrantsResponse): _23.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _23.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_23.QueryGranterGrantsRequest>): _23.QueryGranterGrantsRequest;
                fromAmino(object: _23.QueryGranterGrantsRequestAmino): _23.QueryGranterGrantsRequest;
                toAmino(message: _23.QueryGranterGrantsRequest): _23.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _23.QueryGranterGrantsRequestAminoMsg): _23.QueryGranterGrantsRequest;
                toAminoMsg(message: _23.QueryGranterGrantsRequest): _23.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryGranterGrantsRequestProtoMsg): _23.QueryGranterGrantsRequest;
                toProto(message: _23.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryGranterGrantsRequest): _23.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _23.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_23.QueryGranterGrantsResponse>): _23.QueryGranterGrantsResponse;
                fromAmino(object: _23.QueryGranterGrantsResponseAmino): _23.QueryGranterGrantsResponse;
                toAmino(message: _23.QueryGranterGrantsResponse): _23.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _23.QueryGranterGrantsResponseAminoMsg): _23.QueryGranterGrantsResponse;
                toAminoMsg(message: _23.QueryGranterGrantsResponse): _23.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryGranterGrantsResponseProtoMsg): _23.QueryGranterGrantsResponse;
                toProto(message: _23.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryGranterGrantsResponse): _23.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _23.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_23.QueryGranteeGrantsRequest>): _23.QueryGranteeGrantsRequest;
                fromAmino(object: _23.QueryGranteeGrantsRequestAmino): _23.QueryGranteeGrantsRequest;
                toAmino(message: _23.QueryGranteeGrantsRequest): _23.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _23.QueryGranteeGrantsRequestAminoMsg): _23.QueryGranteeGrantsRequest;
                toAminoMsg(message: _23.QueryGranteeGrantsRequest): _23.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _23.QueryGranteeGrantsRequestProtoMsg): _23.QueryGranteeGrantsRequest;
                toProto(message: _23.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryGranteeGrantsRequest): _23.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _23.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_23.QueryGranteeGrantsResponse>): _23.QueryGranteeGrantsResponse;
                fromAmino(object: _23.QueryGranteeGrantsResponseAmino): _23.QueryGranteeGrantsResponse;
                toAmino(message: _23.QueryGranteeGrantsResponse): _23.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _23.QueryGranteeGrantsResponseAminoMsg): _23.QueryGranteeGrantsResponse;
                toAminoMsg(message: _23.QueryGranteeGrantsResponse): _23.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _23.QueryGranteeGrantsResponseProtoMsg): _23.QueryGranteeGrantsResponse;
                toProto(message: _23.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryGranteeGrantsResponse): _23.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
                fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
                toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
                fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
                toAminoMsg(message: _22.GenesisState): _22.GenesisStateAminoMsg;
                fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
                toProto(message: _22.GenesisState): Uint8Array;
                toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _21.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.EventGrant;
                fromPartial(object: Partial<_21.EventGrant>): _21.EventGrant;
                fromAmino(object: _21.EventGrantAmino): _21.EventGrant;
                toAmino(message: _21.EventGrant): _21.EventGrantAmino;
                fromAminoMsg(object: _21.EventGrantAminoMsg): _21.EventGrant;
                toAminoMsg(message: _21.EventGrant): _21.EventGrantAminoMsg;
                fromProtoMsg(message: _21.EventGrantProtoMsg): _21.EventGrant;
                toProto(message: _21.EventGrant): Uint8Array;
                toProtoMsg(message: _21.EventGrant): _21.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _21.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.EventRevoke;
                fromPartial(object: Partial<_21.EventRevoke>): _21.EventRevoke;
                fromAmino(object: _21.EventRevokeAmino): _21.EventRevoke;
                toAmino(message: _21.EventRevoke): _21.EventRevokeAmino;
                fromAminoMsg(object: _21.EventRevokeAminoMsg): _21.EventRevoke;
                toAminoMsg(message: _21.EventRevoke): _21.EventRevokeAminoMsg;
                fromProtoMsg(message: _21.EventRevokeProtoMsg): _21.EventRevoke;
                toProto(message: _21.EventRevoke): Uint8Array;
                toProtoMsg(message: _21.EventRevoke): _21.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _20.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GenericAuthorization;
                fromPartial(object: Partial<_20.GenericAuthorization>): _20.GenericAuthorization;
                fromAmino(object: _20.GenericAuthorizationAmino): _20.GenericAuthorization;
                toAmino(message: _20.GenericAuthorization): _20.GenericAuthorizationAmino;
                fromAminoMsg(object: _20.GenericAuthorizationAminoMsg): _20.GenericAuthorization;
                toAminoMsg(message: _20.GenericAuthorization): _20.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _20.GenericAuthorizationProtoMsg): _20.GenericAuthorization;
                toProto(message: _20.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _20.GenericAuthorization): _20.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _20.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Grant;
                fromPartial(object: Partial<_20.Grant>): _20.Grant;
                fromAmino(object: _20.GrantAmino): _20.Grant;
                toAmino(message: _20.Grant): _20.GrantAmino;
                fromAminoMsg(object: _20.GrantAminoMsg): _20.Grant;
                toAminoMsg(message: _20.Grant): _20.GrantAminoMsg;
                fromProtoMsg(message: _20.GrantProtoMsg): _20.Grant;
                toProto(message: _20.Grant): Uint8Array;
                toProtoMsg(message: _20.Grant): _20.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _20.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GrantAuthorization;
                fromPartial(object: Partial<_20.GrantAuthorization>): _20.GrantAuthorization;
                fromAmino(object: _20.GrantAuthorizationAmino): _20.GrantAuthorization;
                toAmino(message: _20.GrantAuthorization): _20.GrantAuthorizationAmino;
                fromAminoMsg(object: _20.GrantAuthorizationAminoMsg): _20.GrantAuthorization;
                toAminoMsg(message: _20.GrantAuthorization): _20.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _20.GrantAuthorizationProtoMsg): _20.GrantAuthorization;
                toProto(message: _20.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _20.GrantAuthorization): _20.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _20.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GrantQueueItem;
                fromPartial(object: Partial<_20.GrantQueueItem>): _20.GrantQueueItem;
                fromAmino(object: _20.GrantQueueItemAmino): _20.GrantQueueItem;
                toAmino(message: _20.GrantQueueItem): _20.GrantQueueItemAmino;
                fromAminoMsg(object: _20.GrantQueueItemAminoMsg): _20.GrantQueueItem;
                toAminoMsg(message: _20.GrantQueueItem): _20.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _20.GrantQueueItemProtoMsg): _20.GrantQueueItem;
                toProto(message: _20.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _20.GrantQueueItem): _20.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _28.SendAuthorization | _119.StakeAuthorization | _20.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _26.AppOptionsRequest): Promise<_26.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _26.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.AppOptionsRequest;
                fromPartial(_: Partial<_26.AppOptionsRequest>): _26.AppOptionsRequest;
                fromAmino(_: _26.AppOptionsRequestAmino): _26.AppOptionsRequest;
                toAmino(_: _26.AppOptionsRequest): _26.AppOptionsRequestAmino;
                fromAminoMsg(object: _26.AppOptionsRequestAminoMsg): _26.AppOptionsRequest;
                toAminoMsg(message: _26.AppOptionsRequest): _26.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _26.AppOptionsRequestProtoMsg): _26.AppOptionsRequest;
                toProto(message: _26.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _26.AppOptionsRequest): _26.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _26.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_26.AppOptionsResponse_ModuleOptionsEntry>): _26.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _26.AppOptionsResponse_ModuleOptionsEntryAmino): _26.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _26.AppOptionsResponse_ModuleOptionsEntry): _26.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _26.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _26.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _26.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _26.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _26.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _26.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AppOptionsResponse;
                fromPartial(object: Partial<_26.AppOptionsResponse>): _26.AppOptionsResponse;
                fromAmino(object: _26.AppOptionsResponseAmino): _26.AppOptionsResponse;
                toAmino(message: _26.AppOptionsResponse): _26.AppOptionsResponseAmino;
                fromAminoMsg(object: _26.AppOptionsResponseAminoMsg): _26.AppOptionsResponse;
                toAminoMsg(message: _26.AppOptionsResponse): _26.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _26.AppOptionsResponseProtoMsg): _26.AppOptionsResponse;
                toProto(message: _26.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _26.AppOptionsResponse): _26.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _25.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ModuleOptions;
                fromPartial(object: Partial<_25.ModuleOptions>): _25.ModuleOptions;
                fromAmino(object: _25.ModuleOptionsAmino): _25.ModuleOptions;
                toAmino(message: _25.ModuleOptions): _25.ModuleOptionsAmino;
                fromAminoMsg(object: _25.ModuleOptionsAminoMsg): _25.ModuleOptions;
                toAminoMsg(message: _25.ModuleOptions): _25.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _25.ModuleOptionsProtoMsg): _25.ModuleOptions;
                toProto(message: _25.ModuleOptions): Uint8Array;
                toProtoMsg(message: _25.ModuleOptions): _25.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _25.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_25.ServiceCommandDescriptor_SubCommandsEntry>): _25.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _25.ServiceCommandDescriptor_SubCommandsEntryAmino): _25.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _25.ServiceCommandDescriptor_SubCommandsEntry): _25.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _25.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _25.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _25.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _25.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _25.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _25.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ServiceCommandDescriptor;
                fromPartial(object: Partial<_25.ServiceCommandDescriptor>): _25.ServiceCommandDescriptor;
                fromAmino(object: _25.ServiceCommandDescriptorAmino): _25.ServiceCommandDescriptor;
                toAmino(message: _25.ServiceCommandDescriptor): _25.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _25.ServiceCommandDescriptorAminoMsg): _25.ServiceCommandDescriptor;
                toAminoMsg(message: _25.ServiceCommandDescriptor): _25.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _25.ServiceCommandDescriptorProtoMsg): _25.ServiceCommandDescriptor;
                toProto(message: _25.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _25.ServiceCommandDescriptor): _25.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _25.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_25.RpcCommandOptions_FlagOptionsEntry>): _25.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _25.RpcCommandOptions_FlagOptionsEntryAmino): _25.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _25.RpcCommandOptions_FlagOptionsEntry): _25.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _25.RpcCommandOptions_FlagOptionsEntryAminoMsg): _25.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _25.RpcCommandOptions_FlagOptionsEntryProtoMsg): _25.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _25.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _25.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.RpcCommandOptions;
                fromPartial(object: Partial<_25.RpcCommandOptions>): _25.RpcCommandOptions;
                fromAmino(object: _25.RpcCommandOptionsAmino): _25.RpcCommandOptions;
                toAmino(message: _25.RpcCommandOptions): _25.RpcCommandOptionsAmino;
                fromAminoMsg(object: _25.RpcCommandOptionsAminoMsg): _25.RpcCommandOptions;
                toAminoMsg(message: _25.RpcCommandOptions): _25.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _25.RpcCommandOptionsProtoMsg): _25.RpcCommandOptions;
                toProto(message: _25.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _25.RpcCommandOptions): _25.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _25.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.FlagOptions;
                fromPartial(object: Partial<_25.FlagOptions>): _25.FlagOptions;
                fromAmino(object: _25.FlagOptionsAmino): _25.FlagOptions;
                toAmino(message: _25.FlagOptions): _25.FlagOptionsAmino;
                fromAminoMsg(object: _25.FlagOptionsAminoMsg): _25.FlagOptions;
                toAminoMsg(message: _25.FlagOptions): _25.FlagOptionsAminoMsg;
                fromProtoMsg(message: _25.FlagOptionsProtoMsg): _25.FlagOptions;
                toProto(message: _25.FlagOptions): Uint8Array;
                toProtoMsg(message: _25.FlagOptions): _25.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _25.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.PositionalArgDescriptor;
                fromPartial(object: Partial<_25.PositionalArgDescriptor>): _25.PositionalArgDescriptor;
                fromAmino(object: _25.PositionalArgDescriptorAmino): _25.PositionalArgDescriptor;
                toAmino(message: _25.PositionalArgDescriptor): _25.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _25.PositionalArgDescriptorAminoMsg): _25.PositionalArgDescriptor;
                toAminoMsg(message: _25.PositionalArgDescriptor): _25.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _25.PositionalArgDescriptorProtoMsg): _25.PositionalArgDescriptor;
                toProto(message: _25.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _25.PositionalArgDescriptor): _25.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _27.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.Module;
                    fromPartial(object: Partial<_27.Module>): _27.Module;
                    fromAmino(object: _27.ModuleAmino): _27.Module;
                    toAmino(message: _27.Module): _27.ModuleAmino;
                    fromAminoMsg(object: _27.ModuleAminoMsg): _27.Module;
                    toAminoMsg(message: _27.Module): _27.ModuleAminoMsg;
                    fromProtoMsg(message: _27.ModuleProtoMsg): _27.Module;
                    toProto(message: _27.Module): Uint8Array;
                    toProtoMsg(message: _27.Module): _27.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _31.QueryBalanceRequest): Promise<_31.QueryBalanceResponse>;
                allBalances(request: _31.QueryAllBalancesRequest): Promise<_31.QueryAllBalancesResponse>;
                spendableBalances(request: _31.QuerySpendableBalancesRequest): Promise<_31.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _31.QuerySpendableBalanceByDenomRequest): Promise<_31.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _31.QueryTotalSupplyRequest): Promise<_31.QueryTotalSupplyResponse>;
                supplyOf(request: _31.QuerySupplyOfRequest): Promise<_31.QuerySupplyOfResponse>;
                params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                denomMetadata(request: _31.QueryDenomMetadataRequest): Promise<_31.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _31.QueryDenomsMetadataRequest): Promise<_31.QueryDenomsMetadataResponse>;
                denomOwners(request: _31.QueryDenomOwnersRequest): Promise<_31.QueryDenomOwnersResponse>;
                sendEnabled(request: _31.QuerySendEnabledRequest): Promise<_31.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _32.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _32.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _32.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _32.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _32.MsgSend): {
                        typeUrl: string;
                        value: _32.MsgSend;
                    };
                    multiSend(value: _32.MsgMultiSend): {
                        typeUrl: string;
                        value: _32.MsgMultiSend;
                    };
                    updateParams(value: _32.MsgUpdateParams): {
                        typeUrl: string;
                        value: _32.MsgUpdateParams;
                    };
                    setSendEnabled(value: _32.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _32.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _32.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _32.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _32.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _32.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _32.MsgSend): {
                        typeUrl: string;
                        value: _32.MsgSend;
                    };
                    multiSend(value: _32.MsgMultiSend): {
                        typeUrl: string;
                        value: _32.MsgMultiSend;
                    };
                    updateParams(value: _32.MsgUpdateParams): {
                        typeUrl: string;
                        value: _32.MsgUpdateParams;
                    };
                    setSendEnabled(value: _32.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _32.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _32.MsgSend) => _32.MsgSendAmino;
                    fromAmino: (object: _32.MsgSendAmino) => _32.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _32.MsgMultiSend) => _32.MsgMultiSendAmino;
                    fromAmino: (object: _32.MsgMultiSendAmino) => _32.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _32.MsgUpdateParams) => _32.MsgUpdateParamsAmino;
                    fromAmino: (object: _32.MsgUpdateParamsAmino) => _32.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _32.MsgSetSendEnabled) => _32.MsgSetSendEnabledAmino;
                    fromAmino: (object: _32.MsgSetSendEnabledAmino) => _32.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _32.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgSend;
                fromPartial(object: Partial<_32.MsgSend>): _32.MsgSend;
                fromAmino(object: _32.MsgSendAmino): _32.MsgSend;
                toAmino(message: _32.MsgSend): _32.MsgSendAmino;
                fromAminoMsg(object: _32.MsgSendAminoMsg): _32.MsgSend;
                toAminoMsg(message: _32.MsgSend): _32.MsgSendAminoMsg;
                fromProtoMsg(message: _32.MsgSendProtoMsg): _32.MsgSend;
                toProto(message: _32.MsgSend): Uint8Array;
                toProtoMsg(message: _32.MsgSend): _32.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _32.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgSendResponse;
                fromPartial(_: Partial<_32.MsgSendResponse>): _32.MsgSendResponse;
                fromAmino(_: _32.MsgSendResponseAmino): _32.MsgSendResponse;
                toAmino(_: _32.MsgSendResponse): _32.MsgSendResponseAmino;
                fromAminoMsg(object: _32.MsgSendResponseAminoMsg): _32.MsgSendResponse;
                toAminoMsg(message: _32.MsgSendResponse): _32.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _32.MsgSendResponseProtoMsg): _32.MsgSendResponse;
                toProto(message: _32.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _32.MsgSendResponse): _32.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _32.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgMultiSend;
                fromPartial(object: Partial<_32.MsgMultiSend>): _32.MsgMultiSend;
                fromAmino(object: _32.MsgMultiSendAmino): _32.MsgMultiSend;
                toAmino(message: _32.MsgMultiSend): _32.MsgMultiSendAmino;
                fromAminoMsg(object: _32.MsgMultiSendAminoMsg): _32.MsgMultiSend;
                toAminoMsg(message: _32.MsgMultiSend): _32.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _32.MsgMultiSendProtoMsg): _32.MsgMultiSend;
                toProto(message: _32.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _32.MsgMultiSend): _32.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _32.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgMultiSendResponse;
                fromPartial(_: Partial<_32.MsgMultiSendResponse>): _32.MsgMultiSendResponse;
                fromAmino(_: _32.MsgMultiSendResponseAmino): _32.MsgMultiSendResponse;
                toAmino(_: _32.MsgMultiSendResponse): _32.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _32.MsgMultiSendResponseAminoMsg): _32.MsgMultiSendResponse;
                toAminoMsg(message: _32.MsgMultiSendResponse): _32.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _32.MsgMultiSendResponseProtoMsg): _32.MsgMultiSendResponse;
                toProto(message: _32.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _32.MsgMultiSendResponse): _32.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _32.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgUpdateParams;
                fromPartial(object: Partial<_32.MsgUpdateParams>): _32.MsgUpdateParams;
                fromAmino(object: _32.MsgUpdateParamsAmino): _32.MsgUpdateParams;
                toAmino(message: _32.MsgUpdateParams): _32.MsgUpdateParamsAmino;
                fromAminoMsg(object: _32.MsgUpdateParamsAminoMsg): _32.MsgUpdateParams;
                toAminoMsg(message: _32.MsgUpdateParams): _32.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _32.MsgUpdateParamsProtoMsg): _32.MsgUpdateParams;
                toProto(message: _32.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _32.MsgUpdateParams): _32.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _32.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_32.MsgUpdateParamsResponse>): _32.MsgUpdateParamsResponse;
                fromAmino(_: _32.MsgUpdateParamsResponseAmino): _32.MsgUpdateParamsResponse;
                toAmino(_: _32.MsgUpdateParamsResponse): _32.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _32.MsgUpdateParamsResponseAminoMsg): _32.MsgUpdateParamsResponse;
                toAminoMsg(message: _32.MsgUpdateParamsResponse): _32.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _32.MsgUpdateParamsResponseProtoMsg): _32.MsgUpdateParamsResponse;
                toProto(message: _32.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _32.MsgUpdateParamsResponse): _32.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _32.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgSetSendEnabled;
                fromPartial(object: Partial<_32.MsgSetSendEnabled>): _32.MsgSetSendEnabled;
                fromAmino(object: _32.MsgSetSendEnabledAmino): _32.MsgSetSendEnabled;
                toAmino(message: _32.MsgSetSendEnabled): _32.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _32.MsgSetSendEnabledAminoMsg): _32.MsgSetSendEnabled;
                toAminoMsg(message: _32.MsgSetSendEnabled): _32.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _32.MsgSetSendEnabledProtoMsg): _32.MsgSetSendEnabled;
                toProto(message: _32.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _32.MsgSetSendEnabled): _32.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _32.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_32.MsgSetSendEnabledResponse>): _32.MsgSetSendEnabledResponse;
                fromAmino(_: _32.MsgSetSendEnabledResponseAmino): _32.MsgSetSendEnabledResponse;
                toAmino(_: _32.MsgSetSendEnabledResponse): _32.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _32.MsgSetSendEnabledResponseAminoMsg): _32.MsgSetSendEnabledResponse;
                toAminoMsg(message: _32.MsgSetSendEnabledResponse): _32.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _32.MsgSetSendEnabledResponseProtoMsg): _32.MsgSetSendEnabledResponse;
                toProto(message: _32.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _32.MsgSetSendEnabledResponse): _32.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _31.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryBalanceRequest;
                fromPartial(object: Partial<_31.QueryBalanceRequest>): _31.QueryBalanceRequest;
                fromAmino(object: _31.QueryBalanceRequestAmino): _31.QueryBalanceRequest;
                toAmino(message: _31.QueryBalanceRequest): _31.QueryBalanceRequestAmino;
                fromAminoMsg(object: _31.QueryBalanceRequestAminoMsg): _31.QueryBalanceRequest;
                toAminoMsg(message: _31.QueryBalanceRequest): _31.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _31.QueryBalanceRequestProtoMsg): _31.QueryBalanceRequest;
                toProto(message: _31.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _31.QueryBalanceRequest): _31.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _31.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryBalanceResponse;
                fromPartial(object: Partial<_31.QueryBalanceResponse>): _31.QueryBalanceResponse;
                fromAmino(object: _31.QueryBalanceResponseAmino): _31.QueryBalanceResponse;
                toAmino(message: _31.QueryBalanceResponse): _31.QueryBalanceResponseAmino;
                fromAminoMsg(object: _31.QueryBalanceResponseAminoMsg): _31.QueryBalanceResponse;
                toAminoMsg(message: _31.QueryBalanceResponse): _31.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _31.QueryBalanceResponseProtoMsg): _31.QueryBalanceResponse;
                toProto(message: _31.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _31.QueryBalanceResponse): _31.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _31.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAllBalancesRequest;
                fromPartial(object: Partial<_31.QueryAllBalancesRequest>): _31.QueryAllBalancesRequest;
                fromAmino(object: _31.QueryAllBalancesRequestAmino): _31.QueryAllBalancesRequest;
                toAmino(message: _31.QueryAllBalancesRequest): _31.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _31.QueryAllBalancesRequestAminoMsg): _31.QueryAllBalancesRequest;
                toAminoMsg(message: _31.QueryAllBalancesRequest): _31.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _31.QueryAllBalancesRequestProtoMsg): _31.QueryAllBalancesRequest;
                toProto(message: _31.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _31.QueryAllBalancesRequest): _31.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _31.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAllBalancesResponse;
                fromPartial(object: Partial<_31.QueryAllBalancesResponse>): _31.QueryAllBalancesResponse;
                fromAmino(object: _31.QueryAllBalancesResponseAmino): _31.QueryAllBalancesResponse;
                toAmino(message: _31.QueryAllBalancesResponse): _31.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _31.QueryAllBalancesResponseAminoMsg): _31.QueryAllBalancesResponse;
                toAminoMsg(message: _31.QueryAllBalancesResponse): _31.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _31.QueryAllBalancesResponseProtoMsg): _31.QueryAllBalancesResponse;
                toProto(message: _31.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _31.QueryAllBalancesResponse): _31.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _31.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_31.QuerySpendableBalancesRequest>): _31.QuerySpendableBalancesRequest;
                fromAmino(object: _31.QuerySpendableBalancesRequestAmino): _31.QuerySpendableBalancesRequest;
                toAmino(message: _31.QuerySpendableBalancesRequest): _31.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _31.QuerySpendableBalancesRequestAminoMsg): _31.QuerySpendableBalancesRequest;
                toAminoMsg(message: _31.QuerySpendableBalancesRequest): _31.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _31.QuerySpendableBalancesRequestProtoMsg): _31.QuerySpendableBalancesRequest;
                toProto(message: _31.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _31.QuerySpendableBalancesRequest): _31.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _31.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_31.QuerySpendableBalancesResponse>): _31.QuerySpendableBalancesResponse;
                fromAmino(object: _31.QuerySpendableBalancesResponseAmino): _31.QuerySpendableBalancesResponse;
                toAmino(message: _31.QuerySpendableBalancesResponse): _31.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _31.QuerySpendableBalancesResponseAminoMsg): _31.QuerySpendableBalancesResponse;
                toAminoMsg(message: _31.QuerySpendableBalancesResponse): _31.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _31.QuerySpendableBalancesResponseProtoMsg): _31.QuerySpendableBalancesResponse;
                toProto(message: _31.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _31.QuerySpendableBalancesResponse): _31.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _31.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_31.QuerySpendableBalanceByDenomRequest>): _31.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _31.QuerySpendableBalanceByDenomRequestAmino): _31.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _31.QuerySpendableBalanceByDenomRequest): _31.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _31.QuerySpendableBalanceByDenomRequestAminoMsg): _31.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _31.QuerySpendableBalanceByDenomRequest): _31.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _31.QuerySpendableBalanceByDenomRequestProtoMsg): _31.QuerySpendableBalanceByDenomRequest;
                toProto(message: _31.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _31.QuerySpendableBalanceByDenomRequest): _31.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _31.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_31.QuerySpendableBalanceByDenomResponse>): _31.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _31.QuerySpendableBalanceByDenomResponseAmino): _31.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _31.QuerySpendableBalanceByDenomResponse): _31.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _31.QuerySpendableBalanceByDenomResponseAminoMsg): _31.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _31.QuerySpendableBalanceByDenomResponse): _31.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _31.QuerySpendableBalanceByDenomResponseProtoMsg): _31.QuerySpendableBalanceByDenomResponse;
                toProto(message: _31.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _31.QuerySpendableBalanceByDenomResponse): _31.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _31.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_31.QueryTotalSupplyRequest>): _31.QueryTotalSupplyRequest;
                fromAmino(object: _31.QueryTotalSupplyRequestAmino): _31.QueryTotalSupplyRequest;
                toAmino(message: _31.QueryTotalSupplyRequest): _31.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _31.QueryTotalSupplyRequestAminoMsg): _31.QueryTotalSupplyRequest;
                toAminoMsg(message: _31.QueryTotalSupplyRequest): _31.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _31.QueryTotalSupplyRequestProtoMsg): _31.QueryTotalSupplyRequest;
                toProto(message: _31.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _31.QueryTotalSupplyRequest): _31.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _31.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_31.QueryTotalSupplyResponse>): _31.QueryTotalSupplyResponse;
                fromAmino(object: _31.QueryTotalSupplyResponseAmino): _31.QueryTotalSupplyResponse;
                toAmino(message: _31.QueryTotalSupplyResponse): _31.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _31.QueryTotalSupplyResponseAminoMsg): _31.QueryTotalSupplyResponse;
                toAminoMsg(message: _31.QueryTotalSupplyResponse): _31.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _31.QueryTotalSupplyResponseProtoMsg): _31.QueryTotalSupplyResponse;
                toProto(message: _31.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _31.QueryTotalSupplyResponse): _31.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _31.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySupplyOfRequest;
                fromPartial(object: Partial<_31.QuerySupplyOfRequest>): _31.QuerySupplyOfRequest;
                fromAmino(object: _31.QuerySupplyOfRequestAmino): _31.QuerySupplyOfRequest;
                toAmino(message: _31.QuerySupplyOfRequest): _31.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _31.QuerySupplyOfRequestAminoMsg): _31.QuerySupplyOfRequest;
                toAminoMsg(message: _31.QuerySupplyOfRequest): _31.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _31.QuerySupplyOfRequestProtoMsg): _31.QuerySupplyOfRequest;
                toProto(message: _31.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _31.QuerySupplyOfRequest): _31.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _31.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySupplyOfResponse;
                fromPartial(object: Partial<_31.QuerySupplyOfResponse>): _31.QuerySupplyOfResponse;
                fromAmino(object: _31.QuerySupplyOfResponseAmino): _31.QuerySupplyOfResponse;
                toAmino(message: _31.QuerySupplyOfResponse): _31.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _31.QuerySupplyOfResponseAminoMsg): _31.QuerySupplyOfResponse;
                toAminoMsg(message: _31.QuerySupplyOfResponse): _31.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _31.QuerySupplyOfResponseProtoMsg): _31.QuerySupplyOfResponse;
                toProto(message: _31.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _31.QuerySupplyOfResponse): _31.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _31.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryParamsRequest;
                fromPartial(_: Partial<_31.QueryParamsRequest>): _31.QueryParamsRequest;
                fromAmino(_: _31.QueryParamsRequestAmino): _31.QueryParamsRequest;
                toAmino(_: _31.QueryParamsRequest): _31.QueryParamsRequestAmino;
                fromAminoMsg(object: _31.QueryParamsRequestAminoMsg): _31.QueryParamsRequest;
                toAminoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryParamsRequestProtoMsg): _31.QueryParamsRequest;
                toProto(message: _31.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _31.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryParamsResponse;
                fromPartial(object: Partial<_31.QueryParamsResponse>): _31.QueryParamsResponse;
                fromAmino(object: _31.QueryParamsResponseAmino): _31.QueryParamsResponse;
                toAmino(message: _31.QueryParamsResponse): _31.QueryParamsResponseAmino;
                fromAminoMsg(object: _31.QueryParamsResponseAminoMsg): _31.QueryParamsResponse;
                toAminoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryParamsResponseProtoMsg): _31.QueryParamsResponse;
                toProto(message: _31.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _31.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_31.QueryDenomsMetadataRequest>): _31.QueryDenomsMetadataRequest;
                fromAmino(object: _31.QueryDenomsMetadataRequestAmino): _31.QueryDenomsMetadataRequest;
                toAmino(message: _31.QueryDenomsMetadataRequest): _31.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _31.QueryDenomsMetadataRequestAminoMsg): _31.QueryDenomsMetadataRequest;
                toAminoMsg(message: _31.QueryDenomsMetadataRequest): _31.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDenomsMetadataRequestProtoMsg): _31.QueryDenomsMetadataRequest;
                toProto(message: _31.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDenomsMetadataRequest): _31.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _31.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_31.QueryDenomsMetadataResponse>): _31.QueryDenomsMetadataResponse;
                fromAmino(object: _31.QueryDenomsMetadataResponseAmino): _31.QueryDenomsMetadataResponse;
                toAmino(message: _31.QueryDenomsMetadataResponse): _31.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _31.QueryDenomsMetadataResponseAminoMsg): _31.QueryDenomsMetadataResponse;
                toAminoMsg(message: _31.QueryDenomsMetadataResponse): _31.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDenomsMetadataResponseProtoMsg): _31.QueryDenomsMetadataResponse;
                toProto(message: _31.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDenomsMetadataResponse): _31.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _31.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_31.QueryDenomMetadataRequest>): _31.QueryDenomMetadataRequest;
                fromAmino(object: _31.QueryDenomMetadataRequestAmino): _31.QueryDenomMetadataRequest;
                toAmino(message: _31.QueryDenomMetadataRequest): _31.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _31.QueryDenomMetadataRequestAminoMsg): _31.QueryDenomMetadataRequest;
                toAminoMsg(message: _31.QueryDenomMetadataRequest): _31.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDenomMetadataRequestProtoMsg): _31.QueryDenomMetadataRequest;
                toProto(message: _31.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDenomMetadataRequest): _31.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _31.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_31.QueryDenomMetadataResponse>): _31.QueryDenomMetadataResponse;
                fromAmino(object: _31.QueryDenomMetadataResponseAmino): _31.QueryDenomMetadataResponse;
                toAmino(message: _31.QueryDenomMetadataResponse): _31.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _31.QueryDenomMetadataResponseAminoMsg): _31.QueryDenomMetadataResponse;
                toAminoMsg(message: _31.QueryDenomMetadataResponse): _31.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDenomMetadataResponseProtoMsg): _31.QueryDenomMetadataResponse;
                toProto(message: _31.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDenomMetadataResponse): _31.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _31.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_31.QueryDenomOwnersRequest>): _31.QueryDenomOwnersRequest;
                fromAmino(object: _31.QueryDenomOwnersRequestAmino): _31.QueryDenomOwnersRequest;
                toAmino(message: _31.QueryDenomOwnersRequest): _31.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _31.QueryDenomOwnersRequestAminoMsg): _31.QueryDenomOwnersRequest;
                toAminoMsg(message: _31.QueryDenomOwnersRequest): _31.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDenomOwnersRequestProtoMsg): _31.QueryDenomOwnersRequest;
                toProto(message: _31.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDenomOwnersRequest): _31.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _31.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.DenomOwner;
                fromPartial(object: Partial<_31.DenomOwner>): _31.DenomOwner;
                fromAmino(object: _31.DenomOwnerAmino): _31.DenomOwner;
                toAmino(message: _31.DenomOwner): _31.DenomOwnerAmino;
                fromAminoMsg(object: _31.DenomOwnerAminoMsg): _31.DenomOwner;
                toAminoMsg(message: _31.DenomOwner): _31.DenomOwnerAminoMsg;
                fromProtoMsg(message: _31.DenomOwnerProtoMsg): _31.DenomOwner;
                toProto(message: _31.DenomOwner): Uint8Array;
                toProtoMsg(message: _31.DenomOwner): _31.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _31.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_31.QueryDenomOwnersResponse>): _31.QueryDenomOwnersResponse;
                fromAmino(object: _31.QueryDenomOwnersResponseAmino): _31.QueryDenomOwnersResponse;
                toAmino(message: _31.QueryDenomOwnersResponse): _31.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _31.QueryDenomOwnersResponseAminoMsg): _31.QueryDenomOwnersResponse;
                toAminoMsg(message: _31.QueryDenomOwnersResponse): _31.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDenomOwnersResponseProtoMsg): _31.QueryDenomOwnersResponse;
                toProto(message: _31.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDenomOwnersResponse): _31.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _31.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySendEnabledRequest;
                fromPartial(object: Partial<_31.QuerySendEnabledRequest>): _31.QuerySendEnabledRequest;
                fromAmino(object: _31.QuerySendEnabledRequestAmino): _31.QuerySendEnabledRequest;
                toAmino(message: _31.QuerySendEnabledRequest): _31.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _31.QuerySendEnabledRequestAminoMsg): _31.QuerySendEnabledRequest;
                toAminoMsg(message: _31.QuerySendEnabledRequest): _31.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _31.QuerySendEnabledRequestProtoMsg): _31.QuerySendEnabledRequest;
                toProto(message: _31.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _31.QuerySendEnabledRequest): _31.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _31.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QuerySendEnabledResponse;
                fromPartial(object: Partial<_31.QuerySendEnabledResponse>): _31.QuerySendEnabledResponse;
                fromAmino(object: _31.QuerySendEnabledResponseAmino): _31.QuerySendEnabledResponse;
                toAmino(message: _31.QuerySendEnabledResponse): _31.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _31.QuerySendEnabledResponseAminoMsg): _31.QuerySendEnabledResponse;
                toAminoMsg(message: _31.QuerySendEnabledResponse): _31.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _31.QuerySendEnabledResponseProtoMsg): _31.QuerySendEnabledResponse;
                toProto(message: _31.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _31.QuerySendEnabledResponse): _31.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _30.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _30.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Balance;
                fromPartial(object: Partial<_30.Balance>): _30.Balance;
                fromAmino(object: _30.BalanceAmino): _30.Balance;
                toAmino(message: _30.Balance): _30.BalanceAmino;
                fromAminoMsg(object: _30.BalanceAminoMsg): _30.Balance;
                toAminoMsg(message: _30.Balance): _30.BalanceAminoMsg;
                fromProtoMsg(message: _30.BalanceProtoMsg): _30.Balance;
                toProto(message: _30.Balance): Uint8Array;
                toProtoMsg(message: _30.Balance): _30.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _29.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Params;
                fromPartial(object: Partial<_29.Params>): _29.Params;
                fromAmino(object: _29.ParamsAmino): _29.Params;
                toAmino(message: _29.Params): _29.ParamsAmino;
                fromAminoMsg(object: _29.ParamsAminoMsg): _29.Params;
                toAminoMsg(message: _29.Params): _29.ParamsAminoMsg;
                fromProtoMsg(message: _29.ParamsProtoMsg): _29.Params;
                toProto(message: _29.Params): Uint8Array;
                toProtoMsg(message: _29.Params): _29.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _29.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.SendEnabled;
                fromPartial(object: Partial<_29.SendEnabled>): _29.SendEnabled;
                fromAmino(object: _29.SendEnabledAmino): _29.SendEnabled;
                toAmino(message: _29.SendEnabled): _29.SendEnabledAmino;
                fromAminoMsg(object: _29.SendEnabledAminoMsg): _29.SendEnabled;
                toAminoMsg(message: _29.SendEnabled): _29.SendEnabledAminoMsg;
                fromProtoMsg(message: _29.SendEnabledProtoMsg): _29.SendEnabled;
                toProto(message: _29.SendEnabled): Uint8Array;
                toProtoMsg(message: _29.SendEnabled): _29.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _29.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Input;
                fromPartial(object: Partial<_29.Input>): _29.Input;
                fromAmino(object: _29.InputAmino): _29.Input;
                toAmino(message: _29.Input): _29.InputAmino;
                fromAminoMsg(object: _29.InputAminoMsg): _29.Input;
                toAminoMsg(message: _29.Input): _29.InputAminoMsg;
                fromProtoMsg(message: _29.InputProtoMsg): _29.Input;
                toProto(message: _29.Input): Uint8Array;
                toProtoMsg(message: _29.Input): _29.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _29.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Output;
                fromPartial(object: Partial<_29.Output>): _29.Output;
                fromAmino(object: _29.OutputAmino): _29.Output;
                toAmino(message: _29.Output): _29.OutputAmino;
                fromAminoMsg(object: _29.OutputAminoMsg): _29.Output;
                toAminoMsg(message: _29.Output): _29.OutputAminoMsg;
                fromProtoMsg(message: _29.OutputProtoMsg): _29.Output;
                toProto(message: _29.Output): Uint8Array;
                toProtoMsg(message: _29.Output): _29.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _29.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Supply;
                fromPartial(object: Partial<_29.Supply>): _29.Supply;
                fromAmino(object: _29.SupplyAmino): _29.Supply;
                toAmino(message: _29.Supply): _29.SupplyAmino;
                fromAminoMsg(object: _29.SupplyAminoMsg): _29.Supply;
                toAminoMsg(message: _29.Supply): _29.SupplyAminoMsg;
                fromProtoMsg(message: _29.SupplyProtoMsg): _29.Supply;
                toProto(message: _29.Supply): Uint8Array;
                toProtoMsg(message: _29.Supply): _29.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _29.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.DenomUnit;
                fromPartial(object: Partial<_29.DenomUnit>): _29.DenomUnit;
                fromAmino(object: _29.DenomUnitAmino): _29.DenomUnit;
                toAmino(message: _29.DenomUnit): _29.DenomUnitAmino;
                fromAminoMsg(object: _29.DenomUnitAminoMsg): _29.DenomUnit;
                toAminoMsg(message: _29.DenomUnit): _29.DenomUnitAminoMsg;
                fromProtoMsg(message: _29.DenomUnitProtoMsg): _29.DenomUnit;
                toProto(message: _29.DenomUnit): Uint8Array;
                toProtoMsg(message: _29.DenomUnit): _29.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _29.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Metadata;
                fromPartial(object: Partial<_29.Metadata>): _29.Metadata;
                fromAmino(object: _29.MetadataAmino): _29.Metadata;
                toAmino(message: _29.Metadata): _29.MetadataAmino;
                fromAminoMsg(object: _29.MetadataAminoMsg): _29.Metadata;
                toAminoMsg(message: _29.Metadata): _29.MetadataAminoMsg;
                fromProtoMsg(message: _29.MetadataProtoMsg): _29.Metadata;
                toProto(message: _29.Metadata): Uint8Array;
                toProtoMsg(message: _29.Metadata): _29.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _28.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.SendAuthorization;
                fromPartial(object: Partial<_28.SendAuthorization>): _28.SendAuthorization;
                fromAmino(object: _28.SendAuthorizationAmino): _28.SendAuthorization;
                toAmino(message: _28.SendAuthorization): _28.SendAuthorizationAmino;
                fromAminoMsg(object: _28.SendAuthorizationAminoMsg): _28.SendAuthorization;
                toAminoMsg(message: _28.SendAuthorization): _28.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _28.SendAuthorizationProtoMsg): _28.SendAuthorization;
                toProto(message: _28.SendAuthorization): Uint8Array;
                toProtoMsg(message: _28.SendAuthorization): _28.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _33.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.TxResponse;
                    fromPartial(object: Partial<_33.TxResponse>): _33.TxResponse;
                    fromAmino(object: _33.TxResponseAmino): _33.TxResponse;
                    toAmino(message: _33.TxResponse): _33.TxResponseAmino;
                    fromAminoMsg(object: _33.TxResponseAminoMsg): _33.TxResponse;
                    toAminoMsg(message: _33.TxResponse): _33.TxResponseAminoMsg;
                    fromProtoMsg(message: _33.TxResponseProtoMsg): _33.TxResponse;
                    toProto(message: _33.TxResponse): Uint8Array;
                    toProtoMsg(message: _33.TxResponse): _33.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _33.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ABCIMessageLog;
                    fromPartial(object: Partial<_33.ABCIMessageLog>): _33.ABCIMessageLog;
                    fromAmino(object: _33.ABCIMessageLogAmino): _33.ABCIMessageLog;
                    toAmino(message: _33.ABCIMessageLog): _33.ABCIMessageLogAmino;
                    fromAminoMsg(object: _33.ABCIMessageLogAminoMsg): _33.ABCIMessageLog;
                    toAminoMsg(message: _33.ABCIMessageLog): _33.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _33.ABCIMessageLogProtoMsg): _33.ABCIMessageLog;
                    toProto(message: _33.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _33.ABCIMessageLog): _33.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _33.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.StringEvent;
                    fromPartial(object: Partial<_33.StringEvent>): _33.StringEvent;
                    fromAmino(object: _33.StringEventAmino): _33.StringEvent;
                    toAmino(message: _33.StringEvent): _33.StringEventAmino;
                    fromAminoMsg(object: _33.StringEventAminoMsg): _33.StringEvent;
                    toAminoMsg(message: _33.StringEvent): _33.StringEventAminoMsg;
                    fromProtoMsg(message: _33.StringEventProtoMsg): _33.StringEvent;
                    toProto(message: _33.StringEvent): Uint8Array;
                    toProtoMsg(message: _33.StringEvent): _33.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _33.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.Attribute;
                    fromPartial(object: Partial<_33.Attribute>): _33.Attribute;
                    fromAmino(object: _33.AttributeAmino): _33.Attribute;
                    toAmino(message: _33.Attribute): _33.AttributeAmino;
                    fromAminoMsg(object: _33.AttributeAminoMsg): _33.Attribute;
                    toAminoMsg(message: _33.Attribute): _33.AttributeAminoMsg;
                    fromProtoMsg(message: _33.AttributeProtoMsg): _33.Attribute;
                    toProto(message: _33.Attribute): Uint8Array;
                    toProtoMsg(message: _33.Attribute): _33.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _33.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GasInfo;
                    fromPartial(object: Partial<_33.GasInfo>): _33.GasInfo;
                    fromAmino(object: _33.GasInfoAmino): _33.GasInfo;
                    toAmino(message: _33.GasInfo): _33.GasInfoAmino;
                    fromAminoMsg(object: _33.GasInfoAminoMsg): _33.GasInfo;
                    toAminoMsg(message: _33.GasInfo): _33.GasInfoAminoMsg;
                    fromProtoMsg(message: _33.GasInfoProtoMsg): _33.GasInfo;
                    toProto(message: _33.GasInfo): Uint8Array;
                    toProtoMsg(message: _33.GasInfo): _33.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _33.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.Result;
                    fromPartial(object: Partial<_33.Result>): _33.Result;
                    fromAmino(object: _33.ResultAmino): _33.Result;
                    toAmino(message: _33.Result): _33.ResultAmino;
                    fromAminoMsg(object: _33.ResultAminoMsg): _33.Result;
                    toAminoMsg(message: _33.Result): _33.ResultAminoMsg;
                    fromProtoMsg(message: _33.ResultProtoMsg): _33.Result;
                    toProto(message: _33.Result): Uint8Array;
                    toProtoMsg(message: _33.Result): _33.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _33.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SimulationResponse;
                    fromPartial(object: Partial<_33.SimulationResponse>): _33.SimulationResponse;
                    fromAmino(object: _33.SimulationResponseAmino): _33.SimulationResponse;
                    toAmino(message: _33.SimulationResponse): _33.SimulationResponseAmino;
                    fromAminoMsg(object: _33.SimulationResponseAminoMsg): _33.SimulationResponse;
                    toAminoMsg(message: _33.SimulationResponse): _33.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _33.SimulationResponseProtoMsg): _33.SimulationResponse;
                    toProto(message: _33.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _33.SimulationResponse): _33.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _33.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.MsgData;
                    fromPartial(object: Partial<_33.MsgData>): _33.MsgData;
                    fromAmino(object: _33.MsgDataAmino): _33.MsgData;
                    toAmino(message: _33.MsgData): _33.MsgDataAmino;
                    fromAminoMsg(object: _33.MsgDataAminoMsg): _33.MsgData;
                    toAminoMsg(message: _33.MsgData): _33.MsgDataAminoMsg;
                    fromProtoMsg(message: _33.MsgDataProtoMsg): _33.MsgData;
                    toProto(message: _33.MsgData): Uint8Array;
                    toProtoMsg(message: _33.MsgData): _33.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _33.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.TxMsgData;
                    fromPartial(object: Partial<_33.TxMsgData>): _33.TxMsgData;
                    fromAmino(object: _33.TxMsgDataAmino): _33.TxMsgData;
                    toAmino(message: _33.TxMsgData): _33.TxMsgDataAmino;
                    fromAminoMsg(object: _33.TxMsgDataAminoMsg): _33.TxMsgData;
                    toAminoMsg(message: _33.TxMsgData): _33.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _33.TxMsgDataProtoMsg): _33.TxMsgData;
                    toProto(message: _33.TxMsgData): Uint8Array;
                    toProtoMsg(message: _33.TxMsgData): _33.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _33.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.SearchTxsResult;
                    fromPartial(object: Partial<_33.SearchTxsResult>): _33.SearchTxsResult;
                    fromAmino(object: _33.SearchTxsResultAmino): _33.SearchTxsResult;
                    toAmino(message: _33.SearchTxsResult): _33.SearchTxsResultAmino;
                    fromAminoMsg(object: _33.SearchTxsResultAminoMsg): _33.SearchTxsResult;
                    toAminoMsg(message: _33.SearchTxsResult): _33.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _33.SearchTxsResultProtoMsg): _33.SearchTxsResult;
                    toProto(message: _33.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _33.SearchTxsResult): _33.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _34.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Pairs;
                    fromPartial(object: Partial<_34.Pairs>): _34.Pairs;
                    fromAmino(object: _34.PairsAmino): _34.Pairs;
                    toAmino(message: _34.Pairs): _34.PairsAmino;
                    fromAminoMsg(object: _34.PairsAminoMsg): _34.Pairs;
                    toAminoMsg(message: _34.Pairs): _34.PairsAminoMsg;
                    fromProtoMsg(message: _34.PairsProtoMsg): _34.Pairs;
                    toProto(message: _34.Pairs): Uint8Array;
                    toProtoMsg(message: _34.Pairs): _34.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _34.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Pair;
                    fromPartial(object: Partial<_34.Pair>): _34.Pair;
                    fromAmino(object: _34.PairAmino): _34.Pair;
                    toAmino(message: _34.Pair): _34.PairAmino;
                    fromAminoMsg(object: _34.PairAminoMsg): _34.Pair;
                    toAminoMsg(message: _34.Pair): _34.PairAminoMsg;
                    fromProtoMsg(message: _34.PairProtoMsg): _34.Pair;
                    toProto(message: _34.Pair): Uint8Array;
                    toProtoMsg(message: _34.Pair): _34.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _222.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _35.ConfigRequest): Promise<_35.ConfigResponse>;
                };
                LCDQueryClient: typeof _201.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _35.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.ConfigRequest;
                    fromPartial(_: Partial<_35.ConfigRequest>): _35.ConfigRequest;
                    fromAmino(_: _35.ConfigRequestAmino): _35.ConfigRequest;
                    toAmino(_: _35.ConfigRequest): _35.ConfigRequestAmino;
                    fromAminoMsg(object: _35.ConfigRequestAminoMsg): _35.ConfigRequest;
                    toAminoMsg(message: _35.ConfigRequest): _35.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _35.ConfigRequestProtoMsg): _35.ConfigRequest;
                    toProto(message: _35.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _35.ConfigRequest): _35.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _35.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ConfigResponse;
                    fromPartial(object: Partial<_35.ConfigResponse>): _35.ConfigResponse;
                    fromAmino(object: _35.ConfigResponseAmino): _35.ConfigResponse;
                    toAmino(message: _35.ConfigResponse): _35.ConfigResponseAmino;
                    fromAminoMsg(object: _35.ConfigResponseAminoMsg): _35.ConfigResponse;
                    toAminoMsg(message: _35.ConfigResponse): _35.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _35.ConfigResponseProtoMsg): _35.ConfigResponse;
                    toProto(message: _35.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _35.ConfigResponse): _35.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _36.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.PageRequest;
                    fromPartial(object: Partial<_36.PageRequest>): _36.PageRequest;
                    fromAmino(object: _36.PageRequestAmino): _36.PageRequest;
                    toAmino(message: _36.PageRequest): _36.PageRequestAmino;
                    fromAminoMsg(object: _36.PageRequestAminoMsg): _36.PageRequest;
                    toAminoMsg(message: _36.PageRequest): _36.PageRequestAminoMsg;
                    fromProtoMsg(message: _36.PageRequestProtoMsg): _36.PageRequest;
                    toProto(message: _36.PageRequest): Uint8Array;
                    toProtoMsg(message: _36.PageRequest): _36.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _36.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.PageResponse;
                    fromPartial(object: Partial<_36.PageResponse>): _36.PageResponse;
                    fromAmino(object: _36.PageResponseAmino): _36.PageResponse;
                    toAmino(message: _36.PageResponse): _36.PageResponseAmino;
                    fromAminoMsg(object: _36.PageResponseAminoMsg): _36.PageResponse;
                    toAminoMsg(message: _36.PageResponse): _36.PageResponseAminoMsg;
                    fromProtoMsg(message: _36.PageResponseProtoMsg): _36.PageResponse;
                    toProto(message: _36.PageResponse): Uint8Array;
                    toProtoMsg(message: _36.PageResponse): _36.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _37.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_37.ListAllInterfacesRequest>): _37.ListAllInterfacesRequest;
                    fromAmino(_: _37.ListAllInterfacesRequestAmino): _37.ListAllInterfacesRequest;
                    toAmino(_: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesRequestAminoMsg): _37.ListAllInterfacesRequest;
                    toAminoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesRequestProtoMsg): _37.ListAllInterfacesRequest;
                    toProto(message: _37.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _37.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_37.ListAllInterfacesResponse>): _37.ListAllInterfacesResponse;
                    fromAmino(object: _37.ListAllInterfacesResponseAmino): _37.ListAllInterfacesResponse;
                    toAmino(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesResponseAminoMsg): _37.ListAllInterfacesResponse;
                    toAminoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesResponseProtoMsg): _37.ListAllInterfacesResponse;
                    toProto(message: _37.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListImplementationsRequest;
                    fromPartial(object: Partial<_37.ListImplementationsRequest>): _37.ListImplementationsRequest;
                    fromAmino(object: _37.ListImplementationsRequestAmino): _37.ListImplementationsRequest;
                    toAmino(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _37.ListImplementationsRequestAminoMsg): _37.ListImplementationsRequest;
                    toAminoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsRequestProtoMsg): _37.ListImplementationsRequest;
                    toProto(message: _37.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListImplementationsResponse;
                    fromPartial(object: Partial<_37.ListImplementationsResponse>): _37.ListImplementationsResponse;
                    fromAmino(object: _37.ListImplementationsResponseAmino): _37.ListImplementationsResponse;
                    toAmino(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _37.ListImplementationsResponseAminoMsg): _37.ListImplementationsResponse;
                    toAminoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsResponseProtoMsg): _37.ListImplementationsResponse;
                    toProto(message: _37.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.AppDescriptor;
                    fromPartial(object: Partial<_38.AppDescriptor>): _38.AppDescriptor;
                    fromAmino(object: _38.AppDescriptorAmino): _38.AppDescriptor;
                    toAmino(message: _38.AppDescriptor): _38.AppDescriptorAmino;
                    fromAminoMsg(object: _38.AppDescriptorAminoMsg): _38.AppDescriptor;
                    toAminoMsg(message: _38.AppDescriptor): _38.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AppDescriptorProtoMsg): _38.AppDescriptor;
                    toProto(message: _38.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AppDescriptor): _38.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _38.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.TxDescriptor;
                    fromPartial(object: Partial<_38.TxDescriptor>): _38.TxDescriptor;
                    fromAmino(object: _38.TxDescriptorAmino): _38.TxDescriptor;
                    toAmino(message: _38.TxDescriptor): _38.TxDescriptorAmino;
                    fromAminoMsg(object: _38.TxDescriptorAminoMsg): _38.TxDescriptor;
                    toAminoMsg(message: _38.TxDescriptor): _38.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _38.TxDescriptorProtoMsg): _38.TxDescriptor;
                    toProto(message: _38.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _38.TxDescriptor): _38.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.AuthnDescriptor;
                    fromPartial(object: Partial<_38.AuthnDescriptor>): _38.AuthnDescriptor;
                    fromAmino(object: _38.AuthnDescriptorAmino): _38.AuthnDescriptor;
                    toAmino(message: _38.AuthnDescriptor): _38.AuthnDescriptorAmino;
                    fromAminoMsg(object: _38.AuthnDescriptorAminoMsg): _38.AuthnDescriptor;
                    toAminoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AuthnDescriptorProtoMsg): _38.AuthnDescriptor;
                    toProto(message: _38.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _38.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.SigningModeDescriptor;
                    fromPartial(object: Partial<_38.SigningModeDescriptor>): _38.SigningModeDescriptor;
                    fromAmino(object: _38.SigningModeDescriptorAmino): _38.SigningModeDescriptor;
                    toAmino(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _38.SigningModeDescriptorAminoMsg): _38.SigningModeDescriptor;
                    toAminoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _38.SigningModeDescriptorProtoMsg): _38.SigningModeDescriptor;
                    toProto(message: _38.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ChainDescriptor;
                    fromPartial(object: Partial<_38.ChainDescriptor>): _38.ChainDescriptor;
                    fromAmino(object: _38.ChainDescriptorAmino): _38.ChainDescriptor;
                    toAmino(message: _38.ChainDescriptor): _38.ChainDescriptorAmino;
                    fromAminoMsg(object: _38.ChainDescriptorAminoMsg): _38.ChainDescriptor;
                    toAminoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ChainDescriptorProtoMsg): _38.ChainDescriptor;
                    toProto(message: _38.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _38.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.CodecDescriptor;
                    fromPartial(object: Partial<_38.CodecDescriptor>): _38.CodecDescriptor;
                    fromAmino(object: _38.CodecDescriptorAmino): _38.CodecDescriptor;
                    toAmino(message: _38.CodecDescriptor): _38.CodecDescriptorAmino;
                    fromAminoMsg(object: _38.CodecDescriptorAminoMsg): _38.CodecDescriptor;
                    toAminoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _38.CodecDescriptorProtoMsg): _38.CodecDescriptor;
                    toProto(message: _38.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceDescriptor;
                    fromPartial(object: Partial<_38.InterfaceDescriptor>): _38.InterfaceDescriptor;
                    fromAmino(object: _38.InterfaceDescriptorAmino): _38.InterfaceDescriptor;
                    toAmino(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceDescriptorAminoMsg): _38.InterfaceDescriptor;
                    toAminoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceDescriptorProtoMsg): _38.InterfaceDescriptor;
                    toProto(message: _38.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_38.InterfaceImplementerDescriptor>): _38.InterfaceImplementerDescriptor;
                    fromAmino(object: _38.InterfaceImplementerDescriptorAmino): _38.InterfaceImplementerDescriptor;
                    toAmino(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceImplementerDescriptorAminoMsg): _38.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceImplementerDescriptorProtoMsg): _38.InterfaceImplementerDescriptor;
                    toProto(message: _38.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_38.InterfaceAcceptingMessageDescriptor>): _38.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _38.InterfaceAcceptingMessageDescriptorAmino): _38.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceAcceptingMessageDescriptorAminoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceAcceptingMessageDescriptorProtoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _38.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ConfigurationDescriptor;
                    fromPartial(object: Partial<_38.ConfigurationDescriptor>): _38.ConfigurationDescriptor;
                    fromAmino(object: _38.ConfigurationDescriptorAmino): _38.ConfigurationDescriptor;
                    toAmino(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _38.ConfigurationDescriptorAminoMsg): _38.ConfigurationDescriptor;
                    toAminoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ConfigurationDescriptorProtoMsg): _38.ConfigurationDescriptor;
                    toProto(message: _38.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _38.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.MsgDescriptor;
                    fromPartial(object: Partial<_38.MsgDescriptor>): _38.MsgDescriptor;
                    fromAmino(object: _38.MsgDescriptorAmino): _38.MsgDescriptor;
                    toAmino(message: _38.MsgDescriptor): _38.MsgDescriptorAmino;
                    fromAminoMsg(object: _38.MsgDescriptorAminoMsg): _38.MsgDescriptor;
                    toAminoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _38.MsgDescriptorProtoMsg): _38.MsgDescriptor;
                    toProto(message: _38.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_38.GetAuthnDescriptorRequest>): _38.GetAuthnDescriptorRequest;
                    fromAmino(_: _38.GetAuthnDescriptorRequestAmino): _38.GetAuthnDescriptorRequest;
                    toAmino(_: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorRequestAminoMsg): _38.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorRequestProtoMsg): _38.GetAuthnDescriptorRequest;
                    toProto(message: _38.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_38.GetAuthnDescriptorResponse>): _38.GetAuthnDescriptorResponse;
                    fromAmino(object: _38.GetAuthnDescriptorResponseAmino): _38.GetAuthnDescriptorResponse;
                    toAmino(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorResponseAminoMsg): _38.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorResponseProtoMsg): _38.GetAuthnDescriptorResponse;
                    toProto(message: _38.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_38.GetChainDescriptorRequest>): _38.GetChainDescriptorRequest;
                    fromAmino(_: _38.GetChainDescriptorRequestAmino): _38.GetChainDescriptorRequest;
                    toAmino(_: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorRequestAminoMsg): _38.GetChainDescriptorRequest;
                    toAminoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorRequestProtoMsg): _38.GetChainDescriptorRequest;
                    toProto(message: _38.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_38.GetChainDescriptorResponse>): _38.GetChainDescriptorResponse;
                    fromAmino(object: _38.GetChainDescriptorResponseAmino): _38.GetChainDescriptorResponse;
                    toAmino(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorResponseAminoMsg): _38.GetChainDescriptorResponse;
                    toAminoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorResponseProtoMsg): _38.GetChainDescriptorResponse;
                    toProto(message: _38.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_38.GetCodecDescriptorRequest>): _38.GetCodecDescriptorRequest;
                    fromAmino(_: _38.GetCodecDescriptorRequestAmino): _38.GetCodecDescriptorRequest;
                    toAmino(_: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorRequestAminoMsg): _38.GetCodecDescriptorRequest;
                    toAminoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorRequestProtoMsg): _38.GetCodecDescriptorRequest;
                    toProto(message: _38.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_38.GetCodecDescriptorResponse>): _38.GetCodecDescriptorResponse;
                    fromAmino(object: _38.GetCodecDescriptorResponseAmino): _38.GetCodecDescriptorResponse;
                    toAmino(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorResponseAminoMsg): _38.GetCodecDescriptorResponse;
                    toAminoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorResponseProtoMsg): _38.GetCodecDescriptorResponse;
                    toProto(message: _38.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_38.GetConfigurationDescriptorRequest>): _38.GetConfigurationDescriptorRequest;
                    fromAmino(_: _38.GetConfigurationDescriptorRequestAmino): _38.GetConfigurationDescriptorRequest;
                    toAmino(_: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorRequestAminoMsg): _38.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorRequestProtoMsg): _38.GetConfigurationDescriptorRequest;
                    toProto(message: _38.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_38.GetConfigurationDescriptorResponse>): _38.GetConfigurationDescriptorResponse;
                    fromAmino(object: _38.GetConfigurationDescriptorResponseAmino): _38.GetConfigurationDescriptorResponse;
                    toAmino(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorResponseAminoMsg): _38.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorResponseProtoMsg): _38.GetConfigurationDescriptorResponse;
                    toProto(message: _38.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_38.GetQueryServicesDescriptorRequest>): _38.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _38.GetQueryServicesDescriptorRequestAmino): _38.GetQueryServicesDescriptorRequest;
                    toAmino(_: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorRequestAminoMsg): _38.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorRequestProtoMsg): _38.GetQueryServicesDescriptorRequest;
                    toProto(message: _38.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_38.GetQueryServicesDescriptorResponse>): _38.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _38.GetQueryServicesDescriptorResponseAmino): _38.GetQueryServicesDescriptorResponse;
                    toAmino(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorResponseAminoMsg): _38.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorResponseProtoMsg): _38.GetQueryServicesDescriptorResponse;
                    toProto(message: _38.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_38.GetTxDescriptorRequest>): _38.GetTxDescriptorRequest;
                    fromAmino(_: _38.GetTxDescriptorRequestAmino): _38.GetTxDescriptorRequest;
                    toAmino(_: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorRequestAminoMsg): _38.GetTxDescriptorRequest;
                    toAminoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorRequestProtoMsg): _38.GetTxDescriptorRequest;
                    toProto(message: _38.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_38.GetTxDescriptorResponse>): _38.GetTxDescriptorResponse;
                    fromAmino(object: _38.GetTxDescriptorResponseAmino): _38.GetTxDescriptorResponse;
                    toAmino(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorResponseAminoMsg): _38.GetTxDescriptorResponse;
                    toAminoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorResponseProtoMsg): _38.GetTxDescriptorResponse;
                    toProto(message: _38.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryServicesDescriptor;
                    fromPartial(object: Partial<_38.QueryServicesDescriptor>): _38.QueryServicesDescriptor;
                    fromAmino(object: _38.QueryServicesDescriptorAmino): _38.QueryServicesDescriptor;
                    toAmino(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServicesDescriptorAminoMsg): _38.QueryServicesDescriptor;
                    toAminoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServicesDescriptorProtoMsg): _38.QueryServicesDescriptor;
                    toProto(message: _38.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryServiceDescriptor;
                    fromPartial(object: Partial<_38.QueryServiceDescriptor>): _38.QueryServiceDescriptor;
                    fromAmino(object: _38.QueryServiceDescriptorAmino): _38.QueryServiceDescriptor;
                    toAmino(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServiceDescriptorAminoMsg): _38.QueryServiceDescriptor;
                    toAminoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServiceDescriptorProtoMsg): _38.QueryServiceDescriptor;
                    toProto(message: _38.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryMethodDescriptor;
                    fromPartial(object: Partial<_38.QueryMethodDescriptor>): _38.QueryMethodDescriptor;
                    fromAmino(object: _38.QueryMethodDescriptorAmino): _38.QueryMethodDescriptor;
                    toAmino(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _38.QueryMethodDescriptorAminoMsg): _38.QueryMethodDescriptor;
                    toAminoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryMethodDescriptorProtoMsg): _38.QueryMethodDescriptor;
                    toProto(message: _38.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _39.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Snapshot;
                    fromPartial(object: Partial<_39.Snapshot>): _39.Snapshot;
                    fromAmino(object: _39.SnapshotAmino): _39.Snapshot;
                    toAmino(message: _39.Snapshot): _39.SnapshotAmino;
                    fromAminoMsg(object: _39.SnapshotAminoMsg): _39.Snapshot;
                    toAminoMsg(message: _39.Snapshot): _39.SnapshotAminoMsg;
                    fromProtoMsg(message: _39.SnapshotProtoMsg): _39.Snapshot;
                    toProto(message: _39.Snapshot): Uint8Array;
                    toProtoMsg(message: _39.Snapshot): _39.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _39.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Metadata;
                    fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
                    fromAmino(object: _39.MetadataAmino): _39.Metadata;
                    toAmino(message: _39.Metadata): _39.MetadataAmino;
                    fromAminoMsg(object: _39.MetadataAminoMsg): _39.Metadata;
                    toAminoMsg(message: _39.Metadata): _39.MetadataAminoMsg;
                    fromProtoMsg(message: _39.MetadataProtoMsg): _39.Metadata;
                    toProto(message: _39.Metadata): Uint8Array;
                    toProtoMsg(message: _39.Metadata): _39.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotItem;
                    fromPartial(object: Partial<_39.SnapshotItem>): _39.SnapshotItem;
                    fromAmino(object: _39.SnapshotItemAmino): _39.SnapshotItem;
                    toAmino(message: _39.SnapshotItem): _39.SnapshotItemAmino;
                    fromAminoMsg(object: _39.SnapshotItemAminoMsg): _39.SnapshotItem;
                    toAminoMsg(message: _39.SnapshotItem): _39.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotItemProtoMsg): _39.SnapshotItem;
                    toProto(message: _39.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotItem): _39.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotStoreItem;
                    fromPartial(object: Partial<_39.SnapshotStoreItem>): _39.SnapshotStoreItem;
                    fromAmino(object: _39.SnapshotStoreItemAmino): _39.SnapshotStoreItem;
                    toAmino(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _39.SnapshotStoreItemAminoMsg): _39.SnapshotStoreItem;
                    toAminoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotStoreItemProtoMsg): _39.SnapshotStoreItem;
                    toProto(message: _39.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotIAVLItem;
                    fromPartial(object: Partial<_39.SnapshotIAVLItem>): _39.SnapshotIAVLItem;
                    fromAmino(object: _39.SnapshotIAVLItemAmino): _39.SnapshotIAVLItem;
                    toAmino(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _39.SnapshotIAVLItemAminoMsg): _39.SnapshotIAVLItem;
                    toAminoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotIAVLItemProtoMsg): _39.SnapshotIAVLItem;
                    toProto(message: _39.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_39.SnapshotExtensionMeta>): _39.SnapshotExtensionMeta;
                    fromAmino(object: _39.SnapshotExtensionMetaAmino): _39.SnapshotExtensionMeta;
                    toAmino(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionMetaAminoMsg): _39.SnapshotExtensionMeta;
                    toAminoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionMetaProtoMsg): _39.SnapshotExtensionMeta;
                    toProto(message: _39.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_39.SnapshotExtensionPayload>): _39.SnapshotExtensionPayload;
                    fromAmino(object: _39.SnapshotExtensionPayloadAmino): _39.SnapshotExtensionPayload;
                    toAmino(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionPayloadAminoMsg): _39.SnapshotExtensionPayload;
                    toAminoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionPayloadProtoMsg): _39.SnapshotExtensionPayload;
                    toProto(message: _39.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotKVItem;
                    fromPartial(object: Partial<_39.SnapshotKVItem>): _39.SnapshotKVItem;
                    fromAmino(object: _39.SnapshotKVItemAmino): _39.SnapshotKVItem;
                    toAmino(message: _39.SnapshotKVItem): _39.SnapshotKVItemAmino;
                    fromAminoMsg(object: _39.SnapshotKVItemAminoMsg): _39.SnapshotKVItem;
                    toAminoMsg(message: _39.SnapshotKVItem): _39.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotKVItemProtoMsg): _39.SnapshotKVItem;
                    toProto(message: _39.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotKVItem): _39.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _39.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotSchema;
                    fromPartial(object: Partial<_39.SnapshotSchema>): _39.SnapshotSchema;
                    fromAmino(object: _39.SnapshotSchemaAmino): _39.SnapshotSchema;
                    toAmino(message: _39.SnapshotSchema): _39.SnapshotSchemaAmino;
                    fromAminoMsg(object: _39.SnapshotSchemaAminoMsg): _39.SnapshotSchema;
                    toAminoMsg(message: _39.SnapshotSchema): _39.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _39.SnapshotSchemaProtoMsg): _39.SnapshotSchema;
                    toProto(message: _39.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _39.SnapshotSchema): _39.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _41.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.StoreKVPair;
                    fromPartial(object: Partial<_41.StoreKVPair>): _41.StoreKVPair;
                    fromAmino(object: _41.StoreKVPairAmino): _41.StoreKVPair;
                    toAmino(message: _41.StoreKVPair): _41.StoreKVPairAmino;
                    fromAminoMsg(object: _41.StoreKVPairAminoMsg): _41.StoreKVPair;
                    toAminoMsg(message: _41.StoreKVPair): _41.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _41.StoreKVPairProtoMsg): _41.StoreKVPair;
                    toProto(message: _41.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _41.StoreKVPair): _41.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _41.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.BlockMetadata;
                    fromPartial(object: Partial<_41.BlockMetadata>): _41.BlockMetadata;
                    fromAmino(object: _41.BlockMetadataAmino): _41.BlockMetadata;
                    toAmino(message: _41.BlockMetadata): _41.BlockMetadataAmino;
                    fromAminoMsg(object: _41.BlockMetadataAminoMsg): _41.BlockMetadata;
                    toAminoMsg(message: _41.BlockMetadata): _41.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _41.BlockMetadataProtoMsg): _41.BlockMetadata;
                    toProto(message: _41.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _41.BlockMetadata): _41.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _41.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_41.BlockMetadata_DeliverTx>): _41.BlockMetadata_DeliverTx;
                    fromAmino(object: _41.BlockMetadata_DeliverTxAmino): _41.BlockMetadata_DeliverTx;
                    toAmino(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _41.BlockMetadata_DeliverTxAminoMsg): _41.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _41.BlockMetadata_DeliverTxProtoMsg): _41.BlockMetadata_DeliverTx;
                    toProto(message: _41.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _40.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.CommitInfo;
                    fromPartial(object: Partial<_40.CommitInfo>): _40.CommitInfo;
                    fromAmino(object: _40.CommitInfoAmino): _40.CommitInfo;
                    toAmino(message: _40.CommitInfo): _40.CommitInfoAmino;
                    fromAminoMsg(object: _40.CommitInfoAminoMsg): _40.CommitInfo;
                    toAminoMsg(message: _40.CommitInfo): _40.CommitInfoAminoMsg;
                    fromProtoMsg(message: _40.CommitInfoProtoMsg): _40.CommitInfo;
                    toProto(message: _40.CommitInfo): Uint8Array;
                    toProtoMsg(message: _40.CommitInfo): _40.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _40.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.StoreInfo;
                    fromPartial(object: Partial<_40.StoreInfo>): _40.StoreInfo;
                    fromAmino(object: _40.StoreInfoAmino): _40.StoreInfo;
                    toAmino(message: _40.StoreInfo): _40.StoreInfoAmino;
                    fromAminoMsg(object: _40.StoreInfoAminoMsg): _40.StoreInfo;
                    toAminoMsg(message: _40.StoreInfo): _40.StoreInfoAminoMsg;
                    fromProtoMsg(message: _40.StoreInfoProtoMsg): _40.StoreInfo;
                    toProto(message: _40.StoreInfo): Uint8Array;
                    toProtoMsg(message: _40.StoreInfo): _40.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _40.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.CommitID;
                    fromPartial(object: Partial<_40.CommitID>): _40.CommitID;
                    fromAmino(object: _40.CommitIDAmino): _40.CommitID;
                    toAmino(message: _40.CommitID): _40.CommitIDAmino;
                    fromAminoMsg(object: _40.CommitIDAminoMsg): _40.CommitID;
                    toAminoMsg(message: _40.CommitID): _40.CommitIDAminoMsg;
                    fromProtoMsg(message: _40.CommitIDProtoMsg): _40.CommitID;
                    toProto(message: _40.CommitID): Uint8Array;
                    toProtoMsg(message: _40.CommitID): _40.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _223.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                    getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                    getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                    getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _42.ABCIQueryRequest): Promise<_42.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _202.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _43.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Block;
                    fromPartial(object: Partial<_43.Block>): _43.Block;
                    fromAmino(object: _43.BlockAmino): _43.Block;
                    toAmino(message: _43.Block): _43.BlockAmino;
                    fromAminoMsg(object: _43.BlockAminoMsg): _43.Block;
                    toAminoMsg(message: _43.Block): _43.BlockAminoMsg;
                    fromProtoMsg(message: _43.BlockProtoMsg): _43.Block;
                    toProto(message: _43.Block): Uint8Array;
                    toProtoMsg(message: _43.Block): _43.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _43.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Header;
                    fromPartial(object: Partial<_43.Header>): _43.Header;
                    fromAmino(object: _43.HeaderAmino): _43.Header;
                    toAmino(message: _43.Header): _43.HeaderAmino;
                    fromAminoMsg(object: _43.HeaderAminoMsg): _43.Header;
                    toAminoMsg(message: _43.Header): _43.HeaderAminoMsg;
                    fromProtoMsg(message: _43.HeaderProtoMsg): _43.Header;
                    toProto(message: _43.Header): Uint8Array;
                    toProtoMsg(message: _43.Header): _43.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightRequest>): _42.GetValidatorSetByHeightRequest;
                    fromAmino(object: _42.GetValidatorSetByHeightRequestAmino): _42.GetValidatorSetByHeightRequest;
                    toAmino(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightRequestAminoMsg): _42.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightRequestProtoMsg): _42.GetValidatorSetByHeightRequest;
                    toProto(message: _42.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightResponse>): _42.GetValidatorSetByHeightResponse;
                    fromAmino(object: _42.GetValidatorSetByHeightResponseAmino): _42.GetValidatorSetByHeightResponse;
                    toAmino(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightResponseAminoMsg): _42.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightResponseProtoMsg): _42.GetValidatorSetByHeightResponse;
                    toProto(message: _42.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetRequest>): _42.GetLatestValidatorSetRequest;
                    fromAmino(object: _42.GetLatestValidatorSetRequestAmino): _42.GetLatestValidatorSetRequest;
                    toAmino(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetRequestAminoMsg): _42.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetRequestProtoMsg): _42.GetLatestValidatorSetRequest;
                    toProto(message: _42.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetResponse>): _42.GetLatestValidatorSetResponse;
                    fromAmino(object: _42.GetLatestValidatorSetResponseAmino): _42.GetLatestValidatorSetResponse;
                    toAmino(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetResponseAminoMsg): _42.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetResponseProtoMsg): _42.GetLatestValidatorSetResponse;
                    toProto(message: _42.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _42.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Validator;
                    fromPartial(object: Partial<_42.Validator>): _42.Validator;
                    fromAmino(object: _42.ValidatorAmino): _42.Validator;
                    toAmino(message: _42.Validator): _42.ValidatorAmino;
                    fromAminoMsg(object: _42.ValidatorAminoMsg): _42.Validator;
                    toAminoMsg(message: _42.Validator): _42.ValidatorAminoMsg;
                    fromProtoMsg(message: _42.ValidatorProtoMsg): _42.Validator;
                    toProto(message: _42.Validator): Uint8Array;
                    toProtoMsg(message: _42.Validator): _42.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_42.GetBlockByHeightRequest>): _42.GetBlockByHeightRequest;
                    fromAmino(object: _42.GetBlockByHeightRequestAmino): _42.GetBlockByHeightRequest;
                    toAmino(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightRequestAminoMsg): _42.GetBlockByHeightRequest;
                    toAminoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightRequestProtoMsg): _42.GetBlockByHeightRequest;
                    toProto(message: _42.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_42.GetBlockByHeightResponse>): _42.GetBlockByHeightResponse;
                    fromAmino(object: _42.GetBlockByHeightResponseAmino): _42.GetBlockByHeightResponse;
                    toAmino(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightResponseAminoMsg): _42.GetBlockByHeightResponse;
                    toAminoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightResponseProtoMsg): _42.GetBlockByHeightResponse;
                    toProto(message: _42.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _42.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetLatestBlockRequest;
                    fromPartial(_: Partial<_42.GetLatestBlockRequest>): _42.GetLatestBlockRequest;
                    fromAmino(_: _42.GetLatestBlockRequestAmino): _42.GetLatestBlockRequest;
                    toAmino(_: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _42.GetLatestBlockRequestAminoMsg): _42.GetLatestBlockRequest;
                    toAminoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockRequestProtoMsg): _42.GetLatestBlockRequest;
                    toProto(message: _42.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetLatestBlockResponse;
                    fromPartial(object: Partial<_42.GetLatestBlockResponse>): _42.GetLatestBlockResponse;
                    fromAmino(object: _42.GetLatestBlockResponseAmino): _42.GetLatestBlockResponse;
                    toAmino(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _42.GetLatestBlockResponseAminoMsg): _42.GetLatestBlockResponse;
                    toAminoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockResponseProtoMsg): _42.GetLatestBlockResponse;
                    toProto(message: _42.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _42.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetSyncingRequest;
                    fromPartial(_: Partial<_42.GetSyncingRequest>): _42.GetSyncingRequest;
                    fromAmino(_: _42.GetSyncingRequestAmino): _42.GetSyncingRequest;
                    toAmino(_: _42.GetSyncingRequest): _42.GetSyncingRequestAmino;
                    fromAminoMsg(object: _42.GetSyncingRequestAminoMsg): _42.GetSyncingRequest;
                    toAminoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingRequestProtoMsg): _42.GetSyncingRequest;
                    toProto(message: _42.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _42.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetSyncingResponse;
                    fromPartial(object: Partial<_42.GetSyncingResponse>): _42.GetSyncingResponse;
                    fromAmino(object: _42.GetSyncingResponseAmino): _42.GetSyncingResponse;
                    toAmino(message: _42.GetSyncingResponse): _42.GetSyncingResponseAmino;
                    fromAminoMsg(object: _42.GetSyncingResponseAminoMsg): _42.GetSyncingResponse;
                    toAminoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingResponseProtoMsg): _42.GetSyncingResponse;
                    toProto(message: _42.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _42.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetNodeInfoRequest;
                    fromPartial(_: Partial<_42.GetNodeInfoRequest>): _42.GetNodeInfoRequest;
                    fromAmino(_: _42.GetNodeInfoRequestAmino): _42.GetNodeInfoRequest;
                    toAmino(_: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _42.GetNodeInfoRequestAminoMsg): _42.GetNodeInfoRequest;
                    toAminoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoRequestProtoMsg): _42.GetNodeInfoRequest;
                    toProto(message: _42.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _42.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetNodeInfoResponse;
                    fromPartial(object: Partial<_42.GetNodeInfoResponse>): _42.GetNodeInfoResponse;
                    fromAmino(object: _42.GetNodeInfoResponseAmino): _42.GetNodeInfoResponse;
                    toAmino(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _42.GetNodeInfoResponseAminoMsg): _42.GetNodeInfoResponse;
                    toAminoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoResponseProtoMsg): _42.GetNodeInfoResponse;
                    toProto(message: _42.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _42.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.VersionInfo;
                    fromPartial(object: Partial<_42.VersionInfo>): _42.VersionInfo;
                    fromAmino(object: _42.VersionInfoAmino): _42.VersionInfo;
                    toAmino(message: _42.VersionInfo): _42.VersionInfoAmino;
                    fromAminoMsg(object: _42.VersionInfoAminoMsg): _42.VersionInfo;
                    toAminoMsg(message: _42.VersionInfo): _42.VersionInfoAminoMsg;
                    fromProtoMsg(message: _42.VersionInfoProtoMsg): _42.VersionInfo;
                    toProto(message: _42.VersionInfo): Uint8Array;
                    toProtoMsg(message: _42.VersionInfo): _42.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Module;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                    fromAmino(object: _42.ModuleAmino): _42.Module;
                    toAmino(message: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _42.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ABCIQueryRequest;
                    fromPartial(object: Partial<_42.ABCIQueryRequest>): _42.ABCIQueryRequest;
                    fromAmino(object: _42.ABCIQueryRequestAmino): _42.ABCIQueryRequest;
                    toAmino(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _42.ABCIQueryRequestAminoMsg): _42.ABCIQueryRequest;
                    toAminoMsg(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _42.ABCIQueryRequestProtoMsg): _42.ABCIQueryRequest;
                    toProto(message: _42.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _42.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ABCIQueryResponse;
                    fromPartial(object: Partial<_42.ABCIQueryResponse>): _42.ABCIQueryResponse;
                    fromAmino(object: _42.ABCIQueryResponseAmino): _42.ABCIQueryResponse;
                    toAmino(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _42.ABCIQueryResponseAminoMsg): _42.ABCIQueryResponse;
                    toAminoMsg(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _42.ABCIQueryResponseProtoMsg): _42.ABCIQueryResponse;
                    toProto(message: _42.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _42.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ProofOp;
                    fromPartial(object: Partial<_42.ProofOp>): _42.ProofOp;
                    fromAmino(object: _42.ProofOpAmino): _42.ProofOp;
                    toAmino(message: _42.ProofOp): _42.ProofOpAmino;
                    fromAminoMsg(object: _42.ProofOpAminoMsg): _42.ProofOp;
                    toAminoMsg(message: _42.ProofOp): _42.ProofOpAminoMsg;
                    fromProtoMsg(message: _42.ProofOpProtoMsg): _42.ProofOp;
                    toProto(message: _42.ProofOp): Uint8Array;
                    toProtoMsg(message: _42.ProofOp): _42.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _42.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.ProofOps;
                    fromPartial(object: Partial<_42.ProofOps>): _42.ProofOps;
                    fromAmino(object: _42.ProofOpsAmino): _42.ProofOps;
                    toAmino(message: _42.ProofOps): _42.ProofOpsAmino;
                    fromAminoMsg(object: _42.ProofOpsAminoMsg): _42.ProofOps;
                    toAminoMsg(message: _42.ProofOps): _42.ProofOpsAminoMsg;
                    fromProtoMsg(message: _42.ProofOpsProtoMsg): _42.ProofOps;
                    toProto(message: _42.ProofOps): Uint8Array;
                    toProtoMsg(message: _42.ProofOps): _42.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _44.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.Coin;
                fromPartial(object: Partial<_44.Coin>): _44.Coin;
                fromAmino(object: _44.CoinAmino): _44.Coin;
                toAmino(message: _44.Coin): _44.CoinAmino;
                fromAminoMsg(object: _44.CoinAminoMsg): _44.Coin;
                toAminoMsg(message: _44.Coin): _44.CoinAminoMsg;
                fromProtoMsg(message: _44.CoinProtoMsg): _44.Coin;
                toProto(message: _44.Coin): Uint8Array;
                toProtoMsg(message: _44.Coin): _44.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _44.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DecCoin;
                fromPartial(object: Partial<_44.DecCoin>): _44.DecCoin;
                fromAmino(object: _44.DecCoinAmino): _44.DecCoin;
                toAmino(message: _44.DecCoin): _44.DecCoinAmino;
                fromAminoMsg(object: _44.DecCoinAminoMsg): _44.DecCoin;
                toAminoMsg(message: _44.DecCoin): _44.DecCoinAminoMsg;
                fromProtoMsg(message: _44.DecCoinProtoMsg): _44.DecCoin;
                toProto(message: _44.DecCoin): Uint8Array;
                toProtoMsg(message: _44.DecCoin): _44.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _44.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.IntProto;
                fromPartial(object: Partial<_44.IntProto>): _44.IntProto;
                fromAmino(object: _44.IntProtoAmino): _44.IntProto;
                toAmino(message: _44.IntProto): _44.IntProtoAmino;
                fromAminoMsg(object: _44.IntProtoAminoMsg): _44.IntProto;
                toAminoMsg(message: _44.IntProto): _44.IntProtoAminoMsg;
                fromProtoMsg(message: _44.IntProtoProtoMsg): _44.IntProto;
                toProto(message: _44.IntProto): Uint8Array;
                toProtoMsg(message: _44.IntProto): _44.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _44.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DecProto;
                fromPartial(object: Partial<_44.DecProto>): _44.DecProto;
                fromAmino(object: _44.DecProtoAmino): _44.DecProto;
                toAmino(message: _44.DecProto): _44.DecProtoAmino;
                fromAminoMsg(object: _44.DecProtoAminoMsg): _44.DecProto;
                toAminoMsg(message: _44.DecProto): _44.DecProtoAminoMsg;
                fromProtoMsg(message: _44.DecProtoProtoMsg): _44.DecProto;
                toProto(message: _44.DecProto): Uint8Array;
                toProtoMsg(message: _44.DecProto): _44.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _45.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.Module;
                    fromPartial(object: Partial<_45.Module>): _45.Module;
                    fromAmino(object: _45.ModuleAmino): _45.Module;
                    toAmino(message: _45.Module): _45.ModuleAmino;
                    fromAminoMsg(object: _45.ModuleAminoMsg): _45.Module;
                    toAminoMsg(message: _45.Module): _45.ModuleAminoMsg;
                    fromProtoMsg(message: _45.ModuleProtoMsg): _45.Module;
                    toProto(message: _45.Module): Uint8Array;
                    toProtoMsg(message: _45.Module): _45.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _47.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.GenesisOwners;
                fromPartial(object: Partial<_47.GenesisOwners>): _47.GenesisOwners;
                fromAmino(object: _47.GenesisOwnersAmino): _47.GenesisOwners;
                toAmino(message: _47.GenesisOwners): _47.GenesisOwnersAmino;
                fromAminoMsg(object: _47.GenesisOwnersAminoMsg): _47.GenesisOwners;
                toAminoMsg(message: _47.GenesisOwners): _47.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _47.GenesisOwnersProtoMsg): _47.GenesisOwners;
                toProto(message: _47.GenesisOwners): Uint8Array;
                toProtoMsg(message: _47.GenesisOwners): _47.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _46.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Capability;
                fromPartial(object: Partial<_46.Capability>): _46.Capability;
                fromAmino(object: _46.CapabilityAmino): _46.Capability;
                toAmino(message: _46.Capability): _46.CapabilityAmino;
                fromAminoMsg(object: _46.CapabilityAminoMsg): _46.Capability;
                toAminoMsg(message: _46.Capability): _46.CapabilityAminoMsg;
                fromProtoMsg(message: _46.CapabilityProtoMsg): _46.Capability;
                toProto(message: _46.Capability): Uint8Array;
                toProtoMsg(message: _46.Capability): _46.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _46.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Owner;
                fromPartial(object: Partial<_46.Owner>): _46.Owner;
                fromAmino(object: _46.OwnerAmino): _46.Owner;
                toAmino(message: _46.Owner): _46.OwnerAmino;
                fromAminoMsg(object: _46.OwnerAminoMsg): _46.Owner;
                toAminoMsg(message: _46.Owner): _46.OwnerAminoMsg;
                fromProtoMsg(message: _46.OwnerProtoMsg): _46.Owner;
                toProto(message: _46.Owner): Uint8Array;
                toProtoMsg(message: _46.Owner): _46.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _46.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CapabilityOwners;
                fromPartial(object: Partial<_46.CapabilityOwners>): _46.CapabilityOwners;
                fromAmino(object: _46.CapabilityOwnersAmino): _46.CapabilityOwners;
                toAmino(message: _46.CapabilityOwners): _46.CapabilityOwnersAmino;
                fromAminoMsg(object: _46.CapabilityOwnersAminoMsg): _46.CapabilityOwners;
                toAminoMsg(message: _46.CapabilityOwners): _46.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _46.CapabilityOwnersProtoMsg): _46.CapabilityOwners;
                toProto(message: _46.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _46.CapabilityOwners): _46.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _48.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Module;
                    fromPartial(object: Partial<_48.Module>): _48.Module;
                    fromAmino(object: _48.ModuleAmino): _48.Module;
                    toAmino(message: _48.Module): _48.ModuleAmino;
                    fromAminoMsg(object: _48.ModuleAminoMsg): _48.Module;
                    toAminoMsg(message: _48.Module): _48.ModuleAminoMsg;
                    fromProtoMsg(message: _48.ModuleProtoMsg): _48.Module;
                    toProto(message: _48.Module): Uint8Array;
                    toProtoMsg(message: _48.Module): _48.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _50.MsgUpdateParams) => _50.MsgUpdateParamsAmino;
                    fromAmino: (object: _50.MsgUpdateParamsAmino) => _50.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _50.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgUpdateParams;
                fromPartial(object: Partial<_50.MsgUpdateParams>): _50.MsgUpdateParams;
                fromAmino(object: _50.MsgUpdateParamsAmino): _50.MsgUpdateParams;
                toAmino(message: _50.MsgUpdateParams): _50.MsgUpdateParamsAmino;
                fromAminoMsg(object: _50.MsgUpdateParamsAminoMsg): _50.MsgUpdateParams;
                toAminoMsg(message: _50.MsgUpdateParams): _50.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _50.MsgUpdateParamsProtoMsg): _50.MsgUpdateParams;
                toProto(message: _50.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _50.MsgUpdateParams): _50.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _50.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_50.MsgUpdateParamsResponse>): _50.MsgUpdateParamsResponse;
                fromAmino(_: _50.MsgUpdateParamsResponseAmino): _50.MsgUpdateParamsResponse;
                toAmino(_: _50.MsgUpdateParamsResponse): _50.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _50.MsgUpdateParamsResponseAminoMsg): _50.MsgUpdateParamsResponse;
                toAminoMsg(message: _50.MsgUpdateParamsResponse): _50.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _50.MsgUpdateParamsResponseProtoMsg): _50.MsgUpdateParamsResponse;
                toProto(message: _50.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _50.MsgUpdateParamsResponse): _50.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _49.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryParamsRequest;
                fromPartial(_: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
                fromAmino(_: _49.QueryParamsRequestAmino): _49.QueryParamsRequest;
                toAmino(_: _49.QueryParamsRequest): _49.QueryParamsRequestAmino;
                fromAminoMsg(object: _49.QueryParamsRequestAminoMsg): _49.QueryParamsRequest;
                toAminoMsg(message: _49.QueryParamsRequest): _49.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryParamsRequestProtoMsg): _49.QueryParamsRequest;
                toProto(message: _49.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryParamsRequest): _49.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _49.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryParamsResponse;
                fromPartial(object: Partial<_49.QueryParamsResponse>): _49.QueryParamsResponse;
                fromAmino(object: _49.QueryParamsResponseAmino): _49.QueryParamsResponse;
                toAmino(message: _49.QueryParamsResponse): _49.QueryParamsResponseAmino;
                fromAminoMsg(object: _49.QueryParamsResponseAminoMsg): _49.QueryParamsResponse;
                toAminoMsg(message: _49.QueryParamsResponse): _49.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryParamsResponseProtoMsg): _49.QueryParamsResponse;
                toProto(message: _49.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryParamsResponse): _49.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _51.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.Module;
                    fromPartial(object: Partial<_51.Module>): _51.Module;
                    fromAmino(object: _51.ModuleAmino): _51.Module;
                    toAmino(message: _51.Module): _51.ModuleAmino;
                    fromAminoMsg(object: _51.ModuleAminoMsg): _51.Module;
                    toAminoMsg(message: _51.Module): _51.ModuleAminoMsg;
                    fromProtoMsg(message: _51.ModuleProtoMsg): _51.Module;
                    toProto(message: _51.Module): Uint8Array;
                    toProtoMsg(message: _51.Module): _51.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _53.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _53.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _53.MsgVerifyInvariant;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _53.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _53.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _53.MsgVerifyInvariant;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _53.MsgVerifyInvariant) => _53.MsgVerifyInvariantAmino;
                    fromAmino: (object: _53.MsgVerifyInvariantAmino) => _53.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _53.MsgUpdateParams) => _53.MsgUpdateParamsAmino;
                    fromAmino: (object: _53.MsgUpdateParamsAmino) => _53.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _53.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgVerifyInvariant;
                fromPartial(object: Partial<_53.MsgVerifyInvariant>): _53.MsgVerifyInvariant;
                fromAmino(object: _53.MsgVerifyInvariantAmino): _53.MsgVerifyInvariant;
                toAmino(message: _53.MsgVerifyInvariant): _53.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _53.MsgVerifyInvariantAminoMsg): _53.MsgVerifyInvariant;
                toAminoMsg(message: _53.MsgVerifyInvariant): _53.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _53.MsgVerifyInvariantProtoMsg): _53.MsgVerifyInvariant;
                toProto(message: _53.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _53.MsgVerifyInvariant): _53.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _53.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_53.MsgVerifyInvariantResponse>): _53.MsgVerifyInvariantResponse;
                fromAmino(_: _53.MsgVerifyInvariantResponseAmino): _53.MsgVerifyInvariantResponse;
                toAmino(_: _53.MsgVerifyInvariantResponse): _53.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _53.MsgVerifyInvariantResponseAminoMsg): _53.MsgVerifyInvariantResponse;
                toAminoMsg(message: _53.MsgVerifyInvariantResponse): _53.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _53.MsgVerifyInvariantResponseProtoMsg): _53.MsgVerifyInvariantResponse;
                toProto(message: _53.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _53.MsgVerifyInvariantResponse): _53.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _53.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgUpdateParams;
                fromPartial(object: Partial<_53.MsgUpdateParams>): _53.MsgUpdateParams;
                fromAmino(object: _53.MsgUpdateParamsAmino): _53.MsgUpdateParams;
                toAmino(message: _53.MsgUpdateParams): _53.MsgUpdateParamsAmino;
                fromAminoMsg(object: _53.MsgUpdateParamsAminoMsg): _53.MsgUpdateParams;
                toAminoMsg(message: _53.MsgUpdateParams): _53.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _53.MsgUpdateParamsProtoMsg): _53.MsgUpdateParams;
                toProto(message: _53.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _53.MsgUpdateParams): _53.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _53.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_53.MsgUpdateParamsResponse>): _53.MsgUpdateParamsResponse;
                fromAmino(_: _53.MsgUpdateParamsResponseAmino): _53.MsgUpdateParamsResponse;
                toAmino(_: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _53.MsgUpdateParamsResponseAminoMsg): _53.MsgUpdateParamsResponse;
                toAminoMsg(message: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _53.MsgUpdateParamsResponseProtoMsg): _53.MsgUpdateParamsResponse;
                toProto(message: _53.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _52.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.GenesisState;
                fromPartial(object: Partial<_52.GenesisState>): _52.GenesisState;
                fromAmino(object: _52.GenesisStateAmino): _52.GenesisState;
                toAmino(message: _52.GenesisState): _52.GenesisStateAmino;
                fromAminoMsg(object: _52.GenesisStateAminoMsg): _52.GenesisState;
                toAminoMsg(message: _52.GenesisState): _52.GenesisStateAminoMsg;
                fromProtoMsg(message: _52.GenesisStateProtoMsg): _52.GenesisState;
                toProto(message: _52.GenesisState): Uint8Array;
                toProtoMsg(message: _52.GenesisState): _52.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _55.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.BIP44Params;
                    fromPartial(object: Partial<_55.BIP44Params>): _55.BIP44Params;
                    fromAmino(object: _55.BIP44ParamsAmino): _55.BIP44Params;
                    toAmino(message: _55.BIP44Params): _55.BIP44ParamsAmino;
                    fromAminoMsg(object: _55.BIP44ParamsAminoMsg): _55.BIP44Params;
                    toAminoMsg(message: _55.BIP44Params): _55.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _55.BIP44ParamsProtoMsg): _55.BIP44Params;
                    toProto(message: _55.BIP44Params): Uint8Array;
                    toProtoMsg(message: _55.BIP44Params): _55.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _56.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Record;
                    fromPartial(object: Partial<_56.Record>): _56.Record;
                    fromAmino(object: _56.RecordAmino): _56.Record;
                    toAmino(message: _56.Record): _56.RecordAmino;
                    fromAminoMsg(object: _56.RecordAminoMsg): _56.Record;
                    toAminoMsg(message: _56.Record): _56.RecordAminoMsg;
                    fromProtoMsg(message: _56.RecordProtoMsg): _56.Record;
                    toProto(message: _56.Record): Uint8Array;
                    toProtoMsg(message: _56.Record): _56.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _56.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Record_Local;
                    fromPartial(object: Partial<_56.Record_Local>): _56.Record_Local;
                    fromAmino(object: _56.Record_LocalAmino): _56.Record_Local;
                    toAmino(message: _56.Record_Local): _56.Record_LocalAmino;
                    fromAminoMsg(object: _56.Record_LocalAminoMsg): _56.Record_Local;
                    toAminoMsg(message: _56.Record_Local): _56.Record_LocalAminoMsg;
                    fromProtoMsg(message: _56.Record_LocalProtoMsg): _56.Record_Local;
                    toProto(message: _56.Record_Local): Uint8Array;
                    toProtoMsg(message: _56.Record_Local): _56.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _56.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Record_Ledger;
                    fromPartial(object: Partial<_56.Record_Ledger>): _56.Record_Ledger;
                    fromAmino(object: _56.Record_LedgerAmino): _56.Record_Ledger;
                    toAmino(message: _56.Record_Ledger): _56.Record_LedgerAmino;
                    fromAminoMsg(object: _56.Record_LedgerAminoMsg): _56.Record_Ledger;
                    toAminoMsg(message: _56.Record_Ledger): _56.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _56.Record_LedgerProtoMsg): _56.Record_Ledger;
                    toProto(message: _56.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _56.Record_Ledger): _56.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _56.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _56.Record_Multi;
                    fromPartial(_: Partial<_56.Record_Multi>): _56.Record_Multi;
                    fromAmino(_: _56.Record_MultiAmino): _56.Record_Multi;
                    toAmino(_: _56.Record_Multi): _56.Record_MultiAmino;
                    fromAminoMsg(object: _56.Record_MultiAminoMsg): _56.Record_Multi;
                    toAminoMsg(message: _56.Record_Multi): _56.Record_MultiAminoMsg;
                    fromProtoMsg(message: _56.Record_MultiProtoMsg): _56.Record_Multi;
                    toProto(message: _56.Record_Multi): Uint8Array;
                    toProtoMsg(message: _56.Record_Multi): _56.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _56.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _56.Record_Offline;
                    fromPartial(_: Partial<_56.Record_Offline>): _56.Record_Offline;
                    fromAmino(_: _56.Record_OfflineAmino): _56.Record_Offline;
                    toAmino(_: _56.Record_Offline): _56.Record_OfflineAmino;
                    fromAminoMsg(object: _56.Record_OfflineAminoMsg): _56.Record_Offline;
                    toAminoMsg(message: _56.Record_Offline): _56.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _56.Record_OfflineProtoMsg): _56.Record_Offline;
                    toProto(message: _56.Record_Offline): Uint8Array;
                    toProtoMsg(message: _56.Record_Offline): _56.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _57.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.LegacyAminoPubKey;
                fromPartial(object: Partial<_57.LegacyAminoPubKey>): _57.LegacyAminoPubKey;
                fromAmino(object: _57.LegacyAminoPubKeyAmino): _57.LegacyAminoPubKey;
                toAmino(message: _57.LegacyAminoPubKey): _57.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _57.LegacyAminoPubKeyAminoMsg): _57.LegacyAminoPubKey;
                toAminoMsg(message: _57.LegacyAminoPubKey): _57.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _57.LegacyAminoPubKeyProtoMsg): _57.LegacyAminoPubKey;
                toProto(message: _57.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _57.LegacyAminoPubKey): _57.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _58.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.PubKey;
                fromPartial(object: Partial<_58.PubKey>): _58.PubKey;
                fromAmino(object: _58.PubKeyAmino): _58.PubKey;
                toAmino(message: _58.PubKey): _58.PubKeyAmino;
                fromAminoMsg(object: _58.PubKeyAminoMsg): _58.PubKey;
                toAminoMsg(message: _58.PubKey): _58.PubKeyAminoMsg;
                fromProtoMsg(message: _58.PubKeyProtoMsg): _58.PubKey;
                toProto(message: _58.PubKey): Uint8Array;
                toProtoMsg(message: _58.PubKey): _58.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _58.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.PrivKey;
                fromPartial(object: Partial<_58.PrivKey>): _58.PrivKey;
                fromAmino(object: _58.PrivKeyAmino): _58.PrivKey;
                toAmino(message: _58.PrivKey): _58.PrivKeyAmino;
                fromAminoMsg(object: _58.PrivKeyAminoMsg): _58.PrivKey;
                toAminoMsg(message: _58.PrivKey): _58.PrivKeyAminoMsg;
                fromProtoMsg(message: _58.PrivKeyProtoMsg): _58.PrivKey;
                toProto(message: _58.PrivKey): Uint8Array;
                toProtoMsg(message: _58.PrivKey): _58.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _59.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.PubKey;
                fromPartial(object: Partial<_59.PubKey>): _59.PubKey;
                fromAmino(object: _59.PubKeyAmino): _59.PubKey;
                toAmino(message: _59.PubKey): _59.PubKeyAmino;
                fromAminoMsg(object: _59.PubKeyAminoMsg): _59.PubKey;
                toAminoMsg(message: _59.PubKey): _59.PubKeyAminoMsg;
                fromProtoMsg(message: _59.PubKeyProtoMsg): _59.PubKey;
                toProto(message: _59.PubKey): Uint8Array;
                toProtoMsg(message: _59.PubKey): _59.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _59.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.PrivKey;
                fromPartial(object: Partial<_59.PrivKey>): _59.PrivKey;
                fromAmino(object: _59.PrivKeyAmino): _59.PrivKey;
                toAmino(message: _59.PrivKey): _59.PrivKeyAmino;
                fromAminoMsg(object: _59.PrivKeyAminoMsg): _59.PrivKey;
                toAminoMsg(message: _59.PrivKey): _59.PrivKeyAminoMsg;
                fromProtoMsg(message: _59.PrivKeyProtoMsg): _59.PrivKey;
                toProto(message: _59.PrivKey): Uint8Array;
                toProtoMsg(message: _59.PrivKey): _59.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _60.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Module;
                    fromPartial(object: Partial<_60.Module>): _60.Module;
                    fromAmino(object: _60.ModuleAmino): _60.Module;
                    toAmino(message: _60.Module): _60.ModuleAmino;
                    fromAminoMsg(object: _60.ModuleAminoMsg): _60.Module;
                    toAminoMsg(message: _60.Module): _60.ModuleAminoMsg;
                    fromProtoMsg(message: _60.ModuleProtoMsg): _60.Module;
                    toProto(message: _60.Module): Uint8Array;
                    toProtoMsg(message: _60.Module): _60.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                validatorDistributionInfo(request: _63.QueryValidatorDistributionInfoRequest): Promise<_63.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _63.QueryValidatorOutstandingRewardsRequest): Promise<_63.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _63.QueryValidatorCommissionRequest): Promise<_63.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _63.QueryValidatorSlashesRequest): Promise<_63.QueryValidatorSlashesResponse>;
                delegationRewards(request: _63.QueryDelegationRewardsRequest): Promise<_63.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _63.QueryDelegationTotalRewardsRequest): Promise<_63.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _63.QueryDelegatorValidatorsRequest): Promise<_63.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _63.QueryDelegatorWithdrawAddressRequest): Promise<_63.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _63.QueryCommunityPoolRequest): Promise<_63.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _64.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _64.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _64.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _64.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _64.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _64.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _64.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _64.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _64.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _64.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _64.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _64.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _64.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _64.MsgFundCommunityPool;
                    };
                    updateParams(value: _64.MsgUpdateParams): {
                        typeUrl: string;
                        value: _64.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _64.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _64.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _64.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _64.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _64.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _64.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _64.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _64.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _64.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _64.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _64.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _64.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _64.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _64.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _64.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _64.MsgFundCommunityPool;
                    };
                    updateParams(value: _64.MsgUpdateParams): {
                        typeUrl: string;
                        value: _64.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _64.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _64.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _64.MsgSetWithdrawAddress) => _64.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _64.MsgSetWithdrawAddressAmino) => _64.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _64.MsgWithdrawDelegatorReward) => _64.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _64.MsgWithdrawDelegatorRewardAmino) => _64.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _64.MsgWithdrawValidatorCommission) => _64.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _64.MsgWithdrawValidatorCommissionAmino) => _64.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _64.MsgFundCommunityPool) => _64.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _64.MsgFundCommunityPoolAmino) => _64.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _64.MsgUpdateParams) => _64.MsgUpdateParamsAmino;
                    fromAmino: (object: _64.MsgUpdateParamsAmino) => _64.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _64.MsgCommunityPoolSpend) => _64.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _64.MsgCommunityPoolSpendAmino) => _64.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _64.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_64.MsgSetWithdrawAddress>): _64.MsgSetWithdrawAddress;
                fromAmino(object: _64.MsgSetWithdrawAddressAmino): _64.MsgSetWithdrawAddress;
                toAmino(message: _64.MsgSetWithdrawAddress): _64.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _64.MsgSetWithdrawAddressAminoMsg): _64.MsgSetWithdrawAddress;
                toAminoMsg(message: _64.MsgSetWithdrawAddress): _64.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _64.MsgSetWithdrawAddressProtoMsg): _64.MsgSetWithdrawAddress;
                toProto(message: _64.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _64.MsgSetWithdrawAddress): _64.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _64.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_64.MsgSetWithdrawAddressResponse>): _64.MsgSetWithdrawAddressResponse;
                fromAmino(_: _64.MsgSetWithdrawAddressResponseAmino): _64.MsgSetWithdrawAddressResponse;
                toAmino(_: _64.MsgSetWithdrawAddressResponse): _64.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _64.MsgSetWithdrawAddressResponseAminoMsg): _64.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _64.MsgSetWithdrawAddressResponse): _64.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _64.MsgSetWithdrawAddressResponseProtoMsg): _64.MsgSetWithdrawAddressResponse;
                toProto(message: _64.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _64.MsgSetWithdrawAddressResponse): _64.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _64.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_64.MsgWithdrawDelegatorReward>): _64.MsgWithdrawDelegatorReward;
                fromAmino(object: _64.MsgWithdrawDelegatorRewardAmino): _64.MsgWithdrawDelegatorReward;
                toAmino(message: _64.MsgWithdrawDelegatorReward): _64.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _64.MsgWithdrawDelegatorRewardAminoMsg): _64.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _64.MsgWithdrawDelegatorReward): _64.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _64.MsgWithdrawDelegatorRewardProtoMsg): _64.MsgWithdrawDelegatorReward;
                toProto(message: _64.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _64.MsgWithdrawDelegatorReward): _64.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _64.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_64.MsgWithdrawDelegatorRewardResponse>): _64.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _64.MsgWithdrawDelegatorRewardResponseAmino): _64.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _64.MsgWithdrawDelegatorRewardResponse): _64.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _64.MsgWithdrawDelegatorRewardResponseAminoMsg): _64.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _64.MsgWithdrawDelegatorRewardResponse): _64.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _64.MsgWithdrawDelegatorRewardResponseProtoMsg): _64.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _64.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _64.MsgWithdrawDelegatorRewardResponse): _64.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _64.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_64.MsgWithdrawValidatorCommission>): _64.MsgWithdrawValidatorCommission;
                fromAmino(object: _64.MsgWithdrawValidatorCommissionAmino): _64.MsgWithdrawValidatorCommission;
                toAmino(message: _64.MsgWithdrawValidatorCommission): _64.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _64.MsgWithdrawValidatorCommissionAminoMsg): _64.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _64.MsgWithdrawValidatorCommission): _64.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _64.MsgWithdrawValidatorCommissionProtoMsg): _64.MsgWithdrawValidatorCommission;
                toProto(message: _64.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _64.MsgWithdrawValidatorCommission): _64.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _64.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_64.MsgWithdrawValidatorCommissionResponse>): _64.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _64.MsgWithdrawValidatorCommissionResponseAmino): _64.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _64.MsgWithdrawValidatorCommissionResponse): _64.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _64.MsgWithdrawValidatorCommissionResponseAminoMsg): _64.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _64.MsgWithdrawValidatorCommissionResponse): _64.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _64.MsgWithdrawValidatorCommissionResponseProtoMsg): _64.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _64.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _64.MsgWithdrawValidatorCommissionResponse): _64.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _64.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgFundCommunityPool;
                fromPartial(object: Partial<_64.MsgFundCommunityPool>): _64.MsgFundCommunityPool;
                fromAmino(object: _64.MsgFundCommunityPoolAmino): _64.MsgFundCommunityPool;
                toAmino(message: _64.MsgFundCommunityPool): _64.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _64.MsgFundCommunityPoolAminoMsg): _64.MsgFundCommunityPool;
                toAminoMsg(message: _64.MsgFundCommunityPool): _64.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _64.MsgFundCommunityPoolProtoMsg): _64.MsgFundCommunityPool;
                toProto(message: _64.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _64.MsgFundCommunityPool): _64.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _64.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_64.MsgFundCommunityPoolResponse>): _64.MsgFundCommunityPoolResponse;
                fromAmino(_: _64.MsgFundCommunityPoolResponseAmino): _64.MsgFundCommunityPoolResponse;
                toAmino(_: _64.MsgFundCommunityPoolResponse): _64.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _64.MsgFundCommunityPoolResponseAminoMsg): _64.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _64.MsgFundCommunityPoolResponse): _64.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _64.MsgFundCommunityPoolResponseProtoMsg): _64.MsgFundCommunityPoolResponse;
                toProto(message: _64.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _64.MsgFundCommunityPoolResponse): _64.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _64.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgUpdateParams;
                fromPartial(object: Partial<_64.MsgUpdateParams>): _64.MsgUpdateParams;
                fromAmino(object: _64.MsgUpdateParamsAmino): _64.MsgUpdateParams;
                toAmino(message: _64.MsgUpdateParams): _64.MsgUpdateParamsAmino;
                fromAminoMsg(object: _64.MsgUpdateParamsAminoMsg): _64.MsgUpdateParams;
                toAminoMsg(message: _64.MsgUpdateParams): _64.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _64.MsgUpdateParamsProtoMsg): _64.MsgUpdateParams;
                toProto(message: _64.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _64.MsgUpdateParams): _64.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _64.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_64.MsgUpdateParamsResponse>): _64.MsgUpdateParamsResponse;
                fromAmino(_: _64.MsgUpdateParamsResponseAmino): _64.MsgUpdateParamsResponse;
                toAmino(_: _64.MsgUpdateParamsResponse): _64.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _64.MsgUpdateParamsResponseAminoMsg): _64.MsgUpdateParamsResponse;
                toAminoMsg(message: _64.MsgUpdateParamsResponse): _64.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _64.MsgUpdateParamsResponseProtoMsg): _64.MsgUpdateParamsResponse;
                toProto(message: _64.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _64.MsgUpdateParamsResponse): _64.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _64.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_64.MsgCommunityPoolSpend>): _64.MsgCommunityPoolSpend;
                fromAmino(object: _64.MsgCommunityPoolSpendAmino): _64.MsgCommunityPoolSpend;
                toAmino(message: _64.MsgCommunityPoolSpend): _64.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _64.MsgCommunityPoolSpendAminoMsg): _64.MsgCommunityPoolSpend;
                toAminoMsg(message: _64.MsgCommunityPoolSpend): _64.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _64.MsgCommunityPoolSpendProtoMsg): _64.MsgCommunityPoolSpend;
                toProto(message: _64.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _64.MsgCommunityPoolSpend): _64.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _64.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_64.MsgCommunityPoolSpendResponse>): _64.MsgCommunityPoolSpendResponse;
                fromAmino(_: _64.MsgCommunityPoolSpendResponseAmino): _64.MsgCommunityPoolSpendResponse;
                toAmino(_: _64.MsgCommunityPoolSpendResponse): _64.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _64.MsgCommunityPoolSpendResponseAminoMsg): _64.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _64.MsgCommunityPoolSpendResponse): _64.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _64.MsgCommunityPoolSpendResponseProtoMsg): _64.MsgCommunityPoolSpendResponse;
                toProto(message: _64.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _64.MsgCommunityPoolSpendResponse): _64.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _63.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.QueryParamsRequest;
                fromPartial(_: Partial<_63.QueryParamsRequest>): _63.QueryParamsRequest;
                fromAmino(_: _63.QueryParamsRequestAmino): _63.QueryParamsRequest;
                toAmino(_: _63.QueryParamsRequest): _63.QueryParamsRequestAmino;
                fromAminoMsg(object: _63.QueryParamsRequestAminoMsg): _63.QueryParamsRequest;
                toAminoMsg(message: _63.QueryParamsRequest): _63.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryParamsRequestProtoMsg): _63.QueryParamsRequest;
                toProto(message: _63.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryParamsRequest): _63.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _63.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryParamsResponse;
                fromPartial(object: Partial<_63.QueryParamsResponse>): _63.QueryParamsResponse;
                fromAmino(object: _63.QueryParamsResponseAmino): _63.QueryParamsResponse;
                toAmino(message: _63.QueryParamsResponse): _63.QueryParamsResponseAmino;
                fromAminoMsg(object: _63.QueryParamsResponseAminoMsg): _63.QueryParamsResponse;
                toAminoMsg(message: _63.QueryParamsResponse): _63.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryParamsResponseProtoMsg): _63.QueryParamsResponse;
                toProto(message: _63.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryParamsResponse): _63.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _63.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_63.QueryValidatorDistributionInfoRequest>): _63.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _63.QueryValidatorDistributionInfoRequestAmino): _63.QueryValidatorDistributionInfoRequest;
                toAmino(message: _63.QueryValidatorDistributionInfoRequest): _63.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _63.QueryValidatorDistributionInfoRequestAminoMsg): _63.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _63.QueryValidatorDistributionInfoRequest): _63.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorDistributionInfoRequestProtoMsg): _63.QueryValidatorDistributionInfoRequest;
                toProto(message: _63.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorDistributionInfoRequest): _63.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _63.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_63.QueryValidatorDistributionInfoResponse>): _63.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _63.QueryValidatorDistributionInfoResponseAmino): _63.QueryValidatorDistributionInfoResponse;
                toAmino(message: _63.QueryValidatorDistributionInfoResponse): _63.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _63.QueryValidatorDistributionInfoResponseAminoMsg): _63.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _63.QueryValidatorDistributionInfoResponse): _63.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorDistributionInfoResponseProtoMsg): _63.QueryValidatorDistributionInfoResponse;
                toProto(message: _63.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorDistributionInfoResponse): _63.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _63.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_63.QueryValidatorOutstandingRewardsRequest>): _63.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _63.QueryValidatorOutstandingRewardsRequestAmino): _63.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _63.QueryValidatorOutstandingRewardsRequest): _63.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _63.QueryValidatorOutstandingRewardsRequestAminoMsg): _63.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _63.QueryValidatorOutstandingRewardsRequest): _63.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorOutstandingRewardsRequestProtoMsg): _63.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _63.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorOutstandingRewardsRequest): _63.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _63.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_63.QueryValidatorOutstandingRewardsResponse>): _63.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _63.QueryValidatorOutstandingRewardsResponseAmino): _63.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _63.QueryValidatorOutstandingRewardsResponse): _63.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _63.QueryValidatorOutstandingRewardsResponseAminoMsg): _63.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _63.QueryValidatorOutstandingRewardsResponse): _63.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorOutstandingRewardsResponseProtoMsg): _63.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _63.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorOutstandingRewardsResponse): _63.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _63.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_63.QueryValidatorCommissionRequest>): _63.QueryValidatorCommissionRequest;
                fromAmino(object: _63.QueryValidatorCommissionRequestAmino): _63.QueryValidatorCommissionRequest;
                toAmino(message: _63.QueryValidatorCommissionRequest): _63.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _63.QueryValidatorCommissionRequestAminoMsg): _63.QueryValidatorCommissionRequest;
                toAminoMsg(message: _63.QueryValidatorCommissionRequest): _63.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorCommissionRequestProtoMsg): _63.QueryValidatorCommissionRequest;
                toProto(message: _63.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorCommissionRequest): _63.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _63.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_63.QueryValidatorCommissionResponse>): _63.QueryValidatorCommissionResponse;
                fromAmino(object: _63.QueryValidatorCommissionResponseAmino): _63.QueryValidatorCommissionResponse;
                toAmino(message: _63.QueryValidatorCommissionResponse): _63.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _63.QueryValidatorCommissionResponseAminoMsg): _63.QueryValidatorCommissionResponse;
                toAminoMsg(message: _63.QueryValidatorCommissionResponse): _63.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorCommissionResponseProtoMsg): _63.QueryValidatorCommissionResponse;
                toProto(message: _63.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorCommissionResponse): _63.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _63.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_63.QueryValidatorSlashesRequest>): _63.QueryValidatorSlashesRequest;
                fromAmino(object: _63.QueryValidatorSlashesRequestAmino): _63.QueryValidatorSlashesRequest;
                toAmino(message: _63.QueryValidatorSlashesRequest): _63.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _63.QueryValidatorSlashesRequestAminoMsg): _63.QueryValidatorSlashesRequest;
                toAminoMsg(message: _63.QueryValidatorSlashesRequest): _63.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorSlashesRequestProtoMsg): _63.QueryValidatorSlashesRequest;
                toProto(message: _63.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorSlashesRequest): _63.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _63.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_63.QueryValidatorSlashesResponse>): _63.QueryValidatorSlashesResponse;
                fromAmino(object: _63.QueryValidatorSlashesResponseAmino): _63.QueryValidatorSlashesResponse;
                toAmino(message: _63.QueryValidatorSlashesResponse): _63.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _63.QueryValidatorSlashesResponseAminoMsg): _63.QueryValidatorSlashesResponse;
                toAminoMsg(message: _63.QueryValidatorSlashesResponse): _63.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _63.QueryValidatorSlashesResponseProtoMsg): _63.QueryValidatorSlashesResponse;
                toProto(message: _63.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _63.QueryValidatorSlashesResponse): _63.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _63.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_63.QueryDelegationRewardsRequest>): _63.QueryDelegationRewardsRequest;
                fromAmino(object: _63.QueryDelegationRewardsRequestAmino): _63.QueryDelegationRewardsRequest;
                toAmino(message: _63.QueryDelegationRewardsRequest): _63.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _63.QueryDelegationRewardsRequestAminoMsg): _63.QueryDelegationRewardsRequest;
                toAminoMsg(message: _63.QueryDelegationRewardsRequest): _63.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryDelegationRewardsRequestProtoMsg): _63.QueryDelegationRewardsRequest;
                toProto(message: _63.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryDelegationRewardsRequest): _63.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _63.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_63.QueryDelegationRewardsResponse>): _63.QueryDelegationRewardsResponse;
                fromAmino(object: _63.QueryDelegationRewardsResponseAmino): _63.QueryDelegationRewardsResponse;
                toAmino(message: _63.QueryDelegationRewardsResponse): _63.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _63.QueryDelegationRewardsResponseAminoMsg): _63.QueryDelegationRewardsResponse;
                toAminoMsg(message: _63.QueryDelegationRewardsResponse): _63.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryDelegationRewardsResponseProtoMsg): _63.QueryDelegationRewardsResponse;
                toProto(message: _63.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryDelegationRewardsResponse): _63.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _63.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_63.QueryDelegationTotalRewardsRequest>): _63.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _63.QueryDelegationTotalRewardsRequestAmino): _63.QueryDelegationTotalRewardsRequest;
                toAmino(message: _63.QueryDelegationTotalRewardsRequest): _63.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _63.QueryDelegationTotalRewardsRequestAminoMsg): _63.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _63.QueryDelegationTotalRewardsRequest): _63.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryDelegationTotalRewardsRequestProtoMsg): _63.QueryDelegationTotalRewardsRequest;
                toProto(message: _63.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryDelegationTotalRewardsRequest): _63.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _63.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_63.QueryDelegationTotalRewardsResponse>): _63.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _63.QueryDelegationTotalRewardsResponseAmino): _63.QueryDelegationTotalRewardsResponse;
                toAmino(message: _63.QueryDelegationTotalRewardsResponse): _63.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _63.QueryDelegationTotalRewardsResponseAminoMsg): _63.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _63.QueryDelegationTotalRewardsResponse): _63.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryDelegationTotalRewardsResponseProtoMsg): _63.QueryDelegationTotalRewardsResponse;
                toProto(message: _63.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryDelegationTotalRewardsResponse): _63.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _63.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_63.QueryDelegatorValidatorsRequest>): _63.QueryDelegatorValidatorsRequest;
                fromAmino(object: _63.QueryDelegatorValidatorsRequestAmino): _63.QueryDelegatorValidatorsRequest;
                toAmino(message: _63.QueryDelegatorValidatorsRequest): _63.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _63.QueryDelegatorValidatorsRequestAminoMsg): _63.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _63.QueryDelegatorValidatorsRequest): _63.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _63.QueryDelegatorValidatorsRequestProtoMsg): _63.QueryDelegatorValidatorsRequest;
                toProto(message: _63.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryDelegatorValidatorsRequest): _63.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _63.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_63.QueryDelegatorValidatorsResponse>): _63.QueryDelegatorValidatorsResponse;
                fromAmino(object: _63.QueryDelegatorValidatorsResponseAmino): _63.QueryDelegatorValidatorsResponse;
                toAmino(message: _63.QueryDelegatorValidatorsResponse): _63.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _63.QueryDelegatorValidatorsResponseAminoMsg): _63.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _63.QueryDelegatorValidatorsResponse): _63.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _63.QueryDelegatorValidatorsResponseProtoMsg): _63.QueryDelegatorValidatorsResponse;
                toProto(message: _63.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryDelegatorValidatorsResponse): _63.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _63.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_63.QueryDelegatorWithdrawAddressRequest>): _63.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _63.QueryDelegatorWithdrawAddressRequestAmino): _63.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _63.QueryDelegatorWithdrawAddressRequest): _63.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _63.QueryDelegatorWithdrawAddressRequestAminoMsg): _63.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _63.QueryDelegatorWithdrawAddressRequest): _63.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _63.QueryDelegatorWithdrawAddressRequestProtoMsg): _63.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _63.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _63.QueryDelegatorWithdrawAddressRequest): _63.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _63.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_63.QueryDelegatorWithdrawAddressResponse>): _63.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _63.QueryDelegatorWithdrawAddressResponseAmino): _63.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _63.QueryDelegatorWithdrawAddressResponse): _63.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _63.QueryDelegatorWithdrawAddressResponseAminoMsg): _63.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _63.QueryDelegatorWithdrawAddressResponse): _63.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _63.QueryDelegatorWithdrawAddressResponseProtoMsg): _63.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _63.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _63.QueryDelegatorWithdrawAddressResponse): _63.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _63.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_63.QueryCommunityPoolRequest>): _63.QueryCommunityPoolRequest;
                fromAmino(_: _63.QueryCommunityPoolRequestAmino): _63.QueryCommunityPoolRequest;
                toAmino(_: _63.QueryCommunityPoolRequest): _63.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _63.QueryCommunityPoolRequestAminoMsg): _63.QueryCommunityPoolRequest;
                toAminoMsg(message: _63.QueryCommunityPoolRequest): _63.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _63.QueryCommunityPoolRequestProtoMsg): _63.QueryCommunityPoolRequest;
                toProto(message: _63.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _63.QueryCommunityPoolRequest): _63.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _63.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_63.QueryCommunityPoolResponse>): _63.QueryCommunityPoolResponse;
                fromAmino(object: _63.QueryCommunityPoolResponseAmino): _63.QueryCommunityPoolResponse;
                toAmino(message: _63.QueryCommunityPoolResponse): _63.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _63.QueryCommunityPoolResponseAminoMsg): _63.QueryCommunityPoolResponse;
                toAminoMsg(message: _63.QueryCommunityPoolResponse): _63.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _63.QueryCommunityPoolResponseProtoMsg): _63.QueryCommunityPoolResponse;
                toProto(message: _63.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _63.QueryCommunityPoolResponse): _63.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _62.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_62.DelegatorWithdrawInfo>): _62.DelegatorWithdrawInfo;
                fromAmino(object: _62.DelegatorWithdrawInfoAmino): _62.DelegatorWithdrawInfo;
                toAmino(message: _62.DelegatorWithdrawInfo): _62.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _62.DelegatorWithdrawInfoAminoMsg): _62.DelegatorWithdrawInfo;
                toAminoMsg(message: _62.DelegatorWithdrawInfo): _62.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _62.DelegatorWithdrawInfoProtoMsg): _62.DelegatorWithdrawInfo;
                toProto(message: _62.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _62.DelegatorWithdrawInfo): _62.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _62.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_62.ValidatorOutstandingRewardsRecord>): _62.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _62.ValidatorOutstandingRewardsRecordAmino): _62.ValidatorOutstandingRewardsRecord;
                toAmino(message: _62.ValidatorOutstandingRewardsRecord): _62.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _62.ValidatorOutstandingRewardsRecordAminoMsg): _62.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _62.ValidatorOutstandingRewardsRecord): _62.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _62.ValidatorOutstandingRewardsRecordProtoMsg): _62.ValidatorOutstandingRewardsRecord;
                toProto(message: _62.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _62.ValidatorOutstandingRewardsRecord): _62.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _62.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_62.ValidatorAccumulatedCommissionRecord>): _62.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _62.ValidatorAccumulatedCommissionRecordAmino): _62.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _62.ValidatorAccumulatedCommissionRecord): _62.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _62.ValidatorAccumulatedCommissionRecordAminoMsg): _62.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _62.ValidatorAccumulatedCommissionRecord): _62.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _62.ValidatorAccumulatedCommissionRecordProtoMsg): _62.ValidatorAccumulatedCommissionRecord;
                toProto(message: _62.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _62.ValidatorAccumulatedCommissionRecord): _62.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _62.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_62.ValidatorHistoricalRewardsRecord>): _62.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _62.ValidatorHistoricalRewardsRecordAmino): _62.ValidatorHistoricalRewardsRecord;
                toAmino(message: _62.ValidatorHistoricalRewardsRecord): _62.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _62.ValidatorHistoricalRewardsRecordAminoMsg): _62.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _62.ValidatorHistoricalRewardsRecord): _62.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _62.ValidatorHistoricalRewardsRecordProtoMsg): _62.ValidatorHistoricalRewardsRecord;
                toProto(message: _62.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _62.ValidatorHistoricalRewardsRecord): _62.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _62.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_62.ValidatorCurrentRewardsRecord>): _62.ValidatorCurrentRewardsRecord;
                fromAmino(object: _62.ValidatorCurrentRewardsRecordAmino): _62.ValidatorCurrentRewardsRecord;
                toAmino(message: _62.ValidatorCurrentRewardsRecord): _62.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _62.ValidatorCurrentRewardsRecordAminoMsg): _62.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _62.ValidatorCurrentRewardsRecord): _62.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _62.ValidatorCurrentRewardsRecordProtoMsg): _62.ValidatorCurrentRewardsRecord;
                toProto(message: _62.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _62.ValidatorCurrentRewardsRecord): _62.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _62.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_62.DelegatorStartingInfoRecord>): _62.DelegatorStartingInfoRecord;
                fromAmino(object: _62.DelegatorStartingInfoRecordAmino): _62.DelegatorStartingInfoRecord;
                toAmino(message: _62.DelegatorStartingInfoRecord): _62.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _62.DelegatorStartingInfoRecordAminoMsg): _62.DelegatorStartingInfoRecord;
                toAminoMsg(message: _62.DelegatorStartingInfoRecord): _62.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _62.DelegatorStartingInfoRecordProtoMsg): _62.DelegatorStartingInfoRecord;
                toProto(message: _62.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _62.DelegatorStartingInfoRecord): _62.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _62.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_62.ValidatorSlashEventRecord>): _62.ValidatorSlashEventRecord;
                fromAmino(object: _62.ValidatorSlashEventRecordAmino): _62.ValidatorSlashEventRecord;
                toAmino(message: _62.ValidatorSlashEventRecord): _62.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _62.ValidatorSlashEventRecordAminoMsg): _62.ValidatorSlashEventRecord;
                toAminoMsg(message: _62.ValidatorSlashEventRecord): _62.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _62.ValidatorSlashEventRecordProtoMsg): _62.ValidatorSlashEventRecord;
                toProto(message: _62.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _62.ValidatorSlashEventRecord): _62.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _61.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Params;
                fromPartial(object: Partial<_61.Params>): _61.Params;
                fromAmino(object: _61.ParamsAmino): _61.Params;
                toAmino(message: _61.Params): _61.ParamsAmino;
                fromAminoMsg(object: _61.ParamsAminoMsg): _61.Params;
                toAminoMsg(message: _61.Params): _61.ParamsAminoMsg;
                fromProtoMsg(message: _61.ParamsProtoMsg): _61.Params;
                toProto(message: _61.Params): Uint8Array;
                toProtoMsg(message: _61.Params): _61.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _61.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_61.ValidatorHistoricalRewards>): _61.ValidatorHistoricalRewards;
                fromAmino(object: _61.ValidatorHistoricalRewardsAmino): _61.ValidatorHistoricalRewards;
                toAmino(message: _61.ValidatorHistoricalRewards): _61.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _61.ValidatorHistoricalRewardsAminoMsg): _61.ValidatorHistoricalRewards;
                toAminoMsg(message: _61.ValidatorHistoricalRewards): _61.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _61.ValidatorHistoricalRewardsProtoMsg): _61.ValidatorHistoricalRewards;
                toProto(message: _61.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _61.ValidatorHistoricalRewards): _61.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _61.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorCurrentRewards;
                fromPartial(object: Partial<_61.ValidatorCurrentRewards>): _61.ValidatorCurrentRewards;
                fromAmino(object: _61.ValidatorCurrentRewardsAmino): _61.ValidatorCurrentRewards;
                toAmino(message: _61.ValidatorCurrentRewards): _61.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _61.ValidatorCurrentRewardsAminoMsg): _61.ValidatorCurrentRewards;
                toAminoMsg(message: _61.ValidatorCurrentRewards): _61.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _61.ValidatorCurrentRewardsProtoMsg): _61.ValidatorCurrentRewards;
                toProto(message: _61.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _61.ValidatorCurrentRewards): _61.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _61.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_61.ValidatorAccumulatedCommission>): _61.ValidatorAccumulatedCommission;
                fromAmino(object: _61.ValidatorAccumulatedCommissionAmino): _61.ValidatorAccumulatedCommission;
                toAmino(message: _61.ValidatorAccumulatedCommission): _61.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _61.ValidatorAccumulatedCommissionAminoMsg): _61.ValidatorAccumulatedCommission;
                toAminoMsg(message: _61.ValidatorAccumulatedCommission): _61.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _61.ValidatorAccumulatedCommissionProtoMsg): _61.ValidatorAccumulatedCommission;
                toProto(message: _61.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _61.ValidatorAccumulatedCommission): _61.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _61.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_61.ValidatorOutstandingRewards>): _61.ValidatorOutstandingRewards;
                fromAmino(object: _61.ValidatorOutstandingRewardsAmino): _61.ValidatorOutstandingRewards;
                toAmino(message: _61.ValidatorOutstandingRewards): _61.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _61.ValidatorOutstandingRewardsAminoMsg): _61.ValidatorOutstandingRewards;
                toAminoMsg(message: _61.ValidatorOutstandingRewards): _61.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _61.ValidatorOutstandingRewardsProtoMsg): _61.ValidatorOutstandingRewards;
                toProto(message: _61.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _61.ValidatorOutstandingRewards): _61.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _61.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorSlashEvent;
                fromPartial(object: Partial<_61.ValidatorSlashEvent>): _61.ValidatorSlashEvent;
                fromAmino(object: _61.ValidatorSlashEventAmino): _61.ValidatorSlashEvent;
                toAmino(message: _61.ValidatorSlashEvent): _61.ValidatorSlashEventAmino;
                fromAminoMsg(object: _61.ValidatorSlashEventAminoMsg): _61.ValidatorSlashEvent;
                toAminoMsg(message: _61.ValidatorSlashEvent): _61.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _61.ValidatorSlashEventProtoMsg): _61.ValidatorSlashEvent;
                toProto(message: _61.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _61.ValidatorSlashEvent): _61.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _61.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ValidatorSlashEvents;
                fromPartial(object: Partial<_61.ValidatorSlashEvents>): _61.ValidatorSlashEvents;
                fromAmino(object: _61.ValidatorSlashEventsAmino): _61.ValidatorSlashEvents;
                toAmino(message: _61.ValidatorSlashEvents): _61.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _61.ValidatorSlashEventsAminoMsg): _61.ValidatorSlashEvents;
                toAminoMsg(message: _61.ValidatorSlashEvents): _61.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _61.ValidatorSlashEventsProtoMsg): _61.ValidatorSlashEvents;
                toProto(message: _61.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _61.ValidatorSlashEvents): _61.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _61.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.FeePool;
                fromPartial(object: Partial<_61.FeePool>): _61.FeePool;
                fromAmino(object: _61.FeePoolAmino): _61.FeePool;
                toAmino(message: _61.FeePool): _61.FeePoolAmino;
                fromAminoMsg(object: _61.FeePoolAminoMsg): _61.FeePool;
                toAminoMsg(message: _61.FeePool): _61.FeePoolAminoMsg;
                fromProtoMsg(message: _61.FeePoolProtoMsg): _61.FeePool;
                toProto(message: _61.FeePool): Uint8Array;
                toProtoMsg(message: _61.FeePool): _61.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _61.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_61.CommunityPoolSpendProposal>): _61.CommunityPoolSpendProposal;
                fromAmino(object: _61.CommunityPoolSpendProposalAmino): _61.CommunityPoolSpendProposal;
                toAmino(message: _61.CommunityPoolSpendProposal): _61.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _61.CommunityPoolSpendProposalAminoMsg): _61.CommunityPoolSpendProposal;
                toAminoMsg(message: _61.CommunityPoolSpendProposal): _61.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _61.CommunityPoolSpendProposalProtoMsg): _61.CommunityPoolSpendProposal;
                toProto(message: _61.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _61.CommunityPoolSpendProposal): _61.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _61.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DelegatorStartingInfo;
                fromPartial(object: Partial<_61.DelegatorStartingInfo>): _61.DelegatorStartingInfo;
                fromAmino(object: _61.DelegatorStartingInfoAmino): _61.DelegatorStartingInfo;
                toAmino(message: _61.DelegatorStartingInfo): _61.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _61.DelegatorStartingInfoAminoMsg): _61.DelegatorStartingInfo;
                toAminoMsg(message: _61.DelegatorStartingInfo): _61.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _61.DelegatorStartingInfoProtoMsg): _61.DelegatorStartingInfo;
                toProto(message: _61.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _61.DelegatorStartingInfo): _61.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _61.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DelegationDelegatorReward;
                fromPartial(object: Partial<_61.DelegationDelegatorReward>): _61.DelegationDelegatorReward;
                fromAmino(object: _61.DelegationDelegatorRewardAmino): _61.DelegationDelegatorReward;
                toAmino(message: _61.DelegationDelegatorReward): _61.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _61.DelegationDelegatorRewardAminoMsg): _61.DelegationDelegatorReward;
                toAminoMsg(message: _61.DelegationDelegatorReward): _61.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _61.DelegationDelegatorRewardProtoMsg): _61.DelegationDelegatorReward;
                toProto(message: _61.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _61.DelegationDelegatorReward): _61.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _61.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_61.CommunityPoolSpendProposalWithDeposit>): _61.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _61.CommunityPoolSpendProposalWithDepositAmino): _61.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _61.CommunityPoolSpendProposalWithDeposit): _61.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _61.CommunityPoolSpendProposalWithDepositAminoMsg): _61.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _61.CommunityPoolSpendProposalWithDeposit): _61.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _61.CommunityPoolSpendProposalWithDepositProtoMsg): _61.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _61.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _61.CommunityPoolSpendProposalWithDeposit): _61.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
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
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _68.QueryEvidenceRequest): Promise<_68.QueryEvidenceResponse>;
                allEvidence(request?: _68.QueryAllEvidenceRequest): Promise<_68.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
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
                    toAmino: (message: _69.MsgSubmitEvidence) => _69.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _69.MsgSubmitEvidenceAmino) => _69.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _69.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitEvidence;
                fromPartial(object: Partial<_69.MsgSubmitEvidence>): _69.MsgSubmitEvidence;
                fromAmino(object: _69.MsgSubmitEvidenceAmino): _69.MsgSubmitEvidence;
                toAmino(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _69.MsgSubmitEvidenceAminoMsg): _69.MsgSubmitEvidence;
                toAminoMsg(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitEvidenceProtoMsg): _69.MsgSubmitEvidence;
                toProto(message: _69.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitEvidence): _69.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _69.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_69.MsgSubmitEvidenceResponse>): _69.MsgSubmitEvidenceResponse;
                fromAmino(object: _69.MsgSubmitEvidenceResponseAmino): _69.MsgSubmitEvidenceResponse;
                toAmino(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _69.MsgSubmitEvidenceResponseAminoMsg): _69.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitEvidenceResponseProtoMsg): _69.MsgSubmitEvidenceResponse;
                toProto(message: _69.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitEvidenceResponse): _69.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _68.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryEvidenceRequest;
                fromPartial(object: Partial<_68.QueryEvidenceRequest>): _68.QueryEvidenceRequest;
                fromAmino(object: _68.QueryEvidenceRequestAmino): _68.QueryEvidenceRequest;
                toAmino(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _68.QueryEvidenceRequestAminoMsg): _68.QueryEvidenceRequest;
                toAminoMsg(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryEvidenceRequestProtoMsg): _68.QueryEvidenceRequest;
                toProto(message: _68.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryEvidenceRequest): _68.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _68.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryEvidenceResponse;
                fromPartial(object: Partial<_68.QueryEvidenceResponse>): _68.QueryEvidenceResponse;
                fromAmino(object: _68.QueryEvidenceResponseAmino): _68.QueryEvidenceResponse;
                toAmino(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _68.QueryEvidenceResponseAminoMsg): _68.QueryEvidenceResponse;
                toAminoMsg(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryEvidenceResponseProtoMsg): _68.QueryEvidenceResponse;
                toProto(message: _68.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryEvidenceResponse): _68.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_68.QueryAllEvidenceRequest>): _68.QueryAllEvidenceRequest;
                fromAmino(object: _68.QueryAllEvidenceRequestAmino): _68.QueryAllEvidenceRequest;
                toAmino(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _68.QueryAllEvidenceRequestAminoMsg): _68.QueryAllEvidenceRequest;
                toAminoMsg(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllEvidenceRequestProtoMsg): _68.QueryAllEvidenceRequest;
                toProto(message: _68.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllEvidenceRequest): _68.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_68.QueryAllEvidenceResponse>): _68.QueryAllEvidenceResponse;
                fromAmino(object: _68.QueryAllEvidenceResponseAmino): _68.QueryAllEvidenceResponse;
                toAmino(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _68.QueryAllEvidenceResponseAminoMsg): _68.QueryAllEvidenceResponse;
                toAminoMsg(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllEvidenceResponseProtoMsg): _68.QueryAllEvidenceResponse;
                toProto(message: _68.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllEvidenceResponse): _68.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _66.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Equivocation;
                fromPartial(object: Partial<_66.Equivocation>): _66.Equivocation;
                fromAmino(object: _66.EquivocationAmino): _66.Equivocation;
                toAmino(message: _66.Equivocation): _66.EquivocationAmino;
                fromAminoMsg(object: _66.EquivocationAminoMsg): _66.Equivocation;
                toAminoMsg(message: _66.Equivocation): _66.EquivocationAminoMsg;
                fromProtoMsg(message: _66.EquivocationProtoMsg): _66.Equivocation;
                toProto(message: _66.Equivocation): Uint8Array;
                toProtoMsg(message: _66.Equivocation): _66.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
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
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _73.QueryAllowanceRequest): Promise<_73.QueryAllowanceResponse>;
                allowances(request: _73.QueryAllowancesRequest): Promise<_73.QueryAllowancesResponse>;
                allowancesByGranter(request: _73.QueryAllowancesByGranterRequest): Promise<_73.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _74.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _74.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _74.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _74.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _74.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _74.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _74.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _74.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _74.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _74.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _74.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _74.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _74.MsgGrantAllowance) => _74.MsgGrantAllowanceAmino;
                    fromAmino: (object: _74.MsgGrantAllowanceAmino) => _74.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _74.MsgRevokeAllowance) => _74.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _74.MsgRevokeAllowanceAmino) => _74.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _74.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgGrantAllowance;
                fromPartial(object: Partial<_74.MsgGrantAllowance>): _74.MsgGrantAllowance;
                fromAmino(object: _74.MsgGrantAllowanceAmino): _74.MsgGrantAllowance;
                toAmino(message: _74.MsgGrantAllowance): _74.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _74.MsgGrantAllowanceAminoMsg): _74.MsgGrantAllowance;
                toAminoMsg(message: _74.MsgGrantAllowance): _74.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _74.MsgGrantAllowanceProtoMsg): _74.MsgGrantAllowance;
                toProto(message: _74.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _74.MsgGrantAllowance): _74.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _74.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_74.MsgGrantAllowanceResponse>): _74.MsgGrantAllowanceResponse;
                fromAmino(_: _74.MsgGrantAllowanceResponseAmino): _74.MsgGrantAllowanceResponse;
                toAmino(_: _74.MsgGrantAllowanceResponse): _74.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _74.MsgGrantAllowanceResponseAminoMsg): _74.MsgGrantAllowanceResponse;
                toAminoMsg(message: _74.MsgGrantAllowanceResponse): _74.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _74.MsgGrantAllowanceResponseProtoMsg): _74.MsgGrantAllowanceResponse;
                toProto(message: _74.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _74.MsgGrantAllowanceResponse): _74.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _74.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgRevokeAllowance;
                fromPartial(object: Partial<_74.MsgRevokeAllowance>): _74.MsgRevokeAllowance;
                fromAmino(object: _74.MsgRevokeAllowanceAmino): _74.MsgRevokeAllowance;
                toAmino(message: _74.MsgRevokeAllowance): _74.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _74.MsgRevokeAllowanceAminoMsg): _74.MsgRevokeAllowance;
                toAminoMsg(message: _74.MsgRevokeAllowance): _74.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _74.MsgRevokeAllowanceProtoMsg): _74.MsgRevokeAllowance;
                toProto(message: _74.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _74.MsgRevokeAllowance): _74.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _74.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_74.MsgRevokeAllowanceResponse>): _74.MsgRevokeAllowanceResponse;
                fromAmino(_: _74.MsgRevokeAllowanceResponseAmino): _74.MsgRevokeAllowanceResponse;
                toAmino(_: _74.MsgRevokeAllowanceResponse): _74.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _74.MsgRevokeAllowanceResponseAminoMsg): _74.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _74.MsgRevokeAllowanceResponse): _74.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _74.MsgRevokeAllowanceResponseProtoMsg): _74.MsgRevokeAllowanceResponse;
                toProto(message: _74.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _74.MsgRevokeAllowanceResponse): _74.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _71.BasicAllowance | _71.PeriodicAllowance | _71.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _73.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllowanceRequest;
                fromPartial(object: Partial<_73.QueryAllowanceRequest>): _73.QueryAllowanceRequest;
                fromAmino(object: _73.QueryAllowanceRequestAmino): _73.QueryAllowanceRequest;
                toAmino(message: _73.QueryAllowanceRequest): _73.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _73.QueryAllowanceRequestAminoMsg): _73.QueryAllowanceRequest;
                toAminoMsg(message: _73.QueryAllowanceRequest): _73.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _73.QueryAllowanceRequestProtoMsg): _73.QueryAllowanceRequest;
                toProto(message: _73.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _73.QueryAllowanceRequest): _73.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _73.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllowanceResponse;
                fromPartial(object: Partial<_73.QueryAllowanceResponse>): _73.QueryAllowanceResponse;
                fromAmino(object: _73.QueryAllowanceResponseAmino): _73.QueryAllowanceResponse;
                toAmino(message: _73.QueryAllowanceResponse): _73.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _73.QueryAllowanceResponseAminoMsg): _73.QueryAllowanceResponse;
                toAminoMsg(message: _73.QueryAllowanceResponse): _73.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _73.QueryAllowanceResponseProtoMsg): _73.QueryAllowanceResponse;
                toProto(message: _73.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _73.QueryAllowanceResponse): _73.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _73.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllowancesRequest;
                fromPartial(object: Partial<_73.QueryAllowancesRequest>): _73.QueryAllowancesRequest;
                fromAmino(object: _73.QueryAllowancesRequestAmino): _73.QueryAllowancesRequest;
                toAmino(message: _73.QueryAllowancesRequest): _73.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _73.QueryAllowancesRequestAminoMsg): _73.QueryAllowancesRequest;
                toAminoMsg(message: _73.QueryAllowancesRequest): _73.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _73.QueryAllowancesRequestProtoMsg): _73.QueryAllowancesRequest;
                toProto(message: _73.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _73.QueryAllowancesRequest): _73.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _73.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllowancesResponse;
                fromPartial(object: Partial<_73.QueryAllowancesResponse>): _73.QueryAllowancesResponse;
                fromAmino(object: _73.QueryAllowancesResponseAmino): _73.QueryAllowancesResponse;
                toAmino(message: _73.QueryAllowancesResponse): _73.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _73.QueryAllowancesResponseAminoMsg): _73.QueryAllowancesResponse;
                toAminoMsg(message: _73.QueryAllowancesResponse): _73.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _73.QueryAllowancesResponseProtoMsg): _73.QueryAllowancesResponse;
                toProto(message: _73.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _73.QueryAllowancesResponse): _73.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _73.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_73.QueryAllowancesByGranterRequest>): _73.QueryAllowancesByGranterRequest;
                fromAmino(object: _73.QueryAllowancesByGranterRequestAmino): _73.QueryAllowancesByGranterRequest;
                toAmino(message: _73.QueryAllowancesByGranterRequest): _73.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _73.QueryAllowancesByGranterRequestAminoMsg): _73.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _73.QueryAllowancesByGranterRequest): _73.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _73.QueryAllowancesByGranterRequestProtoMsg): _73.QueryAllowancesByGranterRequest;
                toProto(message: _73.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _73.QueryAllowancesByGranterRequest): _73.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _73.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_73.QueryAllowancesByGranterResponse>): _73.QueryAllowancesByGranterResponse;
                fromAmino(object: _73.QueryAllowancesByGranterResponseAmino): _73.QueryAllowancesByGranterResponse;
                toAmino(message: _73.QueryAllowancesByGranterResponse): _73.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _73.QueryAllowancesByGranterResponseAminoMsg): _73.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _73.QueryAllowancesByGranterResponse): _73.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _73.QueryAllowancesByGranterResponseProtoMsg): _73.QueryAllowancesByGranterResponse;
                toProto(message: _73.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _73.QueryAllowancesByGranterResponse): _73.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _72.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.GenesisState;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                toProto(message: _72.GenesisState): Uint8Array;
                toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _71.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.BasicAllowance;
                fromPartial(object: Partial<_71.BasicAllowance>): _71.BasicAllowance;
                fromAmino(object: _71.BasicAllowanceAmino): _71.BasicAllowance;
                toAmino(message: _71.BasicAllowance): _71.BasicAllowanceAmino;
                fromAminoMsg(object: _71.BasicAllowanceAminoMsg): _71.BasicAllowance;
                toAminoMsg(message: _71.BasicAllowance): _71.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _71.BasicAllowanceProtoMsg): _71.BasicAllowance;
                toProto(message: _71.BasicAllowance): Uint8Array;
                toProtoMsg(message: _71.BasicAllowance): _71.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _71.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.PeriodicAllowance;
                fromPartial(object: Partial<_71.PeriodicAllowance>): _71.PeriodicAllowance;
                fromAmino(object: _71.PeriodicAllowanceAmino): _71.PeriodicAllowance;
                toAmino(message: _71.PeriodicAllowance): _71.PeriodicAllowanceAmino;
                fromAminoMsg(object: _71.PeriodicAllowanceAminoMsg): _71.PeriodicAllowance;
                toAminoMsg(message: _71.PeriodicAllowance): _71.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _71.PeriodicAllowanceProtoMsg): _71.PeriodicAllowance;
                toProto(message: _71.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _71.PeriodicAllowance): _71.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _71.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.AllowedMsgAllowance;
                fromPartial(object: Partial<_71.AllowedMsgAllowance>): _71.AllowedMsgAllowance;
                fromAmino(object: _71.AllowedMsgAllowanceAmino): _71.AllowedMsgAllowance;
                toAmino(message: _71.AllowedMsgAllowance): _71.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _71.AllowedMsgAllowanceAminoMsg): _71.AllowedMsgAllowance;
                toAminoMsg(message: _71.AllowedMsgAllowance): _71.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _71.AllowedMsgAllowanceProtoMsg): _71.AllowedMsgAllowance;
                toProto(message: _71.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _71.AllowedMsgAllowance): _71.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _71.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Grant;
                fromPartial(object: Partial<_71.Grant>): _71.Grant;
                fromAmino(object: _71.GrantAmino): _71.Grant;
                toAmino(message: _71.Grant): _71.GrantAmino;
                fromAminoMsg(object: _71.GrantAminoMsg): _71.Grant;
                toAminoMsg(message: _71.Grant): _71.GrantAminoMsg;
                fromProtoMsg(message: _71.GrantProtoMsg): _71.Grant;
                toProto(message: _71.Grant): Uint8Array;
                toProtoMsg(message: _71.Grant): _71.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _75.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _75.Module;
                    fromPartial(_: Partial<_75.Module>): _75.Module;
                    fromAmino(_: _75.ModuleAmino): _75.Module;
                    toAmino(_: _75.Module): _75.ModuleAmino;
                    fromAminoMsg(object: _75.ModuleAminoMsg): _75.Module;
                    toAminoMsg(message: _75.Module): _75.ModuleAminoMsg;
                    fromProtoMsg(message: _75.ModuleProtoMsg): _75.Module;
                    toProto(message: _75.Module): Uint8Array;
                    toProtoMsg(message: _75.Module): _75.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _76.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.GenesisState;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                toAminoMsg(message: _76.GenesisState): _76.GenesisStateAminoMsg;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _77.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Module;
                    fromPartial(object: Partial<_77.Module>): _77.Module;
                    fromAmino(object: _77.ModuleAmino): _77.Module;
                    toAmino(message: _77.Module): _77.ModuleAmino;
                    fromAminoMsg(object: _77.ModuleAminoMsg): _77.Module;
                    toAminoMsg(message: _77.Module): _77.ModuleAminoMsg;
                    fromProtoMsg(message: _77.ModuleProtoMsg): _77.Module;
                    toProto(message: _77.Module): Uint8Array;
                    toProtoMsg(message: _77.Module): _77.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
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
            LCDQueryClient: typeof _207.LCDQueryClient;
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
                    updateParams(value: _81.MsgUpdateParams): {
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
                    updateParams(value: _81.MsgUpdateParams): {
                        typeUrl: string;
                        value: _81.MsgUpdateParams;
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
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _81.MsgUpdateParams;
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
                    updateParams(value: _81.MsgUpdateParams): {
                        typeUrl: string;
                        value: _81.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _81.MsgSubmitProposal) => _81.MsgSubmitProposalAmino;
                    fromAmino: (object: _81.MsgSubmitProposalAmino) => _81.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _81.MsgExecLegacyContent) => _81.MsgExecLegacyContentAmino;
                    fromAmino: (object: _81.MsgExecLegacyContentAmino) => _81.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVote) => _81.MsgVoteAmino;
                    fromAmino: (object: _81.MsgVoteAmino) => _81.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVoteWeighted) => _81.MsgVoteWeightedAmino;
                    fromAmino: (object: _81.MsgVoteWeightedAmino) => _81.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _81.MsgDeposit) => _81.MsgDepositAmino;
                    fromAmino: (object: _81.MsgDepositAmino) => _81.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateParams) => _81.MsgUpdateParamsAmino;
                    fromAmino: (object: _81.MsgUpdateParamsAmino) => _81.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgSubmitProposal;
                fromPartial(object: Partial<_81.MsgSubmitProposal>): _81.MsgSubmitProposal;
                fromAmino(object: _81.MsgSubmitProposalAmino): _81.MsgSubmitProposal;
                toAmino(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalAminoMsg): _81.MsgSubmitProposal;
                toAminoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalProtoMsg): _81.MsgSubmitProposal;
                toProto(message: _81.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_81.MsgSubmitProposalResponse>): _81.MsgSubmitProposalResponse;
                fromAmino(object: _81.MsgSubmitProposalResponseAmino): _81.MsgSubmitProposalResponse;
                toAmino(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalResponseAminoMsg): _81.MsgSubmitProposalResponse;
                toAminoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalResponseProtoMsg): _81.MsgSubmitProposalResponse;
                toProto(message: _81.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _81.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgExecLegacyContent;
                fromPartial(object: Partial<_81.MsgExecLegacyContent>): _81.MsgExecLegacyContent;
                fromAmino(object: _81.MsgExecLegacyContentAmino): _81.MsgExecLegacyContent;
                toAmino(message: _81.MsgExecLegacyContent): _81.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _81.MsgExecLegacyContentAminoMsg): _81.MsgExecLegacyContent;
                toAminoMsg(message: _81.MsgExecLegacyContent): _81.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _81.MsgExecLegacyContentProtoMsg): _81.MsgExecLegacyContent;
                toProto(message: _81.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _81.MsgExecLegacyContent): _81.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _81.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_81.MsgExecLegacyContentResponse>): _81.MsgExecLegacyContentResponse;
                fromAmino(_: _81.MsgExecLegacyContentResponseAmino): _81.MsgExecLegacyContentResponse;
                toAmino(_: _81.MsgExecLegacyContentResponse): _81.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _81.MsgExecLegacyContentResponseAminoMsg): _81.MsgExecLegacyContentResponse;
                toAminoMsg(message: _81.MsgExecLegacyContentResponse): _81.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _81.MsgExecLegacyContentResponseProtoMsg): _81.MsgExecLegacyContentResponse;
                toProto(message: _81.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _81.MsgExecLegacyContentResponse): _81.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _81.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgVote;
                fromPartial(object: Partial<_81.MsgVote>): _81.MsgVote;
                fromAmino(object: _81.MsgVoteAmino): _81.MsgVote;
                toAmino(message: _81.MsgVote): _81.MsgVoteAmino;
                fromAminoMsg(object: _81.MsgVoteAminoMsg): _81.MsgVote;
                toAminoMsg(message: _81.MsgVote): _81.MsgVoteAminoMsg;
                fromProtoMsg(message: _81.MsgVoteProtoMsg): _81.MsgVote;
                toProto(message: _81.MsgVote): Uint8Array;
                toProtoMsg(message: _81.MsgVote): _81.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _81.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgVoteResponse;
                fromPartial(_: Partial<_81.MsgVoteResponse>): _81.MsgVoteResponse;
                fromAmino(_: _81.MsgVoteResponseAmino): _81.MsgVoteResponse;
                toAmino(_: _81.MsgVoteResponse): _81.MsgVoteResponseAmino;
                fromAminoMsg(object: _81.MsgVoteResponseAminoMsg): _81.MsgVoteResponse;
                toAminoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _81.MsgVoteResponseProtoMsg): _81.MsgVoteResponse;
                toProto(message: _81.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _81.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgVoteWeighted;
                fromPartial(object: Partial<_81.MsgVoteWeighted>): _81.MsgVoteWeighted;
                fromAmino(object: _81.MsgVoteWeightedAmino): _81.MsgVoteWeighted;
                toAmino(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedAmino;
                fromAminoMsg(object: _81.MsgVoteWeightedAminoMsg): _81.MsgVoteWeighted;
                toAminoMsg(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _81.MsgVoteWeightedProtoMsg): _81.MsgVoteWeighted;
                toProto(message: _81.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _81.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_81.MsgVoteWeightedResponse>): _81.MsgVoteWeightedResponse;
                fromAmino(_: _81.MsgVoteWeightedResponseAmino): _81.MsgVoteWeightedResponse;
                toAmino(_: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _81.MsgVoteWeightedResponseAminoMsg): _81.MsgVoteWeightedResponse;
                toAminoMsg(message: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _81.MsgVoteWeightedResponseProtoMsg): _81.MsgVoteWeightedResponse;
                toProto(message: _81.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _81.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgDeposit;
                fromPartial(object: Partial<_81.MsgDeposit>): _81.MsgDeposit;
                fromAmino(object: _81.MsgDepositAmino): _81.MsgDeposit;
                toAmino(message: _81.MsgDeposit): _81.MsgDepositAmino;
                fromAminoMsg(object: _81.MsgDepositAminoMsg): _81.MsgDeposit;
                toAminoMsg(message: _81.MsgDeposit): _81.MsgDepositAminoMsg;
                fromProtoMsg(message: _81.MsgDepositProtoMsg): _81.MsgDeposit;
                toProto(message: _81.MsgDeposit): Uint8Array;
                toProtoMsg(message: _81.MsgDeposit): _81.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _81.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgDepositResponse;
                fromPartial(_: Partial<_81.MsgDepositResponse>): _81.MsgDepositResponse;
                fromAmino(_: _81.MsgDepositResponseAmino): _81.MsgDepositResponse;
                toAmino(_: _81.MsgDepositResponse): _81.MsgDepositResponseAmino;
                fromAminoMsg(object: _81.MsgDepositResponseAminoMsg): _81.MsgDepositResponse;
                toAminoMsg(message: _81.MsgDepositResponse): _81.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _81.MsgDepositResponseProtoMsg): _81.MsgDepositResponse;
                toProto(message: _81.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _81.MsgDepositResponse): _81.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _81.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUpdateParams;
                fromPartial(object: Partial<_81.MsgUpdateParams>): _81.MsgUpdateParams;
                fromAmino(object: _81.MsgUpdateParamsAmino): _81.MsgUpdateParams;
                toAmino(message: _81.MsgUpdateParams): _81.MsgUpdateParamsAmino;
                fromAminoMsg(object: _81.MsgUpdateParamsAminoMsg): _81.MsgUpdateParams;
                toAminoMsg(message: _81.MsgUpdateParams): _81.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateParamsProtoMsg): _81.MsgUpdateParams;
                toProto(message: _81.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateParams): _81.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_81.MsgUpdateParamsResponse>): _81.MsgUpdateParamsResponse;
                fromAmino(_: _81.MsgUpdateParamsResponseAmino): _81.MsgUpdateParamsResponse;
                toAmino(_: _81.MsgUpdateParamsResponse): _81.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateParamsResponseAminoMsg): _81.MsgUpdateParamsResponse;
                toAminoMsg(message: _81.MsgUpdateParamsResponse): _81.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateParamsResponseProtoMsg): _81.MsgUpdateParamsResponse;
                toProto(message: _81.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateParamsResponse): _81.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _61.CommunityPoolSpendProposal | _61.CommunityPoolSpendProposalWithDeposit | _109.ParameterChangeProposal | _131.SoftwareUpgradeProposal | _131.CancelSoftwareUpgradeProposal | _83.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalRequest;
                fromPartial(object: Partial<_80.QueryProposalRequest>): _80.QueryProposalRequest;
                fromAmino(object: _80.QueryProposalRequestAmino): _80.QueryProposalRequest;
                toAmino(message: _80.QueryProposalRequest): _80.QueryProposalRequestAmino;
                fromAminoMsg(object: _80.QueryProposalRequestAminoMsg): _80.QueryProposalRequest;
                toAminoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalRequestProtoMsg): _80.QueryProposalRequest;
                toProto(message: _80.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalResponse;
                fromPartial(object: Partial<_80.QueryProposalResponse>): _80.QueryProposalResponse;
                fromAmino(object: _80.QueryProposalResponseAmino): _80.QueryProposalResponse;
                toAmino(message: _80.QueryProposalResponse): _80.QueryProposalResponseAmino;
                fromAminoMsg(object: _80.QueryProposalResponseAminoMsg): _80.QueryProposalResponse;
                toAminoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalResponseProtoMsg): _80.QueryProposalResponse;
                toProto(message: _80.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalsRequest;
                fromPartial(object: Partial<_80.QueryProposalsRequest>): _80.QueryProposalsRequest;
                fromAmino(object: _80.QueryProposalsRequestAmino): _80.QueryProposalsRequest;
                toAmino(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestAmino;
                fromAminoMsg(object: _80.QueryProposalsRequestAminoMsg): _80.QueryProposalsRequest;
                toAminoMsg(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsRequestProtoMsg): _80.QueryProposalsRequest;
                toProto(message: _80.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalsResponse;
                fromPartial(object: Partial<_80.QueryProposalsResponse>): _80.QueryProposalsResponse;
                fromAmino(object: _80.QueryProposalsResponseAmino): _80.QueryProposalsResponse;
                toAmino(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseAmino;
                fromAminoMsg(object: _80.QueryProposalsResponseAminoMsg): _80.QueryProposalsResponse;
                toAminoMsg(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsResponseProtoMsg): _80.QueryProposalsResponse;
                toProto(message: _80.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _80.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVoteRequest;
                fromPartial(object: Partial<_80.QueryVoteRequest>): _80.QueryVoteRequest;
                fromAmino(object: _80.QueryVoteRequestAmino): _80.QueryVoteRequest;
                toAmino(message: _80.QueryVoteRequest): _80.QueryVoteRequestAmino;
                fromAminoMsg(object: _80.QueryVoteRequestAminoMsg): _80.QueryVoteRequest;
                toAminoMsg(message: _80.QueryVoteRequest): _80.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVoteRequestProtoMsg): _80.QueryVoteRequest;
                toProto(message: _80.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVoteRequest): _80.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _80.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVoteResponse;
                fromPartial(object: Partial<_80.QueryVoteResponse>): _80.QueryVoteResponse;
                fromAmino(object: _80.QueryVoteResponseAmino): _80.QueryVoteResponse;
                toAmino(message: _80.QueryVoteResponse): _80.QueryVoteResponseAmino;
                fromAminoMsg(object: _80.QueryVoteResponseAminoMsg): _80.QueryVoteResponse;
                toAminoMsg(message: _80.QueryVoteResponse): _80.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVoteResponseProtoMsg): _80.QueryVoteResponse;
                toProto(message: _80.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVoteResponse): _80.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _80.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesRequest;
                fromPartial(object: Partial<_80.QueryVotesRequest>): _80.QueryVotesRequest;
                fromAmino(object: _80.QueryVotesRequestAmino): _80.QueryVotesRequest;
                toAmino(message: _80.QueryVotesRequest): _80.QueryVotesRequestAmino;
                fromAminoMsg(object: _80.QueryVotesRequestAminoMsg): _80.QueryVotesRequest;
                toAminoMsg(message: _80.QueryVotesRequest): _80.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVotesRequestProtoMsg): _80.QueryVotesRequest;
                toProto(message: _80.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVotesRequest): _80.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _80.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesResponse;
                fromPartial(object: Partial<_80.QueryVotesResponse>): _80.QueryVotesResponse;
                fromAmino(object: _80.QueryVotesResponseAmino): _80.QueryVotesResponse;
                toAmino(message: _80.QueryVotesResponse): _80.QueryVotesResponseAmino;
                fromAminoMsg(object: _80.QueryVotesResponseAminoMsg): _80.QueryVotesResponse;
                toAminoMsg(message: _80.QueryVotesResponse): _80.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVotesResponseProtoMsg): _80.QueryVotesResponse;
                toProto(message: _80.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVotesResponse): _80.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _80.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryParamsRequest;
                fromPartial(object: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
                fromAmino(object: _80.QueryParamsRequestAmino): _80.QueryParamsRequest;
                toAmino(message: _80.QueryParamsRequest): _80.QueryParamsRequestAmino;
                fromAminoMsg(object: _80.QueryParamsRequestAminoMsg): _80.QueryParamsRequest;
                toAminoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryParamsRequestProtoMsg): _80.QueryParamsRequest;
                toProto(message: _80.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _80.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryParamsResponse;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
                fromAmino(object: _80.QueryParamsResponseAmino): _80.QueryParamsResponse;
                toAmino(message: _80.QueryParamsResponse): _80.QueryParamsResponseAmino;
                fromAminoMsg(object: _80.QueryParamsResponseAminoMsg): _80.QueryParamsResponse;
                toAminoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryParamsResponseProtoMsg): _80.QueryParamsResponse;
                toProto(message: _80.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _80.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositRequest;
                fromPartial(object: Partial<_80.QueryDepositRequest>): _80.QueryDepositRequest;
                fromAmino(object: _80.QueryDepositRequestAmino): _80.QueryDepositRequest;
                toAmino(message: _80.QueryDepositRequest): _80.QueryDepositRequestAmino;
                fromAminoMsg(object: _80.QueryDepositRequestAminoMsg): _80.QueryDepositRequest;
                toAminoMsg(message: _80.QueryDepositRequest): _80.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDepositRequestProtoMsg): _80.QueryDepositRequest;
                toProto(message: _80.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDepositRequest): _80.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _80.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositResponse;
                fromPartial(object: Partial<_80.QueryDepositResponse>): _80.QueryDepositResponse;
                fromAmino(object: _80.QueryDepositResponseAmino): _80.QueryDepositResponse;
                toAmino(message: _80.QueryDepositResponse): _80.QueryDepositResponseAmino;
                fromAminoMsg(object: _80.QueryDepositResponseAminoMsg): _80.QueryDepositResponse;
                toAminoMsg(message: _80.QueryDepositResponse): _80.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDepositResponseProtoMsg): _80.QueryDepositResponse;
                toProto(message: _80.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDepositResponse): _80.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _80.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositsRequest;
                fromPartial(object: Partial<_80.QueryDepositsRequest>): _80.QueryDepositsRequest;
                fromAmino(object: _80.QueryDepositsRequestAmino): _80.QueryDepositsRequest;
                toAmino(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestAmino;
                fromAminoMsg(object: _80.QueryDepositsRequestAminoMsg): _80.QueryDepositsRequest;
                toAminoMsg(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDepositsRequestProtoMsg): _80.QueryDepositsRequest;
                toProto(message: _80.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _80.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryDepositsResponse;
                fromPartial(object: Partial<_80.QueryDepositsResponse>): _80.QueryDepositsResponse;
                fromAmino(object: _80.QueryDepositsResponseAmino): _80.QueryDepositsResponse;
                toAmino(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseAmino;
                fromAminoMsg(object: _80.QueryDepositsResponseAminoMsg): _80.QueryDepositsResponse;
                toAminoMsg(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDepositsResponseProtoMsg): _80.QueryDepositsResponse;
                toProto(message: _80.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryTallyResultRequest;
                fromPartial(object: Partial<_80.QueryTallyResultRequest>): _80.QueryTallyResultRequest;
                fromAmino(object: _80.QueryTallyResultRequestAmino): _80.QueryTallyResultRequest;
                toAmino(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _80.QueryTallyResultRequestAminoMsg): _80.QueryTallyResultRequest;
                toAminoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultRequestProtoMsg): _80.QueryTallyResultRequest;
                toProto(message: _80.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryTallyResultResponse;
                fromPartial(object: Partial<_80.QueryTallyResultResponse>): _80.QueryTallyResultResponse;
                fromAmino(object: _80.QueryTallyResultResponseAmino): _80.QueryTallyResultResponse;
                toAmino(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _80.QueryTallyResultResponseAminoMsg): _80.QueryTallyResultResponse;
                toAminoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultResponseProtoMsg): _80.QueryTallyResultResponse;
                toProto(message: _80.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _79.VoteOption;
            voteOptionToJSON(object: _79.VoteOption): string;
            proposalStatusFromJSON(object: any): _79.ProposalStatus;
            proposalStatusToJSON(object: _79.ProposalStatus): string;
            VoteOption: typeof _79.VoteOption;
            VoteOptionSDKType: typeof _79.VoteOption;
            VoteOptionAmino: typeof _79.VoteOption;
            ProposalStatus: typeof _79.ProposalStatus;
            ProposalStatusSDKType: typeof _79.ProposalStatus;
            ProposalStatusAmino: typeof _79.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _79.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.WeightedVoteOption;
                fromPartial(object: Partial<_79.WeightedVoteOption>): _79.WeightedVoteOption;
                fromAmino(object: _79.WeightedVoteOptionAmino): _79.WeightedVoteOption;
                toAmino(message: _79.WeightedVoteOption): _79.WeightedVoteOptionAmino;
                fromAminoMsg(object: _79.WeightedVoteOptionAminoMsg): _79.WeightedVoteOption;
                toAminoMsg(message: _79.WeightedVoteOption): _79.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _79.WeightedVoteOptionProtoMsg): _79.WeightedVoteOption;
                toProto(message: _79.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _79.WeightedVoteOption): _79.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _79.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Deposit;
                fromPartial(object: Partial<_79.Deposit>): _79.Deposit;
                fromAmino(object: _79.DepositAmino): _79.Deposit;
                toAmino(message: _79.Deposit): _79.DepositAmino;
                fromAminoMsg(object: _79.DepositAminoMsg): _79.Deposit;
                toAminoMsg(message: _79.Deposit): _79.DepositAminoMsg;
                fromProtoMsg(message: _79.DepositProtoMsg): _79.Deposit;
                toProto(message: _79.Deposit): Uint8Array;
                toProtoMsg(message: _79.Deposit): _79.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _79.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Proposal;
                fromPartial(object: Partial<_79.Proposal>): _79.Proposal;
                fromAmino(object: _79.ProposalAmino): _79.Proposal;
                toAmino(message: _79.Proposal): _79.ProposalAmino;
                fromAminoMsg(object: _79.ProposalAminoMsg): _79.Proposal;
                toAminoMsg(message: _79.Proposal): _79.ProposalAminoMsg;
                fromProtoMsg(message: _79.ProposalProtoMsg): _79.Proposal;
                toProto(message: _79.Proposal): Uint8Array;
                toProtoMsg(message: _79.Proposal): _79.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _79.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.TallyResult;
                fromPartial(object: Partial<_79.TallyResult>): _79.TallyResult;
                fromAmino(object: _79.TallyResultAmino): _79.TallyResult;
                toAmino(message: _79.TallyResult): _79.TallyResultAmino;
                fromAminoMsg(object: _79.TallyResultAminoMsg): _79.TallyResult;
                toAminoMsg(message: _79.TallyResult): _79.TallyResultAminoMsg;
                fromProtoMsg(message: _79.TallyResultProtoMsg): _79.TallyResult;
                toProto(message: _79.TallyResult): Uint8Array;
                toProtoMsg(message: _79.TallyResult): _79.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _79.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Vote;
                fromPartial(object: Partial<_79.Vote>): _79.Vote;
                fromAmino(object: _79.VoteAmino): _79.Vote;
                toAmino(message: _79.Vote): _79.VoteAmino;
                fromAminoMsg(object: _79.VoteAminoMsg): _79.Vote;
                toAminoMsg(message: _79.Vote): _79.VoteAminoMsg;
                fromProtoMsg(message: _79.VoteProtoMsg): _79.Vote;
                toProto(message: _79.Vote): Uint8Array;
                toProtoMsg(message: _79.Vote): _79.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _79.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.DepositParams;
                fromPartial(object: Partial<_79.DepositParams>): _79.DepositParams;
                fromAmino(object: _79.DepositParamsAmino): _79.DepositParams;
                toAmino(message: _79.DepositParams): _79.DepositParamsAmino;
                fromAminoMsg(object: _79.DepositParamsAminoMsg): _79.DepositParams;
                toAminoMsg(message: _79.DepositParams): _79.DepositParamsAminoMsg;
                fromProtoMsg(message: _79.DepositParamsProtoMsg): _79.DepositParams;
                toProto(message: _79.DepositParams): Uint8Array;
                toProtoMsg(message: _79.DepositParams): _79.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _79.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.VotingParams;
                fromPartial(object: Partial<_79.VotingParams>): _79.VotingParams;
                fromAmino(object: _79.VotingParamsAmino): _79.VotingParams;
                toAmino(message: _79.VotingParams): _79.VotingParamsAmino;
                fromAminoMsg(object: _79.VotingParamsAminoMsg): _79.VotingParams;
                toAminoMsg(message: _79.VotingParams): _79.VotingParamsAminoMsg;
                fromProtoMsg(message: _79.VotingParamsProtoMsg): _79.VotingParams;
                toProto(message: _79.VotingParams): Uint8Array;
                toProtoMsg(message: _79.VotingParams): _79.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _79.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.TallyParams;
                fromPartial(object: Partial<_79.TallyParams>): _79.TallyParams;
                fromAmino(object: _79.TallyParamsAmino): _79.TallyParams;
                toAmino(message: _79.TallyParams): _79.TallyParamsAmino;
                fromAminoMsg(object: _79.TallyParamsAminoMsg): _79.TallyParams;
                toAminoMsg(message: _79.TallyParams): _79.TallyParamsAminoMsg;
                fromProtoMsg(message: _79.TallyParamsProtoMsg): _79.TallyParams;
                toProto(message: _79.TallyParams): Uint8Array;
                toProtoMsg(message: _79.TallyParams): _79.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _79.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Params;
                fromPartial(object: Partial<_79.Params>): _79.Params;
                fromAmino(object: _79.ParamsAmino): _79.Params;
                toAmino(message: _79.Params): _79.ParamsAmino;
                fromAminoMsg(object: _79.ParamsAminoMsg): _79.Params;
                toAminoMsg(message: _79.Params): _79.ParamsAminoMsg;
                fromProtoMsg(message: _79.ParamsProtoMsg): _79.Params;
                toProto(message: _79.Params): Uint8Array;
                toProtoMsg(message: _79.Params): _79.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _78.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
                fromAmino(object: _78.GenesisStateAmino): _78.GenesisState;
                toAmino(message: _78.GenesisState): _78.GenesisStateAmino;
                fromAminoMsg(object: _78.GenesisStateAminoMsg): _78.GenesisState;
                toAminoMsg(message: _78.GenesisState): _78.GenesisStateAminoMsg;
                fromProtoMsg(message: _78.GenesisStateProtoMsg): _78.GenesisState;
                toProto(message: _78.GenesisState): Uint8Array;
                toProtoMsg(message: _78.GenesisState): _78.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
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
            LCDQueryClient: typeof _208.LCDQueryClient;
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
                    toAmino: (message: _85.MsgSubmitProposal) => _85.MsgSubmitProposalAmino;
                    fromAmino: (object: _85.MsgSubmitProposalAmino) => _85.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _85.MsgVote) => _85.MsgVoteAmino;
                    fromAmino: (object: _85.MsgVoteAmino) => _85.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _85.MsgVoteWeighted) => _85.MsgVoteWeightedAmino;
                    fromAmino: (object: _85.MsgVoteWeightedAmino) => _85.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _85.MsgDeposit) => _85.MsgDepositAmino;
                    fromAmino: (object: _85.MsgDepositAmino) => _85.MsgDeposit;
                };
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
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _85.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgVoteWeighted;
                fromPartial(object: Partial<_85.MsgVoteWeighted>): _85.MsgVoteWeighted;
                fromAmino(object: _85.MsgVoteWeightedAmino): _85.MsgVoteWeighted;
                toAmino(message: _85.MsgVoteWeighted): _85.MsgVoteWeightedAmino;
                fromAminoMsg(object: _85.MsgVoteWeightedAminoMsg): _85.MsgVoteWeighted;
                toAminoMsg(message: _85.MsgVoteWeighted): _85.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _85.MsgVoteWeightedProtoMsg): _85.MsgVoteWeighted;
                toProto(message: _85.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _85.MsgVoteWeighted): _85.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _85.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_85.MsgVoteWeightedResponse>): _85.MsgVoteWeightedResponse;
                fromAmino(_: _85.MsgVoteWeightedResponseAmino): _85.MsgVoteWeightedResponse;
                toAmino(_: _85.MsgVoteWeightedResponse): _85.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _85.MsgVoteWeightedResponseAminoMsg): _85.MsgVoteWeightedResponse;
                toAminoMsg(message: _85.MsgVoteWeightedResponse): _85.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _85.MsgVoteWeightedResponseProtoMsg): _85.MsgVoteWeightedResponse;
                toProto(message: _85.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _85.MsgVoteWeightedResponse): _85.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _85.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgDeposit;
                fromPartial(object: Partial<_85.MsgDeposit>): _85.MsgDeposit;
                fromAmino(object: _85.MsgDepositAmino): _85.MsgDeposit;
                toAmino(message: _85.MsgDeposit): _85.MsgDepositAmino;
                fromAminoMsg(object: _85.MsgDepositAminoMsg): _85.MsgDeposit;
                toAminoMsg(message: _85.MsgDeposit): _85.MsgDepositAminoMsg;
                fromProtoMsg(message: _85.MsgDepositProtoMsg): _85.MsgDeposit;
                toProto(message: _85.MsgDeposit): Uint8Array;
                toProtoMsg(message: _85.MsgDeposit): _85.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _85.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgDepositResponse;
                fromPartial(_: Partial<_85.MsgDepositResponse>): _85.MsgDepositResponse;
                fromAmino(_: _85.MsgDepositResponseAmino): _85.MsgDepositResponse;
                toAmino(_: _85.MsgDepositResponse): _85.MsgDepositResponseAmino;
                fromAminoMsg(object: _85.MsgDepositResponseAminoMsg): _85.MsgDepositResponse;
                toAminoMsg(message: _85.MsgDepositResponse): _85.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _85.MsgDepositResponseProtoMsg): _85.MsgDepositResponse;
                toProto(message: _85.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _85.MsgDepositResponse): _85.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _61.CommunityPoolSpendProposal | _61.CommunityPoolSpendProposalWithDeposit | _109.ParameterChangeProposal | _131.SoftwareUpgradeProposal | _131.CancelSoftwareUpgradeProposal | _83.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _84.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalsRequest;
                fromPartial(object: Partial<_84.QueryProposalsRequest>): _84.QueryProposalsRequest;
                fromAmino(object: _84.QueryProposalsRequestAmino): _84.QueryProposalsRequest;
                toAmino(message: _84.QueryProposalsRequest): _84.QueryProposalsRequestAmino;
                fromAminoMsg(object: _84.QueryProposalsRequestAminoMsg): _84.QueryProposalsRequest;
                toAminoMsg(message: _84.QueryProposalsRequest): _84.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryProposalsRequestProtoMsg): _84.QueryProposalsRequest;
                toProto(message: _84.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryProposalsRequest): _84.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _84.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryProposalsResponse;
                fromPartial(object: Partial<_84.QueryProposalsResponse>): _84.QueryProposalsResponse;
                fromAmino(object: _84.QueryProposalsResponseAmino): _84.QueryProposalsResponse;
                toAmino(message: _84.QueryProposalsResponse): _84.QueryProposalsResponseAmino;
                fromAminoMsg(object: _84.QueryProposalsResponseAminoMsg): _84.QueryProposalsResponse;
                toAminoMsg(message: _84.QueryProposalsResponse): _84.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryProposalsResponseProtoMsg): _84.QueryProposalsResponse;
                toProto(message: _84.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryProposalsResponse): _84.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _84.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVoteRequest;
                fromPartial(object: Partial<_84.QueryVoteRequest>): _84.QueryVoteRequest;
                fromAmino(object: _84.QueryVoteRequestAmino): _84.QueryVoteRequest;
                toAmino(message: _84.QueryVoteRequest): _84.QueryVoteRequestAmino;
                fromAminoMsg(object: _84.QueryVoteRequestAminoMsg): _84.QueryVoteRequest;
                toAminoMsg(message: _84.QueryVoteRequest): _84.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _84.QueryVoteRequestProtoMsg): _84.QueryVoteRequest;
                toProto(message: _84.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVoteRequest): _84.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _84.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVoteResponse;
                fromPartial(object: Partial<_84.QueryVoteResponse>): _84.QueryVoteResponse;
                fromAmino(object: _84.QueryVoteResponseAmino): _84.QueryVoteResponse;
                toAmino(message: _84.QueryVoteResponse): _84.QueryVoteResponseAmino;
                fromAminoMsg(object: _84.QueryVoteResponseAminoMsg): _84.QueryVoteResponse;
                toAminoMsg(message: _84.QueryVoteResponse): _84.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _84.QueryVoteResponseProtoMsg): _84.QueryVoteResponse;
                toProto(message: _84.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVoteResponse): _84.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _84.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesRequest;
                fromPartial(object: Partial<_84.QueryVotesRequest>): _84.QueryVotesRequest;
                fromAmino(object: _84.QueryVotesRequestAmino): _84.QueryVotesRequest;
                toAmino(message: _84.QueryVotesRequest): _84.QueryVotesRequestAmino;
                fromAminoMsg(object: _84.QueryVotesRequestAminoMsg): _84.QueryVotesRequest;
                toAminoMsg(message: _84.QueryVotesRequest): _84.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _84.QueryVotesRequestProtoMsg): _84.QueryVotesRequest;
                toProto(message: _84.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _84.QueryVotesRequest): _84.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _84.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryVotesResponse;
                fromPartial(object: Partial<_84.QueryVotesResponse>): _84.QueryVotesResponse;
                fromAmino(object: _84.QueryVotesResponseAmino): _84.QueryVotesResponse;
                toAmino(message: _84.QueryVotesResponse): _84.QueryVotesResponseAmino;
                fromAminoMsg(object: _84.QueryVotesResponseAminoMsg): _84.QueryVotesResponse;
                toAminoMsg(message: _84.QueryVotesResponse): _84.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _84.QueryVotesResponseProtoMsg): _84.QueryVotesResponse;
                toProto(message: _84.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _84.QueryVotesResponse): _84.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _84.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryParamsRequest;
                fromPartial(object: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
                fromAmino(object: _84.QueryParamsRequestAmino): _84.QueryParamsRequest;
                toAmino(message: _84.QueryParamsRequest): _84.QueryParamsRequestAmino;
                fromAminoMsg(object: _84.QueryParamsRequestAminoMsg): _84.QueryParamsRequest;
                toAminoMsg(message: _84.QueryParamsRequest): _84.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryParamsRequestProtoMsg): _84.QueryParamsRequest;
                toProto(message: _84.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryParamsRequest): _84.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _84.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryParamsResponse;
                fromPartial(object: Partial<_84.QueryParamsResponse>): _84.QueryParamsResponse;
                fromAmino(object: _84.QueryParamsResponseAmino): _84.QueryParamsResponse;
                toAmino(message: _84.QueryParamsResponse): _84.QueryParamsResponseAmino;
                fromAminoMsg(object: _84.QueryParamsResponseAminoMsg): _84.QueryParamsResponse;
                toAminoMsg(message: _84.QueryParamsResponse): _84.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryParamsResponseProtoMsg): _84.QueryParamsResponse;
                toProto(message: _84.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryParamsResponse): _84.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _84.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositRequest;
                fromPartial(object: Partial<_84.QueryDepositRequest>): _84.QueryDepositRequest;
                fromAmino(object: _84.QueryDepositRequestAmino): _84.QueryDepositRequest;
                toAmino(message: _84.QueryDepositRequest): _84.QueryDepositRequestAmino;
                fromAminoMsg(object: _84.QueryDepositRequestAminoMsg): _84.QueryDepositRequest;
                toAminoMsg(message: _84.QueryDepositRequest): _84.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDepositRequestProtoMsg): _84.QueryDepositRequest;
                toProto(message: _84.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDepositRequest): _84.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _84.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositResponse;
                fromPartial(object: Partial<_84.QueryDepositResponse>): _84.QueryDepositResponse;
                fromAmino(object: _84.QueryDepositResponseAmino): _84.QueryDepositResponse;
                toAmino(message: _84.QueryDepositResponse): _84.QueryDepositResponseAmino;
                fromAminoMsg(object: _84.QueryDepositResponseAminoMsg): _84.QueryDepositResponse;
                toAminoMsg(message: _84.QueryDepositResponse): _84.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDepositResponseProtoMsg): _84.QueryDepositResponse;
                toProto(message: _84.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDepositResponse): _84.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositsRequest;
                fromPartial(object: Partial<_84.QueryDepositsRequest>): _84.QueryDepositsRequest;
                fromAmino(object: _84.QueryDepositsRequestAmino): _84.QueryDepositsRequest;
                toAmino(message: _84.QueryDepositsRequest): _84.QueryDepositsRequestAmino;
                fromAminoMsg(object: _84.QueryDepositsRequestAminoMsg): _84.QueryDepositsRequest;
                toAminoMsg(message: _84.QueryDepositsRequest): _84.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDepositsRequestProtoMsg): _84.QueryDepositsRequest;
                toProto(message: _84.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDepositsRequest): _84.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDepositsResponse;
                fromPartial(object: Partial<_84.QueryDepositsResponse>): _84.QueryDepositsResponse;
                fromAmino(object: _84.QueryDepositsResponseAmino): _84.QueryDepositsResponse;
                toAmino(message: _84.QueryDepositsResponse): _84.QueryDepositsResponseAmino;
                fromAminoMsg(object: _84.QueryDepositsResponseAminoMsg): _84.QueryDepositsResponse;
                toAminoMsg(message: _84.QueryDepositsResponse): _84.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDepositsResponseProtoMsg): _84.QueryDepositsResponse;
                toProto(message: _84.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDepositsResponse): _84.QueryDepositsResponseProtoMsg;
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
            voteOptionFromJSON(object: any): _83.VoteOption;
            voteOptionToJSON(object: _83.VoteOption): string;
            proposalStatusFromJSON(object: any): _83.ProposalStatus;
            proposalStatusToJSON(object: _83.ProposalStatus): string;
            VoteOption: typeof _83.VoteOption;
            VoteOptionSDKType: typeof _83.VoteOption;
            VoteOptionAmino: typeof _83.VoteOption;
            ProposalStatus: typeof _83.ProposalStatus;
            ProposalStatusSDKType: typeof _83.ProposalStatus;
            ProposalStatusAmino: typeof _83.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _83.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.WeightedVoteOption;
                fromPartial(object: Partial<_83.WeightedVoteOption>): _83.WeightedVoteOption;
                fromAmino(object: _83.WeightedVoteOptionAmino): _83.WeightedVoteOption;
                toAmino(message: _83.WeightedVoteOption): _83.WeightedVoteOptionAmino;
                fromAminoMsg(object: _83.WeightedVoteOptionAminoMsg): _83.WeightedVoteOption;
                toAminoMsg(message: _83.WeightedVoteOption): _83.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _83.WeightedVoteOptionProtoMsg): _83.WeightedVoteOption;
                toProto(message: _83.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _83.WeightedVoteOption): _83.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _83.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.TextProposal;
                fromPartial(object: Partial<_83.TextProposal>): _83.TextProposal;
                fromAmino(object: _83.TextProposalAmino): _83.TextProposal;
                toAmino(message: _83.TextProposal): _83.TextProposalAmino;
                fromAminoMsg(object: _83.TextProposalAminoMsg): _83.TextProposal;
                toAminoMsg(message: _83.TextProposal): _83.TextProposalAminoMsg;
                fromProtoMsg(message: _83.TextProposalProtoMsg): _83.TextProposal;
                toProto(message: _83.TextProposal): Uint8Array;
                toProtoMsg(message: _83.TextProposal): _83.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _83.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Deposit;
                fromPartial(object: Partial<_83.Deposit>): _83.Deposit;
                fromAmino(object: _83.DepositAmino): _83.Deposit;
                toAmino(message: _83.Deposit): _83.DepositAmino;
                fromAminoMsg(object: _83.DepositAminoMsg): _83.Deposit;
                toAminoMsg(message: _83.Deposit): _83.DepositAminoMsg;
                fromProtoMsg(message: _83.DepositProtoMsg): _83.Deposit;
                toProto(message: _83.Deposit): Uint8Array;
                toProtoMsg(message: _83.Deposit): _83.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _83.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Proposal;
                fromPartial(object: Partial<_83.Proposal>): _83.Proposal;
                fromAmino(object: _83.ProposalAmino): _83.Proposal;
                toAmino(message: _83.Proposal): _83.ProposalAmino;
                fromAminoMsg(object: _83.ProposalAminoMsg): _83.Proposal;
                toAminoMsg(message: _83.Proposal): _83.ProposalAminoMsg;
                fromProtoMsg(message: _83.ProposalProtoMsg): _83.Proposal;
                toProto(message: _83.Proposal): Uint8Array;
                toProtoMsg(message: _83.Proposal): _83.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _83.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.TallyResult;
                fromPartial(object: Partial<_83.TallyResult>): _83.TallyResult;
                fromAmino(object: _83.TallyResultAmino): _83.TallyResult;
                toAmino(message: _83.TallyResult): _83.TallyResultAmino;
                fromAminoMsg(object: _83.TallyResultAminoMsg): _83.TallyResult;
                toAminoMsg(message: _83.TallyResult): _83.TallyResultAminoMsg;
                fromProtoMsg(message: _83.TallyResultProtoMsg): _83.TallyResult;
                toProto(message: _83.TallyResult): Uint8Array;
                toProtoMsg(message: _83.TallyResult): _83.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _83.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Vote;
                fromPartial(object: Partial<_83.Vote>): _83.Vote;
                fromAmino(object: _83.VoteAmino): _83.Vote;
                toAmino(message: _83.Vote): _83.VoteAmino;
                fromAminoMsg(object: _83.VoteAminoMsg): _83.Vote;
                toAminoMsg(message: _83.Vote): _83.VoteAminoMsg;
                fromProtoMsg(message: _83.VoteProtoMsg): _83.Vote;
                toProto(message: _83.Vote): Uint8Array;
                toProtoMsg(message: _83.Vote): _83.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _83.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DepositParams;
                fromPartial(object: Partial<_83.DepositParams>): _83.DepositParams;
                fromAmino(object: _83.DepositParamsAmino): _83.DepositParams;
                toAmino(message: _83.DepositParams): _83.DepositParamsAmino;
                fromAminoMsg(object: _83.DepositParamsAminoMsg): _83.DepositParams;
                toAminoMsg(message: _83.DepositParams): _83.DepositParamsAminoMsg;
                fromProtoMsg(message: _83.DepositParamsProtoMsg): _83.DepositParams;
                toProto(message: _83.DepositParams): Uint8Array;
                toProtoMsg(message: _83.DepositParams): _83.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _83.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.VotingParams;
                fromPartial(object: Partial<_83.VotingParams>): _83.VotingParams;
                fromAmino(object: _83.VotingParamsAmino): _83.VotingParams;
                toAmino(message: _83.VotingParams): _83.VotingParamsAmino;
                fromAminoMsg(object: _83.VotingParamsAminoMsg): _83.VotingParams;
                toAminoMsg(message: _83.VotingParams): _83.VotingParamsAminoMsg;
                fromProtoMsg(message: _83.VotingParamsProtoMsg): _83.VotingParams;
                toProto(message: _83.VotingParams): Uint8Array;
                toProtoMsg(message: _83.VotingParams): _83.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _83.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.TallyParams;
                fromPartial(object: Partial<_83.TallyParams>): _83.TallyParams;
                fromAmino(object: _83.TallyParamsAmino): _83.TallyParams;
                toAmino(message: _83.TallyParams): _83.TallyParamsAmino;
                fromAminoMsg(object: _83.TallyParamsAminoMsg): _83.TallyParams;
                toAminoMsg(message: _83.TallyParams): _83.TallyParamsAminoMsg;
                fromProtoMsg(message: _83.TallyParamsProtoMsg): _83.TallyParams;
                toProto(message: _83.TallyParams): Uint8Array;
                toProtoMsg(message: _83.TallyParams): _83.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _82.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
                fromAmino(object: _82.GenesisStateAmino): _82.GenesisState;
                toAmino(message: _82.GenesisState): _82.GenesisStateAmino;
                fromAminoMsg(object: _82.GenesisStateAminoMsg): _82.GenesisState;
                toAminoMsg(message: _82.GenesisState): _82.GenesisStateAminoMsg;
                fromProtoMsg(message: _82.GenesisStateProtoMsg): _82.GenesisState;
                toProto(message: _82.GenesisState): Uint8Array;
                toProtoMsg(message: _82.GenesisState): _82.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
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
        const v1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _89.QueryGroupInfoRequest): Promise<_89.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _89.QueryGroupPolicyInfoRequest): Promise<_89.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _89.QueryGroupMembersRequest): Promise<_89.QueryGroupMembersResponse>;
                groupsByAdmin(request: _89.QueryGroupsByAdminRequest): Promise<_89.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _89.QueryGroupPoliciesByGroupRequest): Promise<_89.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _89.QueryGroupPoliciesByAdminRequest): Promise<_89.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _89.QueryProposalRequest): Promise<_89.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _89.QueryProposalsByGroupPolicyRequest): Promise<_89.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _89.QueryVoteByProposalVoterRequest): Promise<_89.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _89.QueryVotesByProposalRequest): Promise<_89.QueryVotesByProposalResponse>;
                votesByVoter(request: _89.QueryVotesByVoterRequest): Promise<_89.QueryVotesByVoterResponse>;
                groupsByMember(request: _89.QueryGroupsByMemberRequest): Promise<_89.QueryGroupsByMemberResponse>;
                tallyResult(request: _89.QueryTallyResultRequest): Promise<_89.QueryTallyResultResponse>;
                groups(request?: _89.QueryGroupsRequest): Promise<_89.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _90.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _90.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _90.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _90.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _90.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _90.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _90.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _90.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _90.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _90.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _90.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _90.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _90.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _90.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _90.MsgCreateGroup): {
                        typeUrl: string;
                        value: _90.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _90.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _90.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _90.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _90.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _90.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _90.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _90.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _90.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _90.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _90.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _90.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _90.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _90.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _90.MsgWithdrawProposal;
                    };
                    vote(value: _90.MsgVote): {
                        typeUrl: string;
                        value: _90.MsgVote;
                    };
                    exec(value: _90.MsgExec): {
                        typeUrl: string;
                        value: _90.MsgExec;
                    };
                    leaveGroup(value: _90.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _90.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _90.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _90.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _90.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _90.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _90.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _90.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _90.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _90.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _90.MsgCreateGroup): {
                        typeUrl: string;
                        value: _90.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _90.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _90.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _90.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _90.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _90.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _90.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _90.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _90.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _90.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _90.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _90.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _90.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _90.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _90.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _90.MsgWithdrawProposal;
                    };
                    vote(value: _90.MsgVote): {
                        typeUrl: string;
                        value: _90.MsgVote;
                    };
                    exec(value: _90.MsgExec): {
                        typeUrl: string;
                        value: _90.MsgExec;
                    };
                    leaveGroup(value: _90.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _90.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _90.MsgCreateGroup) => _90.MsgCreateGroupAmino;
                    fromAmino: (object: _90.MsgCreateGroupAmino) => _90.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUpdateGroupMembers) => _90.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _90.MsgUpdateGroupMembersAmino) => _90.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUpdateGroupAdmin) => _90.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _90.MsgUpdateGroupAdminAmino) => _90.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUpdateGroupMetadata) => _90.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _90.MsgUpdateGroupMetadataAmino) => _90.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _90.MsgCreateGroupPolicy) => _90.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _90.MsgCreateGroupPolicyAmino) => _90.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _90.MsgCreateGroupWithPolicy) => _90.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _90.MsgCreateGroupWithPolicyAmino) => _90.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUpdateGroupPolicyAdmin) => _90.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _90.MsgUpdateGroupPolicyAdminAmino) => _90.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUpdateGroupPolicyDecisionPolicy) => _90.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _90.MsgUpdateGroupPolicyDecisionPolicyAmino) => _90.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _90.MsgUpdateGroupPolicyMetadata) => _90.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _90.MsgUpdateGroupPolicyMetadataAmino) => _90.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _90.MsgSubmitProposal) => _90.MsgSubmitProposalAmino;
                    fromAmino: (object: _90.MsgSubmitProposalAmino) => _90.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _90.MsgWithdrawProposal) => _90.MsgWithdrawProposalAmino;
                    fromAmino: (object: _90.MsgWithdrawProposalAmino) => _90.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _90.MsgVote) => _90.MsgVoteAmino;
                    fromAmino: (object: _90.MsgVoteAmino) => _90.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _90.MsgExec) => _90.MsgExecAmino;
                    fromAmino: (object: _90.MsgExecAmino) => _90.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _90.MsgLeaveGroup) => _90.MsgLeaveGroupAmino;
                    fromAmino: (object: _90.MsgLeaveGroupAmino) => _90.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _91.VoteOption;
            voteOptionToJSON(object: _91.VoteOption): string;
            proposalStatusFromJSON(object: any): _91.ProposalStatus;
            proposalStatusToJSON(object: _91.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _91.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _91.ProposalExecutorResult): string;
            VoteOption: typeof _91.VoteOption;
            VoteOptionSDKType: typeof _91.VoteOption;
            VoteOptionAmino: typeof _91.VoteOption;
            ProposalStatus: typeof _91.ProposalStatus;
            ProposalStatusSDKType: typeof _91.ProposalStatus;
            ProposalStatusAmino: typeof _91.ProposalStatus;
            ProposalExecutorResult: typeof _91.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _91.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _91.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _91.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Member;
                fromPartial(object: Partial<_91.Member>): _91.Member;
                fromAmino(object: _91.MemberAmino): _91.Member;
                toAmino(message: _91.Member): _91.MemberAmino;
                fromAminoMsg(object: _91.MemberAminoMsg): _91.Member;
                toAminoMsg(message: _91.Member): _91.MemberAminoMsg;
                fromProtoMsg(message: _91.MemberProtoMsg): _91.Member;
                toProto(message: _91.Member): Uint8Array;
                toProtoMsg(message: _91.Member): _91.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _91.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MemberRequest;
                fromPartial(object: Partial<_91.MemberRequest>): _91.MemberRequest;
                fromAmino(object: _91.MemberRequestAmino): _91.MemberRequest;
                toAmino(message: _91.MemberRequest): _91.MemberRequestAmino;
                fromAminoMsg(object: _91.MemberRequestAminoMsg): _91.MemberRequest;
                toAminoMsg(message: _91.MemberRequest): _91.MemberRequestAminoMsg;
                fromProtoMsg(message: _91.MemberRequestProtoMsg): _91.MemberRequest;
                toProto(message: _91.MemberRequest): Uint8Array;
                toProtoMsg(message: _91.MemberRequest): _91.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _91.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_91.ThresholdDecisionPolicy>): _91.ThresholdDecisionPolicy;
                fromAmino(object: _91.ThresholdDecisionPolicyAmino): _91.ThresholdDecisionPolicy;
                toAmino(message: _91.ThresholdDecisionPolicy): _91.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _91.ThresholdDecisionPolicyAminoMsg): _91.ThresholdDecisionPolicy;
                toAminoMsg(message: _91.ThresholdDecisionPolicy): _91.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _91.ThresholdDecisionPolicyProtoMsg): _91.ThresholdDecisionPolicy;
                toProto(message: _91.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _91.ThresholdDecisionPolicy): _91.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _91.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.PercentageDecisionPolicy;
                fromPartial(object: Partial<_91.PercentageDecisionPolicy>): _91.PercentageDecisionPolicy;
                fromAmino(object: _91.PercentageDecisionPolicyAmino): _91.PercentageDecisionPolicy;
                toAmino(message: _91.PercentageDecisionPolicy): _91.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _91.PercentageDecisionPolicyAminoMsg): _91.PercentageDecisionPolicy;
                toAminoMsg(message: _91.PercentageDecisionPolicy): _91.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _91.PercentageDecisionPolicyProtoMsg): _91.PercentageDecisionPolicy;
                toProto(message: _91.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _91.PercentageDecisionPolicy): _91.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _91.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.DecisionPolicyWindows;
                fromPartial(object: Partial<_91.DecisionPolicyWindows>): _91.DecisionPolicyWindows;
                fromAmino(object: _91.DecisionPolicyWindowsAmino): _91.DecisionPolicyWindows;
                toAmino(message: _91.DecisionPolicyWindows): _91.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _91.DecisionPolicyWindowsAminoMsg): _91.DecisionPolicyWindows;
                toAminoMsg(message: _91.DecisionPolicyWindows): _91.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _91.DecisionPolicyWindowsProtoMsg): _91.DecisionPolicyWindows;
                toProto(message: _91.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _91.DecisionPolicyWindows): _91.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _91.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.GroupInfo;
                fromPartial(object: Partial<_91.GroupInfo>): _91.GroupInfo;
                fromAmino(object: _91.GroupInfoAmino): _91.GroupInfo;
                toAmino(message: _91.GroupInfo): _91.GroupInfoAmino;
                fromAminoMsg(object: _91.GroupInfoAminoMsg): _91.GroupInfo;
                toAminoMsg(message: _91.GroupInfo): _91.GroupInfoAminoMsg;
                fromProtoMsg(message: _91.GroupInfoProtoMsg): _91.GroupInfo;
                toProto(message: _91.GroupInfo): Uint8Array;
                toProtoMsg(message: _91.GroupInfo): _91.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _91.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.GroupMember;
                fromPartial(object: Partial<_91.GroupMember>): _91.GroupMember;
                fromAmino(object: _91.GroupMemberAmino): _91.GroupMember;
                toAmino(message: _91.GroupMember): _91.GroupMemberAmino;
                fromAminoMsg(object: _91.GroupMemberAminoMsg): _91.GroupMember;
                toAminoMsg(message: _91.GroupMember): _91.GroupMemberAminoMsg;
                fromProtoMsg(message: _91.GroupMemberProtoMsg): _91.GroupMember;
                toProto(message: _91.GroupMember): Uint8Array;
                toProtoMsg(message: _91.GroupMember): _91.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _91.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.GroupPolicyInfo;
                fromPartial(object: Partial<_91.GroupPolicyInfo>): _91.GroupPolicyInfo;
                fromAmino(object: _91.GroupPolicyInfoAmino): _91.GroupPolicyInfo;
                toAmino(message: _91.GroupPolicyInfo): _91.GroupPolicyInfoAmino;
                fromAminoMsg(object: _91.GroupPolicyInfoAminoMsg): _91.GroupPolicyInfo;
                toAminoMsg(message: _91.GroupPolicyInfo): _91.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _91.GroupPolicyInfoProtoMsg): _91.GroupPolicyInfo;
                toProto(message: _91.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _91.GroupPolicyInfo): _91.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _91.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Proposal;
                fromPartial(object: Partial<_91.Proposal>): _91.Proposal;
                fromAmino(object: _91.ProposalAmino): _91.Proposal;
                toAmino(message: _91.Proposal): _91.ProposalAmino;
                fromAminoMsg(object: _91.ProposalAminoMsg): _91.Proposal;
                toAminoMsg(message: _91.Proposal): _91.ProposalAminoMsg;
                fromProtoMsg(message: _91.ProposalProtoMsg): _91.Proposal;
                toProto(message: _91.Proposal): Uint8Array;
                toProtoMsg(message: _91.Proposal): _91.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _91.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.TallyResult;
                fromPartial(object: Partial<_91.TallyResult>): _91.TallyResult;
                fromAmino(object: _91.TallyResultAmino): _91.TallyResult;
                toAmino(message: _91.TallyResult): _91.TallyResultAmino;
                fromAminoMsg(object: _91.TallyResultAminoMsg): _91.TallyResult;
                toAminoMsg(message: _91.TallyResult): _91.TallyResultAminoMsg;
                fromProtoMsg(message: _91.TallyResultProtoMsg): _91.TallyResult;
                toProto(message: _91.TallyResult): Uint8Array;
                toProtoMsg(message: _91.TallyResult): _91.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _91.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Vote;
                fromPartial(object: Partial<_91.Vote>): _91.Vote;
                fromAmino(object: _91.VoteAmino): _91.Vote;
                toAmino(message: _91.Vote): _91.VoteAmino;
                fromAminoMsg(object: _91.VoteAminoMsg): _91.Vote;
                toAminoMsg(message: _91.Vote): _91.VoteAminoMsg;
                fromProtoMsg(message: _91.VoteProtoMsg): _91.Vote;
                toProto(message: _91.Vote): Uint8Array;
                toProtoMsg(message: _91.Vote): _91.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _91.ThresholdDecisionPolicy | _91.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _90.Exec;
            execToJSON(object: _90.Exec): string;
            Exec: typeof _90.Exec;
            ExecSDKType: typeof _90.Exec;
            ExecAmino: typeof _90.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _90.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgCreateGroup;
                fromPartial(object: Partial<_90.MsgCreateGroup>): _90.MsgCreateGroup;
                fromAmino(object: _90.MsgCreateGroupAmino): _90.MsgCreateGroup;
                toAmino(message: _90.MsgCreateGroup): _90.MsgCreateGroupAmino;
                fromAminoMsg(object: _90.MsgCreateGroupAminoMsg): _90.MsgCreateGroup;
                toAminoMsg(message: _90.MsgCreateGroup): _90.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _90.MsgCreateGroupProtoMsg): _90.MsgCreateGroup;
                toProto(message: _90.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _90.MsgCreateGroup): _90.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _90.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgCreateGroupResponse;
                fromPartial(object: Partial<_90.MsgCreateGroupResponse>): _90.MsgCreateGroupResponse;
                fromAmino(object: _90.MsgCreateGroupResponseAmino): _90.MsgCreateGroupResponse;
                toAmino(message: _90.MsgCreateGroupResponse): _90.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _90.MsgCreateGroupResponseAminoMsg): _90.MsgCreateGroupResponse;
                toAminoMsg(message: _90.MsgCreateGroupResponse): _90.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _90.MsgCreateGroupResponseProtoMsg): _90.MsgCreateGroupResponse;
                toProto(message: _90.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _90.MsgCreateGroupResponse): _90.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _90.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_90.MsgUpdateGroupMembers>): _90.MsgUpdateGroupMembers;
                fromAmino(object: _90.MsgUpdateGroupMembersAmino): _90.MsgUpdateGroupMembers;
                toAmino(message: _90.MsgUpdateGroupMembers): _90.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupMembersAminoMsg): _90.MsgUpdateGroupMembers;
                toAminoMsg(message: _90.MsgUpdateGroupMembers): _90.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupMembersProtoMsg): _90.MsgUpdateGroupMembers;
                toProto(message: _90.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupMembers): _90.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _90.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_90.MsgUpdateGroupMembersResponse>): _90.MsgUpdateGroupMembersResponse;
                fromAmino(_: _90.MsgUpdateGroupMembersResponseAmino): _90.MsgUpdateGroupMembersResponse;
                toAmino(_: _90.MsgUpdateGroupMembersResponse): _90.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupMembersResponseAminoMsg): _90.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _90.MsgUpdateGroupMembersResponse): _90.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupMembersResponseProtoMsg): _90.MsgUpdateGroupMembersResponse;
                toProto(message: _90.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupMembersResponse): _90.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _90.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_90.MsgUpdateGroupAdmin>): _90.MsgUpdateGroupAdmin;
                fromAmino(object: _90.MsgUpdateGroupAdminAmino): _90.MsgUpdateGroupAdmin;
                toAmino(message: _90.MsgUpdateGroupAdmin): _90.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupAdminAminoMsg): _90.MsgUpdateGroupAdmin;
                toAminoMsg(message: _90.MsgUpdateGroupAdmin): _90.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupAdminProtoMsg): _90.MsgUpdateGroupAdmin;
                toProto(message: _90.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupAdmin): _90.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _90.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_90.MsgUpdateGroupAdminResponse>): _90.MsgUpdateGroupAdminResponse;
                fromAmino(_: _90.MsgUpdateGroupAdminResponseAmino): _90.MsgUpdateGroupAdminResponse;
                toAmino(_: _90.MsgUpdateGroupAdminResponse): _90.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupAdminResponseAminoMsg): _90.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _90.MsgUpdateGroupAdminResponse): _90.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupAdminResponseProtoMsg): _90.MsgUpdateGroupAdminResponse;
                toProto(message: _90.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupAdminResponse): _90.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _90.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_90.MsgUpdateGroupMetadata>): _90.MsgUpdateGroupMetadata;
                fromAmino(object: _90.MsgUpdateGroupMetadataAmino): _90.MsgUpdateGroupMetadata;
                toAmino(message: _90.MsgUpdateGroupMetadata): _90.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupMetadataAminoMsg): _90.MsgUpdateGroupMetadata;
                toAminoMsg(message: _90.MsgUpdateGroupMetadata): _90.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupMetadataProtoMsg): _90.MsgUpdateGroupMetadata;
                toProto(message: _90.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupMetadata): _90.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _90.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_90.MsgUpdateGroupMetadataResponse>): _90.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _90.MsgUpdateGroupMetadataResponseAmino): _90.MsgUpdateGroupMetadataResponse;
                toAmino(_: _90.MsgUpdateGroupMetadataResponse): _90.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupMetadataResponseAminoMsg): _90.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _90.MsgUpdateGroupMetadataResponse): _90.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupMetadataResponseProtoMsg): _90.MsgUpdateGroupMetadataResponse;
                toProto(message: _90.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupMetadataResponse): _90.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _90.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_90.MsgCreateGroupPolicy>): _90.MsgCreateGroupPolicy;
                fromAmino(object: _90.MsgCreateGroupPolicyAmino): _90.MsgCreateGroupPolicy;
                toAmino(message: _90.MsgCreateGroupPolicy): _90.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _90.MsgCreateGroupPolicyAminoMsg): _90.MsgCreateGroupPolicy;
                toAminoMsg(message: _90.MsgCreateGroupPolicy): _90.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _90.MsgCreateGroupPolicyProtoMsg): _90.MsgCreateGroupPolicy;
                toProto(message: _90.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _90.MsgCreateGroupPolicy): _90.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _90.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_90.MsgCreateGroupPolicyResponse>): _90.MsgCreateGroupPolicyResponse;
                fromAmino(object: _90.MsgCreateGroupPolicyResponseAmino): _90.MsgCreateGroupPolicyResponse;
                toAmino(message: _90.MsgCreateGroupPolicyResponse): _90.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _90.MsgCreateGroupPolicyResponseAminoMsg): _90.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _90.MsgCreateGroupPolicyResponse): _90.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _90.MsgCreateGroupPolicyResponseProtoMsg): _90.MsgCreateGroupPolicyResponse;
                toProto(message: _90.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _90.MsgCreateGroupPolicyResponse): _90.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _90.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_90.MsgUpdateGroupPolicyAdmin>): _90.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _90.MsgUpdateGroupPolicyAdminAmino): _90.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _90.MsgUpdateGroupPolicyAdmin): _90.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupPolicyAdminAminoMsg): _90.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _90.MsgUpdateGroupPolicyAdmin): _90.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupPolicyAdminProtoMsg): _90.MsgUpdateGroupPolicyAdmin;
                toProto(message: _90.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupPolicyAdmin): _90.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _90.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_90.MsgUpdateGroupPolicyAdminResponse>): _90.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _90.MsgUpdateGroupPolicyAdminResponseAmino): _90.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _90.MsgUpdateGroupPolicyAdminResponse): _90.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupPolicyAdminResponseAminoMsg): _90.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _90.MsgUpdateGroupPolicyAdminResponse): _90.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupPolicyAdminResponseProtoMsg): _90.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _90.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupPolicyAdminResponse): _90.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _90.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_90.MsgCreateGroupWithPolicy>): _90.MsgCreateGroupWithPolicy;
                fromAmino(object: _90.MsgCreateGroupWithPolicyAmino): _90.MsgCreateGroupWithPolicy;
                toAmino(message: _90.MsgCreateGroupWithPolicy): _90.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _90.MsgCreateGroupWithPolicyAminoMsg): _90.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _90.MsgCreateGroupWithPolicy): _90.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _90.MsgCreateGroupWithPolicyProtoMsg): _90.MsgCreateGroupWithPolicy;
                toProto(message: _90.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _90.MsgCreateGroupWithPolicy): _90.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _90.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_90.MsgCreateGroupWithPolicyResponse>): _90.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _90.MsgCreateGroupWithPolicyResponseAmino): _90.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _90.MsgCreateGroupWithPolicyResponse): _90.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _90.MsgCreateGroupWithPolicyResponseAminoMsg): _90.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _90.MsgCreateGroupWithPolicyResponse): _90.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _90.MsgCreateGroupWithPolicyResponseProtoMsg): _90.MsgCreateGroupWithPolicyResponse;
                toProto(message: _90.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _90.MsgCreateGroupWithPolicyResponse): _90.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _90.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_90.MsgUpdateGroupPolicyDecisionPolicy>): _90.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _90.MsgUpdateGroupPolicyDecisionPolicyAmino): _90.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _90.MsgUpdateGroupPolicyDecisionPolicy): _90.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _90.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _90.MsgUpdateGroupPolicyDecisionPolicy): _90.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _90.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _90.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupPolicyDecisionPolicy): _90.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _90.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_90.MsgUpdateGroupPolicyDecisionPolicyResponse>): _90.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _90.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _90.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _90.MsgUpdateGroupPolicyDecisionPolicyResponse): _90.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _90.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _90.MsgUpdateGroupPolicyDecisionPolicyResponse): _90.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _90.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _90.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupPolicyDecisionPolicyResponse): _90.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _90.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_90.MsgUpdateGroupPolicyMetadata>): _90.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _90.MsgUpdateGroupPolicyMetadataAmino): _90.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _90.MsgUpdateGroupPolicyMetadata): _90.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupPolicyMetadataAminoMsg): _90.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _90.MsgUpdateGroupPolicyMetadata): _90.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupPolicyMetadataProtoMsg): _90.MsgUpdateGroupPolicyMetadata;
                toProto(message: _90.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupPolicyMetadata): _90.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _90.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_90.MsgUpdateGroupPolicyMetadataResponse>): _90.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _90.MsgUpdateGroupPolicyMetadataResponseAmino): _90.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _90.MsgUpdateGroupPolicyMetadataResponse): _90.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _90.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _90.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _90.MsgUpdateGroupPolicyMetadataResponse): _90.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _90.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _90.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _90.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _90.MsgUpdateGroupPolicyMetadataResponse): _90.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _90.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgSubmitProposal;
                fromPartial(object: Partial<_90.MsgSubmitProposal>): _90.MsgSubmitProposal;
                fromAmino(object: _90.MsgSubmitProposalAmino): _90.MsgSubmitProposal;
                toAmino(message: _90.MsgSubmitProposal): _90.MsgSubmitProposalAmino;
                fromAminoMsg(object: _90.MsgSubmitProposalAminoMsg): _90.MsgSubmitProposal;
                toAminoMsg(message: _90.MsgSubmitProposal): _90.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _90.MsgSubmitProposalProtoMsg): _90.MsgSubmitProposal;
                toProto(message: _90.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _90.MsgSubmitProposal): _90.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _90.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_90.MsgSubmitProposalResponse>): _90.MsgSubmitProposalResponse;
                fromAmino(object: _90.MsgSubmitProposalResponseAmino): _90.MsgSubmitProposalResponse;
                toAmino(message: _90.MsgSubmitProposalResponse): _90.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _90.MsgSubmitProposalResponseAminoMsg): _90.MsgSubmitProposalResponse;
                toAminoMsg(message: _90.MsgSubmitProposalResponse): _90.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _90.MsgSubmitProposalResponseProtoMsg): _90.MsgSubmitProposalResponse;
                toProto(message: _90.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _90.MsgSubmitProposalResponse): _90.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _90.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgWithdrawProposal;
                fromPartial(object: Partial<_90.MsgWithdrawProposal>): _90.MsgWithdrawProposal;
                fromAmino(object: _90.MsgWithdrawProposalAmino): _90.MsgWithdrawProposal;
                toAmino(message: _90.MsgWithdrawProposal): _90.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _90.MsgWithdrawProposalAminoMsg): _90.MsgWithdrawProposal;
                toAminoMsg(message: _90.MsgWithdrawProposal): _90.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _90.MsgWithdrawProposalProtoMsg): _90.MsgWithdrawProposal;
                toProto(message: _90.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _90.MsgWithdrawProposal): _90.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _90.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_90.MsgWithdrawProposalResponse>): _90.MsgWithdrawProposalResponse;
                fromAmino(_: _90.MsgWithdrawProposalResponseAmino): _90.MsgWithdrawProposalResponse;
                toAmino(_: _90.MsgWithdrawProposalResponse): _90.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _90.MsgWithdrawProposalResponseAminoMsg): _90.MsgWithdrawProposalResponse;
                toAminoMsg(message: _90.MsgWithdrawProposalResponse): _90.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _90.MsgWithdrawProposalResponseProtoMsg): _90.MsgWithdrawProposalResponse;
                toProto(message: _90.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _90.MsgWithdrawProposalResponse): _90.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _90.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgVote;
                fromPartial(object: Partial<_90.MsgVote>): _90.MsgVote;
                fromAmino(object: _90.MsgVoteAmino): _90.MsgVote;
                toAmino(message: _90.MsgVote): _90.MsgVoteAmino;
                fromAminoMsg(object: _90.MsgVoteAminoMsg): _90.MsgVote;
                toAminoMsg(message: _90.MsgVote): _90.MsgVoteAminoMsg;
                fromProtoMsg(message: _90.MsgVoteProtoMsg): _90.MsgVote;
                toProto(message: _90.MsgVote): Uint8Array;
                toProtoMsg(message: _90.MsgVote): _90.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _90.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgVoteResponse;
                fromPartial(_: Partial<_90.MsgVoteResponse>): _90.MsgVoteResponse;
                fromAmino(_: _90.MsgVoteResponseAmino): _90.MsgVoteResponse;
                toAmino(_: _90.MsgVoteResponse): _90.MsgVoteResponseAmino;
                fromAminoMsg(object: _90.MsgVoteResponseAminoMsg): _90.MsgVoteResponse;
                toAminoMsg(message: _90.MsgVoteResponse): _90.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _90.MsgVoteResponseProtoMsg): _90.MsgVoteResponse;
                toProto(message: _90.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _90.MsgVoteResponse): _90.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _90.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgExec;
                fromPartial(object: Partial<_90.MsgExec>): _90.MsgExec;
                fromAmino(object: _90.MsgExecAmino): _90.MsgExec;
                toAmino(message: _90.MsgExec): _90.MsgExecAmino;
                fromAminoMsg(object: _90.MsgExecAminoMsg): _90.MsgExec;
                toAminoMsg(message: _90.MsgExec): _90.MsgExecAminoMsg;
                fromProtoMsg(message: _90.MsgExecProtoMsg): _90.MsgExec;
                toProto(message: _90.MsgExec): Uint8Array;
                toProtoMsg(message: _90.MsgExec): _90.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _90.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgExecResponse;
                fromPartial(object: Partial<_90.MsgExecResponse>): _90.MsgExecResponse;
                fromAmino(object: _90.MsgExecResponseAmino): _90.MsgExecResponse;
                toAmino(message: _90.MsgExecResponse): _90.MsgExecResponseAmino;
                fromAminoMsg(object: _90.MsgExecResponseAminoMsg): _90.MsgExecResponse;
                toAminoMsg(message: _90.MsgExecResponse): _90.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _90.MsgExecResponseProtoMsg): _90.MsgExecResponse;
                toProto(message: _90.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _90.MsgExecResponse): _90.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _90.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgLeaveGroup;
                fromPartial(object: Partial<_90.MsgLeaveGroup>): _90.MsgLeaveGroup;
                fromAmino(object: _90.MsgLeaveGroupAmino): _90.MsgLeaveGroup;
                toAmino(message: _90.MsgLeaveGroup): _90.MsgLeaveGroupAmino;
                fromAminoMsg(object: _90.MsgLeaveGroupAminoMsg): _90.MsgLeaveGroup;
                toAminoMsg(message: _90.MsgLeaveGroup): _90.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _90.MsgLeaveGroupProtoMsg): _90.MsgLeaveGroup;
                toProto(message: _90.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _90.MsgLeaveGroup): _90.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _90.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _90.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_90.MsgLeaveGroupResponse>): _90.MsgLeaveGroupResponse;
                fromAmino(_: _90.MsgLeaveGroupResponseAmino): _90.MsgLeaveGroupResponse;
                toAmino(_: _90.MsgLeaveGroupResponse): _90.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _90.MsgLeaveGroupResponseAminoMsg): _90.MsgLeaveGroupResponse;
                toAminoMsg(message: _90.MsgLeaveGroupResponse): _90.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _90.MsgLeaveGroupResponseProtoMsg): _90.MsgLeaveGroupResponse;
                toProto(message: _90.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _90.MsgLeaveGroupResponse): _90.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupInfoRequest;
                fromPartial(object: Partial<_89.QueryGroupInfoRequest>): _89.QueryGroupInfoRequest;
                fromAmino(object: _89.QueryGroupInfoRequestAmino): _89.QueryGroupInfoRequest;
                toAmino(message: _89.QueryGroupInfoRequest): _89.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _89.QueryGroupInfoRequestAminoMsg): _89.QueryGroupInfoRequest;
                toAminoMsg(message: _89.QueryGroupInfoRequest): _89.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupInfoRequestProtoMsg): _89.QueryGroupInfoRequest;
                toProto(message: _89.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupInfoRequest): _89.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupInfoResponse;
                fromPartial(object: Partial<_89.QueryGroupInfoResponse>): _89.QueryGroupInfoResponse;
                fromAmino(object: _89.QueryGroupInfoResponseAmino): _89.QueryGroupInfoResponse;
                toAmino(message: _89.QueryGroupInfoResponse): _89.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _89.QueryGroupInfoResponseAminoMsg): _89.QueryGroupInfoResponse;
                toAminoMsg(message: _89.QueryGroupInfoResponse): _89.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupInfoResponseProtoMsg): _89.QueryGroupInfoResponse;
                toProto(message: _89.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupInfoResponse): _89.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_89.QueryGroupPolicyInfoRequest>): _89.QueryGroupPolicyInfoRequest;
                fromAmino(object: _89.QueryGroupPolicyInfoRequestAmino): _89.QueryGroupPolicyInfoRequest;
                toAmino(message: _89.QueryGroupPolicyInfoRequest): _89.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _89.QueryGroupPolicyInfoRequestAminoMsg): _89.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _89.QueryGroupPolicyInfoRequest): _89.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupPolicyInfoRequestProtoMsg): _89.QueryGroupPolicyInfoRequest;
                toProto(message: _89.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupPolicyInfoRequest): _89.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_89.QueryGroupPolicyInfoResponse>): _89.QueryGroupPolicyInfoResponse;
                fromAmino(object: _89.QueryGroupPolicyInfoResponseAmino): _89.QueryGroupPolicyInfoResponse;
                toAmino(message: _89.QueryGroupPolicyInfoResponse): _89.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _89.QueryGroupPolicyInfoResponseAminoMsg): _89.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _89.QueryGroupPolicyInfoResponse): _89.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupPolicyInfoResponseProtoMsg): _89.QueryGroupPolicyInfoResponse;
                toProto(message: _89.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupPolicyInfoResponse): _89.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupMembersRequest;
                fromPartial(object: Partial<_89.QueryGroupMembersRequest>): _89.QueryGroupMembersRequest;
                fromAmino(object: _89.QueryGroupMembersRequestAmino): _89.QueryGroupMembersRequest;
                toAmino(message: _89.QueryGroupMembersRequest): _89.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _89.QueryGroupMembersRequestAminoMsg): _89.QueryGroupMembersRequest;
                toAminoMsg(message: _89.QueryGroupMembersRequest): _89.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupMembersRequestProtoMsg): _89.QueryGroupMembersRequest;
                toProto(message: _89.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupMembersRequest): _89.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupMembersResponse;
                fromPartial(object: Partial<_89.QueryGroupMembersResponse>): _89.QueryGroupMembersResponse;
                fromAmino(object: _89.QueryGroupMembersResponseAmino): _89.QueryGroupMembersResponse;
                toAmino(message: _89.QueryGroupMembersResponse): _89.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _89.QueryGroupMembersResponseAminoMsg): _89.QueryGroupMembersResponse;
                toAminoMsg(message: _89.QueryGroupMembersResponse): _89.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupMembersResponseProtoMsg): _89.QueryGroupMembersResponse;
                toProto(message: _89.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupMembersResponse): _89.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_89.QueryGroupsByAdminRequest>): _89.QueryGroupsByAdminRequest;
                fromAmino(object: _89.QueryGroupsByAdminRequestAmino): _89.QueryGroupsByAdminRequest;
                toAmino(message: _89.QueryGroupsByAdminRequest): _89.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _89.QueryGroupsByAdminRequestAminoMsg): _89.QueryGroupsByAdminRequest;
                toAminoMsg(message: _89.QueryGroupsByAdminRequest): _89.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupsByAdminRequestProtoMsg): _89.QueryGroupsByAdminRequest;
                toProto(message: _89.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupsByAdminRequest): _89.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_89.QueryGroupsByAdminResponse>): _89.QueryGroupsByAdminResponse;
                fromAmino(object: _89.QueryGroupsByAdminResponseAmino): _89.QueryGroupsByAdminResponse;
                toAmino(message: _89.QueryGroupsByAdminResponse): _89.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _89.QueryGroupsByAdminResponseAminoMsg): _89.QueryGroupsByAdminResponse;
                toAminoMsg(message: _89.QueryGroupsByAdminResponse): _89.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupsByAdminResponseProtoMsg): _89.QueryGroupsByAdminResponse;
                toProto(message: _89.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupsByAdminResponse): _89.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_89.QueryGroupPoliciesByGroupRequest>): _89.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _89.QueryGroupPoliciesByGroupRequestAmino): _89.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _89.QueryGroupPoliciesByGroupRequest): _89.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _89.QueryGroupPoliciesByGroupRequestAminoMsg): _89.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _89.QueryGroupPoliciesByGroupRequest): _89.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupPoliciesByGroupRequestProtoMsg): _89.QueryGroupPoliciesByGroupRequest;
                toProto(message: _89.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupPoliciesByGroupRequest): _89.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_89.QueryGroupPoliciesByGroupResponse>): _89.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _89.QueryGroupPoliciesByGroupResponseAmino): _89.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _89.QueryGroupPoliciesByGroupResponse): _89.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _89.QueryGroupPoliciesByGroupResponseAminoMsg): _89.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _89.QueryGroupPoliciesByGroupResponse): _89.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupPoliciesByGroupResponseProtoMsg): _89.QueryGroupPoliciesByGroupResponse;
                toProto(message: _89.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupPoliciesByGroupResponse): _89.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_89.QueryGroupPoliciesByAdminRequest>): _89.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _89.QueryGroupPoliciesByAdminRequestAmino): _89.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _89.QueryGroupPoliciesByAdminRequest): _89.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _89.QueryGroupPoliciesByAdminRequestAminoMsg): _89.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _89.QueryGroupPoliciesByAdminRequest): _89.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupPoliciesByAdminRequestProtoMsg): _89.QueryGroupPoliciesByAdminRequest;
                toProto(message: _89.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupPoliciesByAdminRequest): _89.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_89.QueryGroupPoliciesByAdminResponse>): _89.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _89.QueryGroupPoliciesByAdminResponseAmino): _89.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _89.QueryGroupPoliciesByAdminResponse): _89.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _89.QueryGroupPoliciesByAdminResponseAminoMsg): _89.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _89.QueryGroupPoliciesByAdminResponse): _89.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupPoliciesByAdminResponseProtoMsg): _89.QueryGroupPoliciesByAdminResponse;
                toProto(message: _89.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupPoliciesByAdminResponse): _89.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _89.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryProposalRequest;
                fromPartial(object: Partial<_89.QueryProposalRequest>): _89.QueryProposalRequest;
                fromAmino(object: _89.QueryProposalRequestAmino): _89.QueryProposalRequest;
                toAmino(message: _89.QueryProposalRequest): _89.QueryProposalRequestAmino;
                fromAminoMsg(object: _89.QueryProposalRequestAminoMsg): _89.QueryProposalRequest;
                toAminoMsg(message: _89.QueryProposalRequest): _89.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _89.QueryProposalRequestProtoMsg): _89.QueryProposalRequest;
                toProto(message: _89.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _89.QueryProposalRequest): _89.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _89.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryProposalResponse;
                fromPartial(object: Partial<_89.QueryProposalResponse>): _89.QueryProposalResponse;
                fromAmino(object: _89.QueryProposalResponseAmino): _89.QueryProposalResponse;
                toAmino(message: _89.QueryProposalResponse): _89.QueryProposalResponseAmino;
                fromAminoMsg(object: _89.QueryProposalResponseAminoMsg): _89.QueryProposalResponse;
                toAminoMsg(message: _89.QueryProposalResponse): _89.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _89.QueryProposalResponseProtoMsg): _89.QueryProposalResponse;
                toProto(message: _89.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _89.QueryProposalResponse): _89.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _89.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_89.QueryProposalsByGroupPolicyRequest>): _89.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _89.QueryProposalsByGroupPolicyRequestAmino): _89.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _89.QueryProposalsByGroupPolicyRequest): _89.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _89.QueryProposalsByGroupPolicyRequestAminoMsg): _89.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _89.QueryProposalsByGroupPolicyRequest): _89.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _89.QueryProposalsByGroupPolicyRequestProtoMsg): _89.QueryProposalsByGroupPolicyRequest;
                toProto(message: _89.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _89.QueryProposalsByGroupPolicyRequest): _89.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _89.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_89.QueryProposalsByGroupPolicyResponse>): _89.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _89.QueryProposalsByGroupPolicyResponseAmino): _89.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _89.QueryProposalsByGroupPolicyResponse): _89.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _89.QueryProposalsByGroupPolicyResponseAminoMsg): _89.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _89.QueryProposalsByGroupPolicyResponse): _89.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _89.QueryProposalsByGroupPolicyResponseProtoMsg): _89.QueryProposalsByGroupPolicyResponse;
                toProto(message: _89.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _89.QueryProposalsByGroupPolicyResponse): _89.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _89.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_89.QueryVoteByProposalVoterRequest>): _89.QueryVoteByProposalVoterRequest;
                fromAmino(object: _89.QueryVoteByProposalVoterRequestAmino): _89.QueryVoteByProposalVoterRequest;
                toAmino(message: _89.QueryVoteByProposalVoterRequest): _89.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _89.QueryVoteByProposalVoterRequestAminoMsg): _89.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _89.QueryVoteByProposalVoterRequest): _89.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _89.QueryVoteByProposalVoterRequestProtoMsg): _89.QueryVoteByProposalVoterRequest;
                toProto(message: _89.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _89.QueryVoteByProposalVoterRequest): _89.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _89.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_89.QueryVoteByProposalVoterResponse>): _89.QueryVoteByProposalVoterResponse;
                fromAmino(object: _89.QueryVoteByProposalVoterResponseAmino): _89.QueryVoteByProposalVoterResponse;
                toAmino(message: _89.QueryVoteByProposalVoterResponse): _89.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _89.QueryVoteByProposalVoterResponseAminoMsg): _89.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _89.QueryVoteByProposalVoterResponse): _89.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _89.QueryVoteByProposalVoterResponseProtoMsg): _89.QueryVoteByProposalVoterResponse;
                toProto(message: _89.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _89.QueryVoteByProposalVoterResponse): _89.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _89.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_89.QueryVotesByProposalRequest>): _89.QueryVotesByProposalRequest;
                fromAmino(object: _89.QueryVotesByProposalRequestAmino): _89.QueryVotesByProposalRequest;
                toAmino(message: _89.QueryVotesByProposalRequest): _89.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _89.QueryVotesByProposalRequestAminoMsg): _89.QueryVotesByProposalRequest;
                toAminoMsg(message: _89.QueryVotesByProposalRequest): _89.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _89.QueryVotesByProposalRequestProtoMsg): _89.QueryVotesByProposalRequest;
                toProto(message: _89.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _89.QueryVotesByProposalRequest): _89.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _89.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_89.QueryVotesByProposalResponse>): _89.QueryVotesByProposalResponse;
                fromAmino(object: _89.QueryVotesByProposalResponseAmino): _89.QueryVotesByProposalResponse;
                toAmino(message: _89.QueryVotesByProposalResponse): _89.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _89.QueryVotesByProposalResponseAminoMsg): _89.QueryVotesByProposalResponse;
                toAminoMsg(message: _89.QueryVotesByProposalResponse): _89.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _89.QueryVotesByProposalResponseProtoMsg): _89.QueryVotesByProposalResponse;
                toProto(message: _89.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _89.QueryVotesByProposalResponse): _89.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _89.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_89.QueryVotesByVoterRequest>): _89.QueryVotesByVoterRequest;
                fromAmino(object: _89.QueryVotesByVoterRequestAmino): _89.QueryVotesByVoterRequest;
                toAmino(message: _89.QueryVotesByVoterRequest): _89.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _89.QueryVotesByVoterRequestAminoMsg): _89.QueryVotesByVoterRequest;
                toAminoMsg(message: _89.QueryVotesByVoterRequest): _89.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _89.QueryVotesByVoterRequestProtoMsg): _89.QueryVotesByVoterRequest;
                toProto(message: _89.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _89.QueryVotesByVoterRequest): _89.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _89.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_89.QueryVotesByVoterResponse>): _89.QueryVotesByVoterResponse;
                fromAmino(object: _89.QueryVotesByVoterResponseAmino): _89.QueryVotesByVoterResponse;
                toAmino(message: _89.QueryVotesByVoterResponse): _89.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _89.QueryVotesByVoterResponseAminoMsg): _89.QueryVotesByVoterResponse;
                toAminoMsg(message: _89.QueryVotesByVoterResponse): _89.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _89.QueryVotesByVoterResponseProtoMsg): _89.QueryVotesByVoterResponse;
                toProto(message: _89.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _89.QueryVotesByVoterResponse): _89.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_89.QueryGroupsByMemberRequest>): _89.QueryGroupsByMemberRequest;
                fromAmino(object: _89.QueryGroupsByMemberRequestAmino): _89.QueryGroupsByMemberRequest;
                toAmino(message: _89.QueryGroupsByMemberRequest): _89.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _89.QueryGroupsByMemberRequestAminoMsg): _89.QueryGroupsByMemberRequest;
                toAminoMsg(message: _89.QueryGroupsByMemberRequest): _89.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupsByMemberRequestProtoMsg): _89.QueryGroupsByMemberRequest;
                toProto(message: _89.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupsByMemberRequest): _89.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_89.QueryGroupsByMemberResponse>): _89.QueryGroupsByMemberResponse;
                fromAmino(object: _89.QueryGroupsByMemberResponseAmino): _89.QueryGroupsByMemberResponse;
                toAmino(message: _89.QueryGroupsByMemberResponse): _89.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _89.QueryGroupsByMemberResponseAminoMsg): _89.QueryGroupsByMemberResponse;
                toAminoMsg(message: _89.QueryGroupsByMemberResponse): _89.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupsByMemberResponseProtoMsg): _89.QueryGroupsByMemberResponse;
                toProto(message: _89.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupsByMemberResponse): _89.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _89.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryTallyResultRequest;
                fromPartial(object: Partial<_89.QueryTallyResultRequest>): _89.QueryTallyResultRequest;
                fromAmino(object: _89.QueryTallyResultRequestAmino): _89.QueryTallyResultRequest;
                toAmino(message: _89.QueryTallyResultRequest): _89.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _89.QueryTallyResultRequestAminoMsg): _89.QueryTallyResultRequest;
                toAminoMsg(message: _89.QueryTallyResultRequest): _89.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _89.QueryTallyResultRequestProtoMsg): _89.QueryTallyResultRequest;
                toProto(message: _89.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _89.QueryTallyResultRequest): _89.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _89.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryTallyResultResponse;
                fromPartial(object: Partial<_89.QueryTallyResultResponse>): _89.QueryTallyResultResponse;
                fromAmino(object: _89.QueryTallyResultResponseAmino): _89.QueryTallyResultResponse;
                toAmino(message: _89.QueryTallyResultResponse): _89.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _89.QueryTallyResultResponseAminoMsg): _89.QueryTallyResultResponse;
                toAminoMsg(message: _89.QueryTallyResultResponse): _89.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _89.QueryTallyResultResponseProtoMsg): _89.QueryTallyResultResponse;
                toProto(message: _89.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _89.QueryTallyResultResponse): _89.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _89.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupsRequest;
                fromPartial(object: Partial<_89.QueryGroupsRequest>): _89.QueryGroupsRequest;
                fromAmino(object: _89.QueryGroupsRequestAmino): _89.QueryGroupsRequest;
                toAmino(message: _89.QueryGroupsRequest): _89.QueryGroupsRequestAmino;
                fromAminoMsg(object: _89.QueryGroupsRequestAminoMsg): _89.QueryGroupsRequest;
                toAminoMsg(message: _89.QueryGroupsRequest): _89.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryGroupsRequestProtoMsg): _89.QueryGroupsRequest;
                toProto(message: _89.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryGroupsRequest): _89.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _89.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryGroupsResponse;
                fromPartial(object: Partial<_89.QueryGroupsResponse>): _89.QueryGroupsResponse;
                fromAmino(object: _89.QueryGroupsResponseAmino): _89.QueryGroupsResponse;
                toAmino(message: _89.QueryGroupsResponse): _89.QueryGroupsResponseAmino;
                fromAminoMsg(object: _89.QueryGroupsResponseAminoMsg): _89.QueryGroupsResponse;
                toAminoMsg(message: _89.QueryGroupsResponse): _89.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryGroupsResponseProtoMsg): _89.QueryGroupsResponse;
                toProto(message: _89.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryGroupsResponse): _89.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _87.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventCreateGroup;
                fromPartial(object: Partial<_87.EventCreateGroup>): _87.EventCreateGroup;
                fromAmino(object: _87.EventCreateGroupAmino): _87.EventCreateGroup;
                toAmino(message: _87.EventCreateGroup): _87.EventCreateGroupAmino;
                fromAminoMsg(object: _87.EventCreateGroupAminoMsg): _87.EventCreateGroup;
                toAminoMsg(message: _87.EventCreateGroup): _87.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _87.EventCreateGroupProtoMsg): _87.EventCreateGroup;
                toProto(message: _87.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _87.EventCreateGroup): _87.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _87.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventUpdateGroup;
                fromPartial(object: Partial<_87.EventUpdateGroup>): _87.EventUpdateGroup;
                fromAmino(object: _87.EventUpdateGroupAmino): _87.EventUpdateGroup;
                toAmino(message: _87.EventUpdateGroup): _87.EventUpdateGroupAmino;
                fromAminoMsg(object: _87.EventUpdateGroupAminoMsg): _87.EventUpdateGroup;
                toAminoMsg(message: _87.EventUpdateGroup): _87.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _87.EventUpdateGroupProtoMsg): _87.EventUpdateGroup;
                toProto(message: _87.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _87.EventUpdateGroup): _87.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _87.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventCreateGroupPolicy;
                fromPartial(object: Partial<_87.EventCreateGroupPolicy>): _87.EventCreateGroupPolicy;
                fromAmino(object: _87.EventCreateGroupPolicyAmino): _87.EventCreateGroupPolicy;
                toAmino(message: _87.EventCreateGroupPolicy): _87.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _87.EventCreateGroupPolicyAminoMsg): _87.EventCreateGroupPolicy;
                toAminoMsg(message: _87.EventCreateGroupPolicy): _87.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _87.EventCreateGroupPolicyProtoMsg): _87.EventCreateGroupPolicy;
                toProto(message: _87.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _87.EventCreateGroupPolicy): _87.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _87.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_87.EventUpdateGroupPolicy>): _87.EventUpdateGroupPolicy;
                fromAmino(object: _87.EventUpdateGroupPolicyAmino): _87.EventUpdateGroupPolicy;
                toAmino(message: _87.EventUpdateGroupPolicy): _87.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _87.EventUpdateGroupPolicyAminoMsg): _87.EventUpdateGroupPolicy;
                toAminoMsg(message: _87.EventUpdateGroupPolicy): _87.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _87.EventUpdateGroupPolicyProtoMsg): _87.EventUpdateGroupPolicy;
                toProto(message: _87.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _87.EventUpdateGroupPolicy): _87.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _87.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventSubmitProposal;
                fromPartial(object: Partial<_87.EventSubmitProposal>): _87.EventSubmitProposal;
                fromAmino(object: _87.EventSubmitProposalAmino): _87.EventSubmitProposal;
                toAmino(message: _87.EventSubmitProposal): _87.EventSubmitProposalAmino;
                fromAminoMsg(object: _87.EventSubmitProposalAminoMsg): _87.EventSubmitProposal;
                toAminoMsg(message: _87.EventSubmitProposal): _87.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _87.EventSubmitProposalProtoMsg): _87.EventSubmitProposal;
                toProto(message: _87.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _87.EventSubmitProposal): _87.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _87.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventWithdrawProposal;
                fromPartial(object: Partial<_87.EventWithdrawProposal>): _87.EventWithdrawProposal;
                fromAmino(object: _87.EventWithdrawProposalAmino): _87.EventWithdrawProposal;
                toAmino(message: _87.EventWithdrawProposal): _87.EventWithdrawProposalAmino;
                fromAminoMsg(object: _87.EventWithdrawProposalAminoMsg): _87.EventWithdrawProposal;
                toAminoMsg(message: _87.EventWithdrawProposal): _87.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _87.EventWithdrawProposalProtoMsg): _87.EventWithdrawProposal;
                toProto(message: _87.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _87.EventWithdrawProposal): _87.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _87.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventVote;
                fromPartial(object: Partial<_87.EventVote>): _87.EventVote;
                fromAmino(object: _87.EventVoteAmino): _87.EventVote;
                toAmino(message: _87.EventVote): _87.EventVoteAmino;
                fromAminoMsg(object: _87.EventVoteAminoMsg): _87.EventVote;
                toAminoMsg(message: _87.EventVote): _87.EventVoteAminoMsg;
                fromProtoMsg(message: _87.EventVoteProtoMsg): _87.EventVote;
                toProto(message: _87.EventVote): Uint8Array;
                toProtoMsg(message: _87.EventVote): _87.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _87.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventExec;
                fromPartial(object: Partial<_87.EventExec>): _87.EventExec;
                fromAmino(object: _87.EventExecAmino): _87.EventExec;
                toAmino(message: _87.EventExec): _87.EventExecAmino;
                fromAminoMsg(object: _87.EventExecAminoMsg): _87.EventExec;
                toAminoMsg(message: _87.EventExec): _87.EventExecAminoMsg;
                fromProtoMsg(message: _87.EventExecProtoMsg): _87.EventExec;
                toProto(message: _87.EventExec): Uint8Array;
                toProtoMsg(message: _87.EventExec): _87.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _87.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventLeaveGroup;
                fromPartial(object: Partial<_87.EventLeaveGroup>): _87.EventLeaveGroup;
                fromAmino(object: _87.EventLeaveGroupAmino): _87.EventLeaveGroup;
                toAmino(message: _87.EventLeaveGroup): _87.EventLeaveGroupAmino;
                fromAminoMsg(object: _87.EventLeaveGroupAminoMsg): _87.EventLeaveGroup;
                toAminoMsg(message: _87.EventLeaveGroup): _87.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _87.EventLeaveGroupProtoMsg): _87.EventLeaveGroup;
                toProto(message: _87.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _87.EventLeaveGroup): _87.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _87.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.EventProposalPruned;
                fromPartial(object: Partial<_87.EventProposalPruned>): _87.EventProposalPruned;
                fromAmino(object: _87.EventProposalPrunedAmino): _87.EventProposalPruned;
                toAmino(message: _87.EventProposalPruned): _87.EventProposalPrunedAmino;
                fromAminoMsg(object: _87.EventProposalPrunedAminoMsg): _87.EventProposalPruned;
                toAminoMsg(message: _87.EventProposalPruned): _87.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _87.EventProposalPrunedProtoMsg): _87.EventProposalPruned;
                toProto(message: _87.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _87.EventProposalPruned): _87.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _92.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.Module;
                    fromPartial(object: Partial<_92.Module>): _92.Module;
                    fromAmino(object: _92.ModuleAmino): _92.Module;
                    toAmino(message: _92.Module): _92.ModuleAmino;
                    fromAminoMsg(object: _92.ModuleAminoMsg): _92.Module;
                    toAminoMsg(message: _92.Module): _92.ModuleAminoMsg;
                    fromProtoMsg(message: _92.ModuleProtoMsg): _92.Module;
                    toProto(message: _92.Module): Uint8Array;
                    toProtoMsg(message: _92.Module): _92.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                inflation(request?: _95.QueryInflationRequest): Promise<_95.QueryInflationResponse>;
                annualProvisions(request?: _95.QueryAnnualProvisionsRequest): Promise<_95.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _96.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _96.MsgUpdateParams): {
                        typeUrl: string;
                        value: _96.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _96.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _96.MsgUpdateParams): {
                        typeUrl: string;
                        value: _96.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _96.MsgUpdateParams) => _96.MsgUpdateParamsAmino;
                    fromAmino: (object: _96.MsgUpdateParamsAmino) => _96.MsgUpdateParams;
                };
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _95.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.QueryParamsRequest;
                fromPartial(_: Partial<_95.QueryParamsRequest>): _95.QueryParamsRequest;
                fromAmino(_: _95.QueryParamsRequestAmino): _95.QueryParamsRequest;
                toAmino(_: _95.QueryParamsRequest): _95.QueryParamsRequestAmino;
                fromAminoMsg(object: _95.QueryParamsRequestAminoMsg): _95.QueryParamsRequest;
                toAminoMsg(message: _95.QueryParamsRequest): _95.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryParamsRequestProtoMsg): _95.QueryParamsRequest;
                toProto(message: _95.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryParamsRequest): _95.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _95.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryParamsResponse;
                fromPartial(object: Partial<_95.QueryParamsResponse>): _95.QueryParamsResponse;
                fromAmino(object: _95.QueryParamsResponseAmino): _95.QueryParamsResponse;
                toAmino(message: _95.QueryParamsResponse): _95.QueryParamsResponseAmino;
                fromAminoMsg(object: _95.QueryParamsResponseAminoMsg): _95.QueryParamsResponse;
                toAminoMsg(message: _95.QueryParamsResponse): _95.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryParamsResponseProtoMsg): _95.QueryParamsResponse;
                toProto(message: _95.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryParamsResponse): _95.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _95.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.QueryInflationRequest;
                fromPartial(_: Partial<_95.QueryInflationRequest>): _95.QueryInflationRequest;
                fromAmino(_: _95.QueryInflationRequestAmino): _95.QueryInflationRequest;
                toAmino(_: _95.QueryInflationRequest): _95.QueryInflationRequestAmino;
                fromAminoMsg(object: _95.QueryInflationRequestAminoMsg): _95.QueryInflationRequest;
                toAminoMsg(message: _95.QueryInflationRequest): _95.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _95.QueryInflationRequestProtoMsg): _95.QueryInflationRequest;
                toProto(message: _95.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _95.QueryInflationRequest): _95.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _95.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryInflationResponse;
                fromPartial(object: Partial<_95.QueryInflationResponse>): _95.QueryInflationResponse;
                fromAmino(object: _95.QueryInflationResponseAmino): _95.QueryInflationResponse;
                toAmino(message: _95.QueryInflationResponse): _95.QueryInflationResponseAmino;
                fromAminoMsg(object: _95.QueryInflationResponseAminoMsg): _95.QueryInflationResponse;
                toAminoMsg(message: _95.QueryInflationResponse): _95.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _95.QueryInflationResponseProtoMsg): _95.QueryInflationResponse;
                toProto(message: _95.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _95.QueryInflationResponse): _95.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _95.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_95.QueryAnnualProvisionsRequest>): _95.QueryAnnualProvisionsRequest;
                fromAmino(_: _95.QueryAnnualProvisionsRequestAmino): _95.QueryAnnualProvisionsRequest;
                toAmino(_: _95.QueryAnnualProvisionsRequest): _95.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _95.QueryAnnualProvisionsRequestAminoMsg): _95.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _95.QueryAnnualProvisionsRequest): _95.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryAnnualProvisionsRequestProtoMsg): _95.QueryAnnualProvisionsRequest;
                toProto(message: _95.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryAnnualProvisionsRequest): _95.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _95.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_95.QueryAnnualProvisionsResponse>): _95.QueryAnnualProvisionsResponse;
                fromAmino(object: _95.QueryAnnualProvisionsResponseAmino): _95.QueryAnnualProvisionsResponse;
                toAmino(message: _95.QueryAnnualProvisionsResponse): _95.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _95.QueryAnnualProvisionsResponseAminoMsg): _95.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _95.QueryAnnualProvisionsResponse): _95.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryAnnualProvisionsResponseProtoMsg): _95.QueryAnnualProvisionsResponse;
                toProto(message: _95.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryAnnualProvisionsResponse): _95.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _94.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Minter;
                fromPartial(object: Partial<_94.Minter>): _94.Minter;
                fromAmino(object: _94.MinterAmino): _94.Minter;
                toAmino(message: _94.Minter): _94.MinterAmino;
                fromAminoMsg(object: _94.MinterAminoMsg): _94.Minter;
                toAminoMsg(message: _94.Minter): _94.MinterAminoMsg;
                fromProtoMsg(message: _94.MinterProtoMsg): _94.Minter;
                toProto(message: _94.Minter): Uint8Array;
                toProtoMsg(message: _94.Minter): _94.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _94.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Params;
                fromPartial(object: Partial<_94.Params>): _94.Params;
                fromAmino(object: _94.ParamsAmino): _94.Params;
                toAmino(message: _94.Params): _94.ParamsAmino;
                fromAminoMsg(object: _94.ParamsAminoMsg): _94.Params;
                toAminoMsg(message: _94.Params): _94.ParamsAminoMsg;
                fromProtoMsg(message: _94.ParamsProtoMsg): _94.Params;
                toProto(message: _94.Params): Uint8Array;
                toProtoMsg(message: _94.Params): _94.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                toProto(message: _93.GenesisState): Uint8Array;
                toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
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
                    encode(_: _98.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _98.Module;
                    fromPartial(_: Partial<_98.Module>): _98.Module;
                    fromAmino(_: _98.ModuleAmino): _98.Module;
                    toAmino(_: _98.Module): _98.ModuleAmino;
                    fromAminoMsg(object: _98.ModuleAminoMsg): _98.Module;
                    toAminoMsg(message: _98.Module): _98.ModuleAminoMsg;
                    fromProtoMsg(message: _98.ModuleProtoMsg): _98.Module;
                    toProto(message: _98.Module): Uint8Array;
                    toProtoMsg(message: _98.Module): _98.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _102.QueryBalanceRequest): Promise<_102.QueryBalanceResponse>;
                owner(request: _102.QueryOwnerRequest): Promise<_102.QueryOwnerResponse>;
                supply(request: _102.QuerySupplyRequest): Promise<_102.QuerySupplyResponse>;
                nFTs(request: _102.QueryNFTsRequest): Promise<_102.QueryNFTsResponse>;
                nFT(request: _102.QueryNFTRequest): Promise<_102.QueryNFTResponse>;
                class(request: _102.QueryClassRequest): Promise<_102.QueryClassResponse>;
                classes(request?: _102.QueryClassesRequest): Promise<_102.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _211.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _103.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _103.MsgSend): {
                        typeUrl: string;
                        value: _103.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _103.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _103.MsgSend): {
                        typeUrl: string;
                        value: _103.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _103.MsgSend) => _103.MsgSendAmino;
                    fromAmino: (object: _103.MsgSendAmino) => _103.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _103.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgSend;
                fromPartial(object: Partial<_103.MsgSend>): _103.MsgSend;
                fromAmino(object: _103.MsgSendAmino): _103.MsgSend;
                toAmino(message: _103.MsgSend): _103.MsgSendAmino;
                fromAminoMsg(object: _103.MsgSendAminoMsg): _103.MsgSend;
                toAminoMsg(message: _103.MsgSend): _103.MsgSendAminoMsg;
                fromProtoMsg(message: _103.MsgSendProtoMsg): _103.MsgSend;
                toProto(message: _103.MsgSend): Uint8Array;
                toProtoMsg(message: _103.MsgSend): _103.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _103.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgSendResponse;
                fromPartial(_: Partial<_103.MsgSendResponse>): _103.MsgSendResponse;
                fromAmino(_: _103.MsgSendResponseAmino): _103.MsgSendResponse;
                toAmino(_: _103.MsgSendResponse): _103.MsgSendResponseAmino;
                fromAminoMsg(object: _103.MsgSendResponseAminoMsg): _103.MsgSendResponse;
                toAminoMsg(message: _103.MsgSendResponse): _103.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _103.MsgSendResponseProtoMsg): _103.MsgSendResponse;
                toProto(message: _103.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _103.MsgSendResponse): _103.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _102.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryBalanceRequest;
                fromPartial(object: Partial<_102.QueryBalanceRequest>): _102.QueryBalanceRequest;
                fromAmino(object: _102.QueryBalanceRequestAmino): _102.QueryBalanceRequest;
                toAmino(message: _102.QueryBalanceRequest): _102.QueryBalanceRequestAmino;
                fromAminoMsg(object: _102.QueryBalanceRequestAminoMsg): _102.QueryBalanceRequest;
                toAminoMsg(message: _102.QueryBalanceRequest): _102.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _102.QueryBalanceRequestProtoMsg): _102.QueryBalanceRequest;
                toProto(message: _102.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _102.QueryBalanceRequest): _102.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _102.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryBalanceResponse;
                fromPartial(object: Partial<_102.QueryBalanceResponse>): _102.QueryBalanceResponse;
                fromAmino(object: _102.QueryBalanceResponseAmino): _102.QueryBalanceResponse;
                toAmino(message: _102.QueryBalanceResponse): _102.QueryBalanceResponseAmino;
                fromAminoMsg(object: _102.QueryBalanceResponseAminoMsg): _102.QueryBalanceResponse;
                toAminoMsg(message: _102.QueryBalanceResponse): _102.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _102.QueryBalanceResponseProtoMsg): _102.QueryBalanceResponse;
                toProto(message: _102.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _102.QueryBalanceResponse): _102.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _102.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryOwnerRequest;
                fromPartial(object: Partial<_102.QueryOwnerRequest>): _102.QueryOwnerRequest;
                fromAmino(object: _102.QueryOwnerRequestAmino): _102.QueryOwnerRequest;
                toAmino(message: _102.QueryOwnerRequest): _102.QueryOwnerRequestAmino;
                fromAminoMsg(object: _102.QueryOwnerRequestAminoMsg): _102.QueryOwnerRequest;
                toAminoMsg(message: _102.QueryOwnerRequest): _102.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _102.QueryOwnerRequestProtoMsg): _102.QueryOwnerRequest;
                toProto(message: _102.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _102.QueryOwnerRequest): _102.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _102.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryOwnerResponse;
                fromPartial(object: Partial<_102.QueryOwnerResponse>): _102.QueryOwnerResponse;
                fromAmino(object: _102.QueryOwnerResponseAmino): _102.QueryOwnerResponse;
                toAmino(message: _102.QueryOwnerResponse): _102.QueryOwnerResponseAmino;
                fromAminoMsg(object: _102.QueryOwnerResponseAminoMsg): _102.QueryOwnerResponse;
                toAminoMsg(message: _102.QueryOwnerResponse): _102.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _102.QueryOwnerResponseProtoMsg): _102.QueryOwnerResponse;
                toProto(message: _102.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _102.QueryOwnerResponse): _102.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _102.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QuerySupplyRequest;
                fromPartial(object: Partial<_102.QuerySupplyRequest>): _102.QuerySupplyRequest;
                fromAmino(object: _102.QuerySupplyRequestAmino): _102.QuerySupplyRequest;
                toAmino(message: _102.QuerySupplyRequest): _102.QuerySupplyRequestAmino;
                fromAminoMsg(object: _102.QuerySupplyRequestAminoMsg): _102.QuerySupplyRequest;
                toAminoMsg(message: _102.QuerySupplyRequest): _102.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _102.QuerySupplyRequestProtoMsg): _102.QuerySupplyRequest;
                toProto(message: _102.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _102.QuerySupplyRequest): _102.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _102.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QuerySupplyResponse;
                fromPartial(object: Partial<_102.QuerySupplyResponse>): _102.QuerySupplyResponse;
                fromAmino(object: _102.QuerySupplyResponseAmino): _102.QuerySupplyResponse;
                toAmino(message: _102.QuerySupplyResponse): _102.QuerySupplyResponseAmino;
                fromAminoMsg(object: _102.QuerySupplyResponseAminoMsg): _102.QuerySupplyResponse;
                toAminoMsg(message: _102.QuerySupplyResponse): _102.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _102.QuerySupplyResponseProtoMsg): _102.QuerySupplyResponse;
                toProto(message: _102.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _102.QuerySupplyResponse): _102.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _102.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryNFTsRequest;
                fromPartial(object: Partial<_102.QueryNFTsRequest>): _102.QueryNFTsRequest;
                fromAmino(object: _102.QueryNFTsRequestAmino): _102.QueryNFTsRequest;
                toAmino(message: _102.QueryNFTsRequest): _102.QueryNFTsRequestAmino;
                fromAminoMsg(object: _102.QueryNFTsRequestAminoMsg): _102.QueryNFTsRequest;
                toAminoMsg(message: _102.QueryNFTsRequest): _102.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryNFTsRequestProtoMsg): _102.QueryNFTsRequest;
                toProto(message: _102.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryNFTsRequest): _102.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _102.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryNFTsResponse;
                fromPartial(object: Partial<_102.QueryNFTsResponse>): _102.QueryNFTsResponse;
                fromAmino(object: _102.QueryNFTsResponseAmino): _102.QueryNFTsResponse;
                toAmino(message: _102.QueryNFTsResponse): _102.QueryNFTsResponseAmino;
                fromAminoMsg(object: _102.QueryNFTsResponseAminoMsg): _102.QueryNFTsResponse;
                toAminoMsg(message: _102.QueryNFTsResponse): _102.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryNFTsResponseProtoMsg): _102.QueryNFTsResponse;
                toProto(message: _102.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryNFTsResponse): _102.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _102.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryNFTRequest;
                fromPartial(object: Partial<_102.QueryNFTRequest>): _102.QueryNFTRequest;
                fromAmino(object: _102.QueryNFTRequestAmino): _102.QueryNFTRequest;
                toAmino(message: _102.QueryNFTRequest): _102.QueryNFTRequestAmino;
                fromAminoMsg(object: _102.QueryNFTRequestAminoMsg): _102.QueryNFTRequest;
                toAminoMsg(message: _102.QueryNFTRequest): _102.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _102.QueryNFTRequestProtoMsg): _102.QueryNFTRequest;
                toProto(message: _102.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _102.QueryNFTRequest): _102.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _102.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryNFTResponse;
                fromPartial(object: Partial<_102.QueryNFTResponse>): _102.QueryNFTResponse;
                fromAmino(object: _102.QueryNFTResponseAmino): _102.QueryNFTResponse;
                toAmino(message: _102.QueryNFTResponse): _102.QueryNFTResponseAmino;
                fromAminoMsg(object: _102.QueryNFTResponseAminoMsg): _102.QueryNFTResponse;
                toAminoMsg(message: _102.QueryNFTResponse): _102.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _102.QueryNFTResponseProtoMsg): _102.QueryNFTResponse;
                toProto(message: _102.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _102.QueryNFTResponse): _102.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _102.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryClassRequest;
                fromPartial(object: Partial<_102.QueryClassRequest>): _102.QueryClassRequest;
                fromAmino(object: _102.QueryClassRequestAmino): _102.QueryClassRequest;
                toAmino(message: _102.QueryClassRequest): _102.QueryClassRequestAmino;
                fromAminoMsg(object: _102.QueryClassRequestAminoMsg): _102.QueryClassRequest;
                toAminoMsg(message: _102.QueryClassRequest): _102.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _102.QueryClassRequestProtoMsg): _102.QueryClassRequest;
                toProto(message: _102.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _102.QueryClassRequest): _102.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _102.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryClassResponse;
                fromPartial(object: Partial<_102.QueryClassResponse>): _102.QueryClassResponse;
                fromAmino(object: _102.QueryClassResponseAmino): _102.QueryClassResponse;
                toAmino(message: _102.QueryClassResponse): _102.QueryClassResponseAmino;
                fromAminoMsg(object: _102.QueryClassResponseAminoMsg): _102.QueryClassResponse;
                toAminoMsg(message: _102.QueryClassResponse): _102.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _102.QueryClassResponseProtoMsg): _102.QueryClassResponse;
                toProto(message: _102.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _102.QueryClassResponse): _102.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _102.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryClassesRequest;
                fromPartial(object: Partial<_102.QueryClassesRequest>): _102.QueryClassesRequest;
                fromAmino(object: _102.QueryClassesRequestAmino): _102.QueryClassesRequest;
                toAmino(message: _102.QueryClassesRequest): _102.QueryClassesRequestAmino;
                fromAminoMsg(object: _102.QueryClassesRequestAminoMsg): _102.QueryClassesRequest;
                toAminoMsg(message: _102.QueryClassesRequest): _102.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _102.QueryClassesRequestProtoMsg): _102.QueryClassesRequest;
                toProto(message: _102.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _102.QueryClassesRequest): _102.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _102.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryClassesResponse;
                fromPartial(object: Partial<_102.QueryClassesResponse>): _102.QueryClassesResponse;
                fromAmino(object: _102.QueryClassesResponseAmino): _102.QueryClassesResponse;
                toAmino(message: _102.QueryClassesResponse): _102.QueryClassesResponseAmino;
                fromAminoMsg(object: _102.QueryClassesResponseAminoMsg): _102.QueryClassesResponse;
                toAminoMsg(message: _102.QueryClassesResponse): _102.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _102.QueryClassesResponseProtoMsg): _102.QueryClassesResponse;
                toProto(message: _102.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _102.QueryClassesResponse): _102.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _101.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Class;
                fromPartial(object: Partial<_101.Class>): _101.Class;
                fromAmino(object: _101.ClassAmino): _101.Class;
                toAmino(message: _101.Class): _101.ClassAmino;
                fromAminoMsg(object: _101.ClassAminoMsg): _101.Class;
                toAminoMsg(message: _101.Class): _101.ClassAminoMsg;
                fromProtoMsg(message: _101.ClassProtoMsg): _101.Class;
                toProto(message: _101.Class): Uint8Array;
                toProtoMsg(message: _101.Class): _101.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _101.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.NFT;
                fromPartial(object: Partial<_101.NFT>): _101.NFT;
                fromAmino(object: _101.NFTAmino): _101.NFT;
                toAmino(message: _101.NFT): _101.NFTAmino;
                fromAminoMsg(object: _101.NFTAminoMsg): _101.NFT;
                toAminoMsg(message: _101.NFT): _101.NFTAminoMsg;
                fromProtoMsg(message: _101.NFTProtoMsg): _101.NFT;
                toProto(message: _101.NFT): Uint8Array;
                toProtoMsg(message: _101.NFT): _101.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _100.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.GenesisState;
                fromPartial(object: Partial<_100.GenesisState>): _100.GenesisState;
                fromAmino(object: _100.GenesisStateAmino): _100.GenesisState;
                toAmino(message: _100.GenesisState): _100.GenesisStateAmino;
                fromAminoMsg(object: _100.GenesisStateAminoMsg): _100.GenesisState;
                toAminoMsg(message: _100.GenesisState): _100.GenesisStateAminoMsg;
                fromProtoMsg(message: _100.GenesisStateProtoMsg): _100.GenesisState;
                toProto(message: _100.GenesisState): Uint8Array;
                toProtoMsg(message: _100.GenesisState): _100.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _100.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Entry;
                fromPartial(object: Partial<_100.Entry>): _100.Entry;
                fromAmino(object: _100.EntryAmino): _100.Entry;
                toAmino(message: _100.Entry): _100.EntryAmino;
                fromAminoMsg(object: _100.EntryAminoMsg): _100.Entry;
                toAminoMsg(message: _100.Entry): _100.EntryAminoMsg;
                fromProtoMsg(message: _100.EntryProtoMsg): _100.Entry;
                toProto(message: _100.Entry): Uint8Array;
                toProtoMsg(message: _100.Entry): _100.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _99.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.EventSend;
                fromPartial(object: Partial<_99.EventSend>): _99.EventSend;
                fromAmino(object: _99.EventSendAmino): _99.EventSend;
                toAmino(message: _99.EventSend): _99.EventSendAmino;
                fromAminoMsg(object: _99.EventSendAminoMsg): _99.EventSend;
                toAminoMsg(message: _99.EventSend): _99.EventSendAminoMsg;
                fromProtoMsg(message: _99.EventSendProtoMsg): _99.EventSend;
                toProto(message: _99.EventSend): Uint8Array;
                toProtoMsg(message: _99.EventSend): _99.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _99.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.EventMint;
                fromPartial(object: Partial<_99.EventMint>): _99.EventMint;
                fromAmino(object: _99.EventMintAmino): _99.EventMint;
                toAmino(message: _99.EventMint): _99.EventMintAmino;
                fromAminoMsg(object: _99.EventMintAminoMsg): _99.EventMint;
                toAminoMsg(message: _99.EventMint): _99.EventMintAminoMsg;
                fromProtoMsg(message: _99.EventMintProtoMsg): _99.EventMint;
                toProto(message: _99.EventMint): Uint8Array;
                toProtoMsg(message: _99.EventMint): _99.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _99.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.EventBurn;
                fromPartial(object: Partial<_99.EventBurn>): _99.EventBurn;
                fromAmino(object: _99.EventBurnAmino): _99.EventBurn;
                toAmino(message: _99.EventBurn): _99.EventBurnAmino;
                fromAminoMsg(object: _99.EventBurnAminoMsg): _99.EventBurn;
                toAminoMsg(message: _99.EventBurn): _99.EventBurnAminoMsg;
                fromProtoMsg(message: _99.EventBurnProtoMsg): _99.EventBurn;
                toProto(message: _99.EventBurn): Uint8Array;
                toProtoMsg(message: _99.EventBurn): _99.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _104.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _104.Module;
                    fromPartial(_: Partial<_104.Module>): _104.Module;
                    fromAmino(_: _104.ModuleAmino): _104.Module;
                    toAmino(_: _104.Module): _104.ModuleAmino;
                    fromAminoMsg(object: _104.ModuleAminoMsg): _104.Module;
                    toAminoMsg(message: _104.Module): _104.ModuleAminoMsg;
                    fromProtoMsg(message: _104.ModuleProtoMsg): _104.Module;
                    toProto(message: _104.Module): Uint8Array;
                    toProtoMsg(message: _104.Module): _104.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _233.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _105.GetRequest): Promise<_105.GetResponse>;
                    list(request: _105.ListRequest): Promise<_105.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _105.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetRequest;
                    fromPartial(object: Partial<_105.GetRequest>): _105.GetRequest;
                    fromAmino(object: _105.GetRequestAmino): _105.GetRequest;
                    toAmino(message: _105.GetRequest): _105.GetRequestAmino;
                    fromAminoMsg(object: _105.GetRequestAminoMsg): _105.GetRequest;
                    toAminoMsg(message: _105.GetRequest): _105.GetRequestAminoMsg;
                    fromProtoMsg(message: _105.GetRequestProtoMsg): _105.GetRequest;
                    toProto(message: _105.GetRequest): Uint8Array;
                    toProtoMsg(message: _105.GetRequest): _105.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _105.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.GetResponse;
                    fromPartial(object: Partial<_105.GetResponse>): _105.GetResponse;
                    fromAmino(object: _105.GetResponseAmino): _105.GetResponse;
                    toAmino(message: _105.GetResponse): _105.GetResponseAmino;
                    fromAminoMsg(object: _105.GetResponseAminoMsg): _105.GetResponse;
                    toAminoMsg(message: _105.GetResponse): _105.GetResponseAminoMsg;
                    fromProtoMsg(message: _105.GetResponseProtoMsg): _105.GetResponse;
                    toProto(message: _105.GetResponse): Uint8Array;
                    toProtoMsg(message: _105.GetResponse): _105.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _105.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.ListRequest;
                    fromPartial(object: Partial<_105.ListRequest>): _105.ListRequest;
                    fromAmino(object: _105.ListRequestAmino): _105.ListRequest;
                    toAmino(message: _105.ListRequest): _105.ListRequestAmino;
                    fromAminoMsg(object: _105.ListRequestAminoMsg): _105.ListRequest;
                    toAminoMsg(message: _105.ListRequest): _105.ListRequestAminoMsg;
                    fromProtoMsg(message: _105.ListRequestProtoMsg): _105.ListRequest;
                    toProto(message: _105.ListRequest): Uint8Array;
                    toProtoMsg(message: _105.ListRequest): _105.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _105.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.ListRequest_Prefix;
                    fromPartial(object: Partial<_105.ListRequest_Prefix>): _105.ListRequest_Prefix;
                    fromAmino(object: _105.ListRequest_PrefixAmino): _105.ListRequest_Prefix;
                    toAmino(message: _105.ListRequest_Prefix): _105.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _105.ListRequest_PrefixAminoMsg): _105.ListRequest_Prefix;
                    toAminoMsg(message: _105.ListRequest_Prefix): _105.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _105.ListRequest_PrefixProtoMsg): _105.ListRequest_Prefix;
                    toProto(message: _105.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _105.ListRequest_Prefix): _105.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _105.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.ListRequest_Range;
                    fromPartial(object: Partial<_105.ListRequest_Range>): _105.ListRequest_Range;
                    fromAmino(object: _105.ListRequest_RangeAmino): _105.ListRequest_Range;
                    toAmino(message: _105.ListRequest_Range): _105.ListRequest_RangeAmino;
                    fromAminoMsg(object: _105.ListRequest_RangeAminoMsg): _105.ListRequest_Range;
                    toAminoMsg(message: _105.ListRequest_Range): _105.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _105.ListRequest_RangeProtoMsg): _105.ListRequest_Range;
                    toProto(message: _105.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _105.ListRequest_Range): _105.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _105.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.ListResponse;
                    fromPartial(object: Partial<_105.ListResponse>): _105.ListResponse;
                    fromAmino(object: _105.ListResponseAmino): _105.ListResponse;
                    toAmino(message: _105.ListResponse): _105.ListResponseAmino;
                    fromAminoMsg(object: _105.ListResponseAminoMsg): _105.ListResponse;
                    toAminoMsg(message: _105.ListResponse): _105.ListResponseAminoMsg;
                    fromProtoMsg(message: _105.ListResponseProtoMsg): _105.ListResponse;
                    toProto(message: _105.ListResponse): Uint8Array;
                    toProtoMsg(message: _105.ListResponse): _105.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _105.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.IndexValue;
                    fromPartial(object: Partial<_105.IndexValue>): _105.IndexValue;
                    fromAmino(object: _105.IndexValueAmino): _105.IndexValue;
                    toAmino(message: _105.IndexValue): _105.IndexValueAmino;
                    fromAminoMsg(object: _105.IndexValueAminoMsg): _105.IndexValue;
                    toAminoMsg(message: _105.IndexValue): _105.IndexValueAminoMsg;
                    fromProtoMsg(message: _105.IndexValueProtoMsg): _105.IndexValue;
                    toProto(message: _105.IndexValue): Uint8Array;
                    toProtoMsg(message: _105.IndexValue): _105.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _106.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.TableDescriptor;
                fromPartial(object: Partial<_106.TableDescriptor>): _106.TableDescriptor;
                fromAmino(object: _106.TableDescriptorAmino): _106.TableDescriptor;
                toAmino(message: _106.TableDescriptor): _106.TableDescriptorAmino;
                fromAminoMsg(object: _106.TableDescriptorAminoMsg): _106.TableDescriptor;
                toAminoMsg(message: _106.TableDescriptor): _106.TableDescriptorAminoMsg;
                fromProtoMsg(message: _106.TableDescriptorProtoMsg): _106.TableDescriptor;
                toProto(message: _106.TableDescriptor): Uint8Array;
                toProtoMsg(message: _106.TableDescriptor): _106.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _106.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_106.PrimaryKeyDescriptor>): _106.PrimaryKeyDescriptor;
                fromAmino(object: _106.PrimaryKeyDescriptorAmino): _106.PrimaryKeyDescriptor;
                toAmino(message: _106.PrimaryKeyDescriptor): _106.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _106.PrimaryKeyDescriptorAminoMsg): _106.PrimaryKeyDescriptor;
                toAminoMsg(message: _106.PrimaryKeyDescriptor): _106.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _106.PrimaryKeyDescriptorProtoMsg): _106.PrimaryKeyDescriptor;
                toProto(message: _106.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _106.PrimaryKeyDescriptor): _106.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _106.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_106.SecondaryIndexDescriptor>): _106.SecondaryIndexDescriptor;
                fromAmino(object: _106.SecondaryIndexDescriptorAmino): _106.SecondaryIndexDescriptor;
                toAmino(message: _106.SecondaryIndexDescriptor): _106.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _106.SecondaryIndexDescriptorAminoMsg): _106.SecondaryIndexDescriptor;
                toAminoMsg(message: _106.SecondaryIndexDescriptor): _106.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _106.SecondaryIndexDescriptorProtoMsg): _106.SecondaryIndexDescriptor;
                toProto(message: _106.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _106.SecondaryIndexDescriptor): _106.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _106.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.SingletonDescriptor;
                fromPartial(object: Partial<_106.SingletonDescriptor>): _106.SingletonDescriptor;
                fromAmino(object: _106.SingletonDescriptorAmino): _106.SingletonDescriptor;
                toAmino(message: _106.SingletonDescriptor): _106.SingletonDescriptorAmino;
                fromAminoMsg(object: _106.SingletonDescriptorAminoMsg): _106.SingletonDescriptor;
                toAminoMsg(message: _106.SingletonDescriptor): _106.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _106.SingletonDescriptorProtoMsg): _106.SingletonDescriptor;
                toProto(message: _106.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _106.SingletonDescriptor): _106.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _107.StorageType;
            storageTypeToJSON(object: _107.StorageType): string;
            StorageType: typeof _107.StorageType;
            StorageTypeSDKType: typeof _107.StorageType;
            StorageTypeAmino: typeof _107.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _107.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_107.ModuleSchemaDescriptor>): _107.ModuleSchemaDescriptor;
                fromAmino(object: _107.ModuleSchemaDescriptorAmino): _107.ModuleSchemaDescriptor;
                toAmino(message: _107.ModuleSchemaDescriptor): _107.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _107.ModuleSchemaDescriptorAminoMsg): _107.ModuleSchemaDescriptor;
                toAminoMsg(message: _107.ModuleSchemaDescriptor): _107.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _107.ModuleSchemaDescriptorProtoMsg): _107.ModuleSchemaDescriptor;
                toProto(message: _107.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _107.ModuleSchemaDescriptor): _107.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _107.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_107.ModuleSchemaDescriptor_FileEntry>): _107.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _107.ModuleSchemaDescriptor_FileEntryAmino): _107.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _107.ModuleSchemaDescriptor_FileEntry): _107.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _107.ModuleSchemaDescriptor_FileEntryAminoMsg): _107.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _107.ModuleSchemaDescriptor_FileEntry): _107.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _107.ModuleSchemaDescriptor_FileEntryProtoMsg): _107.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _107.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _107.ModuleSchemaDescriptor_FileEntry): _107.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
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
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                subspaces(request?: _110.QuerySubspacesRequest): Promise<_110.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _212.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _110.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryParamsRequest;
                fromPartial(object: Partial<_110.QueryParamsRequest>): _110.QueryParamsRequest;
                fromAmino(object: _110.QueryParamsRequestAmino): _110.QueryParamsRequest;
                toAmino(message: _110.QueryParamsRequest): _110.QueryParamsRequestAmino;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _110.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.QuerySubspacesRequest;
                fromPartial(_: Partial<_110.QuerySubspacesRequest>): _110.QuerySubspacesRequest;
                fromAmino(_: _110.QuerySubspacesRequestAmino): _110.QuerySubspacesRequest;
                toAmino(_: _110.QuerySubspacesRequest): _110.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _110.QuerySubspacesRequestAminoMsg): _110.QuerySubspacesRequest;
                toAminoMsg(message: _110.QuerySubspacesRequest): _110.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _110.QuerySubspacesRequestProtoMsg): _110.QuerySubspacesRequest;
                toProto(message: _110.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _110.QuerySubspacesRequest): _110.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _110.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QuerySubspacesResponse;
                fromPartial(object: Partial<_110.QuerySubspacesResponse>): _110.QuerySubspacesResponse;
                fromAmino(object: _110.QuerySubspacesResponseAmino): _110.QuerySubspacesResponse;
                toAmino(message: _110.QuerySubspacesResponse): _110.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _110.QuerySubspacesResponseAminoMsg): _110.QuerySubspacesResponse;
                toAminoMsg(message: _110.QuerySubspacesResponse): _110.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _110.QuerySubspacesResponseProtoMsg): _110.QuerySubspacesResponse;
                toProto(message: _110.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _110.QuerySubspacesResponse): _110.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _110.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.Subspace;
                fromPartial(object: Partial<_110.Subspace>): _110.Subspace;
                fromAmino(object: _110.SubspaceAmino): _110.Subspace;
                toAmino(message: _110.Subspace): _110.SubspaceAmino;
                fromAminoMsg(object: _110.SubspaceAminoMsg): _110.Subspace;
                toAminoMsg(message: _110.Subspace): _110.SubspaceAminoMsg;
                fromProtoMsg(message: _110.SubspaceProtoMsg): _110.Subspace;
                toProto(message: _110.Subspace): Uint8Array;
                toProtoMsg(message: _110.Subspace): _110.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _109.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ParameterChangeProposal;
                fromPartial(object: Partial<_109.ParameterChangeProposal>): _109.ParameterChangeProposal;
                fromAmino(object: _109.ParameterChangeProposalAmino): _109.ParameterChangeProposal;
                toAmino(message: _109.ParameterChangeProposal): _109.ParameterChangeProposalAmino;
                fromAminoMsg(object: _109.ParameterChangeProposalAminoMsg): _109.ParameterChangeProposal;
                toAminoMsg(message: _109.ParameterChangeProposal): _109.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _109.ParameterChangeProposalProtoMsg): _109.ParameterChangeProposal;
                toProto(message: _109.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _109.ParameterChangeProposal): _109.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _109.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.ParamChange;
                fromPartial(object: Partial<_109.ParamChange>): _109.ParamChange;
                fromAmino(object: _109.ParamChangeAmino): _109.ParamChange;
                toAmino(message: _109.ParamChange): _109.ParamChangeAmino;
                fromAminoMsg(object: _109.ParamChangeAminoMsg): _109.ParamChange;
                toAminoMsg(message: _109.ParamChange): _109.ParamChangeAminoMsg;
                fromProtoMsg(message: _109.ParamChangeProtoMsg): _109.ParamChange;
                toProto(message: _109.ParamChange): Uint8Array;
                toProtoMsg(message: _109.ParamChange): _109.ParamChangeProtoMsg;
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
                encode(_: _112.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.FileDescriptorsRequest;
                fromPartial(_: Partial<_112.FileDescriptorsRequest>): _112.FileDescriptorsRequest;
                fromAmino(_: _112.FileDescriptorsRequestAmino): _112.FileDescriptorsRequest;
                toAmino(_: _112.FileDescriptorsRequest): _112.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _112.FileDescriptorsRequestAminoMsg): _112.FileDescriptorsRequest;
                toAminoMsg(message: _112.FileDescriptorsRequest): _112.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _112.FileDescriptorsRequestProtoMsg): _112.FileDescriptorsRequest;
                toProto(message: _112.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _112.FileDescriptorsRequest): _112.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _112.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.FileDescriptorsResponse;
                fromPartial(object: Partial<_112.FileDescriptorsResponse>): _112.FileDescriptorsResponse;
                fromAmino(object: _112.FileDescriptorsResponseAmino): _112.FileDescriptorsResponse;
                toAmino(message: _112.FileDescriptorsResponse): _112.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _112.FileDescriptorsResponseAminoMsg): _112.FileDescriptorsResponse;
                toAminoMsg(message: _112.FileDescriptorsResponse): _112.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _112.FileDescriptorsResponseProtoMsg): _112.FileDescriptorsResponse;
                toProto(message: _112.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _112.FileDescriptorsResponse): _112.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
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
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                signingInfo(request: _115.QuerySigningInfoRequest): Promise<_115.QuerySigningInfoResponse>;
                signingInfos(request?: _115.QuerySigningInfosRequest): Promise<_115.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _117.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _117.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _117.MsgUnjail): {
                        typeUrl: string;
                        value: _117.MsgUnjail;
                    };
                    updateParams(value: _117.MsgUpdateParams): {
                        typeUrl: string;
                        value: _117.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _117.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _117.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _117.MsgUnjail): {
                        typeUrl: string;
                        value: _117.MsgUnjail;
                    };
                    updateParams(value: _117.MsgUpdateParams): {
                        typeUrl: string;
                        value: _117.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _117.MsgUnjail) => _117.MsgUnjailAmino;
                    fromAmino: (object: _117.MsgUnjailAmino) => _117.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _117.MsgUpdateParams) => _117.MsgUpdateParamsAmino;
                    fromAmino: (object: _117.MsgUpdateParamsAmino) => _117.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _117.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgUnjail;
                fromPartial(object: Partial<_117.MsgUnjail>): _117.MsgUnjail;
                fromAmino(object: _117.MsgUnjailAmino): _117.MsgUnjail;
                toAmino(message: _117.MsgUnjail): _117.MsgUnjailAmino;
                fromAminoMsg(object: _117.MsgUnjailAminoMsg): _117.MsgUnjail;
                toAminoMsg(message: _117.MsgUnjail): _117.MsgUnjailAminoMsg;
                fromProtoMsg(message: _117.MsgUnjailProtoMsg): _117.MsgUnjail;
                toProto(message: _117.MsgUnjail): Uint8Array;
                toProtoMsg(message: _117.MsgUnjail): _117.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _117.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgUnjailResponse;
                fromPartial(_: Partial<_117.MsgUnjailResponse>): _117.MsgUnjailResponse;
                fromAmino(_: _117.MsgUnjailResponseAmino): _117.MsgUnjailResponse;
                toAmino(_: _117.MsgUnjailResponse): _117.MsgUnjailResponseAmino;
                fromAminoMsg(object: _117.MsgUnjailResponseAminoMsg): _117.MsgUnjailResponse;
                toAminoMsg(message: _117.MsgUnjailResponse): _117.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _117.MsgUnjailResponseProtoMsg): _117.MsgUnjailResponse;
                toProto(message: _117.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _117.MsgUnjailResponse): _117.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _117.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgUpdateParams;
                fromPartial(object: Partial<_117.MsgUpdateParams>): _117.MsgUpdateParams;
                fromAmino(object: _117.MsgUpdateParamsAmino): _117.MsgUpdateParams;
                toAmino(message: _117.MsgUpdateParams): _117.MsgUpdateParamsAmino;
                fromAminoMsg(object: _117.MsgUpdateParamsAminoMsg): _117.MsgUpdateParams;
                toAminoMsg(message: _117.MsgUpdateParams): _117.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _117.MsgUpdateParamsProtoMsg): _117.MsgUpdateParams;
                toProto(message: _117.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _117.MsgUpdateParams): _117.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _117.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _117.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_117.MsgUpdateParamsResponse>): _117.MsgUpdateParamsResponse;
                fromAmino(_: _117.MsgUpdateParamsResponseAmino): _117.MsgUpdateParamsResponse;
                toAmino(_: _117.MsgUpdateParamsResponse): _117.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _117.MsgUpdateParamsResponseAminoMsg): _117.MsgUpdateParamsResponse;
                toAminoMsg(message: _117.MsgUpdateParamsResponse): _117.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _117.MsgUpdateParamsResponseProtoMsg): _117.MsgUpdateParamsResponse;
                toProto(message: _117.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _117.MsgUpdateParamsResponse): _117.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _116.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.ValidatorSigningInfo;
                fromPartial(object: Partial<_116.ValidatorSigningInfo>): _116.ValidatorSigningInfo;
                fromAmino(object: _116.ValidatorSigningInfoAmino): _116.ValidatorSigningInfo;
                toAmino(message: _116.ValidatorSigningInfo): _116.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _116.ValidatorSigningInfoAminoMsg): _116.ValidatorSigningInfo;
                toAminoMsg(message: _116.ValidatorSigningInfo): _116.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _116.ValidatorSigningInfoProtoMsg): _116.ValidatorSigningInfo;
                toProto(message: _116.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _116.ValidatorSigningInfo): _116.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _116.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Params;
                fromPartial(object: Partial<_116.Params>): _116.Params;
                fromAmino(object: _116.ParamsAmino): _116.Params;
                toAmino(message: _116.Params): _116.ParamsAmino;
                fromAminoMsg(object: _116.ParamsAminoMsg): _116.Params;
                toAminoMsg(message: _116.Params): _116.ParamsAminoMsg;
                fromProtoMsg(message: _116.ParamsProtoMsg): _116.Params;
                toProto(message: _116.Params): Uint8Array;
                toProtoMsg(message: _116.Params): _116.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _115.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.QueryParamsRequest;
                fromPartial(_: Partial<_115.QueryParamsRequest>): _115.QueryParamsRequest;
                fromAmino(_: _115.QueryParamsRequestAmino): _115.QueryParamsRequest;
                toAmino(_: _115.QueryParamsRequest): _115.QueryParamsRequestAmino;
                fromAminoMsg(object: _115.QueryParamsRequestAminoMsg): _115.QueryParamsRequest;
                toAminoMsg(message: _115.QueryParamsRequest): _115.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _115.QueryParamsRequestProtoMsg): _115.QueryParamsRequest;
                toProto(message: _115.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _115.QueryParamsRequest): _115.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _115.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryParamsResponse;
                fromPartial(object: Partial<_115.QueryParamsResponse>): _115.QueryParamsResponse;
                fromAmino(object: _115.QueryParamsResponseAmino): _115.QueryParamsResponse;
                toAmino(message: _115.QueryParamsResponse): _115.QueryParamsResponseAmino;
                fromAminoMsg(object: _115.QueryParamsResponseAminoMsg): _115.QueryParamsResponse;
                toAminoMsg(message: _115.QueryParamsResponse): _115.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _115.QueryParamsResponseProtoMsg): _115.QueryParamsResponse;
                toProto(message: _115.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _115.QueryParamsResponse): _115.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _115.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QuerySigningInfoRequest;
                fromPartial(object: Partial<_115.QuerySigningInfoRequest>): _115.QuerySigningInfoRequest;
                fromAmino(object: _115.QuerySigningInfoRequestAmino): _115.QuerySigningInfoRequest;
                toAmino(message: _115.QuerySigningInfoRequest): _115.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _115.QuerySigningInfoRequestAminoMsg): _115.QuerySigningInfoRequest;
                toAminoMsg(message: _115.QuerySigningInfoRequest): _115.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _115.QuerySigningInfoRequestProtoMsg): _115.QuerySigningInfoRequest;
                toProto(message: _115.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _115.QuerySigningInfoRequest): _115.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _115.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QuerySigningInfoResponse;
                fromPartial(object: Partial<_115.QuerySigningInfoResponse>): _115.QuerySigningInfoResponse;
                fromAmino(object: _115.QuerySigningInfoResponseAmino): _115.QuerySigningInfoResponse;
                toAmino(message: _115.QuerySigningInfoResponse): _115.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _115.QuerySigningInfoResponseAminoMsg): _115.QuerySigningInfoResponse;
                toAminoMsg(message: _115.QuerySigningInfoResponse): _115.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _115.QuerySigningInfoResponseProtoMsg): _115.QuerySigningInfoResponse;
                toProto(message: _115.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _115.QuerySigningInfoResponse): _115.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _115.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QuerySigningInfosRequest;
                fromPartial(object: Partial<_115.QuerySigningInfosRequest>): _115.QuerySigningInfosRequest;
                fromAmino(object: _115.QuerySigningInfosRequestAmino): _115.QuerySigningInfosRequest;
                toAmino(message: _115.QuerySigningInfosRequest): _115.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _115.QuerySigningInfosRequestAminoMsg): _115.QuerySigningInfosRequest;
                toAminoMsg(message: _115.QuerySigningInfosRequest): _115.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _115.QuerySigningInfosRequestProtoMsg): _115.QuerySigningInfosRequest;
                toProto(message: _115.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _115.QuerySigningInfosRequest): _115.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _115.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QuerySigningInfosResponse;
                fromPartial(object: Partial<_115.QuerySigningInfosResponse>): _115.QuerySigningInfosResponse;
                fromAmino(object: _115.QuerySigningInfosResponseAmino): _115.QuerySigningInfosResponse;
                toAmino(message: _115.QuerySigningInfosResponse): _115.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _115.QuerySigningInfosResponseAminoMsg): _115.QuerySigningInfosResponse;
                toAminoMsg(message: _115.QuerySigningInfosResponse): _115.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _115.QuerySigningInfosResponseProtoMsg): _115.QuerySigningInfosResponse;
                toProto(message: _115.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _115.QuerySigningInfosResponse): _115.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _114.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.GenesisState;
                fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                fromAmino(object: _114.GenesisStateAmino): _114.GenesisState;
                toAmino(message: _114.GenesisState): _114.GenesisStateAmino;
                fromAminoMsg(object: _114.GenesisStateAminoMsg): _114.GenesisState;
                toAminoMsg(message: _114.GenesisState): _114.GenesisStateAminoMsg;
                fromProtoMsg(message: _114.GenesisStateProtoMsg): _114.GenesisState;
                toProto(message: _114.GenesisState): Uint8Array;
                toProtoMsg(message: _114.GenesisState): _114.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _114.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.SigningInfo;
                fromPartial(object: Partial<_114.SigningInfo>): _114.SigningInfo;
                fromAmino(object: _114.SigningInfoAmino): _114.SigningInfo;
                toAmino(message: _114.SigningInfo): _114.SigningInfoAmino;
                fromAminoMsg(object: _114.SigningInfoAminoMsg): _114.SigningInfo;
                toAminoMsg(message: _114.SigningInfo): _114.SigningInfoAminoMsg;
                fromProtoMsg(message: _114.SigningInfoProtoMsg): _114.SigningInfo;
                toProto(message: _114.SigningInfo): Uint8Array;
                toProtoMsg(message: _114.SigningInfo): _114.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _114.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.ValidatorMissedBlocks;
                fromPartial(object: Partial<_114.ValidatorMissedBlocks>): _114.ValidatorMissedBlocks;
                fromAmino(object: _114.ValidatorMissedBlocksAmino): _114.ValidatorMissedBlocks;
                toAmino(message: _114.ValidatorMissedBlocks): _114.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _114.ValidatorMissedBlocksAminoMsg): _114.ValidatorMissedBlocks;
                toAminoMsg(message: _114.ValidatorMissedBlocks): _114.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _114.ValidatorMissedBlocksProtoMsg): _114.ValidatorMissedBlocks;
                toProto(message: _114.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _114.ValidatorMissedBlocks): _114.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _114.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MissedBlock;
                fromPartial(object: Partial<_114.MissedBlock>): _114.MissedBlock;
                fromAmino(object: _114.MissedBlockAmino): _114.MissedBlock;
                toAmino(message: _114.MissedBlock): _114.MissedBlockAmino;
                fromAminoMsg(object: _114.MissedBlockAminoMsg): _114.MissedBlock;
                toAminoMsg(message: _114.MissedBlock): _114.MissedBlockAminoMsg;
                fromProtoMsg(message: _114.MissedBlockProtoMsg): _114.MissedBlock;
                toProto(message: _114.MissedBlock): Uint8Array;
                toProtoMsg(message: _114.MissedBlock): _114.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _118.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.Module;
                    fromPartial(object: Partial<_118.Module>): _118.Module;
                    fromAmino(object: _118.ModuleAmino): _118.Module;
                    toAmino(message: _118.Module): _118.ModuleAmino;
                    fromAminoMsg(object: _118.ModuleAminoMsg): _118.Module;
                    toAminoMsg(message: _118.Module): _118.ModuleAminoMsg;
                    fromProtoMsg(message: _118.ModuleProtoMsg): _118.Module;
                    toProto(message: _118.Module): Uint8Array;
                    toProtoMsg(message: _118.Module): _118.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _121.QueryValidatorsRequest): Promise<_121.QueryValidatorsResponse>;
                validator(request: _121.QueryValidatorRequest): Promise<_121.QueryValidatorResponse>;
                validatorDelegations(request: _121.QueryValidatorDelegationsRequest): Promise<_121.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _121.QueryValidatorUnbondingDelegationsRequest): Promise<_121.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _121.QueryDelegationRequest): Promise<_121.QueryDelegationResponse>;
                unbondingDelegation(request: _121.QueryUnbondingDelegationRequest): Promise<_121.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _121.QueryDelegatorDelegationsRequest): Promise<_121.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _121.QueryDelegatorUnbondingDelegationsRequest): Promise<_121.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _121.QueryRedelegationsRequest): Promise<_121.QueryRedelegationsResponse>;
                delegatorValidators(request: _121.QueryDelegatorValidatorsRequest): Promise<_121.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _121.QueryDelegatorValidatorRequest): Promise<_121.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _121.QueryHistoricalInfoRequest): Promise<_121.QueryHistoricalInfoResponse>;
                pool(request?: _121.QueryPoolRequest): Promise<_121.QueryPoolResponse>;
                params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _123.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _123.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _123.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _123.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _123.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _123.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _123.MsgCreateValidator): {
                        typeUrl: string;
                        value: _123.MsgCreateValidator;
                    };
                    editValidator(value: _123.MsgEditValidator): {
                        typeUrl: string;
                        value: _123.MsgEditValidator;
                    };
                    delegate(value: _123.MsgDelegate): {
                        typeUrl: string;
                        value: _123.MsgDelegate;
                    };
                    beginRedelegate(value: _123.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _123.MsgBeginRedelegate;
                    };
                    undelegate(value: _123.MsgUndelegate): {
                        typeUrl: string;
                        value: _123.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _123.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _123.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _123.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _123.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _123.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _123.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _123.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _123.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _123.MsgCreateValidator): {
                        typeUrl: string;
                        value: _123.MsgCreateValidator;
                    };
                    editValidator(value: _123.MsgEditValidator): {
                        typeUrl: string;
                        value: _123.MsgEditValidator;
                    };
                    delegate(value: _123.MsgDelegate): {
                        typeUrl: string;
                        value: _123.MsgDelegate;
                    };
                    beginRedelegate(value: _123.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _123.MsgBeginRedelegate;
                    };
                    undelegate(value: _123.MsgUndelegate): {
                        typeUrl: string;
                        value: _123.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _123.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _123.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCreateValidator) => _123.MsgCreateValidatorAmino;
                    fromAmino: (object: _123.MsgCreateValidatorAmino) => _123.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _123.MsgEditValidator) => _123.MsgEditValidatorAmino;
                    fromAmino: (object: _123.MsgEditValidatorAmino) => _123.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _123.MsgDelegate) => _123.MsgDelegateAmino;
                    fromAmino: (object: _123.MsgDelegateAmino) => _123.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _123.MsgBeginRedelegate) => _123.MsgBeginRedelegateAmino;
                    fromAmino: (object: _123.MsgBeginRedelegateAmino) => _123.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUndelegate) => _123.MsgUndelegateAmino;
                    fromAmino: (object: _123.MsgUndelegateAmino) => _123.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCancelUnbondingDelegation) => _123.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _123.MsgCancelUnbondingDelegationAmino) => _123.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateParams) => _123.MsgUpdateParamsAmino;
                    fromAmino: (object: _123.MsgUpdateParamsAmino) => _123.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _123.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgCreateValidator;
                fromPartial(object: Partial<_123.MsgCreateValidator>): _123.MsgCreateValidator;
                fromAmino(object: _123.MsgCreateValidatorAmino): _123.MsgCreateValidator;
                toAmino(message: _123.MsgCreateValidator): _123.MsgCreateValidatorAmino;
                fromAminoMsg(object: _123.MsgCreateValidatorAminoMsg): _123.MsgCreateValidator;
                toAminoMsg(message: _123.MsgCreateValidator): _123.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _123.MsgCreateValidatorProtoMsg): _123.MsgCreateValidator;
                toProto(message: _123.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _123.MsgCreateValidator): _123.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _123.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_123.MsgCreateValidatorResponse>): _123.MsgCreateValidatorResponse;
                fromAmino(_: _123.MsgCreateValidatorResponseAmino): _123.MsgCreateValidatorResponse;
                toAmino(_: _123.MsgCreateValidatorResponse): _123.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _123.MsgCreateValidatorResponseAminoMsg): _123.MsgCreateValidatorResponse;
                toAminoMsg(message: _123.MsgCreateValidatorResponse): _123.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _123.MsgCreateValidatorResponseProtoMsg): _123.MsgCreateValidatorResponse;
                toProto(message: _123.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCreateValidatorResponse): _123.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _123.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgEditValidator;
                fromPartial(object: Partial<_123.MsgEditValidator>): _123.MsgEditValidator;
                fromAmino(object: _123.MsgEditValidatorAmino): _123.MsgEditValidator;
                toAmino(message: _123.MsgEditValidator): _123.MsgEditValidatorAmino;
                fromAminoMsg(object: _123.MsgEditValidatorAminoMsg): _123.MsgEditValidator;
                toAminoMsg(message: _123.MsgEditValidator): _123.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _123.MsgEditValidatorProtoMsg): _123.MsgEditValidator;
                toProto(message: _123.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _123.MsgEditValidator): _123.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _123.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgEditValidatorResponse;
                fromPartial(_: Partial<_123.MsgEditValidatorResponse>): _123.MsgEditValidatorResponse;
                fromAmino(_: _123.MsgEditValidatorResponseAmino): _123.MsgEditValidatorResponse;
                toAmino(_: _123.MsgEditValidatorResponse): _123.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _123.MsgEditValidatorResponseAminoMsg): _123.MsgEditValidatorResponse;
                toAminoMsg(message: _123.MsgEditValidatorResponse): _123.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _123.MsgEditValidatorResponseProtoMsg): _123.MsgEditValidatorResponse;
                toProto(message: _123.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _123.MsgEditValidatorResponse): _123.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _123.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgDelegate;
                fromPartial(object: Partial<_123.MsgDelegate>): _123.MsgDelegate;
                fromAmino(object: _123.MsgDelegateAmino): _123.MsgDelegate;
                toAmino(message: _123.MsgDelegate): _123.MsgDelegateAmino;
                fromAminoMsg(object: _123.MsgDelegateAminoMsg): _123.MsgDelegate;
                toAminoMsg(message: _123.MsgDelegate): _123.MsgDelegateAminoMsg;
                fromProtoMsg(message: _123.MsgDelegateProtoMsg): _123.MsgDelegate;
                toProto(message: _123.MsgDelegate): Uint8Array;
                toProtoMsg(message: _123.MsgDelegate): _123.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _123.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgDelegateResponse;
                fromPartial(_: Partial<_123.MsgDelegateResponse>): _123.MsgDelegateResponse;
                fromAmino(_: _123.MsgDelegateResponseAmino): _123.MsgDelegateResponse;
                toAmino(_: _123.MsgDelegateResponse): _123.MsgDelegateResponseAmino;
                fromAminoMsg(object: _123.MsgDelegateResponseAminoMsg): _123.MsgDelegateResponse;
                toAminoMsg(message: _123.MsgDelegateResponse): _123.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _123.MsgDelegateResponseProtoMsg): _123.MsgDelegateResponse;
                toProto(message: _123.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _123.MsgDelegateResponse): _123.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _123.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgBeginRedelegate;
                fromPartial(object: Partial<_123.MsgBeginRedelegate>): _123.MsgBeginRedelegate;
                fromAmino(object: _123.MsgBeginRedelegateAmino): _123.MsgBeginRedelegate;
                toAmino(message: _123.MsgBeginRedelegate): _123.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _123.MsgBeginRedelegateAminoMsg): _123.MsgBeginRedelegate;
                toAminoMsg(message: _123.MsgBeginRedelegate): _123.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _123.MsgBeginRedelegateProtoMsg): _123.MsgBeginRedelegate;
                toProto(message: _123.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _123.MsgBeginRedelegate): _123.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _123.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_123.MsgBeginRedelegateResponse>): _123.MsgBeginRedelegateResponse;
                fromAmino(object: _123.MsgBeginRedelegateResponseAmino): _123.MsgBeginRedelegateResponse;
                toAmino(message: _123.MsgBeginRedelegateResponse): _123.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _123.MsgBeginRedelegateResponseAminoMsg): _123.MsgBeginRedelegateResponse;
                toAminoMsg(message: _123.MsgBeginRedelegateResponse): _123.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _123.MsgBeginRedelegateResponseProtoMsg): _123.MsgBeginRedelegateResponse;
                toProto(message: _123.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _123.MsgBeginRedelegateResponse): _123.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _123.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgUndelegate;
                fromPartial(object: Partial<_123.MsgUndelegate>): _123.MsgUndelegate;
                fromAmino(object: _123.MsgUndelegateAmino): _123.MsgUndelegate;
                toAmino(message: _123.MsgUndelegate): _123.MsgUndelegateAmino;
                fromAminoMsg(object: _123.MsgUndelegateAminoMsg): _123.MsgUndelegate;
                toAminoMsg(message: _123.MsgUndelegate): _123.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _123.MsgUndelegateProtoMsg): _123.MsgUndelegate;
                toProto(message: _123.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _123.MsgUndelegate): _123.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _123.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgUndelegateResponse;
                fromPartial(object: Partial<_123.MsgUndelegateResponse>): _123.MsgUndelegateResponse;
                fromAmino(object: _123.MsgUndelegateResponseAmino): _123.MsgUndelegateResponse;
                toAmino(message: _123.MsgUndelegateResponse): _123.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _123.MsgUndelegateResponseAminoMsg): _123.MsgUndelegateResponse;
                toAminoMsg(message: _123.MsgUndelegateResponse): _123.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUndelegateResponseProtoMsg): _123.MsgUndelegateResponse;
                toProto(message: _123.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUndelegateResponse): _123.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _123.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_123.MsgCancelUnbondingDelegation>): _123.MsgCancelUnbondingDelegation;
                fromAmino(object: _123.MsgCancelUnbondingDelegationAmino): _123.MsgCancelUnbondingDelegation;
                toAmino(message: _123.MsgCancelUnbondingDelegation): _123.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _123.MsgCancelUnbondingDelegationAminoMsg): _123.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _123.MsgCancelUnbondingDelegation): _123.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _123.MsgCancelUnbondingDelegationProtoMsg): _123.MsgCancelUnbondingDelegation;
                toProto(message: _123.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _123.MsgCancelUnbondingDelegation): _123.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _123.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_123.MsgCancelUnbondingDelegationResponse>): _123.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _123.MsgCancelUnbondingDelegationResponseAmino): _123.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _123.MsgCancelUnbondingDelegationResponse): _123.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _123.MsgCancelUnbondingDelegationResponseAminoMsg): _123.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _123.MsgCancelUnbondingDelegationResponse): _123.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _123.MsgCancelUnbondingDelegationResponseProtoMsg): _123.MsgCancelUnbondingDelegationResponse;
                toProto(message: _123.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCancelUnbondingDelegationResponse): _123.MsgCancelUnbondingDelegationResponseProtoMsg;
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
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _122.BondStatus;
            bondStatusToJSON(object: _122.BondStatus): string;
            infractionFromJSON(object: any): _122.Infraction;
            infractionToJSON(object: _122.Infraction): string;
            BondStatus: typeof _122.BondStatus;
            BondStatusSDKType: typeof _122.BondStatus;
            BondStatusAmino: typeof _122.BondStatus;
            Infraction: typeof _122.Infraction;
            InfractionSDKType: typeof _122.Infraction;
            InfractionAmino: typeof _122.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _122.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.HistoricalInfo;
                fromPartial(object: Partial<_122.HistoricalInfo>): _122.HistoricalInfo;
                fromAmino(object: _122.HistoricalInfoAmino): _122.HistoricalInfo;
                toAmino(message: _122.HistoricalInfo): _122.HistoricalInfoAmino;
                fromAminoMsg(object: _122.HistoricalInfoAminoMsg): _122.HistoricalInfo;
                toAminoMsg(message: _122.HistoricalInfo): _122.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _122.HistoricalInfoProtoMsg): _122.HistoricalInfo;
                toProto(message: _122.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _122.HistoricalInfo): _122.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _122.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.CommissionRates;
                fromPartial(object: Partial<_122.CommissionRates>): _122.CommissionRates;
                fromAmino(object: _122.CommissionRatesAmino): _122.CommissionRates;
                toAmino(message: _122.CommissionRates): _122.CommissionRatesAmino;
                fromAminoMsg(object: _122.CommissionRatesAminoMsg): _122.CommissionRates;
                toAminoMsg(message: _122.CommissionRates): _122.CommissionRatesAminoMsg;
                fromProtoMsg(message: _122.CommissionRatesProtoMsg): _122.CommissionRates;
                toProto(message: _122.CommissionRates): Uint8Array;
                toProtoMsg(message: _122.CommissionRates): _122.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _122.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Commission;
                fromPartial(object: Partial<_122.Commission>): _122.Commission;
                fromAmino(object: _122.CommissionAmino): _122.Commission;
                toAmino(message: _122.Commission): _122.CommissionAmino;
                fromAminoMsg(object: _122.CommissionAminoMsg): _122.Commission;
                toAminoMsg(message: _122.Commission): _122.CommissionAminoMsg;
                fromProtoMsg(message: _122.CommissionProtoMsg): _122.Commission;
                toProto(message: _122.Commission): Uint8Array;
                toProtoMsg(message: _122.Commission): _122.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _122.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Description;
                fromPartial(object: Partial<_122.Description>): _122.Description;
                fromAmino(object: _122.DescriptionAmino): _122.Description;
                toAmino(message: _122.Description): _122.DescriptionAmino;
                fromAminoMsg(object: _122.DescriptionAminoMsg): _122.Description;
                toAminoMsg(message: _122.Description): _122.DescriptionAminoMsg;
                fromProtoMsg(message: _122.DescriptionProtoMsg): _122.Description;
                toProto(message: _122.Description): Uint8Array;
                toProtoMsg(message: _122.Description): _122.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _122.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Validator;
                fromPartial(object: Partial<_122.Validator>): _122.Validator;
                fromAmino(object: _122.ValidatorAmino): _122.Validator;
                toAmino(message: _122.Validator): _122.ValidatorAmino;
                fromAminoMsg(object: _122.ValidatorAminoMsg): _122.Validator;
                toAminoMsg(message: _122.Validator): _122.ValidatorAminoMsg;
                fromProtoMsg(message: _122.ValidatorProtoMsg): _122.Validator;
                toProto(message: _122.Validator): Uint8Array;
                toProtoMsg(message: _122.Validator): _122.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _122.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ValAddresses;
                fromPartial(object: Partial<_122.ValAddresses>): _122.ValAddresses;
                fromAmino(object: _122.ValAddressesAmino): _122.ValAddresses;
                toAmino(message: _122.ValAddresses): _122.ValAddressesAmino;
                fromAminoMsg(object: _122.ValAddressesAminoMsg): _122.ValAddresses;
                toAminoMsg(message: _122.ValAddresses): _122.ValAddressesAminoMsg;
                fromProtoMsg(message: _122.ValAddressesProtoMsg): _122.ValAddresses;
                toProto(message: _122.ValAddresses): Uint8Array;
                toProtoMsg(message: _122.ValAddresses): _122.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _122.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DVPair;
                fromPartial(object: Partial<_122.DVPair>): _122.DVPair;
                fromAmino(object: _122.DVPairAmino): _122.DVPair;
                toAmino(message: _122.DVPair): _122.DVPairAmino;
                fromAminoMsg(object: _122.DVPairAminoMsg): _122.DVPair;
                toAminoMsg(message: _122.DVPair): _122.DVPairAminoMsg;
                fromProtoMsg(message: _122.DVPairProtoMsg): _122.DVPair;
                toProto(message: _122.DVPair): Uint8Array;
                toProtoMsg(message: _122.DVPair): _122.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _122.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DVPairs;
                fromPartial(object: Partial<_122.DVPairs>): _122.DVPairs;
                fromAmino(object: _122.DVPairsAmino): _122.DVPairs;
                toAmino(message: _122.DVPairs): _122.DVPairsAmino;
                fromAminoMsg(object: _122.DVPairsAminoMsg): _122.DVPairs;
                toAminoMsg(message: _122.DVPairs): _122.DVPairsAminoMsg;
                fromProtoMsg(message: _122.DVPairsProtoMsg): _122.DVPairs;
                toProto(message: _122.DVPairs): Uint8Array;
                toProtoMsg(message: _122.DVPairs): _122.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _122.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DVVTriplet;
                fromPartial(object: Partial<_122.DVVTriplet>): _122.DVVTriplet;
                fromAmino(object: _122.DVVTripletAmino): _122.DVVTriplet;
                toAmino(message: _122.DVVTriplet): _122.DVVTripletAmino;
                fromAminoMsg(object: _122.DVVTripletAminoMsg): _122.DVVTriplet;
                toAminoMsg(message: _122.DVVTriplet): _122.DVVTripletAminoMsg;
                fromProtoMsg(message: _122.DVVTripletProtoMsg): _122.DVVTriplet;
                toProto(message: _122.DVVTriplet): Uint8Array;
                toProtoMsg(message: _122.DVVTriplet): _122.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _122.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DVVTriplets;
                fromPartial(object: Partial<_122.DVVTriplets>): _122.DVVTriplets;
                fromAmino(object: _122.DVVTripletsAmino): _122.DVVTriplets;
                toAmino(message: _122.DVVTriplets): _122.DVVTripletsAmino;
                fromAminoMsg(object: _122.DVVTripletsAminoMsg): _122.DVVTriplets;
                toAminoMsg(message: _122.DVVTriplets): _122.DVVTripletsAminoMsg;
                fromProtoMsg(message: _122.DVVTripletsProtoMsg): _122.DVVTriplets;
                toProto(message: _122.DVVTriplets): Uint8Array;
                toProtoMsg(message: _122.DVVTriplets): _122.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _122.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Delegation;
                fromPartial(object: Partial<_122.Delegation>): _122.Delegation;
                fromAmino(object: _122.DelegationAmino): _122.Delegation;
                toAmino(message: _122.Delegation): _122.DelegationAmino;
                fromAminoMsg(object: _122.DelegationAminoMsg): _122.Delegation;
                toAminoMsg(message: _122.Delegation): _122.DelegationAminoMsg;
                fromProtoMsg(message: _122.DelegationProtoMsg): _122.Delegation;
                toProto(message: _122.Delegation): Uint8Array;
                toProtoMsg(message: _122.Delegation): _122.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _122.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.UnbondingDelegation;
                fromPartial(object: Partial<_122.UnbondingDelegation>): _122.UnbondingDelegation;
                fromAmino(object: _122.UnbondingDelegationAmino): _122.UnbondingDelegation;
                toAmino(message: _122.UnbondingDelegation): _122.UnbondingDelegationAmino;
                fromAminoMsg(object: _122.UnbondingDelegationAminoMsg): _122.UnbondingDelegation;
                toAminoMsg(message: _122.UnbondingDelegation): _122.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _122.UnbondingDelegationProtoMsg): _122.UnbondingDelegation;
                toProto(message: _122.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _122.UnbondingDelegation): _122.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _122.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.UnbondingDelegationEntry;
                fromPartial(object: Partial<_122.UnbondingDelegationEntry>): _122.UnbondingDelegationEntry;
                fromAmino(object: _122.UnbondingDelegationEntryAmino): _122.UnbondingDelegationEntry;
                toAmino(message: _122.UnbondingDelegationEntry): _122.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _122.UnbondingDelegationEntryAminoMsg): _122.UnbondingDelegationEntry;
                toAminoMsg(message: _122.UnbondingDelegationEntry): _122.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _122.UnbondingDelegationEntryProtoMsg): _122.UnbondingDelegationEntry;
                toProto(message: _122.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _122.UnbondingDelegationEntry): _122.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _122.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.RedelegationEntry;
                fromPartial(object: Partial<_122.RedelegationEntry>): _122.RedelegationEntry;
                fromAmino(object: _122.RedelegationEntryAmino): _122.RedelegationEntry;
                toAmino(message: _122.RedelegationEntry): _122.RedelegationEntryAmino;
                fromAminoMsg(object: _122.RedelegationEntryAminoMsg): _122.RedelegationEntry;
                toAminoMsg(message: _122.RedelegationEntry): _122.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _122.RedelegationEntryProtoMsg): _122.RedelegationEntry;
                toProto(message: _122.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _122.RedelegationEntry): _122.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _122.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Redelegation;
                fromPartial(object: Partial<_122.Redelegation>): _122.Redelegation;
                fromAmino(object: _122.RedelegationAmino): _122.Redelegation;
                toAmino(message: _122.Redelegation): _122.RedelegationAmino;
                fromAminoMsg(object: _122.RedelegationAminoMsg): _122.Redelegation;
                toAminoMsg(message: _122.Redelegation): _122.RedelegationAminoMsg;
                fromProtoMsg(message: _122.RedelegationProtoMsg): _122.Redelegation;
                toProto(message: _122.Redelegation): Uint8Array;
                toProtoMsg(message: _122.Redelegation): _122.RedelegationProtoMsg;
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
            DelegationResponse: {
                typeUrl: string;
                encode(message: _122.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.DelegationResponse;
                fromPartial(object: Partial<_122.DelegationResponse>): _122.DelegationResponse;
                fromAmino(object: _122.DelegationResponseAmino): _122.DelegationResponse;
                toAmino(message: _122.DelegationResponse): _122.DelegationResponseAmino;
                fromAminoMsg(object: _122.DelegationResponseAminoMsg): _122.DelegationResponse;
                toAminoMsg(message: _122.DelegationResponse): _122.DelegationResponseAminoMsg;
                fromProtoMsg(message: _122.DelegationResponseProtoMsg): _122.DelegationResponse;
                toProto(message: _122.DelegationResponse): Uint8Array;
                toProtoMsg(message: _122.DelegationResponse): _122.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _122.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.RedelegationEntryResponse;
                fromPartial(object: Partial<_122.RedelegationEntryResponse>): _122.RedelegationEntryResponse;
                fromAmino(object: _122.RedelegationEntryResponseAmino): _122.RedelegationEntryResponse;
                toAmino(message: _122.RedelegationEntryResponse): _122.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _122.RedelegationEntryResponseAminoMsg): _122.RedelegationEntryResponse;
                toAminoMsg(message: _122.RedelegationEntryResponse): _122.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _122.RedelegationEntryResponseProtoMsg): _122.RedelegationEntryResponse;
                toProto(message: _122.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _122.RedelegationEntryResponse): _122.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _122.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.RedelegationResponse;
                fromPartial(object: Partial<_122.RedelegationResponse>): _122.RedelegationResponse;
                fromAmino(object: _122.RedelegationResponseAmino): _122.RedelegationResponse;
                toAmino(message: _122.RedelegationResponse): _122.RedelegationResponseAmino;
                fromAminoMsg(object: _122.RedelegationResponseAminoMsg): _122.RedelegationResponse;
                toAminoMsg(message: _122.RedelegationResponse): _122.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _122.RedelegationResponseProtoMsg): _122.RedelegationResponse;
                toProto(message: _122.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _122.RedelegationResponse): _122.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _122.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Pool;
                fromPartial(object: Partial<_122.Pool>): _122.Pool;
                fromAmino(object: _122.PoolAmino): _122.Pool;
                toAmino(message: _122.Pool): _122.PoolAmino;
                fromAminoMsg(object: _122.PoolAminoMsg): _122.Pool;
                toAminoMsg(message: _122.Pool): _122.PoolAminoMsg;
                fromProtoMsg(message: _122.PoolProtoMsg): _122.Pool;
                toProto(message: _122.Pool): Uint8Array;
                toProtoMsg(message: _122.Pool): _122.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _122.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ValidatorUpdates;
                fromPartial(object: Partial<_122.ValidatorUpdates>): _122.ValidatorUpdates;
                fromAmino(object: _122.ValidatorUpdatesAmino): _122.ValidatorUpdates;
                toAmino(message: _122.ValidatorUpdates): _122.ValidatorUpdatesAmino;
                fromAminoMsg(object: _122.ValidatorUpdatesAminoMsg): _122.ValidatorUpdates;
                toAminoMsg(message: _122.ValidatorUpdates): _122.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _122.ValidatorUpdatesProtoMsg): _122.ValidatorUpdates;
                toProto(message: _122.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _122.ValidatorUpdates): _122.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _121.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorsRequest;
                fromPartial(object: Partial<_121.QueryValidatorsRequest>): _121.QueryValidatorsRequest;
                fromAmino(object: _121.QueryValidatorsRequestAmino): _121.QueryValidatorsRequest;
                toAmino(message: _121.QueryValidatorsRequest): _121.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _121.QueryValidatorsRequestAminoMsg): _121.QueryValidatorsRequest;
                toAminoMsg(message: _121.QueryValidatorsRequest): _121.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorsRequestProtoMsg): _121.QueryValidatorsRequest;
                toProto(message: _121.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorsRequest): _121.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _121.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorsResponse;
                fromPartial(object: Partial<_121.QueryValidatorsResponse>): _121.QueryValidatorsResponse;
                fromAmino(object: _121.QueryValidatorsResponseAmino): _121.QueryValidatorsResponse;
                toAmino(message: _121.QueryValidatorsResponse): _121.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _121.QueryValidatorsResponseAminoMsg): _121.QueryValidatorsResponse;
                toAminoMsg(message: _121.QueryValidatorsResponse): _121.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorsResponseProtoMsg): _121.QueryValidatorsResponse;
                toProto(message: _121.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorsResponse): _121.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _121.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorRequest;
                fromPartial(object: Partial<_121.QueryValidatorRequest>): _121.QueryValidatorRequest;
                fromAmino(object: _121.QueryValidatorRequestAmino): _121.QueryValidatorRequest;
                toAmino(message: _121.QueryValidatorRequest): _121.QueryValidatorRequestAmino;
                fromAminoMsg(object: _121.QueryValidatorRequestAminoMsg): _121.QueryValidatorRequest;
                toAminoMsg(message: _121.QueryValidatorRequest): _121.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorRequestProtoMsg): _121.QueryValidatorRequest;
                toProto(message: _121.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorRequest): _121.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _121.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorResponse;
                fromPartial(object: Partial<_121.QueryValidatorResponse>): _121.QueryValidatorResponse;
                fromAmino(object: _121.QueryValidatorResponseAmino): _121.QueryValidatorResponse;
                toAmino(message: _121.QueryValidatorResponse): _121.QueryValidatorResponseAmino;
                fromAminoMsg(object: _121.QueryValidatorResponseAminoMsg): _121.QueryValidatorResponse;
                toAminoMsg(message: _121.QueryValidatorResponse): _121.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorResponseProtoMsg): _121.QueryValidatorResponse;
                toProto(message: _121.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorResponse): _121.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _121.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_121.QueryValidatorDelegationsRequest>): _121.QueryValidatorDelegationsRequest;
                fromAmino(object: _121.QueryValidatorDelegationsRequestAmino): _121.QueryValidatorDelegationsRequest;
                toAmino(message: _121.QueryValidatorDelegationsRequest): _121.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _121.QueryValidatorDelegationsRequestAminoMsg): _121.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _121.QueryValidatorDelegationsRequest): _121.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorDelegationsRequestProtoMsg): _121.QueryValidatorDelegationsRequest;
                toProto(message: _121.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorDelegationsRequest): _121.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _121.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_121.QueryValidatorDelegationsResponse>): _121.QueryValidatorDelegationsResponse;
                fromAmino(object: _121.QueryValidatorDelegationsResponseAmino): _121.QueryValidatorDelegationsResponse;
                toAmino(message: _121.QueryValidatorDelegationsResponse): _121.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _121.QueryValidatorDelegationsResponseAminoMsg): _121.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _121.QueryValidatorDelegationsResponse): _121.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorDelegationsResponseProtoMsg): _121.QueryValidatorDelegationsResponse;
                toProto(message: _121.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorDelegationsResponse): _121.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _121.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_121.QueryValidatorUnbondingDelegationsRequest>): _121.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _121.QueryValidatorUnbondingDelegationsRequestAmino): _121.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _121.QueryValidatorUnbondingDelegationsRequest): _121.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _121.QueryValidatorUnbondingDelegationsRequestAminoMsg): _121.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _121.QueryValidatorUnbondingDelegationsRequest): _121.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorUnbondingDelegationsRequestProtoMsg): _121.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _121.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorUnbondingDelegationsRequest): _121.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _121.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_121.QueryValidatorUnbondingDelegationsResponse>): _121.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _121.QueryValidatorUnbondingDelegationsResponseAmino): _121.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _121.QueryValidatorUnbondingDelegationsResponse): _121.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _121.QueryValidatorUnbondingDelegationsResponseAminoMsg): _121.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _121.QueryValidatorUnbondingDelegationsResponse): _121.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryValidatorUnbondingDelegationsResponseProtoMsg): _121.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _121.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryValidatorUnbondingDelegationsResponse): _121.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegationRequest;
                fromPartial(object: Partial<_121.QueryDelegationRequest>): _121.QueryDelegationRequest;
                fromAmino(object: _121.QueryDelegationRequestAmino): _121.QueryDelegationRequest;
                toAmino(message: _121.QueryDelegationRequest): _121.QueryDelegationRequestAmino;
                fromAminoMsg(object: _121.QueryDelegationRequestAminoMsg): _121.QueryDelegationRequest;
                toAminoMsg(message: _121.QueryDelegationRequest): _121.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegationRequestProtoMsg): _121.QueryDelegationRequest;
                toProto(message: _121.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegationRequest): _121.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegationResponse;
                fromPartial(object: Partial<_121.QueryDelegationResponse>): _121.QueryDelegationResponse;
                fromAmino(object: _121.QueryDelegationResponseAmino): _121.QueryDelegationResponse;
                toAmino(message: _121.QueryDelegationResponse): _121.QueryDelegationResponseAmino;
                fromAminoMsg(object: _121.QueryDelegationResponseAminoMsg): _121.QueryDelegationResponse;
                toAminoMsg(message: _121.QueryDelegationResponse): _121.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegationResponseProtoMsg): _121.QueryDelegationResponse;
                toProto(message: _121.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegationResponse): _121.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _121.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_121.QueryUnbondingDelegationRequest>): _121.QueryUnbondingDelegationRequest;
                fromAmino(object: _121.QueryUnbondingDelegationRequestAmino): _121.QueryUnbondingDelegationRequest;
                toAmino(message: _121.QueryUnbondingDelegationRequest): _121.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _121.QueryUnbondingDelegationRequestAminoMsg): _121.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _121.QueryUnbondingDelegationRequest): _121.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _121.QueryUnbondingDelegationRequestProtoMsg): _121.QueryUnbondingDelegationRequest;
                toProto(message: _121.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _121.QueryUnbondingDelegationRequest): _121.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _121.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_121.QueryUnbondingDelegationResponse>): _121.QueryUnbondingDelegationResponse;
                fromAmino(object: _121.QueryUnbondingDelegationResponseAmino): _121.QueryUnbondingDelegationResponse;
                toAmino(message: _121.QueryUnbondingDelegationResponse): _121.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _121.QueryUnbondingDelegationResponseAminoMsg): _121.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _121.QueryUnbondingDelegationResponse): _121.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _121.QueryUnbondingDelegationResponseProtoMsg): _121.QueryUnbondingDelegationResponse;
                toProto(message: _121.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _121.QueryUnbondingDelegationResponse): _121.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_121.QueryDelegatorDelegationsRequest>): _121.QueryDelegatorDelegationsRequest;
                fromAmino(object: _121.QueryDelegatorDelegationsRequestAmino): _121.QueryDelegatorDelegationsRequest;
                toAmino(message: _121.QueryDelegatorDelegationsRequest): _121.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _121.QueryDelegatorDelegationsRequestAminoMsg): _121.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _121.QueryDelegatorDelegationsRequest): _121.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorDelegationsRequestProtoMsg): _121.QueryDelegatorDelegationsRequest;
                toProto(message: _121.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorDelegationsRequest): _121.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_121.QueryDelegatorDelegationsResponse>): _121.QueryDelegatorDelegationsResponse;
                fromAmino(object: _121.QueryDelegatorDelegationsResponseAmino): _121.QueryDelegatorDelegationsResponse;
                toAmino(message: _121.QueryDelegatorDelegationsResponse): _121.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _121.QueryDelegatorDelegationsResponseAminoMsg): _121.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _121.QueryDelegatorDelegationsResponse): _121.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorDelegationsResponseProtoMsg): _121.QueryDelegatorDelegationsResponse;
                toProto(message: _121.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorDelegationsResponse): _121.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_121.QueryDelegatorUnbondingDelegationsRequest>): _121.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _121.QueryDelegatorUnbondingDelegationsRequestAmino): _121.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _121.QueryDelegatorUnbondingDelegationsRequest): _121.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _121.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _121.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _121.QueryDelegatorUnbondingDelegationsRequest): _121.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _121.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _121.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorUnbondingDelegationsRequest): _121.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_121.QueryDelegatorUnbondingDelegationsResponse>): _121.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _121.QueryDelegatorUnbondingDelegationsResponseAmino): _121.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _121.QueryDelegatorUnbondingDelegationsResponse): _121.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _121.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _121.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _121.QueryDelegatorUnbondingDelegationsResponse): _121.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _121.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _121.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorUnbondingDelegationsResponse): _121.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _121.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryRedelegationsRequest;
                fromPartial(object: Partial<_121.QueryRedelegationsRequest>): _121.QueryRedelegationsRequest;
                fromAmino(object: _121.QueryRedelegationsRequestAmino): _121.QueryRedelegationsRequest;
                toAmino(message: _121.QueryRedelegationsRequest): _121.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _121.QueryRedelegationsRequestAminoMsg): _121.QueryRedelegationsRequest;
                toAminoMsg(message: _121.QueryRedelegationsRequest): _121.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryRedelegationsRequestProtoMsg): _121.QueryRedelegationsRequest;
                toProto(message: _121.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryRedelegationsRequest): _121.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _121.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryRedelegationsResponse;
                fromPartial(object: Partial<_121.QueryRedelegationsResponse>): _121.QueryRedelegationsResponse;
                fromAmino(object: _121.QueryRedelegationsResponseAmino): _121.QueryRedelegationsResponse;
                toAmino(message: _121.QueryRedelegationsResponse): _121.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _121.QueryRedelegationsResponseAminoMsg): _121.QueryRedelegationsResponse;
                toAminoMsg(message: _121.QueryRedelegationsResponse): _121.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryRedelegationsResponseProtoMsg): _121.QueryRedelegationsResponse;
                toProto(message: _121.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryRedelegationsResponse): _121.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_121.QueryDelegatorValidatorsRequest>): _121.QueryDelegatorValidatorsRequest;
                fromAmino(object: _121.QueryDelegatorValidatorsRequestAmino): _121.QueryDelegatorValidatorsRequest;
                toAmino(message: _121.QueryDelegatorValidatorsRequest): _121.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _121.QueryDelegatorValidatorsRequestAminoMsg): _121.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _121.QueryDelegatorValidatorsRequest): _121.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorValidatorsRequestProtoMsg): _121.QueryDelegatorValidatorsRequest;
                toProto(message: _121.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorValidatorsRequest): _121.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_121.QueryDelegatorValidatorsResponse>): _121.QueryDelegatorValidatorsResponse;
                fromAmino(object: _121.QueryDelegatorValidatorsResponseAmino): _121.QueryDelegatorValidatorsResponse;
                toAmino(message: _121.QueryDelegatorValidatorsResponse): _121.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _121.QueryDelegatorValidatorsResponseAminoMsg): _121.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _121.QueryDelegatorValidatorsResponse): _121.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorValidatorsResponseProtoMsg): _121.QueryDelegatorValidatorsResponse;
                toProto(message: _121.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorValidatorsResponse): _121.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_121.QueryDelegatorValidatorRequest>): _121.QueryDelegatorValidatorRequest;
                fromAmino(object: _121.QueryDelegatorValidatorRequestAmino): _121.QueryDelegatorValidatorRequest;
                toAmino(message: _121.QueryDelegatorValidatorRequest): _121.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _121.QueryDelegatorValidatorRequestAminoMsg): _121.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _121.QueryDelegatorValidatorRequest): _121.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorValidatorRequestProtoMsg): _121.QueryDelegatorValidatorRequest;
                toProto(message: _121.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorValidatorRequest): _121.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _121.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_121.QueryDelegatorValidatorResponse>): _121.QueryDelegatorValidatorResponse;
                fromAmino(object: _121.QueryDelegatorValidatorResponseAmino): _121.QueryDelegatorValidatorResponse;
                toAmino(message: _121.QueryDelegatorValidatorResponse): _121.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _121.QueryDelegatorValidatorResponseAminoMsg): _121.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _121.QueryDelegatorValidatorResponse): _121.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _121.QueryDelegatorValidatorResponseProtoMsg): _121.QueryDelegatorValidatorResponse;
                toProto(message: _121.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _121.QueryDelegatorValidatorResponse): _121.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _121.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_121.QueryHistoricalInfoRequest>): _121.QueryHistoricalInfoRequest;
                fromAmino(object: _121.QueryHistoricalInfoRequestAmino): _121.QueryHistoricalInfoRequest;
                toAmino(message: _121.QueryHistoricalInfoRequest): _121.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _121.QueryHistoricalInfoRequestAminoMsg): _121.QueryHistoricalInfoRequest;
                toAminoMsg(message: _121.QueryHistoricalInfoRequest): _121.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _121.QueryHistoricalInfoRequestProtoMsg): _121.QueryHistoricalInfoRequest;
                toProto(message: _121.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _121.QueryHistoricalInfoRequest): _121.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _121.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_121.QueryHistoricalInfoResponse>): _121.QueryHistoricalInfoResponse;
                fromAmino(object: _121.QueryHistoricalInfoResponseAmino): _121.QueryHistoricalInfoResponse;
                toAmino(message: _121.QueryHistoricalInfoResponse): _121.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _121.QueryHistoricalInfoResponseAminoMsg): _121.QueryHistoricalInfoResponse;
                toAminoMsg(message: _121.QueryHistoricalInfoResponse): _121.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _121.QueryHistoricalInfoResponseProtoMsg): _121.QueryHistoricalInfoResponse;
                toProto(message: _121.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _121.QueryHistoricalInfoResponse): _121.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _121.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.QueryPoolRequest;
                fromPartial(_: Partial<_121.QueryPoolRequest>): _121.QueryPoolRequest;
                fromAmino(_: _121.QueryPoolRequestAmino): _121.QueryPoolRequest;
                toAmino(_: _121.QueryPoolRequest): _121.QueryPoolRequestAmino;
                fromAminoMsg(object: _121.QueryPoolRequestAminoMsg): _121.QueryPoolRequest;
                toAminoMsg(message: _121.QueryPoolRequest): _121.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _121.QueryPoolRequestProtoMsg): _121.QueryPoolRequest;
                toProto(message: _121.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _121.QueryPoolRequest): _121.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _121.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryPoolResponse;
                fromPartial(object: Partial<_121.QueryPoolResponse>): _121.QueryPoolResponse;
                fromAmino(object: _121.QueryPoolResponseAmino): _121.QueryPoolResponse;
                toAmino(message: _121.QueryPoolResponse): _121.QueryPoolResponseAmino;
                fromAminoMsg(object: _121.QueryPoolResponseAminoMsg): _121.QueryPoolResponse;
                toAminoMsg(message: _121.QueryPoolResponse): _121.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _121.QueryPoolResponseProtoMsg): _121.QueryPoolResponse;
                toProto(message: _121.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _121.QueryPoolResponse): _121.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _121.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.QueryParamsRequest;
                fromPartial(_: Partial<_121.QueryParamsRequest>): _121.QueryParamsRequest;
                fromAmino(_: _121.QueryParamsRequestAmino): _121.QueryParamsRequest;
                toAmino(_: _121.QueryParamsRequest): _121.QueryParamsRequestAmino;
                fromAminoMsg(object: _121.QueryParamsRequestAminoMsg): _121.QueryParamsRequest;
                toAminoMsg(message: _121.QueryParamsRequest): _121.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _121.QueryParamsRequestProtoMsg): _121.QueryParamsRequest;
                toProto(message: _121.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _121.QueryParamsRequest): _121.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _121.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.QueryParamsResponse;
                fromPartial(object: Partial<_121.QueryParamsResponse>): _121.QueryParamsResponse;
                fromAmino(object: _121.QueryParamsResponseAmino): _121.QueryParamsResponse;
                toAmino(message: _121.QueryParamsResponse): _121.QueryParamsResponseAmino;
                fromAminoMsg(object: _121.QueryParamsResponseAminoMsg): _121.QueryParamsResponse;
                toAminoMsg(message: _121.QueryParamsResponse): _121.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _121.QueryParamsResponseProtoMsg): _121.QueryParamsResponse;
                toProto(message: _121.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _121.QueryParamsResponse): _121.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _120.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.GenesisState;
                fromPartial(object: Partial<_120.GenesisState>): _120.GenesisState;
                fromAmino(object: _120.GenesisStateAmino): _120.GenesisState;
                toAmino(message: _120.GenesisState): _120.GenesisStateAmino;
                fromAminoMsg(object: _120.GenesisStateAminoMsg): _120.GenesisState;
                toAminoMsg(message: _120.GenesisState): _120.GenesisStateAminoMsg;
                fromProtoMsg(message: _120.GenesisStateProtoMsg): _120.GenesisState;
                toProto(message: _120.GenesisState): Uint8Array;
                toProtoMsg(message: _120.GenesisState): _120.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _120.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.LastValidatorPower;
                fromPartial(object: Partial<_120.LastValidatorPower>): _120.LastValidatorPower;
                fromAmino(object: _120.LastValidatorPowerAmino): _120.LastValidatorPower;
                toAmino(message: _120.LastValidatorPower): _120.LastValidatorPowerAmino;
                fromAminoMsg(object: _120.LastValidatorPowerAminoMsg): _120.LastValidatorPower;
                toAminoMsg(message: _120.LastValidatorPower): _120.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _120.LastValidatorPowerProtoMsg): _120.LastValidatorPower;
                toProto(message: _120.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _120.LastValidatorPower): _120.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _119.AuthorizationType;
            authorizationTypeToJSON(object: _119.AuthorizationType): string;
            AuthorizationType: typeof _119.AuthorizationType;
            AuthorizationTypeSDKType: typeof _119.AuthorizationType;
            AuthorizationTypeAmino: typeof _119.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _119.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.StakeAuthorization;
                fromPartial(object: Partial<_119.StakeAuthorization>): _119.StakeAuthorization;
                fromAmino(object: _119.StakeAuthorizationAmino): _119.StakeAuthorization;
                toAmino(message: _119.StakeAuthorization): _119.StakeAuthorizationAmino;
                fromAminoMsg(object: _119.StakeAuthorizationAminoMsg): _119.StakeAuthorization;
                toAminoMsg(message: _119.StakeAuthorization): _119.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _119.StakeAuthorizationProtoMsg): _119.StakeAuthorization;
                toProto(message: _119.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _119.StakeAuthorization): _119.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _119.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.StakeAuthorization_Validators;
                fromPartial(object: Partial<_119.StakeAuthorization_Validators>): _119.StakeAuthorization_Validators;
                fromAmino(object: _119.StakeAuthorization_ValidatorsAmino): _119.StakeAuthorization_Validators;
                toAmino(message: _119.StakeAuthorization_Validators): _119.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _119.StakeAuthorization_ValidatorsAminoMsg): _119.StakeAuthorization_Validators;
                toAminoMsg(message: _119.StakeAuthorization_Validators): _119.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _119.StakeAuthorization_ValidatorsProtoMsg): _119.StakeAuthorization_Validators;
                toProto(message: _119.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _119.StakeAuthorization_Validators): _119.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _124.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.Config;
                    fromPartial(object: Partial<_124.Config>): _124.Config;
                    fromAmino(object: _124.ConfigAmino): _124.Config;
                    toAmino(message: _124.Config): _124.ConfigAmino;
                    fromAminoMsg(object: _124.ConfigAminoMsg): _124.Config;
                    toAminoMsg(message: _124.Config): _124.ConfigAminoMsg;
                    fromProtoMsg(message: _124.ConfigProtoMsg): _124.Config;
                    toProto(message: _124.Config): Uint8Array;
                    toProtoMsg(message: _124.Config): _124.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _125.SignMode;
                signModeToJSON(object: _125.SignMode): string;
                SignMode: typeof _125.SignMode;
                SignModeSDKType: typeof _125.SignMode;
                SignModeAmino: typeof _125.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptors;
                    fromPartial(object: Partial<_125.SignatureDescriptors>): _125.SignatureDescriptors;
                    fromAmino(object: _125.SignatureDescriptorsAmino): _125.SignatureDescriptors;
                    toAmino(message: _125.SignatureDescriptors): _125.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _125.SignatureDescriptorsAminoMsg): _125.SignatureDescriptors;
                    toAminoMsg(message: _125.SignatureDescriptors): _125.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptorsProtoMsg): _125.SignatureDescriptors;
                    toProto(message: _125.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptors): _125.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor;
                    fromPartial(object: Partial<_125.SignatureDescriptor>): _125.SignatureDescriptor;
                    fromAmino(object: _125.SignatureDescriptorAmino): _125.SignatureDescriptor;
                    toAmino(message: _125.SignatureDescriptor): _125.SignatureDescriptorAmino;
                    fromAminoMsg(object: _125.SignatureDescriptorAminoMsg): _125.SignatureDescriptor;
                    toAminoMsg(message: _125.SignatureDescriptor): _125.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptorProtoMsg): _125.SignatureDescriptor;
                    toProto(message: _125.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor): _125.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_125.SignatureDescriptor_Data>): _125.SignatureDescriptor_Data;
                    fromAmino(object: _125.SignatureDescriptor_DataAmino): _125.SignatureDescriptor_Data;
                    toAmino(message: _125.SignatureDescriptor_Data): _125.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _125.SignatureDescriptor_DataAminoMsg): _125.SignatureDescriptor_Data;
                    toAminoMsg(message: _125.SignatureDescriptor_Data): _125.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptor_DataProtoMsg): _125.SignatureDescriptor_Data;
                    toProto(message: _125.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor_Data): _125.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_125.SignatureDescriptor_Data_Single>): _125.SignatureDescriptor_Data_Single;
                    fromAmino(object: _125.SignatureDescriptor_Data_SingleAmino): _125.SignatureDescriptor_Data_Single;
                    toAmino(message: _125.SignatureDescriptor_Data_Single): _125.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _125.SignatureDescriptor_Data_SingleAminoMsg): _125.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _125.SignatureDescriptor_Data_Single): _125.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptor_Data_SingleProtoMsg): _125.SignatureDescriptor_Data_Single;
                    toProto(message: _125.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor_Data_Single): _125.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_125.SignatureDescriptor_Data_Multi>): _125.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _125.SignatureDescriptor_Data_MultiAmino): _125.SignatureDescriptor_Data_Multi;
                    toAmino(message: _125.SignatureDescriptor_Data_Multi): _125.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _125.SignatureDescriptor_Data_MultiAminoMsg): _125.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _125.SignatureDescriptor_Data_Multi): _125.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptor_Data_MultiProtoMsg): _125.SignatureDescriptor_Data_Multi;
                    toProto(message: _125.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor_Data_Multi): _125.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _237.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _126.SimulateRequest): Promise<_126.SimulateResponse>;
                getTx(request: _126.GetTxRequest): Promise<_126.GetTxResponse>;
                broadcastTx(request: _126.BroadcastTxRequest): Promise<_126.BroadcastTxResponse>;
                getTxsEvent(request: _126.GetTxsEventRequest): Promise<_126.GetTxsEventResponse>;
                getBlockWithTxs(request: _126.GetBlockWithTxsRequest): Promise<_126.GetBlockWithTxsResponse>;
                txDecode(request: _126.TxDecodeRequest): Promise<_126.TxDecodeResponse>;
                txEncode(request: _126.TxEncodeRequest): Promise<_126.TxEncodeResponse>;
                txEncodeAmino(request: _126.TxEncodeAminoRequest): Promise<_126.TxEncodeAminoResponse>;
                txDecodeAmino(request: _126.TxDecodeAminoRequest): Promise<_126.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _127.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Tx;
                fromPartial(object: Partial<_127.Tx>): _127.Tx;
                fromAmino(object: _127.TxAmino): _127.Tx;
                toAmino(message: _127.Tx): _127.TxAmino;
                fromAminoMsg(object: _127.TxAminoMsg): _127.Tx;
                toAminoMsg(message: _127.Tx): _127.TxAminoMsg;
                fromProtoMsg(message: _127.TxProtoMsg): _127.Tx;
                toProto(message: _127.Tx): Uint8Array;
                toProtoMsg(message: _127.Tx): _127.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _127.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.TxRaw;
                fromPartial(object: Partial<_127.TxRaw>): _127.TxRaw;
                fromAmino(object: _127.TxRawAmino): _127.TxRaw;
                toAmino(message: _127.TxRaw): _127.TxRawAmino;
                fromAminoMsg(object: _127.TxRawAminoMsg): _127.TxRaw;
                toAminoMsg(message: _127.TxRaw): _127.TxRawAminoMsg;
                fromProtoMsg(message: _127.TxRawProtoMsg): _127.TxRaw;
                toProto(message: _127.TxRaw): Uint8Array;
                toProtoMsg(message: _127.TxRaw): _127.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _127.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SignDoc;
                fromPartial(object: Partial<_127.SignDoc>): _127.SignDoc;
                fromAmino(object: _127.SignDocAmino): _127.SignDoc;
                toAmino(message: _127.SignDoc): _127.SignDocAmino;
                fromAminoMsg(object: _127.SignDocAminoMsg): _127.SignDoc;
                toAminoMsg(message: _127.SignDoc): _127.SignDocAminoMsg;
                fromProtoMsg(message: _127.SignDocProtoMsg): _127.SignDoc;
                toProto(message: _127.SignDoc): Uint8Array;
                toProtoMsg(message: _127.SignDoc): _127.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _127.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SignDocDirectAux;
                fromPartial(object: Partial<_127.SignDocDirectAux>): _127.SignDocDirectAux;
                fromAmino(object: _127.SignDocDirectAuxAmino): _127.SignDocDirectAux;
                toAmino(message: _127.SignDocDirectAux): _127.SignDocDirectAuxAmino;
                fromAminoMsg(object: _127.SignDocDirectAuxAminoMsg): _127.SignDocDirectAux;
                toAminoMsg(message: _127.SignDocDirectAux): _127.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _127.SignDocDirectAuxProtoMsg): _127.SignDocDirectAux;
                toProto(message: _127.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _127.SignDocDirectAux): _127.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _127.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.TxBody;
                fromPartial(object: Partial<_127.TxBody>): _127.TxBody;
                fromAmino(object: _127.TxBodyAmino): _127.TxBody;
                toAmino(message: _127.TxBody): _127.TxBodyAmino;
                fromAminoMsg(object: _127.TxBodyAminoMsg): _127.TxBody;
                toAminoMsg(message: _127.TxBody): _127.TxBodyAminoMsg;
                fromProtoMsg(message: _127.TxBodyProtoMsg): _127.TxBody;
                toProto(message: _127.TxBody): Uint8Array;
                toProtoMsg(message: _127.TxBody): _127.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _127.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.AuthInfo;
                fromPartial(object: Partial<_127.AuthInfo>): _127.AuthInfo;
                fromAmino(object: _127.AuthInfoAmino): _127.AuthInfo;
                toAmino(message: _127.AuthInfo): _127.AuthInfoAmino;
                fromAminoMsg(object: _127.AuthInfoAminoMsg): _127.AuthInfo;
                toAminoMsg(message: _127.AuthInfo): _127.AuthInfoAminoMsg;
                fromProtoMsg(message: _127.AuthInfoProtoMsg): _127.AuthInfo;
                toProto(message: _127.AuthInfo): Uint8Array;
                toProtoMsg(message: _127.AuthInfo): _127.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _127.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SignerInfo;
                fromPartial(object: Partial<_127.SignerInfo>): _127.SignerInfo;
                fromAmino(object: _127.SignerInfoAmino): _127.SignerInfo;
                toAmino(message: _127.SignerInfo): _127.SignerInfoAmino;
                fromAminoMsg(object: _127.SignerInfoAminoMsg): _127.SignerInfo;
                toAminoMsg(message: _127.SignerInfo): _127.SignerInfoAminoMsg;
                fromProtoMsg(message: _127.SignerInfoProtoMsg): _127.SignerInfo;
                toProto(message: _127.SignerInfo): Uint8Array;
                toProtoMsg(message: _127.SignerInfo): _127.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _127.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModeInfo;
                fromPartial(object: Partial<_127.ModeInfo>): _127.ModeInfo;
                fromAmino(object: _127.ModeInfoAmino): _127.ModeInfo;
                toAmino(message: _127.ModeInfo): _127.ModeInfoAmino;
                fromAminoMsg(object: _127.ModeInfoAminoMsg): _127.ModeInfo;
                toAminoMsg(message: _127.ModeInfo): _127.ModeInfoAminoMsg;
                fromProtoMsg(message: _127.ModeInfoProtoMsg): _127.ModeInfo;
                toProto(message: _127.ModeInfo): Uint8Array;
                toProtoMsg(message: _127.ModeInfo): _127.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _127.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModeInfo_Single;
                fromPartial(object: Partial<_127.ModeInfo_Single>): _127.ModeInfo_Single;
                fromAmino(object: _127.ModeInfo_SingleAmino): _127.ModeInfo_Single;
                toAmino(message: _127.ModeInfo_Single): _127.ModeInfo_SingleAmino;
                fromAminoMsg(object: _127.ModeInfo_SingleAminoMsg): _127.ModeInfo_Single;
                toAminoMsg(message: _127.ModeInfo_Single): _127.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _127.ModeInfo_SingleProtoMsg): _127.ModeInfo_Single;
                toProto(message: _127.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _127.ModeInfo_Single): _127.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _127.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModeInfo_Multi;
                fromPartial(object: Partial<_127.ModeInfo_Multi>): _127.ModeInfo_Multi;
                fromAmino(object: _127.ModeInfo_MultiAmino): _127.ModeInfo_Multi;
                toAmino(message: _127.ModeInfo_Multi): _127.ModeInfo_MultiAmino;
                fromAminoMsg(object: _127.ModeInfo_MultiAminoMsg): _127.ModeInfo_Multi;
                toAminoMsg(message: _127.ModeInfo_Multi): _127.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _127.ModeInfo_MultiProtoMsg): _127.ModeInfo_Multi;
                toProto(message: _127.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _127.ModeInfo_Multi): _127.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _127.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Fee;
                fromPartial(object: Partial<_127.Fee>): _127.Fee;
                fromAmino(object: _127.FeeAmino): _127.Fee;
                toAmino(message: _127.Fee): _127.FeeAmino;
                fromAminoMsg(object: _127.FeeAminoMsg): _127.Fee;
                toAminoMsg(message: _127.Fee): _127.FeeAminoMsg;
                fromProtoMsg(message: _127.FeeProtoMsg): _127.Fee;
                toProto(message: _127.Fee): Uint8Array;
                toProtoMsg(message: _127.Fee): _127.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _127.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Tip;
                fromPartial(object: Partial<_127.Tip>): _127.Tip;
                fromAmino(object: _127.TipAmino): _127.Tip;
                toAmino(message: _127.Tip): _127.TipAmino;
                fromAminoMsg(object: _127.TipAminoMsg): _127.Tip;
                toAminoMsg(message: _127.Tip): _127.TipAminoMsg;
                fromProtoMsg(message: _127.TipProtoMsg): _127.Tip;
                toProto(message: _127.Tip): Uint8Array;
                toProtoMsg(message: _127.Tip): _127.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _127.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.AuxSignerData;
                fromPartial(object: Partial<_127.AuxSignerData>): _127.AuxSignerData;
                fromAmino(object: _127.AuxSignerDataAmino): _127.AuxSignerData;
                toAmino(message: _127.AuxSignerData): _127.AuxSignerDataAmino;
                fromAminoMsg(object: _127.AuxSignerDataAminoMsg): _127.AuxSignerData;
                toAminoMsg(message: _127.AuxSignerData): _127.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _127.AuxSignerDataProtoMsg): _127.AuxSignerData;
                toProto(message: _127.AuxSignerData): Uint8Array;
                toProtoMsg(message: _127.AuxSignerData): _127.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _126.OrderBy;
            orderByToJSON(object: _126.OrderBy): string;
            broadcastModeFromJSON(object: any): _126.BroadcastMode;
            broadcastModeToJSON(object: _126.BroadcastMode): string;
            OrderBy: typeof _126.OrderBy;
            OrderBySDKType: typeof _126.OrderBy;
            OrderByAmino: typeof _126.OrderBy;
            BroadcastMode: typeof _126.BroadcastMode;
            BroadcastModeSDKType: typeof _126.BroadcastMode;
            BroadcastModeAmino: typeof _126.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _126.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxsEventRequest;
                fromPartial(object: Partial<_126.GetTxsEventRequest>): _126.GetTxsEventRequest;
                fromAmino(object: _126.GetTxsEventRequestAmino): _126.GetTxsEventRequest;
                toAmino(message: _126.GetTxsEventRequest): _126.GetTxsEventRequestAmino;
                fromAminoMsg(object: _126.GetTxsEventRequestAminoMsg): _126.GetTxsEventRequest;
                toAminoMsg(message: _126.GetTxsEventRequest): _126.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _126.GetTxsEventRequestProtoMsg): _126.GetTxsEventRequest;
                toProto(message: _126.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _126.GetTxsEventRequest): _126.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _126.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxsEventResponse;
                fromPartial(object: Partial<_126.GetTxsEventResponse>): _126.GetTxsEventResponse;
                fromAmino(object: _126.GetTxsEventResponseAmino): _126.GetTxsEventResponse;
                toAmino(message: _126.GetTxsEventResponse): _126.GetTxsEventResponseAmino;
                fromAminoMsg(object: _126.GetTxsEventResponseAminoMsg): _126.GetTxsEventResponse;
                toAminoMsg(message: _126.GetTxsEventResponse): _126.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _126.GetTxsEventResponseProtoMsg): _126.GetTxsEventResponse;
                toProto(message: _126.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _126.GetTxsEventResponse): _126.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _126.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.BroadcastTxRequest;
                fromPartial(object: Partial<_126.BroadcastTxRequest>): _126.BroadcastTxRequest;
                fromAmino(object: _126.BroadcastTxRequestAmino): _126.BroadcastTxRequest;
                toAmino(message: _126.BroadcastTxRequest): _126.BroadcastTxRequestAmino;
                fromAminoMsg(object: _126.BroadcastTxRequestAminoMsg): _126.BroadcastTxRequest;
                toAminoMsg(message: _126.BroadcastTxRequest): _126.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _126.BroadcastTxRequestProtoMsg): _126.BroadcastTxRequest;
                toProto(message: _126.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _126.BroadcastTxRequest): _126.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _126.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.BroadcastTxResponse;
                fromPartial(object: Partial<_126.BroadcastTxResponse>): _126.BroadcastTxResponse;
                fromAmino(object: _126.BroadcastTxResponseAmino): _126.BroadcastTxResponse;
                toAmino(message: _126.BroadcastTxResponse): _126.BroadcastTxResponseAmino;
                fromAminoMsg(object: _126.BroadcastTxResponseAminoMsg): _126.BroadcastTxResponse;
                toAminoMsg(message: _126.BroadcastTxResponse): _126.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _126.BroadcastTxResponseProtoMsg): _126.BroadcastTxResponse;
                toProto(message: _126.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _126.BroadcastTxResponse): _126.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _126.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SimulateRequest;
                fromPartial(object: Partial<_126.SimulateRequest>): _126.SimulateRequest;
                fromAmino(object: _126.SimulateRequestAmino): _126.SimulateRequest;
                toAmino(message: _126.SimulateRequest): _126.SimulateRequestAmino;
                fromAminoMsg(object: _126.SimulateRequestAminoMsg): _126.SimulateRequest;
                toAminoMsg(message: _126.SimulateRequest): _126.SimulateRequestAminoMsg;
                fromProtoMsg(message: _126.SimulateRequestProtoMsg): _126.SimulateRequest;
                toProto(message: _126.SimulateRequest): Uint8Array;
                toProtoMsg(message: _126.SimulateRequest): _126.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _126.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SimulateResponse;
                fromPartial(object: Partial<_126.SimulateResponse>): _126.SimulateResponse;
                fromAmino(object: _126.SimulateResponseAmino): _126.SimulateResponse;
                toAmino(message: _126.SimulateResponse): _126.SimulateResponseAmino;
                fromAminoMsg(object: _126.SimulateResponseAminoMsg): _126.SimulateResponse;
                toAminoMsg(message: _126.SimulateResponse): _126.SimulateResponseAminoMsg;
                fromProtoMsg(message: _126.SimulateResponseProtoMsg): _126.SimulateResponse;
                toProto(message: _126.SimulateResponse): Uint8Array;
                toProtoMsg(message: _126.SimulateResponse): _126.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _126.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxRequest;
                fromPartial(object: Partial<_126.GetTxRequest>): _126.GetTxRequest;
                fromAmino(object: _126.GetTxRequestAmino): _126.GetTxRequest;
                toAmino(message: _126.GetTxRequest): _126.GetTxRequestAmino;
                fromAminoMsg(object: _126.GetTxRequestAminoMsg): _126.GetTxRequest;
                toAminoMsg(message: _126.GetTxRequest): _126.GetTxRequestAminoMsg;
                fromProtoMsg(message: _126.GetTxRequestProtoMsg): _126.GetTxRequest;
                toProto(message: _126.GetTxRequest): Uint8Array;
                toProtoMsg(message: _126.GetTxRequest): _126.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _126.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxResponse;
                fromPartial(object: Partial<_126.GetTxResponse>): _126.GetTxResponse;
                fromAmino(object: _126.GetTxResponseAmino): _126.GetTxResponse;
                toAmino(message: _126.GetTxResponse): _126.GetTxResponseAmino;
                fromAminoMsg(object: _126.GetTxResponseAminoMsg): _126.GetTxResponse;
                toAminoMsg(message: _126.GetTxResponse): _126.GetTxResponseAminoMsg;
                fromProtoMsg(message: _126.GetTxResponseProtoMsg): _126.GetTxResponse;
                toProto(message: _126.GetTxResponse): Uint8Array;
                toProtoMsg(message: _126.GetTxResponse): _126.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _126.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_126.GetBlockWithTxsRequest>): _126.GetBlockWithTxsRequest;
                fromAmino(object: _126.GetBlockWithTxsRequestAmino): _126.GetBlockWithTxsRequest;
                toAmino(message: _126.GetBlockWithTxsRequest): _126.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _126.GetBlockWithTxsRequestAminoMsg): _126.GetBlockWithTxsRequest;
                toAminoMsg(message: _126.GetBlockWithTxsRequest): _126.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _126.GetBlockWithTxsRequestProtoMsg): _126.GetBlockWithTxsRequest;
                toProto(message: _126.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _126.GetBlockWithTxsRequest): _126.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _126.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_126.GetBlockWithTxsResponse>): _126.GetBlockWithTxsResponse;
                fromAmino(object: _126.GetBlockWithTxsResponseAmino): _126.GetBlockWithTxsResponse;
                toAmino(message: _126.GetBlockWithTxsResponse): _126.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _126.GetBlockWithTxsResponseAminoMsg): _126.GetBlockWithTxsResponse;
                toAminoMsg(message: _126.GetBlockWithTxsResponse): _126.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _126.GetBlockWithTxsResponseProtoMsg): _126.GetBlockWithTxsResponse;
                toProto(message: _126.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _126.GetBlockWithTxsResponse): _126.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _126.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxDecodeRequest;
                fromPartial(object: Partial<_126.TxDecodeRequest>): _126.TxDecodeRequest;
                fromAmino(object: _126.TxDecodeRequestAmino): _126.TxDecodeRequest;
                toAmino(message: _126.TxDecodeRequest): _126.TxDecodeRequestAmino;
                fromAminoMsg(object: _126.TxDecodeRequestAminoMsg): _126.TxDecodeRequest;
                toAminoMsg(message: _126.TxDecodeRequest): _126.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _126.TxDecodeRequestProtoMsg): _126.TxDecodeRequest;
                toProto(message: _126.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _126.TxDecodeRequest): _126.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _126.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxDecodeResponse;
                fromPartial(object: Partial<_126.TxDecodeResponse>): _126.TxDecodeResponse;
                fromAmino(object: _126.TxDecodeResponseAmino): _126.TxDecodeResponse;
                toAmino(message: _126.TxDecodeResponse): _126.TxDecodeResponseAmino;
                fromAminoMsg(object: _126.TxDecodeResponseAminoMsg): _126.TxDecodeResponse;
                toAminoMsg(message: _126.TxDecodeResponse): _126.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _126.TxDecodeResponseProtoMsg): _126.TxDecodeResponse;
                toProto(message: _126.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _126.TxDecodeResponse): _126.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _126.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxEncodeRequest;
                fromPartial(object: Partial<_126.TxEncodeRequest>): _126.TxEncodeRequest;
                fromAmino(object: _126.TxEncodeRequestAmino): _126.TxEncodeRequest;
                toAmino(message: _126.TxEncodeRequest): _126.TxEncodeRequestAmino;
                fromAminoMsg(object: _126.TxEncodeRequestAminoMsg): _126.TxEncodeRequest;
                toAminoMsg(message: _126.TxEncodeRequest): _126.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _126.TxEncodeRequestProtoMsg): _126.TxEncodeRequest;
                toProto(message: _126.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _126.TxEncodeRequest): _126.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _126.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxEncodeResponse;
                fromPartial(object: Partial<_126.TxEncodeResponse>): _126.TxEncodeResponse;
                fromAmino(object: _126.TxEncodeResponseAmino): _126.TxEncodeResponse;
                toAmino(message: _126.TxEncodeResponse): _126.TxEncodeResponseAmino;
                fromAminoMsg(object: _126.TxEncodeResponseAminoMsg): _126.TxEncodeResponse;
                toAminoMsg(message: _126.TxEncodeResponse): _126.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _126.TxEncodeResponseProtoMsg): _126.TxEncodeResponse;
                toProto(message: _126.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _126.TxEncodeResponse): _126.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _126.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxEncodeAminoRequest;
                fromPartial(object: Partial<_126.TxEncodeAminoRequest>): _126.TxEncodeAminoRequest;
                fromAmino(object: _126.TxEncodeAminoRequestAmino): _126.TxEncodeAminoRequest;
                toAmino(message: _126.TxEncodeAminoRequest): _126.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _126.TxEncodeAminoRequestAminoMsg): _126.TxEncodeAminoRequest;
                toAminoMsg(message: _126.TxEncodeAminoRequest): _126.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _126.TxEncodeAminoRequestProtoMsg): _126.TxEncodeAminoRequest;
                toProto(message: _126.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _126.TxEncodeAminoRequest): _126.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _126.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxEncodeAminoResponse;
                fromPartial(object: Partial<_126.TxEncodeAminoResponse>): _126.TxEncodeAminoResponse;
                fromAmino(object: _126.TxEncodeAminoResponseAmino): _126.TxEncodeAminoResponse;
                toAmino(message: _126.TxEncodeAminoResponse): _126.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _126.TxEncodeAminoResponseAminoMsg): _126.TxEncodeAminoResponse;
                toAminoMsg(message: _126.TxEncodeAminoResponse): _126.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _126.TxEncodeAminoResponseProtoMsg): _126.TxEncodeAminoResponse;
                toProto(message: _126.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _126.TxEncodeAminoResponse): _126.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _126.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxDecodeAminoRequest;
                fromPartial(object: Partial<_126.TxDecodeAminoRequest>): _126.TxDecodeAminoRequest;
                fromAmino(object: _126.TxDecodeAminoRequestAmino): _126.TxDecodeAminoRequest;
                toAmino(message: _126.TxDecodeAminoRequest): _126.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _126.TxDecodeAminoRequestAminoMsg): _126.TxDecodeAminoRequest;
                toAminoMsg(message: _126.TxDecodeAminoRequest): _126.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _126.TxDecodeAminoRequestProtoMsg): _126.TxDecodeAminoRequest;
                toProto(message: _126.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _126.TxDecodeAminoRequest): _126.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _126.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TxDecodeAminoResponse;
                fromPartial(object: Partial<_126.TxDecodeAminoResponse>): _126.TxDecodeAminoResponse;
                fromAmino(object: _126.TxDecodeAminoResponseAmino): _126.TxDecodeAminoResponse;
                toAmino(message: _126.TxDecodeAminoResponse): _126.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _126.TxDecodeAminoResponseAminoMsg): _126.TxDecodeAminoResponse;
                toAminoMsg(message: _126.TxDecodeAminoResponse): _126.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _126.TxDecodeAminoResponseProtoMsg): _126.TxDecodeAminoResponse;
                toProto(message: _126.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _126.TxDecodeAminoResponse): _126.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _128.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.Module;
                    fromPartial(object: Partial<_128.Module>): _128.Module;
                    fromAmino(object: _128.ModuleAmino): _128.Module;
                    toAmino(message: _128.Module): _128.ModuleAmino;
                    fromAminoMsg(object: _128.ModuleAminoMsg): _128.Module;
                    toAminoMsg(message: _128.Module): _128.ModuleAminoMsg;
                    fromProtoMsg(message: _128.ModuleProtoMsg): _128.Module;
                    toProto(message: _128.Module): Uint8Array;
                    toProtoMsg(message: _128.Module): _128.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _254.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _129.QueryCurrentPlanRequest): Promise<_129.QueryCurrentPlanResponse>;
                appliedPlan(request: _129.QueryAppliedPlanRequest): Promise<_129.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _129.QueryUpgradedConsensusStateRequest): Promise<_129.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _129.QueryModuleVersionsRequest): Promise<_129.QueryModuleVersionsResponse>;
                authority(request?: _129.QueryAuthorityRequest): Promise<_129.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _130.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _130.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _130.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _130.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _130.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _130.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _130.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _130.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _130.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _130.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _130.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _130.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _130.MsgSoftwareUpgrade) => _130.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _130.MsgSoftwareUpgradeAmino) => _130.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _130.MsgCancelUpgrade) => _130.MsgCancelUpgradeAmino;
                    fromAmino: (object: _130.MsgCancelUpgradeAmino) => _130.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _131.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Plan;
                fromPartial(object: Partial<_131.Plan>): _131.Plan;
                fromAmino(object: _131.PlanAmino): _131.Plan;
                toAmino(message: _131.Plan): _131.PlanAmino;
                fromAminoMsg(object: _131.PlanAminoMsg): _131.Plan;
                toAminoMsg(message: _131.Plan): _131.PlanAminoMsg;
                fromProtoMsg(message: _131.PlanProtoMsg): _131.Plan;
                toProto(message: _131.Plan): Uint8Array;
                toProtoMsg(message: _131.Plan): _131.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _131.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_131.SoftwareUpgradeProposal>): _131.SoftwareUpgradeProposal;
                fromAmino(object: _131.SoftwareUpgradeProposalAmino): _131.SoftwareUpgradeProposal;
                toAmino(message: _131.SoftwareUpgradeProposal): _131.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _131.SoftwareUpgradeProposalAminoMsg): _131.SoftwareUpgradeProposal;
                toAminoMsg(message: _131.SoftwareUpgradeProposal): _131.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _131.SoftwareUpgradeProposalProtoMsg): _131.SoftwareUpgradeProposal;
                toProto(message: _131.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _131.SoftwareUpgradeProposal): _131.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _131.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_131.CancelSoftwareUpgradeProposal>): _131.CancelSoftwareUpgradeProposal;
                fromAmino(object: _131.CancelSoftwareUpgradeProposalAmino): _131.CancelSoftwareUpgradeProposal;
                toAmino(message: _131.CancelSoftwareUpgradeProposal): _131.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _131.CancelSoftwareUpgradeProposalAminoMsg): _131.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _131.CancelSoftwareUpgradeProposal): _131.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _131.CancelSoftwareUpgradeProposalProtoMsg): _131.CancelSoftwareUpgradeProposal;
                toProto(message: _131.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _131.CancelSoftwareUpgradeProposal): _131.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _131.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.ModuleVersion;
                fromPartial(object: Partial<_131.ModuleVersion>): _131.ModuleVersion;
                fromAmino(object: _131.ModuleVersionAmino): _131.ModuleVersion;
                toAmino(message: _131.ModuleVersion): _131.ModuleVersionAmino;
                fromAminoMsg(object: _131.ModuleVersionAminoMsg): _131.ModuleVersion;
                toAminoMsg(message: _131.ModuleVersion): _131.ModuleVersionAminoMsg;
                fromProtoMsg(message: _131.ModuleVersionProtoMsg): _131.ModuleVersion;
                toProto(message: _131.ModuleVersion): Uint8Array;
                toProtoMsg(message: _131.ModuleVersion): _131.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _130.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_130.MsgSoftwareUpgrade>): _130.MsgSoftwareUpgrade;
                fromAmino(object: _130.MsgSoftwareUpgradeAmino): _130.MsgSoftwareUpgrade;
                toAmino(message: _130.MsgSoftwareUpgrade): _130.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _130.MsgSoftwareUpgradeAminoMsg): _130.MsgSoftwareUpgrade;
                toAminoMsg(message: _130.MsgSoftwareUpgrade): _130.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _130.MsgSoftwareUpgradeProtoMsg): _130.MsgSoftwareUpgrade;
                toProto(message: _130.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _130.MsgSoftwareUpgrade): _130.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _130.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_130.MsgSoftwareUpgradeResponse>): _130.MsgSoftwareUpgradeResponse;
                fromAmino(_: _130.MsgSoftwareUpgradeResponseAmino): _130.MsgSoftwareUpgradeResponse;
                toAmino(_: _130.MsgSoftwareUpgradeResponse): _130.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _130.MsgSoftwareUpgradeResponseAminoMsg): _130.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _130.MsgSoftwareUpgradeResponse): _130.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _130.MsgSoftwareUpgradeResponseProtoMsg): _130.MsgSoftwareUpgradeResponse;
                toProto(message: _130.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _130.MsgSoftwareUpgradeResponse): _130.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _130.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCancelUpgrade;
                fromPartial(object: Partial<_130.MsgCancelUpgrade>): _130.MsgCancelUpgrade;
                fromAmino(object: _130.MsgCancelUpgradeAmino): _130.MsgCancelUpgrade;
                toAmino(message: _130.MsgCancelUpgrade): _130.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _130.MsgCancelUpgradeAminoMsg): _130.MsgCancelUpgrade;
                toAminoMsg(message: _130.MsgCancelUpgrade): _130.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _130.MsgCancelUpgradeProtoMsg): _130.MsgCancelUpgrade;
                toProto(message: _130.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _130.MsgCancelUpgrade): _130.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _130.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_130.MsgCancelUpgradeResponse>): _130.MsgCancelUpgradeResponse;
                fromAmino(_: _130.MsgCancelUpgradeResponseAmino): _130.MsgCancelUpgradeResponse;
                toAmino(_: _130.MsgCancelUpgradeResponse): _130.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _130.MsgCancelUpgradeResponseAminoMsg): _130.MsgCancelUpgradeResponse;
                toAminoMsg(message: _130.MsgCancelUpgradeResponse): _130.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _130.MsgCancelUpgradeResponseProtoMsg): _130.MsgCancelUpgradeResponse;
                toProto(message: _130.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _130.MsgCancelUpgradeResponse): _130.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _129.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_129.QueryCurrentPlanRequest>): _129.QueryCurrentPlanRequest;
                fromAmino(_: _129.QueryCurrentPlanRequestAmino): _129.QueryCurrentPlanRequest;
                toAmino(_: _129.QueryCurrentPlanRequest): _129.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _129.QueryCurrentPlanRequestAminoMsg): _129.QueryCurrentPlanRequest;
                toAminoMsg(message: _129.QueryCurrentPlanRequest): _129.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _129.QueryCurrentPlanRequestProtoMsg): _129.QueryCurrentPlanRequest;
                toProto(message: _129.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _129.QueryCurrentPlanRequest): _129.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _129.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_129.QueryCurrentPlanResponse>): _129.QueryCurrentPlanResponse;
                fromAmino(object: _129.QueryCurrentPlanResponseAmino): _129.QueryCurrentPlanResponse;
                toAmino(message: _129.QueryCurrentPlanResponse): _129.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _129.QueryCurrentPlanResponseAminoMsg): _129.QueryCurrentPlanResponse;
                toAminoMsg(message: _129.QueryCurrentPlanResponse): _129.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _129.QueryCurrentPlanResponseProtoMsg): _129.QueryCurrentPlanResponse;
                toProto(message: _129.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _129.QueryCurrentPlanResponse): _129.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _129.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_129.QueryAppliedPlanRequest>): _129.QueryAppliedPlanRequest;
                fromAmino(object: _129.QueryAppliedPlanRequestAmino): _129.QueryAppliedPlanRequest;
                toAmino(message: _129.QueryAppliedPlanRequest): _129.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _129.QueryAppliedPlanRequestAminoMsg): _129.QueryAppliedPlanRequest;
                toAminoMsg(message: _129.QueryAppliedPlanRequest): _129.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _129.QueryAppliedPlanRequestProtoMsg): _129.QueryAppliedPlanRequest;
                toProto(message: _129.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _129.QueryAppliedPlanRequest): _129.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _129.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_129.QueryAppliedPlanResponse>): _129.QueryAppliedPlanResponse;
                fromAmino(object: _129.QueryAppliedPlanResponseAmino): _129.QueryAppliedPlanResponse;
                toAmino(message: _129.QueryAppliedPlanResponse): _129.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _129.QueryAppliedPlanResponseAminoMsg): _129.QueryAppliedPlanResponse;
                toAminoMsg(message: _129.QueryAppliedPlanResponse): _129.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _129.QueryAppliedPlanResponseProtoMsg): _129.QueryAppliedPlanResponse;
                toProto(message: _129.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _129.QueryAppliedPlanResponse): _129.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _129.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_129.QueryUpgradedConsensusStateRequest>): _129.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _129.QueryUpgradedConsensusStateRequestAmino): _129.QueryUpgradedConsensusStateRequest;
                toAmino(message: _129.QueryUpgradedConsensusStateRequest): _129.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _129.QueryUpgradedConsensusStateRequestAminoMsg): _129.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _129.QueryUpgradedConsensusStateRequest): _129.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _129.QueryUpgradedConsensusStateRequestProtoMsg): _129.QueryUpgradedConsensusStateRequest;
                toProto(message: _129.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _129.QueryUpgradedConsensusStateRequest): _129.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _129.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_129.QueryUpgradedConsensusStateResponse>): _129.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _129.QueryUpgradedConsensusStateResponseAmino): _129.QueryUpgradedConsensusStateResponse;
                toAmino(message: _129.QueryUpgradedConsensusStateResponse): _129.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _129.QueryUpgradedConsensusStateResponseAminoMsg): _129.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _129.QueryUpgradedConsensusStateResponse): _129.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _129.QueryUpgradedConsensusStateResponseProtoMsg): _129.QueryUpgradedConsensusStateResponse;
                toProto(message: _129.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _129.QueryUpgradedConsensusStateResponse): _129.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _129.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_129.QueryModuleVersionsRequest>): _129.QueryModuleVersionsRequest;
                fromAmino(object: _129.QueryModuleVersionsRequestAmino): _129.QueryModuleVersionsRequest;
                toAmino(message: _129.QueryModuleVersionsRequest): _129.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _129.QueryModuleVersionsRequestAminoMsg): _129.QueryModuleVersionsRequest;
                toAminoMsg(message: _129.QueryModuleVersionsRequest): _129.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryModuleVersionsRequestProtoMsg): _129.QueryModuleVersionsRequest;
                toProto(message: _129.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryModuleVersionsRequest): _129.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _129.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_129.QueryModuleVersionsResponse>): _129.QueryModuleVersionsResponse;
                fromAmino(object: _129.QueryModuleVersionsResponseAmino): _129.QueryModuleVersionsResponse;
                toAmino(message: _129.QueryModuleVersionsResponse): _129.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _129.QueryModuleVersionsResponseAminoMsg): _129.QueryModuleVersionsResponse;
                toAminoMsg(message: _129.QueryModuleVersionsResponse): _129.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryModuleVersionsResponseProtoMsg): _129.QueryModuleVersionsResponse;
                toProto(message: _129.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryModuleVersionsResponse): _129.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _129.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.QueryAuthorityRequest;
                fromPartial(_: Partial<_129.QueryAuthorityRequest>): _129.QueryAuthorityRequest;
                fromAmino(_: _129.QueryAuthorityRequestAmino): _129.QueryAuthorityRequest;
                toAmino(_: _129.QueryAuthorityRequest): _129.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _129.QueryAuthorityRequestAminoMsg): _129.QueryAuthorityRequest;
                toAminoMsg(message: _129.QueryAuthorityRequest): _129.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _129.QueryAuthorityRequestProtoMsg): _129.QueryAuthorityRequest;
                toProto(message: _129.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _129.QueryAuthorityRequest): _129.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _129.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryAuthorityResponse;
                fromPartial(object: Partial<_129.QueryAuthorityResponse>): _129.QueryAuthorityResponse;
                fromAmino(object: _129.QueryAuthorityResponseAmino): _129.QueryAuthorityResponse;
                toAmino(message: _129.QueryAuthorityResponse): _129.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _129.QueryAuthorityResponseAminoMsg): _129.QueryAuthorityResponse;
                toAminoMsg(message: _129.QueryAuthorityResponse): _129.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _129.QueryAuthorityResponseProtoMsg): _129.QueryAuthorityResponse;
                toProto(message: _129.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _129.QueryAuthorityResponse): _129.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _132.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _132.Module;
                    fromPartial(_: Partial<_132.Module>): _132.Module;
                    fromAmino(_: _132.ModuleAmino): _132.Module;
                    toAmino(_: _132.Module): _132.ModuleAmino;
                    fromAminoMsg(object: _132.ModuleAminoMsg): _132.Module;
                    toAminoMsg(message: _132.Module): _132.ModuleAminoMsg;
                    fromProtoMsg(message: _132.ModuleProtoMsg): _132.Module;
                    toProto(message: _132.Module): Uint8Array;
                    toProtoMsg(message: _132.Module): _132.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _255.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _133.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _133.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _133.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _133.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _133.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _133.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _133.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _133.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _133.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _133.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreateVestingAccount) => _133.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _133.MsgCreateVestingAccountAmino) => _133.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreatePermanentLockedAccount) => _133.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _133.MsgCreatePermanentLockedAccountAmino) => _133.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreatePeriodicVestingAccount) => _133.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _133.MsgCreatePeriodicVestingAccountAmino) => _133.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _134.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.BaseVestingAccount;
                fromPartial(object: Partial<_134.BaseVestingAccount>): _134.BaseVestingAccount;
                fromAmino(object: _134.BaseVestingAccountAmino): _134.BaseVestingAccount;
                toAmino(message: _134.BaseVestingAccount): _134.BaseVestingAccountAmino;
                fromAminoMsg(object: _134.BaseVestingAccountAminoMsg): _134.BaseVestingAccount;
                toAminoMsg(message: _134.BaseVestingAccount): _134.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _134.BaseVestingAccountProtoMsg): _134.BaseVestingAccount;
                toProto(message: _134.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _134.BaseVestingAccount): _134.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _134.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.ContinuousVestingAccount;
                fromPartial(object: Partial<_134.ContinuousVestingAccount>): _134.ContinuousVestingAccount;
                fromAmino(object: _134.ContinuousVestingAccountAmino): _134.ContinuousVestingAccount;
                toAmino(message: _134.ContinuousVestingAccount): _134.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _134.ContinuousVestingAccountAminoMsg): _134.ContinuousVestingAccount;
                toAminoMsg(message: _134.ContinuousVestingAccount): _134.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _134.ContinuousVestingAccountProtoMsg): _134.ContinuousVestingAccount;
                toProto(message: _134.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _134.ContinuousVestingAccount): _134.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _134.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.DelayedVestingAccount;
                fromPartial(object: Partial<_134.DelayedVestingAccount>): _134.DelayedVestingAccount;
                fromAmino(object: _134.DelayedVestingAccountAmino): _134.DelayedVestingAccount;
                toAmino(message: _134.DelayedVestingAccount): _134.DelayedVestingAccountAmino;
                fromAminoMsg(object: _134.DelayedVestingAccountAminoMsg): _134.DelayedVestingAccount;
                toAminoMsg(message: _134.DelayedVestingAccount): _134.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _134.DelayedVestingAccountProtoMsg): _134.DelayedVestingAccount;
                toProto(message: _134.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _134.DelayedVestingAccount): _134.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _134.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.Period;
                fromPartial(object: Partial<_134.Period>): _134.Period;
                fromAmino(object: _134.PeriodAmino): _134.Period;
                toAmino(message: _134.Period): _134.PeriodAmino;
                fromAminoMsg(object: _134.PeriodAminoMsg): _134.Period;
                toAminoMsg(message: _134.Period): _134.PeriodAminoMsg;
                fromProtoMsg(message: _134.PeriodProtoMsg): _134.Period;
                toProto(message: _134.Period): Uint8Array;
                toProtoMsg(message: _134.Period): _134.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _134.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.PeriodicVestingAccount;
                fromPartial(object: Partial<_134.PeriodicVestingAccount>): _134.PeriodicVestingAccount;
                fromAmino(object: _134.PeriodicVestingAccountAmino): _134.PeriodicVestingAccount;
                toAmino(message: _134.PeriodicVestingAccount): _134.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _134.PeriodicVestingAccountAminoMsg): _134.PeriodicVestingAccount;
                toAminoMsg(message: _134.PeriodicVestingAccount): _134.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _134.PeriodicVestingAccountProtoMsg): _134.PeriodicVestingAccount;
                toProto(message: _134.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _134.PeriodicVestingAccount): _134.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _134.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.PermanentLockedAccount;
                fromPartial(object: Partial<_134.PermanentLockedAccount>): _134.PermanentLockedAccount;
                fromAmino(object: _134.PermanentLockedAccountAmino): _134.PermanentLockedAccount;
                toAmino(message: _134.PermanentLockedAccount): _134.PermanentLockedAccountAmino;
                fromAminoMsg(object: _134.PermanentLockedAccountAminoMsg): _134.PermanentLockedAccount;
                toAminoMsg(message: _134.PermanentLockedAccount): _134.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _134.PermanentLockedAccountProtoMsg): _134.PermanentLockedAccount;
                toProto(message: _134.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _134.PermanentLockedAccount): _134.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _133.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreateVestingAccount;
                fromPartial(object: Partial<_133.MsgCreateVestingAccount>): _133.MsgCreateVestingAccount;
                fromAmino(object: _133.MsgCreateVestingAccountAmino): _133.MsgCreateVestingAccount;
                toAmino(message: _133.MsgCreateVestingAccount): _133.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _133.MsgCreateVestingAccountAminoMsg): _133.MsgCreateVestingAccount;
                toAminoMsg(message: _133.MsgCreateVestingAccount): _133.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _133.MsgCreateVestingAccountProtoMsg): _133.MsgCreateVestingAccount;
                toProto(message: _133.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _133.MsgCreateVestingAccount): _133.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _133.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_133.MsgCreateVestingAccountResponse>): _133.MsgCreateVestingAccountResponse;
                fromAmino(_: _133.MsgCreateVestingAccountResponseAmino): _133.MsgCreateVestingAccountResponse;
                toAmino(_: _133.MsgCreateVestingAccountResponse): _133.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _133.MsgCreateVestingAccountResponseAminoMsg): _133.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _133.MsgCreateVestingAccountResponse): _133.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _133.MsgCreateVestingAccountResponseProtoMsg): _133.MsgCreateVestingAccountResponse;
                toProto(message: _133.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreateVestingAccountResponse): _133.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _133.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_133.MsgCreatePermanentLockedAccount>): _133.MsgCreatePermanentLockedAccount;
                fromAmino(object: _133.MsgCreatePermanentLockedAccountAmino): _133.MsgCreatePermanentLockedAccount;
                toAmino(message: _133.MsgCreatePermanentLockedAccount): _133.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _133.MsgCreatePermanentLockedAccountAminoMsg): _133.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _133.MsgCreatePermanentLockedAccount): _133.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _133.MsgCreatePermanentLockedAccountProtoMsg): _133.MsgCreatePermanentLockedAccount;
                toProto(message: _133.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _133.MsgCreatePermanentLockedAccount): _133.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _133.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_133.MsgCreatePermanentLockedAccountResponse>): _133.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _133.MsgCreatePermanentLockedAccountResponseAmino): _133.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _133.MsgCreatePermanentLockedAccountResponse): _133.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _133.MsgCreatePermanentLockedAccountResponseAminoMsg): _133.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _133.MsgCreatePermanentLockedAccountResponse): _133.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _133.MsgCreatePermanentLockedAccountResponseProtoMsg): _133.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _133.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreatePermanentLockedAccountResponse): _133.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _133.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_133.MsgCreatePeriodicVestingAccount>): _133.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _133.MsgCreatePeriodicVestingAccountAmino): _133.MsgCreatePeriodicVestingAccount;
                toAmino(message: _133.MsgCreatePeriodicVestingAccount): _133.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _133.MsgCreatePeriodicVestingAccountAminoMsg): _133.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _133.MsgCreatePeriodicVestingAccount): _133.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _133.MsgCreatePeriodicVestingAccountProtoMsg): _133.MsgCreatePeriodicVestingAccount;
                toProto(message: _133.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _133.MsgCreatePeriodicVestingAccount): _133.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _133.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_133.MsgCreatePeriodicVestingAccountResponse>): _133.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _133.MsgCreatePeriodicVestingAccountResponseAmino): _133.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _133.MsgCreatePeriodicVestingAccountResponse): _133.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _133.MsgCreatePeriodicVestingAccountResponseAminoMsg): _133.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _133.MsgCreatePeriodicVestingAccountResponse): _133.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _133.MsgCreatePeriodicVestingAccountResponseProtoMsg): _133.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _133.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreatePeriodicVestingAccountResponse): _133.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _239.MsgClientImpl;
                };
                authz: {
                    v1beta1: _240.MsgClientImpl;
                };
                bank: {
                    v1beta1: _241.MsgClientImpl;
                };
                consensus: {
                    v1: _242.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _243.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _244.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _245.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _246.MsgClientImpl;
                };
                gov: {
                    v1: _247.MsgClientImpl;
                    v1beta1: _248.MsgClientImpl;
                };
                group: {
                    v1: _249.MsgClientImpl;
                };
                mint: {
                    v1beta1: _250.MsgClientImpl;
                };
                nft: {
                    v1beta1: _251.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _252.MsgClientImpl;
                };
                staking: {
                    v1beta1: _253.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _254.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _255.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _13.QueryConfigRequest): Promise<_13.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _17.QueryAccountsRequest): Promise<_17.QueryAccountsResponse>;
                        account(request: _17.QueryAccountRequest): Promise<_17.QueryAccountResponse>;
                        accountAddressByID(request: _17.QueryAccountAddressByIDRequest): Promise<_17.QueryAccountAddressByIDResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        moduleAccounts(request?: _17.QueryModuleAccountsRequest): Promise<_17.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _17.QueryModuleAccountByNameRequest): Promise<_17.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _17.Bech32PrefixRequest): Promise<_17.Bech32PrefixResponse>;
                        addressBytesToString(request: _17.AddressBytesToStringRequest): Promise<_17.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _17.AddressStringToBytesRequest): Promise<_17.AddressStringToBytesResponse>;
                        accountInfo(request: _17.QueryAccountInfoRequest): Promise<_17.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _23.QueryGrantsRequest): Promise<_23.QueryGrantsResponse>;
                        granterGrants(request: _23.QueryGranterGrantsRequest): Promise<_23.QueryGranterGrantsResponse>;
                        granteeGrants(request: _23.QueryGranteeGrantsRequest): Promise<_23.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _26.AppOptionsRequest): Promise<_26.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _31.QueryBalanceRequest): Promise<_31.QueryBalanceResponse>;
                        allBalances(request: _31.QueryAllBalancesRequest): Promise<_31.QueryAllBalancesResponse>;
                        spendableBalances(request: _31.QuerySpendableBalancesRequest): Promise<_31.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _31.QuerySpendableBalanceByDenomRequest): Promise<_31.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _31.QueryTotalSupplyRequest): Promise<_31.QueryTotalSupplyResponse>;
                        supplyOf(request: _31.QuerySupplyOfRequest): Promise<_31.QuerySupplyOfResponse>;
                        params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        denomMetadata(request: _31.QueryDenomMetadataRequest): Promise<_31.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _31.QueryDenomsMetadataRequest): Promise<_31.QueryDenomsMetadataResponse>;
                        denomOwners(request: _31.QueryDenomOwnersRequest): Promise<_31.QueryDenomOwnersResponse>;
                        sendEnabled(request: _31.QuerySendEnabledRequest): Promise<_31.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _35.ConfigRequest): Promise<_35.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                            getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                            getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                            getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _42.ABCIQueryRequest): Promise<_42.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                        validatorDistributionInfo(request: _63.QueryValidatorDistributionInfoRequest): Promise<_63.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _63.QueryValidatorOutstandingRewardsRequest): Promise<_63.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _63.QueryValidatorCommissionRequest): Promise<_63.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _63.QueryValidatorSlashesRequest): Promise<_63.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _63.QueryDelegationRewardsRequest): Promise<_63.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _63.QueryDelegationTotalRewardsRequest): Promise<_63.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _63.QueryDelegatorValidatorsRequest): Promise<_63.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _63.QueryDelegatorWithdrawAddressRequest): Promise<_63.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _63.QueryCommunityPoolRequest): Promise<_63.QueryCommunityPoolResponse>;
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
                        allowance(request: _73.QueryAllowanceRequest): Promise<_73.QueryAllowanceResponse>;
                        allowances(request: _73.QueryAllowancesRequest): Promise<_73.QueryAllowancesResponse>;
                        allowancesByGranter(request: _73.QueryAllowancesByGranterRequest): Promise<_73.QueryAllowancesByGranterResponse>;
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
                        groupInfo(request: _89.QueryGroupInfoRequest): Promise<_89.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _89.QueryGroupPolicyInfoRequest): Promise<_89.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _89.QueryGroupMembersRequest): Promise<_89.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _89.QueryGroupsByAdminRequest): Promise<_89.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _89.QueryGroupPoliciesByGroupRequest): Promise<_89.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _89.QueryGroupPoliciesByAdminRequest): Promise<_89.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _89.QueryProposalRequest): Promise<_89.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _89.QueryProposalsByGroupPolicyRequest): Promise<_89.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _89.QueryVoteByProposalVoterRequest): Promise<_89.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _89.QueryVotesByProposalRequest): Promise<_89.QueryVotesByProposalResponse>;
                        votesByVoter(request: _89.QueryVotesByVoterRequest): Promise<_89.QueryVotesByVoterResponse>;
                        groupsByMember(request: _89.QueryGroupsByMemberRequest): Promise<_89.QueryGroupsByMemberResponse>;
                        tallyResult(request: _89.QueryTallyResultRequest): Promise<_89.QueryTallyResultResponse>;
                        groups(request?: _89.QueryGroupsRequest): Promise<_89.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                        inflation(request?: _95.QueryInflationRequest): Promise<_95.QueryInflationResponse>;
                        annualProvisions(request?: _95.QueryAnnualProvisionsRequest): Promise<_95.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _102.QueryBalanceRequest): Promise<_102.QueryBalanceResponse>;
                        owner(request: _102.QueryOwnerRequest): Promise<_102.QueryOwnerResponse>;
                        supply(request: _102.QuerySupplyRequest): Promise<_102.QuerySupplyResponse>;
                        nFTs(request: _102.QueryNFTsRequest): Promise<_102.QueryNFTsResponse>;
                        nFT(request: _102.QueryNFTRequest): Promise<_102.QueryNFTResponse>;
                        class(request: _102.QueryClassRequest): Promise<_102.QueryClassResponse>;
                        classes(request?: _102.QueryClassesRequest): Promise<_102.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _105.GetRequest): Promise<_105.GetResponse>;
                            list(request: _105.ListRequest): Promise<_105.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                        subspaces(request?: _110.QuerySubspacesRequest): Promise<_110.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                        signingInfo(request: _115.QuerySigningInfoRequest): Promise<_115.QuerySigningInfoResponse>;
                        signingInfos(request?: _115.QuerySigningInfosRequest): Promise<_115.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _121.QueryValidatorsRequest): Promise<_121.QueryValidatorsResponse>;
                        validator(request: _121.QueryValidatorRequest): Promise<_121.QueryValidatorResponse>;
                        validatorDelegations(request: _121.QueryValidatorDelegationsRequest): Promise<_121.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _121.QueryValidatorUnbondingDelegationsRequest): Promise<_121.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _121.QueryDelegationRequest): Promise<_121.QueryDelegationResponse>;
                        unbondingDelegation(request: _121.QueryUnbondingDelegationRequest): Promise<_121.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _121.QueryDelegatorDelegationsRequest): Promise<_121.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _121.QueryDelegatorUnbondingDelegationsRequest): Promise<_121.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _121.QueryRedelegationsRequest): Promise<_121.QueryRedelegationsResponse>;
                        delegatorValidators(request: _121.QueryDelegatorValidatorsRequest): Promise<_121.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _121.QueryDelegatorValidatorRequest): Promise<_121.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _121.QueryHistoricalInfoRequest): Promise<_121.QueryHistoricalInfoResponse>;
                        pool(request?: _121.QueryPoolRequest): Promise<_121.QueryPoolResponse>;
                        params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _126.SimulateRequest): Promise<_126.SimulateResponse>;
                        getTx(request: _126.GetTxRequest): Promise<_126.GetTxResponse>;
                        broadcastTx(request: _126.BroadcastTxRequest): Promise<_126.BroadcastTxResponse>;
                        getTxsEvent(request: _126.GetTxsEventRequest): Promise<_126.GetTxsEventResponse>;
                        getBlockWithTxs(request: _126.GetBlockWithTxsRequest): Promise<_126.GetBlockWithTxsResponse>;
                        txDecode(request: _126.TxDecodeRequest): Promise<_126.TxDecodeResponse>;
                        txEncode(request: _126.TxEncodeRequest): Promise<_126.TxEncodeResponse>;
                        txEncodeAmino(request: _126.TxEncodeAminoRequest): Promise<_126.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _126.TxDecodeAminoRequest): Promise<_126.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _129.QueryCurrentPlanRequest): Promise<_129.QueryCurrentPlanResponse>;
                        appliedPlan(request: _129.QueryAppliedPlanRequest): Promise<_129.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _129.QueryUpgradedConsensusStateRequest): Promise<_129.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _129.QueryModuleVersionsRequest): Promise<_129.QueryModuleVersionsResponse>;
                        authority(request?: _129.QueryAuthorityRequest): Promise<_129.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _198.LCDQueryClient;
                };
                authz: {
                    v1beta1: _199.LCDQueryClient;
                };
                bank: {
                    v1beta1: _200.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _201.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _202.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _203.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _204.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _205.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _206.LCDQueryClient;
                };
                gov: {
                    v1: _207.LCDQueryClient;
                    v1beta1: _208.LCDQueryClient;
                };
                group: {
                    v1: _209.LCDQueryClient;
                };
                mint: {
                    v1beta1: _210.LCDQueryClient;
                };
                nft: {
                    v1beta1: _211.LCDQueryClient;
                };
                params: {
                    v1beta1: _212.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _213.LCDQueryClient;
                };
                staking: {
                    v1beta1: _214.LCDQueryClient;
                };
                tx: {
                    v1beta1: _215.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _216.LCDQueryClient;
                };
            };
        }>;
    };
}
