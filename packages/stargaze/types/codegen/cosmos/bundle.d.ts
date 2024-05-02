import * as _23 from "./app/runtime/v1alpha1/module";
import * as _24 from "./app/v1alpha1/config";
import * as _25 from "./app/v1alpha1/module";
import * as _26 from "./app/v1alpha1/query";
import * as _27 from "./auth/module/v1/module";
import * as _28 from "./auth/v1beta1/auth";
import * as _29 from "./auth/v1beta1/genesis";
import * as _30 from "./auth/v1beta1/query";
import * as _31 from "./auth/v1beta1/tx";
import * as _32 from "./authz/module/v1/module";
import * as _33 from "./authz/v1beta1/authz";
import * as _34 from "./authz/v1beta1/event";
import * as _35 from "./authz/v1beta1/genesis";
import * as _36 from "./authz/v1beta1/query";
import * as _37 from "./authz/v1beta1/tx";
import * as _38 from "./autocli/v1/options";
import * as _39 from "./autocli/v1/query";
import * as _40 from "./bank/module/v1/module";
import * as _41 from "./bank/v1beta1/authz";
import * as _42 from "./bank/v1beta1/bank";
import * as _43 from "./bank/v1beta1/genesis";
import * as _44 from "./bank/v1beta1/query";
import * as _45 from "./bank/v1beta1/tx";
import * as _46 from "./base/abci/v1beta1/abci";
import * as _47 from "./base/kv/v1beta1/kv";
import * as _48 from "./base/node/v1beta1/query";
import * as _49 from "./base/query/v1beta1/pagination";
import * as _50 from "./base/reflection/v1beta1/reflection";
import * as _51 from "./base/reflection/v2alpha1/reflection";
import * as _52 from "./base/snapshots/v1beta1/snapshot";
import * as _53 from "./base/store/v1beta1/commit_info";
import * as _54 from "./base/store/v1beta1/listening";
import * as _55 from "./base/tendermint/v1beta1/query";
import * as _56 from "./base/tendermint/v1beta1/types";
import * as _57 from "./base/v1beta1/coin";
import * as _58 from "./capability/module/v1/module";
import * as _59 from "./capability/v1beta1/capability";
import * as _60 from "./capability/v1beta1/genesis";
import * as _61 from "./consensus/module/v1/module";
import * as _62 from "./consensus/v1/query";
import * as _63 from "./consensus/v1/tx";
import * as _64 from "./crisis/module/v1/module";
import * as _65 from "./crisis/v1beta1/genesis";
import * as _66 from "./crisis/v1beta1/tx";
import * as _67 from "./crypto/ed25519/keys";
import * as _68 from "./crypto/hd/v1/hd";
import * as _69 from "./crypto/keyring/v1/record";
import * as _70 from "./crypto/multisig/keys";
import * as _71 from "./crypto/secp256k1/keys";
import * as _72 from "./crypto/secp256r1/keys";
import * as _73 from "./distribution/module/v1/module";
import * as _74 from "./distribution/v1beta1/distribution";
import * as _75 from "./distribution/v1beta1/genesis";
import * as _76 from "./distribution/v1beta1/query";
import * as _77 from "./distribution/v1beta1/tx";
import * as _78 from "./evidence/module/v1/module";
import * as _79 from "./evidence/v1beta1/evidence";
import * as _80 from "./evidence/v1beta1/genesis";
import * as _81 from "./evidence/v1beta1/query";
import * as _82 from "./evidence/v1beta1/tx";
import * as _83 from "./feegrant/module/v1/module";
import * as _84 from "./feegrant/v1beta1/feegrant";
import * as _85 from "./feegrant/v1beta1/genesis";
import * as _86 from "./feegrant/v1beta1/query";
import * as _87 from "./feegrant/v1beta1/tx";
import * as _88 from "./genutil/module/v1/module";
import * as _89 from "./genutil/v1beta1/genesis";
import * as _90 from "./gov/module/v1/module";
import * as _91 from "./gov/v1/genesis";
import * as _92 from "./gov/v1/gov";
import * as _93 from "./gov/v1/query";
import * as _94 from "./gov/v1/tx";
import * as _95 from "./gov/v1beta1/genesis";
import * as _96 from "./gov/v1beta1/gov";
import * as _97 from "./gov/v1beta1/query";
import * as _98 from "./gov/v1beta1/tx";
import * as _99 from "./group/module/v1/module";
import * as _100 from "./group/v1/events";
import * as _101 from "./group/v1/genesis";
import * as _102 from "./group/v1/query";
import * as _103 from "./group/v1/tx";
import * as _104 from "./group/v1/types";
import * as _105 from "./mint/module/v1/module";
import * as _106 from "./mint/v1beta1/genesis";
import * as _107 from "./mint/v1beta1/mint";
import * as _108 from "./mint/v1beta1/query";
import * as _109 from "./mint/v1beta1/tx";
import * as _111 from "./nft/module/v1/module";
import * as _112 from "./nft/v1beta1/event";
import * as _113 from "./nft/v1beta1/genesis";
import * as _114 from "./nft/v1beta1/nft";
import * as _115 from "./nft/v1beta1/query";
import * as _116 from "./nft/v1beta1/tx";
import * as _117 from "./orm/module/v1alpha1/module";
import * as _118 from "./orm/query/v1alpha1/query";
import * as _119 from "./orm/v1/orm";
import * as _120 from "./orm/v1alpha1/schema";
import * as _121 from "./params/module/v1/module";
import * as _122 from "./params/v1beta1/params";
import * as _123 from "./params/v1beta1/query";
import * as _125 from "./reflection/v1/reflection";
import * as _126 from "./slashing/module/v1/module";
import * as _127 from "./slashing/v1beta1/genesis";
import * as _128 from "./slashing/v1beta1/query";
import * as _129 from "./slashing/v1beta1/slashing";
import * as _130 from "./slashing/v1beta1/tx";
import * as _131 from "./staking/module/v1/module";
import * as _132 from "./staking/v1beta1/authz";
import * as _133 from "./staking/v1beta1/genesis";
import * as _134 from "./staking/v1beta1/query";
import * as _135 from "./staking/v1beta1/staking";
import * as _136 from "./staking/v1beta1/tx";
import * as _137 from "./tx/config/v1/config";
import * as _138 from "./tx/signing/v1beta1/signing";
import * as _139 from "./tx/v1beta1/service";
import * as _140 from "./tx/v1beta1/tx";
import * as _141 from "./upgrade/module/v1/module";
import * as _142 from "./upgrade/v1beta1/query";
import * as _143 from "./upgrade/v1beta1/tx";
import * as _144 from "./upgrade/v1beta1/upgrade";
import * as _145 from "./vesting/module/v1/module";
import * as _146 from "./vesting/v1beta1/tx";
import * as _147 from "./vesting/v1beta1/vesting";
import * as _230 from "./auth/v1beta1/query.lcd";
import * as _231 from "./authz/v1beta1/query.lcd";
import * as _232 from "./bank/v1beta1/query.lcd";
import * as _233 from "./base/node/v1beta1/query.lcd";
import * as _234 from "./base/tendermint/v1beta1/query.lcd";
import * as _235 from "./consensus/v1/query.lcd";
import * as _236 from "./distribution/v1beta1/query.lcd";
import * as _237 from "./evidence/v1beta1/query.lcd";
import * as _238 from "./feegrant/v1beta1/query.lcd";
import * as _239 from "./gov/v1/query.lcd";
import * as _240 from "./gov/v1beta1/query.lcd";
import * as _241 from "./group/v1/query.lcd";
import * as _242 from "./mint/v1beta1/query.lcd";
import * as _243 from "./nft/v1beta1/query.lcd";
import * as _244 from "./params/v1beta1/query.lcd";
import * as _245 from "./slashing/v1beta1/query.lcd";
import * as _246 from "./staking/v1beta1/query.lcd";
import * as _247 from "./tx/v1beta1/service.lcd";
import * as _248 from "./upgrade/v1beta1/query.lcd";
import * as _249 from "./app/v1alpha1/query.rpc.Query";
import * as _250 from "./auth/v1beta1/query.rpc.Query";
import * as _251 from "./authz/v1beta1/query.rpc.Query";
import * as _252 from "./autocli/v1/query.rpc.Query";
import * as _253 from "./bank/v1beta1/query.rpc.Query";
import * as _254 from "./base/node/v1beta1/query.rpc.Service";
import * as _255 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _256 from "./consensus/v1/query.rpc.Query";
import * as _257 from "./distribution/v1beta1/query.rpc.Query";
import * as _258 from "./evidence/v1beta1/query.rpc.Query";
import * as _259 from "./feegrant/v1beta1/query.rpc.Query";
import * as _260 from "./gov/v1/query.rpc.Query";
import * as _261 from "./gov/v1beta1/query.rpc.Query";
import * as _262 from "./group/v1/query.rpc.Query";
import * as _263 from "./mint/v1beta1/query.rpc.Query";
import * as _264 from "./nft/v1beta1/query.rpc.Query";
import * as _265 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _266 from "./params/v1beta1/query.rpc.Query";
import * as _267 from "./slashing/v1beta1/query.rpc.Query";
import * as _268 from "./staking/v1beta1/query.rpc.Query";
import * as _269 from "./tx/v1beta1/service.rpc.Service";
import * as _270 from "./upgrade/v1beta1/query.rpc.Query";
import * as _271 from "./auth/v1beta1/tx.rpc.msg";
import * as _272 from "./authz/v1beta1/tx.rpc.msg";
import * as _273 from "./bank/v1beta1/tx.rpc.msg";
import * as _274 from "./consensus/v1/tx.rpc.msg";
import * as _275 from "./crisis/v1beta1/tx.rpc.msg";
import * as _276 from "./distribution/v1beta1/tx.rpc.msg";
import * as _277 from "./evidence/v1beta1/tx.rpc.msg";
import * as _278 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _279 from "./gov/v1/tx.rpc.msg";
import * as _280 from "./gov/v1beta1/tx.rpc.msg";
import * as _281 from "./group/v1/tx.rpc.msg";
import * as _282 from "./mint/v1beta1/tx.rpc.msg";
import * as _283 from "./nft/v1beta1/tx.rpc.msg";
import * as _284 from "./slashing/v1beta1/tx.rpc.msg";
import * as _285 from "./staking/v1beta1/tx.rpc.msg";
import * as _286 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _287 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _23.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Module;
                    fromPartial(object: Partial<_23.Module>): _23.Module;
                    fromAmino(object: _23.ModuleAmino): _23.Module;
                    toAmino(message: _23.Module): _23.ModuleAmino;
                    fromAminoMsg(object: _23.ModuleAminoMsg): _23.Module;
                    toAminoMsg(message: _23.Module): _23.ModuleAminoMsg;
                    fromProtoMsg(message: _23.ModuleProtoMsg): _23.Module;
                    toProto(message: _23.Module): Uint8Array;
                    toProtoMsg(message: _23.Module): _23.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _23.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.StoreKeyConfig;
                    fromPartial(object: Partial<_23.StoreKeyConfig>): _23.StoreKeyConfig;
                    fromAmino(object: _23.StoreKeyConfigAmino): _23.StoreKeyConfig;
                    toAmino(message: _23.StoreKeyConfig): _23.StoreKeyConfigAmino;
                    fromAminoMsg(object: _23.StoreKeyConfigAminoMsg): _23.StoreKeyConfig;
                    toAminoMsg(message: _23.StoreKeyConfig): _23.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _23.StoreKeyConfigProtoMsg): _23.StoreKeyConfig;
                    toProto(message: _23.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _23.StoreKeyConfig): _23.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _249.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                config(request?: _26.QueryConfigRequest): Promise<_26.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _26.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryConfigRequest;
                fromPartial(_: Partial<_26.QueryConfigRequest>): _26.QueryConfigRequest;
                fromAmino(_: _26.QueryConfigRequestAmino): _26.QueryConfigRequest;
                toAmino(_: _26.QueryConfigRequest): _26.QueryConfigRequestAmino;
                fromAminoMsg(object: _26.QueryConfigRequestAminoMsg): _26.QueryConfigRequest;
                toAminoMsg(message: _26.QueryConfigRequest): _26.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _26.QueryConfigRequestProtoMsg): _26.QueryConfigRequest;
                toProto(message: _26.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _26.QueryConfigRequest): _26.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _26.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryConfigResponse;
                fromPartial(object: Partial<_26.QueryConfigResponse>): _26.QueryConfigResponse;
                fromAmino(object: _26.QueryConfigResponseAmino): _26.QueryConfigResponse;
                toAmino(message: _26.QueryConfigResponse): _26.QueryConfigResponseAmino;
                fromAminoMsg(object: _26.QueryConfigResponseAminoMsg): _26.QueryConfigResponse;
                toAminoMsg(message: _26.QueryConfigResponse): _26.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _26.QueryConfigResponseProtoMsg): _26.QueryConfigResponse;
                toProto(message: _26.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _26.QueryConfigResponse): _26.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _25.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ModuleDescriptor;
                fromPartial(object: Partial<_25.ModuleDescriptor>): _25.ModuleDescriptor;
                fromAmino(object: _25.ModuleDescriptorAmino): _25.ModuleDescriptor;
                toAmino(message: _25.ModuleDescriptor): _25.ModuleDescriptorAmino;
                fromAminoMsg(object: _25.ModuleDescriptorAminoMsg): _25.ModuleDescriptor;
                toAminoMsg(message: _25.ModuleDescriptor): _25.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _25.ModuleDescriptorProtoMsg): _25.ModuleDescriptor;
                toProto(message: _25.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _25.ModuleDescriptor): _25.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _25.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.PackageReference;
                fromPartial(object: Partial<_25.PackageReference>): _25.PackageReference;
                fromAmino(object: _25.PackageReferenceAmino): _25.PackageReference;
                toAmino(message: _25.PackageReference): _25.PackageReferenceAmino;
                fromAminoMsg(object: _25.PackageReferenceAminoMsg): _25.PackageReference;
                toAminoMsg(message: _25.PackageReference): _25.PackageReferenceAminoMsg;
                fromProtoMsg(message: _25.PackageReferenceProtoMsg): _25.PackageReference;
                toProto(message: _25.PackageReference): Uint8Array;
                toProtoMsg(message: _25.PackageReference): _25.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _25.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MigrateFromInfo;
                fromPartial(object: Partial<_25.MigrateFromInfo>): _25.MigrateFromInfo;
                fromAmino(object: _25.MigrateFromInfoAmino): _25.MigrateFromInfo;
                toAmino(message: _25.MigrateFromInfo): _25.MigrateFromInfoAmino;
                fromAminoMsg(object: _25.MigrateFromInfoAminoMsg): _25.MigrateFromInfo;
                toAminoMsg(message: _25.MigrateFromInfo): _25.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _25.MigrateFromInfoProtoMsg): _25.MigrateFromInfo;
                toProto(message: _25.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _25.MigrateFromInfo): _25.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _24.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Config;
                fromPartial(object: Partial<_24.Config>): _24.Config;
                fromAmino(object: _24.ConfigAmino): _24.Config;
                toAmino(message: _24.Config): _24.ConfigAmino;
                fromAminoMsg(object: _24.ConfigAminoMsg): _24.Config;
                toAminoMsg(message: _24.Config): _24.ConfigAminoMsg;
                fromProtoMsg(message: _24.ConfigProtoMsg): _24.Config;
                toProto(message: _24.Config): Uint8Array;
                toProtoMsg(message: _24.Config): _24.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _24.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.ModuleConfig;
                fromPartial(object: Partial<_24.ModuleConfig>): _24.ModuleConfig;
                fromAmino(object: _24.ModuleConfigAmino): _24.ModuleConfig;
                toAmino(message: _24.ModuleConfig): _24.ModuleConfigAmino;
                fromAminoMsg(object: _24.ModuleConfigAminoMsg): _24.ModuleConfig;
                toAminoMsg(message: _24.ModuleConfig): _24.ModuleConfigAminoMsg;
                fromProtoMsg(message: _24.ModuleConfigProtoMsg): _24.ModuleConfig;
                toProto(message: _24.ModuleConfig): Uint8Array;
                toProtoMsg(message: _24.ModuleConfig): _24.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _24.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GolangBinding;
                fromPartial(object: Partial<_24.GolangBinding>): _24.GolangBinding;
                fromAmino(object: _24.GolangBindingAmino): _24.GolangBinding;
                toAmino(message: _24.GolangBinding): _24.GolangBindingAmino;
                fromAminoMsg(object: _24.GolangBindingAminoMsg): _24.GolangBinding;
                toAminoMsg(message: _24.GolangBinding): _24.GolangBindingAminoMsg;
                fromProtoMsg(message: _24.GolangBindingProtoMsg): _24.GolangBinding;
                toProto(message: _24.GolangBinding): Uint8Array;
                toProtoMsg(message: _24.GolangBinding): _24.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
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
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _27.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _27.ModuleAccountPermission;
                    fromPartial(object: Partial<_27.ModuleAccountPermission>): _27.ModuleAccountPermission;
                    fromAmino(object: _27.ModuleAccountPermissionAmino): _27.ModuleAccountPermission;
                    toAmino(message: _27.ModuleAccountPermission): _27.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _27.ModuleAccountPermissionAminoMsg): _27.ModuleAccountPermission;
                    toAminoMsg(message: _27.ModuleAccountPermission): _27.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _27.ModuleAccountPermissionProtoMsg): _27.ModuleAccountPermission;
                    toProto(message: _27.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _27.ModuleAccountPermission): _27.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _271.MsgClientImpl;
            QueryClientImpl: typeof _250.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _30.QueryAccountsRequest): Promise<_30.QueryAccountsResponse>;
                account(request: _30.QueryAccountRequest): Promise<_30.QueryAccountResponse>;
                accountAddressByID(request: _30.QueryAccountAddressByIDRequest): Promise<_30.QueryAccountAddressByIDResponse>;
                params(request?: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                moduleAccounts(request?: _30.QueryModuleAccountsRequest): Promise<_30.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _30.QueryModuleAccountByNameRequest): Promise<_30.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _30.Bech32PrefixRequest): Promise<_30.Bech32PrefixResponse>;
                addressBytesToString(request: _30.AddressBytesToStringRequest): Promise<_30.AddressBytesToStringResponse>;
                addressStringToBytes(request: _30.AddressStringToBytesRequest): Promise<_30.AddressStringToBytesResponse>;
                accountInfo(request: _30.QueryAccountInfoRequest): Promise<_30.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _31.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _31.MsgUpdateParams): {
                        typeUrl: string;
                        value: _31.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _31.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _31.MsgUpdateParams): {
                        typeUrl: string;
                        value: _31.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _31.MsgUpdateParams) => _31.MsgUpdateParamsAmino;
                    fromAmino: (object: _31.MsgUpdateParamsAmino) => _31.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _31.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgUpdateParams;
                fromPartial(object: Partial<_31.MsgUpdateParams>): _31.MsgUpdateParams;
                fromAmino(object: _31.MsgUpdateParamsAmino): _31.MsgUpdateParams;
                toAmino(message: _31.MsgUpdateParams): _31.MsgUpdateParamsAmino;
                fromAminoMsg(object: _31.MsgUpdateParamsAminoMsg): _31.MsgUpdateParams;
                toAminoMsg(message: _31.MsgUpdateParams): _31.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _31.MsgUpdateParamsProtoMsg): _31.MsgUpdateParams;
                toProto(message: _31.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _31.MsgUpdateParams): _31.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _31.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_31.MsgUpdateParamsResponse>): _31.MsgUpdateParamsResponse;
                fromAmino(_: _31.MsgUpdateParamsResponseAmino): _31.MsgUpdateParamsResponse;
                toAmino(_: _31.MsgUpdateParamsResponse): _31.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _31.MsgUpdateParamsResponseAminoMsg): _31.MsgUpdateParamsResponse;
                toAminoMsg(message: _31.MsgUpdateParamsResponse): _31.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _31.MsgUpdateParamsResponseProtoMsg): _31.MsgUpdateParamsResponse;
                toProto(message: _31.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _31.MsgUpdateParamsResponse): _31.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _30.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountsRequest;
                fromPartial(object: Partial<_30.QueryAccountsRequest>): _30.QueryAccountsRequest;
                fromAmino(object: _30.QueryAccountsRequestAmino): _30.QueryAccountsRequest;
                toAmino(message: _30.QueryAccountsRequest): _30.QueryAccountsRequestAmino;
                fromAminoMsg(object: _30.QueryAccountsRequestAminoMsg): _30.QueryAccountsRequest;
                toAminoMsg(message: _30.QueryAccountsRequest): _30.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryAccountsRequestProtoMsg): _30.QueryAccountsRequest;
                toProto(message: _30.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryAccountsRequest): _30.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _30.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountsResponse;
                fromPartial(object: Partial<_30.QueryAccountsResponse>): _30.QueryAccountsResponse;
                fromAmino(object: _30.QueryAccountsResponseAmino): _30.QueryAccountsResponse;
                toAmino(message: _30.QueryAccountsResponse): _30.QueryAccountsResponseAmino;
                fromAminoMsg(object: _30.QueryAccountsResponseAminoMsg): _30.QueryAccountsResponse;
                toAminoMsg(message: _30.QueryAccountsResponse): _30.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryAccountsResponseProtoMsg): _30.QueryAccountsResponse;
                toProto(message: _30.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryAccountsResponse): _30.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _30.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountRequest;
                fromPartial(object: Partial<_30.QueryAccountRequest>): _30.QueryAccountRequest;
                fromAmino(object: _30.QueryAccountRequestAmino): _30.QueryAccountRequest;
                toAmino(message: _30.QueryAccountRequest): _30.QueryAccountRequestAmino;
                fromAminoMsg(object: _30.QueryAccountRequestAminoMsg): _30.QueryAccountRequest;
                toAminoMsg(message: _30.QueryAccountRequest): _30.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _30.QueryAccountRequestProtoMsg): _30.QueryAccountRequest;
                toProto(message: _30.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _30.QueryAccountRequest): _30.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _30.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountResponse;
                fromPartial(object: Partial<_30.QueryAccountResponse>): _30.QueryAccountResponse;
                fromAmino(object: _30.QueryAccountResponseAmino): _30.QueryAccountResponse;
                toAmino(message: _30.QueryAccountResponse): _30.QueryAccountResponseAmino;
                fromAminoMsg(object: _30.QueryAccountResponseAminoMsg): _30.QueryAccountResponse;
                toAminoMsg(message: _30.QueryAccountResponse): _30.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _30.QueryAccountResponseProtoMsg): _30.QueryAccountResponse;
                toProto(message: _30.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _30.QueryAccountResponse): _30.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _30.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.QueryParamsRequest;
                fromPartial(_: Partial<_30.QueryParamsRequest>): _30.QueryParamsRequest;
                fromAmino(_: _30.QueryParamsRequestAmino): _30.QueryParamsRequest;
                toAmino(_: _30.QueryParamsRequest): _30.QueryParamsRequestAmino;
                fromAminoMsg(object: _30.QueryParamsRequestAminoMsg): _30.QueryParamsRequest;
                toAminoMsg(message: _30.QueryParamsRequest): _30.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryParamsRequestProtoMsg): _30.QueryParamsRequest;
                toProto(message: _30.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryParamsRequest): _30.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _30.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryParamsResponse;
                fromPartial(object: Partial<_30.QueryParamsResponse>): _30.QueryParamsResponse;
                fromAmino(object: _30.QueryParamsResponseAmino): _30.QueryParamsResponse;
                toAmino(message: _30.QueryParamsResponse): _30.QueryParamsResponseAmino;
                fromAminoMsg(object: _30.QueryParamsResponseAminoMsg): _30.QueryParamsResponse;
                toAminoMsg(message: _30.QueryParamsResponse): _30.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryParamsResponseProtoMsg): _30.QueryParamsResponse;
                toProto(message: _30.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryParamsResponse): _30.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _30.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_30.QueryModuleAccountsRequest>): _30.QueryModuleAccountsRequest;
                fromAmino(_: _30.QueryModuleAccountsRequestAmino): _30.QueryModuleAccountsRequest;
                toAmino(_: _30.QueryModuleAccountsRequest): _30.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _30.QueryModuleAccountsRequestAminoMsg): _30.QueryModuleAccountsRequest;
                toAminoMsg(message: _30.QueryModuleAccountsRequest): _30.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryModuleAccountsRequestProtoMsg): _30.QueryModuleAccountsRequest;
                toProto(message: _30.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryModuleAccountsRequest): _30.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _30.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_30.QueryModuleAccountsResponse>): _30.QueryModuleAccountsResponse;
                fromAmino(object: _30.QueryModuleAccountsResponseAmino): _30.QueryModuleAccountsResponse;
                toAmino(message: _30.QueryModuleAccountsResponse): _30.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _30.QueryModuleAccountsResponseAminoMsg): _30.QueryModuleAccountsResponse;
                toAminoMsg(message: _30.QueryModuleAccountsResponse): _30.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryModuleAccountsResponseProtoMsg): _30.QueryModuleAccountsResponse;
                toProto(message: _30.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryModuleAccountsResponse): _30.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _30.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_30.QueryModuleAccountByNameRequest>): _30.QueryModuleAccountByNameRequest;
                fromAmino(object: _30.QueryModuleAccountByNameRequestAmino): _30.QueryModuleAccountByNameRequest;
                toAmino(message: _30.QueryModuleAccountByNameRequest): _30.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _30.QueryModuleAccountByNameRequestAminoMsg): _30.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _30.QueryModuleAccountByNameRequest): _30.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _30.QueryModuleAccountByNameRequestProtoMsg): _30.QueryModuleAccountByNameRequest;
                toProto(message: _30.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _30.QueryModuleAccountByNameRequest): _30.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _30.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_30.QueryModuleAccountByNameResponse>): _30.QueryModuleAccountByNameResponse;
                fromAmino(object: _30.QueryModuleAccountByNameResponseAmino): _30.QueryModuleAccountByNameResponse;
                toAmino(message: _30.QueryModuleAccountByNameResponse): _30.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _30.QueryModuleAccountByNameResponseAminoMsg): _30.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _30.QueryModuleAccountByNameResponse): _30.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _30.QueryModuleAccountByNameResponseProtoMsg): _30.QueryModuleAccountByNameResponse;
                toProto(message: _30.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _30.QueryModuleAccountByNameResponse): _30.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _30.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.Bech32PrefixRequest;
                fromPartial(_: Partial<_30.Bech32PrefixRequest>): _30.Bech32PrefixRequest;
                fromAmino(_: _30.Bech32PrefixRequestAmino): _30.Bech32PrefixRequest;
                toAmino(_: _30.Bech32PrefixRequest): _30.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _30.Bech32PrefixRequestAminoMsg): _30.Bech32PrefixRequest;
                toAminoMsg(message: _30.Bech32PrefixRequest): _30.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _30.Bech32PrefixRequestProtoMsg): _30.Bech32PrefixRequest;
                toProto(message: _30.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _30.Bech32PrefixRequest): _30.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _30.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Bech32PrefixResponse;
                fromPartial(object: Partial<_30.Bech32PrefixResponse>): _30.Bech32PrefixResponse;
                fromAmino(object: _30.Bech32PrefixResponseAmino): _30.Bech32PrefixResponse;
                toAmino(message: _30.Bech32PrefixResponse): _30.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _30.Bech32PrefixResponseAminoMsg): _30.Bech32PrefixResponse;
                toAminoMsg(message: _30.Bech32PrefixResponse): _30.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _30.Bech32PrefixResponseProtoMsg): _30.Bech32PrefixResponse;
                toProto(message: _30.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _30.Bech32PrefixResponse): _30.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _30.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.AddressBytesToStringRequest;
                fromPartial(object: Partial<_30.AddressBytesToStringRequest>): _30.AddressBytesToStringRequest;
                fromAmino(object: _30.AddressBytesToStringRequestAmino): _30.AddressBytesToStringRequest;
                toAmino(message: _30.AddressBytesToStringRequest): _30.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _30.AddressBytesToStringRequestAminoMsg): _30.AddressBytesToStringRequest;
                toAminoMsg(message: _30.AddressBytesToStringRequest): _30.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _30.AddressBytesToStringRequestProtoMsg): _30.AddressBytesToStringRequest;
                toProto(message: _30.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _30.AddressBytesToStringRequest): _30.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _30.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.AddressBytesToStringResponse;
                fromPartial(object: Partial<_30.AddressBytesToStringResponse>): _30.AddressBytesToStringResponse;
                fromAmino(object: _30.AddressBytesToStringResponseAmino): _30.AddressBytesToStringResponse;
                toAmino(message: _30.AddressBytesToStringResponse): _30.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _30.AddressBytesToStringResponseAminoMsg): _30.AddressBytesToStringResponse;
                toAminoMsg(message: _30.AddressBytesToStringResponse): _30.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _30.AddressBytesToStringResponseProtoMsg): _30.AddressBytesToStringResponse;
                toProto(message: _30.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _30.AddressBytesToStringResponse): _30.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _30.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.AddressStringToBytesRequest;
                fromPartial(object: Partial<_30.AddressStringToBytesRequest>): _30.AddressStringToBytesRequest;
                fromAmino(object: _30.AddressStringToBytesRequestAmino): _30.AddressStringToBytesRequest;
                toAmino(message: _30.AddressStringToBytesRequest): _30.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _30.AddressStringToBytesRequestAminoMsg): _30.AddressStringToBytesRequest;
                toAminoMsg(message: _30.AddressStringToBytesRequest): _30.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _30.AddressStringToBytesRequestProtoMsg): _30.AddressStringToBytesRequest;
                toProto(message: _30.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _30.AddressStringToBytesRequest): _30.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _30.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.AddressStringToBytesResponse;
                fromPartial(object: Partial<_30.AddressStringToBytesResponse>): _30.AddressStringToBytesResponse;
                fromAmino(object: _30.AddressStringToBytesResponseAmino): _30.AddressStringToBytesResponse;
                toAmino(message: _30.AddressStringToBytesResponse): _30.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _30.AddressStringToBytesResponseAminoMsg): _30.AddressStringToBytesResponse;
                toAminoMsg(message: _30.AddressStringToBytesResponse): _30.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _30.AddressStringToBytesResponseProtoMsg): _30.AddressStringToBytesResponse;
                toProto(message: _30.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _30.AddressStringToBytesResponse): _30.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _30.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_30.QueryAccountAddressByIDRequest>): _30.QueryAccountAddressByIDRequest;
                fromAmino(object: _30.QueryAccountAddressByIDRequestAmino): _30.QueryAccountAddressByIDRequest;
                toAmino(message: _30.QueryAccountAddressByIDRequest): _30.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _30.QueryAccountAddressByIDRequestAminoMsg): _30.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _30.QueryAccountAddressByIDRequest): _30.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _30.QueryAccountAddressByIDRequestProtoMsg): _30.QueryAccountAddressByIDRequest;
                toProto(message: _30.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _30.QueryAccountAddressByIDRequest): _30.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _30.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_30.QueryAccountAddressByIDResponse>): _30.QueryAccountAddressByIDResponse;
                fromAmino(object: _30.QueryAccountAddressByIDResponseAmino): _30.QueryAccountAddressByIDResponse;
                toAmino(message: _30.QueryAccountAddressByIDResponse): _30.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _30.QueryAccountAddressByIDResponseAminoMsg): _30.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _30.QueryAccountAddressByIDResponse): _30.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _30.QueryAccountAddressByIDResponseProtoMsg): _30.QueryAccountAddressByIDResponse;
                toProto(message: _30.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _30.QueryAccountAddressByIDResponse): _30.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _30.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountInfoRequest;
                fromPartial(object: Partial<_30.QueryAccountInfoRequest>): _30.QueryAccountInfoRequest;
                fromAmino(object: _30.QueryAccountInfoRequestAmino): _30.QueryAccountInfoRequest;
                toAmino(message: _30.QueryAccountInfoRequest): _30.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _30.QueryAccountInfoRequestAminoMsg): _30.QueryAccountInfoRequest;
                toAminoMsg(message: _30.QueryAccountInfoRequest): _30.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _30.QueryAccountInfoRequestProtoMsg): _30.QueryAccountInfoRequest;
                toProto(message: _30.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _30.QueryAccountInfoRequest): _30.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _30.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryAccountInfoResponse;
                fromPartial(object: Partial<_30.QueryAccountInfoResponse>): _30.QueryAccountInfoResponse;
                fromAmino(object: _30.QueryAccountInfoResponseAmino): _30.QueryAccountInfoResponse;
                toAmino(message: _30.QueryAccountInfoResponse): _30.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _30.QueryAccountInfoResponseAminoMsg): _30.QueryAccountInfoResponse;
                toAminoMsg(message: _30.QueryAccountInfoResponse): _30.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _30.QueryAccountInfoResponseProtoMsg): _30.QueryAccountInfoResponse;
                toProto(message: _30.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _30.QueryAccountInfoResponse): _30.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _28.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _28.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _28.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.BaseAccount;
                fromPartial(object: Partial<_28.BaseAccount>): _28.BaseAccount;
                fromAmino(object: _28.BaseAccountAmino): _28.BaseAccount;
                toAmino(message: _28.BaseAccount): _28.BaseAccountAmino;
                fromAminoMsg(object: _28.BaseAccountAminoMsg): _28.BaseAccount;
                toAminoMsg(message: _28.BaseAccount): _28.BaseAccountAminoMsg;
                fromProtoMsg(message: _28.BaseAccountProtoMsg): _28.BaseAccount;
                toProto(message: _28.BaseAccount): Uint8Array;
                toProtoMsg(message: _28.BaseAccount): _28.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _28.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ModuleAccount;
                fromPartial(object: Partial<_28.ModuleAccount>): _28.ModuleAccount;
                fromAmino(object: _28.ModuleAccountAmino): _28.ModuleAccount;
                toAmino(message: _28.ModuleAccount): _28.ModuleAccountAmino;
                fromAminoMsg(object: _28.ModuleAccountAminoMsg): _28.ModuleAccount;
                toAminoMsg(message: _28.ModuleAccount): _28.ModuleAccountAminoMsg;
                fromProtoMsg(message: _28.ModuleAccountProtoMsg): _28.ModuleAccount;
                toProto(message: _28.ModuleAccount): Uint8Array;
                toProtoMsg(message: _28.ModuleAccount): _28.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _28.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ModuleCredential;
                fromPartial(object: Partial<_28.ModuleCredential>): _28.ModuleCredential;
                fromAmino(object: _28.ModuleCredentialAmino): _28.ModuleCredential;
                toAmino(message: _28.ModuleCredential): _28.ModuleCredentialAmino;
                fromAminoMsg(object: _28.ModuleCredentialAminoMsg): _28.ModuleCredential;
                toAminoMsg(message: _28.ModuleCredential): _28.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _28.ModuleCredentialProtoMsg): _28.ModuleCredential;
                toProto(message: _28.ModuleCredential): Uint8Array;
                toProtoMsg(message: _28.ModuleCredential): _28.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _28.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.Params;
                fromPartial(object: Partial<_28.Params>): _28.Params;
                fromAmino(object: _28.ParamsAmino): _28.Params;
                toAmino(message: _28.Params): _28.ParamsAmino;
                fromAminoMsg(object: _28.ParamsAminoMsg): _28.Params;
                toAminoMsg(message: _28.Params): _28.ParamsAminoMsg;
                fromProtoMsg(message: _28.ParamsProtoMsg): _28.Params;
                toProto(message: _28.Params): Uint8Array;
                toProtoMsg(message: _28.Params): _28.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _32.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.Module;
                    fromPartial(_: Partial<_32.Module>): _32.Module;
                    fromAmino(_: _32.ModuleAmino): _32.Module;
                    toAmino(_: _32.Module): _32.ModuleAmino;
                    fromAminoMsg(object: _32.ModuleAminoMsg): _32.Module;
                    toAminoMsg(message: _32.Module): _32.ModuleAminoMsg;
                    fromProtoMsg(message: _32.ModuleProtoMsg): _32.Module;
                    toProto(message: _32.Module): Uint8Array;
                    toProtoMsg(message: _32.Module): _32.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _272.MsgClientImpl;
            QueryClientImpl: typeof _251.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
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
                    toAmino: (message: _37.MsgGrant) => _37.MsgGrantAmino;
                    fromAmino: (object: _37.MsgGrantAmino) => _37.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _37.MsgExec) => _37.MsgExecAmino;
                    fromAmino: (object: _37.MsgExecAmino) => _37.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _37.MsgRevoke) => _37.MsgRevokeAmino;
                    fromAmino: (object: _37.MsgRevokeAmino) => _37.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _37.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgGrant;
                fromPartial(object: Partial<_37.MsgGrant>): _37.MsgGrant;
                fromAmino(object: _37.MsgGrantAmino): _37.MsgGrant;
                toAmino(message: _37.MsgGrant): _37.MsgGrantAmino;
                fromAminoMsg(object: _37.MsgGrantAminoMsg): _37.MsgGrant;
                toAminoMsg(message: _37.MsgGrant): _37.MsgGrantAminoMsg;
                fromProtoMsg(message: _37.MsgGrantProtoMsg): _37.MsgGrant;
                toProto(message: _37.MsgGrant): Uint8Array;
                toProtoMsg(message: _37.MsgGrant): _37.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _37.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgExecResponse;
                fromPartial(object: Partial<_37.MsgExecResponse>): _37.MsgExecResponse;
                fromAmino(object: _37.MsgExecResponseAmino): _37.MsgExecResponse;
                toAmino(message: _37.MsgExecResponse): _37.MsgExecResponseAmino;
                fromAminoMsg(object: _37.MsgExecResponseAminoMsg): _37.MsgExecResponse;
                toAminoMsg(message: _37.MsgExecResponse): _37.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _37.MsgExecResponseProtoMsg): _37.MsgExecResponse;
                toProto(message: _37.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _37.MsgExecResponse): _37.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _37.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgExec;
                fromPartial(object: Partial<_37.MsgExec>): _37.MsgExec;
                fromAmino(object: _37.MsgExecAmino): _37.MsgExec;
                toAmino(message: _37.MsgExec): _37.MsgExecAmino;
                fromAminoMsg(object: _37.MsgExecAminoMsg): _37.MsgExec;
                toAminoMsg(message: _37.MsgExec): _37.MsgExecAminoMsg;
                fromProtoMsg(message: _37.MsgExecProtoMsg): _37.MsgExec;
                toProto(message: _37.MsgExec): Uint8Array;
                toProtoMsg(message: _37.MsgExec): _37.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _37.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgGrantResponse;
                fromPartial(_: Partial<_37.MsgGrantResponse>): _37.MsgGrantResponse;
                fromAmino(_: _37.MsgGrantResponseAmino): _37.MsgGrantResponse;
                toAmino(_: _37.MsgGrantResponse): _37.MsgGrantResponseAmino;
                fromAminoMsg(object: _37.MsgGrantResponseAminoMsg): _37.MsgGrantResponse;
                toAminoMsg(message: _37.MsgGrantResponse): _37.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _37.MsgGrantResponseProtoMsg): _37.MsgGrantResponse;
                toProto(message: _37.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _37.MsgGrantResponse): _37.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _37.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MsgRevoke;
                fromPartial(object: Partial<_37.MsgRevoke>): _37.MsgRevoke;
                fromAmino(object: _37.MsgRevokeAmino): _37.MsgRevoke;
                toAmino(message: _37.MsgRevoke): _37.MsgRevokeAmino;
                fromAminoMsg(object: _37.MsgRevokeAminoMsg): _37.MsgRevoke;
                toAminoMsg(message: _37.MsgRevoke): _37.MsgRevokeAminoMsg;
                fromProtoMsg(message: _37.MsgRevokeProtoMsg): _37.MsgRevoke;
                toProto(message: _37.MsgRevoke): Uint8Array;
                toProtoMsg(message: _37.MsgRevoke): _37.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _37.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.MsgRevokeResponse;
                fromPartial(_: Partial<_37.MsgRevokeResponse>): _37.MsgRevokeResponse;
                fromAmino(_: _37.MsgRevokeResponseAmino): _37.MsgRevokeResponse;
                toAmino(_: _37.MsgRevokeResponse): _37.MsgRevokeResponseAmino;
                fromAminoMsg(object: _37.MsgRevokeResponseAminoMsg): _37.MsgRevokeResponse;
                toAminoMsg(message: _37.MsgRevokeResponse): _37.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _37.MsgRevokeResponseProtoMsg): _37.MsgRevokeResponse;
                toProto(message: _37.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _37.MsgRevokeResponse): _37.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _36.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGrantsRequest;
                fromPartial(object: Partial<_36.QueryGrantsRequest>): _36.QueryGrantsRequest;
                fromAmino(object: _36.QueryGrantsRequestAmino): _36.QueryGrantsRequest;
                toAmino(message: _36.QueryGrantsRequest): _36.QueryGrantsRequestAmino;
                fromAminoMsg(object: _36.QueryGrantsRequestAminoMsg): _36.QueryGrantsRequest;
                toAminoMsg(message: _36.QueryGrantsRequest): _36.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryGrantsRequestProtoMsg): _36.QueryGrantsRequest;
                toProto(message: _36.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryGrantsRequest): _36.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _36.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGrantsResponse;
                fromPartial(object: Partial<_36.QueryGrantsResponse>): _36.QueryGrantsResponse;
                fromAmino(object: _36.QueryGrantsResponseAmino): _36.QueryGrantsResponse;
                toAmino(message: _36.QueryGrantsResponse): _36.QueryGrantsResponseAmino;
                fromAminoMsg(object: _36.QueryGrantsResponseAminoMsg): _36.QueryGrantsResponse;
                toAminoMsg(message: _36.QueryGrantsResponse): _36.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryGrantsResponseProtoMsg): _36.QueryGrantsResponse;
                toProto(message: _36.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryGrantsResponse): _36.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _36.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranterGrantsRequest>): _36.QueryGranterGrantsRequest;
                fromAmino(object: _36.QueryGranterGrantsRequestAmino): _36.QueryGranterGrantsRequest;
                toAmino(message: _36.QueryGranterGrantsRequest): _36.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _36.QueryGranterGrantsRequestAminoMsg): _36.QueryGranterGrantsRequest;
                toAminoMsg(message: _36.QueryGranterGrantsRequest): _36.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryGranterGrantsRequestProtoMsg): _36.QueryGranterGrantsRequest;
                toProto(message: _36.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryGranterGrantsRequest): _36.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _36.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranterGrantsResponse>): _36.QueryGranterGrantsResponse;
                fromAmino(object: _36.QueryGranterGrantsResponseAmino): _36.QueryGranterGrantsResponse;
                toAmino(message: _36.QueryGranterGrantsResponse): _36.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _36.QueryGranterGrantsResponseAminoMsg): _36.QueryGranterGrantsResponse;
                toAminoMsg(message: _36.QueryGranterGrantsResponse): _36.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryGranterGrantsResponseProtoMsg): _36.QueryGranterGrantsResponse;
                toProto(message: _36.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryGranterGrantsResponse): _36.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _36.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_36.QueryGranteeGrantsRequest>): _36.QueryGranteeGrantsRequest;
                fromAmino(object: _36.QueryGranteeGrantsRequestAmino): _36.QueryGranteeGrantsRequest;
                toAmino(message: _36.QueryGranteeGrantsRequest): _36.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _36.QueryGranteeGrantsRequestAminoMsg): _36.QueryGranteeGrantsRequest;
                toAminoMsg(message: _36.QueryGranteeGrantsRequest): _36.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryGranteeGrantsRequestProtoMsg): _36.QueryGranteeGrantsRequest;
                toProto(message: _36.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryGranteeGrantsRequest): _36.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _36.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_36.QueryGranteeGrantsResponse>): _36.QueryGranteeGrantsResponse;
                fromAmino(object: _36.QueryGranteeGrantsResponseAmino): _36.QueryGranteeGrantsResponse;
                toAmino(message: _36.QueryGranteeGrantsResponse): _36.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _36.QueryGranteeGrantsResponseAminoMsg): _36.QueryGranteeGrantsResponse;
                toAminoMsg(message: _36.QueryGranteeGrantsResponse): _36.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryGranteeGrantsResponseProtoMsg): _36.QueryGranteeGrantsResponse;
                toProto(message: _36.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryGranteeGrantsResponse): _36.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _34.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.EventGrant;
                fromPartial(object: Partial<_34.EventGrant>): _34.EventGrant;
                fromAmino(object: _34.EventGrantAmino): _34.EventGrant;
                toAmino(message: _34.EventGrant): _34.EventGrantAmino;
                fromAminoMsg(object: _34.EventGrantAminoMsg): _34.EventGrant;
                toAminoMsg(message: _34.EventGrant): _34.EventGrantAminoMsg;
                fromProtoMsg(message: _34.EventGrantProtoMsg): _34.EventGrant;
                toProto(message: _34.EventGrant): Uint8Array;
                toProtoMsg(message: _34.EventGrant): _34.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _34.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.EventRevoke;
                fromPartial(object: Partial<_34.EventRevoke>): _34.EventRevoke;
                fromAmino(object: _34.EventRevokeAmino): _34.EventRevoke;
                toAmino(message: _34.EventRevoke): _34.EventRevokeAmino;
                fromAminoMsg(object: _34.EventRevokeAminoMsg): _34.EventRevoke;
                toAminoMsg(message: _34.EventRevoke): _34.EventRevokeAminoMsg;
                fromProtoMsg(message: _34.EventRevokeProtoMsg): _34.EventRevoke;
                toProto(message: _34.EventRevoke): Uint8Array;
                toProtoMsg(message: _34.EventRevoke): _34.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _33.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GenericAuthorization;
                fromPartial(object: Partial<_33.GenericAuthorization>): _33.GenericAuthorization;
                fromAmino(object: _33.GenericAuthorizationAmino): _33.GenericAuthorization;
                toAmino(message: _33.GenericAuthorization): _33.GenericAuthorizationAmino;
                fromAminoMsg(object: _33.GenericAuthorizationAminoMsg): _33.GenericAuthorization;
                toAminoMsg(message: _33.GenericAuthorization): _33.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _33.GenericAuthorizationProtoMsg): _33.GenericAuthorization;
                toProto(message: _33.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _33.GenericAuthorization): _33.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _33.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Grant;
                fromPartial(object: Partial<_33.Grant>): _33.Grant;
                fromAmino(object: _33.GrantAmino): _33.Grant;
                toAmino(message: _33.Grant): _33.GrantAmino;
                fromAminoMsg(object: _33.GrantAminoMsg): _33.Grant;
                toAminoMsg(message: _33.Grant): _33.GrantAminoMsg;
                fromProtoMsg(message: _33.GrantProtoMsg): _33.Grant;
                toProto(message: _33.Grant): Uint8Array;
                toProtoMsg(message: _33.Grant): _33.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _33.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GrantAuthorization;
                fromPartial(object: Partial<_33.GrantAuthorization>): _33.GrantAuthorization;
                fromAmino(object: _33.GrantAuthorizationAmino): _33.GrantAuthorization;
                toAmino(message: _33.GrantAuthorization): _33.GrantAuthorizationAmino;
                fromAminoMsg(object: _33.GrantAuthorizationAminoMsg): _33.GrantAuthorization;
                toAminoMsg(message: _33.GrantAuthorization): _33.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _33.GrantAuthorizationProtoMsg): _33.GrantAuthorization;
                toProto(message: _33.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _33.GrantAuthorization): _33.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _33.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GrantQueueItem;
                fromPartial(object: Partial<_33.GrantQueueItem>): _33.GrantQueueItem;
                fromAmino(object: _33.GrantQueueItemAmino): _33.GrantQueueItem;
                toAmino(message: _33.GrantQueueItem): _33.GrantQueueItemAmino;
                fromAminoMsg(object: _33.GrantQueueItemAminoMsg): _33.GrantQueueItem;
                toAminoMsg(message: _33.GrantQueueItem): _33.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _33.GrantQueueItemProtoMsg): _33.GrantQueueItem;
                toProto(message: _33.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _33.GrantQueueItem): _33.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _41.SendAuthorization | _132.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _33.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _252.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                appOptions(request?: _39.AppOptionsRequest): Promise<_39.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _39.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.AppOptionsRequest;
                fromPartial(_: Partial<_39.AppOptionsRequest>): _39.AppOptionsRequest;
                fromAmino(_: _39.AppOptionsRequestAmino): _39.AppOptionsRequest;
                toAmino(_: _39.AppOptionsRequest): _39.AppOptionsRequestAmino;
                fromAminoMsg(object: _39.AppOptionsRequestAminoMsg): _39.AppOptionsRequest;
                toAminoMsg(message: _39.AppOptionsRequest): _39.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _39.AppOptionsRequestProtoMsg): _39.AppOptionsRequest;
                toProto(message: _39.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _39.AppOptionsRequest): _39.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _39.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_39.AppOptionsResponse_ModuleOptionsEntry>): _39.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _39.AppOptionsResponse_ModuleOptionsEntryAmino): _39.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _39.AppOptionsResponse_ModuleOptionsEntry): _39.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _39.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _39.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _39.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _39.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _39.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _39.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.AppOptionsResponse;
                fromPartial(object: Partial<_39.AppOptionsResponse>): _39.AppOptionsResponse;
                fromAmino(object: _39.AppOptionsResponseAmino): _39.AppOptionsResponse;
                toAmino(message: _39.AppOptionsResponse): _39.AppOptionsResponseAmino;
                fromAminoMsg(object: _39.AppOptionsResponseAminoMsg): _39.AppOptionsResponse;
                toAminoMsg(message: _39.AppOptionsResponse): _39.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _39.AppOptionsResponseProtoMsg): _39.AppOptionsResponse;
                toProto(message: _39.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _39.AppOptionsResponse): _39.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _38.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ModuleOptions;
                fromPartial(object: Partial<_38.ModuleOptions>): _38.ModuleOptions;
                fromAmino(object: _38.ModuleOptionsAmino): _38.ModuleOptions;
                toAmino(message: _38.ModuleOptions): _38.ModuleOptionsAmino;
                fromAminoMsg(object: _38.ModuleOptionsAminoMsg): _38.ModuleOptions;
                toAminoMsg(message: _38.ModuleOptions): _38.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _38.ModuleOptionsProtoMsg): _38.ModuleOptions;
                toProto(message: _38.ModuleOptions): Uint8Array;
                toProtoMsg(message: _38.ModuleOptions): _38.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _38.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_38.ServiceCommandDescriptor_SubCommandsEntry>): _38.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _38.ServiceCommandDescriptor_SubCommandsEntryAmino): _38.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _38.ServiceCommandDescriptor_SubCommandsEntry): _38.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _38.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _38.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _38.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _38.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _38.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _38.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.ServiceCommandDescriptor;
                fromPartial(object: Partial<_38.ServiceCommandDescriptor>): _38.ServiceCommandDescriptor;
                fromAmino(object: _38.ServiceCommandDescriptorAmino): _38.ServiceCommandDescriptor;
                toAmino(message: _38.ServiceCommandDescriptor): _38.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _38.ServiceCommandDescriptorAminoMsg): _38.ServiceCommandDescriptor;
                toAminoMsg(message: _38.ServiceCommandDescriptor): _38.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _38.ServiceCommandDescriptorProtoMsg): _38.ServiceCommandDescriptor;
                toProto(message: _38.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _38.ServiceCommandDescriptor): _38.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _38.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_38.RpcCommandOptions_FlagOptionsEntry>): _38.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _38.RpcCommandOptions_FlagOptionsEntryAmino): _38.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _38.RpcCommandOptions_FlagOptionsEntry): _38.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _38.RpcCommandOptions_FlagOptionsEntryAminoMsg): _38.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _38.RpcCommandOptions_FlagOptionsEntryProtoMsg): _38.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _38.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _38.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.RpcCommandOptions;
                fromPartial(object: Partial<_38.RpcCommandOptions>): _38.RpcCommandOptions;
                fromAmino(object: _38.RpcCommandOptionsAmino): _38.RpcCommandOptions;
                toAmino(message: _38.RpcCommandOptions): _38.RpcCommandOptionsAmino;
                fromAminoMsg(object: _38.RpcCommandOptionsAminoMsg): _38.RpcCommandOptions;
                toAminoMsg(message: _38.RpcCommandOptions): _38.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _38.RpcCommandOptionsProtoMsg): _38.RpcCommandOptions;
                toProto(message: _38.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _38.RpcCommandOptions): _38.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _38.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.FlagOptions;
                fromPartial(object: Partial<_38.FlagOptions>): _38.FlagOptions;
                fromAmino(object: _38.FlagOptionsAmino): _38.FlagOptions;
                toAmino(message: _38.FlagOptions): _38.FlagOptionsAmino;
                fromAminoMsg(object: _38.FlagOptionsAminoMsg): _38.FlagOptions;
                toAminoMsg(message: _38.FlagOptions): _38.FlagOptionsAminoMsg;
                fromProtoMsg(message: _38.FlagOptionsProtoMsg): _38.FlagOptions;
                toProto(message: _38.FlagOptions): Uint8Array;
                toProtoMsg(message: _38.FlagOptions): _38.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _38.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.PositionalArgDescriptor;
                fromPartial(object: Partial<_38.PositionalArgDescriptor>): _38.PositionalArgDescriptor;
                fromAmino(object: _38.PositionalArgDescriptorAmino): _38.PositionalArgDescriptor;
                toAmino(message: _38.PositionalArgDescriptor): _38.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _38.PositionalArgDescriptorAminoMsg): _38.PositionalArgDescriptor;
                toAminoMsg(message: _38.PositionalArgDescriptor): _38.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _38.PositionalArgDescriptorProtoMsg): _38.PositionalArgDescriptor;
                toProto(message: _38.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _38.PositionalArgDescriptor): _38.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
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
            MsgClientImpl: typeof _273.MsgClientImpl;
            QueryClientImpl: typeof _253.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _44.QueryBalanceRequest): Promise<_44.QueryBalanceResponse>;
                allBalances(request: _44.QueryAllBalancesRequest): Promise<_44.QueryAllBalancesResponse>;
                spendableBalances(request: _44.QuerySpendableBalancesRequest): Promise<_44.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _44.QuerySpendableBalanceByDenomRequest): Promise<_44.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _44.QueryTotalSupplyRequest): Promise<_44.QueryTotalSupplyResponse>;
                supplyOf(request: _44.QuerySupplyOfRequest): Promise<_44.QuerySupplyOfResponse>;
                params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                denomMetadata(request: _44.QueryDenomMetadataRequest): Promise<_44.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _44.QueryDenomsMetadataRequest): Promise<_44.QueryDenomsMetadataResponse>;
                denomOwners(request: _44.QueryDenomOwnersRequest): Promise<_44.QueryDenomOwnersResponse>;
                sendEnabled(request: _44.QuerySendEnabledRequest): Promise<_44.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _45.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _45.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _45.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _45.MsgSend): {
                        typeUrl: string;
                        value: _45.MsgSend;
                    };
                    multiSend(value: _45.MsgMultiSend): {
                        typeUrl: string;
                        value: _45.MsgMultiSend;
                    };
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                    setSendEnabled(value: _45.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _45.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _45.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _45.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _45.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _45.MsgSend): {
                        typeUrl: string;
                        value: _45.MsgSend;
                    };
                    multiSend(value: _45.MsgMultiSend): {
                        typeUrl: string;
                        value: _45.MsgMultiSend;
                    };
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                    setSendEnabled(value: _45.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _45.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _45.MsgSend) => _45.MsgSendAmino;
                    fromAmino: (object: _45.MsgSendAmino) => _45.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _45.MsgMultiSend) => _45.MsgMultiSendAmino;
                    fromAmino: (object: _45.MsgMultiSendAmino) => _45.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _45.MsgUpdateParams) => _45.MsgUpdateParamsAmino;
                    fromAmino: (object: _45.MsgUpdateParamsAmino) => _45.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _45.MsgSetSendEnabled) => _45.MsgSetSendEnabledAmino;
                    fromAmino: (object: _45.MsgSetSendEnabledAmino) => _45.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _45.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgSend;
                fromPartial(object: Partial<_45.MsgSend>): _45.MsgSend;
                fromAmino(object: _45.MsgSendAmino): _45.MsgSend;
                toAmino(message: _45.MsgSend): _45.MsgSendAmino;
                fromAminoMsg(object: _45.MsgSendAminoMsg): _45.MsgSend;
                toAminoMsg(message: _45.MsgSend): _45.MsgSendAminoMsg;
                fromProtoMsg(message: _45.MsgSendProtoMsg): _45.MsgSend;
                toProto(message: _45.MsgSend): Uint8Array;
                toProtoMsg(message: _45.MsgSend): _45.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _45.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgSendResponse;
                fromPartial(_: Partial<_45.MsgSendResponse>): _45.MsgSendResponse;
                fromAmino(_: _45.MsgSendResponseAmino): _45.MsgSendResponse;
                toAmino(_: _45.MsgSendResponse): _45.MsgSendResponseAmino;
                fromAminoMsg(object: _45.MsgSendResponseAminoMsg): _45.MsgSendResponse;
                toAminoMsg(message: _45.MsgSendResponse): _45.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _45.MsgSendResponseProtoMsg): _45.MsgSendResponse;
                toProto(message: _45.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _45.MsgSendResponse): _45.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _45.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgMultiSend;
                fromPartial(object: Partial<_45.MsgMultiSend>): _45.MsgMultiSend;
                fromAmino(object: _45.MsgMultiSendAmino): _45.MsgMultiSend;
                toAmino(message: _45.MsgMultiSend): _45.MsgMultiSendAmino;
                fromAminoMsg(object: _45.MsgMultiSendAminoMsg): _45.MsgMultiSend;
                toAminoMsg(message: _45.MsgMultiSend): _45.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _45.MsgMultiSendProtoMsg): _45.MsgMultiSend;
                toProto(message: _45.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _45.MsgMultiSend): _45.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _45.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgMultiSendResponse;
                fromPartial(_: Partial<_45.MsgMultiSendResponse>): _45.MsgMultiSendResponse;
                fromAmino(_: _45.MsgMultiSendResponseAmino): _45.MsgMultiSendResponse;
                toAmino(_: _45.MsgMultiSendResponse): _45.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _45.MsgMultiSendResponseAminoMsg): _45.MsgMultiSendResponse;
                toAminoMsg(message: _45.MsgMultiSendResponse): _45.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _45.MsgMultiSendResponseProtoMsg): _45.MsgMultiSendResponse;
                toProto(message: _45.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _45.MsgMultiSendResponse): _45.MsgMultiSendResponseProtoMsg;
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
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _45.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgSetSendEnabled;
                fromPartial(object: Partial<_45.MsgSetSendEnabled>): _45.MsgSetSendEnabled;
                fromAmino(object: _45.MsgSetSendEnabledAmino): _45.MsgSetSendEnabled;
                toAmino(message: _45.MsgSetSendEnabled): _45.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _45.MsgSetSendEnabledAminoMsg): _45.MsgSetSendEnabled;
                toAminoMsg(message: _45.MsgSetSendEnabled): _45.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _45.MsgSetSendEnabledProtoMsg): _45.MsgSetSendEnabled;
                toProto(message: _45.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _45.MsgSetSendEnabled): _45.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _45.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_45.MsgSetSendEnabledResponse>): _45.MsgSetSendEnabledResponse;
                fromAmino(_: _45.MsgSetSendEnabledResponseAmino): _45.MsgSetSendEnabledResponse;
                toAmino(_: _45.MsgSetSendEnabledResponse): _45.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _45.MsgSetSendEnabledResponseAminoMsg): _45.MsgSetSendEnabledResponse;
                toAminoMsg(message: _45.MsgSetSendEnabledResponse): _45.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _45.MsgSetSendEnabledResponseProtoMsg): _45.MsgSetSendEnabledResponse;
                toProto(message: _45.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _45.MsgSetSendEnabledResponse): _45.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _44.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryBalanceRequest;
                fromPartial(object: Partial<_44.QueryBalanceRequest>): _44.QueryBalanceRequest;
                fromAmino(object: _44.QueryBalanceRequestAmino): _44.QueryBalanceRequest;
                toAmino(message: _44.QueryBalanceRequest): _44.QueryBalanceRequestAmino;
                fromAminoMsg(object: _44.QueryBalanceRequestAminoMsg): _44.QueryBalanceRequest;
                toAminoMsg(message: _44.QueryBalanceRequest): _44.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _44.QueryBalanceRequestProtoMsg): _44.QueryBalanceRequest;
                toProto(message: _44.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _44.QueryBalanceRequest): _44.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _44.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryBalanceResponse;
                fromPartial(object: Partial<_44.QueryBalanceResponse>): _44.QueryBalanceResponse;
                fromAmino(object: _44.QueryBalanceResponseAmino): _44.QueryBalanceResponse;
                toAmino(message: _44.QueryBalanceResponse): _44.QueryBalanceResponseAmino;
                fromAminoMsg(object: _44.QueryBalanceResponseAminoMsg): _44.QueryBalanceResponse;
                toAminoMsg(message: _44.QueryBalanceResponse): _44.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _44.QueryBalanceResponseProtoMsg): _44.QueryBalanceResponse;
                toProto(message: _44.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _44.QueryBalanceResponse): _44.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _44.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllBalancesRequest;
                fromPartial(object: Partial<_44.QueryAllBalancesRequest>): _44.QueryAllBalancesRequest;
                fromAmino(object: _44.QueryAllBalancesRequestAmino): _44.QueryAllBalancesRequest;
                toAmino(message: _44.QueryAllBalancesRequest): _44.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _44.QueryAllBalancesRequestAminoMsg): _44.QueryAllBalancesRequest;
                toAminoMsg(message: _44.QueryAllBalancesRequest): _44.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAllBalancesRequestProtoMsg): _44.QueryAllBalancesRequest;
                toProto(message: _44.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAllBalancesRequest): _44.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _44.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryAllBalancesResponse;
                fromPartial(object: Partial<_44.QueryAllBalancesResponse>): _44.QueryAllBalancesResponse;
                fromAmino(object: _44.QueryAllBalancesResponseAmino): _44.QueryAllBalancesResponse;
                toAmino(message: _44.QueryAllBalancesResponse): _44.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _44.QueryAllBalancesResponseAminoMsg): _44.QueryAllBalancesResponse;
                toAminoMsg(message: _44.QueryAllBalancesResponse): _44.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAllBalancesResponseProtoMsg): _44.QueryAllBalancesResponse;
                toProto(message: _44.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAllBalancesResponse): _44.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _44.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_44.QuerySpendableBalancesRequest>): _44.QuerySpendableBalancesRequest;
                fromAmino(object: _44.QuerySpendableBalancesRequestAmino): _44.QuerySpendableBalancesRequest;
                toAmino(message: _44.QuerySpendableBalancesRequest): _44.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _44.QuerySpendableBalancesRequestAminoMsg): _44.QuerySpendableBalancesRequest;
                toAminoMsg(message: _44.QuerySpendableBalancesRequest): _44.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _44.QuerySpendableBalancesRequestProtoMsg): _44.QuerySpendableBalancesRequest;
                toProto(message: _44.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _44.QuerySpendableBalancesRequest): _44.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _44.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_44.QuerySpendableBalancesResponse>): _44.QuerySpendableBalancesResponse;
                fromAmino(object: _44.QuerySpendableBalancesResponseAmino): _44.QuerySpendableBalancesResponse;
                toAmino(message: _44.QuerySpendableBalancesResponse): _44.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _44.QuerySpendableBalancesResponseAminoMsg): _44.QuerySpendableBalancesResponse;
                toAminoMsg(message: _44.QuerySpendableBalancesResponse): _44.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _44.QuerySpendableBalancesResponseProtoMsg): _44.QuerySpendableBalancesResponse;
                toProto(message: _44.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _44.QuerySpendableBalancesResponse): _44.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _44.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_44.QuerySpendableBalanceByDenomRequest>): _44.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _44.QuerySpendableBalanceByDenomRequestAmino): _44.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _44.QuerySpendableBalanceByDenomRequest): _44.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _44.QuerySpendableBalanceByDenomRequestAminoMsg): _44.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _44.QuerySpendableBalanceByDenomRequest): _44.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _44.QuerySpendableBalanceByDenomRequestProtoMsg): _44.QuerySpendableBalanceByDenomRequest;
                toProto(message: _44.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _44.QuerySpendableBalanceByDenomRequest): _44.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _44.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_44.QuerySpendableBalanceByDenomResponse>): _44.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _44.QuerySpendableBalanceByDenomResponseAmino): _44.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _44.QuerySpendableBalanceByDenomResponse): _44.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _44.QuerySpendableBalanceByDenomResponseAminoMsg): _44.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _44.QuerySpendableBalanceByDenomResponse): _44.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _44.QuerySpendableBalanceByDenomResponseProtoMsg): _44.QuerySpendableBalanceByDenomResponse;
                toProto(message: _44.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _44.QuerySpendableBalanceByDenomResponse): _44.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _44.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_44.QueryTotalSupplyRequest>): _44.QueryTotalSupplyRequest;
                fromAmino(object: _44.QueryTotalSupplyRequestAmino): _44.QueryTotalSupplyRequest;
                toAmino(message: _44.QueryTotalSupplyRequest): _44.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _44.QueryTotalSupplyRequestAminoMsg): _44.QueryTotalSupplyRequest;
                toAminoMsg(message: _44.QueryTotalSupplyRequest): _44.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _44.QueryTotalSupplyRequestProtoMsg): _44.QueryTotalSupplyRequest;
                toProto(message: _44.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _44.QueryTotalSupplyRequest): _44.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _44.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_44.QueryTotalSupplyResponse>): _44.QueryTotalSupplyResponse;
                fromAmino(object: _44.QueryTotalSupplyResponseAmino): _44.QueryTotalSupplyResponse;
                toAmino(message: _44.QueryTotalSupplyResponse): _44.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _44.QueryTotalSupplyResponseAminoMsg): _44.QueryTotalSupplyResponse;
                toAminoMsg(message: _44.QueryTotalSupplyResponse): _44.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _44.QueryTotalSupplyResponseProtoMsg): _44.QueryTotalSupplyResponse;
                toProto(message: _44.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _44.QueryTotalSupplyResponse): _44.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _44.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySupplyOfRequest;
                fromPartial(object: Partial<_44.QuerySupplyOfRequest>): _44.QuerySupplyOfRequest;
                fromAmino(object: _44.QuerySupplyOfRequestAmino): _44.QuerySupplyOfRequest;
                toAmino(message: _44.QuerySupplyOfRequest): _44.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _44.QuerySupplyOfRequestAminoMsg): _44.QuerySupplyOfRequest;
                toAminoMsg(message: _44.QuerySupplyOfRequest): _44.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _44.QuerySupplyOfRequestProtoMsg): _44.QuerySupplyOfRequest;
                toProto(message: _44.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _44.QuerySupplyOfRequest): _44.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _44.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySupplyOfResponse;
                fromPartial(object: Partial<_44.QuerySupplyOfResponse>): _44.QuerySupplyOfResponse;
                fromAmino(object: _44.QuerySupplyOfResponseAmino): _44.QuerySupplyOfResponse;
                toAmino(message: _44.QuerySupplyOfResponse): _44.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _44.QuerySupplyOfResponseAminoMsg): _44.QuerySupplyOfResponse;
                toAminoMsg(message: _44.QuerySupplyOfResponse): _44.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _44.QuerySupplyOfResponseProtoMsg): _44.QuerySupplyOfResponse;
                toProto(message: _44.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _44.QuerySupplyOfResponse): _44.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _44.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_44.QueryDenomsMetadataRequest>): _44.QueryDenomsMetadataRequest;
                fromAmino(object: _44.QueryDenomsMetadataRequestAmino): _44.QueryDenomsMetadataRequest;
                toAmino(message: _44.QueryDenomsMetadataRequest): _44.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _44.QueryDenomsMetadataRequestAminoMsg): _44.QueryDenomsMetadataRequest;
                toAminoMsg(message: _44.QueryDenomsMetadataRequest): _44.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDenomsMetadataRequestProtoMsg): _44.QueryDenomsMetadataRequest;
                toProto(message: _44.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDenomsMetadataRequest): _44.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _44.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_44.QueryDenomsMetadataResponse>): _44.QueryDenomsMetadataResponse;
                fromAmino(object: _44.QueryDenomsMetadataResponseAmino): _44.QueryDenomsMetadataResponse;
                toAmino(message: _44.QueryDenomsMetadataResponse): _44.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _44.QueryDenomsMetadataResponseAminoMsg): _44.QueryDenomsMetadataResponse;
                toAminoMsg(message: _44.QueryDenomsMetadataResponse): _44.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDenomsMetadataResponseProtoMsg): _44.QueryDenomsMetadataResponse;
                toProto(message: _44.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDenomsMetadataResponse): _44.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _44.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_44.QueryDenomMetadataRequest>): _44.QueryDenomMetadataRequest;
                fromAmino(object: _44.QueryDenomMetadataRequestAmino): _44.QueryDenomMetadataRequest;
                toAmino(message: _44.QueryDenomMetadataRequest): _44.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _44.QueryDenomMetadataRequestAminoMsg): _44.QueryDenomMetadataRequest;
                toAminoMsg(message: _44.QueryDenomMetadataRequest): _44.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDenomMetadataRequestProtoMsg): _44.QueryDenomMetadataRequest;
                toProto(message: _44.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDenomMetadataRequest): _44.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _44.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_44.QueryDenomMetadataResponse>): _44.QueryDenomMetadataResponse;
                fromAmino(object: _44.QueryDenomMetadataResponseAmino): _44.QueryDenomMetadataResponse;
                toAmino(message: _44.QueryDenomMetadataResponse): _44.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _44.QueryDenomMetadataResponseAminoMsg): _44.QueryDenomMetadataResponse;
                toAminoMsg(message: _44.QueryDenomMetadataResponse): _44.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDenomMetadataResponseProtoMsg): _44.QueryDenomMetadataResponse;
                toProto(message: _44.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDenomMetadataResponse): _44.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _44.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_44.QueryDenomOwnersRequest>): _44.QueryDenomOwnersRequest;
                fromAmino(object: _44.QueryDenomOwnersRequestAmino): _44.QueryDenomOwnersRequest;
                toAmino(message: _44.QueryDenomOwnersRequest): _44.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _44.QueryDenomOwnersRequestAminoMsg): _44.QueryDenomOwnersRequest;
                toAminoMsg(message: _44.QueryDenomOwnersRequest): _44.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDenomOwnersRequestProtoMsg): _44.QueryDenomOwnersRequest;
                toProto(message: _44.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDenomOwnersRequest): _44.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _44.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DenomOwner;
                fromPartial(object: Partial<_44.DenomOwner>): _44.DenomOwner;
                fromAmino(object: _44.DenomOwnerAmino): _44.DenomOwner;
                toAmino(message: _44.DenomOwner): _44.DenomOwnerAmino;
                fromAminoMsg(object: _44.DenomOwnerAminoMsg): _44.DenomOwner;
                toAminoMsg(message: _44.DenomOwner): _44.DenomOwnerAminoMsg;
                fromProtoMsg(message: _44.DenomOwnerProtoMsg): _44.DenomOwner;
                toProto(message: _44.DenomOwner): Uint8Array;
                toProtoMsg(message: _44.DenomOwner): _44.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _44.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_44.QueryDenomOwnersResponse>): _44.QueryDenomOwnersResponse;
                fromAmino(object: _44.QueryDenomOwnersResponseAmino): _44.QueryDenomOwnersResponse;
                toAmino(message: _44.QueryDenomOwnersResponse): _44.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _44.QueryDenomOwnersResponseAminoMsg): _44.QueryDenomOwnersResponse;
                toAminoMsg(message: _44.QueryDenomOwnersResponse): _44.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDenomOwnersResponseProtoMsg): _44.QueryDenomOwnersResponse;
                toProto(message: _44.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDenomOwnersResponse): _44.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _44.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySendEnabledRequest;
                fromPartial(object: Partial<_44.QuerySendEnabledRequest>): _44.QuerySendEnabledRequest;
                fromAmino(object: _44.QuerySendEnabledRequestAmino): _44.QuerySendEnabledRequest;
                toAmino(message: _44.QuerySendEnabledRequest): _44.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _44.QuerySendEnabledRequestAminoMsg): _44.QuerySendEnabledRequest;
                toAminoMsg(message: _44.QuerySendEnabledRequest): _44.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _44.QuerySendEnabledRequestProtoMsg): _44.QuerySendEnabledRequest;
                toProto(message: _44.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _44.QuerySendEnabledRequest): _44.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _44.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QuerySendEnabledResponse;
                fromPartial(object: Partial<_44.QuerySendEnabledResponse>): _44.QuerySendEnabledResponse;
                fromAmino(object: _44.QuerySendEnabledResponseAmino): _44.QuerySendEnabledResponse;
                toAmino(message: _44.QuerySendEnabledResponse): _44.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _44.QuerySendEnabledResponseAminoMsg): _44.QuerySendEnabledResponse;
                toAminoMsg(message: _44.QuerySendEnabledResponse): _44.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _44.QuerySendEnabledResponseProtoMsg): _44.QuerySendEnabledResponse;
                toProto(message: _44.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _44.QuerySendEnabledResponse): _44.QuerySendEnabledResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _43.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Balance;
                fromPartial(object: Partial<_43.Balance>): _43.Balance;
                fromAmino(object: _43.BalanceAmino): _43.Balance;
                toAmino(message: _43.Balance): _43.BalanceAmino;
                fromAminoMsg(object: _43.BalanceAminoMsg): _43.Balance;
                toAminoMsg(message: _43.Balance): _43.BalanceAminoMsg;
                fromProtoMsg(message: _43.BalanceProtoMsg): _43.Balance;
                toProto(message: _43.Balance): Uint8Array;
                toProtoMsg(message: _43.Balance): _43.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _42.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Params;
                fromPartial(object: Partial<_42.Params>): _42.Params;
                fromAmino(object: _42.ParamsAmino): _42.Params;
                toAmino(message: _42.Params): _42.ParamsAmino;
                fromAminoMsg(object: _42.ParamsAminoMsg): _42.Params;
                toAminoMsg(message: _42.Params): _42.ParamsAminoMsg;
                fromProtoMsg(message: _42.ParamsProtoMsg): _42.Params;
                toProto(message: _42.Params): Uint8Array;
                toProtoMsg(message: _42.Params): _42.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _42.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.SendEnabled;
                fromPartial(object: Partial<_42.SendEnabled>): _42.SendEnabled;
                fromAmino(object: _42.SendEnabledAmino): _42.SendEnabled;
                toAmino(message: _42.SendEnabled): _42.SendEnabledAmino;
                fromAminoMsg(object: _42.SendEnabledAminoMsg): _42.SendEnabled;
                toAminoMsg(message: _42.SendEnabled): _42.SendEnabledAminoMsg;
                fromProtoMsg(message: _42.SendEnabledProtoMsg): _42.SendEnabled;
                toProto(message: _42.SendEnabled): Uint8Array;
                toProtoMsg(message: _42.SendEnabled): _42.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _42.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Input;
                fromPartial(object: Partial<_42.Input>): _42.Input;
                fromAmino(object: _42.InputAmino): _42.Input;
                toAmino(message: _42.Input): _42.InputAmino;
                fromAminoMsg(object: _42.InputAminoMsg): _42.Input;
                toAminoMsg(message: _42.Input): _42.InputAminoMsg;
                fromProtoMsg(message: _42.InputProtoMsg): _42.Input;
                toProto(message: _42.Input): Uint8Array;
                toProtoMsg(message: _42.Input): _42.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _42.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Output;
                fromPartial(object: Partial<_42.Output>): _42.Output;
                fromAmino(object: _42.OutputAmino): _42.Output;
                toAmino(message: _42.Output): _42.OutputAmino;
                fromAminoMsg(object: _42.OutputAminoMsg): _42.Output;
                toAminoMsg(message: _42.Output): _42.OutputAminoMsg;
                fromProtoMsg(message: _42.OutputProtoMsg): _42.Output;
                toProto(message: _42.Output): Uint8Array;
                toProtoMsg(message: _42.Output): _42.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _42.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Supply;
                fromPartial(object: Partial<_42.Supply>): _42.Supply;
                fromAmino(object: _42.SupplyAmino): _42.Supply;
                toAmino(message: _42.Supply): _42.SupplyAmino;
                fromAminoMsg(object: _42.SupplyAminoMsg): _42.Supply;
                toAminoMsg(message: _42.Supply): _42.SupplyAminoMsg;
                fromProtoMsg(message: _42.SupplyProtoMsg): _42.Supply;
                toProto(message: _42.Supply): Uint8Array;
                toProtoMsg(message: _42.Supply): _42.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _42.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.DenomUnit;
                fromPartial(object: Partial<_42.DenomUnit>): _42.DenomUnit;
                fromAmino(object: _42.DenomUnitAmino): _42.DenomUnit;
                toAmino(message: _42.DenomUnit): _42.DenomUnitAmino;
                fromAminoMsg(object: _42.DenomUnitAminoMsg): _42.DenomUnit;
                toAminoMsg(message: _42.DenomUnit): _42.DenomUnitAminoMsg;
                fromProtoMsg(message: _42.DenomUnitProtoMsg): _42.DenomUnit;
                toProto(message: _42.DenomUnit): Uint8Array;
                toProtoMsg(message: _42.DenomUnit): _42.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _42.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Metadata;
                fromPartial(object: Partial<_42.Metadata>): _42.Metadata;
                fromAmino(object: _42.MetadataAmino): _42.Metadata;
                toAmino(message: _42.Metadata): _42.MetadataAmino;
                fromAminoMsg(object: _42.MetadataAminoMsg): _42.Metadata;
                toAminoMsg(message: _42.Metadata): _42.MetadataAminoMsg;
                fromProtoMsg(message: _42.MetadataProtoMsg): _42.Metadata;
                toProto(message: _42.Metadata): Uint8Array;
                toProtoMsg(message: _42.Metadata): _42.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _41.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.SendAuthorization;
                fromPartial(object: Partial<_41.SendAuthorization>): _41.SendAuthorization;
                fromAmino(object: _41.SendAuthorizationAmino): _41.SendAuthorization;
                toAmino(message: _41.SendAuthorization): _41.SendAuthorizationAmino;
                fromAminoMsg(object: _41.SendAuthorizationAminoMsg): _41.SendAuthorization;
                toAminoMsg(message: _41.SendAuthorization): _41.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _41.SendAuthorizationProtoMsg): _41.SendAuthorization;
                toProto(message: _41.SendAuthorization): Uint8Array;
                toProtoMsg(message: _41.SendAuthorization): _41.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _46.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.TxResponse;
                    fromPartial(object: Partial<_46.TxResponse>): _46.TxResponse;
                    fromAmino(object: _46.TxResponseAmino): _46.TxResponse;
                    toAmino(message: _46.TxResponse): _46.TxResponseAmino;
                    fromAminoMsg(object: _46.TxResponseAminoMsg): _46.TxResponse;
                    toAminoMsg(message: _46.TxResponse): _46.TxResponseAminoMsg;
                    fromProtoMsg(message: _46.TxResponseProtoMsg): _46.TxResponse;
                    toProto(message: _46.TxResponse): Uint8Array;
                    toProtoMsg(message: _46.TxResponse): _46.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _46.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ABCIMessageLog;
                    fromPartial(object: Partial<_46.ABCIMessageLog>): _46.ABCIMessageLog;
                    fromAmino(object: _46.ABCIMessageLogAmino): _46.ABCIMessageLog;
                    toAmino(message: _46.ABCIMessageLog): _46.ABCIMessageLogAmino;
                    fromAminoMsg(object: _46.ABCIMessageLogAminoMsg): _46.ABCIMessageLog;
                    toAminoMsg(message: _46.ABCIMessageLog): _46.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _46.ABCIMessageLogProtoMsg): _46.ABCIMessageLog;
                    toProto(message: _46.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _46.ABCIMessageLog): _46.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _46.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.StringEvent;
                    fromPartial(object: Partial<_46.StringEvent>): _46.StringEvent;
                    fromAmino(object: _46.StringEventAmino): _46.StringEvent;
                    toAmino(message: _46.StringEvent): _46.StringEventAmino;
                    fromAminoMsg(object: _46.StringEventAminoMsg): _46.StringEvent;
                    toAminoMsg(message: _46.StringEvent): _46.StringEventAminoMsg;
                    fromProtoMsg(message: _46.StringEventProtoMsg): _46.StringEvent;
                    toProto(message: _46.StringEvent): Uint8Array;
                    toProtoMsg(message: _46.StringEvent): _46.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _46.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Attribute;
                    fromPartial(object: Partial<_46.Attribute>): _46.Attribute;
                    fromAmino(object: _46.AttributeAmino): _46.Attribute;
                    toAmino(message: _46.Attribute): _46.AttributeAmino;
                    fromAminoMsg(object: _46.AttributeAminoMsg): _46.Attribute;
                    toAminoMsg(message: _46.Attribute): _46.AttributeAminoMsg;
                    fromProtoMsg(message: _46.AttributeProtoMsg): _46.Attribute;
                    toProto(message: _46.Attribute): Uint8Array;
                    toProtoMsg(message: _46.Attribute): _46.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _46.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GasInfo;
                    fromPartial(object: Partial<_46.GasInfo>): _46.GasInfo;
                    fromAmino(object: _46.GasInfoAmino): _46.GasInfo;
                    toAmino(message: _46.GasInfo): _46.GasInfoAmino;
                    fromAminoMsg(object: _46.GasInfoAminoMsg): _46.GasInfo;
                    toAminoMsg(message: _46.GasInfo): _46.GasInfoAminoMsg;
                    fromProtoMsg(message: _46.GasInfoProtoMsg): _46.GasInfo;
                    toProto(message: _46.GasInfo): Uint8Array;
                    toProtoMsg(message: _46.GasInfo): _46.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _46.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Result;
                    fromPartial(object: Partial<_46.Result>): _46.Result;
                    fromAmino(object: _46.ResultAmino): _46.Result;
                    toAmino(message: _46.Result): _46.ResultAmino;
                    fromAminoMsg(object: _46.ResultAminoMsg): _46.Result;
                    toAminoMsg(message: _46.Result): _46.ResultAminoMsg;
                    fromProtoMsg(message: _46.ResultProtoMsg): _46.Result;
                    toProto(message: _46.Result): Uint8Array;
                    toProtoMsg(message: _46.Result): _46.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _46.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SimulationResponse;
                    fromPartial(object: Partial<_46.SimulationResponse>): _46.SimulationResponse;
                    fromAmino(object: _46.SimulationResponseAmino): _46.SimulationResponse;
                    toAmino(message: _46.SimulationResponse): _46.SimulationResponseAmino;
                    fromAminoMsg(object: _46.SimulationResponseAminoMsg): _46.SimulationResponse;
                    toAminoMsg(message: _46.SimulationResponse): _46.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _46.SimulationResponseProtoMsg): _46.SimulationResponse;
                    toProto(message: _46.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _46.SimulationResponse): _46.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _46.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.MsgData;
                    fromPartial(object: Partial<_46.MsgData>): _46.MsgData;
                    fromAmino(object: _46.MsgDataAmino): _46.MsgData;
                    toAmino(message: _46.MsgData): _46.MsgDataAmino;
                    fromAminoMsg(object: _46.MsgDataAminoMsg): _46.MsgData;
                    toAminoMsg(message: _46.MsgData): _46.MsgDataAminoMsg;
                    fromProtoMsg(message: _46.MsgDataProtoMsg): _46.MsgData;
                    toProto(message: _46.MsgData): Uint8Array;
                    toProtoMsg(message: _46.MsgData): _46.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _46.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.TxMsgData;
                    fromPartial(object: Partial<_46.TxMsgData>): _46.TxMsgData;
                    fromAmino(object: _46.TxMsgDataAmino): _46.TxMsgData;
                    toAmino(message: _46.TxMsgData): _46.TxMsgDataAmino;
                    fromAminoMsg(object: _46.TxMsgDataAminoMsg): _46.TxMsgData;
                    toAminoMsg(message: _46.TxMsgData): _46.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _46.TxMsgDataProtoMsg): _46.TxMsgData;
                    toProto(message: _46.TxMsgData): Uint8Array;
                    toProtoMsg(message: _46.TxMsgData): _46.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _46.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.SearchTxsResult;
                    fromPartial(object: Partial<_46.SearchTxsResult>): _46.SearchTxsResult;
                    fromAmino(object: _46.SearchTxsResultAmino): _46.SearchTxsResult;
                    toAmino(message: _46.SearchTxsResult): _46.SearchTxsResultAmino;
                    fromAminoMsg(object: _46.SearchTxsResultAminoMsg): _46.SearchTxsResult;
                    toAminoMsg(message: _46.SearchTxsResult): _46.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _46.SearchTxsResultProtoMsg): _46.SearchTxsResult;
                    toProto(message: _46.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _46.SearchTxsResult): _46.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _47.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Pairs;
                    fromPartial(object: Partial<_47.Pairs>): _47.Pairs;
                    fromAmino(object: _47.PairsAmino): _47.Pairs;
                    toAmino(message: _47.Pairs): _47.PairsAmino;
                    fromAminoMsg(object: _47.PairsAminoMsg): _47.Pairs;
                    toAminoMsg(message: _47.Pairs): _47.PairsAminoMsg;
                    fromProtoMsg(message: _47.PairsProtoMsg): _47.Pairs;
                    toProto(message: _47.Pairs): Uint8Array;
                    toProtoMsg(message: _47.Pairs): _47.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _47.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Pair;
                    fromPartial(object: Partial<_47.Pair>): _47.Pair;
                    fromAmino(object: _47.PairAmino): _47.Pair;
                    toAmino(message: _47.Pair): _47.PairAmino;
                    fromAminoMsg(object: _47.PairAminoMsg): _47.Pair;
                    toAminoMsg(message: _47.Pair): _47.PairAminoMsg;
                    fromProtoMsg(message: _47.PairProtoMsg): _47.Pair;
                    toProto(message: _47.Pair): Uint8Array;
                    toProtoMsg(message: _47.Pair): _47.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _254.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _48.ConfigRequest): Promise<_48.ConfigResponse>;
                };
                LCDQueryClient: typeof _233.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _48.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.ConfigRequest;
                    fromPartial(_: Partial<_48.ConfigRequest>): _48.ConfigRequest;
                    fromAmino(_: _48.ConfigRequestAmino): _48.ConfigRequest;
                    toAmino(_: _48.ConfigRequest): _48.ConfigRequestAmino;
                    fromAminoMsg(object: _48.ConfigRequestAminoMsg): _48.ConfigRequest;
                    toAminoMsg(message: _48.ConfigRequest): _48.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _48.ConfigRequestProtoMsg): _48.ConfigRequest;
                    toProto(message: _48.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _48.ConfigRequest): _48.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _48.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.ConfigResponse;
                    fromPartial(object: Partial<_48.ConfigResponse>): _48.ConfigResponse;
                    fromAmino(object: _48.ConfigResponseAmino): _48.ConfigResponse;
                    toAmino(message: _48.ConfigResponse): _48.ConfigResponseAmino;
                    fromAminoMsg(object: _48.ConfigResponseAminoMsg): _48.ConfigResponse;
                    toAminoMsg(message: _48.ConfigResponse): _48.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _48.ConfigResponseProtoMsg): _48.ConfigResponse;
                    toProto(message: _48.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _48.ConfigResponse): _48.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _49.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.PageRequest;
                    fromPartial(object: Partial<_49.PageRequest>): _49.PageRequest;
                    fromAmino(object: _49.PageRequestAmino): _49.PageRequest;
                    toAmino(message: _49.PageRequest): _49.PageRequestAmino;
                    fromAminoMsg(object: _49.PageRequestAminoMsg): _49.PageRequest;
                    toAminoMsg(message: _49.PageRequest): _49.PageRequestAminoMsg;
                    fromProtoMsg(message: _49.PageRequestProtoMsg): _49.PageRequest;
                    toProto(message: _49.PageRequest): Uint8Array;
                    toProtoMsg(message: _49.PageRequest): _49.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _49.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.PageResponse;
                    fromPartial(object: Partial<_49.PageResponse>): _49.PageResponse;
                    fromAmino(object: _49.PageResponseAmino): _49.PageResponse;
                    toAmino(message: _49.PageResponse): _49.PageResponseAmino;
                    fromAminoMsg(object: _49.PageResponseAminoMsg): _49.PageResponse;
                    toAminoMsg(message: _49.PageResponse): _49.PageResponseAminoMsg;
                    fromProtoMsg(message: _49.PageResponseProtoMsg): _49.PageResponse;
                    toProto(message: _49.PageResponse): Uint8Array;
                    toProtoMsg(message: _49.PageResponse): _49.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _50.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _50.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_50.ListAllInterfacesRequest>): _50.ListAllInterfacesRequest;
                    fromAmino(_: _50.ListAllInterfacesRequestAmino): _50.ListAllInterfacesRequest;
                    toAmino(_: _50.ListAllInterfacesRequest): _50.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _50.ListAllInterfacesRequestAminoMsg): _50.ListAllInterfacesRequest;
                    toAminoMsg(message: _50.ListAllInterfacesRequest): _50.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _50.ListAllInterfacesRequestProtoMsg): _50.ListAllInterfacesRequest;
                    toProto(message: _50.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _50.ListAllInterfacesRequest): _50.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _50.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_50.ListAllInterfacesResponse>): _50.ListAllInterfacesResponse;
                    fromAmino(object: _50.ListAllInterfacesResponseAmino): _50.ListAllInterfacesResponse;
                    toAmino(message: _50.ListAllInterfacesResponse): _50.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _50.ListAllInterfacesResponseAminoMsg): _50.ListAllInterfacesResponse;
                    toAminoMsg(message: _50.ListAllInterfacesResponse): _50.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _50.ListAllInterfacesResponseProtoMsg): _50.ListAllInterfacesResponse;
                    toProto(message: _50.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _50.ListAllInterfacesResponse): _50.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _50.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.ListImplementationsRequest;
                    fromPartial(object: Partial<_50.ListImplementationsRequest>): _50.ListImplementationsRequest;
                    fromAmino(object: _50.ListImplementationsRequestAmino): _50.ListImplementationsRequest;
                    toAmino(message: _50.ListImplementationsRequest): _50.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _50.ListImplementationsRequestAminoMsg): _50.ListImplementationsRequest;
                    toAminoMsg(message: _50.ListImplementationsRequest): _50.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _50.ListImplementationsRequestProtoMsg): _50.ListImplementationsRequest;
                    toProto(message: _50.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _50.ListImplementationsRequest): _50.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _50.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.ListImplementationsResponse;
                    fromPartial(object: Partial<_50.ListImplementationsResponse>): _50.ListImplementationsResponse;
                    fromAmino(object: _50.ListImplementationsResponseAmino): _50.ListImplementationsResponse;
                    toAmino(message: _50.ListImplementationsResponse): _50.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _50.ListImplementationsResponseAminoMsg): _50.ListImplementationsResponse;
                    toAminoMsg(message: _50.ListImplementationsResponse): _50.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _50.ListImplementationsResponseProtoMsg): _50.ListImplementationsResponse;
                    toProto(message: _50.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _50.ListImplementationsResponse): _50.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _51.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.AppDescriptor;
                    fromPartial(object: Partial<_51.AppDescriptor>): _51.AppDescriptor;
                    fromAmino(object: _51.AppDescriptorAmino): _51.AppDescriptor;
                    toAmino(message: _51.AppDescriptor): _51.AppDescriptorAmino;
                    fromAminoMsg(object: _51.AppDescriptorAminoMsg): _51.AppDescriptor;
                    toAminoMsg(message: _51.AppDescriptor): _51.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _51.AppDescriptorProtoMsg): _51.AppDescriptor;
                    toProto(message: _51.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _51.AppDescriptor): _51.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _51.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.TxDescriptor;
                    fromPartial(object: Partial<_51.TxDescriptor>): _51.TxDescriptor;
                    fromAmino(object: _51.TxDescriptorAmino): _51.TxDescriptor;
                    toAmino(message: _51.TxDescriptor): _51.TxDescriptorAmino;
                    fromAminoMsg(object: _51.TxDescriptorAminoMsg): _51.TxDescriptor;
                    toAminoMsg(message: _51.TxDescriptor): _51.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _51.TxDescriptorProtoMsg): _51.TxDescriptor;
                    toProto(message: _51.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _51.TxDescriptor): _51.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _51.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.AuthnDescriptor;
                    fromPartial(object: Partial<_51.AuthnDescriptor>): _51.AuthnDescriptor;
                    fromAmino(object: _51.AuthnDescriptorAmino): _51.AuthnDescriptor;
                    toAmino(message: _51.AuthnDescriptor): _51.AuthnDescriptorAmino;
                    fromAminoMsg(object: _51.AuthnDescriptorAminoMsg): _51.AuthnDescriptor;
                    toAminoMsg(message: _51.AuthnDescriptor): _51.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _51.AuthnDescriptorProtoMsg): _51.AuthnDescriptor;
                    toProto(message: _51.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _51.AuthnDescriptor): _51.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _51.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SigningModeDescriptor;
                    fromPartial(object: Partial<_51.SigningModeDescriptor>): _51.SigningModeDescriptor;
                    fromAmino(object: _51.SigningModeDescriptorAmino): _51.SigningModeDescriptor;
                    toAmino(message: _51.SigningModeDescriptor): _51.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _51.SigningModeDescriptorAminoMsg): _51.SigningModeDescriptor;
                    toAminoMsg(message: _51.SigningModeDescriptor): _51.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _51.SigningModeDescriptorProtoMsg): _51.SigningModeDescriptor;
                    toProto(message: _51.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _51.SigningModeDescriptor): _51.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _51.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.ChainDescriptor;
                    fromPartial(object: Partial<_51.ChainDescriptor>): _51.ChainDescriptor;
                    fromAmino(object: _51.ChainDescriptorAmino): _51.ChainDescriptor;
                    toAmino(message: _51.ChainDescriptor): _51.ChainDescriptorAmino;
                    fromAminoMsg(object: _51.ChainDescriptorAminoMsg): _51.ChainDescriptor;
                    toAminoMsg(message: _51.ChainDescriptor): _51.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _51.ChainDescriptorProtoMsg): _51.ChainDescriptor;
                    toProto(message: _51.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _51.ChainDescriptor): _51.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _51.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.CodecDescriptor;
                    fromPartial(object: Partial<_51.CodecDescriptor>): _51.CodecDescriptor;
                    fromAmino(object: _51.CodecDescriptorAmino): _51.CodecDescriptor;
                    toAmino(message: _51.CodecDescriptor): _51.CodecDescriptorAmino;
                    fromAminoMsg(object: _51.CodecDescriptorAminoMsg): _51.CodecDescriptor;
                    toAminoMsg(message: _51.CodecDescriptor): _51.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _51.CodecDescriptorProtoMsg): _51.CodecDescriptor;
                    toProto(message: _51.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _51.CodecDescriptor): _51.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _51.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.InterfaceDescriptor;
                    fromPartial(object: Partial<_51.InterfaceDescriptor>): _51.InterfaceDescriptor;
                    fromAmino(object: _51.InterfaceDescriptorAmino): _51.InterfaceDescriptor;
                    toAmino(message: _51.InterfaceDescriptor): _51.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _51.InterfaceDescriptorAminoMsg): _51.InterfaceDescriptor;
                    toAminoMsg(message: _51.InterfaceDescriptor): _51.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _51.InterfaceDescriptorProtoMsg): _51.InterfaceDescriptor;
                    toProto(message: _51.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _51.InterfaceDescriptor): _51.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _51.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_51.InterfaceImplementerDescriptor>): _51.InterfaceImplementerDescriptor;
                    fromAmino(object: _51.InterfaceImplementerDescriptorAmino): _51.InterfaceImplementerDescriptor;
                    toAmino(message: _51.InterfaceImplementerDescriptor): _51.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _51.InterfaceImplementerDescriptorAminoMsg): _51.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _51.InterfaceImplementerDescriptor): _51.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _51.InterfaceImplementerDescriptorProtoMsg): _51.InterfaceImplementerDescriptor;
                    toProto(message: _51.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _51.InterfaceImplementerDescriptor): _51.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _51.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_51.InterfaceAcceptingMessageDescriptor>): _51.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _51.InterfaceAcceptingMessageDescriptorAmino): _51.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _51.InterfaceAcceptingMessageDescriptor): _51.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _51.InterfaceAcceptingMessageDescriptorAminoMsg): _51.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _51.InterfaceAcceptingMessageDescriptor): _51.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _51.InterfaceAcceptingMessageDescriptorProtoMsg): _51.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _51.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _51.InterfaceAcceptingMessageDescriptor): _51.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _51.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.ConfigurationDescriptor;
                    fromPartial(object: Partial<_51.ConfigurationDescriptor>): _51.ConfigurationDescriptor;
                    fromAmino(object: _51.ConfigurationDescriptorAmino): _51.ConfigurationDescriptor;
                    toAmino(message: _51.ConfigurationDescriptor): _51.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _51.ConfigurationDescriptorAminoMsg): _51.ConfigurationDescriptor;
                    toAminoMsg(message: _51.ConfigurationDescriptor): _51.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _51.ConfigurationDescriptorProtoMsg): _51.ConfigurationDescriptor;
                    toProto(message: _51.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _51.ConfigurationDescriptor): _51.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _51.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.MsgDescriptor;
                    fromPartial(object: Partial<_51.MsgDescriptor>): _51.MsgDescriptor;
                    fromAmino(object: _51.MsgDescriptorAmino): _51.MsgDescriptor;
                    toAmino(message: _51.MsgDescriptor): _51.MsgDescriptorAmino;
                    fromAminoMsg(object: _51.MsgDescriptorAminoMsg): _51.MsgDescriptor;
                    toAminoMsg(message: _51.MsgDescriptor): _51.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _51.MsgDescriptorProtoMsg): _51.MsgDescriptor;
                    toProto(message: _51.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _51.MsgDescriptor): _51.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _51.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_51.GetAuthnDescriptorRequest>): _51.GetAuthnDescriptorRequest;
                    fromAmino(_: _51.GetAuthnDescriptorRequestAmino): _51.GetAuthnDescriptorRequest;
                    toAmino(_: _51.GetAuthnDescriptorRequest): _51.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _51.GetAuthnDescriptorRequestAminoMsg): _51.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _51.GetAuthnDescriptorRequest): _51.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _51.GetAuthnDescriptorRequestProtoMsg): _51.GetAuthnDescriptorRequest;
                    toProto(message: _51.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _51.GetAuthnDescriptorRequest): _51.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _51.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_51.GetAuthnDescriptorResponse>): _51.GetAuthnDescriptorResponse;
                    fromAmino(object: _51.GetAuthnDescriptorResponseAmino): _51.GetAuthnDescriptorResponse;
                    toAmino(message: _51.GetAuthnDescriptorResponse): _51.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _51.GetAuthnDescriptorResponseAminoMsg): _51.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _51.GetAuthnDescriptorResponse): _51.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _51.GetAuthnDescriptorResponseProtoMsg): _51.GetAuthnDescriptorResponse;
                    toProto(message: _51.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _51.GetAuthnDescriptorResponse): _51.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _51.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_51.GetChainDescriptorRequest>): _51.GetChainDescriptorRequest;
                    fromAmino(_: _51.GetChainDescriptorRequestAmino): _51.GetChainDescriptorRequest;
                    toAmino(_: _51.GetChainDescriptorRequest): _51.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _51.GetChainDescriptorRequestAminoMsg): _51.GetChainDescriptorRequest;
                    toAminoMsg(message: _51.GetChainDescriptorRequest): _51.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _51.GetChainDescriptorRequestProtoMsg): _51.GetChainDescriptorRequest;
                    toProto(message: _51.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _51.GetChainDescriptorRequest): _51.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _51.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_51.GetChainDescriptorResponse>): _51.GetChainDescriptorResponse;
                    fromAmino(object: _51.GetChainDescriptorResponseAmino): _51.GetChainDescriptorResponse;
                    toAmino(message: _51.GetChainDescriptorResponse): _51.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _51.GetChainDescriptorResponseAminoMsg): _51.GetChainDescriptorResponse;
                    toAminoMsg(message: _51.GetChainDescriptorResponse): _51.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _51.GetChainDescriptorResponseProtoMsg): _51.GetChainDescriptorResponse;
                    toProto(message: _51.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _51.GetChainDescriptorResponse): _51.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _51.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_51.GetCodecDescriptorRequest>): _51.GetCodecDescriptorRequest;
                    fromAmino(_: _51.GetCodecDescriptorRequestAmino): _51.GetCodecDescriptorRequest;
                    toAmino(_: _51.GetCodecDescriptorRequest): _51.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _51.GetCodecDescriptorRequestAminoMsg): _51.GetCodecDescriptorRequest;
                    toAminoMsg(message: _51.GetCodecDescriptorRequest): _51.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _51.GetCodecDescriptorRequestProtoMsg): _51.GetCodecDescriptorRequest;
                    toProto(message: _51.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _51.GetCodecDescriptorRequest): _51.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _51.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_51.GetCodecDescriptorResponse>): _51.GetCodecDescriptorResponse;
                    fromAmino(object: _51.GetCodecDescriptorResponseAmino): _51.GetCodecDescriptorResponse;
                    toAmino(message: _51.GetCodecDescriptorResponse): _51.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _51.GetCodecDescriptorResponseAminoMsg): _51.GetCodecDescriptorResponse;
                    toAminoMsg(message: _51.GetCodecDescriptorResponse): _51.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _51.GetCodecDescriptorResponseProtoMsg): _51.GetCodecDescriptorResponse;
                    toProto(message: _51.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _51.GetCodecDescriptorResponse): _51.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _51.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_51.GetConfigurationDescriptorRequest>): _51.GetConfigurationDescriptorRequest;
                    fromAmino(_: _51.GetConfigurationDescriptorRequestAmino): _51.GetConfigurationDescriptorRequest;
                    toAmino(_: _51.GetConfigurationDescriptorRequest): _51.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _51.GetConfigurationDescriptorRequestAminoMsg): _51.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _51.GetConfigurationDescriptorRequest): _51.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _51.GetConfigurationDescriptorRequestProtoMsg): _51.GetConfigurationDescriptorRequest;
                    toProto(message: _51.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _51.GetConfigurationDescriptorRequest): _51.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _51.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_51.GetConfigurationDescriptorResponse>): _51.GetConfigurationDescriptorResponse;
                    fromAmino(object: _51.GetConfigurationDescriptorResponseAmino): _51.GetConfigurationDescriptorResponse;
                    toAmino(message: _51.GetConfigurationDescriptorResponse): _51.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _51.GetConfigurationDescriptorResponseAminoMsg): _51.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _51.GetConfigurationDescriptorResponse): _51.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _51.GetConfigurationDescriptorResponseProtoMsg): _51.GetConfigurationDescriptorResponse;
                    toProto(message: _51.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _51.GetConfigurationDescriptorResponse): _51.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _51.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_51.GetQueryServicesDescriptorRequest>): _51.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _51.GetQueryServicesDescriptorRequestAmino): _51.GetQueryServicesDescriptorRequest;
                    toAmino(_: _51.GetQueryServicesDescriptorRequest): _51.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _51.GetQueryServicesDescriptorRequestAminoMsg): _51.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _51.GetQueryServicesDescriptorRequest): _51.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _51.GetQueryServicesDescriptorRequestProtoMsg): _51.GetQueryServicesDescriptorRequest;
                    toProto(message: _51.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _51.GetQueryServicesDescriptorRequest): _51.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _51.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_51.GetQueryServicesDescriptorResponse>): _51.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _51.GetQueryServicesDescriptorResponseAmino): _51.GetQueryServicesDescriptorResponse;
                    toAmino(message: _51.GetQueryServicesDescriptorResponse): _51.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _51.GetQueryServicesDescriptorResponseAminoMsg): _51.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _51.GetQueryServicesDescriptorResponse): _51.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _51.GetQueryServicesDescriptorResponseProtoMsg): _51.GetQueryServicesDescriptorResponse;
                    toProto(message: _51.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _51.GetQueryServicesDescriptorResponse): _51.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _51.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _51.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_51.GetTxDescriptorRequest>): _51.GetTxDescriptorRequest;
                    fromAmino(_: _51.GetTxDescriptorRequestAmino): _51.GetTxDescriptorRequest;
                    toAmino(_: _51.GetTxDescriptorRequest): _51.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _51.GetTxDescriptorRequestAminoMsg): _51.GetTxDescriptorRequest;
                    toAminoMsg(message: _51.GetTxDescriptorRequest): _51.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _51.GetTxDescriptorRequestProtoMsg): _51.GetTxDescriptorRequest;
                    toProto(message: _51.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _51.GetTxDescriptorRequest): _51.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _51.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_51.GetTxDescriptorResponse>): _51.GetTxDescriptorResponse;
                    fromAmino(object: _51.GetTxDescriptorResponseAmino): _51.GetTxDescriptorResponse;
                    toAmino(message: _51.GetTxDescriptorResponse): _51.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _51.GetTxDescriptorResponseAminoMsg): _51.GetTxDescriptorResponse;
                    toAminoMsg(message: _51.GetTxDescriptorResponse): _51.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _51.GetTxDescriptorResponseProtoMsg): _51.GetTxDescriptorResponse;
                    toProto(message: _51.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _51.GetTxDescriptorResponse): _51.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _51.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.QueryServicesDescriptor;
                    fromPartial(object: Partial<_51.QueryServicesDescriptor>): _51.QueryServicesDescriptor;
                    fromAmino(object: _51.QueryServicesDescriptorAmino): _51.QueryServicesDescriptor;
                    toAmino(message: _51.QueryServicesDescriptor): _51.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _51.QueryServicesDescriptorAminoMsg): _51.QueryServicesDescriptor;
                    toAminoMsg(message: _51.QueryServicesDescriptor): _51.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _51.QueryServicesDescriptorProtoMsg): _51.QueryServicesDescriptor;
                    toProto(message: _51.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _51.QueryServicesDescriptor): _51.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _51.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.QueryServiceDescriptor;
                    fromPartial(object: Partial<_51.QueryServiceDescriptor>): _51.QueryServiceDescriptor;
                    fromAmino(object: _51.QueryServiceDescriptorAmino): _51.QueryServiceDescriptor;
                    toAmino(message: _51.QueryServiceDescriptor): _51.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _51.QueryServiceDescriptorAminoMsg): _51.QueryServiceDescriptor;
                    toAminoMsg(message: _51.QueryServiceDescriptor): _51.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _51.QueryServiceDescriptorProtoMsg): _51.QueryServiceDescriptor;
                    toProto(message: _51.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _51.QueryServiceDescriptor): _51.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _51.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.QueryMethodDescriptor;
                    fromPartial(object: Partial<_51.QueryMethodDescriptor>): _51.QueryMethodDescriptor;
                    fromAmino(object: _51.QueryMethodDescriptorAmino): _51.QueryMethodDescriptor;
                    toAmino(message: _51.QueryMethodDescriptor): _51.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _51.QueryMethodDescriptorAminoMsg): _51.QueryMethodDescriptor;
                    toAminoMsg(message: _51.QueryMethodDescriptor): _51.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _51.QueryMethodDescriptorProtoMsg): _51.QueryMethodDescriptor;
                    toProto(message: _51.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _51.QueryMethodDescriptor): _51.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _52.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Snapshot;
                    fromPartial(object: Partial<_52.Snapshot>): _52.Snapshot;
                    fromAmino(object: _52.SnapshotAmino): _52.Snapshot;
                    toAmino(message: _52.Snapshot): _52.SnapshotAmino;
                    fromAminoMsg(object: _52.SnapshotAminoMsg): _52.Snapshot;
                    toAminoMsg(message: _52.Snapshot): _52.SnapshotAminoMsg;
                    fromProtoMsg(message: _52.SnapshotProtoMsg): _52.Snapshot;
                    toProto(message: _52.Snapshot): Uint8Array;
                    toProtoMsg(message: _52.Snapshot): _52.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _52.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.Metadata;
                    fromPartial(object: Partial<_52.Metadata>): _52.Metadata;
                    fromAmino(object: _52.MetadataAmino): _52.Metadata;
                    toAmino(message: _52.Metadata): _52.MetadataAmino;
                    fromAminoMsg(object: _52.MetadataAminoMsg): _52.Metadata;
                    toAminoMsg(message: _52.Metadata): _52.MetadataAminoMsg;
                    fromProtoMsg(message: _52.MetadataProtoMsg): _52.Metadata;
                    toProto(message: _52.Metadata): Uint8Array;
                    toProtoMsg(message: _52.Metadata): _52.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _52.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SnapshotItem;
                    fromPartial(object: Partial<_52.SnapshotItem>): _52.SnapshotItem;
                    fromAmino(object: _52.SnapshotItemAmino): _52.SnapshotItem;
                    toAmino(message: _52.SnapshotItem): _52.SnapshotItemAmino;
                    fromAminoMsg(object: _52.SnapshotItemAminoMsg): _52.SnapshotItem;
                    toAminoMsg(message: _52.SnapshotItem): _52.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _52.SnapshotItemProtoMsg): _52.SnapshotItem;
                    toProto(message: _52.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _52.SnapshotItem): _52.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _52.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SnapshotStoreItem;
                    fromPartial(object: Partial<_52.SnapshotStoreItem>): _52.SnapshotStoreItem;
                    fromAmino(object: _52.SnapshotStoreItemAmino): _52.SnapshotStoreItem;
                    toAmino(message: _52.SnapshotStoreItem): _52.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _52.SnapshotStoreItemAminoMsg): _52.SnapshotStoreItem;
                    toAminoMsg(message: _52.SnapshotStoreItem): _52.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _52.SnapshotStoreItemProtoMsg): _52.SnapshotStoreItem;
                    toProto(message: _52.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _52.SnapshotStoreItem): _52.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _52.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SnapshotIAVLItem;
                    fromPartial(object: Partial<_52.SnapshotIAVLItem>): _52.SnapshotIAVLItem;
                    fromAmino(object: _52.SnapshotIAVLItemAmino): _52.SnapshotIAVLItem;
                    toAmino(message: _52.SnapshotIAVLItem): _52.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _52.SnapshotIAVLItemAminoMsg): _52.SnapshotIAVLItem;
                    toAminoMsg(message: _52.SnapshotIAVLItem): _52.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _52.SnapshotIAVLItemProtoMsg): _52.SnapshotIAVLItem;
                    toProto(message: _52.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _52.SnapshotIAVLItem): _52.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _52.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_52.SnapshotExtensionMeta>): _52.SnapshotExtensionMeta;
                    fromAmino(object: _52.SnapshotExtensionMetaAmino): _52.SnapshotExtensionMeta;
                    toAmino(message: _52.SnapshotExtensionMeta): _52.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _52.SnapshotExtensionMetaAminoMsg): _52.SnapshotExtensionMeta;
                    toAminoMsg(message: _52.SnapshotExtensionMeta): _52.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _52.SnapshotExtensionMetaProtoMsg): _52.SnapshotExtensionMeta;
                    toProto(message: _52.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _52.SnapshotExtensionMeta): _52.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _52.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_52.SnapshotExtensionPayload>): _52.SnapshotExtensionPayload;
                    fromAmino(object: _52.SnapshotExtensionPayloadAmino): _52.SnapshotExtensionPayload;
                    toAmino(message: _52.SnapshotExtensionPayload): _52.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _52.SnapshotExtensionPayloadAminoMsg): _52.SnapshotExtensionPayload;
                    toAminoMsg(message: _52.SnapshotExtensionPayload): _52.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _52.SnapshotExtensionPayloadProtoMsg): _52.SnapshotExtensionPayload;
                    toProto(message: _52.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _52.SnapshotExtensionPayload): _52.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _52.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SnapshotKVItem;
                    fromPartial(object: Partial<_52.SnapshotKVItem>): _52.SnapshotKVItem;
                    fromAmino(object: _52.SnapshotKVItemAmino): _52.SnapshotKVItem;
                    toAmino(message: _52.SnapshotKVItem): _52.SnapshotKVItemAmino;
                    fromAminoMsg(object: _52.SnapshotKVItemAminoMsg): _52.SnapshotKVItem;
                    toAminoMsg(message: _52.SnapshotKVItem): _52.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _52.SnapshotKVItemProtoMsg): _52.SnapshotKVItem;
                    toProto(message: _52.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _52.SnapshotKVItem): _52.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _52.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SnapshotSchema;
                    fromPartial(object: Partial<_52.SnapshotSchema>): _52.SnapshotSchema;
                    fromAmino(object: _52.SnapshotSchemaAmino): _52.SnapshotSchema;
                    toAmino(message: _52.SnapshotSchema): _52.SnapshotSchemaAmino;
                    fromAminoMsg(object: _52.SnapshotSchemaAminoMsg): _52.SnapshotSchema;
                    toAminoMsg(message: _52.SnapshotSchema): _52.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _52.SnapshotSchemaProtoMsg): _52.SnapshotSchema;
                    toProto(message: _52.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _52.SnapshotSchema): _52.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _54.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.StoreKVPair;
                    fromPartial(object: Partial<_54.StoreKVPair>): _54.StoreKVPair;
                    fromAmino(object: _54.StoreKVPairAmino): _54.StoreKVPair;
                    toAmino(message: _54.StoreKVPair): _54.StoreKVPairAmino;
                    fromAminoMsg(object: _54.StoreKVPairAminoMsg): _54.StoreKVPair;
                    toAminoMsg(message: _54.StoreKVPair): _54.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _54.StoreKVPairProtoMsg): _54.StoreKVPair;
                    toProto(message: _54.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _54.StoreKVPair): _54.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _54.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.BlockMetadata;
                    fromPartial(object: Partial<_54.BlockMetadata>): _54.BlockMetadata;
                    fromAmino(object: _54.BlockMetadataAmino): _54.BlockMetadata;
                    toAmino(message: _54.BlockMetadata): _54.BlockMetadataAmino;
                    fromAminoMsg(object: _54.BlockMetadataAminoMsg): _54.BlockMetadata;
                    toAminoMsg(message: _54.BlockMetadata): _54.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _54.BlockMetadataProtoMsg): _54.BlockMetadata;
                    toProto(message: _54.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _54.BlockMetadata): _54.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _54.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_54.BlockMetadata_DeliverTx>): _54.BlockMetadata_DeliverTx;
                    fromAmino(object: _54.BlockMetadata_DeliverTxAmino): _54.BlockMetadata_DeliverTx;
                    toAmino(message: _54.BlockMetadata_DeliverTx): _54.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _54.BlockMetadata_DeliverTxAminoMsg): _54.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _54.BlockMetadata_DeliverTx): _54.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _54.BlockMetadata_DeliverTxProtoMsg): _54.BlockMetadata_DeliverTx;
                    toProto(message: _54.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _54.BlockMetadata_DeliverTx): _54.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _53.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.CommitInfo;
                    fromPartial(object: Partial<_53.CommitInfo>): _53.CommitInfo;
                    fromAmino(object: _53.CommitInfoAmino): _53.CommitInfo;
                    toAmino(message: _53.CommitInfo): _53.CommitInfoAmino;
                    fromAminoMsg(object: _53.CommitInfoAminoMsg): _53.CommitInfo;
                    toAminoMsg(message: _53.CommitInfo): _53.CommitInfoAminoMsg;
                    fromProtoMsg(message: _53.CommitInfoProtoMsg): _53.CommitInfo;
                    toProto(message: _53.CommitInfo): Uint8Array;
                    toProtoMsg(message: _53.CommitInfo): _53.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _53.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.StoreInfo;
                    fromPartial(object: Partial<_53.StoreInfo>): _53.StoreInfo;
                    fromAmino(object: _53.StoreInfoAmino): _53.StoreInfo;
                    toAmino(message: _53.StoreInfo): _53.StoreInfoAmino;
                    fromAminoMsg(object: _53.StoreInfoAminoMsg): _53.StoreInfo;
                    toAminoMsg(message: _53.StoreInfo): _53.StoreInfoAminoMsg;
                    fromProtoMsg(message: _53.StoreInfoProtoMsg): _53.StoreInfo;
                    toProto(message: _53.StoreInfo): Uint8Array;
                    toProtoMsg(message: _53.StoreInfo): _53.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _53.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.CommitID;
                    fromPartial(object: Partial<_53.CommitID>): _53.CommitID;
                    fromAmino(object: _53.CommitIDAmino): _53.CommitID;
                    toAmino(message: _53.CommitID): _53.CommitIDAmino;
                    fromAminoMsg(object: _53.CommitIDAminoMsg): _53.CommitID;
                    toAminoMsg(message: _53.CommitID): _53.CommitIDAminoMsg;
                    fromProtoMsg(message: _53.CommitIDProtoMsg): _53.CommitID;
                    toProto(message: _53.CommitID): Uint8Array;
                    toProtoMsg(message: _53.CommitID): _53.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _255.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _55.GetNodeInfoRequest): Promise<_55.GetNodeInfoResponse>;
                    getSyncing(request?: _55.GetSyncingRequest): Promise<_55.GetSyncingResponse>;
                    getLatestBlock(request?: _55.GetLatestBlockRequest): Promise<_55.GetLatestBlockResponse>;
                    getBlockByHeight(request: _55.GetBlockByHeightRequest): Promise<_55.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _55.GetLatestValidatorSetRequest): Promise<_55.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _55.GetValidatorSetByHeightRequest): Promise<_55.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _55.ABCIQueryRequest): Promise<_55.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _234.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _56.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Block;
                    fromPartial(object: Partial<_56.Block>): _56.Block;
                    fromAmino(object: _56.BlockAmino): _56.Block;
                    toAmino(message: _56.Block): _56.BlockAmino;
                    fromAminoMsg(object: _56.BlockAminoMsg): _56.Block;
                    toAminoMsg(message: _56.Block): _56.BlockAminoMsg;
                    fromProtoMsg(message: _56.BlockProtoMsg): _56.Block;
                    toProto(message: _56.Block): Uint8Array;
                    toProtoMsg(message: _56.Block): _56.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _56.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.Header;
                    fromPartial(object: Partial<_56.Header>): _56.Header;
                    fromAmino(object: _56.HeaderAmino): _56.Header;
                    toAmino(message: _56.Header): _56.HeaderAmino;
                    fromAminoMsg(object: _56.HeaderAminoMsg): _56.Header;
                    toAminoMsg(message: _56.Header): _56.HeaderAminoMsg;
                    fromProtoMsg(message: _56.HeaderProtoMsg): _56.Header;
                    toProto(message: _56.Header): Uint8Array;
                    toProtoMsg(message: _56.Header): _56.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _55.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_55.GetValidatorSetByHeightRequest>): _55.GetValidatorSetByHeightRequest;
                    fromAmino(object: _55.GetValidatorSetByHeightRequestAmino): _55.GetValidatorSetByHeightRequest;
                    toAmino(message: _55.GetValidatorSetByHeightRequest): _55.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _55.GetValidatorSetByHeightRequestAminoMsg): _55.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _55.GetValidatorSetByHeightRequest): _55.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _55.GetValidatorSetByHeightRequestProtoMsg): _55.GetValidatorSetByHeightRequest;
                    toProto(message: _55.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _55.GetValidatorSetByHeightRequest): _55.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _55.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_55.GetValidatorSetByHeightResponse>): _55.GetValidatorSetByHeightResponse;
                    fromAmino(object: _55.GetValidatorSetByHeightResponseAmino): _55.GetValidatorSetByHeightResponse;
                    toAmino(message: _55.GetValidatorSetByHeightResponse): _55.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _55.GetValidatorSetByHeightResponseAminoMsg): _55.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _55.GetValidatorSetByHeightResponse): _55.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _55.GetValidatorSetByHeightResponseProtoMsg): _55.GetValidatorSetByHeightResponse;
                    toProto(message: _55.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _55.GetValidatorSetByHeightResponse): _55.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _55.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_55.GetLatestValidatorSetRequest>): _55.GetLatestValidatorSetRequest;
                    fromAmino(object: _55.GetLatestValidatorSetRequestAmino): _55.GetLatestValidatorSetRequest;
                    toAmino(message: _55.GetLatestValidatorSetRequest): _55.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _55.GetLatestValidatorSetRequestAminoMsg): _55.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _55.GetLatestValidatorSetRequest): _55.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _55.GetLatestValidatorSetRequestProtoMsg): _55.GetLatestValidatorSetRequest;
                    toProto(message: _55.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _55.GetLatestValidatorSetRequest): _55.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _55.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_55.GetLatestValidatorSetResponse>): _55.GetLatestValidatorSetResponse;
                    fromAmino(object: _55.GetLatestValidatorSetResponseAmino): _55.GetLatestValidatorSetResponse;
                    toAmino(message: _55.GetLatestValidatorSetResponse): _55.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _55.GetLatestValidatorSetResponseAminoMsg): _55.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _55.GetLatestValidatorSetResponse): _55.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _55.GetLatestValidatorSetResponseProtoMsg): _55.GetLatestValidatorSetResponse;
                    toProto(message: _55.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _55.GetLatestValidatorSetResponse): _55.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _55.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Validator;
                    fromPartial(object: Partial<_55.Validator>): _55.Validator;
                    fromAmino(object: _55.ValidatorAmino): _55.Validator;
                    toAmino(message: _55.Validator): _55.ValidatorAmino;
                    fromAminoMsg(object: _55.ValidatorAminoMsg): _55.Validator;
                    toAminoMsg(message: _55.Validator): _55.ValidatorAminoMsg;
                    fromProtoMsg(message: _55.ValidatorProtoMsg): _55.Validator;
                    toProto(message: _55.Validator): Uint8Array;
                    toProtoMsg(message: _55.Validator): _55.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _55.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_55.GetBlockByHeightRequest>): _55.GetBlockByHeightRequest;
                    fromAmino(object: _55.GetBlockByHeightRequestAmino): _55.GetBlockByHeightRequest;
                    toAmino(message: _55.GetBlockByHeightRequest): _55.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _55.GetBlockByHeightRequestAminoMsg): _55.GetBlockByHeightRequest;
                    toAminoMsg(message: _55.GetBlockByHeightRequest): _55.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _55.GetBlockByHeightRequestProtoMsg): _55.GetBlockByHeightRequest;
                    toProto(message: _55.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _55.GetBlockByHeightRequest): _55.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _55.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_55.GetBlockByHeightResponse>): _55.GetBlockByHeightResponse;
                    fromAmino(object: _55.GetBlockByHeightResponseAmino): _55.GetBlockByHeightResponse;
                    toAmino(message: _55.GetBlockByHeightResponse): _55.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _55.GetBlockByHeightResponseAminoMsg): _55.GetBlockByHeightResponse;
                    toAminoMsg(message: _55.GetBlockByHeightResponse): _55.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _55.GetBlockByHeightResponseProtoMsg): _55.GetBlockByHeightResponse;
                    toProto(message: _55.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _55.GetBlockByHeightResponse): _55.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _55.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetLatestBlockRequest;
                    fromPartial(_: Partial<_55.GetLatestBlockRequest>): _55.GetLatestBlockRequest;
                    fromAmino(_: _55.GetLatestBlockRequestAmino): _55.GetLatestBlockRequest;
                    toAmino(_: _55.GetLatestBlockRequest): _55.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _55.GetLatestBlockRequestAminoMsg): _55.GetLatestBlockRequest;
                    toAminoMsg(message: _55.GetLatestBlockRequest): _55.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _55.GetLatestBlockRequestProtoMsg): _55.GetLatestBlockRequest;
                    toProto(message: _55.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _55.GetLatestBlockRequest): _55.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _55.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetLatestBlockResponse;
                    fromPartial(object: Partial<_55.GetLatestBlockResponse>): _55.GetLatestBlockResponse;
                    fromAmino(object: _55.GetLatestBlockResponseAmino): _55.GetLatestBlockResponse;
                    toAmino(message: _55.GetLatestBlockResponse): _55.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _55.GetLatestBlockResponseAminoMsg): _55.GetLatestBlockResponse;
                    toAminoMsg(message: _55.GetLatestBlockResponse): _55.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _55.GetLatestBlockResponseProtoMsg): _55.GetLatestBlockResponse;
                    toProto(message: _55.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _55.GetLatestBlockResponse): _55.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _55.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetSyncingRequest;
                    fromPartial(_: Partial<_55.GetSyncingRequest>): _55.GetSyncingRequest;
                    fromAmino(_: _55.GetSyncingRequestAmino): _55.GetSyncingRequest;
                    toAmino(_: _55.GetSyncingRequest): _55.GetSyncingRequestAmino;
                    fromAminoMsg(object: _55.GetSyncingRequestAminoMsg): _55.GetSyncingRequest;
                    toAminoMsg(message: _55.GetSyncingRequest): _55.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _55.GetSyncingRequestProtoMsg): _55.GetSyncingRequest;
                    toProto(message: _55.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _55.GetSyncingRequest): _55.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _55.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetSyncingResponse;
                    fromPartial(object: Partial<_55.GetSyncingResponse>): _55.GetSyncingResponse;
                    fromAmino(object: _55.GetSyncingResponseAmino): _55.GetSyncingResponse;
                    toAmino(message: _55.GetSyncingResponse): _55.GetSyncingResponseAmino;
                    fromAminoMsg(object: _55.GetSyncingResponseAminoMsg): _55.GetSyncingResponse;
                    toAminoMsg(message: _55.GetSyncingResponse): _55.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _55.GetSyncingResponseProtoMsg): _55.GetSyncingResponse;
                    toProto(message: _55.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _55.GetSyncingResponse): _55.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _55.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.GetNodeInfoRequest;
                    fromPartial(_: Partial<_55.GetNodeInfoRequest>): _55.GetNodeInfoRequest;
                    fromAmino(_: _55.GetNodeInfoRequestAmino): _55.GetNodeInfoRequest;
                    toAmino(_: _55.GetNodeInfoRequest): _55.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _55.GetNodeInfoRequestAminoMsg): _55.GetNodeInfoRequest;
                    toAminoMsg(message: _55.GetNodeInfoRequest): _55.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _55.GetNodeInfoRequestProtoMsg): _55.GetNodeInfoRequest;
                    toProto(message: _55.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _55.GetNodeInfoRequest): _55.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _55.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.GetNodeInfoResponse;
                    fromPartial(object: Partial<_55.GetNodeInfoResponse>): _55.GetNodeInfoResponse;
                    fromAmino(object: _55.GetNodeInfoResponseAmino): _55.GetNodeInfoResponse;
                    toAmino(message: _55.GetNodeInfoResponse): _55.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _55.GetNodeInfoResponseAminoMsg): _55.GetNodeInfoResponse;
                    toAminoMsg(message: _55.GetNodeInfoResponse): _55.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _55.GetNodeInfoResponseProtoMsg): _55.GetNodeInfoResponse;
                    toProto(message: _55.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _55.GetNodeInfoResponse): _55.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _55.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.VersionInfo;
                    fromPartial(object: Partial<_55.VersionInfo>): _55.VersionInfo;
                    fromAmino(object: _55.VersionInfoAmino): _55.VersionInfo;
                    toAmino(message: _55.VersionInfo): _55.VersionInfoAmino;
                    fromAminoMsg(object: _55.VersionInfoAminoMsg): _55.VersionInfo;
                    toAminoMsg(message: _55.VersionInfo): _55.VersionInfoAminoMsg;
                    fromProtoMsg(message: _55.VersionInfoProtoMsg): _55.VersionInfo;
                    toProto(message: _55.VersionInfo): Uint8Array;
                    toProtoMsg(message: _55.VersionInfo): _55.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _55.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.ABCIQueryRequest;
                    fromPartial(object: Partial<_55.ABCIQueryRequest>): _55.ABCIQueryRequest;
                    fromAmino(object: _55.ABCIQueryRequestAmino): _55.ABCIQueryRequest;
                    toAmino(message: _55.ABCIQueryRequest): _55.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _55.ABCIQueryRequestAminoMsg): _55.ABCIQueryRequest;
                    toAminoMsg(message: _55.ABCIQueryRequest): _55.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _55.ABCIQueryRequestProtoMsg): _55.ABCIQueryRequest;
                    toProto(message: _55.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _55.ABCIQueryRequest): _55.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _55.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.ABCIQueryResponse;
                    fromPartial(object: Partial<_55.ABCIQueryResponse>): _55.ABCIQueryResponse;
                    fromAmino(object: _55.ABCIQueryResponseAmino): _55.ABCIQueryResponse;
                    toAmino(message: _55.ABCIQueryResponse): _55.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _55.ABCIQueryResponseAminoMsg): _55.ABCIQueryResponse;
                    toAminoMsg(message: _55.ABCIQueryResponse): _55.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _55.ABCIQueryResponseProtoMsg): _55.ABCIQueryResponse;
                    toProto(message: _55.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _55.ABCIQueryResponse): _55.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _55.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.ProofOp;
                    fromPartial(object: Partial<_55.ProofOp>): _55.ProofOp;
                    fromAmino(object: _55.ProofOpAmino): _55.ProofOp;
                    toAmino(message: _55.ProofOp): _55.ProofOpAmino;
                    fromAminoMsg(object: _55.ProofOpAminoMsg): _55.ProofOp;
                    toAminoMsg(message: _55.ProofOp): _55.ProofOpAminoMsg;
                    fromProtoMsg(message: _55.ProofOpProtoMsg): _55.ProofOp;
                    toProto(message: _55.ProofOp): Uint8Array;
                    toProtoMsg(message: _55.ProofOp): _55.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _55.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.ProofOps;
                    fromPartial(object: Partial<_55.ProofOps>): _55.ProofOps;
                    fromAmino(object: _55.ProofOpsAmino): _55.ProofOps;
                    toAmino(message: _55.ProofOps): _55.ProofOpsAmino;
                    fromAminoMsg(object: _55.ProofOpsAminoMsg): _55.ProofOps;
                    toAminoMsg(message: _55.ProofOps): _55.ProofOpsAminoMsg;
                    fromProtoMsg(message: _55.ProofOpsProtoMsg): _55.ProofOps;
                    toProto(message: _55.ProofOps): Uint8Array;
                    toProtoMsg(message: _55.ProofOps): _55.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _57.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.Coin;
                fromPartial(object: Partial<_57.Coin>): _57.Coin;
                fromAmino(object: _57.CoinAmino): _57.Coin;
                toAmino(message: _57.Coin): _57.CoinAmino;
                fromAminoMsg(object: _57.CoinAminoMsg): _57.Coin;
                toAminoMsg(message: _57.Coin): _57.CoinAminoMsg;
                fromProtoMsg(message: _57.CoinProtoMsg): _57.Coin;
                toProto(message: _57.Coin): Uint8Array;
                toProtoMsg(message: _57.Coin): _57.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _57.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DecCoin;
                fromPartial(object: Partial<_57.DecCoin>): _57.DecCoin;
                fromAmino(object: _57.DecCoinAmino): _57.DecCoin;
                toAmino(message: _57.DecCoin): _57.DecCoinAmino;
                fromAminoMsg(object: _57.DecCoinAminoMsg): _57.DecCoin;
                toAminoMsg(message: _57.DecCoin): _57.DecCoinAminoMsg;
                fromProtoMsg(message: _57.DecCoinProtoMsg): _57.DecCoin;
                toProto(message: _57.DecCoin): Uint8Array;
                toProtoMsg(message: _57.DecCoin): _57.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _57.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.IntProto;
                fromPartial(object: Partial<_57.IntProto>): _57.IntProto;
                fromAmino(object: _57.IntProtoAmino): _57.IntProto;
                toAmino(message: _57.IntProto): _57.IntProtoAmino;
                fromAminoMsg(object: _57.IntProtoAminoMsg): _57.IntProto;
                toAminoMsg(message: _57.IntProto): _57.IntProtoAminoMsg;
                fromProtoMsg(message: _57.IntProtoProtoMsg): _57.IntProto;
                toProto(message: _57.IntProto): Uint8Array;
                toProtoMsg(message: _57.IntProto): _57.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _57.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DecProto;
                fromPartial(object: Partial<_57.DecProto>): _57.DecProto;
                fromAmino(object: _57.DecProtoAmino): _57.DecProto;
                toAmino(message: _57.DecProto): _57.DecProtoAmino;
                fromAminoMsg(object: _57.DecProtoAminoMsg): _57.DecProto;
                toAminoMsg(message: _57.DecProto): _57.DecProtoAminoMsg;
                fromProtoMsg(message: _57.DecProtoProtoMsg): _57.DecProto;
                toProto(message: _57.DecProto): Uint8Array;
                toProtoMsg(message: _57.DecProto): _57.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _58.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.Module;
                    fromPartial(object: Partial<_58.Module>): _58.Module;
                    fromAmino(object: _58.ModuleAmino): _58.Module;
                    toAmino(message: _58.Module): _58.ModuleAmino;
                    fromAminoMsg(object: _58.ModuleAminoMsg): _58.Module;
                    toAminoMsg(message: _58.Module): _58.ModuleAminoMsg;
                    fromProtoMsg(message: _58.ModuleProtoMsg): _58.Module;
                    toProto(message: _58.Module): Uint8Array;
                    toProtoMsg(message: _58.Module): _58.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _60.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenesisOwners;
                fromPartial(object: Partial<_60.GenesisOwners>): _60.GenesisOwners;
                fromAmino(object: _60.GenesisOwnersAmino): _60.GenesisOwners;
                toAmino(message: _60.GenesisOwners): _60.GenesisOwnersAmino;
                fromAminoMsg(object: _60.GenesisOwnersAminoMsg): _60.GenesisOwners;
                toAminoMsg(message: _60.GenesisOwners): _60.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _60.GenesisOwnersProtoMsg): _60.GenesisOwners;
                toProto(message: _60.GenesisOwners): Uint8Array;
                toProtoMsg(message: _60.GenesisOwners): _60.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                toProto(message: _60.GenesisState): Uint8Array;
                toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _59.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Capability;
                fromPartial(object: Partial<_59.Capability>): _59.Capability;
                fromAmino(object: _59.CapabilityAmino): _59.Capability;
                toAmino(message: _59.Capability): _59.CapabilityAmino;
                fromAminoMsg(object: _59.CapabilityAminoMsg): _59.Capability;
                toAminoMsg(message: _59.Capability): _59.CapabilityAminoMsg;
                fromProtoMsg(message: _59.CapabilityProtoMsg): _59.Capability;
                toProto(message: _59.Capability): Uint8Array;
                toProtoMsg(message: _59.Capability): _59.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _59.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Owner;
                fromPartial(object: Partial<_59.Owner>): _59.Owner;
                fromAmino(object: _59.OwnerAmino): _59.Owner;
                toAmino(message: _59.Owner): _59.OwnerAmino;
                fromAminoMsg(object: _59.OwnerAminoMsg): _59.Owner;
                toAminoMsg(message: _59.Owner): _59.OwnerAminoMsg;
                fromProtoMsg(message: _59.OwnerProtoMsg): _59.Owner;
                toProto(message: _59.Owner): Uint8Array;
                toProtoMsg(message: _59.Owner): _59.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _59.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.CapabilityOwners;
                fromPartial(object: Partial<_59.CapabilityOwners>): _59.CapabilityOwners;
                fromAmino(object: _59.CapabilityOwnersAmino): _59.CapabilityOwners;
                toAmino(message: _59.CapabilityOwners): _59.CapabilityOwnersAmino;
                fromAminoMsg(object: _59.CapabilityOwnersAminoMsg): _59.CapabilityOwners;
                toAminoMsg(message: _59.CapabilityOwners): _59.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _59.CapabilityOwnersProtoMsg): _59.CapabilityOwners;
                toProto(message: _59.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _59.CapabilityOwners): _59.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _61.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.Module;
                    fromPartial(object: Partial<_61.Module>): _61.Module;
                    fromAmino(object: _61.ModuleAmino): _61.Module;
                    toAmino(message: _61.Module): _61.ModuleAmino;
                    fromAminoMsg(object: _61.ModuleAminoMsg): _61.Module;
                    toAminoMsg(message: _61.Module): _61.ModuleAminoMsg;
                    fromProtoMsg(message: _61.ModuleProtoMsg): _61.Module;
                    toProto(message: _61.Module): Uint8Array;
                    toProtoMsg(message: _61.Module): _61.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _274.MsgClientImpl;
            QueryClientImpl: typeof _256.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _235.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateParams) => _63.MsgUpdateParamsAmino;
                    fromAmino: (object: _63.MsgUpdateParamsAmino) => _63.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _63.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgUpdateParams;
                fromPartial(object: Partial<_63.MsgUpdateParams>): _63.MsgUpdateParams;
                fromAmino(object: _63.MsgUpdateParamsAmino): _63.MsgUpdateParams;
                toAmino(message: _63.MsgUpdateParams): _63.MsgUpdateParamsAmino;
                fromAminoMsg(object: _63.MsgUpdateParamsAminoMsg): _63.MsgUpdateParams;
                toAminoMsg(message: _63.MsgUpdateParams): _63.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateParamsProtoMsg): _63.MsgUpdateParams;
                toProto(message: _63.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateParams): _63.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_63.MsgUpdateParamsResponse>): _63.MsgUpdateParamsResponse;
                fromAmino(_: _63.MsgUpdateParamsResponseAmino): _63.MsgUpdateParamsResponse;
                toAmino(_: _63.MsgUpdateParamsResponse): _63.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateParamsResponseAminoMsg): _63.MsgUpdateParamsResponse;
                toAminoMsg(message: _63.MsgUpdateParamsResponse): _63.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateParamsResponseProtoMsg): _63.MsgUpdateParamsResponse;
                toProto(message: _63.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateParamsResponse): _63.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _62.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.QueryParamsRequest;
                fromPartial(_: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
                fromAmino(_: _62.QueryParamsRequestAmino): _62.QueryParamsRequest;
                toAmino(_: _62.QueryParamsRequest): _62.QueryParamsRequestAmino;
                fromAminoMsg(object: _62.QueryParamsRequestAminoMsg): _62.QueryParamsRequest;
                toAminoMsg(message: _62.QueryParamsRequest): _62.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryParamsRequestProtoMsg): _62.QueryParamsRequest;
                toProto(message: _62.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryParamsRequest): _62.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _62.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryParamsResponse;
                fromPartial(object: Partial<_62.QueryParamsResponse>): _62.QueryParamsResponse;
                fromAmino(object: _62.QueryParamsResponseAmino): _62.QueryParamsResponse;
                toAmino(message: _62.QueryParamsResponse): _62.QueryParamsResponseAmino;
                fromAminoMsg(object: _62.QueryParamsResponseAminoMsg): _62.QueryParamsResponse;
                toAminoMsg(message: _62.QueryParamsResponse): _62.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryParamsResponseProtoMsg): _62.QueryParamsResponse;
                toProto(message: _62.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryParamsResponse): _62.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _64.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.Module;
                    fromPartial(object: Partial<_64.Module>): _64.Module;
                    fromAmino(object: _64.ModuleAmino): _64.Module;
                    toAmino(message: _64.Module): _64.ModuleAmino;
                    fromAminoMsg(object: _64.ModuleAminoMsg): _64.Module;
                    toAminoMsg(message: _64.Module): _64.ModuleAminoMsg;
                    fromProtoMsg(message: _64.ModuleProtoMsg): _64.Module;
                    toProto(message: _64.Module): Uint8Array;
                    toProtoMsg(message: _64.Module): _64.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _66.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _66.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _66.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _66.MsgVerifyInvariant;
                    };
                    updateParams(value: _66.MsgUpdateParams): {
                        typeUrl: string;
                        value: _66.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _66.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _66.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _66.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _66.MsgVerifyInvariant;
                    };
                    updateParams(value: _66.MsgUpdateParams): {
                        typeUrl: string;
                        value: _66.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _66.MsgVerifyInvariant) => _66.MsgVerifyInvariantAmino;
                    fromAmino: (object: _66.MsgVerifyInvariantAmino) => _66.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _66.MsgUpdateParams) => _66.MsgUpdateParamsAmino;
                    fromAmino: (object: _66.MsgUpdateParamsAmino) => _66.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _66.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgVerifyInvariant;
                fromPartial(object: Partial<_66.MsgVerifyInvariant>): _66.MsgVerifyInvariant;
                fromAmino(object: _66.MsgVerifyInvariantAmino): _66.MsgVerifyInvariant;
                toAmino(message: _66.MsgVerifyInvariant): _66.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _66.MsgVerifyInvariantAminoMsg): _66.MsgVerifyInvariant;
                toAminoMsg(message: _66.MsgVerifyInvariant): _66.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _66.MsgVerifyInvariantProtoMsg): _66.MsgVerifyInvariant;
                toProto(message: _66.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _66.MsgVerifyInvariant): _66.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _66.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_66.MsgVerifyInvariantResponse>): _66.MsgVerifyInvariantResponse;
                fromAmino(_: _66.MsgVerifyInvariantResponseAmino): _66.MsgVerifyInvariantResponse;
                toAmino(_: _66.MsgVerifyInvariantResponse): _66.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _66.MsgVerifyInvariantResponseAminoMsg): _66.MsgVerifyInvariantResponse;
                toAminoMsg(message: _66.MsgVerifyInvariantResponse): _66.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _66.MsgVerifyInvariantResponseProtoMsg): _66.MsgVerifyInvariantResponse;
                toProto(message: _66.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _66.MsgVerifyInvariantResponse): _66.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _66.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgUpdateParams;
                fromPartial(object: Partial<_66.MsgUpdateParams>): _66.MsgUpdateParams;
                fromAmino(object: _66.MsgUpdateParamsAmino): _66.MsgUpdateParams;
                toAmino(message: _66.MsgUpdateParams): _66.MsgUpdateParamsAmino;
                fromAminoMsg(object: _66.MsgUpdateParamsAminoMsg): _66.MsgUpdateParams;
                toAminoMsg(message: _66.MsgUpdateParams): _66.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateParamsProtoMsg): _66.MsgUpdateParams;
                toProto(message: _66.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateParams): _66.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _66.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_66.MsgUpdateParamsResponse>): _66.MsgUpdateParamsResponse;
                fromAmino(_: _66.MsgUpdateParamsResponseAmino): _66.MsgUpdateParamsResponse;
                toAmino(_: _66.MsgUpdateParamsResponse): _66.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _66.MsgUpdateParamsResponseAminoMsg): _66.MsgUpdateParamsResponse;
                toAminoMsg(message: _66.MsgUpdateParamsResponse): _66.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _66.MsgUpdateParamsResponseProtoMsg): _66.MsgUpdateParamsResponse;
                toProto(message: _66.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _66.MsgUpdateParamsResponse): _66.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _65.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
                fromAmino(object: _65.GenesisStateAmino): _65.GenesisState;
                toAmino(message: _65.GenesisState): _65.GenesisStateAmino;
                fromAminoMsg(object: _65.GenesisStateAminoMsg): _65.GenesisState;
                toAminoMsg(message: _65.GenesisState): _65.GenesisStateAminoMsg;
                fromProtoMsg(message: _65.GenesisStateProtoMsg): _65.GenesisState;
                toProto(message: _65.GenesisState): Uint8Array;
                toProtoMsg(message: _65.GenesisState): _65.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _67.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.PubKey;
                fromPartial(object: Partial<_67.PubKey>): _67.PubKey;
                fromAmino(object: _67.PubKeyAmino): _67.PubKey;
                toAmino(message: _67.PubKey): _67.PubKeyAmino;
                fromAminoMsg(object: _67.PubKeyAminoMsg): _67.PubKey;
                toAminoMsg(message: _67.PubKey): _67.PubKeyAminoMsg;
                fromProtoMsg(message: _67.PubKeyProtoMsg): _67.PubKey;
                toProto(message: _67.PubKey): Uint8Array;
                toProtoMsg(message: _67.PubKey): _67.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _67.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.PrivKey;
                fromPartial(object: Partial<_67.PrivKey>): _67.PrivKey;
                fromAmino(object: _67.PrivKeyAmino): _67.PrivKey;
                toAmino(message: _67.PrivKey): _67.PrivKeyAmino;
                fromAminoMsg(object: _67.PrivKeyAminoMsg): _67.PrivKey;
                toAminoMsg(message: _67.PrivKey): _67.PrivKeyAminoMsg;
                fromProtoMsg(message: _67.PrivKeyProtoMsg): _67.PrivKey;
                toProto(message: _67.PrivKey): Uint8Array;
                toProtoMsg(message: _67.PrivKey): _67.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _68.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.BIP44Params;
                    fromPartial(object: Partial<_68.BIP44Params>): _68.BIP44Params;
                    fromAmino(object: _68.BIP44ParamsAmino): _68.BIP44Params;
                    toAmino(message: _68.BIP44Params): _68.BIP44ParamsAmino;
                    fromAminoMsg(object: _68.BIP44ParamsAminoMsg): _68.BIP44Params;
                    toAminoMsg(message: _68.BIP44Params): _68.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _68.BIP44ParamsProtoMsg): _68.BIP44Params;
                    toProto(message: _68.BIP44Params): Uint8Array;
                    toProtoMsg(message: _68.BIP44Params): _68.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _69.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Record;
                    fromPartial(object: Partial<_69.Record>): _69.Record;
                    fromAmino(object: _69.RecordAmino): _69.Record;
                    toAmino(message: _69.Record): _69.RecordAmino;
                    fromAminoMsg(object: _69.RecordAminoMsg): _69.Record;
                    toAminoMsg(message: _69.Record): _69.RecordAminoMsg;
                    fromProtoMsg(message: _69.RecordProtoMsg): _69.Record;
                    toProto(message: _69.Record): Uint8Array;
                    toProtoMsg(message: _69.Record): _69.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _69.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Record_Local;
                    fromPartial(object: Partial<_69.Record_Local>): _69.Record_Local;
                    fromAmino(object: _69.Record_LocalAmino): _69.Record_Local;
                    toAmino(message: _69.Record_Local): _69.Record_LocalAmino;
                    fromAminoMsg(object: _69.Record_LocalAminoMsg): _69.Record_Local;
                    toAminoMsg(message: _69.Record_Local): _69.Record_LocalAminoMsg;
                    fromProtoMsg(message: _69.Record_LocalProtoMsg): _69.Record_Local;
                    toProto(message: _69.Record_Local): Uint8Array;
                    toProtoMsg(message: _69.Record_Local): _69.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _69.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Record_Ledger;
                    fromPartial(object: Partial<_69.Record_Ledger>): _69.Record_Ledger;
                    fromAmino(object: _69.Record_LedgerAmino): _69.Record_Ledger;
                    toAmino(message: _69.Record_Ledger): _69.Record_LedgerAmino;
                    fromAminoMsg(object: _69.Record_LedgerAminoMsg): _69.Record_Ledger;
                    toAminoMsg(message: _69.Record_Ledger): _69.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _69.Record_LedgerProtoMsg): _69.Record_Ledger;
                    toProto(message: _69.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _69.Record_Ledger): _69.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _69.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _69.Record_Multi;
                    fromPartial(_: Partial<_69.Record_Multi>): _69.Record_Multi;
                    fromAmino(_: _69.Record_MultiAmino): _69.Record_Multi;
                    toAmino(_: _69.Record_Multi): _69.Record_MultiAmino;
                    fromAminoMsg(object: _69.Record_MultiAminoMsg): _69.Record_Multi;
                    toAminoMsg(message: _69.Record_Multi): _69.Record_MultiAminoMsg;
                    fromProtoMsg(message: _69.Record_MultiProtoMsg): _69.Record_Multi;
                    toProto(message: _69.Record_Multi): Uint8Array;
                    toProtoMsg(message: _69.Record_Multi): _69.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _69.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _69.Record_Offline;
                    fromPartial(_: Partial<_69.Record_Offline>): _69.Record_Offline;
                    fromAmino(_: _69.Record_OfflineAmino): _69.Record_Offline;
                    toAmino(_: _69.Record_Offline): _69.Record_OfflineAmino;
                    fromAminoMsg(object: _69.Record_OfflineAminoMsg): _69.Record_Offline;
                    toAminoMsg(message: _69.Record_Offline): _69.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _69.Record_OfflineProtoMsg): _69.Record_Offline;
                    toProto(message: _69.Record_Offline): Uint8Array;
                    toProtoMsg(message: _69.Record_Offline): _69.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _70.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.LegacyAminoPubKey;
                fromPartial(object: Partial<_70.LegacyAminoPubKey>): _70.LegacyAminoPubKey;
                fromAmino(object: _70.LegacyAminoPubKeyAmino): _70.LegacyAminoPubKey;
                toAmino(message: _70.LegacyAminoPubKey): _70.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _70.LegacyAminoPubKeyAminoMsg): _70.LegacyAminoPubKey;
                toAminoMsg(message: _70.LegacyAminoPubKey): _70.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _70.LegacyAminoPubKeyProtoMsg): _70.LegacyAminoPubKey;
                toProto(message: _70.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _70.LegacyAminoPubKey): _70.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _71.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.PubKey;
                fromPartial(object: Partial<_71.PubKey>): _71.PubKey;
                fromAmino(object: _71.PubKeyAmino): _71.PubKey;
                toAmino(message: _71.PubKey): _71.PubKeyAmino;
                fromAminoMsg(object: _71.PubKeyAminoMsg): _71.PubKey;
                toAminoMsg(message: _71.PubKey): _71.PubKeyAminoMsg;
                fromProtoMsg(message: _71.PubKeyProtoMsg): _71.PubKey;
                toProto(message: _71.PubKey): Uint8Array;
                toProtoMsg(message: _71.PubKey): _71.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _71.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.PrivKey;
                fromPartial(object: Partial<_71.PrivKey>): _71.PrivKey;
                fromAmino(object: _71.PrivKeyAmino): _71.PrivKey;
                toAmino(message: _71.PrivKey): _71.PrivKeyAmino;
                fromAminoMsg(object: _71.PrivKeyAminoMsg): _71.PrivKey;
                toAminoMsg(message: _71.PrivKey): _71.PrivKeyAminoMsg;
                fromProtoMsg(message: _71.PrivKeyProtoMsg): _71.PrivKey;
                toProto(message: _71.PrivKey): Uint8Array;
                toProtoMsg(message: _71.PrivKey): _71.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _72.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.PubKey;
                fromPartial(object: Partial<_72.PubKey>): _72.PubKey;
                fromAmino(object: _72.PubKeyAmino): _72.PubKey;
                toAmino(message: _72.PubKey): _72.PubKeyAmino;
                fromAminoMsg(object: _72.PubKeyAminoMsg): _72.PubKey;
                toAminoMsg(message: _72.PubKey): _72.PubKeyAminoMsg;
                fromProtoMsg(message: _72.PubKeyProtoMsg): _72.PubKey;
                toProto(message: _72.PubKey): Uint8Array;
                toProtoMsg(message: _72.PubKey): _72.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _72.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.PrivKey;
                fromPartial(object: Partial<_72.PrivKey>): _72.PrivKey;
                fromAmino(object: _72.PrivKeyAmino): _72.PrivKey;
                toAmino(message: _72.PrivKey): _72.PrivKeyAmino;
                fromAminoMsg(object: _72.PrivKeyAminoMsg): _72.PrivKey;
                toAminoMsg(message: _72.PrivKey): _72.PrivKeyAminoMsg;
                fromProtoMsg(message: _72.PrivKeyProtoMsg): _72.PrivKey;
                toProto(message: _72.PrivKey): Uint8Array;
                toProtoMsg(message: _72.PrivKey): _72.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
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
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _257.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                validatorDistributionInfo(request: _76.QueryValidatorDistributionInfoRequest): Promise<_76.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _76.QueryValidatorOutstandingRewardsRequest): Promise<_76.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _76.QueryValidatorCommissionRequest): Promise<_76.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _76.QueryValidatorSlashesRequest): Promise<_76.QueryValidatorSlashesResponse>;
                delegationRewards(request: _76.QueryDelegationRewardsRequest): Promise<_76.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _76.QueryDelegationTotalRewardsRequest): Promise<_76.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _76.QueryDelegatorValidatorsRequest): Promise<_76.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _76.QueryDelegatorWithdrawAddressRequest): Promise<_76.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _76.QueryCommunityPoolRequest): Promise<_76.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _236.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _77.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _77.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _77.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _77.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _77.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _77.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _77.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _77.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _77.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _77.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _77.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _77.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _77.MsgFundCommunityPool;
                    };
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _77.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _77.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _77.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _77.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _77.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _77.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _77.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _77.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _77.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _77.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _77.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _77.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _77.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _77.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _77.MsgFundCommunityPool;
                    };
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _77.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _77.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _77.MsgSetWithdrawAddress) => _77.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _77.MsgSetWithdrawAddressAmino) => _77.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _77.MsgWithdrawDelegatorReward) => _77.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _77.MsgWithdrawDelegatorRewardAmino) => _77.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _77.MsgWithdrawValidatorCommission) => _77.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _77.MsgWithdrawValidatorCommissionAmino) => _77.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _77.MsgFundCommunityPool) => _77.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _77.MsgFundCommunityPoolAmino) => _77.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateParams) => _77.MsgUpdateParamsAmino;
                    fromAmino: (object: _77.MsgUpdateParamsAmino) => _77.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCommunityPoolSpend) => _77.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _77.MsgCommunityPoolSpendAmino) => _77.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _77.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_77.MsgSetWithdrawAddress>): _77.MsgSetWithdrawAddress;
                fromAmino(object: _77.MsgSetWithdrawAddressAmino): _77.MsgSetWithdrawAddress;
                toAmino(message: _77.MsgSetWithdrawAddress): _77.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _77.MsgSetWithdrawAddressAminoMsg): _77.MsgSetWithdrawAddress;
                toAminoMsg(message: _77.MsgSetWithdrawAddress): _77.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _77.MsgSetWithdrawAddressProtoMsg): _77.MsgSetWithdrawAddress;
                toProto(message: _77.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _77.MsgSetWithdrawAddress): _77.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _77.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_77.MsgSetWithdrawAddressResponse>): _77.MsgSetWithdrawAddressResponse;
                fromAmino(_: _77.MsgSetWithdrawAddressResponseAmino): _77.MsgSetWithdrawAddressResponse;
                toAmino(_: _77.MsgSetWithdrawAddressResponse): _77.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _77.MsgSetWithdrawAddressResponseAminoMsg): _77.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _77.MsgSetWithdrawAddressResponse): _77.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _77.MsgSetWithdrawAddressResponseProtoMsg): _77.MsgSetWithdrawAddressResponse;
                toProto(message: _77.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _77.MsgSetWithdrawAddressResponse): _77.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _77.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_77.MsgWithdrawDelegatorReward>): _77.MsgWithdrawDelegatorReward;
                fromAmino(object: _77.MsgWithdrawDelegatorRewardAmino): _77.MsgWithdrawDelegatorReward;
                toAmino(message: _77.MsgWithdrawDelegatorReward): _77.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _77.MsgWithdrawDelegatorRewardAminoMsg): _77.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _77.MsgWithdrawDelegatorReward): _77.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _77.MsgWithdrawDelegatorRewardProtoMsg): _77.MsgWithdrawDelegatorReward;
                toProto(message: _77.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _77.MsgWithdrawDelegatorReward): _77.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _77.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_77.MsgWithdrawDelegatorRewardResponse>): _77.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _77.MsgWithdrawDelegatorRewardResponseAmino): _77.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _77.MsgWithdrawDelegatorRewardResponse): _77.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _77.MsgWithdrawDelegatorRewardResponseAminoMsg): _77.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _77.MsgWithdrawDelegatorRewardResponse): _77.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _77.MsgWithdrawDelegatorRewardResponseProtoMsg): _77.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _77.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _77.MsgWithdrawDelegatorRewardResponse): _77.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _77.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_77.MsgWithdrawValidatorCommission>): _77.MsgWithdrawValidatorCommission;
                fromAmino(object: _77.MsgWithdrawValidatorCommissionAmino): _77.MsgWithdrawValidatorCommission;
                toAmino(message: _77.MsgWithdrawValidatorCommission): _77.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _77.MsgWithdrawValidatorCommissionAminoMsg): _77.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _77.MsgWithdrawValidatorCommission): _77.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _77.MsgWithdrawValidatorCommissionProtoMsg): _77.MsgWithdrawValidatorCommission;
                toProto(message: _77.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _77.MsgWithdrawValidatorCommission): _77.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _77.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_77.MsgWithdrawValidatorCommissionResponse>): _77.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _77.MsgWithdrawValidatorCommissionResponseAmino): _77.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _77.MsgWithdrawValidatorCommissionResponse): _77.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _77.MsgWithdrawValidatorCommissionResponseAminoMsg): _77.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _77.MsgWithdrawValidatorCommissionResponse): _77.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _77.MsgWithdrawValidatorCommissionResponseProtoMsg): _77.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _77.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _77.MsgWithdrawValidatorCommissionResponse): _77.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _77.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgFundCommunityPool;
                fromPartial(object: Partial<_77.MsgFundCommunityPool>): _77.MsgFundCommunityPool;
                fromAmino(object: _77.MsgFundCommunityPoolAmino): _77.MsgFundCommunityPool;
                toAmino(message: _77.MsgFundCommunityPool): _77.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _77.MsgFundCommunityPoolAminoMsg): _77.MsgFundCommunityPool;
                toAminoMsg(message: _77.MsgFundCommunityPool): _77.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _77.MsgFundCommunityPoolProtoMsg): _77.MsgFundCommunityPool;
                toProto(message: _77.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _77.MsgFundCommunityPool): _77.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _77.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_77.MsgFundCommunityPoolResponse>): _77.MsgFundCommunityPoolResponse;
                fromAmino(_: _77.MsgFundCommunityPoolResponseAmino): _77.MsgFundCommunityPoolResponse;
                toAmino(_: _77.MsgFundCommunityPoolResponse): _77.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _77.MsgFundCommunityPoolResponseAminoMsg): _77.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _77.MsgFundCommunityPoolResponse): _77.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _77.MsgFundCommunityPoolResponseProtoMsg): _77.MsgFundCommunityPoolResponse;
                toProto(message: _77.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _77.MsgFundCommunityPoolResponse): _77.MsgFundCommunityPoolResponseProtoMsg;
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
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _77.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_77.MsgCommunityPoolSpend>): _77.MsgCommunityPoolSpend;
                fromAmino(object: _77.MsgCommunityPoolSpendAmino): _77.MsgCommunityPoolSpend;
                toAmino(message: _77.MsgCommunityPoolSpend): _77.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _77.MsgCommunityPoolSpendAminoMsg): _77.MsgCommunityPoolSpend;
                toAminoMsg(message: _77.MsgCommunityPoolSpend): _77.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _77.MsgCommunityPoolSpendProtoMsg): _77.MsgCommunityPoolSpend;
                toProto(message: _77.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _77.MsgCommunityPoolSpend): _77.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _77.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_77.MsgCommunityPoolSpendResponse>): _77.MsgCommunityPoolSpendResponse;
                fromAmino(_: _77.MsgCommunityPoolSpendResponseAmino): _77.MsgCommunityPoolSpendResponse;
                toAmino(_: _77.MsgCommunityPoolSpendResponse): _77.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _77.MsgCommunityPoolSpendResponseAminoMsg): _77.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _77.MsgCommunityPoolSpendResponse): _77.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _77.MsgCommunityPoolSpendResponseProtoMsg): _77.MsgCommunityPoolSpendResponse;
                toProto(message: _77.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCommunityPoolSpendResponse): _77.MsgCommunityPoolSpendResponseProtoMsg;
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
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _76.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_76.QueryValidatorDistributionInfoRequest>): _76.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _76.QueryValidatorDistributionInfoRequestAmino): _76.QueryValidatorDistributionInfoRequest;
                toAmino(message: _76.QueryValidatorDistributionInfoRequest): _76.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _76.QueryValidatorDistributionInfoRequestAminoMsg): _76.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _76.QueryValidatorDistributionInfoRequest): _76.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorDistributionInfoRequestProtoMsg): _76.QueryValidatorDistributionInfoRequest;
                toProto(message: _76.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorDistributionInfoRequest): _76.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _76.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_76.QueryValidatorDistributionInfoResponse>): _76.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _76.QueryValidatorDistributionInfoResponseAmino): _76.QueryValidatorDistributionInfoResponse;
                toAmino(message: _76.QueryValidatorDistributionInfoResponse): _76.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _76.QueryValidatorDistributionInfoResponseAminoMsg): _76.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _76.QueryValidatorDistributionInfoResponse): _76.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorDistributionInfoResponseProtoMsg): _76.QueryValidatorDistributionInfoResponse;
                toProto(message: _76.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorDistributionInfoResponse): _76.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _76.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_76.QueryValidatorOutstandingRewardsRequest>): _76.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _76.QueryValidatorOutstandingRewardsRequestAmino): _76.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _76.QueryValidatorOutstandingRewardsRequest): _76.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _76.QueryValidatorOutstandingRewardsRequestAminoMsg): _76.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _76.QueryValidatorOutstandingRewardsRequest): _76.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorOutstandingRewardsRequestProtoMsg): _76.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _76.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorOutstandingRewardsRequest): _76.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _76.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_76.QueryValidatorOutstandingRewardsResponse>): _76.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _76.QueryValidatorOutstandingRewardsResponseAmino): _76.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _76.QueryValidatorOutstandingRewardsResponse): _76.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _76.QueryValidatorOutstandingRewardsResponseAminoMsg): _76.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _76.QueryValidatorOutstandingRewardsResponse): _76.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorOutstandingRewardsResponseProtoMsg): _76.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _76.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorOutstandingRewardsResponse): _76.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _76.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_76.QueryValidatorCommissionRequest>): _76.QueryValidatorCommissionRequest;
                fromAmino(object: _76.QueryValidatorCommissionRequestAmino): _76.QueryValidatorCommissionRequest;
                toAmino(message: _76.QueryValidatorCommissionRequest): _76.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _76.QueryValidatorCommissionRequestAminoMsg): _76.QueryValidatorCommissionRequest;
                toAminoMsg(message: _76.QueryValidatorCommissionRequest): _76.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorCommissionRequestProtoMsg): _76.QueryValidatorCommissionRequest;
                toProto(message: _76.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorCommissionRequest): _76.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _76.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_76.QueryValidatorCommissionResponse>): _76.QueryValidatorCommissionResponse;
                fromAmino(object: _76.QueryValidatorCommissionResponseAmino): _76.QueryValidatorCommissionResponse;
                toAmino(message: _76.QueryValidatorCommissionResponse): _76.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _76.QueryValidatorCommissionResponseAminoMsg): _76.QueryValidatorCommissionResponse;
                toAminoMsg(message: _76.QueryValidatorCommissionResponse): _76.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorCommissionResponseProtoMsg): _76.QueryValidatorCommissionResponse;
                toProto(message: _76.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorCommissionResponse): _76.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _76.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_76.QueryValidatorSlashesRequest>): _76.QueryValidatorSlashesRequest;
                fromAmino(object: _76.QueryValidatorSlashesRequestAmino): _76.QueryValidatorSlashesRequest;
                toAmino(message: _76.QueryValidatorSlashesRequest): _76.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _76.QueryValidatorSlashesRequestAminoMsg): _76.QueryValidatorSlashesRequest;
                toAminoMsg(message: _76.QueryValidatorSlashesRequest): _76.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorSlashesRequestProtoMsg): _76.QueryValidatorSlashesRequest;
                toProto(message: _76.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorSlashesRequest): _76.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _76.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_76.QueryValidatorSlashesResponse>): _76.QueryValidatorSlashesResponse;
                fromAmino(object: _76.QueryValidatorSlashesResponseAmino): _76.QueryValidatorSlashesResponse;
                toAmino(message: _76.QueryValidatorSlashesResponse): _76.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _76.QueryValidatorSlashesResponseAminoMsg): _76.QueryValidatorSlashesResponse;
                toAminoMsg(message: _76.QueryValidatorSlashesResponse): _76.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _76.QueryValidatorSlashesResponseProtoMsg): _76.QueryValidatorSlashesResponse;
                toProto(message: _76.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _76.QueryValidatorSlashesResponse): _76.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _76.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_76.QueryDelegationRewardsRequest>): _76.QueryDelegationRewardsRequest;
                fromAmino(object: _76.QueryDelegationRewardsRequestAmino): _76.QueryDelegationRewardsRequest;
                toAmino(message: _76.QueryDelegationRewardsRequest): _76.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _76.QueryDelegationRewardsRequestAminoMsg): _76.QueryDelegationRewardsRequest;
                toAminoMsg(message: _76.QueryDelegationRewardsRequest): _76.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDelegationRewardsRequestProtoMsg): _76.QueryDelegationRewardsRequest;
                toProto(message: _76.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDelegationRewardsRequest): _76.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _76.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_76.QueryDelegationRewardsResponse>): _76.QueryDelegationRewardsResponse;
                fromAmino(object: _76.QueryDelegationRewardsResponseAmino): _76.QueryDelegationRewardsResponse;
                toAmino(message: _76.QueryDelegationRewardsResponse): _76.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _76.QueryDelegationRewardsResponseAminoMsg): _76.QueryDelegationRewardsResponse;
                toAminoMsg(message: _76.QueryDelegationRewardsResponse): _76.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDelegationRewardsResponseProtoMsg): _76.QueryDelegationRewardsResponse;
                toProto(message: _76.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDelegationRewardsResponse): _76.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _76.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_76.QueryDelegationTotalRewardsRequest>): _76.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _76.QueryDelegationTotalRewardsRequestAmino): _76.QueryDelegationTotalRewardsRequest;
                toAmino(message: _76.QueryDelegationTotalRewardsRequest): _76.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _76.QueryDelegationTotalRewardsRequestAminoMsg): _76.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _76.QueryDelegationTotalRewardsRequest): _76.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDelegationTotalRewardsRequestProtoMsg): _76.QueryDelegationTotalRewardsRequest;
                toProto(message: _76.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDelegationTotalRewardsRequest): _76.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _76.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_76.QueryDelegationTotalRewardsResponse>): _76.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _76.QueryDelegationTotalRewardsResponseAmino): _76.QueryDelegationTotalRewardsResponse;
                toAmino(message: _76.QueryDelegationTotalRewardsResponse): _76.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _76.QueryDelegationTotalRewardsResponseAminoMsg): _76.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _76.QueryDelegationTotalRewardsResponse): _76.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDelegationTotalRewardsResponseProtoMsg): _76.QueryDelegationTotalRewardsResponse;
                toProto(message: _76.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDelegationTotalRewardsResponse): _76.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _76.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_76.QueryDelegatorValidatorsRequest>): _76.QueryDelegatorValidatorsRequest;
                fromAmino(object: _76.QueryDelegatorValidatorsRequestAmino): _76.QueryDelegatorValidatorsRequest;
                toAmino(message: _76.QueryDelegatorValidatorsRequest): _76.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _76.QueryDelegatorValidatorsRequestAminoMsg): _76.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _76.QueryDelegatorValidatorsRequest): _76.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDelegatorValidatorsRequestProtoMsg): _76.QueryDelegatorValidatorsRequest;
                toProto(message: _76.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDelegatorValidatorsRequest): _76.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _76.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_76.QueryDelegatorValidatorsResponse>): _76.QueryDelegatorValidatorsResponse;
                fromAmino(object: _76.QueryDelegatorValidatorsResponseAmino): _76.QueryDelegatorValidatorsResponse;
                toAmino(message: _76.QueryDelegatorValidatorsResponse): _76.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _76.QueryDelegatorValidatorsResponseAminoMsg): _76.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _76.QueryDelegatorValidatorsResponse): _76.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDelegatorValidatorsResponseProtoMsg): _76.QueryDelegatorValidatorsResponse;
                toProto(message: _76.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDelegatorValidatorsResponse): _76.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _76.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_76.QueryDelegatorWithdrawAddressRequest>): _76.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _76.QueryDelegatorWithdrawAddressRequestAmino): _76.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _76.QueryDelegatorWithdrawAddressRequest): _76.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _76.QueryDelegatorWithdrawAddressRequestAminoMsg): _76.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _76.QueryDelegatorWithdrawAddressRequest): _76.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDelegatorWithdrawAddressRequestProtoMsg): _76.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _76.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDelegatorWithdrawAddressRequest): _76.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _76.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_76.QueryDelegatorWithdrawAddressResponse>): _76.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _76.QueryDelegatorWithdrawAddressResponseAmino): _76.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _76.QueryDelegatorWithdrawAddressResponse): _76.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _76.QueryDelegatorWithdrawAddressResponseAminoMsg): _76.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _76.QueryDelegatorWithdrawAddressResponse): _76.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDelegatorWithdrawAddressResponseProtoMsg): _76.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _76.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDelegatorWithdrawAddressResponse): _76.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _76.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_76.QueryCommunityPoolRequest>): _76.QueryCommunityPoolRequest;
                fromAmino(_: _76.QueryCommunityPoolRequestAmino): _76.QueryCommunityPoolRequest;
                toAmino(_: _76.QueryCommunityPoolRequest): _76.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _76.QueryCommunityPoolRequestAminoMsg): _76.QueryCommunityPoolRequest;
                toAminoMsg(message: _76.QueryCommunityPoolRequest): _76.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _76.QueryCommunityPoolRequestProtoMsg): _76.QueryCommunityPoolRequest;
                toProto(message: _76.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _76.QueryCommunityPoolRequest): _76.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _76.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_76.QueryCommunityPoolResponse>): _76.QueryCommunityPoolResponse;
                fromAmino(object: _76.QueryCommunityPoolResponseAmino): _76.QueryCommunityPoolResponse;
                toAmino(message: _76.QueryCommunityPoolResponse): _76.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _76.QueryCommunityPoolResponseAminoMsg): _76.QueryCommunityPoolResponse;
                toAminoMsg(message: _76.QueryCommunityPoolResponse): _76.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _76.QueryCommunityPoolResponseProtoMsg): _76.QueryCommunityPoolResponse;
                toProto(message: _76.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _76.QueryCommunityPoolResponse): _76.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _75.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_75.DelegatorWithdrawInfo>): _75.DelegatorWithdrawInfo;
                fromAmino(object: _75.DelegatorWithdrawInfoAmino): _75.DelegatorWithdrawInfo;
                toAmino(message: _75.DelegatorWithdrawInfo): _75.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _75.DelegatorWithdrawInfoAminoMsg): _75.DelegatorWithdrawInfo;
                toAminoMsg(message: _75.DelegatorWithdrawInfo): _75.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _75.DelegatorWithdrawInfoProtoMsg): _75.DelegatorWithdrawInfo;
                toProto(message: _75.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _75.DelegatorWithdrawInfo): _75.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _75.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_75.ValidatorOutstandingRewardsRecord>): _75.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _75.ValidatorOutstandingRewardsRecordAmino): _75.ValidatorOutstandingRewardsRecord;
                toAmino(message: _75.ValidatorOutstandingRewardsRecord): _75.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _75.ValidatorOutstandingRewardsRecordAminoMsg): _75.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _75.ValidatorOutstandingRewardsRecord): _75.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _75.ValidatorOutstandingRewardsRecordProtoMsg): _75.ValidatorOutstandingRewardsRecord;
                toProto(message: _75.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _75.ValidatorOutstandingRewardsRecord): _75.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _75.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_75.ValidatorAccumulatedCommissionRecord>): _75.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _75.ValidatorAccumulatedCommissionRecordAmino): _75.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _75.ValidatorAccumulatedCommissionRecord): _75.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _75.ValidatorAccumulatedCommissionRecordAminoMsg): _75.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _75.ValidatorAccumulatedCommissionRecord): _75.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _75.ValidatorAccumulatedCommissionRecordProtoMsg): _75.ValidatorAccumulatedCommissionRecord;
                toProto(message: _75.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _75.ValidatorAccumulatedCommissionRecord): _75.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _75.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_75.ValidatorHistoricalRewardsRecord>): _75.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _75.ValidatorHistoricalRewardsRecordAmino): _75.ValidatorHistoricalRewardsRecord;
                toAmino(message: _75.ValidatorHistoricalRewardsRecord): _75.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _75.ValidatorHistoricalRewardsRecordAminoMsg): _75.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _75.ValidatorHistoricalRewardsRecord): _75.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _75.ValidatorHistoricalRewardsRecordProtoMsg): _75.ValidatorHistoricalRewardsRecord;
                toProto(message: _75.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _75.ValidatorHistoricalRewardsRecord): _75.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _75.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_75.ValidatorCurrentRewardsRecord>): _75.ValidatorCurrentRewardsRecord;
                fromAmino(object: _75.ValidatorCurrentRewardsRecordAmino): _75.ValidatorCurrentRewardsRecord;
                toAmino(message: _75.ValidatorCurrentRewardsRecord): _75.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _75.ValidatorCurrentRewardsRecordAminoMsg): _75.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _75.ValidatorCurrentRewardsRecord): _75.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _75.ValidatorCurrentRewardsRecordProtoMsg): _75.ValidatorCurrentRewardsRecord;
                toProto(message: _75.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _75.ValidatorCurrentRewardsRecord): _75.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _75.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_75.DelegatorStartingInfoRecord>): _75.DelegatorStartingInfoRecord;
                fromAmino(object: _75.DelegatorStartingInfoRecordAmino): _75.DelegatorStartingInfoRecord;
                toAmino(message: _75.DelegatorStartingInfoRecord): _75.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _75.DelegatorStartingInfoRecordAminoMsg): _75.DelegatorStartingInfoRecord;
                toAminoMsg(message: _75.DelegatorStartingInfoRecord): _75.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _75.DelegatorStartingInfoRecordProtoMsg): _75.DelegatorStartingInfoRecord;
                toProto(message: _75.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _75.DelegatorStartingInfoRecord): _75.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _75.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_75.ValidatorSlashEventRecord>): _75.ValidatorSlashEventRecord;
                fromAmino(object: _75.ValidatorSlashEventRecordAmino): _75.ValidatorSlashEventRecord;
                toAmino(message: _75.ValidatorSlashEventRecord): _75.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _75.ValidatorSlashEventRecordAminoMsg): _75.ValidatorSlashEventRecord;
                toAminoMsg(message: _75.ValidatorSlashEventRecord): _75.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _75.ValidatorSlashEventRecordProtoMsg): _75.ValidatorSlashEventRecord;
                toProto(message: _75.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _75.ValidatorSlashEventRecord): _75.ValidatorSlashEventRecordProtoMsg;
            };
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
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _74.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_74.ValidatorHistoricalRewards>): _74.ValidatorHistoricalRewards;
                fromAmino(object: _74.ValidatorHistoricalRewardsAmino): _74.ValidatorHistoricalRewards;
                toAmino(message: _74.ValidatorHistoricalRewards): _74.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _74.ValidatorHistoricalRewardsAminoMsg): _74.ValidatorHistoricalRewards;
                toAminoMsg(message: _74.ValidatorHistoricalRewards): _74.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _74.ValidatorHistoricalRewardsProtoMsg): _74.ValidatorHistoricalRewards;
                toProto(message: _74.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _74.ValidatorHistoricalRewards): _74.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _74.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ValidatorCurrentRewards;
                fromPartial(object: Partial<_74.ValidatorCurrentRewards>): _74.ValidatorCurrentRewards;
                fromAmino(object: _74.ValidatorCurrentRewardsAmino): _74.ValidatorCurrentRewards;
                toAmino(message: _74.ValidatorCurrentRewards): _74.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _74.ValidatorCurrentRewardsAminoMsg): _74.ValidatorCurrentRewards;
                toAminoMsg(message: _74.ValidatorCurrentRewards): _74.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _74.ValidatorCurrentRewardsProtoMsg): _74.ValidatorCurrentRewards;
                toProto(message: _74.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _74.ValidatorCurrentRewards): _74.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _74.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_74.ValidatorAccumulatedCommission>): _74.ValidatorAccumulatedCommission;
                fromAmino(object: _74.ValidatorAccumulatedCommissionAmino): _74.ValidatorAccumulatedCommission;
                toAmino(message: _74.ValidatorAccumulatedCommission): _74.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _74.ValidatorAccumulatedCommissionAminoMsg): _74.ValidatorAccumulatedCommission;
                toAminoMsg(message: _74.ValidatorAccumulatedCommission): _74.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _74.ValidatorAccumulatedCommissionProtoMsg): _74.ValidatorAccumulatedCommission;
                toProto(message: _74.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _74.ValidatorAccumulatedCommission): _74.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _74.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_74.ValidatorOutstandingRewards>): _74.ValidatorOutstandingRewards;
                fromAmino(object: _74.ValidatorOutstandingRewardsAmino): _74.ValidatorOutstandingRewards;
                toAmino(message: _74.ValidatorOutstandingRewards): _74.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _74.ValidatorOutstandingRewardsAminoMsg): _74.ValidatorOutstandingRewards;
                toAminoMsg(message: _74.ValidatorOutstandingRewards): _74.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _74.ValidatorOutstandingRewardsProtoMsg): _74.ValidatorOutstandingRewards;
                toProto(message: _74.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _74.ValidatorOutstandingRewards): _74.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _74.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ValidatorSlashEvent;
                fromPartial(object: Partial<_74.ValidatorSlashEvent>): _74.ValidatorSlashEvent;
                fromAmino(object: _74.ValidatorSlashEventAmino): _74.ValidatorSlashEvent;
                toAmino(message: _74.ValidatorSlashEvent): _74.ValidatorSlashEventAmino;
                fromAminoMsg(object: _74.ValidatorSlashEventAminoMsg): _74.ValidatorSlashEvent;
                toAminoMsg(message: _74.ValidatorSlashEvent): _74.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _74.ValidatorSlashEventProtoMsg): _74.ValidatorSlashEvent;
                toProto(message: _74.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _74.ValidatorSlashEvent): _74.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _74.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.ValidatorSlashEvents;
                fromPartial(object: Partial<_74.ValidatorSlashEvents>): _74.ValidatorSlashEvents;
                fromAmino(object: _74.ValidatorSlashEventsAmino): _74.ValidatorSlashEvents;
                toAmino(message: _74.ValidatorSlashEvents): _74.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _74.ValidatorSlashEventsAminoMsg): _74.ValidatorSlashEvents;
                toAminoMsg(message: _74.ValidatorSlashEvents): _74.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _74.ValidatorSlashEventsProtoMsg): _74.ValidatorSlashEvents;
                toProto(message: _74.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _74.ValidatorSlashEvents): _74.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _74.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.FeePool;
                fromPartial(object: Partial<_74.FeePool>): _74.FeePool;
                fromAmino(object: _74.FeePoolAmino): _74.FeePool;
                toAmino(message: _74.FeePool): _74.FeePoolAmino;
                fromAminoMsg(object: _74.FeePoolAminoMsg): _74.FeePool;
                toAminoMsg(message: _74.FeePool): _74.FeePoolAminoMsg;
                fromProtoMsg(message: _74.FeePoolProtoMsg): _74.FeePool;
                toProto(message: _74.FeePool): Uint8Array;
                toProtoMsg(message: _74.FeePool): _74.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _74.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_74.CommunityPoolSpendProposal>): _74.CommunityPoolSpendProposal;
                fromAmino(object: _74.CommunityPoolSpendProposalAmino): _74.CommunityPoolSpendProposal;
                toAmino(message: _74.CommunityPoolSpendProposal): _74.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _74.CommunityPoolSpendProposalAminoMsg): _74.CommunityPoolSpendProposal;
                toAminoMsg(message: _74.CommunityPoolSpendProposal): _74.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _74.CommunityPoolSpendProposalProtoMsg): _74.CommunityPoolSpendProposal;
                toProto(message: _74.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _74.CommunityPoolSpendProposal): _74.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _74.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.DelegatorStartingInfo;
                fromPartial(object: Partial<_74.DelegatorStartingInfo>): _74.DelegatorStartingInfo;
                fromAmino(object: _74.DelegatorStartingInfoAmino): _74.DelegatorStartingInfo;
                toAmino(message: _74.DelegatorStartingInfo): _74.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _74.DelegatorStartingInfoAminoMsg): _74.DelegatorStartingInfo;
                toAminoMsg(message: _74.DelegatorStartingInfo): _74.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _74.DelegatorStartingInfoProtoMsg): _74.DelegatorStartingInfo;
                toProto(message: _74.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _74.DelegatorStartingInfo): _74.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _74.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.DelegationDelegatorReward;
                fromPartial(object: Partial<_74.DelegationDelegatorReward>): _74.DelegationDelegatorReward;
                fromAmino(object: _74.DelegationDelegatorRewardAmino): _74.DelegationDelegatorReward;
                toAmino(message: _74.DelegationDelegatorReward): _74.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _74.DelegationDelegatorRewardAminoMsg): _74.DelegationDelegatorReward;
                toAminoMsg(message: _74.DelegationDelegatorReward): _74.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _74.DelegationDelegatorRewardProtoMsg): _74.DelegationDelegatorReward;
                toProto(message: _74.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _74.DelegationDelegatorReward): _74.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _74.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_74.CommunityPoolSpendProposalWithDeposit>): _74.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _74.CommunityPoolSpendProposalWithDepositAmino): _74.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _74.CommunityPoolSpendProposalWithDeposit): _74.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _74.CommunityPoolSpendProposalWithDepositAminoMsg): _74.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _74.CommunityPoolSpendProposalWithDeposit): _74.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _74.CommunityPoolSpendProposalWithDepositProtoMsg): _74.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _74.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _74.CommunityPoolSpendProposalWithDeposit): _74.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
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
            MsgClientImpl: typeof _277.MsgClientImpl;
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _81.QueryEvidenceRequest): Promise<_81.QueryEvidenceResponse>;
                allEvidence(request?: _81.QueryAllEvidenceRequest): Promise<_81.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _237.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _82.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _82.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _82.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _82.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _82.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _82.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _82.MsgSubmitEvidence) => _82.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _82.MsgSubmitEvidenceAmino) => _82.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _82.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgSubmitEvidence;
                fromPartial(object: Partial<_82.MsgSubmitEvidence>): _82.MsgSubmitEvidence;
                fromAmino(object: _82.MsgSubmitEvidenceAmino): _82.MsgSubmitEvidence;
                toAmino(message: _82.MsgSubmitEvidence): _82.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _82.MsgSubmitEvidenceAminoMsg): _82.MsgSubmitEvidence;
                toAminoMsg(message: _82.MsgSubmitEvidence): _82.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitEvidenceProtoMsg): _82.MsgSubmitEvidence;
                toProto(message: _82.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitEvidence): _82.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _82.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_82.MsgSubmitEvidenceResponse>): _82.MsgSubmitEvidenceResponse;
                fromAmino(object: _82.MsgSubmitEvidenceResponseAmino): _82.MsgSubmitEvidenceResponse;
                toAmino(message: _82.MsgSubmitEvidenceResponse): _82.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _82.MsgSubmitEvidenceResponseAminoMsg): _82.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _82.MsgSubmitEvidenceResponse): _82.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitEvidenceResponseProtoMsg): _82.MsgSubmitEvidenceResponse;
                toProto(message: _82.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitEvidenceResponse): _82.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _81.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryEvidenceRequest;
                fromPartial(object: Partial<_81.QueryEvidenceRequest>): _81.QueryEvidenceRequest;
                fromAmino(object: _81.QueryEvidenceRequestAmino): _81.QueryEvidenceRequest;
                toAmino(message: _81.QueryEvidenceRequest): _81.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _81.QueryEvidenceRequestAminoMsg): _81.QueryEvidenceRequest;
                toAminoMsg(message: _81.QueryEvidenceRequest): _81.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _81.QueryEvidenceRequestProtoMsg): _81.QueryEvidenceRequest;
                toProto(message: _81.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _81.QueryEvidenceRequest): _81.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _81.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryEvidenceResponse;
                fromPartial(object: Partial<_81.QueryEvidenceResponse>): _81.QueryEvidenceResponse;
                fromAmino(object: _81.QueryEvidenceResponseAmino): _81.QueryEvidenceResponse;
                toAmino(message: _81.QueryEvidenceResponse): _81.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _81.QueryEvidenceResponseAminoMsg): _81.QueryEvidenceResponse;
                toAminoMsg(message: _81.QueryEvidenceResponse): _81.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _81.QueryEvidenceResponseProtoMsg): _81.QueryEvidenceResponse;
                toProto(message: _81.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _81.QueryEvidenceResponse): _81.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _81.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_81.QueryAllEvidenceRequest>): _81.QueryAllEvidenceRequest;
                fromAmino(object: _81.QueryAllEvidenceRequestAmino): _81.QueryAllEvidenceRequest;
                toAmino(message: _81.QueryAllEvidenceRequest): _81.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _81.QueryAllEvidenceRequestAminoMsg): _81.QueryAllEvidenceRequest;
                toAminoMsg(message: _81.QueryAllEvidenceRequest): _81.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _81.QueryAllEvidenceRequestProtoMsg): _81.QueryAllEvidenceRequest;
                toProto(message: _81.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAllEvidenceRequest): _81.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _81.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_81.QueryAllEvidenceResponse>): _81.QueryAllEvidenceResponse;
                fromAmino(object: _81.QueryAllEvidenceResponseAmino): _81.QueryAllEvidenceResponse;
                toAmino(message: _81.QueryAllEvidenceResponse): _81.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _81.QueryAllEvidenceResponseAminoMsg): _81.QueryAllEvidenceResponse;
                toAminoMsg(message: _81.QueryAllEvidenceResponse): _81.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _81.QueryAllEvidenceResponseProtoMsg): _81.QueryAllEvidenceResponse;
                toProto(message: _81.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _81.QueryAllEvidenceResponse): _81.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _80.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
                fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                toAminoMsg(message: _80.GenesisState): _80.GenesisStateAminoMsg;
                fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                toProto(message: _80.GenesisState): Uint8Array;
                toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _79.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Equivocation;
                fromPartial(object: Partial<_79.Equivocation>): _79.Equivocation;
                fromAmino(object: _79.EquivocationAmino): _79.Equivocation;
                toAmino(message: _79.Equivocation): _79.EquivocationAmino;
                fromAminoMsg(object: _79.EquivocationAminoMsg): _79.Equivocation;
                toAminoMsg(message: _79.Equivocation): _79.EquivocationAminoMsg;
                fromProtoMsg(message: _79.EquivocationProtoMsg): _79.Equivocation;
                toProto(message: _79.Equivocation): Uint8Array;
                toProtoMsg(message: _79.Equivocation): _79.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _83.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _83.Module;
                    fromPartial(_: Partial<_83.Module>): _83.Module;
                    fromAmino(_: _83.ModuleAmino): _83.Module;
                    toAmino(_: _83.Module): _83.ModuleAmino;
                    fromAminoMsg(object: _83.ModuleAminoMsg): _83.Module;
                    toAminoMsg(message: _83.Module): _83.ModuleAminoMsg;
                    fromProtoMsg(message: _83.ModuleProtoMsg): _83.Module;
                    toProto(message: _83.Module): Uint8Array;
                    toProtoMsg(message: _83.Module): _83.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _86.QueryAllowanceRequest): Promise<_86.QueryAllowanceResponse>;
                allowances(request: _86.QueryAllowancesRequest): Promise<_86.QueryAllowancesResponse>;
                allowancesByGranter(request: _86.QueryAllowancesByGranterRequest): Promise<_86.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _238.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _87.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _87.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _87.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _87.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _87.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _87.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _87.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _87.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _87.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _87.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _87.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _87.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _87.MsgGrantAllowance) => _87.MsgGrantAllowanceAmino;
                    fromAmino: (object: _87.MsgGrantAllowanceAmino) => _87.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _87.MsgRevokeAllowance) => _87.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _87.MsgRevokeAllowanceAmino) => _87.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _87.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgGrantAllowance;
                fromPartial(object: Partial<_87.MsgGrantAllowance>): _87.MsgGrantAllowance;
                fromAmino(object: _87.MsgGrantAllowanceAmino): _87.MsgGrantAllowance;
                toAmino(message: _87.MsgGrantAllowance): _87.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _87.MsgGrantAllowanceAminoMsg): _87.MsgGrantAllowance;
                toAminoMsg(message: _87.MsgGrantAllowance): _87.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _87.MsgGrantAllowanceProtoMsg): _87.MsgGrantAllowance;
                toProto(message: _87.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _87.MsgGrantAllowance): _87.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _87.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_87.MsgGrantAllowanceResponse>): _87.MsgGrantAllowanceResponse;
                fromAmino(_: _87.MsgGrantAllowanceResponseAmino): _87.MsgGrantAllowanceResponse;
                toAmino(_: _87.MsgGrantAllowanceResponse): _87.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _87.MsgGrantAllowanceResponseAminoMsg): _87.MsgGrantAllowanceResponse;
                toAminoMsg(message: _87.MsgGrantAllowanceResponse): _87.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _87.MsgGrantAllowanceResponseProtoMsg): _87.MsgGrantAllowanceResponse;
                toProto(message: _87.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _87.MsgGrantAllowanceResponse): _87.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _87.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgRevokeAllowance;
                fromPartial(object: Partial<_87.MsgRevokeAllowance>): _87.MsgRevokeAllowance;
                fromAmino(object: _87.MsgRevokeAllowanceAmino): _87.MsgRevokeAllowance;
                toAmino(message: _87.MsgRevokeAllowance): _87.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _87.MsgRevokeAllowanceAminoMsg): _87.MsgRevokeAllowance;
                toAminoMsg(message: _87.MsgRevokeAllowance): _87.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _87.MsgRevokeAllowanceProtoMsg): _87.MsgRevokeAllowance;
                toProto(message: _87.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _87.MsgRevokeAllowance): _87.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _87.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_87.MsgRevokeAllowanceResponse>): _87.MsgRevokeAllowanceResponse;
                fromAmino(_: _87.MsgRevokeAllowanceResponseAmino): _87.MsgRevokeAllowanceResponse;
                toAmino(_: _87.MsgRevokeAllowanceResponse): _87.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _87.MsgRevokeAllowanceResponseAminoMsg): _87.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _87.MsgRevokeAllowanceResponse): _87.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _87.MsgRevokeAllowanceResponseProtoMsg): _87.MsgRevokeAllowanceResponse;
                toProto(message: _87.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _87.MsgRevokeAllowanceResponse): _87.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _84.BasicAllowance | _84.PeriodicAllowance | _84.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _86.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllowanceRequest;
                fromPartial(object: Partial<_86.QueryAllowanceRequest>): _86.QueryAllowanceRequest;
                fromAmino(object: _86.QueryAllowanceRequestAmino): _86.QueryAllowanceRequest;
                toAmino(message: _86.QueryAllowanceRequest): _86.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _86.QueryAllowanceRequestAminoMsg): _86.QueryAllowanceRequest;
                toAminoMsg(message: _86.QueryAllowanceRequest): _86.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _86.QueryAllowanceRequestProtoMsg): _86.QueryAllowanceRequest;
                toProto(message: _86.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllowanceRequest): _86.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _86.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllowanceResponse;
                fromPartial(object: Partial<_86.QueryAllowanceResponse>): _86.QueryAllowanceResponse;
                fromAmino(object: _86.QueryAllowanceResponseAmino): _86.QueryAllowanceResponse;
                toAmino(message: _86.QueryAllowanceResponse): _86.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _86.QueryAllowanceResponseAminoMsg): _86.QueryAllowanceResponse;
                toAminoMsg(message: _86.QueryAllowanceResponse): _86.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _86.QueryAllowanceResponseProtoMsg): _86.QueryAllowanceResponse;
                toProto(message: _86.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllowanceResponse): _86.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _86.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllowancesRequest;
                fromPartial(object: Partial<_86.QueryAllowancesRequest>): _86.QueryAllowancesRequest;
                fromAmino(object: _86.QueryAllowancesRequestAmino): _86.QueryAllowancesRequest;
                toAmino(message: _86.QueryAllowancesRequest): _86.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _86.QueryAllowancesRequestAminoMsg): _86.QueryAllowancesRequest;
                toAminoMsg(message: _86.QueryAllowancesRequest): _86.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _86.QueryAllowancesRequestProtoMsg): _86.QueryAllowancesRequest;
                toProto(message: _86.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllowancesRequest): _86.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _86.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllowancesResponse;
                fromPartial(object: Partial<_86.QueryAllowancesResponse>): _86.QueryAllowancesResponse;
                fromAmino(object: _86.QueryAllowancesResponseAmino): _86.QueryAllowancesResponse;
                toAmino(message: _86.QueryAllowancesResponse): _86.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _86.QueryAllowancesResponseAminoMsg): _86.QueryAllowancesResponse;
                toAminoMsg(message: _86.QueryAllowancesResponse): _86.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _86.QueryAllowancesResponseProtoMsg): _86.QueryAllowancesResponse;
                toProto(message: _86.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllowancesResponse): _86.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _86.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_86.QueryAllowancesByGranterRequest>): _86.QueryAllowancesByGranterRequest;
                fromAmino(object: _86.QueryAllowancesByGranterRequestAmino): _86.QueryAllowancesByGranterRequest;
                toAmino(message: _86.QueryAllowancesByGranterRequest): _86.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _86.QueryAllowancesByGranterRequestAminoMsg): _86.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _86.QueryAllowancesByGranterRequest): _86.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _86.QueryAllowancesByGranterRequestProtoMsg): _86.QueryAllowancesByGranterRequest;
                toProto(message: _86.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllowancesByGranterRequest): _86.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _86.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_86.QueryAllowancesByGranterResponse>): _86.QueryAllowancesByGranterResponse;
                fromAmino(object: _86.QueryAllowancesByGranterResponseAmino): _86.QueryAllowancesByGranterResponse;
                toAmino(message: _86.QueryAllowancesByGranterResponse): _86.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _86.QueryAllowancesByGranterResponseAminoMsg): _86.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _86.QueryAllowancesByGranterResponse): _86.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _86.QueryAllowancesByGranterResponseProtoMsg): _86.QueryAllowancesByGranterResponse;
                toProto(message: _86.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllowancesByGranterResponse): _86.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _85.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                toAminoMsg(message: _85.GenesisState): _85.GenesisStateAminoMsg;
                fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                toProto(message: _85.GenesisState): Uint8Array;
                toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _84.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.BasicAllowance;
                fromPartial(object: Partial<_84.BasicAllowance>): _84.BasicAllowance;
                fromAmino(object: _84.BasicAllowanceAmino): _84.BasicAllowance;
                toAmino(message: _84.BasicAllowance): _84.BasicAllowanceAmino;
                fromAminoMsg(object: _84.BasicAllowanceAminoMsg): _84.BasicAllowance;
                toAminoMsg(message: _84.BasicAllowance): _84.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _84.BasicAllowanceProtoMsg): _84.BasicAllowance;
                toProto(message: _84.BasicAllowance): Uint8Array;
                toProtoMsg(message: _84.BasicAllowance): _84.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _84.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.PeriodicAllowance;
                fromPartial(object: Partial<_84.PeriodicAllowance>): _84.PeriodicAllowance;
                fromAmino(object: _84.PeriodicAllowanceAmino): _84.PeriodicAllowance;
                toAmino(message: _84.PeriodicAllowance): _84.PeriodicAllowanceAmino;
                fromAminoMsg(object: _84.PeriodicAllowanceAminoMsg): _84.PeriodicAllowance;
                toAminoMsg(message: _84.PeriodicAllowance): _84.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _84.PeriodicAllowanceProtoMsg): _84.PeriodicAllowance;
                toProto(message: _84.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _84.PeriodicAllowance): _84.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _84.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.AllowedMsgAllowance;
                fromPartial(object: Partial<_84.AllowedMsgAllowance>): _84.AllowedMsgAllowance;
                fromAmino(object: _84.AllowedMsgAllowanceAmino): _84.AllowedMsgAllowance;
                toAmino(message: _84.AllowedMsgAllowance): _84.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _84.AllowedMsgAllowanceAminoMsg): _84.AllowedMsgAllowance;
                toAminoMsg(message: _84.AllowedMsgAllowance): _84.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _84.AllowedMsgAllowanceProtoMsg): _84.AllowedMsgAllowance;
                toProto(message: _84.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _84.AllowedMsgAllowance): _84.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _84.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Grant;
                fromPartial(object: Partial<_84.Grant>): _84.Grant;
                fromAmino(object: _84.GrantAmino): _84.Grant;
                toAmino(message: _84.Grant): _84.GrantAmino;
                fromAminoMsg(object: _84.GrantAminoMsg): _84.Grant;
                toAminoMsg(message: _84.Grant): _84.GrantAminoMsg;
                fromProtoMsg(message: _84.GrantProtoMsg): _84.Grant;
                toProto(message: _84.Grant): Uint8Array;
                toProtoMsg(message: _84.Grant): _84.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _88.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _88.Module;
                    fromPartial(_: Partial<_88.Module>): _88.Module;
                    fromAmino(_: _88.ModuleAmino): _88.Module;
                    toAmino(_: _88.Module): _88.ModuleAmino;
                    fromAminoMsg(object: _88.ModuleAminoMsg): _88.Module;
                    toAminoMsg(message: _88.Module): _88.ModuleAminoMsg;
                    fromProtoMsg(message: _88.ModuleProtoMsg): _88.Module;
                    toProto(message: _88.Module): Uint8Array;
                    toProtoMsg(message: _88.Module): _88.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
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
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _90.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.Module;
                    fromPartial(object: Partial<_90.Module>): _90.Module;
                    fromAmino(object: _90.ModuleAmino): _90.Module;
                    toAmino(message: _90.Module): _90.ModuleAmino;
                    fromAminoMsg(object: _90.ModuleAminoMsg): _90.Module;
                    toAminoMsg(message: _90.Module): _90.ModuleAminoMsg;
                    fromProtoMsg(message: _90.ModuleProtoMsg): _90.Module;
                    toProto(message: _90.Module): Uint8Array;
                    toProtoMsg(message: _90.Module): _90.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _93.QueryProposalRequest): Promise<_93.QueryProposalResponse>;
                proposals(request: _93.QueryProposalsRequest): Promise<_93.QueryProposalsResponse>;
                vote(request: _93.QueryVoteRequest): Promise<_93.QueryVoteResponse>;
                votes(request: _93.QueryVotesRequest): Promise<_93.QueryVotesResponse>;
                params(request: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                deposit(request: _93.QueryDepositRequest): Promise<_93.QueryDepositResponse>;
                deposits(request: _93.QueryDepositsRequest): Promise<_93.QueryDepositsResponse>;
                tallyResult(request: _93.QueryTallyResultRequest): Promise<_93.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _239.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _94.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _94.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _94.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _94.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _94.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _94.MsgExecLegacyContent;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    voteWeighted(value: _94.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _94.MsgVoteWeighted;
                    };
                    deposit(value: _94.MsgDeposit): {
                        typeUrl: string;
                        value: _94.MsgDeposit;
                    };
                    updateParams(value: _94.MsgUpdateParams): {
                        typeUrl: string;
                        value: _94.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _94.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _94.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _94.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _94.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _94.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _94.MsgExecLegacyContent;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    voteWeighted(value: _94.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _94.MsgVoteWeighted;
                    };
                    deposit(value: _94.MsgDeposit): {
                        typeUrl: string;
                        value: _94.MsgDeposit;
                    };
                    updateParams(value: _94.MsgUpdateParams): {
                        typeUrl: string;
                        value: _94.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _94.MsgSubmitProposal) => _94.MsgSubmitProposalAmino;
                    fromAmino: (object: _94.MsgSubmitProposalAmino) => _94.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _94.MsgExecLegacyContent) => _94.MsgExecLegacyContentAmino;
                    fromAmino: (object: _94.MsgExecLegacyContentAmino) => _94.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _94.MsgVote) => _94.MsgVoteAmino;
                    fromAmino: (object: _94.MsgVoteAmino) => _94.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _94.MsgVoteWeighted) => _94.MsgVoteWeightedAmino;
                    fromAmino: (object: _94.MsgVoteWeightedAmino) => _94.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _94.MsgDeposit) => _94.MsgDepositAmino;
                    fromAmino: (object: _94.MsgDepositAmino) => _94.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUpdateParams) => _94.MsgUpdateParamsAmino;
                    fromAmino: (object: _94.MsgUpdateParamsAmino) => _94.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _94.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgSubmitProposal;
                fromPartial(object: Partial<_94.MsgSubmitProposal>): _94.MsgSubmitProposal;
                fromAmino(object: _94.MsgSubmitProposalAmino): _94.MsgSubmitProposal;
                toAmino(message: _94.MsgSubmitProposal): _94.MsgSubmitProposalAmino;
                fromAminoMsg(object: _94.MsgSubmitProposalAminoMsg): _94.MsgSubmitProposal;
                toAminoMsg(message: _94.MsgSubmitProposal): _94.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _94.MsgSubmitProposalProtoMsg): _94.MsgSubmitProposal;
                toProto(message: _94.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _94.MsgSubmitProposal): _94.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _94.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_94.MsgSubmitProposalResponse>): _94.MsgSubmitProposalResponse;
                fromAmino(object: _94.MsgSubmitProposalResponseAmino): _94.MsgSubmitProposalResponse;
                toAmino(message: _94.MsgSubmitProposalResponse): _94.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _94.MsgSubmitProposalResponseAminoMsg): _94.MsgSubmitProposalResponse;
                toAminoMsg(message: _94.MsgSubmitProposalResponse): _94.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _94.MsgSubmitProposalResponseProtoMsg): _94.MsgSubmitProposalResponse;
                toProto(message: _94.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _94.MsgSubmitProposalResponse): _94.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _94.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgExecLegacyContent;
                fromPartial(object: Partial<_94.MsgExecLegacyContent>): _94.MsgExecLegacyContent;
                fromAmino(object: _94.MsgExecLegacyContentAmino): _94.MsgExecLegacyContent;
                toAmino(message: _94.MsgExecLegacyContent): _94.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _94.MsgExecLegacyContentAminoMsg): _94.MsgExecLegacyContent;
                toAminoMsg(message: _94.MsgExecLegacyContent): _94.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _94.MsgExecLegacyContentProtoMsg): _94.MsgExecLegacyContent;
                toProto(message: _94.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _94.MsgExecLegacyContent): _94.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _94.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_94.MsgExecLegacyContentResponse>): _94.MsgExecLegacyContentResponse;
                fromAmino(_: _94.MsgExecLegacyContentResponseAmino): _94.MsgExecLegacyContentResponse;
                toAmino(_: _94.MsgExecLegacyContentResponse): _94.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _94.MsgExecLegacyContentResponseAminoMsg): _94.MsgExecLegacyContentResponse;
                toAminoMsg(message: _94.MsgExecLegacyContentResponse): _94.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _94.MsgExecLegacyContentResponseProtoMsg): _94.MsgExecLegacyContentResponse;
                toProto(message: _94.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _94.MsgExecLegacyContentResponse): _94.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _94.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgVote;
                fromPartial(object: Partial<_94.MsgVote>): _94.MsgVote;
                fromAmino(object: _94.MsgVoteAmino): _94.MsgVote;
                toAmino(message: _94.MsgVote): _94.MsgVoteAmino;
                fromAminoMsg(object: _94.MsgVoteAminoMsg): _94.MsgVote;
                toAminoMsg(message: _94.MsgVote): _94.MsgVoteAminoMsg;
                fromProtoMsg(message: _94.MsgVoteProtoMsg): _94.MsgVote;
                toProto(message: _94.MsgVote): Uint8Array;
                toProtoMsg(message: _94.MsgVote): _94.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _94.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgVoteResponse;
                fromPartial(_: Partial<_94.MsgVoteResponse>): _94.MsgVoteResponse;
                fromAmino(_: _94.MsgVoteResponseAmino): _94.MsgVoteResponse;
                toAmino(_: _94.MsgVoteResponse): _94.MsgVoteResponseAmino;
                fromAminoMsg(object: _94.MsgVoteResponseAminoMsg): _94.MsgVoteResponse;
                toAminoMsg(message: _94.MsgVoteResponse): _94.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _94.MsgVoteResponseProtoMsg): _94.MsgVoteResponse;
                toProto(message: _94.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _94.MsgVoteResponse): _94.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _94.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgVoteWeighted;
                fromPartial(object: Partial<_94.MsgVoteWeighted>): _94.MsgVoteWeighted;
                fromAmino(object: _94.MsgVoteWeightedAmino): _94.MsgVoteWeighted;
                toAmino(message: _94.MsgVoteWeighted): _94.MsgVoteWeightedAmino;
                fromAminoMsg(object: _94.MsgVoteWeightedAminoMsg): _94.MsgVoteWeighted;
                toAminoMsg(message: _94.MsgVoteWeighted): _94.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _94.MsgVoteWeightedProtoMsg): _94.MsgVoteWeighted;
                toProto(message: _94.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _94.MsgVoteWeighted): _94.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _94.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_94.MsgVoteWeightedResponse>): _94.MsgVoteWeightedResponse;
                fromAmino(_: _94.MsgVoteWeightedResponseAmino): _94.MsgVoteWeightedResponse;
                toAmino(_: _94.MsgVoteWeightedResponse): _94.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _94.MsgVoteWeightedResponseAminoMsg): _94.MsgVoteWeightedResponse;
                toAminoMsg(message: _94.MsgVoteWeightedResponse): _94.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _94.MsgVoteWeightedResponseProtoMsg): _94.MsgVoteWeightedResponse;
                toProto(message: _94.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _94.MsgVoteWeightedResponse): _94.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _94.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgDeposit;
                fromPartial(object: Partial<_94.MsgDeposit>): _94.MsgDeposit;
                fromAmino(object: _94.MsgDepositAmino): _94.MsgDeposit;
                toAmino(message: _94.MsgDeposit): _94.MsgDepositAmino;
                fromAminoMsg(object: _94.MsgDepositAminoMsg): _94.MsgDeposit;
                toAminoMsg(message: _94.MsgDeposit): _94.MsgDepositAminoMsg;
                fromProtoMsg(message: _94.MsgDepositProtoMsg): _94.MsgDeposit;
                toProto(message: _94.MsgDeposit): Uint8Array;
                toProtoMsg(message: _94.MsgDeposit): _94.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _94.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgDepositResponse;
                fromPartial(_: Partial<_94.MsgDepositResponse>): _94.MsgDepositResponse;
                fromAmino(_: _94.MsgDepositResponseAmino): _94.MsgDepositResponse;
                toAmino(_: _94.MsgDepositResponse): _94.MsgDepositResponseAmino;
                fromAminoMsg(object: _94.MsgDepositResponseAminoMsg): _94.MsgDepositResponse;
                toAminoMsg(message: _94.MsgDepositResponse): _94.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _94.MsgDepositResponseProtoMsg): _94.MsgDepositResponse;
                toProto(message: _94.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _94.MsgDepositResponse): _94.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _94.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUpdateParams;
                fromPartial(object: Partial<_94.MsgUpdateParams>): _94.MsgUpdateParams;
                fromAmino(object: _94.MsgUpdateParamsAmino): _94.MsgUpdateParams;
                toAmino(message: _94.MsgUpdateParams): _94.MsgUpdateParamsAmino;
                fromAminoMsg(object: _94.MsgUpdateParamsAminoMsg): _94.MsgUpdateParams;
                toAminoMsg(message: _94.MsgUpdateParams): _94.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateParamsProtoMsg): _94.MsgUpdateParams;
                toProto(message: _94.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateParams): _94.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _94.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_94.MsgUpdateParamsResponse>): _94.MsgUpdateParamsResponse;
                fromAmino(_: _94.MsgUpdateParamsResponseAmino): _94.MsgUpdateParamsResponse;
                toAmino(_: _94.MsgUpdateParamsResponse): _94.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _94.MsgUpdateParamsResponseAminoMsg): _94.MsgUpdateParamsResponse;
                toAminoMsg(message: _94.MsgUpdateParamsResponse): _94.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateParamsResponseProtoMsg): _94.MsgUpdateParamsResponse;
                toProto(message: _94.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateParamsResponse): _94.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _74.CommunityPoolSpendProposal | _74.CommunityPoolSpendProposalWithDeposit | import("../publicawesome/stargaze/cron/v1/proposal").PromoteToPrivilegedContractProposal | import("../publicawesome/stargaze/cron/v1/proposal").DemotePrivilegedContractProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").SetCodeAuthorizationProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").RemoveCodeAuthorizationProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").SetContractAuthorizationProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").RemoveContractAuthorizationProposal | _122.ParameterChangeProposal | _144.SoftwareUpgradeProposal | _144.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _96.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _93.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryProposalRequest;
                fromPartial(object: Partial<_93.QueryProposalRequest>): _93.QueryProposalRequest;
                fromAmino(object: _93.QueryProposalRequestAmino): _93.QueryProposalRequest;
                toAmino(message: _93.QueryProposalRequest): _93.QueryProposalRequestAmino;
                fromAminoMsg(object: _93.QueryProposalRequestAminoMsg): _93.QueryProposalRequest;
                toAminoMsg(message: _93.QueryProposalRequest): _93.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _93.QueryProposalRequestProtoMsg): _93.QueryProposalRequest;
                toProto(message: _93.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProposalRequest): _93.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _93.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryProposalResponse;
                fromPartial(object: Partial<_93.QueryProposalResponse>): _93.QueryProposalResponse;
                fromAmino(object: _93.QueryProposalResponseAmino): _93.QueryProposalResponse;
                toAmino(message: _93.QueryProposalResponse): _93.QueryProposalResponseAmino;
                fromAminoMsg(object: _93.QueryProposalResponseAminoMsg): _93.QueryProposalResponse;
                toAminoMsg(message: _93.QueryProposalResponse): _93.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _93.QueryProposalResponseProtoMsg): _93.QueryProposalResponse;
                toProto(message: _93.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProposalResponse): _93.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _93.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryProposalsRequest;
                fromPartial(object: Partial<_93.QueryProposalsRequest>): _93.QueryProposalsRequest;
                fromAmino(object: _93.QueryProposalsRequestAmino): _93.QueryProposalsRequest;
                toAmino(message: _93.QueryProposalsRequest): _93.QueryProposalsRequestAmino;
                fromAminoMsg(object: _93.QueryProposalsRequestAminoMsg): _93.QueryProposalsRequest;
                toAminoMsg(message: _93.QueryProposalsRequest): _93.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryProposalsRequestProtoMsg): _93.QueryProposalsRequest;
                toProto(message: _93.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProposalsRequest): _93.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _93.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryProposalsResponse;
                fromPartial(object: Partial<_93.QueryProposalsResponse>): _93.QueryProposalsResponse;
                fromAmino(object: _93.QueryProposalsResponseAmino): _93.QueryProposalsResponse;
                toAmino(message: _93.QueryProposalsResponse): _93.QueryProposalsResponseAmino;
                fromAminoMsg(object: _93.QueryProposalsResponseAminoMsg): _93.QueryProposalsResponse;
                toAminoMsg(message: _93.QueryProposalsResponse): _93.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryProposalsResponseProtoMsg): _93.QueryProposalsResponse;
                toProto(message: _93.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProposalsResponse): _93.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _93.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVoteRequest;
                fromPartial(object: Partial<_93.QueryVoteRequest>): _93.QueryVoteRequest;
                fromAmino(object: _93.QueryVoteRequestAmino): _93.QueryVoteRequest;
                toAmino(message: _93.QueryVoteRequest): _93.QueryVoteRequestAmino;
                fromAminoMsg(object: _93.QueryVoteRequestAminoMsg): _93.QueryVoteRequest;
                toAminoMsg(message: _93.QueryVoteRequest): _93.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _93.QueryVoteRequestProtoMsg): _93.QueryVoteRequest;
                toProto(message: _93.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _93.QueryVoteRequest): _93.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _93.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVoteResponse;
                fromPartial(object: Partial<_93.QueryVoteResponse>): _93.QueryVoteResponse;
                fromAmino(object: _93.QueryVoteResponseAmino): _93.QueryVoteResponse;
                toAmino(message: _93.QueryVoteResponse): _93.QueryVoteResponseAmino;
                fromAminoMsg(object: _93.QueryVoteResponseAminoMsg): _93.QueryVoteResponse;
                toAminoMsg(message: _93.QueryVoteResponse): _93.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _93.QueryVoteResponseProtoMsg): _93.QueryVoteResponse;
                toProto(message: _93.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _93.QueryVoteResponse): _93.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _93.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVotesRequest;
                fromPartial(object: Partial<_93.QueryVotesRequest>): _93.QueryVotesRequest;
                fromAmino(object: _93.QueryVotesRequestAmino): _93.QueryVotesRequest;
                toAmino(message: _93.QueryVotesRequest): _93.QueryVotesRequestAmino;
                fromAminoMsg(object: _93.QueryVotesRequestAminoMsg): _93.QueryVotesRequest;
                toAminoMsg(message: _93.QueryVotesRequest): _93.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _93.QueryVotesRequestProtoMsg): _93.QueryVotesRequest;
                toProto(message: _93.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryVotesRequest): _93.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _93.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVotesResponse;
                fromPartial(object: Partial<_93.QueryVotesResponse>): _93.QueryVotesResponse;
                fromAmino(object: _93.QueryVotesResponseAmino): _93.QueryVotesResponse;
                toAmino(message: _93.QueryVotesResponse): _93.QueryVotesResponseAmino;
                fromAminoMsg(object: _93.QueryVotesResponseAminoMsg): _93.QueryVotesResponse;
                toAminoMsg(message: _93.QueryVotesResponse): _93.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _93.QueryVotesResponseProtoMsg): _93.QueryVotesResponse;
                toProto(message: _93.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryVotesResponse): _93.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _93.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryParamsRequest;
                fromPartial(object: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
                fromAmino(object: _93.QueryParamsRequestAmino): _93.QueryParamsRequest;
                toAmino(message: _93.QueryParamsRequest): _93.QueryParamsRequestAmino;
                fromAminoMsg(object: _93.QueryParamsRequestAminoMsg): _93.QueryParamsRequest;
                toAminoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryParamsRequestProtoMsg): _93.QueryParamsRequest;
                toProto(message: _93.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _93.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryParamsResponse;
                fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
                fromAmino(object: _93.QueryParamsResponseAmino): _93.QueryParamsResponse;
                toAmino(message: _93.QueryParamsResponse): _93.QueryParamsResponseAmino;
                fromAminoMsg(object: _93.QueryParamsResponseAminoMsg): _93.QueryParamsResponse;
                toAminoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryParamsResponseProtoMsg): _93.QueryParamsResponse;
                toProto(message: _93.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _93.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryDepositRequest;
                fromPartial(object: Partial<_93.QueryDepositRequest>): _93.QueryDepositRequest;
                fromAmino(object: _93.QueryDepositRequestAmino): _93.QueryDepositRequest;
                toAmino(message: _93.QueryDepositRequest): _93.QueryDepositRequestAmino;
                fromAminoMsg(object: _93.QueryDepositRequestAminoMsg): _93.QueryDepositRequest;
                toAminoMsg(message: _93.QueryDepositRequest): _93.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _93.QueryDepositRequestProtoMsg): _93.QueryDepositRequest;
                toProto(message: _93.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _93.QueryDepositRequest): _93.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _93.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryDepositResponse;
                fromPartial(object: Partial<_93.QueryDepositResponse>): _93.QueryDepositResponse;
                fromAmino(object: _93.QueryDepositResponseAmino): _93.QueryDepositResponse;
                toAmino(message: _93.QueryDepositResponse): _93.QueryDepositResponseAmino;
                fromAminoMsg(object: _93.QueryDepositResponseAminoMsg): _93.QueryDepositResponse;
                toAminoMsg(message: _93.QueryDepositResponse): _93.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _93.QueryDepositResponseProtoMsg): _93.QueryDepositResponse;
                toProto(message: _93.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _93.QueryDepositResponse): _93.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _93.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryDepositsRequest;
                fromPartial(object: Partial<_93.QueryDepositsRequest>): _93.QueryDepositsRequest;
                fromAmino(object: _93.QueryDepositsRequestAmino): _93.QueryDepositsRequest;
                toAmino(message: _93.QueryDepositsRequest): _93.QueryDepositsRequestAmino;
                fromAminoMsg(object: _93.QueryDepositsRequestAminoMsg): _93.QueryDepositsRequest;
                toAminoMsg(message: _93.QueryDepositsRequest): _93.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryDepositsRequestProtoMsg): _93.QueryDepositsRequest;
                toProto(message: _93.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryDepositsRequest): _93.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _93.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryDepositsResponse;
                fromPartial(object: Partial<_93.QueryDepositsResponse>): _93.QueryDepositsResponse;
                fromAmino(object: _93.QueryDepositsResponseAmino): _93.QueryDepositsResponse;
                toAmino(message: _93.QueryDepositsResponse): _93.QueryDepositsResponseAmino;
                fromAminoMsg(object: _93.QueryDepositsResponseAminoMsg): _93.QueryDepositsResponse;
                toAminoMsg(message: _93.QueryDepositsResponse): _93.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryDepositsResponseProtoMsg): _93.QueryDepositsResponse;
                toProto(message: _93.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryDepositsResponse): _93.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _93.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryTallyResultRequest;
                fromPartial(object: Partial<_93.QueryTallyResultRequest>): _93.QueryTallyResultRequest;
                fromAmino(object: _93.QueryTallyResultRequestAmino): _93.QueryTallyResultRequest;
                toAmino(message: _93.QueryTallyResultRequest): _93.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _93.QueryTallyResultRequestAminoMsg): _93.QueryTallyResultRequest;
                toAminoMsg(message: _93.QueryTallyResultRequest): _93.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _93.QueryTallyResultRequestProtoMsg): _93.QueryTallyResultRequest;
                toProto(message: _93.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _93.QueryTallyResultRequest): _93.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _93.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryTallyResultResponse;
                fromPartial(object: Partial<_93.QueryTallyResultResponse>): _93.QueryTallyResultResponse;
                fromAmino(object: _93.QueryTallyResultResponseAmino): _93.QueryTallyResultResponse;
                toAmino(message: _93.QueryTallyResultResponse): _93.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _93.QueryTallyResultResponseAminoMsg): _93.QueryTallyResultResponse;
                toAminoMsg(message: _93.QueryTallyResultResponse): _93.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _93.QueryTallyResultResponseProtoMsg): _93.QueryTallyResultResponse;
                toProto(message: _93.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _93.QueryTallyResultResponse): _93.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _92.VoteOption;
            voteOptionToJSON(object: _92.VoteOption): string;
            proposalStatusFromJSON(object: any): _92.ProposalStatus;
            proposalStatusToJSON(object: _92.ProposalStatus): string;
            VoteOption: typeof _92.VoteOption;
            VoteOptionSDKType: typeof _92.VoteOption;
            VoteOptionAmino: typeof _92.VoteOption;
            ProposalStatus: typeof _92.ProposalStatus;
            ProposalStatusSDKType: typeof _92.ProposalStatus;
            ProposalStatusAmino: typeof _92.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _92.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.WeightedVoteOption;
                fromPartial(object: Partial<_92.WeightedVoteOption>): _92.WeightedVoteOption;
                fromAmino(object: _92.WeightedVoteOptionAmino): _92.WeightedVoteOption;
                toAmino(message: _92.WeightedVoteOption): _92.WeightedVoteOptionAmino;
                fromAminoMsg(object: _92.WeightedVoteOptionAminoMsg): _92.WeightedVoteOption;
                toAminoMsg(message: _92.WeightedVoteOption): _92.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _92.WeightedVoteOptionProtoMsg): _92.WeightedVoteOption;
                toProto(message: _92.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _92.WeightedVoteOption): _92.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _92.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Deposit;
                fromPartial(object: Partial<_92.Deposit>): _92.Deposit;
                fromAmino(object: _92.DepositAmino): _92.Deposit;
                toAmino(message: _92.Deposit): _92.DepositAmino;
                fromAminoMsg(object: _92.DepositAminoMsg): _92.Deposit;
                toAminoMsg(message: _92.Deposit): _92.DepositAminoMsg;
                fromProtoMsg(message: _92.DepositProtoMsg): _92.Deposit;
                toProto(message: _92.Deposit): Uint8Array;
                toProtoMsg(message: _92.Deposit): _92.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _92.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Proposal;
                fromPartial(object: Partial<_92.Proposal>): _92.Proposal;
                fromAmino(object: _92.ProposalAmino): _92.Proposal;
                toAmino(message: _92.Proposal): _92.ProposalAmino;
                fromAminoMsg(object: _92.ProposalAminoMsg): _92.Proposal;
                toAminoMsg(message: _92.Proposal): _92.ProposalAminoMsg;
                fromProtoMsg(message: _92.ProposalProtoMsg): _92.Proposal;
                toProto(message: _92.Proposal): Uint8Array;
                toProtoMsg(message: _92.Proposal): _92.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _92.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.TallyResult;
                fromPartial(object: Partial<_92.TallyResult>): _92.TallyResult;
                fromAmino(object: _92.TallyResultAmino): _92.TallyResult;
                toAmino(message: _92.TallyResult): _92.TallyResultAmino;
                fromAminoMsg(object: _92.TallyResultAminoMsg): _92.TallyResult;
                toAminoMsg(message: _92.TallyResult): _92.TallyResultAminoMsg;
                fromProtoMsg(message: _92.TallyResultProtoMsg): _92.TallyResult;
                toProto(message: _92.TallyResult): Uint8Array;
                toProtoMsg(message: _92.TallyResult): _92.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _92.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Vote;
                fromPartial(object: Partial<_92.Vote>): _92.Vote;
                fromAmino(object: _92.VoteAmino): _92.Vote;
                toAmino(message: _92.Vote): _92.VoteAmino;
                fromAminoMsg(object: _92.VoteAminoMsg): _92.Vote;
                toAminoMsg(message: _92.Vote): _92.VoteAminoMsg;
                fromProtoMsg(message: _92.VoteProtoMsg): _92.Vote;
                toProto(message: _92.Vote): Uint8Array;
                toProtoMsg(message: _92.Vote): _92.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _92.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.DepositParams;
                fromPartial(object: Partial<_92.DepositParams>): _92.DepositParams;
                fromAmino(object: _92.DepositParamsAmino): _92.DepositParams;
                toAmino(message: _92.DepositParams): _92.DepositParamsAmino;
                fromAminoMsg(object: _92.DepositParamsAminoMsg): _92.DepositParams;
                toAminoMsg(message: _92.DepositParams): _92.DepositParamsAminoMsg;
                fromProtoMsg(message: _92.DepositParamsProtoMsg): _92.DepositParams;
                toProto(message: _92.DepositParams): Uint8Array;
                toProtoMsg(message: _92.DepositParams): _92.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _92.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.VotingParams;
                fromPartial(object: Partial<_92.VotingParams>): _92.VotingParams;
                fromAmino(object: _92.VotingParamsAmino): _92.VotingParams;
                toAmino(message: _92.VotingParams): _92.VotingParamsAmino;
                fromAminoMsg(object: _92.VotingParamsAminoMsg): _92.VotingParams;
                toAminoMsg(message: _92.VotingParams): _92.VotingParamsAminoMsg;
                fromProtoMsg(message: _92.VotingParamsProtoMsg): _92.VotingParams;
                toProto(message: _92.VotingParams): Uint8Array;
                toProtoMsg(message: _92.VotingParams): _92.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _92.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.TallyParams;
                fromPartial(object: Partial<_92.TallyParams>): _92.TallyParams;
                fromAmino(object: _92.TallyParamsAmino): _92.TallyParams;
                toAmino(message: _92.TallyParams): _92.TallyParamsAmino;
                fromAminoMsg(object: _92.TallyParamsAminoMsg): _92.TallyParams;
                toAminoMsg(message: _92.TallyParams): _92.TallyParamsAminoMsg;
                fromProtoMsg(message: _92.TallyParamsProtoMsg): _92.TallyParams;
                toProto(message: _92.TallyParams): Uint8Array;
                toProtoMsg(message: _92.TallyParams): _92.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _92.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Params;
                fromPartial(object: Partial<_92.Params>): _92.Params;
                fromAmino(object: _92.ParamsAmino): _92.Params;
                toAmino(message: _92.Params): _92.ParamsAmino;
                fromAminoMsg(object: _92.ParamsAminoMsg): _92.Params;
                toAminoMsg(message: _92.Params): _92.ParamsAminoMsg;
                fromProtoMsg(message: _92.ParamsProtoMsg): _92.Params;
                toProto(message: _92.Params): Uint8Array;
                toProtoMsg(message: _92.Params): _92.ParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _97.QueryProposalRequest): Promise<_97.QueryProposalResponse>;
                proposals(request: _97.QueryProposalsRequest): Promise<_97.QueryProposalsResponse>;
                vote(request: _97.QueryVoteRequest): Promise<_97.QueryVoteResponse>;
                votes(request: _97.QueryVotesRequest): Promise<_97.QueryVotesResponse>;
                params(request: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                deposit(request: _97.QueryDepositRequest): Promise<_97.QueryDepositResponse>;
                deposits(request: _97.QueryDepositsRequest): Promise<_97.QueryDepositsResponse>;
                tallyResult(request: _97.QueryTallyResultRequest): Promise<_97.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _240.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _98.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _98.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _98.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _98.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _98.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _98.MsgSubmitProposal;
                    };
                    vote(value: _98.MsgVote): {
                        typeUrl: string;
                        value: _98.MsgVote;
                    };
                    voteWeighted(value: _98.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _98.MsgVoteWeighted;
                    };
                    deposit(value: _98.MsgDeposit): {
                        typeUrl: string;
                        value: _98.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _98.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _98.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _98.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _98.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _98.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _98.MsgSubmitProposal;
                    };
                    vote(value: _98.MsgVote): {
                        typeUrl: string;
                        value: _98.MsgVote;
                    };
                    voteWeighted(value: _98.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _98.MsgVoteWeighted;
                    };
                    deposit(value: _98.MsgDeposit): {
                        typeUrl: string;
                        value: _98.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _98.MsgSubmitProposal) => _98.MsgSubmitProposalAmino;
                    fromAmino: (object: _98.MsgSubmitProposalAmino) => _98.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _98.MsgVote) => _98.MsgVoteAmino;
                    fromAmino: (object: _98.MsgVoteAmino) => _98.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _98.MsgVoteWeighted) => _98.MsgVoteWeightedAmino;
                    fromAmino: (object: _98.MsgVoteWeightedAmino) => _98.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _98.MsgDeposit) => _98.MsgDepositAmino;
                    fromAmino: (object: _98.MsgDepositAmino) => _98.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _98.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgSubmitProposal;
                fromPartial(object: Partial<_98.MsgSubmitProposal>): _98.MsgSubmitProposal;
                fromAmino(object: _98.MsgSubmitProposalAmino): _98.MsgSubmitProposal;
                toAmino(message: _98.MsgSubmitProposal): _98.MsgSubmitProposalAmino;
                fromAminoMsg(object: _98.MsgSubmitProposalAminoMsg): _98.MsgSubmitProposal;
                toAminoMsg(message: _98.MsgSubmitProposal): _98.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _98.MsgSubmitProposalProtoMsg): _98.MsgSubmitProposal;
                toProto(message: _98.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _98.MsgSubmitProposal): _98.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _98.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_98.MsgSubmitProposalResponse>): _98.MsgSubmitProposalResponse;
                fromAmino(object: _98.MsgSubmitProposalResponseAmino): _98.MsgSubmitProposalResponse;
                toAmino(message: _98.MsgSubmitProposalResponse): _98.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _98.MsgSubmitProposalResponseAminoMsg): _98.MsgSubmitProposalResponse;
                toAminoMsg(message: _98.MsgSubmitProposalResponse): _98.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _98.MsgSubmitProposalResponseProtoMsg): _98.MsgSubmitProposalResponse;
                toProto(message: _98.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _98.MsgSubmitProposalResponse): _98.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _98.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgVote;
                fromPartial(object: Partial<_98.MsgVote>): _98.MsgVote;
                fromAmino(object: _98.MsgVoteAmino): _98.MsgVote;
                toAmino(message: _98.MsgVote): _98.MsgVoteAmino;
                fromAminoMsg(object: _98.MsgVoteAminoMsg): _98.MsgVote;
                toAminoMsg(message: _98.MsgVote): _98.MsgVoteAminoMsg;
                fromProtoMsg(message: _98.MsgVoteProtoMsg): _98.MsgVote;
                toProto(message: _98.MsgVote): Uint8Array;
                toProtoMsg(message: _98.MsgVote): _98.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _98.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgVoteResponse;
                fromPartial(_: Partial<_98.MsgVoteResponse>): _98.MsgVoteResponse;
                fromAmino(_: _98.MsgVoteResponseAmino): _98.MsgVoteResponse;
                toAmino(_: _98.MsgVoteResponse): _98.MsgVoteResponseAmino;
                fromAminoMsg(object: _98.MsgVoteResponseAminoMsg): _98.MsgVoteResponse;
                toAminoMsg(message: _98.MsgVoteResponse): _98.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _98.MsgVoteResponseProtoMsg): _98.MsgVoteResponse;
                toProto(message: _98.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _98.MsgVoteResponse): _98.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _98.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgVoteWeighted;
                fromPartial(object: Partial<_98.MsgVoteWeighted>): _98.MsgVoteWeighted;
                fromAmino(object: _98.MsgVoteWeightedAmino): _98.MsgVoteWeighted;
                toAmino(message: _98.MsgVoteWeighted): _98.MsgVoteWeightedAmino;
                fromAminoMsg(object: _98.MsgVoteWeightedAminoMsg): _98.MsgVoteWeighted;
                toAminoMsg(message: _98.MsgVoteWeighted): _98.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _98.MsgVoteWeightedProtoMsg): _98.MsgVoteWeighted;
                toProto(message: _98.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _98.MsgVoteWeighted): _98.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _98.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_98.MsgVoteWeightedResponse>): _98.MsgVoteWeightedResponse;
                fromAmino(_: _98.MsgVoteWeightedResponseAmino): _98.MsgVoteWeightedResponse;
                toAmino(_: _98.MsgVoteWeightedResponse): _98.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _98.MsgVoteWeightedResponseAminoMsg): _98.MsgVoteWeightedResponse;
                toAminoMsg(message: _98.MsgVoteWeightedResponse): _98.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _98.MsgVoteWeightedResponseProtoMsg): _98.MsgVoteWeightedResponse;
                toProto(message: _98.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _98.MsgVoteWeightedResponse): _98.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _98.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgDeposit;
                fromPartial(object: Partial<_98.MsgDeposit>): _98.MsgDeposit;
                fromAmino(object: _98.MsgDepositAmino): _98.MsgDeposit;
                toAmino(message: _98.MsgDeposit): _98.MsgDepositAmino;
                fromAminoMsg(object: _98.MsgDepositAminoMsg): _98.MsgDeposit;
                toAminoMsg(message: _98.MsgDeposit): _98.MsgDepositAminoMsg;
                fromProtoMsg(message: _98.MsgDepositProtoMsg): _98.MsgDeposit;
                toProto(message: _98.MsgDeposit): Uint8Array;
                toProtoMsg(message: _98.MsgDeposit): _98.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _98.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgDepositResponse;
                fromPartial(_: Partial<_98.MsgDepositResponse>): _98.MsgDepositResponse;
                fromAmino(_: _98.MsgDepositResponseAmino): _98.MsgDepositResponse;
                toAmino(_: _98.MsgDepositResponse): _98.MsgDepositResponseAmino;
                fromAminoMsg(object: _98.MsgDepositResponseAminoMsg): _98.MsgDepositResponse;
                toAminoMsg(message: _98.MsgDepositResponse): _98.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _98.MsgDepositResponseProtoMsg): _98.MsgDepositResponse;
                toProto(message: _98.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _98.MsgDepositResponse): _98.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _74.CommunityPoolSpendProposal | _74.CommunityPoolSpendProposalWithDeposit | import("../publicawesome/stargaze/cron/v1/proposal").PromoteToPrivilegedContractProposal | import("../publicawesome/stargaze/cron/v1/proposal").DemotePrivilegedContractProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").SetCodeAuthorizationProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").RemoveCodeAuthorizationProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").SetContractAuthorizationProposal | import("../publicawesome/stargaze/globalfee/v1/proposal").RemoveContractAuthorizationProposal | _122.ParameterChangeProposal | _144.SoftwareUpgradeProposal | _144.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _96.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _97.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryProposalRequest;
                fromPartial(object: Partial<_97.QueryProposalRequest>): _97.QueryProposalRequest;
                fromAmino(object: _97.QueryProposalRequestAmino): _97.QueryProposalRequest;
                toAmino(message: _97.QueryProposalRequest): _97.QueryProposalRequestAmino;
                fromAminoMsg(object: _97.QueryProposalRequestAminoMsg): _97.QueryProposalRequest;
                toAminoMsg(message: _97.QueryProposalRequest): _97.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _97.QueryProposalRequestProtoMsg): _97.QueryProposalRequest;
                toProto(message: _97.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _97.QueryProposalRequest): _97.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _97.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryProposalResponse;
                fromPartial(object: Partial<_97.QueryProposalResponse>): _97.QueryProposalResponse;
                fromAmino(object: _97.QueryProposalResponseAmino): _97.QueryProposalResponse;
                toAmino(message: _97.QueryProposalResponse): _97.QueryProposalResponseAmino;
                fromAminoMsg(object: _97.QueryProposalResponseAminoMsg): _97.QueryProposalResponse;
                toAminoMsg(message: _97.QueryProposalResponse): _97.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _97.QueryProposalResponseProtoMsg): _97.QueryProposalResponse;
                toProto(message: _97.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _97.QueryProposalResponse): _97.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _97.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryProposalsRequest;
                fromPartial(object: Partial<_97.QueryProposalsRequest>): _97.QueryProposalsRequest;
                fromAmino(object: _97.QueryProposalsRequestAmino): _97.QueryProposalsRequest;
                toAmino(message: _97.QueryProposalsRequest): _97.QueryProposalsRequestAmino;
                fromAminoMsg(object: _97.QueryProposalsRequestAminoMsg): _97.QueryProposalsRequest;
                toAminoMsg(message: _97.QueryProposalsRequest): _97.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryProposalsRequestProtoMsg): _97.QueryProposalsRequest;
                toProto(message: _97.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryProposalsRequest): _97.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _97.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryProposalsResponse;
                fromPartial(object: Partial<_97.QueryProposalsResponse>): _97.QueryProposalsResponse;
                fromAmino(object: _97.QueryProposalsResponseAmino): _97.QueryProposalsResponse;
                toAmino(message: _97.QueryProposalsResponse): _97.QueryProposalsResponseAmino;
                fromAminoMsg(object: _97.QueryProposalsResponseAminoMsg): _97.QueryProposalsResponse;
                toAminoMsg(message: _97.QueryProposalsResponse): _97.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryProposalsResponseProtoMsg): _97.QueryProposalsResponse;
                toProto(message: _97.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryProposalsResponse): _97.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _97.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryVoteRequest;
                fromPartial(object: Partial<_97.QueryVoteRequest>): _97.QueryVoteRequest;
                fromAmino(object: _97.QueryVoteRequestAmino): _97.QueryVoteRequest;
                toAmino(message: _97.QueryVoteRequest): _97.QueryVoteRequestAmino;
                fromAminoMsg(object: _97.QueryVoteRequestAminoMsg): _97.QueryVoteRequest;
                toAminoMsg(message: _97.QueryVoteRequest): _97.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _97.QueryVoteRequestProtoMsg): _97.QueryVoteRequest;
                toProto(message: _97.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _97.QueryVoteRequest): _97.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _97.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryVoteResponse;
                fromPartial(object: Partial<_97.QueryVoteResponse>): _97.QueryVoteResponse;
                fromAmino(object: _97.QueryVoteResponseAmino): _97.QueryVoteResponse;
                toAmino(message: _97.QueryVoteResponse): _97.QueryVoteResponseAmino;
                fromAminoMsg(object: _97.QueryVoteResponseAminoMsg): _97.QueryVoteResponse;
                toAminoMsg(message: _97.QueryVoteResponse): _97.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _97.QueryVoteResponseProtoMsg): _97.QueryVoteResponse;
                toProto(message: _97.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _97.QueryVoteResponse): _97.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _97.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryVotesRequest;
                fromPartial(object: Partial<_97.QueryVotesRequest>): _97.QueryVotesRequest;
                fromAmino(object: _97.QueryVotesRequestAmino): _97.QueryVotesRequest;
                toAmino(message: _97.QueryVotesRequest): _97.QueryVotesRequestAmino;
                fromAminoMsg(object: _97.QueryVotesRequestAminoMsg): _97.QueryVotesRequest;
                toAminoMsg(message: _97.QueryVotesRequest): _97.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryVotesRequestProtoMsg): _97.QueryVotesRequest;
                toProto(message: _97.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryVotesRequest): _97.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _97.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryVotesResponse;
                fromPartial(object: Partial<_97.QueryVotesResponse>): _97.QueryVotesResponse;
                fromAmino(object: _97.QueryVotesResponseAmino): _97.QueryVotesResponse;
                toAmino(message: _97.QueryVotesResponse): _97.QueryVotesResponseAmino;
                fromAminoMsg(object: _97.QueryVotesResponseAminoMsg): _97.QueryVotesResponse;
                toAminoMsg(message: _97.QueryVotesResponse): _97.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryVotesResponseProtoMsg): _97.QueryVotesResponse;
                toProto(message: _97.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryVotesResponse): _97.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _97.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryParamsRequest;
                fromPartial(object: Partial<_97.QueryParamsRequest>): _97.QueryParamsRequest;
                fromAmino(object: _97.QueryParamsRequestAmino): _97.QueryParamsRequest;
                toAmino(message: _97.QueryParamsRequest): _97.QueryParamsRequestAmino;
                fromAminoMsg(object: _97.QueryParamsRequestAminoMsg): _97.QueryParamsRequest;
                toAminoMsg(message: _97.QueryParamsRequest): _97.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryParamsRequestProtoMsg): _97.QueryParamsRequest;
                toProto(message: _97.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryParamsRequest): _97.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _97.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryParamsResponse;
                fromPartial(object: Partial<_97.QueryParamsResponse>): _97.QueryParamsResponse;
                fromAmino(object: _97.QueryParamsResponseAmino): _97.QueryParamsResponse;
                toAmino(message: _97.QueryParamsResponse): _97.QueryParamsResponseAmino;
                fromAminoMsg(object: _97.QueryParamsResponseAminoMsg): _97.QueryParamsResponse;
                toAminoMsg(message: _97.QueryParamsResponse): _97.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryParamsResponseProtoMsg): _97.QueryParamsResponse;
                toProto(message: _97.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryParamsResponse): _97.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _97.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryDepositRequest;
                fromPartial(object: Partial<_97.QueryDepositRequest>): _97.QueryDepositRequest;
                fromAmino(object: _97.QueryDepositRequestAmino): _97.QueryDepositRequest;
                toAmino(message: _97.QueryDepositRequest): _97.QueryDepositRequestAmino;
                fromAminoMsg(object: _97.QueryDepositRequestAminoMsg): _97.QueryDepositRequest;
                toAminoMsg(message: _97.QueryDepositRequest): _97.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _97.QueryDepositRequestProtoMsg): _97.QueryDepositRequest;
                toProto(message: _97.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _97.QueryDepositRequest): _97.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _97.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryDepositResponse;
                fromPartial(object: Partial<_97.QueryDepositResponse>): _97.QueryDepositResponse;
                fromAmino(object: _97.QueryDepositResponseAmino): _97.QueryDepositResponse;
                toAmino(message: _97.QueryDepositResponse): _97.QueryDepositResponseAmino;
                fromAminoMsg(object: _97.QueryDepositResponseAminoMsg): _97.QueryDepositResponse;
                toAminoMsg(message: _97.QueryDepositResponse): _97.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _97.QueryDepositResponseProtoMsg): _97.QueryDepositResponse;
                toProto(message: _97.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _97.QueryDepositResponse): _97.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _97.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryDepositsRequest;
                fromPartial(object: Partial<_97.QueryDepositsRequest>): _97.QueryDepositsRequest;
                fromAmino(object: _97.QueryDepositsRequestAmino): _97.QueryDepositsRequest;
                toAmino(message: _97.QueryDepositsRequest): _97.QueryDepositsRequestAmino;
                fromAminoMsg(object: _97.QueryDepositsRequestAminoMsg): _97.QueryDepositsRequest;
                toAminoMsg(message: _97.QueryDepositsRequest): _97.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryDepositsRequestProtoMsg): _97.QueryDepositsRequest;
                toProto(message: _97.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryDepositsRequest): _97.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _97.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryDepositsResponse;
                fromPartial(object: Partial<_97.QueryDepositsResponse>): _97.QueryDepositsResponse;
                fromAmino(object: _97.QueryDepositsResponseAmino): _97.QueryDepositsResponse;
                toAmino(message: _97.QueryDepositsResponse): _97.QueryDepositsResponseAmino;
                fromAminoMsg(object: _97.QueryDepositsResponseAminoMsg): _97.QueryDepositsResponse;
                toAminoMsg(message: _97.QueryDepositsResponse): _97.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryDepositsResponseProtoMsg): _97.QueryDepositsResponse;
                toProto(message: _97.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryDepositsResponse): _97.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _97.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryTallyResultRequest;
                fromPartial(object: Partial<_97.QueryTallyResultRequest>): _97.QueryTallyResultRequest;
                fromAmino(object: _97.QueryTallyResultRequestAmino): _97.QueryTallyResultRequest;
                toAmino(message: _97.QueryTallyResultRequest): _97.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _97.QueryTallyResultRequestAminoMsg): _97.QueryTallyResultRequest;
                toAminoMsg(message: _97.QueryTallyResultRequest): _97.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _97.QueryTallyResultRequestProtoMsg): _97.QueryTallyResultRequest;
                toProto(message: _97.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _97.QueryTallyResultRequest): _97.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _97.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.QueryTallyResultResponse;
                fromPartial(object: Partial<_97.QueryTallyResultResponse>): _97.QueryTallyResultResponse;
                fromAmino(object: _97.QueryTallyResultResponseAmino): _97.QueryTallyResultResponse;
                toAmino(message: _97.QueryTallyResultResponse): _97.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _97.QueryTallyResultResponseAminoMsg): _97.QueryTallyResultResponse;
                toAminoMsg(message: _97.QueryTallyResultResponse): _97.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _97.QueryTallyResultResponseProtoMsg): _97.QueryTallyResultResponse;
                toProto(message: _97.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _97.QueryTallyResultResponse): _97.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _96.VoteOption;
            voteOptionToJSON(object: _96.VoteOption): string;
            proposalStatusFromJSON(object: any): _96.ProposalStatus;
            proposalStatusToJSON(object: _96.ProposalStatus): string;
            VoteOption: typeof _96.VoteOption;
            VoteOptionSDKType: typeof _96.VoteOption;
            VoteOptionAmino: typeof _96.VoteOption;
            ProposalStatus: typeof _96.ProposalStatus;
            ProposalStatusSDKType: typeof _96.ProposalStatus;
            ProposalStatusAmino: typeof _96.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _96.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.WeightedVoteOption;
                fromPartial(object: Partial<_96.WeightedVoteOption>): _96.WeightedVoteOption;
                fromAmino(object: _96.WeightedVoteOptionAmino): _96.WeightedVoteOption;
                toAmino(message: _96.WeightedVoteOption): _96.WeightedVoteOptionAmino;
                fromAminoMsg(object: _96.WeightedVoteOptionAminoMsg): _96.WeightedVoteOption;
                toAminoMsg(message: _96.WeightedVoteOption): _96.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _96.WeightedVoteOptionProtoMsg): _96.WeightedVoteOption;
                toProto(message: _96.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _96.WeightedVoteOption): _96.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _96.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.TextProposal;
                fromPartial(object: Partial<_96.TextProposal>): _96.TextProposal;
                fromAmino(object: _96.TextProposalAmino): _96.TextProposal;
                toAmino(message: _96.TextProposal): _96.TextProposalAmino;
                fromAminoMsg(object: _96.TextProposalAminoMsg): _96.TextProposal;
                toAminoMsg(message: _96.TextProposal): _96.TextProposalAminoMsg;
                fromProtoMsg(message: _96.TextProposalProtoMsg): _96.TextProposal;
                toProto(message: _96.TextProposal): Uint8Array;
                toProtoMsg(message: _96.TextProposal): _96.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _96.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Deposit;
                fromPartial(object: Partial<_96.Deposit>): _96.Deposit;
                fromAmino(object: _96.DepositAmino): _96.Deposit;
                toAmino(message: _96.Deposit): _96.DepositAmino;
                fromAminoMsg(object: _96.DepositAminoMsg): _96.Deposit;
                toAminoMsg(message: _96.Deposit): _96.DepositAminoMsg;
                fromProtoMsg(message: _96.DepositProtoMsg): _96.Deposit;
                toProto(message: _96.Deposit): Uint8Array;
                toProtoMsg(message: _96.Deposit): _96.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _96.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Proposal;
                fromPartial(object: Partial<_96.Proposal>): _96.Proposal;
                fromAmino(object: _96.ProposalAmino): _96.Proposal;
                toAmino(message: _96.Proposal): _96.ProposalAmino;
                fromAminoMsg(object: _96.ProposalAminoMsg): _96.Proposal;
                toAminoMsg(message: _96.Proposal): _96.ProposalAminoMsg;
                fromProtoMsg(message: _96.ProposalProtoMsg): _96.Proposal;
                toProto(message: _96.Proposal): Uint8Array;
                toProtoMsg(message: _96.Proposal): _96.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _96.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.TallyResult;
                fromPartial(object: Partial<_96.TallyResult>): _96.TallyResult;
                fromAmino(object: _96.TallyResultAmino): _96.TallyResult;
                toAmino(message: _96.TallyResult): _96.TallyResultAmino;
                fromAminoMsg(object: _96.TallyResultAminoMsg): _96.TallyResult;
                toAminoMsg(message: _96.TallyResult): _96.TallyResultAminoMsg;
                fromProtoMsg(message: _96.TallyResultProtoMsg): _96.TallyResult;
                toProto(message: _96.TallyResult): Uint8Array;
                toProtoMsg(message: _96.TallyResult): _96.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _96.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.Vote;
                fromPartial(object: Partial<_96.Vote>): _96.Vote;
                fromAmino(object: _96.VoteAmino): _96.Vote;
                toAmino(message: _96.Vote): _96.VoteAmino;
                fromAminoMsg(object: _96.VoteAminoMsg): _96.Vote;
                toAminoMsg(message: _96.Vote): _96.VoteAminoMsg;
                fromProtoMsg(message: _96.VoteProtoMsg): _96.Vote;
                toProto(message: _96.Vote): Uint8Array;
                toProtoMsg(message: _96.Vote): _96.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _96.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.DepositParams;
                fromPartial(object: Partial<_96.DepositParams>): _96.DepositParams;
                fromAmino(object: _96.DepositParamsAmino): _96.DepositParams;
                toAmino(message: _96.DepositParams): _96.DepositParamsAmino;
                fromAminoMsg(object: _96.DepositParamsAminoMsg): _96.DepositParams;
                toAminoMsg(message: _96.DepositParams): _96.DepositParamsAminoMsg;
                fromProtoMsg(message: _96.DepositParamsProtoMsg): _96.DepositParams;
                toProto(message: _96.DepositParams): Uint8Array;
                toProtoMsg(message: _96.DepositParams): _96.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _96.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.VotingParams;
                fromPartial(object: Partial<_96.VotingParams>): _96.VotingParams;
                fromAmino(object: _96.VotingParamsAmino): _96.VotingParams;
                toAmino(message: _96.VotingParams): _96.VotingParamsAmino;
                fromAminoMsg(object: _96.VotingParamsAminoMsg): _96.VotingParams;
                toAminoMsg(message: _96.VotingParams): _96.VotingParamsAminoMsg;
                fromProtoMsg(message: _96.VotingParamsProtoMsg): _96.VotingParams;
                toProto(message: _96.VotingParams): Uint8Array;
                toProtoMsg(message: _96.VotingParams): _96.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _96.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.TallyParams;
                fromPartial(object: Partial<_96.TallyParams>): _96.TallyParams;
                fromAmino(object: _96.TallyParamsAmino): _96.TallyParams;
                toAmino(message: _96.TallyParams): _96.TallyParamsAmino;
                fromAminoMsg(object: _96.TallyParamsAminoMsg): _96.TallyParams;
                toAminoMsg(message: _96.TallyParams): _96.TallyParamsAminoMsg;
                fromProtoMsg(message: _96.TallyParamsProtoMsg): _96.TallyParams;
                toProto(message: _96.TallyParams): Uint8Array;
                toProtoMsg(message: _96.TallyParams): _96.TallyParamsProtoMsg;
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
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _99.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Module;
                    fromPartial(object: Partial<_99.Module>): _99.Module;
                    fromAmino(object: _99.ModuleAmino): _99.Module;
                    toAmino(message: _99.Module): _99.ModuleAmino;
                    fromAminoMsg(object: _99.ModuleAminoMsg): _99.Module;
                    toAminoMsg(message: _99.Module): _99.ModuleAminoMsg;
                    fromProtoMsg(message: _99.ModuleProtoMsg): _99.Module;
                    toProto(message: _99.Module): Uint8Array;
                    toProtoMsg(message: _99.Module): _99.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                groupInfo(request: _102.QueryGroupInfoRequest): Promise<_102.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _102.QueryGroupPolicyInfoRequest): Promise<_102.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _102.QueryGroupMembersRequest): Promise<_102.QueryGroupMembersResponse>;
                groupsByAdmin(request: _102.QueryGroupsByAdminRequest): Promise<_102.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _102.QueryGroupPoliciesByGroupRequest): Promise<_102.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _102.QueryGroupPoliciesByAdminRequest): Promise<_102.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _102.QueryProposalRequest): Promise<_102.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _102.QueryProposalsByGroupPolicyRequest): Promise<_102.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _102.QueryVoteByProposalVoterRequest): Promise<_102.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _102.QueryVotesByProposalRequest): Promise<_102.QueryVotesByProposalResponse>;
                votesByVoter(request: _102.QueryVotesByVoterRequest): Promise<_102.QueryVotesByVoterResponse>;
                groupsByMember(request: _102.QueryGroupsByMemberRequest): Promise<_102.QueryGroupsByMemberResponse>;
                tallyResult(request: _102.QueryTallyResultRequest): Promise<_102.QueryTallyResultResponse>;
                groups(request?: _102.QueryGroupsRequest): Promise<_102.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _103.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _103.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _103.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _103.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _103.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _103.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _103.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _103.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _103.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _103.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _103.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _103.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _103.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _103.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _103.MsgCreateGroup): {
                        typeUrl: string;
                        value: _103.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _103.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _103.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _103.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _103.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _103.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _103.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _103.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _103.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _103.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _103.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _103.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _103.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _103.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _103.MsgWithdrawProposal;
                    };
                    vote(value: _103.MsgVote): {
                        typeUrl: string;
                        value: _103.MsgVote;
                    };
                    exec(value: _103.MsgExec): {
                        typeUrl: string;
                        value: _103.MsgExec;
                    };
                    leaveGroup(value: _103.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _103.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _103.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _103.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _103.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _103.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _103.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _103.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _103.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _103.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _103.MsgCreateGroup): {
                        typeUrl: string;
                        value: _103.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _103.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _103.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _103.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _103.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _103.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _103.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _103.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _103.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _103.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _103.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _103.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _103.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _103.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _103.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _103.MsgWithdrawProposal;
                    };
                    vote(value: _103.MsgVote): {
                        typeUrl: string;
                        value: _103.MsgVote;
                    };
                    exec(value: _103.MsgExec): {
                        typeUrl: string;
                        value: _103.MsgExec;
                    };
                    leaveGroup(value: _103.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _103.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _103.MsgCreateGroup) => _103.MsgCreateGroupAmino;
                    fromAmino: (object: _103.MsgCreateGroupAmino) => _103.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateGroupMembers) => _103.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _103.MsgUpdateGroupMembersAmino) => _103.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateGroupAdmin) => _103.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _103.MsgUpdateGroupAdminAmino) => _103.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateGroupMetadata) => _103.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _103.MsgUpdateGroupMetadataAmino) => _103.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _103.MsgCreateGroupPolicy) => _103.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _103.MsgCreateGroupPolicyAmino) => _103.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _103.MsgCreateGroupWithPolicy) => _103.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _103.MsgCreateGroupWithPolicyAmino) => _103.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateGroupPolicyAdmin) => _103.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _103.MsgUpdateGroupPolicyAdminAmino) => _103.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateGroupPolicyDecisionPolicy) => _103.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _103.MsgUpdateGroupPolicyDecisionPolicyAmino) => _103.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateGroupPolicyMetadata) => _103.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _103.MsgUpdateGroupPolicyMetadataAmino) => _103.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _103.MsgSubmitProposal) => _103.MsgSubmitProposalAmino;
                    fromAmino: (object: _103.MsgSubmitProposalAmino) => _103.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _103.MsgWithdrawProposal) => _103.MsgWithdrawProposalAmino;
                    fromAmino: (object: _103.MsgWithdrawProposalAmino) => _103.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _103.MsgVote) => _103.MsgVoteAmino;
                    fromAmino: (object: _103.MsgVoteAmino) => _103.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _103.MsgExec) => _103.MsgExecAmino;
                    fromAmino: (object: _103.MsgExecAmino) => _103.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _103.MsgLeaveGroup) => _103.MsgLeaveGroupAmino;
                    fromAmino: (object: _103.MsgLeaveGroupAmino) => _103.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _104.VoteOption;
            voteOptionToJSON(object: _104.VoteOption): string;
            proposalStatusFromJSON(object: any): _104.ProposalStatus;
            proposalStatusToJSON(object: _104.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _104.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _104.ProposalExecutorResult): string;
            VoteOption: typeof _104.VoteOption;
            VoteOptionSDKType: typeof _104.VoteOption;
            VoteOptionAmino: typeof _104.VoteOption;
            ProposalStatus: typeof _104.ProposalStatus;
            ProposalStatusSDKType: typeof _104.ProposalStatus;
            ProposalStatusAmino: typeof _104.ProposalStatus;
            ProposalExecutorResult: typeof _104.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _104.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _104.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _104.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Member;
                fromPartial(object: Partial<_104.Member>): _104.Member;
                fromAmino(object: _104.MemberAmino): _104.Member;
                toAmino(message: _104.Member): _104.MemberAmino;
                fromAminoMsg(object: _104.MemberAminoMsg): _104.Member;
                toAminoMsg(message: _104.Member): _104.MemberAminoMsg;
                fromProtoMsg(message: _104.MemberProtoMsg): _104.Member;
                toProto(message: _104.Member): Uint8Array;
                toProtoMsg(message: _104.Member): _104.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _104.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.MemberRequest;
                fromPartial(object: Partial<_104.MemberRequest>): _104.MemberRequest;
                fromAmino(object: _104.MemberRequestAmino): _104.MemberRequest;
                toAmino(message: _104.MemberRequest): _104.MemberRequestAmino;
                fromAminoMsg(object: _104.MemberRequestAminoMsg): _104.MemberRequest;
                toAminoMsg(message: _104.MemberRequest): _104.MemberRequestAminoMsg;
                fromProtoMsg(message: _104.MemberRequestProtoMsg): _104.MemberRequest;
                toProto(message: _104.MemberRequest): Uint8Array;
                toProtoMsg(message: _104.MemberRequest): _104.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _104.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_104.ThresholdDecisionPolicy>): _104.ThresholdDecisionPolicy;
                fromAmino(object: _104.ThresholdDecisionPolicyAmino): _104.ThresholdDecisionPolicy;
                toAmino(message: _104.ThresholdDecisionPolicy): _104.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _104.ThresholdDecisionPolicyAminoMsg): _104.ThresholdDecisionPolicy;
                toAminoMsg(message: _104.ThresholdDecisionPolicy): _104.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _104.ThresholdDecisionPolicyProtoMsg): _104.ThresholdDecisionPolicy;
                toProto(message: _104.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _104.ThresholdDecisionPolicy): _104.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _104.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.PercentageDecisionPolicy;
                fromPartial(object: Partial<_104.PercentageDecisionPolicy>): _104.PercentageDecisionPolicy;
                fromAmino(object: _104.PercentageDecisionPolicyAmino): _104.PercentageDecisionPolicy;
                toAmino(message: _104.PercentageDecisionPolicy): _104.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _104.PercentageDecisionPolicyAminoMsg): _104.PercentageDecisionPolicy;
                toAminoMsg(message: _104.PercentageDecisionPolicy): _104.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _104.PercentageDecisionPolicyProtoMsg): _104.PercentageDecisionPolicy;
                toProto(message: _104.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _104.PercentageDecisionPolicy): _104.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _104.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DecisionPolicyWindows;
                fromPartial(object: Partial<_104.DecisionPolicyWindows>): _104.DecisionPolicyWindows;
                fromAmino(object: _104.DecisionPolicyWindowsAmino): _104.DecisionPolicyWindows;
                toAmino(message: _104.DecisionPolicyWindows): _104.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _104.DecisionPolicyWindowsAminoMsg): _104.DecisionPolicyWindows;
                toAminoMsg(message: _104.DecisionPolicyWindows): _104.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _104.DecisionPolicyWindowsProtoMsg): _104.DecisionPolicyWindows;
                toProto(message: _104.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _104.DecisionPolicyWindows): _104.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _104.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.GroupInfo;
                fromPartial(object: Partial<_104.GroupInfo>): _104.GroupInfo;
                fromAmino(object: _104.GroupInfoAmino): _104.GroupInfo;
                toAmino(message: _104.GroupInfo): _104.GroupInfoAmino;
                fromAminoMsg(object: _104.GroupInfoAminoMsg): _104.GroupInfo;
                toAminoMsg(message: _104.GroupInfo): _104.GroupInfoAminoMsg;
                fromProtoMsg(message: _104.GroupInfoProtoMsg): _104.GroupInfo;
                toProto(message: _104.GroupInfo): Uint8Array;
                toProtoMsg(message: _104.GroupInfo): _104.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _104.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.GroupMember;
                fromPartial(object: Partial<_104.GroupMember>): _104.GroupMember;
                fromAmino(object: _104.GroupMemberAmino): _104.GroupMember;
                toAmino(message: _104.GroupMember): _104.GroupMemberAmino;
                fromAminoMsg(object: _104.GroupMemberAminoMsg): _104.GroupMember;
                toAminoMsg(message: _104.GroupMember): _104.GroupMemberAminoMsg;
                fromProtoMsg(message: _104.GroupMemberProtoMsg): _104.GroupMember;
                toProto(message: _104.GroupMember): Uint8Array;
                toProtoMsg(message: _104.GroupMember): _104.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _104.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.GroupPolicyInfo;
                fromPartial(object: Partial<_104.GroupPolicyInfo>): _104.GroupPolicyInfo;
                fromAmino(object: _104.GroupPolicyInfoAmino): _104.GroupPolicyInfo;
                toAmino(message: _104.GroupPolicyInfo): _104.GroupPolicyInfoAmino;
                fromAminoMsg(object: _104.GroupPolicyInfoAminoMsg): _104.GroupPolicyInfo;
                toAminoMsg(message: _104.GroupPolicyInfo): _104.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _104.GroupPolicyInfoProtoMsg): _104.GroupPolicyInfo;
                toProto(message: _104.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _104.GroupPolicyInfo): _104.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _104.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Proposal;
                fromPartial(object: Partial<_104.Proposal>): _104.Proposal;
                fromAmino(object: _104.ProposalAmino): _104.Proposal;
                toAmino(message: _104.Proposal): _104.ProposalAmino;
                fromAminoMsg(object: _104.ProposalAminoMsg): _104.Proposal;
                toAminoMsg(message: _104.Proposal): _104.ProposalAminoMsg;
                fromProtoMsg(message: _104.ProposalProtoMsg): _104.Proposal;
                toProto(message: _104.Proposal): Uint8Array;
                toProtoMsg(message: _104.Proposal): _104.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _104.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.TallyResult;
                fromPartial(object: Partial<_104.TallyResult>): _104.TallyResult;
                fromAmino(object: _104.TallyResultAmino): _104.TallyResult;
                toAmino(message: _104.TallyResult): _104.TallyResultAmino;
                fromAminoMsg(object: _104.TallyResultAminoMsg): _104.TallyResult;
                toAminoMsg(message: _104.TallyResult): _104.TallyResultAminoMsg;
                fromProtoMsg(message: _104.TallyResultProtoMsg): _104.TallyResult;
                toProto(message: _104.TallyResult): Uint8Array;
                toProtoMsg(message: _104.TallyResult): _104.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _104.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Vote;
                fromPartial(object: Partial<_104.Vote>): _104.Vote;
                fromAmino(object: _104.VoteAmino): _104.Vote;
                toAmino(message: _104.Vote): _104.VoteAmino;
                fromAminoMsg(object: _104.VoteAminoMsg): _104.Vote;
                toAminoMsg(message: _104.Vote): _104.VoteAminoMsg;
                fromProtoMsg(message: _104.VoteProtoMsg): _104.Vote;
                toProto(message: _104.Vote): Uint8Array;
                toProtoMsg(message: _104.Vote): _104.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _104.ThresholdDecisionPolicy | _104.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _103.Exec;
            execToJSON(object: _103.Exec): string;
            Exec: typeof _103.Exec;
            ExecSDKType: typeof _103.Exec;
            ExecAmino: typeof _103.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _103.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCreateGroup;
                fromPartial(object: Partial<_103.MsgCreateGroup>): _103.MsgCreateGroup;
                fromAmino(object: _103.MsgCreateGroupAmino): _103.MsgCreateGroup;
                toAmino(message: _103.MsgCreateGroup): _103.MsgCreateGroupAmino;
                fromAminoMsg(object: _103.MsgCreateGroupAminoMsg): _103.MsgCreateGroup;
                toAminoMsg(message: _103.MsgCreateGroup): _103.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _103.MsgCreateGroupProtoMsg): _103.MsgCreateGroup;
                toProto(message: _103.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _103.MsgCreateGroup): _103.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _103.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCreateGroupResponse;
                fromPartial(object: Partial<_103.MsgCreateGroupResponse>): _103.MsgCreateGroupResponse;
                fromAmino(object: _103.MsgCreateGroupResponseAmino): _103.MsgCreateGroupResponse;
                toAmino(message: _103.MsgCreateGroupResponse): _103.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _103.MsgCreateGroupResponseAminoMsg): _103.MsgCreateGroupResponse;
                toAminoMsg(message: _103.MsgCreateGroupResponse): _103.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _103.MsgCreateGroupResponseProtoMsg): _103.MsgCreateGroupResponse;
                toProto(message: _103.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _103.MsgCreateGroupResponse): _103.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _103.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_103.MsgUpdateGroupMembers>): _103.MsgUpdateGroupMembers;
                fromAmino(object: _103.MsgUpdateGroupMembersAmino): _103.MsgUpdateGroupMembers;
                toAmino(message: _103.MsgUpdateGroupMembers): _103.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupMembersAminoMsg): _103.MsgUpdateGroupMembers;
                toAminoMsg(message: _103.MsgUpdateGroupMembers): _103.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupMembersProtoMsg): _103.MsgUpdateGroupMembers;
                toProto(message: _103.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupMembers): _103.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_103.MsgUpdateGroupMembersResponse>): _103.MsgUpdateGroupMembersResponse;
                fromAmino(_: _103.MsgUpdateGroupMembersResponseAmino): _103.MsgUpdateGroupMembersResponse;
                toAmino(_: _103.MsgUpdateGroupMembersResponse): _103.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupMembersResponseAminoMsg): _103.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _103.MsgUpdateGroupMembersResponse): _103.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupMembersResponseProtoMsg): _103.MsgUpdateGroupMembersResponse;
                toProto(message: _103.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupMembersResponse): _103.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _103.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_103.MsgUpdateGroupAdmin>): _103.MsgUpdateGroupAdmin;
                fromAmino(object: _103.MsgUpdateGroupAdminAmino): _103.MsgUpdateGroupAdmin;
                toAmino(message: _103.MsgUpdateGroupAdmin): _103.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupAdminAminoMsg): _103.MsgUpdateGroupAdmin;
                toAminoMsg(message: _103.MsgUpdateGroupAdmin): _103.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupAdminProtoMsg): _103.MsgUpdateGroupAdmin;
                toProto(message: _103.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupAdmin): _103.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_103.MsgUpdateGroupAdminResponse>): _103.MsgUpdateGroupAdminResponse;
                fromAmino(_: _103.MsgUpdateGroupAdminResponseAmino): _103.MsgUpdateGroupAdminResponse;
                toAmino(_: _103.MsgUpdateGroupAdminResponse): _103.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupAdminResponseAminoMsg): _103.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _103.MsgUpdateGroupAdminResponse): _103.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupAdminResponseProtoMsg): _103.MsgUpdateGroupAdminResponse;
                toProto(message: _103.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupAdminResponse): _103.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _103.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_103.MsgUpdateGroupMetadata>): _103.MsgUpdateGroupMetadata;
                fromAmino(object: _103.MsgUpdateGroupMetadataAmino): _103.MsgUpdateGroupMetadata;
                toAmino(message: _103.MsgUpdateGroupMetadata): _103.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupMetadataAminoMsg): _103.MsgUpdateGroupMetadata;
                toAminoMsg(message: _103.MsgUpdateGroupMetadata): _103.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupMetadataProtoMsg): _103.MsgUpdateGroupMetadata;
                toProto(message: _103.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupMetadata): _103.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_103.MsgUpdateGroupMetadataResponse>): _103.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _103.MsgUpdateGroupMetadataResponseAmino): _103.MsgUpdateGroupMetadataResponse;
                toAmino(_: _103.MsgUpdateGroupMetadataResponse): _103.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupMetadataResponseAminoMsg): _103.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _103.MsgUpdateGroupMetadataResponse): _103.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupMetadataResponseProtoMsg): _103.MsgUpdateGroupMetadataResponse;
                toProto(message: _103.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupMetadataResponse): _103.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _103.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_103.MsgCreateGroupPolicy>): _103.MsgCreateGroupPolicy;
                fromAmino(object: _103.MsgCreateGroupPolicyAmino): _103.MsgCreateGroupPolicy;
                toAmino(message: _103.MsgCreateGroupPolicy): _103.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _103.MsgCreateGroupPolicyAminoMsg): _103.MsgCreateGroupPolicy;
                toAminoMsg(message: _103.MsgCreateGroupPolicy): _103.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _103.MsgCreateGroupPolicyProtoMsg): _103.MsgCreateGroupPolicy;
                toProto(message: _103.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _103.MsgCreateGroupPolicy): _103.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _103.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_103.MsgCreateGroupPolicyResponse>): _103.MsgCreateGroupPolicyResponse;
                fromAmino(object: _103.MsgCreateGroupPolicyResponseAmino): _103.MsgCreateGroupPolicyResponse;
                toAmino(message: _103.MsgCreateGroupPolicyResponse): _103.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _103.MsgCreateGroupPolicyResponseAminoMsg): _103.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _103.MsgCreateGroupPolicyResponse): _103.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _103.MsgCreateGroupPolicyResponseProtoMsg): _103.MsgCreateGroupPolicyResponse;
                toProto(message: _103.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _103.MsgCreateGroupPolicyResponse): _103.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _103.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_103.MsgUpdateGroupPolicyAdmin>): _103.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _103.MsgUpdateGroupPolicyAdminAmino): _103.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _103.MsgUpdateGroupPolicyAdmin): _103.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupPolicyAdminAminoMsg): _103.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _103.MsgUpdateGroupPolicyAdmin): _103.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupPolicyAdminProtoMsg): _103.MsgUpdateGroupPolicyAdmin;
                toProto(message: _103.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupPolicyAdmin): _103.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_103.MsgUpdateGroupPolicyAdminResponse>): _103.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _103.MsgUpdateGroupPolicyAdminResponseAmino): _103.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _103.MsgUpdateGroupPolicyAdminResponse): _103.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupPolicyAdminResponseAminoMsg): _103.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _103.MsgUpdateGroupPolicyAdminResponse): _103.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupPolicyAdminResponseProtoMsg): _103.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _103.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupPolicyAdminResponse): _103.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _103.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_103.MsgCreateGroupWithPolicy>): _103.MsgCreateGroupWithPolicy;
                fromAmino(object: _103.MsgCreateGroupWithPolicyAmino): _103.MsgCreateGroupWithPolicy;
                toAmino(message: _103.MsgCreateGroupWithPolicy): _103.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _103.MsgCreateGroupWithPolicyAminoMsg): _103.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _103.MsgCreateGroupWithPolicy): _103.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _103.MsgCreateGroupWithPolicyProtoMsg): _103.MsgCreateGroupWithPolicy;
                toProto(message: _103.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _103.MsgCreateGroupWithPolicy): _103.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _103.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_103.MsgCreateGroupWithPolicyResponse>): _103.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _103.MsgCreateGroupWithPolicyResponseAmino): _103.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _103.MsgCreateGroupWithPolicyResponse): _103.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _103.MsgCreateGroupWithPolicyResponseAminoMsg): _103.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _103.MsgCreateGroupWithPolicyResponse): _103.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _103.MsgCreateGroupWithPolicyResponseProtoMsg): _103.MsgCreateGroupWithPolicyResponse;
                toProto(message: _103.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _103.MsgCreateGroupWithPolicyResponse): _103.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _103.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_103.MsgUpdateGroupPolicyDecisionPolicy>): _103.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _103.MsgUpdateGroupPolicyDecisionPolicyAmino): _103.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _103.MsgUpdateGroupPolicyDecisionPolicy): _103.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _103.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _103.MsgUpdateGroupPolicyDecisionPolicy): _103.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _103.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _103.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupPolicyDecisionPolicy): _103.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_103.MsgUpdateGroupPolicyDecisionPolicyResponse>): _103.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _103.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _103.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _103.MsgUpdateGroupPolicyDecisionPolicyResponse): _103.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _103.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _103.MsgUpdateGroupPolicyDecisionPolicyResponse): _103.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _103.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _103.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupPolicyDecisionPolicyResponse): _103.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _103.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_103.MsgUpdateGroupPolicyMetadata>): _103.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _103.MsgUpdateGroupPolicyMetadataAmino): _103.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _103.MsgUpdateGroupPolicyMetadata): _103.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupPolicyMetadataAminoMsg): _103.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _103.MsgUpdateGroupPolicyMetadata): _103.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupPolicyMetadataProtoMsg): _103.MsgUpdateGroupPolicyMetadata;
                toProto(message: _103.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupPolicyMetadata): _103.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_103.MsgUpdateGroupPolicyMetadataResponse>): _103.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _103.MsgUpdateGroupPolicyMetadataResponseAmino): _103.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _103.MsgUpdateGroupPolicyMetadataResponse): _103.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _103.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _103.MsgUpdateGroupPolicyMetadataResponse): _103.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _103.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _103.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _103.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateGroupPolicyMetadataResponse): _103.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _103.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgSubmitProposal;
                fromPartial(object: Partial<_103.MsgSubmitProposal>): _103.MsgSubmitProposal;
                fromAmino(object: _103.MsgSubmitProposalAmino): _103.MsgSubmitProposal;
                toAmino(message: _103.MsgSubmitProposal): _103.MsgSubmitProposalAmino;
                fromAminoMsg(object: _103.MsgSubmitProposalAminoMsg): _103.MsgSubmitProposal;
                toAminoMsg(message: _103.MsgSubmitProposal): _103.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _103.MsgSubmitProposalProtoMsg): _103.MsgSubmitProposal;
                toProto(message: _103.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _103.MsgSubmitProposal): _103.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _103.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_103.MsgSubmitProposalResponse>): _103.MsgSubmitProposalResponse;
                fromAmino(object: _103.MsgSubmitProposalResponseAmino): _103.MsgSubmitProposalResponse;
                toAmino(message: _103.MsgSubmitProposalResponse): _103.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _103.MsgSubmitProposalResponseAminoMsg): _103.MsgSubmitProposalResponse;
                toAminoMsg(message: _103.MsgSubmitProposalResponse): _103.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _103.MsgSubmitProposalResponseProtoMsg): _103.MsgSubmitProposalResponse;
                toProto(message: _103.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _103.MsgSubmitProposalResponse): _103.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _103.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgWithdrawProposal;
                fromPartial(object: Partial<_103.MsgWithdrawProposal>): _103.MsgWithdrawProposal;
                fromAmino(object: _103.MsgWithdrawProposalAmino): _103.MsgWithdrawProposal;
                toAmino(message: _103.MsgWithdrawProposal): _103.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _103.MsgWithdrawProposalAminoMsg): _103.MsgWithdrawProposal;
                toAminoMsg(message: _103.MsgWithdrawProposal): _103.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _103.MsgWithdrawProposalProtoMsg): _103.MsgWithdrawProposal;
                toProto(message: _103.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _103.MsgWithdrawProposal): _103.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _103.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_103.MsgWithdrawProposalResponse>): _103.MsgWithdrawProposalResponse;
                fromAmino(_: _103.MsgWithdrawProposalResponseAmino): _103.MsgWithdrawProposalResponse;
                toAmino(_: _103.MsgWithdrawProposalResponse): _103.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _103.MsgWithdrawProposalResponseAminoMsg): _103.MsgWithdrawProposalResponse;
                toAminoMsg(message: _103.MsgWithdrawProposalResponse): _103.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _103.MsgWithdrawProposalResponseProtoMsg): _103.MsgWithdrawProposalResponse;
                toProto(message: _103.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _103.MsgWithdrawProposalResponse): _103.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _103.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgVote;
                fromPartial(object: Partial<_103.MsgVote>): _103.MsgVote;
                fromAmino(object: _103.MsgVoteAmino): _103.MsgVote;
                toAmino(message: _103.MsgVote): _103.MsgVoteAmino;
                fromAminoMsg(object: _103.MsgVoteAminoMsg): _103.MsgVote;
                toAminoMsg(message: _103.MsgVote): _103.MsgVoteAminoMsg;
                fromProtoMsg(message: _103.MsgVoteProtoMsg): _103.MsgVote;
                toProto(message: _103.MsgVote): Uint8Array;
                toProtoMsg(message: _103.MsgVote): _103.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _103.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgVoteResponse;
                fromPartial(_: Partial<_103.MsgVoteResponse>): _103.MsgVoteResponse;
                fromAmino(_: _103.MsgVoteResponseAmino): _103.MsgVoteResponse;
                toAmino(_: _103.MsgVoteResponse): _103.MsgVoteResponseAmino;
                fromAminoMsg(object: _103.MsgVoteResponseAminoMsg): _103.MsgVoteResponse;
                toAminoMsg(message: _103.MsgVoteResponse): _103.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _103.MsgVoteResponseProtoMsg): _103.MsgVoteResponse;
                toProto(message: _103.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _103.MsgVoteResponse): _103.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _103.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgExec;
                fromPartial(object: Partial<_103.MsgExec>): _103.MsgExec;
                fromAmino(object: _103.MsgExecAmino): _103.MsgExec;
                toAmino(message: _103.MsgExec): _103.MsgExecAmino;
                fromAminoMsg(object: _103.MsgExecAminoMsg): _103.MsgExec;
                toAminoMsg(message: _103.MsgExec): _103.MsgExecAminoMsg;
                fromProtoMsg(message: _103.MsgExecProtoMsg): _103.MsgExec;
                toProto(message: _103.MsgExec): Uint8Array;
                toProtoMsg(message: _103.MsgExec): _103.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _103.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgExecResponse;
                fromPartial(object: Partial<_103.MsgExecResponse>): _103.MsgExecResponse;
                fromAmino(object: _103.MsgExecResponseAmino): _103.MsgExecResponse;
                toAmino(message: _103.MsgExecResponse): _103.MsgExecResponseAmino;
                fromAminoMsg(object: _103.MsgExecResponseAminoMsg): _103.MsgExecResponse;
                toAminoMsg(message: _103.MsgExecResponse): _103.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _103.MsgExecResponseProtoMsg): _103.MsgExecResponse;
                toProto(message: _103.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _103.MsgExecResponse): _103.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _103.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgLeaveGroup;
                fromPartial(object: Partial<_103.MsgLeaveGroup>): _103.MsgLeaveGroup;
                fromAmino(object: _103.MsgLeaveGroupAmino): _103.MsgLeaveGroup;
                toAmino(message: _103.MsgLeaveGroup): _103.MsgLeaveGroupAmino;
                fromAminoMsg(object: _103.MsgLeaveGroupAminoMsg): _103.MsgLeaveGroup;
                toAminoMsg(message: _103.MsgLeaveGroup): _103.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _103.MsgLeaveGroupProtoMsg): _103.MsgLeaveGroup;
                toProto(message: _103.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _103.MsgLeaveGroup): _103.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _103.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_103.MsgLeaveGroupResponse>): _103.MsgLeaveGroupResponse;
                fromAmino(_: _103.MsgLeaveGroupResponseAmino): _103.MsgLeaveGroupResponse;
                toAmino(_: _103.MsgLeaveGroupResponse): _103.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _103.MsgLeaveGroupResponseAminoMsg): _103.MsgLeaveGroupResponse;
                toAminoMsg(message: _103.MsgLeaveGroupResponse): _103.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _103.MsgLeaveGroupResponseProtoMsg): _103.MsgLeaveGroupResponse;
                toProto(message: _103.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _103.MsgLeaveGroupResponse): _103.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupInfoRequest;
                fromPartial(object: Partial<_102.QueryGroupInfoRequest>): _102.QueryGroupInfoRequest;
                fromAmino(object: _102.QueryGroupInfoRequestAmino): _102.QueryGroupInfoRequest;
                toAmino(message: _102.QueryGroupInfoRequest): _102.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _102.QueryGroupInfoRequestAminoMsg): _102.QueryGroupInfoRequest;
                toAminoMsg(message: _102.QueryGroupInfoRequest): _102.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupInfoRequestProtoMsg): _102.QueryGroupInfoRequest;
                toProto(message: _102.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupInfoRequest): _102.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupInfoResponse;
                fromPartial(object: Partial<_102.QueryGroupInfoResponse>): _102.QueryGroupInfoResponse;
                fromAmino(object: _102.QueryGroupInfoResponseAmino): _102.QueryGroupInfoResponse;
                toAmino(message: _102.QueryGroupInfoResponse): _102.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _102.QueryGroupInfoResponseAminoMsg): _102.QueryGroupInfoResponse;
                toAminoMsg(message: _102.QueryGroupInfoResponse): _102.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupInfoResponseProtoMsg): _102.QueryGroupInfoResponse;
                toProto(message: _102.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupInfoResponse): _102.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_102.QueryGroupPolicyInfoRequest>): _102.QueryGroupPolicyInfoRequest;
                fromAmino(object: _102.QueryGroupPolicyInfoRequestAmino): _102.QueryGroupPolicyInfoRequest;
                toAmino(message: _102.QueryGroupPolicyInfoRequest): _102.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _102.QueryGroupPolicyInfoRequestAminoMsg): _102.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _102.QueryGroupPolicyInfoRequest): _102.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupPolicyInfoRequestProtoMsg): _102.QueryGroupPolicyInfoRequest;
                toProto(message: _102.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupPolicyInfoRequest): _102.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_102.QueryGroupPolicyInfoResponse>): _102.QueryGroupPolicyInfoResponse;
                fromAmino(object: _102.QueryGroupPolicyInfoResponseAmino): _102.QueryGroupPolicyInfoResponse;
                toAmino(message: _102.QueryGroupPolicyInfoResponse): _102.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _102.QueryGroupPolicyInfoResponseAminoMsg): _102.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _102.QueryGroupPolicyInfoResponse): _102.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupPolicyInfoResponseProtoMsg): _102.QueryGroupPolicyInfoResponse;
                toProto(message: _102.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupPolicyInfoResponse): _102.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupMembersRequest;
                fromPartial(object: Partial<_102.QueryGroupMembersRequest>): _102.QueryGroupMembersRequest;
                fromAmino(object: _102.QueryGroupMembersRequestAmino): _102.QueryGroupMembersRequest;
                toAmino(message: _102.QueryGroupMembersRequest): _102.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _102.QueryGroupMembersRequestAminoMsg): _102.QueryGroupMembersRequest;
                toAminoMsg(message: _102.QueryGroupMembersRequest): _102.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupMembersRequestProtoMsg): _102.QueryGroupMembersRequest;
                toProto(message: _102.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupMembersRequest): _102.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupMembersResponse;
                fromPartial(object: Partial<_102.QueryGroupMembersResponse>): _102.QueryGroupMembersResponse;
                fromAmino(object: _102.QueryGroupMembersResponseAmino): _102.QueryGroupMembersResponse;
                toAmino(message: _102.QueryGroupMembersResponse): _102.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _102.QueryGroupMembersResponseAminoMsg): _102.QueryGroupMembersResponse;
                toAminoMsg(message: _102.QueryGroupMembersResponse): _102.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupMembersResponseProtoMsg): _102.QueryGroupMembersResponse;
                toProto(message: _102.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupMembersResponse): _102.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_102.QueryGroupsByAdminRequest>): _102.QueryGroupsByAdminRequest;
                fromAmino(object: _102.QueryGroupsByAdminRequestAmino): _102.QueryGroupsByAdminRequest;
                toAmino(message: _102.QueryGroupsByAdminRequest): _102.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _102.QueryGroupsByAdminRequestAminoMsg): _102.QueryGroupsByAdminRequest;
                toAminoMsg(message: _102.QueryGroupsByAdminRequest): _102.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupsByAdminRequestProtoMsg): _102.QueryGroupsByAdminRequest;
                toProto(message: _102.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupsByAdminRequest): _102.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_102.QueryGroupsByAdminResponse>): _102.QueryGroupsByAdminResponse;
                fromAmino(object: _102.QueryGroupsByAdminResponseAmino): _102.QueryGroupsByAdminResponse;
                toAmino(message: _102.QueryGroupsByAdminResponse): _102.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _102.QueryGroupsByAdminResponseAminoMsg): _102.QueryGroupsByAdminResponse;
                toAminoMsg(message: _102.QueryGroupsByAdminResponse): _102.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupsByAdminResponseProtoMsg): _102.QueryGroupsByAdminResponse;
                toProto(message: _102.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupsByAdminResponse): _102.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_102.QueryGroupPoliciesByGroupRequest>): _102.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _102.QueryGroupPoliciesByGroupRequestAmino): _102.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _102.QueryGroupPoliciesByGroupRequest): _102.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _102.QueryGroupPoliciesByGroupRequestAminoMsg): _102.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _102.QueryGroupPoliciesByGroupRequest): _102.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupPoliciesByGroupRequestProtoMsg): _102.QueryGroupPoliciesByGroupRequest;
                toProto(message: _102.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupPoliciesByGroupRequest): _102.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_102.QueryGroupPoliciesByGroupResponse>): _102.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _102.QueryGroupPoliciesByGroupResponseAmino): _102.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _102.QueryGroupPoliciesByGroupResponse): _102.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _102.QueryGroupPoliciesByGroupResponseAminoMsg): _102.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _102.QueryGroupPoliciesByGroupResponse): _102.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupPoliciesByGroupResponseProtoMsg): _102.QueryGroupPoliciesByGroupResponse;
                toProto(message: _102.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupPoliciesByGroupResponse): _102.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_102.QueryGroupPoliciesByAdminRequest>): _102.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _102.QueryGroupPoliciesByAdminRequestAmino): _102.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _102.QueryGroupPoliciesByAdminRequest): _102.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _102.QueryGroupPoliciesByAdminRequestAminoMsg): _102.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _102.QueryGroupPoliciesByAdminRequest): _102.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupPoliciesByAdminRequestProtoMsg): _102.QueryGroupPoliciesByAdminRequest;
                toProto(message: _102.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupPoliciesByAdminRequest): _102.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_102.QueryGroupPoliciesByAdminResponse>): _102.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _102.QueryGroupPoliciesByAdminResponseAmino): _102.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _102.QueryGroupPoliciesByAdminResponse): _102.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _102.QueryGroupPoliciesByAdminResponseAminoMsg): _102.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _102.QueryGroupPoliciesByAdminResponse): _102.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupPoliciesByAdminResponseProtoMsg): _102.QueryGroupPoliciesByAdminResponse;
                toProto(message: _102.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupPoliciesByAdminResponse): _102.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _102.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryProposalRequest;
                fromPartial(object: Partial<_102.QueryProposalRequest>): _102.QueryProposalRequest;
                fromAmino(object: _102.QueryProposalRequestAmino): _102.QueryProposalRequest;
                toAmino(message: _102.QueryProposalRequest): _102.QueryProposalRequestAmino;
                fromAminoMsg(object: _102.QueryProposalRequestAminoMsg): _102.QueryProposalRequest;
                toAminoMsg(message: _102.QueryProposalRequest): _102.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _102.QueryProposalRequestProtoMsg): _102.QueryProposalRequest;
                toProto(message: _102.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _102.QueryProposalRequest): _102.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _102.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryProposalResponse;
                fromPartial(object: Partial<_102.QueryProposalResponse>): _102.QueryProposalResponse;
                fromAmino(object: _102.QueryProposalResponseAmino): _102.QueryProposalResponse;
                toAmino(message: _102.QueryProposalResponse): _102.QueryProposalResponseAmino;
                fromAminoMsg(object: _102.QueryProposalResponseAminoMsg): _102.QueryProposalResponse;
                toAminoMsg(message: _102.QueryProposalResponse): _102.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _102.QueryProposalResponseProtoMsg): _102.QueryProposalResponse;
                toProto(message: _102.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _102.QueryProposalResponse): _102.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _102.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_102.QueryProposalsByGroupPolicyRequest>): _102.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _102.QueryProposalsByGroupPolicyRequestAmino): _102.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _102.QueryProposalsByGroupPolicyRequest): _102.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _102.QueryProposalsByGroupPolicyRequestAminoMsg): _102.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _102.QueryProposalsByGroupPolicyRequest): _102.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _102.QueryProposalsByGroupPolicyRequestProtoMsg): _102.QueryProposalsByGroupPolicyRequest;
                toProto(message: _102.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _102.QueryProposalsByGroupPolicyRequest): _102.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _102.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_102.QueryProposalsByGroupPolicyResponse>): _102.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _102.QueryProposalsByGroupPolicyResponseAmino): _102.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _102.QueryProposalsByGroupPolicyResponse): _102.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _102.QueryProposalsByGroupPolicyResponseAminoMsg): _102.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _102.QueryProposalsByGroupPolicyResponse): _102.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _102.QueryProposalsByGroupPolicyResponseProtoMsg): _102.QueryProposalsByGroupPolicyResponse;
                toProto(message: _102.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _102.QueryProposalsByGroupPolicyResponse): _102.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _102.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_102.QueryVoteByProposalVoterRequest>): _102.QueryVoteByProposalVoterRequest;
                fromAmino(object: _102.QueryVoteByProposalVoterRequestAmino): _102.QueryVoteByProposalVoterRequest;
                toAmino(message: _102.QueryVoteByProposalVoterRequest): _102.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _102.QueryVoteByProposalVoterRequestAminoMsg): _102.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _102.QueryVoteByProposalVoterRequest): _102.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _102.QueryVoteByProposalVoterRequestProtoMsg): _102.QueryVoteByProposalVoterRequest;
                toProto(message: _102.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _102.QueryVoteByProposalVoterRequest): _102.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _102.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_102.QueryVoteByProposalVoterResponse>): _102.QueryVoteByProposalVoterResponse;
                fromAmino(object: _102.QueryVoteByProposalVoterResponseAmino): _102.QueryVoteByProposalVoterResponse;
                toAmino(message: _102.QueryVoteByProposalVoterResponse): _102.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _102.QueryVoteByProposalVoterResponseAminoMsg): _102.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _102.QueryVoteByProposalVoterResponse): _102.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _102.QueryVoteByProposalVoterResponseProtoMsg): _102.QueryVoteByProposalVoterResponse;
                toProto(message: _102.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _102.QueryVoteByProposalVoterResponse): _102.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _102.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_102.QueryVotesByProposalRequest>): _102.QueryVotesByProposalRequest;
                fromAmino(object: _102.QueryVotesByProposalRequestAmino): _102.QueryVotesByProposalRequest;
                toAmino(message: _102.QueryVotesByProposalRequest): _102.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _102.QueryVotesByProposalRequestAminoMsg): _102.QueryVotesByProposalRequest;
                toAminoMsg(message: _102.QueryVotesByProposalRequest): _102.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _102.QueryVotesByProposalRequestProtoMsg): _102.QueryVotesByProposalRequest;
                toProto(message: _102.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _102.QueryVotesByProposalRequest): _102.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _102.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_102.QueryVotesByProposalResponse>): _102.QueryVotesByProposalResponse;
                fromAmino(object: _102.QueryVotesByProposalResponseAmino): _102.QueryVotesByProposalResponse;
                toAmino(message: _102.QueryVotesByProposalResponse): _102.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _102.QueryVotesByProposalResponseAminoMsg): _102.QueryVotesByProposalResponse;
                toAminoMsg(message: _102.QueryVotesByProposalResponse): _102.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _102.QueryVotesByProposalResponseProtoMsg): _102.QueryVotesByProposalResponse;
                toProto(message: _102.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _102.QueryVotesByProposalResponse): _102.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _102.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_102.QueryVotesByVoterRequest>): _102.QueryVotesByVoterRequest;
                fromAmino(object: _102.QueryVotesByVoterRequestAmino): _102.QueryVotesByVoterRequest;
                toAmino(message: _102.QueryVotesByVoterRequest): _102.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _102.QueryVotesByVoterRequestAminoMsg): _102.QueryVotesByVoterRequest;
                toAminoMsg(message: _102.QueryVotesByVoterRequest): _102.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _102.QueryVotesByVoterRequestProtoMsg): _102.QueryVotesByVoterRequest;
                toProto(message: _102.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _102.QueryVotesByVoterRequest): _102.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _102.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_102.QueryVotesByVoterResponse>): _102.QueryVotesByVoterResponse;
                fromAmino(object: _102.QueryVotesByVoterResponseAmino): _102.QueryVotesByVoterResponse;
                toAmino(message: _102.QueryVotesByVoterResponse): _102.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _102.QueryVotesByVoterResponseAminoMsg): _102.QueryVotesByVoterResponse;
                toAminoMsg(message: _102.QueryVotesByVoterResponse): _102.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _102.QueryVotesByVoterResponseProtoMsg): _102.QueryVotesByVoterResponse;
                toProto(message: _102.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _102.QueryVotesByVoterResponse): _102.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_102.QueryGroupsByMemberRequest>): _102.QueryGroupsByMemberRequest;
                fromAmino(object: _102.QueryGroupsByMemberRequestAmino): _102.QueryGroupsByMemberRequest;
                toAmino(message: _102.QueryGroupsByMemberRequest): _102.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _102.QueryGroupsByMemberRequestAminoMsg): _102.QueryGroupsByMemberRequest;
                toAminoMsg(message: _102.QueryGroupsByMemberRequest): _102.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupsByMemberRequestProtoMsg): _102.QueryGroupsByMemberRequest;
                toProto(message: _102.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupsByMemberRequest): _102.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_102.QueryGroupsByMemberResponse>): _102.QueryGroupsByMemberResponse;
                fromAmino(object: _102.QueryGroupsByMemberResponseAmino): _102.QueryGroupsByMemberResponse;
                toAmino(message: _102.QueryGroupsByMemberResponse): _102.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _102.QueryGroupsByMemberResponseAminoMsg): _102.QueryGroupsByMemberResponse;
                toAminoMsg(message: _102.QueryGroupsByMemberResponse): _102.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupsByMemberResponseProtoMsg): _102.QueryGroupsByMemberResponse;
                toProto(message: _102.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupsByMemberResponse): _102.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _102.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryTallyResultRequest;
                fromPartial(object: Partial<_102.QueryTallyResultRequest>): _102.QueryTallyResultRequest;
                fromAmino(object: _102.QueryTallyResultRequestAmino): _102.QueryTallyResultRequest;
                toAmino(message: _102.QueryTallyResultRequest): _102.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _102.QueryTallyResultRequestAminoMsg): _102.QueryTallyResultRequest;
                toAminoMsg(message: _102.QueryTallyResultRequest): _102.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _102.QueryTallyResultRequestProtoMsg): _102.QueryTallyResultRequest;
                toProto(message: _102.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _102.QueryTallyResultRequest): _102.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _102.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryTallyResultResponse;
                fromPartial(object: Partial<_102.QueryTallyResultResponse>): _102.QueryTallyResultResponse;
                fromAmino(object: _102.QueryTallyResultResponseAmino): _102.QueryTallyResultResponse;
                toAmino(message: _102.QueryTallyResultResponse): _102.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _102.QueryTallyResultResponseAminoMsg): _102.QueryTallyResultResponse;
                toAminoMsg(message: _102.QueryTallyResultResponse): _102.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _102.QueryTallyResultResponseProtoMsg): _102.QueryTallyResultResponse;
                toProto(message: _102.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _102.QueryTallyResultResponse): _102.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _102.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupsRequest;
                fromPartial(object: Partial<_102.QueryGroupsRequest>): _102.QueryGroupsRequest;
                fromAmino(object: _102.QueryGroupsRequestAmino): _102.QueryGroupsRequest;
                toAmino(message: _102.QueryGroupsRequest): _102.QueryGroupsRequestAmino;
                fromAminoMsg(object: _102.QueryGroupsRequestAminoMsg): _102.QueryGroupsRequest;
                toAminoMsg(message: _102.QueryGroupsRequest): _102.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryGroupsRequestProtoMsg): _102.QueryGroupsRequest;
                toProto(message: _102.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryGroupsRequest): _102.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _102.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.QueryGroupsResponse;
                fromPartial(object: Partial<_102.QueryGroupsResponse>): _102.QueryGroupsResponse;
                fromAmino(object: _102.QueryGroupsResponseAmino): _102.QueryGroupsResponse;
                toAmino(message: _102.QueryGroupsResponse): _102.QueryGroupsResponseAmino;
                fromAminoMsg(object: _102.QueryGroupsResponseAminoMsg): _102.QueryGroupsResponse;
                toAminoMsg(message: _102.QueryGroupsResponse): _102.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryGroupsResponseProtoMsg): _102.QueryGroupsResponse;
                toProto(message: _102.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryGroupsResponse): _102.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _101.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.GenesisState;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                toAminoMsg(message: _101.GenesisState): _101.GenesisStateAminoMsg;
                fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                toProto(message: _101.GenesisState): Uint8Array;
                toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _100.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventCreateGroup;
                fromPartial(object: Partial<_100.EventCreateGroup>): _100.EventCreateGroup;
                fromAmino(object: _100.EventCreateGroupAmino): _100.EventCreateGroup;
                toAmino(message: _100.EventCreateGroup): _100.EventCreateGroupAmino;
                fromAminoMsg(object: _100.EventCreateGroupAminoMsg): _100.EventCreateGroup;
                toAminoMsg(message: _100.EventCreateGroup): _100.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _100.EventCreateGroupProtoMsg): _100.EventCreateGroup;
                toProto(message: _100.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _100.EventCreateGroup): _100.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _100.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventUpdateGroup;
                fromPartial(object: Partial<_100.EventUpdateGroup>): _100.EventUpdateGroup;
                fromAmino(object: _100.EventUpdateGroupAmino): _100.EventUpdateGroup;
                toAmino(message: _100.EventUpdateGroup): _100.EventUpdateGroupAmino;
                fromAminoMsg(object: _100.EventUpdateGroupAminoMsg): _100.EventUpdateGroup;
                toAminoMsg(message: _100.EventUpdateGroup): _100.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _100.EventUpdateGroupProtoMsg): _100.EventUpdateGroup;
                toProto(message: _100.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _100.EventUpdateGroup): _100.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _100.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventCreateGroupPolicy;
                fromPartial(object: Partial<_100.EventCreateGroupPolicy>): _100.EventCreateGroupPolicy;
                fromAmino(object: _100.EventCreateGroupPolicyAmino): _100.EventCreateGroupPolicy;
                toAmino(message: _100.EventCreateGroupPolicy): _100.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _100.EventCreateGroupPolicyAminoMsg): _100.EventCreateGroupPolicy;
                toAminoMsg(message: _100.EventCreateGroupPolicy): _100.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _100.EventCreateGroupPolicyProtoMsg): _100.EventCreateGroupPolicy;
                toProto(message: _100.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _100.EventCreateGroupPolicy): _100.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _100.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_100.EventUpdateGroupPolicy>): _100.EventUpdateGroupPolicy;
                fromAmino(object: _100.EventUpdateGroupPolicyAmino): _100.EventUpdateGroupPolicy;
                toAmino(message: _100.EventUpdateGroupPolicy): _100.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _100.EventUpdateGroupPolicyAminoMsg): _100.EventUpdateGroupPolicy;
                toAminoMsg(message: _100.EventUpdateGroupPolicy): _100.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _100.EventUpdateGroupPolicyProtoMsg): _100.EventUpdateGroupPolicy;
                toProto(message: _100.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _100.EventUpdateGroupPolicy): _100.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _100.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventSubmitProposal;
                fromPartial(object: Partial<_100.EventSubmitProposal>): _100.EventSubmitProposal;
                fromAmino(object: _100.EventSubmitProposalAmino): _100.EventSubmitProposal;
                toAmino(message: _100.EventSubmitProposal): _100.EventSubmitProposalAmino;
                fromAminoMsg(object: _100.EventSubmitProposalAminoMsg): _100.EventSubmitProposal;
                toAminoMsg(message: _100.EventSubmitProposal): _100.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _100.EventSubmitProposalProtoMsg): _100.EventSubmitProposal;
                toProto(message: _100.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _100.EventSubmitProposal): _100.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _100.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventWithdrawProposal;
                fromPartial(object: Partial<_100.EventWithdrawProposal>): _100.EventWithdrawProposal;
                fromAmino(object: _100.EventWithdrawProposalAmino): _100.EventWithdrawProposal;
                toAmino(message: _100.EventWithdrawProposal): _100.EventWithdrawProposalAmino;
                fromAminoMsg(object: _100.EventWithdrawProposalAminoMsg): _100.EventWithdrawProposal;
                toAminoMsg(message: _100.EventWithdrawProposal): _100.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _100.EventWithdrawProposalProtoMsg): _100.EventWithdrawProposal;
                toProto(message: _100.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _100.EventWithdrawProposal): _100.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _100.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventVote;
                fromPartial(object: Partial<_100.EventVote>): _100.EventVote;
                fromAmino(object: _100.EventVoteAmino): _100.EventVote;
                toAmino(message: _100.EventVote): _100.EventVoteAmino;
                fromAminoMsg(object: _100.EventVoteAminoMsg): _100.EventVote;
                toAminoMsg(message: _100.EventVote): _100.EventVoteAminoMsg;
                fromProtoMsg(message: _100.EventVoteProtoMsg): _100.EventVote;
                toProto(message: _100.EventVote): Uint8Array;
                toProtoMsg(message: _100.EventVote): _100.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _100.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventExec;
                fromPartial(object: Partial<_100.EventExec>): _100.EventExec;
                fromAmino(object: _100.EventExecAmino): _100.EventExec;
                toAmino(message: _100.EventExec): _100.EventExecAmino;
                fromAminoMsg(object: _100.EventExecAminoMsg): _100.EventExec;
                toAminoMsg(message: _100.EventExec): _100.EventExecAminoMsg;
                fromProtoMsg(message: _100.EventExecProtoMsg): _100.EventExec;
                toProto(message: _100.EventExec): Uint8Array;
                toProtoMsg(message: _100.EventExec): _100.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _100.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventLeaveGroup;
                fromPartial(object: Partial<_100.EventLeaveGroup>): _100.EventLeaveGroup;
                fromAmino(object: _100.EventLeaveGroupAmino): _100.EventLeaveGroup;
                toAmino(message: _100.EventLeaveGroup): _100.EventLeaveGroupAmino;
                fromAminoMsg(object: _100.EventLeaveGroupAminoMsg): _100.EventLeaveGroup;
                toAminoMsg(message: _100.EventLeaveGroup): _100.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _100.EventLeaveGroupProtoMsg): _100.EventLeaveGroup;
                toProto(message: _100.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _100.EventLeaveGroup): _100.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _100.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.EventProposalPruned;
                fromPartial(object: Partial<_100.EventProposalPruned>): _100.EventProposalPruned;
                fromAmino(object: _100.EventProposalPrunedAmino): _100.EventProposalPruned;
                toAmino(message: _100.EventProposalPruned): _100.EventProposalPrunedAmino;
                fromAminoMsg(object: _100.EventProposalPrunedAminoMsg): _100.EventProposalPruned;
                toAminoMsg(message: _100.EventProposalPruned): _100.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _100.EventProposalPrunedProtoMsg): _100.EventProposalPruned;
                toProto(message: _100.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _100.EventProposalPruned): _100.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _105.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.Module;
                    fromPartial(object: Partial<_105.Module>): _105.Module;
                    fromAmino(object: _105.ModuleAmino): _105.Module;
                    toAmino(message: _105.Module): _105.ModuleAmino;
                    fromAminoMsg(object: _105.ModuleAminoMsg): _105.Module;
                    toAminoMsg(message: _105.Module): _105.ModuleAminoMsg;
                    fromProtoMsg(message: _105.ModuleProtoMsg): _105.Module;
                    toProto(message: _105.Module): Uint8Array;
                    toProtoMsg(message: _105.Module): _105.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                inflation(request?: _108.QueryInflationRequest): Promise<_108.QueryInflationResponse>;
                annualProvisions(request?: _108.QueryAnnualProvisionsRequest): Promise<_108.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _242.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
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
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _108.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.QueryInflationRequest;
                fromPartial(_: Partial<_108.QueryInflationRequest>): _108.QueryInflationRequest;
                fromAmino(_: _108.QueryInflationRequestAmino): _108.QueryInflationRequest;
                toAmino(_: _108.QueryInflationRequest): _108.QueryInflationRequestAmino;
                fromAminoMsg(object: _108.QueryInflationRequestAminoMsg): _108.QueryInflationRequest;
                toAminoMsg(message: _108.QueryInflationRequest): _108.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _108.QueryInflationRequestProtoMsg): _108.QueryInflationRequest;
                toProto(message: _108.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _108.QueryInflationRequest): _108.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _108.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryInflationResponse;
                fromPartial(object: Partial<_108.QueryInflationResponse>): _108.QueryInflationResponse;
                fromAmino(object: _108.QueryInflationResponseAmino): _108.QueryInflationResponse;
                toAmino(message: _108.QueryInflationResponse): _108.QueryInflationResponseAmino;
                fromAminoMsg(object: _108.QueryInflationResponseAminoMsg): _108.QueryInflationResponse;
                toAminoMsg(message: _108.QueryInflationResponse): _108.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _108.QueryInflationResponseProtoMsg): _108.QueryInflationResponse;
                toProto(message: _108.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _108.QueryInflationResponse): _108.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _108.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _108.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_108.QueryAnnualProvisionsRequest>): _108.QueryAnnualProvisionsRequest;
                fromAmino(_: _108.QueryAnnualProvisionsRequestAmino): _108.QueryAnnualProvisionsRequest;
                toAmino(_: _108.QueryAnnualProvisionsRequest): _108.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _108.QueryAnnualProvisionsRequestAminoMsg): _108.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _108.QueryAnnualProvisionsRequest): _108.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryAnnualProvisionsRequestProtoMsg): _108.QueryAnnualProvisionsRequest;
                toProto(message: _108.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryAnnualProvisionsRequest): _108.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _108.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_108.QueryAnnualProvisionsResponse>): _108.QueryAnnualProvisionsResponse;
                fromAmino(object: _108.QueryAnnualProvisionsResponseAmino): _108.QueryAnnualProvisionsResponse;
                toAmino(message: _108.QueryAnnualProvisionsResponse): _108.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _108.QueryAnnualProvisionsResponseAminoMsg): _108.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _108.QueryAnnualProvisionsResponse): _108.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryAnnualProvisionsResponseProtoMsg): _108.QueryAnnualProvisionsResponse;
                toProto(message: _108.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryAnnualProvisionsResponse): _108.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _107.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Minter;
                fromPartial(object: Partial<_107.Minter>): _107.Minter;
                fromAmino(object: _107.MinterAmino): _107.Minter;
                toAmino(message: _107.Minter): _107.MinterAmino;
                fromAminoMsg(object: _107.MinterAminoMsg): _107.Minter;
                toAminoMsg(message: _107.Minter): _107.MinterAminoMsg;
                fromProtoMsg(message: _107.MinterProtoMsg): _107.Minter;
                toProto(message: _107.Minter): Uint8Array;
                toProtoMsg(message: _107.Minter): _107.MinterProtoMsg;
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
                    encode(_: _111.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _111.Module;
                    fromPartial(_: Partial<_111.Module>): _111.Module;
                    fromAmino(_: _111.ModuleAmino): _111.Module;
                    toAmino(_: _111.Module): _111.ModuleAmino;
                    fromAminoMsg(object: _111.ModuleAminoMsg): _111.Module;
                    toAminoMsg(message: _111.Module): _111.ModuleAminoMsg;
                    fromProtoMsg(message: _111.ModuleProtoMsg): _111.Module;
                    toProto(message: _111.Module): Uint8Array;
                    toProtoMsg(message: _111.Module): _111.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _115.QueryBalanceRequest): Promise<_115.QueryBalanceResponse>;
                owner(request: _115.QueryOwnerRequest): Promise<_115.QueryOwnerResponse>;
                supply(request: _115.QuerySupplyRequest): Promise<_115.QuerySupplyResponse>;
                nFTs(request: _115.QueryNFTsRequest): Promise<_115.QueryNFTsResponse>;
                nFT(request: _115.QueryNFTRequest): Promise<_115.QueryNFTResponse>;
                class(request: _115.QueryClassRequest): Promise<_115.QueryClassResponse>;
                classes(request?: _115.QueryClassesRequest): Promise<_115.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _243.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _116.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _116.MsgSend): {
                        typeUrl: string;
                        value: _116.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _116.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _116.MsgSend): {
                        typeUrl: string;
                        value: _116.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _116.MsgSend) => _116.MsgSendAmino;
                    fromAmino: (object: _116.MsgSendAmino) => _116.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _116.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgSend;
                fromPartial(object: Partial<_116.MsgSend>): _116.MsgSend;
                fromAmino(object: _116.MsgSendAmino): _116.MsgSend;
                toAmino(message: _116.MsgSend): _116.MsgSendAmino;
                fromAminoMsg(object: _116.MsgSendAminoMsg): _116.MsgSend;
                toAminoMsg(message: _116.MsgSend): _116.MsgSendAminoMsg;
                fromProtoMsg(message: _116.MsgSendProtoMsg): _116.MsgSend;
                toProto(message: _116.MsgSend): Uint8Array;
                toProtoMsg(message: _116.MsgSend): _116.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _116.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.MsgSendResponse;
                fromPartial(_: Partial<_116.MsgSendResponse>): _116.MsgSendResponse;
                fromAmino(_: _116.MsgSendResponseAmino): _116.MsgSendResponse;
                toAmino(_: _116.MsgSendResponse): _116.MsgSendResponseAmino;
                fromAminoMsg(object: _116.MsgSendResponseAminoMsg): _116.MsgSendResponse;
                toAminoMsg(message: _116.MsgSendResponse): _116.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _116.MsgSendResponseProtoMsg): _116.MsgSendResponse;
                toProto(message: _116.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _116.MsgSendResponse): _116.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _115.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryBalanceRequest;
                fromPartial(object: Partial<_115.QueryBalanceRequest>): _115.QueryBalanceRequest;
                fromAmino(object: _115.QueryBalanceRequestAmino): _115.QueryBalanceRequest;
                toAmino(message: _115.QueryBalanceRequest): _115.QueryBalanceRequestAmino;
                fromAminoMsg(object: _115.QueryBalanceRequestAminoMsg): _115.QueryBalanceRequest;
                toAminoMsg(message: _115.QueryBalanceRequest): _115.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _115.QueryBalanceRequestProtoMsg): _115.QueryBalanceRequest;
                toProto(message: _115.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _115.QueryBalanceRequest): _115.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _115.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryBalanceResponse;
                fromPartial(object: Partial<_115.QueryBalanceResponse>): _115.QueryBalanceResponse;
                fromAmino(object: _115.QueryBalanceResponseAmino): _115.QueryBalanceResponse;
                toAmino(message: _115.QueryBalanceResponse): _115.QueryBalanceResponseAmino;
                fromAminoMsg(object: _115.QueryBalanceResponseAminoMsg): _115.QueryBalanceResponse;
                toAminoMsg(message: _115.QueryBalanceResponse): _115.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _115.QueryBalanceResponseProtoMsg): _115.QueryBalanceResponse;
                toProto(message: _115.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _115.QueryBalanceResponse): _115.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _115.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryOwnerRequest;
                fromPartial(object: Partial<_115.QueryOwnerRequest>): _115.QueryOwnerRequest;
                fromAmino(object: _115.QueryOwnerRequestAmino): _115.QueryOwnerRequest;
                toAmino(message: _115.QueryOwnerRequest): _115.QueryOwnerRequestAmino;
                fromAminoMsg(object: _115.QueryOwnerRequestAminoMsg): _115.QueryOwnerRequest;
                toAminoMsg(message: _115.QueryOwnerRequest): _115.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _115.QueryOwnerRequestProtoMsg): _115.QueryOwnerRequest;
                toProto(message: _115.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _115.QueryOwnerRequest): _115.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _115.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryOwnerResponse;
                fromPartial(object: Partial<_115.QueryOwnerResponse>): _115.QueryOwnerResponse;
                fromAmino(object: _115.QueryOwnerResponseAmino): _115.QueryOwnerResponse;
                toAmino(message: _115.QueryOwnerResponse): _115.QueryOwnerResponseAmino;
                fromAminoMsg(object: _115.QueryOwnerResponseAminoMsg): _115.QueryOwnerResponse;
                toAminoMsg(message: _115.QueryOwnerResponse): _115.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _115.QueryOwnerResponseProtoMsg): _115.QueryOwnerResponse;
                toProto(message: _115.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _115.QueryOwnerResponse): _115.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _115.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QuerySupplyRequest;
                fromPartial(object: Partial<_115.QuerySupplyRequest>): _115.QuerySupplyRequest;
                fromAmino(object: _115.QuerySupplyRequestAmino): _115.QuerySupplyRequest;
                toAmino(message: _115.QuerySupplyRequest): _115.QuerySupplyRequestAmino;
                fromAminoMsg(object: _115.QuerySupplyRequestAminoMsg): _115.QuerySupplyRequest;
                toAminoMsg(message: _115.QuerySupplyRequest): _115.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _115.QuerySupplyRequestProtoMsg): _115.QuerySupplyRequest;
                toProto(message: _115.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _115.QuerySupplyRequest): _115.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _115.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QuerySupplyResponse;
                fromPartial(object: Partial<_115.QuerySupplyResponse>): _115.QuerySupplyResponse;
                fromAmino(object: _115.QuerySupplyResponseAmino): _115.QuerySupplyResponse;
                toAmino(message: _115.QuerySupplyResponse): _115.QuerySupplyResponseAmino;
                fromAminoMsg(object: _115.QuerySupplyResponseAminoMsg): _115.QuerySupplyResponse;
                toAminoMsg(message: _115.QuerySupplyResponse): _115.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _115.QuerySupplyResponseProtoMsg): _115.QuerySupplyResponse;
                toProto(message: _115.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _115.QuerySupplyResponse): _115.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _115.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryNFTsRequest;
                fromPartial(object: Partial<_115.QueryNFTsRequest>): _115.QueryNFTsRequest;
                fromAmino(object: _115.QueryNFTsRequestAmino): _115.QueryNFTsRequest;
                toAmino(message: _115.QueryNFTsRequest): _115.QueryNFTsRequestAmino;
                fromAminoMsg(object: _115.QueryNFTsRequestAminoMsg): _115.QueryNFTsRequest;
                toAminoMsg(message: _115.QueryNFTsRequest): _115.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _115.QueryNFTsRequestProtoMsg): _115.QueryNFTsRequest;
                toProto(message: _115.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _115.QueryNFTsRequest): _115.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _115.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryNFTsResponse;
                fromPartial(object: Partial<_115.QueryNFTsResponse>): _115.QueryNFTsResponse;
                fromAmino(object: _115.QueryNFTsResponseAmino): _115.QueryNFTsResponse;
                toAmino(message: _115.QueryNFTsResponse): _115.QueryNFTsResponseAmino;
                fromAminoMsg(object: _115.QueryNFTsResponseAminoMsg): _115.QueryNFTsResponse;
                toAminoMsg(message: _115.QueryNFTsResponse): _115.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _115.QueryNFTsResponseProtoMsg): _115.QueryNFTsResponse;
                toProto(message: _115.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _115.QueryNFTsResponse): _115.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _115.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryNFTRequest;
                fromPartial(object: Partial<_115.QueryNFTRequest>): _115.QueryNFTRequest;
                fromAmino(object: _115.QueryNFTRequestAmino): _115.QueryNFTRequest;
                toAmino(message: _115.QueryNFTRequest): _115.QueryNFTRequestAmino;
                fromAminoMsg(object: _115.QueryNFTRequestAminoMsg): _115.QueryNFTRequest;
                toAminoMsg(message: _115.QueryNFTRequest): _115.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _115.QueryNFTRequestProtoMsg): _115.QueryNFTRequest;
                toProto(message: _115.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _115.QueryNFTRequest): _115.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _115.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryNFTResponse;
                fromPartial(object: Partial<_115.QueryNFTResponse>): _115.QueryNFTResponse;
                fromAmino(object: _115.QueryNFTResponseAmino): _115.QueryNFTResponse;
                toAmino(message: _115.QueryNFTResponse): _115.QueryNFTResponseAmino;
                fromAminoMsg(object: _115.QueryNFTResponseAminoMsg): _115.QueryNFTResponse;
                toAminoMsg(message: _115.QueryNFTResponse): _115.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _115.QueryNFTResponseProtoMsg): _115.QueryNFTResponse;
                toProto(message: _115.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _115.QueryNFTResponse): _115.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _115.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryClassRequest;
                fromPartial(object: Partial<_115.QueryClassRequest>): _115.QueryClassRequest;
                fromAmino(object: _115.QueryClassRequestAmino): _115.QueryClassRequest;
                toAmino(message: _115.QueryClassRequest): _115.QueryClassRequestAmino;
                fromAminoMsg(object: _115.QueryClassRequestAminoMsg): _115.QueryClassRequest;
                toAminoMsg(message: _115.QueryClassRequest): _115.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _115.QueryClassRequestProtoMsg): _115.QueryClassRequest;
                toProto(message: _115.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _115.QueryClassRequest): _115.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _115.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryClassResponse;
                fromPartial(object: Partial<_115.QueryClassResponse>): _115.QueryClassResponse;
                fromAmino(object: _115.QueryClassResponseAmino): _115.QueryClassResponse;
                toAmino(message: _115.QueryClassResponse): _115.QueryClassResponseAmino;
                fromAminoMsg(object: _115.QueryClassResponseAminoMsg): _115.QueryClassResponse;
                toAminoMsg(message: _115.QueryClassResponse): _115.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _115.QueryClassResponseProtoMsg): _115.QueryClassResponse;
                toProto(message: _115.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _115.QueryClassResponse): _115.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _115.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryClassesRequest;
                fromPartial(object: Partial<_115.QueryClassesRequest>): _115.QueryClassesRequest;
                fromAmino(object: _115.QueryClassesRequestAmino): _115.QueryClassesRequest;
                toAmino(message: _115.QueryClassesRequest): _115.QueryClassesRequestAmino;
                fromAminoMsg(object: _115.QueryClassesRequestAminoMsg): _115.QueryClassesRequest;
                toAminoMsg(message: _115.QueryClassesRequest): _115.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _115.QueryClassesRequestProtoMsg): _115.QueryClassesRequest;
                toProto(message: _115.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _115.QueryClassesRequest): _115.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _115.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryClassesResponse;
                fromPartial(object: Partial<_115.QueryClassesResponse>): _115.QueryClassesResponse;
                fromAmino(object: _115.QueryClassesResponseAmino): _115.QueryClassesResponse;
                toAmino(message: _115.QueryClassesResponse): _115.QueryClassesResponseAmino;
                fromAminoMsg(object: _115.QueryClassesResponseAminoMsg): _115.QueryClassesResponse;
                toAminoMsg(message: _115.QueryClassesResponse): _115.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _115.QueryClassesResponseProtoMsg): _115.QueryClassesResponse;
                toProto(message: _115.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _115.QueryClassesResponse): _115.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _114.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Class;
                fromPartial(object: Partial<_114.Class>): _114.Class;
                fromAmino(object: _114.ClassAmino): _114.Class;
                toAmino(message: _114.Class): _114.ClassAmino;
                fromAminoMsg(object: _114.ClassAminoMsg): _114.Class;
                toAminoMsg(message: _114.Class): _114.ClassAminoMsg;
                fromProtoMsg(message: _114.ClassProtoMsg): _114.Class;
                toProto(message: _114.Class): Uint8Array;
                toProtoMsg(message: _114.Class): _114.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _114.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.NFT;
                fromPartial(object: Partial<_114.NFT>): _114.NFT;
                fromAmino(object: _114.NFTAmino): _114.NFT;
                toAmino(message: _114.NFT): _114.NFTAmino;
                fromAminoMsg(object: _114.NFTAminoMsg): _114.NFT;
                toAminoMsg(message: _114.NFT): _114.NFTAminoMsg;
                fromProtoMsg(message: _114.NFTProtoMsg): _114.NFT;
                toProto(message: _114.NFT): Uint8Array;
                toProtoMsg(message: _114.NFT): _114.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _113.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
                fromAmino(object: _113.GenesisStateAmino): _113.GenesisState;
                toAmino(message: _113.GenesisState): _113.GenesisStateAmino;
                fromAminoMsg(object: _113.GenesisStateAminoMsg): _113.GenesisState;
                toAminoMsg(message: _113.GenesisState): _113.GenesisStateAminoMsg;
                fromProtoMsg(message: _113.GenesisStateProtoMsg): _113.GenesisState;
                toProto(message: _113.GenesisState): Uint8Array;
                toProtoMsg(message: _113.GenesisState): _113.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _113.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Entry;
                fromPartial(object: Partial<_113.Entry>): _113.Entry;
                fromAmino(object: _113.EntryAmino): _113.Entry;
                toAmino(message: _113.Entry): _113.EntryAmino;
                fromAminoMsg(object: _113.EntryAminoMsg): _113.Entry;
                toAminoMsg(message: _113.Entry): _113.EntryAminoMsg;
                fromProtoMsg(message: _113.EntryProtoMsg): _113.Entry;
                toProto(message: _113.Entry): Uint8Array;
                toProtoMsg(message: _113.Entry): _113.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _112.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.EventSend;
                fromPartial(object: Partial<_112.EventSend>): _112.EventSend;
                fromAmino(object: _112.EventSendAmino): _112.EventSend;
                toAmino(message: _112.EventSend): _112.EventSendAmino;
                fromAminoMsg(object: _112.EventSendAminoMsg): _112.EventSend;
                toAminoMsg(message: _112.EventSend): _112.EventSendAminoMsg;
                fromProtoMsg(message: _112.EventSendProtoMsg): _112.EventSend;
                toProto(message: _112.EventSend): Uint8Array;
                toProtoMsg(message: _112.EventSend): _112.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _112.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.EventMint;
                fromPartial(object: Partial<_112.EventMint>): _112.EventMint;
                fromAmino(object: _112.EventMintAmino): _112.EventMint;
                toAmino(message: _112.EventMint): _112.EventMintAmino;
                fromAminoMsg(object: _112.EventMintAminoMsg): _112.EventMint;
                toAminoMsg(message: _112.EventMint): _112.EventMintAminoMsg;
                fromProtoMsg(message: _112.EventMintProtoMsg): _112.EventMint;
                toProto(message: _112.EventMint): Uint8Array;
                toProtoMsg(message: _112.EventMint): _112.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _112.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.EventBurn;
                fromPartial(object: Partial<_112.EventBurn>): _112.EventBurn;
                fromAmino(object: _112.EventBurnAmino): _112.EventBurn;
                toAmino(message: _112.EventBurn): _112.EventBurnAmino;
                fromAminoMsg(object: _112.EventBurnAminoMsg): _112.EventBurn;
                toAminoMsg(message: _112.EventBurn): _112.EventBurnAminoMsg;
                fromProtoMsg(message: _112.EventBurnProtoMsg): _112.EventBurn;
                toProto(message: _112.EventBurn): Uint8Array;
                toProtoMsg(message: _112.EventBurn): _112.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _117.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _117.Module;
                    fromPartial(_: Partial<_117.Module>): _117.Module;
                    fromAmino(_: _117.ModuleAmino): _117.Module;
                    toAmino(_: _117.Module): _117.ModuleAmino;
                    fromAminoMsg(object: _117.ModuleAminoMsg): _117.Module;
                    toAminoMsg(message: _117.Module): _117.ModuleAminoMsg;
                    fromProtoMsg(message: _117.ModuleProtoMsg): _117.Module;
                    toProto(message: _117.Module): Uint8Array;
                    toProtoMsg(message: _117.Module): _117.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _265.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    get(request: _118.GetRequest): Promise<_118.GetResponse>;
                    list(request: _118.ListRequest): Promise<_118.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _118.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.GetRequest;
                    fromPartial(object: Partial<_118.GetRequest>): _118.GetRequest;
                    fromAmino(object: _118.GetRequestAmino): _118.GetRequest;
                    toAmino(message: _118.GetRequest): _118.GetRequestAmino;
                    fromAminoMsg(object: _118.GetRequestAminoMsg): _118.GetRequest;
                    toAminoMsg(message: _118.GetRequest): _118.GetRequestAminoMsg;
                    fromProtoMsg(message: _118.GetRequestProtoMsg): _118.GetRequest;
                    toProto(message: _118.GetRequest): Uint8Array;
                    toProtoMsg(message: _118.GetRequest): _118.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _118.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.GetResponse;
                    fromPartial(object: Partial<_118.GetResponse>): _118.GetResponse;
                    fromAmino(object: _118.GetResponseAmino): _118.GetResponse;
                    toAmino(message: _118.GetResponse): _118.GetResponseAmino;
                    fromAminoMsg(object: _118.GetResponseAminoMsg): _118.GetResponse;
                    toAminoMsg(message: _118.GetResponse): _118.GetResponseAminoMsg;
                    fromProtoMsg(message: _118.GetResponseProtoMsg): _118.GetResponse;
                    toProto(message: _118.GetResponse): Uint8Array;
                    toProtoMsg(message: _118.GetResponse): _118.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _118.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ListRequest;
                    fromPartial(object: Partial<_118.ListRequest>): _118.ListRequest;
                    fromAmino(object: _118.ListRequestAmino): _118.ListRequest;
                    toAmino(message: _118.ListRequest): _118.ListRequestAmino;
                    fromAminoMsg(object: _118.ListRequestAminoMsg): _118.ListRequest;
                    toAminoMsg(message: _118.ListRequest): _118.ListRequestAminoMsg;
                    fromProtoMsg(message: _118.ListRequestProtoMsg): _118.ListRequest;
                    toProto(message: _118.ListRequest): Uint8Array;
                    toProtoMsg(message: _118.ListRequest): _118.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _118.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ListRequest_Prefix;
                    fromPartial(object: Partial<_118.ListRequest_Prefix>): _118.ListRequest_Prefix;
                    fromAmino(object: _118.ListRequest_PrefixAmino): _118.ListRequest_Prefix;
                    toAmino(message: _118.ListRequest_Prefix): _118.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _118.ListRequest_PrefixAminoMsg): _118.ListRequest_Prefix;
                    toAminoMsg(message: _118.ListRequest_Prefix): _118.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _118.ListRequest_PrefixProtoMsg): _118.ListRequest_Prefix;
                    toProto(message: _118.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _118.ListRequest_Prefix): _118.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _118.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ListRequest_Range;
                    fromPartial(object: Partial<_118.ListRequest_Range>): _118.ListRequest_Range;
                    fromAmino(object: _118.ListRequest_RangeAmino): _118.ListRequest_Range;
                    toAmino(message: _118.ListRequest_Range): _118.ListRequest_RangeAmino;
                    fromAminoMsg(object: _118.ListRequest_RangeAminoMsg): _118.ListRequest_Range;
                    toAminoMsg(message: _118.ListRequest_Range): _118.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _118.ListRequest_RangeProtoMsg): _118.ListRequest_Range;
                    toProto(message: _118.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _118.ListRequest_Range): _118.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _118.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ListResponse;
                    fromPartial(object: Partial<_118.ListResponse>): _118.ListResponse;
                    fromAmino(object: _118.ListResponseAmino): _118.ListResponse;
                    toAmino(message: _118.ListResponse): _118.ListResponseAmino;
                    fromAminoMsg(object: _118.ListResponseAminoMsg): _118.ListResponse;
                    toAminoMsg(message: _118.ListResponse): _118.ListResponseAminoMsg;
                    fromProtoMsg(message: _118.ListResponseProtoMsg): _118.ListResponse;
                    toProto(message: _118.ListResponse): Uint8Array;
                    toProtoMsg(message: _118.ListResponse): _118.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _118.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.IndexValue;
                    fromPartial(object: Partial<_118.IndexValue>): _118.IndexValue;
                    fromAmino(object: _118.IndexValueAmino): _118.IndexValue;
                    toAmino(message: _118.IndexValue): _118.IndexValueAmino;
                    fromAminoMsg(object: _118.IndexValueAminoMsg): _118.IndexValue;
                    toAminoMsg(message: _118.IndexValue): _118.IndexValueAminoMsg;
                    fromProtoMsg(message: _118.IndexValueProtoMsg): _118.IndexValue;
                    toProto(message: _118.IndexValue): Uint8Array;
                    toProtoMsg(message: _118.IndexValue): _118.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _119.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.TableDescriptor;
                fromPartial(object: Partial<_119.TableDescriptor>): _119.TableDescriptor;
                fromAmino(object: _119.TableDescriptorAmino): _119.TableDescriptor;
                toAmino(message: _119.TableDescriptor): _119.TableDescriptorAmino;
                fromAminoMsg(object: _119.TableDescriptorAminoMsg): _119.TableDescriptor;
                toAminoMsg(message: _119.TableDescriptor): _119.TableDescriptorAminoMsg;
                fromProtoMsg(message: _119.TableDescriptorProtoMsg): _119.TableDescriptor;
                toProto(message: _119.TableDescriptor): Uint8Array;
                toProtoMsg(message: _119.TableDescriptor): _119.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _119.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_119.PrimaryKeyDescriptor>): _119.PrimaryKeyDescriptor;
                fromAmino(object: _119.PrimaryKeyDescriptorAmino): _119.PrimaryKeyDescriptor;
                toAmino(message: _119.PrimaryKeyDescriptor): _119.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _119.PrimaryKeyDescriptorAminoMsg): _119.PrimaryKeyDescriptor;
                toAminoMsg(message: _119.PrimaryKeyDescriptor): _119.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _119.PrimaryKeyDescriptorProtoMsg): _119.PrimaryKeyDescriptor;
                toProto(message: _119.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _119.PrimaryKeyDescriptor): _119.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _119.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_119.SecondaryIndexDescriptor>): _119.SecondaryIndexDescriptor;
                fromAmino(object: _119.SecondaryIndexDescriptorAmino): _119.SecondaryIndexDescriptor;
                toAmino(message: _119.SecondaryIndexDescriptor): _119.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _119.SecondaryIndexDescriptorAminoMsg): _119.SecondaryIndexDescriptor;
                toAminoMsg(message: _119.SecondaryIndexDescriptor): _119.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _119.SecondaryIndexDescriptorProtoMsg): _119.SecondaryIndexDescriptor;
                toProto(message: _119.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _119.SecondaryIndexDescriptor): _119.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _119.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.SingletonDescriptor;
                fromPartial(object: Partial<_119.SingletonDescriptor>): _119.SingletonDescriptor;
                fromAmino(object: _119.SingletonDescriptorAmino): _119.SingletonDescriptor;
                toAmino(message: _119.SingletonDescriptor): _119.SingletonDescriptorAmino;
                fromAminoMsg(object: _119.SingletonDescriptorAminoMsg): _119.SingletonDescriptor;
                toAminoMsg(message: _119.SingletonDescriptor): _119.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _119.SingletonDescriptorProtoMsg): _119.SingletonDescriptor;
                toProto(message: _119.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _119.SingletonDescriptor): _119.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _120.StorageType;
            storageTypeToJSON(object: _120.StorageType): string;
            StorageType: typeof _120.StorageType;
            StorageTypeSDKType: typeof _120.StorageType;
            StorageTypeAmino: typeof _120.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _120.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_120.ModuleSchemaDescriptor>): _120.ModuleSchemaDescriptor;
                fromAmino(object: _120.ModuleSchemaDescriptorAmino): _120.ModuleSchemaDescriptor;
                toAmino(message: _120.ModuleSchemaDescriptor): _120.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _120.ModuleSchemaDescriptorAminoMsg): _120.ModuleSchemaDescriptor;
                toAminoMsg(message: _120.ModuleSchemaDescriptor): _120.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _120.ModuleSchemaDescriptorProtoMsg): _120.ModuleSchemaDescriptor;
                toProto(message: _120.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _120.ModuleSchemaDescriptor): _120.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _120.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_120.ModuleSchemaDescriptor_FileEntry>): _120.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _120.ModuleSchemaDescriptor_FileEntryAmino): _120.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _120.ModuleSchemaDescriptor_FileEntry): _120.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _120.ModuleSchemaDescriptor_FileEntryAminoMsg): _120.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _120.ModuleSchemaDescriptor_FileEntry): _120.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _120.ModuleSchemaDescriptor_FileEntryProtoMsg): _120.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _120.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _120.ModuleSchemaDescriptor_FileEntry): _120.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _121.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _121.Module;
                    fromPartial(_: Partial<_121.Module>): _121.Module;
                    fromAmino(_: _121.ModuleAmino): _121.Module;
                    toAmino(_: _121.Module): _121.ModuleAmino;
                    fromAminoMsg(object: _121.ModuleAminoMsg): _121.Module;
                    toAminoMsg(message: _121.Module): _121.ModuleAminoMsg;
                    fromProtoMsg(message: _121.ModuleProtoMsg): _121.Module;
                    toProto(message: _121.Module): Uint8Array;
                    toProtoMsg(message: _121.Module): _121.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                subspaces(request?: _123.QuerySubspacesRequest): Promise<_123.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
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
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _123.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.QuerySubspacesRequest;
                fromPartial(_: Partial<_123.QuerySubspacesRequest>): _123.QuerySubspacesRequest;
                fromAmino(_: _123.QuerySubspacesRequestAmino): _123.QuerySubspacesRequest;
                toAmino(_: _123.QuerySubspacesRequest): _123.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _123.QuerySubspacesRequestAminoMsg): _123.QuerySubspacesRequest;
                toAminoMsg(message: _123.QuerySubspacesRequest): _123.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _123.QuerySubspacesRequestProtoMsg): _123.QuerySubspacesRequest;
                toProto(message: _123.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _123.QuerySubspacesRequest): _123.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _123.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QuerySubspacesResponse;
                fromPartial(object: Partial<_123.QuerySubspacesResponse>): _123.QuerySubspacesResponse;
                fromAmino(object: _123.QuerySubspacesResponseAmino): _123.QuerySubspacesResponse;
                toAmino(message: _123.QuerySubspacesResponse): _123.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _123.QuerySubspacesResponseAminoMsg): _123.QuerySubspacesResponse;
                toAminoMsg(message: _123.QuerySubspacesResponse): _123.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _123.QuerySubspacesResponseProtoMsg): _123.QuerySubspacesResponse;
                toProto(message: _123.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _123.QuerySubspacesResponse): _123.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _123.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Subspace;
                fromPartial(object: Partial<_123.Subspace>): _123.Subspace;
                fromAmino(object: _123.SubspaceAmino): _123.Subspace;
                toAmino(message: _123.Subspace): _123.SubspaceAmino;
                fromAminoMsg(object: _123.SubspaceAminoMsg): _123.Subspace;
                toAminoMsg(message: _123.Subspace): _123.SubspaceAminoMsg;
                fromProtoMsg(message: _123.SubspaceProtoMsg): _123.Subspace;
                toProto(message: _123.Subspace): Uint8Array;
                toProtoMsg(message: _123.Subspace): _123.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _122.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ParameterChangeProposal;
                fromPartial(object: Partial<_122.ParameterChangeProposal>): _122.ParameterChangeProposal;
                fromAmino(object: _122.ParameterChangeProposalAmino): _122.ParameterChangeProposal;
                toAmino(message: _122.ParameterChangeProposal): _122.ParameterChangeProposalAmino;
                fromAminoMsg(object: _122.ParameterChangeProposalAminoMsg): _122.ParameterChangeProposal;
                toAminoMsg(message: _122.ParameterChangeProposal): _122.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _122.ParameterChangeProposalProtoMsg): _122.ParameterChangeProposal;
                toProto(message: _122.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _122.ParameterChangeProposal): _122.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _122.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ParamChange;
                fromPartial(object: Partial<_122.ParamChange>): _122.ParamChange;
                fromAmino(object: _122.ParamChangeAmino): _122.ParamChange;
                toAmino(message: _122.ParamChange): _122.ParamChangeAmino;
                fromAminoMsg(object: _122.ParamChangeAminoMsg): _122.ParamChange;
                toAminoMsg(message: _122.ParamChange): _122.ParamChangeAminoMsg;
                fromProtoMsg(message: _122.ParamChangeProtoMsg): _122.ParamChange;
                toProto(message: _122.ParamChange): Uint8Array;
                toProtoMsg(message: _122.ParamChange): _122.ParamChangeProtoMsg;
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
                encode(_: _125.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.FileDescriptorsRequest;
                fromPartial(_: Partial<_125.FileDescriptorsRequest>): _125.FileDescriptorsRequest;
                fromAmino(_: _125.FileDescriptorsRequestAmino): _125.FileDescriptorsRequest;
                toAmino(_: _125.FileDescriptorsRequest): _125.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _125.FileDescriptorsRequestAminoMsg): _125.FileDescriptorsRequest;
                toAminoMsg(message: _125.FileDescriptorsRequest): _125.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _125.FileDescriptorsRequestProtoMsg): _125.FileDescriptorsRequest;
                toProto(message: _125.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _125.FileDescriptorsRequest): _125.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _125.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.FileDescriptorsResponse;
                fromPartial(object: Partial<_125.FileDescriptorsResponse>): _125.FileDescriptorsResponse;
                fromAmino(object: _125.FileDescriptorsResponseAmino): _125.FileDescriptorsResponse;
                toAmino(message: _125.FileDescriptorsResponse): _125.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _125.FileDescriptorsResponseAminoMsg): _125.FileDescriptorsResponse;
                toAminoMsg(message: _125.FileDescriptorsResponse): _125.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _125.FileDescriptorsResponseProtoMsg): _125.FileDescriptorsResponse;
                toProto(message: _125.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _125.FileDescriptorsResponse): _125.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
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
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                signingInfo(request: _128.QuerySigningInfoRequest): Promise<_128.QuerySigningInfoResponse>;
                signingInfos(request?: _128.QuerySigningInfosRequest): Promise<_128.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _130.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _130.MsgUnjail): {
                        typeUrl: string;
                        value: _130.MsgUnjail;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _130.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _130.MsgUnjail): {
                        typeUrl: string;
                        value: _130.MsgUnjail;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUnjail) => _130.MsgUnjailAmino;
                    fromAmino: (object: _130.MsgUnjailAmino) => _130.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateParams) => _130.MsgUpdateParamsAmino;
                    fromAmino: (object: _130.MsgUpdateParamsAmino) => _130.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _130.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUnjail;
                fromPartial(object: Partial<_130.MsgUnjail>): _130.MsgUnjail;
                fromAmino(object: _130.MsgUnjailAmino): _130.MsgUnjail;
                toAmino(message: _130.MsgUnjail): _130.MsgUnjailAmino;
                fromAminoMsg(object: _130.MsgUnjailAminoMsg): _130.MsgUnjail;
                toAminoMsg(message: _130.MsgUnjail): _130.MsgUnjailAminoMsg;
                fromProtoMsg(message: _130.MsgUnjailProtoMsg): _130.MsgUnjail;
                toProto(message: _130.MsgUnjail): Uint8Array;
                toProtoMsg(message: _130.MsgUnjail): _130.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _130.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUnjailResponse;
                fromPartial(_: Partial<_130.MsgUnjailResponse>): _130.MsgUnjailResponse;
                fromAmino(_: _130.MsgUnjailResponseAmino): _130.MsgUnjailResponse;
                toAmino(_: _130.MsgUnjailResponse): _130.MsgUnjailResponseAmino;
                fromAminoMsg(object: _130.MsgUnjailResponseAminoMsg): _130.MsgUnjailResponse;
                toAminoMsg(message: _130.MsgUnjailResponse): _130.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUnjailResponseProtoMsg): _130.MsgUnjailResponse;
                toProto(message: _130.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUnjailResponse): _130.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _130.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateParams;
                fromPartial(object: Partial<_130.MsgUpdateParams>): _130.MsgUpdateParams;
                fromAmino(object: _130.MsgUpdateParamsAmino): _130.MsgUpdateParams;
                toAmino(message: _130.MsgUpdateParams): _130.MsgUpdateParamsAmino;
                fromAminoMsg(object: _130.MsgUpdateParamsAminoMsg): _130.MsgUpdateParams;
                toAminoMsg(message: _130.MsgUpdateParams): _130.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateParamsProtoMsg): _130.MsgUpdateParams;
                toProto(message: _130.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateParams): _130.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_130.MsgUpdateParamsResponse>): _130.MsgUpdateParamsResponse;
                fromAmino(_: _130.MsgUpdateParamsResponseAmino): _130.MsgUpdateParamsResponse;
                toAmino(_: _130.MsgUpdateParamsResponse): _130.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateParamsResponseAminoMsg): _130.MsgUpdateParamsResponse;
                toAminoMsg(message: _130.MsgUpdateParamsResponse): _130.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _130.MsgUpdateParamsResponseProtoMsg): _130.MsgUpdateParamsResponse;
                toProto(message: _130.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateParamsResponse): _130.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _129.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.ValidatorSigningInfo;
                fromPartial(object: Partial<_129.ValidatorSigningInfo>): _129.ValidatorSigningInfo;
                fromAmino(object: _129.ValidatorSigningInfoAmino): _129.ValidatorSigningInfo;
                toAmino(message: _129.ValidatorSigningInfo): _129.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _129.ValidatorSigningInfoAminoMsg): _129.ValidatorSigningInfo;
                toAminoMsg(message: _129.ValidatorSigningInfo): _129.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _129.ValidatorSigningInfoProtoMsg): _129.ValidatorSigningInfo;
                toProto(message: _129.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _129.ValidatorSigningInfo): _129.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _129.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.Params;
                fromPartial(object: Partial<_129.Params>): _129.Params;
                fromAmino(object: _129.ParamsAmino): _129.Params;
                toAmino(message: _129.Params): _129.ParamsAmino;
                fromAminoMsg(object: _129.ParamsAminoMsg): _129.Params;
                toAminoMsg(message: _129.Params): _129.ParamsAminoMsg;
                fromProtoMsg(message: _129.ParamsProtoMsg): _129.Params;
                toProto(message: _129.Params): Uint8Array;
                toProtoMsg(message: _129.Params): _129.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _128.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.QueryParamsRequest;
                fromPartial(_: Partial<_128.QueryParamsRequest>): _128.QueryParamsRequest;
                fromAmino(_: _128.QueryParamsRequestAmino): _128.QueryParamsRequest;
                toAmino(_: _128.QueryParamsRequest): _128.QueryParamsRequestAmino;
                fromAminoMsg(object: _128.QueryParamsRequestAminoMsg): _128.QueryParamsRequest;
                toAminoMsg(message: _128.QueryParamsRequest): _128.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _128.QueryParamsRequestProtoMsg): _128.QueryParamsRequest;
                toProto(message: _128.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _128.QueryParamsRequest): _128.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _128.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryParamsResponse;
                fromPartial(object: Partial<_128.QueryParamsResponse>): _128.QueryParamsResponse;
                fromAmino(object: _128.QueryParamsResponseAmino): _128.QueryParamsResponse;
                toAmino(message: _128.QueryParamsResponse): _128.QueryParamsResponseAmino;
                fromAminoMsg(object: _128.QueryParamsResponseAminoMsg): _128.QueryParamsResponse;
                toAminoMsg(message: _128.QueryParamsResponse): _128.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _128.QueryParamsResponseProtoMsg): _128.QueryParamsResponse;
                toProto(message: _128.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _128.QueryParamsResponse): _128.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _128.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QuerySigningInfoRequest;
                fromPartial(object: Partial<_128.QuerySigningInfoRequest>): _128.QuerySigningInfoRequest;
                fromAmino(object: _128.QuerySigningInfoRequestAmino): _128.QuerySigningInfoRequest;
                toAmino(message: _128.QuerySigningInfoRequest): _128.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _128.QuerySigningInfoRequestAminoMsg): _128.QuerySigningInfoRequest;
                toAminoMsg(message: _128.QuerySigningInfoRequest): _128.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _128.QuerySigningInfoRequestProtoMsg): _128.QuerySigningInfoRequest;
                toProto(message: _128.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _128.QuerySigningInfoRequest): _128.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _128.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QuerySigningInfoResponse;
                fromPartial(object: Partial<_128.QuerySigningInfoResponse>): _128.QuerySigningInfoResponse;
                fromAmino(object: _128.QuerySigningInfoResponseAmino): _128.QuerySigningInfoResponse;
                toAmino(message: _128.QuerySigningInfoResponse): _128.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _128.QuerySigningInfoResponseAminoMsg): _128.QuerySigningInfoResponse;
                toAminoMsg(message: _128.QuerySigningInfoResponse): _128.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _128.QuerySigningInfoResponseProtoMsg): _128.QuerySigningInfoResponse;
                toProto(message: _128.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _128.QuerySigningInfoResponse): _128.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _128.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QuerySigningInfosRequest;
                fromPartial(object: Partial<_128.QuerySigningInfosRequest>): _128.QuerySigningInfosRequest;
                fromAmino(object: _128.QuerySigningInfosRequestAmino): _128.QuerySigningInfosRequest;
                toAmino(message: _128.QuerySigningInfosRequest): _128.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _128.QuerySigningInfosRequestAminoMsg): _128.QuerySigningInfosRequest;
                toAminoMsg(message: _128.QuerySigningInfosRequest): _128.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _128.QuerySigningInfosRequestProtoMsg): _128.QuerySigningInfosRequest;
                toProto(message: _128.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _128.QuerySigningInfosRequest): _128.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _128.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QuerySigningInfosResponse;
                fromPartial(object: Partial<_128.QuerySigningInfosResponse>): _128.QuerySigningInfosResponse;
                fromAmino(object: _128.QuerySigningInfosResponseAmino): _128.QuerySigningInfosResponse;
                toAmino(message: _128.QuerySigningInfosResponse): _128.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _128.QuerySigningInfosResponseAminoMsg): _128.QuerySigningInfosResponse;
                toAminoMsg(message: _128.QuerySigningInfosResponse): _128.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _128.QuerySigningInfosResponseProtoMsg): _128.QuerySigningInfosResponse;
                toProto(message: _128.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _128.QuerySigningInfosResponse): _128.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _127.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.GenesisState;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
                fromAmino(object: _127.GenesisStateAmino): _127.GenesisState;
                toAmino(message: _127.GenesisState): _127.GenesisStateAmino;
                fromAminoMsg(object: _127.GenesisStateAminoMsg): _127.GenesisState;
                toAminoMsg(message: _127.GenesisState): _127.GenesisStateAminoMsg;
                fromProtoMsg(message: _127.GenesisStateProtoMsg): _127.GenesisState;
                toProto(message: _127.GenesisState): Uint8Array;
                toProtoMsg(message: _127.GenesisState): _127.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _127.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SigningInfo;
                fromPartial(object: Partial<_127.SigningInfo>): _127.SigningInfo;
                fromAmino(object: _127.SigningInfoAmino): _127.SigningInfo;
                toAmino(message: _127.SigningInfo): _127.SigningInfoAmino;
                fromAminoMsg(object: _127.SigningInfoAminoMsg): _127.SigningInfo;
                toAminoMsg(message: _127.SigningInfo): _127.SigningInfoAminoMsg;
                fromProtoMsg(message: _127.SigningInfoProtoMsg): _127.SigningInfo;
                toProto(message: _127.SigningInfo): Uint8Array;
                toProtoMsg(message: _127.SigningInfo): _127.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _127.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ValidatorMissedBlocks;
                fromPartial(object: Partial<_127.ValidatorMissedBlocks>): _127.ValidatorMissedBlocks;
                fromAmino(object: _127.ValidatorMissedBlocksAmino): _127.ValidatorMissedBlocks;
                toAmino(message: _127.ValidatorMissedBlocks): _127.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _127.ValidatorMissedBlocksAminoMsg): _127.ValidatorMissedBlocks;
                toAminoMsg(message: _127.ValidatorMissedBlocks): _127.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _127.ValidatorMissedBlocksProtoMsg): _127.ValidatorMissedBlocks;
                toProto(message: _127.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _127.ValidatorMissedBlocks): _127.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _127.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MissedBlock;
                fromPartial(object: Partial<_127.MissedBlock>): _127.MissedBlock;
                fromAmino(object: _127.MissedBlockAmino): _127.MissedBlock;
                toAmino(message: _127.MissedBlock): _127.MissedBlockAmino;
                fromAminoMsg(object: _127.MissedBlockAminoMsg): _127.MissedBlock;
                toAminoMsg(message: _127.MissedBlock): _127.MissedBlockAminoMsg;
                fromProtoMsg(message: _127.MissedBlockProtoMsg): _127.MissedBlock;
                toProto(message: _127.MissedBlock): Uint8Array;
                toProtoMsg(message: _127.MissedBlock): _127.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _131.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.Module;
                    fromPartial(object: Partial<_131.Module>): _131.Module;
                    fromAmino(object: _131.ModuleAmino): _131.Module;
                    toAmino(message: _131.Module): _131.ModuleAmino;
                    fromAminoMsg(object: _131.ModuleAminoMsg): _131.Module;
                    toAminoMsg(message: _131.Module): _131.ModuleAminoMsg;
                    fromProtoMsg(message: _131.ModuleProtoMsg): _131.Module;
                    toProto(message: _131.Module): Uint8Array;
                    toProtoMsg(message: _131.Module): _131.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _134.QueryValidatorsRequest): Promise<_134.QueryValidatorsResponse>;
                validator(request: _134.QueryValidatorRequest): Promise<_134.QueryValidatorResponse>;
                validatorDelegations(request: _134.QueryValidatorDelegationsRequest): Promise<_134.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _134.QueryValidatorUnbondingDelegationsRequest): Promise<_134.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _134.QueryDelegationRequest): Promise<_134.QueryDelegationResponse>;
                unbondingDelegation(request: _134.QueryUnbondingDelegationRequest): Promise<_134.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _134.QueryDelegatorDelegationsRequest): Promise<_134.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _134.QueryDelegatorUnbondingDelegationsRequest): Promise<_134.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _134.QueryRedelegationsRequest): Promise<_134.QueryRedelegationsResponse>;
                delegatorValidators(request: _134.QueryDelegatorValidatorsRequest): Promise<_134.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _134.QueryDelegatorValidatorRequest): Promise<_134.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _134.QueryHistoricalInfoRequest): Promise<_134.QueryHistoricalInfoResponse>;
                pool(request?: _134.QueryPoolRequest): Promise<_134.QueryPoolResponse>;
                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _136.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _136.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _136.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _136.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _136.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _136.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _136.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _136.MsgCreateValidator): {
                        typeUrl: string;
                        value: _136.MsgCreateValidator;
                    };
                    editValidator(value: _136.MsgEditValidator): {
                        typeUrl: string;
                        value: _136.MsgEditValidator;
                    };
                    delegate(value: _136.MsgDelegate): {
                        typeUrl: string;
                        value: _136.MsgDelegate;
                    };
                    beginRedelegate(value: _136.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _136.MsgBeginRedelegate;
                    };
                    undelegate(value: _136.MsgUndelegate): {
                        typeUrl: string;
                        value: _136.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _136.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _136.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _136.MsgUpdateParams): {
                        typeUrl: string;
                        value: _136.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _136.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _136.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _136.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _136.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _136.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _136.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _136.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _136.MsgCreateValidator): {
                        typeUrl: string;
                        value: _136.MsgCreateValidator;
                    };
                    editValidator(value: _136.MsgEditValidator): {
                        typeUrl: string;
                        value: _136.MsgEditValidator;
                    };
                    delegate(value: _136.MsgDelegate): {
                        typeUrl: string;
                        value: _136.MsgDelegate;
                    };
                    beginRedelegate(value: _136.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _136.MsgBeginRedelegate;
                    };
                    undelegate(value: _136.MsgUndelegate): {
                        typeUrl: string;
                        value: _136.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _136.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _136.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _136.MsgUpdateParams): {
                        typeUrl: string;
                        value: _136.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _136.MsgCreateValidator) => _136.MsgCreateValidatorAmino;
                    fromAmino: (object: _136.MsgCreateValidatorAmino) => _136.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _136.MsgEditValidator) => _136.MsgEditValidatorAmino;
                    fromAmino: (object: _136.MsgEditValidatorAmino) => _136.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _136.MsgDelegate) => _136.MsgDelegateAmino;
                    fromAmino: (object: _136.MsgDelegateAmino) => _136.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _136.MsgBeginRedelegate) => _136.MsgBeginRedelegateAmino;
                    fromAmino: (object: _136.MsgBeginRedelegateAmino) => _136.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _136.MsgUndelegate) => _136.MsgUndelegateAmino;
                    fromAmino: (object: _136.MsgUndelegateAmino) => _136.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _136.MsgCancelUnbondingDelegation) => _136.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _136.MsgCancelUnbondingDelegationAmino) => _136.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _136.MsgUpdateParams) => _136.MsgUpdateParamsAmino;
                    fromAmino: (object: _136.MsgUpdateParamsAmino) => _136.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _136.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgCreateValidator;
                fromPartial(object: Partial<_136.MsgCreateValidator>): _136.MsgCreateValidator;
                fromAmino(object: _136.MsgCreateValidatorAmino): _136.MsgCreateValidator;
                toAmino(message: _136.MsgCreateValidator): _136.MsgCreateValidatorAmino;
                fromAminoMsg(object: _136.MsgCreateValidatorAminoMsg): _136.MsgCreateValidator;
                toAminoMsg(message: _136.MsgCreateValidator): _136.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _136.MsgCreateValidatorProtoMsg): _136.MsgCreateValidator;
                toProto(message: _136.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _136.MsgCreateValidator): _136.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _136.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _136.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_136.MsgCreateValidatorResponse>): _136.MsgCreateValidatorResponse;
                fromAmino(_: _136.MsgCreateValidatorResponseAmino): _136.MsgCreateValidatorResponse;
                toAmino(_: _136.MsgCreateValidatorResponse): _136.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _136.MsgCreateValidatorResponseAminoMsg): _136.MsgCreateValidatorResponse;
                toAminoMsg(message: _136.MsgCreateValidatorResponse): _136.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _136.MsgCreateValidatorResponseProtoMsg): _136.MsgCreateValidatorResponse;
                toProto(message: _136.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _136.MsgCreateValidatorResponse): _136.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _136.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgEditValidator;
                fromPartial(object: Partial<_136.MsgEditValidator>): _136.MsgEditValidator;
                fromAmino(object: _136.MsgEditValidatorAmino): _136.MsgEditValidator;
                toAmino(message: _136.MsgEditValidator): _136.MsgEditValidatorAmino;
                fromAminoMsg(object: _136.MsgEditValidatorAminoMsg): _136.MsgEditValidator;
                toAminoMsg(message: _136.MsgEditValidator): _136.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _136.MsgEditValidatorProtoMsg): _136.MsgEditValidator;
                toProto(message: _136.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _136.MsgEditValidator): _136.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _136.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _136.MsgEditValidatorResponse;
                fromPartial(_: Partial<_136.MsgEditValidatorResponse>): _136.MsgEditValidatorResponse;
                fromAmino(_: _136.MsgEditValidatorResponseAmino): _136.MsgEditValidatorResponse;
                toAmino(_: _136.MsgEditValidatorResponse): _136.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _136.MsgEditValidatorResponseAminoMsg): _136.MsgEditValidatorResponse;
                toAminoMsg(message: _136.MsgEditValidatorResponse): _136.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _136.MsgEditValidatorResponseProtoMsg): _136.MsgEditValidatorResponse;
                toProto(message: _136.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _136.MsgEditValidatorResponse): _136.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _136.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgDelegate;
                fromPartial(object: Partial<_136.MsgDelegate>): _136.MsgDelegate;
                fromAmino(object: _136.MsgDelegateAmino): _136.MsgDelegate;
                toAmino(message: _136.MsgDelegate): _136.MsgDelegateAmino;
                fromAminoMsg(object: _136.MsgDelegateAminoMsg): _136.MsgDelegate;
                toAminoMsg(message: _136.MsgDelegate): _136.MsgDelegateAminoMsg;
                fromProtoMsg(message: _136.MsgDelegateProtoMsg): _136.MsgDelegate;
                toProto(message: _136.MsgDelegate): Uint8Array;
                toProtoMsg(message: _136.MsgDelegate): _136.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _136.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _136.MsgDelegateResponse;
                fromPartial(_: Partial<_136.MsgDelegateResponse>): _136.MsgDelegateResponse;
                fromAmino(_: _136.MsgDelegateResponseAmino): _136.MsgDelegateResponse;
                toAmino(_: _136.MsgDelegateResponse): _136.MsgDelegateResponseAmino;
                fromAminoMsg(object: _136.MsgDelegateResponseAminoMsg): _136.MsgDelegateResponse;
                toAminoMsg(message: _136.MsgDelegateResponse): _136.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _136.MsgDelegateResponseProtoMsg): _136.MsgDelegateResponse;
                toProto(message: _136.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _136.MsgDelegateResponse): _136.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _136.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgBeginRedelegate;
                fromPartial(object: Partial<_136.MsgBeginRedelegate>): _136.MsgBeginRedelegate;
                fromAmino(object: _136.MsgBeginRedelegateAmino): _136.MsgBeginRedelegate;
                toAmino(message: _136.MsgBeginRedelegate): _136.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _136.MsgBeginRedelegateAminoMsg): _136.MsgBeginRedelegate;
                toAminoMsg(message: _136.MsgBeginRedelegate): _136.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _136.MsgBeginRedelegateProtoMsg): _136.MsgBeginRedelegate;
                toProto(message: _136.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _136.MsgBeginRedelegate): _136.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _136.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_136.MsgBeginRedelegateResponse>): _136.MsgBeginRedelegateResponse;
                fromAmino(object: _136.MsgBeginRedelegateResponseAmino): _136.MsgBeginRedelegateResponse;
                toAmino(message: _136.MsgBeginRedelegateResponse): _136.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _136.MsgBeginRedelegateResponseAminoMsg): _136.MsgBeginRedelegateResponse;
                toAminoMsg(message: _136.MsgBeginRedelegateResponse): _136.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _136.MsgBeginRedelegateResponseProtoMsg): _136.MsgBeginRedelegateResponse;
                toProto(message: _136.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _136.MsgBeginRedelegateResponse): _136.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _136.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgUndelegate;
                fromPartial(object: Partial<_136.MsgUndelegate>): _136.MsgUndelegate;
                fromAmino(object: _136.MsgUndelegateAmino): _136.MsgUndelegate;
                toAmino(message: _136.MsgUndelegate): _136.MsgUndelegateAmino;
                fromAminoMsg(object: _136.MsgUndelegateAminoMsg): _136.MsgUndelegate;
                toAminoMsg(message: _136.MsgUndelegate): _136.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _136.MsgUndelegateProtoMsg): _136.MsgUndelegate;
                toProto(message: _136.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _136.MsgUndelegate): _136.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _136.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgUndelegateResponse;
                fromPartial(object: Partial<_136.MsgUndelegateResponse>): _136.MsgUndelegateResponse;
                fromAmino(object: _136.MsgUndelegateResponseAmino): _136.MsgUndelegateResponse;
                toAmino(message: _136.MsgUndelegateResponse): _136.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _136.MsgUndelegateResponseAminoMsg): _136.MsgUndelegateResponse;
                toAminoMsg(message: _136.MsgUndelegateResponse): _136.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _136.MsgUndelegateResponseProtoMsg): _136.MsgUndelegateResponse;
                toProto(message: _136.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _136.MsgUndelegateResponse): _136.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _136.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_136.MsgCancelUnbondingDelegation>): _136.MsgCancelUnbondingDelegation;
                fromAmino(object: _136.MsgCancelUnbondingDelegationAmino): _136.MsgCancelUnbondingDelegation;
                toAmino(message: _136.MsgCancelUnbondingDelegation): _136.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _136.MsgCancelUnbondingDelegationAminoMsg): _136.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _136.MsgCancelUnbondingDelegation): _136.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _136.MsgCancelUnbondingDelegationProtoMsg): _136.MsgCancelUnbondingDelegation;
                toProto(message: _136.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _136.MsgCancelUnbondingDelegation): _136.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _136.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _136.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_136.MsgCancelUnbondingDelegationResponse>): _136.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _136.MsgCancelUnbondingDelegationResponseAmino): _136.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _136.MsgCancelUnbondingDelegationResponse): _136.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _136.MsgCancelUnbondingDelegationResponseAminoMsg): _136.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _136.MsgCancelUnbondingDelegationResponse): _136.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _136.MsgCancelUnbondingDelegationResponseProtoMsg): _136.MsgCancelUnbondingDelegationResponse;
                toProto(message: _136.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _136.MsgCancelUnbondingDelegationResponse): _136.MsgCancelUnbondingDelegationResponseProtoMsg;
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
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _135.BondStatus;
            bondStatusToJSON(object: _135.BondStatus): string;
            infractionFromJSON(object: any): _135.Infraction;
            infractionToJSON(object: _135.Infraction): string;
            BondStatus: typeof _135.BondStatus;
            BondStatusSDKType: typeof _135.BondStatus;
            BondStatusAmino: typeof _135.BondStatus;
            Infraction: typeof _135.Infraction;
            InfractionSDKType: typeof _135.Infraction;
            InfractionAmino: typeof _135.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _135.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.HistoricalInfo;
                fromPartial(object: Partial<_135.HistoricalInfo>): _135.HistoricalInfo;
                fromAmino(object: _135.HistoricalInfoAmino): _135.HistoricalInfo;
                toAmino(message: _135.HistoricalInfo): _135.HistoricalInfoAmino;
                fromAminoMsg(object: _135.HistoricalInfoAminoMsg): _135.HistoricalInfo;
                toAminoMsg(message: _135.HistoricalInfo): _135.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _135.HistoricalInfoProtoMsg): _135.HistoricalInfo;
                toProto(message: _135.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _135.HistoricalInfo): _135.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _135.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.CommissionRates;
                fromPartial(object: Partial<_135.CommissionRates>): _135.CommissionRates;
                fromAmino(object: _135.CommissionRatesAmino): _135.CommissionRates;
                toAmino(message: _135.CommissionRates): _135.CommissionRatesAmino;
                fromAminoMsg(object: _135.CommissionRatesAminoMsg): _135.CommissionRates;
                toAminoMsg(message: _135.CommissionRates): _135.CommissionRatesAminoMsg;
                fromProtoMsg(message: _135.CommissionRatesProtoMsg): _135.CommissionRates;
                toProto(message: _135.CommissionRates): Uint8Array;
                toProtoMsg(message: _135.CommissionRates): _135.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _135.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Commission;
                fromPartial(object: Partial<_135.Commission>): _135.Commission;
                fromAmino(object: _135.CommissionAmino): _135.Commission;
                toAmino(message: _135.Commission): _135.CommissionAmino;
                fromAminoMsg(object: _135.CommissionAminoMsg): _135.Commission;
                toAminoMsg(message: _135.Commission): _135.CommissionAminoMsg;
                fromProtoMsg(message: _135.CommissionProtoMsg): _135.Commission;
                toProto(message: _135.Commission): Uint8Array;
                toProtoMsg(message: _135.Commission): _135.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _135.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Description;
                fromPartial(object: Partial<_135.Description>): _135.Description;
                fromAmino(object: _135.DescriptionAmino): _135.Description;
                toAmino(message: _135.Description): _135.DescriptionAmino;
                fromAminoMsg(object: _135.DescriptionAminoMsg): _135.Description;
                toAminoMsg(message: _135.Description): _135.DescriptionAminoMsg;
                fromProtoMsg(message: _135.DescriptionProtoMsg): _135.Description;
                toProto(message: _135.Description): Uint8Array;
                toProtoMsg(message: _135.Description): _135.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _135.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Validator;
                fromPartial(object: Partial<_135.Validator>): _135.Validator;
                fromAmino(object: _135.ValidatorAmino): _135.Validator;
                toAmino(message: _135.Validator): _135.ValidatorAmino;
                fromAminoMsg(object: _135.ValidatorAminoMsg): _135.Validator;
                toAminoMsg(message: _135.Validator): _135.ValidatorAminoMsg;
                fromProtoMsg(message: _135.ValidatorProtoMsg): _135.Validator;
                toProto(message: _135.Validator): Uint8Array;
                toProtoMsg(message: _135.Validator): _135.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _135.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.ValAddresses;
                fromPartial(object: Partial<_135.ValAddresses>): _135.ValAddresses;
                fromAmino(object: _135.ValAddressesAmino): _135.ValAddresses;
                toAmino(message: _135.ValAddresses): _135.ValAddressesAmino;
                fromAminoMsg(object: _135.ValAddressesAminoMsg): _135.ValAddresses;
                toAminoMsg(message: _135.ValAddresses): _135.ValAddressesAminoMsg;
                fromProtoMsg(message: _135.ValAddressesProtoMsg): _135.ValAddresses;
                toProto(message: _135.ValAddresses): Uint8Array;
                toProtoMsg(message: _135.ValAddresses): _135.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _135.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.DVPair;
                fromPartial(object: Partial<_135.DVPair>): _135.DVPair;
                fromAmino(object: _135.DVPairAmino): _135.DVPair;
                toAmino(message: _135.DVPair): _135.DVPairAmino;
                fromAminoMsg(object: _135.DVPairAminoMsg): _135.DVPair;
                toAminoMsg(message: _135.DVPair): _135.DVPairAminoMsg;
                fromProtoMsg(message: _135.DVPairProtoMsg): _135.DVPair;
                toProto(message: _135.DVPair): Uint8Array;
                toProtoMsg(message: _135.DVPair): _135.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _135.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.DVPairs;
                fromPartial(object: Partial<_135.DVPairs>): _135.DVPairs;
                fromAmino(object: _135.DVPairsAmino): _135.DVPairs;
                toAmino(message: _135.DVPairs): _135.DVPairsAmino;
                fromAminoMsg(object: _135.DVPairsAminoMsg): _135.DVPairs;
                toAminoMsg(message: _135.DVPairs): _135.DVPairsAminoMsg;
                fromProtoMsg(message: _135.DVPairsProtoMsg): _135.DVPairs;
                toProto(message: _135.DVPairs): Uint8Array;
                toProtoMsg(message: _135.DVPairs): _135.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _135.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.DVVTriplet;
                fromPartial(object: Partial<_135.DVVTriplet>): _135.DVVTriplet;
                fromAmino(object: _135.DVVTripletAmino): _135.DVVTriplet;
                toAmino(message: _135.DVVTriplet): _135.DVVTripletAmino;
                fromAminoMsg(object: _135.DVVTripletAminoMsg): _135.DVVTriplet;
                toAminoMsg(message: _135.DVVTriplet): _135.DVVTripletAminoMsg;
                fromProtoMsg(message: _135.DVVTripletProtoMsg): _135.DVVTriplet;
                toProto(message: _135.DVVTriplet): Uint8Array;
                toProtoMsg(message: _135.DVVTriplet): _135.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _135.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.DVVTriplets;
                fromPartial(object: Partial<_135.DVVTriplets>): _135.DVVTriplets;
                fromAmino(object: _135.DVVTripletsAmino): _135.DVVTriplets;
                toAmino(message: _135.DVVTriplets): _135.DVVTripletsAmino;
                fromAminoMsg(object: _135.DVVTripletsAminoMsg): _135.DVVTriplets;
                toAminoMsg(message: _135.DVVTriplets): _135.DVVTripletsAminoMsg;
                fromProtoMsg(message: _135.DVVTripletsProtoMsg): _135.DVVTriplets;
                toProto(message: _135.DVVTriplets): Uint8Array;
                toProtoMsg(message: _135.DVVTriplets): _135.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _135.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Delegation;
                fromPartial(object: Partial<_135.Delegation>): _135.Delegation;
                fromAmino(object: _135.DelegationAmino): _135.Delegation;
                toAmino(message: _135.Delegation): _135.DelegationAmino;
                fromAminoMsg(object: _135.DelegationAminoMsg): _135.Delegation;
                toAminoMsg(message: _135.Delegation): _135.DelegationAminoMsg;
                fromProtoMsg(message: _135.DelegationProtoMsg): _135.Delegation;
                toProto(message: _135.Delegation): Uint8Array;
                toProtoMsg(message: _135.Delegation): _135.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _135.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.UnbondingDelegation;
                fromPartial(object: Partial<_135.UnbondingDelegation>): _135.UnbondingDelegation;
                fromAmino(object: _135.UnbondingDelegationAmino): _135.UnbondingDelegation;
                toAmino(message: _135.UnbondingDelegation): _135.UnbondingDelegationAmino;
                fromAminoMsg(object: _135.UnbondingDelegationAminoMsg): _135.UnbondingDelegation;
                toAminoMsg(message: _135.UnbondingDelegation): _135.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _135.UnbondingDelegationProtoMsg): _135.UnbondingDelegation;
                toProto(message: _135.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _135.UnbondingDelegation): _135.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _135.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.UnbondingDelegationEntry;
                fromPartial(object: Partial<_135.UnbondingDelegationEntry>): _135.UnbondingDelegationEntry;
                fromAmino(object: _135.UnbondingDelegationEntryAmino): _135.UnbondingDelegationEntry;
                toAmino(message: _135.UnbondingDelegationEntry): _135.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _135.UnbondingDelegationEntryAminoMsg): _135.UnbondingDelegationEntry;
                toAminoMsg(message: _135.UnbondingDelegationEntry): _135.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _135.UnbondingDelegationEntryProtoMsg): _135.UnbondingDelegationEntry;
                toProto(message: _135.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _135.UnbondingDelegationEntry): _135.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _135.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.RedelegationEntry;
                fromPartial(object: Partial<_135.RedelegationEntry>): _135.RedelegationEntry;
                fromAmino(object: _135.RedelegationEntryAmino): _135.RedelegationEntry;
                toAmino(message: _135.RedelegationEntry): _135.RedelegationEntryAmino;
                fromAminoMsg(object: _135.RedelegationEntryAminoMsg): _135.RedelegationEntry;
                toAminoMsg(message: _135.RedelegationEntry): _135.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _135.RedelegationEntryProtoMsg): _135.RedelegationEntry;
                toProto(message: _135.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _135.RedelegationEntry): _135.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _135.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Redelegation;
                fromPartial(object: Partial<_135.Redelegation>): _135.Redelegation;
                fromAmino(object: _135.RedelegationAmino): _135.Redelegation;
                toAmino(message: _135.Redelegation): _135.RedelegationAmino;
                fromAminoMsg(object: _135.RedelegationAminoMsg): _135.Redelegation;
                toAminoMsg(message: _135.Redelegation): _135.RedelegationAminoMsg;
                fromProtoMsg(message: _135.RedelegationProtoMsg): _135.Redelegation;
                toProto(message: _135.Redelegation): Uint8Array;
                toProtoMsg(message: _135.Redelegation): _135.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _135.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Params;
                fromPartial(object: Partial<_135.Params>): _135.Params;
                fromAmino(object: _135.ParamsAmino): _135.Params;
                toAmino(message: _135.Params): _135.ParamsAmino;
                fromAminoMsg(object: _135.ParamsAminoMsg): _135.Params;
                toAminoMsg(message: _135.Params): _135.ParamsAminoMsg;
                fromProtoMsg(message: _135.ParamsProtoMsg): _135.Params;
                toProto(message: _135.Params): Uint8Array;
                toProtoMsg(message: _135.Params): _135.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _135.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.DelegationResponse;
                fromPartial(object: Partial<_135.DelegationResponse>): _135.DelegationResponse;
                fromAmino(object: _135.DelegationResponseAmino): _135.DelegationResponse;
                toAmino(message: _135.DelegationResponse): _135.DelegationResponseAmino;
                fromAminoMsg(object: _135.DelegationResponseAminoMsg): _135.DelegationResponse;
                toAminoMsg(message: _135.DelegationResponse): _135.DelegationResponseAminoMsg;
                fromProtoMsg(message: _135.DelegationResponseProtoMsg): _135.DelegationResponse;
                toProto(message: _135.DelegationResponse): Uint8Array;
                toProtoMsg(message: _135.DelegationResponse): _135.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _135.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.RedelegationEntryResponse;
                fromPartial(object: Partial<_135.RedelegationEntryResponse>): _135.RedelegationEntryResponse;
                fromAmino(object: _135.RedelegationEntryResponseAmino): _135.RedelegationEntryResponse;
                toAmino(message: _135.RedelegationEntryResponse): _135.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _135.RedelegationEntryResponseAminoMsg): _135.RedelegationEntryResponse;
                toAminoMsg(message: _135.RedelegationEntryResponse): _135.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _135.RedelegationEntryResponseProtoMsg): _135.RedelegationEntryResponse;
                toProto(message: _135.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _135.RedelegationEntryResponse): _135.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _135.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.RedelegationResponse;
                fromPartial(object: Partial<_135.RedelegationResponse>): _135.RedelegationResponse;
                fromAmino(object: _135.RedelegationResponseAmino): _135.RedelegationResponse;
                toAmino(message: _135.RedelegationResponse): _135.RedelegationResponseAmino;
                fromAminoMsg(object: _135.RedelegationResponseAminoMsg): _135.RedelegationResponse;
                toAminoMsg(message: _135.RedelegationResponse): _135.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _135.RedelegationResponseProtoMsg): _135.RedelegationResponse;
                toProto(message: _135.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _135.RedelegationResponse): _135.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _135.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Pool;
                fromPartial(object: Partial<_135.Pool>): _135.Pool;
                fromAmino(object: _135.PoolAmino): _135.Pool;
                toAmino(message: _135.Pool): _135.PoolAmino;
                fromAminoMsg(object: _135.PoolAminoMsg): _135.Pool;
                toAminoMsg(message: _135.Pool): _135.PoolAminoMsg;
                fromProtoMsg(message: _135.PoolProtoMsg): _135.Pool;
                toProto(message: _135.Pool): Uint8Array;
                toProtoMsg(message: _135.Pool): _135.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _135.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.ValidatorUpdates;
                fromPartial(object: Partial<_135.ValidatorUpdates>): _135.ValidatorUpdates;
                fromAmino(object: _135.ValidatorUpdatesAmino): _135.ValidatorUpdates;
                toAmino(message: _135.ValidatorUpdates): _135.ValidatorUpdatesAmino;
                fromAminoMsg(object: _135.ValidatorUpdatesAminoMsg): _135.ValidatorUpdates;
                toAminoMsg(message: _135.ValidatorUpdates): _135.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _135.ValidatorUpdatesProtoMsg): _135.ValidatorUpdates;
                toProto(message: _135.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _135.ValidatorUpdates): _135.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _134.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorsRequest;
                fromPartial(object: Partial<_134.QueryValidatorsRequest>): _134.QueryValidatorsRequest;
                fromAmino(object: _134.QueryValidatorsRequestAmino): _134.QueryValidatorsRequest;
                toAmino(message: _134.QueryValidatorsRequest): _134.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _134.QueryValidatorsRequestAminoMsg): _134.QueryValidatorsRequest;
                toAminoMsg(message: _134.QueryValidatorsRequest): _134.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorsRequestProtoMsg): _134.QueryValidatorsRequest;
                toProto(message: _134.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorsRequest): _134.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _134.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorsResponse;
                fromPartial(object: Partial<_134.QueryValidatorsResponse>): _134.QueryValidatorsResponse;
                fromAmino(object: _134.QueryValidatorsResponseAmino): _134.QueryValidatorsResponse;
                toAmino(message: _134.QueryValidatorsResponse): _134.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _134.QueryValidatorsResponseAminoMsg): _134.QueryValidatorsResponse;
                toAminoMsg(message: _134.QueryValidatorsResponse): _134.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorsResponseProtoMsg): _134.QueryValidatorsResponse;
                toProto(message: _134.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorsResponse): _134.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _134.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorRequest;
                fromPartial(object: Partial<_134.QueryValidatorRequest>): _134.QueryValidatorRequest;
                fromAmino(object: _134.QueryValidatorRequestAmino): _134.QueryValidatorRequest;
                toAmino(message: _134.QueryValidatorRequest): _134.QueryValidatorRequestAmino;
                fromAminoMsg(object: _134.QueryValidatorRequestAminoMsg): _134.QueryValidatorRequest;
                toAminoMsg(message: _134.QueryValidatorRequest): _134.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorRequestProtoMsg): _134.QueryValidatorRequest;
                toProto(message: _134.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorRequest): _134.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _134.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorResponse;
                fromPartial(object: Partial<_134.QueryValidatorResponse>): _134.QueryValidatorResponse;
                fromAmino(object: _134.QueryValidatorResponseAmino): _134.QueryValidatorResponse;
                toAmino(message: _134.QueryValidatorResponse): _134.QueryValidatorResponseAmino;
                fromAminoMsg(object: _134.QueryValidatorResponseAminoMsg): _134.QueryValidatorResponse;
                toAminoMsg(message: _134.QueryValidatorResponse): _134.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorResponseProtoMsg): _134.QueryValidatorResponse;
                toProto(message: _134.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorResponse): _134.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _134.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_134.QueryValidatorDelegationsRequest>): _134.QueryValidatorDelegationsRequest;
                fromAmino(object: _134.QueryValidatorDelegationsRequestAmino): _134.QueryValidatorDelegationsRequest;
                toAmino(message: _134.QueryValidatorDelegationsRequest): _134.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _134.QueryValidatorDelegationsRequestAminoMsg): _134.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _134.QueryValidatorDelegationsRequest): _134.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorDelegationsRequestProtoMsg): _134.QueryValidatorDelegationsRequest;
                toProto(message: _134.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorDelegationsRequest): _134.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _134.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_134.QueryValidatorDelegationsResponse>): _134.QueryValidatorDelegationsResponse;
                fromAmino(object: _134.QueryValidatorDelegationsResponseAmino): _134.QueryValidatorDelegationsResponse;
                toAmino(message: _134.QueryValidatorDelegationsResponse): _134.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _134.QueryValidatorDelegationsResponseAminoMsg): _134.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _134.QueryValidatorDelegationsResponse): _134.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorDelegationsResponseProtoMsg): _134.QueryValidatorDelegationsResponse;
                toProto(message: _134.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorDelegationsResponse): _134.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _134.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_134.QueryValidatorUnbondingDelegationsRequest>): _134.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _134.QueryValidatorUnbondingDelegationsRequestAmino): _134.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _134.QueryValidatorUnbondingDelegationsRequest): _134.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _134.QueryValidatorUnbondingDelegationsRequestAminoMsg): _134.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _134.QueryValidatorUnbondingDelegationsRequest): _134.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorUnbondingDelegationsRequestProtoMsg): _134.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _134.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorUnbondingDelegationsRequest): _134.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _134.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_134.QueryValidatorUnbondingDelegationsResponse>): _134.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _134.QueryValidatorUnbondingDelegationsResponseAmino): _134.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _134.QueryValidatorUnbondingDelegationsResponse): _134.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _134.QueryValidatorUnbondingDelegationsResponseAminoMsg): _134.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _134.QueryValidatorUnbondingDelegationsResponse): _134.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryValidatorUnbondingDelegationsResponseProtoMsg): _134.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _134.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryValidatorUnbondingDelegationsResponse): _134.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _134.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegationRequest;
                fromPartial(object: Partial<_134.QueryDelegationRequest>): _134.QueryDelegationRequest;
                fromAmino(object: _134.QueryDelegationRequestAmino): _134.QueryDelegationRequest;
                toAmino(message: _134.QueryDelegationRequest): _134.QueryDelegationRequestAmino;
                fromAminoMsg(object: _134.QueryDelegationRequestAminoMsg): _134.QueryDelegationRequest;
                toAminoMsg(message: _134.QueryDelegationRequest): _134.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDelegationRequestProtoMsg): _134.QueryDelegationRequest;
                toProto(message: _134.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDelegationRequest): _134.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _134.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegationResponse;
                fromPartial(object: Partial<_134.QueryDelegationResponse>): _134.QueryDelegationResponse;
                fromAmino(object: _134.QueryDelegationResponseAmino): _134.QueryDelegationResponse;
                toAmino(message: _134.QueryDelegationResponse): _134.QueryDelegationResponseAmino;
                fromAminoMsg(object: _134.QueryDelegationResponseAminoMsg): _134.QueryDelegationResponse;
                toAminoMsg(message: _134.QueryDelegationResponse): _134.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDelegationResponseProtoMsg): _134.QueryDelegationResponse;
                toProto(message: _134.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDelegationResponse): _134.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _134.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_134.QueryUnbondingDelegationRequest>): _134.QueryUnbondingDelegationRequest;
                fromAmino(object: _134.QueryUnbondingDelegationRequestAmino): _134.QueryUnbondingDelegationRequest;
                toAmino(message: _134.QueryUnbondingDelegationRequest): _134.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _134.QueryUnbondingDelegationRequestAminoMsg): _134.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _134.QueryUnbondingDelegationRequest): _134.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _134.QueryUnbondingDelegationRequestProtoMsg): _134.QueryUnbondingDelegationRequest;
                toProto(message: _134.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _134.QueryUnbondingDelegationRequest): _134.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _134.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_134.QueryUnbondingDelegationResponse>): _134.QueryUnbondingDelegationResponse;
                fromAmino(object: _134.QueryUnbondingDelegationResponseAmino): _134.QueryUnbondingDelegationResponse;
                toAmino(message: _134.QueryUnbondingDelegationResponse): _134.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _134.QueryUnbondingDelegationResponseAminoMsg): _134.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _134.QueryUnbondingDelegationResponse): _134.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _134.QueryUnbondingDelegationResponseProtoMsg): _134.QueryUnbondingDelegationResponse;
                toProto(message: _134.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _134.QueryUnbondingDelegationResponse): _134.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_134.QueryDelegatorDelegationsRequest>): _134.QueryDelegatorDelegationsRequest;
                fromAmino(object: _134.QueryDelegatorDelegationsRequestAmino): _134.QueryDelegatorDelegationsRequest;
                toAmino(message: _134.QueryDelegatorDelegationsRequest): _134.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _134.QueryDelegatorDelegationsRequestAminoMsg): _134.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _134.QueryDelegatorDelegationsRequest): _134.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorDelegationsRequestProtoMsg): _134.QueryDelegatorDelegationsRequest;
                toProto(message: _134.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorDelegationsRequest): _134.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_134.QueryDelegatorDelegationsResponse>): _134.QueryDelegatorDelegationsResponse;
                fromAmino(object: _134.QueryDelegatorDelegationsResponseAmino): _134.QueryDelegatorDelegationsResponse;
                toAmino(message: _134.QueryDelegatorDelegationsResponse): _134.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _134.QueryDelegatorDelegationsResponseAminoMsg): _134.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _134.QueryDelegatorDelegationsResponse): _134.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorDelegationsResponseProtoMsg): _134.QueryDelegatorDelegationsResponse;
                toProto(message: _134.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorDelegationsResponse): _134.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_134.QueryDelegatorUnbondingDelegationsRequest>): _134.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _134.QueryDelegatorUnbondingDelegationsRequestAmino): _134.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _134.QueryDelegatorUnbondingDelegationsRequest): _134.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _134.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _134.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _134.QueryDelegatorUnbondingDelegationsRequest): _134.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _134.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _134.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorUnbondingDelegationsRequest): _134.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_134.QueryDelegatorUnbondingDelegationsResponse>): _134.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _134.QueryDelegatorUnbondingDelegationsResponseAmino): _134.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _134.QueryDelegatorUnbondingDelegationsResponse): _134.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _134.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _134.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _134.QueryDelegatorUnbondingDelegationsResponse): _134.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _134.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _134.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorUnbondingDelegationsResponse): _134.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _134.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryRedelegationsRequest;
                fromPartial(object: Partial<_134.QueryRedelegationsRequest>): _134.QueryRedelegationsRequest;
                fromAmino(object: _134.QueryRedelegationsRequestAmino): _134.QueryRedelegationsRequest;
                toAmino(message: _134.QueryRedelegationsRequest): _134.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _134.QueryRedelegationsRequestAminoMsg): _134.QueryRedelegationsRequest;
                toAminoMsg(message: _134.QueryRedelegationsRequest): _134.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryRedelegationsRequestProtoMsg): _134.QueryRedelegationsRequest;
                toProto(message: _134.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryRedelegationsRequest): _134.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _134.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryRedelegationsResponse;
                fromPartial(object: Partial<_134.QueryRedelegationsResponse>): _134.QueryRedelegationsResponse;
                fromAmino(object: _134.QueryRedelegationsResponseAmino): _134.QueryRedelegationsResponse;
                toAmino(message: _134.QueryRedelegationsResponse): _134.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _134.QueryRedelegationsResponseAminoMsg): _134.QueryRedelegationsResponse;
                toAminoMsg(message: _134.QueryRedelegationsResponse): _134.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryRedelegationsResponseProtoMsg): _134.QueryRedelegationsResponse;
                toProto(message: _134.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryRedelegationsResponse): _134.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_134.QueryDelegatorValidatorsRequest>): _134.QueryDelegatorValidatorsRequest;
                fromAmino(object: _134.QueryDelegatorValidatorsRequestAmino): _134.QueryDelegatorValidatorsRequest;
                toAmino(message: _134.QueryDelegatorValidatorsRequest): _134.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _134.QueryDelegatorValidatorsRequestAminoMsg): _134.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _134.QueryDelegatorValidatorsRequest): _134.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorValidatorsRequestProtoMsg): _134.QueryDelegatorValidatorsRequest;
                toProto(message: _134.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorValidatorsRequest): _134.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_134.QueryDelegatorValidatorsResponse>): _134.QueryDelegatorValidatorsResponse;
                fromAmino(object: _134.QueryDelegatorValidatorsResponseAmino): _134.QueryDelegatorValidatorsResponse;
                toAmino(message: _134.QueryDelegatorValidatorsResponse): _134.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _134.QueryDelegatorValidatorsResponseAminoMsg): _134.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _134.QueryDelegatorValidatorsResponse): _134.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorValidatorsResponseProtoMsg): _134.QueryDelegatorValidatorsResponse;
                toProto(message: _134.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorValidatorsResponse): _134.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_134.QueryDelegatorValidatorRequest>): _134.QueryDelegatorValidatorRequest;
                fromAmino(object: _134.QueryDelegatorValidatorRequestAmino): _134.QueryDelegatorValidatorRequest;
                toAmino(message: _134.QueryDelegatorValidatorRequest): _134.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _134.QueryDelegatorValidatorRequestAminoMsg): _134.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _134.QueryDelegatorValidatorRequest): _134.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorValidatorRequestProtoMsg): _134.QueryDelegatorValidatorRequest;
                toProto(message: _134.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorValidatorRequest): _134.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _134.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_134.QueryDelegatorValidatorResponse>): _134.QueryDelegatorValidatorResponse;
                fromAmino(object: _134.QueryDelegatorValidatorResponseAmino): _134.QueryDelegatorValidatorResponse;
                toAmino(message: _134.QueryDelegatorValidatorResponse): _134.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _134.QueryDelegatorValidatorResponseAminoMsg): _134.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _134.QueryDelegatorValidatorResponse): _134.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDelegatorValidatorResponseProtoMsg): _134.QueryDelegatorValidatorResponse;
                toProto(message: _134.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDelegatorValidatorResponse): _134.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _134.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_134.QueryHistoricalInfoRequest>): _134.QueryHistoricalInfoRequest;
                fromAmino(object: _134.QueryHistoricalInfoRequestAmino): _134.QueryHistoricalInfoRequest;
                toAmino(message: _134.QueryHistoricalInfoRequest): _134.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _134.QueryHistoricalInfoRequestAminoMsg): _134.QueryHistoricalInfoRequest;
                toAminoMsg(message: _134.QueryHistoricalInfoRequest): _134.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _134.QueryHistoricalInfoRequestProtoMsg): _134.QueryHistoricalInfoRequest;
                toProto(message: _134.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _134.QueryHistoricalInfoRequest): _134.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _134.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_134.QueryHistoricalInfoResponse>): _134.QueryHistoricalInfoResponse;
                fromAmino(object: _134.QueryHistoricalInfoResponseAmino): _134.QueryHistoricalInfoResponse;
                toAmino(message: _134.QueryHistoricalInfoResponse): _134.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _134.QueryHistoricalInfoResponseAminoMsg): _134.QueryHistoricalInfoResponse;
                toAminoMsg(message: _134.QueryHistoricalInfoResponse): _134.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _134.QueryHistoricalInfoResponseProtoMsg): _134.QueryHistoricalInfoResponse;
                toProto(message: _134.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _134.QueryHistoricalInfoResponse): _134.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _134.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.QueryPoolRequest;
                fromPartial(_: Partial<_134.QueryPoolRequest>): _134.QueryPoolRequest;
                fromAmino(_: _134.QueryPoolRequestAmino): _134.QueryPoolRequest;
                toAmino(_: _134.QueryPoolRequest): _134.QueryPoolRequestAmino;
                fromAminoMsg(object: _134.QueryPoolRequestAminoMsg): _134.QueryPoolRequest;
                toAminoMsg(message: _134.QueryPoolRequest): _134.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _134.QueryPoolRequestProtoMsg): _134.QueryPoolRequest;
                toProto(message: _134.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _134.QueryPoolRequest): _134.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _134.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryPoolResponse;
                fromPartial(object: Partial<_134.QueryPoolResponse>): _134.QueryPoolResponse;
                fromAmino(object: _134.QueryPoolResponseAmino): _134.QueryPoolResponse;
                toAmino(message: _134.QueryPoolResponse): _134.QueryPoolResponseAmino;
                fromAminoMsg(object: _134.QueryPoolResponseAminoMsg): _134.QueryPoolResponse;
                toAminoMsg(message: _134.QueryPoolResponse): _134.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _134.QueryPoolResponseProtoMsg): _134.QueryPoolResponse;
                toProto(message: _134.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _134.QueryPoolResponse): _134.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _134.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.QueryParamsRequest;
                fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
                fromAmino(_: _134.QueryParamsRequestAmino): _134.QueryParamsRequest;
                toAmino(_: _134.QueryParamsRequest): _134.QueryParamsRequestAmino;
                fromAminoMsg(object: _134.QueryParamsRequestAminoMsg): _134.QueryParamsRequest;
                toAminoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryParamsRequestProtoMsg): _134.QueryParamsRequest;
                toProto(message: _134.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _134.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryParamsResponse;
                fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
                fromAmino(object: _134.QueryParamsResponseAmino): _134.QueryParamsResponse;
                toAmino(message: _134.QueryParamsResponse): _134.QueryParamsResponseAmino;
                fromAminoMsg(object: _134.QueryParamsResponseAminoMsg): _134.QueryParamsResponse;
                toAminoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryParamsResponseProtoMsg): _134.QueryParamsResponse;
                toProto(message: _134.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _133.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.LastValidatorPower;
                fromPartial(object: Partial<_133.LastValidatorPower>): _133.LastValidatorPower;
                fromAmino(object: _133.LastValidatorPowerAmino): _133.LastValidatorPower;
                toAmino(message: _133.LastValidatorPower): _133.LastValidatorPowerAmino;
                fromAminoMsg(object: _133.LastValidatorPowerAminoMsg): _133.LastValidatorPower;
                toAminoMsg(message: _133.LastValidatorPower): _133.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _133.LastValidatorPowerProtoMsg): _133.LastValidatorPower;
                toProto(message: _133.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _133.LastValidatorPower): _133.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _132.AuthorizationType;
            authorizationTypeToJSON(object: _132.AuthorizationType): string;
            AuthorizationType: typeof _132.AuthorizationType;
            AuthorizationTypeSDKType: typeof _132.AuthorizationType;
            AuthorizationTypeAmino: typeof _132.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _132.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.StakeAuthorization;
                fromPartial(object: Partial<_132.StakeAuthorization>): _132.StakeAuthorization;
                fromAmino(object: _132.StakeAuthorizationAmino): _132.StakeAuthorization;
                toAmino(message: _132.StakeAuthorization): _132.StakeAuthorizationAmino;
                fromAminoMsg(object: _132.StakeAuthorizationAminoMsg): _132.StakeAuthorization;
                toAminoMsg(message: _132.StakeAuthorization): _132.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _132.StakeAuthorizationProtoMsg): _132.StakeAuthorization;
                toProto(message: _132.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _132.StakeAuthorization): _132.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _132.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.StakeAuthorization_Validators;
                fromPartial(object: Partial<_132.StakeAuthorization_Validators>): _132.StakeAuthorization_Validators;
                fromAmino(object: _132.StakeAuthorization_ValidatorsAmino): _132.StakeAuthorization_Validators;
                toAmino(message: _132.StakeAuthorization_Validators): _132.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _132.StakeAuthorization_ValidatorsAminoMsg): _132.StakeAuthorization_Validators;
                toAminoMsg(message: _132.StakeAuthorization_Validators): _132.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _132.StakeAuthorization_ValidatorsProtoMsg): _132.StakeAuthorization_Validators;
                toProto(message: _132.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _132.StakeAuthorization_Validators): _132.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _137.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _137.Config;
                    fromPartial(object: Partial<_137.Config>): _137.Config;
                    fromAmino(object: _137.ConfigAmino): _137.Config;
                    toAmino(message: _137.Config): _137.ConfigAmino;
                    fromAminoMsg(object: _137.ConfigAminoMsg): _137.Config;
                    toAminoMsg(message: _137.Config): _137.ConfigAminoMsg;
                    fromProtoMsg(message: _137.ConfigProtoMsg): _137.Config;
                    toProto(message: _137.Config): Uint8Array;
                    toProtoMsg(message: _137.Config): _137.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _138.SignMode;
                signModeToJSON(object: _138.SignMode): string;
                SignMode: typeof _138.SignMode;
                SignModeSDKType: typeof _138.SignMode;
                SignModeAmino: typeof _138.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _138.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.SignatureDescriptors;
                    fromPartial(object: Partial<_138.SignatureDescriptors>): _138.SignatureDescriptors;
                    fromAmino(object: _138.SignatureDescriptorsAmino): _138.SignatureDescriptors;
                    toAmino(message: _138.SignatureDescriptors): _138.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _138.SignatureDescriptorsAminoMsg): _138.SignatureDescriptors;
                    toAminoMsg(message: _138.SignatureDescriptors): _138.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _138.SignatureDescriptorsProtoMsg): _138.SignatureDescriptors;
                    toProto(message: _138.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _138.SignatureDescriptors): _138.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _138.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.SignatureDescriptor;
                    fromPartial(object: Partial<_138.SignatureDescriptor>): _138.SignatureDescriptor;
                    fromAmino(object: _138.SignatureDescriptorAmino): _138.SignatureDescriptor;
                    toAmino(message: _138.SignatureDescriptor): _138.SignatureDescriptorAmino;
                    fromAminoMsg(object: _138.SignatureDescriptorAminoMsg): _138.SignatureDescriptor;
                    toAminoMsg(message: _138.SignatureDescriptor): _138.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _138.SignatureDescriptorProtoMsg): _138.SignatureDescriptor;
                    toProto(message: _138.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _138.SignatureDescriptor): _138.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _138.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_138.SignatureDescriptor_Data>): _138.SignatureDescriptor_Data;
                    fromAmino(object: _138.SignatureDescriptor_DataAmino): _138.SignatureDescriptor_Data;
                    toAmino(message: _138.SignatureDescriptor_Data): _138.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _138.SignatureDescriptor_DataAminoMsg): _138.SignatureDescriptor_Data;
                    toAminoMsg(message: _138.SignatureDescriptor_Data): _138.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _138.SignatureDescriptor_DataProtoMsg): _138.SignatureDescriptor_Data;
                    toProto(message: _138.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _138.SignatureDescriptor_Data): _138.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _138.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_138.SignatureDescriptor_Data_Single>): _138.SignatureDescriptor_Data_Single;
                    fromAmino(object: _138.SignatureDescriptor_Data_SingleAmino): _138.SignatureDescriptor_Data_Single;
                    toAmino(message: _138.SignatureDescriptor_Data_Single): _138.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _138.SignatureDescriptor_Data_SingleAminoMsg): _138.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _138.SignatureDescriptor_Data_Single): _138.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _138.SignatureDescriptor_Data_SingleProtoMsg): _138.SignatureDescriptor_Data_Single;
                    toProto(message: _138.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _138.SignatureDescriptor_Data_Single): _138.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _138.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_138.SignatureDescriptor_Data_Multi>): _138.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _138.SignatureDescriptor_Data_MultiAmino): _138.SignatureDescriptor_Data_Multi;
                    toAmino(message: _138.SignatureDescriptor_Data_Multi): _138.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _138.SignatureDescriptor_Data_MultiAminoMsg): _138.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _138.SignatureDescriptor_Data_Multi): _138.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _138.SignatureDescriptor_Data_MultiProtoMsg): _138.SignatureDescriptor_Data_Multi;
                    toProto(message: _138.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _138.SignatureDescriptor_Data_Multi): _138.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _269.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _139.SimulateRequest): Promise<_139.SimulateResponse>;
                getTx(request: _139.GetTxRequest): Promise<_139.GetTxResponse>;
                broadcastTx(request: _139.BroadcastTxRequest): Promise<_139.BroadcastTxResponse>;
                getTxsEvent(request: _139.GetTxsEventRequest): Promise<_139.GetTxsEventResponse>;
                getBlockWithTxs(request: _139.GetBlockWithTxsRequest): Promise<_139.GetBlockWithTxsResponse>;
                txDecode(request: _139.TxDecodeRequest): Promise<_139.TxDecodeResponse>;
                txEncode(request: _139.TxEncodeRequest): Promise<_139.TxEncodeResponse>;
                txEncodeAmino(request: _139.TxEncodeAminoRequest): Promise<_139.TxEncodeAminoResponse>;
                txDecodeAmino(request: _139.TxDecodeAminoRequest): Promise<_139.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _247.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _140.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.Tx;
                fromPartial(object: Partial<_140.Tx>): _140.Tx;
                fromAmino(object: _140.TxAmino): _140.Tx;
                toAmino(message: _140.Tx): _140.TxAmino;
                fromAminoMsg(object: _140.TxAminoMsg): _140.Tx;
                toAminoMsg(message: _140.Tx): _140.TxAminoMsg;
                fromProtoMsg(message: _140.TxProtoMsg): _140.Tx;
                toProto(message: _140.Tx): Uint8Array;
                toProtoMsg(message: _140.Tx): _140.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _140.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.TxRaw;
                fromPartial(object: Partial<_140.TxRaw>): _140.TxRaw;
                fromAmino(object: _140.TxRawAmino): _140.TxRaw;
                toAmino(message: _140.TxRaw): _140.TxRawAmino;
                fromAminoMsg(object: _140.TxRawAminoMsg): _140.TxRaw;
                toAminoMsg(message: _140.TxRaw): _140.TxRawAminoMsg;
                fromProtoMsg(message: _140.TxRawProtoMsg): _140.TxRaw;
                toProto(message: _140.TxRaw): Uint8Array;
                toProtoMsg(message: _140.TxRaw): _140.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _140.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.SignDoc;
                fromPartial(object: Partial<_140.SignDoc>): _140.SignDoc;
                fromAmino(object: _140.SignDocAmino): _140.SignDoc;
                toAmino(message: _140.SignDoc): _140.SignDocAmino;
                fromAminoMsg(object: _140.SignDocAminoMsg): _140.SignDoc;
                toAminoMsg(message: _140.SignDoc): _140.SignDocAminoMsg;
                fromProtoMsg(message: _140.SignDocProtoMsg): _140.SignDoc;
                toProto(message: _140.SignDoc): Uint8Array;
                toProtoMsg(message: _140.SignDoc): _140.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _140.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.SignDocDirectAux;
                fromPartial(object: Partial<_140.SignDocDirectAux>): _140.SignDocDirectAux;
                fromAmino(object: _140.SignDocDirectAuxAmino): _140.SignDocDirectAux;
                toAmino(message: _140.SignDocDirectAux): _140.SignDocDirectAuxAmino;
                fromAminoMsg(object: _140.SignDocDirectAuxAminoMsg): _140.SignDocDirectAux;
                toAminoMsg(message: _140.SignDocDirectAux): _140.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _140.SignDocDirectAuxProtoMsg): _140.SignDocDirectAux;
                toProto(message: _140.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _140.SignDocDirectAux): _140.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _140.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.TxBody;
                fromPartial(object: Partial<_140.TxBody>): _140.TxBody;
                fromAmino(object: _140.TxBodyAmino): _140.TxBody;
                toAmino(message: _140.TxBody): _140.TxBodyAmino;
                fromAminoMsg(object: _140.TxBodyAminoMsg): _140.TxBody;
                toAminoMsg(message: _140.TxBody): _140.TxBodyAminoMsg;
                fromProtoMsg(message: _140.TxBodyProtoMsg): _140.TxBody;
                toProto(message: _140.TxBody): Uint8Array;
                toProtoMsg(message: _140.TxBody): _140.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _140.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.AuthInfo;
                fromPartial(object: Partial<_140.AuthInfo>): _140.AuthInfo;
                fromAmino(object: _140.AuthInfoAmino): _140.AuthInfo;
                toAmino(message: _140.AuthInfo): _140.AuthInfoAmino;
                fromAminoMsg(object: _140.AuthInfoAminoMsg): _140.AuthInfo;
                toAminoMsg(message: _140.AuthInfo): _140.AuthInfoAminoMsg;
                fromProtoMsg(message: _140.AuthInfoProtoMsg): _140.AuthInfo;
                toProto(message: _140.AuthInfo): Uint8Array;
                toProtoMsg(message: _140.AuthInfo): _140.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _140.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.SignerInfo;
                fromPartial(object: Partial<_140.SignerInfo>): _140.SignerInfo;
                fromAmino(object: _140.SignerInfoAmino): _140.SignerInfo;
                toAmino(message: _140.SignerInfo): _140.SignerInfoAmino;
                fromAminoMsg(object: _140.SignerInfoAminoMsg): _140.SignerInfo;
                toAminoMsg(message: _140.SignerInfo): _140.SignerInfoAminoMsg;
                fromProtoMsg(message: _140.SignerInfoProtoMsg): _140.SignerInfo;
                toProto(message: _140.SignerInfo): Uint8Array;
                toProtoMsg(message: _140.SignerInfo): _140.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _140.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.ModeInfo;
                fromPartial(object: Partial<_140.ModeInfo>): _140.ModeInfo;
                fromAmino(object: _140.ModeInfoAmino): _140.ModeInfo;
                toAmino(message: _140.ModeInfo): _140.ModeInfoAmino;
                fromAminoMsg(object: _140.ModeInfoAminoMsg): _140.ModeInfo;
                toAminoMsg(message: _140.ModeInfo): _140.ModeInfoAminoMsg;
                fromProtoMsg(message: _140.ModeInfoProtoMsg): _140.ModeInfo;
                toProto(message: _140.ModeInfo): Uint8Array;
                toProtoMsg(message: _140.ModeInfo): _140.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _140.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.ModeInfo_Single;
                fromPartial(object: Partial<_140.ModeInfo_Single>): _140.ModeInfo_Single;
                fromAmino(object: _140.ModeInfo_SingleAmino): _140.ModeInfo_Single;
                toAmino(message: _140.ModeInfo_Single): _140.ModeInfo_SingleAmino;
                fromAminoMsg(object: _140.ModeInfo_SingleAminoMsg): _140.ModeInfo_Single;
                toAminoMsg(message: _140.ModeInfo_Single): _140.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _140.ModeInfo_SingleProtoMsg): _140.ModeInfo_Single;
                toProto(message: _140.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _140.ModeInfo_Single): _140.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _140.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.ModeInfo_Multi;
                fromPartial(object: Partial<_140.ModeInfo_Multi>): _140.ModeInfo_Multi;
                fromAmino(object: _140.ModeInfo_MultiAmino): _140.ModeInfo_Multi;
                toAmino(message: _140.ModeInfo_Multi): _140.ModeInfo_MultiAmino;
                fromAminoMsg(object: _140.ModeInfo_MultiAminoMsg): _140.ModeInfo_Multi;
                toAminoMsg(message: _140.ModeInfo_Multi): _140.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _140.ModeInfo_MultiProtoMsg): _140.ModeInfo_Multi;
                toProto(message: _140.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _140.ModeInfo_Multi): _140.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _140.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.Fee;
                fromPartial(object: Partial<_140.Fee>): _140.Fee;
                fromAmino(object: _140.FeeAmino): _140.Fee;
                toAmino(message: _140.Fee): _140.FeeAmino;
                fromAminoMsg(object: _140.FeeAminoMsg): _140.Fee;
                toAminoMsg(message: _140.Fee): _140.FeeAminoMsg;
                fromProtoMsg(message: _140.FeeProtoMsg): _140.Fee;
                toProto(message: _140.Fee): Uint8Array;
                toProtoMsg(message: _140.Fee): _140.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _140.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.Tip;
                fromPartial(object: Partial<_140.Tip>): _140.Tip;
                fromAmino(object: _140.TipAmino): _140.Tip;
                toAmino(message: _140.Tip): _140.TipAmino;
                fromAminoMsg(object: _140.TipAminoMsg): _140.Tip;
                toAminoMsg(message: _140.Tip): _140.TipAminoMsg;
                fromProtoMsg(message: _140.TipProtoMsg): _140.Tip;
                toProto(message: _140.Tip): Uint8Array;
                toProtoMsg(message: _140.Tip): _140.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _140.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.AuxSignerData;
                fromPartial(object: Partial<_140.AuxSignerData>): _140.AuxSignerData;
                fromAmino(object: _140.AuxSignerDataAmino): _140.AuxSignerData;
                toAmino(message: _140.AuxSignerData): _140.AuxSignerDataAmino;
                fromAminoMsg(object: _140.AuxSignerDataAminoMsg): _140.AuxSignerData;
                toAminoMsg(message: _140.AuxSignerData): _140.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _140.AuxSignerDataProtoMsg): _140.AuxSignerData;
                toProto(message: _140.AuxSignerData): Uint8Array;
                toProtoMsg(message: _140.AuxSignerData): _140.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _139.OrderBy;
            orderByToJSON(object: _139.OrderBy): string;
            broadcastModeFromJSON(object: any): _139.BroadcastMode;
            broadcastModeToJSON(object: _139.BroadcastMode): string;
            OrderBy: typeof _139.OrderBy;
            OrderBySDKType: typeof _139.OrderBy;
            OrderByAmino: typeof _139.OrderBy;
            BroadcastMode: typeof _139.BroadcastMode;
            BroadcastModeSDKType: typeof _139.BroadcastMode;
            BroadcastModeAmino: typeof _139.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _139.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.GetTxsEventRequest;
                fromPartial(object: Partial<_139.GetTxsEventRequest>): _139.GetTxsEventRequest;
                fromAmino(object: _139.GetTxsEventRequestAmino): _139.GetTxsEventRequest;
                toAmino(message: _139.GetTxsEventRequest): _139.GetTxsEventRequestAmino;
                fromAminoMsg(object: _139.GetTxsEventRequestAminoMsg): _139.GetTxsEventRequest;
                toAminoMsg(message: _139.GetTxsEventRequest): _139.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _139.GetTxsEventRequestProtoMsg): _139.GetTxsEventRequest;
                toProto(message: _139.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _139.GetTxsEventRequest): _139.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _139.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.GetTxsEventResponse;
                fromPartial(object: Partial<_139.GetTxsEventResponse>): _139.GetTxsEventResponse;
                fromAmino(object: _139.GetTxsEventResponseAmino): _139.GetTxsEventResponse;
                toAmino(message: _139.GetTxsEventResponse): _139.GetTxsEventResponseAmino;
                fromAminoMsg(object: _139.GetTxsEventResponseAminoMsg): _139.GetTxsEventResponse;
                toAminoMsg(message: _139.GetTxsEventResponse): _139.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _139.GetTxsEventResponseProtoMsg): _139.GetTxsEventResponse;
                toProto(message: _139.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _139.GetTxsEventResponse): _139.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _139.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.BroadcastTxRequest;
                fromPartial(object: Partial<_139.BroadcastTxRequest>): _139.BroadcastTxRequest;
                fromAmino(object: _139.BroadcastTxRequestAmino): _139.BroadcastTxRequest;
                toAmino(message: _139.BroadcastTxRequest): _139.BroadcastTxRequestAmino;
                fromAminoMsg(object: _139.BroadcastTxRequestAminoMsg): _139.BroadcastTxRequest;
                toAminoMsg(message: _139.BroadcastTxRequest): _139.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _139.BroadcastTxRequestProtoMsg): _139.BroadcastTxRequest;
                toProto(message: _139.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _139.BroadcastTxRequest): _139.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _139.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.BroadcastTxResponse;
                fromPartial(object: Partial<_139.BroadcastTxResponse>): _139.BroadcastTxResponse;
                fromAmino(object: _139.BroadcastTxResponseAmino): _139.BroadcastTxResponse;
                toAmino(message: _139.BroadcastTxResponse): _139.BroadcastTxResponseAmino;
                fromAminoMsg(object: _139.BroadcastTxResponseAminoMsg): _139.BroadcastTxResponse;
                toAminoMsg(message: _139.BroadcastTxResponse): _139.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _139.BroadcastTxResponseProtoMsg): _139.BroadcastTxResponse;
                toProto(message: _139.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _139.BroadcastTxResponse): _139.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _139.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.SimulateRequest;
                fromPartial(object: Partial<_139.SimulateRequest>): _139.SimulateRequest;
                fromAmino(object: _139.SimulateRequestAmino): _139.SimulateRequest;
                toAmino(message: _139.SimulateRequest): _139.SimulateRequestAmino;
                fromAminoMsg(object: _139.SimulateRequestAminoMsg): _139.SimulateRequest;
                toAminoMsg(message: _139.SimulateRequest): _139.SimulateRequestAminoMsg;
                fromProtoMsg(message: _139.SimulateRequestProtoMsg): _139.SimulateRequest;
                toProto(message: _139.SimulateRequest): Uint8Array;
                toProtoMsg(message: _139.SimulateRequest): _139.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _139.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.SimulateResponse;
                fromPartial(object: Partial<_139.SimulateResponse>): _139.SimulateResponse;
                fromAmino(object: _139.SimulateResponseAmino): _139.SimulateResponse;
                toAmino(message: _139.SimulateResponse): _139.SimulateResponseAmino;
                fromAminoMsg(object: _139.SimulateResponseAminoMsg): _139.SimulateResponse;
                toAminoMsg(message: _139.SimulateResponse): _139.SimulateResponseAminoMsg;
                fromProtoMsg(message: _139.SimulateResponseProtoMsg): _139.SimulateResponse;
                toProto(message: _139.SimulateResponse): Uint8Array;
                toProtoMsg(message: _139.SimulateResponse): _139.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _139.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.GetTxRequest;
                fromPartial(object: Partial<_139.GetTxRequest>): _139.GetTxRequest;
                fromAmino(object: _139.GetTxRequestAmino): _139.GetTxRequest;
                toAmino(message: _139.GetTxRequest): _139.GetTxRequestAmino;
                fromAminoMsg(object: _139.GetTxRequestAminoMsg): _139.GetTxRequest;
                toAminoMsg(message: _139.GetTxRequest): _139.GetTxRequestAminoMsg;
                fromProtoMsg(message: _139.GetTxRequestProtoMsg): _139.GetTxRequest;
                toProto(message: _139.GetTxRequest): Uint8Array;
                toProtoMsg(message: _139.GetTxRequest): _139.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _139.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.GetTxResponse;
                fromPartial(object: Partial<_139.GetTxResponse>): _139.GetTxResponse;
                fromAmino(object: _139.GetTxResponseAmino): _139.GetTxResponse;
                toAmino(message: _139.GetTxResponse): _139.GetTxResponseAmino;
                fromAminoMsg(object: _139.GetTxResponseAminoMsg): _139.GetTxResponse;
                toAminoMsg(message: _139.GetTxResponse): _139.GetTxResponseAminoMsg;
                fromProtoMsg(message: _139.GetTxResponseProtoMsg): _139.GetTxResponse;
                toProto(message: _139.GetTxResponse): Uint8Array;
                toProtoMsg(message: _139.GetTxResponse): _139.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _139.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_139.GetBlockWithTxsRequest>): _139.GetBlockWithTxsRequest;
                fromAmino(object: _139.GetBlockWithTxsRequestAmino): _139.GetBlockWithTxsRequest;
                toAmino(message: _139.GetBlockWithTxsRequest): _139.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _139.GetBlockWithTxsRequestAminoMsg): _139.GetBlockWithTxsRequest;
                toAminoMsg(message: _139.GetBlockWithTxsRequest): _139.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _139.GetBlockWithTxsRequestProtoMsg): _139.GetBlockWithTxsRequest;
                toProto(message: _139.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _139.GetBlockWithTxsRequest): _139.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _139.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_139.GetBlockWithTxsResponse>): _139.GetBlockWithTxsResponse;
                fromAmino(object: _139.GetBlockWithTxsResponseAmino): _139.GetBlockWithTxsResponse;
                toAmino(message: _139.GetBlockWithTxsResponse): _139.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _139.GetBlockWithTxsResponseAminoMsg): _139.GetBlockWithTxsResponse;
                toAminoMsg(message: _139.GetBlockWithTxsResponse): _139.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _139.GetBlockWithTxsResponseProtoMsg): _139.GetBlockWithTxsResponse;
                toProto(message: _139.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _139.GetBlockWithTxsResponse): _139.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _139.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxDecodeRequest;
                fromPartial(object: Partial<_139.TxDecodeRequest>): _139.TxDecodeRequest;
                fromAmino(object: _139.TxDecodeRequestAmino): _139.TxDecodeRequest;
                toAmino(message: _139.TxDecodeRequest): _139.TxDecodeRequestAmino;
                fromAminoMsg(object: _139.TxDecodeRequestAminoMsg): _139.TxDecodeRequest;
                toAminoMsg(message: _139.TxDecodeRequest): _139.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _139.TxDecodeRequestProtoMsg): _139.TxDecodeRequest;
                toProto(message: _139.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _139.TxDecodeRequest): _139.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _139.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxDecodeResponse;
                fromPartial(object: Partial<_139.TxDecodeResponse>): _139.TxDecodeResponse;
                fromAmino(object: _139.TxDecodeResponseAmino): _139.TxDecodeResponse;
                toAmino(message: _139.TxDecodeResponse): _139.TxDecodeResponseAmino;
                fromAminoMsg(object: _139.TxDecodeResponseAminoMsg): _139.TxDecodeResponse;
                toAminoMsg(message: _139.TxDecodeResponse): _139.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _139.TxDecodeResponseProtoMsg): _139.TxDecodeResponse;
                toProto(message: _139.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _139.TxDecodeResponse): _139.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _139.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxEncodeRequest;
                fromPartial(object: Partial<_139.TxEncodeRequest>): _139.TxEncodeRequest;
                fromAmino(object: _139.TxEncodeRequestAmino): _139.TxEncodeRequest;
                toAmino(message: _139.TxEncodeRequest): _139.TxEncodeRequestAmino;
                fromAminoMsg(object: _139.TxEncodeRequestAminoMsg): _139.TxEncodeRequest;
                toAminoMsg(message: _139.TxEncodeRequest): _139.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _139.TxEncodeRequestProtoMsg): _139.TxEncodeRequest;
                toProto(message: _139.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _139.TxEncodeRequest): _139.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _139.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxEncodeResponse;
                fromPartial(object: Partial<_139.TxEncodeResponse>): _139.TxEncodeResponse;
                fromAmino(object: _139.TxEncodeResponseAmino): _139.TxEncodeResponse;
                toAmino(message: _139.TxEncodeResponse): _139.TxEncodeResponseAmino;
                fromAminoMsg(object: _139.TxEncodeResponseAminoMsg): _139.TxEncodeResponse;
                toAminoMsg(message: _139.TxEncodeResponse): _139.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _139.TxEncodeResponseProtoMsg): _139.TxEncodeResponse;
                toProto(message: _139.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _139.TxEncodeResponse): _139.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _139.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxEncodeAminoRequest;
                fromPartial(object: Partial<_139.TxEncodeAminoRequest>): _139.TxEncodeAminoRequest;
                fromAmino(object: _139.TxEncodeAminoRequestAmino): _139.TxEncodeAminoRequest;
                toAmino(message: _139.TxEncodeAminoRequest): _139.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _139.TxEncodeAminoRequestAminoMsg): _139.TxEncodeAminoRequest;
                toAminoMsg(message: _139.TxEncodeAminoRequest): _139.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _139.TxEncodeAminoRequestProtoMsg): _139.TxEncodeAminoRequest;
                toProto(message: _139.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _139.TxEncodeAminoRequest): _139.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _139.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxEncodeAminoResponse;
                fromPartial(object: Partial<_139.TxEncodeAminoResponse>): _139.TxEncodeAminoResponse;
                fromAmino(object: _139.TxEncodeAminoResponseAmino): _139.TxEncodeAminoResponse;
                toAmino(message: _139.TxEncodeAminoResponse): _139.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _139.TxEncodeAminoResponseAminoMsg): _139.TxEncodeAminoResponse;
                toAminoMsg(message: _139.TxEncodeAminoResponse): _139.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _139.TxEncodeAminoResponseProtoMsg): _139.TxEncodeAminoResponse;
                toProto(message: _139.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _139.TxEncodeAminoResponse): _139.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _139.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxDecodeAminoRequest;
                fromPartial(object: Partial<_139.TxDecodeAminoRequest>): _139.TxDecodeAminoRequest;
                fromAmino(object: _139.TxDecodeAminoRequestAmino): _139.TxDecodeAminoRequest;
                toAmino(message: _139.TxDecodeAminoRequest): _139.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _139.TxDecodeAminoRequestAminoMsg): _139.TxDecodeAminoRequest;
                toAminoMsg(message: _139.TxDecodeAminoRequest): _139.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _139.TxDecodeAminoRequestProtoMsg): _139.TxDecodeAminoRequest;
                toProto(message: _139.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _139.TxDecodeAminoRequest): _139.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _139.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.TxDecodeAminoResponse;
                fromPartial(object: Partial<_139.TxDecodeAminoResponse>): _139.TxDecodeAminoResponse;
                fromAmino(object: _139.TxDecodeAminoResponseAmino): _139.TxDecodeAminoResponse;
                toAmino(message: _139.TxDecodeAminoResponse): _139.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _139.TxDecodeAminoResponseAminoMsg): _139.TxDecodeAminoResponse;
                toAminoMsg(message: _139.TxDecodeAminoResponse): _139.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _139.TxDecodeAminoResponseProtoMsg): _139.TxDecodeAminoResponse;
                toProto(message: _139.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _139.TxDecodeAminoResponse): _139.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _141.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _141.Module;
                    fromPartial(object: Partial<_141.Module>): _141.Module;
                    fromAmino(object: _141.ModuleAmino): _141.Module;
                    toAmino(message: _141.Module): _141.ModuleAmino;
                    fromAminoMsg(object: _141.ModuleAminoMsg): _141.Module;
                    toAminoMsg(message: _141.Module): _141.ModuleAminoMsg;
                    fromProtoMsg(message: _141.ModuleProtoMsg): _141.Module;
                    toProto(message: _141.Module): Uint8Array;
                    toProtoMsg(message: _141.Module): _141.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _142.QueryCurrentPlanRequest): Promise<_142.QueryCurrentPlanResponse>;
                appliedPlan(request: _142.QueryAppliedPlanRequest): Promise<_142.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _142.QueryUpgradedConsensusStateRequest): Promise<_142.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _142.QueryModuleVersionsRequest): Promise<_142.QueryModuleVersionsResponse>;
                authority(request?: _142.QueryAuthorityRequest): Promise<_142.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _248.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _143.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _143.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _143.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _143.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _143.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _143.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _143.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _143.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _143.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _143.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _143.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _143.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _143.MsgSoftwareUpgrade) => _143.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _143.MsgSoftwareUpgradeAmino) => _143.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _143.MsgCancelUpgrade) => _143.MsgCancelUpgradeAmino;
                    fromAmino: (object: _143.MsgCancelUpgradeAmino) => _143.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _144.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.Plan;
                fromPartial(object: Partial<_144.Plan>): _144.Plan;
                fromAmino(object: _144.PlanAmino): _144.Plan;
                toAmino(message: _144.Plan): _144.PlanAmino;
                fromAminoMsg(object: _144.PlanAminoMsg): _144.Plan;
                toAminoMsg(message: _144.Plan): _144.PlanAminoMsg;
                fromProtoMsg(message: _144.PlanProtoMsg): _144.Plan;
                toProto(message: _144.Plan): Uint8Array;
                toProtoMsg(message: _144.Plan): _144.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _144.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_144.SoftwareUpgradeProposal>): _144.SoftwareUpgradeProposal;
                fromAmino(object: _144.SoftwareUpgradeProposalAmino): _144.SoftwareUpgradeProposal;
                toAmino(message: _144.SoftwareUpgradeProposal): _144.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _144.SoftwareUpgradeProposalAminoMsg): _144.SoftwareUpgradeProposal;
                toAminoMsg(message: _144.SoftwareUpgradeProposal): _144.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _144.SoftwareUpgradeProposalProtoMsg): _144.SoftwareUpgradeProposal;
                toProto(message: _144.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _144.SoftwareUpgradeProposal): _144.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _144.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_144.CancelSoftwareUpgradeProposal>): _144.CancelSoftwareUpgradeProposal;
                fromAmino(object: _144.CancelSoftwareUpgradeProposalAmino): _144.CancelSoftwareUpgradeProposal;
                toAmino(message: _144.CancelSoftwareUpgradeProposal): _144.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _144.CancelSoftwareUpgradeProposalAminoMsg): _144.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _144.CancelSoftwareUpgradeProposal): _144.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _144.CancelSoftwareUpgradeProposalProtoMsg): _144.CancelSoftwareUpgradeProposal;
                toProto(message: _144.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _144.CancelSoftwareUpgradeProposal): _144.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _144.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.ModuleVersion;
                fromPartial(object: Partial<_144.ModuleVersion>): _144.ModuleVersion;
                fromAmino(object: _144.ModuleVersionAmino): _144.ModuleVersion;
                toAmino(message: _144.ModuleVersion): _144.ModuleVersionAmino;
                fromAminoMsg(object: _144.ModuleVersionAminoMsg): _144.ModuleVersion;
                toAminoMsg(message: _144.ModuleVersion): _144.ModuleVersionAminoMsg;
                fromProtoMsg(message: _144.ModuleVersionProtoMsg): _144.ModuleVersion;
                toProto(message: _144.ModuleVersion): Uint8Array;
                toProtoMsg(message: _144.ModuleVersion): _144.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _143.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_143.MsgSoftwareUpgrade>): _143.MsgSoftwareUpgrade;
                fromAmino(object: _143.MsgSoftwareUpgradeAmino): _143.MsgSoftwareUpgrade;
                toAmino(message: _143.MsgSoftwareUpgrade): _143.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _143.MsgSoftwareUpgradeAminoMsg): _143.MsgSoftwareUpgrade;
                toAminoMsg(message: _143.MsgSoftwareUpgrade): _143.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _143.MsgSoftwareUpgradeProtoMsg): _143.MsgSoftwareUpgrade;
                toProto(message: _143.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _143.MsgSoftwareUpgrade): _143.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _143.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_143.MsgSoftwareUpgradeResponse>): _143.MsgSoftwareUpgradeResponse;
                fromAmino(_: _143.MsgSoftwareUpgradeResponseAmino): _143.MsgSoftwareUpgradeResponse;
                toAmino(_: _143.MsgSoftwareUpgradeResponse): _143.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _143.MsgSoftwareUpgradeResponseAminoMsg): _143.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _143.MsgSoftwareUpgradeResponse): _143.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _143.MsgSoftwareUpgradeResponseProtoMsg): _143.MsgSoftwareUpgradeResponse;
                toProto(message: _143.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _143.MsgSoftwareUpgradeResponse): _143.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _143.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgCancelUpgrade;
                fromPartial(object: Partial<_143.MsgCancelUpgrade>): _143.MsgCancelUpgrade;
                fromAmino(object: _143.MsgCancelUpgradeAmino): _143.MsgCancelUpgrade;
                toAmino(message: _143.MsgCancelUpgrade): _143.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _143.MsgCancelUpgradeAminoMsg): _143.MsgCancelUpgrade;
                toAminoMsg(message: _143.MsgCancelUpgrade): _143.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _143.MsgCancelUpgradeProtoMsg): _143.MsgCancelUpgrade;
                toProto(message: _143.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _143.MsgCancelUpgrade): _143.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _143.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_143.MsgCancelUpgradeResponse>): _143.MsgCancelUpgradeResponse;
                fromAmino(_: _143.MsgCancelUpgradeResponseAmino): _143.MsgCancelUpgradeResponse;
                toAmino(_: _143.MsgCancelUpgradeResponse): _143.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _143.MsgCancelUpgradeResponseAminoMsg): _143.MsgCancelUpgradeResponse;
                toAminoMsg(message: _143.MsgCancelUpgradeResponse): _143.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _143.MsgCancelUpgradeResponseProtoMsg): _143.MsgCancelUpgradeResponse;
                toProto(message: _143.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _143.MsgCancelUpgradeResponse): _143.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _142.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _142.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_142.QueryCurrentPlanRequest>): _142.QueryCurrentPlanRequest;
                fromAmino(_: _142.QueryCurrentPlanRequestAmino): _142.QueryCurrentPlanRequest;
                toAmino(_: _142.QueryCurrentPlanRequest): _142.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _142.QueryCurrentPlanRequestAminoMsg): _142.QueryCurrentPlanRequest;
                toAminoMsg(message: _142.QueryCurrentPlanRequest): _142.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _142.QueryCurrentPlanRequestProtoMsg): _142.QueryCurrentPlanRequest;
                toProto(message: _142.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _142.QueryCurrentPlanRequest): _142.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _142.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_142.QueryCurrentPlanResponse>): _142.QueryCurrentPlanResponse;
                fromAmino(object: _142.QueryCurrentPlanResponseAmino): _142.QueryCurrentPlanResponse;
                toAmino(message: _142.QueryCurrentPlanResponse): _142.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _142.QueryCurrentPlanResponseAminoMsg): _142.QueryCurrentPlanResponse;
                toAminoMsg(message: _142.QueryCurrentPlanResponse): _142.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _142.QueryCurrentPlanResponseProtoMsg): _142.QueryCurrentPlanResponse;
                toProto(message: _142.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _142.QueryCurrentPlanResponse): _142.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _142.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_142.QueryAppliedPlanRequest>): _142.QueryAppliedPlanRequest;
                fromAmino(object: _142.QueryAppliedPlanRequestAmino): _142.QueryAppliedPlanRequest;
                toAmino(message: _142.QueryAppliedPlanRequest): _142.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _142.QueryAppliedPlanRequestAminoMsg): _142.QueryAppliedPlanRequest;
                toAminoMsg(message: _142.QueryAppliedPlanRequest): _142.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _142.QueryAppliedPlanRequestProtoMsg): _142.QueryAppliedPlanRequest;
                toProto(message: _142.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _142.QueryAppliedPlanRequest): _142.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _142.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_142.QueryAppliedPlanResponse>): _142.QueryAppliedPlanResponse;
                fromAmino(object: _142.QueryAppliedPlanResponseAmino): _142.QueryAppliedPlanResponse;
                toAmino(message: _142.QueryAppliedPlanResponse): _142.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _142.QueryAppliedPlanResponseAminoMsg): _142.QueryAppliedPlanResponse;
                toAminoMsg(message: _142.QueryAppliedPlanResponse): _142.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _142.QueryAppliedPlanResponseProtoMsg): _142.QueryAppliedPlanResponse;
                toProto(message: _142.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _142.QueryAppliedPlanResponse): _142.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _142.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_142.QueryUpgradedConsensusStateRequest>): _142.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _142.QueryUpgradedConsensusStateRequestAmino): _142.QueryUpgradedConsensusStateRequest;
                toAmino(message: _142.QueryUpgradedConsensusStateRequest): _142.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _142.QueryUpgradedConsensusStateRequestAminoMsg): _142.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _142.QueryUpgradedConsensusStateRequest): _142.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _142.QueryUpgradedConsensusStateRequestProtoMsg): _142.QueryUpgradedConsensusStateRequest;
                toProto(message: _142.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _142.QueryUpgradedConsensusStateRequest): _142.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _142.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_142.QueryUpgradedConsensusStateResponse>): _142.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _142.QueryUpgradedConsensusStateResponseAmino): _142.QueryUpgradedConsensusStateResponse;
                toAmino(message: _142.QueryUpgradedConsensusStateResponse): _142.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _142.QueryUpgradedConsensusStateResponseAminoMsg): _142.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _142.QueryUpgradedConsensusStateResponse): _142.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _142.QueryUpgradedConsensusStateResponseProtoMsg): _142.QueryUpgradedConsensusStateResponse;
                toProto(message: _142.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _142.QueryUpgradedConsensusStateResponse): _142.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _142.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_142.QueryModuleVersionsRequest>): _142.QueryModuleVersionsRequest;
                fromAmino(object: _142.QueryModuleVersionsRequestAmino): _142.QueryModuleVersionsRequest;
                toAmino(message: _142.QueryModuleVersionsRequest): _142.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _142.QueryModuleVersionsRequestAminoMsg): _142.QueryModuleVersionsRequest;
                toAminoMsg(message: _142.QueryModuleVersionsRequest): _142.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryModuleVersionsRequestProtoMsg): _142.QueryModuleVersionsRequest;
                toProto(message: _142.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryModuleVersionsRequest): _142.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _142.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_142.QueryModuleVersionsResponse>): _142.QueryModuleVersionsResponse;
                fromAmino(object: _142.QueryModuleVersionsResponseAmino): _142.QueryModuleVersionsResponse;
                toAmino(message: _142.QueryModuleVersionsResponse): _142.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _142.QueryModuleVersionsResponseAminoMsg): _142.QueryModuleVersionsResponse;
                toAminoMsg(message: _142.QueryModuleVersionsResponse): _142.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryModuleVersionsResponseProtoMsg): _142.QueryModuleVersionsResponse;
                toProto(message: _142.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryModuleVersionsResponse): _142.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _142.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _142.QueryAuthorityRequest;
                fromPartial(_: Partial<_142.QueryAuthorityRequest>): _142.QueryAuthorityRequest;
                fromAmino(_: _142.QueryAuthorityRequestAmino): _142.QueryAuthorityRequest;
                toAmino(_: _142.QueryAuthorityRequest): _142.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _142.QueryAuthorityRequestAminoMsg): _142.QueryAuthorityRequest;
                toAminoMsg(message: _142.QueryAuthorityRequest): _142.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _142.QueryAuthorityRequestProtoMsg): _142.QueryAuthorityRequest;
                toProto(message: _142.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _142.QueryAuthorityRequest): _142.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _142.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryAuthorityResponse;
                fromPartial(object: Partial<_142.QueryAuthorityResponse>): _142.QueryAuthorityResponse;
                fromAmino(object: _142.QueryAuthorityResponseAmino): _142.QueryAuthorityResponse;
                toAmino(message: _142.QueryAuthorityResponse): _142.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _142.QueryAuthorityResponseAminoMsg): _142.QueryAuthorityResponse;
                toAminoMsg(message: _142.QueryAuthorityResponse): _142.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _142.QueryAuthorityResponseProtoMsg): _142.QueryAuthorityResponse;
                toProto(message: _142.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _142.QueryAuthorityResponse): _142.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _145.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _145.Module;
                    fromPartial(_: Partial<_145.Module>): _145.Module;
                    fromAmino(_: _145.ModuleAmino): _145.Module;
                    toAmino(_: _145.Module): _145.ModuleAmino;
                    fromAminoMsg(object: _145.ModuleAminoMsg): _145.Module;
                    toAminoMsg(message: _145.Module): _145.ModuleAminoMsg;
                    fromProtoMsg(message: _145.ModuleProtoMsg): _145.Module;
                    toProto(message: _145.Module): Uint8Array;
                    toProtoMsg(message: _145.Module): _145.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _146.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _146.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _146.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _146.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _146.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _146.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _146.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _146.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _146.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _146.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _146.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _146.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _146.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _146.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _146.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _146.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _146.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _146.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _146.MsgCreateVestingAccount) => _146.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _146.MsgCreateVestingAccountAmino) => _146.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _146.MsgCreatePermanentLockedAccount) => _146.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _146.MsgCreatePermanentLockedAccountAmino) => _146.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _146.MsgCreatePeriodicVestingAccount) => _146.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _146.MsgCreatePeriodicVestingAccountAmino) => _146.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _147.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.BaseVestingAccount;
                fromPartial(object: Partial<_147.BaseVestingAccount>): _147.BaseVestingAccount;
                fromAmino(object: _147.BaseVestingAccountAmino): _147.BaseVestingAccount;
                toAmino(message: _147.BaseVestingAccount): _147.BaseVestingAccountAmino;
                fromAminoMsg(object: _147.BaseVestingAccountAminoMsg): _147.BaseVestingAccount;
                toAminoMsg(message: _147.BaseVestingAccount): _147.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _147.BaseVestingAccountProtoMsg): _147.BaseVestingAccount;
                toProto(message: _147.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _147.BaseVestingAccount): _147.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _147.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ContinuousVestingAccount;
                fromPartial(object: Partial<_147.ContinuousVestingAccount>): _147.ContinuousVestingAccount;
                fromAmino(object: _147.ContinuousVestingAccountAmino): _147.ContinuousVestingAccount;
                toAmino(message: _147.ContinuousVestingAccount): _147.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _147.ContinuousVestingAccountAminoMsg): _147.ContinuousVestingAccount;
                toAminoMsg(message: _147.ContinuousVestingAccount): _147.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _147.ContinuousVestingAccountProtoMsg): _147.ContinuousVestingAccount;
                toProto(message: _147.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _147.ContinuousVestingAccount): _147.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _147.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.DelayedVestingAccount;
                fromPartial(object: Partial<_147.DelayedVestingAccount>): _147.DelayedVestingAccount;
                fromAmino(object: _147.DelayedVestingAccountAmino): _147.DelayedVestingAccount;
                toAmino(message: _147.DelayedVestingAccount): _147.DelayedVestingAccountAmino;
                fromAminoMsg(object: _147.DelayedVestingAccountAminoMsg): _147.DelayedVestingAccount;
                toAminoMsg(message: _147.DelayedVestingAccount): _147.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _147.DelayedVestingAccountProtoMsg): _147.DelayedVestingAccount;
                toProto(message: _147.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _147.DelayedVestingAccount): _147.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _147.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.Period;
                fromPartial(object: Partial<_147.Period>): _147.Period;
                fromAmino(object: _147.PeriodAmino): _147.Period;
                toAmino(message: _147.Period): _147.PeriodAmino;
                fromAminoMsg(object: _147.PeriodAminoMsg): _147.Period;
                toAminoMsg(message: _147.Period): _147.PeriodAminoMsg;
                fromProtoMsg(message: _147.PeriodProtoMsg): _147.Period;
                toProto(message: _147.Period): Uint8Array;
                toProtoMsg(message: _147.Period): _147.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _147.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.PeriodicVestingAccount;
                fromPartial(object: Partial<_147.PeriodicVestingAccount>): _147.PeriodicVestingAccount;
                fromAmino(object: _147.PeriodicVestingAccountAmino): _147.PeriodicVestingAccount;
                toAmino(message: _147.PeriodicVestingAccount): _147.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _147.PeriodicVestingAccountAminoMsg): _147.PeriodicVestingAccount;
                toAminoMsg(message: _147.PeriodicVestingAccount): _147.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _147.PeriodicVestingAccountProtoMsg): _147.PeriodicVestingAccount;
                toProto(message: _147.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _147.PeriodicVestingAccount): _147.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _147.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.PermanentLockedAccount;
                fromPartial(object: Partial<_147.PermanentLockedAccount>): _147.PermanentLockedAccount;
                fromAmino(object: _147.PermanentLockedAccountAmino): _147.PermanentLockedAccount;
                toAmino(message: _147.PermanentLockedAccount): _147.PermanentLockedAccountAmino;
                fromAminoMsg(object: _147.PermanentLockedAccountAminoMsg): _147.PermanentLockedAccount;
                toAminoMsg(message: _147.PermanentLockedAccount): _147.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _147.PermanentLockedAccountProtoMsg): _147.PermanentLockedAccount;
                toProto(message: _147.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _147.PermanentLockedAccount): _147.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _146.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgCreateVestingAccount;
                fromPartial(object: Partial<_146.MsgCreateVestingAccount>): _146.MsgCreateVestingAccount;
                fromAmino(object: _146.MsgCreateVestingAccountAmino): _146.MsgCreateVestingAccount;
                toAmino(message: _146.MsgCreateVestingAccount): _146.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _146.MsgCreateVestingAccountAminoMsg): _146.MsgCreateVestingAccount;
                toAminoMsg(message: _146.MsgCreateVestingAccount): _146.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _146.MsgCreateVestingAccountProtoMsg): _146.MsgCreateVestingAccount;
                toProto(message: _146.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _146.MsgCreateVestingAccount): _146.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _146.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _146.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_146.MsgCreateVestingAccountResponse>): _146.MsgCreateVestingAccountResponse;
                fromAmino(_: _146.MsgCreateVestingAccountResponseAmino): _146.MsgCreateVestingAccountResponse;
                toAmino(_: _146.MsgCreateVestingAccountResponse): _146.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _146.MsgCreateVestingAccountResponseAminoMsg): _146.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _146.MsgCreateVestingAccountResponse): _146.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _146.MsgCreateVestingAccountResponseProtoMsg): _146.MsgCreateVestingAccountResponse;
                toProto(message: _146.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _146.MsgCreateVestingAccountResponse): _146.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _146.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_146.MsgCreatePermanentLockedAccount>): _146.MsgCreatePermanentLockedAccount;
                fromAmino(object: _146.MsgCreatePermanentLockedAccountAmino): _146.MsgCreatePermanentLockedAccount;
                toAmino(message: _146.MsgCreatePermanentLockedAccount): _146.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _146.MsgCreatePermanentLockedAccountAminoMsg): _146.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _146.MsgCreatePermanentLockedAccount): _146.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _146.MsgCreatePermanentLockedAccountProtoMsg): _146.MsgCreatePermanentLockedAccount;
                toProto(message: _146.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _146.MsgCreatePermanentLockedAccount): _146.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _146.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _146.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_146.MsgCreatePermanentLockedAccountResponse>): _146.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _146.MsgCreatePermanentLockedAccountResponseAmino): _146.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _146.MsgCreatePermanentLockedAccountResponse): _146.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _146.MsgCreatePermanentLockedAccountResponseAminoMsg): _146.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _146.MsgCreatePermanentLockedAccountResponse): _146.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _146.MsgCreatePermanentLockedAccountResponseProtoMsg): _146.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _146.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _146.MsgCreatePermanentLockedAccountResponse): _146.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _146.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_146.MsgCreatePeriodicVestingAccount>): _146.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _146.MsgCreatePeriodicVestingAccountAmino): _146.MsgCreatePeriodicVestingAccount;
                toAmino(message: _146.MsgCreatePeriodicVestingAccount): _146.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _146.MsgCreatePeriodicVestingAccountAminoMsg): _146.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _146.MsgCreatePeriodicVestingAccount): _146.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _146.MsgCreatePeriodicVestingAccountProtoMsg): _146.MsgCreatePeriodicVestingAccount;
                toProto(message: _146.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _146.MsgCreatePeriodicVestingAccount): _146.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _146.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _146.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_146.MsgCreatePeriodicVestingAccountResponse>): _146.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _146.MsgCreatePeriodicVestingAccountResponseAmino): _146.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _146.MsgCreatePeriodicVestingAccountResponse): _146.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _146.MsgCreatePeriodicVestingAccountResponseAminoMsg): _146.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _146.MsgCreatePeriodicVestingAccountResponse): _146.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _146.MsgCreatePeriodicVestingAccountResponseProtoMsg): _146.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _146.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _146.MsgCreatePeriodicVestingAccountResponse): _146.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _271.MsgClientImpl;
                };
                authz: {
                    v1beta1: _272.MsgClientImpl;
                };
                bank: {
                    v1beta1: _273.MsgClientImpl;
                };
                consensus: {
                    v1: _274.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _275.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _276.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _277.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _278.MsgClientImpl;
                };
                gov: {
                    v1: _279.MsgClientImpl;
                    v1beta1: _280.MsgClientImpl;
                };
                group: {
                    v1: _281.MsgClientImpl;
                };
                mint: {
                    v1beta1: _282.MsgClientImpl;
                };
                nft: {
                    v1beta1: _283.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _284.MsgClientImpl;
                };
                staking: {
                    v1beta1: _285.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _286.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _287.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _26.QueryConfigRequest): Promise<_26.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _30.QueryAccountsRequest): Promise<_30.QueryAccountsResponse>;
                        account(request: _30.QueryAccountRequest): Promise<_30.QueryAccountResponse>;
                        accountAddressByID(request: _30.QueryAccountAddressByIDRequest): Promise<_30.QueryAccountAddressByIDResponse>;
                        params(request?: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                        moduleAccounts(request?: _30.QueryModuleAccountsRequest): Promise<_30.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _30.QueryModuleAccountByNameRequest): Promise<_30.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _30.Bech32PrefixRequest): Promise<_30.Bech32PrefixResponse>;
                        addressBytesToString(request: _30.AddressBytesToStringRequest): Promise<_30.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _30.AddressStringToBytesRequest): Promise<_30.AddressStringToBytesResponse>;
                        accountInfo(request: _30.QueryAccountInfoRequest): Promise<_30.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _36.QueryGrantsRequest): Promise<_36.QueryGrantsResponse>;
                        granterGrants(request: _36.QueryGranterGrantsRequest): Promise<_36.QueryGranterGrantsResponse>;
                        granteeGrants(request: _36.QueryGranteeGrantsRequest): Promise<_36.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _39.AppOptionsRequest): Promise<_39.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _44.QueryBalanceRequest): Promise<_44.QueryBalanceResponse>;
                        allBalances(request: _44.QueryAllBalancesRequest): Promise<_44.QueryAllBalancesResponse>;
                        spendableBalances(request: _44.QuerySpendableBalancesRequest): Promise<_44.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _44.QuerySpendableBalanceByDenomRequest): Promise<_44.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _44.QueryTotalSupplyRequest): Promise<_44.QueryTotalSupplyResponse>;
                        supplyOf(request: _44.QuerySupplyOfRequest): Promise<_44.QuerySupplyOfResponse>;
                        params(request?: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                        denomMetadata(request: _44.QueryDenomMetadataRequest): Promise<_44.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _44.QueryDenomsMetadataRequest): Promise<_44.QueryDenomsMetadataResponse>;
                        denomOwners(request: _44.QueryDenomOwnersRequest): Promise<_44.QueryDenomOwnersResponse>;
                        sendEnabled(request: _44.QuerySendEnabledRequest): Promise<_44.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _48.ConfigRequest): Promise<_48.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _55.GetNodeInfoRequest): Promise<_55.GetNodeInfoResponse>;
                            getSyncing(request?: _55.GetSyncingRequest): Promise<_55.GetSyncingResponse>;
                            getLatestBlock(request?: _55.GetLatestBlockRequest): Promise<_55.GetLatestBlockResponse>;
                            getBlockByHeight(request: _55.GetBlockByHeightRequest): Promise<_55.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _55.GetLatestValidatorSetRequest): Promise<_55.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _55.GetValidatorSetByHeightRequest): Promise<_55.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _55.ABCIQueryRequest): Promise<_55.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        validatorDistributionInfo(request: _76.QueryValidatorDistributionInfoRequest): Promise<_76.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _76.QueryValidatorOutstandingRewardsRequest): Promise<_76.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _76.QueryValidatorCommissionRequest): Promise<_76.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _76.QueryValidatorSlashesRequest): Promise<_76.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _76.QueryDelegationRewardsRequest): Promise<_76.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _76.QueryDelegationTotalRewardsRequest): Promise<_76.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _76.QueryDelegatorValidatorsRequest): Promise<_76.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _76.QueryDelegatorWithdrawAddressRequest): Promise<_76.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _76.QueryCommunityPoolRequest): Promise<_76.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _81.QueryEvidenceRequest): Promise<_81.QueryEvidenceResponse>;
                        allEvidence(request?: _81.QueryAllEvidenceRequest): Promise<_81.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _86.QueryAllowanceRequest): Promise<_86.QueryAllowanceResponse>;
                        allowances(request: _86.QueryAllowancesRequest): Promise<_86.QueryAllowancesResponse>;
                        allowancesByGranter(request: _86.QueryAllowancesByGranterRequest): Promise<_86.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _93.QueryProposalRequest): Promise<_93.QueryProposalResponse>;
                        proposals(request: _93.QueryProposalsRequest): Promise<_93.QueryProposalsResponse>;
                        vote(request: _93.QueryVoteRequest): Promise<_93.QueryVoteResponse>;
                        votes(request: _93.QueryVotesRequest): Promise<_93.QueryVotesResponse>;
                        params(request: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        deposit(request: _93.QueryDepositRequest): Promise<_93.QueryDepositResponse>;
                        deposits(request: _93.QueryDepositsRequest): Promise<_93.QueryDepositsResponse>;
                        tallyResult(request: _93.QueryTallyResultRequest): Promise<_93.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _97.QueryProposalRequest): Promise<_97.QueryProposalResponse>;
                        proposals(request: _97.QueryProposalsRequest): Promise<_97.QueryProposalsResponse>;
                        vote(request: _97.QueryVoteRequest): Promise<_97.QueryVoteResponse>;
                        votes(request: _97.QueryVotesRequest): Promise<_97.QueryVotesResponse>;
                        params(request: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                        deposit(request: _97.QueryDepositRequest): Promise<_97.QueryDepositResponse>;
                        deposits(request: _97.QueryDepositsRequest): Promise<_97.QueryDepositsResponse>;
                        tallyResult(request: _97.QueryTallyResultRequest): Promise<_97.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _102.QueryGroupInfoRequest): Promise<_102.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _102.QueryGroupPolicyInfoRequest): Promise<_102.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _102.QueryGroupMembersRequest): Promise<_102.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _102.QueryGroupsByAdminRequest): Promise<_102.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _102.QueryGroupPoliciesByGroupRequest): Promise<_102.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _102.QueryGroupPoliciesByAdminRequest): Promise<_102.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _102.QueryProposalRequest): Promise<_102.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _102.QueryProposalsByGroupPolicyRequest): Promise<_102.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _102.QueryVoteByProposalVoterRequest): Promise<_102.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _102.QueryVotesByProposalRequest): Promise<_102.QueryVotesByProposalResponse>;
                        votesByVoter(request: _102.QueryVotesByVoterRequest): Promise<_102.QueryVotesByVoterResponse>;
                        groupsByMember(request: _102.QueryGroupsByMemberRequest): Promise<_102.QueryGroupsByMemberResponse>;
                        tallyResult(request: _102.QueryTallyResultRequest): Promise<_102.QueryTallyResultResponse>;
                        groups(request?: _102.QueryGroupsRequest): Promise<_102.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                        inflation(request?: _108.QueryInflationRequest): Promise<_108.QueryInflationResponse>;
                        annualProvisions(request?: _108.QueryAnnualProvisionsRequest): Promise<_108.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _115.QueryBalanceRequest): Promise<_115.QueryBalanceResponse>;
                        owner(request: _115.QueryOwnerRequest): Promise<_115.QueryOwnerResponse>;
                        supply(request: _115.QuerySupplyRequest): Promise<_115.QuerySupplyResponse>;
                        nFTs(request: _115.QueryNFTsRequest): Promise<_115.QueryNFTsResponse>;
                        nFT(request: _115.QueryNFTRequest): Promise<_115.QueryNFTResponse>;
                        class(request: _115.QueryClassRequest): Promise<_115.QueryClassResponse>;
                        classes(request?: _115.QueryClassesRequest): Promise<_115.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _118.GetRequest): Promise<_118.GetResponse>;
                            list(request: _118.ListRequest): Promise<_118.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                        subspaces(request?: _123.QuerySubspacesRequest): Promise<_123.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                        signingInfo(request: _128.QuerySigningInfoRequest): Promise<_128.QuerySigningInfoResponse>;
                        signingInfos(request?: _128.QuerySigningInfosRequest): Promise<_128.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _134.QueryValidatorsRequest): Promise<_134.QueryValidatorsResponse>;
                        validator(request: _134.QueryValidatorRequest): Promise<_134.QueryValidatorResponse>;
                        validatorDelegations(request: _134.QueryValidatorDelegationsRequest): Promise<_134.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _134.QueryValidatorUnbondingDelegationsRequest): Promise<_134.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _134.QueryDelegationRequest): Promise<_134.QueryDelegationResponse>;
                        unbondingDelegation(request: _134.QueryUnbondingDelegationRequest): Promise<_134.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _134.QueryDelegatorDelegationsRequest): Promise<_134.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _134.QueryDelegatorUnbondingDelegationsRequest): Promise<_134.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _134.QueryRedelegationsRequest): Promise<_134.QueryRedelegationsResponse>;
                        delegatorValidators(request: _134.QueryDelegatorValidatorsRequest): Promise<_134.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _134.QueryDelegatorValidatorRequest): Promise<_134.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _134.QueryHistoricalInfoRequest): Promise<_134.QueryHistoricalInfoResponse>;
                        pool(request?: _134.QueryPoolRequest): Promise<_134.QueryPoolResponse>;
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _139.SimulateRequest): Promise<_139.SimulateResponse>;
                        getTx(request: _139.GetTxRequest): Promise<_139.GetTxResponse>;
                        broadcastTx(request: _139.BroadcastTxRequest): Promise<_139.BroadcastTxResponse>;
                        getTxsEvent(request: _139.GetTxsEventRequest): Promise<_139.GetTxsEventResponse>;
                        getBlockWithTxs(request: _139.GetBlockWithTxsRequest): Promise<_139.GetBlockWithTxsResponse>;
                        txDecode(request: _139.TxDecodeRequest): Promise<_139.TxDecodeResponse>;
                        txEncode(request: _139.TxEncodeRequest): Promise<_139.TxEncodeResponse>;
                        txEncodeAmino(request: _139.TxEncodeAminoRequest): Promise<_139.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _139.TxDecodeAminoRequest): Promise<_139.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _142.QueryCurrentPlanRequest): Promise<_142.QueryCurrentPlanResponse>;
                        appliedPlan(request: _142.QueryAppliedPlanRequest): Promise<_142.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _142.QueryUpgradedConsensusStateRequest): Promise<_142.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _142.QueryModuleVersionsRequest): Promise<_142.QueryModuleVersionsResponse>;
                        authority(request?: _142.QueryAuthorityRequest): Promise<_142.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _230.LCDQueryClient;
                };
                authz: {
                    v1beta1: _231.LCDQueryClient;
                };
                bank: {
                    v1beta1: _232.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _233.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _234.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _235.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _236.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _237.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _238.LCDQueryClient;
                };
                gov: {
                    v1: _239.LCDQueryClient;
                    v1beta1: _240.LCDQueryClient;
                };
                group: {
                    v1: _241.LCDQueryClient;
                };
                mint: {
                    v1beta1: _242.LCDQueryClient;
                };
                nft: {
                    v1beta1: _243.LCDQueryClient;
                };
                params: {
                    v1beta1: _244.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _245.LCDQueryClient;
                };
                staking: {
                    v1beta1: _246.LCDQueryClient;
                };
                tx: {
                    v1beta1: _247.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _248.LCDQueryClient;
                };
            };
        }>;
    };
}
