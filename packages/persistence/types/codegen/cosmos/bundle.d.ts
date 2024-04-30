import * as _13 from "./app/runtime/v1alpha1/module";
import * as _14 from "./app/v1alpha1/config";
import * as _15 from "./app/v1alpha1/module";
import * as _16 from "./app/v1alpha1/query";
import * as _17 from "./auth/module/v1/module";
import * as _18 from "./auth/v1beta1/auth";
import * as _19 from "./auth/v1beta1/genesis";
import * as _20 from "./auth/v1beta1/query";
import * as _21 from "./auth/v1beta1/tx";
import * as _22 from "./authz/module/v1/module";
import * as _23 from "./authz/v1beta1/authz";
import * as _24 from "./authz/v1beta1/event";
import * as _25 from "./authz/v1beta1/genesis";
import * as _26 from "./authz/v1beta1/query";
import * as _27 from "./authz/v1beta1/tx";
import * as _28 from "./autocli/v1/options";
import * as _29 from "./autocli/v1/query";
import * as _30 from "./bank/module/v1/module";
import * as _31 from "./bank/v1beta1/authz";
import * as _32 from "./bank/v1beta1/bank";
import * as _33 from "./bank/v1beta1/genesis";
import * as _34 from "./bank/v1beta1/query";
import * as _35 from "./bank/v1beta1/tx";
import * as _36 from "./base/abci/v1beta1/abci";
import * as _37 from "./base/kv/v1beta1/kv";
import * as _38 from "./base/node/v1beta1/query";
import * as _39 from "./base/query/v1beta1/pagination";
import * as _40 from "./base/reflection/v1beta1/reflection";
import * as _41 from "./base/reflection/v2alpha1/reflection";
import * as _42 from "./base/snapshots/v1beta1/snapshot";
import * as _43 from "./base/store/v1beta1/commit_info";
import * as _44 from "./base/store/v1beta1/listening";
import * as _45 from "./base/store/v1beta1/snapshot";
import * as _46 from "./base/tendermint/v1beta1/query";
import * as _47 from "./base/tendermint/v1beta1/types";
import * as _48 from "./base/v1beta1/coin";
import * as _49 from "./capability/module/v1/module";
import * as _50 from "./capability/v1beta1/capability";
import * as _51 from "./capability/v1beta1/genesis";
import * as _52 from "./consensus/module/v1/module";
import * as _53 from "./consensus/v1/query";
import * as _54 from "./consensus/v1/tx";
import * as _55 from "./crisis/module/v1/module";
import * as _56 from "./crisis/v1beta1/genesis";
import * as _57 from "./crisis/v1beta1/tx";
import * as _58 from "./crypto/ed25519/keys";
import * as _59 from "./crypto/hd/v1/hd";
import * as _60 from "./crypto/keyring/v1/record";
import * as _61 from "./crypto/multisig/keys";
import * as _62 from "./crypto/secp256k1/keys";
import * as _63 from "./crypto/secp256r1/keys";
import * as _64 from "./distribution/module/v1/module";
import * as _65 from "./distribution/v1beta1/distribution";
import * as _66 from "./distribution/v1beta1/genesis";
import * as _67 from "./distribution/v1beta1/query";
import * as _68 from "./distribution/v1beta1/tx";
import * as _69 from "./evidence/module/v1/module";
import * as _70 from "./evidence/v1beta1/evidence";
import * as _71 from "./evidence/v1beta1/genesis";
import * as _72 from "./evidence/v1beta1/query";
import * as _73 from "./evidence/v1beta1/tx";
import * as _74 from "./feegrant/module/v1/module";
import * as _75 from "./feegrant/v1beta1/feegrant";
import * as _76 from "./feegrant/v1beta1/genesis";
import * as _77 from "./feegrant/v1beta1/query";
import * as _78 from "./feegrant/v1beta1/tx";
import * as _79 from "./genutil/module/v1/module";
import * as _80 from "./genutil/v1beta1/genesis";
import * as _81 from "./gov/module/v1/module";
import * as _82 from "./gov/v1/genesis";
import * as _83 from "./gov/v1/gov";
import * as _84 from "./gov/v1/query";
import * as _85 from "./gov/v1/tx";
import * as _86 from "./gov/v1beta1/genesis";
import * as _87 from "./gov/v1beta1/gov";
import * as _88 from "./gov/v1beta1/query";
import * as _89 from "./gov/v1beta1/tx";
import * as _90 from "./group/module/v1/module";
import * as _91 from "./group/v1/events";
import * as _92 from "./group/v1/genesis";
import * as _93 from "./group/v1/query";
import * as _94 from "./group/v1/tx";
import * as _95 from "./group/v1/types";
import * as _96 from "./mint/module/v1/module";
import * as _97 from "./mint/v1beta1/genesis";
import * as _98 from "./mint/v1beta1/mint";
import * as _99 from "./mint/v1beta1/query";
import * as _100 from "./mint/v1beta1/tx";
import * as _102 from "./nft/module/v1/module";
import * as _103 from "./nft/v1beta1/event";
import * as _104 from "./nft/v1beta1/genesis";
import * as _105 from "./nft/v1beta1/nft";
import * as _106 from "./nft/v1beta1/query";
import * as _107 from "./nft/v1beta1/tx";
import * as _108 from "./orm/module/v1alpha1/module";
import * as _109 from "./orm/query/v1alpha1/query";
import * as _110 from "./orm/v1/orm";
import * as _111 from "./orm/v1alpha1/schema";
import * as _112 from "./params/module/v1/module";
import * as _113 from "./params/v1beta1/params";
import * as _114 from "./params/v1beta1/query";
import * as _116 from "./reflection/v1/reflection";
import * as _117 from "./slashing/module/v1/module";
import * as _118 from "./slashing/v1beta1/genesis";
import * as _119 from "./slashing/v1beta1/query";
import * as _120 from "./slashing/v1beta1/slashing";
import * as _121 from "./slashing/v1beta1/tx";
import * as _122 from "./staking/module/v1/module";
import * as _123 from "./staking/v1beta1/authz";
import * as _124 from "./staking/v1beta1/genesis";
import * as _125 from "./staking/v1beta1/query";
import * as _126 from "./staking/v1beta1/staking";
import * as _127 from "./staking/v1beta1/tx";
import * as _128 from "./tx/config/v1/config";
import * as _129 from "./tx/signing/v1beta1/signing";
import * as _130 from "./tx/v1beta1/service";
import * as _131 from "./tx/v1beta1/tx";
import * as _132 from "./upgrade/module/v1/module";
import * as _133 from "./upgrade/v1beta1/query";
import * as _134 from "./upgrade/v1beta1/tx";
import * as _135 from "./upgrade/v1beta1/upgrade";
import * as _136 from "./vesting/module/v1/module";
import * as _137 from "./vesting/v1beta1/tx";
import * as _138 from "./vesting/v1beta1/vesting";
import * as _244 from "./auth/v1beta1/query.lcd";
import * as _245 from "./authz/v1beta1/query.lcd";
import * as _246 from "./bank/v1beta1/query.lcd";
import * as _247 from "./base/node/v1beta1/query.lcd";
import * as _248 from "./base/tendermint/v1beta1/query.lcd";
import * as _249 from "./consensus/v1/query.lcd";
import * as _250 from "./distribution/v1beta1/query.lcd";
import * as _251 from "./evidence/v1beta1/query.lcd";
import * as _252 from "./feegrant/v1beta1/query.lcd";
import * as _253 from "./gov/v1/query.lcd";
import * as _254 from "./gov/v1beta1/query.lcd";
import * as _255 from "./group/v1/query.lcd";
import * as _256 from "./mint/v1beta1/query.lcd";
import * as _257 from "./nft/v1beta1/query.lcd";
import * as _258 from "./params/v1beta1/query.lcd";
import * as _259 from "./slashing/v1beta1/query.lcd";
import * as _260 from "./staking/v1beta1/query.lcd";
import * as _261 from "./tx/v1beta1/service.lcd";
import * as _262 from "./upgrade/v1beta1/query.lcd";
import * as _263 from "./app/v1alpha1/query.rpc.Query";
import * as _264 from "./auth/v1beta1/query.rpc.Query";
import * as _265 from "./authz/v1beta1/query.rpc.Query";
import * as _266 from "./autocli/v1/query.rpc.Query";
import * as _267 from "./bank/v1beta1/query.rpc.Query";
import * as _268 from "./base/node/v1beta1/query.rpc.Service";
import * as _269 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _270 from "./consensus/v1/query.rpc.Query";
import * as _271 from "./distribution/v1beta1/query.rpc.Query";
import * as _272 from "./evidence/v1beta1/query.rpc.Query";
import * as _273 from "./feegrant/v1beta1/query.rpc.Query";
import * as _274 from "./gov/v1/query.rpc.Query";
import * as _275 from "./gov/v1beta1/query.rpc.Query";
import * as _276 from "./group/v1/query.rpc.Query";
import * as _277 from "./mint/v1beta1/query.rpc.Query";
import * as _278 from "./nft/v1beta1/query.rpc.Query";
import * as _279 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _280 from "./params/v1beta1/query.rpc.Query";
import * as _281 from "./slashing/v1beta1/query.rpc.Query";
import * as _282 from "./staking/v1beta1/query.rpc.Query";
import * as _283 from "./tx/v1beta1/service.rpc.Service";
import * as _284 from "./upgrade/v1beta1/query.rpc.Query";
import * as _285 from "./auth/v1beta1/tx.rpc.msg";
import * as _286 from "./authz/v1beta1/tx.rpc.msg";
import * as _287 from "./bank/v1beta1/tx.rpc.msg";
import * as _288 from "./consensus/v1/tx.rpc.msg";
import * as _289 from "./crisis/v1beta1/tx.rpc.msg";
import * as _290 from "./distribution/v1beta1/tx.rpc.msg";
import * as _291 from "./evidence/v1beta1/tx.rpc.msg";
import * as _292 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _293 from "./gov/v1/tx.rpc.msg";
import * as _294 from "./gov/v1beta1/tx.rpc.msg";
import * as _295 from "./group/v1/tx.rpc.msg";
import * as _296 from "./mint/v1beta1/tx.rpc.msg";
import * as _297 from "./nft/v1beta1/tx.rpc.msg";
import * as _298 from "./slashing/v1beta1/tx.rpc.msg";
import * as _299 from "./staking/v1beta1/tx.rpc.msg";
import * as _300 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _301 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _13.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.Module;
                    fromPartial(object: Partial<_13.Module>): _13.Module;
                    fromAmino(object: _13.ModuleAmino): _13.Module;
                    toAmino(message: _13.Module): _13.ModuleAmino;
                    fromAminoMsg(object: _13.ModuleAminoMsg): _13.Module;
                    toAminoMsg(message: _13.Module): _13.ModuleAminoMsg;
                    fromProtoMsg(message: _13.ModuleProtoMsg): _13.Module;
                    toProto(message: _13.Module): Uint8Array;
                    toProtoMsg(message: _13.Module): _13.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _13.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.StoreKeyConfig;
                    fromPartial(object: Partial<_13.StoreKeyConfig>): _13.StoreKeyConfig;
                    fromAmino(object: _13.StoreKeyConfigAmino): _13.StoreKeyConfig;
                    toAmino(message: _13.StoreKeyConfig): _13.StoreKeyConfigAmino;
                    fromAminoMsg(object: _13.StoreKeyConfigAminoMsg): _13.StoreKeyConfig;
                    toAminoMsg(message: _13.StoreKeyConfig): _13.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _13.StoreKeyConfigProtoMsg): _13.StoreKeyConfig;
                    toProto(message: _13.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _13.StoreKeyConfig): _13.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _16.QueryConfigRequest): Promise<_16.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _16.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryConfigRequest;
                fromPartial(_: Partial<_16.QueryConfigRequest>): _16.QueryConfigRequest;
                fromAmino(_: _16.QueryConfigRequestAmino): _16.QueryConfigRequest;
                toAmino(_: _16.QueryConfigRequest): _16.QueryConfigRequestAmino;
                fromAminoMsg(object: _16.QueryConfigRequestAminoMsg): _16.QueryConfigRequest;
                toAminoMsg(message: _16.QueryConfigRequest): _16.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _16.QueryConfigRequestProtoMsg): _16.QueryConfigRequest;
                toProto(message: _16.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _16.QueryConfigRequest): _16.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _16.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryConfigResponse;
                fromPartial(object: Partial<_16.QueryConfigResponse>): _16.QueryConfigResponse;
                fromAmino(object: _16.QueryConfigResponseAmino): _16.QueryConfigResponse;
                toAmino(message: _16.QueryConfigResponse): _16.QueryConfigResponseAmino;
                fromAminoMsg(object: _16.QueryConfigResponseAminoMsg): _16.QueryConfigResponse;
                toAminoMsg(message: _16.QueryConfigResponse): _16.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _16.QueryConfigResponseProtoMsg): _16.QueryConfigResponse;
                toProto(message: _16.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _16.QueryConfigResponse): _16.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _15.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ModuleDescriptor;
                fromPartial(object: Partial<_15.ModuleDescriptor>): _15.ModuleDescriptor;
                fromAmino(object: _15.ModuleDescriptorAmino): _15.ModuleDescriptor;
                toAmino(message: _15.ModuleDescriptor): _15.ModuleDescriptorAmino;
                fromAminoMsg(object: _15.ModuleDescriptorAminoMsg): _15.ModuleDescriptor;
                toAminoMsg(message: _15.ModuleDescriptor): _15.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _15.ModuleDescriptorProtoMsg): _15.ModuleDescriptor;
                toProto(message: _15.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _15.ModuleDescriptor): _15.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _15.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.PackageReference;
                fromPartial(object: Partial<_15.PackageReference>): _15.PackageReference;
                fromAmino(object: _15.PackageReferenceAmino): _15.PackageReference;
                toAmino(message: _15.PackageReference): _15.PackageReferenceAmino;
                fromAminoMsg(object: _15.PackageReferenceAminoMsg): _15.PackageReference;
                toAminoMsg(message: _15.PackageReference): _15.PackageReferenceAminoMsg;
                fromProtoMsg(message: _15.PackageReferenceProtoMsg): _15.PackageReference;
                toProto(message: _15.PackageReference): Uint8Array;
                toProtoMsg(message: _15.PackageReference): _15.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _15.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MigrateFromInfo;
                fromPartial(object: Partial<_15.MigrateFromInfo>): _15.MigrateFromInfo;
                fromAmino(object: _15.MigrateFromInfoAmino): _15.MigrateFromInfo;
                toAmino(message: _15.MigrateFromInfo): _15.MigrateFromInfoAmino;
                fromAminoMsg(object: _15.MigrateFromInfoAminoMsg): _15.MigrateFromInfo;
                toAminoMsg(message: _15.MigrateFromInfo): _15.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _15.MigrateFromInfoProtoMsg): _15.MigrateFromInfo;
                toProto(message: _15.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _15.MigrateFromInfo): _15.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _14.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Config;
                fromPartial(object: Partial<_14.Config>): _14.Config;
                fromAmino(object: _14.ConfigAmino): _14.Config;
                toAmino(message: _14.Config): _14.ConfigAmino;
                fromAminoMsg(object: _14.ConfigAminoMsg): _14.Config;
                toAminoMsg(message: _14.Config): _14.ConfigAminoMsg;
                fromProtoMsg(message: _14.ConfigProtoMsg): _14.Config;
                toProto(message: _14.Config): Uint8Array;
                toProtoMsg(message: _14.Config): _14.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _14.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.ModuleConfig;
                fromPartial(object: Partial<_14.ModuleConfig>): _14.ModuleConfig;
                fromAmino(object: _14.ModuleConfigAmino): _14.ModuleConfig;
                toAmino(message: _14.ModuleConfig): _14.ModuleConfigAmino;
                fromAminoMsg(object: _14.ModuleConfigAminoMsg): _14.ModuleConfig;
                toAminoMsg(message: _14.ModuleConfig): _14.ModuleConfigAminoMsg;
                fromProtoMsg(message: _14.ModuleConfigProtoMsg): _14.ModuleConfig;
                toProto(message: _14.ModuleConfig): Uint8Array;
                toProtoMsg(message: _14.ModuleConfig): _14.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _14.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GolangBinding;
                fromPartial(object: Partial<_14.GolangBinding>): _14.GolangBinding;
                fromAmino(object: _14.GolangBindingAmino): _14.GolangBinding;
                toAmino(message: _14.GolangBinding): _14.GolangBindingAmino;
                fromAminoMsg(object: _14.GolangBindingAminoMsg): _14.GolangBinding;
                toAminoMsg(message: _14.GolangBinding): _14.GolangBindingAminoMsg;
                fromProtoMsg(message: _14.GolangBindingProtoMsg): _14.GolangBinding;
                toProto(message: _14.GolangBinding): Uint8Array;
                toProtoMsg(message: _14.GolangBinding): _14.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _17.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.Module;
                    fromPartial(object: Partial<_17.Module>): _17.Module;
                    fromAmino(object: _17.ModuleAmino): _17.Module;
                    toAmino(message: _17.Module): _17.ModuleAmino;
                    fromAminoMsg(object: _17.ModuleAminoMsg): _17.Module;
                    toAminoMsg(message: _17.Module): _17.ModuleAminoMsg;
                    fromProtoMsg(message: _17.ModuleProtoMsg): _17.Module;
                    toProto(message: _17.Module): Uint8Array;
                    toProtoMsg(message: _17.Module): _17.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _17.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ModuleAccountPermission;
                    fromPartial(object: Partial<_17.ModuleAccountPermission>): _17.ModuleAccountPermission;
                    fromAmino(object: _17.ModuleAccountPermissionAmino): _17.ModuleAccountPermission;
                    toAmino(message: _17.ModuleAccountPermission): _17.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _17.ModuleAccountPermissionAminoMsg): _17.ModuleAccountPermission;
                    toAminoMsg(message: _17.ModuleAccountPermission): _17.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _17.ModuleAccountPermissionProtoMsg): _17.ModuleAccountPermission;
                    toProto(message: _17.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _17.ModuleAccountPermission): _17.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _20.QueryAccountsRequest): Promise<_20.QueryAccountsResponse>;
                account(request: _20.QueryAccountRequest): Promise<_20.QueryAccountResponse>;
                accountAddressByID(request: _20.QueryAccountAddressByIDRequest): Promise<_20.QueryAccountAddressByIDResponse>;
                params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                moduleAccounts(request?: _20.QueryModuleAccountsRequest): Promise<_20.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _20.QueryModuleAccountByNameRequest): Promise<_20.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _20.Bech32PrefixRequest): Promise<_20.Bech32PrefixResponse>;
                addressBytesToString(request: _20.AddressBytesToStringRequest): Promise<_20.AddressBytesToStringResponse>;
                addressStringToBytes(request: _20.AddressStringToBytesRequest): Promise<_20.AddressStringToBytesResponse>;
                accountInfo(request: _20.QueryAccountInfoRequest): Promise<_20.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _21.MsgUpdateParams) => _21.MsgUpdateParamsAmino;
                    fromAmino: (object: _21.MsgUpdateParamsAmino) => _21.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _21.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgUpdateParams;
                fromPartial(object: Partial<_21.MsgUpdateParams>): _21.MsgUpdateParams;
                fromAmino(object: _21.MsgUpdateParamsAmino): _21.MsgUpdateParams;
                toAmino(message: _21.MsgUpdateParams): _21.MsgUpdateParamsAmino;
                fromAminoMsg(object: _21.MsgUpdateParamsAminoMsg): _21.MsgUpdateParams;
                toAminoMsg(message: _21.MsgUpdateParams): _21.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _21.MsgUpdateParamsProtoMsg): _21.MsgUpdateParams;
                toProto(message: _21.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _21.MsgUpdateParams): _21.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _21.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_21.MsgUpdateParamsResponse>): _21.MsgUpdateParamsResponse;
                fromAmino(_: _21.MsgUpdateParamsResponseAmino): _21.MsgUpdateParamsResponse;
                toAmino(_: _21.MsgUpdateParamsResponse): _21.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _21.MsgUpdateParamsResponseAminoMsg): _21.MsgUpdateParamsResponse;
                toAminoMsg(message: _21.MsgUpdateParamsResponse): _21.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _21.MsgUpdateParamsResponseProtoMsg): _21.MsgUpdateParamsResponse;
                toProto(message: _21.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _21.MsgUpdateParamsResponse): _21.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _20.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountsRequest;
                fromPartial(object: Partial<_20.QueryAccountsRequest>): _20.QueryAccountsRequest;
                fromAmino(object: _20.QueryAccountsRequestAmino): _20.QueryAccountsRequest;
                toAmino(message: _20.QueryAccountsRequest): _20.QueryAccountsRequestAmino;
                fromAminoMsg(object: _20.QueryAccountsRequestAminoMsg): _20.QueryAccountsRequest;
                toAminoMsg(message: _20.QueryAccountsRequest): _20.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryAccountsRequestProtoMsg): _20.QueryAccountsRequest;
                toProto(message: _20.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryAccountsRequest): _20.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _20.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountsResponse;
                fromPartial(object: Partial<_20.QueryAccountsResponse>): _20.QueryAccountsResponse;
                fromAmino(object: _20.QueryAccountsResponseAmino): _20.QueryAccountsResponse;
                toAmino(message: _20.QueryAccountsResponse): _20.QueryAccountsResponseAmino;
                fromAminoMsg(object: _20.QueryAccountsResponseAminoMsg): _20.QueryAccountsResponse;
                toAminoMsg(message: _20.QueryAccountsResponse): _20.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryAccountsResponseProtoMsg): _20.QueryAccountsResponse;
                toProto(message: _20.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAccountsResponse): _20.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _20.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountRequest;
                fromPartial(object: Partial<_20.QueryAccountRequest>): _20.QueryAccountRequest;
                fromAmino(object: _20.QueryAccountRequestAmino): _20.QueryAccountRequest;
                toAmino(message: _20.QueryAccountRequest): _20.QueryAccountRequestAmino;
                fromAminoMsg(object: _20.QueryAccountRequestAminoMsg): _20.QueryAccountRequest;
                toAminoMsg(message: _20.QueryAccountRequest): _20.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _20.QueryAccountRequestProtoMsg): _20.QueryAccountRequest;
                toProto(message: _20.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _20.QueryAccountRequest): _20.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _20.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountResponse;
                fromPartial(object: Partial<_20.QueryAccountResponse>): _20.QueryAccountResponse;
                fromAmino(object: _20.QueryAccountResponseAmino): _20.QueryAccountResponse;
                toAmino(message: _20.QueryAccountResponse): _20.QueryAccountResponseAmino;
                fromAminoMsg(object: _20.QueryAccountResponseAminoMsg): _20.QueryAccountResponse;
                toAminoMsg(message: _20.QueryAccountResponse): _20.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _20.QueryAccountResponseProtoMsg): _20.QueryAccountResponse;
                toProto(message: _20.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAccountResponse): _20.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _20.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryParamsRequest;
                fromPartial(_: Partial<_20.QueryParamsRequest>): _20.QueryParamsRequest;
                fromAmino(_: _20.QueryParamsRequestAmino): _20.QueryParamsRequest;
                toAmino(_: _20.QueryParamsRequest): _20.QueryParamsRequestAmino;
                fromAminoMsg(object: _20.QueryParamsRequestAminoMsg): _20.QueryParamsRequest;
                toAminoMsg(message: _20.QueryParamsRequest): _20.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryParamsRequestProtoMsg): _20.QueryParamsRequest;
                toProto(message: _20.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryParamsRequest): _20.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _20.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryParamsResponse;
                fromPartial(object: Partial<_20.QueryParamsResponse>): _20.QueryParamsResponse;
                fromAmino(object: _20.QueryParamsResponseAmino): _20.QueryParamsResponse;
                toAmino(message: _20.QueryParamsResponse): _20.QueryParamsResponseAmino;
                fromAminoMsg(object: _20.QueryParamsResponseAminoMsg): _20.QueryParamsResponse;
                toAminoMsg(message: _20.QueryParamsResponse): _20.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryParamsResponseProtoMsg): _20.QueryParamsResponse;
                toProto(message: _20.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryParamsResponse): _20.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _20.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_20.QueryModuleAccountsRequest>): _20.QueryModuleAccountsRequest;
                fromAmino(_: _20.QueryModuleAccountsRequestAmino): _20.QueryModuleAccountsRequest;
                toAmino(_: _20.QueryModuleAccountsRequest): _20.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _20.QueryModuleAccountsRequestAminoMsg): _20.QueryModuleAccountsRequest;
                toAminoMsg(message: _20.QueryModuleAccountsRequest): _20.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountsRequestProtoMsg): _20.QueryModuleAccountsRequest;
                toProto(message: _20.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountsRequest): _20.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _20.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_20.QueryModuleAccountsResponse>): _20.QueryModuleAccountsResponse;
                fromAmino(object: _20.QueryModuleAccountsResponseAmino): _20.QueryModuleAccountsResponse;
                toAmino(message: _20.QueryModuleAccountsResponse): _20.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _20.QueryModuleAccountsResponseAminoMsg): _20.QueryModuleAccountsResponse;
                toAminoMsg(message: _20.QueryModuleAccountsResponse): _20.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountsResponseProtoMsg): _20.QueryModuleAccountsResponse;
                toProto(message: _20.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountsResponse): _20.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _20.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_20.QueryModuleAccountByNameRequest>): _20.QueryModuleAccountByNameRequest;
                fromAmino(object: _20.QueryModuleAccountByNameRequestAmino): _20.QueryModuleAccountByNameRequest;
                toAmino(message: _20.QueryModuleAccountByNameRequest): _20.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _20.QueryModuleAccountByNameRequestAminoMsg): _20.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _20.QueryModuleAccountByNameRequest): _20.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountByNameRequestProtoMsg): _20.QueryModuleAccountByNameRequest;
                toProto(message: _20.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountByNameRequest): _20.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _20.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_20.QueryModuleAccountByNameResponse>): _20.QueryModuleAccountByNameResponse;
                fromAmino(object: _20.QueryModuleAccountByNameResponseAmino): _20.QueryModuleAccountByNameResponse;
                toAmino(message: _20.QueryModuleAccountByNameResponse): _20.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _20.QueryModuleAccountByNameResponseAminoMsg): _20.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _20.QueryModuleAccountByNameResponse): _20.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _20.QueryModuleAccountByNameResponseProtoMsg): _20.QueryModuleAccountByNameResponse;
                toProto(message: _20.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _20.QueryModuleAccountByNameResponse): _20.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _20.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.Bech32PrefixRequest;
                fromPartial(_: Partial<_20.Bech32PrefixRequest>): _20.Bech32PrefixRequest;
                fromAmino(_: _20.Bech32PrefixRequestAmino): _20.Bech32PrefixRequest;
                toAmino(_: _20.Bech32PrefixRequest): _20.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _20.Bech32PrefixRequestAminoMsg): _20.Bech32PrefixRequest;
                toAminoMsg(message: _20.Bech32PrefixRequest): _20.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _20.Bech32PrefixRequestProtoMsg): _20.Bech32PrefixRequest;
                toProto(message: _20.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _20.Bech32PrefixRequest): _20.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _20.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Bech32PrefixResponse;
                fromPartial(object: Partial<_20.Bech32PrefixResponse>): _20.Bech32PrefixResponse;
                fromAmino(object: _20.Bech32PrefixResponseAmino): _20.Bech32PrefixResponse;
                toAmino(message: _20.Bech32PrefixResponse): _20.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _20.Bech32PrefixResponseAminoMsg): _20.Bech32PrefixResponse;
                toAminoMsg(message: _20.Bech32PrefixResponse): _20.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _20.Bech32PrefixResponseProtoMsg): _20.Bech32PrefixResponse;
                toProto(message: _20.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _20.Bech32PrefixResponse): _20.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _20.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressBytesToStringRequest;
                fromPartial(object: Partial<_20.AddressBytesToStringRequest>): _20.AddressBytesToStringRequest;
                fromAmino(object: _20.AddressBytesToStringRequestAmino): _20.AddressBytesToStringRequest;
                toAmino(message: _20.AddressBytesToStringRequest): _20.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _20.AddressBytesToStringRequestAminoMsg): _20.AddressBytesToStringRequest;
                toAminoMsg(message: _20.AddressBytesToStringRequest): _20.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _20.AddressBytesToStringRequestProtoMsg): _20.AddressBytesToStringRequest;
                toProto(message: _20.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _20.AddressBytesToStringRequest): _20.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _20.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressBytesToStringResponse;
                fromPartial(object: Partial<_20.AddressBytesToStringResponse>): _20.AddressBytesToStringResponse;
                fromAmino(object: _20.AddressBytesToStringResponseAmino): _20.AddressBytesToStringResponse;
                toAmino(message: _20.AddressBytesToStringResponse): _20.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _20.AddressBytesToStringResponseAminoMsg): _20.AddressBytesToStringResponse;
                toAminoMsg(message: _20.AddressBytesToStringResponse): _20.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _20.AddressBytesToStringResponseProtoMsg): _20.AddressBytesToStringResponse;
                toProto(message: _20.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _20.AddressBytesToStringResponse): _20.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _20.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressStringToBytesRequest;
                fromPartial(object: Partial<_20.AddressStringToBytesRequest>): _20.AddressStringToBytesRequest;
                fromAmino(object: _20.AddressStringToBytesRequestAmino): _20.AddressStringToBytesRequest;
                toAmino(message: _20.AddressStringToBytesRequest): _20.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _20.AddressStringToBytesRequestAminoMsg): _20.AddressStringToBytesRequest;
                toAminoMsg(message: _20.AddressStringToBytesRequest): _20.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _20.AddressStringToBytesRequestProtoMsg): _20.AddressStringToBytesRequest;
                toProto(message: _20.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _20.AddressStringToBytesRequest): _20.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _20.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AddressStringToBytesResponse;
                fromPartial(object: Partial<_20.AddressStringToBytesResponse>): _20.AddressStringToBytesResponse;
                fromAmino(object: _20.AddressStringToBytesResponseAmino): _20.AddressStringToBytesResponse;
                toAmino(message: _20.AddressStringToBytesResponse): _20.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _20.AddressStringToBytesResponseAminoMsg): _20.AddressStringToBytesResponse;
                toAminoMsg(message: _20.AddressStringToBytesResponse): _20.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _20.AddressStringToBytesResponseProtoMsg): _20.AddressStringToBytesResponse;
                toProto(message: _20.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _20.AddressStringToBytesResponse): _20.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _20.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_20.QueryAccountAddressByIDRequest>): _20.QueryAccountAddressByIDRequest;
                fromAmino(object: _20.QueryAccountAddressByIDRequestAmino): _20.QueryAccountAddressByIDRequest;
                toAmino(message: _20.QueryAccountAddressByIDRequest): _20.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _20.QueryAccountAddressByIDRequestAminoMsg): _20.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _20.QueryAccountAddressByIDRequest): _20.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _20.QueryAccountAddressByIDRequestProtoMsg): _20.QueryAccountAddressByIDRequest;
                toProto(message: _20.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _20.QueryAccountAddressByIDRequest): _20.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _20.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_20.QueryAccountAddressByIDResponse>): _20.QueryAccountAddressByIDResponse;
                fromAmino(object: _20.QueryAccountAddressByIDResponseAmino): _20.QueryAccountAddressByIDResponse;
                toAmino(message: _20.QueryAccountAddressByIDResponse): _20.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _20.QueryAccountAddressByIDResponseAminoMsg): _20.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _20.QueryAccountAddressByIDResponse): _20.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _20.QueryAccountAddressByIDResponseProtoMsg): _20.QueryAccountAddressByIDResponse;
                toProto(message: _20.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAccountAddressByIDResponse): _20.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _20.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountInfoRequest;
                fromPartial(object: Partial<_20.QueryAccountInfoRequest>): _20.QueryAccountInfoRequest;
                fromAmino(object: _20.QueryAccountInfoRequestAmino): _20.QueryAccountInfoRequest;
                toAmino(message: _20.QueryAccountInfoRequest): _20.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _20.QueryAccountInfoRequestAminoMsg): _20.QueryAccountInfoRequest;
                toAminoMsg(message: _20.QueryAccountInfoRequest): _20.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _20.QueryAccountInfoRequestProtoMsg): _20.QueryAccountInfoRequest;
                toProto(message: _20.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _20.QueryAccountInfoRequest): _20.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _20.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAccountInfoResponse;
                fromPartial(object: Partial<_20.QueryAccountInfoResponse>): _20.QueryAccountInfoResponse;
                fromAmino(object: _20.QueryAccountInfoResponseAmino): _20.QueryAccountInfoResponse;
                toAmino(message: _20.QueryAccountInfoResponse): _20.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _20.QueryAccountInfoResponseAminoMsg): _20.QueryAccountInfoResponse;
                toAminoMsg(message: _20.QueryAccountInfoResponse): _20.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _20.QueryAccountInfoResponseProtoMsg): _20.QueryAccountInfoResponse;
                toProto(message: _20.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAccountInfoResponse): _20.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _18.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _18.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                toAminoMsg(message: _19.GenesisState): _19.GenesisStateAminoMsg;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _18.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.BaseAccount;
                fromPartial(object: Partial<_18.BaseAccount>): _18.BaseAccount;
                fromAmino(object: _18.BaseAccountAmino): _18.BaseAccount;
                toAmino(message: _18.BaseAccount): _18.BaseAccountAmino;
                fromAminoMsg(object: _18.BaseAccountAminoMsg): _18.BaseAccount;
                toAminoMsg(message: _18.BaseAccount): _18.BaseAccountAminoMsg;
                fromProtoMsg(message: _18.BaseAccountProtoMsg): _18.BaseAccount;
                toProto(message: _18.BaseAccount): Uint8Array;
                toProtoMsg(message: _18.BaseAccount): _18.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _18.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ModuleAccount;
                fromPartial(object: Partial<_18.ModuleAccount>): _18.ModuleAccount;
                fromAmino(object: _18.ModuleAccountAmino): _18.ModuleAccount;
                toAmino(message: _18.ModuleAccount): _18.ModuleAccountAmino;
                fromAminoMsg(object: _18.ModuleAccountAminoMsg): _18.ModuleAccount;
                toAminoMsg(message: _18.ModuleAccount): _18.ModuleAccountAminoMsg;
                fromProtoMsg(message: _18.ModuleAccountProtoMsg): _18.ModuleAccount;
                toProto(message: _18.ModuleAccount): Uint8Array;
                toProtoMsg(message: _18.ModuleAccount): _18.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _18.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ModuleCredential;
                fromPartial(object: Partial<_18.ModuleCredential>): _18.ModuleCredential;
                fromAmino(object: _18.ModuleCredentialAmino): _18.ModuleCredential;
                toAmino(message: _18.ModuleCredential): _18.ModuleCredentialAmino;
                fromAminoMsg(object: _18.ModuleCredentialAminoMsg): _18.ModuleCredential;
                toAminoMsg(message: _18.ModuleCredential): _18.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _18.ModuleCredentialProtoMsg): _18.ModuleCredential;
                toProto(message: _18.ModuleCredential): Uint8Array;
                toProtoMsg(message: _18.ModuleCredential): _18.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _18.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Params;
                fromPartial(object: Partial<_18.Params>): _18.Params;
                fromAmino(object: _18.ParamsAmino): _18.Params;
                toAmino(message: _18.Params): _18.ParamsAmino;
                fromAminoMsg(object: _18.ParamsAminoMsg): _18.Params;
                toAminoMsg(message: _18.Params): _18.ParamsAminoMsg;
                fromProtoMsg(message: _18.ParamsProtoMsg): _18.Params;
                toProto(message: _18.Params): Uint8Array;
                toProtoMsg(message: _18.Params): _18.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _22.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.Module;
                    fromPartial(_: Partial<_22.Module>): _22.Module;
                    fromAmino(_: _22.ModuleAmino): _22.Module;
                    toAmino(_: _22.Module): _22.ModuleAmino;
                    fromAminoMsg(object: _22.ModuleAminoMsg): _22.Module;
                    toAminoMsg(message: _22.Module): _22.ModuleAminoMsg;
                    fromProtoMsg(message: _22.ModuleProtoMsg): _22.Module;
                    toProto(message: _22.Module): Uint8Array;
                    toProtoMsg(message: _22.Module): _22.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _26.QueryGrantsRequest): Promise<_26.QueryGrantsResponse>;
                granterGrants(request: _26.QueryGranterGrantsRequest): Promise<_26.QueryGranterGrantsResponse>;
                granteeGrants(request: _26.QueryGranteeGrantsRequest): Promise<_26.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _27.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _27.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _27.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _27.MsgGrant): {
                        typeUrl: string;
                        value: _27.MsgGrant;
                    };
                    exec(value: _27.MsgExec): {
                        typeUrl: string;
                        value: _27.MsgExec;
                    };
                    revoke(value: _27.MsgRevoke): {
                        typeUrl: string;
                        value: _27.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _27.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _27.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _27.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _27.MsgGrant): {
                        typeUrl: string;
                        value: _27.MsgGrant;
                    };
                    exec(value: _27.MsgExec): {
                        typeUrl: string;
                        value: _27.MsgExec;
                    };
                    revoke(value: _27.MsgRevoke): {
                        typeUrl: string;
                        value: _27.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _27.MsgGrant) => _27.MsgGrantAmino;
                    fromAmino: (object: _27.MsgGrantAmino) => _27.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _27.MsgExec) => _27.MsgExecAmino;
                    fromAmino: (object: _27.MsgExecAmino) => _27.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _27.MsgRevoke) => _27.MsgRevokeAmino;
                    fromAmino: (object: _27.MsgRevokeAmino) => _27.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _27.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgGrant;
                fromPartial(object: Partial<_27.MsgGrant>): _27.MsgGrant;
                fromAmino(object: _27.MsgGrantAmino): _27.MsgGrant;
                toAmino(message: _27.MsgGrant): _27.MsgGrantAmino;
                fromAminoMsg(object: _27.MsgGrantAminoMsg): _27.MsgGrant;
                toAminoMsg(message: _27.MsgGrant): _27.MsgGrantAminoMsg;
                fromProtoMsg(message: _27.MsgGrantProtoMsg): _27.MsgGrant;
                toProto(message: _27.MsgGrant): Uint8Array;
                toProtoMsg(message: _27.MsgGrant): _27.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _27.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExecResponse;
                fromPartial(object: Partial<_27.MsgExecResponse>): _27.MsgExecResponse;
                fromAmino(object: _27.MsgExecResponseAmino): _27.MsgExecResponse;
                toAmino(message: _27.MsgExecResponse): _27.MsgExecResponseAmino;
                fromAminoMsg(object: _27.MsgExecResponseAminoMsg): _27.MsgExecResponse;
                toAminoMsg(message: _27.MsgExecResponse): _27.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _27.MsgExecResponseProtoMsg): _27.MsgExecResponse;
                toProto(message: _27.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _27.MsgExecResponse): _27.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _27.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgExec;
                fromPartial(object: Partial<_27.MsgExec>): _27.MsgExec;
                fromAmino(object: _27.MsgExecAmino): _27.MsgExec;
                toAmino(message: _27.MsgExec): _27.MsgExecAmino;
                fromAminoMsg(object: _27.MsgExecAminoMsg): _27.MsgExec;
                toAminoMsg(message: _27.MsgExec): _27.MsgExecAminoMsg;
                fromProtoMsg(message: _27.MsgExecProtoMsg): _27.MsgExec;
                toProto(message: _27.MsgExec): Uint8Array;
                toProtoMsg(message: _27.MsgExec): _27.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _27.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgGrantResponse;
                fromPartial(_: Partial<_27.MsgGrantResponse>): _27.MsgGrantResponse;
                fromAmino(_: _27.MsgGrantResponseAmino): _27.MsgGrantResponse;
                toAmino(_: _27.MsgGrantResponse): _27.MsgGrantResponseAmino;
                fromAminoMsg(object: _27.MsgGrantResponseAminoMsg): _27.MsgGrantResponse;
                toAminoMsg(message: _27.MsgGrantResponse): _27.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _27.MsgGrantResponseProtoMsg): _27.MsgGrantResponse;
                toProto(message: _27.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _27.MsgGrantResponse): _27.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _27.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgRevoke;
                fromPartial(object: Partial<_27.MsgRevoke>): _27.MsgRevoke;
                fromAmino(object: _27.MsgRevokeAmino): _27.MsgRevoke;
                toAmino(message: _27.MsgRevoke): _27.MsgRevokeAmino;
                fromAminoMsg(object: _27.MsgRevokeAminoMsg): _27.MsgRevoke;
                toAminoMsg(message: _27.MsgRevoke): _27.MsgRevokeAminoMsg;
                fromProtoMsg(message: _27.MsgRevokeProtoMsg): _27.MsgRevoke;
                toProto(message: _27.MsgRevoke): Uint8Array;
                toProtoMsg(message: _27.MsgRevoke): _27.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _27.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgRevokeResponse;
                fromPartial(_: Partial<_27.MsgRevokeResponse>): _27.MsgRevokeResponse;
                fromAmino(_: _27.MsgRevokeResponseAmino): _27.MsgRevokeResponse;
                toAmino(_: _27.MsgRevokeResponse): _27.MsgRevokeResponseAmino;
                fromAminoMsg(object: _27.MsgRevokeResponseAminoMsg): _27.MsgRevokeResponse;
                toAminoMsg(message: _27.MsgRevokeResponse): _27.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _27.MsgRevokeResponseProtoMsg): _27.MsgRevokeResponse;
                toProto(message: _27.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _27.MsgRevokeResponse): _27.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _26.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryGrantsRequest;
                fromPartial(object: Partial<_26.QueryGrantsRequest>): _26.QueryGrantsRequest;
                fromAmino(object: _26.QueryGrantsRequestAmino): _26.QueryGrantsRequest;
                toAmino(message: _26.QueryGrantsRequest): _26.QueryGrantsRequestAmino;
                fromAminoMsg(object: _26.QueryGrantsRequestAminoMsg): _26.QueryGrantsRequest;
                toAminoMsg(message: _26.QueryGrantsRequest): _26.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryGrantsRequestProtoMsg): _26.QueryGrantsRequest;
                toProto(message: _26.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryGrantsRequest): _26.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _26.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryGrantsResponse;
                fromPartial(object: Partial<_26.QueryGrantsResponse>): _26.QueryGrantsResponse;
                fromAmino(object: _26.QueryGrantsResponseAmino): _26.QueryGrantsResponse;
                toAmino(message: _26.QueryGrantsResponse): _26.QueryGrantsResponseAmino;
                fromAminoMsg(object: _26.QueryGrantsResponseAminoMsg): _26.QueryGrantsResponse;
                toAminoMsg(message: _26.QueryGrantsResponse): _26.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryGrantsResponseProtoMsg): _26.QueryGrantsResponse;
                toProto(message: _26.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryGrantsResponse): _26.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _26.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_26.QueryGranterGrantsRequest>): _26.QueryGranterGrantsRequest;
                fromAmino(object: _26.QueryGranterGrantsRequestAmino): _26.QueryGranterGrantsRequest;
                toAmino(message: _26.QueryGranterGrantsRequest): _26.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _26.QueryGranterGrantsRequestAminoMsg): _26.QueryGranterGrantsRequest;
                toAminoMsg(message: _26.QueryGranterGrantsRequest): _26.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryGranterGrantsRequestProtoMsg): _26.QueryGranterGrantsRequest;
                toProto(message: _26.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryGranterGrantsRequest): _26.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _26.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_26.QueryGranterGrantsResponse>): _26.QueryGranterGrantsResponse;
                fromAmino(object: _26.QueryGranterGrantsResponseAmino): _26.QueryGranterGrantsResponse;
                toAmino(message: _26.QueryGranterGrantsResponse): _26.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _26.QueryGranterGrantsResponseAminoMsg): _26.QueryGranterGrantsResponse;
                toAminoMsg(message: _26.QueryGranterGrantsResponse): _26.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryGranterGrantsResponseProtoMsg): _26.QueryGranterGrantsResponse;
                toProto(message: _26.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryGranterGrantsResponse): _26.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _26.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_26.QueryGranteeGrantsRequest>): _26.QueryGranteeGrantsRequest;
                fromAmino(object: _26.QueryGranteeGrantsRequestAmino): _26.QueryGranteeGrantsRequest;
                toAmino(message: _26.QueryGranteeGrantsRequest): _26.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _26.QueryGranteeGrantsRequestAminoMsg): _26.QueryGranteeGrantsRequest;
                toAminoMsg(message: _26.QueryGranteeGrantsRequest): _26.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryGranteeGrantsRequestProtoMsg): _26.QueryGranteeGrantsRequest;
                toProto(message: _26.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryGranteeGrantsRequest): _26.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _26.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_26.QueryGranteeGrantsResponse>): _26.QueryGranteeGrantsResponse;
                fromAmino(object: _26.QueryGranteeGrantsResponseAmino): _26.QueryGranteeGrantsResponse;
                toAmino(message: _26.QueryGranteeGrantsResponse): _26.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _26.QueryGranteeGrantsResponseAminoMsg): _26.QueryGranteeGrantsResponse;
                toAminoMsg(message: _26.QueryGranteeGrantsResponse): _26.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryGranteeGrantsResponseProtoMsg): _26.QueryGranteeGrantsResponse;
                toProto(message: _26.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryGranteeGrantsResponse): _26.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _24.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.EventGrant;
                fromPartial(object: Partial<_24.EventGrant>): _24.EventGrant;
                fromAmino(object: _24.EventGrantAmino): _24.EventGrant;
                toAmino(message: _24.EventGrant): _24.EventGrantAmino;
                fromAminoMsg(object: _24.EventGrantAminoMsg): _24.EventGrant;
                toAminoMsg(message: _24.EventGrant): _24.EventGrantAminoMsg;
                fromProtoMsg(message: _24.EventGrantProtoMsg): _24.EventGrant;
                toProto(message: _24.EventGrant): Uint8Array;
                toProtoMsg(message: _24.EventGrant): _24.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _24.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.EventRevoke;
                fromPartial(object: Partial<_24.EventRevoke>): _24.EventRevoke;
                fromAmino(object: _24.EventRevokeAmino): _24.EventRevoke;
                toAmino(message: _24.EventRevoke): _24.EventRevokeAmino;
                fromAminoMsg(object: _24.EventRevokeAminoMsg): _24.EventRevoke;
                toAminoMsg(message: _24.EventRevoke): _24.EventRevokeAminoMsg;
                fromProtoMsg(message: _24.EventRevokeProtoMsg): _24.EventRevoke;
                toProto(message: _24.EventRevoke): Uint8Array;
                toProtoMsg(message: _24.EventRevoke): _24.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _23.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.GenericAuthorization;
                fromPartial(object: Partial<_23.GenericAuthorization>): _23.GenericAuthorization;
                fromAmino(object: _23.GenericAuthorizationAmino): _23.GenericAuthorization;
                toAmino(message: _23.GenericAuthorization): _23.GenericAuthorizationAmino;
                fromAminoMsg(object: _23.GenericAuthorizationAminoMsg): _23.GenericAuthorization;
                toAminoMsg(message: _23.GenericAuthorization): _23.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _23.GenericAuthorizationProtoMsg): _23.GenericAuthorization;
                toProto(message: _23.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _23.GenericAuthorization): _23.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _23.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Grant;
                fromPartial(object: Partial<_23.Grant>): _23.Grant;
                fromAmino(object: _23.GrantAmino): _23.Grant;
                toAmino(message: _23.Grant): _23.GrantAmino;
                fromAminoMsg(object: _23.GrantAminoMsg): _23.Grant;
                toAminoMsg(message: _23.Grant): _23.GrantAminoMsg;
                fromProtoMsg(message: _23.GrantProtoMsg): _23.Grant;
                toProto(message: _23.Grant): Uint8Array;
                toProtoMsg(message: _23.Grant): _23.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _23.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.GrantAuthorization;
                fromPartial(object: Partial<_23.GrantAuthorization>): _23.GrantAuthorization;
                fromAmino(object: _23.GrantAuthorizationAmino): _23.GrantAuthorization;
                toAmino(message: _23.GrantAuthorization): _23.GrantAuthorizationAmino;
                fromAminoMsg(object: _23.GrantAuthorizationAminoMsg): _23.GrantAuthorization;
                toAminoMsg(message: _23.GrantAuthorization): _23.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _23.GrantAuthorizationProtoMsg): _23.GrantAuthorization;
                toProto(message: _23.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _23.GrantAuthorization): _23.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _23.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.GrantQueueItem;
                fromPartial(object: Partial<_23.GrantQueueItem>): _23.GrantQueueItem;
                fromAmino(object: _23.GrantQueueItemAmino): _23.GrantQueueItem;
                toAmino(message: _23.GrantQueueItem): _23.GrantQueueItemAmino;
                fromAminoMsg(object: _23.GrantQueueItemAminoMsg): _23.GrantQueueItem;
                toAminoMsg(message: _23.GrantQueueItem): _23.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _23.GrantQueueItemProtoMsg): _23.GrantQueueItem;
                toProto(message: _23.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _23.GrantQueueItem): _23.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _31.SendAuthorization | _123.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _23.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _29.AppOptionsRequest): Promise<_29.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _29.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.AppOptionsRequest;
                fromPartial(_: Partial<_29.AppOptionsRequest>): _29.AppOptionsRequest;
                fromAmino(_: _29.AppOptionsRequestAmino): _29.AppOptionsRequest;
                toAmino(_: _29.AppOptionsRequest): _29.AppOptionsRequestAmino;
                fromAminoMsg(object: _29.AppOptionsRequestAminoMsg): _29.AppOptionsRequest;
                toAminoMsg(message: _29.AppOptionsRequest): _29.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _29.AppOptionsRequestProtoMsg): _29.AppOptionsRequest;
                toProto(message: _29.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _29.AppOptionsRequest): _29.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _29.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_29.AppOptionsResponse_ModuleOptionsEntry>): _29.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _29.AppOptionsResponse_ModuleOptionsEntryAmino): _29.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _29.AppOptionsResponse_ModuleOptionsEntry): _29.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _29.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _29.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _29.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _29.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _29.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _29.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.AppOptionsResponse;
                fromPartial(object: Partial<_29.AppOptionsResponse>): _29.AppOptionsResponse;
                fromAmino(object: _29.AppOptionsResponseAmino): _29.AppOptionsResponse;
                toAmino(message: _29.AppOptionsResponse): _29.AppOptionsResponseAmino;
                fromAminoMsg(object: _29.AppOptionsResponseAminoMsg): _29.AppOptionsResponse;
                toAminoMsg(message: _29.AppOptionsResponse): _29.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _29.AppOptionsResponseProtoMsg): _29.AppOptionsResponse;
                toProto(message: _29.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _29.AppOptionsResponse): _29.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _28.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ModuleOptions;
                fromPartial(object: Partial<_28.ModuleOptions>): _28.ModuleOptions;
                fromAmino(object: _28.ModuleOptionsAmino): _28.ModuleOptions;
                toAmino(message: _28.ModuleOptions): _28.ModuleOptionsAmino;
                fromAminoMsg(object: _28.ModuleOptionsAminoMsg): _28.ModuleOptions;
                toAminoMsg(message: _28.ModuleOptions): _28.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _28.ModuleOptionsProtoMsg): _28.ModuleOptions;
                toProto(message: _28.ModuleOptions): Uint8Array;
                toProtoMsg(message: _28.ModuleOptions): _28.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _28.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_28.ServiceCommandDescriptor_SubCommandsEntry>): _28.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _28.ServiceCommandDescriptor_SubCommandsEntryAmino): _28.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _28.ServiceCommandDescriptor_SubCommandsEntry): _28.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _28.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _28.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _28.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _28.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _28.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _28.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ServiceCommandDescriptor;
                fromPartial(object: Partial<_28.ServiceCommandDescriptor>): _28.ServiceCommandDescriptor;
                fromAmino(object: _28.ServiceCommandDescriptorAmino): _28.ServiceCommandDescriptor;
                toAmino(message: _28.ServiceCommandDescriptor): _28.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _28.ServiceCommandDescriptorAminoMsg): _28.ServiceCommandDescriptor;
                toAminoMsg(message: _28.ServiceCommandDescriptor): _28.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _28.ServiceCommandDescriptorProtoMsg): _28.ServiceCommandDescriptor;
                toProto(message: _28.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _28.ServiceCommandDescriptor): _28.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _28.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_28.RpcCommandOptions_FlagOptionsEntry>): _28.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _28.RpcCommandOptions_FlagOptionsEntryAmino): _28.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _28.RpcCommandOptions_FlagOptionsEntry): _28.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _28.RpcCommandOptions_FlagOptionsEntryAminoMsg): _28.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _28.RpcCommandOptions_FlagOptionsEntryProtoMsg): _28.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _28.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _28.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.RpcCommandOptions;
                fromPartial(object: Partial<_28.RpcCommandOptions>): _28.RpcCommandOptions;
                fromAmino(object: _28.RpcCommandOptionsAmino): _28.RpcCommandOptions;
                toAmino(message: _28.RpcCommandOptions): _28.RpcCommandOptionsAmino;
                fromAminoMsg(object: _28.RpcCommandOptionsAminoMsg): _28.RpcCommandOptions;
                toAminoMsg(message: _28.RpcCommandOptions): _28.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _28.RpcCommandOptionsProtoMsg): _28.RpcCommandOptions;
                toProto(message: _28.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _28.RpcCommandOptions): _28.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _28.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.FlagOptions;
                fromPartial(object: Partial<_28.FlagOptions>): _28.FlagOptions;
                fromAmino(object: _28.FlagOptionsAmino): _28.FlagOptions;
                toAmino(message: _28.FlagOptions): _28.FlagOptionsAmino;
                fromAminoMsg(object: _28.FlagOptionsAminoMsg): _28.FlagOptions;
                toAminoMsg(message: _28.FlagOptions): _28.FlagOptionsAminoMsg;
                fromProtoMsg(message: _28.FlagOptionsProtoMsg): _28.FlagOptions;
                toProto(message: _28.FlagOptions): Uint8Array;
                toProtoMsg(message: _28.FlagOptions): _28.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _28.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.PositionalArgDescriptor;
                fromPartial(object: Partial<_28.PositionalArgDescriptor>): _28.PositionalArgDescriptor;
                fromAmino(object: _28.PositionalArgDescriptorAmino): _28.PositionalArgDescriptor;
                toAmino(message: _28.PositionalArgDescriptor): _28.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _28.PositionalArgDescriptorAminoMsg): _28.PositionalArgDescriptor;
                toAminoMsg(message: _28.PositionalArgDescriptor): _28.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _28.PositionalArgDescriptorProtoMsg): _28.PositionalArgDescriptor;
                toProto(message: _28.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _28.PositionalArgDescriptor): _28.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _30.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Module;
                    fromPartial(object: Partial<_30.Module>): _30.Module;
                    fromAmino(object: _30.ModuleAmino): _30.Module;
                    toAmino(message: _30.Module): _30.ModuleAmino;
                    fromAminoMsg(object: _30.ModuleAminoMsg): _30.Module;
                    toAminoMsg(message: _30.Module): _30.ModuleAminoMsg;
                    fromProtoMsg(message: _30.ModuleProtoMsg): _30.Module;
                    toProto(message: _30.Module): Uint8Array;
                    toProtoMsg(message: _30.Module): _30.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _34.QueryBalanceRequest): Promise<_34.QueryBalanceResponse>;
                allBalances(request: _34.QueryAllBalancesRequest): Promise<_34.QueryAllBalancesResponse>;
                spendableBalances(request: _34.QuerySpendableBalancesRequest): Promise<_34.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _34.QuerySpendableBalanceByDenomRequest): Promise<_34.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _34.QueryTotalSupplyRequest): Promise<_34.QueryTotalSupplyResponse>;
                supplyOf(request: _34.QuerySupplyOfRequest): Promise<_34.QuerySupplyOfResponse>;
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                denomMetadata(request: _34.QueryDenomMetadataRequest): Promise<_34.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _34.QueryDenomsMetadataRequest): Promise<_34.QueryDenomsMetadataResponse>;
                denomOwners(request: _34.QueryDenomOwnersRequest): Promise<_34.QueryDenomOwnersResponse>;
                sendEnabled(request: _34.QuerySendEnabledRequest): Promise<_34.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _35.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _35.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _35.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _35.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _35.MsgSend): {
                        typeUrl: string;
                        value: _35.MsgSend;
                    };
                    multiSend(value: _35.MsgMultiSend): {
                        typeUrl: string;
                        value: _35.MsgMultiSend;
                    };
                    updateParams(value: _35.MsgUpdateParams): {
                        typeUrl: string;
                        value: _35.MsgUpdateParams;
                    };
                    setSendEnabled(value: _35.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _35.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _35.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _35.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _35.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _35.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _35.MsgSend): {
                        typeUrl: string;
                        value: _35.MsgSend;
                    };
                    multiSend(value: _35.MsgMultiSend): {
                        typeUrl: string;
                        value: _35.MsgMultiSend;
                    };
                    updateParams(value: _35.MsgUpdateParams): {
                        typeUrl: string;
                        value: _35.MsgUpdateParams;
                    };
                    setSendEnabled(value: _35.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _35.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _35.MsgSend) => _35.MsgSendAmino;
                    fromAmino: (object: _35.MsgSendAmino) => _35.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _35.MsgMultiSend) => _35.MsgMultiSendAmino;
                    fromAmino: (object: _35.MsgMultiSendAmino) => _35.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _35.MsgUpdateParams) => _35.MsgUpdateParamsAmino;
                    fromAmino: (object: _35.MsgUpdateParamsAmino) => _35.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _35.MsgSetSendEnabled) => _35.MsgSetSendEnabledAmino;
                    fromAmino: (object: _35.MsgSetSendEnabledAmino) => _35.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _35.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgSend;
                fromPartial(object: Partial<_35.MsgSend>): _35.MsgSend;
                fromAmino(object: _35.MsgSendAmino): _35.MsgSend;
                toAmino(message: _35.MsgSend): _35.MsgSendAmino;
                fromAminoMsg(object: _35.MsgSendAminoMsg): _35.MsgSend;
                toAminoMsg(message: _35.MsgSend): _35.MsgSendAminoMsg;
                fromProtoMsg(message: _35.MsgSendProtoMsg): _35.MsgSend;
                toProto(message: _35.MsgSend): Uint8Array;
                toProtoMsg(message: _35.MsgSend): _35.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _35.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgSendResponse;
                fromPartial(_: Partial<_35.MsgSendResponse>): _35.MsgSendResponse;
                fromAmino(_: _35.MsgSendResponseAmino): _35.MsgSendResponse;
                toAmino(_: _35.MsgSendResponse): _35.MsgSendResponseAmino;
                fromAminoMsg(object: _35.MsgSendResponseAminoMsg): _35.MsgSendResponse;
                toAminoMsg(message: _35.MsgSendResponse): _35.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _35.MsgSendResponseProtoMsg): _35.MsgSendResponse;
                toProto(message: _35.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _35.MsgSendResponse): _35.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _35.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgMultiSend;
                fromPartial(object: Partial<_35.MsgMultiSend>): _35.MsgMultiSend;
                fromAmino(object: _35.MsgMultiSendAmino): _35.MsgMultiSend;
                toAmino(message: _35.MsgMultiSend): _35.MsgMultiSendAmino;
                fromAminoMsg(object: _35.MsgMultiSendAminoMsg): _35.MsgMultiSend;
                toAminoMsg(message: _35.MsgMultiSend): _35.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _35.MsgMultiSendProtoMsg): _35.MsgMultiSend;
                toProto(message: _35.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _35.MsgMultiSend): _35.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _35.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgMultiSendResponse;
                fromPartial(_: Partial<_35.MsgMultiSendResponse>): _35.MsgMultiSendResponse;
                fromAmino(_: _35.MsgMultiSendResponseAmino): _35.MsgMultiSendResponse;
                toAmino(_: _35.MsgMultiSendResponse): _35.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _35.MsgMultiSendResponseAminoMsg): _35.MsgMultiSendResponse;
                toAminoMsg(message: _35.MsgMultiSendResponse): _35.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _35.MsgMultiSendResponseProtoMsg): _35.MsgMultiSendResponse;
                toProto(message: _35.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _35.MsgMultiSendResponse): _35.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _35.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgUpdateParams;
                fromPartial(object: Partial<_35.MsgUpdateParams>): _35.MsgUpdateParams;
                fromAmino(object: _35.MsgUpdateParamsAmino): _35.MsgUpdateParams;
                toAmino(message: _35.MsgUpdateParams): _35.MsgUpdateParamsAmino;
                fromAminoMsg(object: _35.MsgUpdateParamsAminoMsg): _35.MsgUpdateParams;
                toAminoMsg(message: _35.MsgUpdateParams): _35.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _35.MsgUpdateParamsProtoMsg): _35.MsgUpdateParams;
                toProto(message: _35.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateParams): _35.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _35.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_35.MsgUpdateParamsResponse>): _35.MsgUpdateParamsResponse;
                fromAmino(_: _35.MsgUpdateParamsResponseAmino): _35.MsgUpdateParamsResponse;
                toAmino(_: _35.MsgUpdateParamsResponse): _35.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _35.MsgUpdateParamsResponseAminoMsg): _35.MsgUpdateParamsResponse;
                toAminoMsg(message: _35.MsgUpdateParamsResponse): _35.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _35.MsgUpdateParamsResponseProtoMsg): _35.MsgUpdateParamsResponse;
                toProto(message: _35.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateParamsResponse): _35.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _35.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgSetSendEnabled;
                fromPartial(object: Partial<_35.MsgSetSendEnabled>): _35.MsgSetSendEnabled;
                fromAmino(object: _35.MsgSetSendEnabledAmino): _35.MsgSetSendEnabled;
                toAmino(message: _35.MsgSetSendEnabled): _35.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _35.MsgSetSendEnabledAminoMsg): _35.MsgSetSendEnabled;
                toAminoMsg(message: _35.MsgSetSendEnabled): _35.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _35.MsgSetSendEnabledProtoMsg): _35.MsgSetSendEnabled;
                toProto(message: _35.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _35.MsgSetSendEnabled): _35.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _35.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_35.MsgSetSendEnabledResponse>): _35.MsgSetSendEnabledResponse;
                fromAmino(_: _35.MsgSetSendEnabledResponseAmino): _35.MsgSetSendEnabledResponse;
                toAmino(_: _35.MsgSetSendEnabledResponse): _35.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _35.MsgSetSendEnabledResponseAminoMsg): _35.MsgSetSendEnabledResponse;
                toAminoMsg(message: _35.MsgSetSendEnabledResponse): _35.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _35.MsgSetSendEnabledResponseProtoMsg): _35.MsgSetSendEnabledResponse;
                toProto(message: _35.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _35.MsgSetSendEnabledResponse): _35.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _34.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBalanceRequest;
                fromPartial(object: Partial<_34.QueryBalanceRequest>): _34.QueryBalanceRequest;
                fromAmino(object: _34.QueryBalanceRequestAmino): _34.QueryBalanceRequest;
                toAmino(message: _34.QueryBalanceRequest): _34.QueryBalanceRequestAmino;
                fromAminoMsg(object: _34.QueryBalanceRequestAminoMsg): _34.QueryBalanceRequest;
                toAminoMsg(message: _34.QueryBalanceRequest): _34.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _34.QueryBalanceRequestProtoMsg): _34.QueryBalanceRequest;
                toProto(message: _34.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _34.QueryBalanceRequest): _34.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _34.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBalanceResponse;
                fromPartial(object: Partial<_34.QueryBalanceResponse>): _34.QueryBalanceResponse;
                fromAmino(object: _34.QueryBalanceResponseAmino): _34.QueryBalanceResponse;
                toAmino(message: _34.QueryBalanceResponse): _34.QueryBalanceResponseAmino;
                fromAminoMsg(object: _34.QueryBalanceResponseAminoMsg): _34.QueryBalanceResponse;
                toAminoMsg(message: _34.QueryBalanceResponse): _34.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _34.QueryBalanceResponseProtoMsg): _34.QueryBalanceResponse;
                toProto(message: _34.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _34.QueryBalanceResponse): _34.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _34.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAllBalancesRequest;
                fromPartial(object: Partial<_34.QueryAllBalancesRequest>): _34.QueryAllBalancesRequest;
                fromAmino(object: _34.QueryAllBalancesRequestAmino): _34.QueryAllBalancesRequest;
                toAmino(message: _34.QueryAllBalancesRequest): _34.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _34.QueryAllBalancesRequestAminoMsg): _34.QueryAllBalancesRequest;
                toAminoMsg(message: _34.QueryAllBalancesRequest): _34.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _34.QueryAllBalancesRequestProtoMsg): _34.QueryAllBalancesRequest;
                toProto(message: _34.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _34.QueryAllBalancesRequest): _34.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _34.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAllBalancesResponse;
                fromPartial(object: Partial<_34.QueryAllBalancesResponse>): _34.QueryAllBalancesResponse;
                fromAmino(object: _34.QueryAllBalancesResponseAmino): _34.QueryAllBalancesResponse;
                toAmino(message: _34.QueryAllBalancesResponse): _34.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _34.QueryAllBalancesResponseAminoMsg): _34.QueryAllBalancesResponse;
                toAminoMsg(message: _34.QueryAllBalancesResponse): _34.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _34.QueryAllBalancesResponseProtoMsg): _34.QueryAllBalancesResponse;
                toProto(message: _34.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _34.QueryAllBalancesResponse): _34.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _34.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_34.QuerySpendableBalancesRequest>): _34.QuerySpendableBalancesRequest;
                fromAmino(object: _34.QuerySpendableBalancesRequestAmino): _34.QuerySpendableBalancesRequest;
                toAmino(message: _34.QuerySpendableBalancesRequest): _34.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _34.QuerySpendableBalancesRequestAminoMsg): _34.QuerySpendableBalancesRequest;
                toAminoMsg(message: _34.QuerySpendableBalancesRequest): _34.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _34.QuerySpendableBalancesRequestProtoMsg): _34.QuerySpendableBalancesRequest;
                toProto(message: _34.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _34.QuerySpendableBalancesRequest): _34.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _34.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_34.QuerySpendableBalancesResponse>): _34.QuerySpendableBalancesResponse;
                fromAmino(object: _34.QuerySpendableBalancesResponseAmino): _34.QuerySpendableBalancesResponse;
                toAmino(message: _34.QuerySpendableBalancesResponse): _34.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _34.QuerySpendableBalancesResponseAminoMsg): _34.QuerySpendableBalancesResponse;
                toAminoMsg(message: _34.QuerySpendableBalancesResponse): _34.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _34.QuerySpendableBalancesResponseProtoMsg): _34.QuerySpendableBalancesResponse;
                toProto(message: _34.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _34.QuerySpendableBalancesResponse): _34.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _34.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_34.QuerySpendableBalanceByDenomRequest>): _34.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _34.QuerySpendableBalanceByDenomRequestAmino): _34.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _34.QuerySpendableBalanceByDenomRequest): _34.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _34.QuerySpendableBalanceByDenomRequestAminoMsg): _34.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _34.QuerySpendableBalanceByDenomRequest): _34.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _34.QuerySpendableBalanceByDenomRequestProtoMsg): _34.QuerySpendableBalanceByDenomRequest;
                toProto(message: _34.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _34.QuerySpendableBalanceByDenomRequest): _34.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _34.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_34.QuerySpendableBalanceByDenomResponse>): _34.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _34.QuerySpendableBalanceByDenomResponseAmino): _34.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _34.QuerySpendableBalanceByDenomResponse): _34.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _34.QuerySpendableBalanceByDenomResponseAminoMsg): _34.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _34.QuerySpendableBalanceByDenomResponse): _34.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _34.QuerySpendableBalanceByDenomResponseProtoMsg): _34.QuerySpendableBalanceByDenomResponse;
                toProto(message: _34.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _34.QuerySpendableBalanceByDenomResponse): _34.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _34.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_34.QueryTotalSupplyRequest>): _34.QueryTotalSupplyRequest;
                fromAmino(object: _34.QueryTotalSupplyRequestAmino): _34.QueryTotalSupplyRequest;
                toAmino(message: _34.QueryTotalSupplyRequest): _34.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _34.QueryTotalSupplyRequestAminoMsg): _34.QueryTotalSupplyRequest;
                toAminoMsg(message: _34.QueryTotalSupplyRequest): _34.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _34.QueryTotalSupplyRequestProtoMsg): _34.QueryTotalSupplyRequest;
                toProto(message: _34.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _34.QueryTotalSupplyRequest): _34.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _34.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_34.QueryTotalSupplyResponse>): _34.QueryTotalSupplyResponse;
                fromAmino(object: _34.QueryTotalSupplyResponseAmino): _34.QueryTotalSupplyResponse;
                toAmino(message: _34.QueryTotalSupplyResponse): _34.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _34.QueryTotalSupplyResponseAminoMsg): _34.QueryTotalSupplyResponse;
                toAminoMsg(message: _34.QueryTotalSupplyResponse): _34.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _34.QueryTotalSupplyResponseProtoMsg): _34.QueryTotalSupplyResponse;
                toProto(message: _34.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _34.QueryTotalSupplyResponse): _34.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _34.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySupplyOfRequest;
                fromPartial(object: Partial<_34.QuerySupplyOfRequest>): _34.QuerySupplyOfRequest;
                fromAmino(object: _34.QuerySupplyOfRequestAmino): _34.QuerySupplyOfRequest;
                toAmino(message: _34.QuerySupplyOfRequest): _34.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _34.QuerySupplyOfRequestAminoMsg): _34.QuerySupplyOfRequest;
                toAminoMsg(message: _34.QuerySupplyOfRequest): _34.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _34.QuerySupplyOfRequestProtoMsg): _34.QuerySupplyOfRequest;
                toProto(message: _34.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _34.QuerySupplyOfRequest): _34.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _34.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySupplyOfResponse;
                fromPartial(object: Partial<_34.QuerySupplyOfResponse>): _34.QuerySupplyOfResponse;
                fromAmino(object: _34.QuerySupplyOfResponseAmino): _34.QuerySupplyOfResponse;
                toAmino(message: _34.QuerySupplyOfResponse): _34.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _34.QuerySupplyOfResponseAminoMsg): _34.QuerySupplyOfResponse;
                toAminoMsg(message: _34.QuerySupplyOfResponse): _34.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _34.QuerySupplyOfResponseProtoMsg): _34.QuerySupplyOfResponse;
                toProto(message: _34.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _34.QuerySupplyOfResponse): _34.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _34.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryParamsRequest;
                fromPartial(_: Partial<_34.QueryParamsRequest>): _34.QueryParamsRequest;
                fromAmino(_: _34.QueryParamsRequestAmino): _34.QueryParamsRequest;
                toAmino(_: _34.QueryParamsRequest): _34.QueryParamsRequestAmino;
                fromAminoMsg(object: _34.QueryParamsRequestAminoMsg): _34.QueryParamsRequest;
                toAminoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _34.QueryParamsRequestProtoMsg): _34.QueryParamsRequest;
                toProto(message: _34.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _34.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryParamsResponse;
                fromPartial(object: Partial<_34.QueryParamsResponse>): _34.QueryParamsResponse;
                fromAmino(object: _34.QueryParamsResponseAmino): _34.QueryParamsResponse;
                toAmino(message: _34.QueryParamsResponse): _34.QueryParamsResponseAmino;
                fromAminoMsg(object: _34.QueryParamsResponseAminoMsg): _34.QueryParamsResponse;
                toAminoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _34.QueryParamsResponseProtoMsg): _34.QueryParamsResponse;
                toProto(message: _34.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _34.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_34.QueryDenomsMetadataRequest>): _34.QueryDenomsMetadataRequest;
                fromAmino(object: _34.QueryDenomsMetadataRequestAmino): _34.QueryDenomsMetadataRequest;
                toAmino(message: _34.QueryDenomsMetadataRequest): _34.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _34.QueryDenomsMetadataRequestAminoMsg): _34.QueryDenomsMetadataRequest;
                toAminoMsg(message: _34.QueryDenomsMetadataRequest): _34.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDenomsMetadataRequestProtoMsg): _34.QueryDenomsMetadataRequest;
                toProto(message: _34.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDenomsMetadataRequest): _34.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _34.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_34.QueryDenomsMetadataResponse>): _34.QueryDenomsMetadataResponse;
                fromAmino(object: _34.QueryDenomsMetadataResponseAmino): _34.QueryDenomsMetadataResponse;
                toAmino(message: _34.QueryDenomsMetadataResponse): _34.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _34.QueryDenomsMetadataResponseAminoMsg): _34.QueryDenomsMetadataResponse;
                toAminoMsg(message: _34.QueryDenomsMetadataResponse): _34.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDenomsMetadataResponseProtoMsg): _34.QueryDenomsMetadataResponse;
                toProto(message: _34.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDenomsMetadataResponse): _34.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _34.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_34.QueryDenomMetadataRequest>): _34.QueryDenomMetadataRequest;
                fromAmino(object: _34.QueryDenomMetadataRequestAmino): _34.QueryDenomMetadataRequest;
                toAmino(message: _34.QueryDenomMetadataRequest): _34.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _34.QueryDenomMetadataRequestAminoMsg): _34.QueryDenomMetadataRequest;
                toAminoMsg(message: _34.QueryDenomMetadataRequest): _34.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDenomMetadataRequestProtoMsg): _34.QueryDenomMetadataRequest;
                toProto(message: _34.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDenomMetadataRequest): _34.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _34.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_34.QueryDenomMetadataResponse>): _34.QueryDenomMetadataResponse;
                fromAmino(object: _34.QueryDenomMetadataResponseAmino): _34.QueryDenomMetadataResponse;
                toAmino(message: _34.QueryDenomMetadataResponse): _34.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _34.QueryDenomMetadataResponseAminoMsg): _34.QueryDenomMetadataResponse;
                toAminoMsg(message: _34.QueryDenomMetadataResponse): _34.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDenomMetadataResponseProtoMsg): _34.QueryDenomMetadataResponse;
                toProto(message: _34.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDenomMetadataResponse): _34.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _34.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_34.QueryDenomOwnersRequest>): _34.QueryDenomOwnersRequest;
                fromAmino(object: _34.QueryDenomOwnersRequestAmino): _34.QueryDenomOwnersRequest;
                toAmino(message: _34.QueryDenomOwnersRequest): _34.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _34.QueryDenomOwnersRequestAminoMsg): _34.QueryDenomOwnersRequest;
                toAminoMsg(message: _34.QueryDenomOwnersRequest): _34.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _34.QueryDenomOwnersRequestProtoMsg): _34.QueryDenomOwnersRequest;
                toProto(message: _34.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDenomOwnersRequest): _34.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _34.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.DenomOwner;
                fromPartial(object: Partial<_34.DenomOwner>): _34.DenomOwner;
                fromAmino(object: _34.DenomOwnerAmino): _34.DenomOwner;
                toAmino(message: _34.DenomOwner): _34.DenomOwnerAmino;
                fromAminoMsg(object: _34.DenomOwnerAminoMsg): _34.DenomOwner;
                toAminoMsg(message: _34.DenomOwner): _34.DenomOwnerAminoMsg;
                fromProtoMsg(message: _34.DenomOwnerProtoMsg): _34.DenomOwner;
                toProto(message: _34.DenomOwner): Uint8Array;
                toProtoMsg(message: _34.DenomOwner): _34.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _34.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_34.QueryDenomOwnersResponse>): _34.QueryDenomOwnersResponse;
                fromAmino(object: _34.QueryDenomOwnersResponseAmino): _34.QueryDenomOwnersResponse;
                toAmino(message: _34.QueryDenomOwnersResponse): _34.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _34.QueryDenomOwnersResponseAminoMsg): _34.QueryDenomOwnersResponse;
                toAminoMsg(message: _34.QueryDenomOwnersResponse): _34.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _34.QueryDenomOwnersResponseProtoMsg): _34.QueryDenomOwnersResponse;
                toProto(message: _34.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDenomOwnersResponse): _34.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _34.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySendEnabledRequest;
                fromPartial(object: Partial<_34.QuerySendEnabledRequest>): _34.QuerySendEnabledRequest;
                fromAmino(object: _34.QuerySendEnabledRequestAmino): _34.QuerySendEnabledRequest;
                toAmino(message: _34.QuerySendEnabledRequest): _34.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _34.QuerySendEnabledRequestAminoMsg): _34.QuerySendEnabledRequest;
                toAminoMsg(message: _34.QuerySendEnabledRequest): _34.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _34.QuerySendEnabledRequestProtoMsg): _34.QuerySendEnabledRequest;
                toProto(message: _34.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _34.QuerySendEnabledRequest): _34.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _34.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QuerySendEnabledResponse;
                fromPartial(object: Partial<_34.QuerySendEnabledResponse>): _34.QuerySendEnabledResponse;
                fromAmino(object: _34.QuerySendEnabledResponseAmino): _34.QuerySendEnabledResponse;
                toAmino(message: _34.QuerySendEnabledResponse): _34.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _34.QuerySendEnabledResponseAminoMsg): _34.QuerySendEnabledResponse;
                toAminoMsg(message: _34.QuerySendEnabledResponse): _34.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _34.QuerySendEnabledResponseProtoMsg): _34.QuerySendEnabledResponse;
                toProto(message: _34.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _34.QuerySendEnabledResponse): _34.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _33.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GenesisState;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
                fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
                toAminoMsg(message: _33.GenesisState): _33.GenesisStateAminoMsg;
                fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
                toProto(message: _33.GenesisState): Uint8Array;
                toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _33.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Balance;
                fromPartial(object: Partial<_33.Balance>): _33.Balance;
                fromAmino(object: _33.BalanceAmino): _33.Balance;
                toAmino(message: _33.Balance): _33.BalanceAmino;
                fromAminoMsg(object: _33.BalanceAminoMsg): _33.Balance;
                toAminoMsg(message: _33.Balance): _33.BalanceAminoMsg;
                fromProtoMsg(message: _33.BalanceProtoMsg): _33.Balance;
                toProto(message: _33.Balance): Uint8Array;
                toProtoMsg(message: _33.Balance): _33.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _32.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
                fromAmino(object: _32.ParamsAmino): _32.Params;
                toAmino(message: _32.Params): _32.ParamsAmino;
                fromAminoMsg(object: _32.ParamsAminoMsg): _32.Params;
                toAminoMsg(message: _32.Params): _32.ParamsAminoMsg;
                fromProtoMsg(message: _32.ParamsProtoMsg): _32.Params;
                toProto(message: _32.Params): Uint8Array;
                toProtoMsg(message: _32.Params): _32.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _32.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.SendEnabled;
                fromPartial(object: Partial<_32.SendEnabled>): _32.SendEnabled;
                fromAmino(object: _32.SendEnabledAmino): _32.SendEnabled;
                toAmino(message: _32.SendEnabled): _32.SendEnabledAmino;
                fromAminoMsg(object: _32.SendEnabledAminoMsg): _32.SendEnabled;
                toAminoMsg(message: _32.SendEnabled): _32.SendEnabledAminoMsg;
                fromProtoMsg(message: _32.SendEnabledProtoMsg): _32.SendEnabled;
                toProto(message: _32.SendEnabled): Uint8Array;
                toProtoMsg(message: _32.SendEnabled): _32.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _32.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Input;
                fromPartial(object: Partial<_32.Input>): _32.Input;
                fromAmino(object: _32.InputAmino): _32.Input;
                toAmino(message: _32.Input): _32.InputAmino;
                fromAminoMsg(object: _32.InputAminoMsg): _32.Input;
                toAminoMsg(message: _32.Input): _32.InputAminoMsg;
                fromProtoMsg(message: _32.InputProtoMsg): _32.Input;
                toProto(message: _32.Input): Uint8Array;
                toProtoMsg(message: _32.Input): _32.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _32.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Output;
                fromPartial(object: Partial<_32.Output>): _32.Output;
                fromAmino(object: _32.OutputAmino): _32.Output;
                toAmino(message: _32.Output): _32.OutputAmino;
                fromAminoMsg(object: _32.OutputAminoMsg): _32.Output;
                toAminoMsg(message: _32.Output): _32.OutputAminoMsg;
                fromProtoMsg(message: _32.OutputProtoMsg): _32.Output;
                toProto(message: _32.Output): Uint8Array;
                toProtoMsg(message: _32.Output): _32.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _32.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Supply;
                fromPartial(object: Partial<_32.Supply>): _32.Supply;
                fromAmino(object: _32.SupplyAmino): _32.Supply;
                toAmino(message: _32.Supply): _32.SupplyAmino;
                fromAminoMsg(object: _32.SupplyAminoMsg): _32.Supply;
                toAminoMsg(message: _32.Supply): _32.SupplyAminoMsg;
                fromProtoMsg(message: _32.SupplyProtoMsg): _32.Supply;
                toProto(message: _32.Supply): Uint8Array;
                toProtoMsg(message: _32.Supply): _32.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _32.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.DenomUnit;
                fromPartial(object: Partial<_32.DenomUnit>): _32.DenomUnit;
                fromAmino(object: _32.DenomUnitAmino): _32.DenomUnit;
                toAmino(message: _32.DenomUnit): _32.DenomUnitAmino;
                fromAminoMsg(object: _32.DenomUnitAminoMsg): _32.DenomUnit;
                toAminoMsg(message: _32.DenomUnit): _32.DenomUnitAminoMsg;
                fromProtoMsg(message: _32.DenomUnitProtoMsg): _32.DenomUnit;
                toProto(message: _32.DenomUnit): Uint8Array;
                toProtoMsg(message: _32.DenomUnit): _32.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _32.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Metadata;
                fromPartial(object: Partial<_32.Metadata>): _32.Metadata;
                fromAmino(object: _32.MetadataAmino): _32.Metadata;
                toAmino(message: _32.Metadata): _32.MetadataAmino;
                fromAminoMsg(object: _32.MetadataAminoMsg): _32.Metadata;
                toAminoMsg(message: _32.Metadata): _32.MetadataAminoMsg;
                fromProtoMsg(message: _32.MetadataProtoMsg): _32.Metadata;
                toProto(message: _32.Metadata): Uint8Array;
                toProtoMsg(message: _32.Metadata): _32.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _31.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.SendAuthorization;
                fromPartial(object: Partial<_31.SendAuthorization>): _31.SendAuthorization;
                fromAmino(object: _31.SendAuthorizationAmino): _31.SendAuthorization;
                toAmino(message: _31.SendAuthorization): _31.SendAuthorizationAmino;
                fromAminoMsg(object: _31.SendAuthorizationAminoMsg): _31.SendAuthorization;
                toAminoMsg(message: _31.SendAuthorization): _31.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _31.SendAuthorizationProtoMsg): _31.SendAuthorization;
                toProto(message: _31.SendAuthorization): Uint8Array;
                toProtoMsg(message: _31.SendAuthorization): _31.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _36.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.TxResponse;
                    fromPartial(object: Partial<_36.TxResponse>): _36.TxResponse;
                    fromAmino(object: _36.TxResponseAmino): _36.TxResponse;
                    toAmino(message: _36.TxResponse): _36.TxResponseAmino;
                    fromAminoMsg(object: _36.TxResponseAminoMsg): _36.TxResponse;
                    toAminoMsg(message: _36.TxResponse): _36.TxResponseAminoMsg;
                    fromProtoMsg(message: _36.TxResponseProtoMsg): _36.TxResponse;
                    toProto(message: _36.TxResponse): Uint8Array;
                    toProtoMsg(message: _36.TxResponse): _36.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _36.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.ABCIMessageLog;
                    fromPartial(object: Partial<_36.ABCIMessageLog>): _36.ABCIMessageLog;
                    fromAmino(object: _36.ABCIMessageLogAmino): _36.ABCIMessageLog;
                    toAmino(message: _36.ABCIMessageLog): _36.ABCIMessageLogAmino;
                    fromAminoMsg(object: _36.ABCIMessageLogAminoMsg): _36.ABCIMessageLog;
                    toAminoMsg(message: _36.ABCIMessageLog): _36.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _36.ABCIMessageLogProtoMsg): _36.ABCIMessageLog;
                    toProto(message: _36.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _36.ABCIMessageLog): _36.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _36.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.StringEvent;
                    fromPartial(object: Partial<_36.StringEvent>): _36.StringEvent;
                    fromAmino(object: _36.StringEventAmino): _36.StringEvent;
                    toAmino(message: _36.StringEvent): _36.StringEventAmino;
                    fromAminoMsg(object: _36.StringEventAminoMsg): _36.StringEvent;
                    toAminoMsg(message: _36.StringEvent): _36.StringEventAminoMsg;
                    fromProtoMsg(message: _36.StringEventProtoMsg): _36.StringEvent;
                    toProto(message: _36.StringEvent): Uint8Array;
                    toProtoMsg(message: _36.StringEvent): _36.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _36.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Attribute;
                    fromPartial(object: Partial<_36.Attribute>): _36.Attribute;
                    fromAmino(object: _36.AttributeAmino): _36.Attribute;
                    toAmino(message: _36.Attribute): _36.AttributeAmino;
                    fromAminoMsg(object: _36.AttributeAminoMsg): _36.Attribute;
                    toAminoMsg(message: _36.Attribute): _36.AttributeAminoMsg;
                    fromProtoMsg(message: _36.AttributeProtoMsg): _36.Attribute;
                    toProto(message: _36.Attribute): Uint8Array;
                    toProtoMsg(message: _36.Attribute): _36.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _36.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.GasInfo;
                    fromPartial(object: Partial<_36.GasInfo>): _36.GasInfo;
                    fromAmino(object: _36.GasInfoAmino): _36.GasInfo;
                    toAmino(message: _36.GasInfo): _36.GasInfoAmino;
                    fromAminoMsg(object: _36.GasInfoAminoMsg): _36.GasInfo;
                    toAminoMsg(message: _36.GasInfo): _36.GasInfoAminoMsg;
                    fromProtoMsg(message: _36.GasInfoProtoMsg): _36.GasInfo;
                    toProto(message: _36.GasInfo): Uint8Array;
                    toProtoMsg(message: _36.GasInfo): _36.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _36.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Result;
                    fromPartial(object: Partial<_36.Result>): _36.Result;
                    fromAmino(object: _36.ResultAmino): _36.Result;
                    toAmino(message: _36.Result): _36.ResultAmino;
                    fromAminoMsg(object: _36.ResultAminoMsg): _36.Result;
                    toAminoMsg(message: _36.Result): _36.ResultAminoMsg;
                    fromProtoMsg(message: _36.ResultProtoMsg): _36.Result;
                    toProto(message: _36.Result): Uint8Array;
                    toProtoMsg(message: _36.Result): _36.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _36.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SimulationResponse;
                    fromPartial(object: Partial<_36.SimulationResponse>): _36.SimulationResponse;
                    fromAmino(object: _36.SimulationResponseAmino): _36.SimulationResponse;
                    toAmino(message: _36.SimulationResponse): _36.SimulationResponseAmino;
                    fromAminoMsg(object: _36.SimulationResponseAminoMsg): _36.SimulationResponse;
                    toAminoMsg(message: _36.SimulationResponse): _36.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _36.SimulationResponseProtoMsg): _36.SimulationResponse;
                    toProto(message: _36.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _36.SimulationResponse): _36.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _36.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.MsgData;
                    fromPartial(object: Partial<_36.MsgData>): _36.MsgData;
                    fromAmino(object: _36.MsgDataAmino): _36.MsgData;
                    toAmino(message: _36.MsgData): _36.MsgDataAmino;
                    fromAminoMsg(object: _36.MsgDataAminoMsg): _36.MsgData;
                    toAminoMsg(message: _36.MsgData): _36.MsgDataAminoMsg;
                    fromProtoMsg(message: _36.MsgDataProtoMsg): _36.MsgData;
                    toProto(message: _36.MsgData): Uint8Array;
                    toProtoMsg(message: _36.MsgData): _36.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _36.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.TxMsgData;
                    fromPartial(object: Partial<_36.TxMsgData>): _36.TxMsgData;
                    fromAmino(object: _36.TxMsgDataAmino): _36.TxMsgData;
                    toAmino(message: _36.TxMsgData): _36.TxMsgDataAmino;
                    fromAminoMsg(object: _36.TxMsgDataAminoMsg): _36.TxMsgData;
                    toAminoMsg(message: _36.TxMsgData): _36.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _36.TxMsgDataProtoMsg): _36.TxMsgData;
                    toProto(message: _36.TxMsgData): Uint8Array;
                    toProtoMsg(message: _36.TxMsgData): _36.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _36.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SearchTxsResult;
                    fromPartial(object: Partial<_36.SearchTxsResult>): _36.SearchTxsResult;
                    fromAmino(object: _36.SearchTxsResultAmino): _36.SearchTxsResult;
                    toAmino(message: _36.SearchTxsResult): _36.SearchTxsResultAmino;
                    fromAminoMsg(object: _36.SearchTxsResultAminoMsg): _36.SearchTxsResult;
                    toAminoMsg(message: _36.SearchTxsResult): _36.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _36.SearchTxsResultProtoMsg): _36.SearchTxsResult;
                    toProto(message: _36.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _36.SearchTxsResult): _36.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _37.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Pairs;
                    fromPartial(object: Partial<_37.Pairs>): _37.Pairs;
                    fromAmino(object: _37.PairsAmino): _37.Pairs;
                    toAmino(message: _37.Pairs): _37.PairsAmino;
                    fromAminoMsg(object: _37.PairsAminoMsg): _37.Pairs;
                    toAminoMsg(message: _37.Pairs): _37.PairsAminoMsg;
                    fromProtoMsg(message: _37.PairsProtoMsg): _37.Pairs;
                    toProto(message: _37.Pairs): Uint8Array;
                    toProtoMsg(message: _37.Pairs): _37.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _37.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.Pair;
                    fromPartial(object: Partial<_37.Pair>): _37.Pair;
                    fromAmino(object: _37.PairAmino): _37.Pair;
                    toAmino(message: _37.Pair): _37.PairAmino;
                    fromAminoMsg(object: _37.PairAminoMsg): _37.Pair;
                    toAminoMsg(message: _37.Pair): _37.PairAminoMsg;
                    fromProtoMsg(message: _37.PairProtoMsg): _37.Pair;
                    toProto(message: _37.Pair): Uint8Array;
                    toProtoMsg(message: _37.Pair): _37.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _268.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _38.ConfigRequest): Promise<_38.ConfigResponse>;
                };
                LCDQueryClient: typeof _247.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _38.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.ConfigRequest;
                    fromPartial(_: Partial<_38.ConfigRequest>): _38.ConfigRequest;
                    fromAmino(_: _38.ConfigRequestAmino): _38.ConfigRequest;
                    toAmino(_: _38.ConfigRequest): _38.ConfigRequestAmino;
                    fromAminoMsg(object: _38.ConfigRequestAminoMsg): _38.ConfigRequest;
                    toAminoMsg(message: _38.ConfigRequest): _38.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _38.ConfigRequestProtoMsg): _38.ConfigRequest;
                    toProto(message: _38.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _38.ConfigRequest): _38.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _38.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ConfigResponse;
                    fromPartial(object: Partial<_38.ConfigResponse>): _38.ConfigResponse;
                    fromAmino(object: _38.ConfigResponseAmino): _38.ConfigResponse;
                    toAmino(message: _38.ConfigResponse): _38.ConfigResponseAmino;
                    fromAminoMsg(object: _38.ConfigResponseAminoMsg): _38.ConfigResponse;
                    toAminoMsg(message: _38.ConfigResponse): _38.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _38.ConfigResponseProtoMsg): _38.ConfigResponse;
                    toProto(message: _38.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _38.ConfigResponse): _38.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _39.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.PageRequest;
                    fromPartial(object: Partial<_39.PageRequest>): _39.PageRequest;
                    fromAmino(object: _39.PageRequestAmino): _39.PageRequest;
                    toAmino(message: _39.PageRequest): _39.PageRequestAmino;
                    fromAminoMsg(object: _39.PageRequestAminoMsg): _39.PageRequest;
                    toAminoMsg(message: _39.PageRequest): _39.PageRequestAminoMsg;
                    fromProtoMsg(message: _39.PageRequestProtoMsg): _39.PageRequest;
                    toProto(message: _39.PageRequest): Uint8Array;
                    toProtoMsg(message: _39.PageRequest): _39.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _39.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.PageResponse;
                    fromPartial(object: Partial<_39.PageResponse>): _39.PageResponse;
                    fromAmino(object: _39.PageResponseAmino): _39.PageResponse;
                    toAmino(message: _39.PageResponse): _39.PageResponseAmino;
                    fromAminoMsg(object: _39.PageResponseAminoMsg): _39.PageResponse;
                    toAminoMsg(message: _39.PageResponse): _39.PageResponseAminoMsg;
                    fromProtoMsg(message: _39.PageResponseProtoMsg): _39.PageResponse;
                    toProto(message: _39.PageResponse): Uint8Array;
                    toProtoMsg(message: _39.PageResponse): _39.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _40.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_40.ListAllInterfacesRequest>): _40.ListAllInterfacesRequest;
                    fromAmino(_: _40.ListAllInterfacesRequestAmino): _40.ListAllInterfacesRequest;
                    toAmino(_: _40.ListAllInterfacesRequest): _40.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _40.ListAllInterfacesRequestAminoMsg): _40.ListAllInterfacesRequest;
                    toAminoMsg(message: _40.ListAllInterfacesRequest): _40.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _40.ListAllInterfacesRequestProtoMsg): _40.ListAllInterfacesRequest;
                    toProto(message: _40.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _40.ListAllInterfacesRequest): _40.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _40.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_40.ListAllInterfacesResponse>): _40.ListAllInterfacesResponse;
                    fromAmino(object: _40.ListAllInterfacesResponseAmino): _40.ListAllInterfacesResponse;
                    toAmino(message: _40.ListAllInterfacesResponse): _40.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _40.ListAllInterfacesResponseAminoMsg): _40.ListAllInterfacesResponse;
                    toAminoMsg(message: _40.ListAllInterfacesResponse): _40.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _40.ListAllInterfacesResponseProtoMsg): _40.ListAllInterfacesResponse;
                    toProto(message: _40.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _40.ListAllInterfacesResponse): _40.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _40.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ListImplementationsRequest;
                    fromPartial(object: Partial<_40.ListImplementationsRequest>): _40.ListImplementationsRequest;
                    fromAmino(object: _40.ListImplementationsRequestAmino): _40.ListImplementationsRequest;
                    toAmino(message: _40.ListImplementationsRequest): _40.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _40.ListImplementationsRequestAminoMsg): _40.ListImplementationsRequest;
                    toAminoMsg(message: _40.ListImplementationsRequest): _40.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _40.ListImplementationsRequestProtoMsg): _40.ListImplementationsRequest;
                    toProto(message: _40.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _40.ListImplementationsRequest): _40.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _40.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.ListImplementationsResponse;
                    fromPartial(object: Partial<_40.ListImplementationsResponse>): _40.ListImplementationsResponse;
                    fromAmino(object: _40.ListImplementationsResponseAmino): _40.ListImplementationsResponse;
                    toAmino(message: _40.ListImplementationsResponse): _40.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _40.ListImplementationsResponseAminoMsg): _40.ListImplementationsResponse;
                    toAminoMsg(message: _40.ListImplementationsResponse): _40.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _40.ListImplementationsResponseProtoMsg): _40.ListImplementationsResponse;
                    toProto(message: _40.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _40.ListImplementationsResponse): _40.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _41.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.AppDescriptor;
                    fromPartial(object: Partial<_41.AppDescriptor>): _41.AppDescriptor;
                    fromAmino(object: _41.AppDescriptorAmino): _41.AppDescriptor;
                    toAmino(message: _41.AppDescriptor): _41.AppDescriptorAmino;
                    fromAminoMsg(object: _41.AppDescriptorAminoMsg): _41.AppDescriptor;
                    toAminoMsg(message: _41.AppDescriptor): _41.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _41.AppDescriptorProtoMsg): _41.AppDescriptor;
                    toProto(message: _41.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _41.AppDescriptor): _41.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _41.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.TxDescriptor;
                    fromPartial(object: Partial<_41.TxDescriptor>): _41.TxDescriptor;
                    fromAmino(object: _41.TxDescriptorAmino): _41.TxDescriptor;
                    toAmino(message: _41.TxDescriptor): _41.TxDescriptorAmino;
                    fromAminoMsg(object: _41.TxDescriptorAminoMsg): _41.TxDescriptor;
                    toAminoMsg(message: _41.TxDescriptor): _41.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _41.TxDescriptorProtoMsg): _41.TxDescriptor;
                    toProto(message: _41.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _41.TxDescriptor): _41.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _41.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.AuthnDescriptor;
                    fromPartial(object: Partial<_41.AuthnDescriptor>): _41.AuthnDescriptor;
                    fromAmino(object: _41.AuthnDescriptorAmino): _41.AuthnDescriptor;
                    toAmino(message: _41.AuthnDescriptor): _41.AuthnDescriptorAmino;
                    fromAminoMsg(object: _41.AuthnDescriptorAminoMsg): _41.AuthnDescriptor;
                    toAminoMsg(message: _41.AuthnDescriptor): _41.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _41.AuthnDescriptorProtoMsg): _41.AuthnDescriptor;
                    toProto(message: _41.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _41.AuthnDescriptor): _41.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _41.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.SigningModeDescriptor;
                    fromPartial(object: Partial<_41.SigningModeDescriptor>): _41.SigningModeDescriptor;
                    fromAmino(object: _41.SigningModeDescriptorAmino): _41.SigningModeDescriptor;
                    toAmino(message: _41.SigningModeDescriptor): _41.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _41.SigningModeDescriptorAminoMsg): _41.SigningModeDescriptor;
                    toAminoMsg(message: _41.SigningModeDescriptor): _41.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _41.SigningModeDescriptorProtoMsg): _41.SigningModeDescriptor;
                    toProto(message: _41.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _41.SigningModeDescriptor): _41.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _41.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ChainDescriptor;
                    fromPartial(object: Partial<_41.ChainDescriptor>): _41.ChainDescriptor;
                    fromAmino(object: _41.ChainDescriptorAmino): _41.ChainDescriptor;
                    toAmino(message: _41.ChainDescriptor): _41.ChainDescriptorAmino;
                    fromAminoMsg(object: _41.ChainDescriptorAminoMsg): _41.ChainDescriptor;
                    toAminoMsg(message: _41.ChainDescriptor): _41.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _41.ChainDescriptorProtoMsg): _41.ChainDescriptor;
                    toProto(message: _41.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _41.ChainDescriptor): _41.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _41.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.CodecDescriptor;
                    fromPartial(object: Partial<_41.CodecDescriptor>): _41.CodecDescriptor;
                    fromAmino(object: _41.CodecDescriptorAmino): _41.CodecDescriptor;
                    toAmino(message: _41.CodecDescriptor): _41.CodecDescriptorAmino;
                    fromAminoMsg(object: _41.CodecDescriptorAminoMsg): _41.CodecDescriptor;
                    toAminoMsg(message: _41.CodecDescriptor): _41.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _41.CodecDescriptorProtoMsg): _41.CodecDescriptor;
                    toProto(message: _41.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _41.CodecDescriptor): _41.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _41.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.InterfaceDescriptor;
                    fromPartial(object: Partial<_41.InterfaceDescriptor>): _41.InterfaceDescriptor;
                    fromAmino(object: _41.InterfaceDescriptorAmino): _41.InterfaceDescriptor;
                    toAmino(message: _41.InterfaceDescriptor): _41.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _41.InterfaceDescriptorAminoMsg): _41.InterfaceDescriptor;
                    toAminoMsg(message: _41.InterfaceDescriptor): _41.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _41.InterfaceDescriptorProtoMsg): _41.InterfaceDescriptor;
                    toProto(message: _41.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _41.InterfaceDescriptor): _41.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _41.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_41.InterfaceImplementerDescriptor>): _41.InterfaceImplementerDescriptor;
                    fromAmino(object: _41.InterfaceImplementerDescriptorAmino): _41.InterfaceImplementerDescriptor;
                    toAmino(message: _41.InterfaceImplementerDescriptor): _41.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _41.InterfaceImplementerDescriptorAminoMsg): _41.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _41.InterfaceImplementerDescriptor): _41.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _41.InterfaceImplementerDescriptorProtoMsg): _41.InterfaceImplementerDescriptor;
                    toProto(message: _41.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _41.InterfaceImplementerDescriptor): _41.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _41.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_41.InterfaceAcceptingMessageDescriptor>): _41.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _41.InterfaceAcceptingMessageDescriptorAmino): _41.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _41.InterfaceAcceptingMessageDescriptor): _41.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _41.InterfaceAcceptingMessageDescriptorAminoMsg): _41.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _41.InterfaceAcceptingMessageDescriptor): _41.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _41.InterfaceAcceptingMessageDescriptorProtoMsg): _41.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _41.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _41.InterfaceAcceptingMessageDescriptor): _41.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _41.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.ConfigurationDescriptor;
                    fromPartial(object: Partial<_41.ConfigurationDescriptor>): _41.ConfigurationDescriptor;
                    fromAmino(object: _41.ConfigurationDescriptorAmino): _41.ConfigurationDescriptor;
                    toAmino(message: _41.ConfigurationDescriptor): _41.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _41.ConfigurationDescriptorAminoMsg): _41.ConfigurationDescriptor;
                    toAminoMsg(message: _41.ConfigurationDescriptor): _41.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _41.ConfigurationDescriptorProtoMsg): _41.ConfigurationDescriptor;
                    toProto(message: _41.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _41.ConfigurationDescriptor): _41.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _41.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.MsgDescriptor;
                    fromPartial(object: Partial<_41.MsgDescriptor>): _41.MsgDescriptor;
                    fromAmino(object: _41.MsgDescriptorAmino): _41.MsgDescriptor;
                    toAmino(message: _41.MsgDescriptor): _41.MsgDescriptorAmino;
                    fromAminoMsg(object: _41.MsgDescriptorAminoMsg): _41.MsgDescriptor;
                    toAminoMsg(message: _41.MsgDescriptor): _41.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _41.MsgDescriptorProtoMsg): _41.MsgDescriptor;
                    toProto(message: _41.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _41.MsgDescriptor): _41.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_41.GetAuthnDescriptorRequest>): _41.GetAuthnDescriptorRequest;
                    fromAmino(_: _41.GetAuthnDescriptorRequestAmino): _41.GetAuthnDescriptorRequest;
                    toAmino(_: _41.GetAuthnDescriptorRequest): _41.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetAuthnDescriptorRequestAminoMsg): _41.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _41.GetAuthnDescriptorRequest): _41.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetAuthnDescriptorRequestProtoMsg): _41.GetAuthnDescriptorRequest;
                    toProto(message: _41.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetAuthnDescriptorRequest): _41.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_41.GetAuthnDescriptorResponse>): _41.GetAuthnDescriptorResponse;
                    fromAmino(object: _41.GetAuthnDescriptorResponseAmino): _41.GetAuthnDescriptorResponse;
                    toAmino(message: _41.GetAuthnDescriptorResponse): _41.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetAuthnDescriptorResponseAminoMsg): _41.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _41.GetAuthnDescriptorResponse): _41.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetAuthnDescriptorResponseProtoMsg): _41.GetAuthnDescriptorResponse;
                    toProto(message: _41.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetAuthnDescriptorResponse): _41.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_41.GetChainDescriptorRequest>): _41.GetChainDescriptorRequest;
                    fromAmino(_: _41.GetChainDescriptorRequestAmino): _41.GetChainDescriptorRequest;
                    toAmino(_: _41.GetChainDescriptorRequest): _41.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetChainDescriptorRequestAminoMsg): _41.GetChainDescriptorRequest;
                    toAminoMsg(message: _41.GetChainDescriptorRequest): _41.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetChainDescriptorRequestProtoMsg): _41.GetChainDescriptorRequest;
                    toProto(message: _41.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetChainDescriptorRequest): _41.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_41.GetChainDescriptorResponse>): _41.GetChainDescriptorResponse;
                    fromAmino(object: _41.GetChainDescriptorResponseAmino): _41.GetChainDescriptorResponse;
                    toAmino(message: _41.GetChainDescriptorResponse): _41.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetChainDescriptorResponseAminoMsg): _41.GetChainDescriptorResponse;
                    toAminoMsg(message: _41.GetChainDescriptorResponse): _41.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetChainDescriptorResponseProtoMsg): _41.GetChainDescriptorResponse;
                    toProto(message: _41.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetChainDescriptorResponse): _41.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_41.GetCodecDescriptorRequest>): _41.GetCodecDescriptorRequest;
                    fromAmino(_: _41.GetCodecDescriptorRequestAmino): _41.GetCodecDescriptorRequest;
                    toAmino(_: _41.GetCodecDescriptorRequest): _41.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetCodecDescriptorRequestAminoMsg): _41.GetCodecDescriptorRequest;
                    toAminoMsg(message: _41.GetCodecDescriptorRequest): _41.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetCodecDescriptorRequestProtoMsg): _41.GetCodecDescriptorRequest;
                    toProto(message: _41.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetCodecDescriptorRequest): _41.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_41.GetCodecDescriptorResponse>): _41.GetCodecDescriptorResponse;
                    fromAmino(object: _41.GetCodecDescriptorResponseAmino): _41.GetCodecDescriptorResponse;
                    toAmino(message: _41.GetCodecDescriptorResponse): _41.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetCodecDescriptorResponseAminoMsg): _41.GetCodecDescriptorResponse;
                    toAminoMsg(message: _41.GetCodecDescriptorResponse): _41.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetCodecDescriptorResponseProtoMsg): _41.GetCodecDescriptorResponse;
                    toProto(message: _41.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetCodecDescriptorResponse): _41.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_41.GetConfigurationDescriptorRequest>): _41.GetConfigurationDescriptorRequest;
                    fromAmino(_: _41.GetConfigurationDescriptorRequestAmino): _41.GetConfigurationDescriptorRequest;
                    toAmino(_: _41.GetConfigurationDescriptorRequest): _41.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetConfigurationDescriptorRequestAminoMsg): _41.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _41.GetConfigurationDescriptorRequest): _41.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetConfigurationDescriptorRequestProtoMsg): _41.GetConfigurationDescriptorRequest;
                    toProto(message: _41.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetConfigurationDescriptorRequest): _41.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_41.GetConfigurationDescriptorResponse>): _41.GetConfigurationDescriptorResponse;
                    fromAmino(object: _41.GetConfigurationDescriptorResponseAmino): _41.GetConfigurationDescriptorResponse;
                    toAmino(message: _41.GetConfigurationDescriptorResponse): _41.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetConfigurationDescriptorResponseAminoMsg): _41.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _41.GetConfigurationDescriptorResponse): _41.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetConfigurationDescriptorResponseProtoMsg): _41.GetConfigurationDescriptorResponse;
                    toProto(message: _41.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetConfigurationDescriptorResponse): _41.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_41.GetQueryServicesDescriptorRequest>): _41.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _41.GetQueryServicesDescriptorRequestAmino): _41.GetQueryServicesDescriptorRequest;
                    toAmino(_: _41.GetQueryServicesDescriptorRequest): _41.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetQueryServicesDescriptorRequestAminoMsg): _41.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _41.GetQueryServicesDescriptorRequest): _41.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetQueryServicesDescriptorRequestProtoMsg): _41.GetQueryServicesDescriptorRequest;
                    toProto(message: _41.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetQueryServicesDescriptorRequest): _41.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_41.GetQueryServicesDescriptorResponse>): _41.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _41.GetQueryServicesDescriptorResponseAmino): _41.GetQueryServicesDescriptorResponse;
                    toAmino(message: _41.GetQueryServicesDescriptorResponse): _41.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetQueryServicesDescriptorResponseAminoMsg): _41.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _41.GetQueryServicesDescriptorResponse): _41.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetQueryServicesDescriptorResponseProtoMsg): _41.GetQueryServicesDescriptorResponse;
                    toProto(message: _41.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetQueryServicesDescriptorResponse): _41.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _41.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_41.GetTxDescriptorRequest>): _41.GetTxDescriptorRequest;
                    fromAmino(_: _41.GetTxDescriptorRequestAmino): _41.GetTxDescriptorRequest;
                    toAmino(_: _41.GetTxDescriptorRequest): _41.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetTxDescriptorRequestAminoMsg): _41.GetTxDescriptorRequest;
                    toAminoMsg(message: _41.GetTxDescriptorRequest): _41.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetTxDescriptorRequestProtoMsg): _41.GetTxDescriptorRequest;
                    toProto(message: _41.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetTxDescriptorRequest): _41.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_41.GetTxDescriptorResponse>): _41.GetTxDescriptorResponse;
                    fromAmino(object: _41.GetTxDescriptorResponseAmino): _41.GetTxDescriptorResponse;
                    toAmino(message: _41.GetTxDescriptorResponse): _41.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetTxDescriptorResponseAminoMsg): _41.GetTxDescriptorResponse;
                    toAminoMsg(message: _41.GetTxDescriptorResponse): _41.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetTxDescriptorResponseProtoMsg): _41.GetTxDescriptorResponse;
                    toProto(message: _41.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetTxDescriptorResponse): _41.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _41.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.QueryServicesDescriptor;
                    fromPartial(object: Partial<_41.QueryServicesDescriptor>): _41.QueryServicesDescriptor;
                    fromAmino(object: _41.QueryServicesDescriptorAmino): _41.QueryServicesDescriptor;
                    toAmino(message: _41.QueryServicesDescriptor): _41.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _41.QueryServicesDescriptorAminoMsg): _41.QueryServicesDescriptor;
                    toAminoMsg(message: _41.QueryServicesDescriptor): _41.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _41.QueryServicesDescriptorProtoMsg): _41.QueryServicesDescriptor;
                    toProto(message: _41.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _41.QueryServicesDescriptor): _41.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _41.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.QueryServiceDescriptor;
                    fromPartial(object: Partial<_41.QueryServiceDescriptor>): _41.QueryServiceDescriptor;
                    fromAmino(object: _41.QueryServiceDescriptorAmino): _41.QueryServiceDescriptor;
                    toAmino(message: _41.QueryServiceDescriptor): _41.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _41.QueryServiceDescriptorAminoMsg): _41.QueryServiceDescriptor;
                    toAminoMsg(message: _41.QueryServiceDescriptor): _41.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _41.QueryServiceDescriptorProtoMsg): _41.QueryServiceDescriptor;
                    toProto(message: _41.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _41.QueryServiceDescriptor): _41.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _41.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.QueryMethodDescriptor;
                    fromPartial(object: Partial<_41.QueryMethodDescriptor>): _41.QueryMethodDescriptor;
                    fromAmino(object: _41.QueryMethodDescriptorAmino): _41.QueryMethodDescriptor;
                    toAmino(message: _41.QueryMethodDescriptor): _41.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _41.QueryMethodDescriptorAminoMsg): _41.QueryMethodDescriptor;
                    toAminoMsg(message: _41.QueryMethodDescriptor): _41.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _41.QueryMethodDescriptorProtoMsg): _41.QueryMethodDescriptor;
                    toProto(message: _41.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _41.QueryMethodDescriptor): _41.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _42.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Snapshot;
                    fromPartial(object: Partial<_42.Snapshot>): _42.Snapshot;
                    fromAmino(object: _42.SnapshotAmino): _42.Snapshot;
                    toAmino(message: _42.Snapshot): _42.SnapshotAmino;
                    fromAminoMsg(object: _42.SnapshotAminoMsg): _42.Snapshot;
                    toAminoMsg(message: _42.Snapshot): _42.SnapshotAminoMsg;
                    fromProtoMsg(message: _42.SnapshotProtoMsg): _42.Snapshot;
                    toProto(message: _42.Snapshot): Uint8Array;
                    toProtoMsg(message: _42.Snapshot): _42.SnapshotProtoMsg;
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
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _42.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotItem;
                    fromPartial(object: Partial<_42.SnapshotItem>): _42.SnapshotItem;
                    fromAmino(object: _42.SnapshotItemAmino): _42.SnapshotItem;
                    toAmino(message: _42.SnapshotItem): _42.SnapshotItemAmino;
                    fromAminoMsg(object: _42.SnapshotItemAminoMsg): _42.SnapshotItem;
                    toAminoMsg(message: _42.SnapshotItem): _42.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _42.SnapshotItemProtoMsg): _42.SnapshotItem;
                    toProto(message: _42.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _42.SnapshotItem): _42.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _42.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotStoreItem;
                    fromPartial(object: Partial<_42.SnapshotStoreItem>): _42.SnapshotStoreItem;
                    fromAmino(object: _42.SnapshotStoreItemAmino): _42.SnapshotStoreItem;
                    toAmino(message: _42.SnapshotStoreItem): _42.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _42.SnapshotStoreItemAminoMsg): _42.SnapshotStoreItem;
                    toAminoMsg(message: _42.SnapshotStoreItem): _42.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _42.SnapshotStoreItemProtoMsg): _42.SnapshotStoreItem;
                    toProto(message: _42.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _42.SnapshotStoreItem): _42.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _42.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotIAVLItem;
                    fromPartial(object: Partial<_42.SnapshotIAVLItem>): _42.SnapshotIAVLItem;
                    fromAmino(object: _42.SnapshotIAVLItemAmino): _42.SnapshotIAVLItem;
                    toAmino(message: _42.SnapshotIAVLItem): _42.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _42.SnapshotIAVLItemAminoMsg): _42.SnapshotIAVLItem;
                    toAminoMsg(message: _42.SnapshotIAVLItem): _42.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _42.SnapshotIAVLItemProtoMsg): _42.SnapshotIAVLItem;
                    toProto(message: _42.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _42.SnapshotIAVLItem): _42.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _42.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_42.SnapshotExtensionMeta>): _42.SnapshotExtensionMeta;
                    fromAmino(object: _42.SnapshotExtensionMetaAmino): _42.SnapshotExtensionMeta;
                    toAmino(message: _42.SnapshotExtensionMeta): _42.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _42.SnapshotExtensionMetaAminoMsg): _42.SnapshotExtensionMeta;
                    toAminoMsg(message: _42.SnapshotExtensionMeta): _42.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _42.SnapshotExtensionMetaProtoMsg): _42.SnapshotExtensionMeta;
                    toProto(message: _42.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _42.SnapshotExtensionMeta): _42.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _42.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_42.SnapshotExtensionPayload>): _42.SnapshotExtensionPayload;
                    fromAmino(object: _42.SnapshotExtensionPayloadAmino): _42.SnapshotExtensionPayload;
                    toAmino(message: _42.SnapshotExtensionPayload): _42.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _42.SnapshotExtensionPayloadAminoMsg): _42.SnapshotExtensionPayload;
                    toAminoMsg(message: _42.SnapshotExtensionPayload): _42.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _42.SnapshotExtensionPayloadProtoMsg): _42.SnapshotExtensionPayload;
                    toProto(message: _42.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _42.SnapshotExtensionPayload): _42.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _42.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotKVItem;
                    fromPartial(object: Partial<_42.SnapshotKVItem>): _42.SnapshotKVItem;
                    fromAmino(object: _42.SnapshotKVItemAmino): _42.SnapshotKVItem;
                    toAmino(message: _42.SnapshotKVItem): _42.SnapshotKVItemAmino;
                    fromAminoMsg(object: _42.SnapshotKVItemAminoMsg): _42.SnapshotKVItem;
                    toAminoMsg(message: _42.SnapshotKVItem): _42.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _42.SnapshotKVItemProtoMsg): _42.SnapshotKVItem;
                    toProto(message: _42.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _42.SnapshotKVItem): _42.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _42.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.SnapshotSchema;
                    fromPartial(object: Partial<_42.SnapshotSchema>): _42.SnapshotSchema;
                    fromAmino(object: _42.SnapshotSchemaAmino): _42.SnapshotSchema;
                    toAmino(message: _42.SnapshotSchema): _42.SnapshotSchemaAmino;
                    fromAminoMsg(object: _42.SnapshotSchemaAminoMsg): _42.SnapshotSchema;
                    toAminoMsg(message: _42.SnapshotSchema): _42.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _42.SnapshotSchemaProtoMsg): _42.SnapshotSchema;
                    toProto(message: _42.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _42.SnapshotSchema): _42.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _45.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.SnapshotItem;
                    fromPartial(object: Partial<_45.SnapshotItem>): _45.SnapshotItem;
                    fromAmino(object: _45.SnapshotItemAmino): _45.SnapshotItem;
                    toAmino(message: _45.SnapshotItem): _45.SnapshotItemAmino;
                    fromAminoMsg(object: _45.SnapshotItemAminoMsg): _45.SnapshotItem;
                    toAminoMsg(message: _45.SnapshotItem): _45.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _45.SnapshotItemProtoMsg): _45.SnapshotItem;
                    toProto(message: _45.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _45.SnapshotItem): _45.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _45.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.SnapshotStoreItem;
                    fromPartial(object: Partial<_45.SnapshotStoreItem>): _45.SnapshotStoreItem;
                    fromAmino(object: _45.SnapshotStoreItemAmino): _45.SnapshotStoreItem;
                    toAmino(message: _45.SnapshotStoreItem): _45.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _45.SnapshotStoreItemAminoMsg): _45.SnapshotStoreItem;
                    toAminoMsg(message: _45.SnapshotStoreItem): _45.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _45.SnapshotStoreItemProtoMsg): _45.SnapshotStoreItem;
                    toProto(message: _45.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _45.SnapshotStoreItem): _45.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _45.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.SnapshotIAVLItem;
                    fromPartial(object: Partial<_45.SnapshotIAVLItem>): _45.SnapshotIAVLItem;
                    fromAmino(object: _45.SnapshotIAVLItemAmino): _45.SnapshotIAVLItem;
                    toAmino(message: _45.SnapshotIAVLItem): _45.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _45.SnapshotIAVLItemAminoMsg): _45.SnapshotIAVLItem;
                    toAminoMsg(message: _45.SnapshotIAVLItem): _45.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _45.SnapshotIAVLItemProtoMsg): _45.SnapshotIAVLItem;
                    toProto(message: _45.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _45.SnapshotIAVLItem): _45.SnapshotIAVLItemProtoMsg;
                };
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _44.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.StoreKVPair;
                    fromPartial(object: Partial<_44.StoreKVPair>): _44.StoreKVPair;
                    fromAmino(object: _44.StoreKVPairAmino): _44.StoreKVPair;
                    toAmino(message: _44.StoreKVPair): _44.StoreKVPairAmino;
                    fromAminoMsg(object: _44.StoreKVPairAminoMsg): _44.StoreKVPair;
                    toAminoMsg(message: _44.StoreKVPair): _44.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _44.StoreKVPairProtoMsg): _44.StoreKVPair;
                    toProto(message: _44.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _44.StoreKVPair): _44.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _44.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.BlockMetadata;
                    fromPartial(object: Partial<_44.BlockMetadata>): _44.BlockMetadata;
                    fromAmino(object: _44.BlockMetadataAmino): _44.BlockMetadata;
                    toAmino(message: _44.BlockMetadata): _44.BlockMetadataAmino;
                    fromAminoMsg(object: _44.BlockMetadataAminoMsg): _44.BlockMetadata;
                    toAminoMsg(message: _44.BlockMetadata): _44.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _44.BlockMetadataProtoMsg): _44.BlockMetadata;
                    toProto(message: _44.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _44.BlockMetadata): _44.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _44.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_44.BlockMetadata_DeliverTx>): _44.BlockMetadata_DeliverTx;
                    fromAmino(object: _44.BlockMetadata_DeliverTxAmino): _44.BlockMetadata_DeliverTx;
                    toAmino(message: _44.BlockMetadata_DeliverTx): _44.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _44.BlockMetadata_DeliverTxAminoMsg): _44.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _44.BlockMetadata_DeliverTx): _44.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _44.BlockMetadata_DeliverTxProtoMsg): _44.BlockMetadata_DeliverTx;
                    toProto(message: _44.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _44.BlockMetadata_DeliverTx): _44.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _43.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.CommitInfo;
                    fromPartial(object: Partial<_43.CommitInfo>): _43.CommitInfo;
                    fromAmino(object: _43.CommitInfoAmino): _43.CommitInfo;
                    toAmino(message: _43.CommitInfo): _43.CommitInfoAmino;
                    fromAminoMsg(object: _43.CommitInfoAminoMsg): _43.CommitInfo;
                    toAminoMsg(message: _43.CommitInfo): _43.CommitInfoAminoMsg;
                    fromProtoMsg(message: _43.CommitInfoProtoMsg): _43.CommitInfo;
                    toProto(message: _43.CommitInfo): Uint8Array;
                    toProtoMsg(message: _43.CommitInfo): _43.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _43.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.StoreInfo;
                    fromPartial(object: Partial<_43.StoreInfo>): _43.StoreInfo;
                    fromAmino(object: _43.StoreInfoAmino): _43.StoreInfo;
                    toAmino(message: _43.StoreInfo): _43.StoreInfoAmino;
                    fromAminoMsg(object: _43.StoreInfoAminoMsg): _43.StoreInfo;
                    toAminoMsg(message: _43.StoreInfo): _43.StoreInfoAminoMsg;
                    fromProtoMsg(message: _43.StoreInfoProtoMsg): _43.StoreInfo;
                    toProto(message: _43.StoreInfo): Uint8Array;
                    toProtoMsg(message: _43.StoreInfo): _43.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _43.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.CommitID;
                    fromPartial(object: Partial<_43.CommitID>): _43.CommitID;
                    fromAmino(object: _43.CommitIDAmino): _43.CommitID;
                    toAmino(message: _43.CommitID): _43.CommitIDAmino;
                    fromAminoMsg(object: _43.CommitIDAminoMsg): _43.CommitID;
                    toAminoMsg(message: _43.CommitID): _43.CommitIDAminoMsg;
                    fromProtoMsg(message: _43.CommitIDProtoMsg): _43.CommitID;
                    toProto(message: _43.CommitID): Uint8Array;
                    toProtoMsg(message: _43.CommitID): _43.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _269.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                    getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                    getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                    getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _46.ABCIQueryRequest): Promise<_46.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _248.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _47.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Block;
                    fromPartial(object: Partial<_47.Block>): _47.Block;
                    fromAmino(object: _47.BlockAmino): _47.Block;
                    toAmino(message: _47.Block): _47.BlockAmino;
                    fromAminoMsg(object: _47.BlockAminoMsg): _47.Block;
                    toAminoMsg(message: _47.Block): _47.BlockAminoMsg;
                    fromProtoMsg(message: _47.BlockProtoMsg): _47.Block;
                    toProto(message: _47.Block): Uint8Array;
                    toProtoMsg(message: _47.Block): _47.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _47.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Header;
                    fromPartial(object: Partial<_47.Header>): _47.Header;
                    fromAmino(object: _47.HeaderAmino): _47.Header;
                    toAmino(message: _47.Header): _47.HeaderAmino;
                    fromAminoMsg(object: _47.HeaderAminoMsg): _47.Header;
                    toAminoMsg(message: _47.Header): _47.HeaderAminoMsg;
                    fromProtoMsg(message: _47.HeaderProtoMsg): _47.Header;
                    toProto(message: _47.Header): Uint8Array;
                    toProtoMsg(message: _47.Header): _47.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _46.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightRequest>): _46.GetValidatorSetByHeightRequest;
                    fromAmino(object: _46.GetValidatorSetByHeightRequestAmino): _46.GetValidatorSetByHeightRequest;
                    toAmino(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _46.GetValidatorSetByHeightRequestAminoMsg): _46.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _46.GetValidatorSetByHeightRequestProtoMsg): _46.GetValidatorSetByHeightRequest;
                    toProto(message: _46.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _46.GetValidatorSetByHeightRequest): _46.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _46.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_46.GetValidatorSetByHeightResponse>): _46.GetValidatorSetByHeightResponse;
                    fromAmino(object: _46.GetValidatorSetByHeightResponseAmino): _46.GetValidatorSetByHeightResponse;
                    toAmino(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _46.GetValidatorSetByHeightResponseAminoMsg): _46.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _46.GetValidatorSetByHeightResponseProtoMsg): _46.GetValidatorSetByHeightResponse;
                    toProto(message: _46.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _46.GetValidatorSetByHeightResponse): _46.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _46.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetRequest>): _46.GetLatestValidatorSetRequest;
                    fromAmino(object: _46.GetLatestValidatorSetRequestAmino): _46.GetLatestValidatorSetRequest;
                    toAmino(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _46.GetLatestValidatorSetRequestAminoMsg): _46.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _46.GetLatestValidatorSetRequestProtoMsg): _46.GetLatestValidatorSetRequest;
                    toProto(message: _46.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _46.GetLatestValidatorSetRequest): _46.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _46.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_46.GetLatestValidatorSetResponse>): _46.GetLatestValidatorSetResponse;
                    fromAmino(object: _46.GetLatestValidatorSetResponseAmino): _46.GetLatestValidatorSetResponse;
                    toAmino(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _46.GetLatestValidatorSetResponseAminoMsg): _46.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _46.GetLatestValidatorSetResponseProtoMsg): _46.GetLatestValidatorSetResponse;
                    toProto(message: _46.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _46.GetLatestValidatorSetResponse): _46.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _46.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.Validator;
                    fromPartial(object: Partial<_46.Validator>): _46.Validator;
                    fromAmino(object: _46.ValidatorAmino): _46.Validator;
                    toAmino(message: _46.Validator): _46.ValidatorAmino;
                    fromAminoMsg(object: _46.ValidatorAminoMsg): _46.Validator;
                    toAminoMsg(message: _46.Validator): _46.ValidatorAminoMsg;
                    fromProtoMsg(message: _46.ValidatorProtoMsg): _46.Validator;
                    toProto(message: _46.Validator): Uint8Array;
                    toProtoMsg(message: _46.Validator): _46.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _46.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_46.GetBlockByHeightRequest>): _46.GetBlockByHeightRequest;
                    fromAmino(object: _46.GetBlockByHeightRequestAmino): _46.GetBlockByHeightRequest;
                    toAmino(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _46.GetBlockByHeightRequestAminoMsg): _46.GetBlockByHeightRequest;
                    toAminoMsg(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _46.GetBlockByHeightRequestProtoMsg): _46.GetBlockByHeightRequest;
                    toProto(message: _46.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _46.GetBlockByHeightRequest): _46.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _46.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_46.GetBlockByHeightResponse>): _46.GetBlockByHeightResponse;
                    fromAmino(object: _46.GetBlockByHeightResponseAmino): _46.GetBlockByHeightResponse;
                    toAmino(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _46.GetBlockByHeightResponseAminoMsg): _46.GetBlockByHeightResponse;
                    toAminoMsg(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _46.GetBlockByHeightResponseProtoMsg): _46.GetBlockByHeightResponse;
                    toProto(message: _46.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _46.GetBlockByHeightResponse): _46.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _46.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetLatestBlockRequest;
                    fromPartial(_: Partial<_46.GetLatestBlockRequest>): _46.GetLatestBlockRequest;
                    fromAmino(_: _46.GetLatestBlockRequestAmino): _46.GetLatestBlockRequest;
                    toAmino(_: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _46.GetLatestBlockRequestAminoMsg): _46.GetLatestBlockRequest;
                    toAminoMsg(message: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _46.GetLatestBlockRequestProtoMsg): _46.GetLatestBlockRequest;
                    toProto(message: _46.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _46.GetLatestBlockRequest): _46.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _46.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetLatestBlockResponse;
                    fromPartial(object: Partial<_46.GetLatestBlockResponse>): _46.GetLatestBlockResponse;
                    fromAmino(object: _46.GetLatestBlockResponseAmino): _46.GetLatestBlockResponse;
                    toAmino(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _46.GetLatestBlockResponseAminoMsg): _46.GetLatestBlockResponse;
                    toAminoMsg(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _46.GetLatestBlockResponseProtoMsg): _46.GetLatestBlockResponse;
                    toProto(message: _46.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _46.GetLatestBlockResponse): _46.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _46.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetSyncingRequest;
                    fromPartial(_: Partial<_46.GetSyncingRequest>): _46.GetSyncingRequest;
                    fromAmino(_: _46.GetSyncingRequestAmino): _46.GetSyncingRequest;
                    toAmino(_: _46.GetSyncingRequest): _46.GetSyncingRequestAmino;
                    fromAminoMsg(object: _46.GetSyncingRequestAminoMsg): _46.GetSyncingRequest;
                    toAminoMsg(message: _46.GetSyncingRequest): _46.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _46.GetSyncingRequestProtoMsg): _46.GetSyncingRequest;
                    toProto(message: _46.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _46.GetSyncingRequest): _46.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _46.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetSyncingResponse;
                    fromPartial(object: Partial<_46.GetSyncingResponse>): _46.GetSyncingResponse;
                    fromAmino(object: _46.GetSyncingResponseAmino): _46.GetSyncingResponse;
                    toAmino(message: _46.GetSyncingResponse): _46.GetSyncingResponseAmino;
                    fromAminoMsg(object: _46.GetSyncingResponseAminoMsg): _46.GetSyncingResponse;
                    toAminoMsg(message: _46.GetSyncingResponse): _46.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _46.GetSyncingResponseProtoMsg): _46.GetSyncingResponse;
                    toProto(message: _46.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _46.GetSyncingResponse): _46.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _46.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _46.GetNodeInfoRequest;
                    fromPartial(_: Partial<_46.GetNodeInfoRequest>): _46.GetNodeInfoRequest;
                    fromAmino(_: _46.GetNodeInfoRequestAmino): _46.GetNodeInfoRequest;
                    toAmino(_: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _46.GetNodeInfoRequestAminoMsg): _46.GetNodeInfoRequest;
                    toAminoMsg(message: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _46.GetNodeInfoRequestProtoMsg): _46.GetNodeInfoRequest;
                    toProto(message: _46.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _46.GetNodeInfoRequest): _46.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _46.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.GetNodeInfoResponse;
                    fromPartial(object: Partial<_46.GetNodeInfoResponse>): _46.GetNodeInfoResponse;
                    fromAmino(object: _46.GetNodeInfoResponseAmino): _46.GetNodeInfoResponse;
                    toAmino(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _46.GetNodeInfoResponseAminoMsg): _46.GetNodeInfoResponse;
                    toAminoMsg(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _46.GetNodeInfoResponseProtoMsg): _46.GetNodeInfoResponse;
                    toProto(message: _46.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _46.GetNodeInfoResponse): _46.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _46.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.VersionInfo;
                    fromPartial(object: Partial<_46.VersionInfo>): _46.VersionInfo;
                    fromAmino(object: _46.VersionInfoAmino): _46.VersionInfo;
                    toAmino(message: _46.VersionInfo): _46.VersionInfoAmino;
                    fromAminoMsg(object: _46.VersionInfoAminoMsg): _46.VersionInfo;
                    toAminoMsg(message: _46.VersionInfo): _46.VersionInfoAminoMsg;
                    fromProtoMsg(message: _46.VersionInfoProtoMsg): _46.VersionInfo;
                    toProto(message: _46.VersionInfo): Uint8Array;
                    toProtoMsg(message: _46.VersionInfo): _46.VersionInfoProtoMsg;
                };
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
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _46.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ABCIQueryRequest;
                    fromPartial(object: Partial<_46.ABCIQueryRequest>): _46.ABCIQueryRequest;
                    fromAmino(object: _46.ABCIQueryRequestAmino): _46.ABCIQueryRequest;
                    toAmino(message: _46.ABCIQueryRequest): _46.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _46.ABCIQueryRequestAminoMsg): _46.ABCIQueryRequest;
                    toAminoMsg(message: _46.ABCIQueryRequest): _46.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _46.ABCIQueryRequestProtoMsg): _46.ABCIQueryRequest;
                    toProto(message: _46.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _46.ABCIQueryRequest): _46.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _46.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ABCIQueryResponse;
                    fromPartial(object: Partial<_46.ABCIQueryResponse>): _46.ABCIQueryResponse;
                    fromAmino(object: _46.ABCIQueryResponseAmino): _46.ABCIQueryResponse;
                    toAmino(message: _46.ABCIQueryResponse): _46.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _46.ABCIQueryResponseAminoMsg): _46.ABCIQueryResponse;
                    toAminoMsg(message: _46.ABCIQueryResponse): _46.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _46.ABCIQueryResponseProtoMsg): _46.ABCIQueryResponse;
                    toProto(message: _46.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _46.ABCIQueryResponse): _46.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _46.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ProofOp;
                    fromPartial(object: Partial<_46.ProofOp>): _46.ProofOp;
                    fromAmino(object: _46.ProofOpAmino): _46.ProofOp;
                    toAmino(message: _46.ProofOp): _46.ProofOpAmino;
                    fromAminoMsg(object: _46.ProofOpAminoMsg): _46.ProofOp;
                    toAminoMsg(message: _46.ProofOp): _46.ProofOpAminoMsg;
                    fromProtoMsg(message: _46.ProofOpProtoMsg): _46.ProofOp;
                    toProto(message: _46.ProofOp): Uint8Array;
                    toProtoMsg(message: _46.ProofOp): _46.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _46.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _46.ProofOps;
                    fromPartial(object: Partial<_46.ProofOps>): _46.ProofOps;
                    fromAmino(object: _46.ProofOpsAmino): _46.ProofOps;
                    toAmino(message: _46.ProofOps): _46.ProofOpsAmino;
                    fromAminoMsg(object: _46.ProofOpsAminoMsg): _46.ProofOps;
                    toAminoMsg(message: _46.ProofOps): _46.ProofOpsAminoMsg;
                    fromProtoMsg(message: _46.ProofOpsProtoMsg): _46.ProofOps;
                    toProto(message: _46.ProofOps): Uint8Array;
                    toProtoMsg(message: _46.ProofOps): _46.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _48.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Coin;
                fromPartial(object: Partial<_48.Coin>): _48.Coin;
                fromAmino(object: _48.CoinAmino): _48.Coin;
                toAmino(message: _48.Coin): _48.CoinAmino;
                fromAminoMsg(object: _48.CoinAminoMsg): _48.Coin;
                toAminoMsg(message: _48.Coin): _48.CoinAminoMsg;
                fromProtoMsg(message: _48.CoinProtoMsg): _48.Coin;
                toProto(message: _48.Coin): Uint8Array;
                toProtoMsg(message: _48.Coin): _48.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _48.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DecCoin;
                fromPartial(object: Partial<_48.DecCoin>): _48.DecCoin;
                fromAmino(object: _48.DecCoinAmino): _48.DecCoin;
                toAmino(message: _48.DecCoin): _48.DecCoinAmino;
                fromAminoMsg(object: _48.DecCoinAminoMsg): _48.DecCoin;
                toAminoMsg(message: _48.DecCoin): _48.DecCoinAminoMsg;
                fromProtoMsg(message: _48.DecCoinProtoMsg): _48.DecCoin;
                toProto(message: _48.DecCoin): Uint8Array;
                toProtoMsg(message: _48.DecCoin): _48.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _48.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.IntProto;
                fromPartial(object: Partial<_48.IntProto>): _48.IntProto;
                fromAmino(object: _48.IntProtoAmino): _48.IntProto;
                toAmino(message: _48.IntProto): _48.IntProtoAmino;
                fromAminoMsg(object: _48.IntProtoAminoMsg): _48.IntProto;
                toAminoMsg(message: _48.IntProto): _48.IntProtoAminoMsg;
                fromProtoMsg(message: _48.IntProtoProtoMsg): _48.IntProto;
                toProto(message: _48.IntProto): Uint8Array;
                toProtoMsg(message: _48.IntProto): _48.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _48.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DecProto;
                fromPartial(object: Partial<_48.DecProto>): _48.DecProto;
                fromAmino(object: _48.DecProtoAmino): _48.DecProto;
                toAmino(message: _48.DecProto): _48.DecProtoAmino;
                fromAminoMsg(object: _48.DecProtoAminoMsg): _48.DecProto;
                toAminoMsg(message: _48.DecProto): _48.DecProtoAminoMsg;
                fromProtoMsg(message: _48.DecProtoProtoMsg): _48.DecProto;
                toProto(message: _48.DecProto): Uint8Array;
                toProtoMsg(message: _48.DecProto): _48.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _49.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _49.Module;
                    fromPartial(object: Partial<_49.Module>): _49.Module;
                    fromAmino(object: _49.ModuleAmino): _49.Module;
                    toAmino(message: _49.Module): _49.ModuleAmino;
                    fromAminoMsg(object: _49.ModuleAminoMsg): _49.Module;
                    toAminoMsg(message: _49.Module): _49.ModuleAminoMsg;
                    fromProtoMsg(message: _49.ModuleProtoMsg): _49.Module;
                    toProto(message: _49.Module): Uint8Array;
                    toProtoMsg(message: _49.Module): _49.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _51.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GenesisOwners;
                fromPartial(object: Partial<_51.GenesisOwners>): _51.GenesisOwners;
                fromAmino(object: _51.GenesisOwnersAmino): _51.GenesisOwners;
                toAmino(message: _51.GenesisOwners): _51.GenesisOwnersAmino;
                fromAminoMsg(object: _51.GenesisOwnersAminoMsg): _51.GenesisOwners;
                toAminoMsg(message: _51.GenesisOwners): _51.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _51.GenesisOwnersProtoMsg): _51.GenesisOwners;
                toProto(message: _51.GenesisOwners): Uint8Array;
                toProtoMsg(message: _51.GenesisOwners): _51.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _51.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                toAminoMsg(message: _51.GenesisState): _51.GenesisStateAminoMsg;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _50.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Capability;
                fromPartial(object: Partial<_50.Capability>): _50.Capability;
                fromAmino(object: _50.CapabilityAmino): _50.Capability;
                toAmino(message: _50.Capability): _50.CapabilityAmino;
                fromAminoMsg(object: _50.CapabilityAminoMsg): _50.Capability;
                toAminoMsg(message: _50.Capability): _50.CapabilityAminoMsg;
                fromProtoMsg(message: _50.CapabilityProtoMsg): _50.Capability;
                toProto(message: _50.Capability): Uint8Array;
                toProtoMsg(message: _50.Capability): _50.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _50.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Owner;
                fromPartial(object: Partial<_50.Owner>): _50.Owner;
                fromAmino(object: _50.OwnerAmino): _50.Owner;
                toAmino(message: _50.Owner): _50.OwnerAmino;
                fromAminoMsg(object: _50.OwnerAminoMsg): _50.Owner;
                toAminoMsg(message: _50.Owner): _50.OwnerAminoMsg;
                fromProtoMsg(message: _50.OwnerProtoMsg): _50.Owner;
                toProto(message: _50.Owner): Uint8Array;
                toProtoMsg(message: _50.Owner): _50.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _50.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.CapabilityOwners;
                fromPartial(object: Partial<_50.CapabilityOwners>): _50.CapabilityOwners;
                fromAmino(object: _50.CapabilityOwnersAmino): _50.CapabilityOwners;
                toAmino(message: _50.CapabilityOwners): _50.CapabilityOwnersAmino;
                fromAminoMsg(object: _50.CapabilityOwnersAminoMsg): _50.CapabilityOwners;
                toAminoMsg(message: _50.CapabilityOwners): _50.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _50.CapabilityOwnersProtoMsg): _50.CapabilityOwners;
                toProto(message: _50.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _50.CapabilityOwners): _50.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
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
            };
        }
        const v1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _54.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _54.MsgUpdateParams): {
                        typeUrl: string;
                        value: _54.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _54.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _54.MsgUpdateParams): {
                        typeUrl: string;
                        value: _54.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _54.MsgUpdateParams) => _54.MsgUpdateParamsAmino;
                    fromAmino: (object: _54.MsgUpdateParamsAmino) => _54.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _54.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgUpdateParams;
                fromPartial(object: Partial<_54.MsgUpdateParams>): _54.MsgUpdateParams;
                fromAmino(object: _54.MsgUpdateParamsAmino): _54.MsgUpdateParams;
                toAmino(message: _54.MsgUpdateParams): _54.MsgUpdateParamsAmino;
                fromAminoMsg(object: _54.MsgUpdateParamsAminoMsg): _54.MsgUpdateParams;
                toAminoMsg(message: _54.MsgUpdateParams): _54.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _54.MsgUpdateParamsProtoMsg): _54.MsgUpdateParams;
                toProto(message: _54.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _54.MsgUpdateParams): _54.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _54.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_54.MsgUpdateParamsResponse>): _54.MsgUpdateParamsResponse;
                fromAmino(_: _54.MsgUpdateParamsResponseAmino): _54.MsgUpdateParamsResponse;
                toAmino(_: _54.MsgUpdateParamsResponse): _54.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _54.MsgUpdateParamsResponseAminoMsg): _54.MsgUpdateParamsResponse;
                toAminoMsg(message: _54.MsgUpdateParamsResponse): _54.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _54.MsgUpdateParamsResponseProtoMsg): _54.MsgUpdateParamsResponse;
                toProto(message: _54.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _54.MsgUpdateParamsResponse): _54.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _53.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.QueryParamsRequest;
                fromPartial(_: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
                fromAmino(_: _53.QueryParamsRequestAmino): _53.QueryParamsRequest;
                toAmino(_: _53.QueryParamsRequest): _53.QueryParamsRequestAmino;
                fromAminoMsg(object: _53.QueryParamsRequestAminoMsg): _53.QueryParamsRequest;
                toAminoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryParamsRequestProtoMsg): _53.QueryParamsRequest;
                toProto(message: _53.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _53.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.QueryParamsResponse;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
                fromAmino(object: _53.QueryParamsResponseAmino): _53.QueryParamsResponse;
                toAmino(message: _53.QueryParamsResponse): _53.QueryParamsResponseAmino;
                fromAminoMsg(object: _53.QueryParamsResponseAminoMsg): _53.QueryParamsResponse;
                toAminoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryParamsResponseProtoMsg): _53.QueryParamsResponse;
                toProto(message: _53.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
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
            MsgClientImpl: typeof _289.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _57.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _57.MsgVerifyInvariant;
                    };
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVerifyInvariant) => _57.MsgVerifyInvariantAmino;
                    fromAmino: (object: _57.MsgVerifyInvariantAmino) => _57.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _57.MsgUpdateParams) => _57.MsgUpdateParamsAmino;
                    fromAmino: (object: _57.MsgUpdateParamsAmino) => _57.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _57.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgVerifyInvariant;
                fromPartial(object: Partial<_57.MsgVerifyInvariant>): _57.MsgVerifyInvariant;
                fromAmino(object: _57.MsgVerifyInvariantAmino): _57.MsgVerifyInvariant;
                toAmino(message: _57.MsgVerifyInvariant): _57.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _57.MsgVerifyInvariantAminoMsg): _57.MsgVerifyInvariant;
                toAminoMsg(message: _57.MsgVerifyInvariant): _57.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _57.MsgVerifyInvariantProtoMsg): _57.MsgVerifyInvariant;
                toProto(message: _57.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _57.MsgVerifyInvariant): _57.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _57.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_57.MsgVerifyInvariantResponse>): _57.MsgVerifyInvariantResponse;
                fromAmino(_: _57.MsgVerifyInvariantResponseAmino): _57.MsgVerifyInvariantResponse;
                toAmino(_: _57.MsgVerifyInvariantResponse): _57.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _57.MsgVerifyInvariantResponseAminoMsg): _57.MsgVerifyInvariantResponse;
                toAminoMsg(message: _57.MsgVerifyInvariantResponse): _57.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _57.MsgVerifyInvariantResponseProtoMsg): _57.MsgVerifyInvariantResponse;
                toProto(message: _57.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _57.MsgVerifyInvariantResponse): _57.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _57.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgUpdateParams;
                fromPartial(object: Partial<_57.MsgUpdateParams>): _57.MsgUpdateParams;
                fromAmino(object: _57.MsgUpdateParamsAmino): _57.MsgUpdateParams;
                toAmino(message: _57.MsgUpdateParams): _57.MsgUpdateParamsAmino;
                fromAminoMsg(object: _57.MsgUpdateParamsAminoMsg): _57.MsgUpdateParams;
                toAminoMsg(message: _57.MsgUpdateParams): _57.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _57.MsgUpdateParamsProtoMsg): _57.MsgUpdateParams;
                toProto(message: _57.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _57.MsgUpdateParams): _57.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _57.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_57.MsgUpdateParamsResponse>): _57.MsgUpdateParamsResponse;
                fromAmino(_: _57.MsgUpdateParamsResponseAmino): _57.MsgUpdateParamsResponse;
                toAmino(_: _57.MsgUpdateParamsResponse): _57.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _57.MsgUpdateParamsResponseAminoMsg): _57.MsgUpdateParamsResponse;
                toAminoMsg(message: _57.MsgUpdateParamsResponse): _57.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _57.MsgUpdateParamsResponseProtoMsg): _57.MsgUpdateParamsResponse;
                toProto(message: _57.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _57.MsgUpdateParamsResponse): _57.MsgUpdateParamsResponseProtoMsg;
            };
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
        };
    }
    namespace crypto {
        const ed25519: {
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
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _59.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.BIP44Params;
                    fromPartial(object: Partial<_59.BIP44Params>): _59.BIP44Params;
                    fromAmino(object: _59.BIP44ParamsAmino): _59.BIP44Params;
                    toAmino(message: _59.BIP44Params): _59.BIP44ParamsAmino;
                    fromAminoMsg(object: _59.BIP44ParamsAminoMsg): _59.BIP44Params;
                    toAminoMsg(message: _59.BIP44Params): _59.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _59.BIP44ParamsProtoMsg): _59.BIP44Params;
                    toProto(message: _59.BIP44Params): Uint8Array;
                    toProtoMsg(message: _59.BIP44Params): _59.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _60.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Record;
                    fromPartial(object: Partial<_60.Record>): _60.Record;
                    fromAmino(object: _60.RecordAmino): _60.Record;
                    toAmino(message: _60.Record): _60.RecordAmino;
                    fromAminoMsg(object: _60.RecordAminoMsg): _60.Record;
                    toAminoMsg(message: _60.Record): _60.RecordAminoMsg;
                    fromProtoMsg(message: _60.RecordProtoMsg): _60.Record;
                    toProto(message: _60.Record): Uint8Array;
                    toProtoMsg(message: _60.Record): _60.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _60.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Record_Local;
                    fromPartial(object: Partial<_60.Record_Local>): _60.Record_Local;
                    fromAmino(object: _60.Record_LocalAmino): _60.Record_Local;
                    toAmino(message: _60.Record_Local): _60.Record_LocalAmino;
                    fromAminoMsg(object: _60.Record_LocalAminoMsg): _60.Record_Local;
                    toAminoMsg(message: _60.Record_Local): _60.Record_LocalAminoMsg;
                    fromProtoMsg(message: _60.Record_LocalProtoMsg): _60.Record_Local;
                    toProto(message: _60.Record_Local): Uint8Array;
                    toProtoMsg(message: _60.Record_Local): _60.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _60.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Record_Ledger;
                    fromPartial(object: Partial<_60.Record_Ledger>): _60.Record_Ledger;
                    fromAmino(object: _60.Record_LedgerAmino): _60.Record_Ledger;
                    toAmino(message: _60.Record_Ledger): _60.Record_LedgerAmino;
                    fromAminoMsg(object: _60.Record_LedgerAminoMsg): _60.Record_Ledger;
                    toAminoMsg(message: _60.Record_Ledger): _60.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _60.Record_LedgerProtoMsg): _60.Record_Ledger;
                    toProto(message: _60.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _60.Record_Ledger): _60.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _60.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _60.Record_Multi;
                    fromPartial(_: Partial<_60.Record_Multi>): _60.Record_Multi;
                    fromAmino(_: _60.Record_MultiAmino): _60.Record_Multi;
                    toAmino(_: _60.Record_Multi): _60.Record_MultiAmino;
                    fromAminoMsg(object: _60.Record_MultiAminoMsg): _60.Record_Multi;
                    toAminoMsg(message: _60.Record_Multi): _60.Record_MultiAminoMsg;
                    fromProtoMsg(message: _60.Record_MultiProtoMsg): _60.Record_Multi;
                    toProto(message: _60.Record_Multi): Uint8Array;
                    toProtoMsg(message: _60.Record_Multi): _60.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _60.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _60.Record_Offline;
                    fromPartial(_: Partial<_60.Record_Offline>): _60.Record_Offline;
                    fromAmino(_: _60.Record_OfflineAmino): _60.Record_Offline;
                    toAmino(_: _60.Record_Offline): _60.Record_OfflineAmino;
                    fromAminoMsg(object: _60.Record_OfflineAminoMsg): _60.Record_Offline;
                    toAminoMsg(message: _60.Record_Offline): _60.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _60.Record_OfflineProtoMsg): _60.Record_Offline;
                    toProto(message: _60.Record_Offline): Uint8Array;
                    toProtoMsg(message: _60.Record_Offline): _60.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _61.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.LegacyAminoPubKey;
                fromPartial(object: Partial<_61.LegacyAminoPubKey>): _61.LegacyAminoPubKey;
                fromAmino(object: _61.LegacyAminoPubKeyAmino): _61.LegacyAminoPubKey;
                toAmino(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _61.LegacyAminoPubKeyAminoMsg): _61.LegacyAminoPubKey;
                toAminoMsg(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _61.LegacyAminoPubKeyProtoMsg): _61.LegacyAminoPubKey;
                toProto(message: _61.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _62.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PubKey;
                fromPartial(object: Partial<_62.PubKey>): _62.PubKey;
                fromAmino(object: _62.PubKeyAmino): _62.PubKey;
                toAmino(message: _62.PubKey): _62.PubKeyAmino;
                fromAminoMsg(object: _62.PubKeyAminoMsg): _62.PubKey;
                toAminoMsg(message: _62.PubKey): _62.PubKeyAminoMsg;
                fromProtoMsg(message: _62.PubKeyProtoMsg): _62.PubKey;
                toProto(message: _62.PubKey): Uint8Array;
                toProtoMsg(message: _62.PubKey): _62.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _62.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PrivKey;
                fromPartial(object: Partial<_62.PrivKey>): _62.PrivKey;
                fromAmino(object: _62.PrivKeyAmino): _62.PrivKey;
                toAmino(message: _62.PrivKey): _62.PrivKeyAmino;
                fromAminoMsg(object: _62.PrivKeyAminoMsg): _62.PrivKey;
                toAminoMsg(message: _62.PrivKey): _62.PrivKeyAminoMsg;
                fromProtoMsg(message: _62.PrivKeyProtoMsg): _62.PrivKey;
                toProto(message: _62.PrivKey): Uint8Array;
                toProtoMsg(message: _62.PrivKey): _62.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _63.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.PubKey;
                fromPartial(object: Partial<_63.PubKey>): _63.PubKey;
                fromAmino(object: _63.PubKeyAmino): _63.PubKey;
                toAmino(message: _63.PubKey): _63.PubKeyAmino;
                fromAminoMsg(object: _63.PubKeyAminoMsg): _63.PubKey;
                toAminoMsg(message: _63.PubKey): _63.PubKeyAminoMsg;
                fromProtoMsg(message: _63.PubKeyProtoMsg): _63.PubKey;
                toProto(message: _63.PubKey): Uint8Array;
                toProtoMsg(message: _63.PubKey): _63.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _63.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.PrivKey;
                fromPartial(object: Partial<_63.PrivKey>): _63.PrivKey;
                fromAmino(object: _63.PrivKeyAmino): _63.PrivKey;
                toAmino(message: _63.PrivKey): _63.PrivKeyAmino;
                fromAminoMsg(object: _63.PrivKeyAminoMsg): _63.PrivKey;
                toAminoMsg(message: _63.PrivKey): _63.PrivKeyAminoMsg;
                fromProtoMsg(message: _63.PrivKeyProtoMsg): _63.PrivKey;
                toProto(message: _63.PrivKey): Uint8Array;
                toProtoMsg(message: _63.PrivKey): _63.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
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
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                validatorDistributionInfo(request: _67.QueryValidatorDistributionInfoRequest): Promise<_67.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _67.QueryValidatorOutstandingRewardsRequest): Promise<_67.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _67.QueryValidatorCommissionRequest): Promise<_67.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _67.QueryValidatorSlashesRequest): Promise<_67.QueryValidatorSlashesResponse>;
                delegationRewards(request: _67.QueryDelegationRewardsRequest): Promise<_67.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _67.QueryDelegationTotalRewardsRequest): Promise<_67.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _67.QueryDelegatorWithdrawAddressRequest): Promise<_67.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _67.QueryCommunityPoolRequest): Promise<_67.QueryCommunityPoolResponse>;
                tokenizeShareRecordReward(request: _67.QueryTokenizeShareRecordRewardRequest): Promise<_67.QueryTokenizeShareRecordRewardResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _68.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _68.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawTokenizeShareRecordReward(value: _68.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _68.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                    updateParams(value: _68.MsgUpdateParams): {
                        typeUrl: string;
                        value: _68.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _68.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _68.MsgCommunityPoolSpend;
                    };
                    withdrawTokenizeShareRecordReward(value: _68.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _68.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _68.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _68.MsgCommunityPoolSpend;
                    };
                    withdrawTokenizeShareRecordReward(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _68.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _68.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _68.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _68.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _68.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _68.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _68.MsgFundCommunityPool;
                    };
                    updateParams(value: _68.MsgUpdateParams): {
                        typeUrl: string;
                        value: _68.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _68.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _68.MsgCommunityPoolSpend;
                    };
                    withdrawTokenizeShareRecordReward(value: _68.MsgWithdrawTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawTokenizeShareRecordReward;
                    };
                    withdrawAllTokenizeShareRecordReward(value: _68.MsgWithdrawAllTokenizeShareRecordReward): {
                        typeUrl: string;
                        value: _68.MsgWithdrawAllTokenizeShareRecordReward;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSetWithdrawAddress) => _68.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _68.MsgSetWithdrawAddressAmino) => _68.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _68.MsgWithdrawDelegatorReward) => _68.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _68.MsgWithdrawDelegatorRewardAmino) => _68.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _68.MsgWithdrawValidatorCommission) => _68.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _68.MsgWithdrawValidatorCommissionAmino) => _68.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _68.MsgFundCommunityPool) => _68.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _68.MsgFundCommunityPoolAmino) => _68.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _68.MsgUpdateParams) => _68.MsgUpdateParamsAmino;
                    fromAmino: (object: _68.MsgUpdateParamsAmino) => _68.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _68.MsgCommunityPoolSpend) => _68.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _68.MsgCommunityPoolSpendAmino) => _68.MsgCommunityPoolSpend;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _68.MsgWithdrawTokenizeShareRecordReward) => _68.MsgWithdrawTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _68.MsgWithdrawTokenizeShareRecordRewardAmino) => _68.MsgWithdrawTokenizeShareRecordReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
                    aminoType: string;
                    toAmino: (message: _68.MsgWithdrawAllTokenizeShareRecordReward) => _68.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                    fromAmino: (object: _68.MsgWithdrawAllTokenizeShareRecordRewardAmino) => _68.MsgWithdrawAllTokenizeShareRecordReward;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _68.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_68.MsgSetWithdrawAddress>): _68.MsgSetWithdrawAddress;
                fromAmino(object: _68.MsgSetWithdrawAddressAmino): _68.MsgSetWithdrawAddress;
                toAmino(message: _68.MsgSetWithdrawAddress): _68.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _68.MsgSetWithdrawAddressAminoMsg): _68.MsgSetWithdrawAddress;
                toAminoMsg(message: _68.MsgSetWithdrawAddress): _68.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _68.MsgSetWithdrawAddressProtoMsg): _68.MsgSetWithdrawAddress;
                toProto(message: _68.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _68.MsgSetWithdrawAddress): _68.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _68.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_68.MsgSetWithdrawAddressResponse>): _68.MsgSetWithdrawAddressResponse;
                fromAmino(_: _68.MsgSetWithdrawAddressResponseAmino): _68.MsgSetWithdrawAddressResponse;
                toAmino(_: _68.MsgSetWithdrawAddressResponse): _68.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _68.MsgSetWithdrawAddressResponseAminoMsg): _68.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _68.MsgSetWithdrawAddressResponse): _68.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSetWithdrawAddressResponseProtoMsg): _68.MsgSetWithdrawAddressResponse;
                toProto(message: _68.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSetWithdrawAddressResponse): _68.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_68.MsgWithdrawDelegatorReward>): _68.MsgWithdrawDelegatorReward;
                fromAmino(object: _68.MsgWithdrawDelegatorRewardAmino): _68.MsgWithdrawDelegatorReward;
                toAmino(message: _68.MsgWithdrawDelegatorReward): _68.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _68.MsgWithdrawDelegatorRewardAminoMsg): _68.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _68.MsgWithdrawDelegatorReward): _68.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawDelegatorRewardProtoMsg): _68.MsgWithdrawDelegatorReward;
                toProto(message: _68.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawDelegatorReward): _68.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_68.MsgWithdrawDelegatorRewardResponse>): _68.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _68.MsgWithdrawDelegatorRewardResponseAmino): _68.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _68.MsgWithdrawDelegatorRewardResponse): _68.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _68.MsgWithdrawDelegatorRewardResponseAminoMsg): _68.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _68.MsgWithdrawDelegatorRewardResponse): _68.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawDelegatorRewardResponseProtoMsg): _68.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _68.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawDelegatorRewardResponse): _68.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_68.MsgWithdrawValidatorCommission>): _68.MsgWithdrawValidatorCommission;
                fromAmino(object: _68.MsgWithdrawValidatorCommissionAmino): _68.MsgWithdrawValidatorCommission;
                toAmino(message: _68.MsgWithdrawValidatorCommission): _68.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _68.MsgWithdrawValidatorCommissionAminoMsg): _68.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _68.MsgWithdrawValidatorCommission): _68.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawValidatorCommissionProtoMsg): _68.MsgWithdrawValidatorCommission;
                toProto(message: _68.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawValidatorCommission): _68.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_68.MsgWithdrawValidatorCommissionResponse>): _68.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _68.MsgWithdrawValidatorCommissionResponseAmino): _68.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _68.MsgWithdrawValidatorCommissionResponse): _68.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _68.MsgWithdrawValidatorCommissionResponseAminoMsg): _68.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _68.MsgWithdrawValidatorCommissionResponse): _68.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawValidatorCommissionResponseProtoMsg): _68.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _68.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawValidatorCommissionResponse): _68.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _68.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgFundCommunityPool;
                fromPartial(object: Partial<_68.MsgFundCommunityPool>): _68.MsgFundCommunityPool;
                fromAmino(object: _68.MsgFundCommunityPoolAmino): _68.MsgFundCommunityPool;
                toAmino(message: _68.MsgFundCommunityPool): _68.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _68.MsgFundCommunityPoolAminoMsg): _68.MsgFundCommunityPool;
                toAminoMsg(message: _68.MsgFundCommunityPool): _68.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _68.MsgFundCommunityPoolProtoMsg): _68.MsgFundCommunityPool;
                toProto(message: _68.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _68.MsgFundCommunityPool): _68.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _68.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_68.MsgFundCommunityPoolResponse>): _68.MsgFundCommunityPoolResponse;
                fromAmino(_: _68.MsgFundCommunityPoolResponseAmino): _68.MsgFundCommunityPoolResponse;
                toAmino(_: _68.MsgFundCommunityPoolResponse): _68.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _68.MsgFundCommunityPoolResponseAminoMsg): _68.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _68.MsgFundCommunityPoolResponse): _68.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _68.MsgFundCommunityPoolResponseProtoMsg): _68.MsgFundCommunityPoolResponse;
                toProto(message: _68.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _68.MsgFundCommunityPoolResponse): _68.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _68.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgUpdateParams;
                fromPartial(object: Partial<_68.MsgUpdateParams>): _68.MsgUpdateParams;
                fromAmino(object: _68.MsgUpdateParamsAmino): _68.MsgUpdateParams;
                toAmino(message: _68.MsgUpdateParams): _68.MsgUpdateParamsAmino;
                fromAminoMsg(object: _68.MsgUpdateParamsAminoMsg): _68.MsgUpdateParams;
                toAminoMsg(message: _68.MsgUpdateParams): _68.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _68.MsgUpdateParamsProtoMsg): _68.MsgUpdateParams;
                toProto(message: _68.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _68.MsgUpdateParams): _68.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _68.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_68.MsgUpdateParamsResponse>): _68.MsgUpdateParamsResponse;
                fromAmino(_: _68.MsgUpdateParamsResponseAmino): _68.MsgUpdateParamsResponse;
                toAmino(_: _68.MsgUpdateParamsResponse): _68.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _68.MsgUpdateParamsResponseAminoMsg): _68.MsgUpdateParamsResponse;
                toAminoMsg(message: _68.MsgUpdateParamsResponse): _68.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _68.MsgUpdateParamsResponseProtoMsg): _68.MsgUpdateParamsResponse;
                toProto(message: _68.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _68.MsgUpdateParamsResponse): _68.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _68.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_68.MsgCommunityPoolSpend>): _68.MsgCommunityPoolSpend;
                fromAmino(object: _68.MsgCommunityPoolSpendAmino): _68.MsgCommunityPoolSpend;
                toAmino(message: _68.MsgCommunityPoolSpend): _68.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _68.MsgCommunityPoolSpendAminoMsg): _68.MsgCommunityPoolSpend;
                toAminoMsg(message: _68.MsgCommunityPoolSpend): _68.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _68.MsgCommunityPoolSpendProtoMsg): _68.MsgCommunityPoolSpend;
                toProto(message: _68.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _68.MsgCommunityPoolSpend): _68.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _68.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_68.MsgCommunityPoolSpendResponse>): _68.MsgCommunityPoolSpendResponse;
                fromAmino(_: _68.MsgCommunityPoolSpendResponseAmino): _68.MsgCommunityPoolSpendResponse;
                toAmino(_: _68.MsgCommunityPoolSpendResponse): _68.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _68.MsgCommunityPoolSpendResponseAminoMsg): _68.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _68.MsgCommunityPoolSpendResponse): _68.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _68.MsgCommunityPoolSpendResponseProtoMsg): _68.MsgCommunityPoolSpendResponse;
                toProto(message: _68.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _68.MsgCommunityPoolSpendResponse): _68.MsgCommunityPoolSpendResponseProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawTokenizeShareRecordReward;
                fromPartial(object: Partial<_68.MsgWithdrawTokenizeShareRecordReward>): _68.MsgWithdrawTokenizeShareRecordReward;
                fromAmino(object: _68.MsgWithdrawTokenizeShareRecordRewardAmino): _68.MsgWithdrawTokenizeShareRecordReward;
                toAmino(message: _68.MsgWithdrawTokenizeShareRecordReward): _68.MsgWithdrawTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _68.MsgWithdrawTokenizeShareRecordRewardAminoMsg): _68.MsgWithdrawTokenizeShareRecordReward;
                toAminoMsg(message: _68.MsgWithdrawTokenizeShareRecordReward): _68.MsgWithdrawTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawTokenizeShareRecordRewardProtoMsg): _68.MsgWithdrawTokenizeShareRecordReward;
                toProto(message: _68.MsgWithdrawTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawTokenizeShareRecordReward): _68.MsgWithdrawTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _68.MsgWithdrawTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_68.MsgWithdrawTokenizeShareRecordRewardResponse>): _68.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromAmino(_: _68.MsgWithdrawTokenizeShareRecordRewardResponseAmino): _68.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAmino(_: _68.MsgWithdrawTokenizeShareRecordRewardResponse): _68.MsgWithdrawTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _68.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): _68.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _68.MsgWithdrawTokenizeShareRecordRewardResponse): _68.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): _68.MsgWithdrawTokenizeShareRecordRewardResponse;
                toProto(message: _68.MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawTokenizeShareRecordRewardResponse): _68.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _68.MsgWithdrawAllTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgWithdrawAllTokenizeShareRecordReward;
                fromPartial(object: Partial<_68.MsgWithdrawAllTokenizeShareRecordReward>): _68.MsgWithdrawAllTokenizeShareRecordReward;
                fromAmino(object: _68.MsgWithdrawAllTokenizeShareRecordRewardAmino): _68.MsgWithdrawAllTokenizeShareRecordReward;
                toAmino(message: _68.MsgWithdrawAllTokenizeShareRecordReward): _68.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _68.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): _68.MsgWithdrawAllTokenizeShareRecordReward;
                toAminoMsg(message: _68.MsgWithdrawAllTokenizeShareRecordReward): _68.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): _68.MsgWithdrawAllTokenizeShareRecordReward;
                toProto(message: _68.MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawAllTokenizeShareRecordReward): _68.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _68.MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_68.MsgWithdrawAllTokenizeShareRecordRewardResponse>): _68.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromAmino(_: _68.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): _68.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAmino(_: _68.MsgWithdrawAllTokenizeShareRecordRewardResponse): _68.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _68.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): _68.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _68.MsgWithdrawAllTokenizeShareRecordRewardResponse): _68.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _68.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): _68.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toProto(message: _68.MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _68.MsgWithdrawAllTokenizeShareRecordRewardResponse): _68.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _67.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryParamsRequest;
                fromPartial(_: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
                fromAmino(_: _67.QueryParamsRequestAmino): _67.QueryParamsRequest;
                toAmino(_: _67.QueryParamsRequest): _67.QueryParamsRequestAmino;
                fromAminoMsg(object: _67.QueryParamsRequestAminoMsg): _67.QueryParamsRequest;
                toAminoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryParamsRequestProtoMsg): _67.QueryParamsRequest;
                toProto(message: _67.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _67.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryParamsResponse;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
                fromAmino(object: _67.QueryParamsResponseAmino): _67.QueryParamsResponse;
                toAmino(message: _67.QueryParamsResponse): _67.QueryParamsResponseAmino;
                fromAminoMsg(object: _67.QueryParamsResponseAminoMsg): _67.QueryParamsResponse;
                toAminoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryParamsResponseProtoMsg): _67.QueryParamsResponse;
                toProto(message: _67.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_67.QueryValidatorDistributionInfoRequest>): _67.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _67.QueryValidatorDistributionInfoRequestAmino): _67.QueryValidatorDistributionInfoRequest;
                toAmino(message: _67.QueryValidatorDistributionInfoRequest): _67.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorDistributionInfoRequestAminoMsg): _67.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _67.QueryValidatorDistributionInfoRequest): _67.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorDistributionInfoRequestProtoMsg): _67.QueryValidatorDistributionInfoRequest;
                toProto(message: _67.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorDistributionInfoRequest): _67.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_67.QueryValidatorDistributionInfoResponse>): _67.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _67.QueryValidatorDistributionInfoResponseAmino): _67.QueryValidatorDistributionInfoResponse;
                toAmino(message: _67.QueryValidatorDistributionInfoResponse): _67.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorDistributionInfoResponseAminoMsg): _67.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _67.QueryValidatorDistributionInfoResponse): _67.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorDistributionInfoResponseProtoMsg): _67.QueryValidatorDistributionInfoResponse;
                toProto(message: _67.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorDistributionInfoResponse): _67.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_67.QueryValidatorOutstandingRewardsRequest>): _67.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _67.QueryValidatorOutstandingRewardsRequestAmino): _67.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _67.QueryValidatorOutstandingRewardsRequest): _67.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorOutstandingRewardsRequestAminoMsg): _67.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _67.QueryValidatorOutstandingRewardsRequest): _67.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorOutstandingRewardsRequestProtoMsg): _67.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _67.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorOutstandingRewardsRequest): _67.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_67.QueryValidatorOutstandingRewardsResponse>): _67.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _67.QueryValidatorOutstandingRewardsResponseAmino): _67.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _67.QueryValidatorOutstandingRewardsResponse): _67.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorOutstandingRewardsResponseAminoMsg): _67.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _67.QueryValidatorOutstandingRewardsResponse): _67.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorOutstandingRewardsResponseProtoMsg): _67.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _67.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorOutstandingRewardsResponse): _67.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_67.QueryValidatorCommissionRequest>): _67.QueryValidatorCommissionRequest;
                fromAmino(object: _67.QueryValidatorCommissionRequestAmino): _67.QueryValidatorCommissionRequest;
                toAmino(message: _67.QueryValidatorCommissionRequest): _67.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorCommissionRequestAminoMsg): _67.QueryValidatorCommissionRequest;
                toAminoMsg(message: _67.QueryValidatorCommissionRequest): _67.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorCommissionRequestProtoMsg): _67.QueryValidatorCommissionRequest;
                toProto(message: _67.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorCommissionRequest): _67.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_67.QueryValidatorCommissionResponse>): _67.QueryValidatorCommissionResponse;
                fromAmino(object: _67.QueryValidatorCommissionResponseAmino): _67.QueryValidatorCommissionResponse;
                toAmino(message: _67.QueryValidatorCommissionResponse): _67.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorCommissionResponseAminoMsg): _67.QueryValidatorCommissionResponse;
                toAminoMsg(message: _67.QueryValidatorCommissionResponse): _67.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorCommissionResponseProtoMsg): _67.QueryValidatorCommissionResponse;
                toProto(message: _67.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorCommissionResponse): _67.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _67.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_67.QueryValidatorSlashesRequest>): _67.QueryValidatorSlashesRequest;
                fromAmino(object: _67.QueryValidatorSlashesRequestAmino): _67.QueryValidatorSlashesRequest;
                toAmino(message: _67.QueryValidatorSlashesRequest): _67.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _67.QueryValidatorSlashesRequestAminoMsg): _67.QueryValidatorSlashesRequest;
                toAminoMsg(message: _67.QueryValidatorSlashesRequest): _67.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorSlashesRequestProtoMsg): _67.QueryValidatorSlashesRequest;
                toProto(message: _67.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorSlashesRequest): _67.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _67.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_67.QueryValidatorSlashesResponse>): _67.QueryValidatorSlashesResponse;
                fromAmino(object: _67.QueryValidatorSlashesResponseAmino): _67.QueryValidatorSlashesResponse;
                toAmino(message: _67.QueryValidatorSlashesResponse): _67.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _67.QueryValidatorSlashesResponseAminoMsg): _67.QueryValidatorSlashesResponse;
                toAminoMsg(message: _67.QueryValidatorSlashesResponse): _67.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _67.QueryValidatorSlashesResponseProtoMsg): _67.QueryValidatorSlashesResponse;
                toProto(message: _67.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _67.QueryValidatorSlashesResponse): _67.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_67.QueryDelegationRewardsRequest>): _67.QueryDelegationRewardsRequest;
                fromAmino(object: _67.QueryDelegationRewardsRequestAmino): _67.QueryDelegationRewardsRequest;
                toAmino(message: _67.QueryDelegationRewardsRequest): _67.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegationRewardsRequestAminoMsg): _67.QueryDelegationRewardsRequest;
                toAminoMsg(message: _67.QueryDelegationRewardsRequest): _67.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationRewardsRequestProtoMsg): _67.QueryDelegationRewardsRequest;
                toProto(message: _67.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationRewardsRequest): _67.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_67.QueryDelegationRewardsResponse>): _67.QueryDelegationRewardsResponse;
                fromAmino(object: _67.QueryDelegationRewardsResponseAmino): _67.QueryDelegationRewardsResponse;
                toAmino(message: _67.QueryDelegationRewardsResponse): _67.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegationRewardsResponseAminoMsg): _67.QueryDelegationRewardsResponse;
                toAminoMsg(message: _67.QueryDelegationRewardsResponse): _67.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationRewardsResponseProtoMsg): _67.QueryDelegationRewardsResponse;
                toProto(message: _67.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationRewardsResponse): _67.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_67.QueryDelegationTotalRewardsRequest>): _67.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _67.QueryDelegationTotalRewardsRequestAmino): _67.QueryDelegationTotalRewardsRequest;
                toAmino(message: _67.QueryDelegationTotalRewardsRequest): _67.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegationTotalRewardsRequestAminoMsg): _67.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _67.QueryDelegationTotalRewardsRequest): _67.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationTotalRewardsRequestProtoMsg): _67.QueryDelegationTotalRewardsRequest;
                toProto(message: _67.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationTotalRewardsRequest): _67.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_67.QueryDelegationTotalRewardsResponse>): _67.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _67.QueryDelegationTotalRewardsResponseAmino): _67.QueryDelegationTotalRewardsResponse;
                toAmino(message: _67.QueryDelegationTotalRewardsResponse): _67.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegationTotalRewardsResponseAminoMsg): _67.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _67.QueryDelegationTotalRewardsResponse): _67.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegationTotalRewardsResponseProtoMsg): _67.QueryDelegationTotalRewardsResponse;
                toProto(message: _67.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegationTotalRewardsResponse): _67.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsRequest>): _67.QueryDelegatorValidatorsRequest;
                fromAmino(object: _67.QueryDelegatorValidatorsRequestAmino): _67.QueryDelegatorValidatorsRequest;
                toAmino(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorsRequestAminoMsg): _67.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorsRequestProtoMsg): _67.QueryDelegatorValidatorsRequest;
                toProto(message: _67.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorsRequest): _67.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_67.QueryDelegatorValidatorsResponse>): _67.QueryDelegatorValidatorsResponse;
                fromAmino(object: _67.QueryDelegatorValidatorsResponseAmino): _67.QueryDelegatorValidatorsResponse;
                toAmino(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorValidatorsResponseAminoMsg): _67.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorValidatorsResponseProtoMsg): _67.QueryDelegatorValidatorsResponse;
                toProto(message: _67.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorValidatorsResponse): _67.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_67.QueryDelegatorWithdrawAddressRequest>): _67.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _67.QueryDelegatorWithdrawAddressRequestAmino): _67.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _67.QueryDelegatorWithdrawAddressRequest): _67.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _67.QueryDelegatorWithdrawAddressRequestAminoMsg): _67.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _67.QueryDelegatorWithdrawAddressRequest): _67.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorWithdrawAddressRequestProtoMsg): _67.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _67.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorWithdrawAddressRequest): _67.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _67.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_67.QueryDelegatorWithdrawAddressResponse>): _67.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _67.QueryDelegatorWithdrawAddressResponseAmino): _67.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _67.QueryDelegatorWithdrawAddressResponse): _67.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _67.QueryDelegatorWithdrawAddressResponseAminoMsg): _67.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _67.QueryDelegatorWithdrawAddressResponse): _67.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDelegatorWithdrawAddressResponseProtoMsg): _67.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _67.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDelegatorWithdrawAddressResponse): _67.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _67.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_67.QueryCommunityPoolRequest>): _67.QueryCommunityPoolRequest;
                fromAmino(_: _67.QueryCommunityPoolRequestAmino): _67.QueryCommunityPoolRequest;
                toAmino(_: _67.QueryCommunityPoolRequest): _67.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _67.QueryCommunityPoolRequestAminoMsg): _67.QueryCommunityPoolRequest;
                toAminoMsg(message: _67.QueryCommunityPoolRequest): _67.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _67.QueryCommunityPoolRequestProtoMsg): _67.QueryCommunityPoolRequest;
                toProto(message: _67.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _67.QueryCommunityPoolRequest): _67.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _67.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_67.QueryCommunityPoolResponse>): _67.QueryCommunityPoolResponse;
                fromAmino(object: _67.QueryCommunityPoolResponseAmino): _67.QueryCommunityPoolResponse;
                toAmino(message: _67.QueryCommunityPoolResponse): _67.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _67.QueryCommunityPoolResponseAminoMsg): _67.QueryCommunityPoolResponse;
                toAminoMsg(message: _67.QueryCommunityPoolResponse): _67.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _67.QueryCommunityPoolResponseProtoMsg): _67.QueryCommunityPoolResponse;
                toProto(message: _67.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _67.QueryCommunityPoolResponse): _67.QueryCommunityPoolResponseProtoMsg;
            };
            QueryTokenizeShareRecordRewardRequest: {
                typeUrl: string;
                encode(message: _67.QueryTokenizeShareRecordRewardRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryTokenizeShareRecordRewardRequest;
                fromPartial(object: Partial<_67.QueryTokenizeShareRecordRewardRequest>): _67.QueryTokenizeShareRecordRewardRequest;
                fromAmino(object: _67.QueryTokenizeShareRecordRewardRequestAmino): _67.QueryTokenizeShareRecordRewardRequest;
                toAmino(message: _67.QueryTokenizeShareRecordRewardRequest): _67.QueryTokenizeShareRecordRewardRequestAmino;
                fromAminoMsg(object: _67.QueryTokenizeShareRecordRewardRequestAminoMsg): _67.QueryTokenizeShareRecordRewardRequest;
                toAminoMsg(message: _67.QueryTokenizeShareRecordRewardRequest): _67.QueryTokenizeShareRecordRewardRequestAminoMsg;
                fromProtoMsg(message: _67.QueryTokenizeShareRecordRewardRequestProtoMsg): _67.QueryTokenizeShareRecordRewardRequest;
                toProto(message: _67.QueryTokenizeShareRecordRewardRequest): Uint8Array;
                toProtoMsg(message: _67.QueryTokenizeShareRecordRewardRequest): _67.QueryTokenizeShareRecordRewardRequestProtoMsg;
            };
            QueryTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(message: _67.QueryTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryTokenizeShareRecordRewardResponse;
                fromPartial(object: Partial<_67.QueryTokenizeShareRecordRewardResponse>): _67.QueryTokenizeShareRecordRewardResponse;
                fromAmino(object: _67.QueryTokenizeShareRecordRewardResponseAmino): _67.QueryTokenizeShareRecordRewardResponse;
                toAmino(message: _67.QueryTokenizeShareRecordRewardResponse): _67.QueryTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _67.QueryTokenizeShareRecordRewardResponseAminoMsg): _67.QueryTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _67.QueryTokenizeShareRecordRewardResponse): _67.QueryTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _67.QueryTokenizeShareRecordRewardResponseProtoMsg): _67.QueryTokenizeShareRecordRewardResponse;
                toProto(message: _67.QueryTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _67.QueryTokenizeShareRecordRewardResponse): _67.QueryTokenizeShareRecordRewardResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _66.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_66.DelegatorWithdrawInfo>): _66.DelegatorWithdrawInfo;
                fromAmino(object: _66.DelegatorWithdrawInfoAmino): _66.DelegatorWithdrawInfo;
                toAmino(message: _66.DelegatorWithdrawInfo): _66.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _66.DelegatorWithdrawInfoAminoMsg): _66.DelegatorWithdrawInfo;
                toAminoMsg(message: _66.DelegatorWithdrawInfo): _66.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _66.DelegatorWithdrawInfoProtoMsg): _66.DelegatorWithdrawInfo;
                toProto(message: _66.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _66.DelegatorWithdrawInfo): _66.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorOutstandingRewardsRecord>): _66.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _66.ValidatorOutstandingRewardsRecordAmino): _66.ValidatorOutstandingRewardsRecord;
                toAmino(message: _66.ValidatorOutstandingRewardsRecord): _66.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _66.ValidatorOutstandingRewardsRecordAminoMsg): _66.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _66.ValidatorOutstandingRewardsRecord): _66.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorOutstandingRewardsRecordProtoMsg): _66.ValidatorOutstandingRewardsRecord;
                toProto(message: _66.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorOutstandingRewardsRecord): _66.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_66.ValidatorAccumulatedCommissionRecord>): _66.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _66.ValidatorAccumulatedCommissionRecordAmino): _66.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _66.ValidatorAccumulatedCommissionRecord): _66.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _66.ValidatorAccumulatedCommissionRecordAminoMsg): _66.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _66.ValidatorAccumulatedCommissionRecord): _66.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorAccumulatedCommissionRecordProtoMsg): _66.ValidatorAccumulatedCommissionRecord;
                toProto(message: _66.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorAccumulatedCommissionRecord): _66.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorHistoricalRewardsRecord>): _66.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _66.ValidatorHistoricalRewardsRecordAmino): _66.ValidatorHistoricalRewardsRecord;
                toAmino(message: _66.ValidatorHistoricalRewardsRecord): _66.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _66.ValidatorHistoricalRewardsRecordAminoMsg): _66.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _66.ValidatorHistoricalRewardsRecord): _66.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorHistoricalRewardsRecordProtoMsg): _66.ValidatorHistoricalRewardsRecord;
                toProto(message: _66.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorHistoricalRewardsRecord): _66.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_66.ValidatorCurrentRewardsRecord>): _66.ValidatorCurrentRewardsRecord;
                fromAmino(object: _66.ValidatorCurrentRewardsRecordAmino): _66.ValidatorCurrentRewardsRecord;
                toAmino(message: _66.ValidatorCurrentRewardsRecord): _66.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _66.ValidatorCurrentRewardsRecordAminoMsg): _66.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _66.ValidatorCurrentRewardsRecord): _66.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorCurrentRewardsRecordProtoMsg): _66.ValidatorCurrentRewardsRecord;
                toProto(message: _66.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorCurrentRewardsRecord): _66.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _66.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_66.DelegatorStartingInfoRecord>): _66.DelegatorStartingInfoRecord;
                fromAmino(object: _66.DelegatorStartingInfoRecordAmino): _66.DelegatorStartingInfoRecord;
                toAmino(message: _66.DelegatorStartingInfoRecord): _66.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _66.DelegatorStartingInfoRecordAminoMsg): _66.DelegatorStartingInfoRecord;
                toAminoMsg(message: _66.DelegatorStartingInfoRecord): _66.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _66.DelegatorStartingInfoRecordProtoMsg): _66.DelegatorStartingInfoRecord;
                toProto(message: _66.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _66.DelegatorStartingInfoRecord): _66.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _66.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_66.ValidatorSlashEventRecord>): _66.ValidatorSlashEventRecord;
                fromAmino(object: _66.ValidatorSlashEventRecordAmino): _66.ValidatorSlashEventRecord;
                toAmino(message: _66.ValidatorSlashEventRecord): _66.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _66.ValidatorSlashEventRecordAminoMsg): _66.ValidatorSlashEventRecord;
                toAminoMsg(message: _66.ValidatorSlashEventRecord): _66.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _66.ValidatorSlashEventRecordProtoMsg): _66.ValidatorSlashEventRecord;
                toProto(message: _66.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _66.ValidatorSlashEventRecord): _66.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _66.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GenesisState;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
                fromAmino(object: _66.GenesisStateAmino): _66.GenesisState;
                toAmino(message: _66.GenesisState): _66.GenesisStateAmino;
                fromAminoMsg(object: _66.GenesisStateAminoMsg): _66.GenesisState;
                toAminoMsg(message: _66.GenesisState): _66.GenesisStateAminoMsg;
                fromProtoMsg(message: _66.GenesisStateProtoMsg): _66.GenesisState;
                toProto(message: _66.GenesisState): Uint8Array;
                toProtoMsg(message: _66.GenesisState): _66.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _65.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
                fromAmino(object: _65.ParamsAmino): _65.Params;
                toAmino(message: _65.Params): _65.ParamsAmino;
                fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                toProto(message: _65.Params): Uint8Array;
                toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _65.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_65.ValidatorHistoricalRewards>): _65.ValidatorHistoricalRewards;
                fromAmino(object: _65.ValidatorHistoricalRewardsAmino): _65.ValidatorHistoricalRewards;
                toAmino(message: _65.ValidatorHistoricalRewards): _65.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _65.ValidatorHistoricalRewardsAminoMsg): _65.ValidatorHistoricalRewards;
                toAminoMsg(message: _65.ValidatorHistoricalRewards): _65.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _65.ValidatorHistoricalRewardsProtoMsg): _65.ValidatorHistoricalRewards;
                toProto(message: _65.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _65.ValidatorHistoricalRewards): _65.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _65.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorCurrentRewards;
                fromPartial(object: Partial<_65.ValidatorCurrentRewards>): _65.ValidatorCurrentRewards;
                fromAmino(object: _65.ValidatorCurrentRewardsAmino): _65.ValidatorCurrentRewards;
                toAmino(message: _65.ValidatorCurrentRewards): _65.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _65.ValidatorCurrentRewardsAminoMsg): _65.ValidatorCurrentRewards;
                toAminoMsg(message: _65.ValidatorCurrentRewards): _65.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _65.ValidatorCurrentRewardsProtoMsg): _65.ValidatorCurrentRewards;
                toProto(message: _65.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _65.ValidatorCurrentRewards): _65.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _65.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_65.ValidatorAccumulatedCommission>): _65.ValidatorAccumulatedCommission;
                fromAmino(object: _65.ValidatorAccumulatedCommissionAmino): _65.ValidatorAccumulatedCommission;
                toAmino(message: _65.ValidatorAccumulatedCommission): _65.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _65.ValidatorAccumulatedCommissionAminoMsg): _65.ValidatorAccumulatedCommission;
                toAminoMsg(message: _65.ValidatorAccumulatedCommission): _65.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _65.ValidatorAccumulatedCommissionProtoMsg): _65.ValidatorAccumulatedCommission;
                toProto(message: _65.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _65.ValidatorAccumulatedCommission): _65.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _65.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_65.ValidatorOutstandingRewards>): _65.ValidatorOutstandingRewards;
                fromAmino(object: _65.ValidatorOutstandingRewardsAmino): _65.ValidatorOutstandingRewards;
                toAmino(message: _65.ValidatorOutstandingRewards): _65.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _65.ValidatorOutstandingRewardsAminoMsg): _65.ValidatorOutstandingRewards;
                toAminoMsg(message: _65.ValidatorOutstandingRewards): _65.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _65.ValidatorOutstandingRewardsProtoMsg): _65.ValidatorOutstandingRewards;
                toProto(message: _65.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _65.ValidatorOutstandingRewards): _65.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _65.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorSlashEvent;
                fromPartial(object: Partial<_65.ValidatorSlashEvent>): _65.ValidatorSlashEvent;
                fromAmino(object: _65.ValidatorSlashEventAmino): _65.ValidatorSlashEvent;
                toAmino(message: _65.ValidatorSlashEvent): _65.ValidatorSlashEventAmino;
                fromAminoMsg(object: _65.ValidatorSlashEventAminoMsg): _65.ValidatorSlashEvent;
                toAminoMsg(message: _65.ValidatorSlashEvent): _65.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _65.ValidatorSlashEventProtoMsg): _65.ValidatorSlashEvent;
                toProto(message: _65.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _65.ValidatorSlashEvent): _65.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _65.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorSlashEvents;
                fromPartial(object: Partial<_65.ValidatorSlashEvents>): _65.ValidatorSlashEvents;
                fromAmino(object: _65.ValidatorSlashEventsAmino): _65.ValidatorSlashEvents;
                toAmino(message: _65.ValidatorSlashEvents): _65.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _65.ValidatorSlashEventsAminoMsg): _65.ValidatorSlashEvents;
                toAminoMsg(message: _65.ValidatorSlashEvents): _65.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _65.ValidatorSlashEventsProtoMsg): _65.ValidatorSlashEvents;
                toProto(message: _65.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _65.ValidatorSlashEvents): _65.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _65.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.FeePool;
                fromPartial(object: Partial<_65.FeePool>): _65.FeePool;
                fromAmino(object: _65.FeePoolAmino): _65.FeePool;
                toAmino(message: _65.FeePool): _65.FeePoolAmino;
                fromAminoMsg(object: _65.FeePoolAminoMsg): _65.FeePool;
                toAminoMsg(message: _65.FeePool): _65.FeePoolAminoMsg;
                fromProtoMsg(message: _65.FeePoolProtoMsg): _65.FeePool;
                toProto(message: _65.FeePool): Uint8Array;
                toProtoMsg(message: _65.FeePool): _65.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _65.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_65.CommunityPoolSpendProposal>): _65.CommunityPoolSpendProposal;
                fromAmino(object: _65.CommunityPoolSpendProposalAmino): _65.CommunityPoolSpendProposal;
                toAmino(message: _65.CommunityPoolSpendProposal): _65.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _65.CommunityPoolSpendProposalAminoMsg): _65.CommunityPoolSpendProposal;
                toAminoMsg(message: _65.CommunityPoolSpendProposal): _65.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _65.CommunityPoolSpendProposalProtoMsg): _65.CommunityPoolSpendProposal;
                toProto(message: _65.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _65.CommunityPoolSpendProposal): _65.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _65.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegatorStartingInfo;
                fromPartial(object: Partial<_65.DelegatorStartingInfo>): _65.DelegatorStartingInfo;
                fromAmino(object: _65.DelegatorStartingInfoAmino): _65.DelegatorStartingInfo;
                toAmino(message: _65.DelegatorStartingInfo): _65.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _65.DelegatorStartingInfoAminoMsg): _65.DelegatorStartingInfo;
                toAminoMsg(message: _65.DelegatorStartingInfo): _65.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _65.DelegatorStartingInfoProtoMsg): _65.DelegatorStartingInfo;
                toProto(message: _65.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _65.DelegatorStartingInfo): _65.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _65.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegationDelegatorReward;
                fromPartial(object: Partial<_65.DelegationDelegatorReward>): _65.DelegationDelegatorReward;
                fromAmino(object: _65.DelegationDelegatorRewardAmino): _65.DelegationDelegatorReward;
                toAmino(message: _65.DelegationDelegatorReward): _65.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _65.DelegationDelegatorRewardAminoMsg): _65.DelegationDelegatorReward;
                toAminoMsg(message: _65.DelegationDelegatorReward): _65.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _65.DelegationDelegatorRewardProtoMsg): _65.DelegationDelegatorReward;
                toProto(message: _65.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _65.DelegationDelegatorReward): _65.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _65.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_65.CommunityPoolSpendProposalWithDeposit>): _65.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _65.CommunityPoolSpendProposalWithDepositAmino): _65.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _65.CommunityPoolSpendProposalWithDeposit): _65.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _65.CommunityPoolSpendProposalWithDepositAminoMsg): _65.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _65.CommunityPoolSpendProposalWithDeposit): _65.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _65.CommunityPoolSpendProposalWithDepositProtoMsg): _65.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _65.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _65.CommunityPoolSpendProposalWithDeposit): _65.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
            TokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _65.TokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.TokenizeShareRecordReward;
                fromPartial(object: Partial<_65.TokenizeShareRecordReward>): _65.TokenizeShareRecordReward;
                fromAmino(object: _65.TokenizeShareRecordRewardAmino): _65.TokenizeShareRecordReward;
                toAmino(message: _65.TokenizeShareRecordReward): _65.TokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _65.TokenizeShareRecordRewardAminoMsg): _65.TokenizeShareRecordReward;
                toAminoMsg(message: _65.TokenizeShareRecordReward): _65.TokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _65.TokenizeShareRecordRewardProtoMsg): _65.TokenizeShareRecordReward;
                toProto(message: _65.TokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _65.TokenizeShareRecordReward): _65.TokenizeShareRecordRewardProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _69.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _69.Module;
                    fromPartial(_: Partial<_69.Module>): _69.Module;
                    fromAmino(_: _69.ModuleAmino): _69.Module;
                    toAmino(_: _69.Module): _69.ModuleAmino;
                    fromAminoMsg(object: _69.ModuleAminoMsg): _69.Module;
                    toAminoMsg(message: _69.Module): _69.ModuleAminoMsg;
                    fromProtoMsg(message: _69.ModuleProtoMsg): _69.Module;
                    toProto(message: _69.Module): Uint8Array;
                    toProtoMsg(message: _69.Module): _69.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _72.QueryEvidenceRequest): Promise<_72.QueryEvidenceResponse>;
                allEvidence(request?: _72.QueryAllEvidenceRequest): Promise<_72.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _73.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _73.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _73.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _73.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _73.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _73.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _73.MsgSubmitEvidence) => _73.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _73.MsgSubmitEvidenceAmino) => _73.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _73.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgSubmitEvidence;
                fromPartial(object: Partial<_73.MsgSubmitEvidence>): _73.MsgSubmitEvidence;
                fromAmino(object: _73.MsgSubmitEvidenceAmino): _73.MsgSubmitEvidence;
                toAmino(message: _73.MsgSubmitEvidence): _73.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _73.MsgSubmitEvidenceAminoMsg): _73.MsgSubmitEvidence;
                toAminoMsg(message: _73.MsgSubmitEvidence): _73.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitEvidenceProtoMsg): _73.MsgSubmitEvidence;
                toProto(message: _73.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitEvidence): _73.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _73.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_73.MsgSubmitEvidenceResponse>): _73.MsgSubmitEvidenceResponse;
                fromAmino(object: _73.MsgSubmitEvidenceResponseAmino): _73.MsgSubmitEvidenceResponse;
                toAmino(message: _73.MsgSubmitEvidenceResponse): _73.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _73.MsgSubmitEvidenceResponseAminoMsg): _73.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _73.MsgSubmitEvidenceResponse): _73.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitEvidenceResponseProtoMsg): _73.MsgSubmitEvidenceResponse;
                toProto(message: _73.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitEvidenceResponse): _73.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _72.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryEvidenceRequest;
                fromPartial(object: Partial<_72.QueryEvidenceRequest>): _72.QueryEvidenceRequest;
                fromAmino(object: _72.QueryEvidenceRequestAmino): _72.QueryEvidenceRequest;
                toAmino(message: _72.QueryEvidenceRequest): _72.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _72.QueryEvidenceRequestAminoMsg): _72.QueryEvidenceRequest;
                toAminoMsg(message: _72.QueryEvidenceRequest): _72.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _72.QueryEvidenceRequestProtoMsg): _72.QueryEvidenceRequest;
                toProto(message: _72.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _72.QueryEvidenceRequest): _72.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _72.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryEvidenceResponse;
                fromPartial(object: Partial<_72.QueryEvidenceResponse>): _72.QueryEvidenceResponse;
                fromAmino(object: _72.QueryEvidenceResponseAmino): _72.QueryEvidenceResponse;
                toAmino(message: _72.QueryEvidenceResponse): _72.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _72.QueryEvidenceResponseAminoMsg): _72.QueryEvidenceResponse;
                toAminoMsg(message: _72.QueryEvidenceResponse): _72.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _72.QueryEvidenceResponseProtoMsg): _72.QueryEvidenceResponse;
                toProto(message: _72.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _72.QueryEvidenceResponse): _72.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _72.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_72.QueryAllEvidenceRequest>): _72.QueryAllEvidenceRequest;
                fromAmino(object: _72.QueryAllEvidenceRequestAmino): _72.QueryAllEvidenceRequest;
                toAmino(message: _72.QueryAllEvidenceRequest): _72.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _72.QueryAllEvidenceRequestAminoMsg): _72.QueryAllEvidenceRequest;
                toAminoMsg(message: _72.QueryAllEvidenceRequest): _72.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _72.QueryAllEvidenceRequestProtoMsg): _72.QueryAllEvidenceRequest;
                toProto(message: _72.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _72.QueryAllEvidenceRequest): _72.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _72.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_72.QueryAllEvidenceResponse>): _72.QueryAllEvidenceResponse;
                fromAmino(object: _72.QueryAllEvidenceResponseAmino): _72.QueryAllEvidenceResponse;
                toAmino(message: _72.QueryAllEvidenceResponse): _72.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _72.QueryAllEvidenceResponseAminoMsg): _72.QueryAllEvidenceResponse;
                toAminoMsg(message: _72.QueryAllEvidenceResponse): _72.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _72.QueryAllEvidenceResponseProtoMsg): _72.QueryAllEvidenceResponse;
                toProto(message: _72.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _72.QueryAllEvidenceResponse): _72.QueryAllEvidenceResponseProtoMsg;
            };
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
            Equivocation: {
                typeUrl: string;
                encode(message: _70.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Equivocation;
                fromPartial(object: Partial<_70.Equivocation>): _70.Equivocation;
                fromAmino(object: _70.EquivocationAmino): _70.Equivocation;
                toAmino(message: _70.Equivocation): _70.EquivocationAmino;
                fromAminoMsg(object: _70.EquivocationAminoMsg): _70.Equivocation;
                toAminoMsg(message: _70.Equivocation): _70.EquivocationAminoMsg;
                fromProtoMsg(message: _70.EquivocationProtoMsg): _70.Equivocation;
                toProto(message: _70.Equivocation): Uint8Array;
                toProtoMsg(message: _70.Equivocation): _70.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _74.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _74.Module;
                    fromPartial(_: Partial<_74.Module>): _74.Module;
                    fromAmino(_: _74.ModuleAmino): _74.Module;
                    toAmino(_: _74.Module): _74.ModuleAmino;
                    fromAminoMsg(object: _74.ModuleAminoMsg): _74.Module;
                    toAminoMsg(message: _74.Module): _74.ModuleAminoMsg;
                    fromProtoMsg(message: _74.ModuleProtoMsg): _74.Module;
                    toProto(message: _74.Module): Uint8Array;
                    toProtoMsg(message: _74.Module): _74.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _77.QueryAllowanceRequest): Promise<_77.QueryAllowanceResponse>;
                allowances(request: _77.QueryAllowancesRequest): Promise<_77.QueryAllowancesResponse>;
                allowancesByGranter(request: _77.QueryAllowancesByGranterRequest): Promise<_77.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _78.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _78.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _78.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _78.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _78.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _78.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _78.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _78.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _78.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _78.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _78.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _78.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _78.MsgGrantAllowance) => _78.MsgGrantAllowanceAmino;
                    fromAmino: (object: _78.MsgGrantAllowanceAmino) => _78.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _78.MsgRevokeAllowance) => _78.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _78.MsgRevokeAllowanceAmino) => _78.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _78.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgGrantAllowance;
                fromPartial(object: Partial<_78.MsgGrantAllowance>): _78.MsgGrantAllowance;
                fromAmino(object: _78.MsgGrantAllowanceAmino): _78.MsgGrantAllowance;
                toAmino(message: _78.MsgGrantAllowance): _78.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _78.MsgGrantAllowanceAminoMsg): _78.MsgGrantAllowance;
                toAminoMsg(message: _78.MsgGrantAllowance): _78.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _78.MsgGrantAllowanceProtoMsg): _78.MsgGrantAllowance;
                toProto(message: _78.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _78.MsgGrantAllowance): _78.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _78.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_78.MsgGrantAllowanceResponse>): _78.MsgGrantAllowanceResponse;
                fromAmino(_: _78.MsgGrantAllowanceResponseAmino): _78.MsgGrantAllowanceResponse;
                toAmino(_: _78.MsgGrantAllowanceResponse): _78.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _78.MsgGrantAllowanceResponseAminoMsg): _78.MsgGrantAllowanceResponse;
                toAminoMsg(message: _78.MsgGrantAllowanceResponse): _78.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _78.MsgGrantAllowanceResponseProtoMsg): _78.MsgGrantAllowanceResponse;
                toProto(message: _78.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _78.MsgGrantAllowanceResponse): _78.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _78.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgRevokeAllowance;
                fromPartial(object: Partial<_78.MsgRevokeAllowance>): _78.MsgRevokeAllowance;
                fromAmino(object: _78.MsgRevokeAllowanceAmino): _78.MsgRevokeAllowance;
                toAmino(message: _78.MsgRevokeAllowance): _78.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _78.MsgRevokeAllowanceAminoMsg): _78.MsgRevokeAllowance;
                toAminoMsg(message: _78.MsgRevokeAllowance): _78.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _78.MsgRevokeAllowanceProtoMsg): _78.MsgRevokeAllowance;
                toProto(message: _78.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _78.MsgRevokeAllowance): _78.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _78.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_78.MsgRevokeAllowanceResponse>): _78.MsgRevokeAllowanceResponse;
                fromAmino(_: _78.MsgRevokeAllowanceResponseAmino): _78.MsgRevokeAllowanceResponse;
                toAmino(_: _78.MsgRevokeAllowanceResponse): _78.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _78.MsgRevokeAllowanceResponseAminoMsg): _78.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _78.MsgRevokeAllowanceResponse): _78.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _78.MsgRevokeAllowanceResponseProtoMsg): _78.MsgRevokeAllowanceResponse;
                toProto(message: _78.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _78.MsgRevokeAllowanceResponse): _78.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _75.BasicAllowance | _75.PeriodicAllowance | _75.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _77.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowanceRequest;
                fromPartial(object: Partial<_77.QueryAllowanceRequest>): _77.QueryAllowanceRequest;
                fromAmino(object: _77.QueryAllowanceRequestAmino): _77.QueryAllowanceRequest;
                toAmino(message: _77.QueryAllowanceRequest): _77.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _77.QueryAllowanceRequestAminoMsg): _77.QueryAllowanceRequest;
                toAminoMsg(message: _77.QueryAllowanceRequest): _77.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _77.QueryAllowanceRequestProtoMsg): _77.QueryAllowanceRequest;
                toProto(message: _77.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAllowanceRequest): _77.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _77.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowanceResponse;
                fromPartial(object: Partial<_77.QueryAllowanceResponse>): _77.QueryAllowanceResponse;
                fromAmino(object: _77.QueryAllowanceResponseAmino): _77.QueryAllowanceResponse;
                toAmino(message: _77.QueryAllowanceResponse): _77.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _77.QueryAllowanceResponseAminoMsg): _77.QueryAllowanceResponse;
                toAminoMsg(message: _77.QueryAllowanceResponse): _77.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _77.QueryAllowanceResponseProtoMsg): _77.QueryAllowanceResponse;
                toProto(message: _77.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAllowanceResponse): _77.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesRequest;
                fromPartial(object: Partial<_77.QueryAllowancesRequest>): _77.QueryAllowancesRequest;
                fromAmino(object: _77.QueryAllowancesRequestAmino): _77.QueryAllowancesRequest;
                toAmino(message: _77.QueryAllowancesRequest): _77.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _77.QueryAllowancesRequestAminoMsg): _77.QueryAllowancesRequest;
                toAminoMsg(message: _77.QueryAllowancesRequest): _77.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesRequestProtoMsg): _77.QueryAllowancesRequest;
                toProto(message: _77.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesRequest): _77.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesResponse;
                fromPartial(object: Partial<_77.QueryAllowancesResponse>): _77.QueryAllowancesResponse;
                fromAmino(object: _77.QueryAllowancesResponseAmino): _77.QueryAllowancesResponse;
                toAmino(message: _77.QueryAllowancesResponse): _77.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _77.QueryAllowancesResponseAminoMsg): _77.QueryAllowancesResponse;
                toAminoMsg(message: _77.QueryAllowancesResponse): _77.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesResponseProtoMsg): _77.QueryAllowancesResponse;
                toProto(message: _77.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesResponse): _77.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_77.QueryAllowancesByGranterRequest>): _77.QueryAllowancesByGranterRequest;
                fromAmino(object: _77.QueryAllowancesByGranterRequestAmino): _77.QueryAllowancesByGranterRequest;
                toAmino(message: _77.QueryAllowancesByGranterRequest): _77.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _77.QueryAllowancesByGranterRequestAminoMsg): _77.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _77.QueryAllowancesByGranterRequest): _77.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesByGranterRequestProtoMsg): _77.QueryAllowancesByGranterRequest;
                toProto(message: _77.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesByGranterRequest): _77.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _77.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_77.QueryAllowancesByGranterResponse>): _77.QueryAllowancesByGranterResponse;
                fromAmino(object: _77.QueryAllowancesByGranterResponseAmino): _77.QueryAllowancesByGranterResponse;
                toAmino(message: _77.QueryAllowancesByGranterResponse): _77.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _77.QueryAllowancesByGranterResponseAminoMsg): _77.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _77.QueryAllowancesByGranterResponse): _77.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _77.QueryAllowancesByGranterResponseProtoMsg): _77.QueryAllowancesByGranterResponse;
                toProto(message: _77.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAllowancesByGranterResponse): _77.QueryAllowancesByGranterResponseProtoMsg;
            };
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _75.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.BasicAllowance;
                fromPartial(object: Partial<_75.BasicAllowance>): _75.BasicAllowance;
                fromAmino(object: _75.BasicAllowanceAmino): _75.BasicAllowance;
                toAmino(message: _75.BasicAllowance): _75.BasicAllowanceAmino;
                fromAminoMsg(object: _75.BasicAllowanceAminoMsg): _75.BasicAllowance;
                toAminoMsg(message: _75.BasicAllowance): _75.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _75.BasicAllowanceProtoMsg): _75.BasicAllowance;
                toProto(message: _75.BasicAllowance): Uint8Array;
                toProtoMsg(message: _75.BasicAllowance): _75.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _75.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PeriodicAllowance;
                fromPartial(object: Partial<_75.PeriodicAllowance>): _75.PeriodicAllowance;
                fromAmino(object: _75.PeriodicAllowanceAmino): _75.PeriodicAllowance;
                toAmino(message: _75.PeriodicAllowance): _75.PeriodicAllowanceAmino;
                fromAminoMsg(object: _75.PeriodicAllowanceAminoMsg): _75.PeriodicAllowance;
                toAminoMsg(message: _75.PeriodicAllowance): _75.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _75.PeriodicAllowanceProtoMsg): _75.PeriodicAllowance;
                toProto(message: _75.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _75.PeriodicAllowance): _75.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _75.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.AllowedMsgAllowance;
                fromPartial(object: Partial<_75.AllowedMsgAllowance>): _75.AllowedMsgAllowance;
                fromAmino(object: _75.AllowedMsgAllowanceAmino): _75.AllowedMsgAllowance;
                toAmino(message: _75.AllowedMsgAllowance): _75.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _75.AllowedMsgAllowanceAminoMsg): _75.AllowedMsgAllowance;
                toAminoMsg(message: _75.AllowedMsgAllowance): _75.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _75.AllowedMsgAllowanceProtoMsg): _75.AllowedMsgAllowance;
                toProto(message: _75.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _75.AllowedMsgAllowance): _75.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _75.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.Grant;
                fromPartial(object: Partial<_75.Grant>): _75.Grant;
                fromAmino(object: _75.GrantAmino): _75.Grant;
                toAmino(message: _75.Grant): _75.GrantAmino;
                fromAminoMsg(object: _75.GrantAminoMsg): _75.Grant;
                toAminoMsg(message: _75.Grant): _75.GrantAminoMsg;
                fromProtoMsg(message: _75.GrantProtoMsg): _75.Grant;
                toProto(message: _75.Grant): Uint8Array;
                toProtoMsg(message: _75.Grant): _75.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _79.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _79.Module;
                    fromPartial(_: Partial<_79.Module>): _79.Module;
                    fromAmino(_: _79.ModuleAmino): _79.Module;
                    toAmino(_: _79.Module): _79.ModuleAmino;
                    fromAminoMsg(object: _79.ModuleAminoMsg): _79.Module;
                    toAminoMsg(message: _79.Module): _79.ModuleAminoMsg;
                    fromProtoMsg(message: _79.ModuleProtoMsg): _79.Module;
                    toProto(message: _79.Module): Uint8Array;
                    toProtoMsg(message: _79.Module): _79.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
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
        };
    }
    namespace gov {
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
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
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
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _85.MsgExecLegacyContent): {
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
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _85.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _85.MsgExecLegacyContent;
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
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _85.MsgExecLegacyContent;
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
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _85.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _85.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _85.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _85.MsgExecLegacyContent;
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
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _85.MsgSubmitProposal) => _85.MsgSubmitProposalAmino;
                    fromAmino: (object: _85.MsgSubmitProposalAmino) => _85.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _85.MsgExecLegacyContent) => _85.MsgExecLegacyContentAmino;
                    fromAmino: (object: _85.MsgExecLegacyContentAmino) => _85.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _85.MsgVote) => _85.MsgVoteAmino;
                    fromAmino: (object: _85.MsgVoteAmino) => _85.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _85.MsgVoteWeighted) => _85.MsgVoteWeightedAmino;
                    fromAmino: (object: _85.MsgVoteWeightedAmino) => _85.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _85.MsgDeposit) => _85.MsgDepositAmino;
                    fromAmino: (object: _85.MsgDepositAmino) => _85.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateParams) => _85.MsgUpdateParamsAmino;
                    fromAmino: (object: _85.MsgUpdateParamsAmino) => _85.MsgUpdateParams;
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
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _85.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgExecLegacyContent;
                fromPartial(object: Partial<_85.MsgExecLegacyContent>): _85.MsgExecLegacyContent;
                fromAmino(object: _85.MsgExecLegacyContentAmino): _85.MsgExecLegacyContent;
                toAmino(message: _85.MsgExecLegacyContent): _85.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _85.MsgExecLegacyContentAminoMsg): _85.MsgExecLegacyContent;
                toAminoMsg(message: _85.MsgExecLegacyContent): _85.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _85.MsgExecLegacyContentProtoMsg): _85.MsgExecLegacyContent;
                toProto(message: _85.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _85.MsgExecLegacyContent): _85.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _85.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_85.MsgExecLegacyContentResponse>): _85.MsgExecLegacyContentResponse;
                fromAmino(_: _85.MsgExecLegacyContentResponseAmino): _85.MsgExecLegacyContentResponse;
                toAmino(_: _85.MsgExecLegacyContentResponse): _85.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _85.MsgExecLegacyContentResponseAminoMsg): _85.MsgExecLegacyContentResponse;
                toAminoMsg(message: _85.MsgExecLegacyContentResponse): _85.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _85.MsgExecLegacyContentResponseProtoMsg): _85.MsgExecLegacyContentResponse;
                toProto(message: _85.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _85.MsgExecLegacyContentResponse): _85.MsgExecLegacyContentResponseProtoMsg;
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
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _85.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgUpdateParams;
                fromPartial(object: Partial<_85.MsgUpdateParams>): _85.MsgUpdateParams;
                fromAmino(object: _85.MsgUpdateParamsAmino): _85.MsgUpdateParams;
                toAmino(message: _85.MsgUpdateParams): _85.MsgUpdateParamsAmino;
                fromAminoMsg(object: _85.MsgUpdateParamsAminoMsg): _85.MsgUpdateParams;
                toAminoMsg(message: _85.MsgUpdateParams): _85.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateParamsProtoMsg): _85.MsgUpdateParams;
                toProto(message: _85.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateParams): _85.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _85.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_85.MsgUpdateParamsResponse>): _85.MsgUpdateParamsResponse;
                fromAmino(_: _85.MsgUpdateParamsResponseAmino): _85.MsgUpdateParamsResponse;
                toAmino(_: _85.MsgUpdateParamsResponse): _85.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _85.MsgUpdateParamsResponseAminoMsg): _85.MsgUpdateParamsResponse;
                toAminoMsg(message: _85.MsgUpdateParamsResponse): _85.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUpdateParamsResponseProtoMsg): _85.MsgUpdateParamsResponse;
                toProto(message: _85.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUpdateParamsResponse): _85.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _135.SoftwareUpgradeProposal | _135.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _65.CommunityPoolSpendProposal | _65.CommunityPoolSpendProposalWithDeposit | _113.ParameterChangeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _87.TextProposal;
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
            Params: {
                typeUrl: string;
                encode(message: _83.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Params;
                fromPartial(object: Partial<_83.Params>): _83.Params;
                fromAmino(object: _83.ParamsAmino): _83.Params;
                toAmino(message: _83.Params): _83.ParamsAmino;
                fromAminoMsg(object: _83.ParamsAminoMsg): _83.Params;
                toAminoMsg(message: _83.Params): _83.ParamsAminoMsg;
                fromProtoMsg(message: _83.ParamsProtoMsg): _83.Params;
                toProto(message: _83.Params): Uint8Array;
                toProtoMsg(message: _83.Params): _83.ParamsProtoMsg;
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
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _88.QueryProposalRequest): Promise<_88.QueryProposalResponse>;
                proposals(request: _88.QueryProposalsRequest): Promise<_88.QueryProposalsResponse>;
                vote(request: _88.QueryVoteRequest): Promise<_88.QueryVoteResponse>;
                votes(request: _88.QueryVotesRequest): Promise<_88.QueryVotesResponse>;
                params(request: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                deposit(request: _88.QueryDepositRequest): Promise<_88.QueryDepositResponse>;
                deposits(request: _88.QueryDepositsRequest): Promise<_88.QueryDepositsResponse>;
                tallyResult(request: _88.QueryTallyResultRequest): Promise<_88.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _89.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _89.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    voteWeighted(value: _89.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _89.MsgVoteWeighted;
                    };
                    deposit(value: _89.MsgDeposit): {
                        typeUrl: string;
                        value: _89.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _89.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _89.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _89.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _89.MsgSubmitProposal;
                    };
                    vote(value: _89.MsgVote): {
                        typeUrl: string;
                        value: _89.MsgVote;
                    };
                    voteWeighted(value: _89.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _89.MsgVoteWeighted;
                    };
                    deposit(value: _89.MsgDeposit): {
                        typeUrl: string;
                        value: _89.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _89.MsgSubmitProposal) => _89.MsgSubmitProposalAmino;
                    fromAmino: (object: _89.MsgSubmitProposalAmino) => _89.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _89.MsgVote) => _89.MsgVoteAmino;
                    fromAmino: (object: _89.MsgVoteAmino) => _89.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _89.MsgVoteWeighted) => _89.MsgVoteWeightedAmino;
                    fromAmino: (object: _89.MsgVoteWeightedAmino) => _89.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _89.MsgDeposit) => _89.MsgDepositAmino;
                    fromAmino: (object: _89.MsgDepositAmino) => _89.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _89.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSubmitProposal;
                fromPartial(object: Partial<_89.MsgSubmitProposal>): _89.MsgSubmitProposal;
                fromAmino(object: _89.MsgSubmitProposalAmino): _89.MsgSubmitProposal;
                toAmino(message: _89.MsgSubmitProposal): _89.MsgSubmitProposalAmino;
                fromAminoMsg(object: _89.MsgSubmitProposalAminoMsg): _89.MsgSubmitProposal;
                toAminoMsg(message: _89.MsgSubmitProposal): _89.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _89.MsgSubmitProposalProtoMsg): _89.MsgSubmitProposal;
                toProto(message: _89.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _89.MsgSubmitProposal): _89.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _89.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_89.MsgSubmitProposalResponse>): _89.MsgSubmitProposalResponse;
                fromAmino(object: _89.MsgSubmitProposalResponseAmino): _89.MsgSubmitProposalResponse;
                toAmino(message: _89.MsgSubmitProposalResponse): _89.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _89.MsgSubmitProposalResponseAminoMsg): _89.MsgSubmitProposalResponse;
                toAminoMsg(message: _89.MsgSubmitProposalResponse): _89.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _89.MsgSubmitProposalResponseProtoMsg): _89.MsgSubmitProposalResponse;
                toProto(message: _89.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _89.MsgSubmitProposalResponse): _89.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _89.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgVote;
                fromPartial(object: Partial<_89.MsgVote>): _89.MsgVote;
                fromAmino(object: _89.MsgVoteAmino): _89.MsgVote;
                toAmino(message: _89.MsgVote): _89.MsgVoteAmino;
                fromAminoMsg(object: _89.MsgVoteAminoMsg): _89.MsgVote;
                toAminoMsg(message: _89.MsgVote): _89.MsgVoteAminoMsg;
                fromProtoMsg(message: _89.MsgVoteProtoMsg): _89.MsgVote;
                toProto(message: _89.MsgVote): Uint8Array;
                toProtoMsg(message: _89.MsgVote): _89.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _89.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgVoteResponse;
                fromPartial(_: Partial<_89.MsgVoteResponse>): _89.MsgVoteResponse;
                fromAmino(_: _89.MsgVoteResponseAmino): _89.MsgVoteResponse;
                toAmino(_: _89.MsgVoteResponse): _89.MsgVoteResponseAmino;
                fromAminoMsg(object: _89.MsgVoteResponseAminoMsg): _89.MsgVoteResponse;
                toAminoMsg(message: _89.MsgVoteResponse): _89.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _89.MsgVoteResponseProtoMsg): _89.MsgVoteResponse;
                toProto(message: _89.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _89.MsgVoteResponse): _89.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _89.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgVoteWeighted;
                fromPartial(object: Partial<_89.MsgVoteWeighted>): _89.MsgVoteWeighted;
                fromAmino(object: _89.MsgVoteWeightedAmino): _89.MsgVoteWeighted;
                toAmino(message: _89.MsgVoteWeighted): _89.MsgVoteWeightedAmino;
                fromAminoMsg(object: _89.MsgVoteWeightedAminoMsg): _89.MsgVoteWeighted;
                toAminoMsg(message: _89.MsgVoteWeighted): _89.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _89.MsgVoteWeightedProtoMsg): _89.MsgVoteWeighted;
                toProto(message: _89.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _89.MsgVoteWeighted): _89.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _89.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_89.MsgVoteWeightedResponse>): _89.MsgVoteWeightedResponse;
                fromAmino(_: _89.MsgVoteWeightedResponseAmino): _89.MsgVoteWeightedResponse;
                toAmino(_: _89.MsgVoteWeightedResponse): _89.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _89.MsgVoteWeightedResponseAminoMsg): _89.MsgVoteWeightedResponse;
                toAminoMsg(message: _89.MsgVoteWeightedResponse): _89.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _89.MsgVoteWeightedResponseProtoMsg): _89.MsgVoteWeightedResponse;
                toProto(message: _89.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _89.MsgVoteWeightedResponse): _89.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _89.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgDeposit;
                fromPartial(object: Partial<_89.MsgDeposit>): _89.MsgDeposit;
                fromAmino(object: _89.MsgDepositAmino): _89.MsgDeposit;
                toAmino(message: _89.MsgDeposit): _89.MsgDepositAmino;
                fromAminoMsg(object: _89.MsgDepositAminoMsg): _89.MsgDeposit;
                toAminoMsg(message: _89.MsgDeposit): _89.MsgDepositAminoMsg;
                fromProtoMsg(message: _89.MsgDepositProtoMsg): _89.MsgDeposit;
                toProto(message: _89.MsgDeposit): Uint8Array;
                toProtoMsg(message: _89.MsgDeposit): _89.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _89.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgDepositResponse;
                fromPartial(_: Partial<_89.MsgDepositResponse>): _89.MsgDepositResponse;
                fromAmino(_: _89.MsgDepositResponseAmino): _89.MsgDepositResponse;
                toAmino(_: _89.MsgDepositResponse): _89.MsgDepositResponseAmino;
                fromAminoMsg(object: _89.MsgDepositResponseAminoMsg): _89.MsgDepositResponse;
                toAminoMsg(message: _89.MsgDepositResponse): _89.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _89.MsgDepositResponseProtoMsg): _89.MsgDepositResponse;
                toProto(message: _89.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _89.MsgDepositResponse): _89.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _135.SoftwareUpgradeProposal | _135.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _65.CommunityPoolSpendProposal | _65.CommunityPoolSpendProposalWithDeposit | _113.ParameterChangeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _87.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _88.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalRequest;
                fromPartial(object: Partial<_88.QueryProposalRequest>): _88.QueryProposalRequest;
                fromAmino(object: _88.QueryProposalRequestAmino): _88.QueryProposalRequest;
                toAmino(message: _88.QueryProposalRequest): _88.QueryProposalRequestAmino;
                fromAminoMsg(object: _88.QueryProposalRequestAminoMsg): _88.QueryProposalRequest;
                toAminoMsg(message: _88.QueryProposalRequest): _88.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _88.QueryProposalRequestProtoMsg): _88.QueryProposalRequest;
                toProto(message: _88.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _88.QueryProposalRequest): _88.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _88.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalResponse;
                fromPartial(object: Partial<_88.QueryProposalResponse>): _88.QueryProposalResponse;
                fromAmino(object: _88.QueryProposalResponseAmino): _88.QueryProposalResponse;
                toAmino(message: _88.QueryProposalResponse): _88.QueryProposalResponseAmino;
                fromAminoMsg(object: _88.QueryProposalResponseAminoMsg): _88.QueryProposalResponse;
                toAminoMsg(message: _88.QueryProposalResponse): _88.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _88.QueryProposalResponseProtoMsg): _88.QueryProposalResponse;
                toProto(message: _88.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _88.QueryProposalResponse): _88.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _88.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalsRequest;
                fromPartial(object: Partial<_88.QueryProposalsRequest>): _88.QueryProposalsRequest;
                fromAmino(object: _88.QueryProposalsRequestAmino): _88.QueryProposalsRequest;
                toAmino(message: _88.QueryProposalsRequest): _88.QueryProposalsRequestAmino;
                fromAminoMsg(object: _88.QueryProposalsRequestAminoMsg): _88.QueryProposalsRequest;
                toAminoMsg(message: _88.QueryProposalsRequest): _88.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryProposalsRequestProtoMsg): _88.QueryProposalsRequest;
                toProto(message: _88.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryProposalsRequest): _88.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _88.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryProposalsResponse;
                fromPartial(object: Partial<_88.QueryProposalsResponse>): _88.QueryProposalsResponse;
                fromAmino(object: _88.QueryProposalsResponseAmino): _88.QueryProposalsResponse;
                toAmino(message: _88.QueryProposalsResponse): _88.QueryProposalsResponseAmino;
                fromAminoMsg(object: _88.QueryProposalsResponseAminoMsg): _88.QueryProposalsResponse;
                toAminoMsg(message: _88.QueryProposalsResponse): _88.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryProposalsResponseProtoMsg): _88.QueryProposalsResponse;
                toProto(message: _88.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryProposalsResponse): _88.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _88.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVoteRequest;
                fromPartial(object: Partial<_88.QueryVoteRequest>): _88.QueryVoteRequest;
                fromAmino(object: _88.QueryVoteRequestAmino): _88.QueryVoteRequest;
                toAmino(message: _88.QueryVoteRequest): _88.QueryVoteRequestAmino;
                fromAminoMsg(object: _88.QueryVoteRequestAminoMsg): _88.QueryVoteRequest;
                toAminoMsg(message: _88.QueryVoteRequest): _88.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _88.QueryVoteRequestProtoMsg): _88.QueryVoteRequest;
                toProto(message: _88.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _88.QueryVoteRequest): _88.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _88.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVoteResponse;
                fromPartial(object: Partial<_88.QueryVoteResponse>): _88.QueryVoteResponse;
                fromAmino(object: _88.QueryVoteResponseAmino): _88.QueryVoteResponse;
                toAmino(message: _88.QueryVoteResponse): _88.QueryVoteResponseAmino;
                fromAminoMsg(object: _88.QueryVoteResponseAminoMsg): _88.QueryVoteResponse;
                toAminoMsg(message: _88.QueryVoteResponse): _88.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _88.QueryVoteResponseProtoMsg): _88.QueryVoteResponse;
                toProto(message: _88.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _88.QueryVoteResponse): _88.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _88.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVotesRequest;
                fromPartial(object: Partial<_88.QueryVotesRequest>): _88.QueryVotesRequest;
                fromAmino(object: _88.QueryVotesRequestAmino): _88.QueryVotesRequest;
                toAmino(message: _88.QueryVotesRequest): _88.QueryVotesRequestAmino;
                fromAminoMsg(object: _88.QueryVotesRequestAminoMsg): _88.QueryVotesRequest;
                toAminoMsg(message: _88.QueryVotesRequest): _88.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _88.QueryVotesRequestProtoMsg): _88.QueryVotesRequest;
                toProto(message: _88.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _88.QueryVotesRequest): _88.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _88.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryVotesResponse;
                fromPartial(object: Partial<_88.QueryVotesResponse>): _88.QueryVotesResponse;
                fromAmino(object: _88.QueryVotesResponseAmino): _88.QueryVotesResponse;
                toAmino(message: _88.QueryVotesResponse): _88.QueryVotesResponseAmino;
                fromAminoMsg(object: _88.QueryVotesResponseAminoMsg): _88.QueryVotesResponse;
                toAminoMsg(message: _88.QueryVotesResponse): _88.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _88.QueryVotesResponseProtoMsg): _88.QueryVotesResponse;
                toProto(message: _88.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _88.QueryVotesResponse): _88.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _88.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryParamsRequest;
                fromPartial(object: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
                fromAmino(object: _88.QueryParamsRequestAmino): _88.QueryParamsRequest;
                toAmino(message: _88.QueryParamsRequest): _88.QueryParamsRequestAmino;
                fromAminoMsg(object: _88.QueryParamsRequestAminoMsg): _88.QueryParamsRequest;
                toAminoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryParamsRequestProtoMsg): _88.QueryParamsRequest;
                toProto(message: _88.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _88.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryParamsResponse;
                fromPartial(object: Partial<_88.QueryParamsResponse>): _88.QueryParamsResponse;
                fromAmino(object: _88.QueryParamsResponseAmino): _88.QueryParamsResponse;
                toAmino(message: _88.QueryParamsResponse): _88.QueryParamsResponseAmino;
                fromAminoMsg(object: _88.QueryParamsResponseAminoMsg): _88.QueryParamsResponse;
                toAminoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryParamsResponseProtoMsg): _88.QueryParamsResponse;
                toProto(message: _88.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _88.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDepositRequest;
                fromPartial(object: Partial<_88.QueryDepositRequest>): _88.QueryDepositRequest;
                fromAmino(object: _88.QueryDepositRequestAmino): _88.QueryDepositRequest;
                toAmino(message: _88.QueryDepositRequest): _88.QueryDepositRequestAmino;
                fromAminoMsg(object: _88.QueryDepositRequestAminoMsg): _88.QueryDepositRequest;
                toAminoMsg(message: _88.QueryDepositRequest): _88.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDepositRequestProtoMsg): _88.QueryDepositRequest;
                toProto(message: _88.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDepositRequest): _88.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _88.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDepositResponse;
                fromPartial(object: Partial<_88.QueryDepositResponse>): _88.QueryDepositResponse;
                fromAmino(object: _88.QueryDepositResponseAmino): _88.QueryDepositResponse;
                toAmino(message: _88.QueryDepositResponse): _88.QueryDepositResponseAmino;
                fromAminoMsg(object: _88.QueryDepositResponseAminoMsg): _88.QueryDepositResponse;
                toAminoMsg(message: _88.QueryDepositResponse): _88.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDepositResponseProtoMsg): _88.QueryDepositResponse;
                toProto(message: _88.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDepositResponse): _88.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _88.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDepositsRequest;
                fromPartial(object: Partial<_88.QueryDepositsRequest>): _88.QueryDepositsRequest;
                fromAmino(object: _88.QueryDepositsRequestAmino): _88.QueryDepositsRequest;
                toAmino(message: _88.QueryDepositsRequest): _88.QueryDepositsRequestAmino;
                fromAminoMsg(object: _88.QueryDepositsRequestAminoMsg): _88.QueryDepositsRequest;
                toAminoMsg(message: _88.QueryDepositsRequest): _88.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _88.QueryDepositsRequestProtoMsg): _88.QueryDepositsRequest;
                toProto(message: _88.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _88.QueryDepositsRequest): _88.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _88.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryDepositsResponse;
                fromPartial(object: Partial<_88.QueryDepositsResponse>): _88.QueryDepositsResponse;
                fromAmino(object: _88.QueryDepositsResponseAmino): _88.QueryDepositsResponse;
                toAmino(message: _88.QueryDepositsResponse): _88.QueryDepositsResponseAmino;
                fromAminoMsg(object: _88.QueryDepositsResponseAminoMsg): _88.QueryDepositsResponse;
                toAminoMsg(message: _88.QueryDepositsResponse): _88.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _88.QueryDepositsResponseProtoMsg): _88.QueryDepositsResponse;
                toProto(message: _88.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _88.QueryDepositsResponse): _88.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _88.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryTallyResultRequest;
                fromPartial(object: Partial<_88.QueryTallyResultRequest>): _88.QueryTallyResultRequest;
                fromAmino(object: _88.QueryTallyResultRequestAmino): _88.QueryTallyResultRequest;
                toAmino(message: _88.QueryTallyResultRequest): _88.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _88.QueryTallyResultRequestAminoMsg): _88.QueryTallyResultRequest;
                toAminoMsg(message: _88.QueryTallyResultRequest): _88.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _88.QueryTallyResultRequestProtoMsg): _88.QueryTallyResultRequest;
                toProto(message: _88.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _88.QueryTallyResultRequest): _88.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _88.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryTallyResultResponse;
                fromPartial(object: Partial<_88.QueryTallyResultResponse>): _88.QueryTallyResultResponse;
                fromAmino(object: _88.QueryTallyResultResponseAmino): _88.QueryTallyResultResponse;
                toAmino(message: _88.QueryTallyResultResponse): _88.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _88.QueryTallyResultResponseAminoMsg): _88.QueryTallyResultResponse;
                toAminoMsg(message: _88.QueryTallyResultResponse): _88.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _88.QueryTallyResultResponseProtoMsg): _88.QueryTallyResultResponse;
                toProto(message: _88.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _88.QueryTallyResultResponse): _88.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _87.VoteOption;
            voteOptionToJSON(object: _87.VoteOption): string;
            proposalStatusFromJSON(object: any): _87.ProposalStatus;
            proposalStatusToJSON(object: _87.ProposalStatus): string;
            VoteOption: typeof _87.VoteOption;
            VoteOptionSDKType: typeof _87.VoteOption;
            VoteOptionAmino: typeof _87.VoteOption;
            ProposalStatus: typeof _87.ProposalStatus;
            ProposalStatusSDKType: typeof _87.ProposalStatus;
            ProposalStatusAmino: typeof _87.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _87.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.WeightedVoteOption;
                fromPartial(object: Partial<_87.WeightedVoteOption>): _87.WeightedVoteOption;
                fromAmino(object: _87.WeightedVoteOptionAmino): _87.WeightedVoteOption;
                toAmino(message: _87.WeightedVoteOption): _87.WeightedVoteOptionAmino;
                fromAminoMsg(object: _87.WeightedVoteOptionAminoMsg): _87.WeightedVoteOption;
                toAminoMsg(message: _87.WeightedVoteOption): _87.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _87.WeightedVoteOptionProtoMsg): _87.WeightedVoteOption;
                toProto(message: _87.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _87.WeightedVoteOption): _87.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _87.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.TextProposal;
                fromPartial(object: Partial<_87.TextProposal>): _87.TextProposal;
                fromAmino(object: _87.TextProposalAmino): _87.TextProposal;
                toAmino(message: _87.TextProposal): _87.TextProposalAmino;
                fromAminoMsg(object: _87.TextProposalAminoMsg): _87.TextProposal;
                toAminoMsg(message: _87.TextProposal): _87.TextProposalAminoMsg;
                fromProtoMsg(message: _87.TextProposalProtoMsg): _87.TextProposal;
                toProto(message: _87.TextProposal): Uint8Array;
                toProtoMsg(message: _87.TextProposal): _87.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _87.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Deposit;
                fromPartial(object: Partial<_87.Deposit>): _87.Deposit;
                fromAmino(object: _87.DepositAmino): _87.Deposit;
                toAmino(message: _87.Deposit): _87.DepositAmino;
                fromAminoMsg(object: _87.DepositAminoMsg): _87.Deposit;
                toAminoMsg(message: _87.Deposit): _87.DepositAminoMsg;
                fromProtoMsg(message: _87.DepositProtoMsg): _87.Deposit;
                toProto(message: _87.Deposit): Uint8Array;
                toProtoMsg(message: _87.Deposit): _87.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _87.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Proposal;
                fromPartial(object: Partial<_87.Proposal>): _87.Proposal;
                fromAmino(object: _87.ProposalAmino): _87.Proposal;
                toAmino(message: _87.Proposal): _87.ProposalAmino;
                fromAminoMsg(object: _87.ProposalAminoMsg): _87.Proposal;
                toAminoMsg(message: _87.Proposal): _87.ProposalAminoMsg;
                fromProtoMsg(message: _87.ProposalProtoMsg): _87.Proposal;
                toProto(message: _87.Proposal): Uint8Array;
                toProtoMsg(message: _87.Proposal): _87.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _87.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.TallyResult;
                fromPartial(object: Partial<_87.TallyResult>): _87.TallyResult;
                fromAmino(object: _87.TallyResultAmino): _87.TallyResult;
                toAmino(message: _87.TallyResult): _87.TallyResultAmino;
                fromAminoMsg(object: _87.TallyResultAminoMsg): _87.TallyResult;
                toAminoMsg(message: _87.TallyResult): _87.TallyResultAminoMsg;
                fromProtoMsg(message: _87.TallyResultProtoMsg): _87.TallyResult;
                toProto(message: _87.TallyResult): Uint8Array;
                toProtoMsg(message: _87.TallyResult): _87.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _87.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Vote;
                fromPartial(object: Partial<_87.Vote>): _87.Vote;
                fromAmino(object: _87.VoteAmino): _87.Vote;
                toAmino(message: _87.Vote): _87.VoteAmino;
                fromAminoMsg(object: _87.VoteAminoMsg): _87.Vote;
                toAminoMsg(message: _87.Vote): _87.VoteAminoMsg;
                fromProtoMsg(message: _87.VoteProtoMsg): _87.Vote;
                toProto(message: _87.Vote): Uint8Array;
                toProtoMsg(message: _87.Vote): _87.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _87.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.DepositParams;
                fromPartial(object: Partial<_87.DepositParams>): _87.DepositParams;
                fromAmino(object: _87.DepositParamsAmino): _87.DepositParams;
                toAmino(message: _87.DepositParams): _87.DepositParamsAmino;
                fromAminoMsg(object: _87.DepositParamsAminoMsg): _87.DepositParams;
                toAminoMsg(message: _87.DepositParams): _87.DepositParamsAminoMsg;
                fromProtoMsg(message: _87.DepositParamsProtoMsg): _87.DepositParams;
                toProto(message: _87.DepositParams): Uint8Array;
                toProtoMsg(message: _87.DepositParams): _87.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _87.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.VotingParams;
                fromPartial(object: Partial<_87.VotingParams>): _87.VotingParams;
                fromAmino(object: _87.VotingParamsAmino): _87.VotingParams;
                toAmino(message: _87.VotingParams): _87.VotingParamsAmino;
                fromAminoMsg(object: _87.VotingParamsAminoMsg): _87.VotingParams;
                toAminoMsg(message: _87.VotingParams): _87.VotingParamsAminoMsg;
                fromProtoMsg(message: _87.VotingParamsProtoMsg): _87.VotingParams;
                toProto(message: _87.VotingParams): Uint8Array;
                toProtoMsg(message: _87.VotingParams): _87.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _87.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.TallyParams;
                fromPartial(object: Partial<_87.TallyParams>): _87.TallyParams;
                fromAmino(object: _87.TallyParamsAmino): _87.TallyParams;
                toAmino(message: _87.TallyParams): _87.TallyParamsAmino;
                fromAminoMsg(object: _87.TallyParamsAminoMsg): _87.TallyParams;
                toAminoMsg(message: _87.TallyParams): _87.TallyParamsAminoMsg;
                fromProtoMsg(message: _87.TallyParamsProtoMsg): _87.TallyParams;
                toProto(message: _87.TallyParams): Uint8Array;
                toProtoMsg(message: _87.TallyParams): _87.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
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
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _93.QueryGroupInfoRequest): Promise<_93.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _93.QueryGroupPolicyInfoRequest): Promise<_93.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _93.QueryGroupMembersRequest): Promise<_93.QueryGroupMembersResponse>;
                groupsByAdmin(request: _93.QueryGroupsByAdminRequest): Promise<_93.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _93.QueryGroupPoliciesByGroupRequest): Promise<_93.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _93.QueryGroupPoliciesByAdminRequest): Promise<_93.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _93.QueryProposalRequest): Promise<_93.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _93.QueryProposalsByGroupPolicyRequest): Promise<_93.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _93.QueryVoteByProposalVoterRequest): Promise<_93.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _93.QueryVotesByProposalRequest): Promise<_93.QueryVotesByProposalResponse>;
                votesByVoter(request: _93.QueryVotesByVoterRequest): Promise<_93.QueryVotesByVoterResponse>;
                groupsByMember(request: _93.QueryGroupsByMemberRequest): Promise<_93.QueryGroupsByMemberResponse>;
                tallyResult(request: _93.QueryTallyResultRequest): Promise<_93.QueryTallyResultResponse>;
                groups(request?: _93.QueryGroupsRequest): Promise<_93.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _94.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _94.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _94.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _94.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _94.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _94.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _94.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _94.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _94.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _94.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _94.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _94.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _94.MsgCreateGroup): {
                        typeUrl: string;
                        value: _94.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _94.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _94.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _94.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _94.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _94.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _94.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _94.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _94.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _94.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _94.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _94.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _94.MsgWithdrawProposal;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    exec(value: _94.MsgExec): {
                        typeUrl: string;
                        value: _94.MsgExec;
                    };
                    leaveGroup(value: _94.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _94.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _94.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _94.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _94.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _94.MsgCreateGroup): {
                        typeUrl: string;
                        value: _94.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _94.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _94.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _94.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _94.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _94.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _94.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _94.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _94.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _94.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _94.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _94.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _94.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _94.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _94.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _94.MsgWithdrawProposal;
                    };
                    vote(value: _94.MsgVote): {
                        typeUrl: string;
                        value: _94.MsgVote;
                    };
                    exec(value: _94.MsgExec): {
                        typeUrl: string;
                        value: _94.MsgExec;
                    };
                    leaveGroup(value: _94.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _94.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateGroup) => _94.MsgCreateGroupAmino;
                    fromAmino: (object: _94.MsgCreateGroupAmino) => _94.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUpdateGroupMembers) => _94.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _94.MsgUpdateGroupMembersAmino) => _94.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUpdateGroupAdmin) => _94.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _94.MsgUpdateGroupAdminAmino) => _94.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUpdateGroupMetadata) => _94.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _94.MsgUpdateGroupMetadataAmino) => _94.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateGroupPolicy) => _94.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _94.MsgCreateGroupPolicyAmino) => _94.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateGroupWithPolicy) => _94.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _94.MsgCreateGroupWithPolicyAmino) => _94.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUpdateGroupPolicyAdmin) => _94.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _94.MsgUpdateGroupPolicyAdminAmino) => _94.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUpdateGroupPolicyDecisionPolicy) => _94.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _94.MsgUpdateGroupPolicyDecisionPolicyAmino) => _94.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUpdateGroupPolicyMetadata) => _94.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _94.MsgUpdateGroupPolicyMetadataAmino) => _94.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _94.MsgSubmitProposal) => _94.MsgSubmitProposalAmino;
                    fromAmino: (object: _94.MsgSubmitProposalAmino) => _94.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _94.MsgWithdrawProposal) => _94.MsgWithdrawProposalAmino;
                    fromAmino: (object: _94.MsgWithdrawProposalAmino) => _94.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _94.MsgVote) => _94.MsgVoteAmino;
                    fromAmino: (object: _94.MsgVoteAmino) => _94.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _94.MsgExec) => _94.MsgExecAmino;
                    fromAmino: (object: _94.MsgExecAmino) => _94.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _94.MsgLeaveGroup) => _94.MsgLeaveGroupAmino;
                    fromAmino: (object: _94.MsgLeaveGroupAmino) => _94.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _95.VoteOption;
            voteOptionToJSON(object: _95.VoteOption): string;
            proposalStatusFromJSON(object: any): _95.ProposalStatus;
            proposalStatusToJSON(object: _95.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _95.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _95.ProposalExecutorResult): string;
            VoteOption: typeof _95.VoteOption;
            VoteOptionSDKType: typeof _95.VoteOption;
            VoteOptionAmino: typeof _95.VoteOption;
            ProposalStatus: typeof _95.ProposalStatus;
            ProposalStatusSDKType: typeof _95.ProposalStatus;
            ProposalStatusAmino: typeof _95.ProposalStatus;
            ProposalExecutorResult: typeof _95.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _95.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _95.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _95.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Member;
                fromPartial(object: Partial<_95.Member>): _95.Member;
                fromAmino(object: _95.MemberAmino): _95.Member;
                toAmino(message: _95.Member): _95.MemberAmino;
                fromAminoMsg(object: _95.MemberAminoMsg): _95.Member;
                toAminoMsg(message: _95.Member): _95.MemberAminoMsg;
                fromProtoMsg(message: _95.MemberProtoMsg): _95.Member;
                toProto(message: _95.Member): Uint8Array;
                toProtoMsg(message: _95.Member): _95.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _95.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MemberRequest;
                fromPartial(object: Partial<_95.MemberRequest>): _95.MemberRequest;
                fromAmino(object: _95.MemberRequestAmino): _95.MemberRequest;
                toAmino(message: _95.MemberRequest): _95.MemberRequestAmino;
                fromAminoMsg(object: _95.MemberRequestAminoMsg): _95.MemberRequest;
                toAminoMsg(message: _95.MemberRequest): _95.MemberRequestAminoMsg;
                fromProtoMsg(message: _95.MemberRequestProtoMsg): _95.MemberRequest;
                toProto(message: _95.MemberRequest): Uint8Array;
                toProtoMsg(message: _95.MemberRequest): _95.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _95.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_95.ThresholdDecisionPolicy>): _95.ThresholdDecisionPolicy;
                fromAmino(object: _95.ThresholdDecisionPolicyAmino): _95.ThresholdDecisionPolicy;
                toAmino(message: _95.ThresholdDecisionPolicy): _95.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _95.ThresholdDecisionPolicyAminoMsg): _95.ThresholdDecisionPolicy;
                toAminoMsg(message: _95.ThresholdDecisionPolicy): _95.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _95.ThresholdDecisionPolicyProtoMsg): _95.ThresholdDecisionPolicy;
                toProto(message: _95.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _95.ThresholdDecisionPolicy): _95.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _95.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.PercentageDecisionPolicy;
                fromPartial(object: Partial<_95.PercentageDecisionPolicy>): _95.PercentageDecisionPolicy;
                fromAmino(object: _95.PercentageDecisionPolicyAmino): _95.PercentageDecisionPolicy;
                toAmino(message: _95.PercentageDecisionPolicy): _95.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _95.PercentageDecisionPolicyAminoMsg): _95.PercentageDecisionPolicy;
                toAminoMsg(message: _95.PercentageDecisionPolicy): _95.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _95.PercentageDecisionPolicyProtoMsg): _95.PercentageDecisionPolicy;
                toProto(message: _95.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _95.PercentageDecisionPolicy): _95.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _95.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.DecisionPolicyWindows;
                fromPartial(object: Partial<_95.DecisionPolicyWindows>): _95.DecisionPolicyWindows;
                fromAmino(object: _95.DecisionPolicyWindowsAmino): _95.DecisionPolicyWindows;
                toAmino(message: _95.DecisionPolicyWindows): _95.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _95.DecisionPolicyWindowsAminoMsg): _95.DecisionPolicyWindows;
                toAminoMsg(message: _95.DecisionPolicyWindows): _95.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _95.DecisionPolicyWindowsProtoMsg): _95.DecisionPolicyWindows;
                toProto(message: _95.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _95.DecisionPolicyWindows): _95.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _95.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.GroupInfo;
                fromPartial(object: Partial<_95.GroupInfo>): _95.GroupInfo;
                fromAmino(object: _95.GroupInfoAmino): _95.GroupInfo;
                toAmino(message: _95.GroupInfo): _95.GroupInfoAmino;
                fromAminoMsg(object: _95.GroupInfoAminoMsg): _95.GroupInfo;
                toAminoMsg(message: _95.GroupInfo): _95.GroupInfoAminoMsg;
                fromProtoMsg(message: _95.GroupInfoProtoMsg): _95.GroupInfo;
                toProto(message: _95.GroupInfo): Uint8Array;
                toProtoMsg(message: _95.GroupInfo): _95.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _95.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.GroupMember;
                fromPartial(object: Partial<_95.GroupMember>): _95.GroupMember;
                fromAmino(object: _95.GroupMemberAmino): _95.GroupMember;
                toAmino(message: _95.GroupMember): _95.GroupMemberAmino;
                fromAminoMsg(object: _95.GroupMemberAminoMsg): _95.GroupMember;
                toAminoMsg(message: _95.GroupMember): _95.GroupMemberAminoMsg;
                fromProtoMsg(message: _95.GroupMemberProtoMsg): _95.GroupMember;
                toProto(message: _95.GroupMember): Uint8Array;
                toProtoMsg(message: _95.GroupMember): _95.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _95.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.GroupPolicyInfo;
                fromPartial(object: Partial<_95.GroupPolicyInfo>): _95.GroupPolicyInfo;
                fromAmino(object: _95.GroupPolicyInfoAmino): _95.GroupPolicyInfo;
                toAmino(message: _95.GroupPolicyInfo): _95.GroupPolicyInfoAmino;
                fromAminoMsg(object: _95.GroupPolicyInfoAminoMsg): _95.GroupPolicyInfo;
                toAminoMsg(message: _95.GroupPolicyInfo): _95.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _95.GroupPolicyInfoProtoMsg): _95.GroupPolicyInfo;
                toProto(message: _95.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _95.GroupPolicyInfo): _95.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _95.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Proposal;
                fromPartial(object: Partial<_95.Proposal>): _95.Proposal;
                fromAmino(object: _95.ProposalAmino): _95.Proposal;
                toAmino(message: _95.Proposal): _95.ProposalAmino;
                fromAminoMsg(object: _95.ProposalAminoMsg): _95.Proposal;
                toAminoMsg(message: _95.Proposal): _95.ProposalAminoMsg;
                fromProtoMsg(message: _95.ProposalProtoMsg): _95.Proposal;
                toProto(message: _95.Proposal): Uint8Array;
                toProtoMsg(message: _95.Proposal): _95.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _95.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.TallyResult;
                fromPartial(object: Partial<_95.TallyResult>): _95.TallyResult;
                fromAmino(object: _95.TallyResultAmino): _95.TallyResult;
                toAmino(message: _95.TallyResult): _95.TallyResultAmino;
                fromAminoMsg(object: _95.TallyResultAminoMsg): _95.TallyResult;
                toAminoMsg(message: _95.TallyResult): _95.TallyResultAminoMsg;
                fromProtoMsg(message: _95.TallyResultProtoMsg): _95.TallyResult;
                toProto(message: _95.TallyResult): Uint8Array;
                toProtoMsg(message: _95.TallyResult): _95.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _95.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Vote;
                fromPartial(object: Partial<_95.Vote>): _95.Vote;
                fromAmino(object: _95.VoteAmino): _95.Vote;
                toAmino(message: _95.Vote): _95.VoteAmino;
                fromAminoMsg(object: _95.VoteAminoMsg): _95.Vote;
                toAminoMsg(message: _95.Vote): _95.VoteAminoMsg;
                fromProtoMsg(message: _95.VoteProtoMsg): _95.Vote;
                toProto(message: _95.Vote): Uint8Array;
                toProtoMsg(message: _95.Vote): _95.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _95.ThresholdDecisionPolicy | _95.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _94.Exec;
            execToJSON(object: _94.Exec): string;
            Exec: typeof _94.Exec;
            ExecSDKType: typeof _94.Exec;
            ExecAmino: typeof _94.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _94.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateGroup;
                fromPartial(object: Partial<_94.MsgCreateGroup>): _94.MsgCreateGroup;
                fromAmino(object: _94.MsgCreateGroupAmino): _94.MsgCreateGroup;
                toAmino(message: _94.MsgCreateGroup): _94.MsgCreateGroupAmino;
                fromAminoMsg(object: _94.MsgCreateGroupAminoMsg): _94.MsgCreateGroup;
                toAminoMsg(message: _94.MsgCreateGroup): _94.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _94.MsgCreateGroupProtoMsg): _94.MsgCreateGroup;
                toProto(message: _94.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _94.MsgCreateGroup): _94.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _94.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateGroupResponse;
                fromPartial(object: Partial<_94.MsgCreateGroupResponse>): _94.MsgCreateGroupResponse;
                fromAmino(object: _94.MsgCreateGroupResponseAmino): _94.MsgCreateGroupResponse;
                toAmino(message: _94.MsgCreateGroupResponse): _94.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _94.MsgCreateGroupResponseAminoMsg): _94.MsgCreateGroupResponse;
                toAminoMsg(message: _94.MsgCreateGroupResponse): _94.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateGroupResponseProtoMsg): _94.MsgCreateGroupResponse;
                toProto(message: _94.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateGroupResponse): _94.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _94.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_94.MsgUpdateGroupMembers>): _94.MsgUpdateGroupMembers;
                fromAmino(object: _94.MsgUpdateGroupMembersAmino): _94.MsgUpdateGroupMembers;
                toAmino(message: _94.MsgUpdateGroupMembers): _94.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupMembersAminoMsg): _94.MsgUpdateGroupMembers;
                toAminoMsg(message: _94.MsgUpdateGroupMembers): _94.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupMembersProtoMsg): _94.MsgUpdateGroupMembers;
                toProto(message: _94.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupMembers): _94.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _94.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_94.MsgUpdateGroupMembersResponse>): _94.MsgUpdateGroupMembersResponse;
                fromAmino(_: _94.MsgUpdateGroupMembersResponseAmino): _94.MsgUpdateGroupMembersResponse;
                toAmino(_: _94.MsgUpdateGroupMembersResponse): _94.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupMembersResponseAminoMsg): _94.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _94.MsgUpdateGroupMembersResponse): _94.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupMembersResponseProtoMsg): _94.MsgUpdateGroupMembersResponse;
                toProto(message: _94.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupMembersResponse): _94.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _94.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_94.MsgUpdateGroupAdmin>): _94.MsgUpdateGroupAdmin;
                fromAmino(object: _94.MsgUpdateGroupAdminAmino): _94.MsgUpdateGroupAdmin;
                toAmino(message: _94.MsgUpdateGroupAdmin): _94.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupAdminAminoMsg): _94.MsgUpdateGroupAdmin;
                toAminoMsg(message: _94.MsgUpdateGroupAdmin): _94.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupAdminProtoMsg): _94.MsgUpdateGroupAdmin;
                toProto(message: _94.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupAdmin): _94.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _94.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_94.MsgUpdateGroupAdminResponse>): _94.MsgUpdateGroupAdminResponse;
                fromAmino(_: _94.MsgUpdateGroupAdminResponseAmino): _94.MsgUpdateGroupAdminResponse;
                toAmino(_: _94.MsgUpdateGroupAdminResponse): _94.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupAdminResponseAminoMsg): _94.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _94.MsgUpdateGroupAdminResponse): _94.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupAdminResponseProtoMsg): _94.MsgUpdateGroupAdminResponse;
                toProto(message: _94.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupAdminResponse): _94.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _94.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_94.MsgUpdateGroupMetadata>): _94.MsgUpdateGroupMetadata;
                fromAmino(object: _94.MsgUpdateGroupMetadataAmino): _94.MsgUpdateGroupMetadata;
                toAmino(message: _94.MsgUpdateGroupMetadata): _94.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupMetadataAminoMsg): _94.MsgUpdateGroupMetadata;
                toAminoMsg(message: _94.MsgUpdateGroupMetadata): _94.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupMetadataProtoMsg): _94.MsgUpdateGroupMetadata;
                toProto(message: _94.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupMetadata): _94.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _94.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_94.MsgUpdateGroupMetadataResponse>): _94.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _94.MsgUpdateGroupMetadataResponseAmino): _94.MsgUpdateGroupMetadataResponse;
                toAmino(_: _94.MsgUpdateGroupMetadataResponse): _94.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupMetadataResponseAminoMsg): _94.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _94.MsgUpdateGroupMetadataResponse): _94.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupMetadataResponseProtoMsg): _94.MsgUpdateGroupMetadataResponse;
                toProto(message: _94.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupMetadataResponse): _94.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _94.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_94.MsgCreateGroupPolicy>): _94.MsgCreateGroupPolicy;
                fromAmino(object: _94.MsgCreateGroupPolicyAmino): _94.MsgCreateGroupPolicy;
                toAmino(message: _94.MsgCreateGroupPolicy): _94.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _94.MsgCreateGroupPolicyAminoMsg): _94.MsgCreateGroupPolicy;
                toAminoMsg(message: _94.MsgCreateGroupPolicy): _94.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _94.MsgCreateGroupPolicyProtoMsg): _94.MsgCreateGroupPolicy;
                toProto(message: _94.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _94.MsgCreateGroupPolicy): _94.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _94.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_94.MsgCreateGroupPolicyResponse>): _94.MsgCreateGroupPolicyResponse;
                fromAmino(object: _94.MsgCreateGroupPolicyResponseAmino): _94.MsgCreateGroupPolicyResponse;
                toAmino(message: _94.MsgCreateGroupPolicyResponse): _94.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _94.MsgCreateGroupPolicyResponseAminoMsg): _94.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _94.MsgCreateGroupPolicyResponse): _94.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateGroupPolicyResponseProtoMsg): _94.MsgCreateGroupPolicyResponse;
                toProto(message: _94.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateGroupPolicyResponse): _94.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _94.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_94.MsgUpdateGroupPolicyAdmin>): _94.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _94.MsgUpdateGroupPolicyAdminAmino): _94.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _94.MsgUpdateGroupPolicyAdmin): _94.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupPolicyAdminAminoMsg): _94.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _94.MsgUpdateGroupPolicyAdmin): _94.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupPolicyAdminProtoMsg): _94.MsgUpdateGroupPolicyAdmin;
                toProto(message: _94.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupPolicyAdmin): _94.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _94.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_94.MsgUpdateGroupPolicyAdminResponse>): _94.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _94.MsgUpdateGroupPolicyAdminResponseAmino): _94.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _94.MsgUpdateGroupPolicyAdminResponse): _94.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupPolicyAdminResponseAminoMsg): _94.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _94.MsgUpdateGroupPolicyAdminResponse): _94.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupPolicyAdminResponseProtoMsg): _94.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _94.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupPolicyAdminResponse): _94.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _94.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_94.MsgCreateGroupWithPolicy>): _94.MsgCreateGroupWithPolicy;
                fromAmino(object: _94.MsgCreateGroupWithPolicyAmino): _94.MsgCreateGroupWithPolicy;
                toAmino(message: _94.MsgCreateGroupWithPolicy): _94.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _94.MsgCreateGroupWithPolicyAminoMsg): _94.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _94.MsgCreateGroupWithPolicy): _94.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _94.MsgCreateGroupWithPolicyProtoMsg): _94.MsgCreateGroupWithPolicy;
                toProto(message: _94.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _94.MsgCreateGroupWithPolicy): _94.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _94.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_94.MsgCreateGroupWithPolicyResponse>): _94.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _94.MsgCreateGroupWithPolicyResponseAmino): _94.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _94.MsgCreateGroupWithPolicyResponse): _94.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _94.MsgCreateGroupWithPolicyResponseAminoMsg): _94.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _94.MsgCreateGroupWithPolicyResponse): _94.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateGroupWithPolicyResponseProtoMsg): _94.MsgCreateGroupWithPolicyResponse;
                toProto(message: _94.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateGroupWithPolicyResponse): _94.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _94.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_94.MsgUpdateGroupPolicyDecisionPolicy>): _94.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _94.MsgUpdateGroupPolicyDecisionPolicyAmino): _94.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _94.MsgUpdateGroupPolicyDecisionPolicy): _94.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _94.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _94.MsgUpdateGroupPolicyDecisionPolicy): _94.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _94.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _94.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupPolicyDecisionPolicy): _94.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _94.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_94.MsgUpdateGroupPolicyDecisionPolicyResponse>): _94.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _94.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _94.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _94.MsgUpdateGroupPolicyDecisionPolicyResponse): _94.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _94.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _94.MsgUpdateGroupPolicyDecisionPolicyResponse): _94.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _94.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _94.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupPolicyDecisionPolicyResponse): _94.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _94.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_94.MsgUpdateGroupPolicyMetadata>): _94.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _94.MsgUpdateGroupPolicyMetadataAmino): _94.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _94.MsgUpdateGroupPolicyMetadata): _94.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupPolicyMetadataAminoMsg): _94.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _94.MsgUpdateGroupPolicyMetadata): _94.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupPolicyMetadataProtoMsg): _94.MsgUpdateGroupPolicyMetadata;
                toProto(message: _94.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupPolicyMetadata): _94.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _94.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_94.MsgUpdateGroupPolicyMetadataResponse>): _94.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _94.MsgUpdateGroupPolicyMetadataResponseAmino): _94.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _94.MsgUpdateGroupPolicyMetadataResponse): _94.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _94.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _94.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _94.MsgUpdateGroupPolicyMetadataResponse): _94.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _94.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _94.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUpdateGroupPolicyMetadataResponse): _94.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
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
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _94.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgWithdrawProposal;
                fromPartial(object: Partial<_94.MsgWithdrawProposal>): _94.MsgWithdrawProposal;
                fromAmino(object: _94.MsgWithdrawProposalAmino): _94.MsgWithdrawProposal;
                toAmino(message: _94.MsgWithdrawProposal): _94.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _94.MsgWithdrawProposalAminoMsg): _94.MsgWithdrawProposal;
                toAminoMsg(message: _94.MsgWithdrawProposal): _94.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _94.MsgWithdrawProposalProtoMsg): _94.MsgWithdrawProposal;
                toProto(message: _94.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _94.MsgWithdrawProposal): _94.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _94.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_94.MsgWithdrawProposalResponse>): _94.MsgWithdrawProposalResponse;
                fromAmino(_: _94.MsgWithdrawProposalResponseAmino): _94.MsgWithdrawProposalResponse;
                toAmino(_: _94.MsgWithdrawProposalResponse): _94.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _94.MsgWithdrawProposalResponseAminoMsg): _94.MsgWithdrawProposalResponse;
                toAminoMsg(message: _94.MsgWithdrawProposalResponse): _94.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _94.MsgWithdrawProposalResponseProtoMsg): _94.MsgWithdrawProposalResponse;
                toProto(message: _94.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _94.MsgWithdrawProposalResponse): _94.MsgWithdrawProposalResponseProtoMsg;
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
            MsgExec: {
                typeUrl: string;
                encode(message: _94.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgExec;
                fromPartial(object: Partial<_94.MsgExec>): _94.MsgExec;
                fromAmino(object: _94.MsgExecAmino): _94.MsgExec;
                toAmino(message: _94.MsgExec): _94.MsgExecAmino;
                fromAminoMsg(object: _94.MsgExecAminoMsg): _94.MsgExec;
                toAminoMsg(message: _94.MsgExec): _94.MsgExecAminoMsg;
                fromProtoMsg(message: _94.MsgExecProtoMsg): _94.MsgExec;
                toProto(message: _94.MsgExec): Uint8Array;
                toProtoMsg(message: _94.MsgExec): _94.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _94.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgExecResponse;
                fromPartial(object: Partial<_94.MsgExecResponse>): _94.MsgExecResponse;
                fromAmino(object: _94.MsgExecResponseAmino): _94.MsgExecResponse;
                toAmino(message: _94.MsgExecResponse): _94.MsgExecResponseAmino;
                fromAminoMsg(object: _94.MsgExecResponseAminoMsg): _94.MsgExecResponse;
                toAminoMsg(message: _94.MsgExecResponse): _94.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _94.MsgExecResponseProtoMsg): _94.MsgExecResponse;
                toProto(message: _94.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _94.MsgExecResponse): _94.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _94.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgLeaveGroup;
                fromPartial(object: Partial<_94.MsgLeaveGroup>): _94.MsgLeaveGroup;
                fromAmino(object: _94.MsgLeaveGroupAmino): _94.MsgLeaveGroup;
                toAmino(message: _94.MsgLeaveGroup): _94.MsgLeaveGroupAmino;
                fromAminoMsg(object: _94.MsgLeaveGroupAminoMsg): _94.MsgLeaveGroup;
                toAminoMsg(message: _94.MsgLeaveGroup): _94.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _94.MsgLeaveGroupProtoMsg): _94.MsgLeaveGroup;
                toProto(message: _94.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _94.MsgLeaveGroup): _94.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _94.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_94.MsgLeaveGroupResponse>): _94.MsgLeaveGroupResponse;
                fromAmino(_: _94.MsgLeaveGroupResponseAmino): _94.MsgLeaveGroupResponse;
                toAmino(_: _94.MsgLeaveGroupResponse): _94.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _94.MsgLeaveGroupResponseAminoMsg): _94.MsgLeaveGroupResponse;
                toAminoMsg(message: _94.MsgLeaveGroupResponse): _94.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _94.MsgLeaveGroupResponseProtoMsg): _94.MsgLeaveGroupResponse;
                toProto(message: _94.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _94.MsgLeaveGroupResponse): _94.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupInfoRequest;
                fromPartial(object: Partial<_93.QueryGroupInfoRequest>): _93.QueryGroupInfoRequest;
                fromAmino(object: _93.QueryGroupInfoRequestAmino): _93.QueryGroupInfoRequest;
                toAmino(message: _93.QueryGroupInfoRequest): _93.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _93.QueryGroupInfoRequestAminoMsg): _93.QueryGroupInfoRequest;
                toAminoMsg(message: _93.QueryGroupInfoRequest): _93.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupInfoRequestProtoMsg): _93.QueryGroupInfoRequest;
                toProto(message: _93.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupInfoRequest): _93.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupInfoResponse;
                fromPartial(object: Partial<_93.QueryGroupInfoResponse>): _93.QueryGroupInfoResponse;
                fromAmino(object: _93.QueryGroupInfoResponseAmino): _93.QueryGroupInfoResponse;
                toAmino(message: _93.QueryGroupInfoResponse): _93.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _93.QueryGroupInfoResponseAminoMsg): _93.QueryGroupInfoResponse;
                toAminoMsg(message: _93.QueryGroupInfoResponse): _93.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupInfoResponseProtoMsg): _93.QueryGroupInfoResponse;
                toProto(message: _93.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupInfoResponse): _93.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_93.QueryGroupPolicyInfoRequest>): _93.QueryGroupPolicyInfoRequest;
                fromAmino(object: _93.QueryGroupPolicyInfoRequestAmino): _93.QueryGroupPolicyInfoRequest;
                toAmino(message: _93.QueryGroupPolicyInfoRequest): _93.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _93.QueryGroupPolicyInfoRequestAminoMsg): _93.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _93.QueryGroupPolicyInfoRequest): _93.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupPolicyInfoRequestProtoMsg): _93.QueryGroupPolicyInfoRequest;
                toProto(message: _93.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupPolicyInfoRequest): _93.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_93.QueryGroupPolicyInfoResponse>): _93.QueryGroupPolicyInfoResponse;
                fromAmino(object: _93.QueryGroupPolicyInfoResponseAmino): _93.QueryGroupPolicyInfoResponse;
                toAmino(message: _93.QueryGroupPolicyInfoResponse): _93.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _93.QueryGroupPolicyInfoResponseAminoMsg): _93.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _93.QueryGroupPolicyInfoResponse): _93.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupPolicyInfoResponseProtoMsg): _93.QueryGroupPolicyInfoResponse;
                toProto(message: _93.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupPolicyInfoResponse): _93.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupMembersRequest;
                fromPartial(object: Partial<_93.QueryGroupMembersRequest>): _93.QueryGroupMembersRequest;
                fromAmino(object: _93.QueryGroupMembersRequestAmino): _93.QueryGroupMembersRequest;
                toAmino(message: _93.QueryGroupMembersRequest): _93.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _93.QueryGroupMembersRequestAminoMsg): _93.QueryGroupMembersRequest;
                toAminoMsg(message: _93.QueryGroupMembersRequest): _93.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupMembersRequestProtoMsg): _93.QueryGroupMembersRequest;
                toProto(message: _93.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupMembersRequest): _93.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupMembersResponse;
                fromPartial(object: Partial<_93.QueryGroupMembersResponse>): _93.QueryGroupMembersResponse;
                fromAmino(object: _93.QueryGroupMembersResponseAmino): _93.QueryGroupMembersResponse;
                toAmino(message: _93.QueryGroupMembersResponse): _93.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _93.QueryGroupMembersResponseAminoMsg): _93.QueryGroupMembersResponse;
                toAminoMsg(message: _93.QueryGroupMembersResponse): _93.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupMembersResponseProtoMsg): _93.QueryGroupMembersResponse;
                toProto(message: _93.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupMembersResponse): _93.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_93.QueryGroupsByAdminRequest>): _93.QueryGroupsByAdminRequest;
                fromAmino(object: _93.QueryGroupsByAdminRequestAmino): _93.QueryGroupsByAdminRequest;
                toAmino(message: _93.QueryGroupsByAdminRequest): _93.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _93.QueryGroupsByAdminRequestAminoMsg): _93.QueryGroupsByAdminRequest;
                toAminoMsg(message: _93.QueryGroupsByAdminRequest): _93.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupsByAdminRequestProtoMsg): _93.QueryGroupsByAdminRequest;
                toProto(message: _93.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupsByAdminRequest): _93.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_93.QueryGroupsByAdminResponse>): _93.QueryGroupsByAdminResponse;
                fromAmino(object: _93.QueryGroupsByAdminResponseAmino): _93.QueryGroupsByAdminResponse;
                toAmino(message: _93.QueryGroupsByAdminResponse): _93.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _93.QueryGroupsByAdminResponseAminoMsg): _93.QueryGroupsByAdminResponse;
                toAminoMsg(message: _93.QueryGroupsByAdminResponse): _93.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupsByAdminResponseProtoMsg): _93.QueryGroupsByAdminResponse;
                toProto(message: _93.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupsByAdminResponse): _93.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_93.QueryGroupPoliciesByGroupRequest>): _93.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _93.QueryGroupPoliciesByGroupRequestAmino): _93.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _93.QueryGroupPoliciesByGroupRequest): _93.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _93.QueryGroupPoliciesByGroupRequestAminoMsg): _93.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _93.QueryGroupPoliciesByGroupRequest): _93.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupPoliciesByGroupRequestProtoMsg): _93.QueryGroupPoliciesByGroupRequest;
                toProto(message: _93.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupPoliciesByGroupRequest): _93.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_93.QueryGroupPoliciesByGroupResponse>): _93.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _93.QueryGroupPoliciesByGroupResponseAmino): _93.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _93.QueryGroupPoliciesByGroupResponse): _93.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _93.QueryGroupPoliciesByGroupResponseAminoMsg): _93.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _93.QueryGroupPoliciesByGroupResponse): _93.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupPoliciesByGroupResponseProtoMsg): _93.QueryGroupPoliciesByGroupResponse;
                toProto(message: _93.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupPoliciesByGroupResponse): _93.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_93.QueryGroupPoliciesByAdminRequest>): _93.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _93.QueryGroupPoliciesByAdminRequestAmino): _93.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _93.QueryGroupPoliciesByAdminRequest): _93.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _93.QueryGroupPoliciesByAdminRequestAminoMsg): _93.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _93.QueryGroupPoliciesByAdminRequest): _93.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupPoliciesByAdminRequestProtoMsg): _93.QueryGroupPoliciesByAdminRequest;
                toProto(message: _93.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupPoliciesByAdminRequest): _93.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_93.QueryGroupPoliciesByAdminResponse>): _93.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _93.QueryGroupPoliciesByAdminResponseAmino): _93.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _93.QueryGroupPoliciesByAdminResponse): _93.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _93.QueryGroupPoliciesByAdminResponseAminoMsg): _93.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _93.QueryGroupPoliciesByAdminResponse): _93.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupPoliciesByAdminResponseProtoMsg): _93.QueryGroupPoliciesByAdminResponse;
                toProto(message: _93.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupPoliciesByAdminResponse): _93.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
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
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _93.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_93.QueryProposalsByGroupPolicyRequest>): _93.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _93.QueryProposalsByGroupPolicyRequestAmino): _93.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _93.QueryProposalsByGroupPolicyRequest): _93.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _93.QueryProposalsByGroupPolicyRequestAminoMsg): _93.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _93.QueryProposalsByGroupPolicyRequest): _93.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _93.QueryProposalsByGroupPolicyRequestProtoMsg): _93.QueryProposalsByGroupPolicyRequest;
                toProto(message: _93.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProposalsByGroupPolicyRequest): _93.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _93.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_93.QueryProposalsByGroupPolicyResponse>): _93.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _93.QueryProposalsByGroupPolicyResponseAmino): _93.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _93.QueryProposalsByGroupPolicyResponse): _93.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _93.QueryProposalsByGroupPolicyResponseAminoMsg): _93.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _93.QueryProposalsByGroupPolicyResponse): _93.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _93.QueryProposalsByGroupPolicyResponseProtoMsg): _93.QueryProposalsByGroupPolicyResponse;
                toProto(message: _93.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProposalsByGroupPolicyResponse): _93.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _93.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_93.QueryVoteByProposalVoterRequest>): _93.QueryVoteByProposalVoterRequest;
                fromAmino(object: _93.QueryVoteByProposalVoterRequestAmino): _93.QueryVoteByProposalVoterRequest;
                toAmino(message: _93.QueryVoteByProposalVoterRequest): _93.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _93.QueryVoteByProposalVoterRequestAminoMsg): _93.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _93.QueryVoteByProposalVoterRequest): _93.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _93.QueryVoteByProposalVoterRequestProtoMsg): _93.QueryVoteByProposalVoterRequest;
                toProto(message: _93.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _93.QueryVoteByProposalVoterRequest): _93.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _93.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_93.QueryVoteByProposalVoterResponse>): _93.QueryVoteByProposalVoterResponse;
                fromAmino(object: _93.QueryVoteByProposalVoterResponseAmino): _93.QueryVoteByProposalVoterResponse;
                toAmino(message: _93.QueryVoteByProposalVoterResponse): _93.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _93.QueryVoteByProposalVoterResponseAminoMsg): _93.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _93.QueryVoteByProposalVoterResponse): _93.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _93.QueryVoteByProposalVoterResponseProtoMsg): _93.QueryVoteByProposalVoterResponse;
                toProto(message: _93.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _93.QueryVoteByProposalVoterResponse): _93.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _93.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_93.QueryVotesByProposalRequest>): _93.QueryVotesByProposalRequest;
                fromAmino(object: _93.QueryVotesByProposalRequestAmino): _93.QueryVotesByProposalRequest;
                toAmino(message: _93.QueryVotesByProposalRequest): _93.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _93.QueryVotesByProposalRequestAminoMsg): _93.QueryVotesByProposalRequest;
                toAminoMsg(message: _93.QueryVotesByProposalRequest): _93.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _93.QueryVotesByProposalRequestProtoMsg): _93.QueryVotesByProposalRequest;
                toProto(message: _93.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _93.QueryVotesByProposalRequest): _93.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _93.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_93.QueryVotesByProposalResponse>): _93.QueryVotesByProposalResponse;
                fromAmino(object: _93.QueryVotesByProposalResponseAmino): _93.QueryVotesByProposalResponse;
                toAmino(message: _93.QueryVotesByProposalResponse): _93.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _93.QueryVotesByProposalResponseAminoMsg): _93.QueryVotesByProposalResponse;
                toAminoMsg(message: _93.QueryVotesByProposalResponse): _93.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _93.QueryVotesByProposalResponseProtoMsg): _93.QueryVotesByProposalResponse;
                toProto(message: _93.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _93.QueryVotesByProposalResponse): _93.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _93.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_93.QueryVotesByVoterRequest>): _93.QueryVotesByVoterRequest;
                fromAmino(object: _93.QueryVotesByVoterRequestAmino): _93.QueryVotesByVoterRequest;
                toAmino(message: _93.QueryVotesByVoterRequest): _93.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _93.QueryVotesByVoterRequestAminoMsg): _93.QueryVotesByVoterRequest;
                toAminoMsg(message: _93.QueryVotesByVoterRequest): _93.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _93.QueryVotesByVoterRequestProtoMsg): _93.QueryVotesByVoterRequest;
                toProto(message: _93.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _93.QueryVotesByVoterRequest): _93.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _93.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_93.QueryVotesByVoterResponse>): _93.QueryVotesByVoterResponse;
                fromAmino(object: _93.QueryVotesByVoterResponseAmino): _93.QueryVotesByVoterResponse;
                toAmino(message: _93.QueryVotesByVoterResponse): _93.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _93.QueryVotesByVoterResponseAminoMsg): _93.QueryVotesByVoterResponse;
                toAminoMsg(message: _93.QueryVotesByVoterResponse): _93.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _93.QueryVotesByVoterResponseProtoMsg): _93.QueryVotesByVoterResponse;
                toProto(message: _93.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _93.QueryVotesByVoterResponse): _93.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_93.QueryGroupsByMemberRequest>): _93.QueryGroupsByMemberRequest;
                fromAmino(object: _93.QueryGroupsByMemberRequestAmino): _93.QueryGroupsByMemberRequest;
                toAmino(message: _93.QueryGroupsByMemberRequest): _93.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _93.QueryGroupsByMemberRequestAminoMsg): _93.QueryGroupsByMemberRequest;
                toAminoMsg(message: _93.QueryGroupsByMemberRequest): _93.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupsByMemberRequestProtoMsg): _93.QueryGroupsByMemberRequest;
                toProto(message: _93.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupsByMemberRequest): _93.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_93.QueryGroupsByMemberResponse>): _93.QueryGroupsByMemberResponse;
                fromAmino(object: _93.QueryGroupsByMemberResponseAmino): _93.QueryGroupsByMemberResponse;
                toAmino(message: _93.QueryGroupsByMemberResponse): _93.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _93.QueryGroupsByMemberResponseAminoMsg): _93.QueryGroupsByMemberResponse;
                toAminoMsg(message: _93.QueryGroupsByMemberResponse): _93.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupsByMemberResponseProtoMsg): _93.QueryGroupsByMemberResponse;
                toProto(message: _93.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupsByMemberResponse): _93.QueryGroupsByMemberResponseProtoMsg;
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
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _93.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupsRequest;
                fromPartial(object: Partial<_93.QueryGroupsRequest>): _93.QueryGroupsRequest;
                fromAmino(object: _93.QueryGroupsRequestAmino): _93.QueryGroupsRequest;
                toAmino(message: _93.QueryGroupsRequest): _93.QueryGroupsRequestAmino;
                fromAminoMsg(object: _93.QueryGroupsRequestAminoMsg): _93.QueryGroupsRequest;
                toAminoMsg(message: _93.QueryGroupsRequest): _93.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryGroupsRequestProtoMsg): _93.QueryGroupsRequest;
                toProto(message: _93.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryGroupsRequest): _93.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _93.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryGroupsResponse;
                fromPartial(object: Partial<_93.QueryGroupsResponse>): _93.QueryGroupsResponse;
                fromAmino(object: _93.QueryGroupsResponseAmino): _93.QueryGroupsResponse;
                toAmino(message: _93.QueryGroupsResponse): _93.QueryGroupsResponseAmino;
                fromAminoMsg(object: _93.QueryGroupsResponseAminoMsg): _93.QueryGroupsResponse;
                toAminoMsg(message: _93.QueryGroupsResponse): _93.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryGroupsResponseProtoMsg): _93.QueryGroupsResponse;
                toProto(message: _93.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryGroupsResponse): _93.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _91.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventCreateGroup;
                fromPartial(object: Partial<_91.EventCreateGroup>): _91.EventCreateGroup;
                fromAmino(object: _91.EventCreateGroupAmino): _91.EventCreateGroup;
                toAmino(message: _91.EventCreateGroup): _91.EventCreateGroupAmino;
                fromAminoMsg(object: _91.EventCreateGroupAminoMsg): _91.EventCreateGroup;
                toAminoMsg(message: _91.EventCreateGroup): _91.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _91.EventCreateGroupProtoMsg): _91.EventCreateGroup;
                toProto(message: _91.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _91.EventCreateGroup): _91.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _91.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventUpdateGroup;
                fromPartial(object: Partial<_91.EventUpdateGroup>): _91.EventUpdateGroup;
                fromAmino(object: _91.EventUpdateGroupAmino): _91.EventUpdateGroup;
                toAmino(message: _91.EventUpdateGroup): _91.EventUpdateGroupAmino;
                fromAminoMsg(object: _91.EventUpdateGroupAminoMsg): _91.EventUpdateGroup;
                toAminoMsg(message: _91.EventUpdateGroup): _91.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _91.EventUpdateGroupProtoMsg): _91.EventUpdateGroup;
                toProto(message: _91.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _91.EventUpdateGroup): _91.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _91.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventCreateGroupPolicy;
                fromPartial(object: Partial<_91.EventCreateGroupPolicy>): _91.EventCreateGroupPolicy;
                fromAmino(object: _91.EventCreateGroupPolicyAmino): _91.EventCreateGroupPolicy;
                toAmino(message: _91.EventCreateGroupPolicy): _91.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _91.EventCreateGroupPolicyAminoMsg): _91.EventCreateGroupPolicy;
                toAminoMsg(message: _91.EventCreateGroupPolicy): _91.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _91.EventCreateGroupPolicyProtoMsg): _91.EventCreateGroupPolicy;
                toProto(message: _91.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _91.EventCreateGroupPolicy): _91.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _91.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_91.EventUpdateGroupPolicy>): _91.EventUpdateGroupPolicy;
                fromAmino(object: _91.EventUpdateGroupPolicyAmino): _91.EventUpdateGroupPolicy;
                toAmino(message: _91.EventUpdateGroupPolicy): _91.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _91.EventUpdateGroupPolicyAminoMsg): _91.EventUpdateGroupPolicy;
                toAminoMsg(message: _91.EventUpdateGroupPolicy): _91.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _91.EventUpdateGroupPolicyProtoMsg): _91.EventUpdateGroupPolicy;
                toProto(message: _91.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _91.EventUpdateGroupPolicy): _91.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _91.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventSubmitProposal;
                fromPartial(object: Partial<_91.EventSubmitProposal>): _91.EventSubmitProposal;
                fromAmino(object: _91.EventSubmitProposalAmino): _91.EventSubmitProposal;
                toAmino(message: _91.EventSubmitProposal): _91.EventSubmitProposalAmino;
                fromAminoMsg(object: _91.EventSubmitProposalAminoMsg): _91.EventSubmitProposal;
                toAminoMsg(message: _91.EventSubmitProposal): _91.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _91.EventSubmitProposalProtoMsg): _91.EventSubmitProposal;
                toProto(message: _91.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _91.EventSubmitProposal): _91.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _91.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventWithdrawProposal;
                fromPartial(object: Partial<_91.EventWithdrawProposal>): _91.EventWithdrawProposal;
                fromAmino(object: _91.EventWithdrawProposalAmino): _91.EventWithdrawProposal;
                toAmino(message: _91.EventWithdrawProposal): _91.EventWithdrawProposalAmino;
                fromAminoMsg(object: _91.EventWithdrawProposalAminoMsg): _91.EventWithdrawProposal;
                toAminoMsg(message: _91.EventWithdrawProposal): _91.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _91.EventWithdrawProposalProtoMsg): _91.EventWithdrawProposal;
                toProto(message: _91.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _91.EventWithdrawProposal): _91.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _91.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventVote;
                fromPartial(object: Partial<_91.EventVote>): _91.EventVote;
                fromAmino(object: _91.EventVoteAmino): _91.EventVote;
                toAmino(message: _91.EventVote): _91.EventVoteAmino;
                fromAminoMsg(object: _91.EventVoteAminoMsg): _91.EventVote;
                toAminoMsg(message: _91.EventVote): _91.EventVoteAminoMsg;
                fromProtoMsg(message: _91.EventVoteProtoMsg): _91.EventVote;
                toProto(message: _91.EventVote): Uint8Array;
                toProtoMsg(message: _91.EventVote): _91.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _91.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventExec;
                fromPartial(object: Partial<_91.EventExec>): _91.EventExec;
                fromAmino(object: _91.EventExecAmino): _91.EventExec;
                toAmino(message: _91.EventExec): _91.EventExecAmino;
                fromAminoMsg(object: _91.EventExecAminoMsg): _91.EventExec;
                toAminoMsg(message: _91.EventExec): _91.EventExecAminoMsg;
                fromProtoMsg(message: _91.EventExecProtoMsg): _91.EventExec;
                toProto(message: _91.EventExec): Uint8Array;
                toProtoMsg(message: _91.EventExec): _91.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _91.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventLeaveGroup;
                fromPartial(object: Partial<_91.EventLeaveGroup>): _91.EventLeaveGroup;
                fromAmino(object: _91.EventLeaveGroupAmino): _91.EventLeaveGroup;
                toAmino(message: _91.EventLeaveGroup): _91.EventLeaveGroupAmino;
                fromAminoMsg(object: _91.EventLeaveGroupAminoMsg): _91.EventLeaveGroup;
                toAminoMsg(message: _91.EventLeaveGroup): _91.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _91.EventLeaveGroupProtoMsg): _91.EventLeaveGroup;
                toProto(message: _91.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _91.EventLeaveGroup): _91.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _91.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.EventProposalPruned;
                fromPartial(object: Partial<_91.EventProposalPruned>): _91.EventProposalPruned;
                fromAmino(object: _91.EventProposalPrunedAmino): _91.EventProposalPruned;
                toAmino(message: _91.EventProposalPruned): _91.EventProposalPrunedAmino;
                fromAminoMsg(object: _91.EventProposalPrunedAminoMsg): _91.EventProposalPruned;
                toAminoMsg(message: _91.EventProposalPruned): _91.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _91.EventProposalPrunedProtoMsg): _91.EventProposalPruned;
                toProto(message: _91.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _91.EventProposalPruned): _91.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _96.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.Module;
                    fromPartial(object: Partial<_96.Module>): _96.Module;
                    fromAmino(object: _96.ModuleAmino): _96.Module;
                    toAmino(message: _96.Module): _96.ModuleAmino;
                    fromAminoMsg(object: _96.ModuleAminoMsg): _96.Module;
                    toAminoMsg(message: _96.Module): _96.ModuleAminoMsg;
                    fromProtoMsg(message: _96.ModuleProtoMsg): _96.Module;
                    toProto(message: _96.Module): Uint8Array;
                    toProtoMsg(message: _96.Module): _96.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                inflation(request?: _99.QueryInflationRequest): Promise<_99.QueryInflationResponse>;
                annualProvisions(request?: _99.QueryAnnualProvisionsRequest): Promise<_99.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _100.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _100.MsgUpdateParams): {
                        typeUrl: string;
                        value: _100.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _100.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _100.MsgUpdateParams): {
                        typeUrl: string;
                        value: _100.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _100.MsgUpdateParams) => _100.MsgUpdateParamsAmino;
                    fromAmino: (object: _100.MsgUpdateParamsAmino) => _100.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _100.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgUpdateParams;
                fromPartial(object: Partial<_100.MsgUpdateParams>): _100.MsgUpdateParams;
                fromAmino(object: _100.MsgUpdateParamsAmino): _100.MsgUpdateParams;
                toAmino(message: _100.MsgUpdateParams): _100.MsgUpdateParamsAmino;
                fromAminoMsg(object: _100.MsgUpdateParamsAminoMsg): _100.MsgUpdateParams;
                toAminoMsg(message: _100.MsgUpdateParams): _100.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _100.MsgUpdateParamsProtoMsg): _100.MsgUpdateParams;
                toProto(message: _100.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateParams): _100.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _100.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_100.MsgUpdateParamsResponse>): _100.MsgUpdateParamsResponse;
                fromAmino(_: _100.MsgUpdateParamsResponseAmino): _100.MsgUpdateParamsResponse;
                toAmino(_: _100.MsgUpdateParamsResponse): _100.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _100.MsgUpdateParamsResponseAminoMsg): _100.MsgUpdateParamsResponse;
                toAminoMsg(message: _100.MsgUpdateParamsResponse): _100.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _100.MsgUpdateParamsResponseProtoMsg): _100.MsgUpdateParamsResponse;
                toProto(message: _100.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateParamsResponse): _100.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _99.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.QueryParamsRequest;
                fromPartial(_: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
                fromAmino(_: _99.QueryParamsRequestAmino): _99.QueryParamsRequest;
                toAmino(_: _99.QueryParamsRequest): _99.QueryParamsRequestAmino;
                fromAminoMsg(object: _99.QueryParamsRequestAminoMsg): _99.QueryParamsRequest;
                toAminoMsg(message: _99.QueryParamsRequest): _99.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryParamsRequestProtoMsg): _99.QueryParamsRequest;
                toProto(message: _99.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryParamsRequest): _99.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _99.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryParamsResponse;
                fromPartial(object: Partial<_99.QueryParamsResponse>): _99.QueryParamsResponse;
                fromAmino(object: _99.QueryParamsResponseAmino): _99.QueryParamsResponse;
                toAmino(message: _99.QueryParamsResponse): _99.QueryParamsResponseAmino;
                fromAminoMsg(object: _99.QueryParamsResponseAminoMsg): _99.QueryParamsResponse;
                toAminoMsg(message: _99.QueryParamsResponse): _99.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryParamsResponseProtoMsg): _99.QueryParamsResponse;
                toProto(message: _99.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryParamsResponse): _99.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _99.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.QueryInflationRequest;
                fromPartial(_: Partial<_99.QueryInflationRequest>): _99.QueryInflationRequest;
                fromAmino(_: _99.QueryInflationRequestAmino): _99.QueryInflationRequest;
                toAmino(_: _99.QueryInflationRequest): _99.QueryInflationRequestAmino;
                fromAminoMsg(object: _99.QueryInflationRequestAminoMsg): _99.QueryInflationRequest;
                toAminoMsg(message: _99.QueryInflationRequest): _99.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _99.QueryInflationRequestProtoMsg): _99.QueryInflationRequest;
                toProto(message: _99.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _99.QueryInflationRequest): _99.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _99.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryInflationResponse;
                fromPartial(object: Partial<_99.QueryInflationResponse>): _99.QueryInflationResponse;
                fromAmino(object: _99.QueryInflationResponseAmino): _99.QueryInflationResponse;
                toAmino(message: _99.QueryInflationResponse): _99.QueryInflationResponseAmino;
                fromAminoMsg(object: _99.QueryInflationResponseAminoMsg): _99.QueryInflationResponse;
                toAminoMsg(message: _99.QueryInflationResponse): _99.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _99.QueryInflationResponseProtoMsg): _99.QueryInflationResponse;
                toProto(message: _99.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _99.QueryInflationResponse): _99.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _99.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _99.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_99.QueryAnnualProvisionsRequest>): _99.QueryAnnualProvisionsRequest;
                fromAmino(_: _99.QueryAnnualProvisionsRequestAmino): _99.QueryAnnualProvisionsRequest;
                toAmino(_: _99.QueryAnnualProvisionsRequest): _99.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _99.QueryAnnualProvisionsRequestAminoMsg): _99.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _99.QueryAnnualProvisionsRequest): _99.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryAnnualProvisionsRequestProtoMsg): _99.QueryAnnualProvisionsRequest;
                toProto(message: _99.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryAnnualProvisionsRequest): _99.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _99.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_99.QueryAnnualProvisionsResponse>): _99.QueryAnnualProvisionsResponse;
                fromAmino(object: _99.QueryAnnualProvisionsResponseAmino): _99.QueryAnnualProvisionsResponse;
                toAmino(message: _99.QueryAnnualProvisionsResponse): _99.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _99.QueryAnnualProvisionsResponseAminoMsg): _99.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _99.QueryAnnualProvisionsResponse): _99.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryAnnualProvisionsResponseProtoMsg): _99.QueryAnnualProvisionsResponse;
                toProto(message: _99.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryAnnualProvisionsResponse): _99.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _98.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Minter;
                fromPartial(object: Partial<_98.Minter>): _98.Minter;
                fromAmino(object: _98.MinterAmino): _98.Minter;
                toAmino(message: _98.Minter): _98.MinterAmino;
                fromAminoMsg(object: _98.MinterAminoMsg): _98.Minter;
                toAminoMsg(message: _98.Minter): _98.MinterAminoMsg;
                fromProtoMsg(message: _98.MinterProtoMsg): _98.Minter;
                toProto(message: _98.Minter): Uint8Array;
                toProtoMsg(message: _98.Minter): _98.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _98.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Params;
                fromPartial(object: Partial<_98.Params>): _98.Params;
                fromAmino(object: _98.ParamsAmino): _98.Params;
                toAmino(message: _98.Params): _98.ParamsAmino;
                fromAminoMsg(object: _98.ParamsAminoMsg): _98.Params;
                toAminoMsg(message: _98.Params): _98.ParamsAminoMsg;
                fromProtoMsg(message: _98.ParamsProtoMsg): _98.Params;
                toProto(message: _98.Params): Uint8Array;
                toProtoMsg(message: _98.Params): _98.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                toAminoMsg(message: _97.GenesisState): _97.GenesisStateAminoMsg;
                fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                toProto(message: _97.GenesisState): Uint8Array;
                toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
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
                    encode(_: _102.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _102.Module;
                    fromPartial(_: Partial<_102.Module>): _102.Module;
                    fromAmino(_: _102.ModuleAmino): _102.Module;
                    toAmino(_: _102.Module): _102.ModuleAmino;
                    fromAminoMsg(object: _102.ModuleAminoMsg): _102.Module;
                    toAminoMsg(message: _102.Module): _102.ModuleAminoMsg;
                    fromProtoMsg(message: _102.ModuleProtoMsg): _102.Module;
                    toProto(message: _102.Module): Uint8Array;
                    toProtoMsg(message: _102.Module): _102.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _106.QueryBalanceRequest): Promise<_106.QueryBalanceResponse>;
                owner(request: _106.QueryOwnerRequest): Promise<_106.QueryOwnerResponse>;
                supply(request: _106.QuerySupplyRequest): Promise<_106.QuerySupplyResponse>;
                nFTs(request: _106.QueryNFTsRequest): Promise<_106.QueryNFTsResponse>;
                nFT(request: _106.QueryNFTRequest): Promise<_106.QueryNFTResponse>;
                class(request: _106.QueryClassRequest): Promise<_106.QueryClassResponse>;
                classes(request?: _106.QueryClassesRequest): Promise<_106.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _107.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _107.MsgSend): {
                        typeUrl: string;
                        value: _107.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _107.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _107.MsgSend): {
                        typeUrl: string;
                        value: _107.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _107.MsgSend) => _107.MsgSendAmino;
                    fromAmino: (object: _107.MsgSendAmino) => _107.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _107.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgSend;
                fromPartial(object: Partial<_107.MsgSend>): _107.MsgSend;
                fromAmino(object: _107.MsgSendAmino): _107.MsgSend;
                toAmino(message: _107.MsgSend): _107.MsgSendAmino;
                fromAminoMsg(object: _107.MsgSendAminoMsg): _107.MsgSend;
                toAminoMsg(message: _107.MsgSend): _107.MsgSendAminoMsg;
                fromProtoMsg(message: _107.MsgSendProtoMsg): _107.MsgSend;
                toProto(message: _107.MsgSend): Uint8Array;
                toProtoMsg(message: _107.MsgSend): _107.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _107.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgSendResponse;
                fromPartial(_: Partial<_107.MsgSendResponse>): _107.MsgSendResponse;
                fromAmino(_: _107.MsgSendResponseAmino): _107.MsgSendResponse;
                toAmino(_: _107.MsgSendResponse): _107.MsgSendResponseAmino;
                fromAminoMsg(object: _107.MsgSendResponseAminoMsg): _107.MsgSendResponse;
                toAminoMsg(message: _107.MsgSendResponse): _107.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _107.MsgSendResponseProtoMsg): _107.MsgSendResponse;
                toProto(message: _107.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _107.MsgSendResponse): _107.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _106.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryBalanceRequest;
                fromPartial(object: Partial<_106.QueryBalanceRequest>): _106.QueryBalanceRequest;
                fromAmino(object: _106.QueryBalanceRequestAmino): _106.QueryBalanceRequest;
                toAmino(message: _106.QueryBalanceRequest): _106.QueryBalanceRequestAmino;
                fromAminoMsg(object: _106.QueryBalanceRequestAminoMsg): _106.QueryBalanceRequest;
                toAminoMsg(message: _106.QueryBalanceRequest): _106.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _106.QueryBalanceRequestProtoMsg): _106.QueryBalanceRequest;
                toProto(message: _106.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _106.QueryBalanceRequest): _106.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _106.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryBalanceResponse;
                fromPartial(object: Partial<_106.QueryBalanceResponse>): _106.QueryBalanceResponse;
                fromAmino(object: _106.QueryBalanceResponseAmino): _106.QueryBalanceResponse;
                toAmino(message: _106.QueryBalanceResponse): _106.QueryBalanceResponseAmino;
                fromAminoMsg(object: _106.QueryBalanceResponseAminoMsg): _106.QueryBalanceResponse;
                toAminoMsg(message: _106.QueryBalanceResponse): _106.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _106.QueryBalanceResponseProtoMsg): _106.QueryBalanceResponse;
                toProto(message: _106.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _106.QueryBalanceResponse): _106.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _106.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryOwnerRequest;
                fromPartial(object: Partial<_106.QueryOwnerRequest>): _106.QueryOwnerRequest;
                fromAmino(object: _106.QueryOwnerRequestAmino): _106.QueryOwnerRequest;
                toAmino(message: _106.QueryOwnerRequest): _106.QueryOwnerRequestAmino;
                fromAminoMsg(object: _106.QueryOwnerRequestAminoMsg): _106.QueryOwnerRequest;
                toAminoMsg(message: _106.QueryOwnerRequest): _106.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _106.QueryOwnerRequestProtoMsg): _106.QueryOwnerRequest;
                toProto(message: _106.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _106.QueryOwnerRequest): _106.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _106.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryOwnerResponse;
                fromPartial(object: Partial<_106.QueryOwnerResponse>): _106.QueryOwnerResponse;
                fromAmino(object: _106.QueryOwnerResponseAmino): _106.QueryOwnerResponse;
                toAmino(message: _106.QueryOwnerResponse): _106.QueryOwnerResponseAmino;
                fromAminoMsg(object: _106.QueryOwnerResponseAminoMsg): _106.QueryOwnerResponse;
                toAminoMsg(message: _106.QueryOwnerResponse): _106.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _106.QueryOwnerResponseProtoMsg): _106.QueryOwnerResponse;
                toProto(message: _106.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _106.QueryOwnerResponse): _106.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _106.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySupplyRequest;
                fromPartial(object: Partial<_106.QuerySupplyRequest>): _106.QuerySupplyRequest;
                fromAmino(object: _106.QuerySupplyRequestAmino): _106.QuerySupplyRequest;
                toAmino(message: _106.QuerySupplyRequest): _106.QuerySupplyRequestAmino;
                fromAminoMsg(object: _106.QuerySupplyRequestAminoMsg): _106.QuerySupplyRequest;
                toAminoMsg(message: _106.QuerySupplyRequest): _106.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _106.QuerySupplyRequestProtoMsg): _106.QuerySupplyRequest;
                toProto(message: _106.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _106.QuerySupplyRequest): _106.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _106.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QuerySupplyResponse;
                fromPartial(object: Partial<_106.QuerySupplyResponse>): _106.QuerySupplyResponse;
                fromAmino(object: _106.QuerySupplyResponseAmino): _106.QuerySupplyResponse;
                toAmino(message: _106.QuerySupplyResponse): _106.QuerySupplyResponseAmino;
                fromAminoMsg(object: _106.QuerySupplyResponseAminoMsg): _106.QuerySupplyResponse;
                toAminoMsg(message: _106.QuerySupplyResponse): _106.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _106.QuerySupplyResponseProtoMsg): _106.QuerySupplyResponse;
                toProto(message: _106.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _106.QuerySupplyResponse): _106.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _106.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryNFTsRequest;
                fromPartial(object: Partial<_106.QueryNFTsRequest>): _106.QueryNFTsRequest;
                fromAmino(object: _106.QueryNFTsRequestAmino): _106.QueryNFTsRequest;
                toAmino(message: _106.QueryNFTsRequest): _106.QueryNFTsRequestAmino;
                fromAminoMsg(object: _106.QueryNFTsRequestAminoMsg): _106.QueryNFTsRequest;
                toAminoMsg(message: _106.QueryNFTsRequest): _106.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryNFTsRequestProtoMsg): _106.QueryNFTsRequest;
                toProto(message: _106.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryNFTsRequest): _106.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _106.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryNFTsResponse;
                fromPartial(object: Partial<_106.QueryNFTsResponse>): _106.QueryNFTsResponse;
                fromAmino(object: _106.QueryNFTsResponseAmino): _106.QueryNFTsResponse;
                toAmino(message: _106.QueryNFTsResponse): _106.QueryNFTsResponseAmino;
                fromAminoMsg(object: _106.QueryNFTsResponseAminoMsg): _106.QueryNFTsResponse;
                toAminoMsg(message: _106.QueryNFTsResponse): _106.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryNFTsResponseProtoMsg): _106.QueryNFTsResponse;
                toProto(message: _106.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryNFTsResponse): _106.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _106.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryNFTRequest;
                fromPartial(object: Partial<_106.QueryNFTRequest>): _106.QueryNFTRequest;
                fromAmino(object: _106.QueryNFTRequestAmino): _106.QueryNFTRequest;
                toAmino(message: _106.QueryNFTRequest): _106.QueryNFTRequestAmino;
                fromAminoMsg(object: _106.QueryNFTRequestAminoMsg): _106.QueryNFTRequest;
                toAminoMsg(message: _106.QueryNFTRequest): _106.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _106.QueryNFTRequestProtoMsg): _106.QueryNFTRequest;
                toProto(message: _106.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _106.QueryNFTRequest): _106.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _106.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryNFTResponse;
                fromPartial(object: Partial<_106.QueryNFTResponse>): _106.QueryNFTResponse;
                fromAmino(object: _106.QueryNFTResponseAmino): _106.QueryNFTResponse;
                toAmino(message: _106.QueryNFTResponse): _106.QueryNFTResponseAmino;
                fromAminoMsg(object: _106.QueryNFTResponseAminoMsg): _106.QueryNFTResponse;
                toAminoMsg(message: _106.QueryNFTResponse): _106.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _106.QueryNFTResponseProtoMsg): _106.QueryNFTResponse;
                toProto(message: _106.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _106.QueryNFTResponse): _106.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _106.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryClassRequest;
                fromPartial(object: Partial<_106.QueryClassRequest>): _106.QueryClassRequest;
                fromAmino(object: _106.QueryClassRequestAmino): _106.QueryClassRequest;
                toAmino(message: _106.QueryClassRequest): _106.QueryClassRequestAmino;
                fromAminoMsg(object: _106.QueryClassRequestAminoMsg): _106.QueryClassRequest;
                toAminoMsg(message: _106.QueryClassRequest): _106.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _106.QueryClassRequestProtoMsg): _106.QueryClassRequest;
                toProto(message: _106.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _106.QueryClassRequest): _106.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _106.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryClassResponse;
                fromPartial(object: Partial<_106.QueryClassResponse>): _106.QueryClassResponse;
                fromAmino(object: _106.QueryClassResponseAmino): _106.QueryClassResponse;
                toAmino(message: _106.QueryClassResponse): _106.QueryClassResponseAmino;
                fromAminoMsg(object: _106.QueryClassResponseAminoMsg): _106.QueryClassResponse;
                toAminoMsg(message: _106.QueryClassResponse): _106.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _106.QueryClassResponseProtoMsg): _106.QueryClassResponse;
                toProto(message: _106.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _106.QueryClassResponse): _106.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _106.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryClassesRequest;
                fromPartial(object: Partial<_106.QueryClassesRequest>): _106.QueryClassesRequest;
                fromAmino(object: _106.QueryClassesRequestAmino): _106.QueryClassesRequest;
                toAmino(message: _106.QueryClassesRequest): _106.QueryClassesRequestAmino;
                fromAminoMsg(object: _106.QueryClassesRequestAminoMsg): _106.QueryClassesRequest;
                toAminoMsg(message: _106.QueryClassesRequest): _106.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _106.QueryClassesRequestProtoMsg): _106.QueryClassesRequest;
                toProto(message: _106.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _106.QueryClassesRequest): _106.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _106.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.QueryClassesResponse;
                fromPartial(object: Partial<_106.QueryClassesResponse>): _106.QueryClassesResponse;
                fromAmino(object: _106.QueryClassesResponseAmino): _106.QueryClassesResponse;
                toAmino(message: _106.QueryClassesResponse): _106.QueryClassesResponseAmino;
                fromAminoMsg(object: _106.QueryClassesResponseAminoMsg): _106.QueryClassesResponse;
                toAminoMsg(message: _106.QueryClassesResponse): _106.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _106.QueryClassesResponseProtoMsg): _106.QueryClassesResponse;
                toProto(message: _106.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _106.QueryClassesResponse): _106.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _105.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.Class;
                fromPartial(object: Partial<_105.Class>): _105.Class;
                fromAmino(object: _105.ClassAmino): _105.Class;
                toAmino(message: _105.Class): _105.ClassAmino;
                fromAminoMsg(object: _105.ClassAminoMsg): _105.Class;
                toAminoMsg(message: _105.Class): _105.ClassAminoMsg;
                fromProtoMsg(message: _105.ClassProtoMsg): _105.Class;
                toProto(message: _105.Class): Uint8Array;
                toProtoMsg(message: _105.Class): _105.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _105.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.NFT;
                fromPartial(object: Partial<_105.NFT>): _105.NFT;
                fromAmino(object: _105.NFTAmino): _105.NFT;
                toAmino(message: _105.NFT): _105.NFTAmino;
                fromAminoMsg(object: _105.NFTAminoMsg): _105.NFT;
                toAminoMsg(message: _105.NFT): _105.NFTAminoMsg;
                fromProtoMsg(message: _105.NFTProtoMsg): _105.NFT;
                toProto(message: _105.NFT): Uint8Array;
                toProtoMsg(message: _105.NFT): _105.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _104.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.GenesisState;
                fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                fromAmino(object: _104.GenesisStateAmino): _104.GenesisState;
                toAmino(message: _104.GenesisState): _104.GenesisStateAmino;
                fromAminoMsg(object: _104.GenesisStateAminoMsg): _104.GenesisState;
                toAminoMsg(message: _104.GenesisState): _104.GenesisStateAminoMsg;
                fromProtoMsg(message: _104.GenesisStateProtoMsg): _104.GenesisState;
                toProto(message: _104.GenesisState): Uint8Array;
                toProtoMsg(message: _104.GenesisState): _104.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _104.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Entry;
                fromPartial(object: Partial<_104.Entry>): _104.Entry;
                fromAmino(object: _104.EntryAmino): _104.Entry;
                toAmino(message: _104.Entry): _104.EntryAmino;
                fromAminoMsg(object: _104.EntryAminoMsg): _104.Entry;
                toAminoMsg(message: _104.Entry): _104.EntryAminoMsg;
                fromProtoMsg(message: _104.EntryProtoMsg): _104.Entry;
                toProto(message: _104.Entry): Uint8Array;
                toProtoMsg(message: _104.Entry): _104.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _103.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.EventSend;
                fromPartial(object: Partial<_103.EventSend>): _103.EventSend;
                fromAmino(object: _103.EventSendAmino): _103.EventSend;
                toAmino(message: _103.EventSend): _103.EventSendAmino;
                fromAminoMsg(object: _103.EventSendAminoMsg): _103.EventSend;
                toAminoMsg(message: _103.EventSend): _103.EventSendAminoMsg;
                fromProtoMsg(message: _103.EventSendProtoMsg): _103.EventSend;
                toProto(message: _103.EventSend): Uint8Array;
                toProtoMsg(message: _103.EventSend): _103.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _103.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.EventMint;
                fromPartial(object: Partial<_103.EventMint>): _103.EventMint;
                fromAmino(object: _103.EventMintAmino): _103.EventMint;
                toAmino(message: _103.EventMint): _103.EventMintAmino;
                fromAminoMsg(object: _103.EventMintAminoMsg): _103.EventMint;
                toAminoMsg(message: _103.EventMint): _103.EventMintAminoMsg;
                fromProtoMsg(message: _103.EventMintProtoMsg): _103.EventMint;
                toProto(message: _103.EventMint): Uint8Array;
                toProtoMsg(message: _103.EventMint): _103.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _103.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.EventBurn;
                fromPartial(object: Partial<_103.EventBurn>): _103.EventBurn;
                fromAmino(object: _103.EventBurnAmino): _103.EventBurn;
                toAmino(message: _103.EventBurn): _103.EventBurnAmino;
                fromAminoMsg(object: _103.EventBurnAminoMsg): _103.EventBurn;
                toAminoMsg(message: _103.EventBurn): _103.EventBurnAminoMsg;
                fromProtoMsg(message: _103.EventBurnProtoMsg): _103.EventBurn;
                toProto(message: _103.EventBurn): Uint8Array;
                toProtoMsg(message: _103.EventBurn): _103.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
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
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _279.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _109.GetRequest): Promise<_109.GetResponse>;
                    list(request: _109.ListRequest): Promise<_109.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _109.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetRequest;
                    fromPartial(object: Partial<_109.GetRequest>): _109.GetRequest;
                    fromAmino(object: _109.GetRequestAmino): _109.GetRequest;
                    toAmino(message: _109.GetRequest): _109.GetRequestAmino;
                    fromAminoMsg(object: _109.GetRequestAminoMsg): _109.GetRequest;
                    toAminoMsg(message: _109.GetRequest): _109.GetRequestAminoMsg;
                    fromProtoMsg(message: _109.GetRequestProtoMsg): _109.GetRequest;
                    toProto(message: _109.GetRequest): Uint8Array;
                    toProtoMsg(message: _109.GetRequest): _109.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _109.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.GetResponse;
                    fromPartial(object: Partial<_109.GetResponse>): _109.GetResponse;
                    fromAmino(object: _109.GetResponseAmino): _109.GetResponse;
                    toAmino(message: _109.GetResponse): _109.GetResponseAmino;
                    fromAminoMsg(object: _109.GetResponseAminoMsg): _109.GetResponse;
                    toAminoMsg(message: _109.GetResponse): _109.GetResponseAminoMsg;
                    fromProtoMsg(message: _109.GetResponseProtoMsg): _109.GetResponse;
                    toProto(message: _109.GetResponse): Uint8Array;
                    toProtoMsg(message: _109.GetResponse): _109.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _109.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.ListRequest;
                    fromPartial(object: Partial<_109.ListRequest>): _109.ListRequest;
                    fromAmino(object: _109.ListRequestAmino): _109.ListRequest;
                    toAmino(message: _109.ListRequest): _109.ListRequestAmino;
                    fromAminoMsg(object: _109.ListRequestAminoMsg): _109.ListRequest;
                    toAminoMsg(message: _109.ListRequest): _109.ListRequestAminoMsg;
                    fromProtoMsg(message: _109.ListRequestProtoMsg): _109.ListRequest;
                    toProto(message: _109.ListRequest): Uint8Array;
                    toProtoMsg(message: _109.ListRequest): _109.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _109.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.ListRequest_Prefix;
                    fromPartial(object: Partial<_109.ListRequest_Prefix>): _109.ListRequest_Prefix;
                    fromAmino(object: _109.ListRequest_PrefixAmino): _109.ListRequest_Prefix;
                    toAmino(message: _109.ListRequest_Prefix): _109.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _109.ListRequest_PrefixAminoMsg): _109.ListRequest_Prefix;
                    toAminoMsg(message: _109.ListRequest_Prefix): _109.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _109.ListRequest_PrefixProtoMsg): _109.ListRequest_Prefix;
                    toProto(message: _109.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _109.ListRequest_Prefix): _109.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _109.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.ListRequest_Range;
                    fromPartial(object: Partial<_109.ListRequest_Range>): _109.ListRequest_Range;
                    fromAmino(object: _109.ListRequest_RangeAmino): _109.ListRequest_Range;
                    toAmino(message: _109.ListRequest_Range): _109.ListRequest_RangeAmino;
                    fromAminoMsg(object: _109.ListRequest_RangeAminoMsg): _109.ListRequest_Range;
                    toAminoMsg(message: _109.ListRequest_Range): _109.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _109.ListRequest_RangeProtoMsg): _109.ListRequest_Range;
                    toProto(message: _109.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _109.ListRequest_Range): _109.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _109.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.ListResponse;
                    fromPartial(object: Partial<_109.ListResponse>): _109.ListResponse;
                    fromAmino(object: _109.ListResponseAmino): _109.ListResponse;
                    toAmino(message: _109.ListResponse): _109.ListResponseAmino;
                    fromAminoMsg(object: _109.ListResponseAminoMsg): _109.ListResponse;
                    toAminoMsg(message: _109.ListResponse): _109.ListResponseAminoMsg;
                    fromProtoMsg(message: _109.ListResponseProtoMsg): _109.ListResponse;
                    toProto(message: _109.ListResponse): Uint8Array;
                    toProtoMsg(message: _109.ListResponse): _109.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _109.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.IndexValue;
                    fromPartial(object: Partial<_109.IndexValue>): _109.IndexValue;
                    fromAmino(object: _109.IndexValueAmino): _109.IndexValue;
                    toAmino(message: _109.IndexValue): _109.IndexValueAmino;
                    fromAminoMsg(object: _109.IndexValueAminoMsg): _109.IndexValue;
                    toAminoMsg(message: _109.IndexValue): _109.IndexValueAminoMsg;
                    fromProtoMsg(message: _109.IndexValueProtoMsg): _109.IndexValue;
                    toProto(message: _109.IndexValue): Uint8Array;
                    toProtoMsg(message: _109.IndexValue): _109.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _110.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.TableDescriptor;
                fromPartial(object: Partial<_110.TableDescriptor>): _110.TableDescriptor;
                fromAmino(object: _110.TableDescriptorAmino): _110.TableDescriptor;
                toAmino(message: _110.TableDescriptor): _110.TableDescriptorAmino;
                fromAminoMsg(object: _110.TableDescriptorAminoMsg): _110.TableDescriptor;
                toAminoMsg(message: _110.TableDescriptor): _110.TableDescriptorAminoMsg;
                fromProtoMsg(message: _110.TableDescriptorProtoMsg): _110.TableDescriptor;
                toProto(message: _110.TableDescriptor): Uint8Array;
                toProtoMsg(message: _110.TableDescriptor): _110.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _110.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_110.PrimaryKeyDescriptor>): _110.PrimaryKeyDescriptor;
                fromAmino(object: _110.PrimaryKeyDescriptorAmino): _110.PrimaryKeyDescriptor;
                toAmino(message: _110.PrimaryKeyDescriptor): _110.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _110.PrimaryKeyDescriptorAminoMsg): _110.PrimaryKeyDescriptor;
                toAminoMsg(message: _110.PrimaryKeyDescriptor): _110.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _110.PrimaryKeyDescriptorProtoMsg): _110.PrimaryKeyDescriptor;
                toProto(message: _110.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _110.PrimaryKeyDescriptor): _110.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _110.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_110.SecondaryIndexDescriptor>): _110.SecondaryIndexDescriptor;
                fromAmino(object: _110.SecondaryIndexDescriptorAmino): _110.SecondaryIndexDescriptor;
                toAmino(message: _110.SecondaryIndexDescriptor): _110.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _110.SecondaryIndexDescriptorAminoMsg): _110.SecondaryIndexDescriptor;
                toAminoMsg(message: _110.SecondaryIndexDescriptor): _110.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _110.SecondaryIndexDescriptorProtoMsg): _110.SecondaryIndexDescriptor;
                toProto(message: _110.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _110.SecondaryIndexDescriptor): _110.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _110.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.SingletonDescriptor;
                fromPartial(object: Partial<_110.SingletonDescriptor>): _110.SingletonDescriptor;
                fromAmino(object: _110.SingletonDescriptorAmino): _110.SingletonDescriptor;
                toAmino(message: _110.SingletonDescriptor): _110.SingletonDescriptorAmino;
                fromAminoMsg(object: _110.SingletonDescriptorAminoMsg): _110.SingletonDescriptor;
                toAminoMsg(message: _110.SingletonDescriptor): _110.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _110.SingletonDescriptorProtoMsg): _110.SingletonDescriptor;
                toProto(message: _110.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _110.SingletonDescriptor): _110.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _111.StorageType;
            storageTypeToJSON(object: _111.StorageType): string;
            StorageType: typeof _111.StorageType;
            StorageTypeSDKType: typeof _111.StorageType;
            StorageTypeAmino: typeof _111.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _111.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_111.ModuleSchemaDescriptor>): _111.ModuleSchemaDescriptor;
                fromAmino(object: _111.ModuleSchemaDescriptorAmino): _111.ModuleSchemaDescriptor;
                toAmino(message: _111.ModuleSchemaDescriptor): _111.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _111.ModuleSchemaDescriptorAminoMsg): _111.ModuleSchemaDescriptor;
                toAminoMsg(message: _111.ModuleSchemaDescriptor): _111.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _111.ModuleSchemaDescriptorProtoMsg): _111.ModuleSchemaDescriptor;
                toProto(message: _111.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _111.ModuleSchemaDescriptor): _111.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _111.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_111.ModuleSchemaDescriptor_FileEntry>): _111.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _111.ModuleSchemaDescriptor_FileEntryAmino): _111.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _111.ModuleSchemaDescriptor_FileEntry): _111.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _111.ModuleSchemaDescriptor_FileEntryAminoMsg): _111.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _111.ModuleSchemaDescriptor_FileEntry): _111.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _111.ModuleSchemaDescriptor_FileEntryProtoMsg): _111.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _111.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _111.ModuleSchemaDescriptor_FileEntry): _111.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _112.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _112.Module;
                    fromPartial(_: Partial<_112.Module>): _112.Module;
                    fromAmino(_: _112.ModuleAmino): _112.Module;
                    toAmino(_: _112.Module): _112.ModuleAmino;
                    fromAminoMsg(object: _112.ModuleAminoMsg): _112.Module;
                    toAminoMsg(message: _112.Module): _112.ModuleAminoMsg;
                    fromProtoMsg(message: _112.ModuleProtoMsg): _112.Module;
                    toProto(message: _112.Module): Uint8Array;
                    toProtoMsg(message: _112.Module): _112.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                subspaces(request?: _114.QuerySubspacesRequest): Promise<_114.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _114.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryParamsRequest;
                fromPartial(object: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
                fromAmino(object: _114.QueryParamsRequestAmino): _114.QueryParamsRequest;
                toAmino(message: _114.QueryParamsRequest): _114.QueryParamsRequestAmino;
                fromAminoMsg(object: _114.QueryParamsRequestAminoMsg): _114.QueryParamsRequest;
                toAminoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryParamsRequestProtoMsg): _114.QueryParamsRequest;
                toProto(message: _114.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _114.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryParamsResponse;
                fromPartial(object: Partial<_114.QueryParamsResponse>): _114.QueryParamsResponse;
                fromAmino(object: _114.QueryParamsResponseAmino): _114.QueryParamsResponse;
                toAmino(message: _114.QueryParamsResponse): _114.QueryParamsResponseAmino;
                fromAminoMsg(object: _114.QueryParamsResponseAminoMsg): _114.QueryParamsResponse;
                toAminoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryParamsResponseProtoMsg): _114.QueryParamsResponse;
                toProto(message: _114.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _114.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.QuerySubspacesRequest;
                fromPartial(_: Partial<_114.QuerySubspacesRequest>): _114.QuerySubspacesRequest;
                fromAmino(_: _114.QuerySubspacesRequestAmino): _114.QuerySubspacesRequest;
                toAmino(_: _114.QuerySubspacesRequest): _114.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _114.QuerySubspacesRequestAminoMsg): _114.QuerySubspacesRequest;
                toAminoMsg(message: _114.QuerySubspacesRequest): _114.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _114.QuerySubspacesRequestProtoMsg): _114.QuerySubspacesRequest;
                toProto(message: _114.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _114.QuerySubspacesRequest): _114.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _114.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QuerySubspacesResponse;
                fromPartial(object: Partial<_114.QuerySubspacesResponse>): _114.QuerySubspacesResponse;
                fromAmino(object: _114.QuerySubspacesResponseAmino): _114.QuerySubspacesResponse;
                toAmino(message: _114.QuerySubspacesResponse): _114.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _114.QuerySubspacesResponseAminoMsg): _114.QuerySubspacesResponse;
                toAminoMsg(message: _114.QuerySubspacesResponse): _114.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _114.QuerySubspacesResponseProtoMsg): _114.QuerySubspacesResponse;
                toProto(message: _114.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _114.QuerySubspacesResponse): _114.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _114.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Subspace;
                fromPartial(object: Partial<_114.Subspace>): _114.Subspace;
                fromAmino(object: _114.SubspaceAmino): _114.Subspace;
                toAmino(message: _114.Subspace): _114.SubspaceAmino;
                fromAminoMsg(object: _114.SubspaceAminoMsg): _114.Subspace;
                toAminoMsg(message: _114.Subspace): _114.SubspaceAminoMsg;
                fromProtoMsg(message: _114.SubspaceProtoMsg): _114.Subspace;
                toProto(message: _114.Subspace): Uint8Array;
                toProtoMsg(message: _114.Subspace): _114.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _113.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ParameterChangeProposal;
                fromPartial(object: Partial<_113.ParameterChangeProposal>): _113.ParameterChangeProposal;
                fromAmino(object: _113.ParameterChangeProposalAmino): _113.ParameterChangeProposal;
                toAmino(message: _113.ParameterChangeProposal): _113.ParameterChangeProposalAmino;
                fromAminoMsg(object: _113.ParameterChangeProposalAminoMsg): _113.ParameterChangeProposal;
                toAminoMsg(message: _113.ParameterChangeProposal): _113.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _113.ParameterChangeProposalProtoMsg): _113.ParameterChangeProposal;
                toProto(message: _113.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _113.ParameterChangeProposal): _113.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _113.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ParamChange;
                fromPartial(object: Partial<_113.ParamChange>): _113.ParamChange;
                fromAmino(object: _113.ParamChangeAmino): _113.ParamChange;
                toAmino(message: _113.ParamChange): _113.ParamChangeAmino;
                fromAminoMsg(object: _113.ParamChangeAminoMsg): _113.ParamChange;
                toAminoMsg(message: _113.ParamChange): _113.ParamChangeAminoMsg;
                fromProtoMsg(message: _113.ParamChangeProtoMsg): _113.ParamChange;
                toProto(message: _113.ParamChange): Uint8Array;
                toProtoMsg(message: _113.ParamChange): _113.ParamChangeProtoMsg;
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
                encode(_: _116.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.FileDescriptorsRequest;
                fromPartial(_: Partial<_116.FileDescriptorsRequest>): _116.FileDescriptorsRequest;
                fromAmino(_: _116.FileDescriptorsRequestAmino): _116.FileDescriptorsRequest;
                toAmino(_: _116.FileDescriptorsRequest): _116.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _116.FileDescriptorsRequestAminoMsg): _116.FileDescriptorsRequest;
                toAminoMsg(message: _116.FileDescriptorsRequest): _116.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _116.FileDescriptorsRequestProtoMsg): _116.FileDescriptorsRequest;
                toProto(message: _116.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _116.FileDescriptorsRequest): _116.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _116.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.FileDescriptorsResponse;
                fromPartial(object: Partial<_116.FileDescriptorsResponse>): _116.FileDescriptorsResponse;
                fromAmino(object: _116.FileDescriptorsResponseAmino): _116.FileDescriptorsResponse;
                toAmino(message: _116.FileDescriptorsResponse): _116.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _116.FileDescriptorsResponseAminoMsg): _116.FileDescriptorsResponse;
                toAminoMsg(message: _116.FileDescriptorsResponse): _116.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _116.FileDescriptorsResponseProtoMsg): _116.FileDescriptorsResponse;
                toProto(message: _116.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _116.FileDescriptorsResponse): _116.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
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
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                signingInfo(request: _119.QuerySigningInfoRequest): Promise<_119.QuerySigningInfoResponse>;
                signingInfos(request?: _119.QuerySigningInfosRequest): Promise<_119.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _121.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _121.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _121.MsgUnjail): {
                        typeUrl: string;
                        value: _121.MsgUnjail;
                    };
                    updateParams(value: _121.MsgUpdateParams): {
                        typeUrl: string;
                        value: _121.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _121.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _121.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _121.MsgUnjail): {
                        typeUrl: string;
                        value: _121.MsgUnjail;
                    };
                    updateParams(value: _121.MsgUpdateParams): {
                        typeUrl: string;
                        value: _121.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _121.MsgUnjail) => _121.MsgUnjailAmino;
                    fromAmino: (object: _121.MsgUnjailAmino) => _121.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _121.MsgUpdateParams) => _121.MsgUpdateParamsAmino;
                    fromAmino: (object: _121.MsgUpdateParamsAmino) => _121.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _121.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgUnjail;
                fromPartial(object: Partial<_121.MsgUnjail>): _121.MsgUnjail;
                fromAmino(object: _121.MsgUnjailAmino): _121.MsgUnjail;
                toAmino(message: _121.MsgUnjail): _121.MsgUnjailAmino;
                fromAminoMsg(object: _121.MsgUnjailAminoMsg): _121.MsgUnjail;
                toAminoMsg(message: _121.MsgUnjail): _121.MsgUnjailAminoMsg;
                fromProtoMsg(message: _121.MsgUnjailProtoMsg): _121.MsgUnjail;
                toProto(message: _121.MsgUnjail): Uint8Array;
                toProtoMsg(message: _121.MsgUnjail): _121.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _121.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgUnjailResponse;
                fromPartial(_: Partial<_121.MsgUnjailResponse>): _121.MsgUnjailResponse;
                fromAmino(_: _121.MsgUnjailResponseAmino): _121.MsgUnjailResponse;
                toAmino(_: _121.MsgUnjailResponse): _121.MsgUnjailResponseAmino;
                fromAminoMsg(object: _121.MsgUnjailResponseAminoMsg): _121.MsgUnjailResponse;
                toAminoMsg(message: _121.MsgUnjailResponse): _121.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _121.MsgUnjailResponseProtoMsg): _121.MsgUnjailResponse;
                toProto(message: _121.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _121.MsgUnjailResponse): _121.MsgUnjailResponseProtoMsg;
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
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _120.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.ValidatorSigningInfo;
                fromPartial(object: Partial<_120.ValidatorSigningInfo>): _120.ValidatorSigningInfo;
                fromAmino(object: _120.ValidatorSigningInfoAmino): _120.ValidatorSigningInfo;
                toAmino(message: _120.ValidatorSigningInfo): _120.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _120.ValidatorSigningInfoAminoMsg): _120.ValidatorSigningInfo;
                toAminoMsg(message: _120.ValidatorSigningInfo): _120.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _120.ValidatorSigningInfoProtoMsg): _120.ValidatorSigningInfo;
                toProto(message: _120.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _120.ValidatorSigningInfo): _120.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _119.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.QueryParamsRequest;
                fromPartial(_: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
                fromAmino(_: _119.QueryParamsRequestAmino): _119.QueryParamsRequest;
                toAmino(_: _119.QueryParamsRequest): _119.QueryParamsRequestAmino;
                fromAminoMsg(object: _119.QueryParamsRequestAminoMsg): _119.QueryParamsRequest;
                toAminoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryParamsRequestProtoMsg): _119.QueryParamsRequest;
                toProto(message: _119.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _119.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryParamsResponse;
                fromPartial(object: Partial<_119.QueryParamsResponse>): _119.QueryParamsResponse;
                fromAmino(object: _119.QueryParamsResponseAmino): _119.QueryParamsResponse;
                toAmino(message: _119.QueryParamsResponse): _119.QueryParamsResponseAmino;
                fromAminoMsg(object: _119.QueryParamsResponseAminoMsg): _119.QueryParamsResponse;
                toAminoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryParamsResponseProtoMsg): _119.QueryParamsResponse;
                toProto(message: _119.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _119.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySigningInfoRequest;
                fromPartial(object: Partial<_119.QuerySigningInfoRequest>): _119.QuerySigningInfoRequest;
                fromAmino(object: _119.QuerySigningInfoRequestAmino): _119.QuerySigningInfoRequest;
                toAmino(message: _119.QuerySigningInfoRequest): _119.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _119.QuerySigningInfoRequestAminoMsg): _119.QuerySigningInfoRequest;
                toAminoMsg(message: _119.QuerySigningInfoRequest): _119.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySigningInfoRequestProtoMsg): _119.QuerySigningInfoRequest;
                toProto(message: _119.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySigningInfoRequest): _119.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _119.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySigningInfoResponse;
                fromPartial(object: Partial<_119.QuerySigningInfoResponse>): _119.QuerySigningInfoResponse;
                fromAmino(object: _119.QuerySigningInfoResponseAmino): _119.QuerySigningInfoResponse;
                toAmino(message: _119.QuerySigningInfoResponse): _119.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _119.QuerySigningInfoResponseAminoMsg): _119.QuerySigningInfoResponse;
                toAminoMsg(message: _119.QuerySigningInfoResponse): _119.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySigningInfoResponseProtoMsg): _119.QuerySigningInfoResponse;
                toProto(message: _119.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySigningInfoResponse): _119.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _119.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySigningInfosRequest;
                fromPartial(object: Partial<_119.QuerySigningInfosRequest>): _119.QuerySigningInfosRequest;
                fromAmino(object: _119.QuerySigningInfosRequestAmino): _119.QuerySigningInfosRequest;
                toAmino(message: _119.QuerySigningInfosRequest): _119.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _119.QuerySigningInfosRequestAminoMsg): _119.QuerySigningInfosRequest;
                toAminoMsg(message: _119.QuerySigningInfosRequest): _119.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySigningInfosRequestProtoMsg): _119.QuerySigningInfosRequest;
                toProto(message: _119.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySigningInfosRequest): _119.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _119.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySigningInfosResponse;
                fromPartial(object: Partial<_119.QuerySigningInfosResponse>): _119.QuerySigningInfosResponse;
                fromAmino(object: _119.QuerySigningInfosResponseAmino): _119.QuerySigningInfosResponse;
                toAmino(message: _119.QuerySigningInfosResponse): _119.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _119.QuerySigningInfosResponseAminoMsg): _119.QuerySigningInfosResponse;
                toAminoMsg(message: _119.QuerySigningInfosResponse): _119.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySigningInfosResponseProtoMsg): _119.QuerySigningInfosResponse;
                toProto(message: _119.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySigningInfosResponse): _119.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _118.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SigningInfo;
                fromPartial(object: Partial<_118.SigningInfo>): _118.SigningInfo;
                fromAmino(object: _118.SigningInfoAmino): _118.SigningInfo;
                toAmino(message: _118.SigningInfo): _118.SigningInfoAmino;
                fromAminoMsg(object: _118.SigningInfoAminoMsg): _118.SigningInfo;
                toAminoMsg(message: _118.SigningInfo): _118.SigningInfoAminoMsg;
                fromProtoMsg(message: _118.SigningInfoProtoMsg): _118.SigningInfo;
                toProto(message: _118.SigningInfo): Uint8Array;
                toProtoMsg(message: _118.SigningInfo): _118.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _118.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ValidatorMissedBlocks;
                fromPartial(object: Partial<_118.ValidatorMissedBlocks>): _118.ValidatorMissedBlocks;
                fromAmino(object: _118.ValidatorMissedBlocksAmino): _118.ValidatorMissedBlocks;
                toAmino(message: _118.ValidatorMissedBlocks): _118.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _118.ValidatorMissedBlocksAminoMsg): _118.ValidatorMissedBlocks;
                toAminoMsg(message: _118.ValidatorMissedBlocks): _118.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _118.ValidatorMissedBlocksProtoMsg): _118.ValidatorMissedBlocks;
                toProto(message: _118.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _118.ValidatorMissedBlocks): _118.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _118.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MissedBlock;
                fromPartial(object: Partial<_118.MissedBlock>): _118.MissedBlock;
                fromAmino(object: _118.MissedBlockAmino): _118.MissedBlock;
                toAmino(message: _118.MissedBlock): _118.MissedBlockAmino;
                fromAminoMsg(object: _118.MissedBlockAminoMsg): _118.MissedBlock;
                toAminoMsg(message: _118.MissedBlock): _118.MissedBlockAminoMsg;
                fromProtoMsg(message: _118.MissedBlockProtoMsg): _118.MissedBlock;
                toProto(message: _118.MissedBlock): Uint8Array;
                toProtoMsg(message: _118.MissedBlock): _118.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _122.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.Module;
                    fromPartial(object: Partial<_122.Module>): _122.Module;
                    fromAmino(object: _122.ModuleAmino): _122.Module;
                    toAmino(message: _122.Module): _122.ModuleAmino;
                    fromAminoMsg(object: _122.ModuleAminoMsg): _122.Module;
                    toAminoMsg(message: _122.Module): _122.ModuleAminoMsg;
                    fromProtoMsg(message: _122.ModuleProtoMsg): _122.Module;
                    toProto(message: _122.Module): Uint8Array;
                    toProtoMsg(message: _122.Module): _122.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _125.QueryValidatorsRequest): Promise<_125.QueryValidatorsResponse>;
                validator(request: _125.QueryValidatorRequest): Promise<_125.QueryValidatorResponse>;
                validatorDelegations(request: _125.QueryValidatorDelegationsRequest): Promise<_125.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _125.QueryValidatorUnbondingDelegationsRequest): Promise<_125.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _125.QueryDelegationRequest): Promise<_125.QueryDelegationResponse>;
                unbondingDelegation(request: _125.QueryUnbondingDelegationRequest): Promise<_125.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _125.QueryDelegatorDelegationsRequest): Promise<_125.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _125.QueryDelegatorUnbondingDelegationsRequest): Promise<_125.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _125.QueryRedelegationsRequest): Promise<_125.QueryRedelegationsResponse>;
                delegatorValidators(request: _125.QueryDelegatorValidatorsRequest): Promise<_125.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _125.QueryDelegatorValidatorRequest): Promise<_125.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _125.QueryHistoricalInfoRequest): Promise<_125.QueryHistoricalInfoResponse>;
                pool(request?: _125.QueryPoolRequest): Promise<_125.QueryPoolResponse>;
                params(request?: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                tokenizeShareRecordById(request: _125.QueryTokenizeShareRecordByIdRequest): Promise<_125.QueryTokenizeShareRecordByIdResponse>;
                tokenizeShareRecordByDenom(request: _125.QueryTokenizeShareRecordByDenomRequest): Promise<_125.QueryTokenizeShareRecordByDenomResponse>;
                tokenizeShareRecordsOwned(request: _125.QueryTokenizeShareRecordsOwnedRequest): Promise<_125.QueryTokenizeShareRecordsOwnedResponse>;
                allTokenizeShareRecords(request?: _125.QueryAllTokenizeShareRecordsRequest): Promise<_125.QueryAllTokenizeShareRecordsResponse>;
                lastTokenizeShareRecordId(request?: _125.QueryLastTokenizeShareRecordIdRequest): Promise<_125.QueryLastTokenizeShareRecordIdResponse>;
                totalTokenizeSharedAssets(request?: _125.QueryTotalTokenizeSharedAssetsRequest): Promise<_125.QueryTotalTokenizeSharedAssetsResponse>;
                totalLiquidStaked(request?: _125.QueryTotalLiquidStaked): Promise<_125.QueryTotalLiquidStakedResponse>;
                tokenizeShareLockInfo(request: _125.QueryTokenizeShareLockInfo): Promise<_125.QueryTokenizeShareLockInfoResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _127.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _127.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _127.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _127.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _127.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _127.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _127.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unbondValidator(value: _127.MsgUnbondValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tokenizeShares(value: _127.MsgTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokensForShares(value: _127.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferTokenizeShareRecord(value: _127.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disableTokenizeShares(value: _127.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    enableTokenizeShares(value: _127.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    validatorBond(value: _127.MsgValidatorBond): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _127.MsgCreateValidator): {
                        typeUrl: string;
                        value: _127.MsgCreateValidator;
                    };
                    editValidator(value: _127.MsgEditValidator): {
                        typeUrl: string;
                        value: _127.MsgEditValidator;
                    };
                    delegate(value: _127.MsgDelegate): {
                        typeUrl: string;
                        value: _127.MsgDelegate;
                    };
                    beginRedelegate(value: _127.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _127.MsgBeginRedelegate;
                    };
                    undelegate(value: _127.MsgUndelegate): {
                        typeUrl: string;
                        value: _127.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _127.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _127.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _127.MsgUpdateParams): {
                        typeUrl: string;
                        value: _127.MsgUpdateParams;
                    };
                    unbondValidator(value: _127.MsgUnbondValidator): {
                        typeUrl: string;
                        value: _127.MsgUnbondValidator;
                    };
                    tokenizeShares(value: _127.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _127.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _127.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _127.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _127.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _127.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _127.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _127.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _127.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _127.MsgEnableTokenizeShares;
                    };
                    validatorBond(value: _127.MsgValidatorBond): {
                        typeUrl: string;
                        value: _127.MsgValidatorBond;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _127.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _127.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _127.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _127.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _127.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateParams;
                    };
                    unbondValidator(value: any): {
                        typeUrl: string;
                        value: _127.MsgUnbondValidator;
                    };
                    tokenizeShares(value: any): {
                        typeUrl: string;
                        value: _127.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: any): {
                        typeUrl: string;
                        value: _127.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: any): {
                        typeUrl: string;
                        value: _127.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: any): {
                        typeUrl: string;
                        value: _127.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: any): {
                        typeUrl: string;
                        value: _127.MsgEnableTokenizeShares;
                    };
                    validatorBond(value: any): {
                        typeUrl: string;
                        value: _127.MsgValidatorBond;
                    };
                };
                fromPartial: {
                    createValidator(value: _127.MsgCreateValidator): {
                        typeUrl: string;
                        value: _127.MsgCreateValidator;
                    };
                    editValidator(value: _127.MsgEditValidator): {
                        typeUrl: string;
                        value: _127.MsgEditValidator;
                    };
                    delegate(value: _127.MsgDelegate): {
                        typeUrl: string;
                        value: _127.MsgDelegate;
                    };
                    beginRedelegate(value: _127.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _127.MsgBeginRedelegate;
                    };
                    undelegate(value: _127.MsgUndelegate): {
                        typeUrl: string;
                        value: _127.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _127.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _127.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _127.MsgUpdateParams): {
                        typeUrl: string;
                        value: _127.MsgUpdateParams;
                    };
                    unbondValidator(value: _127.MsgUnbondValidator): {
                        typeUrl: string;
                        value: _127.MsgUnbondValidator;
                    };
                    tokenizeShares(value: _127.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _127.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _127.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _127.MsgRedeemTokensForShares;
                    };
                    transferTokenizeShareRecord(value: _127.MsgTransferTokenizeShareRecord): {
                        typeUrl: string;
                        value: _127.MsgTransferTokenizeShareRecord;
                    };
                    disableTokenizeShares(value: _127.MsgDisableTokenizeShares): {
                        typeUrl: string;
                        value: _127.MsgDisableTokenizeShares;
                    };
                    enableTokenizeShares(value: _127.MsgEnableTokenizeShares): {
                        typeUrl: string;
                        value: _127.MsgEnableTokenizeShares;
                    };
                    validatorBond(value: _127.MsgValidatorBond): {
                        typeUrl: string;
                        value: _127.MsgValidatorBond;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreateValidator) => _127.MsgCreateValidatorAmino;
                    fromAmino: (object: _127.MsgCreateValidatorAmino) => _127.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _127.MsgEditValidator) => _127.MsgEditValidatorAmino;
                    fromAmino: (object: _127.MsgEditValidatorAmino) => _127.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _127.MsgDelegate) => _127.MsgDelegateAmino;
                    fromAmino: (object: _127.MsgDelegateAmino) => _127.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _127.MsgBeginRedelegate) => _127.MsgBeginRedelegateAmino;
                    fromAmino: (object: _127.MsgBeginRedelegateAmino) => _127.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUndelegate) => _127.MsgUndelegateAmino;
                    fromAmino: (object: _127.MsgUndelegateAmino) => _127.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCancelUnbondingDelegation) => _127.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _127.MsgCancelUnbondingDelegationAmino) => _127.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateParams) => _127.MsgUpdateParamsAmino;
                    fromAmino: (object: _127.MsgUpdateParamsAmino) => _127.MsgUpdateParams;
                };
                "/cosmos.staking.v1beta1.MsgUnbondValidator": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUnbondValidator) => _127.MsgUnbondValidatorAmino;
                    fromAmino: (object: _127.MsgUnbondValidatorAmino) => _127.MsgUnbondValidator;
                };
                "/cosmos.staking.v1beta1.MsgTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _127.MsgTokenizeShares) => _127.MsgTokenizeSharesAmino;
                    fromAmino: (object: _127.MsgTokenizeSharesAmino) => _127.MsgTokenizeShares;
                };
                "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
                    aminoType: string;
                    toAmino: (message: _127.MsgRedeemTokensForShares) => _127.MsgRedeemTokensForSharesAmino;
                    fromAmino: (object: _127.MsgRedeemTokensForSharesAmino) => _127.MsgRedeemTokensForShares;
                };
                "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
                    aminoType: string;
                    toAmino: (message: _127.MsgTransferTokenizeShareRecord) => _127.MsgTransferTokenizeShareRecordAmino;
                    fromAmino: (object: _127.MsgTransferTokenizeShareRecordAmino) => _127.MsgTransferTokenizeShareRecord;
                };
                "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _127.MsgDisableTokenizeShares) => _127.MsgDisableTokenizeSharesAmino;
                    fromAmino: (object: _127.MsgDisableTokenizeSharesAmino) => _127.MsgDisableTokenizeShares;
                };
                "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _127.MsgEnableTokenizeShares) => _127.MsgEnableTokenizeSharesAmino;
                    fromAmino: (object: _127.MsgEnableTokenizeSharesAmino) => _127.MsgEnableTokenizeShares;
                };
                "/cosmos.staking.v1beta1.MsgValidatorBond": {
                    aminoType: string;
                    toAmino: (message: _127.MsgValidatorBond) => _127.MsgValidatorBondAmino;
                    fromAmino: (object: _127.MsgValidatorBondAmino) => _127.MsgValidatorBond;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _127.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCreateValidator;
                fromPartial(object: Partial<_127.MsgCreateValidator>): _127.MsgCreateValidator;
                fromAmino(object: _127.MsgCreateValidatorAmino): _127.MsgCreateValidator;
                toAmino(message: _127.MsgCreateValidator): _127.MsgCreateValidatorAmino;
                fromAminoMsg(object: _127.MsgCreateValidatorAminoMsg): _127.MsgCreateValidator;
                toAminoMsg(message: _127.MsgCreateValidator): _127.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _127.MsgCreateValidatorProtoMsg): _127.MsgCreateValidator;
                toProto(message: _127.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _127.MsgCreateValidator): _127.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _127.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_127.MsgCreateValidatorResponse>): _127.MsgCreateValidatorResponse;
                fromAmino(_: _127.MsgCreateValidatorResponseAmino): _127.MsgCreateValidatorResponse;
                toAmino(_: _127.MsgCreateValidatorResponse): _127.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _127.MsgCreateValidatorResponseAminoMsg): _127.MsgCreateValidatorResponse;
                toAminoMsg(message: _127.MsgCreateValidatorResponse): _127.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreateValidatorResponseProtoMsg): _127.MsgCreateValidatorResponse;
                toProto(message: _127.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreateValidatorResponse): _127.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _127.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgEditValidator;
                fromPartial(object: Partial<_127.MsgEditValidator>): _127.MsgEditValidator;
                fromAmino(object: _127.MsgEditValidatorAmino): _127.MsgEditValidator;
                toAmino(message: _127.MsgEditValidator): _127.MsgEditValidatorAmino;
                fromAminoMsg(object: _127.MsgEditValidatorAminoMsg): _127.MsgEditValidator;
                toAminoMsg(message: _127.MsgEditValidator): _127.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _127.MsgEditValidatorProtoMsg): _127.MsgEditValidator;
                toProto(message: _127.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _127.MsgEditValidator): _127.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _127.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgEditValidatorResponse;
                fromPartial(_: Partial<_127.MsgEditValidatorResponse>): _127.MsgEditValidatorResponse;
                fromAmino(_: _127.MsgEditValidatorResponseAmino): _127.MsgEditValidatorResponse;
                toAmino(_: _127.MsgEditValidatorResponse): _127.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _127.MsgEditValidatorResponseAminoMsg): _127.MsgEditValidatorResponse;
                toAminoMsg(message: _127.MsgEditValidatorResponse): _127.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _127.MsgEditValidatorResponseProtoMsg): _127.MsgEditValidatorResponse;
                toProto(message: _127.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _127.MsgEditValidatorResponse): _127.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _127.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgDelegate;
                fromPartial(object: Partial<_127.MsgDelegate>): _127.MsgDelegate;
                fromAmino(object: _127.MsgDelegateAmino): _127.MsgDelegate;
                toAmino(message: _127.MsgDelegate): _127.MsgDelegateAmino;
                fromAminoMsg(object: _127.MsgDelegateAminoMsg): _127.MsgDelegate;
                toAminoMsg(message: _127.MsgDelegate): _127.MsgDelegateAminoMsg;
                fromProtoMsg(message: _127.MsgDelegateProtoMsg): _127.MsgDelegate;
                toProto(message: _127.MsgDelegate): Uint8Array;
                toProtoMsg(message: _127.MsgDelegate): _127.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _127.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgDelegateResponse;
                fromPartial(_: Partial<_127.MsgDelegateResponse>): _127.MsgDelegateResponse;
                fromAmino(_: _127.MsgDelegateResponseAmino): _127.MsgDelegateResponse;
                toAmino(_: _127.MsgDelegateResponse): _127.MsgDelegateResponseAmino;
                fromAminoMsg(object: _127.MsgDelegateResponseAminoMsg): _127.MsgDelegateResponse;
                toAminoMsg(message: _127.MsgDelegateResponse): _127.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _127.MsgDelegateResponseProtoMsg): _127.MsgDelegateResponse;
                toProto(message: _127.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _127.MsgDelegateResponse): _127.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _127.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgBeginRedelegate;
                fromPartial(object: Partial<_127.MsgBeginRedelegate>): _127.MsgBeginRedelegate;
                fromAmino(object: _127.MsgBeginRedelegateAmino): _127.MsgBeginRedelegate;
                toAmino(message: _127.MsgBeginRedelegate): _127.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _127.MsgBeginRedelegateAminoMsg): _127.MsgBeginRedelegate;
                toAminoMsg(message: _127.MsgBeginRedelegate): _127.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _127.MsgBeginRedelegateProtoMsg): _127.MsgBeginRedelegate;
                toProto(message: _127.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _127.MsgBeginRedelegate): _127.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _127.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_127.MsgBeginRedelegateResponse>): _127.MsgBeginRedelegateResponse;
                fromAmino(object: _127.MsgBeginRedelegateResponseAmino): _127.MsgBeginRedelegateResponse;
                toAmino(message: _127.MsgBeginRedelegateResponse): _127.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _127.MsgBeginRedelegateResponseAminoMsg): _127.MsgBeginRedelegateResponse;
                toAminoMsg(message: _127.MsgBeginRedelegateResponse): _127.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _127.MsgBeginRedelegateResponseProtoMsg): _127.MsgBeginRedelegateResponse;
                toProto(message: _127.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _127.MsgBeginRedelegateResponse): _127.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _127.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUndelegate;
                fromPartial(object: Partial<_127.MsgUndelegate>): _127.MsgUndelegate;
                fromAmino(object: _127.MsgUndelegateAmino): _127.MsgUndelegate;
                toAmino(message: _127.MsgUndelegate): _127.MsgUndelegateAmino;
                fromAminoMsg(object: _127.MsgUndelegateAminoMsg): _127.MsgUndelegate;
                toAminoMsg(message: _127.MsgUndelegate): _127.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _127.MsgUndelegateProtoMsg): _127.MsgUndelegate;
                toProto(message: _127.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _127.MsgUndelegate): _127.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _127.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUndelegateResponse;
                fromPartial(object: Partial<_127.MsgUndelegateResponse>): _127.MsgUndelegateResponse;
                fromAmino(object: _127.MsgUndelegateResponseAmino): _127.MsgUndelegateResponse;
                toAmino(message: _127.MsgUndelegateResponse): _127.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _127.MsgUndelegateResponseAminoMsg): _127.MsgUndelegateResponse;
                toAminoMsg(message: _127.MsgUndelegateResponse): _127.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUndelegateResponseProtoMsg): _127.MsgUndelegateResponse;
                toProto(message: _127.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUndelegateResponse): _127.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _127.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_127.MsgCancelUnbondingDelegation>): _127.MsgCancelUnbondingDelegation;
                fromAmino(object: _127.MsgCancelUnbondingDelegationAmino): _127.MsgCancelUnbondingDelegation;
                toAmino(message: _127.MsgCancelUnbondingDelegation): _127.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _127.MsgCancelUnbondingDelegationAminoMsg): _127.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _127.MsgCancelUnbondingDelegation): _127.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _127.MsgCancelUnbondingDelegationProtoMsg): _127.MsgCancelUnbondingDelegation;
                toProto(message: _127.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _127.MsgCancelUnbondingDelegation): _127.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _127.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_127.MsgCancelUnbondingDelegationResponse>): _127.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _127.MsgCancelUnbondingDelegationResponseAmino): _127.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _127.MsgCancelUnbondingDelegationResponse): _127.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _127.MsgCancelUnbondingDelegationResponseAminoMsg): _127.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _127.MsgCancelUnbondingDelegationResponse): _127.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCancelUnbondingDelegationResponseProtoMsg): _127.MsgCancelUnbondingDelegationResponse;
                toProto(message: _127.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCancelUnbondingDelegationResponse): _127.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _127.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateParams;
                fromPartial(object: Partial<_127.MsgUpdateParams>): _127.MsgUpdateParams;
                fromAmino(object: _127.MsgUpdateParamsAmino): _127.MsgUpdateParams;
                toAmino(message: _127.MsgUpdateParams): _127.MsgUpdateParamsAmino;
                fromAminoMsg(object: _127.MsgUpdateParamsAminoMsg): _127.MsgUpdateParams;
                toAminoMsg(message: _127.MsgUpdateParams): _127.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateParamsProtoMsg): _127.MsgUpdateParams;
                toProto(message: _127.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateParams): _127.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_127.MsgUpdateParamsResponse>): _127.MsgUpdateParamsResponse;
                fromAmino(_: _127.MsgUpdateParamsResponseAmino): _127.MsgUpdateParamsResponse;
                toAmino(_: _127.MsgUpdateParamsResponse): _127.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateParamsResponseAminoMsg): _127.MsgUpdateParamsResponse;
                toAminoMsg(message: _127.MsgUpdateParamsResponse): _127.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateParamsResponseProtoMsg): _127.MsgUpdateParamsResponse;
                toProto(message: _127.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateParamsResponse): _127.MsgUpdateParamsResponseProtoMsg;
            };
            MsgUnbondValidator: {
                typeUrl: string;
                encode(message: _127.MsgUnbondValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUnbondValidator;
                fromPartial(object: Partial<_127.MsgUnbondValidator>): _127.MsgUnbondValidator;
                fromAmino(object: _127.MsgUnbondValidatorAmino): _127.MsgUnbondValidator;
                toAmino(message: _127.MsgUnbondValidator): _127.MsgUnbondValidatorAmino;
                fromAminoMsg(object: _127.MsgUnbondValidatorAminoMsg): _127.MsgUnbondValidator;
                toAminoMsg(message: _127.MsgUnbondValidator): _127.MsgUnbondValidatorAminoMsg;
                fromProtoMsg(message: _127.MsgUnbondValidatorProtoMsg): _127.MsgUnbondValidator;
                toProto(message: _127.MsgUnbondValidator): Uint8Array;
                toProtoMsg(message: _127.MsgUnbondValidator): _127.MsgUnbondValidatorProtoMsg;
            };
            MsgUnbondValidatorResponse: {
                typeUrl: string;
                encode(_: _127.MsgUnbondValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUnbondValidatorResponse;
                fromPartial(_: Partial<_127.MsgUnbondValidatorResponse>): _127.MsgUnbondValidatorResponse;
                fromAmino(_: _127.MsgUnbondValidatorResponseAmino): _127.MsgUnbondValidatorResponse;
                toAmino(_: _127.MsgUnbondValidatorResponse): _127.MsgUnbondValidatorResponseAmino;
                fromAminoMsg(object: _127.MsgUnbondValidatorResponseAminoMsg): _127.MsgUnbondValidatorResponse;
                toAminoMsg(message: _127.MsgUnbondValidatorResponse): _127.MsgUnbondValidatorResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUnbondValidatorResponseProtoMsg): _127.MsgUnbondValidatorResponse;
                toProto(message: _127.MsgUnbondValidatorResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUnbondValidatorResponse): _127.MsgUnbondValidatorResponseProtoMsg;
            };
            MsgTokenizeShares: {
                typeUrl: string;
                encode(message: _127.MsgTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgTokenizeShares;
                fromPartial(object: Partial<_127.MsgTokenizeShares>): _127.MsgTokenizeShares;
                fromAmino(object: _127.MsgTokenizeSharesAmino): _127.MsgTokenizeShares;
                toAmino(message: _127.MsgTokenizeShares): _127.MsgTokenizeSharesAmino;
                fromAminoMsg(object: _127.MsgTokenizeSharesAminoMsg): _127.MsgTokenizeShares;
                toAminoMsg(message: _127.MsgTokenizeShares): _127.MsgTokenizeSharesAminoMsg;
                fromProtoMsg(message: _127.MsgTokenizeSharesProtoMsg): _127.MsgTokenizeShares;
                toProto(message: _127.MsgTokenizeShares): Uint8Array;
                toProtoMsg(message: _127.MsgTokenizeShares): _127.MsgTokenizeSharesProtoMsg;
            };
            MsgTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _127.MsgTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgTokenizeSharesResponse;
                fromPartial(object: Partial<_127.MsgTokenizeSharesResponse>): _127.MsgTokenizeSharesResponse;
                fromAmino(object: _127.MsgTokenizeSharesResponseAmino): _127.MsgTokenizeSharesResponse;
                toAmino(message: _127.MsgTokenizeSharesResponse): _127.MsgTokenizeSharesResponseAmino;
                fromAminoMsg(object: _127.MsgTokenizeSharesResponseAminoMsg): _127.MsgTokenizeSharesResponse;
                toAminoMsg(message: _127.MsgTokenizeSharesResponse): _127.MsgTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _127.MsgTokenizeSharesResponseProtoMsg): _127.MsgTokenizeSharesResponse;
                toProto(message: _127.MsgTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _127.MsgTokenizeSharesResponse): _127.MsgTokenizeSharesResponseProtoMsg;
            };
            MsgRedeemTokensForShares: {
                typeUrl: string;
                encode(message: _127.MsgRedeemTokensForShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgRedeemTokensForShares;
                fromPartial(object: Partial<_127.MsgRedeemTokensForShares>): _127.MsgRedeemTokensForShares;
                fromAmino(object: _127.MsgRedeemTokensForSharesAmino): _127.MsgRedeemTokensForShares;
                toAmino(message: _127.MsgRedeemTokensForShares): _127.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _127.MsgRedeemTokensForSharesAminoMsg): _127.MsgRedeemTokensForShares;
                toAminoMsg(message: _127.MsgRedeemTokensForShares): _127.MsgRedeemTokensForSharesAminoMsg;
                fromProtoMsg(message: _127.MsgRedeemTokensForSharesProtoMsg): _127.MsgRedeemTokensForShares;
                toProto(message: _127.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _127.MsgRedeemTokensForShares): _127.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                encode(message: _127.MsgRedeemTokensForSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgRedeemTokensForSharesResponse;
                fromPartial(object: Partial<_127.MsgRedeemTokensForSharesResponse>): _127.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _127.MsgRedeemTokensForSharesResponseAmino): _127.MsgRedeemTokensForSharesResponse;
                toAmino(message: _127.MsgRedeemTokensForSharesResponse): _127.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _127.MsgRedeemTokensForSharesResponseAminoMsg): _127.MsgRedeemTokensForSharesResponse;
                toAminoMsg(message: _127.MsgRedeemTokensForSharesResponse): _127.MsgRedeemTokensForSharesResponseAminoMsg;
                fromProtoMsg(message: _127.MsgRedeemTokensForSharesResponseProtoMsg): _127.MsgRedeemTokensForSharesResponse;
                toProto(message: _127.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _127.MsgRedeemTokensForSharesResponse): _127.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgTransferTokenizeShareRecord: {
                typeUrl: string;
                encode(message: _127.MsgTransferTokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgTransferTokenizeShareRecord;
                fromPartial(object: Partial<_127.MsgTransferTokenizeShareRecord>): _127.MsgTransferTokenizeShareRecord;
                fromAmino(object: _127.MsgTransferTokenizeShareRecordAmino): _127.MsgTransferTokenizeShareRecord;
                toAmino(message: _127.MsgTransferTokenizeShareRecord): _127.MsgTransferTokenizeShareRecordAmino;
                fromAminoMsg(object: _127.MsgTransferTokenizeShareRecordAminoMsg): _127.MsgTransferTokenizeShareRecord;
                toAminoMsg(message: _127.MsgTransferTokenizeShareRecord): _127.MsgTransferTokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _127.MsgTransferTokenizeShareRecordProtoMsg): _127.MsgTransferTokenizeShareRecord;
                toProto(message: _127.MsgTransferTokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _127.MsgTransferTokenizeShareRecord): _127.MsgTransferTokenizeShareRecordProtoMsg;
            };
            MsgTransferTokenizeShareRecordResponse: {
                typeUrl: string;
                encode(_: _127.MsgTransferTokenizeShareRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgTransferTokenizeShareRecordResponse;
                fromPartial(_: Partial<_127.MsgTransferTokenizeShareRecordResponse>): _127.MsgTransferTokenizeShareRecordResponse;
                fromAmino(_: _127.MsgTransferTokenizeShareRecordResponseAmino): _127.MsgTransferTokenizeShareRecordResponse;
                toAmino(_: _127.MsgTransferTokenizeShareRecordResponse): _127.MsgTransferTokenizeShareRecordResponseAmino;
                fromAminoMsg(object: _127.MsgTransferTokenizeShareRecordResponseAminoMsg): _127.MsgTransferTokenizeShareRecordResponse;
                toAminoMsg(message: _127.MsgTransferTokenizeShareRecordResponse): _127.MsgTransferTokenizeShareRecordResponseAminoMsg;
                fromProtoMsg(message: _127.MsgTransferTokenizeShareRecordResponseProtoMsg): _127.MsgTransferTokenizeShareRecordResponse;
                toProto(message: _127.MsgTransferTokenizeShareRecordResponse): Uint8Array;
                toProtoMsg(message: _127.MsgTransferTokenizeShareRecordResponse): _127.MsgTransferTokenizeShareRecordResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                encode(message: _127.MsgDisableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgDisableTokenizeShares;
                fromPartial(object: Partial<_127.MsgDisableTokenizeShares>): _127.MsgDisableTokenizeShares;
                fromAmino(object: _127.MsgDisableTokenizeSharesAmino): _127.MsgDisableTokenizeShares;
                toAmino(message: _127.MsgDisableTokenizeShares): _127.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _127.MsgDisableTokenizeSharesAminoMsg): _127.MsgDisableTokenizeShares;
                toAminoMsg(message: _127.MsgDisableTokenizeShares): _127.MsgDisableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _127.MsgDisableTokenizeSharesProtoMsg): _127.MsgDisableTokenizeShares;
                toProto(message: _127.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _127.MsgDisableTokenizeShares): _127.MsgDisableTokenizeSharesProtoMsg;
            };
            MsgDisableTokenizeSharesResponse: {
                typeUrl: string;
                encode(_: _127.MsgDisableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgDisableTokenizeSharesResponse;
                fromPartial(_: Partial<_127.MsgDisableTokenizeSharesResponse>): _127.MsgDisableTokenizeSharesResponse;
                fromAmino(_: _127.MsgDisableTokenizeSharesResponseAmino): _127.MsgDisableTokenizeSharesResponse;
                toAmino(_: _127.MsgDisableTokenizeSharesResponse): _127.MsgDisableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _127.MsgDisableTokenizeSharesResponseAminoMsg): _127.MsgDisableTokenizeSharesResponse;
                toAminoMsg(message: _127.MsgDisableTokenizeSharesResponse): _127.MsgDisableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _127.MsgDisableTokenizeSharesResponseProtoMsg): _127.MsgDisableTokenizeSharesResponse;
                toProto(message: _127.MsgDisableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _127.MsgDisableTokenizeSharesResponse): _127.MsgDisableTokenizeSharesResponseProtoMsg;
            };
            MsgEnableTokenizeShares: {
                typeUrl: string;
                encode(message: _127.MsgEnableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgEnableTokenizeShares;
                fromPartial(object: Partial<_127.MsgEnableTokenizeShares>): _127.MsgEnableTokenizeShares;
                fromAmino(object: _127.MsgEnableTokenizeSharesAmino): _127.MsgEnableTokenizeShares;
                toAmino(message: _127.MsgEnableTokenizeShares): _127.MsgEnableTokenizeSharesAmino;
                fromAminoMsg(object: _127.MsgEnableTokenizeSharesAminoMsg): _127.MsgEnableTokenizeShares;
                toAminoMsg(message: _127.MsgEnableTokenizeShares): _127.MsgEnableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _127.MsgEnableTokenizeSharesProtoMsg): _127.MsgEnableTokenizeShares;
                toProto(message: _127.MsgEnableTokenizeShares): Uint8Array;
                toProtoMsg(message: _127.MsgEnableTokenizeShares): _127.MsgEnableTokenizeSharesProtoMsg;
            };
            MsgEnableTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _127.MsgEnableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgEnableTokenizeSharesResponse;
                fromPartial(object: Partial<_127.MsgEnableTokenizeSharesResponse>): _127.MsgEnableTokenizeSharesResponse;
                fromAmino(object: _127.MsgEnableTokenizeSharesResponseAmino): _127.MsgEnableTokenizeSharesResponse;
                toAmino(message: _127.MsgEnableTokenizeSharesResponse): _127.MsgEnableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _127.MsgEnableTokenizeSharesResponseAminoMsg): _127.MsgEnableTokenizeSharesResponse;
                toAminoMsg(message: _127.MsgEnableTokenizeSharesResponse): _127.MsgEnableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _127.MsgEnableTokenizeSharesResponseProtoMsg): _127.MsgEnableTokenizeSharesResponse;
                toProto(message: _127.MsgEnableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _127.MsgEnableTokenizeSharesResponse): _127.MsgEnableTokenizeSharesResponseProtoMsg;
            };
            MsgValidatorBond: {
                typeUrl: string;
                encode(message: _127.MsgValidatorBond, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgValidatorBond;
                fromPartial(object: Partial<_127.MsgValidatorBond>): _127.MsgValidatorBond;
                fromAmino(object: _127.MsgValidatorBondAmino): _127.MsgValidatorBond;
                toAmino(message: _127.MsgValidatorBond): _127.MsgValidatorBondAmino;
                fromAminoMsg(object: _127.MsgValidatorBondAminoMsg): _127.MsgValidatorBond;
                toAminoMsg(message: _127.MsgValidatorBond): _127.MsgValidatorBondAminoMsg;
                fromProtoMsg(message: _127.MsgValidatorBondProtoMsg): _127.MsgValidatorBond;
                toProto(message: _127.MsgValidatorBond): Uint8Array;
                toProtoMsg(message: _127.MsgValidatorBond): _127.MsgValidatorBondProtoMsg;
            };
            MsgValidatorBondResponse: {
                typeUrl: string;
                encode(_: _127.MsgValidatorBondResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgValidatorBondResponse;
                fromPartial(_: Partial<_127.MsgValidatorBondResponse>): _127.MsgValidatorBondResponse;
                fromAmino(_: _127.MsgValidatorBondResponseAmino): _127.MsgValidatorBondResponse;
                toAmino(_: _127.MsgValidatorBondResponse): _127.MsgValidatorBondResponseAmino;
                fromAminoMsg(object: _127.MsgValidatorBondResponseAminoMsg): _127.MsgValidatorBondResponse;
                toAminoMsg(message: _127.MsgValidatorBondResponse): _127.MsgValidatorBondResponseAminoMsg;
                fromProtoMsg(message: _127.MsgValidatorBondResponseProtoMsg): _127.MsgValidatorBondResponse;
                toProto(message: _127.MsgValidatorBondResponse): Uint8Array;
                toProtoMsg(message: _127.MsgValidatorBondResponse): _127.MsgValidatorBondResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _126.BondStatus;
            bondStatusToJSON(object: _126.BondStatus): string;
            infractionFromJSON(object: any): _126.Infraction;
            infractionToJSON(object: _126.Infraction): string;
            tokenizeShareLockStatusFromJSON(object: any): _126.TokenizeShareLockStatus;
            tokenizeShareLockStatusToJSON(object: _126.TokenizeShareLockStatus): string;
            BondStatus: typeof _126.BondStatus;
            BondStatusSDKType: typeof _126.BondStatus;
            BondStatusAmino: typeof _126.BondStatus;
            Infraction: typeof _126.Infraction;
            InfractionSDKType: typeof _126.Infraction;
            InfractionAmino: typeof _126.Infraction;
            TokenizeShareLockStatus: typeof _126.TokenizeShareLockStatus;
            TokenizeShareLockStatusSDKType: typeof _126.TokenizeShareLockStatus;
            TokenizeShareLockStatusAmino: typeof _126.TokenizeShareLockStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _126.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.HistoricalInfo;
                fromPartial(object: Partial<_126.HistoricalInfo>): _126.HistoricalInfo;
                fromAmino(object: _126.HistoricalInfoAmino): _126.HistoricalInfo;
                toAmino(message: _126.HistoricalInfo): _126.HistoricalInfoAmino;
                fromAminoMsg(object: _126.HistoricalInfoAminoMsg): _126.HistoricalInfo;
                toAminoMsg(message: _126.HistoricalInfo): _126.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _126.HistoricalInfoProtoMsg): _126.HistoricalInfo;
                toProto(message: _126.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _126.HistoricalInfo): _126.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _126.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.CommissionRates;
                fromPartial(object: Partial<_126.CommissionRates>): _126.CommissionRates;
                fromAmino(object: _126.CommissionRatesAmino): _126.CommissionRates;
                toAmino(message: _126.CommissionRates): _126.CommissionRatesAmino;
                fromAminoMsg(object: _126.CommissionRatesAminoMsg): _126.CommissionRates;
                toAminoMsg(message: _126.CommissionRates): _126.CommissionRatesAminoMsg;
                fromProtoMsg(message: _126.CommissionRatesProtoMsg): _126.CommissionRates;
                toProto(message: _126.CommissionRates): Uint8Array;
                toProtoMsg(message: _126.CommissionRates): _126.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _126.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Commission;
                fromPartial(object: Partial<_126.Commission>): _126.Commission;
                fromAmino(object: _126.CommissionAmino): _126.Commission;
                toAmino(message: _126.Commission): _126.CommissionAmino;
                fromAminoMsg(object: _126.CommissionAminoMsg): _126.Commission;
                toAminoMsg(message: _126.Commission): _126.CommissionAminoMsg;
                fromProtoMsg(message: _126.CommissionProtoMsg): _126.Commission;
                toProto(message: _126.Commission): Uint8Array;
                toProtoMsg(message: _126.Commission): _126.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _126.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Description;
                fromPartial(object: Partial<_126.Description>): _126.Description;
                fromAmino(object: _126.DescriptionAmino): _126.Description;
                toAmino(message: _126.Description): _126.DescriptionAmino;
                fromAminoMsg(object: _126.DescriptionAminoMsg): _126.Description;
                toAminoMsg(message: _126.Description): _126.DescriptionAminoMsg;
                fromProtoMsg(message: _126.DescriptionProtoMsg): _126.Description;
                toProto(message: _126.Description): Uint8Array;
                toProtoMsg(message: _126.Description): _126.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _126.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Validator;
                fromPartial(object: Partial<_126.Validator>): _126.Validator;
                fromAmino(object: _126.ValidatorAmino): _126.Validator;
                toAmino(message: _126.Validator): _126.ValidatorAmino;
                fromAminoMsg(object: _126.ValidatorAminoMsg): _126.Validator;
                toAminoMsg(message: _126.Validator): _126.ValidatorAminoMsg;
                fromProtoMsg(message: _126.ValidatorProtoMsg): _126.Validator;
                toProto(message: _126.Validator): Uint8Array;
                toProtoMsg(message: _126.Validator): _126.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _126.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.ValAddresses;
                fromPartial(object: Partial<_126.ValAddresses>): _126.ValAddresses;
                fromAmino(object: _126.ValAddressesAmino): _126.ValAddresses;
                toAmino(message: _126.ValAddresses): _126.ValAddressesAmino;
                fromAminoMsg(object: _126.ValAddressesAminoMsg): _126.ValAddresses;
                toAminoMsg(message: _126.ValAddresses): _126.ValAddressesAminoMsg;
                fromProtoMsg(message: _126.ValAddressesProtoMsg): _126.ValAddresses;
                toProto(message: _126.ValAddresses): Uint8Array;
                toProtoMsg(message: _126.ValAddresses): _126.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _126.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.DVPair;
                fromPartial(object: Partial<_126.DVPair>): _126.DVPair;
                fromAmino(object: _126.DVPairAmino): _126.DVPair;
                toAmino(message: _126.DVPair): _126.DVPairAmino;
                fromAminoMsg(object: _126.DVPairAminoMsg): _126.DVPair;
                toAminoMsg(message: _126.DVPair): _126.DVPairAminoMsg;
                fromProtoMsg(message: _126.DVPairProtoMsg): _126.DVPair;
                toProto(message: _126.DVPair): Uint8Array;
                toProtoMsg(message: _126.DVPair): _126.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _126.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.DVPairs;
                fromPartial(object: Partial<_126.DVPairs>): _126.DVPairs;
                fromAmino(object: _126.DVPairsAmino): _126.DVPairs;
                toAmino(message: _126.DVPairs): _126.DVPairsAmino;
                fromAminoMsg(object: _126.DVPairsAminoMsg): _126.DVPairs;
                toAminoMsg(message: _126.DVPairs): _126.DVPairsAminoMsg;
                fromProtoMsg(message: _126.DVPairsProtoMsg): _126.DVPairs;
                toProto(message: _126.DVPairs): Uint8Array;
                toProtoMsg(message: _126.DVPairs): _126.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _126.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.DVVTriplet;
                fromPartial(object: Partial<_126.DVVTriplet>): _126.DVVTriplet;
                fromAmino(object: _126.DVVTripletAmino): _126.DVVTriplet;
                toAmino(message: _126.DVVTriplet): _126.DVVTripletAmino;
                fromAminoMsg(object: _126.DVVTripletAminoMsg): _126.DVVTriplet;
                toAminoMsg(message: _126.DVVTriplet): _126.DVVTripletAminoMsg;
                fromProtoMsg(message: _126.DVVTripletProtoMsg): _126.DVVTriplet;
                toProto(message: _126.DVVTriplet): Uint8Array;
                toProtoMsg(message: _126.DVVTriplet): _126.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _126.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.DVVTriplets;
                fromPartial(object: Partial<_126.DVVTriplets>): _126.DVVTriplets;
                fromAmino(object: _126.DVVTripletsAmino): _126.DVVTriplets;
                toAmino(message: _126.DVVTriplets): _126.DVVTripletsAmino;
                fromAminoMsg(object: _126.DVVTripletsAminoMsg): _126.DVVTriplets;
                toAminoMsg(message: _126.DVVTriplets): _126.DVVTripletsAminoMsg;
                fromProtoMsg(message: _126.DVVTripletsProtoMsg): _126.DVVTriplets;
                toProto(message: _126.DVVTriplets): Uint8Array;
                toProtoMsg(message: _126.DVVTriplets): _126.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _126.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Delegation;
                fromPartial(object: Partial<_126.Delegation>): _126.Delegation;
                fromAmino(object: _126.DelegationAmino): _126.Delegation;
                toAmino(message: _126.Delegation): _126.DelegationAmino;
                fromAminoMsg(object: _126.DelegationAminoMsg): _126.Delegation;
                toAminoMsg(message: _126.Delegation): _126.DelegationAminoMsg;
                fromProtoMsg(message: _126.DelegationProtoMsg): _126.Delegation;
                toProto(message: _126.Delegation): Uint8Array;
                toProtoMsg(message: _126.Delegation): _126.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _126.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.UnbondingDelegation;
                fromPartial(object: Partial<_126.UnbondingDelegation>): _126.UnbondingDelegation;
                fromAmino(object: _126.UnbondingDelegationAmino): _126.UnbondingDelegation;
                toAmino(message: _126.UnbondingDelegation): _126.UnbondingDelegationAmino;
                fromAminoMsg(object: _126.UnbondingDelegationAminoMsg): _126.UnbondingDelegation;
                toAminoMsg(message: _126.UnbondingDelegation): _126.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _126.UnbondingDelegationProtoMsg): _126.UnbondingDelegation;
                toProto(message: _126.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _126.UnbondingDelegation): _126.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _126.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.UnbondingDelegationEntry;
                fromPartial(object: Partial<_126.UnbondingDelegationEntry>): _126.UnbondingDelegationEntry;
                fromAmino(object: _126.UnbondingDelegationEntryAmino): _126.UnbondingDelegationEntry;
                toAmino(message: _126.UnbondingDelegationEntry): _126.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _126.UnbondingDelegationEntryAminoMsg): _126.UnbondingDelegationEntry;
                toAminoMsg(message: _126.UnbondingDelegationEntry): _126.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _126.UnbondingDelegationEntryProtoMsg): _126.UnbondingDelegationEntry;
                toProto(message: _126.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _126.UnbondingDelegationEntry): _126.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _126.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.RedelegationEntry;
                fromPartial(object: Partial<_126.RedelegationEntry>): _126.RedelegationEntry;
                fromAmino(object: _126.RedelegationEntryAmino): _126.RedelegationEntry;
                toAmino(message: _126.RedelegationEntry): _126.RedelegationEntryAmino;
                fromAminoMsg(object: _126.RedelegationEntryAminoMsg): _126.RedelegationEntry;
                toAminoMsg(message: _126.RedelegationEntry): _126.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _126.RedelegationEntryProtoMsg): _126.RedelegationEntry;
                toProto(message: _126.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _126.RedelegationEntry): _126.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _126.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Redelegation;
                fromPartial(object: Partial<_126.Redelegation>): _126.Redelegation;
                fromAmino(object: _126.RedelegationAmino): _126.Redelegation;
                toAmino(message: _126.Redelegation): _126.RedelegationAmino;
                fromAminoMsg(object: _126.RedelegationAminoMsg): _126.Redelegation;
                toAminoMsg(message: _126.Redelegation): _126.RedelegationAminoMsg;
                fromProtoMsg(message: _126.RedelegationProtoMsg): _126.Redelegation;
                toProto(message: _126.Redelegation): Uint8Array;
                toProtoMsg(message: _126.Redelegation): _126.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _126.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Params;
                fromPartial(object: Partial<_126.Params>): _126.Params;
                fromAmino(object: _126.ParamsAmino): _126.Params;
                toAmino(message: _126.Params): _126.ParamsAmino;
                fromAminoMsg(object: _126.ParamsAminoMsg): _126.Params;
                toAminoMsg(message: _126.Params): _126.ParamsAminoMsg;
                fromProtoMsg(message: _126.ParamsProtoMsg): _126.Params;
                toProto(message: _126.Params): Uint8Array;
                toProtoMsg(message: _126.Params): _126.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _126.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.DelegationResponse;
                fromPartial(object: Partial<_126.DelegationResponse>): _126.DelegationResponse;
                fromAmino(object: _126.DelegationResponseAmino): _126.DelegationResponse;
                toAmino(message: _126.DelegationResponse): _126.DelegationResponseAmino;
                fromAminoMsg(object: _126.DelegationResponseAminoMsg): _126.DelegationResponse;
                toAminoMsg(message: _126.DelegationResponse): _126.DelegationResponseAminoMsg;
                fromProtoMsg(message: _126.DelegationResponseProtoMsg): _126.DelegationResponse;
                toProto(message: _126.DelegationResponse): Uint8Array;
                toProtoMsg(message: _126.DelegationResponse): _126.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _126.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.RedelegationEntryResponse;
                fromPartial(object: Partial<_126.RedelegationEntryResponse>): _126.RedelegationEntryResponse;
                fromAmino(object: _126.RedelegationEntryResponseAmino): _126.RedelegationEntryResponse;
                toAmino(message: _126.RedelegationEntryResponse): _126.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _126.RedelegationEntryResponseAminoMsg): _126.RedelegationEntryResponse;
                toAminoMsg(message: _126.RedelegationEntryResponse): _126.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _126.RedelegationEntryResponseProtoMsg): _126.RedelegationEntryResponse;
                toProto(message: _126.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _126.RedelegationEntryResponse): _126.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _126.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.RedelegationResponse;
                fromPartial(object: Partial<_126.RedelegationResponse>): _126.RedelegationResponse;
                fromAmino(object: _126.RedelegationResponseAmino): _126.RedelegationResponse;
                toAmino(message: _126.RedelegationResponse): _126.RedelegationResponseAmino;
                fromAminoMsg(object: _126.RedelegationResponseAminoMsg): _126.RedelegationResponse;
                toAminoMsg(message: _126.RedelegationResponse): _126.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _126.RedelegationResponseProtoMsg): _126.RedelegationResponse;
                toProto(message: _126.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _126.RedelegationResponse): _126.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _126.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.Pool;
                fromPartial(object: Partial<_126.Pool>): _126.Pool;
                fromAmino(object: _126.PoolAmino): _126.Pool;
                toAmino(message: _126.Pool): _126.PoolAmino;
                fromAminoMsg(object: _126.PoolAminoMsg): _126.Pool;
                toAminoMsg(message: _126.Pool): _126.PoolAminoMsg;
                fromProtoMsg(message: _126.PoolProtoMsg): _126.Pool;
                toProto(message: _126.Pool): Uint8Array;
                toProtoMsg(message: _126.Pool): _126.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _126.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.ValidatorUpdates;
                fromPartial(object: Partial<_126.ValidatorUpdates>): _126.ValidatorUpdates;
                fromAmino(object: _126.ValidatorUpdatesAmino): _126.ValidatorUpdates;
                toAmino(message: _126.ValidatorUpdates): _126.ValidatorUpdatesAmino;
                fromAminoMsg(object: _126.ValidatorUpdatesAminoMsg): _126.ValidatorUpdates;
                toAminoMsg(message: _126.ValidatorUpdates): _126.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _126.ValidatorUpdatesProtoMsg): _126.ValidatorUpdates;
                toProto(message: _126.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _126.ValidatorUpdates): _126.ValidatorUpdatesProtoMsg;
            };
            TokenizeShareRecord: {
                typeUrl: string;
                encode(message: _126.TokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TokenizeShareRecord;
                fromPartial(object: Partial<_126.TokenizeShareRecord>): _126.TokenizeShareRecord;
                fromAmino(object: _126.TokenizeShareRecordAmino): _126.TokenizeShareRecord;
                toAmino(message: _126.TokenizeShareRecord): _126.TokenizeShareRecordAmino;
                fromAminoMsg(object: _126.TokenizeShareRecordAminoMsg): _126.TokenizeShareRecord;
                toAminoMsg(message: _126.TokenizeShareRecord): _126.TokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _126.TokenizeShareRecordProtoMsg): _126.TokenizeShareRecord;
                toProto(message: _126.TokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _126.TokenizeShareRecord): _126.TokenizeShareRecordProtoMsg;
            };
            PendingTokenizeShareAuthorizations: {
                typeUrl: string;
                encode(message: _126.PendingTokenizeShareAuthorizations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.PendingTokenizeShareAuthorizations;
                fromPartial(object: Partial<_126.PendingTokenizeShareAuthorizations>): _126.PendingTokenizeShareAuthorizations;
                fromAmino(object: _126.PendingTokenizeShareAuthorizationsAmino): _126.PendingTokenizeShareAuthorizations;
                toAmino(message: _126.PendingTokenizeShareAuthorizations): _126.PendingTokenizeShareAuthorizationsAmino;
                fromAminoMsg(object: _126.PendingTokenizeShareAuthorizationsAminoMsg): _126.PendingTokenizeShareAuthorizations;
                toAminoMsg(message: _126.PendingTokenizeShareAuthorizations): _126.PendingTokenizeShareAuthorizationsAminoMsg;
                fromProtoMsg(message: _126.PendingTokenizeShareAuthorizationsProtoMsg): _126.PendingTokenizeShareAuthorizations;
                toProto(message: _126.PendingTokenizeShareAuthorizations): Uint8Array;
                toProtoMsg(message: _126.PendingTokenizeShareAuthorizations): _126.PendingTokenizeShareAuthorizationsProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _125.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorsRequest;
                fromPartial(object: Partial<_125.QueryValidatorsRequest>): _125.QueryValidatorsRequest;
                fromAmino(object: _125.QueryValidatorsRequestAmino): _125.QueryValidatorsRequest;
                toAmino(message: _125.QueryValidatorsRequest): _125.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _125.QueryValidatorsRequestAminoMsg): _125.QueryValidatorsRequest;
                toAminoMsg(message: _125.QueryValidatorsRequest): _125.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorsRequestProtoMsg): _125.QueryValidatorsRequest;
                toProto(message: _125.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorsRequest): _125.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _125.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorsResponse;
                fromPartial(object: Partial<_125.QueryValidatorsResponse>): _125.QueryValidatorsResponse;
                fromAmino(object: _125.QueryValidatorsResponseAmino): _125.QueryValidatorsResponse;
                toAmino(message: _125.QueryValidatorsResponse): _125.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _125.QueryValidatorsResponseAminoMsg): _125.QueryValidatorsResponse;
                toAminoMsg(message: _125.QueryValidatorsResponse): _125.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorsResponseProtoMsg): _125.QueryValidatorsResponse;
                toProto(message: _125.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorsResponse): _125.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _125.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorRequest;
                fromPartial(object: Partial<_125.QueryValidatorRequest>): _125.QueryValidatorRequest;
                fromAmino(object: _125.QueryValidatorRequestAmino): _125.QueryValidatorRequest;
                toAmino(message: _125.QueryValidatorRequest): _125.QueryValidatorRequestAmino;
                fromAminoMsg(object: _125.QueryValidatorRequestAminoMsg): _125.QueryValidatorRequest;
                toAminoMsg(message: _125.QueryValidatorRequest): _125.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorRequestProtoMsg): _125.QueryValidatorRequest;
                toProto(message: _125.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorRequest): _125.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _125.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorResponse;
                fromPartial(object: Partial<_125.QueryValidatorResponse>): _125.QueryValidatorResponse;
                fromAmino(object: _125.QueryValidatorResponseAmino): _125.QueryValidatorResponse;
                toAmino(message: _125.QueryValidatorResponse): _125.QueryValidatorResponseAmino;
                fromAminoMsg(object: _125.QueryValidatorResponseAminoMsg): _125.QueryValidatorResponse;
                toAminoMsg(message: _125.QueryValidatorResponse): _125.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorResponseProtoMsg): _125.QueryValidatorResponse;
                toProto(message: _125.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorResponse): _125.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _125.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_125.QueryValidatorDelegationsRequest>): _125.QueryValidatorDelegationsRequest;
                fromAmino(object: _125.QueryValidatorDelegationsRequestAmino): _125.QueryValidatorDelegationsRequest;
                toAmino(message: _125.QueryValidatorDelegationsRequest): _125.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _125.QueryValidatorDelegationsRequestAminoMsg): _125.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _125.QueryValidatorDelegationsRequest): _125.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorDelegationsRequestProtoMsg): _125.QueryValidatorDelegationsRequest;
                toProto(message: _125.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorDelegationsRequest): _125.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _125.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_125.QueryValidatorDelegationsResponse>): _125.QueryValidatorDelegationsResponse;
                fromAmino(object: _125.QueryValidatorDelegationsResponseAmino): _125.QueryValidatorDelegationsResponse;
                toAmino(message: _125.QueryValidatorDelegationsResponse): _125.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _125.QueryValidatorDelegationsResponseAminoMsg): _125.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _125.QueryValidatorDelegationsResponse): _125.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorDelegationsResponseProtoMsg): _125.QueryValidatorDelegationsResponse;
                toProto(message: _125.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorDelegationsResponse): _125.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _125.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_125.QueryValidatorUnbondingDelegationsRequest>): _125.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _125.QueryValidatorUnbondingDelegationsRequestAmino): _125.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _125.QueryValidatorUnbondingDelegationsRequest): _125.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _125.QueryValidatorUnbondingDelegationsRequestAminoMsg): _125.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _125.QueryValidatorUnbondingDelegationsRequest): _125.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorUnbondingDelegationsRequestProtoMsg): _125.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _125.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorUnbondingDelegationsRequest): _125.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _125.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_125.QueryValidatorUnbondingDelegationsResponse>): _125.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _125.QueryValidatorUnbondingDelegationsResponseAmino): _125.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _125.QueryValidatorUnbondingDelegationsResponse): _125.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _125.QueryValidatorUnbondingDelegationsResponseAminoMsg): _125.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _125.QueryValidatorUnbondingDelegationsResponse): _125.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryValidatorUnbondingDelegationsResponseProtoMsg): _125.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _125.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryValidatorUnbondingDelegationsResponse): _125.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _125.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegationRequest;
                fromPartial(object: Partial<_125.QueryDelegationRequest>): _125.QueryDelegationRequest;
                fromAmino(object: _125.QueryDelegationRequestAmino): _125.QueryDelegationRequest;
                toAmino(message: _125.QueryDelegationRequest): _125.QueryDelegationRequestAmino;
                fromAminoMsg(object: _125.QueryDelegationRequestAminoMsg): _125.QueryDelegationRequest;
                toAminoMsg(message: _125.QueryDelegationRequest): _125.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _125.QueryDelegationRequestProtoMsg): _125.QueryDelegationRequest;
                toProto(message: _125.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _125.QueryDelegationRequest): _125.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _125.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegationResponse;
                fromPartial(object: Partial<_125.QueryDelegationResponse>): _125.QueryDelegationResponse;
                fromAmino(object: _125.QueryDelegationResponseAmino): _125.QueryDelegationResponse;
                toAmino(message: _125.QueryDelegationResponse): _125.QueryDelegationResponseAmino;
                fromAminoMsg(object: _125.QueryDelegationResponseAminoMsg): _125.QueryDelegationResponse;
                toAminoMsg(message: _125.QueryDelegationResponse): _125.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _125.QueryDelegationResponseProtoMsg): _125.QueryDelegationResponse;
                toProto(message: _125.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _125.QueryDelegationResponse): _125.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _125.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_125.QueryUnbondingDelegationRequest>): _125.QueryUnbondingDelegationRequest;
                fromAmino(object: _125.QueryUnbondingDelegationRequestAmino): _125.QueryUnbondingDelegationRequest;
                toAmino(message: _125.QueryUnbondingDelegationRequest): _125.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _125.QueryUnbondingDelegationRequestAminoMsg): _125.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _125.QueryUnbondingDelegationRequest): _125.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _125.QueryUnbondingDelegationRequestProtoMsg): _125.QueryUnbondingDelegationRequest;
                toProto(message: _125.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _125.QueryUnbondingDelegationRequest): _125.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _125.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_125.QueryUnbondingDelegationResponse>): _125.QueryUnbondingDelegationResponse;
                fromAmino(object: _125.QueryUnbondingDelegationResponseAmino): _125.QueryUnbondingDelegationResponse;
                toAmino(message: _125.QueryUnbondingDelegationResponse): _125.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _125.QueryUnbondingDelegationResponseAminoMsg): _125.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _125.QueryUnbondingDelegationResponse): _125.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _125.QueryUnbondingDelegationResponseProtoMsg): _125.QueryUnbondingDelegationResponse;
                toProto(message: _125.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _125.QueryUnbondingDelegationResponse): _125.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_125.QueryDelegatorDelegationsRequest>): _125.QueryDelegatorDelegationsRequest;
                fromAmino(object: _125.QueryDelegatorDelegationsRequestAmino): _125.QueryDelegatorDelegationsRequest;
                toAmino(message: _125.QueryDelegatorDelegationsRequest): _125.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _125.QueryDelegatorDelegationsRequestAminoMsg): _125.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _125.QueryDelegatorDelegationsRequest): _125.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorDelegationsRequestProtoMsg): _125.QueryDelegatorDelegationsRequest;
                toProto(message: _125.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorDelegationsRequest): _125.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_125.QueryDelegatorDelegationsResponse>): _125.QueryDelegatorDelegationsResponse;
                fromAmino(object: _125.QueryDelegatorDelegationsResponseAmino): _125.QueryDelegatorDelegationsResponse;
                toAmino(message: _125.QueryDelegatorDelegationsResponse): _125.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _125.QueryDelegatorDelegationsResponseAminoMsg): _125.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _125.QueryDelegatorDelegationsResponse): _125.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorDelegationsResponseProtoMsg): _125.QueryDelegatorDelegationsResponse;
                toProto(message: _125.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorDelegationsResponse): _125.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_125.QueryDelegatorUnbondingDelegationsRequest>): _125.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _125.QueryDelegatorUnbondingDelegationsRequestAmino): _125.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _125.QueryDelegatorUnbondingDelegationsRequest): _125.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _125.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _125.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _125.QueryDelegatorUnbondingDelegationsRequest): _125.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _125.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _125.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorUnbondingDelegationsRequest): _125.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_125.QueryDelegatorUnbondingDelegationsResponse>): _125.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _125.QueryDelegatorUnbondingDelegationsResponseAmino): _125.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _125.QueryDelegatorUnbondingDelegationsResponse): _125.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _125.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _125.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _125.QueryDelegatorUnbondingDelegationsResponse): _125.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _125.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _125.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorUnbondingDelegationsResponse): _125.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _125.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryRedelegationsRequest;
                fromPartial(object: Partial<_125.QueryRedelegationsRequest>): _125.QueryRedelegationsRequest;
                fromAmino(object: _125.QueryRedelegationsRequestAmino): _125.QueryRedelegationsRequest;
                toAmino(message: _125.QueryRedelegationsRequest): _125.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _125.QueryRedelegationsRequestAminoMsg): _125.QueryRedelegationsRequest;
                toAminoMsg(message: _125.QueryRedelegationsRequest): _125.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryRedelegationsRequestProtoMsg): _125.QueryRedelegationsRequest;
                toProto(message: _125.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryRedelegationsRequest): _125.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _125.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryRedelegationsResponse;
                fromPartial(object: Partial<_125.QueryRedelegationsResponse>): _125.QueryRedelegationsResponse;
                fromAmino(object: _125.QueryRedelegationsResponseAmino): _125.QueryRedelegationsResponse;
                toAmino(message: _125.QueryRedelegationsResponse): _125.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _125.QueryRedelegationsResponseAminoMsg): _125.QueryRedelegationsResponse;
                toAminoMsg(message: _125.QueryRedelegationsResponse): _125.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryRedelegationsResponseProtoMsg): _125.QueryRedelegationsResponse;
                toProto(message: _125.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryRedelegationsResponse): _125.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_125.QueryDelegatorValidatorsRequest>): _125.QueryDelegatorValidatorsRequest;
                fromAmino(object: _125.QueryDelegatorValidatorsRequestAmino): _125.QueryDelegatorValidatorsRequest;
                toAmino(message: _125.QueryDelegatorValidatorsRequest): _125.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _125.QueryDelegatorValidatorsRequestAminoMsg): _125.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _125.QueryDelegatorValidatorsRequest): _125.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorValidatorsRequestProtoMsg): _125.QueryDelegatorValidatorsRequest;
                toProto(message: _125.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorValidatorsRequest): _125.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_125.QueryDelegatorValidatorsResponse>): _125.QueryDelegatorValidatorsResponse;
                fromAmino(object: _125.QueryDelegatorValidatorsResponseAmino): _125.QueryDelegatorValidatorsResponse;
                toAmino(message: _125.QueryDelegatorValidatorsResponse): _125.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _125.QueryDelegatorValidatorsResponseAminoMsg): _125.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _125.QueryDelegatorValidatorsResponse): _125.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorValidatorsResponseProtoMsg): _125.QueryDelegatorValidatorsResponse;
                toProto(message: _125.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorValidatorsResponse): _125.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_125.QueryDelegatorValidatorRequest>): _125.QueryDelegatorValidatorRequest;
                fromAmino(object: _125.QueryDelegatorValidatorRequestAmino): _125.QueryDelegatorValidatorRequest;
                toAmino(message: _125.QueryDelegatorValidatorRequest): _125.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _125.QueryDelegatorValidatorRequestAminoMsg): _125.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _125.QueryDelegatorValidatorRequest): _125.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorValidatorRequestProtoMsg): _125.QueryDelegatorValidatorRequest;
                toProto(message: _125.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorValidatorRequest): _125.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _125.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_125.QueryDelegatorValidatorResponse>): _125.QueryDelegatorValidatorResponse;
                fromAmino(object: _125.QueryDelegatorValidatorResponseAmino): _125.QueryDelegatorValidatorResponse;
                toAmino(message: _125.QueryDelegatorValidatorResponse): _125.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _125.QueryDelegatorValidatorResponseAminoMsg): _125.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _125.QueryDelegatorValidatorResponse): _125.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _125.QueryDelegatorValidatorResponseProtoMsg): _125.QueryDelegatorValidatorResponse;
                toProto(message: _125.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _125.QueryDelegatorValidatorResponse): _125.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _125.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_125.QueryHistoricalInfoRequest>): _125.QueryHistoricalInfoRequest;
                fromAmino(object: _125.QueryHistoricalInfoRequestAmino): _125.QueryHistoricalInfoRequest;
                toAmino(message: _125.QueryHistoricalInfoRequest): _125.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _125.QueryHistoricalInfoRequestAminoMsg): _125.QueryHistoricalInfoRequest;
                toAminoMsg(message: _125.QueryHistoricalInfoRequest): _125.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _125.QueryHistoricalInfoRequestProtoMsg): _125.QueryHistoricalInfoRequest;
                toProto(message: _125.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _125.QueryHistoricalInfoRequest): _125.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _125.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_125.QueryHistoricalInfoResponse>): _125.QueryHistoricalInfoResponse;
                fromAmino(object: _125.QueryHistoricalInfoResponseAmino): _125.QueryHistoricalInfoResponse;
                toAmino(message: _125.QueryHistoricalInfoResponse): _125.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _125.QueryHistoricalInfoResponseAminoMsg): _125.QueryHistoricalInfoResponse;
                toAminoMsg(message: _125.QueryHistoricalInfoResponse): _125.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _125.QueryHistoricalInfoResponseProtoMsg): _125.QueryHistoricalInfoResponse;
                toProto(message: _125.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _125.QueryHistoricalInfoResponse): _125.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _125.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.QueryPoolRequest;
                fromPartial(_: Partial<_125.QueryPoolRequest>): _125.QueryPoolRequest;
                fromAmino(_: _125.QueryPoolRequestAmino): _125.QueryPoolRequest;
                toAmino(_: _125.QueryPoolRequest): _125.QueryPoolRequestAmino;
                fromAminoMsg(object: _125.QueryPoolRequestAminoMsg): _125.QueryPoolRequest;
                toAminoMsg(message: _125.QueryPoolRequest): _125.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _125.QueryPoolRequestProtoMsg): _125.QueryPoolRequest;
                toProto(message: _125.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _125.QueryPoolRequest): _125.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _125.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryPoolResponse;
                fromPartial(object: Partial<_125.QueryPoolResponse>): _125.QueryPoolResponse;
                fromAmino(object: _125.QueryPoolResponseAmino): _125.QueryPoolResponse;
                toAmino(message: _125.QueryPoolResponse): _125.QueryPoolResponseAmino;
                fromAminoMsg(object: _125.QueryPoolResponseAminoMsg): _125.QueryPoolResponse;
                toAminoMsg(message: _125.QueryPoolResponse): _125.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _125.QueryPoolResponseProtoMsg): _125.QueryPoolResponse;
                toProto(message: _125.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _125.QueryPoolResponse): _125.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _125.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.QueryParamsRequest;
                fromPartial(_: Partial<_125.QueryParamsRequest>): _125.QueryParamsRequest;
                fromAmino(_: _125.QueryParamsRequestAmino): _125.QueryParamsRequest;
                toAmino(_: _125.QueryParamsRequest): _125.QueryParamsRequestAmino;
                fromAminoMsg(object: _125.QueryParamsRequestAminoMsg): _125.QueryParamsRequest;
                toAminoMsg(message: _125.QueryParamsRequest): _125.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryParamsRequestProtoMsg): _125.QueryParamsRequest;
                toProto(message: _125.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryParamsRequest): _125.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _125.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryParamsResponse;
                fromPartial(object: Partial<_125.QueryParamsResponse>): _125.QueryParamsResponse;
                fromAmino(object: _125.QueryParamsResponseAmino): _125.QueryParamsResponse;
                toAmino(message: _125.QueryParamsResponse): _125.QueryParamsResponseAmino;
                fromAminoMsg(object: _125.QueryParamsResponseAminoMsg): _125.QueryParamsResponse;
                toAminoMsg(message: _125.QueryParamsResponse): _125.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryParamsResponseProtoMsg): _125.QueryParamsResponse;
                toProto(message: _125.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryParamsResponse): _125.QueryParamsResponseProtoMsg;
            };
            QueryTokenizeShareRecordByIdRequest: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareRecordByIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareRecordByIdRequest;
                fromPartial(object: Partial<_125.QueryTokenizeShareRecordByIdRequest>): _125.QueryTokenizeShareRecordByIdRequest;
                fromAmino(object: _125.QueryTokenizeShareRecordByIdRequestAmino): _125.QueryTokenizeShareRecordByIdRequest;
                toAmino(message: _125.QueryTokenizeShareRecordByIdRequest): _125.QueryTokenizeShareRecordByIdRequestAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareRecordByIdRequestAminoMsg): _125.QueryTokenizeShareRecordByIdRequest;
                toAminoMsg(message: _125.QueryTokenizeShareRecordByIdRequest): _125.QueryTokenizeShareRecordByIdRequestAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareRecordByIdRequestProtoMsg): _125.QueryTokenizeShareRecordByIdRequest;
                toProto(message: _125.QueryTokenizeShareRecordByIdRequest): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareRecordByIdRequest): _125.QueryTokenizeShareRecordByIdRequestProtoMsg;
            };
            QueryTokenizeShareRecordByIdResponse: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareRecordByIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareRecordByIdResponse;
                fromPartial(object: Partial<_125.QueryTokenizeShareRecordByIdResponse>): _125.QueryTokenizeShareRecordByIdResponse;
                fromAmino(object: _125.QueryTokenizeShareRecordByIdResponseAmino): _125.QueryTokenizeShareRecordByIdResponse;
                toAmino(message: _125.QueryTokenizeShareRecordByIdResponse): _125.QueryTokenizeShareRecordByIdResponseAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareRecordByIdResponseAminoMsg): _125.QueryTokenizeShareRecordByIdResponse;
                toAminoMsg(message: _125.QueryTokenizeShareRecordByIdResponse): _125.QueryTokenizeShareRecordByIdResponseAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareRecordByIdResponseProtoMsg): _125.QueryTokenizeShareRecordByIdResponse;
                toProto(message: _125.QueryTokenizeShareRecordByIdResponse): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareRecordByIdResponse): _125.QueryTokenizeShareRecordByIdResponseProtoMsg;
            };
            QueryTokenizeShareRecordByDenomRequest: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareRecordByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareRecordByDenomRequest;
                fromPartial(object: Partial<_125.QueryTokenizeShareRecordByDenomRequest>): _125.QueryTokenizeShareRecordByDenomRequest;
                fromAmino(object: _125.QueryTokenizeShareRecordByDenomRequestAmino): _125.QueryTokenizeShareRecordByDenomRequest;
                toAmino(message: _125.QueryTokenizeShareRecordByDenomRequest): _125.QueryTokenizeShareRecordByDenomRequestAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareRecordByDenomRequestAminoMsg): _125.QueryTokenizeShareRecordByDenomRequest;
                toAminoMsg(message: _125.QueryTokenizeShareRecordByDenomRequest): _125.QueryTokenizeShareRecordByDenomRequestAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareRecordByDenomRequestProtoMsg): _125.QueryTokenizeShareRecordByDenomRequest;
                toProto(message: _125.QueryTokenizeShareRecordByDenomRequest): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareRecordByDenomRequest): _125.QueryTokenizeShareRecordByDenomRequestProtoMsg;
            };
            QueryTokenizeShareRecordByDenomResponse: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareRecordByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareRecordByDenomResponse;
                fromPartial(object: Partial<_125.QueryTokenizeShareRecordByDenomResponse>): _125.QueryTokenizeShareRecordByDenomResponse;
                fromAmino(object: _125.QueryTokenizeShareRecordByDenomResponseAmino): _125.QueryTokenizeShareRecordByDenomResponse;
                toAmino(message: _125.QueryTokenizeShareRecordByDenomResponse): _125.QueryTokenizeShareRecordByDenomResponseAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareRecordByDenomResponseAminoMsg): _125.QueryTokenizeShareRecordByDenomResponse;
                toAminoMsg(message: _125.QueryTokenizeShareRecordByDenomResponse): _125.QueryTokenizeShareRecordByDenomResponseAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareRecordByDenomResponseProtoMsg): _125.QueryTokenizeShareRecordByDenomResponse;
                toProto(message: _125.QueryTokenizeShareRecordByDenomResponse): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareRecordByDenomResponse): _125.QueryTokenizeShareRecordByDenomResponseProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedRequest: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareRecordsOwnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareRecordsOwnedRequest;
                fromPartial(object: Partial<_125.QueryTokenizeShareRecordsOwnedRequest>): _125.QueryTokenizeShareRecordsOwnedRequest;
                fromAmino(object: _125.QueryTokenizeShareRecordsOwnedRequestAmino): _125.QueryTokenizeShareRecordsOwnedRequest;
                toAmino(message: _125.QueryTokenizeShareRecordsOwnedRequest): _125.QueryTokenizeShareRecordsOwnedRequestAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareRecordsOwnedRequestAminoMsg): _125.QueryTokenizeShareRecordsOwnedRequest;
                toAminoMsg(message: _125.QueryTokenizeShareRecordsOwnedRequest): _125.QueryTokenizeShareRecordsOwnedRequestAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareRecordsOwnedRequestProtoMsg): _125.QueryTokenizeShareRecordsOwnedRequest;
                toProto(message: _125.QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareRecordsOwnedRequest): _125.QueryTokenizeShareRecordsOwnedRequestProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedResponse: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareRecordsOwnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareRecordsOwnedResponse;
                fromPartial(object: Partial<_125.QueryTokenizeShareRecordsOwnedResponse>): _125.QueryTokenizeShareRecordsOwnedResponse;
                fromAmino(object: _125.QueryTokenizeShareRecordsOwnedResponseAmino): _125.QueryTokenizeShareRecordsOwnedResponse;
                toAmino(message: _125.QueryTokenizeShareRecordsOwnedResponse): _125.QueryTokenizeShareRecordsOwnedResponseAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareRecordsOwnedResponseAminoMsg): _125.QueryTokenizeShareRecordsOwnedResponse;
                toAminoMsg(message: _125.QueryTokenizeShareRecordsOwnedResponse): _125.QueryTokenizeShareRecordsOwnedResponseAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareRecordsOwnedResponseProtoMsg): _125.QueryTokenizeShareRecordsOwnedResponse;
                toProto(message: _125.QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareRecordsOwnedResponse): _125.QueryTokenizeShareRecordsOwnedResponseProtoMsg;
            };
            QueryAllTokenizeShareRecordsRequest: {
                typeUrl: string;
                encode(message: _125.QueryAllTokenizeShareRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryAllTokenizeShareRecordsRequest;
                fromPartial(object: Partial<_125.QueryAllTokenizeShareRecordsRequest>): _125.QueryAllTokenizeShareRecordsRequest;
                fromAmino(object: _125.QueryAllTokenizeShareRecordsRequestAmino): _125.QueryAllTokenizeShareRecordsRequest;
                toAmino(message: _125.QueryAllTokenizeShareRecordsRequest): _125.QueryAllTokenizeShareRecordsRequestAmino;
                fromAminoMsg(object: _125.QueryAllTokenizeShareRecordsRequestAminoMsg): _125.QueryAllTokenizeShareRecordsRequest;
                toAminoMsg(message: _125.QueryAllTokenizeShareRecordsRequest): _125.QueryAllTokenizeShareRecordsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryAllTokenizeShareRecordsRequestProtoMsg): _125.QueryAllTokenizeShareRecordsRequest;
                toProto(message: _125.QueryAllTokenizeShareRecordsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryAllTokenizeShareRecordsRequest): _125.QueryAllTokenizeShareRecordsRequestProtoMsg;
            };
            QueryAllTokenizeShareRecordsResponse: {
                typeUrl: string;
                encode(message: _125.QueryAllTokenizeShareRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryAllTokenizeShareRecordsResponse;
                fromPartial(object: Partial<_125.QueryAllTokenizeShareRecordsResponse>): _125.QueryAllTokenizeShareRecordsResponse;
                fromAmino(object: _125.QueryAllTokenizeShareRecordsResponseAmino): _125.QueryAllTokenizeShareRecordsResponse;
                toAmino(message: _125.QueryAllTokenizeShareRecordsResponse): _125.QueryAllTokenizeShareRecordsResponseAmino;
                fromAminoMsg(object: _125.QueryAllTokenizeShareRecordsResponseAminoMsg): _125.QueryAllTokenizeShareRecordsResponse;
                toAminoMsg(message: _125.QueryAllTokenizeShareRecordsResponse): _125.QueryAllTokenizeShareRecordsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryAllTokenizeShareRecordsResponseProtoMsg): _125.QueryAllTokenizeShareRecordsResponse;
                toProto(message: _125.QueryAllTokenizeShareRecordsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryAllTokenizeShareRecordsResponse): _125.QueryAllTokenizeShareRecordsResponseProtoMsg;
            };
            QueryLastTokenizeShareRecordIdRequest: {
                typeUrl: string;
                encode(_: _125.QueryLastTokenizeShareRecordIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.QueryLastTokenizeShareRecordIdRequest;
                fromPartial(_: Partial<_125.QueryLastTokenizeShareRecordIdRequest>): _125.QueryLastTokenizeShareRecordIdRequest;
                fromAmino(_: _125.QueryLastTokenizeShareRecordIdRequestAmino): _125.QueryLastTokenizeShareRecordIdRequest;
                toAmino(_: _125.QueryLastTokenizeShareRecordIdRequest): _125.QueryLastTokenizeShareRecordIdRequestAmino;
                fromAminoMsg(object: _125.QueryLastTokenizeShareRecordIdRequestAminoMsg): _125.QueryLastTokenizeShareRecordIdRequest;
                toAminoMsg(message: _125.QueryLastTokenizeShareRecordIdRequest): _125.QueryLastTokenizeShareRecordIdRequestAminoMsg;
                fromProtoMsg(message: _125.QueryLastTokenizeShareRecordIdRequestProtoMsg): _125.QueryLastTokenizeShareRecordIdRequest;
                toProto(message: _125.QueryLastTokenizeShareRecordIdRequest): Uint8Array;
                toProtoMsg(message: _125.QueryLastTokenizeShareRecordIdRequest): _125.QueryLastTokenizeShareRecordIdRequestProtoMsg;
            };
            QueryLastTokenizeShareRecordIdResponse: {
                typeUrl: string;
                encode(message: _125.QueryLastTokenizeShareRecordIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryLastTokenizeShareRecordIdResponse;
                fromPartial(object: Partial<_125.QueryLastTokenizeShareRecordIdResponse>): _125.QueryLastTokenizeShareRecordIdResponse;
                fromAmino(object: _125.QueryLastTokenizeShareRecordIdResponseAmino): _125.QueryLastTokenizeShareRecordIdResponse;
                toAmino(message: _125.QueryLastTokenizeShareRecordIdResponse): _125.QueryLastTokenizeShareRecordIdResponseAmino;
                fromAminoMsg(object: _125.QueryLastTokenizeShareRecordIdResponseAminoMsg): _125.QueryLastTokenizeShareRecordIdResponse;
                toAminoMsg(message: _125.QueryLastTokenizeShareRecordIdResponse): _125.QueryLastTokenizeShareRecordIdResponseAminoMsg;
                fromProtoMsg(message: _125.QueryLastTokenizeShareRecordIdResponseProtoMsg): _125.QueryLastTokenizeShareRecordIdResponse;
                toProto(message: _125.QueryLastTokenizeShareRecordIdResponse): Uint8Array;
                toProtoMsg(message: _125.QueryLastTokenizeShareRecordIdResponse): _125.QueryLastTokenizeShareRecordIdResponseProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsRequest: {
                typeUrl: string;
                encode(_: _125.QueryTotalTokenizeSharedAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.QueryTotalTokenizeSharedAssetsRequest;
                fromPartial(_: Partial<_125.QueryTotalTokenizeSharedAssetsRequest>): _125.QueryTotalTokenizeSharedAssetsRequest;
                fromAmino(_: _125.QueryTotalTokenizeSharedAssetsRequestAmino): _125.QueryTotalTokenizeSharedAssetsRequest;
                toAmino(_: _125.QueryTotalTokenizeSharedAssetsRequest): _125.QueryTotalTokenizeSharedAssetsRequestAmino;
                fromAminoMsg(object: _125.QueryTotalTokenizeSharedAssetsRequestAminoMsg): _125.QueryTotalTokenizeSharedAssetsRequest;
                toAminoMsg(message: _125.QueryTotalTokenizeSharedAssetsRequest): _125.QueryTotalTokenizeSharedAssetsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryTotalTokenizeSharedAssetsRequestProtoMsg): _125.QueryTotalTokenizeSharedAssetsRequest;
                toProto(message: _125.QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryTotalTokenizeSharedAssetsRequest): _125.QueryTotalTokenizeSharedAssetsRequestProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsResponse: {
                typeUrl: string;
                encode(message: _125.QueryTotalTokenizeSharedAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTotalTokenizeSharedAssetsResponse;
                fromPartial(object: Partial<_125.QueryTotalTokenizeSharedAssetsResponse>): _125.QueryTotalTokenizeSharedAssetsResponse;
                fromAmino(object: _125.QueryTotalTokenizeSharedAssetsResponseAmino): _125.QueryTotalTokenizeSharedAssetsResponse;
                toAmino(message: _125.QueryTotalTokenizeSharedAssetsResponse): _125.QueryTotalTokenizeSharedAssetsResponseAmino;
                fromAminoMsg(object: _125.QueryTotalTokenizeSharedAssetsResponseAminoMsg): _125.QueryTotalTokenizeSharedAssetsResponse;
                toAminoMsg(message: _125.QueryTotalTokenizeSharedAssetsResponse): _125.QueryTotalTokenizeSharedAssetsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryTotalTokenizeSharedAssetsResponseProtoMsg): _125.QueryTotalTokenizeSharedAssetsResponse;
                toProto(message: _125.QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryTotalTokenizeSharedAssetsResponse): _125.QueryTotalTokenizeSharedAssetsResponseProtoMsg;
            };
            QueryTotalLiquidStaked: {
                typeUrl: string;
                encode(_: _125.QueryTotalLiquidStaked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _125.QueryTotalLiquidStaked;
                fromPartial(_: Partial<_125.QueryTotalLiquidStaked>): _125.QueryTotalLiquidStaked;
                fromAmino(_: _125.QueryTotalLiquidStakedAmino): _125.QueryTotalLiquidStaked;
                toAmino(_: _125.QueryTotalLiquidStaked): _125.QueryTotalLiquidStakedAmino;
                fromAminoMsg(object: _125.QueryTotalLiquidStakedAminoMsg): _125.QueryTotalLiquidStaked;
                toAminoMsg(message: _125.QueryTotalLiquidStaked): _125.QueryTotalLiquidStakedAminoMsg;
                fromProtoMsg(message: _125.QueryTotalLiquidStakedProtoMsg): _125.QueryTotalLiquidStaked;
                toProto(message: _125.QueryTotalLiquidStaked): Uint8Array;
                toProtoMsg(message: _125.QueryTotalLiquidStaked): _125.QueryTotalLiquidStakedProtoMsg;
            };
            QueryTotalLiquidStakedResponse: {
                typeUrl: string;
                encode(message: _125.QueryTotalLiquidStakedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTotalLiquidStakedResponse;
                fromPartial(object: Partial<_125.QueryTotalLiquidStakedResponse>): _125.QueryTotalLiquidStakedResponse;
                fromAmino(object: _125.QueryTotalLiquidStakedResponseAmino): _125.QueryTotalLiquidStakedResponse;
                toAmino(message: _125.QueryTotalLiquidStakedResponse): _125.QueryTotalLiquidStakedResponseAmino;
                fromAminoMsg(object: _125.QueryTotalLiquidStakedResponseAminoMsg): _125.QueryTotalLiquidStakedResponse;
                toAminoMsg(message: _125.QueryTotalLiquidStakedResponse): _125.QueryTotalLiquidStakedResponseAminoMsg;
                fromProtoMsg(message: _125.QueryTotalLiquidStakedResponseProtoMsg): _125.QueryTotalLiquidStakedResponse;
                toProto(message: _125.QueryTotalLiquidStakedResponse): Uint8Array;
                toProtoMsg(message: _125.QueryTotalLiquidStakedResponse): _125.QueryTotalLiquidStakedResponseProtoMsg;
            };
            QueryTokenizeShareLockInfo: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareLockInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareLockInfo;
                fromPartial(object: Partial<_125.QueryTokenizeShareLockInfo>): _125.QueryTokenizeShareLockInfo;
                fromAmino(object: _125.QueryTokenizeShareLockInfoAmino): _125.QueryTokenizeShareLockInfo;
                toAmino(message: _125.QueryTokenizeShareLockInfo): _125.QueryTokenizeShareLockInfoAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareLockInfoAminoMsg): _125.QueryTokenizeShareLockInfo;
                toAminoMsg(message: _125.QueryTokenizeShareLockInfo): _125.QueryTokenizeShareLockInfoAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareLockInfoProtoMsg): _125.QueryTokenizeShareLockInfo;
                toProto(message: _125.QueryTokenizeShareLockInfo): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareLockInfo): _125.QueryTokenizeShareLockInfoProtoMsg;
            };
            QueryTokenizeShareLockInfoResponse: {
                typeUrl: string;
                encode(message: _125.QueryTokenizeShareLockInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.QueryTokenizeShareLockInfoResponse;
                fromPartial(object: Partial<_125.QueryTokenizeShareLockInfoResponse>): _125.QueryTokenizeShareLockInfoResponse;
                fromAmino(object: _125.QueryTokenizeShareLockInfoResponseAmino): _125.QueryTokenizeShareLockInfoResponse;
                toAmino(message: _125.QueryTokenizeShareLockInfoResponse): _125.QueryTokenizeShareLockInfoResponseAmino;
                fromAminoMsg(object: _125.QueryTokenizeShareLockInfoResponseAminoMsg): _125.QueryTokenizeShareLockInfoResponse;
                toAminoMsg(message: _125.QueryTokenizeShareLockInfoResponse): _125.QueryTokenizeShareLockInfoResponseAminoMsg;
                fromProtoMsg(message: _125.QueryTokenizeShareLockInfoResponseProtoMsg): _125.QueryTokenizeShareLockInfoResponse;
                toProto(message: _125.QueryTokenizeShareLockInfoResponse): Uint8Array;
                toProtoMsg(message: _125.QueryTokenizeShareLockInfoResponse): _125.QueryTokenizeShareLockInfoResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _124.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.GenesisState;
                fromPartial(object: Partial<_124.GenesisState>): _124.GenesisState;
                fromAmino(object: _124.GenesisStateAmino): _124.GenesisState;
                toAmino(message: _124.GenesisState): _124.GenesisStateAmino;
                fromAminoMsg(object: _124.GenesisStateAminoMsg): _124.GenesisState;
                toAminoMsg(message: _124.GenesisState): _124.GenesisStateAminoMsg;
                fromProtoMsg(message: _124.GenesisStateProtoMsg): _124.GenesisState;
                toProto(message: _124.GenesisState): Uint8Array;
                toProtoMsg(message: _124.GenesisState): _124.GenesisStateProtoMsg;
            };
            TokenizeShareLock: {
                typeUrl: string;
                encode(message: _124.TokenizeShareLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.TokenizeShareLock;
                fromPartial(object: Partial<_124.TokenizeShareLock>): _124.TokenizeShareLock;
                fromAmino(object: _124.TokenizeShareLockAmino): _124.TokenizeShareLock;
                toAmino(message: _124.TokenizeShareLock): _124.TokenizeShareLockAmino;
                fromAminoMsg(object: _124.TokenizeShareLockAminoMsg): _124.TokenizeShareLock;
                toAminoMsg(message: _124.TokenizeShareLock): _124.TokenizeShareLockAminoMsg;
                fromProtoMsg(message: _124.TokenizeShareLockProtoMsg): _124.TokenizeShareLock;
                toProto(message: _124.TokenizeShareLock): Uint8Array;
                toProtoMsg(message: _124.TokenizeShareLock): _124.TokenizeShareLockProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _124.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.LastValidatorPower;
                fromPartial(object: Partial<_124.LastValidatorPower>): _124.LastValidatorPower;
                fromAmino(object: _124.LastValidatorPowerAmino): _124.LastValidatorPower;
                toAmino(message: _124.LastValidatorPower): _124.LastValidatorPowerAmino;
                fromAminoMsg(object: _124.LastValidatorPowerAminoMsg): _124.LastValidatorPower;
                toAminoMsg(message: _124.LastValidatorPower): _124.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _124.LastValidatorPowerProtoMsg): _124.LastValidatorPower;
                toProto(message: _124.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _124.LastValidatorPower): _124.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _123.AuthorizationType;
            authorizationTypeToJSON(object: _123.AuthorizationType): string;
            AuthorizationType: typeof _123.AuthorizationType;
            AuthorizationTypeSDKType: typeof _123.AuthorizationType;
            AuthorizationTypeAmino: typeof _123.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _123.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.StakeAuthorization;
                fromPartial(object: Partial<_123.StakeAuthorization>): _123.StakeAuthorization;
                fromAmino(object: _123.StakeAuthorizationAmino): _123.StakeAuthorization;
                toAmino(message: _123.StakeAuthorization): _123.StakeAuthorizationAmino;
                fromAminoMsg(object: _123.StakeAuthorizationAminoMsg): _123.StakeAuthorization;
                toAminoMsg(message: _123.StakeAuthorization): _123.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _123.StakeAuthorizationProtoMsg): _123.StakeAuthorization;
                toProto(message: _123.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _123.StakeAuthorization): _123.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _123.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.StakeAuthorization_Validators;
                fromPartial(object: Partial<_123.StakeAuthorization_Validators>): _123.StakeAuthorization_Validators;
                fromAmino(object: _123.StakeAuthorization_ValidatorsAmino): _123.StakeAuthorization_Validators;
                toAmino(message: _123.StakeAuthorization_Validators): _123.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _123.StakeAuthorization_ValidatorsAminoMsg): _123.StakeAuthorization_Validators;
                toAminoMsg(message: _123.StakeAuthorization_Validators): _123.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _123.StakeAuthorization_ValidatorsProtoMsg): _123.StakeAuthorization_Validators;
                toProto(message: _123.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _123.StakeAuthorization_Validators): _123.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _128.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.Config;
                    fromPartial(object: Partial<_128.Config>): _128.Config;
                    fromAmino(object: _128.ConfigAmino): _128.Config;
                    toAmino(message: _128.Config): _128.ConfigAmino;
                    fromAminoMsg(object: _128.ConfigAminoMsg): _128.Config;
                    toAminoMsg(message: _128.Config): _128.ConfigAminoMsg;
                    fromProtoMsg(message: _128.ConfigProtoMsg): _128.Config;
                    toProto(message: _128.Config): Uint8Array;
                    toProtoMsg(message: _128.Config): _128.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _129.SignMode;
                signModeToJSON(object: _129.SignMode): string;
                SignMode: typeof _129.SignMode;
                SignModeSDKType: typeof _129.SignMode;
                SignModeAmino: typeof _129.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _129.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SignatureDescriptors;
                    fromPartial(object: Partial<_129.SignatureDescriptors>): _129.SignatureDescriptors;
                    fromAmino(object: _129.SignatureDescriptorsAmino): _129.SignatureDescriptors;
                    toAmino(message: _129.SignatureDescriptors): _129.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _129.SignatureDescriptorsAminoMsg): _129.SignatureDescriptors;
                    toAminoMsg(message: _129.SignatureDescriptors): _129.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _129.SignatureDescriptorsProtoMsg): _129.SignatureDescriptors;
                    toProto(message: _129.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _129.SignatureDescriptors): _129.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _129.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SignatureDescriptor;
                    fromPartial(object: Partial<_129.SignatureDescriptor>): _129.SignatureDescriptor;
                    fromAmino(object: _129.SignatureDescriptorAmino): _129.SignatureDescriptor;
                    toAmino(message: _129.SignatureDescriptor): _129.SignatureDescriptorAmino;
                    fromAminoMsg(object: _129.SignatureDescriptorAminoMsg): _129.SignatureDescriptor;
                    toAminoMsg(message: _129.SignatureDescriptor): _129.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _129.SignatureDescriptorProtoMsg): _129.SignatureDescriptor;
                    toProto(message: _129.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _129.SignatureDescriptor): _129.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _129.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_129.SignatureDescriptor_Data>): _129.SignatureDescriptor_Data;
                    fromAmino(object: _129.SignatureDescriptor_DataAmino): _129.SignatureDescriptor_Data;
                    toAmino(message: _129.SignatureDescriptor_Data): _129.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _129.SignatureDescriptor_DataAminoMsg): _129.SignatureDescriptor_Data;
                    toAminoMsg(message: _129.SignatureDescriptor_Data): _129.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _129.SignatureDescriptor_DataProtoMsg): _129.SignatureDescriptor_Data;
                    toProto(message: _129.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _129.SignatureDescriptor_Data): _129.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _129.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_129.SignatureDescriptor_Data_Single>): _129.SignatureDescriptor_Data_Single;
                    fromAmino(object: _129.SignatureDescriptor_Data_SingleAmino): _129.SignatureDescriptor_Data_Single;
                    toAmino(message: _129.SignatureDescriptor_Data_Single): _129.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _129.SignatureDescriptor_Data_SingleAminoMsg): _129.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _129.SignatureDescriptor_Data_Single): _129.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _129.SignatureDescriptor_Data_SingleProtoMsg): _129.SignatureDescriptor_Data_Single;
                    toProto(message: _129.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _129.SignatureDescriptor_Data_Single): _129.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _129.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_129.SignatureDescriptor_Data_Multi>): _129.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _129.SignatureDescriptor_Data_MultiAmino): _129.SignatureDescriptor_Data_Multi;
                    toAmino(message: _129.SignatureDescriptor_Data_Multi): _129.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _129.SignatureDescriptor_Data_MultiAminoMsg): _129.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _129.SignatureDescriptor_Data_Multi): _129.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _129.SignatureDescriptor_Data_MultiProtoMsg): _129.SignatureDescriptor_Data_Multi;
                    toProto(message: _129.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _129.SignatureDescriptor_Data_Multi): _129.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _283.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _130.SimulateRequest): Promise<_130.SimulateResponse>;
                getTx(request: _130.GetTxRequest): Promise<_130.GetTxResponse>;
                broadcastTx(request: _130.BroadcastTxRequest): Promise<_130.BroadcastTxResponse>;
                getTxsEvent(request: _130.GetTxsEventRequest): Promise<_130.GetTxsEventResponse>;
                getBlockWithTxs(request: _130.GetBlockWithTxsRequest): Promise<_130.GetBlockWithTxsResponse>;
                txDecode(request: _130.TxDecodeRequest): Promise<_130.TxDecodeResponse>;
                txEncode(request: _130.TxEncodeRequest): Promise<_130.TxEncodeResponse>;
                txEncodeAmino(request: _130.TxEncodeAminoRequest): Promise<_130.TxEncodeAminoResponse>;
                txDecodeAmino(request: _130.TxDecodeAminoRequest): Promise<_130.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _131.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Tx;
                fromPartial(object: Partial<_131.Tx>): _131.Tx;
                fromAmino(object: _131.TxAmino): _131.Tx;
                toAmino(message: _131.Tx): _131.TxAmino;
                fromAminoMsg(object: _131.TxAminoMsg): _131.Tx;
                toAminoMsg(message: _131.Tx): _131.TxAminoMsg;
                fromProtoMsg(message: _131.TxProtoMsg): _131.Tx;
                toProto(message: _131.Tx): Uint8Array;
                toProtoMsg(message: _131.Tx): _131.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _131.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.TxRaw;
                fromPartial(object: Partial<_131.TxRaw>): _131.TxRaw;
                fromAmino(object: _131.TxRawAmino): _131.TxRaw;
                toAmino(message: _131.TxRaw): _131.TxRawAmino;
                fromAminoMsg(object: _131.TxRawAminoMsg): _131.TxRaw;
                toAminoMsg(message: _131.TxRaw): _131.TxRawAminoMsg;
                fromProtoMsg(message: _131.TxRawProtoMsg): _131.TxRaw;
                toProto(message: _131.TxRaw): Uint8Array;
                toProtoMsg(message: _131.TxRaw): _131.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _131.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.SignDoc;
                fromPartial(object: Partial<_131.SignDoc>): _131.SignDoc;
                fromAmino(object: _131.SignDocAmino): _131.SignDoc;
                toAmino(message: _131.SignDoc): _131.SignDocAmino;
                fromAminoMsg(object: _131.SignDocAminoMsg): _131.SignDoc;
                toAminoMsg(message: _131.SignDoc): _131.SignDocAminoMsg;
                fromProtoMsg(message: _131.SignDocProtoMsg): _131.SignDoc;
                toProto(message: _131.SignDoc): Uint8Array;
                toProtoMsg(message: _131.SignDoc): _131.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _131.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.SignDocDirectAux;
                fromPartial(object: Partial<_131.SignDocDirectAux>): _131.SignDocDirectAux;
                fromAmino(object: _131.SignDocDirectAuxAmino): _131.SignDocDirectAux;
                toAmino(message: _131.SignDocDirectAux): _131.SignDocDirectAuxAmino;
                fromAminoMsg(object: _131.SignDocDirectAuxAminoMsg): _131.SignDocDirectAux;
                toAminoMsg(message: _131.SignDocDirectAux): _131.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _131.SignDocDirectAuxProtoMsg): _131.SignDocDirectAux;
                toProto(message: _131.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _131.SignDocDirectAux): _131.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _131.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.TxBody;
                fromPartial(object: Partial<_131.TxBody>): _131.TxBody;
                fromAmino(object: _131.TxBodyAmino): _131.TxBody;
                toAmino(message: _131.TxBody): _131.TxBodyAmino;
                fromAminoMsg(object: _131.TxBodyAminoMsg): _131.TxBody;
                toAminoMsg(message: _131.TxBody): _131.TxBodyAminoMsg;
                fromProtoMsg(message: _131.TxBodyProtoMsg): _131.TxBody;
                toProto(message: _131.TxBody): Uint8Array;
                toProtoMsg(message: _131.TxBody): _131.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _131.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.AuthInfo;
                fromPartial(object: Partial<_131.AuthInfo>): _131.AuthInfo;
                fromAmino(object: _131.AuthInfoAmino): _131.AuthInfo;
                toAmino(message: _131.AuthInfo): _131.AuthInfoAmino;
                fromAminoMsg(object: _131.AuthInfoAminoMsg): _131.AuthInfo;
                toAminoMsg(message: _131.AuthInfo): _131.AuthInfoAminoMsg;
                fromProtoMsg(message: _131.AuthInfoProtoMsg): _131.AuthInfo;
                toProto(message: _131.AuthInfo): Uint8Array;
                toProtoMsg(message: _131.AuthInfo): _131.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _131.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.SignerInfo;
                fromPartial(object: Partial<_131.SignerInfo>): _131.SignerInfo;
                fromAmino(object: _131.SignerInfoAmino): _131.SignerInfo;
                toAmino(message: _131.SignerInfo): _131.SignerInfoAmino;
                fromAminoMsg(object: _131.SignerInfoAminoMsg): _131.SignerInfo;
                toAminoMsg(message: _131.SignerInfo): _131.SignerInfoAminoMsg;
                fromProtoMsg(message: _131.SignerInfoProtoMsg): _131.SignerInfo;
                toProto(message: _131.SignerInfo): Uint8Array;
                toProtoMsg(message: _131.SignerInfo): _131.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _131.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.ModeInfo;
                fromPartial(object: Partial<_131.ModeInfo>): _131.ModeInfo;
                fromAmino(object: _131.ModeInfoAmino): _131.ModeInfo;
                toAmino(message: _131.ModeInfo): _131.ModeInfoAmino;
                fromAminoMsg(object: _131.ModeInfoAminoMsg): _131.ModeInfo;
                toAminoMsg(message: _131.ModeInfo): _131.ModeInfoAminoMsg;
                fromProtoMsg(message: _131.ModeInfoProtoMsg): _131.ModeInfo;
                toProto(message: _131.ModeInfo): Uint8Array;
                toProtoMsg(message: _131.ModeInfo): _131.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _131.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.ModeInfo_Single;
                fromPartial(object: Partial<_131.ModeInfo_Single>): _131.ModeInfo_Single;
                fromAmino(object: _131.ModeInfo_SingleAmino): _131.ModeInfo_Single;
                toAmino(message: _131.ModeInfo_Single): _131.ModeInfo_SingleAmino;
                fromAminoMsg(object: _131.ModeInfo_SingleAminoMsg): _131.ModeInfo_Single;
                toAminoMsg(message: _131.ModeInfo_Single): _131.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _131.ModeInfo_SingleProtoMsg): _131.ModeInfo_Single;
                toProto(message: _131.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _131.ModeInfo_Single): _131.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _131.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.ModeInfo_Multi;
                fromPartial(object: Partial<_131.ModeInfo_Multi>): _131.ModeInfo_Multi;
                fromAmino(object: _131.ModeInfo_MultiAmino): _131.ModeInfo_Multi;
                toAmino(message: _131.ModeInfo_Multi): _131.ModeInfo_MultiAmino;
                fromAminoMsg(object: _131.ModeInfo_MultiAminoMsg): _131.ModeInfo_Multi;
                toAminoMsg(message: _131.ModeInfo_Multi): _131.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _131.ModeInfo_MultiProtoMsg): _131.ModeInfo_Multi;
                toProto(message: _131.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _131.ModeInfo_Multi): _131.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _131.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Fee;
                fromPartial(object: Partial<_131.Fee>): _131.Fee;
                fromAmino(object: _131.FeeAmino): _131.Fee;
                toAmino(message: _131.Fee): _131.FeeAmino;
                fromAminoMsg(object: _131.FeeAminoMsg): _131.Fee;
                toAminoMsg(message: _131.Fee): _131.FeeAminoMsg;
                fromProtoMsg(message: _131.FeeProtoMsg): _131.Fee;
                toProto(message: _131.Fee): Uint8Array;
                toProtoMsg(message: _131.Fee): _131.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _131.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Tip;
                fromPartial(object: Partial<_131.Tip>): _131.Tip;
                fromAmino(object: _131.TipAmino): _131.Tip;
                toAmino(message: _131.Tip): _131.TipAmino;
                fromAminoMsg(object: _131.TipAminoMsg): _131.Tip;
                toAminoMsg(message: _131.Tip): _131.TipAminoMsg;
                fromProtoMsg(message: _131.TipProtoMsg): _131.Tip;
                toProto(message: _131.Tip): Uint8Array;
                toProtoMsg(message: _131.Tip): _131.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _131.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.AuxSignerData;
                fromPartial(object: Partial<_131.AuxSignerData>): _131.AuxSignerData;
                fromAmino(object: _131.AuxSignerDataAmino): _131.AuxSignerData;
                toAmino(message: _131.AuxSignerData): _131.AuxSignerDataAmino;
                fromAminoMsg(object: _131.AuxSignerDataAminoMsg): _131.AuxSignerData;
                toAminoMsg(message: _131.AuxSignerData): _131.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _131.AuxSignerDataProtoMsg): _131.AuxSignerData;
                toProto(message: _131.AuxSignerData): Uint8Array;
                toProtoMsg(message: _131.AuxSignerData): _131.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _130.OrderBy;
            orderByToJSON(object: _130.OrderBy): string;
            broadcastModeFromJSON(object: any): _130.BroadcastMode;
            broadcastModeToJSON(object: _130.BroadcastMode): string;
            OrderBy: typeof _130.OrderBy;
            OrderBySDKType: typeof _130.OrderBy;
            OrderByAmino: typeof _130.OrderBy;
            BroadcastMode: typeof _130.BroadcastMode;
            BroadcastModeSDKType: typeof _130.BroadcastMode;
            BroadcastModeAmino: typeof _130.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _130.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GetTxsEventRequest;
                fromPartial(object: Partial<_130.GetTxsEventRequest>): _130.GetTxsEventRequest;
                fromAmino(object: _130.GetTxsEventRequestAmino): _130.GetTxsEventRequest;
                toAmino(message: _130.GetTxsEventRequest): _130.GetTxsEventRequestAmino;
                fromAminoMsg(object: _130.GetTxsEventRequestAminoMsg): _130.GetTxsEventRequest;
                toAminoMsg(message: _130.GetTxsEventRequest): _130.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _130.GetTxsEventRequestProtoMsg): _130.GetTxsEventRequest;
                toProto(message: _130.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _130.GetTxsEventRequest): _130.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _130.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GetTxsEventResponse;
                fromPartial(object: Partial<_130.GetTxsEventResponse>): _130.GetTxsEventResponse;
                fromAmino(object: _130.GetTxsEventResponseAmino): _130.GetTxsEventResponse;
                toAmino(message: _130.GetTxsEventResponse): _130.GetTxsEventResponseAmino;
                fromAminoMsg(object: _130.GetTxsEventResponseAminoMsg): _130.GetTxsEventResponse;
                toAminoMsg(message: _130.GetTxsEventResponse): _130.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _130.GetTxsEventResponseProtoMsg): _130.GetTxsEventResponse;
                toProto(message: _130.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _130.GetTxsEventResponse): _130.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _130.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.BroadcastTxRequest;
                fromPartial(object: Partial<_130.BroadcastTxRequest>): _130.BroadcastTxRequest;
                fromAmino(object: _130.BroadcastTxRequestAmino): _130.BroadcastTxRequest;
                toAmino(message: _130.BroadcastTxRequest): _130.BroadcastTxRequestAmino;
                fromAminoMsg(object: _130.BroadcastTxRequestAminoMsg): _130.BroadcastTxRequest;
                toAminoMsg(message: _130.BroadcastTxRequest): _130.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _130.BroadcastTxRequestProtoMsg): _130.BroadcastTxRequest;
                toProto(message: _130.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _130.BroadcastTxRequest): _130.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _130.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.BroadcastTxResponse;
                fromPartial(object: Partial<_130.BroadcastTxResponse>): _130.BroadcastTxResponse;
                fromAmino(object: _130.BroadcastTxResponseAmino): _130.BroadcastTxResponse;
                toAmino(message: _130.BroadcastTxResponse): _130.BroadcastTxResponseAmino;
                fromAminoMsg(object: _130.BroadcastTxResponseAminoMsg): _130.BroadcastTxResponse;
                toAminoMsg(message: _130.BroadcastTxResponse): _130.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _130.BroadcastTxResponseProtoMsg): _130.BroadcastTxResponse;
                toProto(message: _130.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _130.BroadcastTxResponse): _130.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _130.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.SimulateRequest;
                fromPartial(object: Partial<_130.SimulateRequest>): _130.SimulateRequest;
                fromAmino(object: _130.SimulateRequestAmino): _130.SimulateRequest;
                toAmino(message: _130.SimulateRequest): _130.SimulateRequestAmino;
                fromAminoMsg(object: _130.SimulateRequestAminoMsg): _130.SimulateRequest;
                toAminoMsg(message: _130.SimulateRequest): _130.SimulateRequestAminoMsg;
                fromProtoMsg(message: _130.SimulateRequestProtoMsg): _130.SimulateRequest;
                toProto(message: _130.SimulateRequest): Uint8Array;
                toProtoMsg(message: _130.SimulateRequest): _130.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _130.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.SimulateResponse;
                fromPartial(object: Partial<_130.SimulateResponse>): _130.SimulateResponse;
                fromAmino(object: _130.SimulateResponseAmino): _130.SimulateResponse;
                toAmino(message: _130.SimulateResponse): _130.SimulateResponseAmino;
                fromAminoMsg(object: _130.SimulateResponseAminoMsg): _130.SimulateResponse;
                toAminoMsg(message: _130.SimulateResponse): _130.SimulateResponseAminoMsg;
                fromProtoMsg(message: _130.SimulateResponseProtoMsg): _130.SimulateResponse;
                toProto(message: _130.SimulateResponse): Uint8Array;
                toProtoMsg(message: _130.SimulateResponse): _130.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _130.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GetTxRequest;
                fromPartial(object: Partial<_130.GetTxRequest>): _130.GetTxRequest;
                fromAmino(object: _130.GetTxRequestAmino): _130.GetTxRequest;
                toAmino(message: _130.GetTxRequest): _130.GetTxRequestAmino;
                fromAminoMsg(object: _130.GetTxRequestAminoMsg): _130.GetTxRequest;
                toAminoMsg(message: _130.GetTxRequest): _130.GetTxRequestAminoMsg;
                fromProtoMsg(message: _130.GetTxRequestProtoMsg): _130.GetTxRequest;
                toProto(message: _130.GetTxRequest): Uint8Array;
                toProtoMsg(message: _130.GetTxRequest): _130.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _130.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GetTxResponse;
                fromPartial(object: Partial<_130.GetTxResponse>): _130.GetTxResponse;
                fromAmino(object: _130.GetTxResponseAmino): _130.GetTxResponse;
                toAmino(message: _130.GetTxResponse): _130.GetTxResponseAmino;
                fromAminoMsg(object: _130.GetTxResponseAminoMsg): _130.GetTxResponse;
                toAminoMsg(message: _130.GetTxResponse): _130.GetTxResponseAminoMsg;
                fromProtoMsg(message: _130.GetTxResponseProtoMsg): _130.GetTxResponse;
                toProto(message: _130.GetTxResponse): Uint8Array;
                toProtoMsg(message: _130.GetTxResponse): _130.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _130.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_130.GetBlockWithTxsRequest>): _130.GetBlockWithTxsRequest;
                fromAmino(object: _130.GetBlockWithTxsRequestAmino): _130.GetBlockWithTxsRequest;
                toAmino(message: _130.GetBlockWithTxsRequest): _130.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _130.GetBlockWithTxsRequestAminoMsg): _130.GetBlockWithTxsRequest;
                toAminoMsg(message: _130.GetBlockWithTxsRequest): _130.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _130.GetBlockWithTxsRequestProtoMsg): _130.GetBlockWithTxsRequest;
                toProto(message: _130.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _130.GetBlockWithTxsRequest): _130.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _130.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_130.GetBlockWithTxsResponse>): _130.GetBlockWithTxsResponse;
                fromAmino(object: _130.GetBlockWithTxsResponseAmino): _130.GetBlockWithTxsResponse;
                toAmino(message: _130.GetBlockWithTxsResponse): _130.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _130.GetBlockWithTxsResponseAminoMsg): _130.GetBlockWithTxsResponse;
                toAminoMsg(message: _130.GetBlockWithTxsResponse): _130.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _130.GetBlockWithTxsResponseProtoMsg): _130.GetBlockWithTxsResponse;
                toProto(message: _130.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _130.GetBlockWithTxsResponse): _130.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _130.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxDecodeRequest;
                fromPartial(object: Partial<_130.TxDecodeRequest>): _130.TxDecodeRequest;
                fromAmino(object: _130.TxDecodeRequestAmino): _130.TxDecodeRequest;
                toAmino(message: _130.TxDecodeRequest): _130.TxDecodeRequestAmino;
                fromAminoMsg(object: _130.TxDecodeRequestAminoMsg): _130.TxDecodeRequest;
                toAminoMsg(message: _130.TxDecodeRequest): _130.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _130.TxDecodeRequestProtoMsg): _130.TxDecodeRequest;
                toProto(message: _130.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _130.TxDecodeRequest): _130.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _130.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxDecodeResponse;
                fromPartial(object: Partial<_130.TxDecodeResponse>): _130.TxDecodeResponse;
                fromAmino(object: _130.TxDecodeResponseAmino): _130.TxDecodeResponse;
                toAmino(message: _130.TxDecodeResponse): _130.TxDecodeResponseAmino;
                fromAminoMsg(object: _130.TxDecodeResponseAminoMsg): _130.TxDecodeResponse;
                toAminoMsg(message: _130.TxDecodeResponse): _130.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _130.TxDecodeResponseProtoMsg): _130.TxDecodeResponse;
                toProto(message: _130.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _130.TxDecodeResponse): _130.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _130.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxEncodeRequest;
                fromPartial(object: Partial<_130.TxEncodeRequest>): _130.TxEncodeRequest;
                fromAmino(object: _130.TxEncodeRequestAmino): _130.TxEncodeRequest;
                toAmino(message: _130.TxEncodeRequest): _130.TxEncodeRequestAmino;
                fromAminoMsg(object: _130.TxEncodeRequestAminoMsg): _130.TxEncodeRequest;
                toAminoMsg(message: _130.TxEncodeRequest): _130.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _130.TxEncodeRequestProtoMsg): _130.TxEncodeRequest;
                toProto(message: _130.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _130.TxEncodeRequest): _130.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _130.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxEncodeResponse;
                fromPartial(object: Partial<_130.TxEncodeResponse>): _130.TxEncodeResponse;
                fromAmino(object: _130.TxEncodeResponseAmino): _130.TxEncodeResponse;
                toAmino(message: _130.TxEncodeResponse): _130.TxEncodeResponseAmino;
                fromAminoMsg(object: _130.TxEncodeResponseAminoMsg): _130.TxEncodeResponse;
                toAminoMsg(message: _130.TxEncodeResponse): _130.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _130.TxEncodeResponseProtoMsg): _130.TxEncodeResponse;
                toProto(message: _130.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _130.TxEncodeResponse): _130.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _130.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxEncodeAminoRequest;
                fromPartial(object: Partial<_130.TxEncodeAminoRequest>): _130.TxEncodeAminoRequest;
                fromAmino(object: _130.TxEncodeAminoRequestAmino): _130.TxEncodeAminoRequest;
                toAmino(message: _130.TxEncodeAminoRequest): _130.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _130.TxEncodeAminoRequestAminoMsg): _130.TxEncodeAminoRequest;
                toAminoMsg(message: _130.TxEncodeAminoRequest): _130.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _130.TxEncodeAminoRequestProtoMsg): _130.TxEncodeAminoRequest;
                toProto(message: _130.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _130.TxEncodeAminoRequest): _130.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _130.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxEncodeAminoResponse;
                fromPartial(object: Partial<_130.TxEncodeAminoResponse>): _130.TxEncodeAminoResponse;
                fromAmino(object: _130.TxEncodeAminoResponseAmino): _130.TxEncodeAminoResponse;
                toAmino(message: _130.TxEncodeAminoResponse): _130.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _130.TxEncodeAminoResponseAminoMsg): _130.TxEncodeAminoResponse;
                toAminoMsg(message: _130.TxEncodeAminoResponse): _130.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _130.TxEncodeAminoResponseProtoMsg): _130.TxEncodeAminoResponse;
                toProto(message: _130.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _130.TxEncodeAminoResponse): _130.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _130.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxDecodeAminoRequest;
                fromPartial(object: Partial<_130.TxDecodeAminoRequest>): _130.TxDecodeAminoRequest;
                fromAmino(object: _130.TxDecodeAminoRequestAmino): _130.TxDecodeAminoRequest;
                toAmino(message: _130.TxDecodeAminoRequest): _130.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _130.TxDecodeAminoRequestAminoMsg): _130.TxDecodeAminoRequest;
                toAminoMsg(message: _130.TxDecodeAminoRequest): _130.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _130.TxDecodeAminoRequestProtoMsg): _130.TxDecodeAminoRequest;
                toProto(message: _130.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _130.TxDecodeAminoRequest): _130.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _130.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.TxDecodeAminoResponse;
                fromPartial(object: Partial<_130.TxDecodeAminoResponse>): _130.TxDecodeAminoResponse;
                fromAmino(object: _130.TxDecodeAminoResponseAmino): _130.TxDecodeAminoResponse;
                toAmino(message: _130.TxDecodeAminoResponse): _130.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _130.TxDecodeAminoResponseAminoMsg): _130.TxDecodeAminoResponse;
                toAminoMsg(message: _130.TxDecodeAminoResponse): _130.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _130.TxDecodeAminoResponseProtoMsg): _130.TxDecodeAminoResponse;
                toProto(message: _130.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _130.TxDecodeAminoResponse): _130.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
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
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _133.QueryCurrentPlanRequest): Promise<_133.QueryCurrentPlanResponse>;
                appliedPlan(request: _133.QueryAppliedPlanRequest): Promise<_133.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _133.QueryUpgradedConsensusStateRequest): Promise<_133.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _133.QueryModuleVersionsRequest): Promise<_133.QueryModuleVersionsResponse>;
                authority(request?: _133.QueryAuthorityRequest): Promise<_133.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _134.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _134.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _134.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _134.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _134.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _134.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _134.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _134.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _134.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _134.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _134.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _134.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _134.MsgSoftwareUpgrade) => _134.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _134.MsgSoftwareUpgradeAmino) => _134.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _134.MsgCancelUpgrade) => _134.MsgCancelUpgradeAmino;
                    fromAmino: (object: _134.MsgCancelUpgradeAmino) => _134.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _135.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.Plan;
                fromPartial(object: Partial<_135.Plan>): _135.Plan;
                fromAmino(object: _135.PlanAmino): _135.Plan;
                toAmino(message: _135.Plan): _135.PlanAmino;
                fromAminoMsg(object: _135.PlanAminoMsg): _135.Plan;
                toAminoMsg(message: _135.Plan): _135.PlanAminoMsg;
                fromProtoMsg(message: _135.PlanProtoMsg): _135.Plan;
                toProto(message: _135.Plan): Uint8Array;
                toProtoMsg(message: _135.Plan): _135.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _135.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_135.SoftwareUpgradeProposal>): _135.SoftwareUpgradeProposal;
                fromAmino(object: _135.SoftwareUpgradeProposalAmino): _135.SoftwareUpgradeProposal;
                toAmino(message: _135.SoftwareUpgradeProposal): _135.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _135.SoftwareUpgradeProposalAminoMsg): _135.SoftwareUpgradeProposal;
                toAminoMsg(message: _135.SoftwareUpgradeProposal): _135.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _135.SoftwareUpgradeProposalProtoMsg): _135.SoftwareUpgradeProposal;
                toProto(message: _135.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _135.SoftwareUpgradeProposal): _135.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _135.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_135.CancelSoftwareUpgradeProposal>): _135.CancelSoftwareUpgradeProposal;
                fromAmino(object: _135.CancelSoftwareUpgradeProposalAmino): _135.CancelSoftwareUpgradeProposal;
                toAmino(message: _135.CancelSoftwareUpgradeProposal): _135.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _135.CancelSoftwareUpgradeProposalAminoMsg): _135.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _135.CancelSoftwareUpgradeProposal): _135.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _135.CancelSoftwareUpgradeProposalProtoMsg): _135.CancelSoftwareUpgradeProposal;
                toProto(message: _135.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _135.CancelSoftwareUpgradeProposal): _135.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _135.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.ModuleVersion;
                fromPartial(object: Partial<_135.ModuleVersion>): _135.ModuleVersion;
                fromAmino(object: _135.ModuleVersionAmino): _135.ModuleVersion;
                toAmino(message: _135.ModuleVersion): _135.ModuleVersionAmino;
                fromAminoMsg(object: _135.ModuleVersionAminoMsg): _135.ModuleVersion;
                toAminoMsg(message: _135.ModuleVersion): _135.ModuleVersionAminoMsg;
                fromProtoMsg(message: _135.ModuleVersionProtoMsg): _135.ModuleVersion;
                toProto(message: _135.ModuleVersion): Uint8Array;
                toProtoMsg(message: _135.ModuleVersion): _135.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _134.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_134.MsgSoftwareUpgrade>): _134.MsgSoftwareUpgrade;
                fromAmino(object: _134.MsgSoftwareUpgradeAmino): _134.MsgSoftwareUpgrade;
                toAmino(message: _134.MsgSoftwareUpgrade): _134.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _134.MsgSoftwareUpgradeAminoMsg): _134.MsgSoftwareUpgrade;
                toAminoMsg(message: _134.MsgSoftwareUpgrade): _134.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _134.MsgSoftwareUpgradeProtoMsg): _134.MsgSoftwareUpgrade;
                toProto(message: _134.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _134.MsgSoftwareUpgrade): _134.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _134.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_134.MsgSoftwareUpgradeResponse>): _134.MsgSoftwareUpgradeResponse;
                fromAmino(_: _134.MsgSoftwareUpgradeResponseAmino): _134.MsgSoftwareUpgradeResponse;
                toAmino(_: _134.MsgSoftwareUpgradeResponse): _134.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _134.MsgSoftwareUpgradeResponseAminoMsg): _134.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _134.MsgSoftwareUpgradeResponse): _134.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _134.MsgSoftwareUpgradeResponseProtoMsg): _134.MsgSoftwareUpgradeResponse;
                toProto(message: _134.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _134.MsgSoftwareUpgradeResponse): _134.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _134.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MsgCancelUpgrade;
                fromPartial(object: Partial<_134.MsgCancelUpgrade>): _134.MsgCancelUpgrade;
                fromAmino(object: _134.MsgCancelUpgradeAmino): _134.MsgCancelUpgrade;
                toAmino(message: _134.MsgCancelUpgrade): _134.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _134.MsgCancelUpgradeAminoMsg): _134.MsgCancelUpgrade;
                toAminoMsg(message: _134.MsgCancelUpgrade): _134.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _134.MsgCancelUpgradeProtoMsg): _134.MsgCancelUpgrade;
                toProto(message: _134.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _134.MsgCancelUpgrade): _134.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _134.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_134.MsgCancelUpgradeResponse>): _134.MsgCancelUpgradeResponse;
                fromAmino(_: _134.MsgCancelUpgradeResponseAmino): _134.MsgCancelUpgradeResponse;
                toAmino(_: _134.MsgCancelUpgradeResponse): _134.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _134.MsgCancelUpgradeResponseAminoMsg): _134.MsgCancelUpgradeResponse;
                toAminoMsg(message: _134.MsgCancelUpgradeResponse): _134.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _134.MsgCancelUpgradeResponseProtoMsg): _134.MsgCancelUpgradeResponse;
                toProto(message: _134.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _134.MsgCancelUpgradeResponse): _134.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _133.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_133.QueryCurrentPlanRequest>): _133.QueryCurrentPlanRequest;
                fromAmino(_: _133.QueryCurrentPlanRequestAmino): _133.QueryCurrentPlanRequest;
                toAmino(_: _133.QueryCurrentPlanRequest): _133.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _133.QueryCurrentPlanRequestAminoMsg): _133.QueryCurrentPlanRequest;
                toAminoMsg(message: _133.QueryCurrentPlanRequest): _133.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _133.QueryCurrentPlanRequestProtoMsg): _133.QueryCurrentPlanRequest;
                toProto(message: _133.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _133.QueryCurrentPlanRequest): _133.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _133.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_133.QueryCurrentPlanResponse>): _133.QueryCurrentPlanResponse;
                fromAmino(object: _133.QueryCurrentPlanResponseAmino): _133.QueryCurrentPlanResponse;
                toAmino(message: _133.QueryCurrentPlanResponse): _133.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _133.QueryCurrentPlanResponseAminoMsg): _133.QueryCurrentPlanResponse;
                toAminoMsg(message: _133.QueryCurrentPlanResponse): _133.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _133.QueryCurrentPlanResponseProtoMsg): _133.QueryCurrentPlanResponse;
                toProto(message: _133.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _133.QueryCurrentPlanResponse): _133.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _133.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_133.QueryAppliedPlanRequest>): _133.QueryAppliedPlanRequest;
                fromAmino(object: _133.QueryAppliedPlanRequestAmino): _133.QueryAppliedPlanRequest;
                toAmino(message: _133.QueryAppliedPlanRequest): _133.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _133.QueryAppliedPlanRequestAminoMsg): _133.QueryAppliedPlanRequest;
                toAminoMsg(message: _133.QueryAppliedPlanRequest): _133.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _133.QueryAppliedPlanRequestProtoMsg): _133.QueryAppliedPlanRequest;
                toProto(message: _133.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _133.QueryAppliedPlanRequest): _133.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _133.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_133.QueryAppliedPlanResponse>): _133.QueryAppliedPlanResponse;
                fromAmino(object: _133.QueryAppliedPlanResponseAmino): _133.QueryAppliedPlanResponse;
                toAmino(message: _133.QueryAppliedPlanResponse): _133.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _133.QueryAppliedPlanResponseAminoMsg): _133.QueryAppliedPlanResponse;
                toAminoMsg(message: _133.QueryAppliedPlanResponse): _133.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _133.QueryAppliedPlanResponseProtoMsg): _133.QueryAppliedPlanResponse;
                toProto(message: _133.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _133.QueryAppliedPlanResponse): _133.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _133.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_133.QueryUpgradedConsensusStateRequest>): _133.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _133.QueryUpgradedConsensusStateRequestAmino): _133.QueryUpgradedConsensusStateRequest;
                toAmino(message: _133.QueryUpgradedConsensusStateRequest): _133.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _133.QueryUpgradedConsensusStateRequestAminoMsg): _133.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _133.QueryUpgradedConsensusStateRequest): _133.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _133.QueryUpgradedConsensusStateRequestProtoMsg): _133.QueryUpgradedConsensusStateRequest;
                toProto(message: _133.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _133.QueryUpgradedConsensusStateRequest): _133.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _133.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_133.QueryUpgradedConsensusStateResponse>): _133.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _133.QueryUpgradedConsensusStateResponseAmino): _133.QueryUpgradedConsensusStateResponse;
                toAmino(message: _133.QueryUpgradedConsensusStateResponse): _133.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _133.QueryUpgradedConsensusStateResponseAminoMsg): _133.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _133.QueryUpgradedConsensusStateResponse): _133.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _133.QueryUpgradedConsensusStateResponseProtoMsg): _133.QueryUpgradedConsensusStateResponse;
                toProto(message: _133.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _133.QueryUpgradedConsensusStateResponse): _133.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _133.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_133.QueryModuleVersionsRequest>): _133.QueryModuleVersionsRequest;
                fromAmino(object: _133.QueryModuleVersionsRequestAmino): _133.QueryModuleVersionsRequest;
                toAmino(message: _133.QueryModuleVersionsRequest): _133.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _133.QueryModuleVersionsRequestAminoMsg): _133.QueryModuleVersionsRequest;
                toAminoMsg(message: _133.QueryModuleVersionsRequest): _133.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryModuleVersionsRequestProtoMsg): _133.QueryModuleVersionsRequest;
                toProto(message: _133.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryModuleVersionsRequest): _133.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _133.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_133.QueryModuleVersionsResponse>): _133.QueryModuleVersionsResponse;
                fromAmino(object: _133.QueryModuleVersionsResponseAmino): _133.QueryModuleVersionsResponse;
                toAmino(message: _133.QueryModuleVersionsResponse): _133.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _133.QueryModuleVersionsResponseAminoMsg): _133.QueryModuleVersionsResponse;
                toAminoMsg(message: _133.QueryModuleVersionsResponse): _133.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryModuleVersionsResponseProtoMsg): _133.QueryModuleVersionsResponse;
                toProto(message: _133.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryModuleVersionsResponse): _133.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _133.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.QueryAuthorityRequest;
                fromPartial(_: Partial<_133.QueryAuthorityRequest>): _133.QueryAuthorityRequest;
                fromAmino(_: _133.QueryAuthorityRequestAmino): _133.QueryAuthorityRequest;
                toAmino(_: _133.QueryAuthorityRequest): _133.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _133.QueryAuthorityRequestAminoMsg): _133.QueryAuthorityRequest;
                toAminoMsg(message: _133.QueryAuthorityRequest): _133.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _133.QueryAuthorityRequestProtoMsg): _133.QueryAuthorityRequest;
                toProto(message: _133.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _133.QueryAuthorityRequest): _133.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _133.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.QueryAuthorityResponse;
                fromPartial(object: Partial<_133.QueryAuthorityResponse>): _133.QueryAuthorityResponse;
                fromAmino(object: _133.QueryAuthorityResponseAmino): _133.QueryAuthorityResponse;
                toAmino(message: _133.QueryAuthorityResponse): _133.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _133.QueryAuthorityResponseAminoMsg): _133.QueryAuthorityResponse;
                toAminoMsg(message: _133.QueryAuthorityResponse): _133.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _133.QueryAuthorityResponseProtoMsg): _133.QueryAuthorityResponse;
                toProto(message: _133.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _133.QueryAuthorityResponse): _133.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _136.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _136.Module;
                    fromPartial(_: Partial<_136.Module>): _136.Module;
                    fromAmino(_: _136.ModuleAmino): _136.Module;
                    toAmino(_: _136.Module): _136.ModuleAmino;
                    fromAminoMsg(object: _136.ModuleAminoMsg): _136.Module;
                    toAminoMsg(message: _136.Module): _136.ModuleAminoMsg;
                    fromProtoMsg(message: _136.ModuleProtoMsg): _136.Module;
                    toProto(message: _136.Module): Uint8Array;
                    toProtoMsg(message: _136.Module): _136.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _137.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _137.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _137.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _137.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _137.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _137.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _137.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _137.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _137.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _137.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _137.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _137.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCreateVestingAccount) => _137.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _137.MsgCreateVestingAccountAmino) => _137.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCreatePermanentLockedAccount) => _137.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _137.MsgCreatePermanentLockedAccountAmino) => _137.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCreatePeriodicVestingAccount) => _137.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _137.MsgCreatePeriodicVestingAccountAmino) => _137.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _138.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.BaseVestingAccount;
                fromPartial(object: Partial<_138.BaseVestingAccount>): _138.BaseVestingAccount;
                fromAmino(object: _138.BaseVestingAccountAmino): _138.BaseVestingAccount;
                toAmino(message: _138.BaseVestingAccount): _138.BaseVestingAccountAmino;
                fromAminoMsg(object: _138.BaseVestingAccountAminoMsg): _138.BaseVestingAccount;
                toAminoMsg(message: _138.BaseVestingAccount): _138.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _138.BaseVestingAccountProtoMsg): _138.BaseVestingAccount;
                toProto(message: _138.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _138.BaseVestingAccount): _138.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _138.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.ContinuousVestingAccount;
                fromPartial(object: Partial<_138.ContinuousVestingAccount>): _138.ContinuousVestingAccount;
                fromAmino(object: _138.ContinuousVestingAccountAmino): _138.ContinuousVestingAccount;
                toAmino(message: _138.ContinuousVestingAccount): _138.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _138.ContinuousVestingAccountAminoMsg): _138.ContinuousVestingAccount;
                toAminoMsg(message: _138.ContinuousVestingAccount): _138.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _138.ContinuousVestingAccountProtoMsg): _138.ContinuousVestingAccount;
                toProto(message: _138.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _138.ContinuousVestingAccount): _138.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _138.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.DelayedVestingAccount;
                fromPartial(object: Partial<_138.DelayedVestingAccount>): _138.DelayedVestingAccount;
                fromAmino(object: _138.DelayedVestingAccountAmino): _138.DelayedVestingAccount;
                toAmino(message: _138.DelayedVestingAccount): _138.DelayedVestingAccountAmino;
                fromAminoMsg(object: _138.DelayedVestingAccountAminoMsg): _138.DelayedVestingAccount;
                toAminoMsg(message: _138.DelayedVestingAccount): _138.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _138.DelayedVestingAccountProtoMsg): _138.DelayedVestingAccount;
                toProto(message: _138.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _138.DelayedVestingAccount): _138.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _138.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.Period;
                fromPartial(object: Partial<_138.Period>): _138.Period;
                fromAmino(object: _138.PeriodAmino): _138.Period;
                toAmino(message: _138.Period): _138.PeriodAmino;
                fromAminoMsg(object: _138.PeriodAminoMsg): _138.Period;
                toAminoMsg(message: _138.Period): _138.PeriodAminoMsg;
                fromProtoMsg(message: _138.PeriodProtoMsg): _138.Period;
                toProto(message: _138.Period): Uint8Array;
                toProtoMsg(message: _138.Period): _138.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _138.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.PeriodicVestingAccount;
                fromPartial(object: Partial<_138.PeriodicVestingAccount>): _138.PeriodicVestingAccount;
                fromAmino(object: _138.PeriodicVestingAccountAmino): _138.PeriodicVestingAccount;
                toAmino(message: _138.PeriodicVestingAccount): _138.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _138.PeriodicVestingAccountAminoMsg): _138.PeriodicVestingAccount;
                toAminoMsg(message: _138.PeriodicVestingAccount): _138.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _138.PeriodicVestingAccountProtoMsg): _138.PeriodicVestingAccount;
                toProto(message: _138.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _138.PeriodicVestingAccount): _138.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _138.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.PermanentLockedAccount;
                fromPartial(object: Partial<_138.PermanentLockedAccount>): _138.PermanentLockedAccount;
                fromAmino(object: _138.PermanentLockedAccountAmino): _138.PermanentLockedAccount;
                toAmino(message: _138.PermanentLockedAccount): _138.PermanentLockedAccountAmino;
                fromAminoMsg(object: _138.PermanentLockedAccountAminoMsg): _138.PermanentLockedAccount;
                toAminoMsg(message: _138.PermanentLockedAccount): _138.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _138.PermanentLockedAccountProtoMsg): _138.PermanentLockedAccount;
                toProto(message: _138.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _138.PermanentLockedAccount): _138.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _137.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgCreateVestingAccount;
                fromPartial(object: Partial<_137.MsgCreateVestingAccount>): _137.MsgCreateVestingAccount;
                fromAmino(object: _137.MsgCreateVestingAccountAmino): _137.MsgCreateVestingAccount;
                toAmino(message: _137.MsgCreateVestingAccount): _137.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _137.MsgCreateVestingAccountAminoMsg): _137.MsgCreateVestingAccount;
                toAminoMsg(message: _137.MsgCreateVestingAccount): _137.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _137.MsgCreateVestingAccountProtoMsg): _137.MsgCreateVestingAccount;
                toProto(message: _137.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _137.MsgCreateVestingAccount): _137.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _137.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_137.MsgCreateVestingAccountResponse>): _137.MsgCreateVestingAccountResponse;
                fromAmino(_: _137.MsgCreateVestingAccountResponseAmino): _137.MsgCreateVestingAccountResponse;
                toAmino(_: _137.MsgCreateVestingAccountResponse): _137.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _137.MsgCreateVestingAccountResponseAminoMsg): _137.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _137.MsgCreateVestingAccountResponse): _137.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _137.MsgCreateVestingAccountResponseProtoMsg): _137.MsgCreateVestingAccountResponse;
                toProto(message: _137.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCreateVestingAccountResponse): _137.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _137.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_137.MsgCreatePermanentLockedAccount>): _137.MsgCreatePermanentLockedAccount;
                fromAmino(object: _137.MsgCreatePermanentLockedAccountAmino): _137.MsgCreatePermanentLockedAccount;
                toAmino(message: _137.MsgCreatePermanentLockedAccount): _137.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _137.MsgCreatePermanentLockedAccountAminoMsg): _137.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _137.MsgCreatePermanentLockedAccount): _137.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _137.MsgCreatePermanentLockedAccountProtoMsg): _137.MsgCreatePermanentLockedAccount;
                toProto(message: _137.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _137.MsgCreatePermanentLockedAccount): _137.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _137.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_137.MsgCreatePermanentLockedAccountResponse>): _137.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _137.MsgCreatePermanentLockedAccountResponseAmino): _137.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _137.MsgCreatePermanentLockedAccountResponse): _137.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _137.MsgCreatePermanentLockedAccountResponseAminoMsg): _137.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _137.MsgCreatePermanentLockedAccountResponse): _137.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _137.MsgCreatePermanentLockedAccountResponseProtoMsg): _137.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _137.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCreatePermanentLockedAccountResponse): _137.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _137.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_137.MsgCreatePeriodicVestingAccount>): _137.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _137.MsgCreatePeriodicVestingAccountAmino): _137.MsgCreatePeriodicVestingAccount;
                toAmino(message: _137.MsgCreatePeriodicVestingAccount): _137.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _137.MsgCreatePeriodicVestingAccountAminoMsg): _137.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _137.MsgCreatePeriodicVestingAccount): _137.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _137.MsgCreatePeriodicVestingAccountProtoMsg): _137.MsgCreatePeriodicVestingAccount;
                toProto(message: _137.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _137.MsgCreatePeriodicVestingAccount): _137.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _137.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_137.MsgCreatePeriodicVestingAccountResponse>): _137.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _137.MsgCreatePeriodicVestingAccountResponseAmino): _137.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _137.MsgCreatePeriodicVestingAccountResponse): _137.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _137.MsgCreatePeriodicVestingAccountResponseAminoMsg): _137.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _137.MsgCreatePeriodicVestingAccountResponse): _137.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _137.MsgCreatePeriodicVestingAccountResponseProtoMsg): _137.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _137.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCreatePeriodicVestingAccountResponse): _137.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _285.MsgClientImpl;
                };
                authz: {
                    v1beta1: _286.MsgClientImpl;
                };
                bank: {
                    v1beta1: _287.MsgClientImpl;
                };
                consensus: {
                    v1: _288.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _289.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _290.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _291.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _292.MsgClientImpl;
                };
                gov: {
                    v1: _293.MsgClientImpl;
                    v1beta1: _294.MsgClientImpl;
                };
                group: {
                    v1: _295.MsgClientImpl;
                };
                mint: {
                    v1beta1: _296.MsgClientImpl;
                };
                nft: {
                    v1beta1: _297.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _298.MsgClientImpl;
                };
                staking: {
                    v1beta1: _299.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _300.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _301.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _16.QueryConfigRequest): Promise<_16.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _20.QueryAccountsRequest): Promise<_20.QueryAccountsResponse>;
                        account(request: _20.QueryAccountRequest): Promise<_20.QueryAccountResponse>;
                        accountAddressByID(request: _20.QueryAccountAddressByIDRequest): Promise<_20.QueryAccountAddressByIDResponse>;
                        params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                        moduleAccounts(request?: _20.QueryModuleAccountsRequest): Promise<_20.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _20.QueryModuleAccountByNameRequest): Promise<_20.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _20.Bech32PrefixRequest): Promise<_20.Bech32PrefixResponse>;
                        addressBytesToString(request: _20.AddressBytesToStringRequest): Promise<_20.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _20.AddressStringToBytesRequest): Promise<_20.AddressStringToBytesResponse>;
                        accountInfo(request: _20.QueryAccountInfoRequest): Promise<_20.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _26.QueryGrantsRequest): Promise<_26.QueryGrantsResponse>;
                        granterGrants(request: _26.QueryGranterGrantsRequest): Promise<_26.QueryGranterGrantsResponse>;
                        granteeGrants(request: _26.QueryGranteeGrantsRequest): Promise<_26.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _29.AppOptionsRequest): Promise<_29.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _34.QueryBalanceRequest): Promise<_34.QueryBalanceResponse>;
                        allBalances(request: _34.QueryAllBalancesRequest): Promise<_34.QueryAllBalancesResponse>;
                        spendableBalances(request: _34.QuerySpendableBalancesRequest): Promise<_34.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _34.QuerySpendableBalanceByDenomRequest): Promise<_34.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _34.QueryTotalSupplyRequest): Promise<_34.QueryTotalSupplyResponse>;
                        supplyOf(request: _34.QuerySupplyOfRequest): Promise<_34.QuerySupplyOfResponse>;
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        denomMetadata(request: _34.QueryDenomMetadataRequest): Promise<_34.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _34.QueryDenomsMetadataRequest): Promise<_34.QueryDenomsMetadataResponse>;
                        denomOwners(request: _34.QueryDenomOwnersRequest): Promise<_34.QueryDenomOwnersResponse>;
                        sendEnabled(request: _34.QuerySendEnabledRequest): Promise<_34.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _38.ConfigRequest): Promise<_38.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _46.GetNodeInfoRequest): Promise<_46.GetNodeInfoResponse>;
                            getSyncing(request?: _46.GetSyncingRequest): Promise<_46.GetSyncingResponse>;
                            getLatestBlock(request?: _46.GetLatestBlockRequest): Promise<_46.GetLatestBlockResponse>;
                            getBlockByHeight(request: _46.GetBlockByHeightRequest): Promise<_46.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _46.GetLatestValidatorSetRequest): Promise<_46.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _46.GetValidatorSetByHeightRequest): Promise<_46.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _46.ABCIQueryRequest): Promise<_46.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        validatorDistributionInfo(request: _67.QueryValidatorDistributionInfoRequest): Promise<_67.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _67.QueryValidatorOutstandingRewardsRequest): Promise<_67.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _67.QueryValidatorCommissionRequest): Promise<_67.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _67.QueryValidatorSlashesRequest): Promise<_67.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _67.QueryDelegationRewardsRequest): Promise<_67.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _67.QueryDelegationTotalRewardsRequest): Promise<_67.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _67.QueryDelegatorValidatorsRequest): Promise<_67.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _67.QueryDelegatorWithdrawAddressRequest): Promise<_67.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _67.QueryCommunityPoolRequest): Promise<_67.QueryCommunityPoolResponse>;
                        tokenizeShareRecordReward(request: _67.QueryTokenizeShareRecordRewardRequest): Promise<_67.QueryTokenizeShareRecordRewardResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _72.QueryEvidenceRequest): Promise<_72.QueryEvidenceResponse>;
                        allEvidence(request?: _72.QueryAllEvidenceRequest): Promise<_72.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _77.QueryAllowanceRequest): Promise<_77.QueryAllowanceResponse>;
                        allowances(request: _77.QueryAllowancesRequest): Promise<_77.QueryAllowancesResponse>;
                        allowancesByGranter(request: _77.QueryAllowancesByGranterRequest): Promise<_77.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _84.QueryProposalRequest): Promise<_84.QueryProposalResponse>;
                        proposals(request: _84.QueryProposalsRequest): Promise<_84.QueryProposalsResponse>;
                        vote(request: _84.QueryVoteRequest): Promise<_84.QueryVoteResponse>;
                        votes(request: _84.QueryVotesRequest): Promise<_84.QueryVotesResponse>;
                        params(request: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        deposit(request: _84.QueryDepositRequest): Promise<_84.QueryDepositResponse>;
                        deposits(request: _84.QueryDepositsRequest): Promise<_84.QueryDepositsResponse>;
                        tallyResult(request: _84.QueryTallyResultRequest): Promise<_84.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _88.QueryProposalRequest): Promise<_88.QueryProposalResponse>;
                        proposals(request: _88.QueryProposalsRequest): Promise<_88.QueryProposalsResponse>;
                        vote(request: _88.QueryVoteRequest): Promise<_88.QueryVoteResponse>;
                        votes(request: _88.QueryVotesRequest): Promise<_88.QueryVotesResponse>;
                        params(request: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                        deposit(request: _88.QueryDepositRequest): Promise<_88.QueryDepositResponse>;
                        deposits(request: _88.QueryDepositsRequest): Promise<_88.QueryDepositsResponse>;
                        tallyResult(request: _88.QueryTallyResultRequest): Promise<_88.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _93.QueryGroupInfoRequest): Promise<_93.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _93.QueryGroupPolicyInfoRequest): Promise<_93.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _93.QueryGroupMembersRequest): Promise<_93.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _93.QueryGroupsByAdminRequest): Promise<_93.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _93.QueryGroupPoliciesByGroupRequest): Promise<_93.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _93.QueryGroupPoliciesByAdminRequest): Promise<_93.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _93.QueryProposalRequest): Promise<_93.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _93.QueryProposalsByGroupPolicyRequest): Promise<_93.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _93.QueryVoteByProposalVoterRequest): Promise<_93.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _93.QueryVotesByProposalRequest): Promise<_93.QueryVotesByProposalResponse>;
                        votesByVoter(request: _93.QueryVotesByVoterRequest): Promise<_93.QueryVotesByVoterResponse>;
                        groupsByMember(request: _93.QueryGroupsByMemberRequest): Promise<_93.QueryGroupsByMemberResponse>;
                        tallyResult(request: _93.QueryTallyResultRequest): Promise<_93.QueryTallyResultResponse>;
                        groups(request?: _93.QueryGroupsRequest): Promise<_93.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                        inflation(request?: _99.QueryInflationRequest): Promise<_99.QueryInflationResponse>;
                        annualProvisions(request?: _99.QueryAnnualProvisionsRequest): Promise<_99.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _106.QueryBalanceRequest): Promise<_106.QueryBalanceResponse>;
                        owner(request: _106.QueryOwnerRequest): Promise<_106.QueryOwnerResponse>;
                        supply(request: _106.QuerySupplyRequest): Promise<_106.QuerySupplyResponse>;
                        nFTs(request: _106.QueryNFTsRequest): Promise<_106.QueryNFTsResponse>;
                        nFT(request: _106.QueryNFTRequest): Promise<_106.QueryNFTResponse>;
                        class(request: _106.QueryClassRequest): Promise<_106.QueryClassResponse>;
                        classes(request?: _106.QueryClassesRequest): Promise<_106.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _109.GetRequest): Promise<_109.GetResponse>;
                            list(request: _109.ListRequest): Promise<_109.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                        subspaces(request?: _114.QuerySubspacesRequest): Promise<_114.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        signingInfo(request: _119.QuerySigningInfoRequest): Promise<_119.QuerySigningInfoResponse>;
                        signingInfos(request?: _119.QuerySigningInfosRequest): Promise<_119.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _125.QueryValidatorsRequest): Promise<_125.QueryValidatorsResponse>;
                        validator(request: _125.QueryValidatorRequest): Promise<_125.QueryValidatorResponse>;
                        validatorDelegations(request: _125.QueryValidatorDelegationsRequest): Promise<_125.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _125.QueryValidatorUnbondingDelegationsRequest): Promise<_125.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _125.QueryDelegationRequest): Promise<_125.QueryDelegationResponse>;
                        unbondingDelegation(request: _125.QueryUnbondingDelegationRequest): Promise<_125.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _125.QueryDelegatorDelegationsRequest): Promise<_125.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _125.QueryDelegatorUnbondingDelegationsRequest): Promise<_125.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _125.QueryRedelegationsRequest): Promise<_125.QueryRedelegationsResponse>;
                        delegatorValidators(request: _125.QueryDelegatorValidatorsRequest): Promise<_125.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _125.QueryDelegatorValidatorRequest): Promise<_125.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _125.QueryHistoricalInfoRequest): Promise<_125.QueryHistoricalInfoResponse>;
                        pool(request?: _125.QueryPoolRequest): Promise<_125.QueryPoolResponse>;
                        params(request?: _125.QueryParamsRequest): Promise<_125.QueryParamsResponse>;
                        tokenizeShareRecordById(request: _125.QueryTokenizeShareRecordByIdRequest): Promise<_125.QueryTokenizeShareRecordByIdResponse>;
                        tokenizeShareRecordByDenom(request: _125.QueryTokenizeShareRecordByDenomRequest): Promise<_125.QueryTokenizeShareRecordByDenomResponse>;
                        tokenizeShareRecordsOwned(request: _125.QueryTokenizeShareRecordsOwnedRequest): Promise<_125.QueryTokenizeShareRecordsOwnedResponse>;
                        allTokenizeShareRecords(request?: _125.QueryAllTokenizeShareRecordsRequest): Promise<_125.QueryAllTokenizeShareRecordsResponse>;
                        lastTokenizeShareRecordId(request?: _125.QueryLastTokenizeShareRecordIdRequest): Promise<_125.QueryLastTokenizeShareRecordIdResponse>;
                        totalTokenizeSharedAssets(request?: _125.QueryTotalTokenizeSharedAssetsRequest): Promise<_125.QueryTotalTokenizeSharedAssetsResponse>;
                        totalLiquidStaked(request?: _125.QueryTotalLiquidStaked): Promise<_125.QueryTotalLiquidStakedResponse>;
                        tokenizeShareLockInfo(request: _125.QueryTokenizeShareLockInfo): Promise<_125.QueryTokenizeShareLockInfoResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _130.SimulateRequest): Promise<_130.SimulateResponse>;
                        getTx(request: _130.GetTxRequest): Promise<_130.GetTxResponse>;
                        broadcastTx(request: _130.BroadcastTxRequest): Promise<_130.BroadcastTxResponse>;
                        getTxsEvent(request: _130.GetTxsEventRequest): Promise<_130.GetTxsEventResponse>;
                        getBlockWithTxs(request: _130.GetBlockWithTxsRequest): Promise<_130.GetBlockWithTxsResponse>;
                        txDecode(request: _130.TxDecodeRequest): Promise<_130.TxDecodeResponse>;
                        txEncode(request: _130.TxEncodeRequest): Promise<_130.TxEncodeResponse>;
                        txEncodeAmino(request: _130.TxEncodeAminoRequest): Promise<_130.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _130.TxDecodeAminoRequest): Promise<_130.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _133.QueryCurrentPlanRequest): Promise<_133.QueryCurrentPlanResponse>;
                        appliedPlan(request: _133.QueryAppliedPlanRequest): Promise<_133.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _133.QueryUpgradedConsensusStateRequest): Promise<_133.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _133.QueryModuleVersionsRequest): Promise<_133.QueryModuleVersionsResponse>;
                        authority(request?: _133.QueryAuthorityRequest): Promise<_133.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _244.LCDQueryClient;
                };
                authz: {
                    v1beta1: _245.LCDQueryClient;
                };
                bank: {
                    v1beta1: _246.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _247.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _248.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _249.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _250.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _251.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _252.LCDQueryClient;
                };
                gov: {
                    v1: _253.LCDQueryClient;
                    v1beta1: _254.LCDQueryClient;
                };
                group: {
                    v1: _255.LCDQueryClient;
                };
                mint: {
                    v1beta1: _256.LCDQueryClient;
                };
                nft: {
                    v1beta1: _257.LCDQueryClient;
                };
                params: {
                    v1beta1: _258.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _259.LCDQueryClient;
                };
                staking: {
                    v1beta1: _260.LCDQueryClient;
                };
                tx: {
                    v1beta1: _261.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _262.LCDQueryClient;
                };
            };
        }>;
    };
}
