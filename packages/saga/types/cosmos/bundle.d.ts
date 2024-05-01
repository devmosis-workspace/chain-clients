import * as _1 from "./app/runtime/v1alpha1/module";
import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/module/v1/module";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./auth/v1beta1/tx";
import * as _10 from "./authz/module/v1/module";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./autocli/v1/options";
import * as _17 from "./autocli/v1/query";
import * as _18 from "./bank/module/v1/module";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/node/v1beta1/query";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/snapshots/v1beta1/snapshot";
import * as _31 from "./base/store/v1beta1/commit_info";
import * as _32 from "./base/store/v1beta1/listening";
import * as _33 from "./base/tendermint/v1beta1/query";
import * as _34 from "./base/tendermint/v1beta1/types";
import * as _35 from "./base/v1beta1/coin";
import * as _36 from "./capability/module/v1/module";
import * as _37 from "./capability/v1beta1/capability";
import * as _38 from "./capability/v1beta1/genesis";
import * as _39 from "./consensus/module/v1/module";
import * as _40 from "./consensus/v1/query";
import * as _41 from "./consensus/v1/tx";
import * as _42 from "./crisis/module/v1/module";
import * as _43 from "./crisis/v1beta1/genesis";
import * as _44 from "./crisis/v1beta1/tx";
import * as _45 from "./crypto/ed25519/keys";
import * as _46 from "./crypto/hd/v1/hd";
import * as _47 from "./crypto/keyring/v1/record";
import * as _48 from "./crypto/multisig/keys";
import * as _49 from "./crypto/secp256k1/keys";
import * as _50 from "./crypto/secp256r1/keys";
import * as _51 from "./distribution/module/v1/module";
import * as _52 from "./distribution/v1beta1/distribution";
import * as _53 from "./distribution/v1beta1/genesis";
import * as _54 from "./distribution/v1beta1/query";
import * as _55 from "./distribution/v1beta1/tx";
import * as _56 from "./evidence/module/v1/module";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/module/v1/module";
import * as _62 from "./feegrant/v1beta1/feegrant";
import * as _63 from "./feegrant/v1beta1/genesis";
import * as _64 from "./feegrant/v1beta1/query";
import * as _65 from "./feegrant/v1beta1/tx";
import * as _66 from "./genutil/module/v1/module";
import * as _67 from "./genutil/v1beta1/genesis";
import * as _68 from "./gov/module/v1/module";
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/module/v1/module";
import * as _78 from "./group/v1/events";
import * as _79 from "./group/v1/genesis";
import * as _80 from "./group/v1/query";
import * as _81 from "./group/v1/tx";
import * as _82 from "./group/v1/types";
import * as _83 from "./mint/module/v1/module";
import * as _84 from "./mint/v1beta1/genesis";
import * as _85 from "./mint/v1beta1/mint";
import * as _86 from "./mint/v1beta1/query";
import * as _87 from "./mint/v1beta1/tx";
import * as _89 from "./nft/module/v1/module";
import * as _90 from "./nft/v1beta1/event";
import * as _91 from "./nft/v1beta1/genesis";
import * as _92 from "./nft/v1beta1/nft";
import * as _93 from "./nft/v1beta1/query";
import * as _94 from "./nft/v1beta1/tx";
import * as _95 from "./orm/module/v1alpha1/module";
import * as _96 from "./orm/query/v1alpha1/query";
import * as _97 from "./orm/v1/orm";
import * as _98 from "./orm/v1alpha1/schema";
import * as _99 from "./params/module/v1/module";
import * as _100 from "./params/v1beta1/params";
import * as _101 from "./params/v1beta1/query";
import * as _103 from "./reflection/v1/reflection";
import * as _104 from "./slashing/module/v1/module";
import * as _105 from "./slashing/v1beta1/genesis";
import * as _106 from "./slashing/v1beta1/query";
import * as _107 from "./slashing/v1beta1/slashing";
import * as _108 from "./slashing/v1beta1/tx";
import * as _109 from "./staking/module/v1/module";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
import * as _115 from "./tx/config/v1/config";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/module/v1/module";
import * as _120 from "./upgrade/v1beta1/query";
import * as _121 from "./upgrade/v1beta1/tx";
import * as _122 from "./upgrade/v1beta1/upgrade";
import * as _123 from "./vesting/module/v1/module";
import * as _124 from "./vesting/v1beta1/tx";
import * as _125 from "./vesting/v1beta1/vesting";
import * as _180 from "./auth/v1beta1/query.lcd";
import * as _181 from "./authz/v1beta1/query.lcd";
import * as _182 from "./bank/v1beta1/query.lcd";
import * as _183 from "./base/node/v1beta1/query.lcd";
import * as _184 from "./base/tendermint/v1beta1/query.lcd";
import * as _185 from "./consensus/v1/query.lcd";
import * as _186 from "./distribution/v1beta1/query.lcd";
import * as _187 from "./evidence/v1beta1/query.lcd";
import * as _188 from "./feegrant/v1beta1/query.lcd";
import * as _189 from "./gov/v1/query.lcd";
import * as _190 from "./gov/v1beta1/query.lcd";
import * as _191 from "./group/v1/query.lcd";
import * as _192 from "./mint/v1beta1/query.lcd";
import * as _193 from "./nft/v1beta1/query.lcd";
import * as _194 from "./params/v1beta1/query.lcd";
import * as _195 from "./slashing/v1beta1/query.lcd";
import * as _196 from "./staking/v1beta1/query.lcd";
import * as _197 from "./tx/v1beta1/service.lcd";
import * as _198 from "./upgrade/v1beta1/query.lcd";
import * as _199 from "./app/v1alpha1/query.rpc.Query";
import * as _200 from "./auth/v1beta1/query.rpc.Query";
import * as _201 from "./authz/v1beta1/query.rpc.Query";
import * as _202 from "./autocli/v1/query.rpc.Query";
import * as _203 from "./bank/v1beta1/query.rpc.Query";
import * as _204 from "./base/node/v1beta1/query.rpc.Service";
import * as _205 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _206 from "./consensus/v1/query.rpc.Query";
import * as _207 from "./distribution/v1beta1/query.rpc.Query";
import * as _208 from "./evidence/v1beta1/query.rpc.Query";
import * as _209 from "./feegrant/v1beta1/query.rpc.Query";
import * as _210 from "./gov/v1/query.rpc.Query";
import * as _211 from "./gov/v1beta1/query.rpc.Query";
import * as _212 from "./group/v1/query.rpc.Query";
import * as _213 from "./mint/v1beta1/query.rpc.Query";
import * as _214 from "./nft/v1beta1/query.rpc.Query";
import * as _215 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _216 from "./params/v1beta1/query.rpc.Query";
import * as _217 from "./slashing/v1beta1/query.rpc.Query";
import * as _218 from "./staking/v1beta1/query.rpc.Query";
import * as _219 from "./tx/v1beta1/service.rpc.Service";
import * as _220 from "./upgrade/v1beta1/query.rpc.Query";
import * as _221 from "./auth/v1beta1/tx.rpc.msg";
import * as _222 from "./authz/v1beta1/tx.rpc.msg";
import * as _223 from "./bank/v1beta1/tx.rpc.msg";
import * as _224 from "./consensus/v1/tx.rpc.msg";
import * as _225 from "./crisis/v1beta1/tx.rpc.msg";
import * as _226 from "./distribution/v1beta1/tx.rpc.msg";
import * as _227 from "./evidence/v1beta1/tx.rpc.msg";
import * as _228 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _229 from "./gov/v1/tx.rpc.msg";
import * as _230 from "./gov/v1beta1/tx.rpc.msg";
import * as _231 from "./group/v1/tx.rpc.msg";
import * as _232 from "./mint/v1beta1/tx.rpc.msg";
import * as _233 from "./nft/v1beta1/tx.rpc.msg";
import * as _234 from "./slashing/v1beta1/tx.rpc.msg";
import * as _235 from "./staking/v1beta1/tx.rpc.msg";
import * as _236 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _237 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _1.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _1.Module;
                    fromPartial(object: Partial<_1.Module>): _1.Module;
                    fromAmino(object: _1.ModuleAmino): _1.Module;
                    toAmino(message: _1.Module): _1.ModuleAmino;
                    fromAminoMsg(object: _1.ModuleAminoMsg): _1.Module;
                    toAminoMsg(message: _1.Module): _1.ModuleAminoMsg;
                    fromProtoMsg(message: _1.ModuleProtoMsg): _1.Module;
                    toProto(message: _1.Module): Uint8Array;
                    toProtoMsg(message: _1.Module): _1.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _1.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _1.StoreKeyConfig;
                    fromPartial(object: Partial<_1.StoreKeyConfig>): _1.StoreKeyConfig;
                    fromAmino(object: _1.StoreKeyConfigAmino): _1.StoreKeyConfig;
                    toAmino(message: _1.StoreKeyConfig): _1.StoreKeyConfigAmino;
                    fromAminoMsg(object: _1.StoreKeyConfigAminoMsg): _1.StoreKeyConfig;
                    toAminoMsg(message: _1.StoreKeyConfig): _1.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _1.StoreKeyConfigProtoMsg): _1.StoreKeyConfig;
                    toProto(message: _1.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _1.StoreKeyConfig): _1.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _4.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.QueryConfigRequest;
                fromPartial(_: Partial<_4.QueryConfigRequest>): _4.QueryConfigRequest;
                fromAmino(_: _4.QueryConfigRequestAmino): _4.QueryConfigRequest;
                toAmino(_: _4.QueryConfigRequest): _4.QueryConfigRequestAmino;
                fromAminoMsg(object: _4.QueryConfigRequestAminoMsg): _4.QueryConfigRequest;
                toAminoMsg(message: _4.QueryConfigRequest): _4.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _4.QueryConfigRequestProtoMsg): _4.QueryConfigRequest;
                toProto(message: _4.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _4.QueryConfigRequest): _4.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _4.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryConfigResponse;
                fromPartial(object: Partial<_4.QueryConfigResponse>): _4.QueryConfigResponse;
                fromAmino(object: _4.QueryConfigResponseAmino): _4.QueryConfigResponse;
                toAmino(message: _4.QueryConfigResponse): _4.QueryConfigResponseAmino;
                fromAminoMsg(object: _4.QueryConfigResponseAminoMsg): _4.QueryConfigResponse;
                toAminoMsg(message: _4.QueryConfigResponse): _4.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _4.QueryConfigResponseProtoMsg): _4.QueryConfigResponse;
                toProto(message: _4.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _4.QueryConfigResponse): _4.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _3.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.ModuleDescriptor;
                fromPartial(object: Partial<_3.ModuleDescriptor>): _3.ModuleDescriptor;
                fromAmino(object: _3.ModuleDescriptorAmino): _3.ModuleDescriptor;
                toAmino(message: _3.ModuleDescriptor): _3.ModuleDescriptorAmino;
                fromAminoMsg(object: _3.ModuleDescriptorAminoMsg): _3.ModuleDescriptor;
                toAminoMsg(message: _3.ModuleDescriptor): _3.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _3.ModuleDescriptorProtoMsg): _3.ModuleDescriptor;
                toProto(message: _3.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _3.ModuleDescriptor): _3.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _3.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.PackageReference;
                fromPartial(object: Partial<_3.PackageReference>): _3.PackageReference;
                fromAmino(object: _3.PackageReferenceAmino): _3.PackageReference;
                toAmino(message: _3.PackageReference): _3.PackageReferenceAmino;
                fromAminoMsg(object: _3.PackageReferenceAminoMsg): _3.PackageReference;
                toAminoMsg(message: _3.PackageReference): _3.PackageReferenceAminoMsg;
                fromProtoMsg(message: _3.PackageReferenceProtoMsg): _3.PackageReference;
                toProto(message: _3.PackageReference): Uint8Array;
                toProtoMsg(message: _3.PackageReference): _3.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _3.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MigrateFromInfo;
                fromPartial(object: Partial<_3.MigrateFromInfo>): _3.MigrateFromInfo;
                fromAmino(object: _3.MigrateFromInfoAmino): _3.MigrateFromInfo;
                toAmino(message: _3.MigrateFromInfo): _3.MigrateFromInfoAmino;
                fromAminoMsg(object: _3.MigrateFromInfoAminoMsg): _3.MigrateFromInfo;
                toAminoMsg(message: _3.MigrateFromInfo): _3.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _3.MigrateFromInfoProtoMsg): _3.MigrateFromInfo;
                toProto(message: _3.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _3.MigrateFromInfo): _3.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _2.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Config;
                fromPartial(object: Partial<_2.Config>): _2.Config;
                fromAmino(object: _2.ConfigAmino): _2.Config;
                toAmino(message: _2.Config): _2.ConfigAmino;
                fromAminoMsg(object: _2.ConfigAminoMsg): _2.Config;
                toAminoMsg(message: _2.Config): _2.ConfigAminoMsg;
                fromProtoMsg(message: _2.ConfigProtoMsg): _2.Config;
                toProto(message: _2.Config): Uint8Array;
                toProtoMsg(message: _2.Config): _2.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _2.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ModuleConfig;
                fromPartial(object: Partial<_2.ModuleConfig>): _2.ModuleConfig;
                fromAmino(object: _2.ModuleConfigAmino): _2.ModuleConfig;
                toAmino(message: _2.ModuleConfig): _2.ModuleConfigAmino;
                fromAminoMsg(object: _2.ModuleConfigAminoMsg): _2.ModuleConfig;
                toAminoMsg(message: _2.ModuleConfig): _2.ModuleConfigAminoMsg;
                fromProtoMsg(message: _2.ModuleConfigProtoMsg): _2.ModuleConfig;
                toProto(message: _2.ModuleConfig): Uint8Array;
                toProtoMsg(message: _2.ModuleConfig): _2.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _2.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.GolangBinding;
                fromPartial(object: Partial<_2.GolangBinding>): _2.GolangBinding;
                fromAmino(object: _2.GolangBindingAmino): _2.GolangBinding;
                toAmino(message: _2.GolangBinding): _2.GolangBindingAmino;
                fromAminoMsg(object: _2.GolangBindingAminoMsg): _2.GolangBinding;
                toAminoMsg(message: _2.GolangBinding): _2.GolangBindingAminoMsg;
                fromProtoMsg(message: _2.GolangBindingProtoMsg): _2.GolangBinding;
                toProto(message: _2.GolangBinding): Uint8Array;
                toProtoMsg(message: _2.GolangBinding): _2.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
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
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _5.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.ModuleAccountPermission;
                    fromPartial(object: Partial<_5.ModuleAccountPermission>): _5.ModuleAccountPermission;
                    fromAmino(object: _5.ModuleAccountPermissionAmino): _5.ModuleAccountPermission;
                    toAmino(message: _5.ModuleAccountPermission): _5.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _5.ModuleAccountPermissionAminoMsg): _5.ModuleAccountPermission;
                    toAminoMsg(message: _5.ModuleAccountPermission): _5.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _5.ModuleAccountPermissionProtoMsg): _5.ModuleAccountPermission;
                    toProto(message: _5.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _5.ModuleAccountPermission): _5.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                accountAddressByID(request: _8.QueryAccountAddressByIDRequest): Promise<_8.QueryAccountAddressByIDResponse>;
                params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _8.QueryModuleAccountByNameRequest): Promise<_8.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
                accountInfo(request: _8.QueryAccountInfoRequest): Promise<_8.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _9.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _9.MsgUpdateParams): {
                        typeUrl: string;
                        value: _9.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _9.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _9.MsgUpdateParams): {
                        typeUrl: string;
                        value: _9.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _9.MsgUpdateParams) => _9.MsgUpdateParamsAmino;
                    fromAmino: (object: _9.MsgUpdateParamsAmino) => _9.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _9.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgUpdateParams;
                fromPartial(object: Partial<_9.MsgUpdateParams>): _9.MsgUpdateParams;
                fromAmino(object: _9.MsgUpdateParamsAmino): _9.MsgUpdateParams;
                toAmino(message: _9.MsgUpdateParams): _9.MsgUpdateParamsAmino;
                fromAminoMsg(object: _9.MsgUpdateParamsAminoMsg): _9.MsgUpdateParams;
                toAminoMsg(message: _9.MsgUpdateParams): _9.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _9.MsgUpdateParamsProtoMsg): _9.MsgUpdateParams;
                toProto(message: _9.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _9.MsgUpdateParams): _9.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _9.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_9.MsgUpdateParamsResponse>): _9.MsgUpdateParamsResponse;
                fromAmino(_: _9.MsgUpdateParamsResponseAmino): _9.MsgUpdateParamsResponse;
                toAmino(_: _9.MsgUpdateParamsResponse): _9.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _9.MsgUpdateParamsResponseAminoMsg): _9.MsgUpdateParamsResponse;
                toAminoMsg(message: _9.MsgUpdateParamsResponse): _9.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _9.MsgUpdateParamsResponseProtoMsg): _9.MsgUpdateParamsResponse;
                toProto(message: _9.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _9.MsgUpdateParamsResponse): _9.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _8.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountsRequest;
                fromPartial(object: Partial<_8.QueryAccountsRequest>): _8.QueryAccountsRequest;
                fromAmino(object: _8.QueryAccountsRequestAmino): _8.QueryAccountsRequest;
                toAmino(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestAmino;
                fromAminoMsg(object: _8.QueryAccountsRequestAminoMsg): _8.QueryAccountsRequest;
                toAminoMsg(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountsRequestProtoMsg): _8.QueryAccountsRequest;
                toProto(message: _8.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _8.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountsResponse;
                fromPartial(object: Partial<_8.QueryAccountsResponse>): _8.QueryAccountsResponse;
                fromAmino(object: _8.QueryAccountsResponseAmino): _8.QueryAccountsResponse;
                toAmino(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseAmino;
                fromAminoMsg(object: _8.QueryAccountsResponseAminoMsg): _8.QueryAccountsResponse;
                toAminoMsg(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountsResponseProtoMsg): _8.QueryAccountsResponse;
                toProto(message: _8.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _8.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountRequest;
                fromPartial(object: Partial<_8.QueryAccountRequest>): _8.QueryAccountRequest;
                fromAmino(object: _8.QueryAccountRequestAmino): _8.QueryAccountRequest;
                toAmino(message: _8.QueryAccountRequest): _8.QueryAccountRequestAmino;
                fromAminoMsg(object: _8.QueryAccountRequestAminoMsg): _8.QueryAccountRequest;
                toAminoMsg(message: _8.QueryAccountRequest): _8.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountRequestProtoMsg): _8.QueryAccountRequest;
                toProto(message: _8.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountRequest): _8.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _8.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountResponse;
                fromPartial(object: Partial<_8.QueryAccountResponse>): _8.QueryAccountResponse;
                fromAmino(object: _8.QueryAccountResponseAmino): _8.QueryAccountResponse;
                toAmino(message: _8.QueryAccountResponse): _8.QueryAccountResponseAmino;
                fromAminoMsg(object: _8.QueryAccountResponseAminoMsg): _8.QueryAccountResponse;
                toAminoMsg(message: _8.QueryAccountResponse): _8.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountResponseProtoMsg): _8.QueryAccountResponse;
                toProto(message: _8.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountResponse): _8.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _8.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryParamsRequest;
                fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
                fromAmino(_: _8.QueryParamsRequestAmino): _8.QueryParamsRequest;
                toAmino(_: _8.QueryParamsRequest): _8.QueryParamsRequestAmino;
                fromAminoMsg(object: _8.QueryParamsRequestAminoMsg): _8.QueryParamsRequest;
                toAminoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryParamsRequestProtoMsg): _8.QueryParamsRequest;
                toProto(message: _8.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _8.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryParamsResponse;
                fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
                fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
                toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
                fromAminoMsg(object: _8.QueryParamsResponseAminoMsg): _8.QueryParamsResponse;
                toAminoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryParamsResponseProtoMsg): _8.QueryParamsResponse;
                toProto(message: _8.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _8.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_8.QueryModuleAccountsRequest>): _8.QueryModuleAccountsRequest;
                fromAmino(_: _8.QueryModuleAccountsRequestAmino): _8.QueryModuleAccountsRequest;
                toAmino(_: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _8.QueryModuleAccountsRequestAminoMsg): _8.QueryModuleAccountsRequest;
                toAminoMsg(message: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountsRequestProtoMsg): _8.QueryModuleAccountsRequest;
                toProto(message: _8.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _8.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_8.QueryModuleAccountsResponse>): _8.QueryModuleAccountsResponse;
                fromAmino(object: _8.QueryModuleAccountsResponseAmino): _8.QueryModuleAccountsResponse;
                toAmino(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _8.QueryModuleAccountsResponseAminoMsg): _8.QueryModuleAccountsResponse;
                toAminoMsg(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountsResponseProtoMsg): _8.QueryModuleAccountsResponse;
                toProto(message: _8.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _8.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameRequest>): _8.QueryModuleAccountByNameRequest;
                fromAmino(object: _8.QueryModuleAccountByNameRequestAmino): _8.QueryModuleAccountByNameRequest;
                toAmino(message: _8.QueryModuleAccountByNameRequest): _8.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _8.QueryModuleAccountByNameRequestAminoMsg): _8.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _8.QueryModuleAccountByNameRequest): _8.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountByNameRequestProtoMsg): _8.QueryModuleAccountByNameRequest;
                toProto(message: _8.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountByNameRequest): _8.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _8.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameResponse>): _8.QueryModuleAccountByNameResponse;
                fromAmino(object: _8.QueryModuleAccountByNameResponseAmino): _8.QueryModuleAccountByNameResponse;
                toAmino(message: _8.QueryModuleAccountByNameResponse): _8.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _8.QueryModuleAccountByNameResponseAminoMsg): _8.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _8.QueryModuleAccountByNameResponse): _8.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountByNameResponseProtoMsg): _8.QueryModuleAccountByNameResponse;
                toProto(message: _8.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountByNameResponse): _8.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _8.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.Bech32PrefixRequest;
                fromPartial(_: Partial<_8.Bech32PrefixRequest>): _8.Bech32PrefixRequest;
                fromAmino(_: _8.Bech32PrefixRequestAmino): _8.Bech32PrefixRequest;
                toAmino(_: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _8.Bech32PrefixRequestAminoMsg): _8.Bech32PrefixRequest;
                toAminoMsg(message: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _8.Bech32PrefixRequestProtoMsg): _8.Bech32PrefixRequest;
                toProto(message: _8.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _8.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Bech32PrefixResponse;
                fromPartial(object: Partial<_8.Bech32PrefixResponse>): _8.Bech32PrefixResponse;
                fromAmino(object: _8.Bech32PrefixResponseAmino): _8.Bech32PrefixResponse;
                toAmino(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _8.Bech32PrefixResponseAminoMsg): _8.Bech32PrefixResponse;
                toAminoMsg(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _8.Bech32PrefixResponseProtoMsg): _8.Bech32PrefixResponse;
                toProto(message: _8.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _8.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.AddressBytesToStringRequest;
                fromPartial(object: Partial<_8.AddressBytesToStringRequest>): _8.AddressBytesToStringRequest;
                fromAmino(object: _8.AddressBytesToStringRequestAmino): _8.AddressBytesToStringRequest;
                toAmino(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _8.AddressBytesToStringRequestAminoMsg): _8.AddressBytesToStringRequest;
                toAminoMsg(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _8.AddressBytesToStringRequestProtoMsg): _8.AddressBytesToStringRequest;
                toProto(message: _8.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _8.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.AddressBytesToStringResponse;
                fromPartial(object: Partial<_8.AddressBytesToStringResponse>): _8.AddressBytesToStringResponse;
                fromAmino(object: _8.AddressBytesToStringResponseAmino): _8.AddressBytesToStringResponse;
                toAmino(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _8.AddressBytesToStringResponseAminoMsg): _8.AddressBytesToStringResponse;
                toAminoMsg(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _8.AddressBytesToStringResponseProtoMsg): _8.AddressBytesToStringResponse;
                toProto(message: _8.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _8.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.AddressStringToBytesRequest;
                fromPartial(object: Partial<_8.AddressStringToBytesRequest>): _8.AddressStringToBytesRequest;
                fromAmino(object: _8.AddressStringToBytesRequestAmino): _8.AddressStringToBytesRequest;
                toAmino(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _8.AddressStringToBytesRequestAminoMsg): _8.AddressStringToBytesRequest;
                toAminoMsg(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _8.AddressStringToBytesRequestProtoMsg): _8.AddressStringToBytesRequest;
                toProto(message: _8.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _8.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.AddressStringToBytesResponse;
                fromPartial(object: Partial<_8.AddressStringToBytesResponse>): _8.AddressStringToBytesResponse;
                fromAmino(object: _8.AddressStringToBytesResponseAmino): _8.AddressStringToBytesResponse;
                toAmino(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _8.AddressStringToBytesResponseAminoMsg): _8.AddressStringToBytesResponse;
                toAminoMsg(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _8.AddressStringToBytesResponseProtoMsg): _8.AddressStringToBytesResponse;
                toProto(message: _8.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _8.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDRequest>): _8.QueryAccountAddressByIDRequest;
                fromAmino(object: _8.QueryAccountAddressByIDRequestAmino): _8.QueryAccountAddressByIDRequest;
                toAmino(message: _8.QueryAccountAddressByIDRequest): _8.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _8.QueryAccountAddressByIDRequestAminoMsg): _8.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _8.QueryAccountAddressByIDRequest): _8.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountAddressByIDRequestProtoMsg): _8.QueryAccountAddressByIDRequest;
                toProto(message: _8.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountAddressByIDRequest): _8.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _8.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDResponse>): _8.QueryAccountAddressByIDResponse;
                fromAmino(object: _8.QueryAccountAddressByIDResponseAmino): _8.QueryAccountAddressByIDResponse;
                toAmino(message: _8.QueryAccountAddressByIDResponse): _8.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _8.QueryAccountAddressByIDResponseAminoMsg): _8.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _8.QueryAccountAddressByIDResponse): _8.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountAddressByIDResponseProtoMsg): _8.QueryAccountAddressByIDResponse;
                toProto(message: _8.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountAddressByIDResponse): _8.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _8.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountInfoRequest;
                fromPartial(object: Partial<_8.QueryAccountInfoRequest>): _8.QueryAccountInfoRequest;
                fromAmino(object: _8.QueryAccountInfoRequestAmino): _8.QueryAccountInfoRequest;
                toAmino(message: _8.QueryAccountInfoRequest): _8.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _8.QueryAccountInfoRequestAminoMsg): _8.QueryAccountInfoRequest;
                toAminoMsg(message: _8.QueryAccountInfoRequest): _8.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountInfoRequestProtoMsg): _8.QueryAccountInfoRequest;
                toProto(message: _8.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountInfoRequest): _8.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _8.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAccountInfoResponse;
                fromPartial(object: Partial<_8.QueryAccountInfoResponse>): _8.QueryAccountInfoResponse;
                fromAmino(object: _8.QueryAccountInfoResponseAmino): _8.QueryAccountInfoResponse;
                toAmino(message: _8.QueryAccountInfoResponse): _8.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _8.QueryAccountInfoResponseAminoMsg): _8.QueryAccountInfoResponse;
                toAminoMsg(message: _8.QueryAccountInfoResponse): _8.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountInfoResponseProtoMsg): _8.QueryAccountInfoResponse;
                toProto(message: _8.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountInfoResponse): _8.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _6.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _6.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                toAminoMsg(message: _7.GenesisState): _7.GenesisStateAminoMsg;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _6.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.BaseAccount;
                fromPartial(object: Partial<_6.BaseAccount>): _6.BaseAccount;
                fromAmino(object: _6.BaseAccountAmino): _6.BaseAccount;
                toAmino(message: _6.BaseAccount): _6.BaseAccountAmino;
                fromAminoMsg(object: _6.BaseAccountAminoMsg): _6.BaseAccount;
                toAminoMsg(message: _6.BaseAccount): _6.BaseAccountAminoMsg;
                fromProtoMsg(message: _6.BaseAccountProtoMsg): _6.BaseAccount;
                toProto(message: _6.BaseAccount): Uint8Array;
                toProtoMsg(message: _6.BaseAccount): _6.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _6.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ModuleAccount;
                fromPartial(object: Partial<_6.ModuleAccount>): _6.ModuleAccount;
                fromAmino(object: _6.ModuleAccountAmino): _6.ModuleAccount;
                toAmino(message: _6.ModuleAccount): _6.ModuleAccountAmino;
                fromAminoMsg(object: _6.ModuleAccountAminoMsg): _6.ModuleAccount;
                toAminoMsg(message: _6.ModuleAccount): _6.ModuleAccountAminoMsg;
                fromProtoMsg(message: _6.ModuleAccountProtoMsg): _6.ModuleAccount;
                toProto(message: _6.ModuleAccount): Uint8Array;
                toProtoMsg(message: _6.ModuleAccount): _6.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _6.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ModuleCredential;
                fromPartial(object: Partial<_6.ModuleCredential>): _6.ModuleCredential;
                fromAmino(object: _6.ModuleCredentialAmino): _6.ModuleCredential;
                toAmino(message: _6.ModuleCredential): _6.ModuleCredentialAmino;
                fromAminoMsg(object: _6.ModuleCredentialAminoMsg): _6.ModuleCredential;
                toAminoMsg(message: _6.ModuleCredential): _6.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _6.ModuleCredentialProtoMsg): _6.ModuleCredential;
                toProto(message: _6.ModuleCredential): Uint8Array;
                toProtoMsg(message: _6.ModuleCredential): _6.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _6.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Params;
                fromPartial(object: Partial<_6.Params>): _6.Params;
                fromAmino(object: _6.ParamsAmino): _6.Params;
                toAmino(message: _6.Params): _6.ParamsAmino;
                fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
                toAminoMsg(message: _6.Params): _6.ParamsAminoMsg;
                fromProtoMsg(message: _6.ParamsProtoMsg): _6.Params;
                toProto(message: _6.Params): Uint8Array;
                toProtoMsg(message: _6.Params): _6.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _10.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _10.Module;
                    fromPartial(_: Partial<_10.Module>): _10.Module;
                    fromAmino(_: _10.ModuleAmino): _10.Module;
                    toAmino(_: _10.Module): _10.ModuleAmino;
                    fromAminoMsg(object: _10.ModuleAminoMsg): _10.Module;
                    toAminoMsg(message: _10.Module): _10.ModuleAminoMsg;
                    fromProtoMsg(message: _10.ModuleProtoMsg): _10.Module;
                    toProto(message: _10.Module): Uint8Array;
                    toProtoMsg(message: _10.Module): _10.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _15.MsgGrant): {
                        typeUrl: string;
                        value: _15.MsgGrant;
                    };
                    exec(value: _15.MsgExec): {
                        typeUrl: string;
                        value: _15.MsgExec;
                    };
                    revoke(value: _15.MsgRevoke): {
                        typeUrl: string;
                        value: _15.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _15.MsgGrant) => _15.MsgGrantAmino;
                    fromAmino: (object: _15.MsgGrantAmino) => _15.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _15.MsgExec) => _15.MsgExecAmino;
                    fromAmino: (object: _15.MsgExecAmino) => _15.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _15.MsgRevoke) => _15.MsgRevokeAmino;
                    fromAmino: (object: _15.MsgRevokeAmino) => _15.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _15.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgGrant;
                fromPartial(object: Partial<_15.MsgGrant>): _15.MsgGrant;
                fromAmino(object: _15.MsgGrantAmino): _15.MsgGrant;
                toAmino(message: _15.MsgGrant): _15.MsgGrantAmino;
                fromAminoMsg(object: _15.MsgGrantAminoMsg): _15.MsgGrant;
                toAminoMsg(message: _15.MsgGrant): _15.MsgGrantAminoMsg;
                fromProtoMsg(message: _15.MsgGrantProtoMsg): _15.MsgGrant;
                toProto(message: _15.MsgGrant): Uint8Array;
                toProtoMsg(message: _15.MsgGrant): _15.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _15.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgExecResponse;
                fromPartial(object: Partial<_15.MsgExecResponse>): _15.MsgExecResponse;
                fromAmino(object: _15.MsgExecResponseAmino): _15.MsgExecResponse;
                toAmino(message: _15.MsgExecResponse): _15.MsgExecResponseAmino;
                fromAminoMsg(object: _15.MsgExecResponseAminoMsg): _15.MsgExecResponse;
                toAminoMsg(message: _15.MsgExecResponse): _15.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _15.MsgExecResponseProtoMsg): _15.MsgExecResponse;
                toProto(message: _15.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _15.MsgExecResponse): _15.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _15.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgExec;
                fromPartial(object: Partial<_15.MsgExec>): _15.MsgExec;
                fromAmino(object: _15.MsgExecAmino): _15.MsgExec;
                toAmino(message: _15.MsgExec): _15.MsgExecAmino;
                fromAminoMsg(object: _15.MsgExecAminoMsg): _15.MsgExec;
                toAminoMsg(message: _15.MsgExec): _15.MsgExecAminoMsg;
                fromProtoMsg(message: _15.MsgExecProtoMsg): _15.MsgExec;
                toProto(message: _15.MsgExec): Uint8Array;
                toProtoMsg(message: _15.MsgExec): _15.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _15.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgGrantResponse;
                fromPartial(_: Partial<_15.MsgGrantResponse>): _15.MsgGrantResponse;
                fromAmino(_: _15.MsgGrantResponseAmino): _15.MsgGrantResponse;
                toAmino(_: _15.MsgGrantResponse): _15.MsgGrantResponseAmino;
                fromAminoMsg(object: _15.MsgGrantResponseAminoMsg): _15.MsgGrantResponse;
                toAminoMsg(message: _15.MsgGrantResponse): _15.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _15.MsgGrantResponseProtoMsg): _15.MsgGrantResponse;
                toProto(message: _15.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _15.MsgGrantResponse): _15.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _15.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgRevoke;
                fromPartial(object: Partial<_15.MsgRevoke>): _15.MsgRevoke;
                fromAmino(object: _15.MsgRevokeAmino): _15.MsgRevoke;
                toAmino(message: _15.MsgRevoke): _15.MsgRevokeAmino;
                fromAminoMsg(object: _15.MsgRevokeAminoMsg): _15.MsgRevoke;
                toAminoMsg(message: _15.MsgRevoke): _15.MsgRevokeAminoMsg;
                fromProtoMsg(message: _15.MsgRevokeProtoMsg): _15.MsgRevoke;
                toProto(message: _15.MsgRevoke): Uint8Array;
                toProtoMsg(message: _15.MsgRevoke): _15.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _15.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgRevokeResponse;
                fromPartial(_: Partial<_15.MsgRevokeResponse>): _15.MsgRevokeResponse;
                fromAmino(_: _15.MsgRevokeResponseAmino): _15.MsgRevokeResponse;
                toAmino(_: _15.MsgRevokeResponse): _15.MsgRevokeResponseAmino;
                fromAminoMsg(object: _15.MsgRevokeResponseAminoMsg): _15.MsgRevokeResponse;
                toAminoMsg(message: _15.MsgRevokeResponse): _15.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _15.MsgRevokeResponseProtoMsg): _15.MsgRevokeResponse;
                toProto(message: _15.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _15.MsgRevokeResponse): _15.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _14.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGrantsRequest;
                fromPartial(object: Partial<_14.QueryGrantsRequest>): _14.QueryGrantsRequest;
                fromAmino(object: _14.QueryGrantsRequestAmino): _14.QueryGrantsRequest;
                toAmino(message: _14.QueryGrantsRequest): _14.QueryGrantsRequestAmino;
                fromAminoMsg(object: _14.QueryGrantsRequestAminoMsg): _14.QueryGrantsRequest;
                toAminoMsg(message: _14.QueryGrantsRequest): _14.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryGrantsRequestProtoMsg): _14.QueryGrantsRequest;
                toProto(message: _14.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryGrantsRequest): _14.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _14.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGrantsResponse;
                fromPartial(object: Partial<_14.QueryGrantsResponse>): _14.QueryGrantsResponse;
                fromAmino(object: _14.QueryGrantsResponseAmino): _14.QueryGrantsResponse;
                toAmino(message: _14.QueryGrantsResponse): _14.QueryGrantsResponseAmino;
                fromAminoMsg(object: _14.QueryGrantsResponseAminoMsg): _14.QueryGrantsResponse;
                toAminoMsg(message: _14.QueryGrantsResponse): _14.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryGrantsResponseProtoMsg): _14.QueryGrantsResponse;
                toProto(message: _14.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryGrantsResponse): _14.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _14.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_14.QueryGranterGrantsRequest>): _14.QueryGranterGrantsRequest;
                fromAmino(object: _14.QueryGranterGrantsRequestAmino): _14.QueryGranterGrantsRequest;
                toAmino(message: _14.QueryGranterGrantsRequest): _14.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _14.QueryGranterGrantsRequestAminoMsg): _14.QueryGranterGrantsRequest;
                toAminoMsg(message: _14.QueryGranterGrantsRequest): _14.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryGranterGrantsRequestProtoMsg): _14.QueryGranterGrantsRequest;
                toProto(message: _14.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryGranterGrantsRequest): _14.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _14.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_14.QueryGranterGrantsResponse>): _14.QueryGranterGrantsResponse;
                fromAmino(object: _14.QueryGranterGrantsResponseAmino): _14.QueryGranterGrantsResponse;
                toAmino(message: _14.QueryGranterGrantsResponse): _14.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _14.QueryGranterGrantsResponseAminoMsg): _14.QueryGranterGrantsResponse;
                toAminoMsg(message: _14.QueryGranterGrantsResponse): _14.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryGranterGrantsResponseProtoMsg): _14.QueryGranterGrantsResponse;
                toProto(message: _14.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryGranterGrantsResponse): _14.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _14.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_14.QueryGranteeGrantsRequest>): _14.QueryGranteeGrantsRequest;
                fromAmino(object: _14.QueryGranteeGrantsRequestAmino): _14.QueryGranteeGrantsRequest;
                toAmino(message: _14.QueryGranteeGrantsRequest): _14.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _14.QueryGranteeGrantsRequestAminoMsg): _14.QueryGranteeGrantsRequest;
                toAminoMsg(message: _14.QueryGranteeGrantsRequest): _14.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryGranteeGrantsRequestProtoMsg): _14.QueryGranteeGrantsRequest;
                toProto(message: _14.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryGranteeGrantsRequest): _14.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _14.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_14.QueryGranteeGrantsResponse>): _14.QueryGranteeGrantsResponse;
                fromAmino(object: _14.QueryGranteeGrantsResponseAmino): _14.QueryGranteeGrantsResponse;
                toAmino(message: _14.QueryGranteeGrantsResponse): _14.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _14.QueryGranteeGrantsResponseAminoMsg): _14.QueryGranteeGrantsResponse;
                toAminoMsg(message: _14.QueryGranteeGrantsResponse): _14.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryGranteeGrantsResponseProtoMsg): _14.QueryGranteeGrantsResponse;
                toProto(message: _14.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryGranteeGrantsResponse): _14.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _12.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventGrant;
                fromPartial(object: Partial<_12.EventGrant>): _12.EventGrant;
                fromAmino(object: _12.EventGrantAmino): _12.EventGrant;
                toAmino(message: _12.EventGrant): _12.EventGrantAmino;
                fromAminoMsg(object: _12.EventGrantAminoMsg): _12.EventGrant;
                toAminoMsg(message: _12.EventGrant): _12.EventGrantAminoMsg;
                fromProtoMsg(message: _12.EventGrantProtoMsg): _12.EventGrant;
                toProto(message: _12.EventGrant): Uint8Array;
                toProtoMsg(message: _12.EventGrant): _12.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _12.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventRevoke;
                fromPartial(object: Partial<_12.EventRevoke>): _12.EventRevoke;
                fromAmino(object: _12.EventRevokeAmino): _12.EventRevoke;
                toAmino(message: _12.EventRevoke): _12.EventRevokeAmino;
                fromAminoMsg(object: _12.EventRevokeAminoMsg): _12.EventRevoke;
                toAminoMsg(message: _12.EventRevoke): _12.EventRevokeAminoMsg;
                fromProtoMsg(message: _12.EventRevokeProtoMsg): _12.EventRevoke;
                toProto(message: _12.EventRevoke): Uint8Array;
                toProtoMsg(message: _12.EventRevoke): _12.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _11.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenericAuthorization;
                fromPartial(object: Partial<_11.GenericAuthorization>): _11.GenericAuthorization;
                fromAmino(object: _11.GenericAuthorizationAmino): _11.GenericAuthorization;
                toAmino(message: _11.GenericAuthorization): _11.GenericAuthorizationAmino;
                fromAminoMsg(object: _11.GenericAuthorizationAminoMsg): _11.GenericAuthorization;
                toAminoMsg(message: _11.GenericAuthorization): _11.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _11.GenericAuthorizationProtoMsg): _11.GenericAuthorization;
                toProto(message: _11.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _11.GenericAuthorization): _11.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _11.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Grant;
                fromPartial(object: Partial<_11.Grant>): _11.Grant;
                fromAmino(object: _11.GrantAmino): _11.Grant;
                toAmino(message: _11.Grant): _11.GrantAmino;
                fromAminoMsg(object: _11.GrantAminoMsg): _11.Grant;
                toAminoMsg(message: _11.Grant): _11.GrantAminoMsg;
                fromProtoMsg(message: _11.GrantProtoMsg): _11.Grant;
                toProto(message: _11.Grant): Uint8Array;
                toProtoMsg(message: _11.Grant): _11.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _11.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GrantAuthorization;
                fromPartial(object: Partial<_11.GrantAuthorization>): _11.GrantAuthorization;
                fromAmino(object: _11.GrantAuthorizationAmino): _11.GrantAuthorization;
                toAmino(message: _11.GrantAuthorization): _11.GrantAuthorizationAmino;
                fromAminoMsg(object: _11.GrantAuthorizationAminoMsg): _11.GrantAuthorization;
                toAminoMsg(message: _11.GrantAuthorization): _11.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _11.GrantAuthorizationProtoMsg): _11.GrantAuthorization;
                toProto(message: _11.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _11.GrantAuthorization): _11.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _11.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GrantQueueItem;
                fromPartial(object: Partial<_11.GrantQueueItem>): _11.GrantQueueItem;
                fromAmino(object: _11.GrantQueueItemAmino): _11.GrantQueueItem;
                toAmino(message: _11.GrantQueueItem): _11.GrantQueueItemAmino;
                fromAminoMsg(object: _11.GrantQueueItemAminoMsg): _11.GrantQueueItem;
                toAminoMsg(message: _11.GrantQueueItem): _11.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _11.GrantQueueItemProtoMsg): _11.GrantQueueItem;
                toProto(message: _11.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _11.GrantQueueItem): _11.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _19.SendAuthorization | _110.StakeAuthorization | _11.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                appOptions(request?: _17.AppOptionsRequest): Promise<_17.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _17.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.AppOptionsRequest;
                fromPartial(_: Partial<_17.AppOptionsRequest>): _17.AppOptionsRequest;
                fromAmino(_: _17.AppOptionsRequestAmino): _17.AppOptionsRequest;
                toAmino(_: _17.AppOptionsRequest): _17.AppOptionsRequestAmino;
                fromAminoMsg(object: _17.AppOptionsRequestAminoMsg): _17.AppOptionsRequest;
                toAminoMsg(message: _17.AppOptionsRequest): _17.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _17.AppOptionsRequestProtoMsg): _17.AppOptionsRequest;
                toProto(message: _17.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _17.AppOptionsRequest): _17.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _17.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_17.AppOptionsResponse_ModuleOptionsEntry>): _17.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _17.AppOptionsResponse_ModuleOptionsEntryAmino): _17.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _17.AppOptionsResponse_ModuleOptionsEntry): _17.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _17.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _17.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _17.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _17.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _17.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _17.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.AppOptionsResponse;
                fromPartial(object: Partial<_17.AppOptionsResponse>): _17.AppOptionsResponse;
                fromAmino(object: _17.AppOptionsResponseAmino): _17.AppOptionsResponse;
                toAmino(message: _17.AppOptionsResponse): _17.AppOptionsResponseAmino;
                fromAminoMsg(object: _17.AppOptionsResponseAminoMsg): _17.AppOptionsResponse;
                toAminoMsg(message: _17.AppOptionsResponse): _17.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _17.AppOptionsResponseProtoMsg): _17.AppOptionsResponse;
                toProto(message: _17.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _17.AppOptionsResponse): _17.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _16.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ModuleOptions;
                fromPartial(object: Partial<_16.ModuleOptions>): _16.ModuleOptions;
                fromAmino(object: _16.ModuleOptionsAmino): _16.ModuleOptions;
                toAmino(message: _16.ModuleOptions): _16.ModuleOptionsAmino;
                fromAminoMsg(object: _16.ModuleOptionsAminoMsg): _16.ModuleOptions;
                toAminoMsg(message: _16.ModuleOptions): _16.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _16.ModuleOptionsProtoMsg): _16.ModuleOptions;
                toProto(message: _16.ModuleOptions): Uint8Array;
                toProtoMsg(message: _16.ModuleOptions): _16.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _16.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_16.ServiceCommandDescriptor_SubCommandsEntry>): _16.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _16.ServiceCommandDescriptor_SubCommandsEntryAmino): _16.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _16.ServiceCommandDescriptor_SubCommandsEntry): _16.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _16.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _16.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _16.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _16.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _16.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _16.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ServiceCommandDescriptor;
                fromPartial(object: Partial<_16.ServiceCommandDescriptor>): _16.ServiceCommandDescriptor;
                fromAmino(object: _16.ServiceCommandDescriptorAmino): _16.ServiceCommandDescriptor;
                toAmino(message: _16.ServiceCommandDescriptor): _16.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _16.ServiceCommandDescriptorAminoMsg): _16.ServiceCommandDescriptor;
                toAminoMsg(message: _16.ServiceCommandDescriptor): _16.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _16.ServiceCommandDescriptorProtoMsg): _16.ServiceCommandDescriptor;
                toProto(message: _16.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _16.ServiceCommandDescriptor): _16.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _16.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_16.RpcCommandOptions_FlagOptionsEntry>): _16.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _16.RpcCommandOptions_FlagOptionsEntryAmino): _16.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _16.RpcCommandOptions_FlagOptionsEntry): _16.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _16.RpcCommandOptions_FlagOptionsEntryAminoMsg): _16.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _16.RpcCommandOptions_FlagOptionsEntryProtoMsg): _16.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _16.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _16.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.RpcCommandOptions;
                fromPartial(object: Partial<_16.RpcCommandOptions>): _16.RpcCommandOptions;
                fromAmino(object: _16.RpcCommandOptionsAmino): _16.RpcCommandOptions;
                toAmino(message: _16.RpcCommandOptions): _16.RpcCommandOptionsAmino;
                fromAminoMsg(object: _16.RpcCommandOptionsAminoMsg): _16.RpcCommandOptions;
                toAminoMsg(message: _16.RpcCommandOptions): _16.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _16.RpcCommandOptionsProtoMsg): _16.RpcCommandOptions;
                toProto(message: _16.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _16.RpcCommandOptions): _16.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _16.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.FlagOptions;
                fromPartial(object: Partial<_16.FlagOptions>): _16.FlagOptions;
                fromAmino(object: _16.FlagOptionsAmino): _16.FlagOptions;
                toAmino(message: _16.FlagOptions): _16.FlagOptionsAmino;
                fromAminoMsg(object: _16.FlagOptionsAminoMsg): _16.FlagOptions;
                toAminoMsg(message: _16.FlagOptions): _16.FlagOptionsAminoMsg;
                fromProtoMsg(message: _16.FlagOptionsProtoMsg): _16.FlagOptions;
                toProto(message: _16.FlagOptions): Uint8Array;
                toProtoMsg(message: _16.FlagOptions): _16.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _16.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.PositionalArgDescriptor;
                fromPartial(object: Partial<_16.PositionalArgDescriptor>): _16.PositionalArgDescriptor;
                fromAmino(object: _16.PositionalArgDescriptorAmino): _16.PositionalArgDescriptor;
                toAmino(message: _16.PositionalArgDescriptor): _16.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _16.PositionalArgDescriptorAminoMsg): _16.PositionalArgDescriptor;
                toAminoMsg(message: _16.PositionalArgDescriptor): _16.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _16.PositionalArgDescriptorProtoMsg): _16.PositionalArgDescriptor;
                toProto(message: _16.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _16.PositionalArgDescriptor): _16.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _18.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.Module;
                    fromPartial(object: Partial<_18.Module>): _18.Module;
                    fromAmino(object: _18.ModuleAmino): _18.Module;
                    toAmino(message: _18.Module): _18.ModuleAmino;
                    fromAminoMsg(object: _18.ModuleAminoMsg): _18.Module;
                    toAminoMsg(message: _18.Module): _18.ModuleAminoMsg;
                    fromProtoMsg(message: _18.ModuleProtoMsg): _18.Module;
                    toProto(message: _18.Module): Uint8Array;
                    toProtoMsg(message: _18.Module): _18.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _22.QuerySpendableBalanceByDenomRequest): Promise<_22.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
                sendEnabled(request: _22.QuerySendEnabledRequest): Promise<_22.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _23.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                    setSendEnabled(value: _23.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _23.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _23.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                    setSendEnabled(value: _23.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _23.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _23.MsgSend) => _23.MsgSendAmino;
                    fromAmino: (object: _23.MsgSendAmino) => _23.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _23.MsgMultiSend) => _23.MsgMultiSendAmino;
                    fromAmino: (object: _23.MsgMultiSendAmino) => _23.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _23.MsgUpdateParams) => _23.MsgUpdateParamsAmino;
                    fromAmino: (object: _23.MsgUpdateParamsAmino) => _23.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _23.MsgSetSendEnabled) => _23.MsgSetSendEnabledAmino;
                    fromAmino: (object: _23.MsgSetSendEnabledAmino) => _23.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _23.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgSend;
                fromPartial(object: Partial<_23.MsgSend>): _23.MsgSend;
                fromAmino(object: _23.MsgSendAmino): _23.MsgSend;
                toAmino(message: _23.MsgSend): _23.MsgSendAmino;
                fromAminoMsg(object: _23.MsgSendAminoMsg): _23.MsgSend;
                toAminoMsg(message: _23.MsgSend): _23.MsgSendAminoMsg;
                fromProtoMsg(message: _23.MsgSendProtoMsg): _23.MsgSend;
                toProto(message: _23.MsgSend): Uint8Array;
                toProtoMsg(message: _23.MsgSend): _23.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _23.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgSendResponse;
                fromPartial(_: Partial<_23.MsgSendResponse>): _23.MsgSendResponse;
                fromAmino(_: _23.MsgSendResponseAmino): _23.MsgSendResponse;
                toAmino(_: _23.MsgSendResponse): _23.MsgSendResponseAmino;
                fromAminoMsg(object: _23.MsgSendResponseAminoMsg): _23.MsgSendResponse;
                toAminoMsg(message: _23.MsgSendResponse): _23.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _23.MsgSendResponseProtoMsg): _23.MsgSendResponse;
                toProto(message: _23.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _23.MsgSendResponse): _23.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _23.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgMultiSend;
                fromPartial(object: Partial<_23.MsgMultiSend>): _23.MsgMultiSend;
                fromAmino(object: _23.MsgMultiSendAmino): _23.MsgMultiSend;
                toAmino(message: _23.MsgMultiSend): _23.MsgMultiSendAmino;
                fromAminoMsg(object: _23.MsgMultiSendAminoMsg): _23.MsgMultiSend;
                toAminoMsg(message: _23.MsgMultiSend): _23.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _23.MsgMultiSendProtoMsg): _23.MsgMultiSend;
                toProto(message: _23.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _23.MsgMultiSend): _23.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _23.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgMultiSendResponse;
                fromPartial(_: Partial<_23.MsgMultiSendResponse>): _23.MsgMultiSendResponse;
                fromAmino(_: _23.MsgMultiSendResponseAmino): _23.MsgMultiSendResponse;
                toAmino(_: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _23.MsgMultiSendResponseAminoMsg): _23.MsgMultiSendResponse;
                toAminoMsg(message: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _23.MsgMultiSendResponseProtoMsg): _23.MsgMultiSendResponse;
                toProto(message: _23.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _23.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgUpdateParams;
                fromPartial(object: Partial<_23.MsgUpdateParams>): _23.MsgUpdateParams;
                fromAmino(object: _23.MsgUpdateParamsAmino): _23.MsgUpdateParams;
                toAmino(message: _23.MsgUpdateParams): _23.MsgUpdateParamsAmino;
                fromAminoMsg(object: _23.MsgUpdateParamsAminoMsg): _23.MsgUpdateParams;
                toAminoMsg(message: _23.MsgUpdateParams): _23.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _23.MsgUpdateParamsProtoMsg): _23.MsgUpdateParams;
                toProto(message: _23.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateParams): _23.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _23.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_23.MsgUpdateParamsResponse>): _23.MsgUpdateParamsResponse;
                fromAmino(_: _23.MsgUpdateParamsResponseAmino): _23.MsgUpdateParamsResponse;
                toAmino(_: _23.MsgUpdateParamsResponse): _23.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _23.MsgUpdateParamsResponseAminoMsg): _23.MsgUpdateParamsResponse;
                toAminoMsg(message: _23.MsgUpdateParamsResponse): _23.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _23.MsgUpdateParamsResponseProtoMsg): _23.MsgUpdateParamsResponse;
                toProto(message: _23.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateParamsResponse): _23.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _23.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgSetSendEnabled;
                fromPartial(object: Partial<_23.MsgSetSendEnabled>): _23.MsgSetSendEnabled;
                fromAmino(object: _23.MsgSetSendEnabledAmino): _23.MsgSetSendEnabled;
                toAmino(message: _23.MsgSetSendEnabled): _23.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _23.MsgSetSendEnabledAminoMsg): _23.MsgSetSendEnabled;
                toAminoMsg(message: _23.MsgSetSendEnabled): _23.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _23.MsgSetSendEnabledProtoMsg): _23.MsgSetSendEnabled;
                toProto(message: _23.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _23.MsgSetSendEnabled): _23.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _23.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_23.MsgSetSendEnabledResponse>): _23.MsgSetSendEnabledResponse;
                fromAmino(_: _23.MsgSetSendEnabledResponseAmino): _23.MsgSetSendEnabledResponse;
                toAmino(_: _23.MsgSetSendEnabledResponse): _23.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _23.MsgSetSendEnabledResponseAminoMsg): _23.MsgSetSendEnabledResponse;
                toAminoMsg(message: _23.MsgSetSendEnabledResponse): _23.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _23.MsgSetSendEnabledResponseProtoMsg): _23.MsgSetSendEnabledResponse;
                toProto(message: _23.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _23.MsgSetSendEnabledResponse): _23.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _22.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryBalanceRequest;
                fromPartial(object: Partial<_22.QueryBalanceRequest>): _22.QueryBalanceRequest;
                fromAmino(object: _22.QueryBalanceRequestAmino): _22.QueryBalanceRequest;
                toAmino(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestAmino;
                fromAminoMsg(object: _22.QueryBalanceRequestAminoMsg): _22.QueryBalanceRequest;
                toAminoMsg(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _22.QueryBalanceRequestProtoMsg): _22.QueryBalanceRequest;
                toProto(message: _22.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _22.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryBalanceResponse;
                fromPartial(object: Partial<_22.QueryBalanceResponse>): _22.QueryBalanceResponse;
                fromAmino(object: _22.QueryBalanceResponseAmino): _22.QueryBalanceResponse;
                toAmino(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseAmino;
                fromAminoMsg(object: _22.QueryBalanceResponseAminoMsg): _22.QueryBalanceResponse;
                toAminoMsg(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _22.QueryBalanceResponseProtoMsg): _22.QueryBalanceResponse;
                toProto(message: _22.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _22.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryAllBalancesRequest;
                fromPartial(object: Partial<_22.QueryAllBalancesRequest>): _22.QueryAllBalancesRequest;
                fromAmino(object: _22.QueryAllBalancesRequestAmino): _22.QueryAllBalancesRequest;
                toAmino(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _22.QueryAllBalancesRequestAminoMsg): _22.QueryAllBalancesRequest;
                toAminoMsg(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _22.QueryAllBalancesRequestProtoMsg): _22.QueryAllBalancesRequest;
                toProto(message: _22.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _22.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryAllBalancesResponse;
                fromPartial(object: Partial<_22.QueryAllBalancesResponse>): _22.QueryAllBalancesResponse;
                fromAmino(object: _22.QueryAllBalancesResponseAmino): _22.QueryAllBalancesResponse;
                toAmino(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _22.QueryAllBalancesResponseAminoMsg): _22.QueryAllBalancesResponse;
                toAminoMsg(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _22.QueryAllBalancesResponseProtoMsg): _22.QueryAllBalancesResponse;
                toProto(message: _22.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_22.QuerySpendableBalancesRequest>): _22.QuerySpendableBalancesRequest;
                fromAmino(object: _22.QuerySpendableBalancesRequestAmino): _22.QuerySpendableBalancesRequest;
                toAmino(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _22.QuerySpendableBalancesRequestAminoMsg): _22.QuerySpendableBalancesRequest;
                toAminoMsg(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalancesRequestProtoMsg): _22.QuerySpendableBalancesRequest;
                toProto(message: _22.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_22.QuerySpendableBalancesResponse>): _22.QuerySpendableBalancesResponse;
                fromAmino(object: _22.QuerySpendableBalancesResponseAmino): _22.QuerySpendableBalancesResponse;
                toAmino(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _22.QuerySpendableBalancesResponseAminoMsg): _22.QuerySpendableBalancesResponse;
                toAminoMsg(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalancesResponseProtoMsg): _22.QuerySpendableBalancesResponse;
                toProto(message: _22.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_22.QuerySpendableBalanceByDenomRequest>): _22.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _22.QuerySpendableBalanceByDenomRequestAmino): _22.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _22.QuerySpendableBalanceByDenomRequest): _22.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _22.QuerySpendableBalanceByDenomRequestAminoMsg): _22.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _22.QuerySpendableBalanceByDenomRequest): _22.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalanceByDenomRequestProtoMsg): _22.QuerySpendableBalanceByDenomRequest;
                toProto(message: _22.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalanceByDenomRequest): _22.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_22.QuerySpendableBalanceByDenomResponse>): _22.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _22.QuerySpendableBalanceByDenomResponseAmino): _22.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _22.QuerySpendableBalanceByDenomResponse): _22.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _22.QuerySpendableBalanceByDenomResponseAminoMsg): _22.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _22.QuerySpendableBalanceByDenomResponse): _22.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalanceByDenomResponseProtoMsg): _22.QuerySpendableBalanceByDenomResponse;
                toProto(message: _22.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalanceByDenomResponse): _22.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _22.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_22.QueryTotalSupplyRequest>): _22.QueryTotalSupplyRequest;
                fromAmino(object: _22.QueryTotalSupplyRequestAmino): _22.QueryTotalSupplyRequest;
                toAmino(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _22.QueryTotalSupplyRequestAminoMsg): _22.QueryTotalSupplyRequest;
                toAminoMsg(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSupplyRequestProtoMsg): _22.QueryTotalSupplyRequest;
                toProto(message: _22.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _22.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_22.QueryTotalSupplyResponse>): _22.QueryTotalSupplyResponse;
                fromAmino(object: _22.QueryTotalSupplyResponseAmino): _22.QueryTotalSupplyResponse;
                toAmino(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _22.QueryTotalSupplyResponseAminoMsg): _22.QueryTotalSupplyResponse;
                toAminoMsg(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSupplyResponseProtoMsg): _22.QueryTotalSupplyResponse;
                toProto(message: _22.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _22.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySupplyOfRequest;
                fromPartial(object: Partial<_22.QuerySupplyOfRequest>): _22.QuerySupplyOfRequest;
                fromAmino(object: _22.QuerySupplyOfRequestAmino): _22.QuerySupplyOfRequest;
                toAmino(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _22.QuerySupplyOfRequestAminoMsg): _22.QuerySupplyOfRequest;
                toAminoMsg(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySupplyOfRequestProtoMsg): _22.QuerySupplyOfRequest;
                toProto(message: _22.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _22.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySupplyOfResponse;
                fromPartial(object: Partial<_22.QuerySupplyOfResponse>): _22.QuerySupplyOfResponse;
                fromAmino(object: _22.QuerySupplyOfResponseAmino): _22.QuerySupplyOfResponse;
                toAmino(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _22.QuerySupplyOfResponseAminoMsg): _22.QuerySupplyOfResponse;
                toAminoMsg(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySupplyOfResponseProtoMsg): _22.QuerySupplyOfResponse;
                toProto(message: _22.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _22.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.QueryParamsRequest;
                fromPartial(_: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
                fromAmino(_: _22.QueryParamsRequestAmino): _22.QueryParamsRequest;
                toAmino(_: _22.QueryParamsRequest): _22.QueryParamsRequestAmino;
                fromAminoMsg(object: _22.QueryParamsRequestAminoMsg): _22.QueryParamsRequest;
                toAminoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryParamsRequestProtoMsg): _22.QueryParamsRequest;
                toProto(message: _22.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _22.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryParamsResponse;
                fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
                fromAmino(object: _22.QueryParamsResponseAmino): _22.QueryParamsResponse;
                toAmino(message: _22.QueryParamsResponse): _22.QueryParamsResponseAmino;
                fromAminoMsg(object: _22.QueryParamsResponseAminoMsg): _22.QueryParamsResponse;
                toAminoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryParamsResponseProtoMsg): _22.QueryParamsResponse;
                toProto(message: _22.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_22.QueryDenomsMetadataRequest>): _22.QueryDenomsMetadataRequest;
                fromAmino(object: _22.QueryDenomsMetadataRequestAmino): _22.QueryDenomsMetadataRequest;
                toAmino(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _22.QueryDenomsMetadataRequestAminoMsg): _22.QueryDenomsMetadataRequest;
                toAminoMsg(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomsMetadataRequestProtoMsg): _22.QueryDenomsMetadataRequest;
                toProto(message: _22.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_22.QueryDenomsMetadataResponse>): _22.QueryDenomsMetadataResponse;
                fromAmino(object: _22.QueryDenomsMetadataResponseAmino): _22.QueryDenomsMetadataResponse;
                toAmino(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _22.QueryDenomsMetadataResponseAminoMsg): _22.QueryDenomsMetadataResponse;
                toAminoMsg(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomsMetadataResponseProtoMsg): _22.QueryDenomsMetadataResponse;
                toProto(message: _22.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_22.QueryDenomMetadataRequest>): _22.QueryDenomMetadataRequest;
                fromAmino(object: _22.QueryDenomMetadataRequestAmino): _22.QueryDenomMetadataRequest;
                toAmino(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _22.QueryDenomMetadataRequestAminoMsg): _22.QueryDenomMetadataRequest;
                toAminoMsg(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomMetadataRequestProtoMsg): _22.QueryDenomMetadataRequest;
                toProto(message: _22.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_22.QueryDenomMetadataResponse>): _22.QueryDenomMetadataResponse;
                fromAmino(object: _22.QueryDenomMetadataResponseAmino): _22.QueryDenomMetadataResponse;
                toAmino(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _22.QueryDenomMetadataResponseAminoMsg): _22.QueryDenomMetadataResponse;
                toAminoMsg(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomMetadataResponseProtoMsg): _22.QueryDenomMetadataResponse;
                toProto(message: _22.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_22.QueryDenomOwnersRequest>): _22.QueryDenomOwnersRequest;
                fromAmino(object: _22.QueryDenomOwnersRequestAmino): _22.QueryDenomOwnersRequest;
                toAmino(message: _22.QueryDenomOwnersRequest): _22.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _22.QueryDenomOwnersRequestAminoMsg): _22.QueryDenomOwnersRequest;
                toAminoMsg(message: _22.QueryDenomOwnersRequest): _22.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomOwnersRequestProtoMsg): _22.QueryDenomOwnersRequest;
                toProto(message: _22.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomOwnersRequest): _22.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _22.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.DenomOwner;
                fromPartial(object: Partial<_22.DenomOwner>): _22.DenomOwner;
                fromAmino(object: _22.DenomOwnerAmino): _22.DenomOwner;
                toAmino(message: _22.DenomOwner): _22.DenomOwnerAmino;
                fromAminoMsg(object: _22.DenomOwnerAminoMsg): _22.DenomOwner;
                toAminoMsg(message: _22.DenomOwner): _22.DenomOwnerAminoMsg;
                fromProtoMsg(message: _22.DenomOwnerProtoMsg): _22.DenomOwner;
                toProto(message: _22.DenomOwner): Uint8Array;
                toProtoMsg(message: _22.DenomOwner): _22.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_22.QueryDenomOwnersResponse>): _22.QueryDenomOwnersResponse;
                fromAmino(object: _22.QueryDenomOwnersResponseAmino): _22.QueryDenomOwnersResponse;
                toAmino(message: _22.QueryDenomOwnersResponse): _22.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _22.QueryDenomOwnersResponseAminoMsg): _22.QueryDenomOwnersResponse;
                toAminoMsg(message: _22.QueryDenomOwnersResponse): _22.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomOwnersResponseProtoMsg): _22.QueryDenomOwnersResponse;
                toProto(message: _22.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomOwnersResponse): _22.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _22.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySendEnabledRequest;
                fromPartial(object: Partial<_22.QuerySendEnabledRequest>): _22.QuerySendEnabledRequest;
                fromAmino(object: _22.QuerySendEnabledRequestAmino): _22.QuerySendEnabledRequest;
                toAmino(message: _22.QuerySendEnabledRequest): _22.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _22.QuerySendEnabledRequestAminoMsg): _22.QuerySendEnabledRequest;
                toAminoMsg(message: _22.QuerySendEnabledRequest): _22.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySendEnabledRequestProtoMsg): _22.QuerySendEnabledRequest;
                toProto(message: _22.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySendEnabledRequest): _22.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _22.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySendEnabledResponse;
                fromPartial(object: Partial<_22.QuerySendEnabledResponse>): _22.QuerySendEnabledResponse;
                fromAmino(object: _22.QuerySendEnabledResponseAmino): _22.QuerySendEnabledResponse;
                toAmino(message: _22.QuerySendEnabledResponse): _22.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _22.QuerySendEnabledResponseAminoMsg): _22.QuerySendEnabledResponse;
                toAminoMsg(message: _22.QuerySendEnabledResponse): _22.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySendEnabledResponseProtoMsg): _22.QuerySendEnabledResponse;
                toProto(message: _22.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySendEnabledResponse): _22.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                toAminoMsg(message: _21.GenesisState): _21.GenesisStateAminoMsg;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _21.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Balance;
                fromPartial(object: Partial<_21.Balance>): _21.Balance;
                fromAmino(object: _21.BalanceAmino): _21.Balance;
                toAmino(message: _21.Balance): _21.BalanceAmino;
                fromAminoMsg(object: _21.BalanceAminoMsg): _21.Balance;
                toAminoMsg(message: _21.Balance): _21.BalanceAminoMsg;
                fromProtoMsg(message: _21.BalanceProtoMsg): _21.Balance;
                toProto(message: _21.Balance): Uint8Array;
                toProtoMsg(message: _21.Balance): _21.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _20.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
                fromAmino(object: _20.ParamsAmino): _20.Params;
                toAmino(message: _20.Params): _20.ParamsAmino;
                fromAminoMsg(object: _20.ParamsAminoMsg): _20.Params;
                toAminoMsg(message: _20.Params): _20.ParamsAminoMsg;
                fromProtoMsg(message: _20.ParamsProtoMsg): _20.Params;
                toProto(message: _20.Params): Uint8Array;
                toProtoMsg(message: _20.Params): _20.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _20.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.SendEnabled;
                fromPartial(object: Partial<_20.SendEnabled>): _20.SendEnabled;
                fromAmino(object: _20.SendEnabledAmino): _20.SendEnabled;
                toAmino(message: _20.SendEnabled): _20.SendEnabledAmino;
                fromAminoMsg(object: _20.SendEnabledAminoMsg): _20.SendEnabled;
                toAminoMsg(message: _20.SendEnabled): _20.SendEnabledAminoMsg;
                fromProtoMsg(message: _20.SendEnabledProtoMsg): _20.SendEnabled;
                toProto(message: _20.SendEnabled): Uint8Array;
                toProtoMsg(message: _20.SendEnabled): _20.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _20.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Input;
                fromPartial(object: Partial<_20.Input>): _20.Input;
                fromAmino(object: _20.InputAmino): _20.Input;
                toAmino(message: _20.Input): _20.InputAmino;
                fromAminoMsg(object: _20.InputAminoMsg): _20.Input;
                toAminoMsg(message: _20.Input): _20.InputAminoMsg;
                fromProtoMsg(message: _20.InputProtoMsg): _20.Input;
                toProto(message: _20.Input): Uint8Array;
                toProtoMsg(message: _20.Input): _20.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _20.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Output;
                fromPartial(object: Partial<_20.Output>): _20.Output;
                fromAmino(object: _20.OutputAmino): _20.Output;
                toAmino(message: _20.Output): _20.OutputAmino;
                fromAminoMsg(object: _20.OutputAminoMsg): _20.Output;
                toAminoMsg(message: _20.Output): _20.OutputAminoMsg;
                fromProtoMsg(message: _20.OutputProtoMsg): _20.Output;
                toProto(message: _20.Output): Uint8Array;
                toProtoMsg(message: _20.Output): _20.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _20.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Supply;
                fromPartial(object: Partial<_20.Supply>): _20.Supply;
                fromAmino(object: _20.SupplyAmino): _20.Supply;
                toAmino(message: _20.Supply): _20.SupplyAmino;
                fromAminoMsg(object: _20.SupplyAminoMsg): _20.Supply;
                toAminoMsg(message: _20.Supply): _20.SupplyAminoMsg;
                fromProtoMsg(message: _20.SupplyProtoMsg): _20.Supply;
                toProto(message: _20.Supply): Uint8Array;
                toProtoMsg(message: _20.Supply): _20.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _20.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DenomUnit;
                fromPartial(object: Partial<_20.DenomUnit>): _20.DenomUnit;
                fromAmino(object: _20.DenomUnitAmino): _20.DenomUnit;
                toAmino(message: _20.DenomUnit): _20.DenomUnitAmino;
                fromAminoMsg(object: _20.DenomUnitAminoMsg): _20.DenomUnit;
                toAminoMsg(message: _20.DenomUnit): _20.DenomUnitAminoMsg;
                fromProtoMsg(message: _20.DenomUnitProtoMsg): _20.DenomUnit;
                toProto(message: _20.DenomUnit): Uint8Array;
                toProtoMsg(message: _20.DenomUnit): _20.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _20.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Metadata;
                fromPartial(object: Partial<_20.Metadata>): _20.Metadata;
                fromAmino(object: _20.MetadataAmino): _20.Metadata;
                toAmino(message: _20.Metadata): _20.MetadataAmino;
                fromAminoMsg(object: _20.MetadataAminoMsg): _20.Metadata;
                toAminoMsg(message: _20.Metadata): _20.MetadataAminoMsg;
                fromProtoMsg(message: _20.MetadataProtoMsg): _20.Metadata;
                toProto(message: _20.Metadata): Uint8Array;
                toProtoMsg(message: _20.Metadata): _20.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _19.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SendAuthorization;
                fromPartial(object: Partial<_19.SendAuthorization>): _19.SendAuthorization;
                fromAmino(object: _19.SendAuthorizationAmino): _19.SendAuthorization;
                toAmino(message: _19.SendAuthorization): _19.SendAuthorizationAmino;
                fromAminoMsg(object: _19.SendAuthorizationAminoMsg): _19.SendAuthorization;
                toAminoMsg(message: _19.SendAuthorization): _19.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _19.SendAuthorizationProtoMsg): _19.SendAuthorization;
                toProto(message: _19.SendAuthorization): Uint8Array;
                toProtoMsg(message: _19.SendAuthorization): _19.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _24.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.TxResponse;
                    fromPartial(object: Partial<_24.TxResponse>): _24.TxResponse;
                    fromAmino(object: _24.TxResponseAmino): _24.TxResponse;
                    toAmino(message: _24.TxResponse): _24.TxResponseAmino;
                    fromAminoMsg(object: _24.TxResponseAminoMsg): _24.TxResponse;
                    toAminoMsg(message: _24.TxResponse): _24.TxResponseAminoMsg;
                    fromProtoMsg(message: _24.TxResponseProtoMsg): _24.TxResponse;
                    toProto(message: _24.TxResponse): Uint8Array;
                    toProtoMsg(message: _24.TxResponse): _24.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _24.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.ABCIMessageLog;
                    fromPartial(object: Partial<_24.ABCIMessageLog>): _24.ABCIMessageLog;
                    fromAmino(object: _24.ABCIMessageLogAmino): _24.ABCIMessageLog;
                    toAmino(message: _24.ABCIMessageLog): _24.ABCIMessageLogAmino;
                    fromAminoMsg(object: _24.ABCIMessageLogAminoMsg): _24.ABCIMessageLog;
                    toAminoMsg(message: _24.ABCIMessageLog): _24.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _24.ABCIMessageLogProtoMsg): _24.ABCIMessageLog;
                    toProto(message: _24.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _24.ABCIMessageLog): _24.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _24.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.StringEvent;
                    fromPartial(object: Partial<_24.StringEvent>): _24.StringEvent;
                    fromAmino(object: _24.StringEventAmino): _24.StringEvent;
                    toAmino(message: _24.StringEvent): _24.StringEventAmino;
                    fromAminoMsg(object: _24.StringEventAminoMsg): _24.StringEvent;
                    toAminoMsg(message: _24.StringEvent): _24.StringEventAminoMsg;
                    fromProtoMsg(message: _24.StringEventProtoMsg): _24.StringEvent;
                    toProto(message: _24.StringEvent): Uint8Array;
                    toProtoMsg(message: _24.StringEvent): _24.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _24.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Attribute;
                    fromPartial(object: Partial<_24.Attribute>): _24.Attribute;
                    fromAmino(object: _24.AttributeAmino): _24.Attribute;
                    toAmino(message: _24.Attribute): _24.AttributeAmino;
                    fromAminoMsg(object: _24.AttributeAminoMsg): _24.Attribute;
                    toAminoMsg(message: _24.Attribute): _24.AttributeAminoMsg;
                    fromProtoMsg(message: _24.AttributeProtoMsg): _24.Attribute;
                    toProto(message: _24.Attribute): Uint8Array;
                    toProtoMsg(message: _24.Attribute): _24.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _24.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.GasInfo;
                    fromPartial(object: Partial<_24.GasInfo>): _24.GasInfo;
                    fromAmino(object: _24.GasInfoAmino): _24.GasInfo;
                    toAmino(message: _24.GasInfo): _24.GasInfoAmino;
                    fromAminoMsg(object: _24.GasInfoAminoMsg): _24.GasInfo;
                    toAminoMsg(message: _24.GasInfo): _24.GasInfoAminoMsg;
                    fromProtoMsg(message: _24.GasInfoProtoMsg): _24.GasInfo;
                    toProto(message: _24.GasInfo): Uint8Array;
                    toProtoMsg(message: _24.GasInfo): _24.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _24.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Result;
                    fromPartial(object: Partial<_24.Result>): _24.Result;
                    fromAmino(object: _24.ResultAmino): _24.Result;
                    toAmino(message: _24.Result): _24.ResultAmino;
                    fromAminoMsg(object: _24.ResultAminoMsg): _24.Result;
                    toAminoMsg(message: _24.Result): _24.ResultAminoMsg;
                    fromProtoMsg(message: _24.ResultProtoMsg): _24.Result;
                    toProto(message: _24.Result): Uint8Array;
                    toProtoMsg(message: _24.Result): _24.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _24.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SimulationResponse;
                    fromPartial(object: Partial<_24.SimulationResponse>): _24.SimulationResponse;
                    fromAmino(object: _24.SimulationResponseAmino): _24.SimulationResponse;
                    toAmino(message: _24.SimulationResponse): _24.SimulationResponseAmino;
                    fromAminoMsg(object: _24.SimulationResponseAminoMsg): _24.SimulationResponse;
                    toAminoMsg(message: _24.SimulationResponse): _24.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _24.SimulationResponseProtoMsg): _24.SimulationResponse;
                    toProto(message: _24.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _24.SimulationResponse): _24.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _24.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.MsgData;
                    fromPartial(object: Partial<_24.MsgData>): _24.MsgData;
                    fromAmino(object: _24.MsgDataAmino): _24.MsgData;
                    toAmino(message: _24.MsgData): _24.MsgDataAmino;
                    fromAminoMsg(object: _24.MsgDataAminoMsg): _24.MsgData;
                    toAminoMsg(message: _24.MsgData): _24.MsgDataAminoMsg;
                    fromProtoMsg(message: _24.MsgDataProtoMsg): _24.MsgData;
                    toProto(message: _24.MsgData): Uint8Array;
                    toProtoMsg(message: _24.MsgData): _24.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _24.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.TxMsgData;
                    fromPartial(object: Partial<_24.TxMsgData>): _24.TxMsgData;
                    fromAmino(object: _24.TxMsgDataAmino): _24.TxMsgData;
                    toAmino(message: _24.TxMsgData): _24.TxMsgDataAmino;
                    fromAminoMsg(object: _24.TxMsgDataAminoMsg): _24.TxMsgData;
                    toAminoMsg(message: _24.TxMsgData): _24.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _24.TxMsgDataProtoMsg): _24.TxMsgData;
                    toProto(message: _24.TxMsgData): Uint8Array;
                    toProtoMsg(message: _24.TxMsgData): _24.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _24.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.SearchTxsResult;
                    fromPartial(object: Partial<_24.SearchTxsResult>): _24.SearchTxsResult;
                    fromAmino(object: _24.SearchTxsResultAmino): _24.SearchTxsResult;
                    toAmino(message: _24.SearchTxsResult): _24.SearchTxsResultAmino;
                    fromAminoMsg(object: _24.SearchTxsResultAminoMsg): _24.SearchTxsResult;
                    toAminoMsg(message: _24.SearchTxsResult): _24.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _24.SearchTxsResultProtoMsg): _24.SearchTxsResult;
                    toProto(message: _24.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _24.SearchTxsResult): _24.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _25.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.Pairs;
                    fromPartial(object: Partial<_25.Pairs>): _25.Pairs;
                    fromAmino(object: _25.PairsAmino): _25.Pairs;
                    toAmino(message: _25.Pairs): _25.PairsAmino;
                    fromAminoMsg(object: _25.PairsAminoMsg): _25.Pairs;
                    toAminoMsg(message: _25.Pairs): _25.PairsAminoMsg;
                    fromProtoMsg(message: _25.PairsProtoMsg): _25.Pairs;
                    toProto(message: _25.Pairs): Uint8Array;
                    toProtoMsg(message: _25.Pairs): _25.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _25.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _25.Pair;
                    fromPartial(object: Partial<_25.Pair>): _25.Pair;
                    fromAmino(object: _25.PairAmino): _25.Pair;
                    toAmino(message: _25.Pair): _25.PairAmino;
                    fromAminoMsg(object: _25.PairAminoMsg): _25.Pair;
                    toAminoMsg(message: _25.Pair): _25.PairAminoMsg;
                    fromProtoMsg(message: _25.PairProtoMsg): _25.Pair;
                    toProto(message: _25.Pair): Uint8Array;
                    toProtoMsg(message: _25.Pair): _25.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _204.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                };
                LCDQueryClient: typeof _183.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _26.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _26.ConfigRequest;
                    fromPartial(_: Partial<_26.ConfigRequest>): _26.ConfigRequest;
                    fromAmino(_: _26.ConfigRequestAmino): _26.ConfigRequest;
                    toAmino(_: _26.ConfigRequest): _26.ConfigRequestAmino;
                    fromAminoMsg(object: _26.ConfigRequestAminoMsg): _26.ConfigRequest;
                    toAminoMsg(message: _26.ConfigRequest): _26.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _26.ConfigRequestProtoMsg): _26.ConfigRequest;
                    toProto(message: _26.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _26.ConfigRequest): _26.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _26.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _26.ConfigResponse;
                    fromPartial(object: Partial<_26.ConfigResponse>): _26.ConfigResponse;
                    fromAmino(object: _26.ConfigResponseAmino): _26.ConfigResponse;
                    toAmino(message: _26.ConfigResponse): _26.ConfigResponseAmino;
                    fromAminoMsg(object: _26.ConfigResponseAminoMsg): _26.ConfigResponse;
                    toAminoMsg(message: _26.ConfigResponse): _26.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _26.ConfigResponseProtoMsg): _26.ConfigResponse;
                    toProto(message: _26.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _26.ConfigResponse): _26.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _27.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.PageRequest;
                    fromPartial(object: Partial<_27.PageRequest>): _27.PageRequest;
                    fromAmino(object: _27.PageRequestAmino): _27.PageRequest;
                    toAmino(message: _27.PageRequest): _27.PageRequestAmino;
                    fromAminoMsg(object: _27.PageRequestAminoMsg): _27.PageRequest;
                    toAminoMsg(message: _27.PageRequest): _27.PageRequestAminoMsg;
                    fromProtoMsg(message: _27.PageRequestProtoMsg): _27.PageRequest;
                    toProto(message: _27.PageRequest): Uint8Array;
                    toProtoMsg(message: _27.PageRequest): _27.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _27.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.PageResponse;
                    fromPartial(object: Partial<_27.PageResponse>): _27.PageResponse;
                    fromAmino(object: _27.PageResponseAmino): _27.PageResponse;
                    toAmino(message: _27.PageResponse): _27.PageResponseAmino;
                    fromAminoMsg(object: _27.PageResponseAminoMsg): _27.PageResponse;
                    toAminoMsg(message: _27.PageResponse): _27.PageResponseAminoMsg;
                    fromProtoMsg(message: _27.PageResponseProtoMsg): _27.PageResponse;
                    toProto(message: _27.PageResponse): Uint8Array;
                    toProtoMsg(message: _27.PageResponse): _27.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _28.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _28.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_28.ListAllInterfacesRequest>): _28.ListAllInterfacesRequest;
                    fromAmino(_: _28.ListAllInterfacesRequestAmino): _28.ListAllInterfacesRequest;
                    toAmino(_: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _28.ListAllInterfacesRequestAminoMsg): _28.ListAllInterfacesRequest;
                    toAminoMsg(message: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _28.ListAllInterfacesRequestProtoMsg): _28.ListAllInterfacesRequest;
                    toProto(message: _28.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _28.ListAllInterfacesRequest): _28.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _28.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_28.ListAllInterfacesResponse>): _28.ListAllInterfacesResponse;
                    fromAmino(object: _28.ListAllInterfacesResponseAmino): _28.ListAllInterfacesResponse;
                    toAmino(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _28.ListAllInterfacesResponseAminoMsg): _28.ListAllInterfacesResponse;
                    toAminoMsg(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _28.ListAllInterfacesResponseProtoMsg): _28.ListAllInterfacesResponse;
                    toProto(message: _28.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _28.ListAllInterfacesResponse): _28.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _28.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ListImplementationsRequest;
                    fromPartial(object: Partial<_28.ListImplementationsRequest>): _28.ListImplementationsRequest;
                    fromAmino(object: _28.ListImplementationsRequestAmino): _28.ListImplementationsRequest;
                    toAmino(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _28.ListImplementationsRequestAminoMsg): _28.ListImplementationsRequest;
                    toAminoMsg(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _28.ListImplementationsRequestProtoMsg): _28.ListImplementationsRequest;
                    toProto(message: _28.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _28.ListImplementationsRequest): _28.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _28.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _28.ListImplementationsResponse;
                    fromPartial(object: Partial<_28.ListImplementationsResponse>): _28.ListImplementationsResponse;
                    fromAmino(object: _28.ListImplementationsResponseAmino): _28.ListImplementationsResponse;
                    toAmino(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _28.ListImplementationsResponseAminoMsg): _28.ListImplementationsResponse;
                    toAminoMsg(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _28.ListImplementationsResponseProtoMsg): _28.ListImplementationsResponse;
                    toProto(message: _28.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _28.ListImplementationsResponse): _28.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _29.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.AppDescriptor;
                    fromPartial(object: Partial<_29.AppDescriptor>): _29.AppDescriptor;
                    fromAmino(object: _29.AppDescriptorAmino): _29.AppDescriptor;
                    toAmino(message: _29.AppDescriptor): _29.AppDescriptorAmino;
                    fromAminoMsg(object: _29.AppDescriptorAminoMsg): _29.AppDescriptor;
                    toAminoMsg(message: _29.AppDescriptor): _29.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _29.AppDescriptorProtoMsg): _29.AppDescriptor;
                    toProto(message: _29.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _29.AppDescriptor): _29.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _29.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.TxDescriptor;
                    fromPartial(object: Partial<_29.TxDescriptor>): _29.TxDescriptor;
                    fromAmino(object: _29.TxDescriptorAmino): _29.TxDescriptor;
                    toAmino(message: _29.TxDescriptor): _29.TxDescriptorAmino;
                    fromAminoMsg(object: _29.TxDescriptorAminoMsg): _29.TxDescriptor;
                    toAminoMsg(message: _29.TxDescriptor): _29.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _29.TxDescriptorProtoMsg): _29.TxDescriptor;
                    toProto(message: _29.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _29.TxDescriptor): _29.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _29.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.AuthnDescriptor;
                    fromPartial(object: Partial<_29.AuthnDescriptor>): _29.AuthnDescriptor;
                    fromAmino(object: _29.AuthnDescriptorAmino): _29.AuthnDescriptor;
                    toAmino(message: _29.AuthnDescriptor): _29.AuthnDescriptorAmino;
                    fromAminoMsg(object: _29.AuthnDescriptorAminoMsg): _29.AuthnDescriptor;
                    toAminoMsg(message: _29.AuthnDescriptor): _29.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _29.AuthnDescriptorProtoMsg): _29.AuthnDescriptor;
                    toProto(message: _29.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _29.AuthnDescriptor): _29.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _29.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.SigningModeDescriptor;
                    fromPartial(object: Partial<_29.SigningModeDescriptor>): _29.SigningModeDescriptor;
                    fromAmino(object: _29.SigningModeDescriptorAmino): _29.SigningModeDescriptor;
                    toAmino(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _29.SigningModeDescriptorAminoMsg): _29.SigningModeDescriptor;
                    toAminoMsg(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _29.SigningModeDescriptorProtoMsg): _29.SigningModeDescriptor;
                    toProto(message: _29.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _29.SigningModeDescriptor): _29.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _29.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.ChainDescriptor;
                    fromPartial(object: Partial<_29.ChainDescriptor>): _29.ChainDescriptor;
                    fromAmino(object: _29.ChainDescriptorAmino): _29.ChainDescriptor;
                    toAmino(message: _29.ChainDescriptor): _29.ChainDescriptorAmino;
                    fromAminoMsg(object: _29.ChainDescriptorAminoMsg): _29.ChainDescriptor;
                    toAminoMsg(message: _29.ChainDescriptor): _29.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _29.ChainDescriptorProtoMsg): _29.ChainDescriptor;
                    toProto(message: _29.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _29.ChainDescriptor): _29.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _29.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.CodecDescriptor;
                    fromPartial(object: Partial<_29.CodecDescriptor>): _29.CodecDescriptor;
                    fromAmino(object: _29.CodecDescriptorAmino): _29.CodecDescriptor;
                    toAmino(message: _29.CodecDescriptor): _29.CodecDescriptorAmino;
                    fromAminoMsg(object: _29.CodecDescriptorAminoMsg): _29.CodecDescriptor;
                    toAminoMsg(message: _29.CodecDescriptor): _29.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _29.CodecDescriptorProtoMsg): _29.CodecDescriptor;
                    toProto(message: _29.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _29.CodecDescriptor): _29.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.InterfaceDescriptor;
                    fromPartial(object: Partial<_29.InterfaceDescriptor>): _29.InterfaceDescriptor;
                    fromAmino(object: _29.InterfaceDescriptorAmino): _29.InterfaceDescriptor;
                    toAmino(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceDescriptorAminoMsg): _29.InterfaceDescriptor;
                    toAminoMsg(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceDescriptorProtoMsg): _29.InterfaceDescriptor;
                    toProto(message: _29.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceDescriptor): _29.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_29.InterfaceImplementerDescriptor>): _29.InterfaceImplementerDescriptor;
                    fromAmino(object: _29.InterfaceImplementerDescriptorAmino): _29.InterfaceImplementerDescriptor;
                    toAmino(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceImplementerDescriptorAminoMsg): _29.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceImplementerDescriptorProtoMsg): _29.InterfaceImplementerDescriptor;
                    toProto(message: _29.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceImplementerDescriptor): _29.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _29.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_29.InterfaceAcceptingMessageDescriptor>): _29.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _29.InterfaceAcceptingMessageDescriptorAmino): _29.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _29.InterfaceAcceptingMessageDescriptorAminoMsg): _29.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _29.InterfaceAcceptingMessageDescriptorProtoMsg): _29.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _29.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _29.InterfaceAcceptingMessageDescriptor): _29.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _29.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.ConfigurationDescriptor;
                    fromPartial(object: Partial<_29.ConfigurationDescriptor>): _29.ConfigurationDescriptor;
                    fromAmino(object: _29.ConfigurationDescriptorAmino): _29.ConfigurationDescriptor;
                    toAmino(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _29.ConfigurationDescriptorAminoMsg): _29.ConfigurationDescriptor;
                    toAminoMsg(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _29.ConfigurationDescriptorProtoMsg): _29.ConfigurationDescriptor;
                    toProto(message: _29.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _29.ConfigurationDescriptor): _29.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _29.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.MsgDescriptor;
                    fromPartial(object: Partial<_29.MsgDescriptor>): _29.MsgDescriptor;
                    fromAmino(object: _29.MsgDescriptorAmino): _29.MsgDescriptor;
                    toAmino(message: _29.MsgDescriptor): _29.MsgDescriptorAmino;
                    fromAminoMsg(object: _29.MsgDescriptorAminoMsg): _29.MsgDescriptor;
                    toAminoMsg(message: _29.MsgDescriptor): _29.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _29.MsgDescriptorProtoMsg): _29.MsgDescriptor;
                    toProto(message: _29.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _29.MsgDescriptor): _29.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_29.GetAuthnDescriptorRequest>): _29.GetAuthnDescriptorRequest;
                    fromAmino(_: _29.GetAuthnDescriptorRequestAmino): _29.GetAuthnDescriptorRequest;
                    toAmino(_: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetAuthnDescriptorRequestAminoMsg): _29.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetAuthnDescriptorRequestProtoMsg): _29.GetAuthnDescriptorRequest;
                    toProto(message: _29.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetAuthnDescriptorRequest): _29.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_29.GetAuthnDescriptorResponse>): _29.GetAuthnDescriptorResponse;
                    fromAmino(object: _29.GetAuthnDescriptorResponseAmino): _29.GetAuthnDescriptorResponse;
                    toAmino(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetAuthnDescriptorResponseAminoMsg): _29.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetAuthnDescriptorResponseProtoMsg): _29.GetAuthnDescriptorResponse;
                    toProto(message: _29.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetAuthnDescriptorResponse): _29.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_29.GetChainDescriptorRequest>): _29.GetChainDescriptorRequest;
                    fromAmino(_: _29.GetChainDescriptorRequestAmino): _29.GetChainDescriptorRequest;
                    toAmino(_: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetChainDescriptorRequestAminoMsg): _29.GetChainDescriptorRequest;
                    toAminoMsg(message: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetChainDescriptorRequestProtoMsg): _29.GetChainDescriptorRequest;
                    toProto(message: _29.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetChainDescriptorRequest): _29.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_29.GetChainDescriptorResponse>): _29.GetChainDescriptorResponse;
                    fromAmino(object: _29.GetChainDescriptorResponseAmino): _29.GetChainDescriptorResponse;
                    toAmino(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetChainDescriptorResponseAminoMsg): _29.GetChainDescriptorResponse;
                    toAminoMsg(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetChainDescriptorResponseProtoMsg): _29.GetChainDescriptorResponse;
                    toProto(message: _29.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetChainDescriptorResponse): _29.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_29.GetCodecDescriptorRequest>): _29.GetCodecDescriptorRequest;
                    fromAmino(_: _29.GetCodecDescriptorRequestAmino): _29.GetCodecDescriptorRequest;
                    toAmino(_: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetCodecDescriptorRequestAminoMsg): _29.GetCodecDescriptorRequest;
                    toAminoMsg(message: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetCodecDescriptorRequestProtoMsg): _29.GetCodecDescriptorRequest;
                    toProto(message: _29.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetCodecDescriptorRequest): _29.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_29.GetCodecDescriptorResponse>): _29.GetCodecDescriptorResponse;
                    fromAmino(object: _29.GetCodecDescriptorResponseAmino): _29.GetCodecDescriptorResponse;
                    toAmino(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetCodecDescriptorResponseAminoMsg): _29.GetCodecDescriptorResponse;
                    toAminoMsg(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetCodecDescriptorResponseProtoMsg): _29.GetCodecDescriptorResponse;
                    toProto(message: _29.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetCodecDescriptorResponse): _29.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_29.GetConfigurationDescriptorRequest>): _29.GetConfigurationDescriptorRequest;
                    fromAmino(_: _29.GetConfigurationDescriptorRequestAmino): _29.GetConfigurationDescriptorRequest;
                    toAmino(_: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetConfigurationDescriptorRequestAminoMsg): _29.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetConfigurationDescriptorRequestProtoMsg): _29.GetConfigurationDescriptorRequest;
                    toProto(message: _29.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetConfigurationDescriptorRequest): _29.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_29.GetConfigurationDescriptorResponse>): _29.GetConfigurationDescriptorResponse;
                    fromAmino(object: _29.GetConfigurationDescriptorResponseAmino): _29.GetConfigurationDescriptorResponse;
                    toAmino(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetConfigurationDescriptorResponseAminoMsg): _29.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetConfigurationDescriptorResponseProtoMsg): _29.GetConfigurationDescriptorResponse;
                    toProto(message: _29.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetConfigurationDescriptorResponse): _29.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_29.GetQueryServicesDescriptorRequest>): _29.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _29.GetQueryServicesDescriptorRequestAmino): _29.GetQueryServicesDescriptorRequest;
                    toAmino(_: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetQueryServicesDescriptorRequestAminoMsg): _29.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetQueryServicesDescriptorRequestProtoMsg): _29.GetQueryServicesDescriptorRequest;
                    toProto(message: _29.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetQueryServicesDescriptorRequest): _29.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_29.GetQueryServicesDescriptorResponse>): _29.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _29.GetQueryServicesDescriptorResponseAmino): _29.GetQueryServicesDescriptorResponse;
                    toAmino(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetQueryServicesDescriptorResponseAminoMsg): _29.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetQueryServicesDescriptorResponseProtoMsg): _29.GetQueryServicesDescriptorResponse;
                    toProto(message: _29.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetQueryServicesDescriptorResponse): _29.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _29.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _29.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_29.GetTxDescriptorRequest>): _29.GetTxDescriptorRequest;
                    fromAmino(_: _29.GetTxDescriptorRequestAmino): _29.GetTxDescriptorRequest;
                    toAmino(_: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _29.GetTxDescriptorRequestAminoMsg): _29.GetTxDescriptorRequest;
                    toAminoMsg(message: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _29.GetTxDescriptorRequestProtoMsg): _29.GetTxDescriptorRequest;
                    toProto(message: _29.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _29.GetTxDescriptorRequest): _29.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _29.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_29.GetTxDescriptorResponse>): _29.GetTxDescriptorResponse;
                    fromAmino(object: _29.GetTxDescriptorResponseAmino): _29.GetTxDescriptorResponse;
                    toAmino(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _29.GetTxDescriptorResponseAminoMsg): _29.GetTxDescriptorResponse;
                    toAminoMsg(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _29.GetTxDescriptorResponseProtoMsg): _29.GetTxDescriptorResponse;
                    toProto(message: _29.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _29.GetTxDescriptorResponse): _29.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.QueryServicesDescriptor;
                    fromPartial(object: Partial<_29.QueryServicesDescriptor>): _29.QueryServicesDescriptor;
                    fromAmino(object: _29.QueryServicesDescriptorAmino): _29.QueryServicesDescriptor;
                    toAmino(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _29.QueryServicesDescriptorAminoMsg): _29.QueryServicesDescriptor;
                    toAminoMsg(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryServicesDescriptorProtoMsg): _29.QueryServicesDescriptor;
                    toProto(message: _29.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryServicesDescriptor): _29.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.QueryServiceDescriptor;
                    fromPartial(object: Partial<_29.QueryServiceDescriptor>): _29.QueryServiceDescriptor;
                    fromAmino(object: _29.QueryServiceDescriptorAmino): _29.QueryServiceDescriptor;
                    toAmino(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _29.QueryServiceDescriptorAminoMsg): _29.QueryServiceDescriptor;
                    toAminoMsg(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryServiceDescriptorProtoMsg): _29.QueryServiceDescriptor;
                    toProto(message: _29.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryServiceDescriptor): _29.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _29.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _29.QueryMethodDescriptor;
                    fromPartial(object: Partial<_29.QueryMethodDescriptor>): _29.QueryMethodDescriptor;
                    fromAmino(object: _29.QueryMethodDescriptorAmino): _29.QueryMethodDescriptor;
                    toAmino(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _29.QueryMethodDescriptorAminoMsg): _29.QueryMethodDescriptor;
                    toAminoMsg(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _29.QueryMethodDescriptorProtoMsg): _29.QueryMethodDescriptor;
                    toProto(message: _29.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _29.QueryMethodDescriptor): _29.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _30.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Snapshot;
                    fromPartial(object: Partial<_30.Snapshot>): _30.Snapshot;
                    fromAmino(object: _30.SnapshotAmino): _30.Snapshot;
                    toAmino(message: _30.Snapshot): _30.SnapshotAmino;
                    fromAminoMsg(object: _30.SnapshotAminoMsg): _30.Snapshot;
                    toAminoMsg(message: _30.Snapshot): _30.SnapshotAminoMsg;
                    fromProtoMsg(message: _30.SnapshotProtoMsg): _30.Snapshot;
                    toProto(message: _30.Snapshot): Uint8Array;
                    toProtoMsg(message: _30.Snapshot): _30.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _30.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Metadata;
                    fromPartial(object: Partial<_30.Metadata>): _30.Metadata;
                    fromAmino(object: _30.MetadataAmino): _30.Metadata;
                    toAmino(message: _30.Metadata): _30.MetadataAmino;
                    fromAminoMsg(object: _30.MetadataAminoMsg): _30.Metadata;
                    toAminoMsg(message: _30.Metadata): _30.MetadataAminoMsg;
                    fromProtoMsg(message: _30.MetadataProtoMsg): _30.Metadata;
                    toProto(message: _30.Metadata): Uint8Array;
                    toProtoMsg(message: _30.Metadata): _30.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotItem;
                    fromPartial(object: Partial<_30.SnapshotItem>): _30.SnapshotItem;
                    fromAmino(object: _30.SnapshotItemAmino): _30.SnapshotItem;
                    toAmino(message: _30.SnapshotItem): _30.SnapshotItemAmino;
                    fromAminoMsg(object: _30.SnapshotItemAminoMsg): _30.SnapshotItem;
                    toAminoMsg(message: _30.SnapshotItem): _30.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotItemProtoMsg): _30.SnapshotItem;
                    toProto(message: _30.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotItem): _30.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotStoreItem;
                    fromPartial(object: Partial<_30.SnapshotStoreItem>): _30.SnapshotStoreItem;
                    fromAmino(object: _30.SnapshotStoreItemAmino): _30.SnapshotStoreItem;
                    toAmino(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _30.SnapshotStoreItemAminoMsg): _30.SnapshotStoreItem;
                    toAminoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotStoreItemProtoMsg): _30.SnapshotStoreItem;
                    toProto(message: _30.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotStoreItem): _30.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotIAVLItem;
                    fromPartial(object: Partial<_30.SnapshotIAVLItem>): _30.SnapshotIAVLItem;
                    fromAmino(object: _30.SnapshotIAVLItemAmino): _30.SnapshotIAVLItem;
                    toAmino(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _30.SnapshotIAVLItemAminoMsg): _30.SnapshotIAVLItem;
                    toAminoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotIAVLItemProtoMsg): _30.SnapshotIAVLItem;
                    toProto(message: _30.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotIAVLItem): _30.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _30.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_30.SnapshotExtensionMeta>): _30.SnapshotExtensionMeta;
                    fromAmino(object: _30.SnapshotExtensionMetaAmino): _30.SnapshotExtensionMeta;
                    toAmino(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _30.SnapshotExtensionMetaAminoMsg): _30.SnapshotExtensionMeta;
                    toAminoMsg(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _30.SnapshotExtensionMetaProtoMsg): _30.SnapshotExtensionMeta;
                    toProto(message: _30.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _30.SnapshotExtensionMeta): _30.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _30.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_30.SnapshotExtensionPayload>): _30.SnapshotExtensionPayload;
                    fromAmino(object: _30.SnapshotExtensionPayloadAmino): _30.SnapshotExtensionPayload;
                    toAmino(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _30.SnapshotExtensionPayloadAminoMsg): _30.SnapshotExtensionPayload;
                    toAminoMsg(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _30.SnapshotExtensionPayloadProtoMsg): _30.SnapshotExtensionPayload;
                    toProto(message: _30.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _30.SnapshotExtensionPayload): _30.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _30.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotKVItem;
                    fromPartial(object: Partial<_30.SnapshotKVItem>): _30.SnapshotKVItem;
                    fromAmino(object: _30.SnapshotKVItemAmino): _30.SnapshotKVItem;
                    toAmino(message: _30.SnapshotKVItem): _30.SnapshotKVItemAmino;
                    fromAminoMsg(object: _30.SnapshotKVItemAminoMsg): _30.SnapshotKVItem;
                    toAminoMsg(message: _30.SnapshotKVItem): _30.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _30.SnapshotKVItemProtoMsg): _30.SnapshotKVItem;
                    toProto(message: _30.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _30.SnapshotKVItem): _30.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _30.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SnapshotSchema;
                    fromPartial(object: Partial<_30.SnapshotSchema>): _30.SnapshotSchema;
                    fromAmino(object: _30.SnapshotSchemaAmino): _30.SnapshotSchema;
                    toAmino(message: _30.SnapshotSchema): _30.SnapshotSchemaAmino;
                    fromAminoMsg(object: _30.SnapshotSchemaAminoMsg): _30.SnapshotSchema;
                    toAminoMsg(message: _30.SnapshotSchema): _30.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _30.SnapshotSchemaProtoMsg): _30.SnapshotSchema;
                    toProto(message: _30.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _30.SnapshotSchema): _30.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _32.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.StoreKVPair;
                    fromPartial(object: Partial<_32.StoreKVPair>): _32.StoreKVPair;
                    fromAmino(object: _32.StoreKVPairAmino): _32.StoreKVPair;
                    toAmino(message: _32.StoreKVPair): _32.StoreKVPairAmino;
                    fromAminoMsg(object: _32.StoreKVPairAminoMsg): _32.StoreKVPair;
                    toAminoMsg(message: _32.StoreKVPair): _32.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _32.StoreKVPairProtoMsg): _32.StoreKVPair;
                    toProto(message: _32.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _32.StoreKVPair): _32.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _32.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.BlockMetadata;
                    fromPartial(object: Partial<_32.BlockMetadata>): _32.BlockMetadata;
                    fromAmino(object: _32.BlockMetadataAmino): _32.BlockMetadata;
                    toAmino(message: _32.BlockMetadata): _32.BlockMetadataAmino;
                    fromAminoMsg(object: _32.BlockMetadataAminoMsg): _32.BlockMetadata;
                    toAminoMsg(message: _32.BlockMetadata): _32.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _32.BlockMetadataProtoMsg): _32.BlockMetadata;
                    toProto(message: _32.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _32.BlockMetadata): _32.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _32.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_32.BlockMetadata_DeliverTx>): _32.BlockMetadata_DeliverTx;
                    fromAmino(object: _32.BlockMetadata_DeliverTxAmino): _32.BlockMetadata_DeliverTx;
                    toAmino(message: _32.BlockMetadata_DeliverTx): _32.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _32.BlockMetadata_DeliverTxAminoMsg): _32.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _32.BlockMetadata_DeliverTx): _32.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _32.BlockMetadata_DeliverTxProtoMsg): _32.BlockMetadata_DeliverTx;
                    toProto(message: _32.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _32.BlockMetadata_DeliverTx): _32.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _31.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.CommitInfo;
                    fromPartial(object: Partial<_31.CommitInfo>): _31.CommitInfo;
                    fromAmino(object: _31.CommitInfoAmino): _31.CommitInfo;
                    toAmino(message: _31.CommitInfo): _31.CommitInfoAmino;
                    fromAminoMsg(object: _31.CommitInfoAminoMsg): _31.CommitInfo;
                    toAminoMsg(message: _31.CommitInfo): _31.CommitInfoAminoMsg;
                    fromProtoMsg(message: _31.CommitInfoProtoMsg): _31.CommitInfo;
                    toProto(message: _31.CommitInfo): Uint8Array;
                    toProtoMsg(message: _31.CommitInfo): _31.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _31.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.StoreInfo;
                    fromPartial(object: Partial<_31.StoreInfo>): _31.StoreInfo;
                    fromAmino(object: _31.StoreInfoAmino): _31.StoreInfo;
                    toAmino(message: _31.StoreInfo): _31.StoreInfoAmino;
                    fromAminoMsg(object: _31.StoreInfoAminoMsg): _31.StoreInfo;
                    toAminoMsg(message: _31.StoreInfo): _31.StoreInfoAminoMsg;
                    fromProtoMsg(message: _31.StoreInfoProtoMsg): _31.StoreInfo;
                    toProto(message: _31.StoreInfo): Uint8Array;
                    toProtoMsg(message: _31.StoreInfo): _31.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _31.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.CommitID;
                    fromPartial(object: Partial<_31.CommitID>): _31.CommitID;
                    fromAmino(object: _31.CommitIDAmino): _31.CommitID;
                    toAmino(message: _31.CommitID): _31.CommitIDAmino;
                    fromAminoMsg(object: _31.CommitIDAminoMsg): _31.CommitID;
                    toAminoMsg(message: _31.CommitID): _31.CommitIDAminoMsg;
                    fromProtoMsg(message: _31.CommitIDProtoMsg): _31.CommitID;
                    toProto(message: _31.CommitID): Uint8Array;
                    toProtoMsg(message: _31.CommitID): _31.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _205.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                    getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                    getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                    getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _33.ABCIQueryRequest): Promise<_33.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _184.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _34.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Block;
                    fromPartial(object: Partial<_34.Block>): _34.Block;
                    fromAmino(object: _34.BlockAmino): _34.Block;
                    toAmino(message: _34.Block): _34.BlockAmino;
                    fromAminoMsg(object: _34.BlockAminoMsg): _34.Block;
                    toAminoMsg(message: _34.Block): _34.BlockAminoMsg;
                    fromProtoMsg(message: _34.BlockProtoMsg): _34.Block;
                    toProto(message: _34.Block): Uint8Array;
                    toProtoMsg(message: _34.Block): _34.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _34.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Header;
                    fromPartial(object: Partial<_34.Header>): _34.Header;
                    fromAmino(object: _34.HeaderAmino): _34.Header;
                    toAmino(message: _34.Header): _34.HeaderAmino;
                    fromAminoMsg(object: _34.HeaderAminoMsg): _34.Header;
                    toAminoMsg(message: _34.Header): _34.HeaderAminoMsg;
                    fromProtoMsg(message: _34.HeaderProtoMsg): _34.Header;
                    toProto(message: _34.Header): Uint8Array;
                    toProtoMsg(message: _34.Header): _34.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _33.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightRequest>): _33.GetValidatorSetByHeightRequest;
                    fromAmino(object: _33.GetValidatorSetByHeightRequestAmino): _33.GetValidatorSetByHeightRequest;
                    toAmino(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _33.GetValidatorSetByHeightRequestAminoMsg): _33.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _33.GetValidatorSetByHeightRequestProtoMsg): _33.GetValidatorSetByHeightRequest;
                    toProto(message: _33.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _33.GetValidatorSetByHeightRequest): _33.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _33.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_33.GetValidatorSetByHeightResponse>): _33.GetValidatorSetByHeightResponse;
                    fromAmino(object: _33.GetValidatorSetByHeightResponseAmino): _33.GetValidatorSetByHeightResponse;
                    toAmino(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _33.GetValidatorSetByHeightResponseAminoMsg): _33.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _33.GetValidatorSetByHeightResponseProtoMsg): _33.GetValidatorSetByHeightResponse;
                    toProto(message: _33.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _33.GetValidatorSetByHeightResponse): _33.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _33.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetRequest>): _33.GetLatestValidatorSetRequest;
                    fromAmino(object: _33.GetLatestValidatorSetRequestAmino): _33.GetLatestValidatorSetRequest;
                    toAmino(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _33.GetLatestValidatorSetRequestAminoMsg): _33.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _33.GetLatestValidatorSetRequestProtoMsg): _33.GetLatestValidatorSetRequest;
                    toProto(message: _33.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _33.GetLatestValidatorSetRequest): _33.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _33.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_33.GetLatestValidatorSetResponse>): _33.GetLatestValidatorSetResponse;
                    fromAmino(object: _33.GetLatestValidatorSetResponseAmino): _33.GetLatestValidatorSetResponse;
                    toAmino(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _33.GetLatestValidatorSetResponseAminoMsg): _33.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _33.GetLatestValidatorSetResponseProtoMsg): _33.GetLatestValidatorSetResponse;
                    toProto(message: _33.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _33.GetLatestValidatorSetResponse): _33.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _33.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.Validator;
                    fromPartial(object: Partial<_33.Validator>): _33.Validator;
                    fromAmino(object: _33.ValidatorAmino): _33.Validator;
                    toAmino(message: _33.Validator): _33.ValidatorAmino;
                    fromAminoMsg(object: _33.ValidatorAminoMsg): _33.Validator;
                    toAminoMsg(message: _33.Validator): _33.ValidatorAminoMsg;
                    fromProtoMsg(message: _33.ValidatorProtoMsg): _33.Validator;
                    toProto(message: _33.Validator): Uint8Array;
                    toProtoMsg(message: _33.Validator): _33.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _33.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_33.GetBlockByHeightRequest>): _33.GetBlockByHeightRequest;
                    fromAmino(object: _33.GetBlockByHeightRequestAmino): _33.GetBlockByHeightRequest;
                    toAmino(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _33.GetBlockByHeightRequestAminoMsg): _33.GetBlockByHeightRequest;
                    toAminoMsg(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _33.GetBlockByHeightRequestProtoMsg): _33.GetBlockByHeightRequest;
                    toProto(message: _33.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _33.GetBlockByHeightRequest): _33.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _33.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_33.GetBlockByHeightResponse>): _33.GetBlockByHeightResponse;
                    fromAmino(object: _33.GetBlockByHeightResponseAmino): _33.GetBlockByHeightResponse;
                    toAmino(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _33.GetBlockByHeightResponseAminoMsg): _33.GetBlockByHeightResponse;
                    toAminoMsg(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _33.GetBlockByHeightResponseProtoMsg): _33.GetBlockByHeightResponse;
                    toProto(message: _33.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _33.GetBlockByHeightResponse): _33.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _33.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetLatestBlockRequest;
                    fromPartial(_: Partial<_33.GetLatestBlockRequest>): _33.GetLatestBlockRequest;
                    fromAmino(_: _33.GetLatestBlockRequestAmino): _33.GetLatestBlockRequest;
                    toAmino(_: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _33.GetLatestBlockRequestAminoMsg): _33.GetLatestBlockRequest;
                    toAminoMsg(message: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _33.GetLatestBlockRequestProtoMsg): _33.GetLatestBlockRequest;
                    toProto(message: _33.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _33.GetLatestBlockRequest): _33.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _33.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetLatestBlockResponse;
                    fromPartial(object: Partial<_33.GetLatestBlockResponse>): _33.GetLatestBlockResponse;
                    fromAmino(object: _33.GetLatestBlockResponseAmino): _33.GetLatestBlockResponse;
                    toAmino(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _33.GetLatestBlockResponseAminoMsg): _33.GetLatestBlockResponse;
                    toAminoMsg(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _33.GetLatestBlockResponseProtoMsg): _33.GetLatestBlockResponse;
                    toProto(message: _33.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _33.GetLatestBlockResponse): _33.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _33.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetSyncingRequest;
                    fromPartial(_: Partial<_33.GetSyncingRequest>): _33.GetSyncingRequest;
                    fromAmino(_: _33.GetSyncingRequestAmino): _33.GetSyncingRequest;
                    toAmino(_: _33.GetSyncingRequest): _33.GetSyncingRequestAmino;
                    fromAminoMsg(object: _33.GetSyncingRequestAminoMsg): _33.GetSyncingRequest;
                    toAminoMsg(message: _33.GetSyncingRequest): _33.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _33.GetSyncingRequestProtoMsg): _33.GetSyncingRequest;
                    toProto(message: _33.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _33.GetSyncingRequest): _33.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _33.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetSyncingResponse;
                    fromPartial(object: Partial<_33.GetSyncingResponse>): _33.GetSyncingResponse;
                    fromAmino(object: _33.GetSyncingResponseAmino): _33.GetSyncingResponse;
                    toAmino(message: _33.GetSyncingResponse): _33.GetSyncingResponseAmino;
                    fromAminoMsg(object: _33.GetSyncingResponseAminoMsg): _33.GetSyncingResponse;
                    toAminoMsg(message: _33.GetSyncingResponse): _33.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _33.GetSyncingResponseProtoMsg): _33.GetSyncingResponse;
                    toProto(message: _33.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _33.GetSyncingResponse): _33.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _33.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _33.GetNodeInfoRequest;
                    fromPartial(_: Partial<_33.GetNodeInfoRequest>): _33.GetNodeInfoRequest;
                    fromAmino(_: _33.GetNodeInfoRequestAmino): _33.GetNodeInfoRequest;
                    toAmino(_: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _33.GetNodeInfoRequestAminoMsg): _33.GetNodeInfoRequest;
                    toAminoMsg(message: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _33.GetNodeInfoRequestProtoMsg): _33.GetNodeInfoRequest;
                    toProto(message: _33.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _33.GetNodeInfoRequest): _33.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _33.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.GetNodeInfoResponse;
                    fromPartial(object: Partial<_33.GetNodeInfoResponse>): _33.GetNodeInfoResponse;
                    fromAmino(object: _33.GetNodeInfoResponseAmino): _33.GetNodeInfoResponse;
                    toAmino(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _33.GetNodeInfoResponseAminoMsg): _33.GetNodeInfoResponse;
                    toAminoMsg(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _33.GetNodeInfoResponseProtoMsg): _33.GetNodeInfoResponse;
                    toProto(message: _33.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _33.GetNodeInfoResponse): _33.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _33.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.VersionInfo;
                    fromPartial(object: Partial<_33.VersionInfo>): _33.VersionInfo;
                    fromAmino(object: _33.VersionInfoAmino): _33.VersionInfo;
                    toAmino(message: _33.VersionInfo): _33.VersionInfoAmino;
                    fromAminoMsg(object: _33.VersionInfoAminoMsg): _33.VersionInfo;
                    toAminoMsg(message: _33.VersionInfo): _33.VersionInfoAminoMsg;
                    fromProtoMsg(message: _33.VersionInfoProtoMsg): _33.VersionInfo;
                    toProto(message: _33.VersionInfo): Uint8Array;
                    toProtoMsg(message: _33.VersionInfo): _33.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _33.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.Module;
                    fromPartial(object: Partial<_33.Module>): _33.Module;
                    fromAmino(object: _33.ModuleAmino): _33.Module;
                    toAmino(message: _33.Module): _33.ModuleAmino;
                    fromAminoMsg(object: _33.ModuleAminoMsg): _33.Module;
                    toAminoMsg(message: _33.Module): _33.ModuleAminoMsg;
                    fromProtoMsg(message: _33.ModuleProtoMsg): _33.Module;
                    toProto(message: _33.Module): Uint8Array;
                    toProtoMsg(message: _33.Module): _33.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _33.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ABCIQueryRequest;
                    fromPartial(object: Partial<_33.ABCIQueryRequest>): _33.ABCIQueryRequest;
                    fromAmino(object: _33.ABCIQueryRequestAmino): _33.ABCIQueryRequest;
                    toAmino(message: _33.ABCIQueryRequest): _33.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _33.ABCIQueryRequestAminoMsg): _33.ABCIQueryRequest;
                    toAminoMsg(message: _33.ABCIQueryRequest): _33.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _33.ABCIQueryRequestProtoMsg): _33.ABCIQueryRequest;
                    toProto(message: _33.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _33.ABCIQueryRequest): _33.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _33.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ABCIQueryResponse;
                    fromPartial(object: Partial<_33.ABCIQueryResponse>): _33.ABCIQueryResponse;
                    fromAmino(object: _33.ABCIQueryResponseAmino): _33.ABCIQueryResponse;
                    toAmino(message: _33.ABCIQueryResponse): _33.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _33.ABCIQueryResponseAminoMsg): _33.ABCIQueryResponse;
                    toAminoMsg(message: _33.ABCIQueryResponse): _33.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _33.ABCIQueryResponseProtoMsg): _33.ABCIQueryResponse;
                    toProto(message: _33.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _33.ABCIQueryResponse): _33.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _33.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ProofOp;
                    fromPartial(object: Partial<_33.ProofOp>): _33.ProofOp;
                    fromAmino(object: _33.ProofOpAmino): _33.ProofOp;
                    toAmino(message: _33.ProofOp): _33.ProofOpAmino;
                    fromAminoMsg(object: _33.ProofOpAminoMsg): _33.ProofOp;
                    toAminoMsg(message: _33.ProofOp): _33.ProofOpAminoMsg;
                    fromProtoMsg(message: _33.ProofOpProtoMsg): _33.ProofOp;
                    toProto(message: _33.ProofOp): Uint8Array;
                    toProtoMsg(message: _33.ProofOp): _33.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _33.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.ProofOps;
                    fromPartial(object: Partial<_33.ProofOps>): _33.ProofOps;
                    fromAmino(object: _33.ProofOpsAmino): _33.ProofOps;
                    toAmino(message: _33.ProofOps): _33.ProofOpsAmino;
                    fromAminoMsg(object: _33.ProofOpsAminoMsg): _33.ProofOps;
                    toAminoMsg(message: _33.ProofOps): _33.ProofOpsAminoMsg;
                    fromProtoMsg(message: _33.ProofOpsProtoMsg): _33.ProofOps;
                    toProto(message: _33.ProofOps): Uint8Array;
                    toProtoMsg(message: _33.ProofOps): _33.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _35.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Coin;
                fromPartial(object: Partial<_35.Coin>): _35.Coin;
                fromAmino(object: _35.CoinAmino): _35.Coin;
                toAmino(message: _35.Coin): _35.CoinAmino;
                fromAminoMsg(object: _35.CoinAminoMsg): _35.Coin;
                toAminoMsg(message: _35.Coin): _35.CoinAminoMsg;
                fromProtoMsg(message: _35.CoinProtoMsg): _35.Coin;
                toProto(message: _35.Coin): Uint8Array;
                toProtoMsg(message: _35.Coin): _35.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _35.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DecCoin;
                fromPartial(object: Partial<_35.DecCoin>): _35.DecCoin;
                fromAmino(object: _35.DecCoinAmino): _35.DecCoin;
                toAmino(message: _35.DecCoin): _35.DecCoinAmino;
                fromAminoMsg(object: _35.DecCoinAminoMsg): _35.DecCoin;
                toAminoMsg(message: _35.DecCoin): _35.DecCoinAminoMsg;
                fromProtoMsg(message: _35.DecCoinProtoMsg): _35.DecCoin;
                toProto(message: _35.DecCoin): Uint8Array;
                toProtoMsg(message: _35.DecCoin): _35.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _35.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.IntProto;
                fromPartial(object: Partial<_35.IntProto>): _35.IntProto;
                fromAmino(object: _35.IntProtoAmino): _35.IntProto;
                toAmino(message: _35.IntProto): _35.IntProtoAmino;
                fromAminoMsg(object: _35.IntProtoAminoMsg): _35.IntProto;
                toAminoMsg(message: _35.IntProto): _35.IntProtoAminoMsg;
                fromProtoMsg(message: _35.IntProtoProtoMsg): _35.IntProto;
                toProto(message: _35.IntProto): Uint8Array;
                toProtoMsg(message: _35.IntProto): _35.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _35.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DecProto;
                fromPartial(object: Partial<_35.DecProto>): _35.DecProto;
                fromAmino(object: _35.DecProtoAmino): _35.DecProto;
                toAmino(message: _35.DecProto): _35.DecProtoAmino;
                fromAminoMsg(object: _35.DecProtoAminoMsg): _35.DecProto;
                toAminoMsg(message: _35.DecProto): _35.DecProtoAminoMsg;
                fromProtoMsg(message: _35.DecProtoProtoMsg): _35.DecProto;
                toProto(message: _35.DecProto): Uint8Array;
                toProtoMsg(message: _35.DecProto): _35.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _36.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Module;
                    fromPartial(object: Partial<_36.Module>): _36.Module;
                    fromAmino(object: _36.ModuleAmino): _36.Module;
                    toAmino(message: _36.Module): _36.ModuleAmino;
                    fromAminoMsg(object: _36.ModuleAminoMsg): _36.Module;
                    toAminoMsg(message: _36.Module): _36.ModuleAminoMsg;
                    fromProtoMsg(message: _36.ModuleProtoMsg): _36.Module;
                    toProto(message: _36.Module): Uint8Array;
                    toProtoMsg(message: _36.Module): _36.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _38.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisOwners;
                fromPartial(object: Partial<_38.GenesisOwners>): _38.GenesisOwners;
                fromAmino(object: _38.GenesisOwnersAmino): _38.GenesisOwners;
                toAmino(message: _38.GenesisOwners): _38.GenesisOwnersAmino;
                fromAminoMsg(object: _38.GenesisOwnersAminoMsg): _38.GenesisOwners;
                toAminoMsg(message: _38.GenesisOwners): _38.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _38.GenesisOwnersProtoMsg): _38.GenesisOwners;
                toProto(message: _38.GenesisOwners): Uint8Array;
                toProtoMsg(message: _38.GenesisOwners): _38.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                toAminoMsg(message: _38.GenesisState): _38.GenesisStateAminoMsg;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _37.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Capability;
                fromPartial(object: Partial<_37.Capability>): _37.Capability;
                fromAmino(object: _37.CapabilityAmino): _37.Capability;
                toAmino(message: _37.Capability): _37.CapabilityAmino;
                fromAminoMsg(object: _37.CapabilityAminoMsg): _37.Capability;
                toAminoMsg(message: _37.Capability): _37.CapabilityAminoMsg;
                fromProtoMsg(message: _37.CapabilityProtoMsg): _37.Capability;
                toProto(message: _37.Capability): Uint8Array;
                toProtoMsg(message: _37.Capability): _37.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _37.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Owner;
                fromPartial(object: Partial<_37.Owner>): _37.Owner;
                fromAmino(object: _37.OwnerAmino): _37.Owner;
                toAmino(message: _37.Owner): _37.OwnerAmino;
                fromAminoMsg(object: _37.OwnerAminoMsg): _37.Owner;
                toAminoMsg(message: _37.Owner): _37.OwnerAminoMsg;
                fromProtoMsg(message: _37.OwnerProtoMsg): _37.Owner;
                toProto(message: _37.Owner): Uint8Array;
                toProtoMsg(message: _37.Owner): _37.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _37.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.CapabilityOwners;
                fromPartial(object: Partial<_37.CapabilityOwners>): _37.CapabilityOwners;
                fromAmino(object: _37.CapabilityOwnersAmino): _37.CapabilityOwners;
                toAmino(message: _37.CapabilityOwners): _37.CapabilityOwnersAmino;
                fromAminoMsg(object: _37.CapabilityOwnersAminoMsg): _37.CapabilityOwners;
                toAminoMsg(message: _37.CapabilityOwners): _37.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _37.CapabilityOwnersProtoMsg): _37.CapabilityOwners;
                toProto(message: _37.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _37.CapabilityOwners): _37.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _39.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Module;
                    fromPartial(object: Partial<_39.Module>): _39.Module;
                    fromAmino(object: _39.ModuleAmino): _39.Module;
                    toAmino(message: _39.Module): _39.ModuleAmino;
                    fromAminoMsg(object: _39.ModuleAminoMsg): _39.Module;
                    toAminoMsg(message: _39.Module): _39.ModuleAminoMsg;
                    fromProtoMsg(message: _39.ModuleProtoMsg): _39.Module;
                    toProto(message: _39.Module): Uint8Array;
                    toProtoMsg(message: _39.Module): _39.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _41.MsgUpdateParams) => _41.MsgUpdateParamsAmino;
                    fromAmino: (object: _41.MsgUpdateParamsAmino) => _41.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _41.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgUpdateParams;
                fromPartial(object: Partial<_41.MsgUpdateParams>): _41.MsgUpdateParams;
                fromAmino(object: _41.MsgUpdateParamsAmino): _41.MsgUpdateParams;
                toAmino(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsAminoMsg): _41.MsgUpdateParams;
                toAminoMsg(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _41.MsgUpdateParamsProtoMsg): _41.MsgUpdateParams;
                toProto(message: _41.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParams): _41.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _41.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_41.MsgUpdateParamsResponse>): _41.MsgUpdateParamsResponse;
                fromAmino(_: _41.MsgUpdateParamsResponseAmino): _41.MsgUpdateParamsResponse;
                toAmino(_: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsResponseAminoMsg): _41.MsgUpdateParamsResponse;
                toAminoMsg(message: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _41.MsgUpdateParamsResponseProtoMsg): _41.MsgUpdateParamsResponse;
                toProto(message: _41.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                toAminoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _40.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                toAminoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
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
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _44.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                    updateParams(value: _44.MsgUpdateParams): {
                        typeUrl: string;
                        value: _44.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _44.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                    updateParams(value: _44.MsgUpdateParams): {
                        typeUrl: string;
                        value: _44.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _44.MsgVerifyInvariant) => _44.MsgVerifyInvariantAmino;
                    fromAmino: (object: _44.MsgVerifyInvariantAmino) => _44.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _44.MsgUpdateParams) => _44.MsgUpdateParamsAmino;
                    fromAmino: (object: _44.MsgUpdateParamsAmino) => _44.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _44.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgVerifyInvariant;
                fromPartial(object: Partial<_44.MsgVerifyInvariant>): _44.MsgVerifyInvariant;
                fromAmino(object: _44.MsgVerifyInvariantAmino): _44.MsgVerifyInvariant;
                toAmino(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _44.MsgVerifyInvariantAminoMsg): _44.MsgVerifyInvariant;
                toAminoMsg(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _44.MsgVerifyInvariantProtoMsg): _44.MsgVerifyInvariant;
                toProto(message: _44.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _44.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_44.MsgVerifyInvariantResponse>): _44.MsgVerifyInvariantResponse;
                fromAmino(_: _44.MsgVerifyInvariantResponseAmino): _44.MsgVerifyInvariantResponse;
                toAmino(_: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _44.MsgVerifyInvariantResponseAminoMsg): _44.MsgVerifyInvariantResponse;
                toAminoMsg(message: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _44.MsgVerifyInvariantResponseProtoMsg): _44.MsgVerifyInvariantResponse;
                toProto(message: _44.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _44.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgUpdateParams;
                fromPartial(object: Partial<_44.MsgUpdateParams>): _44.MsgUpdateParams;
                fromAmino(object: _44.MsgUpdateParamsAmino): _44.MsgUpdateParams;
                toAmino(message: _44.MsgUpdateParams): _44.MsgUpdateParamsAmino;
                fromAminoMsg(object: _44.MsgUpdateParamsAminoMsg): _44.MsgUpdateParams;
                toAminoMsg(message: _44.MsgUpdateParams): _44.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _44.MsgUpdateParamsProtoMsg): _44.MsgUpdateParams;
                toProto(message: _44.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _44.MsgUpdateParams): _44.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _44.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_44.MsgUpdateParamsResponse>): _44.MsgUpdateParamsResponse;
                fromAmino(_: _44.MsgUpdateParamsResponseAmino): _44.MsgUpdateParamsResponse;
                toAmino(_: _44.MsgUpdateParamsResponse): _44.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _44.MsgUpdateParamsResponseAminoMsg): _44.MsgUpdateParamsResponse;
                toAminoMsg(message: _44.MsgUpdateParamsResponse): _44.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _44.MsgUpdateParamsResponseProtoMsg): _44.MsgUpdateParamsResponse;
                toProto(message: _44.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _44.MsgUpdateParamsResponse): _44.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _43.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
                fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
                toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
                fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
                toAminoMsg(message: _43.GenesisState): _43.GenesisStateAminoMsg;
                fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
                toProto(message: _43.GenesisState): Uint8Array;
                toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _45.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.PubKey;
                fromPartial(object: Partial<_45.PubKey>): _45.PubKey;
                fromAmino(object: _45.PubKeyAmino): _45.PubKey;
                toAmino(message: _45.PubKey): _45.PubKeyAmino;
                fromAminoMsg(object: _45.PubKeyAminoMsg): _45.PubKey;
                toAminoMsg(message: _45.PubKey): _45.PubKeyAminoMsg;
                fromProtoMsg(message: _45.PubKeyProtoMsg): _45.PubKey;
                toProto(message: _45.PubKey): Uint8Array;
                toProtoMsg(message: _45.PubKey): _45.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _45.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.PrivKey;
                fromPartial(object: Partial<_45.PrivKey>): _45.PrivKey;
                fromAmino(object: _45.PrivKeyAmino): _45.PrivKey;
                toAmino(message: _45.PrivKey): _45.PrivKeyAmino;
                fromAminoMsg(object: _45.PrivKeyAminoMsg): _45.PrivKey;
                toAminoMsg(message: _45.PrivKey): _45.PrivKeyAminoMsg;
                fromProtoMsg(message: _45.PrivKeyProtoMsg): _45.PrivKey;
                toProto(message: _45.PrivKey): Uint8Array;
                toProtoMsg(message: _45.PrivKey): _45.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _46.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.BIP44Params;
                    fromPartial(object: Partial<_46.BIP44Params>): _46.BIP44Params;
                    fromAmino(object: _46.BIP44ParamsAmino): _46.BIP44Params;
                    toAmino(message: _46.BIP44Params): _46.BIP44ParamsAmino;
                    fromAminoMsg(object: _46.BIP44ParamsAminoMsg): _46.BIP44Params;
                    toAminoMsg(message: _46.BIP44Params): _46.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _46.BIP44ParamsProtoMsg): _46.BIP44Params;
                    toProto(message: _46.BIP44Params): Uint8Array;
                    toProtoMsg(message: _46.BIP44Params): _46.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _47.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Record;
                    fromPartial(object: Partial<_47.Record>): _47.Record;
                    fromAmino(object: _47.RecordAmino): _47.Record;
                    toAmino(message: _47.Record): _47.RecordAmino;
                    fromAminoMsg(object: _47.RecordAminoMsg): _47.Record;
                    toAminoMsg(message: _47.Record): _47.RecordAminoMsg;
                    fromProtoMsg(message: _47.RecordProtoMsg): _47.Record;
                    toProto(message: _47.Record): Uint8Array;
                    toProtoMsg(message: _47.Record): _47.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _47.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Record_Local;
                    fromPartial(object: Partial<_47.Record_Local>): _47.Record_Local;
                    fromAmino(object: _47.Record_LocalAmino): _47.Record_Local;
                    toAmino(message: _47.Record_Local): _47.Record_LocalAmino;
                    fromAminoMsg(object: _47.Record_LocalAminoMsg): _47.Record_Local;
                    toAminoMsg(message: _47.Record_Local): _47.Record_LocalAminoMsg;
                    fromProtoMsg(message: _47.Record_LocalProtoMsg): _47.Record_Local;
                    toProto(message: _47.Record_Local): Uint8Array;
                    toProtoMsg(message: _47.Record_Local): _47.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _47.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Record_Ledger;
                    fromPartial(object: Partial<_47.Record_Ledger>): _47.Record_Ledger;
                    fromAmino(object: _47.Record_LedgerAmino): _47.Record_Ledger;
                    toAmino(message: _47.Record_Ledger): _47.Record_LedgerAmino;
                    fromAminoMsg(object: _47.Record_LedgerAminoMsg): _47.Record_Ledger;
                    toAminoMsg(message: _47.Record_Ledger): _47.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _47.Record_LedgerProtoMsg): _47.Record_Ledger;
                    toProto(message: _47.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _47.Record_Ledger): _47.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _47.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.Record_Multi;
                    fromPartial(_: Partial<_47.Record_Multi>): _47.Record_Multi;
                    fromAmino(_: _47.Record_MultiAmino): _47.Record_Multi;
                    toAmino(_: _47.Record_Multi): _47.Record_MultiAmino;
                    fromAminoMsg(object: _47.Record_MultiAminoMsg): _47.Record_Multi;
                    toAminoMsg(message: _47.Record_Multi): _47.Record_MultiAminoMsg;
                    fromProtoMsg(message: _47.Record_MultiProtoMsg): _47.Record_Multi;
                    toProto(message: _47.Record_Multi): Uint8Array;
                    toProtoMsg(message: _47.Record_Multi): _47.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _47.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _47.Record_Offline;
                    fromPartial(_: Partial<_47.Record_Offline>): _47.Record_Offline;
                    fromAmino(_: _47.Record_OfflineAmino): _47.Record_Offline;
                    toAmino(_: _47.Record_Offline): _47.Record_OfflineAmino;
                    fromAminoMsg(object: _47.Record_OfflineAminoMsg): _47.Record_Offline;
                    toAminoMsg(message: _47.Record_Offline): _47.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _47.Record_OfflineProtoMsg): _47.Record_Offline;
                    toProto(message: _47.Record_Offline): Uint8Array;
                    toProtoMsg(message: _47.Record_Offline): _47.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _48.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.LegacyAminoPubKey;
                fromPartial(object: Partial<_48.LegacyAminoPubKey>): _48.LegacyAminoPubKey;
                fromAmino(object: _48.LegacyAminoPubKeyAmino): _48.LegacyAminoPubKey;
                toAmino(message: _48.LegacyAminoPubKey): _48.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _48.LegacyAminoPubKeyAminoMsg): _48.LegacyAminoPubKey;
                toAminoMsg(message: _48.LegacyAminoPubKey): _48.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _48.LegacyAminoPubKeyProtoMsg): _48.LegacyAminoPubKey;
                toProto(message: _48.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _48.LegacyAminoPubKey): _48.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _50.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.PubKey;
                fromPartial(object: Partial<_50.PubKey>): _50.PubKey;
                fromAmino(object: _50.PubKeyAmino): _50.PubKey;
                toAmino(message: _50.PubKey): _50.PubKeyAmino;
                fromAminoMsg(object: _50.PubKeyAminoMsg): _50.PubKey;
                toAminoMsg(message: _50.PubKey): _50.PubKeyAminoMsg;
                fromProtoMsg(message: _50.PubKeyProtoMsg): _50.PubKey;
                toProto(message: _50.PubKey): Uint8Array;
                toProtoMsg(message: _50.PubKey): _50.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _50.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.PrivKey;
                fromPartial(object: Partial<_50.PrivKey>): _50.PrivKey;
                fromAmino(object: _50.PrivKeyAmino): _50.PrivKey;
                toAmino(message: _50.PrivKey): _50.PrivKeyAmino;
                fromAminoMsg(object: _50.PrivKeyAminoMsg): _50.PrivKey;
                toAminoMsg(message: _50.PrivKey): _50.PrivKeyAminoMsg;
                fromProtoMsg(message: _50.PrivKeyProtoMsg): _50.PrivKey;
                toProto(message: _50.PrivKey): Uint8Array;
                toProtoMsg(message: _50.PrivKey): _50.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
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
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                validatorDistributionInfo(request: _54.QueryValidatorDistributionInfoRequest): Promise<_54.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _54.QueryValidatorOutstandingRewardsRequest): Promise<_54.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _54.QueryValidatorCommissionRequest): Promise<_54.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _54.QueryValidatorSlashesRequest): Promise<_54.QueryValidatorSlashesResponse>;
                delegationRewards(request: _54.QueryDelegationRewardsRequest): Promise<_54.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _54.QueryDelegationTotalRewardsRequest): Promise<_54.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _54.QueryDelegatorValidatorsRequest): Promise<_54.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _54.QueryDelegatorWithdrawAddressRequest): Promise<_54.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _54.QueryCommunityPoolRequest): Promise<_54.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _55.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _55.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                    updateParams(value: _55.MsgUpdateParams): {
                        typeUrl: string;
                        value: _55.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _55.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _55.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _55.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _55.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                    updateParams(value: _55.MsgUpdateParams): {
                        typeUrl: string;
                        value: _55.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _55.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _55.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _55.MsgSetWithdrawAddress) => _55.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _55.MsgSetWithdrawAddressAmino) => _55.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawDelegatorReward) => _55.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _55.MsgWithdrawDelegatorRewardAmino) => _55.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawValidatorCommission) => _55.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _55.MsgWithdrawValidatorCommissionAmino) => _55.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _55.MsgFundCommunityPool) => _55.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _55.MsgFundCommunityPoolAmino) => _55.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _55.MsgUpdateParams) => _55.MsgUpdateParamsAmino;
                    fromAmino: (object: _55.MsgUpdateParamsAmino) => _55.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _55.MsgCommunityPoolSpend) => _55.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _55.MsgCommunityPoolSpendAmino) => _55.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _55.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_55.MsgSetWithdrawAddress>): _55.MsgSetWithdrawAddress;
                fromAmino(object: _55.MsgSetWithdrawAddressAmino): _55.MsgSetWithdrawAddress;
                toAmino(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _55.MsgSetWithdrawAddressAminoMsg): _55.MsgSetWithdrawAddress;
                toAminoMsg(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _55.MsgSetWithdrawAddressProtoMsg): _55.MsgSetWithdrawAddress;
                toProto(message: _55.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _55.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_55.MsgSetWithdrawAddressResponse>): _55.MsgSetWithdrawAddressResponse;
                fromAmino(_: _55.MsgSetWithdrawAddressResponseAmino): _55.MsgSetWithdrawAddressResponse;
                toAmino(_: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _55.MsgSetWithdrawAddressResponseAminoMsg): _55.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _55.MsgSetWithdrawAddressResponseProtoMsg): _55.MsgSetWithdrawAddressResponse;
                toProto(message: _55.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_55.MsgWithdrawDelegatorReward>): _55.MsgWithdrawDelegatorReward;
                fromAmino(object: _55.MsgWithdrawDelegatorRewardAmino): _55.MsgWithdrawDelegatorReward;
                toAmino(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _55.MsgWithdrawDelegatorRewardAminoMsg): _55.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawDelegatorRewardProtoMsg): _55.MsgWithdrawDelegatorReward;
                toProto(message: _55.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_55.MsgWithdrawDelegatorRewardResponse>): _55.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _55.MsgWithdrawDelegatorRewardResponseAmino): _55.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawDelegatorRewardResponseAminoMsg): _55.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawDelegatorRewardResponseProtoMsg): _55.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _55.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_55.MsgWithdrawValidatorCommission>): _55.MsgWithdrawValidatorCommission;
                fromAmino(object: _55.MsgWithdrawValidatorCommissionAmino): _55.MsgWithdrawValidatorCommission;
                toAmino(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _55.MsgWithdrawValidatorCommissionAminoMsg): _55.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawValidatorCommissionProtoMsg): _55.MsgWithdrawValidatorCommission;
                toProto(message: _55.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_55.MsgWithdrawValidatorCommissionResponse>): _55.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _55.MsgWithdrawValidatorCommissionResponseAmino): _55.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawValidatorCommissionResponseAminoMsg): _55.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawValidatorCommissionResponseProtoMsg): _55.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _55.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _55.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgFundCommunityPool;
                fromPartial(object: Partial<_55.MsgFundCommunityPool>): _55.MsgFundCommunityPool;
                fromAmino(object: _55.MsgFundCommunityPoolAmino): _55.MsgFundCommunityPool;
                toAmino(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _55.MsgFundCommunityPoolAminoMsg): _55.MsgFundCommunityPool;
                toAminoMsg(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _55.MsgFundCommunityPoolProtoMsg): _55.MsgFundCommunityPool;
                toProto(message: _55.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _55.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_55.MsgFundCommunityPoolResponse>): _55.MsgFundCommunityPoolResponse;
                fromAmino(_: _55.MsgFundCommunityPoolResponseAmino): _55.MsgFundCommunityPoolResponse;
                toAmino(_: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _55.MsgFundCommunityPoolResponseAminoMsg): _55.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _55.MsgFundCommunityPoolResponseProtoMsg): _55.MsgFundCommunityPoolResponse;
                toProto(message: _55.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _55.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgUpdateParams;
                fromPartial(object: Partial<_55.MsgUpdateParams>): _55.MsgUpdateParams;
                fromAmino(object: _55.MsgUpdateParamsAmino): _55.MsgUpdateParams;
                toAmino(message: _55.MsgUpdateParams): _55.MsgUpdateParamsAmino;
                fromAminoMsg(object: _55.MsgUpdateParamsAminoMsg): _55.MsgUpdateParams;
                toAminoMsg(message: _55.MsgUpdateParams): _55.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _55.MsgUpdateParamsProtoMsg): _55.MsgUpdateParams;
                toProto(message: _55.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _55.MsgUpdateParams): _55.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _55.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_55.MsgUpdateParamsResponse>): _55.MsgUpdateParamsResponse;
                fromAmino(_: _55.MsgUpdateParamsResponseAmino): _55.MsgUpdateParamsResponse;
                toAmino(_: _55.MsgUpdateParamsResponse): _55.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _55.MsgUpdateParamsResponseAminoMsg): _55.MsgUpdateParamsResponse;
                toAminoMsg(message: _55.MsgUpdateParamsResponse): _55.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _55.MsgUpdateParamsResponseProtoMsg): _55.MsgUpdateParamsResponse;
                toProto(message: _55.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _55.MsgUpdateParamsResponse): _55.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _55.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_55.MsgCommunityPoolSpend>): _55.MsgCommunityPoolSpend;
                fromAmino(object: _55.MsgCommunityPoolSpendAmino): _55.MsgCommunityPoolSpend;
                toAmino(message: _55.MsgCommunityPoolSpend): _55.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _55.MsgCommunityPoolSpendAminoMsg): _55.MsgCommunityPoolSpend;
                toAminoMsg(message: _55.MsgCommunityPoolSpend): _55.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _55.MsgCommunityPoolSpendProtoMsg): _55.MsgCommunityPoolSpend;
                toProto(message: _55.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _55.MsgCommunityPoolSpend): _55.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _55.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_55.MsgCommunityPoolSpendResponse>): _55.MsgCommunityPoolSpendResponse;
                fromAmino(_: _55.MsgCommunityPoolSpendResponseAmino): _55.MsgCommunityPoolSpendResponse;
                toAmino(_: _55.MsgCommunityPoolSpendResponse): _55.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _55.MsgCommunityPoolSpendResponseAminoMsg): _55.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _55.MsgCommunityPoolSpendResponse): _55.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _55.MsgCommunityPoolSpendResponseProtoMsg): _55.MsgCommunityPoolSpendResponse;
                toProto(message: _55.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _55.MsgCommunityPoolSpendResponse): _55.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _54.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.QueryParamsRequest;
                fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
                fromAmino(_: _54.QueryParamsRequestAmino): _54.QueryParamsRequest;
                toAmino(_: _54.QueryParamsRequest): _54.QueryParamsRequestAmino;
                fromAminoMsg(object: _54.QueryParamsRequestAminoMsg): _54.QueryParamsRequest;
                toAminoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryParamsRequestProtoMsg): _54.QueryParamsRequest;
                toProto(message: _54.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _54.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
                fromAmino(object: _54.QueryParamsResponseAmino): _54.QueryParamsResponse;
                toAmino(message: _54.QueryParamsResponse): _54.QueryParamsResponseAmino;
                fromAminoMsg(object: _54.QueryParamsResponseAminoMsg): _54.QueryParamsResponse;
                toAminoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryParamsResponseProtoMsg): _54.QueryParamsResponse;
                toProto(message: _54.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_54.QueryValidatorDistributionInfoRequest>): _54.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _54.QueryValidatorDistributionInfoRequestAmino): _54.QueryValidatorDistributionInfoRequest;
                toAmino(message: _54.QueryValidatorDistributionInfoRequest): _54.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorDistributionInfoRequestAminoMsg): _54.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _54.QueryValidatorDistributionInfoRequest): _54.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorDistributionInfoRequestProtoMsg): _54.QueryValidatorDistributionInfoRequest;
                toProto(message: _54.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorDistributionInfoRequest): _54.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_54.QueryValidatorDistributionInfoResponse>): _54.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _54.QueryValidatorDistributionInfoResponseAmino): _54.QueryValidatorDistributionInfoResponse;
                toAmino(message: _54.QueryValidatorDistributionInfoResponse): _54.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorDistributionInfoResponseAminoMsg): _54.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _54.QueryValidatorDistributionInfoResponse): _54.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorDistributionInfoResponseProtoMsg): _54.QueryValidatorDistributionInfoResponse;
                toProto(message: _54.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorDistributionInfoResponse): _54.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_54.QueryValidatorOutstandingRewardsRequest>): _54.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _54.QueryValidatorOutstandingRewardsRequestAmino): _54.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorOutstandingRewardsRequestAminoMsg): _54.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorOutstandingRewardsRequestProtoMsg): _54.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _54.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_54.QueryValidatorOutstandingRewardsResponse>): _54.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _54.QueryValidatorOutstandingRewardsResponseAmino): _54.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorOutstandingRewardsResponseAminoMsg): _54.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorOutstandingRewardsResponseProtoMsg): _54.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _54.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_54.QueryValidatorCommissionRequest>): _54.QueryValidatorCommissionRequest;
                fromAmino(object: _54.QueryValidatorCommissionRequestAmino): _54.QueryValidatorCommissionRequest;
                toAmino(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorCommissionRequestAminoMsg): _54.QueryValidatorCommissionRequest;
                toAminoMsg(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorCommissionRequestProtoMsg): _54.QueryValidatorCommissionRequest;
                toProto(message: _54.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_54.QueryValidatorCommissionResponse>): _54.QueryValidatorCommissionResponse;
                fromAmino(object: _54.QueryValidatorCommissionResponseAmino): _54.QueryValidatorCommissionResponse;
                toAmino(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorCommissionResponseAminoMsg): _54.QueryValidatorCommissionResponse;
                toAminoMsg(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorCommissionResponseProtoMsg): _54.QueryValidatorCommissionResponse;
                toProto(message: _54.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_54.QueryValidatorSlashesRequest>): _54.QueryValidatorSlashesRequest;
                fromAmino(object: _54.QueryValidatorSlashesRequestAmino): _54.QueryValidatorSlashesRequest;
                toAmino(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorSlashesRequestAminoMsg): _54.QueryValidatorSlashesRequest;
                toAminoMsg(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorSlashesRequestProtoMsg): _54.QueryValidatorSlashesRequest;
                toProto(message: _54.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_54.QueryValidatorSlashesResponse>): _54.QueryValidatorSlashesResponse;
                fromAmino(object: _54.QueryValidatorSlashesResponseAmino): _54.QueryValidatorSlashesResponse;
                toAmino(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorSlashesResponseAminoMsg): _54.QueryValidatorSlashesResponse;
                toAminoMsg(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorSlashesResponseProtoMsg): _54.QueryValidatorSlashesResponse;
                toProto(message: _54.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_54.QueryDelegationRewardsRequest>): _54.QueryDelegationRewardsRequest;
                fromAmino(object: _54.QueryDelegationRewardsRequestAmino): _54.QueryDelegationRewardsRequest;
                toAmino(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegationRewardsRequestAminoMsg): _54.QueryDelegationRewardsRequest;
                toAminoMsg(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationRewardsRequestProtoMsg): _54.QueryDelegationRewardsRequest;
                toProto(message: _54.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_54.QueryDelegationRewardsResponse>): _54.QueryDelegationRewardsResponse;
                fromAmino(object: _54.QueryDelegationRewardsResponseAmino): _54.QueryDelegationRewardsResponse;
                toAmino(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegationRewardsResponseAminoMsg): _54.QueryDelegationRewardsResponse;
                toAminoMsg(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationRewardsResponseProtoMsg): _54.QueryDelegationRewardsResponse;
                toProto(message: _54.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_54.QueryDelegationTotalRewardsRequest>): _54.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _54.QueryDelegationTotalRewardsRequestAmino): _54.QueryDelegationTotalRewardsRequest;
                toAmino(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegationTotalRewardsRequestAminoMsg): _54.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationTotalRewardsRequestProtoMsg): _54.QueryDelegationTotalRewardsRequest;
                toProto(message: _54.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_54.QueryDelegationTotalRewardsResponse>): _54.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _54.QueryDelegationTotalRewardsResponseAmino): _54.QueryDelegationTotalRewardsResponse;
                toAmino(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegationTotalRewardsResponseAminoMsg): _54.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationTotalRewardsResponseProtoMsg): _54.QueryDelegationTotalRewardsResponse;
                toProto(message: _54.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_54.QueryDelegatorValidatorsRequest>): _54.QueryDelegatorValidatorsRequest;
                fromAmino(object: _54.QueryDelegatorValidatorsRequestAmino): _54.QueryDelegatorValidatorsRequest;
                toAmino(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegatorValidatorsRequestAminoMsg): _54.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorValidatorsRequestProtoMsg): _54.QueryDelegatorValidatorsRequest;
                toProto(message: _54.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_54.QueryDelegatorValidatorsResponse>): _54.QueryDelegatorValidatorsResponse;
                fromAmino(object: _54.QueryDelegatorValidatorsResponseAmino): _54.QueryDelegatorValidatorsResponse;
                toAmino(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegatorValidatorsResponseAminoMsg): _54.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorValidatorsResponseProtoMsg): _54.QueryDelegatorValidatorsResponse;
                toProto(message: _54.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_54.QueryDelegatorWithdrawAddressRequest>): _54.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _54.QueryDelegatorWithdrawAddressRequestAmino): _54.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _54.QueryDelegatorWithdrawAddressRequestAminoMsg): _54.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorWithdrawAddressRequestProtoMsg): _54.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _54.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_54.QueryDelegatorWithdrawAddressResponse>): _54.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _54.QueryDelegatorWithdrawAddressResponseAmino): _54.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _54.QueryDelegatorWithdrawAddressResponseAminoMsg): _54.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorWithdrawAddressResponseProtoMsg): _54.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _54.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _54.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_54.QueryCommunityPoolRequest>): _54.QueryCommunityPoolRequest;
                fromAmino(_: _54.QueryCommunityPoolRequestAmino): _54.QueryCommunityPoolRequest;
                toAmino(_: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _54.QueryCommunityPoolRequestAminoMsg): _54.QueryCommunityPoolRequest;
                toAminoMsg(message: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _54.QueryCommunityPoolRequestProtoMsg): _54.QueryCommunityPoolRequest;
                toProto(message: _54.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _54.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_54.QueryCommunityPoolResponse>): _54.QueryCommunityPoolResponse;
                fromAmino(object: _54.QueryCommunityPoolResponseAmino): _54.QueryCommunityPoolResponse;
                toAmino(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _54.QueryCommunityPoolResponseAminoMsg): _54.QueryCommunityPoolResponse;
                toAminoMsg(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _54.QueryCommunityPoolResponseProtoMsg): _54.QueryCommunityPoolResponse;
                toProto(message: _54.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _53.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_53.DelegatorWithdrawInfo>): _53.DelegatorWithdrawInfo;
                fromAmino(object: _53.DelegatorWithdrawInfoAmino): _53.DelegatorWithdrawInfo;
                toAmino(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _53.DelegatorWithdrawInfoAminoMsg): _53.DelegatorWithdrawInfo;
                toAminoMsg(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _53.DelegatorWithdrawInfoProtoMsg): _53.DelegatorWithdrawInfo;
                toProto(message: _53.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorOutstandingRewardsRecord>): _53.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _53.ValidatorOutstandingRewardsRecordAmino): _53.ValidatorOutstandingRewardsRecord;
                toAmino(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorOutstandingRewardsRecordAminoMsg): _53.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorOutstandingRewardsRecordProtoMsg): _53.ValidatorOutstandingRewardsRecord;
                toProto(message: _53.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_53.ValidatorAccumulatedCommissionRecord>): _53.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _53.ValidatorAccumulatedCommissionRecordAmino): _53.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _53.ValidatorAccumulatedCommissionRecordAminoMsg): _53.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorAccumulatedCommissionRecordProtoMsg): _53.ValidatorAccumulatedCommissionRecord;
                toProto(message: _53.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorHistoricalRewardsRecord>): _53.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _53.ValidatorHistoricalRewardsRecordAmino): _53.ValidatorHistoricalRewardsRecord;
                toAmino(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorHistoricalRewardsRecordAminoMsg): _53.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorHistoricalRewardsRecordProtoMsg): _53.ValidatorHistoricalRewardsRecord;
                toProto(message: _53.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorCurrentRewardsRecord>): _53.ValidatorCurrentRewardsRecord;
                fromAmino(object: _53.ValidatorCurrentRewardsRecordAmino): _53.ValidatorCurrentRewardsRecord;
                toAmino(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorCurrentRewardsRecordAminoMsg): _53.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorCurrentRewardsRecordProtoMsg): _53.ValidatorCurrentRewardsRecord;
                toProto(message: _53.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _53.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_53.DelegatorStartingInfoRecord>): _53.DelegatorStartingInfoRecord;
                fromAmino(object: _53.DelegatorStartingInfoRecordAmino): _53.DelegatorStartingInfoRecord;
                toAmino(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _53.DelegatorStartingInfoRecordAminoMsg): _53.DelegatorStartingInfoRecord;
                toAminoMsg(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _53.DelegatorStartingInfoRecordProtoMsg): _53.DelegatorStartingInfoRecord;
                toProto(message: _53.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_53.ValidatorSlashEventRecord>): _53.ValidatorSlashEventRecord;
                fromAmino(object: _53.ValidatorSlashEventRecordAmino): _53.ValidatorSlashEventRecord;
                toAmino(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventRecordAminoMsg): _53.ValidatorSlashEventRecord;
                toAminoMsg(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventRecordProtoMsg): _53.ValidatorSlashEventRecord;
                toProto(message: _53.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                toProto(message: _53.GenesisState): Uint8Array;
                toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _52.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
                fromAmino(object: _52.ParamsAmino): _52.Params;
                toAmino(message: _52.Params): _52.ParamsAmino;
                fromAminoMsg(object: _52.ParamsAminoMsg): _52.Params;
                toAminoMsg(message: _52.Params): _52.ParamsAminoMsg;
                fromProtoMsg(message: _52.ParamsProtoMsg): _52.Params;
                toProto(message: _52.Params): Uint8Array;
                toProtoMsg(message: _52.Params): _52.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_52.ValidatorHistoricalRewards>): _52.ValidatorHistoricalRewards;
                fromAmino(object: _52.ValidatorHistoricalRewardsAmino): _52.ValidatorHistoricalRewards;
                toAmino(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _52.ValidatorHistoricalRewardsAminoMsg): _52.ValidatorHistoricalRewards;
                toAminoMsg(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorHistoricalRewardsProtoMsg): _52.ValidatorHistoricalRewards;
                toProto(message: _52.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorCurrentRewards;
                fromPartial(object: Partial<_52.ValidatorCurrentRewards>): _52.ValidatorCurrentRewards;
                fromAmino(object: _52.ValidatorCurrentRewardsAmino): _52.ValidatorCurrentRewards;
                toAmino(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _52.ValidatorCurrentRewardsAminoMsg): _52.ValidatorCurrentRewards;
                toAminoMsg(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorCurrentRewardsProtoMsg): _52.ValidatorCurrentRewards;
                toProto(message: _52.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _52.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_52.ValidatorAccumulatedCommission>): _52.ValidatorAccumulatedCommission;
                fromAmino(object: _52.ValidatorAccumulatedCommissionAmino): _52.ValidatorAccumulatedCommission;
                toAmino(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _52.ValidatorAccumulatedCommissionAminoMsg): _52.ValidatorAccumulatedCommission;
                toAminoMsg(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _52.ValidatorAccumulatedCommissionProtoMsg): _52.ValidatorAccumulatedCommission;
                toProto(message: _52.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_52.ValidatorOutstandingRewards>): _52.ValidatorOutstandingRewards;
                fromAmino(object: _52.ValidatorOutstandingRewardsAmino): _52.ValidatorOutstandingRewards;
                toAmino(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _52.ValidatorOutstandingRewardsAminoMsg): _52.ValidatorOutstandingRewards;
                toAminoMsg(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorOutstandingRewardsProtoMsg): _52.ValidatorOutstandingRewards;
                toProto(message: _52.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _52.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorSlashEvent;
                fromPartial(object: Partial<_52.ValidatorSlashEvent>): _52.ValidatorSlashEvent;
                fromAmino(object: _52.ValidatorSlashEventAmino): _52.ValidatorSlashEvent;
                toAmino(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventAmino;
                fromAminoMsg(object: _52.ValidatorSlashEventAminoMsg): _52.ValidatorSlashEvent;
                toAminoMsg(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _52.ValidatorSlashEventProtoMsg): _52.ValidatorSlashEvent;
                toProto(message: _52.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _52.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorSlashEvents;
                fromPartial(object: Partial<_52.ValidatorSlashEvents>): _52.ValidatorSlashEvents;
                fromAmino(object: _52.ValidatorSlashEventsAmino): _52.ValidatorSlashEvents;
                toAmino(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _52.ValidatorSlashEventsAminoMsg): _52.ValidatorSlashEvents;
                toAminoMsg(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _52.ValidatorSlashEventsProtoMsg): _52.ValidatorSlashEvents;
                toProto(message: _52.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _52.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.FeePool;
                fromPartial(object: Partial<_52.FeePool>): _52.FeePool;
                fromAmino(object: _52.FeePoolAmino): _52.FeePool;
                toAmino(message: _52.FeePool): _52.FeePoolAmino;
                fromAminoMsg(object: _52.FeePoolAminoMsg): _52.FeePool;
                toAminoMsg(message: _52.FeePool): _52.FeePoolAminoMsg;
                fromProtoMsg(message: _52.FeePoolProtoMsg): _52.FeePool;
                toProto(message: _52.FeePool): Uint8Array;
                toProtoMsg(message: _52.FeePool): _52.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _52.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_52.CommunityPoolSpendProposal>): _52.CommunityPoolSpendProposal;
                fromAmino(object: _52.CommunityPoolSpendProposalAmino): _52.CommunityPoolSpendProposal;
                toAmino(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _52.CommunityPoolSpendProposalAminoMsg): _52.CommunityPoolSpendProposal;
                toAminoMsg(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _52.CommunityPoolSpendProposalProtoMsg): _52.CommunityPoolSpendProposal;
                toProto(message: _52.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _52.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DelegatorStartingInfo;
                fromPartial(object: Partial<_52.DelegatorStartingInfo>): _52.DelegatorStartingInfo;
                fromAmino(object: _52.DelegatorStartingInfoAmino): _52.DelegatorStartingInfo;
                toAmino(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _52.DelegatorStartingInfoAminoMsg): _52.DelegatorStartingInfo;
                toAminoMsg(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _52.DelegatorStartingInfoProtoMsg): _52.DelegatorStartingInfo;
                toProto(message: _52.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _52.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DelegationDelegatorReward;
                fromPartial(object: Partial<_52.DelegationDelegatorReward>): _52.DelegationDelegatorReward;
                fromAmino(object: _52.DelegationDelegatorRewardAmino): _52.DelegationDelegatorReward;
                toAmino(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _52.DelegationDelegatorRewardAminoMsg): _52.DelegationDelegatorReward;
                toAminoMsg(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _52.DelegationDelegatorRewardProtoMsg): _52.DelegationDelegatorReward;
                toProto(message: _52.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _52.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_52.CommunityPoolSpendProposalWithDeposit>): _52.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _52.CommunityPoolSpendProposalWithDepositAmino): _52.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _52.CommunityPoolSpendProposalWithDepositAminoMsg): _52.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _52.CommunityPoolSpendProposalWithDepositProtoMsg): _52.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _52.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _56.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _56.Module;
                    fromPartial(_: Partial<_56.Module>): _56.Module;
                    fromAmino(_: _56.ModuleAmino): _56.Module;
                    toAmino(_: _56.Module): _56.ModuleAmino;
                    fromAminoMsg(object: _56.ModuleAminoMsg): _56.Module;
                    toAminoMsg(message: _56.Module): _56.ModuleAminoMsg;
                    fromProtoMsg(message: _56.ModuleProtoMsg): _56.Module;
                    toProto(message: _56.Module): Uint8Array;
                    toProtoMsg(message: _56.Module): _56.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _60.MsgSubmitEvidence) => _60.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _60.MsgSubmitEvidenceAmino) => _60.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgSubmitEvidence;
                fromPartial(object: Partial<_60.MsgSubmitEvidence>): _60.MsgSubmitEvidence;
                fromAmino(object: _60.MsgSubmitEvidenceAmino): _60.MsgSubmitEvidence;
                toAmino(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceAminoMsg): _60.MsgSubmitEvidence;
                toAminoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceProtoMsg): _60.MsgSubmitEvidence;
                toProto(message: _60.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_60.MsgSubmitEvidenceResponse>): _60.MsgSubmitEvidenceResponse;
                fromAmino(object: _60.MsgSubmitEvidenceResponseAmino): _60.MsgSubmitEvidenceResponse;
                toAmino(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceResponseAminoMsg): _60.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceResponseProtoMsg): _60.MsgSubmitEvidenceResponse;
                toProto(message: _60.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryEvidenceRequest;
                fromPartial(object: Partial<_59.QueryEvidenceRequest>): _59.QueryEvidenceRequest;
                fromAmino(object: _59.QueryEvidenceRequestAmino): _59.QueryEvidenceRequest;
                toAmino(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryEvidenceRequestAminoMsg): _59.QueryEvidenceRequest;
                toAminoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceRequestProtoMsg): _59.QueryEvidenceRequest;
                toProto(message: _59.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryEvidenceResponse;
                fromPartial(object: Partial<_59.QueryEvidenceResponse>): _59.QueryEvidenceResponse;
                fromAmino(object: _59.QueryEvidenceResponseAmino): _59.QueryEvidenceResponse;
                toAmino(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryEvidenceResponseAminoMsg): _59.QueryEvidenceResponse;
                toAminoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceResponseProtoMsg): _59.QueryEvidenceResponse;
                toProto(message: _59.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_59.QueryAllEvidenceRequest>): _59.QueryAllEvidenceRequest;
                fromAmino(object: _59.QueryAllEvidenceRequestAmino): _59.QueryAllEvidenceRequest;
                toAmino(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceRequestAminoMsg): _59.QueryAllEvidenceRequest;
                toAminoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceRequestProtoMsg): _59.QueryAllEvidenceRequest;
                toProto(message: _59.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_59.QueryAllEvidenceResponse>): _59.QueryAllEvidenceResponse;
                fromAmino(object: _59.QueryAllEvidenceResponseAmino): _59.QueryAllEvidenceResponse;
                toAmino(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceResponseAminoMsg): _59.QueryAllEvidenceResponse;
                toAminoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceResponseProtoMsg): _59.QueryAllEvidenceResponse;
                toProto(message: _59.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseProtoMsg;
            };
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
            Equivocation: {
                typeUrl: string;
                encode(message: _57.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Equivocation;
                fromPartial(object: Partial<_57.Equivocation>): _57.Equivocation;
                fromAmino(object: _57.EquivocationAmino): _57.Equivocation;
                toAmino(message: _57.Equivocation): _57.EquivocationAmino;
                fromAminoMsg(object: _57.EquivocationAminoMsg): _57.Equivocation;
                toAminoMsg(message: _57.Equivocation): _57.EquivocationAminoMsg;
                fromProtoMsg(message: _57.EquivocationProtoMsg): _57.Equivocation;
                toProto(message: _57.Equivocation): Uint8Array;
                toProtoMsg(message: _57.Equivocation): _57.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
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
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _64.QueryAllowanceRequest): Promise<_64.QueryAllowanceResponse>;
                allowances(request: _64.QueryAllowancesRequest): Promise<_64.QueryAllowancesResponse>;
                allowancesByGranter(request: _64.QueryAllowancesByGranterRequest): Promise<_64.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _65.MsgGrantAllowance) => _65.MsgGrantAllowanceAmino;
                    fromAmino: (object: _65.MsgGrantAllowanceAmino) => _65.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _65.MsgRevokeAllowance) => _65.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _65.MsgRevokeAllowanceAmino) => _65.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _65.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgGrantAllowance;
                fromPartial(object: Partial<_65.MsgGrantAllowance>): _65.MsgGrantAllowance;
                fromAmino(object: _65.MsgGrantAllowanceAmino): _65.MsgGrantAllowance;
                toAmino(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _65.MsgGrantAllowanceAminoMsg): _65.MsgGrantAllowance;
                toAminoMsg(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _65.MsgGrantAllowanceProtoMsg): _65.MsgGrantAllowance;
                toProto(message: _65.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _65.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_65.MsgGrantAllowanceResponse>): _65.MsgGrantAllowanceResponse;
                fromAmino(_: _65.MsgGrantAllowanceResponseAmino): _65.MsgGrantAllowanceResponse;
                toAmino(_: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _65.MsgGrantAllowanceResponseAminoMsg): _65.MsgGrantAllowanceResponse;
                toAminoMsg(message: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _65.MsgGrantAllowanceResponseProtoMsg): _65.MsgGrantAllowanceResponse;
                toProto(message: _65.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _65.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.MsgRevokeAllowance;
                fromPartial(object: Partial<_65.MsgRevokeAllowance>): _65.MsgRevokeAllowance;
                fromAmino(object: _65.MsgRevokeAllowanceAmino): _65.MsgRevokeAllowance;
                toAmino(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _65.MsgRevokeAllowanceAminoMsg): _65.MsgRevokeAllowance;
                toAminoMsg(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _65.MsgRevokeAllowanceProtoMsg): _65.MsgRevokeAllowance;
                toProto(message: _65.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _65.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _65.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_65.MsgRevokeAllowanceResponse>): _65.MsgRevokeAllowanceResponse;
                fromAmino(_: _65.MsgRevokeAllowanceResponseAmino): _65.MsgRevokeAllowanceResponse;
                toAmino(_: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _65.MsgRevokeAllowanceResponseAminoMsg): _65.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _65.MsgRevokeAllowanceResponseProtoMsg): _65.MsgRevokeAllowanceResponse;
                toProto(message: _65.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _62.BasicAllowance | _62.PeriodicAllowance | _62.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowanceRequest;
                fromPartial(object: Partial<_64.QueryAllowanceRequest>): _64.QueryAllowanceRequest;
                fromAmino(object: _64.QueryAllowanceRequestAmino): _64.QueryAllowanceRequest;
                toAmino(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _64.QueryAllowanceRequestAminoMsg): _64.QueryAllowanceRequest;
                toAminoMsg(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowanceRequestProtoMsg): _64.QueryAllowanceRequest;
                toProto(message: _64.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowanceResponse;
                fromPartial(object: Partial<_64.QueryAllowanceResponse>): _64.QueryAllowanceResponse;
                fromAmino(object: _64.QueryAllowanceResponseAmino): _64.QueryAllowanceResponse;
                toAmino(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _64.QueryAllowanceResponseAminoMsg): _64.QueryAllowanceResponse;
                toAminoMsg(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowanceResponseProtoMsg): _64.QueryAllowanceResponse;
                toProto(message: _64.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesRequest;
                fromPartial(object: Partial<_64.QueryAllowancesRequest>): _64.QueryAllowancesRequest;
                fromAmino(object: _64.QueryAllowancesRequestAmino): _64.QueryAllowancesRequest;
                toAmino(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _64.QueryAllowancesRequestAminoMsg): _64.QueryAllowancesRequest;
                toAminoMsg(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesRequestProtoMsg): _64.QueryAllowancesRequest;
                toProto(message: _64.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesResponse;
                fromPartial(object: Partial<_64.QueryAllowancesResponse>): _64.QueryAllowancesResponse;
                fromAmino(object: _64.QueryAllowancesResponseAmino): _64.QueryAllowancesResponse;
                toAmino(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _64.QueryAllowancesResponseAminoMsg): _64.QueryAllowancesResponse;
                toAminoMsg(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesResponseProtoMsg): _64.QueryAllowancesResponse;
                toProto(message: _64.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_64.QueryAllowancesByGranterRequest>): _64.QueryAllowancesByGranterRequest;
                fromAmino(object: _64.QueryAllowancesByGranterRequestAmino): _64.QueryAllowancesByGranterRequest;
                toAmino(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _64.QueryAllowancesByGranterRequestAminoMsg): _64.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesByGranterRequestProtoMsg): _64.QueryAllowancesByGranterRequest;
                toProto(message: _64.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_64.QueryAllowancesByGranterResponse>): _64.QueryAllowancesByGranterResponse;
                fromAmino(object: _64.QueryAllowancesByGranterResponseAmino): _64.QueryAllowancesByGranterResponse;
                toAmino(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _64.QueryAllowancesByGranterResponseAminoMsg): _64.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesByGranterResponseProtoMsg): _64.QueryAllowancesByGranterResponse;
                toProto(message: _64.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _62.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.BasicAllowance;
                fromPartial(object: Partial<_62.BasicAllowance>): _62.BasicAllowance;
                fromAmino(object: _62.BasicAllowanceAmino): _62.BasicAllowance;
                toAmino(message: _62.BasicAllowance): _62.BasicAllowanceAmino;
                fromAminoMsg(object: _62.BasicAllowanceAminoMsg): _62.BasicAllowance;
                toAminoMsg(message: _62.BasicAllowance): _62.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _62.BasicAllowanceProtoMsg): _62.BasicAllowance;
                toProto(message: _62.BasicAllowance): Uint8Array;
                toProtoMsg(message: _62.BasicAllowance): _62.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _62.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PeriodicAllowance;
                fromPartial(object: Partial<_62.PeriodicAllowance>): _62.PeriodicAllowance;
                fromAmino(object: _62.PeriodicAllowanceAmino): _62.PeriodicAllowance;
                toAmino(message: _62.PeriodicAllowance): _62.PeriodicAllowanceAmino;
                fromAminoMsg(object: _62.PeriodicAllowanceAminoMsg): _62.PeriodicAllowance;
                toAminoMsg(message: _62.PeriodicAllowance): _62.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _62.PeriodicAllowanceProtoMsg): _62.PeriodicAllowance;
                toProto(message: _62.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _62.PeriodicAllowance): _62.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _62.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.AllowedMsgAllowance;
                fromPartial(object: Partial<_62.AllowedMsgAllowance>): _62.AllowedMsgAllowance;
                fromAmino(object: _62.AllowedMsgAllowanceAmino): _62.AllowedMsgAllowance;
                toAmino(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _62.AllowedMsgAllowanceAminoMsg): _62.AllowedMsgAllowance;
                toAminoMsg(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _62.AllowedMsgAllowanceProtoMsg): _62.AllowedMsgAllowance;
                toProto(message: _62.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceProtoMsg;
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
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _66.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _66.Module;
                    fromPartial(_: Partial<_66.Module>): _66.Module;
                    fromAmino(_: _66.ModuleAmino): _66.Module;
                    toAmino(_: _66.Module): _66.ModuleAmino;
                    fromAminoMsg(object: _66.ModuleAminoMsg): _66.Module;
                    toAminoMsg(message: _66.Module): _66.ModuleAminoMsg;
                    fromProtoMsg(message: _66.ModuleProtoMsg): _66.Module;
                    toProto(message: _66.Module): Uint8Array;
                    toProtoMsg(message: _66.Module): _66.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
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
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _68.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Module;
                    fromPartial(object: Partial<_68.Module>): _68.Module;
                    fromAmino(object: _68.ModuleAmino): _68.Module;
                    toAmino(message: _68.Module): _68.ModuleAmino;
                    fromAminoMsg(object: _68.ModuleAminoMsg): _68.Module;
                    toAminoMsg(message: _68.Module): _68.ModuleAminoMsg;
                    fromProtoMsg(message: _68.ModuleProtoMsg): _68.Module;
                    toProto(message: _68.Module): Uint8Array;
                    toProtoMsg(message: _68.Module): _68.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSubmitProposal) => _72.MsgSubmitProposalAmino;
                    fromAmino: (object: _72.MsgSubmitProposalAmino) => _72.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _72.MsgExecLegacyContent) => _72.MsgExecLegacyContentAmino;
                    fromAmino: (object: _72.MsgExecLegacyContentAmino) => _72.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVote) => _72.MsgVoteAmino;
                    fromAmino: (object: _72.MsgVoteAmino) => _72.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVoteWeighted) => _72.MsgVoteWeightedAmino;
                    fromAmino: (object: _72.MsgVoteWeightedAmino) => _72.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _72.MsgDeposit) => _72.MsgDepositAmino;
                    fromAmino: (object: _72.MsgDepositAmino) => _72.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _72.MsgUpdateParams) => _72.MsgUpdateParamsAmino;
                    fromAmino: (object: _72.MsgUpdateParamsAmino) => _72.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitProposal;
                fromPartial(object: Partial<_72.MsgSubmitProposal>): _72.MsgSubmitProposal;
                fromAmino(object: _72.MsgSubmitProposalAmino): _72.MsgSubmitProposal;
                toAmino(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalAminoMsg): _72.MsgSubmitProposal;
                toAminoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalProtoMsg): _72.MsgSubmitProposal;
                toProto(message: _72.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_72.MsgSubmitProposalResponse>): _72.MsgSubmitProposalResponse;
                fromAmino(object: _72.MsgSubmitProposalResponseAmino): _72.MsgSubmitProposalResponse;
                toAmino(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalResponseAminoMsg): _72.MsgSubmitProposalResponse;
                toAminoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalResponseProtoMsg): _72.MsgSubmitProposalResponse;
                toProto(message: _72.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _72.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgExecLegacyContent;
                fromPartial(object: Partial<_72.MsgExecLegacyContent>): _72.MsgExecLegacyContent;
                fromAmino(object: _72.MsgExecLegacyContentAmino): _72.MsgExecLegacyContent;
                toAmino(message: _72.MsgExecLegacyContent): _72.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _72.MsgExecLegacyContentAminoMsg): _72.MsgExecLegacyContent;
                toAminoMsg(message: _72.MsgExecLegacyContent): _72.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _72.MsgExecLegacyContentProtoMsg): _72.MsgExecLegacyContent;
                toProto(message: _72.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _72.MsgExecLegacyContent): _72.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _72.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_72.MsgExecLegacyContentResponse>): _72.MsgExecLegacyContentResponse;
                fromAmino(_: _72.MsgExecLegacyContentResponseAmino): _72.MsgExecLegacyContentResponse;
                toAmino(_: _72.MsgExecLegacyContentResponse): _72.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _72.MsgExecLegacyContentResponseAminoMsg): _72.MsgExecLegacyContentResponse;
                toAminoMsg(message: _72.MsgExecLegacyContentResponse): _72.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _72.MsgExecLegacyContentResponseProtoMsg): _72.MsgExecLegacyContentResponse;
                toProto(message: _72.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _72.MsgExecLegacyContentResponse): _72.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _72.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgVote;
                fromPartial(object: Partial<_72.MsgVote>): _72.MsgVote;
                fromAmino(object: _72.MsgVoteAmino): _72.MsgVote;
                toAmino(message: _72.MsgVote): _72.MsgVoteAmino;
                fromAminoMsg(object: _72.MsgVoteAminoMsg): _72.MsgVote;
                toAminoMsg(message: _72.MsgVote): _72.MsgVoteAminoMsg;
                fromProtoMsg(message: _72.MsgVoteProtoMsg): _72.MsgVote;
                toProto(message: _72.MsgVote): Uint8Array;
                toProtoMsg(message: _72.MsgVote): _72.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgVoteResponse;
                fromPartial(_: Partial<_72.MsgVoteResponse>): _72.MsgVoteResponse;
                fromAmino(_: _72.MsgVoteResponseAmino): _72.MsgVoteResponse;
                toAmino(_: _72.MsgVoteResponse): _72.MsgVoteResponseAmino;
                fromAminoMsg(object: _72.MsgVoteResponseAminoMsg): _72.MsgVoteResponse;
                toAminoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteResponseProtoMsg): _72.MsgVoteResponse;
                toProto(message: _72.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _72.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgVoteWeighted;
                fromPartial(object: Partial<_72.MsgVoteWeighted>): _72.MsgVoteWeighted;
                fromAmino(object: _72.MsgVoteWeightedAmino): _72.MsgVoteWeighted;
                toAmino(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedAminoMsg): _72.MsgVoteWeighted;
                toAminoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedProtoMsg): _72.MsgVoteWeighted;
                toProto(message: _72.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_72.MsgVoteWeightedResponse>): _72.MsgVoteWeightedResponse;
                fromAmino(_: _72.MsgVoteWeightedResponseAmino): _72.MsgVoteWeightedResponse;
                toAmino(_: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedResponseAminoMsg): _72.MsgVoteWeightedResponse;
                toAminoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedResponseProtoMsg): _72.MsgVoteWeightedResponse;
                toProto(message: _72.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _72.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgDeposit;
                fromPartial(object: Partial<_72.MsgDeposit>): _72.MsgDeposit;
                fromAmino(object: _72.MsgDepositAmino): _72.MsgDeposit;
                toAmino(message: _72.MsgDeposit): _72.MsgDepositAmino;
                fromAminoMsg(object: _72.MsgDepositAminoMsg): _72.MsgDeposit;
                toAminoMsg(message: _72.MsgDeposit): _72.MsgDepositAminoMsg;
                fromProtoMsg(message: _72.MsgDepositProtoMsg): _72.MsgDeposit;
                toProto(message: _72.MsgDeposit): Uint8Array;
                toProtoMsg(message: _72.MsgDeposit): _72.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _72.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgDepositResponse;
                fromPartial(_: Partial<_72.MsgDepositResponse>): _72.MsgDepositResponse;
                fromAmino(_: _72.MsgDepositResponseAmino): _72.MsgDepositResponse;
                toAmino(_: _72.MsgDepositResponse): _72.MsgDepositResponseAmino;
                fromAminoMsg(object: _72.MsgDepositResponseAminoMsg): _72.MsgDepositResponse;
                toAminoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _72.MsgDepositResponseProtoMsg): _72.MsgDepositResponse;
                toProto(message: _72.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseProtoMsg;
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
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _52.CommunityPoolSpendProposal | _52.CommunityPoolSpendProposalWithDeposit | _100.ParameterChangeProposal | _122.SoftwareUpgradeProposal | _122.CancelSoftwareUpgradeProposal | _74.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalRequest;
                fromPartial(object: Partial<_71.QueryProposalRequest>): _71.QueryProposalRequest;
                fromAmino(object: _71.QueryProposalRequestAmino): _71.QueryProposalRequest;
                toAmino(message: _71.QueryProposalRequest): _71.QueryProposalRequestAmino;
                fromAminoMsg(object: _71.QueryProposalRequestAminoMsg): _71.QueryProposalRequest;
                toAminoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalRequestProtoMsg): _71.QueryProposalRequest;
                toProto(message: _71.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalResponse;
                fromPartial(object: Partial<_71.QueryProposalResponse>): _71.QueryProposalResponse;
                fromAmino(object: _71.QueryProposalResponseAmino): _71.QueryProposalResponse;
                toAmino(message: _71.QueryProposalResponse): _71.QueryProposalResponseAmino;
                fromAminoMsg(object: _71.QueryProposalResponseAminoMsg): _71.QueryProposalResponse;
                toAminoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalResponseProtoMsg): _71.QueryProposalResponse;
                toProto(message: _71.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalsRequest;
                fromPartial(object: Partial<_71.QueryProposalsRequest>): _71.QueryProposalsRequest;
                fromAmino(object: _71.QueryProposalsRequestAmino): _71.QueryProposalsRequest;
                toAmino(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAmino;
                fromAminoMsg(object: _71.QueryProposalsRequestAminoMsg): _71.QueryProposalsRequest;
                toAminoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsRequestProtoMsg): _71.QueryProposalsRequest;
                toProto(message: _71.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalsResponse;
                fromPartial(object: Partial<_71.QueryProposalsResponse>): _71.QueryProposalsResponse;
                fromAmino(object: _71.QueryProposalsResponseAmino): _71.QueryProposalsResponse;
                toAmino(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAmino;
                fromAminoMsg(object: _71.QueryProposalsResponseAminoMsg): _71.QueryProposalsResponse;
                toAminoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsResponseProtoMsg): _71.QueryProposalsResponse;
                toProto(message: _71.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _71.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVoteRequest;
                fromPartial(object: Partial<_71.QueryVoteRequest>): _71.QueryVoteRequest;
                fromAmino(object: _71.QueryVoteRequestAmino): _71.QueryVoteRequest;
                toAmino(message: _71.QueryVoteRequest): _71.QueryVoteRequestAmino;
                fromAminoMsg(object: _71.QueryVoteRequestAminoMsg): _71.QueryVoteRequest;
                toAminoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVoteRequestProtoMsg): _71.QueryVoteRequest;
                toProto(message: _71.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _71.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVoteResponse;
                fromPartial(object: Partial<_71.QueryVoteResponse>): _71.QueryVoteResponse;
                fromAmino(object: _71.QueryVoteResponseAmino): _71.QueryVoteResponse;
                toAmino(message: _71.QueryVoteResponse): _71.QueryVoteResponseAmino;
                fromAminoMsg(object: _71.QueryVoteResponseAminoMsg): _71.QueryVoteResponse;
                toAminoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVoteResponseProtoMsg): _71.QueryVoteResponse;
                toProto(message: _71.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _71.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVotesRequest;
                fromPartial(object: Partial<_71.QueryVotesRequest>): _71.QueryVotesRequest;
                fromAmino(object: _71.QueryVotesRequestAmino): _71.QueryVotesRequest;
                toAmino(message: _71.QueryVotesRequest): _71.QueryVotesRequestAmino;
                fromAminoMsg(object: _71.QueryVotesRequestAminoMsg): _71.QueryVotesRequest;
                toAminoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVotesRequestProtoMsg): _71.QueryVotesRequest;
                toProto(message: _71.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _71.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVotesResponse;
                fromPartial(object: Partial<_71.QueryVotesResponse>): _71.QueryVotesResponse;
                fromAmino(object: _71.QueryVotesResponseAmino): _71.QueryVotesResponse;
                toAmino(message: _71.QueryVotesResponse): _71.QueryVotesResponseAmino;
                fromAminoMsg(object: _71.QueryVotesResponseAminoMsg): _71.QueryVotesResponse;
                toAminoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVotesResponseProtoMsg): _71.QueryVotesResponse;
                toProto(message: _71.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _71.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryParamsRequest;
                fromPartial(object: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
                fromAmino(object: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(message: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositRequest;
                fromPartial(object: Partial<_71.QueryDepositRequest>): _71.QueryDepositRequest;
                fromAmino(object: _71.QueryDepositRequestAmino): _71.QueryDepositRequest;
                toAmino(message: _71.QueryDepositRequest): _71.QueryDepositRequestAmino;
                fromAminoMsg(object: _71.QueryDepositRequestAminoMsg): _71.QueryDepositRequest;
                toAminoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositRequestProtoMsg): _71.QueryDepositRequest;
                toProto(message: _71.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositResponse;
                fromPartial(object: Partial<_71.QueryDepositResponse>): _71.QueryDepositResponse;
                fromAmino(object: _71.QueryDepositResponseAmino): _71.QueryDepositResponse;
                toAmino(message: _71.QueryDepositResponse): _71.QueryDepositResponseAmino;
                fromAminoMsg(object: _71.QueryDepositResponseAminoMsg): _71.QueryDepositResponse;
                toAminoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositResponseProtoMsg): _71.QueryDepositResponse;
                toProto(message: _71.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositsRequest;
                fromPartial(object: Partial<_71.QueryDepositsRequest>): _71.QueryDepositsRequest;
                fromAmino(object: _71.QueryDepositsRequestAmino): _71.QueryDepositsRequest;
                toAmino(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAmino;
                fromAminoMsg(object: _71.QueryDepositsRequestAminoMsg): _71.QueryDepositsRequest;
                toAminoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsRequestProtoMsg): _71.QueryDepositsRequest;
                toProto(message: _71.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositsResponse;
                fromPartial(object: Partial<_71.QueryDepositsResponse>): _71.QueryDepositsResponse;
                fromAmino(object: _71.QueryDepositsResponseAmino): _71.QueryDepositsResponse;
                toAmino(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAmino;
                fromAminoMsg(object: _71.QueryDepositsResponseAminoMsg): _71.QueryDepositsResponse;
                toAminoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsResponseProtoMsg): _71.QueryDepositsResponse;
                toProto(message: _71.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTallyResultRequest;
                fromPartial(object: Partial<_71.QueryTallyResultRequest>): _71.QueryTallyResultRequest;
                fromAmino(object: _71.QueryTallyResultRequestAmino): _71.QueryTallyResultRequest;
                toAmino(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _71.QueryTallyResultRequestAminoMsg): _71.QueryTallyResultRequest;
                toAminoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultRequestProtoMsg): _71.QueryTallyResultRequest;
                toProto(message: _71.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTallyResultResponse;
                fromPartial(object: Partial<_71.QueryTallyResultResponse>): _71.QueryTallyResultResponse;
                fromAmino(object: _71.QueryTallyResultResponseAmino): _71.QueryTallyResultResponse;
                toAmino(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _71.QueryTallyResultResponseAminoMsg): _71.QueryTallyResultResponse;
                toAminoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultResponseProtoMsg): _71.QueryTallyResultResponse;
                toProto(message: _71.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            VoteOptionAmino: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            ProposalStatusAmino: typeof _70.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _70.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.WeightedVoteOption;
                fromPartial(object: Partial<_70.WeightedVoteOption>): _70.WeightedVoteOption;
                fromAmino(object: _70.WeightedVoteOptionAmino): _70.WeightedVoteOption;
                toAmino(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAmino;
                fromAminoMsg(object: _70.WeightedVoteOptionAminoMsg): _70.WeightedVoteOption;
                toAminoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _70.WeightedVoteOptionProtoMsg): _70.WeightedVoteOption;
                toProto(message: _70.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _70.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Deposit;
                fromPartial(object: Partial<_70.Deposit>): _70.Deposit;
                fromAmino(object: _70.DepositAmino): _70.Deposit;
                toAmino(message: _70.Deposit): _70.DepositAmino;
                fromAminoMsg(object: _70.DepositAminoMsg): _70.Deposit;
                toAminoMsg(message: _70.Deposit): _70.DepositAminoMsg;
                fromProtoMsg(message: _70.DepositProtoMsg): _70.Deposit;
                toProto(message: _70.Deposit): Uint8Array;
                toProtoMsg(message: _70.Deposit): _70.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _70.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Proposal;
                fromPartial(object: Partial<_70.Proposal>): _70.Proposal;
                fromAmino(object: _70.ProposalAmino): _70.Proposal;
                toAmino(message: _70.Proposal): _70.ProposalAmino;
                fromAminoMsg(object: _70.ProposalAminoMsg): _70.Proposal;
                toAminoMsg(message: _70.Proposal): _70.ProposalAminoMsg;
                fromProtoMsg(message: _70.ProposalProtoMsg): _70.Proposal;
                toProto(message: _70.Proposal): Uint8Array;
                toProtoMsg(message: _70.Proposal): _70.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _70.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TallyResult;
                fromPartial(object: Partial<_70.TallyResult>): _70.TallyResult;
                fromAmino(object: _70.TallyResultAmino): _70.TallyResult;
                toAmino(message: _70.TallyResult): _70.TallyResultAmino;
                fromAminoMsg(object: _70.TallyResultAminoMsg): _70.TallyResult;
                toAminoMsg(message: _70.TallyResult): _70.TallyResultAminoMsg;
                fromProtoMsg(message: _70.TallyResultProtoMsg): _70.TallyResult;
                toProto(message: _70.TallyResult): Uint8Array;
                toProtoMsg(message: _70.TallyResult): _70.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _70.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Vote;
                fromPartial(object: Partial<_70.Vote>): _70.Vote;
                fromAmino(object: _70.VoteAmino): _70.Vote;
                toAmino(message: _70.Vote): _70.VoteAmino;
                fromAminoMsg(object: _70.VoteAminoMsg): _70.Vote;
                toAminoMsg(message: _70.Vote): _70.VoteAminoMsg;
                fromProtoMsg(message: _70.VoteProtoMsg): _70.Vote;
                toProto(message: _70.Vote): Uint8Array;
                toProtoMsg(message: _70.Vote): _70.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _70.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DepositParams;
                fromPartial(object: Partial<_70.DepositParams>): _70.DepositParams;
                fromAmino(object: _70.DepositParamsAmino): _70.DepositParams;
                toAmino(message: _70.DepositParams): _70.DepositParamsAmino;
                fromAminoMsg(object: _70.DepositParamsAminoMsg): _70.DepositParams;
                toAminoMsg(message: _70.DepositParams): _70.DepositParamsAminoMsg;
                fromProtoMsg(message: _70.DepositParamsProtoMsg): _70.DepositParams;
                toProto(message: _70.DepositParams): Uint8Array;
                toProtoMsg(message: _70.DepositParams): _70.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _70.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.VotingParams;
                fromPartial(object: Partial<_70.VotingParams>): _70.VotingParams;
                fromAmino(object: _70.VotingParamsAmino): _70.VotingParams;
                toAmino(message: _70.VotingParams): _70.VotingParamsAmino;
                fromAminoMsg(object: _70.VotingParamsAminoMsg): _70.VotingParams;
                toAminoMsg(message: _70.VotingParams): _70.VotingParamsAminoMsg;
                fromProtoMsg(message: _70.VotingParamsProtoMsg): _70.VotingParams;
                toProto(message: _70.VotingParams): Uint8Array;
                toProtoMsg(message: _70.VotingParams): _70.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _70.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TallyParams;
                fromPartial(object: Partial<_70.TallyParams>): _70.TallyParams;
                fromAmino(object: _70.TallyParamsAmino): _70.TallyParams;
                toAmino(message: _70.TallyParams): _70.TallyParamsAmino;
                fromAminoMsg(object: _70.TallyParamsAminoMsg): _70.TallyParams;
                toAminoMsg(message: _70.TallyParams): _70.TallyParamsAminoMsg;
                fromProtoMsg(message: _70.TallyParamsProtoMsg): _70.TallyParams;
                toProto(message: _70.TallyParams): Uint8Array;
                toProtoMsg(message: _70.TallyParams): _70.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _70.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Params;
                fromPartial(object: Partial<_70.Params>): _70.Params;
                fromAmino(object: _70.ParamsAmino): _70.Params;
                toAmino(message: _70.Params): _70.ParamsAmino;
                fromAminoMsg(object: _70.ParamsAminoMsg): _70.Params;
                toAminoMsg(message: _70.Params): _70.ParamsAminoMsg;
                fromProtoMsg(message: _70.ParamsProtoMsg): _70.Params;
                toProto(message: _70.Params): Uint8Array;
                toProtoMsg(message: _70.Params): _70.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _69.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
                fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                toProto(message: _69.GenesisState): Uint8Array;
                toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
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
            LCDQueryClient: typeof _190.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _76.MsgSubmitProposal): {
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
                };
                withTypeUrl: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
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
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
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
                };
                fromPartial: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
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
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _76.MsgSubmitProposal) => _76.MsgSubmitProposalAmino;
                    fromAmino: (object: _76.MsgSubmitProposalAmino) => _76.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVote) => _76.MsgVoteAmino;
                    fromAmino: (object: _76.MsgVoteAmino) => _76.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVoteWeighted) => _76.MsgVoteWeightedAmino;
                    fromAmino: (object: _76.MsgVoteWeightedAmino) => _76.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _76.MsgDeposit) => _76.MsgDepositAmino;
                    fromAmino: (object: _76.MsgDepositAmino) => _76.MsgDeposit;
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
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _52.CommunityPoolSpendProposal | _52.CommunityPoolSpendProposalWithDeposit | _100.ParameterChangeProposal | _122.SoftwareUpgradeProposal | _122.CancelSoftwareUpgradeProposal | _74.TextProposal;
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
            TextProposal: {
                typeUrl: string;
                encode(message: _74.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.TextProposal;
                fromPartial(object: Partial<_74.TextProposal>): _74.TextProposal;
                fromAmino(object: _74.TextProposalAmino): _74.TextProposal;
                toAmino(message: _74.TextProposal): _74.TextProposalAmino;
                fromAminoMsg(object: _74.TextProposalAminoMsg): _74.TextProposal;
                toAminoMsg(message: _74.TextProposal): _74.TextProposalAminoMsg;
                fromProtoMsg(message: _74.TextProposalProtoMsg): _74.TextProposal;
                toProto(message: _74.TextProposal): Uint8Array;
                toProtoMsg(message: _74.TextProposal): _74.TextProposalProtoMsg;
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
    }
    namespace group {
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
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                groupInfo(request: _80.QueryGroupInfoRequest): Promise<_80.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _80.QueryGroupPolicyInfoRequest): Promise<_80.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _80.QueryGroupMembersRequest): Promise<_80.QueryGroupMembersResponse>;
                groupsByAdmin(request: _80.QueryGroupsByAdminRequest): Promise<_80.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _80.QueryGroupPoliciesByGroupRequest): Promise<_80.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _80.QueryGroupPoliciesByAdminRequest): Promise<_80.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _80.QueryProposalsByGroupPolicyRequest): Promise<_80.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _80.QueryVoteByProposalVoterRequest): Promise<_80.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _80.QueryVotesByProposalRequest): Promise<_80.QueryVotesByProposalResponse>;
                votesByVoter(request: _80.QueryVotesByVoterRequest): Promise<_80.QueryVotesByVoterResponse>;
                groupsByMember(request: _80.QueryGroupsByMemberRequest): Promise<_80.QueryGroupsByMemberResponse>;
                tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
                groups(request?: _80.QueryGroupsRequest): Promise<_80.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: _81.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _81.MsgWithdrawProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: _81.MsgExec;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _81.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _81.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _81.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _81.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _81.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: _81.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _81.MsgWithdrawProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: _81.MsgExec;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _81.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _81.MsgCreateGroup) => _81.MsgCreateGroupAmino;
                    fromAmino: (object: _81.MsgCreateGroupAmino) => _81.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupMembers) => _81.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _81.MsgUpdateGroupMembersAmino) => _81.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupAdmin) => _81.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _81.MsgUpdateGroupAdminAmino) => _81.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupMetadata) => _81.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _81.MsgUpdateGroupMetadataAmino) => _81.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _81.MsgCreateGroupPolicy) => _81.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _81.MsgCreateGroupPolicyAmino) => _81.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _81.MsgCreateGroupWithPolicy) => _81.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _81.MsgCreateGroupWithPolicyAmino) => _81.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupPolicyAdmin) => _81.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _81.MsgUpdateGroupPolicyAdminAmino) => _81.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupPolicyDecisionPolicy) => _81.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _81.MsgUpdateGroupPolicyDecisionPolicyAmino) => _81.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupPolicyMetadata) => _81.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _81.MsgUpdateGroupPolicyMetadataAmino) => _81.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _81.MsgSubmitProposal) => _81.MsgSubmitProposalAmino;
                    fromAmino: (object: _81.MsgSubmitProposalAmino) => _81.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _81.MsgWithdrawProposal) => _81.MsgWithdrawProposalAmino;
                    fromAmino: (object: _81.MsgWithdrawProposalAmino) => _81.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVote) => _81.MsgVoteAmino;
                    fromAmino: (object: _81.MsgVoteAmino) => _81.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _81.MsgExec) => _81.MsgExecAmino;
                    fromAmino: (object: _81.MsgExecAmino) => _81.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _81.MsgLeaveGroup) => _81.MsgLeaveGroupAmino;
                    fromAmino: (object: _81.MsgLeaveGroupAmino) => _81.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _82.VoteOption;
            voteOptionToJSON(object: _82.VoteOption): string;
            proposalStatusFromJSON(object: any): _82.ProposalStatus;
            proposalStatusToJSON(object: _82.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _82.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _82.ProposalExecutorResult): string;
            VoteOption: typeof _82.VoteOption;
            VoteOptionSDKType: typeof _82.VoteOption;
            VoteOptionAmino: typeof _82.VoteOption;
            ProposalStatus: typeof _82.ProposalStatus;
            ProposalStatusSDKType: typeof _82.ProposalStatus;
            ProposalStatusAmino: typeof _82.ProposalStatus;
            ProposalExecutorResult: typeof _82.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _82.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _82.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _82.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Member;
                fromPartial(object: Partial<_82.Member>): _82.Member;
                fromAmino(object: _82.MemberAmino): _82.Member;
                toAmino(message: _82.Member): _82.MemberAmino;
                fromAminoMsg(object: _82.MemberAminoMsg): _82.Member;
                toAminoMsg(message: _82.Member): _82.MemberAminoMsg;
                fromProtoMsg(message: _82.MemberProtoMsg): _82.Member;
                toProto(message: _82.Member): Uint8Array;
                toProtoMsg(message: _82.Member): _82.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _82.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MemberRequest;
                fromPartial(object: Partial<_82.MemberRequest>): _82.MemberRequest;
                fromAmino(object: _82.MemberRequestAmino): _82.MemberRequest;
                toAmino(message: _82.MemberRequest): _82.MemberRequestAmino;
                fromAminoMsg(object: _82.MemberRequestAminoMsg): _82.MemberRequest;
                toAminoMsg(message: _82.MemberRequest): _82.MemberRequestAminoMsg;
                fromProtoMsg(message: _82.MemberRequestProtoMsg): _82.MemberRequest;
                toProto(message: _82.MemberRequest): Uint8Array;
                toProtoMsg(message: _82.MemberRequest): _82.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _82.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_82.ThresholdDecisionPolicy>): _82.ThresholdDecisionPolicy;
                fromAmino(object: _82.ThresholdDecisionPolicyAmino): _82.ThresholdDecisionPolicy;
                toAmino(message: _82.ThresholdDecisionPolicy): _82.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _82.ThresholdDecisionPolicyAminoMsg): _82.ThresholdDecisionPolicy;
                toAminoMsg(message: _82.ThresholdDecisionPolicy): _82.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _82.ThresholdDecisionPolicyProtoMsg): _82.ThresholdDecisionPolicy;
                toProto(message: _82.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _82.ThresholdDecisionPolicy): _82.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _82.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.PercentageDecisionPolicy;
                fromPartial(object: Partial<_82.PercentageDecisionPolicy>): _82.PercentageDecisionPolicy;
                fromAmino(object: _82.PercentageDecisionPolicyAmino): _82.PercentageDecisionPolicy;
                toAmino(message: _82.PercentageDecisionPolicy): _82.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _82.PercentageDecisionPolicyAminoMsg): _82.PercentageDecisionPolicy;
                toAminoMsg(message: _82.PercentageDecisionPolicy): _82.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _82.PercentageDecisionPolicyProtoMsg): _82.PercentageDecisionPolicy;
                toProto(message: _82.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _82.PercentageDecisionPolicy): _82.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _82.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DecisionPolicyWindows;
                fromPartial(object: Partial<_82.DecisionPolicyWindows>): _82.DecisionPolicyWindows;
                fromAmino(object: _82.DecisionPolicyWindowsAmino): _82.DecisionPolicyWindows;
                toAmino(message: _82.DecisionPolicyWindows): _82.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _82.DecisionPolicyWindowsAminoMsg): _82.DecisionPolicyWindows;
                toAminoMsg(message: _82.DecisionPolicyWindows): _82.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _82.DecisionPolicyWindowsProtoMsg): _82.DecisionPolicyWindows;
                toProto(message: _82.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _82.DecisionPolicyWindows): _82.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _82.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.GroupInfo;
                fromPartial(object: Partial<_82.GroupInfo>): _82.GroupInfo;
                fromAmino(object: _82.GroupInfoAmino): _82.GroupInfo;
                toAmino(message: _82.GroupInfo): _82.GroupInfoAmino;
                fromAminoMsg(object: _82.GroupInfoAminoMsg): _82.GroupInfo;
                toAminoMsg(message: _82.GroupInfo): _82.GroupInfoAminoMsg;
                fromProtoMsg(message: _82.GroupInfoProtoMsg): _82.GroupInfo;
                toProto(message: _82.GroupInfo): Uint8Array;
                toProtoMsg(message: _82.GroupInfo): _82.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _82.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.GroupMember;
                fromPartial(object: Partial<_82.GroupMember>): _82.GroupMember;
                fromAmino(object: _82.GroupMemberAmino): _82.GroupMember;
                toAmino(message: _82.GroupMember): _82.GroupMemberAmino;
                fromAminoMsg(object: _82.GroupMemberAminoMsg): _82.GroupMember;
                toAminoMsg(message: _82.GroupMember): _82.GroupMemberAminoMsg;
                fromProtoMsg(message: _82.GroupMemberProtoMsg): _82.GroupMember;
                toProto(message: _82.GroupMember): Uint8Array;
                toProtoMsg(message: _82.GroupMember): _82.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _82.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.GroupPolicyInfo;
                fromPartial(object: Partial<_82.GroupPolicyInfo>): _82.GroupPolicyInfo;
                fromAmino(object: _82.GroupPolicyInfoAmino): _82.GroupPolicyInfo;
                toAmino(message: _82.GroupPolicyInfo): _82.GroupPolicyInfoAmino;
                fromAminoMsg(object: _82.GroupPolicyInfoAminoMsg): _82.GroupPolicyInfo;
                toAminoMsg(message: _82.GroupPolicyInfo): _82.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _82.GroupPolicyInfoProtoMsg): _82.GroupPolicyInfo;
                toProto(message: _82.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _82.GroupPolicyInfo): _82.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _82.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Proposal;
                fromPartial(object: Partial<_82.Proposal>): _82.Proposal;
                fromAmino(object: _82.ProposalAmino): _82.Proposal;
                toAmino(message: _82.Proposal): _82.ProposalAmino;
                fromAminoMsg(object: _82.ProposalAminoMsg): _82.Proposal;
                toAminoMsg(message: _82.Proposal): _82.ProposalAminoMsg;
                fromProtoMsg(message: _82.ProposalProtoMsg): _82.Proposal;
                toProto(message: _82.Proposal): Uint8Array;
                toProtoMsg(message: _82.Proposal): _82.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _82.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.TallyResult;
                fromPartial(object: Partial<_82.TallyResult>): _82.TallyResult;
                fromAmino(object: _82.TallyResultAmino): _82.TallyResult;
                toAmino(message: _82.TallyResult): _82.TallyResultAmino;
                fromAminoMsg(object: _82.TallyResultAminoMsg): _82.TallyResult;
                toAminoMsg(message: _82.TallyResult): _82.TallyResultAminoMsg;
                fromProtoMsg(message: _82.TallyResultProtoMsg): _82.TallyResult;
                toProto(message: _82.TallyResult): Uint8Array;
                toProtoMsg(message: _82.TallyResult): _82.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _82.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Vote;
                fromPartial(object: Partial<_82.Vote>): _82.Vote;
                fromAmino(object: _82.VoteAmino): _82.Vote;
                toAmino(message: _82.Vote): _82.VoteAmino;
                fromAminoMsg(object: _82.VoteAminoMsg): _82.Vote;
                toAminoMsg(message: _82.Vote): _82.VoteAminoMsg;
                fromProtoMsg(message: _82.VoteProtoMsg): _82.Vote;
                toProto(message: _82.Vote): Uint8Array;
                toProtoMsg(message: _82.Vote): _82.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _82.ThresholdDecisionPolicy | _82.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _81.Exec;
            execToJSON(object: _81.Exec): string;
            Exec: typeof _81.Exec;
            ExecSDKType: typeof _81.Exec;
            ExecAmino: typeof _81.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgCreateGroup;
                fromPartial(object: Partial<_81.MsgCreateGroup>): _81.MsgCreateGroup;
                fromAmino(object: _81.MsgCreateGroupAmino): _81.MsgCreateGroup;
                toAmino(message: _81.MsgCreateGroup): _81.MsgCreateGroupAmino;
                fromAminoMsg(object: _81.MsgCreateGroupAminoMsg): _81.MsgCreateGroup;
                toAminoMsg(message: _81.MsgCreateGroup): _81.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupProtoMsg): _81.MsgCreateGroup;
                toProto(message: _81.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroup): _81.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgCreateGroupResponse;
                fromPartial(object: Partial<_81.MsgCreateGroupResponse>): _81.MsgCreateGroupResponse;
                fromAmino(object: _81.MsgCreateGroupResponseAmino): _81.MsgCreateGroupResponse;
                toAmino(message: _81.MsgCreateGroupResponse): _81.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _81.MsgCreateGroupResponseAminoMsg): _81.MsgCreateGroupResponse;
                toAminoMsg(message: _81.MsgCreateGroupResponse): _81.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupResponseProtoMsg): _81.MsgCreateGroupResponse;
                toProto(message: _81.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupResponse): _81.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_81.MsgUpdateGroupMembers>): _81.MsgUpdateGroupMembers;
                fromAmino(object: _81.MsgUpdateGroupMembersAmino): _81.MsgUpdateGroupMembers;
                toAmino(message: _81.MsgUpdateGroupMembers): _81.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMembersAminoMsg): _81.MsgUpdateGroupMembers;
                toAminoMsg(message: _81.MsgUpdateGroupMembers): _81.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMembersProtoMsg): _81.MsgUpdateGroupMembers;
                toProto(message: _81.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMembers): _81.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupMembersResponse>): _81.MsgUpdateGroupMembersResponse;
                fromAmino(_: _81.MsgUpdateGroupMembersResponseAmino): _81.MsgUpdateGroupMembersResponse;
                toAmino(_: _81.MsgUpdateGroupMembersResponse): _81.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMembersResponseAminoMsg): _81.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _81.MsgUpdateGroupMembersResponse): _81.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMembersResponseProtoMsg): _81.MsgUpdateGroupMembersResponse;
                toProto(message: _81.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMembersResponse): _81.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_81.MsgUpdateGroupAdmin>): _81.MsgUpdateGroupAdmin;
                fromAmino(object: _81.MsgUpdateGroupAdminAmino): _81.MsgUpdateGroupAdmin;
                toAmino(message: _81.MsgUpdateGroupAdmin): _81.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupAdminAminoMsg): _81.MsgUpdateGroupAdmin;
                toAminoMsg(message: _81.MsgUpdateGroupAdmin): _81.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupAdminProtoMsg): _81.MsgUpdateGroupAdmin;
                toProto(message: _81.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupAdmin): _81.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupAdminResponse>): _81.MsgUpdateGroupAdminResponse;
                fromAmino(_: _81.MsgUpdateGroupAdminResponseAmino): _81.MsgUpdateGroupAdminResponse;
                toAmino(_: _81.MsgUpdateGroupAdminResponse): _81.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupAdminResponseAminoMsg): _81.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _81.MsgUpdateGroupAdminResponse): _81.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupAdminResponseProtoMsg): _81.MsgUpdateGroupAdminResponse;
                toProto(message: _81.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupAdminResponse): _81.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_81.MsgUpdateGroupMetadata>): _81.MsgUpdateGroupMetadata;
                fromAmino(object: _81.MsgUpdateGroupMetadataAmino): _81.MsgUpdateGroupMetadata;
                toAmino(message: _81.MsgUpdateGroupMetadata): _81.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMetadataAminoMsg): _81.MsgUpdateGroupMetadata;
                toAminoMsg(message: _81.MsgUpdateGroupMetadata): _81.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMetadataProtoMsg): _81.MsgUpdateGroupMetadata;
                toProto(message: _81.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMetadata): _81.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupMetadataResponse>): _81.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _81.MsgUpdateGroupMetadataResponseAmino): _81.MsgUpdateGroupMetadataResponse;
                toAmino(_: _81.MsgUpdateGroupMetadataResponse): _81.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMetadataResponseAminoMsg): _81.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _81.MsgUpdateGroupMetadataResponse): _81.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMetadataResponseProtoMsg): _81.MsgUpdateGroupMetadataResponse;
                toProto(message: _81.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMetadataResponse): _81.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_81.MsgCreateGroupPolicy>): _81.MsgCreateGroupPolicy;
                fromAmino(object: _81.MsgCreateGroupPolicyAmino): _81.MsgCreateGroupPolicy;
                toAmino(message: _81.MsgCreateGroupPolicy): _81.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _81.MsgCreateGroupPolicyAminoMsg): _81.MsgCreateGroupPolicy;
                toAminoMsg(message: _81.MsgCreateGroupPolicy): _81.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupPolicyProtoMsg): _81.MsgCreateGroupPolicy;
                toProto(message: _81.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupPolicy): _81.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_81.MsgCreateGroupPolicyResponse>): _81.MsgCreateGroupPolicyResponse;
                fromAmino(object: _81.MsgCreateGroupPolicyResponseAmino): _81.MsgCreateGroupPolicyResponse;
                toAmino(message: _81.MsgCreateGroupPolicyResponse): _81.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _81.MsgCreateGroupPolicyResponseAminoMsg): _81.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _81.MsgCreateGroupPolicyResponse): _81.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupPolicyResponseProtoMsg): _81.MsgCreateGroupPolicyResponse;
                toProto(message: _81.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupPolicyResponse): _81.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_81.MsgUpdateGroupPolicyAdmin>): _81.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _81.MsgUpdateGroupPolicyAdminAmino): _81.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _81.MsgUpdateGroupPolicyAdmin): _81.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyAdminAminoMsg): _81.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyAdmin): _81.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyAdminProtoMsg): _81.MsgUpdateGroupPolicyAdmin;
                toProto(message: _81.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyAdmin): _81.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupPolicyAdminResponse>): _81.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _81.MsgUpdateGroupPolicyAdminResponseAmino): _81.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _81.MsgUpdateGroupPolicyAdminResponse): _81.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyAdminResponseAminoMsg): _81.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyAdminResponse): _81.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyAdminResponseProtoMsg): _81.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _81.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyAdminResponse): _81.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_81.MsgCreateGroupWithPolicy>): _81.MsgCreateGroupWithPolicy;
                fromAmino(object: _81.MsgCreateGroupWithPolicyAmino): _81.MsgCreateGroupWithPolicy;
                toAmino(message: _81.MsgCreateGroupWithPolicy): _81.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _81.MsgCreateGroupWithPolicyAminoMsg): _81.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _81.MsgCreateGroupWithPolicy): _81.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupWithPolicyProtoMsg): _81.MsgCreateGroupWithPolicy;
                toProto(message: _81.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupWithPolicy): _81.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_81.MsgCreateGroupWithPolicyResponse>): _81.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _81.MsgCreateGroupWithPolicyResponseAmino): _81.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _81.MsgCreateGroupWithPolicyResponse): _81.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _81.MsgCreateGroupWithPolicyResponseAminoMsg): _81.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _81.MsgCreateGroupWithPolicyResponse): _81.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupWithPolicyResponseProtoMsg): _81.MsgCreateGroupWithPolicyResponse;
                toProto(message: _81.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupWithPolicyResponse): _81.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_81.MsgUpdateGroupPolicyDecisionPolicy>): _81.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _81.MsgUpdateGroupPolicyDecisionPolicyAmino): _81.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _81.MsgUpdateGroupPolicyDecisionPolicy): _81.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _81.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicy): _81.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _81.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _81.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicy): _81.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupPolicyDecisionPolicyResponse>): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _81.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): _81.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): _81.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): _81.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_81.MsgUpdateGroupPolicyMetadata>): _81.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _81.MsgUpdateGroupPolicyMetadataAmino): _81.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _81.MsgUpdateGroupPolicyMetadata): _81.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyMetadataAminoMsg): _81.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyMetadata): _81.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyMetadataProtoMsg): _81.MsgUpdateGroupPolicyMetadata;
                toProto(message: _81.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyMetadata): _81.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupPolicyMetadataResponse>): _81.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _81.MsgUpdateGroupPolicyMetadataResponseAmino): _81.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _81.MsgUpdateGroupPolicyMetadataResponse): _81.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _81.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyMetadataResponse): _81.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _81.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _81.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyMetadataResponse): _81.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
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
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _81.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgWithdrawProposal;
                fromPartial(object: Partial<_81.MsgWithdrawProposal>): _81.MsgWithdrawProposal;
                fromAmino(object: _81.MsgWithdrawProposalAmino): _81.MsgWithdrawProposal;
                toAmino(message: _81.MsgWithdrawProposal): _81.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _81.MsgWithdrawProposalAminoMsg): _81.MsgWithdrawProposal;
                toAminoMsg(message: _81.MsgWithdrawProposal): _81.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _81.MsgWithdrawProposalProtoMsg): _81.MsgWithdrawProposal;
                toProto(message: _81.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _81.MsgWithdrawProposal): _81.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _81.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_81.MsgWithdrawProposalResponse>): _81.MsgWithdrawProposalResponse;
                fromAmino(_: _81.MsgWithdrawProposalResponseAmino): _81.MsgWithdrawProposalResponse;
                toAmino(_: _81.MsgWithdrawProposalResponse): _81.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _81.MsgWithdrawProposalResponseAminoMsg): _81.MsgWithdrawProposalResponse;
                toAminoMsg(message: _81.MsgWithdrawProposalResponse): _81.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _81.MsgWithdrawProposalResponseProtoMsg): _81.MsgWithdrawProposalResponse;
                toProto(message: _81.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _81.MsgWithdrawProposalResponse): _81.MsgWithdrawProposalResponseProtoMsg;
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
            MsgExec: {
                typeUrl: string;
                encode(message: _81.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgExec;
                fromPartial(object: Partial<_81.MsgExec>): _81.MsgExec;
                fromAmino(object: _81.MsgExecAmino): _81.MsgExec;
                toAmino(message: _81.MsgExec): _81.MsgExecAmino;
                fromAminoMsg(object: _81.MsgExecAminoMsg): _81.MsgExec;
                toAminoMsg(message: _81.MsgExec): _81.MsgExecAminoMsg;
                fromProtoMsg(message: _81.MsgExecProtoMsg): _81.MsgExec;
                toProto(message: _81.MsgExec): Uint8Array;
                toProtoMsg(message: _81.MsgExec): _81.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _81.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgExecResponse;
                fromPartial(object: Partial<_81.MsgExecResponse>): _81.MsgExecResponse;
                fromAmino(object: _81.MsgExecResponseAmino): _81.MsgExecResponse;
                toAmino(message: _81.MsgExecResponse): _81.MsgExecResponseAmino;
                fromAminoMsg(object: _81.MsgExecResponseAminoMsg): _81.MsgExecResponse;
                toAminoMsg(message: _81.MsgExecResponse): _81.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _81.MsgExecResponseProtoMsg): _81.MsgExecResponse;
                toProto(message: _81.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _81.MsgExecResponse): _81.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _81.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.MsgLeaveGroup;
                fromPartial(object: Partial<_81.MsgLeaveGroup>): _81.MsgLeaveGroup;
                fromAmino(object: _81.MsgLeaveGroupAmino): _81.MsgLeaveGroup;
                toAmino(message: _81.MsgLeaveGroup): _81.MsgLeaveGroupAmino;
                fromAminoMsg(object: _81.MsgLeaveGroupAminoMsg): _81.MsgLeaveGroup;
                toAminoMsg(message: _81.MsgLeaveGroup): _81.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _81.MsgLeaveGroupProtoMsg): _81.MsgLeaveGroup;
                toProto(message: _81.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _81.MsgLeaveGroup): _81.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _81.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _81.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_81.MsgLeaveGroupResponse>): _81.MsgLeaveGroupResponse;
                fromAmino(_: _81.MsgLeaveGroupResponseAmino): _81.MsgLeaveGroupResponse;
                toAmino(_: _81.MsgLeaveGroupResponse): _81.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _81.MsgLeaveGroupResponseAminoMsg): _81.MsgLeaveGroupResponse;
                toAminoMsg(message: _81.MsgLeaveGroupResponse): _81.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _81.MsgLeaveGroupResponseProtoMsg): _81.MsgLeaveGroupResponse;
                toProto(message: _81.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _81.MsgLeaveGroupResponse): _81.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupInfoRequest;
                fromPartial(object: Partial<_80.QueryGroupInfoRequest>): _80.QueryGroupInfoRequest;
                fromAmino(object: _80.QueryGroupInfoRequestAmino): _80.QueryGroupInfoRequest;
                toAmino(message: _80.QueryGroupInfoRequest): _80.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _80.QueryGroupInfoRequestAminoMsg): _80.QueryGroupInfoRequest;
                toAminoMsg(message: _80.QueryGroupInfoRequest): _80.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupInfoRequestProtoMsg): _80.QueryGroupInfoRequest;
                toProto(message: _80.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupInfoRequest): _80.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupInfoResponse;
                fromPartial(object: Partial<_80.QueryGroupInfoResponse>): _80.QueryGroupInfoResponse;
                fromAmino(object: _80.QueryGroupInfoResponseAmino): _80.QueryGroupInfoResponse;
                toAmino(message: _80.QueryGroupInfoResponse): _80.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _80.QueryGroupInfoResponseAminoMsg): _80.QueryGroupInfoResponse;
                toAminoMsg(message: _80.QueryGroupInfoResponse): _80.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupInfoResponseProtoMsg): _80.QueryGroupInfoResponse;
                toProto(message: _80.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupInfoResponse): _80.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_80.QueryGroupPolicyInfoRequest>): _80.QueryGroupPolicyInfoRequest;
                fromAmino(object: _80.QueryGroupPolicyInfoRequestAmino): _80.QueryGroupPolicyInfoRequest;
                toAmino(message: _80.QueryGroupPolicyInfoRequest): _80.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _80.QueryGroupPolicyInfoRequestAminoMsg): _80.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _80.QueryGroupPolicyInfoRequest): _80.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPolicyInfoRequestProtoMsg): _80.QueryGroupPolicyInfoRequest;
                toProto(message: _80.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPolicyInfoRequest): _80.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_80.QueryGroupPolicyInfoResponse>): _80.QueryGroupPolicyInfoResponse;
                fromAmino(object: _80.QueryGroupPolicyInfoResponseAmino): _80.QueryGroupPolicyInfoResponse;
                toAmino(message: _80.QueryGroupPolicyInfoResponse): _80.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _80.QueryGroupPolicyInfoResponseAminoMsg): _80.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _80.QueryGroupPolicyInfoResponse): _80.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPolicyInfoResponseProtoMsg): _80.QueryGroupPolicyInfoResponse;
                toProto(message: _80.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPolicyInfoResponse): _80.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupMembersRequest;
                fromPartial(object: Partial<_80.QueryGroupMembersRequest>): _80.QueryGroupMembersRequest;
                fromAmino(object: _80.QueryGroupMembersRequestAmino): _80.QueryGroupMembersRequest;
                toAmino(message: _80.QueryGroupMembersRequest): _80.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _80.QueryGroupMembersRequestAminoMsg): _80.QueryGroupMembersRequest;
                toAminoMsg(message: _80.QueryGroupMembersRequest): _80.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupMembersRequestProtoMsg): _80.QueryGroupMembersRequest;
                toProto(message: _80.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupMembersRequest): _80.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupMembersResponse;
                fromPartial(object: Partial<_80.QueryGroupMembersResponse>): _80.QueryGroupMembersResponse;
                fromAmino(object: _80.QueryGroupMembersResponseAmino): _80.QueryGroupMembersResponse;
                toAmino(message: _80.QueryGroupMembersResponse): _80.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _80.QueryGroupMembersResponseAminoMsg): _80.QueryGroupMembersResponse;
                toAminoMsg(message: _80.QueryGroupMembersResponse): _80.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupMembersResponseProtoMsg): _80.QueryGroupMembersResponse;
                toProto(message: _80.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupMembersResponse): _80.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_80.QueryGroupsByAdminRequest>): _80.QueryGroupsByAdminRequest;
                fromAmino(object: _80.QueryGroupsByAdminRequestAmino): _80.QueryGroupsByAdminRequest;
                toAmino(message: _80.QueryGroupsByAdminRequest): _80.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _80.QueryGroupsByAdminRequestAminoMsg): _80.QueryGroupsByAdminRequest;
                toAminoMsg(message: _80.QueryGroupsByAdminRequest): _80.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByAdminRequestProtoMsg): _80.QueryGroupsByAdminRequest;
                toProto(message: _80.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByAdminRequest): _80.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_80.QueryGroupsByAdminResponse>): _80.QueryGroupsByAdminResponse;
                fromAmino(object: _80.QueryGroupsByAdminResponseAmino): _80.QueryGroupsByAdminResponse;
                toAmino(message: _80.QueryGroupsByAdminResponse): _80.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _80.QueryGroupsByAdminResponseAminoMsg): _80.QueryGroupsByAdminResponse;
                toAminoMsg(message: _80.QueryGroupsByAdminResponse): _80.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByAdminResponseProtoMsg): _80.QueryGroupsByAdminResponse;
                toProto(message: _80.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByAdminResponse): _80.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByGroupRequest>): _80.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _80.QueryGroupPoliciesByGroupRequestAmino): _80.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _80.QueryGroupPoliciesByGroupRequest): _80.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByGroupRequestAminoMsg): _80.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _80.QueryGroupPoliciesByGroupRequest): _80.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByGroupRequestProtoMsg): _80.QueryGroupPoliciesByGroupRequest;
                toProto(message: _80.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByGroupRequest): _80.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByGroupResponse>): _80.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _80.QueryGroupPoliciesByGroupResponseAmino): _80.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _80.QueryGroupPoliciesByGroupResponse): _80.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByGroupResponseAminoMsg): _80.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _80.QueryGroupPoliciesByGroupResponse): _80.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByGroupResponseProtoMsg): _80.QueryGroupPoliciesByGroupResponse;
                toProto(message: _80.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByGroupResponse): _80.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByAdminRequest>): _80.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _80.QueryGroupPoliciesByAdminRequestAmino): _80.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _80.QueryGroupPoliciesByAdminRequest): _80.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByAdminRequestAminoMsg): _80.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _80.QueryGroupPoliciesByAdminRequest): _80.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByAdminRequestProtoMsg): _80.QueryGroupPoliciesByAdminRequest;
                toProto(message: _80.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByAdminRequest): _80.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByAdminResponse>): _80.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _80.QueryGroupPoliciesByAdminResponseAmino): _80.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _80.QueryGroupPoliciesByAdminResponse): _80.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByAdminResponseAminoMsg): _80.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _80.QueryGroupPoliciesByAdminResponse): _80.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByAdminResponseProtoMsg): _80.QueryGroupPoliciesByAdminResponse;
                toProto(message: _80.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByAdminResponse): _80.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
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
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_80.QueryProposalsByGroupPolicyRequest>): _80.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _80.QueryProposalsByGroupPolicyRequestAmino): _80.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _80.QueryProposalsByGroupPolicyRequest): _80.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _80.QueryProposalsByGroupPolicyRequestAminoMsg): _80.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _80.QueryProposalsByGroupPolicyRequest): _80.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsByGroupPolicyRequestProtoMsg): _80.QueryProposalsByGroupPolicyRequest;
                toProto(message: _80.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsByGroupPolicyRequest): _80.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_80.QueryProposalsByGroupPolicyResponse>): _80.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _80.QueryProposalsByGroupPolicyResponseAmino): _80.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _80.QueryProposalsByGroupPolicyResponse): _80.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _80.QueryProposalsByGroupPolicyResponseAminoMsg): _80.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _80.QueryProposalsByGroupPolicyResponse): _80.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsByGroupPolicyResponseProtoMsg): _80.QueryProposalsByGroupPolicyResponse;
                toProto(message: _80.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsByGroupPolicyResponse): _80.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _80.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_80.QueryVoteByProposalVoterRequest>): _80.QueryVoteByProposalVoterRequest;
                fromAmino(object: _80.QueryVoteByProposalVoterRequestAmino): _80.QueryVoteByProposalVoterRequest;
                toAmino(message: _80.QueryVoteByProposalVoterRequest): _80.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _80.QueryVoteByProposalVoterRequestAminoMsg): _80.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _80.QueryVoteByProposalVoterRequest): _80.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVoteByProposalVoterRequestProtoMsg): _80.QueryVoteByProposalVoterRequest;
                toProto(message: _80.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVoteByProposalVoterRequest): _80.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _80.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_80.QueryVoteByProposalVoterResponse>): _80.QueryVoteByProposalVoterResponse;
                fromAmino(object: _80.QueryVoteByProposalVoterResponseAmino): _80.QueryVoteByProposalVoterResponse;
                toAmino(message: _80.QueryVoteByProposalVoterResponse): _80.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _80.QueryVoteByProposalVoterResponseAminoMsg): _80.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _80.QueryVoteByProposalVoterResponse): _80.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVoteByProposalVoterResponseProtoMsg): _80.QueryVoteByProposalVoterResponse;
                toProto(message: _80.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVoteByProposalVoterResponse): _80.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _80.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_80.QueryVotesByProposalRequest>): _80.QueryVotesByProposalRequest;
                fromAmino(object: _80.QueryVotesByProposalRequestAmino): _80.QueryVotesByProposalRequest;
                toAmino(message: _80.QueryVotesByProposalRequest): _80.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _80.QueryVotesByProposalRequestAminoMsg): _80.QueryVotesByProposalRequest;
                toAminoMsg(message: _80.QueryVotesByProposalRequest): _80.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByProposalRequestProtoMsg): _80.QueryVotesByProposalRequest;
                toProto(message: _80.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByProposalRequest): _80.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _80.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_80.QueryVotesByProposalResponse>): _80.QueryVotesByProposalResponse;
                fromAmino(object: _80.QueryVotesByProposalResponseAmino): _80.QueryVotesByProposalResponse;
                toAmino(message: _80.QueryVotesByProposalResponse): _80.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _80.QueryVotesByProposalResponseAminoMsg): _80.QueryVotesByProposalResponse;
                toAminoMsg(message: _80.QueryVotesByProposalResponse): _80.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByProposalResponseProtoMsg): _80.QueryVotesByProposalResponse;
                toProto(message: _80.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByProposalResponse): _80.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _80.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_80.QueryVotesByVoterRequest>): _80.QueryVotesByVoterRequest;
                fromAmino(object: _80.QueryVotesByVoterRequestAmino): _80.QueryVotesByVoterRequest;
                toAmino(message: _80.QueryVotesByVoterRequest): _80.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _80.QueryVotesByVoterRequestAminoMsg): _80.QueryVotesByVoterRequest;
                toAminoMsg(message: _80.QueryVotesByVoterRequest): _80.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByVoterRequestProtoMsg): _80.QueryVotesByVoterRequest;
                toProto(message: _80.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByVoterRequest): _80.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _80.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_80.QueryVotesByVoterResponse>): _80.QueryVotesByVoterResponse;
                fromAmino(object: _80.QueryVotesByVoterResponseAmino): _80.QueryVotesByVoterResponse;
                toAmino(message: _80.QueryVotesByVoterResponse): _80.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _80.QueryVotesByVoterResponseAminoMsg): _80.QueryVotesByVoterResponse;
                toAminoMsg(message: _80.QueryVotesByVoterResponse): _80.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByVoterResponseProtoMsg): _80.QueryVotesByVoterResponse;
                toProto(message: _80.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByVoterResponse): _80.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_80.QueryGroupsByMemberRequest>): _80.QueryGroupsByMemberRequest;
                fromAmino(object: _80.QueryGroupsByMemberRequestAmino): _80.QueryGroupsByMemberRequest;
                toAmino(message: _80.QueryGroupsByMemberRequest): _80.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _80.QueryGroupsByMemberRequestAminoMsg): _80.QueryGroupsByMemberRequest;
                toAminoMsg(message: _80.QueryGroupsByMemberRequest): _80.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByMemberRequestProtoMsg): _80.QueryGroupsByMemberRequest;
                toProto(message: _80.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByMemberRequest): _80.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_80.QueryGroupsByMemberResponse>): _80.QueryGroupsByMemberResponse;
                fromAmino(object: _80.QueryGroupsByMemberResponseAmino): _80.QueryGroupsByMemberResponse;
                toAmino(message: _80.QueryGroupsByMemberResponse): _80.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _80.QueryGroupsByMemberResponseAminoMsg): _80.QueryGroupsByMemberResponse;
                toAminoMsg(message: _80.QueryGroupsByMemberResponse): _80.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByMemberResponseProtoMsg): _80.QueryGroupsByMemberResponse;
                toProto(message: _80.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByMemberResponse): _80.QueryGroupsByMemberResponseProtoMsg;
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
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupsRequest;
                fromPartial(object: Partial<_80.QueryGroupsRequest>): _80.QueryGroupsRequest;
                fromAmino(object: _80.QueryGroupsRequestAmino): _80.QueryGroupsRequest;
                toAmino(message: _80.QueryGroupsRequest): _80.QueryGroupsRequestAmino;
                fromAminoMsg(object: _80.QueryGroupsRequestAminoMsg): _80.QueryGroupsRequest;
                toAminoMsg(message: _80.QueryGroupsRequest): _80.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsRequestProtoMsg): _80.QueryGroupsRequest;
                toProto(message: _80.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsRequest): _80.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryGroupsResponse;
                fromPartial(object: Partial<_80.QueryGroupsResponse>): _80.QueryGroupsResponse;
                fromAmino(object: _80.QueryGroupsResponseAmino): _80.QueryGroupsResponse;
                toAmino(message: _80.QueryGroupsResponse): _80.QueryGroupsResponseAmino;
                fromAminoMsg(object: _80.QueryGroupsResponseAminoMsg): _80.QueryGroupsResponse;
                toAminoMsg(message: _80.QueryGroupsResponse): _80.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsResponseProtoMsg): _80.QueryGroupsResponse;
                toProto(message: _80.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsResponse): _80.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _79.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
                fromAmino(object: _79.GenesisStateAmino): _79.GenesisState;
                toAmino(message: _79.GenesisState): _79.GenesisStateAmino;
                fromAminoMsg(object: _79.GenesisStateAminoMsg): _79.GenesisState;
                toAminoMsg(message: _79.GenesisState): _79.GenesisStateAminoMsg;
                fromProtoMsg(message: _79.GenesisStateProtoMsg): _79.GenesisState;
                toProto(message: _79.GenesisState): Uint8Array;
                toProtoMsg(message: _79.GenesisState): _79.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _78.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventCreateGroup;
                fromPartial(object: Partial<_78.EventCreateGroup>): _78.EventCreateGroup;
                fromAmino(object: _78.EventCreateGroupAmino): _78.EventCreateGroup;
                toAmino(message: _78.EventCreateGroup): _78.EventCreateGroupAmino;
                fromAminoMsg(object: _78.EventCreateGroupAminoMsg): _78.EventCreateGroup;
                toAminoMsg(message: _78.EventCreateGroup): _78.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _78.EventCreateGroupProtoMsg): _78.EventCreateGroup;
                toProto(message: _78.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _78.EventCreateGroup): _78.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _78.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventUpdateGroup;
                fromPartial(object: Partial<_78.EventUpdateGroup>): _78.EventUpdateGroup;
                fromAmino(object: _78.EventUpdateGroupAmino): _78.EventUpdateGroup;
                toAmino(message: _78.EventUpdateGroup): _78.EventUpdateGroupAmino;
                fromAminoMsg(object: _78.EventUpdateGroupAminoMsg): _78.EventUpdateGroup;
                toAminoMsg(message: _78.EventUpdateGroup): _78.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _78.EventUpdateGroupProtoMsg): _78.EventUpdateGroup;
                toProto(message: _78.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _78.EventUpdateGroup): _78.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _78.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventCreateGroupPolicy;
                fromPartial(object: Partial<_78.EventCreateGroupPolicy>): _78.EventCreateGroupPolicy;
                fromAmino(object: _78.EventCreateGroupPolicyAmino): _78.EventCreateGroupPolicy;
                toAmino(message: _78.EventCreateGroupPolicy): _78.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _78.EventCreateGroupPolicyAminoMsg): _78.EventCreateGroupPolicy;
                toAminoMsg(message: _78.EventCreateGroupPolicy): _78.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _78.EventCreateGroupPolicyProtoMsg): _78.EventCreateGroupPolicy;
                toProto(message: _78.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _78.EventCreateGroupPolicy): _78.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _78.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_78.EventUpdateGroupPolicy>): _78.EventUpdateGroupPolicy;
                fromAmino(object: _78.EventUpdateGroupPolicyAmino): _78.EventUpdateGroupPolicy;
                toAmino(message: _78.EventUpdateGroupPolicy): _78.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _78.EventUpdateGroupPolicyAminoMsg): _78.EventUpdateGroupPolicy;
                toAminoMsg(message: _78.EventUpdateGroupPolicy): _78.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _78.EventUpdateGroupPolicyProtoMsg): _78.EventUpdateGroupPolicy;
                toProto(message: _78.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _78.EventUpdateGroupPolicy): _78.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _78.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventSubmitProposal;
                fromPartial(object: Partial<_78.EventSubmitProposal>): _78.EventSubmitProposal;
                fromAmino(object: _78.EventSubmitProposalAmino): _78.EventSubmitProposal;
                toAmino(message: _78.EventSubmitProposal): _78.EventSubmitProposalAmino;
                fromAminoMsg(object: _78.EventSubmitProposalAminoMsg): _78.EventSubmitProposal;
                toAminoMsg(message: _78.EventSubmitProposal): _78.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _78.EventSubmitProposalProtoMsg): _78.EventSubmitProposal;
                toProto(message: _78.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _78.EventSubmitProposal): _78.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _78.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventWithdrawProposal;
                fromPartial(object: Partial<_78.EventWithdrawProposal>): _78.EventWithdrawProposal;
                fromAmino(object: _78.EventWithdrawProposalAmino): _78.EventWithdrawProposal;
                toAmino(message: _78.EventWithdrawProposal): _78.EventWithdrawProposalAmino;
                fromAminoMsg(object: _78.EventWithdrawProposalAminoMsg): _78.EventWithdrawProposal;
                toAminoMsg(message: _78.EventWithdrawProposal): _78.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _78.EventWithdrawProposalProtoMsg): _78.EventWithdrawProposal;
                toProto(message: _78.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _78.EventWithdrawProposal): _78.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _78.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventVote;
                fromPartial(object: Partial<_78.EventVote>): _78.EventVote;
                fromAmino(object: _78.EventVoteAmino): _78.EventVote;
                toAmino(message: _78.EventVote): _78.EventVoteAmino;
                fromAminoMsg(object: _78.EventVoteAminoMsg): _78.EventVote;
                toAminoMsg(message: _78.EventVote): _78.EventVoteAminoMsg;
                fromProtoMsg(message: _78.EventVoteProtoMsg): _78.EventVote;
                toProto(message: _78.EventVote): Uint8Array;
                toProtoMsg(message: _78.EventVote): _78.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _78.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventExec;
                fromPartial(object: Partial<_78.EventExec>): _78.EventExec;
                fromAmino(object: _78.EventExecAmino): _78.EventExec;
                toAmino(message: _78.EventExec): _78.EventExecAmino;
                fromAminoMsg(object: _78.EventExecAminoMsg): _78.EventExec;
                toAminoMsg(message: _78.EventExec): _78.EventExecAminoMsg;
                fromProtoMsg(message: _78.EventExecProtoMsg): _78.EventExec;
                toProto(message: _78.EventExec): Uint8Array;
                toProtoMsg(message: _78.EventExec): _78.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _78.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventLeaveGroup;
                fromPartial(object: Partial<_78.EventLeaveGroup>): _78.EventLeaveGroup;
                fromAmino(object: _78.EventLeaveGroupAmino): _78.EventLeaveGroup;
                toAmino(message: _78.EventLeaveGroup): _78.EventLeaveGroupAmino;
                fromAminoMsg(object: _78.EventLeaveGroupAminoMsg): _78.EventLeaveGroup;
                toAminoMsg(message: _78.EventLeaveGroup): _78.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _78.EventLeaveGroupProtoMsg): _78.EventLeaveGroup;
                toProto(message: _78.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _78.EventLeaveGroup): _78.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _78.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.EventProposalPruned;
                fromPartial(object: Partial<_78.EventProposalPruned>): _78.EventProposalPruned;
                fromAmino(object: _78.EventProposalPrunedAmino): _78.EventProposalPruned;
                toAmino(message: _78.EventProposalPruned): _78.EventProposalPrunedAmino;
                fromAminoMsg(object: _78.EventProposalPrunedAminoMsg): _78.EventProposalPruned;
                toAminoMsg(message: _78.EventProposalPruned): _78.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _78.EventProposalPrunedProtoMsg): _78.EventProposalPruned;
                toProto(message: _78.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _78.EventProposalPruned): _78.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _83.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.Module;
                    fromPartial(object: Partial<_83.Module>): _83.Module;
                    fromAmino(object: _83.ModuleAmino): _83.Module;
                    toAmino(message: _83.Module): _83.ModuleAmino;
                    fromAminoMsg(object: _83.ModuleAminoMsg): _83.Module;
                    toAminoMsg(message: _83.Module): _83.ModuleAminoMsg;
                    fromProtoMsg(message: _83.ModuleProtoMsg): _83.Module;
                    toProto(message: _83.Module): Uint8Array;
                    toProtoMsg(message: _83.Module): _83.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                inflation(request?: _86.QueryInflationRequest): Promise<_86.QueryInflationResponse>;
                annualProvisions(request?: _86.QueryAnnualProvisionsRequest): Promise<_86.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _87.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _87.MsgUpdateParams): {
                        typeUrl: string;
                        value: _87.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _87.MsgUpdateParams): {
                        typeUrl: string;
                        value: _87.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateParams) => _87.MsgUpdateParamsAmino;
                    fromAmino: (object: _87.MsgUpdateParamsAmino) => _87.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _87.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUpdateParams;
                fromPartial(object: Partial<_87.MsgUpdateParams>): _87.MsgUpdateParams;
                fromAmino(object: _87.MsgUpdateParamsAmino): _87.MsgUpdateParams;
                toAmino(message: _87.MsgUpdateParams): _87.MsgUpdateParamsAmino;
                fromAminoMsg(object: _87.MsgUpdateParamsAminoMsg): _87.MsgUpdateParams;
                toAminoMsg(message: _87.MsgUpdateParams): _87.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateParamsProtoMsg): _87.MsgUpdateParams;
                toProto(message: _87.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateParams): _87.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_87.MsgUpdateParamsResponse>): _87.MsgUpdateParamsResponse;
                fromAmino(_: _87.MsgUpdateParamsResponseAmino): _87.MsgUpdateParamsResponse;
                toAmino(_: _87.MsgUpdateParamsResponse): _87.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateParamsResponseAminoMsg): _87.MsgUpdateParamsResponse;
                toAminoMsg(message: _87.MsgUpdateParamsResponse): _87.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateParamsResponseProtoMsg): _87.MsgUpdateParamsResponse;
                toProto(message: _87.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateParamsResponse): _87.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _86.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryParamsRequest;
                fromPartial(_: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
                fromAmino(_: _86.QueryParamsRequestAmino): _86.QueryParamsRequest;
                toAmino(_: _86.QueryParamsRequest): _86.QueryParamsRequestAmino;
                fromAminoMsg(object: _86.QueryParamsRequestAminoMsg): _86.QueryParamsRequest;
                toAminoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryParamsRequestProtoMsg): _86.QueryParamsRequest;
                toProto(message: _86.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _86.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryParamsResponse;
                fromPartial(object: Partial<_86.QueryParamsResponse>): _86.QueryParamsResponse;
                fromAmino(object: _86.QueryParamsResponseAmino): _86.QueryParamsResponse;
                toAmino(message: _86.QueryParamsResponse): _86.QueryParamsResponseAmino;
                fromAminoMsg(object: _86.QueryParamsResponseAminoMsg): _86.QueryParamsResponse;
                toAminoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryParamsResponseProtoMsg): _86.QueryParamsResponse;
                toProto(message: _86.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _86.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryInflationRequest;
                fromPartial(_: Partial<_86.QueryInflationRequest>): _86.QueryInflationRequest;
                fromAmino(_: _86.QueryInflationRequestAmino): _86.QueryInflationRequest;
                toAmino(_: _86.QueryInflationRequest): _86.QueryInflationRequestAmino;
                fromAminoMsg(object: _86.QueryInflationRequestAminoMsg): _86.QueryInflationRequest;
                toAminoMsg(message: _86.QueryInflationRequest): _86.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _86.QueryInflationRequestProtoMsg): _86.QueryInflationRequest;
                toProto(message: _86.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _86.QueryInflationRequest): _86.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _86.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryInflationResponse;
                fromPartial(object: Partial<_86.QueryInflationResponse>): _86.QueryInflationResponse;
                fromAmino(object: _86.QueryInflationResponseAmino): _86.QueryInflationResponse;
                toAmino(message: _86.QueryInflationResponse): _86.QueryInflationResponseAmino;
                fromAminoMsg(object: _86.QueryInflationResponseAminoMsg): _86.QueryInflationResponse;
                toAminoMsg(message: _86.QueryInflationResponse): _86.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _86.QueryInflationResponseProtoMsg): _86.QueryInflationResponse;
                toProto(message: _86.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _86.QueryInflationResponse): _86.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _86.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_86.QueryAnnualProvisionsRequest>): _86.QueryAnnualProvisionsRequest;
                fromAmino(_: _86.QueryAnnualProvisionsRequestAmino): _86.QueryAnnualProvisionsRequest;
                toAmino(_: _86.QueryAnnualProvisionsRequest): _86.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _86.QueryAnnualProvisionsRequestAminoMsg): _86.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _86.QueryAnnualProvisionsRequest): _86.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryAnnualProvisionsRequestProtoMsg): _86.QueryAnnualProvisionsRequest;
                toProto(message: _86.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAnnualProvisionsRequest): _86.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _86.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_86.QueryAnnualProvisionsResponse>): _86.QueryAnnualProvisionsResponse;
                fromAmino(object: _86.QueryAnnualProvisionsResponseAmino): _86.QueryAnnualProvisionsResponse;
                toAmino(message: _86.QueryAnnualProvisionsResponse): _86.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _86.QueryAnnualProvisionsResponseAminoMsg): _86.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _86.QueryAnnualProvisionsResponse): _86.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryAnnualProvisionsResponseProtoMsg): _86.QueryAnnualProvisionsResponse;
                toProto(message: _86.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAnnualProvisionsResponse): _86.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _85.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Minter;
                fromPartial(object: Partial<_85.Minter>): _85.Minter;
                fromAmino(object: _85.MinterAmino): _85.Minter;
                toAmino(message: _85.Minter): _85.MinterAmino;
                fromAminoMsg(object: _85.MinterAminoMsg): _85.Minter;
                toAminoMsg(message: _85.Minter): _85.MinterAminoMsg;
                fromProtoMsg(message: _85.MinterProtoMsg): _85.Minter;
                toProto(message: _85.Minter): Uint8Array;
                toProtoMsg(message: _85.Minter): _85.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _85.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Params;
                fromPartial(object: Partial<_85.Params>): _85.Params;
                fromAmino(object: _85.ParamsAmino): _85.Params;
                toAmino(message: _85.Params): _85.ParamsAmino;
                fromAminoMsg(object: _85.ParamsAminoMsg): _85.Params;
                toAminoMsg(message: _85.Params): _85.ParamsAminoMsg;
                fromProtoMsg(message: _85.ParamsProtoMsg): _85.Params;
                toProto(message: _85.Params): Uint8Array;
                toProtoMsg(message: _85.Params): _85.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _84.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.GenesisState;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
                fromAmino(object: _84.GenesisStateAmino): _84.GenesisState;
                toAmino(message: _84.GenesisState): _84.GenesisStateAmino;
                fromAminoMsg(object: _84.GenesisStateAminoMsg): _84.GenesisState;
                toAminoMsg(message: _84.GenesisState): _84.GenesisStateAminoMsg;
                fromProtoMsg(message: _84.GenesisStateProtoMsg): _84.GenesisState;
                toProto(message: _84.GenesisState): Uint8Array;
                toProtoMsg(message: _84.GenesisState): _84.GenesisStateProtoMsg;
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
                    encode(_: _89.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _89.Module;
                    fromPartial(_: Partial<_89.Module>): _89.Module;
                    fromAmino(_: _89.ModuleAmino): _89.Module;
                    toAmino(_: _89.Module): _89.ModuleAmino;
                    fromAminoMsg(object: _89.ModuleAminoMsg): _89.Module;
                    toAminoMsg(message: _89.Module): _89.ModuleAminoMsg;
                    fromProtoMsg(message: _89.ModuleProtoMsg): _89.Module;
                    toProto(message: _89.Module): Uint8Array;
                    toProtoMsg(message: _89.Module): _89.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _93.QueryBalanceRequest): Promise<_93.QueryBalanceResponse>;
                owner(request: _93.QueryOwnerRequest): Promise<_93.QueryOwnerResponse>;
                supply(request: _93.QuerySupplyRequest): Promise<_93.QuerySupplyResponse>;
                nFTs(request: _93.QueryNFTsRequest): Promise<_93.QueryNFTsResponse>;
                nFT(request: _93.QueryNFTRequest): Promise<_93.QueryNFTResponse>;
                class(request: _93.QueryClassRequest): Promise<_93.QueryClassResponse>;
                classes(request?: _93.QueryClassesRequest): Promise<_93.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _94.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _94.MsgSend): {
                        typeUrl: string;
                        value: _94.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _94.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _94.MsgSend): {
                        typeUrl: string;
                        value: _94.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _94.MsgSend) => _94.MsgSendAmino;
                    fromAmino: (object: _94.MsgSendAmino) => _94.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _94.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgSend;
                fromPartial(object: Partial<_94.MsgSend>): _94.MsgSend;
                fromAmino(object: _94.MsgSendAmino): _94.MsgSend;
                toAmino(message: _94.MsgSend): _94.MsgSendAmino;
                fromAminoMsg(object: _94.MsgSendAminoMsg): _94.MsgSend;
                toAminoMsg(message: _94.MsgSend): _94.MsgSendAminoMsg;
                fromProtoMsg(message: _94.MsgSendProtoMsg): _94.MsgSend;
                toProto(message: _94.MsgSend): Uint8Array;
                toProtoMsg(message: _94.MsgSend): _94.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _94.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgSendResponse;
                fromPartial(_: Partial<_94.MsgSendResponse>): _94.MsgSendResponse;
                fromAmino(_: _94.MsgSendResponseAmino): _94.MsgSendResponse;
                toAmino(_: _94.MsgSendResponse): _94.MsgSendResponseAmino;
                fromAminoMsg(object: _94.MsgSendResponseAminoMsg): _94.MsgSendResponse;
                toAminoMsg(message: _94.MsgSendResponse): _94.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _94.MsgSendResponseProtoMsg): _94.MsgSendResponse;
                toProto(message: _94.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _94.MsgSendResponse): _94.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _93.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryBalanceRequest;
                fromPartial(object: Partial<_93.QueryBalanceRequest>): _93.QueryBalanceRequest;
                fromAmino(object: _93.QueryBalanceRequestAmino): _93.QueryBalanceRequest;
                toAmino(message: _93.QueryBalanceRequest): _93.QueryBalanceRequestAmino;
                fromAminoMsg(object: _93.QueryBalanceRequestAminoMsg): _93.QueryBalanceRequest;
                toAminoMsg(message: _93.QueryBalanceRequest): _93.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _93.QueryBalanceRequestProtoMsg): _93.QueryBalanceRequest;
                toProto(message: _93.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBalanceRequest): _93.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _93.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryBalanceResponse;
                fromPartial(object: Partial<_93.QueryBalanceResponse>): _93.QueryBalanceResponse;
                fromAmino(object: _93.QueryBalanceResponseAmino): _93.QueryBalanceResponse;
                toAmino(message: _93.QueryBalanceResponse): _93.QueryBalanceResponseAmino;
                fromAminoMsg(object: _93.QueryBalanceResponseAminoMsg): _93.QueryBalanceResponse;
                toAminoMsg(message: _93.QueryBalanceResponse): _93.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _93.QueryBalanceResponseProtoMsg): _93.QueryBalanceResponse;
                toProto(message: _93.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBalanceResponse): _93.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _93.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryOwnerRequest;
                fromPartial(object: Partial<_93.QueryOwnerRequest>): _93.QueryOwnerRequest;
                fromAmino(object: _93.QueryOwnerRequestAmino): _93.QueryOwnerRequest;
                toAmino(message: _93.QueryOwnerRequest): _93.QueryOwnerRequestAmino;
                fromAminoMsg(object: _93.QueryOwnerRequestAminoMsg): _93.QueryOwnerRequest;
                toAminoMsg(message: _93.QueryOwnerRequest): _93.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _93.QueryOwnerRequestProtoMsg): _93.QueryOwnerRequest;
                toProto(message: _93.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _93.QueryOwnerRequest): _93.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _93.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryOwnerResponse;
                fromPartial(object: Partial<_93.QueryOwnerResponse>): _93.QueryOwnerResponse;
                fromAmino(object: _93.QueryOwnerResponseAmino): _93.QueryOwnerResponse;
                toAmino(message: _93.QueryOwnerResponse): _93.QueryOwnerResponseAmino;
                fromAminoMsg(object: _93.QueryOwnerResponseAminoMsg): _93.QueryOwnerResponse;
                toAminoMsg(message: _93.QueryOwnerResponse): _93.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _93.QueryOwnerResponseProtoMsg): _93.QueryOwnerResponse;
                toProto(message: _93.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _93.QueryOwnerResponse): _93.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _93.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QuerySupplyRequest;
                fromPartial(object: Partial<_93.QuerySupplyRequest>): _93.QuerySupplyRequest;
                fromAmino(object: _93.QuerySupplyRequestAmino): _93.QuerySupplyRequest;
                toAmino(message: _93.QuerySupplyRequest): _93.QuerySupplyRequestAmino;
                fromAminoMsg(object: _93.QuerySupplyRequestAminoMsg): _93.QuerySupplyRequest;
                toAminoMsg(message: _93.QuerySupplyRequest): _93.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _93.QuerySupplyRequestProtoMsg): _93.QuerySupplyRequest;
                toProto(message: _93.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _93.QuerySupplyRequest): _93.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _93.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QuerySupplyResponse;
                fromPartial(object: Partial<_93.QuerySupplyResponse>): _93.QuerySupplyResponse;
                fromAmino(object: _93.QuerySupplyResponseAmino): _93.QuerySupplyResponse;
                toAmino(message: _93.QuerySupplyResponse): _93.QuerySupplyResponseAmino;
                fromAminoMsg(object: _93.QuerySupplyResponseAminoMsg): _93.QuerySupplyResponse;
                toAminoMsg(message: _93.QuerySupplyResponse): _93.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _93.QuerySupplyResponseProtoMsg): _93.QuerySupplyResponse;
                toProto(message: _93.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _93.QuerySupplyResponse): _93.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _93.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryNFTsRequest;
                fromPartial(object: Partial<_93.QueryNFTsRequest>): _93.QueryNFTsRequest;
                fromAmino(object: _93.QueryNFTsRequestAmino): _93.QueryNFTsRequest;
                toAmino(message: _93.QueryNFTsRequest): _93.QueryNFTsRequestAmino;
                fromAminoMsg(object: _93.QueryNFTsRequestAminoMsg): _93.QueryNFTsRequest;
                toAminoMsg(message: _93.QueryNFTsRequest): _93.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryNFTsRequestProtoMsg): _93.QueryNFTsRequest;
                toProto(message: _93.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryNFTsRequest): _93.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _93.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryNFTsResponse;
                fromPartial(object: Partial<_93.QueryNFTsResponse>): _93.QueryNFTsResponse;
                fromAmino(object: _93.QueryNFTsResponseAmino): _93.QueryNFTsResponse;
                toAmino(message: _93.QueryNFTsResponse): _93.QueryNFTsResponseAmino;
                fromAminoMsg(object: _93.QueryNFTsResponseAminoMsg): _93.QueryNFTsResponse;
                toAminoMsg(message: _93.QueryNFTsResponse): _93.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryNFTsResponseProtoMsg): _93.QueryNFTsResponse;
                toProto(message: _93.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryNFTsResponse): _93.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _93.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryNFTRequest;
                fromPartial(object: Partial<_93.QueryNFTRequest>): _93.QueryNFTRequest;
                fromAmino(object: _93.QueryNFTRequestAmino): _93.QueryNFTRequest;
                toAmino(message: _93.QueryNFTRequest): _93.QueryNFTRequestAmino;
                fromAminoMsg(object: _93.QueryNFTRequestAminoMsg): _93.QueryNFTRequest;
                toAminoMsg(message: _93.QueryNFTRequest): _93.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _93.QueryNFTRequestProtoMsg): _93.QueryNFTRequest;
                toProto(message: _93.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _93.QueryNFTRequest): _93.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _93.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryNFTResponse;
                fromPartial(object: Partial<_93.QueryNFTResponse>): _93.QueryNFTResponse;
                fromAmino(object: _93.QueryNFTResponseAmino): _93.QueryNFTResponse;
                toAmino(message: _93.QueryNFTResponse): _93.QueryNFTResponseAmino;
                fromAminoMsg(object: _93.QueryNFTResponseAminoMsg): _93.QueryNFTResponse;
                toAminoMsg(message: _93.QueryNFTResponse): _93.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _93.QueryNFTResponseProtoMsg): _93.QueryNFTResponse;
                toProto(message: _93.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _93.QueryNFTResponse): _93.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _93.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryClassRequest;
                fromPartial(object: Partial<_93.QueryClassRequest>): _93.QueryClassRequest;
                fromAmino(object: _93.QueryClassRequestAmino): _93.QueryClassRequest;
                toAmino(message: _93.QueryClassRequest): _93.QueryClassRequestAmino;
                fromAminoMsg(object: _93.QueryClassRequestAminoMsg): _93.QueryClassRequest;
                toAminoMsg(message: _93.QueryClassRequest): _93.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _93.QueryClassRequestProtoMsg): _93.QueryClassRequest;
                toProto(message: _93.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassRequest): _93.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryClassResponse;
                fromPartial(object: Partial<_93.QueryClassResponse>): _93.QueryClassResponse;
                fromAmino(object: _93.QueryClassResponseAmino): _93.QueryClassResponse;
                toAmino(message: _93.QueryClassResponse): _93.QueryClassResponseAmino;
                fromAminoMsg(object: _93.QueryClassResponseAminoMsg): _93.QueryClassResponse;
                toAminoMsg(message: _93.QueryClassResponse): _93.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _93.QueryClassResponseProtoMsg): _93.QueryClassResponse;
                toProto(message: _93.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassResponse): _93.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _93.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryClassesRequest;
                fromPartial(object: Partial<_93.QueryClassesRequest>): _93.QueryClassesRequest;
                fromAmino(object: _93.QueryClassesRequestAmino): _93.QueryClassesRequest;
                toAmino(message: _93.QueryClassesRequest): _93.QueryClassesRequestAmino;
                fromAminoMsg(object: _93.QueryClassesRequestAminoMsg): _93.QueryClassesRequest;
                toAminoMsg(message: _93.QueryClassesRequest): _93.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _93.QueryClassesRequestProtoMsg): _93.QueryClassesRequest;
                toProto(message: _93.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassesRequest): _93.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryClassesResponse;
                fromPartial(object: Partial<_93.QueryClassesResponse>): _93.QueryClassesResponse;
                fromAmino(object: _93.QueryClassesResponseAmino): _93.QueryClassesResponse;
                toAmino(message: _93.QueryClassesResponse): _93.QueryClassesResponseAmino;
                fromAminoMsg(object: _93.QueryClassesResponseAminoMsg): _93.QueryClassesResponse;
                toAminoMsg(message: _93.QueryClassesResponse): _93.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _93.QueryClassesResponseProtoMsg): _93.QueryClassesResponse;
                toProto(message: _93.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassesResponse): _93.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _92.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Class;
                fromPartial(object: Partial<_92.Class>): _92.Class;
                fromAmino(object: _92.ClassAmino): _92.Class;
                toAmino(message: _92.Class): _92.ClassAmino;
                fromAminoMsg(object: _92.ClassAminoMsg): _92.Class;
                toAminoMsg(message: _92.Class): _92.ClassAminoMsg;
                fromProtoMsg(message: _92.ClassProtoMsg): _92.Class;
                toProto(message: _92.Class): Uint8Array;
                toProtoMsg(message: _92.Class): _92.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _92.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.NFT;
                fromPartial(object: Partial<_92.NFT>): _92.NFT;
                fromAmino(object: _92.NFTAmino): _92.NFT;
                toAmino(message: _92.NFT): _92.NFTAmino;
                fromAminoMsg(object: _92.NFTAminoMsg): _92.NFT;
                toAminoMsg(message: _92.NFT): _92.NFTAminoMsg;
                fromProtoMsg(message: _92.NFTProtoMsg): _92.NFT;
                toProto(message: _92.NFT): Uint8Array;
                toProtoMsg(message: _92.NFT): _92.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _91.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Entry;
                fromPartial(object: Partial<_91.Entry>): _91.Entry;
                fromAmino(object: _91.EntryAmino): _91.Entry;
                toAmino(message: _91.Entry): _91.EntryAmino;
                fromAminoMsg(object: _91.EntryAminoMsg): _91.Entry;
                toAminoMsg(message: _91.Entry): _91.EntryAminoMsg;
                fromProtoMsg(message: _91.EntryProtoMsg): _91.Entry;
                toProto(message: _91.Entry): Uint8Array;
                toProtoMsg(message: _91.Entry): _91.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _90.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.EventSend;
                fromPartial(object: Partial<_90.EventSend>): _90.EventSend;
                fromAmino(object: _90.EventSendAmino): _90.EventSend;
                toAmino(message: _90.EventSend): _90.EventSendAmino;
                fromAminoMsg(object: _90.EventSendAminoMsg): _90.EventSend;
                toAminoMsg(message: _90.EventSend): _90.EventSendAminoMsg;
                fromProtoMsg(message: _90.EventSendProtoMsg): _90.EventSend;
                toProto(message: _90.EventSend): Uint8Array;
                toProtoMsg(message: _90.EventSend): _90.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _90.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.EventMint;
                fromPartial(object: Partial<_90.EventMint>): _90.EventMint;
                fromAmino(object: _90.EventMintAmino): _90.EventMint;
                toAmino(message: _90.EventMint): _90.EventMintAmino;
                fromAminoMsg(object: _90.EventMintAminoMsg): _90.EventMint;
                toAminoMsg(message: _90.EventMint): _90.EventMintAminoMsg;
                fromProtoMsg(message: _90.EventMintProtoMsg): _90.EventMint;
                toProto(message: _90.EventMint): Uint8Array;
                toProtoMsg(message: _90.EventMint): _90.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _90.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.EventBurn;
                fromPartial(object: Partial<_90.EventBurn>): _90.EventBurn;
                fromAmino(object: _90.EventBurnAmino): _90.EventBurn;
                toAmino(message: _90.EventBurn): _90.EventBurnAmino;
                fromAminoMsg(object: _90.EventBurnAminoMsg): _90.EventBurn;
                toAminoMsg(message: _90.EventBurn): _90.EventBurnAminoMsg;
                fromProtoMsg(message: _90.EventBurnProtoMsg): _90.EventBurn;
                toProto(message: _90.EventBurn): Uint8Array;
                toProtoMsg(message: _90.EventBurn): _90.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _95.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _95.Module;
                    fromPartial(_: Partial<_95.Module>): _95.Module;
                    fromAmino(_: _95.ModuleAmino): _95.Module;
                    toAmino(_: _95.Module): _95.ModuleAmino;
                    fromAminoMsg(object: _95.ModuleAminoMsg): _95.Module;
                    toAminoMsg(message: _95.Module): _95.ModuleAminoMsg;
                    fromProtoMsg(message: _95.ModuleProtoMsg): _95.Module;
                    toProto(message: _95.Module): Uint8Array;
                    toProtoMsg(message: _95.Module): _95.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _215.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    get(request: _96.GetRequest): Promise<_96.GetResponse>;
                    list(request: _96.ListRequest): Promise<_96.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _96.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.GetRequest;
                    fromPartial(object: Partial<_96.GetRequest>): _96.GetRequest;
                    fromAmino(object: _96.GetRequestAmino): _96.GetRequest;
                    toAmino(message: _96.GetRequest): _96.GetRequestAmino;
                    fromAminoMsg(object: _96.GetRequestAminoMsg): _96.GetRequest;
                    toAminoMsg(message: _96.GetRequest): _96.GetRequestAminoMsg;
                    fromProtoMsg(message: _96.GetRequestProtoMsg): _96.GetRequest;
                    toProto(message: _96.GetRequest): Uint8Array;
                    toProtoMsg(message: _96.GetRequest): _96.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _96.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.GetResponse;
                    fromPartial(object: Partial<_96.GetResponse>): _96.GetResponse;
                    fromAmino(object: _96.GetResponseAmino): _96.GetResponse;
                    toAmino(message: _96.GetResponse): _96.GetResponseAmino;
                    fromAminoMsg(object: _96.GetResponseAminoMsg): _96.GetResponse;
                    toAminoMsg(message: _96.GetResponse): _96.GetResponseAminoMsg;
                    fromProtoMsg(message: _96.GetResponseProtoMsg): _96.GetResponse;
                    toProto(message: _96.GetResponse): Uint8Array;
                    toProtoMsg(message: _96.GetResponse): _96.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _96.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.ListRequest;
                    fromPartial(object: Partial<_96.ListRequest>): _96.ListRequest;
                    fromAmino(object: _96.ListRequestAmino): _96.ListRequest;
                    toAmino(message: _96.ListRequest): _96.ListRequestAmino;
                    fromAminoMsg(object: _96.ListRequestAminoMsg): _96.ListRequest;
                    toAminoMsg(message: _96.ListRequest): _96.ListRequestAminoMsg;
                    fromProtoMsg(message: _96.ListRequestProtoMsg): _96.ListRequest;
                    toProto(message: _96.ListRequest): Uint8Array;
                    toProtoMsg(message: _96.ListRequest): _96.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _96.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.ListRequest_Prefix;
                    fromPartial(object: Partial<_96.ListRequest_Prefix>): _96.ListRequest_Prefix;
                    fromAmino(object: _96.ListRequest_PrefixAmino): _96.ListRequest_Prefix;
                    toAmino(message: _96.ListRequest_Prefix): _96.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _96.ListRequest_PrefixAminoMsg): _96.ListRequest_Prefix;
                    toAminoMsg(message: _96.ListRequest_Prefix): _96.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _96.ListRequest_PrefixProtoMsg): _96.ListRequest_Prefix;
                    toProto(message: _96.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _96.ListRequest_Prefix): _96.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _96.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.ListRequest_Range;
                    fromPartial(object: Partial<_96.ListRequest_Range>): _96.ListRequest_Range;
                    fromAmino(object: _96.ListRequest_RangeAmino): _96.ListRequest_Range;
                    toAmino(message: _96.ListRequest_Range): _96.ListRequest_RangeAmino;
                    fromAminoMsg(object: _96.ListRequest_RangeAminoMsg): _96.ListRequest_Range;
                    toAminoMsg(message: _96.ListRequest_Range): _96.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _96.ListRequest_RangeProtoMsg): _96.ListRequest_Range;
                    toProto(message: _96.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _96.ListRequest_Range): _96.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _96.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.ListResponse;
                    fromPartial(object: Partial<_96.ListResponse>): _96.ListResponse;
                    fromAmino(object: _96.ListResponseAmino): _96.ListResponse;
                    toAmino(message: _96.ListResponse): _96.ListResponseAmino;
                    fromAminoMsg(object: _96.ListResponseAminoMsg): _96.ListResponse;
                    toAminoMsg(message: _96.ListResponse): _96.ListResponseAminoMsg;
                    fromProtoMsg(message: _96.ListResponseProtoMsg): _96.ListResponse;
                    toProto(message: _96.ListResponse): Uint8Array;
                    toProtoMsg(message: _96.ListResponse): _96.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _96.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.IndexValue;
                    fromPartial(object: Partial<_96.IndexValue>): _96.IndexValue;
                    fromAmino(object: _96.IndexValueAmino): _96.IndexValue;
                    toAmino(message: _96.IndexValue): _96.IndexValueAmino;
                    fromAminoMsg(object: _96.IndexValueAminoMsg): _96.IndexValue;
                    toAminoMsg(message: _96.IndexValue): _96.IndexValueAminoMsg;
                    fromProtoMsg(message: _96.IndexValueProtoMsg): _96.IndexValue;
                    toProto(message: _96.IndexValue): Uint8Array;
                    toProtoMsg(message: _96.IndexValue): _96.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _97.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.TableDescriptor;
                fromPartial(object: Partial<_97.TableDescriptor>): _97.TableDescriptor;
                fromAmino(object: _97.TableDescriptorAmino): _97.TableDescriptor;
                toAmino(message: _97.TableDescriptor): _97.TableDescriptorAmino;
                fromAminoMsg(object: _97.TableDescriptorAminoMsg): _97.TableDescriptor;
                toAminoMsg(message: _97.TableDescriptor): _97.TableDescriptorAminoMsg;
                fromProtoMsg(message: _97.TableDescriptorProtoMsg): _97.TableDescriptor;
                toProto(message: _97.TableDescriptor): Uint8Array;
                toProtoMsg(message: _97.TableDescriptor): _97.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _97.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_97.PrimaryKeyDescriptor>): _97.PrimaryKeyDescriptor;
                fromAmino(object: _97.PrimaryKeyDescriptorAmino): _97.PrimaryKeyDescriptor;
                toAmino(message: _97.PrimaryKeyDescriptor): _97.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _97.PrimaryKeyDescriptorAminoMsg): _97.PrimaryKeyDescriptor;
                toAminoMsg(message: _97.PrimaryKeyDescriptor): _97.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _97.PrimaryKeyDescriptorProtoMsg): _97.PrimaryKeyDescriptor;
                toProto(message: _97.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _97.PrimaryKeyDescriptor): _97.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _97.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_97.SecondaryIndexDescriptor>): _97.SecondaryIndexDescriptor;
                fromAmino(object: _97.SecondaryIndexDescriptorAmino): _97.SecondaryIndexDescriptor;
                toAmino(message: _97.SecondaryIndexDescriptor): _97.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _97.SecondaryIndexDescriptorAminoMsg): _97.SecondaryIndexDescriptor;
                toAminoMsg(message: _97.SecondaryIndexDescriptor): _97.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _97.SecondaryIndexDescriptorProtoMsg): _97.SecondaryIndexDescriptor;
                toProto(message: _97.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _97.SecondaryIndexDescriptor): _97.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _97.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SingletonDescriptor;
                fromPartial(object: Partial<_97.SingletonDescriptor>): _97.SingletonDescriptor;
                fromAmino(object: _97.SingletonDescriptorAmino): _97.SingletonDescriptor;
                toAmino(message: _97.SingletonDescriptor): _97.SingletonDescriptorAmino;
                fromAminoMsg(object: _97.SingletonDescriptorAminoMsg): _97.SingletonDescriptor;
                toAminoMsg(message: _97.SingletonDescriptor): _97.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _97.SingletonDescriptorProtoMsg): _97.SingletonDescriptor;
                toProto(message: _97.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _97.SingletonDescriptor): _97.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _98.StorageType;
            storageTypeToJSON(object: _98.StorageType): string;
            StorageType: typeof _98.StorageType;
            StorageTypeSDKType: typeof _98.StorageType;
            StorageTypeAmino: typeof _98.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _98.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_98.ModuleSchemaDescriptor>): _98.ModuleSchemaDescriptor;
                fromAmino(object: _98.ModuleSchemaDescriptorAmino): _98.ModuleSchemaDescriptor;
                toAmino(message: _98.ModuleSchemaDescriptor): _98.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _98.ModuleSchemaDescriptorAminoMsg): _98.ModuleSchemaDescriptor;
                toAminoMsg(message: _98.ModuleSchemaDescriptor): _98.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _98.ModuleSchemaDescriptorProtoMsg): _98.ModuleSchemaDescriptor;
                toProto(message: _98.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _98.ModuleSchemaDescriptor): _98.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _98.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_98.ModuleSchemaDescriptor_FileEntry>): _98.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _98.ModuleSchemaDescriptor_FileEntryAmino): _98.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _98.ModuleSchemaDescriptor_FileEntry): _98.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _98.ModuleSchemaDescriptor_FileEntryAminoMsg): _98.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _98.ModuleSchemaDescriptor_FileEntry): _98.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _98.ModuleSchemaDescriptor_FileEntryProtoMsg): _98.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _98.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _98.ModuleSchemaDescriptor_FileEntry): _98.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
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
        const v1beta1: {
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                subspaces(request?: _101.QuerySubspacesRequest): Promise<_101.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _101.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryParamsRequest;
                fromPartial(object: Partial<_101.QueryParamsRequest>): _101.QueryParamsRequest;
                fromAmino(object: _101.QueryParamsRequestAmino): _101.QueryParamsRequest;
                toAmino(message: _101.QueryParamsRequest): _101.QueryParamsRequestAmino;
                fromAminoMsg(object: _101.QueryParamsRequestAminoMsg): _101.QueryParamsRequest;
                toAminoMsg(message: _101.QueryParamsRequest): _101.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _101.QueryParamsRequestProtoMsg): _101.QueryParamsRequest;
                toProto(message: _101.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _101.QueryParamsRequest): _101.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _101.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryParamsResponse;
                fromPartial(object: Partial<_101.QueryParamsResponse>): _101.QueryParamsResponse;
                fromAmino(object: _101.QueryParamsResponseAmino): _101.QueryParamsResponse;
                toAmino(message: _101.QueryParamsResponse): _101.QueryParamsResponseAmino;
                fromAminoMsg(object: _101.QueryParamsResponseAminoMsg): _101.QueryParamsResponse;
                toAminoMsg(message: _101.QueryParamsResponse): _101.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _101.QueryParamsResponseProtoMsg): _101.QueryParamsResponse;
                toProto(message: _101.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _101.QueryParamsResponse): _101.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _101.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.QuerySubspacesRequest;
                fromPartial(_: Partial<_101.QuerySubspacesRequest>): _101.QuerySubspacesRequest;
                fromAmino(_: _101.QuerySubspacesRequestAmino): _101.QuerySubspacesRequest;
                toAmino(_: _101.QuerySubspacesRequest): _101.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _101.QuerySubspacesRequestAminoMsg): _101.QuerySubspacesRequest;
                toAminoMsg(message: _101.QuerySubspacesRequest): _101.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _101.QuerySubspacesRequestProtoMsg): _101.QuerySubspacesRequest;
                toProto(message: _101.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _101.QuerySubspacesRequest): _101.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _101.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QuerySubspacesResponse;
                fromPartial(object: Partial<_101.QuerySubspacesResponse>): _101.QuerySubspacesResponse;
                fromAmino(object: _101.QuerySubspacesResponseAmino): _101.QuerySubspacesResponse;
                toAmino(message: _101.QuerySubspacesResponse): _101.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _101.QuerySubspacesResponseAminoMsg): _101.QuerySubspacesResponse;
                toAminoMsg(message: _101.QuerySubspacesResponse): _101.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _101.QuerySubspacesResponseProtoMsg): _101.QuerySubspacesResponse;
                toProto(message: _101.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _101.QuerySubspacesResponse): _101.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _101.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Subspace;
                fromPartial(object: Partial<_101.Subspace>): _101.Subspace;
                fromAmino(object: _101.SubspaceAmino): _101.Subspace;
                toAmino(message: _101.Subspace): _101.SubspaceAmino;
                fromAminoMsg(object: _101.SubspaceAminoMsg): _101.Subspace;
                toAminoMsg(message: _101.Subspace): _101.SubspaceAminoMsg;
                fromProtoMsg(message: _101.SubspaceProtoMsg): _101.Subspace;
                toProto(message: _101.Subspace): Uint8Array;
                toProtoMsg(message: _101.Subspace): _101.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _100.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ParameterChangeProposal;
                fromPartial(object: Partial<_100.ParameterChangeProposal>): _100.ParameterChangeProposal;
                fromAmino(object: _100.ParameterChangeProposalAmino): _100.ParameterChangeProposal;
                toAmino(message: _100.ParameterChangeProposal): _100.ParameterChangeProposalAmino;
                fromAminoMsg(object: _100.ParameterChangeProposalAminoMsg): _100.ParameterChangeProposal;
                toAminoMsg(message: _100.ParameterChangeProposal): _100.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _100.ParameterChangeProposalProtoMsg): _100.ParameterChangeProposal;
                toProto(message: _100.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _100.ParameterChangeProposal): _100.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _100.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ParamChange;
                fromPartial(object: Partial<_100.ParamChange>): _100.ParamChange;
                fromAmino(object: _100.ParamChangeAmino): _100.ParamChange;
                toAmino(message: _100.ParamChange): _100.ParamChangeAmino;
                fromAminoMsg(object: _100.ParamChangeAminoMsg): _100.ParamChange;
                toAminoMsg(message: _100.ParamChange): _100.ParamChangeAminoMsg;
                fromProtoMsg(message: _100.ParamChangeProtoMsg): _100.ParamChange;
                toProto(message: _100.ParamChange): Uint8Array;
                toProtoMsg(message: _100.ParamChange): _100.ParamChangeProtoMsg;
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
                encode(_: _103.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.FileDescriptorsRequest;
                fromPartial(_: Partial<_103.FileDescriptorsRequest>): _103.FileDescriptorsRequest;
                fromAmino(_: _103.FileDescriptorsRequestAmino): _103.FileDescriptorsRequest;
                toAmino(_: _103.FileDescriptorsRequest): _103.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _103.FileDescriptorsRequestAminoMsg): _103.FileDescriptorsRequest;
                toAminoMsg(message: _103.FileDescriptorsRequest): _103.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _103.FileDescriptorsRequestProtoMsg): _103.FileDescriptorsRequest;
                toProto(message: _103.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _103.FileDescriptorsRequest): _103.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _103.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.FileDescriptorsResponse;
                fromPartial(object: Partial<_103.FileDescriptorsResponse>): _103.FileDescriptorsResponse;
                fromAmino(object: _103.FileDescriptorsResponseAmino): _103.FileDescriptorsResponse;
                toAmino(message: _103.FileDescriptorsResponse): _103.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _103.FileDescriptorsResponseAminoMsg): _103.FileDescriptorsResponse;
                toAminoMsg(message: _103.FileDescriptorsResponse): _103.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _103.FileDescriptorsResponseProtoMsg): _103.FileDescriptorsResponse;
                toProto(message: _103.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _103.FileDescriptorsResponse): _103.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
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
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                signingInfo(request: _106.QuerySigningInfoRequest): Promise<_106.QuerySigningInfoResponse>;
                signingInfos(request?: _106.QuerySigningInfosRequest): Promise<_106.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _108.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                    updateParams(value: _108.MsgUpdateParams): {
                        typeUrl: string;
                        value: _108.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _108.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _108.MsgUnjail): {
                        typeUrl: string;
                        value: _108.MsgUnjail;
                    };
                    updateParams(value: _108.MsgUpdateParams): {
                        typeUrl: string;
                        value: _108.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _108.MsgUnjail) => _108.MsgUnjailAmino;
                    fromAmino: (object: _108.MsgUnjailAmino) => _108.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _108.MsgUpdateParams) => _108.MsgUpdateParamsAmino;
                    fromAmino: (object: _108.MsgUpdateParamsAmino) => _108.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _108.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgUnjail;
                fromPartial(object: Partial<_108.MsgUnjail>): _108.MsgUnjail;
                fromAmino(object: _108.MsgUnjailAmino): _108.MsgUnjail;
                toAmino(message: _108.MsgUnjail): _108.MsgUnjailAmino;
                fromAminoMsg(object: _108.MsgUnjailAminoMsg): _108.MsgUnjail;
                toAminoMsg(message: _108.MsgUnjail): _108.MsgUnjailAminoMsg;
                fromProtoMsg(message: _108.MsgUnjailProtoMsg): _108.MsgUnjail;
                toProto(message: _108.MsgUnjail): Uint8Array;
                toProtoMsg(message: _108.MsgUnjail): _108.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _108.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgUnjailResponse;
                fromPartial(_: Partial<_108.MsgUnjailResponse>): _108.MsgUnjailResponse;
                fromAmino(_: _108.MsgUnjailResponseAmino): _108.MsgUnjailResponse;
                toAmino(_: _108.MsgUnjailResponse): _108.MsgUnjailResponseAmino;
                fromAminoMsg(object: _108.MsgUnjailResponseAminoMsg): _108.MsgUnjailResponse;
                toAminoMsg(message: _108.MsgUnjailResponse): _108.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _108.MsgUnjailResponseProtoMsg): _108.MsgUnjailResponse;
                toProto(message: _108.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _108.MsgUnjailResponse): _108.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _108.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.MsgUpdateParams;
                fromPartial(object: Partial<_108.MsgUpdateParams>): _108.MsgUpdateParams;
                fromAmino(object: _108.MsgUpdateParamsAmino): _108.MsgUpdateParams;
                toAmino(message: _108.MsgUpdateParams): _108.MsgUpdateParamsAmino;
                fromAminoMsg(object: _108.MsgUpdateParamsAminoMsg): _108.MsgUpdateParams;
                toAminoMsg(message: _108.MsgUpdateParams): _108.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _108.MsgUpdateParamsProtoMsg): _108.MsgUpdateParams;
                toProto(message: _108.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _108.MsgUpdateParams): _108.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _108.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_108.MsgUpdateParamsResponse>): _108.MsgUpdateParamsResponse;
                fromAmino(_: _108.MsgUpdateParamsResponseAmino): _108.MsgUpdateParamsResponse;
                toAmino(_: _108.MsgUpdateParamsResponse): _108.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _108.MsgUpdateParamsResponseAminoMsg): _108.MsgUpdateParamsResponse;
                toAminoMsg(message: _108.MsgUpdateParamsResponse): _108.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _108.MsgUpdateParamsResponseProtoMsg): _108.MsgUpdateParamsResponse;
                toProto(message: _108.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _108.MsgUpdateParamsResponse): _108.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _107.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.ValidatorSigningInfo;
                fromPartial(object: Partial<_107.ValidatorSigningInfo>): _107.ValidatorSigningInfo;
                fromAmino(object: _107.ValidatorSigningInfoAmino): _107.ValidatorSigningInfo;
                toAmino(message: _107.ValidatorSigningInfo): _107.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _107.ValidatorSigningInfoAminoMsg): _107.ValidatorSigningInfo;
                toAminoMsg(message: _107.ValidatorSigningInfo): _107.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _107.ValidatorSigningInfoProtoMsg): _107.ValidatorSigningInfo;
                toProto(message: _107.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _107.ValidatorSigningInfo): _107.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _107.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Params;
                fromPartial(object: Partial<_107.Params>): _107.Params;
                fromAmino(object: _107.ParamsAmino): _107.Params;
                toAmino(message: _107.Params): _107.ParamsAmino;
                fromAminoMsg(object: _107.ParamsAminoMsg): _107.Params;
                toAminoMsg(message: _107.Params): _107.ParamsAminoMsg;
                fromProtoMsg(message: _107.ParamsProtoMsg): _107.Params;
                toProto(message: _107.Params): Uint8Array;
                toProtoMsg(message: _107.Params): _107.ParamsProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfoRequest;
                fromPartial(object: Partial<_106.QuerySigningInfoRequest>): _106.QuerySigningInfoRequest;
                fromAmino(object: _106.QuerySigningInfoRequestAmino): _106.QuerySigningInfoRequest;
                toAmino(message: _106.QuerySigningInfoRequest): _106.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _106.QuerySigningInfoRequestAminoMsg): _106.QuerySigningInfoRequest;
                toAminoMsg(message: _106.QuerySigningInfoRequest): _106.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfoRequestProtoMsg): _106.QuerySigningInfoRequest;
                toProto(message: _106.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfoRequest): _106.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfoResponse;
                fromPartial(object: Partial<_106.QuerySigningInfoResponse>): _106.QuerySigningInfoResponse;
                fromAmino(object: _106.QuerySigningInfoResponseAmino): _106.QuerySigningInfoResponse;
                toAmino(message: _106.QuerySigningInfoResponse): _106.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _106.QuerySigningInfoResponseAminoMsg): _106.QuerySigningInfoResponse;
                toAminoMsg(message: _106.QuerySigningInfoResponse): _106.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfoResponseProtoMsg): _106.QuerySigningInfoResponse;
                toProto(message: _106.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfoResponse): _106.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfosRequest;
                fromPartial(object: Partial<_106.QuerySigningInfosRequest>): _106.QuerySigningInfosRequest;
                fromAmino(object: _106.QuerySigningInfosRequestAmino): _106.QuerySigningInfosRequest;
                toAmino(message: _106.QuerySigningInfosRequest): _106.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _106.QuerySigningInfosRequestAminoMsg): _106.QuerySigningInfosRequest;
                toAminoMsg(message: _106.QuerySigningInfosRequest): _106.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfosRequestProtoMsg): _106.QuerySigningInfosRequest;
                toProto(message: _106.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfosRequest): _106.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _106.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySigningInfosResponse;
                fromPartial(object: Partial<_106.QuerySigningInfosResponse>): _106.QuerySigningInfosResponse;
                fromAmino(object: _106.QuerySigningInfosResponseAmino): _106.QuerySigningInfosResponse;
                toAmino(message: _106.QuerySigningInfosResponse): _106.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _106.QuerySigningInfosResponseAminoMsg): _106.QuerySigningInfosResponse;
                toAminoMsg(message: _106.QuerySigningInfosResponse): _106.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _106.QuerySigningInfosResponseProtoMsg): _106.QuerySigningInfosResponse;
                toProto(message: _106.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _106.QuerySigningInfosResponse): _106.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _105.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.SigningInfo;
                fromPartial(object: Partial<_105.SigningInfo>): _105.SigningInfo;
                fromAmino(object: _105.SigningInfoAmino): _105.SigningInfo;
                toAmino(message: _105.SigningInfo): _105.SigningInfoAmino;
                fromAminoMsg(object: _105.SigningInfoAminoMsg): _105.SigningInfo;
                toAminoMsg(message: _105.SigningInfo): _105.SigningInfoAminoMsg;
                fromProtoMsg(message: _105.SigningInfoProtoMsg): _105.SigningInfo;
                toProto(message: _105.SigningInfo): Uint8Array;
                toProtoMsg(message: _105.SigningInfo): _105.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _105.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.ValidatorMissedBlocks;
                fromPartial(object: Partial<_105.ValidatorMissedBlocks>): _105.ValidatorMissedBlocks;
                fromAmino(object: _105.ValidatorMissedBlocksAmino): _105.ValidatorMissedBlocks;
                toAmino(message: _105.ValidatorMissedBlocks): _105.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _105.ValidatorMissedBlocksAminoMsg): _105.ValidatorMissedBlocks;
                toAminoMsg(message: _105.ValidatorMissedBlocks): _105.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _105.ValidatorMissedBlocksProtoMsg): _105.ValidatorMissedBlocks;
                toProto(message: _105.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _105.ValidatorMissedBlocks): _105.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _105.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MissedBlock;
                fromPartial(object: Partial<_105.MissedBlock>): _105.MissedBlock;
                fromAmino(object: _105.MissedBlockAmino): _105.MissedBlock;
                toAmino(message: _105.MissedBlock): _105.MissedBlockAmino;
                fromAminoMsg(object: _105.MissedBlockAminoMsg): _105.MissedBlock;
                toAminoMsg(message: _105.MissedBlock): _105.MissedBlockAminoMsg;
                fromProtoMsg(message: _105.MissedBlockProtoMsg): _105.MissedBlock;
                toProto(message: _105.MissedBlock): Uint8Array;
                toProtoMsg(message: _105.MissedBlock): _105.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _109.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.Module;
                    fromPartial(object: Partial<_109.Module>): _109.Module;
                    fromAmino(object: _109.ModuleAmino): _109.Module;
                    toAmino(message: _109.Module): _109.ModuleAmino;
                    fromAminoMsg(object: _109.ModuleAminoMsg): _109.Module;
                    toAminoMsg(message: _109.Module): _109.ModuleAminoMsg;
                    fromProtoMsg(message: _109.ModuleProtoMsg): _109.Module;
                    toProto(message: _109.Module): Uint8Array;
                    toProtoMsg(message: _109.Module): _109.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _112.QueryValidatorsRequest): Promise<_112.QueryValidatorsResponse>;
                validator(request: _112.QueryValidatorRequest): Promise<_112.QueryValidatorResponse>;
                validatorDelegations(request: _112.QueryValidatorDelegationsRequest): Promise<_112.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _112.QueryValidatorUnbondingDelegationsRequest): Promise<_112.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _112.QueryDelegationRequest): Promise<_112.QueryDelegationResponse>;
                unbondingDelegation(request: _112.QueryUnbondingDelegationRequest): Promise<_112.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _112.QueryDelegatorDelegationsRequest): Promise<_112.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _112.QueryDelegatorUnbondingDelegationsRequest): Promise<_112.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _112.QueryRedelegationsRequest): Promise<_112.QueryRedelegationsResponse>;
                delegatorValidators(request: _112.QueryDelegatorValidatorsRequest): Promise<_112.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _112.QueryDelegatorValidatorRequest): Promise<_112.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _112.QueryHistoricalInfoRequest): Promise<_112.QueryHistoricalInfoResponse>;
                pool(request?: _112.QueryPoolRequest): Promise<_112.QueryPoolResponse>;
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _114.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _114.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _114.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _114.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _114.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _114.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateValidator) => _114.MsgCreateValidatorAmino;
                    fromAmino: (object: _114.MsgCreateValidatorAmino) => _114.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _114.MsgEditValidator) => _114.MsgEditValidatorAmino;
                    fromAmino: (object: _114.MsgEditValidatorAmino) => _114.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgDelegate) => _114.MsgDelegateAmino;
                    fromAmino: (object: _114.MsgDelegateAmino) => _114.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgBeginRedelegate) => _114.MsgBeginRedelegateAmino;
                    fromAmino: (object: _114.MsgBeginRedelegateAmino) => _114.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUndelegate) => _114.MsgUndelegateAmino;
                    fromAmino: (object: _114.MsgUndelegateAmino) => _114.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCancelUnbondingDelegation) => _114.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _114.MsgCancelUnbondingDelegationAmino) => _114.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateParams) => _114.MsgUpdateParamsAmino;
                    fromAmino: (object: _114.MsgUpdateParamsAmino) => _114.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _114.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgCreateValidator;
                fromPartial(object: Partial<_114.MsgCreateValidator>): _114.MsgCreateValidator;
                fromAmino(object: _114.MsgCreateValidatorAmino): _114.MsgCreateValidator;
                toAmino(message: _114.MsgCreateValidator): _114.MsgCreateValidatorAmino;
                fromAminoMsg(object: _114.MsgCreateValidatorAminoMsg): _114.MsgCreateValidator;
                toAminoMsg(message: _114.MsgCreateValidator): _114.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _114.MsgCreateValidatorProtoMsg): _114.MsgCreateValidator;
                toProto(message: _114.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _114.MsgCreateValidator): _114.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_114.MsgCreateValidatorResponse>): _114.MsgCreateValidatorResponse;
                fromAmino(_: _114.MsgCreateValidatorResponseAmino): _114.MsgCreateValidatorResponse;
                toAmino(_: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _114.MsgCreateValidatorResponseAminoMsg): _114.MsgCreateValidatorResponse;
                toAminoMsg(message: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateValidatorResponseProtoMsg): _114.MsgCreateValidatorResponse;
                toProto(message: _114.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _114.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgEditValidator;
                fromPartial(object: Partial<_114.MsgEditValidator>): _114.MsgEditValidator;
                fromAmino(object: _114.MsgEditValidatorAmino): _114.MsgEditValidator;
                toAmino(message: _114.MsgEditValidator): _114.MsgEditValidatorAmino;
                fromAminoMsg(object: _114.MsgEditValidatorAminoMsg): _114.MsgEditValidator;
                toAminoMsg(message: _114.MsgEditValidator): _114.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _114.MsgEditValidatorProtoMsg): _114.MsgEditValidator;
                toProto(message: _114.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _114.MsgEditValidator): _114.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _114.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgEditValidatorResponse;
                fromPartial(_: Partial<_114.MsgEditValidatorResponse>): _114.MsgEditValidatorResponse;
                fromAmino(_: _114.MsgEditValidatorResponseAmino): _114.MsgEditValidatorResponse;
                toAmino(_: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _114.MsgEditValidatorResponseAminoMsg): _114.MsgEditValidatorResponse;
                toAminoMsg(message: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.MsgEditValidatorResponseProtoMsg): _114.MsgEditValidatorResponse;
                toProto(message: _114.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _114.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgDelegate;
                fromPartial(object: Partial<_114.MsgDelegate>): _114.MsgDelegate;
                fromAmino(object: _114.MsgDelegateAmino): _114.MsgDelegate;
                toAmino(message: _114.MsgDelegate): _114.MsgDelegateAmino;
                fromAminoMsg(object: _114.MsgDelegateAminoMsg): _114.MsgDelegate;
                toAminoMsg(message: _114.MsgDelegate): _114.MsgDelegateAminoMsg;
                fromProtoMsg(message: _114.MsgDelegateProtoMsg): _114.MsgDelegate;
                toProto(message: _114.MsgDelegate): Uint8Array;
                toProtoMsg(message: _114.MsgDelegate): _114.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _114.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgDelegateResponse;
                fromPartial(_: Partial<_114.MsgDelegateResponse>): _114.MsgDelegateResponse;
                fromAmino(_: _114.MsgDelegateResponseAmino): _114.MsgDelegateResponse;
                toAmino(_: _114.MsgDelegateResponse): _114.MsgDelegateResponseAmino;
                fromAminoMsg(object: _114.MsgDelegateResponseAminoMsg): _114.MsgDelegateResponse;
                toAminoMsg(message: _114.MsgDelegateResponse): _114.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgDelegateResponseProtoMsg): _114.MsgDelegateResponse;
                toProto(message: _114.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgDelegateResponse): _114.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _114.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgBeginRedelegate;
                fromPartial(object: Partial<_114.MsgBeginRedelegate>): _114.MsgBeginRedelegate;
                fromAmino(object: _114.MsgBeginRedelegateAmino): _114.MsgBeginRedelegate;
                toAmino(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _114.MsgBeginRedelegateAminoMsg): _114.MsgBeginRedelegate;
                toAminoMsg(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _114.MsgBeginRedelegateProtoMsg): _114.MsgBeginRedelegate;
                toProto(message: _114.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _114.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_114.MsgBeginRedelegateResponse>): _114.MsgBeginRedelegateResponse;
                fromAmino(object: _114.MsgBeginRedelegateResponseAmino): _114.MsgBeginRedelegateResponse;
                toAmino(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _114.MsgBeginRedelegateResponseAminoMsg): _114.MsgBeginRedelegateResponse;
                toAminoMsg(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgBeginRedelegateResponseProtoMsg): _114.MsgBeginRedelegateResponse;
                toProto(message: _114.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _114.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgUndelegate;
                fromPartial(object: Partial<_114.MsgUndelegate>): _114.MsgUndelegate;
                fromAmino(object: _114.MsgUndelegateAmino): _114.MsgUndelegate;
                toAmino(message: _114.MsgUndelegate): _114.MsgUndelegateAmino;
                fromAminoMsg(object: _114.MsgUndelegateAminoMsg): _114.MsgUndelegate;
                toAminoMsg(message: _114.MsgUndelegate): _114.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _114.MsgUndelegateProtoMsg): _114.MsgUndelegate;
                toProto(message: _114.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _114.MsgUndelegate): _114.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _114.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgUndelegateResponse;
                fromPartial(object: Partial<_114.MsgUndelegateResponse>): _114.MsgUndelegateResponse;
                fromAmino(object: _114.MsgUndelegateResponseAmino): _114.MsgUndelegateResponse;
                toAmino(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _114.MsgUndelegateResponseAminoMsg): _114.MsgUndelegateResponse;
                toAminoMsg(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUndelegateResponseProtoMsg): _114.MsgUndelegateResponse;
                toProto(message: _114.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _114.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_114.MsgCancelUnbondingDelegation>): _114.MsgCancelUnbondingDelegation;
                fromAmino(object: _114.MsgCancelUnbondingDelegationAmino): _114.MsgCancelUnbondingDelegation;
                toAmino(message: _114.MsgCancelUnbondingDelegation): _114.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _114.MsgCancelUnbondingDelegationAminoMsg): _114.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _114.MsgCancelUnbondingDelegation): _114.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _114.MsgCancelUnbondingDelegationProtoMsg): _114.MsgCancelUnbondingDelegation;
                toProto(message: _114.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _114.MsgCancelUnbondingDelegation): _114.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _114.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_114.MsgCancelUnbondingDelegationResponse>): _114.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _114.MsgCancelUnbondingDelegationResponseAmino): _114.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _114.MsgCancelUnbondingDelegationResponse): _114.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _114.MsgCancelUnbondingDelegationResponseAminoMsg): _114.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _114.MsgCancelUnbondingDelegationResponse): _114.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCancelUnbondingDelegationResponseProtoMsg): _114.MsgCancelUnbondingDelegationResponse;
                toProto(message: _114.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCancelUnbondingDelegationResponse): _114.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _114.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgUpdateParams;
                fromPartial(object: Partial<_114.MsgUpdateParams>): _114.MsgUpdateParams;
                fromAmino(object: _114.MsgUpdateParamsAmino): _114.MsgUpdateParams;
                toAmino(message: _114.MsgUpdateParams): _114.MsgUpdateParamsAmino;
                fromAminoMsg(object: _114.MsgUpdateParamsAminoMsg): _114.MsgUpdateParams;
                toAminoMsg(message: _114.MsgUpdateParams): _114.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateParamsProtoMsg): _114.MsgUpdateParams;
                toProto(message: _114.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateParams): _114.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_114.MsgUpdateParamsResponse>): _114.MsgUpdateParamsResponse;
                fromAmino(_: _114.MsgUpdateParamsResponseAmino): _114.MsgUpdateParamsResponse;
                toAmino(_: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateParamsResponseAminoMsg): _114.MsgUpdateParamsResponse;
                toAminoMsg(message: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateParamsResponseProtoMsg): _114.MsgUpdateParamsResponse;
                toProto(message: _114.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _113.BondStatus;
            bondStatusToJSON(object: _113.BondStatus): string;
            infractionFromJSON(object: any): _113.Infraction;
            infractionToJSON(object: _113.Infraction): string;
            BondStatus: typeof _113.BondStatus;
            BondStatusSDKType: typeof _113.BondStatus;
            BondStatusAmino: typeof _113.BondStatus;
            Infraction: typeof _113.Infraction;
            InfractionSDKType: typeof _113.Infraction;
            InfractionAmino: typeof _113.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _113.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.HistoricalInfo;
                fromPartial(object: Partial<_113.HistoricalInfo>): _113.HistoricalInfo;
                fromAmino(object: _113.HistoricalInfoAmino): _113.HistoricalInfo;
                toAmino(message: _113.HistoricalInfo): _113.HistoricalInfoAmino;
                fromAminoMsg(object: _113.HistoricalInfoAminoMsg): _113.HistoricalInfo;
                toAminoMsg(message: _113.HistoricalInfo): _113.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _113.HistoricalInfoProtoMsg): _113.HistoricalInfo;
                toProto(message: _113.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _113.HistoricalInfo): _113.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _113.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.CommissionRates;
                fromPartial(object: Partial<_113.CommissionRates>): _113.CommissionRates;
                fromAmino(object: _113.CommissionRatesAmino): _113.CommissionRates;
                toAmino(message: _113.CommissionRates): _113.CommissionRatesAmino;
                fromAminoMsg(object: _113.CommissionRatesAminoMsg): _113.CommissionRates;
                toAminoMsg(message: _113.CommissionRates): _113.CommissionRatesAminoMsg;
                fromProtoMsg(message: _113.CommissionRatesProtoMsg): _113.CommissionRates;
                toProto(message: _113.CommissionRates): Uint8Array;
                toProtoMsg(message: _113.CommissionRates): _113.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _113.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Commission;
                fromPartial(object: Partial<_113.Commission>): _113.Commission;
                fromAmino(object: _113.CommissionAmino): _113.Commission;
                toAmino(message: _113.Commission): _113.CommissionAmino;
                fromAminoMsg(object: _113.CommissionAminoMsg): _113.Commission;
                toAminoMsg(message: _113.Commission): _113.CommissionAminoMsg;
                fromProtoMsg(message: _113.CommissionProtoMsg): _113.Commission;
                toProto(message: _113.Commission): Uint8Array;
                toProtoMsg(message: _113.Commission): _113.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _113.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Description;
                fromPartial(object: Partial<_113.Description>): _113.Description;
                fromAmino(object: _113.DescriptionAmino): _113.Description;
                toAmino(message: _113.Description): _113.DescriptionAmino;
                fromAminoMsg(object: _113.DescriptionAminoMsg): _113.Description;
                toAminoMsg(message: _113.Description): _113.DescriptionAminoMsg;
                fromProtoMsg(message: _113.DescriptionProtoMsg): _113.Description;
                toProto(message: _113.Description): Uint8Array;
                toProtoMsg(message: _113.Description): _113.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _113.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Validator;
                fromPartial(object: Partial<_113.Validator>): _113.Validator;
                fromAmino(object: _113.ValidatorAmino): _113.Validator;
                toAmino(message: _113.Validator): _113.ValidatorAmino;
                fromAminoMsg(object: _113.ValidatorAminoMsg): _113.Validator;
                toAminoMsg(message: _113.Validator): _113.ValidatorAminoMsg;
                fromProtoMsg(message: _113.ValidatorProtoMsg): _113.Validator;
                toProto(message: _113.Validator): Uint8Array;
                toProtoMsg(message: _113.Validator): _113.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _113.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ValAddresses;
                fromPartial(object: Partial<_113.ValAddresses>): _113.ValAddresses;
                fromAmino(object: _113.ValAddressesAmino): _113.ValAddresses;
                toAmino(message: _113.ValAddresses): _113.ValAddressesAmino;
                fromAminoMsg(object: _113.ValAddressesAminoMsg): _113.ValAddresses;
                toAminoMsg(message: _113.ValAddresses): _113.ValAddressesAminoMsg;
                fromProtoMsg(message: _113.ValAddressesProtoMsg): _113.ValAddresses;
                toProto(message: _113.ValAddresses): Uint8Array;
                toProtoMsg(message: _113.ValAddresses): _113.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _113.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVPair;
                fromPartial(object: Partial<_113.DVPair>): _113.DVPair;
                fromAmino(object: _113.DVPairAmino): _113.DVPair;
                toAmino(message: _113.DVPair): _113.DVPairAmino;
                fromAminoMsg(object: _113.DVPairAminoMsg): _113.DVPair;
                toAminoMsg(message: _113.DVPair): _113.DVPairAminoMsg;
                fromProtoMsg(message: _113.DVPairProtoMsg): _113.DVPair;
                toProto(message: _113.DVPair): Uint8Array;
                toProtoMsg(message: _113.DVPair): _113.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _113.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVPairs;
                fromPartial(object: Partial<_113.DVPairs>): _113.DVPairs;
                fromAmino(object: _113.DVPairsAmino): _113.DVPairs;
                toAmino(message: _113.DVPairs): _113.DVPairsAmino;
                fromAminoMsg(object: _113.DVPairsAminoMsg): _113.DVPairs;
                toAminoMsg(message: _113.DVPairs): _113.DVPairsAminoMsg;
                fromProtoMsg(message: _113.DVPairsProtoMsg): _113.DVPairs;
                toProto(message: _113.DVPairs): Uint8Array;
                toProtoMsg(message: _113.DVPairs): _113.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _113.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVVTriplet;
                fromPartial(object: Partial<_113.DVVTriplet>): _113.DVVTriplet;
                fromAmino(object: _113.DVVTripletAmino): _113.DVVTriplet;
                toAmino(message: _113.DVVTriplet): _113.DVVTripletAmino;
                fromAminoMsg(object: _113.DVVTripletAminoMsg): _113.DVVTriplet;
                toAminoMsg(message: _113.DVVTriplet): _113.DVVTripletAminoMsg;
                fromProtoMsg(message: _113.DVVTripletProtoMsg): _113.DVVTriplet;
                toProto(message: _113.DVVTriplet): Uint8Array;
                toProtoMsg(message: _113.DVVTriplet): _113.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _113.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DVVTriplets;
                fromPartial(object: Partial<_113.DVVTriplets>): _113.DVVTriplets;
                fromAmino(object: _113.DVVTripletsAmino): _113.DVVTriplets;
                toAmino(message: _113.DVVTriplets): _113.DVVTripletsAmino;
                fromAminoMsg(object: _113.DVVTripletsAminoMsg): _113.DVVTriplets;
                toAminoMsg(message: _113.DVVTriplets): _113.DVVTripletsAminoMsg;
                fromProtoMsg(message: _113.DVVTripletsProtoMsg): _113.DVVTriplets;
                toProto(message: _113.DVVTriplets): Uint8Array;
                toProtoMsg(message: _113.DVVTriplets): _113.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _113.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Delegation;
                fromPartial(object: Partial<_113.Delegation>): _113.Delegation;
                fromAmino(object: _113.DelegationAmino): _113.Delegation;
                toAmino(message: _113.Delegation): _113.DelegationAmino;
                fromAminoMsg(object: _113.DelegationAminoMsg): _113.Delegation;
                toAminoMsg(message: _113.Delegation): _113.DelegationAminoMsg;
                fromProtoMsg(message: _113.DelegationProtoMsg): _113.Delegation;
                toProto(message: _113.Delegation): Uint8Array;
                toProtoMsg(message: _113.Delegation): _113.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _113.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.UnbondingDelegation;
                fromPartial(object: Partial<_113.UnbondingDelegation>): _113.UnbondingDelegation;
                fromAmino(object: _113.UnbondingDelegationAmino): _113.UnbondingDelegation;
                toAmino(message: _113.UnbondingDelegation): _113.UnbondingDelegationAmino;
                fromAminoMsg(object: _113.UnbondingDelegationAminoMsg): _113.UnbondingDelegation;
                toAminoMsg(message: _113.UnbondingDelegation): _113.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _113.UnbondingDelegationProtoMsg): _113.UnbondingDelegation;
                toProto(message: _113.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _113.UnbondingDelegation): _113.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _113.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.UnbondingDelegationEntry;
                fromPartial(object: Partial<_113.UnbondingDelegationEntry>): _113.UnbondingDelegationEntry;
                fromAmino(object: _113.UnbondingDelegationEntryAmino): _113.UnbondingDelegationEntry;
                toAmino(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _113.UnbondingDelegationEntryAminoMsg): _113.UnbondingDelegationEntry;
                toAminoMsg(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _113.UnbondingDelegationEntryProtoMsg): _113.UnbondingDelegationEntry;
                toProto(message: _113.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _113.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.RedelegationEntry;
                fromPartial(object: Partial<_113.RedelegationEntry>): _113.RedelegationEntry;
                fromAmino(object: _113.RedelegationEntryAmino): _113.RedelegationEntry;
                toAmino(message: _113.RedelegationEntry): _113.RedelegationEntryAmino;
                fromAminoMsg(object: _113.RedelegationEntryAminoMsg): _113.RedelegationEntry;
                toAminoMsg(message: _113.RedelegationEntry): _113.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _113.RedelegationEntryProtoMsg): _113.RedelegationEntry;
                toProto(message: _113.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _113.RedelegationEntry): _113.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _113.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Redelegation;
                fromPartial(object: Partial<_113.Redelegation>): _113.Redelegation;
                fromAmino(object: _113.RedelegationAmino): _113.Redelegation;
                toAmino(message: _113.Redelegation): _113.RedelegationAmino;
                fromAminoMsg(object: _113.RedelegationAminoMsg): _113.Redelegation;
                toAminoMsg(message: _113.Redelegation): _113.RedelegationAminoMsg;
                fromProtoMsg(message: _113.RedelegationProtoMsg): _113.Redelegation;
                toProto(message: _113.Redelegation): Uint8Array;
                toProtoMsg(message: _113.Redelegation): _113.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _113.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Params;
                fromPartial(object: Partial<_113.Params>): _113.Params;
                fromAmino(object: _113.ParamsAmino): _113.Params;
                toAmino(message: _113.Params): _113.ParamsAmino;
                fromAminoMsg(object: _113.ParamsAminoMsg): _113.Params;
                toAminoMsg(message: _113.Params): _113.ParamsAminoMsg;
                fromProtoMsg(message: _113.ParamsProtoMsg): _113.Params;
                toProto(message: _113.Params): Uint8Array;
                toProtoMsg(message: _113.Params): _113.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _113.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.DelegationResponse;
                fromPartial(object: Partial<_113.DelegationResponse>): _113.DelegationResponse;
                fromAmino(object: _113.DelegationResponseAmino): _113.DelegationResponse;
                toAmino(message: _113.DelegationResponse): _113.DelegationResponseAmino;
                fromAminoMsg(object: _113.DelegationResponseAminoMsg): _113.DelegationResponse;
                toAminoMsg(message: _113.DelegationResponse): _113.DelegationResponseAminoMsg;
                fromProtoMsg(message: _113.DelegationResponseProtoMsg): _113.DelegationResponse;
                toProto(message: _113.DelegationResponse): Uint8Array;
                toProtoMsg(message: _113.DelegationResponse): _113.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _113.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.RedelegationEntryResponse;
                fromPartial(object: Partial<_113.RedelegationEntryResponse>): _113.RedelegationEntryResponse;
                fromAmino(object: _113.RedelegationEntryResponseAmino): _113.RedelegationEntryResponse;
                toAmino(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _113.RedelegationEntryResponseAminoMsg): _113.RedelegationEntryResponse;
                toAminoMsg(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _113.RedelegationEntryResponseProtoMsg): _113.RedelegationEntryResponse;
                toProto(message: _113.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _113.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.RedelegationResponse;
                fromPartial(object: Partial<_113.RedelegationResponse>): _113.RedelegationResponse;
                fromAmino(object: _113.RedelegationResponseAmino): _113.RedelegationResponse;
                toAmino(message: _113.RedelegationResponse): _113.RedelegationResponseAmino;
                fromAminoMsg(object: _113.RedelegationResponseAminoMsg): _113.RedelegationResponse;
                toAminoMsg(message: _113.RedelegationResponse): _113.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _113.RedelegationResponseProtoMsg): _113.RedelegationResponse;
                toProto(message: _113.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _113.RedelegationResponse): _113.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _113.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Pool;
                fromPartial(object: Partial<_113.Pool>): _113.Pool;
                fromAmino(object: _113.PoolAmino): _113.Pool;
                toAmino(message: _113.Pool): _113.PoolAmino;
                fromAminoMsg(object: _113.PoolAminoMsg): _113.Pool;
                toAminoMsg(message: _113.Pool): _113.PoolAminoMsg;
                fromProtoMsg(message: _113.PoolProtoMsg): _113.Pool;
                toProto(message: _113.Pool): Uint8Array;
                toProtoMsg(message: _113.Pool): _113.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _113.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ValidatorUpdates;
                fromPartial(object: Partial<_113.ValidatorUpdates>): _113.ValidatorUpdates;
                fromAmino(object: _113.ValidatorUpdatesAmino): _113.ValidatorUpdates;
                toAmino(message: _113.ValidatorUpdates): _113.ValidatorUpdatesAmino;
                fromAminoMsg(object: _113.ValidatorUpdatesAminoMsg): _113.ValidatorUpdates;
                toAminoMsg(message: _113.ValidatorUpdates): _113.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _113.ValidatorUpdatesProtoMsg): _113.ValidatorUpdates;
                toProto(message: _113.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _113.ValidatorUpdates): _113.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorsRequest;
                fromPartial(object: Partial<_112.QueryValidatorsRequest>): _112.QueryValidatorsRequest;
                fromAmino(object: _112.QueryValidatorsRequestAmino): _112.QueryValidatorsRequest;
                toAmino(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorsRequestAminoMsg): _112.QueryValidatorsRequest;
                toAminoMsg(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorsRequestProtoMsg): _112.QueryValidatorsRequest;
                toProto(message: _112.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorsResponse;
                fromPartial(object: Partial<_112.QueryValidatorsResponse>): _112.QueryValidatorsResponse;
                fromAmino(object: _112.QueryValidatorsResponseAmino): _112.QueryValidatorsResponse;
                toAmino(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorsResponseAminoMsg): _112.QueryValidatorsResponse;
                toAminoMsg(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorsResponseProtoMsg): _112.QueryValidatorsResponse;
                toProto(message: _112.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorRequest;
                fromPartial(object: Partial<_112.QueryValidatorRequest>): _112.QueryValidatorRequest;
                fromAmino(object: _112.QueryValidatorRequestAmino): _112.QueryValidatorRequest;
                toAmino(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorRequestAminoMsg): _112.QueryValidatorRequest;
                toAminoMsg(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorRequestProtoMsg): _112.QueryValidatorRequest;
                toProto(message: _112.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorResponse;
                fromPartial(object: Partial<_112.QueryValidatorResponse>): _112.QueryValidatorResponse;
                fromAmino(object: _112.QueryValidatorResponseAmino): _112.QueryValidatorResponse;
                toAmino(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorResponseAminoMsg): _112.QueryValidatorResponse;
                toAminoMsg(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorResponseProtoMsg): _112.QueryValidatorResponse;
                toProto(message: _112.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsRequest>): _112.QueryValidatorDelegationsRequest;
                fromAmino(object: _112.QueryValidatorDelegationsRequestAmino): _112.QueryValidatorDelegationsRequest;
                toAmino(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorDelegationsRequestAminoMsg): _112.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorDelegationsRequestProtoMsg): _112.QueryValidatorDelegationsRequest;
                toProto(message: _112.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsResponse>): _112.QueryValidatorDelegationsResponse;
                fromAmino(object: _112.QueryValidatorDelegationsResponseAmino): _112.QueryValidatorDelegationsResponse;
                toAmino(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorDelegationsResponseAminoMsg): _112.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorDelegationsResponseProtoMsg): _112.QueryValidatorDelegationsResponse;
                toProto(message: _112.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsRequest>): _112.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _112.QueryValidatorUnbondingDelegationsRequestAmino): _112.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorUnbondingDelegationsRequestAminoMsg): _112.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorUnbondingDelegationsRequestProtoMsg): _112.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _112.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsResponse>): _112.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _112.QueryValidatorUnbondingDelegationsResponseAmino): _112.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorUnbondingDelegationsResponseAminoMsg): _112.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorUnbondingDelegationsResponseProtoMsg): _112.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _112.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegationRequest;
                fromPartial(object: Partial<_112.QueryDelegationRequest>): _112.QueryDelegationRequest;
                fromAmino(object: _112.QueryDelegationRequestAmino): _112.QueryDelegationRequest;
                toAmino(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestAmino;
                fromAminoMsg(object: _112.QueryDelegationRequestAminoMsg): _112.QueryDelegationRequest;
                toAminoMsg(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegationRequestProtoMsg): _112.QueryDelegationRequest;
                toProto(message: _112.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegationResponse;
                fromPartial(object: Partial<_112.QueryDelegationResponse>): _112.QueryDelegationResponse;
                fromAmino(object: _112.QueryDelegationResponseAmino): _112.QueryDelegationResponse;
                toAmino(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseAmino;
                fromAminoMsg(object: _112.QueryDelegationResponseAminoMsg): _112.QueryDelegationResponse;
                toAminoMsg(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegationResponseProtoMsg): _112.QueryDelegationResponse;
                toProto(message: _112.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _112.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationRequest>): _112.QueryUnbondingDelegationRequest;
                fromAmino(object: _112.QueryUnbondingDelegationRequestAmino): _112.QueryUnbondingDelegationRequest;
                toAmino(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _112.QueryUnbondingDelegationRequestAminoMsg): _112.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _112.QueryUnbondingDelegationRequestProtoMsg): _112.QueryUnbondingDelegationRequest;
                toProto(message: _112.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _112.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationResponse>): _112.QueryUnbondingDelegationResponse;
                fromAmino(object: _112.QueryUnbondingDelegationResponseAmino): _112.QueryUnbondingDelegationResponse;
                toAmino(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _112.QueryUnbondingDelegationResponseAminoMsg): _112.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _112.QueryUnbondingDelegationResponseProtoMsg): _112.QueryUnbondingDelegationResponse;
                toProto(message: _112.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsRequest>): _112.QueryDelegatorDelegationsRequest;
                fromAmino(object: _112.QueryDelegatorDelegationsRequestAmino): _112.QueryDelegatorDelegationsRequest;
                toAmino(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorDelegationsRequestAminoMsg): _112.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorDelegationsRequestProtoMsg): _112.QueryDelegatorDelegationsRequest;
                toProto(message: _112.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsResponse>): _112.QueryDelegatorDelegationsResponse;
                fromAmino(object: _112.QueryDelegatorDelegationsResponseAmino): _112.QueryDelegatorDelegationsResponse;
                toAmino(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorDelegationsResponseAminoMsg): _112.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorDelegationsResponseProtoMsg): _112.QueryDelegatorDelegationsResponse;
                toProto(message: _112.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsRequest>): _112.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _112.QueryDelegatorUnbondingDelegationsRequestAmino): _112.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _112.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _112.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _112.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsResponse>): _112.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _112.QueryDelegatorUnbondingDelegationsResponseAmino): _112.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _112.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _112.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _112.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryRedelegationsRequest;
                fromPartial(object: Partial<_112.QueryRedelegationsRequest>): _112.QueryRedelegationsRequest;
                fromAmino(object: _112.QueryRedelegationsRequestAmino): _112.QueryRedelegationsRequest;
                toAmino(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryRedelegationsRequestAminoMsg): _112.QueryRedelegationsRequest;
                toAminoMsg(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryRedelegationsRequestProtoMsg): _112.QueryRedelegationsRequest;
                toProto(message: _112.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryRedelegationsResponse;
                fromPartial(object: Partial<_112.QueryRedelegationsResponse>): _112.QueryRedelegationsResponse;
                fromAmino(object: _112.QueryRedelegationsResponseAmino): _112.QueryRedelegationsResponse;
                toAmino(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryRedelegationsResponseAminoMsg): _112.QueryRedelegationsResponse;
                toAminoMsg(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryRedelegationsResponseProtoMsg): _112.QueryRedelegationsResponse;
                toProto(message: _112.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsRequest>): _112.QueryDelegatorValidatorsRequest;
                fromAmino(object: _112.QueryDelegatorValidatorsRequestAmino): _112.QueryDelegatorValidatorsRequest;
                toAmino(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorsRequestAminoMsg): _112.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorsRequestProtoMsg): _112.QueryDelegatorValidatorsRequest;
                toProto(message: _112.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsResponse>): _112.QueryDelegatorValidatorsResponse;
                fromAmino(object: _112.QueryDelegatorValidatorsResponseAmino): _112.QueryDelegatorValidatorsResponse;
                toAmino(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorsResponseAminoMsg): _112.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorsResponseProtoMsg): _112.QueryDelegatorValidatorsResponse;
                toProto(message: _112.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorRequest>): _112.QueryDelegatorValidatorRequest;
                fromAmino(object: _112.QueryDelegatorValidatorRequestAmino): _112.QueryDelegatorValidatorRequest;
                toAmino(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorRequestAminoMsg): _112.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorRequestProtoMsg): _112.QueryDelegatorValidatorRequest;
                toProto(message: _112.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorResponse>): _112.QueryDelegatorValidatorResponse;
                fromAmino(object: _112.QueryDelegatorValidatorResponseAmino): _112.QueryDelegatorValidatorResponse;
                toAmino(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorResponseAminoMsg): _112.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorResponseProtoMsg): _112.QueryDelegatorValidatorResponse;
                toProto(message: _112.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _112.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_112.QueryHistoricalInfoRequest>): _112.QueryHistoricalInfoRequest;
                fromAmino(object: _112.QueryHistoricalInfoRequestAmino): _112.QueryHistoricalInfoRequest;
                toAmino(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _112.QueryHistoricalInfoRequestAminoMsg): _112.QueryHistoricalInfoRequest;
                toAminoMsg(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _112.QueryHistoricalInfoRequestProtoMsg): _112.QueryHistoricalInfoRequest;
                toProto(message: _112.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _112.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_112.QueryHistoricalInfoResponse>): _112.QueryHistoricalInfoResponse;
                fromAmino(object: _112.QueryHistoricalInfoResponseAmino): _112.QueryHistoricalInfoResponse;
                toAmino(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _112.QueryHistoricalInfoResponseAminoMsg): _112.QueryHistoricalInfoResponse;
                toAminoMsg(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _112.QueryHistoricalInfoResponseProtoMsg): _112.QueryHistoricalInfoResponse;
                toProto(message: _112.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _112.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.QueryPoolRequest;
                fromPartial(_: Partial<_112.QueryPoolRequest>): _112.QueryPoolRequest;
                fromAmino(_: _112.QueryPoolRequestAmino): _112.QueryPoolRequest;
                toAmino(_: _112.QueryPoolRequest): _112.QueryPoolRequestAmino;
                fromAminoMsg(object: _112.QueryPoolRequestAminoMsg): _112.QueryPoolRequest;
                toAminoMsg(message: _112.QueryPoolRequest): _112.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _112.QueryPoolRequestProtoMsg): _112.QueryPoolRequest;
                toProto(message: _112.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _112.QueryPoolRequest): _112.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _112.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryPoolResponse;
                fromPartial(object: Partial<_112.QueryPoolResponse>): _112.QueryPoolResponse;
                fromAmino(object: _112.QueryPoolResponseAmino): _112.QueryPoolResponse;
                toAmino(message: _112.QueryPoolResponse): _112.QueryPoolResponseAmino;
                fromAminoMsg(object: _112.QueryPoolResponseAminoMsg): _112.QueryPoolResponse;
                toAminoMsg(message: _112.QueryPoolResponse): _112.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _112.QueryPoolResponseProtoMsg): _112.QueryPoolResponse;
                toProto(message: _112.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _112.QueryPoolResponse): _112.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _112.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.QueryParamsRequest;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                toAminoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                toProto(message: _112.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _112.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryParamsResponse;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                toAminoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                toProto(message: _112.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _111.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.LastValidatorPower;
                fromPartial(object: Partial<_111.LastValidatorPower>): _111.LastValidatorPower;
                fromAmino(object: _111.LastValidatorPowerAmino): _111.LastValidatorPower;
                toAmino(message: _111.LastValidatorPower): _111.LastValidatorPowerAmino;
                fromAminoMsg(object: _111.LastValidatorPowerAminoMsg): _111.LastValidatorPower;
                toAminoMsg(message: _111.LastValidatorPower): _111.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _111.LastValidatorPowerProtoMsg): _111.LastValidatorPower;
                toProto(message: _111.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _111.LastValidatorPower): _111.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _110.AuthorizationType;
            authorizationTypeToJSON(object: _110.AuthorizationType): string;
            AuthorizationType: typeof _110.AuthorizationType;
            AuthorizationTypeSDKType: typeof _110.AuthorizationType;
            AuthorizationTypeAmino: typeof _110.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _110.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.StakeAuthorization;
                fromPartial(object: Partial<_110.StakeAuthorization>): _110.StakeAuthorization;
                fromAmino(object: _110.StakeAuthorizationAmino): _110.StakeAuthorization;
                toAmino(message: _110.StakeAuthorization): _110.StakeAuthorizationAmino;
                fromAminoMsg(object: _110.StakeAuthorizationAminoMsg): _110.StakeAuthorization;
                toAminoMsg(message: _110.StakeAuthorization): _110.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _110.StakeAuthorizationProtoMsg): _110.StakeAuthorization;
                toProto(message: _110.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _110.StakeAuthorization): _110.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _110.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.StakeAuthorization_Validators;
                fromPartial(object: Partial<_110.StakeAuthorization_Validators>): _110.StakeAuthorization_Validators;
                fromAmino(object: _110.StakeAuthorization_ValidatorsAmino): _110.StakeAuthorization_Validators;
                toAmino(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _110.StakeAuthorization_ValidatorsAminoMsg): _110.StakeAuthorization_Validators;
                toAminoMsg(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _110.StakeAuthorization_ValidatorsProtoMsg): _110.StakeAuthorization_Validators;
                toProto(message: _110.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _115.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Config;
                    fromPartial(object: Partial<_115.Config>): _115.Config;
                    fromAmino(object: _115.ConfigAmino): _115.Config;
                    toAmino(message: _115.Config): _115.ConfigAmino;
                    fromAminoMsg(object: _115.ConfigAminoMsg): _115.Config;
                    toAminoMsg(message: _115.Config): _115.ConfigAminoMsg;
                    fromProtoMsg(message: _115.ConfigProtoMsg): _115.Config;
                    toProto(message: _115.Config): Uint8Array;
                    toProtoMsg(message: _115.Config): _115.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _116.SignMode;
                signModeToJSON(object: _116.SignMode): string;
                SignMode: typeof _116.SignMode;
                SignModeSDKType: typeof _116.SignMode;
                SignModeAmino: typeof _116.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptors;
                    fromPartial(object: Partial<_116.SignatureDescriptors>): _116.SignatureDescriptors;
                    fromAmino(object: _116.SignatureDescriptorsAmino): _116.SignatureDescriptors;
                    toAmino(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorsAminoMsg): _116.SignatureDescriptors;
                    toAminoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorsProtoMsg): _116.SignatureDescriptors;
                    toProto(message: _116.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor;
                    fromPartial(object: Partial<_116.SignatureDescriptor>): _116.SignatureDescriptor;
                    fromAmino(object: _116.SignatureDescriptorAmino): _116.SignatureDescriptor;
                    toAmino(message: _116.SignatureDescriptor): _116.SignatureDescriptorAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorAminoMsg): _116.SignatureDescriptor;
                    toAminoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorProtoMsg): _116.SignatureDescriptor;
                    toProto(message: _116.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data>): _116.SignatureDescriptor_Data;
                    fromAmino(object: _116.SignatureDescriptor_DataAmino): _116.SignatureDescriptor_Data;
                    toAmino(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_DataAminoMsg): _116.SignatureDescriptor_Data;
                    toAminoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_DataProtoMsg): _116.SignatureDescriptor_Data;
                    toProto(message: _116.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Single>): _116.SignatureDescriptor_Data_Single;
                    fromAmino(object: _116.SignatureDescriptor_Data_SingleAmino): _116.SignatureDescriptor_Data_Single;
                    toAmino(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_SingleAminoMsg): _116.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_SingleProtoMsg): _116.SignatureDescriptor_Data_Single;
                    toProto(message: _116.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Multi>): _116.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _116.SignatureDescriptor_Data_MultiAmino): _116.SignatureDescriptor_Data_Multi;
                    toAmino(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_MultiAminoMsg): _116.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_MultiProtoMsg): _116.SignatureDescriptor_Data_Multi;
                    toProto(message: _116.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _219.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _117.SimulateRequest): Promise<_117.SimulateResponse>;
                getTx(request: _117.GetTxRequest): Promise<_117.GetTxResponse>;
                broadcastTx(request: _117.BroadcastTxRequest): Promise<_117.BroadcastTxResponse>;
                getTxsEvent(request: _117.GetTxsEventRequest): Promise<_117.GetTxsEventResponse>;
                getBlockWithTxs(request: _117.GetBlockWithTxsRequest): Promise<_117.GetBlockWithTxsResponse>;
                txDecode(request: _117.TxDecodeRequest): Promise<_117.TxDecodeResponse>;
                txEncode(request: _117.TxEncodeRequest): Promise<_117.TxEncodeResponse>;
                txEncodeAmino(request: _117.TxEncodeAminoRequest): Promise<_117.TxEncodeAminoResponse>;
                txDecodeAmino(request: _117.TxDecodeAminoRequest): Promise<_117.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _118.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Tx;
                fromPartial(object: Partial<_118.Tx>): _118.Tx;
                fromAmino(object: _118.TxAmino): _118.Tx;
                toAmino(message: _118.Tx): _118.TxAmino;
                fromAminoMsg(object: _118.TxAminoMsg): _118.Tx;
                toAminoMsg(message: _118.Tx): _118.TxAminoMsg;
                fromProtoMsg(message: _118.TxProtoMsg): _118.Tx;
                toProto(message: _118.Tx): Uint8Array;
                toProtoMsg(message: _118.Tx): _118.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _118.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TxRaw;
                fromPartial(object: Partial<_118.TxRaw>): _118.TxRaw;
                fromAmino(object: _118.TxRawAmino): _118.TxRaw;
                toAmino(message: _118.TxRaw): _118.TxRawAmino;
                fromAminoMsg(object: _118.TxRawAminoMsg): _118.TxRaw;
                toAminoMsg(message: _118.TxRaw): _118.TxRawAminoMsg;
                fromProtoMsg(message: _118.TxRawProtoMsg): _118.TxRaw;
                toProto(message: _118.TxRaw): Uint8Array;
                toProtoMsg(message: _118.TxRaw): _118.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _118.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignDoc;
                fromPartial(object: Partial<_118.SignDoc>): _118.SignDoc;
                fromAmino(object: _118.SignDocAmino): _118.SignDoc;
                toAmino(message: _118.SignDoc): _118.SignDocAmino;
                fromAminoMsg(object: _118.SignDocAminoMsg): _118.SignDoc;
                toAminoMsg(message: _118.SignDoc): _118.SignDocAminoMsg;
                fromProtoMsg(message: _118.SignDocProtoMsg): _118.SignDoc;
                toProto(message: _118.SignDoc): Uint8Array;
                toProtoMsg(message: _118.SignDoc): _118.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _118.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignDocDirectAux;
                fromPartial(object: Partial<_118.SignDocDirectAux>): _118.SignDocDirectAux;
                fromAmino(object: _118.SignDocDirectAuxAmino): _118.SignDocDirectAux;
                toAmino(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAmino;
                fromAminoMsg(object: _118.SignDocDirectAuxAminoMsg): _118.SignDocDirectAux;
                toAminoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _118.SignDocDirectAuxProtoMsg): _118.SignDocDirectAux;
                toProto(message: _118.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _118.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TxBody;
                fromPartial(object: Partial<_118.TxBody>): _118.TxBody;
                fromAmino(object: _118.TxBodyAmino): _118.TxBody;
                toAmino(message: _118.TxBody): _118.TxBodyAmino;
                fromAminoMsg(object: _118.TxBodyAminoMsg): _118.TxBody;
                toAminoMsg(message: _118.TxBody): _118.TxBodyAminoMsg;
                fromProtoMsg(message: _118.TxBodyProtoMsg): _118.TxBody;
                toProto(message: _118.TxBody): Uint8Array;
                toProtoMsg(message: _118.TxBody): _118.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _118.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.AuthInfo;
                fromPartial(object: Partial<_118.AuthInfo>): _118.AuthInfo;
                fromAmino(object: _118.AuthInfoAmino): _118.AuthInfo;
                toAmino(message: _118.AuthInfo): _118.AuthInfoAmino;
                fromAminoMsg(object: _118.AuthInfoAminoMsg): _118.AuthInfo;
                toAminoMsg(message: _118.AuthInfo): _118.AuthInfoAminoMsg;
                fromProtoMsg(message: _118.AuthInfoProtoMsg): _118.AuthInfo;
                toProto(message: _118.AuthInfo): Uint8Array;
                toProtoMsg(message: _118.AuthInfo): _118.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _118.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignerInfo;
                fromPartial(object: Partial<_118.SignerInfo>): _118.SignerInfo;
                fromAmino(object: _118.SignerInfoAmino): _118.SignerInfo;
                toAmino(message: _118.SignerInfo): _118.SignerInfoAmino;
                fromAminoMsg(object: _118.SignerInfoAminoMsg): _118.SignerInfo;
                toAminoMsg(message: _118.SignerInfo): _118.SignerInfoAminoMsg;
                fromProtoMsg(message: _118.SignerInfoProtoMsg): _118.SignerInfo;
                toProto(message: _118.SignerInfo): Uint8Array;
                toProtoMsg(message: _118.SignerInfo): _118.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _118.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo;
                fromPartial(object: Partial<_118.ModeInfo>): _118.ModeInfo;
                fromAmino(object: _118.ModeInfoAmino): _118.ModeInfo;
                toAmino(message: _118.ModeInfo): _118.ModeInfoAmino;
                fromAminoMsg(object: _118.ModeInfoAminoMsg): _118.ModeInfo;
                toAminoMsg(message: _118.ModeInfo): _118.ModeInfoAminoMsg;
                fromProtoMsg(message: _118.ModeInfoProtoMsg): _118.ModeInfo;
                toProto(message: _118.ModeInfo): Uint8Array;
                toProtoMsg(message: _118.ModeInfo): _118.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo_Single;
                fromPartial(object: Partial<_118.ModeInfo_Single>): _118.ModeInfo_Single;
                fromAmino(object: _118.ModeInfo_SingleAmino): _118.ModeInfo_Single;
                toAmino(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAmino;
                fromAminoMsg(object: _118.ModeInfo_SingleAminoMsg): _118.ModeInfo_Single;
                toAminoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_SingleProtoMsg): _118.ModeInfo_Single;
                toProto(message: _118.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo_Multi;
                fromPartial(object: Partial<_118.ModeInfo_Multi>): _118.ModeInfo_Multi;
                fromAmino(object: _118.ModeInfo_MultiAmino): _118.ModeInfo_Multi;
                toAmino(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAmino;
                fromAminoMsg(object: _118.ModeInfo_MultiAminoMsg): _118.ModeInfo_Multi;
                toAminoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_MultiProtoMsg): _118.ModeInfo_Multi;
                toProto(message: _118.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _118.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Fee;
                fromPartial(object: Partial<_118.Fee>): _118.Fee;
                fromAmino(object: _118.FeeAmino): _118.Fee;
                toAmino(message: _118.Fee): _118.FeeAmino;
                fromAminoMsg(object: _118.FeeAminoMsg): _118.Fee;
                toAminoMsg(message: _118.Fee): _118.FeeAminoMsg;
                fromProtoMsg(message: _118.FeeProtoMsg): _118.Fee;
                toProto(message: _118.Fee): Uint8Array;
                toProtoMsg(message: _118.Fee): _118.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _118.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Tip;
                fromPartial(object: Partial<_118.Tip>): _118.Tip;
                fromAmino(object: _118.TipAmino): _118.Tip;
                toAmino(message: _118.Tip): _118.TipAmino;
                fromAminoMsg(object: _118.TipAminoMsg): _118.Tip;
                toAminoMsg(message: _118.Tip): _118.TipAminoMsg;
                fromProtoMsg(message: _118.TipProtoMsg): _118.Tip;
                toProto(message: _118.Tip): Uint8Array;
                toProtoMsg(message: _118.Tip): _118.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _118.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.AuxSignerData;
                fromPartial(object: Partial<_118.AuxSignerData>): _118.AuxSignerData;
                fromAmino(object: _118.AuxSignerDataAmino): _118.AuxSignerData;
                toAmino(message: _118.AuxSignerData): _118.AuxSignerDataAmino;
                fromAminoMsg(object: _118.AuxSignerDataAminoMsg): _118.AuxSignerData;
                toAminoMsg(message: _118.AuxSignerData): _118.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _118.AuxSignerDataProtoMsg): _118.AuxSignerData;
                toProto(message: _118.AuxSignerData): Uint8Array;
                toProtoMsg(message: _118.AuxSignerData): _118.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _117.OrderBy;
            orderByToJSON(object: _117.OrderBy): string;
            broadcastModeFromJSON(object: any): _117.BroadcastMode;
            broadcastModeToJSON(object: _117.BroadcastMode): string;
            OrderBy: typeof _117.OrderBy;
            OrderBySDKType: typeof _117.OrderBy;
            OrderByAmino: typeof _117.OrderBy;
            BroadcastMode: typeof _117.BroadcastMode;
            BroadcastModeSDKType: typeof _117.BroadcastMode;
            BroadcastModeAmino: typeof _117.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _117.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxsEventRequest;
                fromPartial(object: Partial<_117.GetTxsEventRequest>): _117.GetTxsEventRequest;
                fromAmino(object: _117.GetTxsEventRequestAmino): _117.GetTxsEventRequest;
                toAmino(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAmino;
                fromAminoMsg(object: _117.GetTxsEventRequestAminoMsg): _117.GetTxsEventRequest;
                toAminoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventRequestProtoMsg): _117.GetTxsEventRequest;
                toProto(message: _117.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _117.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxsEventResponse;
                fromPartial(object: Partial<_117.GetTxsEventResponse>): _117.GetTxsEventResponse;
                fromAmino(object: _117.GetTxsEventResponseAmino): _117.GetTxsEventResponse;
                toAmino(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAmino;
                fromAminoMsg(object: _117.GetTxsEventResponseAminoMsg): _117.GetTxsEventResponse;
                toAminoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventResponseProtoMsg): _117.GetTxsEventResponse;
                toProto(message: _117.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _117.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.BroadcastTxRequest;
                fromPartial(object: Partial<_117.BroadcastTxRequest>): _117.BroadcastTxRequest;
                fromAmino(object: _117.BroadcastTxRequestAmino): _117.BroadcastTxRequest;
                toAmino(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAmino;
                fromAminoMsg(object: _117.BroadcastTxRequestAminoMsg): _117.BroadcastTxRequest;
                toAminoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxRequestProtoMsg): _117.BroadcastTxRequest;
                toProto(message: _117.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _117.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.BroadcastTxResponse;
                fromPartial(object: Partial<_117.BroadcastTxResponse>): _117.BroadcastTxResponse;
                fromAmino(object: _117.BroadcastTxResponseAmino): _117.BroadcastTxResponse;
                toAmino(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAmino;
                fromAminoMsg(object: _117.BroadcastTxResponseAminoMsg): _117.BroadcastTxResponse;
                toAminoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxResponseProtoMsg): _117.BroadcastTxResponse;
                toProto(message: _117.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _117.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SimulateRequest;
                fromPartial(object: Partial<_117.SimulateRequest>): _117.SimulateRequest;
                fromAmino(object: _117.SimulateRequestAmino): _117.SimulateRequest;
                toAmino(message: _117.SimulateRequest): _117.SimulateRequestAmino;
                fromAminoMsg(object: _117.SimulateRequestAminoMsg): _117.SimulateRequest;
                toAminoMsg(message: _117.SimulateRequest): _117.SimulateRequestAminoMsg;
                fromProtoMsg(message: _117.SimulateRequestProtoMsg): _117.SimulateRequest;
                toProto(message: _117.SimulateRequest): Uint8Array;
                toProtoMsg(message: _117.SimulateRequest): _117.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _117.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SimulateResponse;
                fromPartial(object: Partial<_117.SimulateResponse>): _117.SimulateResponse;
                fromAmino(object: _117.SimulateResponseAmino): _117.SimulateResponse;
                toAmino(message: _117.SimulateResponse): _117.SimulateResponseAmino;
                fromAminoMsg(object: _117.SimulateResponseAminoMsg): _117.SimulateResponse;
                toAminoMsg(message: _117.SimulateResponse): _117.SimulateResponseAminoMsg;
                fromProtoMsg(message: _117.SimulateResponseProtoMsg): _117.SimulateResponse;
                toProto(message: _117.SimulateResponse): Uint8Array;
                toProtoMsg(message: _117.SimulateResponse): _117.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _117.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxRequest;
                fromPartial(object: Partial<_117.GetTxRequest>): _117.GetTxRequest;
                fromAmino(object: _117.GetTxRequestAmino): _117.GetTxRequest;
                toAmino(message: _117.GetTxRequest): _117.GetTxRequestAmino;
                fromAminoMsg(object: _117.GetTxRequestAminoMsg): _117.GetTxRequest;
                toAminoMsg(message: _117.GetTxRequest): _117.GetTxRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxRequestProtoMsg): _117.GetTxRequest;
                toProto(message: _117.GetTxRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxRequest): _117.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _117.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxResponse;
                fromPartial(object: Partial<_117.GetTxResponse>): _117.GetTxResponse;
                fromAmino(object: _117.GetTxResponseAmino): _117.GetTxResponse;
                toAmino(message: _117.GetTxResponse): _117.GetTxResponseAmino;
                fromAminoMsg(object: _117.GetTxResponseAminoMsg): _117.GetTxResponse;
                toAminoMsg(message: _117.GetTxResponse): _117.GetTxResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxResponseProtoMsg): _117.GetTxResponse;
                toProto(message: _117.GetTxResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxResponse): _117.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_117.GetBlockWithTxsRequest>): _117.GetBlockWithTxsRequest;
                fromAmino(object: _117.GetBlockWithTxsRequestAmino): _117.GetBlockWithTxsRequest;
                toAmino(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsRequestAminoMsg): _117.GetBlockWithTxsRequest;
                toAminoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsRequestProtoMsg): _117.GetBlockWithTxsRequest;
                toProto(message: _117.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_117.GetBlockWithTxsResponse>): _117.GetBlockWithTxsResponse;
                fromAmino(object: _117.GetBlockWithTxsResponseAmino): _117.GetBlockWithTxsResponse;
                toAmino(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsResponseAminoMsg): _117.GetBlockWithTxsResponse;
                toAminoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsResponseProtoMsg): _117.GetBlockWithTxsResponse;
                toProto(message: _117.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _117.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeRequest;
                fromPartial(object: Partial<_117.TxDecodeRequest>): _117.TxDecodeRequest;
                fromAmino(object: _117.TxDecodeRequestAmino): _117.TxDecodeRequest;
                toAmino(message: _117.TxDecodeRequest): _117.TxDecodeRequestAmino;
                fromAminoMsg(object: _117.TxDecodeRequestAminoMsg): _117.TxDecodeRequest;
                toAminoMsg(message: _117.TxDecodeRequest): _117.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _117.TxDecodeRequestProtoMsg): _117.TxDecodeRequest;
                toProto(message: _117.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _117.TxDecodeRequest): _117.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _117.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeResponse;
                fromPartial(object: Partial<_117.TxDecodeResponse>): _117.TxDecodeResponse;
                fromAmino(object: _117.TxDecodeResponseAmino): _117.TxDecodeResponse;
                toAmino(message: _117.TxDecodeResponse): _117.TxDecodeResponseAmino;
                fromAminoMsg(object: _117.TxDecodeResponseAminoMsg): _117.TxDecodeResponse;
                toAminoMsg(message: _117.TxDecodeResponse): _117.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _117.TxDecodeResponseProtoMsg): _117.TxDecodeResponse;
                toProto(message: _117.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _117.TxDecodeResponse): _117.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _117.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeRequest;
                fromPartial(object: Partial<_117.TxEncodeRequest>): _117.TxEncodeRequest;
                fromAmino(object: _117.TxEncodeRequestAmino): _117.TxEncodeRequest;
                toAmino(message: _117.TxEncodeRequest): _117.TxEncodeRequestAmino;
                fromAminoMsg(object: _117.TxEncodeRequestAminoMsg): _117.TxEncodeRequest;
                toAminoMsg(message: _117.TxEncodeRequest): _117.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _117.TxEncodeRequestProtoMsg): _117.TxEncodeRequest;
                toProto(message: _117.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _117.TxEncodeRequest): _117.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _117.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeResponse;
                fromPartial(object: Partial<_117.TxEncodeResponse>): _117.TxEncodeResponse;
                fromAmino(object: _117.TxEncodeResponseAmino): _117.TxEncodeResponse;
                toAmino(message: _117.TxEncodeResponse): _117.TxEncodeResponseAmino;
                fromAminoMsg(object: _117.TxEncodeResponseAminoMsg): _117.TxEncodeResponse;
                toAminoMsg(message: _117.TxEncodeResponse): _117.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _117.TxEncodeResponseProtoMsg): _117.TxEncodeResponse;
                toProto(message: _117.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _117.TxEncodeResponse): _117.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _117.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeAminoRequest;
                fromPartial(object: Partial<_117.TxEncodeAminoRequest>): _117.TxEncodeAminoRequest;
                fromAmino(object: _117.TxEncodeAminoRequestAmino): _117.TxEncodeAminoRequest;
                toAmino(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _117.TxEncodeAminoRequestAminoMsg): _117.TxEncodeAminoRequest;
                toAminoMsg(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _117.TxEncodeAminoRequestProtoMsg): _117.TxEncodeAminoRequest;
                toProto(message: _117.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _117.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeAminoResponse;
                fromPartial(object: Partial<_117.TxEncodeAminoResponse>): _117.TxEncodeAminoResponse;
                fromAmino(object: _117.TxEncodeAminoResponseAmino): _117.TxEncodeAminoResponse;
                toAmino(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _117.TxEncodeAminoResponseAminoMsg): _117.TxEncodeAminoResponse;
                toAminoMsg(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _117.TxEncodeAminoResponseProtoMsg): _117.TxEncodeAminoResponse;
                toProto(message: _117.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _117.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeAminoRequest;
                fromPartial(object: Partial<_117.TxDecodeAminoRequest>): _117.TxDecodeAminoRequest;
                fromAmino(object: _117.TxDecodeAminoRequestAmino): _117.TxDecodeAminoRequest;
                toAmino(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _117.TxDecodeAminoRequestAminoMsg): _117.TxDecodeAminoRequest;
                toAminoMsg(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _117.TxDecodeAminoRequestProtoMsg): _117.TxDecodeAminoRequest;
                toProto(message: _117.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _117.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeAminoResponse;
                fromPartial(object: Partial<_117.TxDecodeAminoResponse>): _117.TxDecodeAminoResponse;
                fromAmino(object: _117.TxDecodeAminoResponseAmino): _117.TxDecodeAminoResponse;
                toAmino(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _117.TxDecodeAminoResponseAminoMsg): _117.TxDecodeAminoResponse;
                toAminoMsg(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _117.TxDecodeAminoResponseProtoMsg): _117.TxDecodeAminoResponse;
                toProto(message: _117.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
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
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _120.QueryCurrentPlanRequest): Promise<_120.QueryCurrentPlanResponse>;
                appliedPlan(request: _120.QueryAppliedPlanRequest): Promise<_120.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _120.QueryUpgradedConsensusStateRequest): Promise<_120.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _120.QueryModuleVersionsRequest): Promise<_120.QueryModuleVersionsResponse>;
                authority(request?: _120.QueryAuthorityRequest): Promise<_120.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _121.MsgSoftwareUpgrade) => _121.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _121.MsgSoftwareUpgradeAmino) => _121.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _121.MsgCancelUpgrade) => _121.MsgCancelUpgradeAmino;
                    fromAmino: (object: _121.MsgCancelUpgradeAmino) => _121.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _122.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Plan;
                fromPartial(object: Partial<_122.Plan>): _122.Plan;
                fromAmino(object: _122.PlanAmino): _122.Plan;
                toAmino(message: _122.Plan): _122.PlanAmino;
                fromAminoMsg(object: _122.PlanAminoMsg): _122.Plan;
                toAminoMsg(message: _122.Plan): _122.PlanAminoMsg;
                fromProtoMsg(message: _122.PlanProtoMsg): _122.Plan;
                toProto(message: _122.Plan): Uint8Array;
                toProtoMsg(message: _122.Plan): _122.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _122.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_122.SoftwareUpgradeProposal>): _122.SoftwareUpgradeProposal;
                fromAmino(object: _122.SoftwareUpgradeProposalAmino): _122.SoftwareUpgradeProposal;
                toAmino(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _122.SoftwareUpgradeProposalAminoMsg): _122.SoftwareUpgradeProposal;
                toAminoMsg(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _122.SoftwareUpgradeProposalProtoMsg): _122.SoftwareUpgradeProposal;
                toProto(message: _122.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _122.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_122.CancelSoftwareUpgradeProposal>): _122.CancelSoftwareUpgradeProposal;
                fromAmino(object: _122.CancelSoftwareUpgradeProposalAmino): _122.CancelSoftwareUpgradeProposal;
                toAmino(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _122.CancelSoftwareUpgradeProposalAminoMsg): _122.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _122.CancelSoftwareUpgradeProposalProtoMsg): _122.CancelSoftwareUpgradeProposal;
                toProto(message: _122.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _122.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ModuleVersion;
                fromPartial(object: Partial<_122.ModuleVersion>): _122.ModuleVersion;
                fromAmino(object: _122.ModuleVersionAmino): _122.ModuleVersion;
                toAmino(message: _122.ModuleVersion): _122.ModuleVersionAmino;
                fromAminoMsg(object: _122.ModuleVersionAminoMsg): _122.ModuleVersion;
                toAminoMsg(message: _122.ModuleVersion): _122.ModuleVersionAminoMsg;
                fromProtoMsg(message: _122.ModuleVersionProtoMsg): _122.ModuleVersion;
                toProto(message: _122.ModuleVersion): Uint8Array;
                toProtoMsg(message: _122.ModuleVersion): _122.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _121.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_121.MsgSoftwareUpgrade>): _121.MsgSoftwareUpgrade;
                fromAmino(object: _121.MsgSoftwareUpgradeAmino): _121.MsgSoftwareUpgrade;
                toAmino(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _121.MsgSoftwareUpgradeAminoMsg): _121.MsgSoftwareUpgrade;
                toAminoMsg(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _121.MsgSoftwareUpgradeProtoMsg): _121.MsgSoftwareUpgrade;
                toProto(message: _121.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _121.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_121.MsgSoftwareUpgradeResponse>): _121.MsgSoftwareUpgradeResponse;
                fromAmino(_: _121.MsgSoftwareUpgradeResponseAmino): _121.MsgSoftwareUpgradeResponse;
                toAmino(_: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _121.MsgSoftwareUpgradeResponseAminoMsg): _121.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _121.MsgSoftwareUpgradeResponseProtoMsg): _121.MsgSoftwareUpgradeResponse;
                toProto(message: _121.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _121.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgCancelUpgrade;
                fromPartial(object: Partial<_121.MsgCancelUpgrade>): _121.MsgCancelUpgrade;
                fromAmino(object: _121.MsgCancelUpgradeAmino): _121.MsgCancelUpgrade;
                toAmino(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _121.MsgCancelUpgradeAminoMsg): _121.MsgCancelUpgrade;
                toAminoMsg(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _121.MsgCancelUpgradeProtoMsg): _121.MsgCancelUpgrade;
                toProto(message: _121.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _121.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_121.MsgCancelUpgradeResponse>): _121.MsgCancelUpgradeResponse;
                fromAmino(_: _121.MsgCancelUpgradeResponseAmino): _121.MsgCancelUpgradeResponse;
                toAmino(_: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _121.MsgCancelUpgradeResponseAminoMsg): _121.MsgCancelUpgradeResponse;
                toAminoMsg(message: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _121.MsgCancelUpgradeResponseProtoMsg): _121.MsgCancelUpgradeResponse;
                toProto(message: _121.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _120.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_120.QueryCurrentPlanRequest>): _120.QueryCurrentPlanRequest;
                fromAmino(_: _120.QueryCurrentPlanRequestAmino): _120.QueryCurrentPlanRequest;
                toAmino(_: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _120.QueryCurrentPlanRequestAminoMsg): _120.QueryCurrentPlanRequest;
                toAminoMsg(message: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _120.QueryCurrentPlanRequestProtoMsg): _120.QueryCurrentPlanRequest;
                toProto(message: _120.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _120.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_120.QueryCurrentPlanResponse>): _120.QueryCurrentPlanResponse;
                fromAmino(object: _120.QueryCurrentPlanResponseAmino): _120.QueryCurrentPlanResponse;
                toAmino(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _120.QueryCurrentPlanResponseAminoMsg): _120.QueryCurrentPlanResponse;
                toAminoMsg(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _120.QueryCurrentPlanResponseProtoMsg): _120.QueryCurrentPlanResponse;
                toProto(message: _120.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _120.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_120.QueryAppliedPlanRequest>): _120.QueryAppliedPlanRequest;
                fromAmino(object: _120.QueryAppliedPlanRequestAmino): _120.QueryAppliedPlanRequest;
                toAmino(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _120.QueryAppliedPlanRequestAminoMsg): _120.QueryAppliedPlanRequest;
                toAminoMsg(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _120.QueryAppliedPlanRequestProtoMsg): _120.QueryAppliedPlanRequest;
                toProto(message: _120.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _120.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_120.QueryAppliedPlanResponse>): _120.QueryAppliedPlanResponse;
                fromAmino(object: _120.QueryAppliedPlanResponseAmino): _120.QueryAppliedPlanResponse;
                toAmino(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _120.QueryAppliedPlanResponseAminoMsg): _120.QueryAppliedPlanResponse;
                toAminoMsg(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _120.QueryAppliedPlanResponseProtoMsg): _120.QueryAppliedPlanResponse;
                toProto(message: _120.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _120.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_120.QueryUpgradedConsensusStateRequest>): _120.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _120.QueryUpgradedConsensusStateRequestAmino): _120.QueryUpgradedConsensusStateRequest;
                toAmino(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _120.QueryUpgradedConsensusStateRequestAminoMsg): _120.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _120.QueryUpgradedConsensusStateRequestProtoMsg): _120.QueryUpgradedConsensusStateRequest;
                toProto(message: _120.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _120.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_120.QueryUpgradedConsensusStateResponse>): _120.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _120.QueryUpgradedConsensusStateResponseAmino): _120.QueryUpgradedConsensusStateResponse;
                toAmino(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _120.QueryUpgradedConsensusStateResponseAminoMsg): _120.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _120.QueryUpgradedConsensusStateResponseProtoMsg): _120.QueryUpgradedConsensusStateResponse;
                toProto(message: _120.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _120.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_120.QueryModuleVersionsRequest>): _120.QueryModuleVersionsRequest;
                fromAmino(object: _120.QueryModuleVersionsRequestAmino): _120.QueryModuleVersionsRequest;
                toAmino(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _120.QueryModuleVersionsRequestAminoMsg): _120.QueryModuleVersionsRequest;
                toAminoMsg(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryModuleVersionsRequestProtoMsg): _120.QueryModuleVersionsRequest;
                toProto(message: _120.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _120.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_120.QueryModuleVersionsResponse>): _120.QueryModuleVersionsResponse;
                fromAmino(object: _120.QueryModuleVersionsResponseAmino): _120.QueryModuleVersionsResponse;
                toAmino(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _120.QueryModuleVersionsResponseAminoMsg): _120.QueryModuleVersionsResponse;
                toAminoMsg(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryModuleVersionsResponseProtoMsg): _120.QueryModuleVersionsResponse;
                toProto(message: _120.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _120.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QueryAuthorityRequest;
                fromPartial(_: Partial<_120.QueryAuthorityRequest>): _120.QueryAuthorityRequest;
                fromAmino(_: _120.QueryAuthorityRequestAmino): _120.QueryAuthorityRequest;
                toAmino(_: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _120.QueryAuthorityRequestAminoMsg): _120.QueryAuthorityRequest;
                toAminoMsg(message: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _120.QueryAuthorityRequestProtoMsg): _120.QueryAuthorityRequest;
                toProto(message: _120.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _120.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryAuthorityResponse;
                fromPartial(object: Partial<_120.QueryAuthorityResponse>): _120.QueryAuthorityResponse;
                fromAmino(object: _120.QueryAuthorityResponseAmino): _120.QueryAuthorityResponse;
                toAmino(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _120.QueryAuthorityResponseAminoMsg): _120.QueryAuthorityResponse;
                toAminoMsg(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _120.QueryAuthorityResponseProtoMsg): _120.QueryAuthorityResponse;
                toProto(message: _120.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _123.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.Module;
                    fromPartial(_: Partial<_123.Module>): _123.Module;
                    fromAmino(_: _123.ModuleAmino): _123.Module;
                    toAmino(_: _123.Module): _123.ModuleAmino;
                    fromAminoMsg(object: _123.ModuleAminoMsg): _123.Module;
                    toAminoMsg(message: _123.Module): _123.ModuleAminoMsg;
                    fromProtoMsg(message: _123.ModuleProtoMsg): _123.Module;
                    toProto(message: _123.Module): Uint8Array;
                    toProtoMsg(message: _123.Module): _123.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreateVestingAccount) => _124.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _124.MsgCreateVestingAccountAmino) => _124.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreatePermanentLockedAccount) => _124.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _124.MsgCreatePermanentLockedAccountAmino) => _124.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreatePeriodicVestingAccount) => _124.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _124.MsgCreatePeriodicVestingAccountAmino) => _124.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _125.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.BaseVestingAccount;
                fromPartial(object: Partial<_125.BaseVestingAccount>): _125.BaseVestingAccount;
                fromAmino(object: _125.BaseVestingAccountAmino): _125.BaseVestingAccount;
                toAmino(message: _125.BaseVestingAccount): _125.BaseVestingAccountAmino;
                fromAminoMsg(object: _125.BaseVestingAccountAminoMsg): _125.BaseVestingAccount;
                toAminoMsg(message: _125.BaseVestingAccount): _125.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _125.BaseVestingAccountProtoMsg): _125.BaseVestingAccount;
                toProto(message: _125.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _125.BaseVestingAccount): _125.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _125.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.ContinuousVestingAccount;
                fromPartial(object: Partial<_125.ContinuousVestingAccount>): _125.ContinuousVestingAccount;
                fromAmino(object: _125.ContinuousVestingAccountAmino): _125.ContinuousVestingAccount;
                toAmino(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _125.ContinuousVestingAccountAminoMsg): _125.ContinuousVestingAccount;
                toAminoMsg(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _125.ContinuousVestingAccountProtoMsg): _125.ContinuousVestingAccount;
                toProto(message: _125.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _125.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.DelayedVestingAccount;
                fromPartial(object: Partial<_125.DelayedVestingAccount>): _125.DelayedVestingAccount;
                fromAmino(object: _125.DelayedVestingAccountAmino): _125.DelayedVestingAccount;
                toAmino(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountAmino;
                fromAminoMsg(object: _125.DelayedVestingAccountAminoMsg): _125.DelayedVestingAccount;
                toAminoMsg(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _125.DelayedVestingAccountProtoMsg): _125.DelayedVestingAccount;
                toProto(message: _125.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _125.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.Period;
                fromPartial(object: Partial<_125.Period>): _125.Period;
                fromAmino(object: _125.PeriodAmino): _125.Period;
                toAmino(message: _125.Period): _125.PeriodAmino;
                fromAminoMsg(object: _125.PeriodAminoMsg): _125.Period;
                toAminoMsg(message: _125.Period): _125.PeriodAminoMsg;
                fromProtoMsg(message: _125.PeriodProtoMsg): _125.Period;
                toProto(message: _125.Period): Uint8Array;
                toProtoMsg(message: _125.Period): _125.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _125.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.PeriodicVestingAccount;
                fromPartial(object: Partial<_125.PeriodicVestingAccount>): _125.PeriodicVestingAccount;
                fromAmino(object: _125.PeriodicVestingAccountAmino): _125.PeriodicVestingAccount;
                toAmino(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _125.PeriodicVestingAccountAminoMsg): _125.PeriodicVestingAccount;
                toAminoMsg(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _125.PeriodicVestingAccountProtoMsg): _125.PeriodicVestingAccount;
                toProto(message: _125.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _125.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.PermanentLockedAccount;
                fromPartial(object: Partial<_125.PermanentLockedAccount>): _125.PermanentLockedAccount;
                fromAmino(object: _125.PermanentLockedAccountAmino): _125.PermanentLockedAccount;
                toAmino(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountAmino;
                fromAminoMsg(object: _125.PermanentLockedAccountAminoMsg): _125.PermanentLockedAccount;
                toAminoMsg(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _125.PermanentLockedAccountProtoMsg): _125.PermanentLockedAccount;
                toProto(message: _125.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgCreateVestingAccount;
                fromPartial(object: Partial<_124.MsgCreateVestingAccount>): _124.MsgCreateVestingAccount;
                fromAmino(object: _124.MsgCreateVestingAccountAmino): _124.MsgCreateVestingAccount;
                toAmino(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _124.MsgCreateVestingAccountAminoMsg): _124.MsgCreateVestingAccount;
                toAminoMsg(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreateVestingAccountProtoMsg): _124.MsgCreateVestingAccount;
                toProto(message: _124.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_124.MsgCreateVestingAccountResponse>): _124.MsgCreateVestingAccountResponse;
                fromAmino(_: _124.MsgCreateVestingAccountResponseAmino): _124.MsgCreateVestingAccountResponse;
                toAmino(_: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreateVestingAccountResponseAminoMsg): _124.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreateVestingAccountResponseProtoMsg): _124.MsgCreateVestingAccountResponse;
                toProto(message: _124.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_124.MsgCreatePermanentLockedAccount>): _124.MsgCreatePermanentLockedAccount;
                fromAmino(object: _124.MsgCreatePermanentLockedAccountAmino): _124.MsgCreatePermanentLockedAccount;
                toAmino(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _124.MsgCreatePermanentLockedAccountAminoMsg): _124.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePermanentLockedAccountProtoMsg): _124.MsgCreatePermanentLockedAccount;
                toProto(message: _124.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_124.MsgCreatePermanentLockedAccountResponse>): _124.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _124.MsgCreatePermanentLockedAccountResponseAmino): _124.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreatePermanentLockedAccountResponseAminoMsg): _124.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePermanentLockedAccountResponseProtoMsg): _124.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _124.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_124.MsgCreatePeriodicVestingAccount>): _124.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _124.MsgCreatePeriodicVestingAccountAmino): _124.MsgCreatePeriodicVestingAccount;
                toAmino(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _124.MsgCreatePeriodicVestingAccountAminoMsg): _124.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePeriodicVestingAccountProtoMsg): _124.MsgCreatePeriodicVestingAccount;
                toProto(message: _124.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_124.MsgCreatePeriodicVestingAccountResponse>): _124.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _124.MsgCreatePeriodicVestingAccountResponseAmino): _124.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreatePeriodicVestingAccountResponseAminoMsg): _124.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePeriodicVestingAccountResponseProtoMsg): _124.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _124.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _221.MsgClientImpl;
                };
                authz: {
                    v1beta1: _222.MsgClientImpl;
                };
                bank: {
                    v1beta1: _223.MsgClientImpl;
                };
                consensus: {
                    v1: _224.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _225.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _226.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _227.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _228.MsgClientImpl;
                };
                gov: {
                    v1: _229.MsgClientImpl;
                    v1beta1: _230.MsgClientImpl;
                };
                group: {
                    v1: _231.MsgClientImpl;
                };
                mint: {
                    v1beta1: _232.MsgClientImpl;
                };
                nft: {
                    v1beta1: _233.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _234.MsgClientImpl;
                };
                staking: {
                    v1beta1: _235.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _236.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _237.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                        account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                        accountAddressByID(request: _8.QueryAccountAddressByIDRequest): Promise<_8.QueryAccountAddressByIDResponse>;
                        params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                        moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _8.QueryModuleAccountByNameRequest): Promise<_8.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                        addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
                        accountInfo(request: _8.QueryAccountInfoRequest): Promise<_8.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _14.QueryGrantsRequest): Promise<_14.QueryGrantsResponse>;
                        granterGrants(request: _14.QueryGranterGrantsRequest): Promise<_14.QueryGranterGrantsResponse>;
                        granteeGrants(request: _14.QueryGranteeGrantsRequest): Promise<_14.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _17.AppOptionsRequest): Promise<_17.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                        allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                        spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _22.QuerySpendableBalanceByDenomRequest): Promise<_22.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                        supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                        params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                        denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                        denomOwners(request: _22.QueryDenomOwnersRequest): Promise<_22.QueryDenomOwnersResponse>;
                        sendEnabled(request: _22.QuerySendEnabledRequest): Promise<_22.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _33.GetNodeInfoRequest): Promise<_33.GetNodeInfoResponse>;
                            getSyncing(request?: _33.GetSyncingRequest): Promise<_33.GetSyncingResponse>;
                            getLatestBlock(request?: _33.GetLatestBlockRequest): Promise<_33.GetLatestBlockResponse>;
                            getBlockByHeight(request: _33.GetBlockByHeightRequest): Promise<_33.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _33.GetLatestValidatorSetRequest): Promise<_33.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _33.GetValidatorSetByHeightRequest): Promise<_33.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _33.ABCIQueryRequest): Promise<_33.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        validatorDistributionInfo(request: _54.QueryValidatorDistributionInfoRequest): Promise<_54.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _54.QueryValidatorOutstandingRewardsRequest): Promise<_54.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _54.QueryValidatorCommissionRequest): Promise<_54.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _54.QueryValidatorSlashesRequest): Promise<_54.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _54.QueryDelegationRewardsRequest): Promise<_54.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _54.QueryDelegationTotalRewardsRequest): Promise<_54.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _54.QueryDelegatorValidatorsRequest): Promise<_54.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _54.QueryDelegatorWithdrawAddressRequest): Promise<_54.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _54.QueryCommunityPoolRequest): Promise<_54.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                        allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _64.QueryAllowanceRequest): Promise<_64.QueryAllowanceResponse>;
                        allowances(request: _64.QueryAllowancesRequest): Promise<_64.QueryAllowancesResponse>;
                        allowancesByGranter(request: _64.QueryAllowancesByGranterRequest): Promise<_64.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                        proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                        vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                        votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                        params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                        deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                        tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _80.QueryGroupInfoRequest): Promise<_80.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _80.QueryGroupPolicyInfoRequest): Promise<_80.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _80.QueryGroupMembersRequest): Promise<_80.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _80.QueryGroupsByAdminRequest): Promise<_80.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _80.QueryGroupPoliciesByGroupRequest): Promise<_80.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _80.QueryGroupPoliciesByAdminRequest): Promise<_80.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _80.QueryProposalsByGroupPolicyRequest): Promise<_80.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _80.QueryVoteByProposalVoterRequest): Promise<_80.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _80.QueryVotesByProposalRequest): Promise<_80.QueryVotesByProposalResponse>;
                        votesByVoter(request: _80.QueryVotesByVoterRequest): Promise<_80.QueryVotesByVoterResponse>;
                        groupsByMember(request: _80.QueryGroupsByMemberRequest): Promise<_80.QueryGroupsByMemberResponse>;
                        tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
                        groups(request?: _80.QueryGroupsRequest): Promise<_80.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        inflation(request?: _86.QueryInflationRequest): Promise<_86.QueryInflationResponse>;
                        annualProvisions(request?: _86.QueryAnnualProvisionsRequest): Promise<_86.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _93.QueryBalanceRequest): Promise<_93.QueryBalanceResponse>;
                        owner(request: _93.QueryOwnerRequest): Promise<_93.QueryOwnerResponse>;
                        supply(request: _93.QuerySupplyRequest): Promise<_93.QuerySupplyResponse>;
                        nFTs(request: _93.QueryNFTsRequest): Promise<_93.QueryNFTsResponse>;
                        nFT(request: _93.QueryNFTRequest): Promise<_93.QueryNFTResponse>;
                        class(request: _93.QueryClassRequest): Promise<_93.QueryClassResponse>;
                        classes(request?: _93.QueryClassesRequest): Promise<_93.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _96.GetRequest): Promise<_96.GetResponse>;
                            list(request: _96.ListRequest): Promise<_96.ListResponse>;
                        };
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
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        signingInfo(request: _106.QuerySigningInfoRequest): Promise<_106.QuerySigningInfoResponse>;
                        signingInfos(request?: _106.QuerySigningInfosRequest): Promise<_106.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _112.QueryValidatorsRequest): Promise<_112.QueryValidatorsResponse>;
                        validator(request: _112.QueryValidatorRequest): Promise<_112.QueryValidatorResponse>;
                        validatorDelegations(request: _112.QueryValidatorDelegationsRequest): Promise<_112.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _112.QueryValidatorUnbondingDelegationsRequest): Promise<_112.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _112.QueryDelegationRequest): Promise<_112.QueryDelegationResponse>;
                        unbondingDelegation(request: _112.QueryUnbondingDelegationRequest): Promise<_112.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _112.QueryDelegatorDelegationsRequest): Promise<_112.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _112.QueryDelegatorUnbondingDelegationsRequest): Promise<_112.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _112.QueryRedelegationsRequest): Promise<_112.QueryRedelegationsResponse>;
                        delegatorValidators(request: _112.QueryDelegatorValidatorsRequest): Promise<_112.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _112.QueryDelegatorValidatorRequest): Promise<_112.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _112.QueryHistoricalInfoRequest): Promise<_112.QueryHistoricalInfoResponse>;
                        pool(request?: _112.QueryPoolRequest): Promise<_112.QueryPoolResponse>;
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _117.SimulateRequest): Promise<_117.SimulateResponse>;
                        getTx(request: _117.GetTxRequest): Promise<_117.GetTxResponse>;
                        broadcastTx(request: _117.BroadcastTxRequest): Promise<_117.BroadcastTxResponse>;
                        getTxsEvent(request: _117.GetTxsEventRequest): Promise<_117.GetTxsEventResponse>;
                        getBlockWithTxs(request: _117.GetBlockWithTxsRequest): Promise<_117.GetBlockWithTxsResponse>;
                        txDecode(request: _117.TxDecodeRequest): Promise<_117.TxDecodeResponse>;
                        txEncode(request: _117.TxEncodeRequest): Promise<_117.TxEncodeResponse>;
                        txEncodeAmino(request: _117.TxEncodeAminoRequest): Promise<_117.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _117.TxDecodeAminoRequest): Promise<_117.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _120.QueryCurrentPlanRequest): Promise<_120.QueryCurrentPlanResponse>;
                        appliedPlan(request: _120.QueryAppliedPlanRequest): Promise<_120.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _120.QueryUpgradedConsensusStateRequest): Promise<_120.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _120.QueryModuleVersionsRequest): Promise<_120.QueryModuleVersionsResponse>;
                        authority(request?: _120.QueryAuthorityRequest): Promise<_120.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _180.LCDQueryClient;
                };
                authz: {
                    v1beta1: _181.LCDQueryClient;
                };
                bank: {
                    v1beta1: _182.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _183.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _184.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _185.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _186.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _187.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _188.LCDQueryClient;
                };
                gov: {
                    v1: _189.LCDQueryClient;
                    v1beta1: _190.LCDQueryClient;
                };
                group: {
                    v1: _191.LCDQueryClient;
                };
                mint: {
                    v1beta1: _192.LCDQueryClient;
                };
                nft: {
                    v1beta1: _193.LCDQueryClient;
                };
                params: {
                    v1beta1: _194.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _195.LCDQueryClient;
                };
                staking: {
                    v1beta1: _196.LCDQueryClient;
                };
                tx: {
                    v1beta1: _197.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _198.LCDQueryClient;
                };
            };
        }>;
    };
}
