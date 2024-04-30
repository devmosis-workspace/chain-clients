import * as _30 from "./app/runtime/v1alpha1/module";
import * as _31 from "./app/v1alpha1/config";
import * as _32 from "./app/v1alpha1/module";
import * as _33 from "./app/v1alpha1/query";
import * as _34 from "./auth/module/v1/module";
import * as _35 from "./auth/v1beta1/auth";
import * as _36 from "./auth/v1beta1/genesis";
import * as _37 from "./auth/v1beta1/query";
import * as _38 from "./auth/v1beta1/tx";
import * as _39 from "./authz/module/v1/module";
import * as _40 from "./authz/v1beta1/authz";
import * as _41 from "./authz/v1beta1/event";
import * as _42 from "./authz/v1beta1/genesis";
import * as _43 from "./authz/v1beta1/query";
import * as _44 from "./authz/v1beta1/tx";
import * as _45 from "./autocli/v1/options";
import * as _46 from "./autocli/v1/query";
import * as _47 from "./bank/module/v1/module";
import * as _48 from "./bank/v1beta1/authz";
import * as _49 from "./bank/v1beta1/bank";
import * as _50 from "./bank/v1beta1/genesis";
import * as _51 from "./bank/v1beta1/query";
import * as _52 from "./bank/v1beta1/tx";
import * as _53 from "./base/abci/v1beta1/abci";
import * as _54 from "./base/kv/v1beta1/kv";
import * as _55 from "./base/node/v1beta1/query";
import * as _56 from "./base/query/v1beta1/pagination";
import * as _57 from "./base/reflection/v1beta1/reflection";
import * as _58 from "./base/reflection/v2alpha1/reflection";
import * as _59 from "./base/snapshots/v1beta1/snapshot";
import * as _60 from "./base/store/v1beta1/commit_info";
import * as _61 from "./base/store/v1beta1/listening";
import * as _62 from "./base/tendermint/v1beta1/query";
import * as _63 from "./base/tendermint/v1beta1/types";
import * as _64 from "./base/v1beta1/coin";
import * as _65 from "./capability/module/v1/module";
import * as _66 from "./capability/v1beta1/capability";
import * as _67 from "./capability/v1beta1/genesis";
import * as _68 from "./consensus/module/v1/module";
import * as _69 from "./consensus/v1/query";
import * as _70 from "./consensus/v1/tx";
import * as _71 from "./crisis/module/v1/module";
import * as _72 from "./crisis/v1beta1/genesis";
import * as _73 from "./crisis/v1beta1/tx";
import * as _74 from "./crypto/ed25519/keys";
import * as _75 from "./crypto/hd/v1/hd";
import * as _76 from "./crypto/keyring/v1/record";
import * as _77 from "./crypto/multisig/keys";
import * as _78 from "./crypto/secp256k1/keys";
import * as _79 from "./crypto/secp256r1/keys";
import * as _80 from "./distribution/module/v1/module";
import * as _81 from "./distribution/v1beta1/distribution";
import * as _82 from "./distribution/v1beta1/genesis";
import * as _83 from "./distribution/v1beta1/query";
import * as _84 from "./distribution/v1beta1/tx";
import * as _85 from "./evidence/module/v1/module";
import * as _86 from "./evidence/v1beta1/evidence";
import * as _87 from "./evidence/v1beta1/genesis";
import * as _88 from "./evidence/v1beta1/query";
import * as _89 from "./evidence/v1beta1/tx";
import * as _90 from "./feegrant/module/v1/module";
import * as _91 from "./feegrant/v1beta1/feegrant";
import * as _92 from "./feegrant/v1beta1/genesis";
import * as _93 from "./feegrant/v1beta1/query";
import * as _94 from "./feegrant/v1beta1/tx";
import * as _95 from "./genutil/module/v1/module";
import * as _96 from "./genutil/v1beta1/genesis";
import * as _97 from "./gov/module/v1/module";
import * as _98 from "./gov/v1/genesis";
import * as _99 from "./gov/v1/gov";
import * as _100 from "./gov/v1/query";
import * as _101 from "./gov/v1/tx";
import * as _102 from "./gov/v1beta1/genesis";
import * as _103 from "./gov/v1beta1/gov";
import * as _104 from "./gov/v1beta1/query";
import * as _105 from "./gov/v1beta1/tx";
import * as _106 from "./group/module/v1/module";
import * as _107 from "./group/v1/events";
import * as _108 from "./group/v1/genesis";
import * as _109 from "./group/v1/query";
import * as _110 from "./group/v1/tx";
import * as _111 from "./group/v1/types";
import * as _112 from "./mint/module/v1/module";
import * as _113 from "./mint/v1beta1/genesis";
import * as _114 from "./mint/v1beta1/mint";
import * as _115 from "./mint/v1beta1/query";
import * as _116 from "./mint/v1beta1/tx";
import * as _118 from "./nft/module/v1/module";
import * as _119 from "./nft/v1beta1/event";
import * as _120 from "./nft/v1beta1/genesis";
import * as _121 from "./nft/v1beta1/nft";
import * as _122 from "./nft/v1beta1/query";
import * as _123 from "./nft/v1beta1/tx";
import * as _124 from "./orm/module/v1alpha1/module";
import * as _125 from "./orm/query/v1alpha1/query";
import * as _126 from "./orm/v1/orm";
import * as _127 from "./orm/v1alpha1/schema";
import * as _128 from "./params/module/v1/module";
import * as _129 from "./params/v1beta1/params";
import * as _130 from "./params/v1beta1/query";
import * as _132 from "./reflection/v1/reflection";
import * as _133 from "./slashing/module/v1/module";
import * as _134 from "./slashing/v1beta1/genesis";
import * as _135 from "./slashing/v1beta1/query";
import * as _136 from "./slashing/v1beta1/slashing";
import * as _137 from "./slashing/v1beta1/tx";
import * as _138 from "./staking/module/v1/module";
import * as _139 from "./staking/v1beta1/authz";
import * as _140 from "./staking/v1beta1/genesis";
import * as _141 from "./staking/v1beta1/query";
import * as _142 from "./staking/v1beta1/staking";
import * as _143 from "./staking/v1beta1/tx";
import * as _144 from "./tx/config/v1/config";
import * as _145 from "./tx/signing/v1beta1/signing";
import * as _146 from "./tx/v1beta1/service";
import * as _147 from "./tx/v1beta1/tx";
import * as _148 from "./upgrade/module/v1/module";
import * as _149 from "./upgrade/v1beta1/query";
import * as _150 from "./upgrade/v1beta1/tx";
import * as _151 from "./upgrade/v1beta1/upgrade";
import * as _152 from "./vesting/module/v1/module";
import * as _153 from "./vesting/v1beta1/tx";
import * as _154 from "./vesting/v1beta1/vesting";
import * as _245 from "./auth/v1beta1/query.lcd";
import * as _246 from "./authz/v1beta1/query.lcd";
import * as _247 from "./bank/v1beta1/query.lcd";
import * as _248 from "./base/node/v1beta1/query.lcd";
import * as _249 from "./base/tendermint/v1beta1/query.lcd";
import * as _250 from "./consensus/v1/query.lcd";
import * as _251 from "./distribution/v1beta1/query.lcd";
import * as _252 from "./evidence/v1beta1/query.lcd";
import * as _253 from "./feegrant/v1beta1/query.lcd";
import * as _254 from "./gov/v1/query.lcd";
import * as _255 from "./gov/v1beta1/query.lcd";
import * as _256 from "./group/v1/query.lcd";
import * as _257 from "./mint/v1beta1/query.lcd";
import * as _258 from "./nft/v1beta1/query.lcd";
import * as _259 from "./params/v1beta1/query.lcd";
import * as _260 from "./slashing/v1beta1/query.lcd";
import * as _261 from "./staking/v1beta1/query.lcd";
import * as _262 from "./tx/v1beta1/service.lcd";
import * as _263 from "./upgrade/v1beta1/query.lcd";
import * as _264 from "./app/v1alpha1/query.rpc.Query";
import * as _265 from "./auth/v1beta1/query.rpc.Query";
import * as _266 from "./authz/v1beta1/query.rpc.Query";
import * as _267 from "./autocli/v1/query.rpc.Query";
import * as _268 from "./bank/v1beta1/query.rpc.Query";
import * as _269 from "./base/node/v1beta1/query.rpc.Service";
import * as _270 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _271 from "./consensus/v1/query.rpc.Query";
import * as _272 from "./distribution/v1beta1/query.rpc.Query";
import * as _273 from "./evidence/v1beta1/query.rpc.Query";
import * as _274 from "./feegrant/v1beta1/query.rpc.Query";
import * as _275 from "./gov/v1/query.rpc.Query";
import * as _276 from "./gov/v1beta1/query.rpc.Query";
import * as _277 from "./group/v1/query.rpc.Query";
import * as _278 from "./mint/v1beta1/query.rpc.Query";
import * as _279 from "./nft/v1beta1/query.rpc.Query";
import * as _280 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _281 from "./params/v1beta1/query.rpc.Query";
import * as _282 from "./slashing/v1beta1/query.rpc.Query";
import * as _283 from "./staking/v1beta1/query.rpc.Query";
import * as _284 from "./tx/v1beta1/service.rpc.Service";
import * as _285 from "./upgrade/v1beta1/query.rpc.Query";
import * as _286 from "./auth/v1beta1/tx.rpc.msg";
import * as _287 from "./authz/v1beta1/tx.rpc.msg";
import * as _288 from "./bank/v1beta1/tx.rpc.msg";
import * as _289 from "./consensus/v1/tx.rpc.msg";
import * as _290 from "./crisis/v1beta1/tx.rpc.msg";
import * as _291 from "./distribution/v1beta1/tx.rpc.msg";
import * as _292 from "./evidence/v1beta1/tx.rpc.msg";
import * as _293 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _294 from "./gov/v1/tx.rpc.msg";
import * as _295 from "./gov/v1beta1/tx.rpc.msg";
import * as _296 from "./group/v1/tx.rpc.msg";
import * as _297 from "./mint/v1beta1/tx.rpc.msg";
import * as _298 from "./nft/v1beta1/tx.rpc.msg";
import * as _299 from "./slashing/v1beta1/tx.rpc.msg";
import * as _300 from "./staking/v1beta1/tx.rpc.msg";
import * as _301 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _302 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
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
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _30.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.StoreKeyConfig;
                    fromPartial(object: Partial<_30.StoreKeyConfig>): _30.StoreKeyConfig;
                    fromAmino(object: _30.StoreKeyConfigAmino): _30.StoreKeyConfig;
                    toAmino(message: _30.StoreKeyConfig): _30.StoreKeyConfigAmino;
                    fromAminoMsg(object: _30.StoreKeyConfigAminoMsg): _30.StoreKeyConfig;
                    toAminoMsg(message: _30.StoreKeyConfig): _30.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _30.StoreKeyConfigProtoMsg): _30.StoreKeyConfig;
                    toProto(message: _30.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _30.StoreKeyConfig): _30.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _33.QueryConfigRequest): Promise<_33.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _33.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryConfigRequest;
                fromPartial(_: Partial<_33.QueryConfigRequest>): _33.QueryConfigRequest;
                fromAmino(_: _33.QueryConfigRequestAmino): _33.QueryConfigRequest;
                toAmino(_: _33.QueryConfigRequest): _33.QueryConfigRequestAmino;
                fromAminoMsg(object: _33.QueryConfigRequestAminoMsg): _33.QueryConfigRequest;
                toAminoMsg(message: _33.QueryConfigRequest): _33.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _33.QueryConfigRequestProtoMsg): _33.QueryConfigRequest;
                toProto(message: _33.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _33.QueryConfigRequest): _33.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _33.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryConfigResponse;
                fromPartial(object: Partial<_33.QueryConfigResponse>): _33.QueryConfigResponse;
                fromAmino(object: _33.QueryConfigResponseAmino): _33.QueryConfigResponse;
                toAmino(message: _33.QueryConfigResponse): _33.QueryConfigResponseAmino;
                fromAminoMsg(object: _33.QueryConfigResponseAminoMsg): _33.QueryConfigResponse;
                toAminoMsg(message: _33.QueryConfigResponse): _33.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _33.QueryConfigResponseProtoMsg): _33.QueryConfigResponse;
                toProto(message: _33.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _33.QueryConfigResponse): _33.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _32.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ModuleDescriptor;
                fromPartial(object: Partial<_32.ModuleDescriptor>): _32.ModuleDescriptor;
                fromAmino(object: _32.ModuleDescriptorAmino): _32.ModuleDescriptor;
                toAmino(message: _32.ModuleDescriptor): _32.ModuleDescriptorAmino;
                fromAminoMsg(object: _32.ModuleDescriptorAminoMsg): _32.ModuleDescriptor;
                toAminoMsg(message: _32.ModuleDescriptor): _32.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _32.ModuleDescriptorProtoMsg): _32.ModuleDescriptor;
                toProto(message: _32.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _32.ModuleDescriptor): _32.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _32.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.PackageReference;
                fromPartial(object: Partial<_32.PackageReference>): _32.PackageReference;
                fromAmino(object: _32.PackageReferenceAmino): _32.PackageReference;
                toAmino(message: _32.PackageReference): _32.PackageReferenceAmino;
                fromAminoMsg(object: _32.PackageReferenceAminoMsg): _32.PackageReference;
                toAminoMsg(message: _32.PackageReference): _32.PackageReferenceAminoMsg;
                fromProtoMsg(message: _32.PackageReferenceProtoMsg): _32.PackageReference;
                toProto(message: _32.PackageReference): Uint8Array;
                toProtoMsg(message: _32.PackageReference): _32.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _32.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MigrateFromInfo;
                fromPartial(object: Partial<_32.MigrateFromInfo>): _32.MigrateFromInfo;
                fromAmino(object: _32.MigrateFromInfoAmino): _32.MigrateFromInfo;
                toAmino(message: _32.MigrateFromInfo): _32.MigrateFromInfoAmino;
                fromAminoMsg(object: _32.MigrateFromInfoAminoMsg): _32.MigrateFromInfo;
                toAminoMsg(message: _32.MigrateFromInfo): _32.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _32.MigrateFromInfoProtoMsg): _32.MigrateFromInfo;
                toProto(message: _32.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _32.MigrateFromInfo): _32.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _31.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Config;
                fromPartial(object: Partial<_31.Config>): _31.Config;
                fromAmino(object: _31.ConfigAmino): _31.Config;
                toAmino(message: _31.Config): _31.ConfigAmino;
                fromAminoMsg(object: _31.ConfigAminoMsg): _31.Config;
                toAminoMsg(message: _31.Config): _31.ConfigAminoMsg;
                fromProtoMsg(message: _31.ConfigProtoMsg): _31.Config;
                toProto(message: _31.Config): Uint8Array;
                toProtoMsg(message: _31.Config): _31.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _31.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.ModuleConfig;
                fromPartial(object: Partial<_31.ModuleConfig>): _31.ModuleConfig;
                fromAmino(object: _31.ModuleConfigAmino): _31.ModuleConfig;
                toAmino(message: _31.ModuleConfig): _31.ModuleConfigAmino;
                fromAminoMsg(object: _31.ModuleConfigAminoMsg): _31.ModuleConfig;
                toAminoMsg(message: _31.ModuleConfig): _31.ModuleConfigAminoMsg;
                fromProtoMsg(message: _31.ModuleConfigProtoMsg): _31.ModuleConfig;
                toProto(message: _31.ModuleConfig): Uint8Array;
                toProtoMsg(message: _31.ModuleConfig): _31.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _31.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.GolangBinding;
                fromPartial(object: Partial<_31.GolangBinding>): _31.GolangBinding;
                fromAmino(object: _31.GolangBindingAmino): _31.GolangBinding;
                toAmino(message: _31.GolangBinding): _31.GolangBindingAmino;
                fromAminoMsg(object: _31.GolangBindingAminoMsg): _31.GolangBinding;
                toAminoMsg(message: _31.GolangBinding): _31.GolangBindingAminoMsg;
                fromProtoMsg(message: _31.GolangBindingProtoMsg): _31.GolangBinding;
                toProto(message: _31.GolangBinding): Uint8Array;
                toProtoMsg(message: _31.GolangBinding): _31.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _34.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Module;
                    fromPartial(object: Partial<_34.Module>): _34.Module;
                    fromAmino(object: _34.ModuleAmino): _34.Module;
                    toAmino(message: _34.Module): _34.ModuleAmino;
                    fromAminoMsg(object: _34.ModuleAminoMsg): _34.Module;
                    toAminoMsg(message: _34.Module): _34.ModuleAminoMsg;
                    fromProtoMsg(message: _34.ModuleProtoMsg): _34.Module;
                    toProto(message: _34.Module): Uint8Array;
                    toProtoMsg(message: _34.Module): _34.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _34.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ModuleAccountPermission;
                    fromPartial(object: Partial<_34.ModuleAccountPermission>): _34.ModuleAccountPermission;
                    fromAmino(object: _34.ModuleAccountPermissionAmino): _34.ModuleAccountPermission;
                    toAmino(message: _34.ModuleAccountPermission): _34.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _34.ModuleAccountPermissionAminoMsg): _34.ModuleAccountPermission;
                    toAminoMsg(message: _34.ModuleAccountPermission): _34.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _34.ModuleAccountPermissionProtoMsg): _34.ModuleAccountPermission;
                    toProto(message: _34.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _34.ModuleAccountPermission): _34.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _37.QueryAccountsRequest): Promise<_37.QueryAccountsResponse>;
                account(request: _37.QueryAccountRequest): Promise<_37.QueryAccountResponse>;
                accountAddressByID(request: _37.QueryAccountAddressByIDRequest): Promise<_37.QueryAccountAddressByIDResponse>;
                params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                moduleAccounts(request?: _37.QueryModuleAccountsRequest): Promise<_37.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _37.QueryModuleAccountByNameRequest): Promise<_37.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _37.Bech32PrefixRequest): Promise<_37.Bech32PrefixResponse>;
                addressBytesToString(request: _37.AddressBytesToStringRequest): Promise<_37.AddressBytesToStringResponse>;
                addressStringToBytes(request: _37.AddressStringToBytesRequest): Promise<_37.AddressStringToBytesResponse>;
                accountInfo(request: _37.QueryAccountInfoRequest): Promise<_37.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _38.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _38.MsgUpdateParams): {
                        typeUrl: string;
                        value: _38.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _38.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _38.MsgUpdateParams): {
                        typeUrl: string;
                        value: _38.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _38.MsgUpdateParams) => _38.MsgUpdateParamsAmino;
                    fromAmino: (object: _38.MsgUpdateParamsAmino) => _38.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _38.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgUpdateParams;
                fromPartial(object: Partial<_38.MsgUpdateParams>): _38.MsgUpdateParams;
                fromAmino(object: _38.MsgUpdateParamsAmino): _38.MsgUpdateParams;
                toAmino(message: _38.MsgUpdateParams): _38.MsgUpdateParamsAmino;
                fromAminoMsg(object: _38.MsgUpdateParamsAminoMsg): _38.MsgUpdateParams;
                toAminoMsg(message: _38.MsgUpdateParams): _38.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _38.MsgUpdateParamsProtoMsg): _38.MsgUpdateParams;
                toProto(message: _38.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _38.MsgUpdateParams): _38.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _38.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_38.MsgUpdateParamsResponse>): _38.MsgUpdateParamsResponse;
                fromAmino(_: _38.MsgUpdateParamsResponseAmino): _38.MsgUpdateParamsResponse;
                toAmino(_: _38.MsgUpdateParamsResponse): _38.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _38.MsgUpdateParamsResponseAminoMsg): _38.MsgUpdateParamsResponse;
                toAminoMsg(message: _38.MsgUpdateParamsResponse): _38.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _38.MsgUpdateParamsResponseProtoMsg): _38.MsgUpdateParamsResponse;
                toProto(message: _38.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _38.MsgUpdateParamsResponse): _38.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _37.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountsRequest;
                fromPartial(object: Partial<_37.QueryAccountsRequest>): _37.QueryAccountsRequest;
                fromAmino(object: _37.QueryAccountsRequestAmino): _37.QueryAccountsRequest;
                toAmino(message: _37.QueryAccountsRequest): _37.QueryAccountsRequestAmino;
                fromAminoMsg(object: _37.QueryAccountsRequestAminoMsg): _37.QueryAccountsRequest;
                toAminoMsg(message: _37.QueryAccountsRequest): _37.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryAccountsRequestProtoMsg): _37.QueryAccountsRequest;
                toProto(message: _37.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryAccountsRequest): _37.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _37.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountsResponse;
                fromPartial(object: Partial<_37.QueryAccountsResponse>): _37.QueryAccountsResponse;
                fromAmino(object: _37.QueryAccountsResponseAmino): _37.QueryAccountsResponse;
                toAmino(message: _37.QueryAccountsResponse): _37.QueryAccountsResponseAmino;
                fromAminoMsg(object: _37.QueryAccountsResponseAminoMsg): _37.QueryAccountsResponse;
                toAminoMsg(message: _37.QueryAccountsResponse): _37.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryAccountsResponseProtoMsg): _37.QueryAccountsResponse;
                toProto(message: _37.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryAccountsResponse): _37.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _37.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountRequest;
                fromPartial(object: Partial<_37.QueryAccountRequest>): _37.QueryAccountRequest;
                fromAmino(object: _37.QueryAccountRequestAmino): _37.QueryAccountRequest;
                toAmino(message: _37.QueryAccountRequest): _37.QueryAccountRequestAmino;
                fromAminoMsg(object: _37.QueryAccountRequestAminoMsg): _37.QueryAccountRequest;
                toAminoMsg(message: _37.QueryAccountRequest): _37.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _37.QueryAccountRequestProtoMsg): _37.QueryAccountRequest;
                toProto(message: _37.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _37.QueryAccountRequest): _37.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _37.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountResponse;
                fromPartial(object: Partial<_37.QueryAccountResponse>): _37.QueryAccountResponse;
                fromAmino(object: _37.QueryAccountResponseAmino): _37.QueryAccountResponse;
                toAmino(message: _37.QueryAccountResponse): _37.QueryAccountResponseAmino;
                fromAminoMsg(object: _37.QueryAccountResponseAminoMsg): _37.QueryAccountResponse;
                toAminoMsg(message: _37.QueryAccountResponse): _37.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _37.QueryAccountResponseProtoMsg): _37.QueryAccountResponse;
                toProto(message: _37.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _37.QueryAccountResponse): _37.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _37.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.QueryParamsRequest;
                fromPartial(_: Partial<_37.QueryParamsRequest>): _37.QueryParamsRequest;
                fromAmino(_: _37.QueryParamsRequestAmino): _37.QueryParamsRequest;
                toAmino(_: _37.QueryParamsRequest): _37.QueryParamsRequestAmino;
                fromAminoMsg(object: _37.QueryParamsRequestAminoMsg): _37.QueryParamsRequest;
                toAminoMsg(message: _37.QueryParamsRequest): _37.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryParamsRequestProtoMsg): _37.QueryParamsRequest;
                toProto(message: _37.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryParamsRequest): _37.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _37.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryParamsResponse;
                fromPartial(object: Partial<_37.QueryParamsResponse>): _37.QueryParamsResponse;
                fromAmino(object: _37.QueryParamsResponseAmino): _37.QueryParamsResponse;
                toAmino(message: _37.QueryParamsResponse): _37.QueryParamsResponseAmino;
                fromAminoMsg(object: _37.QueryParamsResponseAminoMsg): _37.QueryParamsResponse;
                toAminoMsg(message: _37.QueryParamsResponse): _37.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryParamsResponseProtoMsg): _37.QueryParamsResponse;
                toProto(message: _37.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryParamsResponse): _37.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _37.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_37.QueryModuleAccountsRequest>): _37.QueryModuleAccountsRequest;
                fromAmino(_: _37.QueryModuleAccountsRequestAmino): _37.QueryModuleAccountsRequest;
                toAmino(_: _37.QueryModuleAccountsRequest): _37.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _37.QueryModuleAccountsRequestAminoMsg): _37.QueryModuleAccountsRequest;
                toAminoMsg(message: _37.QueryModuleAccountsRequest): _37.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryModuleAccountsRequestProtoMsg): _37.QueryModuleAccountsRequest;
                toProto(message: _37.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryModuleAccountsRequest): _37.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _37.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_37.QueryModuleAccountsResponse>): _37.QueryModuleAccountsResponse;
                fromAmino(object: _37.QueryModuleAccountsResponseAmino): _37.QueryModuleAccountsResponse;
                toAmino(message: _37.QueryModuleAccountsResponse): _37.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _37.QueryModuleAccountsResponseAminoMsg): _37.QueryModuleAccountsResponse;
                toAminoMsg(message: _37.QueryModuleAccountsResponse): _37.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryModuleAccountsResponseProtoMsg): _37.QueryModuleAccountsResponse;
                toProto(message: _37.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryModuleAccountsResponse): _37.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _37.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_37.QueryModuleAccountByNameRequest>): _37.QueryModuleAccountByNameRequest;
                fromAmino(object: _37.QueryModuleAccountByNameRequestAmino): _37.QueryModuleAccountByNameRequest;
                toAmino(message: _37.QueryModuleAccountByNameRequest): _37.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _37.QueryModuleAccountByNameRequestAminoMsg): _37.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _37.QueryModuleAccountByNameRequest): _37.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _37.QueryModuleAccountByNameRequestProtoMsg): _37.QueryModuleAccountByNameRequest;
                toProto(message: _37.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _37.QueryModuleAccountByNameRequest): _37.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _37.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_37.QueryModuleAccountByNameResponse>): _37.QueryModuleAccountByNameResponse;
                fromAmino(object: _37.QueryModuleAccountByNameResponseAmino): _37.QueryModuleAccountByNameResponse;
                toAmino(message: _37.QueryModuleAccountByNameResponse): _37.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _37.QueryModuleAccountByNameResponseAminoMsg): _37.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _37.QueryModuleAccountByNameResponse): _37.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _37.QueryModuleAccountByNameResponseProtoMsg): _37.QueryModuleAccountByNameResponse;
                toProto(message: _37.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _37.QueryModuleAccountByNameResponse): _37.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _37.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.Bech32PrefixRequest;
                fromPartial(_: Partial<_37.Bech32PrefixRequest>): _37.Bech32PrefixRequest;
                fromAmino(_: _37.Bech32PrefixRequestAmino): _37.Bech32PrefixRequest;
                toAmino(_: _37.Bech32PrefixRequest): _37.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _37.Bech32PrefixRequestAminoMsg): _37.Bech32PrefixRequest;
                toAminoMsg(message: _37.Bech32PrefixRequest): _37.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _37.Bech32PrefixRequestProtoMsg): _37.Bech32PrefixRequest;
                toProto(message: _37.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _37.Bech32PrefixRequest): _37.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _37.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Bech32PrefixResponse;
                fromPartial(object: Partial<_37.Bech32PrefixResponse>): _37.Bech32PrefixResponse;
                fromAmino(object: _37.Bech32PrefixResponseAmino): _37.Bech32PrefixResponse;
                toAmino(message: _37.Bech32PrefixResponse): _37.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _37.Bech32PrefixResponseAminoMsg): _37.Bech32PrefixResponse;
                toAminoMsg(message: _37.Bech32PrefixResponse): _37.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _37.Bech32PrefixResponseProtoMsg): _37.Bech32PrefixResponse;
                toProto(message: _37.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _37.Bech32PrefixResponse): _37.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _37.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.AddressBytesToStringRequest;
                fromPartial(object: Partial<_37.AddressBytesToStringRequest>): _37.AddressBytesToStringRequest;
                fromAmino(object: _37.AddressBytesToStringRequestAmino): _37.AddressBytesToStringRequest;
                toAmino(message: _37.AddressBytesToStringRequest): _37.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _37.AddressBytesToStringRequestAminoMsg): _37.AddressBytesToStringRequest;
                toAminoMsg(message: _37.AddressBytesToStringRequest): _37.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _37.AddressBytesToStringRequestProtoMsg): _37.AddressBytesToStringRequest;
                toProto(message: _37.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _37.AddressBytesToStringRequest): _37.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _37.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.AddressBytesToStringResponse;
                fromPartial(object: Partial<_37.AddressBytesToStringResponse>): _37.AddressBytesToStringResponse;
                fromAmino(object: _37.AddressBytesToStringResponseAmino): _37.AddressBytesToStringResponse;
                toAmino(message: _37.AddressBytesToStringResponse): _37.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _37.AddressBytesToStringResponseAminoMsg): _37.AddressBytesToStringResponse;
                toAminoMsg(message: _37.AddressBytesToStringResponse): _37.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _37.AddressBytesToStringResponseProtoMsg): _37.AddressBytesToStringResponse;
                toProto(message: _37.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _37.AddressBytesToStringResponse): _37.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _37.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.AddressStringToBytesRequest;
                fromPartial(object: Partial<_37.AddressStringToBytesRequest>): _37.AddressStringToBytesRequest;
                fromAmino(object: _37.AddressStringToBytesRequestAmino): _37.AddressStringToBytesRequest;
                toAmino(message: _37.AddressStringToBytesRequest): _37.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _37.AddressStringToBytesRequestAminoMsg): _37.AddressStringToBytesRequest;
                toAminoMsg(message: _37.AddressStringToBytesRequest): _37.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _37.AddressStringToBytesRequestProtoMsg): _37.AddressStringToBytesRequest;
                toProto(message: _37.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _37.AddressStringToBytesRequest): _37.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _37.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.AddressStringToBytesResponse;
                fromPartial(object: Partial<_37.AddressStringToBytesResponse>): _37.AddressStringToBytesResponse;
                fromAmino(object: _37.AddressStringToBytesResponseAmino): _37.AddressStringToBytesResponse;
                toAmino(message: _37.AddressStringToBytesResponse): _37.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _37.AddressStringToBytesResponseAminoMsg): _37.AddressStringToBytesResponse;
                toAminoMsg(message: _37.AddressStringToBytesResponse): _37.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _37.AddressStringToBytesResponseProtoMsg): _37.AddressStringToBytesResponse;
                toProto(message: _37.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _37.AddressStringToBytesResponse): _37.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _37.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_37.QueryAccountAddressByIDRequest>): _37.QueryAccountAddressByIDRequest;
                fromAmino(object: _37.QueryAccountAddressByIDRequestAmino): _37.QueryAccountAddressByIDRequest;
                toAmino(message: _37.QueryAccountAddressByIDRequest): _37.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _37.QueryAccountAddressByIDRequestAminoMsg): _37.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _37.QueryAccountAddressByIDRequest): _37.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _37.QueryAccountAddressByIDRequestProtoMsg): _37.QueryAccountAddressByIDRequest;
                toProto(message: _37.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _37.QueryAccountAddressByIDRequest): _37.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _37.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_37.QueryAccountAddressByIDResponse>): _37.QueryAccountAddressByIDResponse;
                fromAmino(object: _37.QueryAccountAddressByIDResponseAmino): _37.QueryAccountAddressByIDResponse;
                toAmino(message: _37.QueryAccountAddressByIDResponse): _37.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _37.QueryAccountAddressByIDResponseAminoMsg): _37.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _37.QueryAccountAddressByIDResponse): _37.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _37.QueryAccountAddressByIDResponseProtoMsg): _37.QueryAccountAddressByIDResponse;
                toProto(message: _37.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _37.QueryAccountAddressByIDResponse): _37.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _37.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountInfoRequest;
                fromPartial(object: Partial<_37.QueryAccountInfoRequest>): _37.QueryAccountInfoRequest;
                fromAmino(object: _37.QueryAccountInfoRequestAmino): _37.QueryAccountInfoRequest;
                toAmino(message: _37.QueryAccountInfoRequest): _37.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _37.QueryAccountInfoRequestAminoMsg): _37.QueryAccountInfoRequest;
                toAminoMsg(message: _37.QueryAccountInfoRequest): _37.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _37.QueryAccountInfoRequestProtoMsg): _37.QueryAccountInfoRequest;
                toProto(message: _37.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _37.QueryAccountInfoRequest): _37.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _37.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountInfoResponse;
                fromPartial(object: Partial<_37.QueryAccountInfoResponse>): _37.QueryAccountInfoResponse;
                fromAmino(object: _37.QueryAccountInfoResponseAmino): _37.QueryAccountInfoResponse;
                toAmino(message: _37.QueryAccountInfoResponse): _37.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _37.QueryAccountInfoResponseAminoMsg): _37.QueryAccountInfoResponse;
                toAminoMsg(message: _37.QueryAccountInfoResponse): _37.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _37.QueryAccountInfoResponseProtoMsg): _37.QueryAccountInfoResponse;
                toProto(message: _37.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _37.QueryAccountInfoResponse): _37.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _35.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _35.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _36.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.GenesisState;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
                fromAmino(object: _36.GenesisStateAmino): _36.GenesisState;
                toAmino(message: _36.GenesisState): _36.GenesisStateAmino;
                fromAminoMsg(object: _36.GenesisStateAminoMsg): _36.GenesisState;
                toAminoMsg(message: _36.GenesisState): _36.GenesisStateAminoMsg;
                fromProtoMsg(message: _36.GenesisStateProtoMsg): _36.GenesisState;
                toProto(message: _36.GenesisState): Uint8Array;
                toProtoMsg(message: _36.GenesisState): _36.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _35.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.BaseAccount;
                fromPartial(object: Partial<_35.BaseAccount>): _35.BaseAccount;
                fromAmino(object: _35.BaseAccountAmino): _35.BaseAccount;
                toAmino(message: _35.BaseAccount): _35.BaseAccountAmino;
                fromAminoMsg(object: _35.BaseAccountAminoMsg): _35.BaseAccount;
                toAminoMsg(message: _35.BaseAccount): _35.BaseAccountAminoMsg;
                fromProtoMsg(message: _35.BaseAccountProtoMsg): _35.BaseAccount;
                toProto(message: _35.BaseAccount): Uint8Array;
                toProtoMsg(message: _35.BaseAccount): _35.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _35.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ModuleAccount;
                fromPartial(object: Partial<_35.ModuleAccount>): _35.ModuleAccount;
                fromAmino(object: _35.ModuleAccountAmino): _35.ModuleAccount;
                toAmino(message: _35.ModuleAccount): _35.ModuleAccountAmino;
                fromAminoMsg(object: _35.ModuleAccountAminoMsg): _35.ModuleAccount;
                toAminoMsg(message: _35.ModuleAccount): _35.ModuleAccountAminoMsg;
                fromProtoMsg(message: _35.ModuleAccountProtoMsg): _35.ModuleAccount;
                toProto(message: _35.ModuleAccount): Uint8Array;
                toProtoMsg(message: _35.ModuleAccount): _35.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _35.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ModuleCredential;
                fromPartial(object: Partial<_35.ModuleCredential>): _35.ModuleCredential;
                fromAmino(object: _35.ModuleCredentialAmino): _35.ModuleCredential;
                toAmino(message: _35.ModuleCredential): _35.ModuleCredentialAmino;
                fromAminoMsg(object: _35.ModuleCredentialAminoMsg): _35.ModuleCredential;
                toAminoMsg(message: _35.ModuleCredential): _35.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _35.ModuleCredentialProtoMsg): _35.ModuleCredential;
                toProto(message: _35.ModuleCredential): Uint8Array;
                toProtoMsg(message: _35.ModuleCredential): _35.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _35.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Params;
                fromPartial(object: Partial<_35.Params>): _35.Params;
                fromAmino(object: _35.ParamsAmino): _35.Params;
                toAmino(message: _35.Params): _35.ParamsAmino;
                fromAminoMsg(object: _35.ParamsAminoMsg): _35.Params;
                toAminoMsg(message: _35.Params): _35.ParamsAminoMsg;
                fromProtoMsg(message: _35.ParamsProtoMsg): _35.Params;
                toProto(message: _35.Params): Uint8Array;
                toProtoMsg(message: _35.Params): _35.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _39.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.Module;
                    fromPartial(_: Partial<_39.Module>): _39.Module;
                    fromAmino(_: _39.ModuleAmino): _39.Module;
                    toAmino(_: _39.Module): _39.ModuleAmino;
                    fromAminoMsg(object: _39.ModuleAminoMsg): _39.Module;
                    toAminoMsg(message: _39.Module): _39.ModuleAminoMsg;
                    fromProtoMsg(message: _39.ModuleProtoMsg): _39.Module;
                    toProto(message: _39.Module): Uint8Array;
                    toProtoMsg(message: _39.Module): _39.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _43.QueryGrantsRequest): Promise<_43.QueryGrantsResponse>;
                granterGrants(request: _43.QueryGranterGrantsRequest): Promise<_43.QueryGranterGrantsResponse>;
                granteeGrants(request: _43.QueryGranteeGrantsRequest): Promise<_43.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _44.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _44.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _44.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _44.MsgGrant): {
                        typeUrl: string;
                        value: _44.MsgGrant;
                    };
                    exec(value: _44.MsgExec): {
                        typeUrl: string;
                        value: _44.MsgExec;
                    };
                    revoke(value: _44.MsgRevoke): {
                        typeUrl: string;
                        value: _44.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _44.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _44.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _44.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _44.MsgGrant): {
                        typeUrl: string;
                        value: _44.MsgGrant;
                    };
                    exec(value: _44.MsgExec): {
                        typeUrl: string;
                        value: _44.MsgExec;
                    };
                    revoke(value: _44.MsgRevoke): {
                        typeUrl: string;
                        value: _44.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _44.MsgGrant) => _44.MsgGrantAmino;
                    fromAmino: (object: _44.MsgGrantAmino) => _44.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _44.MsgExec) => _44.MsgExecAmino;
                    fromAmino: (object: _44.MsgExecAmino) => _44.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _44.MsgRevoke) => _44.MsgRevokeAmino;
                    fromAmino: (object: _44.MsgRevokeAmino) => _44.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _44.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgGrant;
                fromPartial(object: Partial<_44.MsgGrant>): _44.MsgGrant;
                fromAmino(object: _44.MsgGrantAmino): _44.MsgGrant;
                toAmino(message: _44.MsgGrant): _44.MsgGrantAmino;
                fromAminoMsg(object: _44.MsgGrantAminoMsg): _44.MsgGrant;
                toAminoMsg(message: _44.MsgGrant): _44.MsgGrantAminoMsg;
                fromProtoMsg(message: _44.MsgGrantProtoMsg): _44.MsgGrant;
                toProto(message: _44.MsgGrant): Uint8Array;
                toProtoMsg(message: _44.MsgGrant): _44.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _44.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgExecResponse;
                fromPartial(object: Partial<_44.MsgExecResponse>): _44.MsgExecResponse;
                fromAmino(object: _44.MsgExecResponseAmino): _44.MsgExecResponse;
                toAmino(message: _44.MsgExecResponse): _44.MsgExecResponseAmino;
                fromAminoMsg(object: _44.MsgExecResponseAminoMsg): _44.MsgExecResponse;
                toAminoMsg(message: _44.MsgExecResponse): _44.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _44.MsgExecResponseProtoMsg): _44.MsgExecResponse;
                toProto(message: _44.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _44.MsgExecResponse): _44.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _44.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgExec;
                fromPartial(object: Partial<_44.MsgExec>): _44.MsgExec;
                fromAmino(object: _44.MsgExecAmino): _44.MsgExec;
                toAmino(message: _44.MsgExec): _44.MsgExecAmino;
                fromAminoMsg(object: _44.MsgExecAminoMsg): _44.MsgExec;
                toAminoMsg(message: _44.MsgExec): _44.MsgExecAminoMsg;
                fromProtoMsg(message: _44.MsgExecProtoMsg): _44.MsgExec;
                toProto(message: _44.MsgExec): Uint8Array;
                toProtoMsg(message: _44.MsgExec): _44.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _44.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgGrantResponse;
                fromPartial(_: Partial<_44.MsgGrantResponse>): _44.MsgGrantResponse;
                fromAmino(_: _44.MsgGrantResponseAmino): _44.MsgGrantResponse;
                toAmino(_: _44.MsgGrantResponse): _44.MsgGrantResponseAmino;
                fromAminoMsg(object: _44.MsgGrantResponseAminoMsg): _44.MsgGrantResponse;
                toAminoMsg(message: _44.MsgGrantResponse): _44.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _44.MsgGrantResponseProtoMsg): _44.MsgGrantResponse;
                toProto(message: _44.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _44.MsgGrantResponse): _44.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _44.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgRevoke;
                fromPartial(object: Partial<_44.MsgRevoke>): _44.MsgRevoke;
                fromAmino(object: _44.MsgRevokeAmino): _44.MsgRevoke;
                toAmino(message: _44.MsgRevoke): _44.MsgRevokeAmino;
                fromAminoMsg(object: _44.MsgRevokeAminoMsg): _44.MsgRevoke;
                toAminoMsg(message: _44.MsgRevoke): _44.MsgRevokeAminoMsg;
                fromProtoMsg(message: _44.MsgRevokeProtoMsg): _44.MsgRevoke;
                toProto(message: _44.MsgRevoke): Uint8Array;
                toProtoMsg(message: _44.MsgRevoke): _44.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _44.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgRevokeResponse;
                fromPartial(_: Partial<_44.MsgRevokeResponse>): _44.MsgRevokeResponse;
                fromAmino(_: _44.MsgRevokeResponseAmino): _44.MsgRevokeResponse;
                toAmino(_: _44.MsgRevokeResponse): _44.MsgRevokeResponseAmino;
                fromAminoMsg(object: _44.MsgRevokeResponseAminoMsg): _44.MsgRevokeResponse;
                toAminoMsg(message: _44.MsgRevokeResponse): _44.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _44.MsgRevokeResponseProtoMsg): _44.MsgRevokeResponse;
                toProto(message: _44.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _44.MsgRevokeResponse): _44.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _43.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryGrantsRequest;
                fromPartial(object: Partial<_43.QueryGrantsRequest>): _43.QueryGrantsRequest;
                fromAmino(object: _43.QueryGrantsRequestAmino): _43.QueryGrantsRequest;
                toAmino(message: _43.QueryGrantsRequest): _43.QueryGrantsRequestAmino;
                fromAminoMsg(object: _43.QueryGrantsRequestAminoMsg): _43.QueryGrantsRequest;
                toAminoMsg(message: _43.QueryGrantsRequest): _43.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryGrantsRequestProtoMsg): _43.QueryGrantsRequest;
                toProto(message: _43.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryGrantsRequest): _43.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _43.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryGrantsResponse;
                fromPartial(object: Partial<_43.QueryGrantsResponse>): _43.QueryGrantsResponse;
                fromAmino(object: _43.QueryGrantsResponseAmino): _43.QueryGrantsResponse;
                toAmino(message: _43.QueryGrantsResponse): _43.QueryGrantsResponseAmino;
                fromAminoMsg(object: _43.QueryGrantsResponseAminoMsg): _43.QueryGrantsResponse;
                toAminoMsg(message: _43.QueryGrantsResponse): _43.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryGrantsResponseProtoMsg): _43.QueryGrantsResponse;
                toProto(message: _43.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryGrantsResponse): _43.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _43.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_43.QueryGranterGrantsRequest>): _43.QueryGranterGrantsRequest;
                fromAmino(object: _43.QueryGranterGrantsRequestAmino): _43.QueryGranterGrantsRequest;
                toAmino(message: _43.QueryGranterGrantsRequest): _43.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _43.QueryGranterGrantsRequestAminoMsg): _43.QueryGranterGrantsRequest;
                toAminoMsg(message: _43.QueryGranterGrantsRequest): _43.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryGranterGrantsRequestProtoMsg): _43.QueryGranterGrantsRequest;
                toProto(message: _43.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryGranterGrantsRequest): _43.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _43.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_43.QueryGranterGrantsResponse>): _43.QueryGranterGrantsResponse;
                fromAmino(object: _43.QueryGranterGrantsResponseAmino): _43.QueryGranterGrantsResponse;
                toAmino(message: _43.QueryGranterGrantsResponse): _43.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _43.QueryGranterGrantsResponseAminoMsg): _43.QueryGranterGrantsResponse;
                toAminoMsg(message: _43.QueryGranterGrantsResponse): _43.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryGranterGrantsResponseProtoMsg): _43.QueryGranterGrantsResponse;
                toProto(message: _43.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryGranterGrantsResponse): _43.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _43.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_43.QueryGranteeGrantsRequest>): _43.QueryGranteeGrantsRequest;
                fromAmino(object: _43.QueryGranteeGrantsRequestAmino): _43.QueryGranteeGrantsRequest;
                toAmino(message: _43.QueryGranteeGrantsRequest): _43.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _43.QueryGranteeGrantsRequestAminoMsg): _43.QueryGranteeGrantsRequest;
                toAminoMsg(message: _43.QueryGranteeGrantsRequest): _43.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryGranteeGrantsRequestProtoMsg): _43.QueryGranteeGrantsRequest;
                toProto(message: _43.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryGranteeGrantsRequest): _43.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _43.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_43.QueryGranteeGrantsResponse>): _43.QueryGranteeGrantsResponse;
                fromAmino(object: _43.QueryGranteeGrantsResponseAmino): _43.QueryGranteeGrantsResponse;
                toAmino(message: _43.QueryGranteeGrantsResponse): _43.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _43.QueryGranteeGrantsResponseAminoMsg): _43.QueryGranteeGrantsResponse;
                toAminoMsg(message: _43.QueryGranteeGrantsResponse): _43.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryGranteeGrantsResponseProtoMsg): _43.QueryGranteeGrantsResponse;
                toProto(message: _43.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryGranteeGrantsResponse): _43.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _41.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.EventGrant;
                fromPartial(object: Partial<_41.EventGrant>): _41.EventGrant;
                fromAmino(object: _41.EventGrantAmino): _41.EventGrant;
                toAmino(message: _41.EventGrant): _41.EventGrantAmino;
                fromAminoMsg(object: _41.EventGrantAminoMsg): _41.EventGrant;
                toAminoMsg(message: _41.EventGrant): _41.EventGrantAminoMsg;
                fromProtoMsg(message: _41.EventGrantProtoMsg): _41.EventGrant;
                toProto(message: _41.EventGrant): Uint8Array;
                toProtoMsg(message: _41.EventGrant): _41.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _41.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.EventRevoke;
                fromPartial(object: Partial<_41.EventRevoke>): _41.EventRevoke;
                fromAmino(object: _41.EventRevokeAmino): _41.EventRevoke;
                toAmino(message: _41.EventRevoke): _41.EventRevokeAmino;
                fromAminoMsg(object: _41.EventRevokeAminoMsg): _41.EventRevoke;
                toAminoMsg(message: _41.EventRevoke): _41.EventRevokeAminoMsg;
                fromProtoMsg(message: _41.EventRevokeProtoMsg): _41.EventRevoke;
                toProto(message: _41.EventRevoke): Uint8Array;
                toProtoMsg(message: _41.EventRevoke): _41.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _40.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.GenericAuthorization;
                fromPartial(object: Partial<_40.GenericAuthorization>): _40.GenericAuthorization;
                fromAmino(object: _40.GenericAuthorizationAmino): _40.GenericAuthorization;
                toAmino(message: _40.GenericAuthorization): _40.GenericAuthorizationAmino;
                fromAminoMsg(object: _40.GenericAuthorizationAminoMsg): _40.GenericAuthorization;
                toAminoMsg(message: _40.GenericAuthorization): _40.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _40.GenericAuthorizationProtoMsg): _40.GenericAuthorization;
                toProto(message: _40.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _40.GenericAuthorization): _40.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _40.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Grant;
                fromPartial(object: Partial<_40.Grant>): _40.Grant;
                fromAmino(object: _40.GrantAmino): _40.Grant;
                toAmino(message: _40.Grant): _40.GrantAmino;
                fromAminoMsg(object: _40.GrantAminoMsg): _40.Grant;
                toAminoMsg(message: _40.Grant): _40.GrantAminoMsg;
                fromProtoMsg(message: _40.GrantProtoMsg): _40.Grant;
                toProto(message: _40.Grant): Uint8Array;
                toProtoMsg(message: _40.Grant): _40.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _40.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.GrantAuthorization;
                fromPartial(object: Partial<_40.GrantAuthorization>): _40.GrantAuthorization;
                fromAmino(object: _40.GrantAuthorizationAmino): _40.GrantAuthorization;
                toAmino(message: _40.GrantAuthorization): _40.GrantAuthorizationAmino;
                fromAminoMsg(object: _40.GrantAuthorizationAminoMsg): _40.GrantAuthorization;
                toAminoMsg(message: _40.GrantAuthorization): _40.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _40.GrantAuthorizationProtoMsg): _40.GrantAuthorization;
                toProto(message: _40.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _40.GrantAuthorization): _40.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _40.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.GrantQueueItem;
                fromPartial(object: Partial<_40.GrantQueueItem>): _40.GrantQueueItem;
                fromAmino(object: _40.GrantQueueItemAmino): _40.GrantQueueItem;
                toAmino(message: _40.GrantQueueItem): _40.GrantQueueItemAmino;
                fromAminoMsg(object: _40.GrantQueueItemAminoMsg): _40.GrantQueueItem;
                toAminoMsg(message: _40.GrantQueueItem): _40.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _40.GrantQueueItemProtoMsg): _40.GrantQueueItem;
                toProto(message: _40.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _40.GrantQueueItem): _40.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _48.SendAuthorization | _139.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _40.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _46.AppOptionsRequest): Promise<_46.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _46.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.AppOptionsRequest;
                fromPartial(_: Partial<_46.AppOptionsRequest>): _46.AppOptionsRequest;
                fromAmino(_: _46.AppOptionsRequestAmino): _46.AppOptionsRequest;
                toAmino(_: _46.AppOptionsRequest): _46.AppOptionsRequestAmino;
                fromAminoMsg(object: _46.AppOptionsRequestAminoMsg): _46.AppOptionsRequest;
                toAminoMsg(message: _46.AppOptionsRequest): _46.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _46.AppOptionsRequestProtoMsg): _46.AppOptionsRequest;
                toProto(message: _46.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _46.AppOptionsRequest): _46.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _46.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_46.AppOptionsResponse_ModuleOptionsEntry>): _46.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _46.AppOptionsResponse_ModuleOptionsEntryAmino): _46.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _46.AppOptionsResponse_ModuleOptionsEntry): _46.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _46.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _46.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _46.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _46.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _46.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _46.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.AppOptionsResponse;
                fromPartial(object: Partial<_46.AppOptionsResponse>): _46.AppOptionsResponse;
                fromAmino(object: _46.AppOptionsResponseAmino): _46.AppOptionsResponse;
                toAmino(message: _46.AppOptionsResponse): _46.AppOptionsResponseAmino;
                fromAminoMsg(object: _46.AppOptionsResponseAminoMsg): _46.AppOptionsResponse;
                toAminoMsg(message: _46.AppOptionsResponse): _46.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _46.AppOptionsResponseProtoMsg): _46.AppOptionsResponse;
                toProto(message: _46.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _46.AppOptionsResponse): _46.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _45.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.ModuleOptions;
                fromPartial(object: Partial<_45.ModuleOptions>): _45.ModuleOptions;
                fromAmino(object: _45.ModuleOptionsAmino): _45.ModuleOptions;
                toAmino(message: _45.ModuleOptions): _45.ModuleOptionsAmino;
                fromAminoMsg(object: _45.ModuleOptionsAminoMsg): _45.ModuleOptions;
                toAminoMsg(message: _45.ModuleOptions): _45.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _45.ModuleOptionsProtoMsg): _45.ModuleOptions;
                toProto(message: _45.ModuleOptions): Uint8Array;
                toProtoMsg(message: _45.ModuleOptions): _45.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _45.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_45.ServiceCommandDescriptor_SubCommandsEntry>): _45.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _45.ServiceCommandDescriptor_SubCommandsEntryAmino): _45.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _45.ServiceCommandDescriptor_SubCommandsEntry): _45.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _45.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _45.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _45.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _45.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _45.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _45.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.ServiceCommandDescriptor;
                fromPartial(object: Partial<_45.ServiceCommandDescriptor>): _45.ServiceCommandDescriptor;
                fromAmino(object: _45.ServiceCommandDescriptorAmino): _45.ServiceCommandDescriptor;
                toAmino(message: _45.ServiceCommandDescriptor): _45.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _45.ServiceCommandDescriptorAminoMsg): _45.ServiceCommandDescriptor;
                toAminoMsg(message: _45.ServiceCommandDescriptor): _45.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _45.ServiceCommandDescriptorProtoMsg): _45.ServiceCommandDescriptor;
                toProto(message: _45.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _45.ServiceCommandDescriptor): _45.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _45.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_45.RpcCommandOptions_FlagOptionsEntry>): _45.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _45.RpcCommandOptions_FlagOptionsEntryAmino): _45.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _45.RpcCommandOptions_FlagOptionsEntry): _45.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _45.RpcCommandOptions_FlagOptionsEntryAminoMsg): _45.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _45.RpcCommandOptions_FlagOptionsEntryProtoMsg): _45.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _45.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _45.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.RpcCommandOptions;
                fromPartial(object: Partial<_45.RpcCommandOptions>): _45.RpcCommandOptions;
                fromAmino(object: _45.RpcCommandOptionsAmino): _45.RpcCommandOptions;
                toAmino(message: _45.RpcCommandOptions): _45.RpcCommandOptionsAmino;
                fromAminoMsg(object: _45.RpcCommandOptionsAminoMsg): _45.RpcCommandOptions;
                toAminoMsg(message: _45.RpcCommandOptions): _45.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _45.RpcCommandOptionsProtoMsg): _45.RpcCommandOptions;
                toProto(message: _45.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _45.RpcCommandOptions): _45.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _45.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.FlagOptions;
                fromPartial(object: Partial<_45.FlagOptions>): _45.FlagOptions;
                fromAmino(object: _45.FlagOptionsAmino): _45.FlagOptions;
                toAmino(message: _45.FlagOptions): _45.FlagOptionsAmino;
                fromAminoMsg(object: _45.FlagOptionsAminoMsg): _45.FlagOptions;
                toAminoMsg(message: _45.FlagOptions): _45.FlagOptionsAminoMsg;
                fromProtoMsg(message: _45.FlagOptionsProtoMsg): _45.FlagOptions;
                toProto(message: _45.FlagOptions): Uint8Array;
                toProtoMsg(message: _45.FlagOptions): _45.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _45.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.PositionalArgDescriptor;
                fromPartial(object: Partial<_45.PositionalArgDescriptor>): _45.PositionalArgDescriptor;
                fromAmino(object: _45.PositionalArgDescriptorAmino): _45.PositionalArgDescriptor;
                toAmino(message: _45.PositionalArgDescriptor): _45.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _45.PositionalArgDescriptorAminoMsg): _45.PositionalArgDescriptor;
                toAminoMsg(message: _45.PositionalArgDescriptor): _45.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _45.PositionalArgDescriptorProtoMsg): _45.PositionalArgDescriptor;
                toProto(message: _45.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _45.PositionalArgDescriptor): _45.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _47.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.Module;
                    fromPartial(object: Partial<_47.Module>): _47.Module;
                    fromAmino(object: _47.ModuleAmino): _47.Module;
                    toAmino(message: _47.Module): _47.ModuleAmino;
                    fromAminoMsg(object: _47.ModuleAminoMsg): _47.Module;
                    toAminoMsg(message: _47.Module): _47.ModuleAminoMsg;
                    fromProtoMsg(message: _47.ModuleProtoMsg): _47.Module;
                    toProto(message: _47.Module): Uint8Array;
                    toProtoMsg(message: _47.Module): _47.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _51.QueryBalanceRequest): Promise<_51.QueryBalanceResponse>;
                allBalances(request: _51.QueryAllBalancesRequest): Promise<_51.QueryAllBalancesResponse>;
                spendableBalances(request: _51.QuerySpendableBalancesRequest): Promise<_51.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _51.QuerySpendableBalanceByDenomRequest): Promise<_51.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _51.QueryTotalSupplyRequest): Promise<_51.QueryTotalSupplyResponse>;
                supplyOf(request: _51.QuerySupplyOfRequest): Promise<_51.QuerySupplyOfResponse>;
                params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                denomMetadata(request: _51.QueryDenomMetadataRequest): Promise<_51.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _51.QueryDenomsMetadataRequest): Promise<_51.QueryDenomsMetadataResponse>;
                denomOwners(request: _51.QueryDenomOwnersRequest): Promise<_51.QueryDenomOwnersResponse>;
                sendEnabled(request: _51.QuerySendEnabledRequest): Promise<_51.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _247.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _52.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _52.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _52.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _52.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _52.MsgSend): {
                        typeUrl: string;
                        value: _52.MsgSend;
                    };
                    multiSend(value: _52.MsgMultiSend): {
                        typeUrl: string;
                        value: _52.MsgMultiSend;
                    };
                    updateParams(value: _52.MsgUpdateParams): {
                        typeUrl: string;
                        value: _52.MsgUpdateParams;
                    };
                    setSendEnabled(value: _52.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _52.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _52.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _52.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _52.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _52.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _52.MsgSend): {
                        typeUrl: string;
                        value: _52.MsgSend;
                    };
                    multiSend(value: _52.MsgMultiSend): {
                        typeUrl: string;
                        value: _52.MsgMultiSend;
                    };
                    updateParams(value: _52.MsgUpdateParams): {
                        typeUrl: string;
                        value: _52.MsgUpdateParams;
                    };
                    setSendEnabled(value: _52.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _52.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _52.MsgSend) => _52.MsgSendAmino;
                    fromAmino: (object: _52.MsgSendAmino) => _52.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _52.MsgMultiSend) => _52.MsgMultiSendAmino;
                    fromAmino: (object: _52.MsgMultiSendAmino) => _52.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _52.MsgUpdateParams) => _52.MsgUpdateParamsAmino;
                    fromAmino: (object: _52.MsgUpdateParamsAmino) => _52.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _52.MsgSetSendEnabled) => _52.MsgSetSendEnabledAmino;
                    fromAmino: (object: _52.MsgSetSendEnabledAmino) => _52.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _52.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgSend;
                fromPartial(object: Partial<_52.MsgSend>): _52.MsgSend;
                fromAmino(object: _52.MsgSendAmino): _52.MsgSend;
                toAmino(message: _52.MsgSend): _52.MsgSendAmino;
                fromAminoMsg(object: _52.MsgSendAminoMsg): _52.MsgSend;
                toAminoMsg(message: _52.MsgSend): _52.MsgSendAminoMsg;
                fromProtoMsg(message: _52.MsgSendProtoMsg): _52.MsgSend;
                toProto(message: _52.MsgSend): Uint8Array;
                toProtoMsg(message: _52.MsgSend): _52.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _52.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgSendResponse;
                fromPartial(_: Partial<_52.MsgSendResponse>): _52.MsgSendResponse;
                fromAmino(_: _52.MsgSendResponseAmino): _52.MsgSendResponse;
                toAmino(_: _52.MsgSendResponse): _52.MsgSendResponseAmino;
                fromAminoMsg(object: _52.MsgSendResponseAminoMsg): _52.MsgSendResponse;
                toAminoMsg(message: _52.MsgSendResponse): _52.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _52.MsgSendResponseProtoMsg): _52.MsgSendResponse;
                toProto(message: _52.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _52.MsgSendResponse): _52.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _52.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgMultiSend;
                fromPartial(object: Partial<_52.MsgMultiSend>): _52.MsgMultiSend;
                fromAmino(object: _52.MsgMultiSendAmino): _52.MsgMultiSend;
                toAmino(message: _52.MsgMultiSend): _52.MsgMultiSendAmino;
                fromAminoMsg(object: _52.MsgMultiSendAminoMsg): _52.MsgMultiSend;
                toAminoMsg(message: _52.MsgMultiSend): _52.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _52.MsgMultiSendProtoMsg): _52.MsgMultiSend;
                toProto(message: _52.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _52.MsgMultiSend): _52.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _52.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgMultiSendResponse;
                fromPartial(_: Partial<_52.MsgMultiSendResponse>): _52.MsgMultiSendResponse;
                fromAmino(_: _52.MsgMultiSendResponseAmino): _52.MsgMultiSendResponse;
                toAmino(_: _52.MsgMultiSendResponse): _52.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _52.MsgMultiSendResponseAminoMsg): _52.MsgMultiSendResponse;
                toAminoMsg(message: _52.MsgMultiSendResponse): _52.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _52.MsgMultiSendResponseProtoMsg): _52.MsgMultiSendResponse;
                toProto(message: _52.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _52.MsgMultiSendResponse): _52.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _52.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgUpdateParams;
                fromPartial(object: Partial<_52.MsgUpdateParams>): _52.MsgUpdateParams;
                fromAmino(object: _52.MsgUpdateParamsAmino): _52.MsgUpdateParams;
                toAmino(message: _52.MsgUpdateParams): _52.MsgUpdateParamsAmino;
                fromAminoMsg(object: _52.MsgUpdateParamsAminoMsg): _52.MsgUpdateParams;
                toAminoMsg(message: _52.MsgUpdateParams): _52.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _52.MsgUpdateParamsProtoMsg): _52.MsgUpdateParams;
                toProto(message: _52.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _52.MsgUpdateParams): _52.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _52.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_52.MsgUpdateParamsResponse>): _52.MsgUpdateParamsResponse;
                fromAmino(_: _52.MsgUpdateParamsResponseAmino): _52.MsgUpdateParamsResponse;
                toAmino(_: _52.MsgUpdateParamsResponse): _52.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _52.MsgUpdateParamsResponseAminoMsg): _52.MsgUpdateParamsResponse;
                toAminoMsg(message: _52.MsgUpdateParamsResponse): _52.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _52.MsgUpdateParamsResponseProtoMsg): _52.MsgUpdateParamsResponse;
                toProto(message: _52.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _52.MsgUpdateParamsResponse): _52.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _52.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MsgSetSendEnabled;
                fromPartial(object: Partial<_52.MsgSetSendEnabled>): _52.MsgSetSendEnabled;
                fromAmino(object: _52.MsgSetSendEnabledAmino): _52.MsgSetSendEnabled;
                toAmino(message: _52.MsgSetSendEnabled): _52.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _52.MsgSetSendEnabledAminoMsg): _52.MsgSetSendEnabled;
                toAminoMsg(message: _52.MsgSetSendEnabled): _52.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _52.MsgSetSendEnabledProtoMsg): _52.MsgSetSendEnabled;
                toProto(message: _52.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _52.MsgSetSendEnabled): _52.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _52.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_52.MsgSetSendEnabledResponse>): _52.MsgSetSendEnabledResponse;
                fromAmino(_: _52.MsgSetSendEnabledResponseAmino): _52.MsgSetSendEnabledResponse;
                toAmino(_: _52.MsgSetSendEnabledResponse): _52.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _52.MsgSetSendEnabledResponseAminoMsg): _52.MsgSetSendEnabledResponse;
                toAminoMsg(message: _52.MsgSetSendEnabledResponse): _52.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _52.MsgSetSendEnabledResponseProtoMsg): _52.MsgSetSendEnabledResponse;
                toProto(message: _52.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _52.MsgSetSendEnabledResponse): _52.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _51.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryBalanceRequest;
                fromPartial(object: Partial<_51.QueryBalanceRequest>): _51.QueryBalanceRequest;
                fromAmino(object: _51.QueryBalanceRequestAmino): _51.QueryBalanceRequest;
                toAmino(message: _51.QueryBalanceRequest): _51.QueryBalanceRequestAmino;
                fromAminoMsg(object: _51.QueryBalanceRequestAminoMsg): _51.QueryBalanceRequest;
                toAminoMsg(message: _51.QueryBalanceRequest): _51.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _51.QueryBalanceRequestProtoMsg): _51.QueryBalanceRequest;
                toProto(message: _51.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _51.QueryBalanceRequest): _51.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _51.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryBalanceResponse;
                fromPartial(object: Partial<_51.QueryBalanceResponse>): _51.QueryBalanceResponse;
                fromAmino(object: _51.QueryBalanceResponseAmino): _51.QueryBalanceResponse;
                toAmino(message: _51.QueryBalanceResponse): _51.QueryBalanceResponseAmino;
                fromAminoMsg(object: _51.QueryBalanceResponseAminoMsg): _51.QueryBalanceResponse;
                toAminoMsg(message: _51.QueryBalanceResponse): _51.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _51.QueryBalanceResponseProtoMsg): _51.QueryBalanceResponse;
                toProto(message: _51.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _51.QueryBalanceResponse): _51.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _51.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllBalancesRequest;
                fromPartial(object: Partial<_51.QueryAllBalancesRequest>): _51.QueryAllBalancesRequest;
                fromAmino(object: _51.QueryAllBalancesRequestAmino): _51.QueryAllBalancesRequest;
                toAmino(message: _51.QueryAllBalancesRequest): _51.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _51.QueryAllBalancesRequestAminoMsg): _51.QueryAllBalancesRequest;
                toAminoMsg(message: _51.QueryAllBalancesRequest): _51.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllBalancesRequestProtoMsg): _51.QueryAllBalancesRequest;
                toProto(message: _51.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllBalancesRequest): _51.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _51.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryAllBalancesResponse;
                fromPartial(object: Partial<_51.QueryAllBalancesResponse>): _51.QueryAllBalancesResponse;
                fromAmino(object: _51.QueryAllBalancesResponseAmino): _51.QueryAllBalancesResponse;
                toAmino(message: _51.QueryAllBalancesResponse): _51.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _51.QueryAllBalancesResponseAminoMsg): _51.QueryAllBalancesResponse;
                toAminoMsg(message: _51.QueryAllBalancesResponse): _51.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllBalancesResponseProtoMsg): _51.QueryAllBalancesResponse;
                toProto(message: _51.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllBalancesResponse): _51.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _51.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_51.QuerySpendableBalancesRequest>): _51.QuerySpendableBalancesRequest;
                fromAmino(object: _51.QuerySpendableBalancesRequestAmino): _51.QuerySpendableBalancesRequest;
                toAmino(message: _51.QuerySpendableBalancesRequest): _51.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _51.QuerySpendableBalancesRequestAminoMsg): _51.QuerySpendableBalancesRequest;
                toAminoMsg(message: _51.QuerySpendableBalancesRequest): _51.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _51.QuerySpendableBalancesRequestProtoMsg): _51.QuerySpendableBalancesRequest;
                toProto(message: _51.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _51.QuerySpendableBalancesRequest): _51.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _51.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_51.QuerySpendableBalancesResponse>): _51.QuerySpendableBalancesResponse;
                fromAmino(object: _51.QuerySpendableBalancesResponseAmino): _51.QuerySpendableBalancesResponse;
                toAmino(message: _51.QuerySpendableBalancesResponse): _51.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _51.QuerySpendableBalancesResponseAminoMsg): _51.QuerySpendableBalancesResponse;
                toAminoMsg(message: _51.QuerySpendableBalancesResponse): _51.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _51.QuerySpendableBalancesResponseProtoMsg): _51.QuerySpendableBalancesResponse;
                toProto(message: _51.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _51.QuerySpendableBalancesResponse): _51.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _51.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_51.QuerySpendableBalanceByDenomRequest>): _51.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _51.QuerySpendableBalanceByDenomRequestAmino): _51.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _51.QuerySpendableBalanceByDenomRequest): _51.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _51.QuerySpendableBalanceByDenomRequestAminoMsg): _51.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _51.QuerySpendableBalanceByDenomRequest): _51.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _51.QuerySpendableBalanceByDenomRequestProtoMsg): _51.QuerySpendableBalanceByDenomRequest;
                toProto(message: _51.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _51.QuerySpendableBalanceByDenomRequest): _51.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _51.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_51.QuerySpendableBalanceByDenomResponse>): _51.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _51.QuerySpendableBalanceByDenomResponseAmino): _51.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _51.QuerySpendableBalanceByDenomResponse): _51.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _51.QuerySpendableBalanceByDenomResponseAminoMsg): _51.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _51.QuerySpendableBalanceByDenomResponse): _51.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _51.QuerySpendableBalanceByDenomResponseProtoMsg): _51.QuerySpendableBalanceByDenomResponse;
                toProto(message: _51.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _51.QuerySpendableBalanceByDenomResponse): _51.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _51.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_51.QueryTotalSupplyRequest>): _51.QueryTotalSupplyRequest;
                fromAmino(object: _51.QueryTotalSupplyRequestAmino): _51.QueryTotalSupplyRequest;
                toAmino(message: _51.QueryTotalSupplyRequest): _51.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _51.QueryTotalSupplyRequestAminoMsg): _51.QueryTotalSupplyRequest;
                toAminoMsg(message: _51.QueryTotalSupplyRequest): _51.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _51.QueryTotalSupplyRequestProtoMsg): _51.QueryTotalSupplyRequest;
                toProto(message: _51.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _51.QueryTotalSupplyRequest): _51.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _51.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_51.QueryTotalSupplyResponse>): _51.QueryTotalSupplyResponse;
                fromAmino(object: _51.QueryTotalSupplyResponseAmino): _51.QueryTotalSupplyResponse;
                toAmino(message: _51.QueryTotalSupplyResponse): _51.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _51.QueryTotalSupplyResponseAminoMsg): _51.QueryTotalSupplyResponse;
                toAminoMsg(message: _51.QueryTotalSupplyResponse): _51.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _51.QueryTotalSupplyResponseProtoMsg): _51.QueryTotalSupplyResponse;
                toProto(message: _51.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _51.QueryTotalSupplyResponse): _51.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _51.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySupplyOfRequest;
                fromPartial(object: Partial<_51.QuerySupplyOfRequest>): _51.QuerySupplyOfRequest;
                fromAmino(object: _51.QuerySupplyOfRequestAmino): _51.QuerySupplyOfRequest;
                toAmino(message: _51.QuerySupplyOfRequest): _51.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _51.QuerySupplyOfRequestAminoMsg): _51.QuerySupplyOfRequest;
                toAminoMsg(message: _51.QuerySupplyOfRequest): _51.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _51.QuerySupplyOfRequestProtoMsg): _51.QuerySupplyOfRequest;
                toProto(message: _51.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _51.QuerySupplyOfRequest): _51.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _51.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySupplyOfResponse;
                fromPartial(object: Partial<_51.QuerySupplyOfResponse>): _51.QuerySupplyOfResponse;
                fromAmino(object: _51.QuerySupplyOfResponseAmino): _51.QuerySupplyOfResponse;
                toAmino(message: _51.QuerySupplyOfResponse): _51.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _51.QuerySupplyOfResponseAminoMsg): _51.QuerySupplyOfResponse;
                toAminoMsg(message: _51.QuerySupplyOfResponse): _51.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _51.QuerySupplyOfResponseProtoMsg): _51.QuerySupplyOfResponse;
                toProto(message: _51.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _51.QuerySupplyOfResponse): _51.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _51.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.QueryParamsRequest;
                fromPartial(_: Partial<_51.QueryParamsRequest>): _51.QueryParamsRequest;
                fromAmino(_: _51.QueryParamsRequestAmino): _51.QueryParamsRequest;
                toAmino(_: _51.QueryParamsRequest): _51.QueryParamsRequestAmino;
                fromAminoMsg(object: _51.QueryParamsRequestAminoMsg): _51.QueryParamsRequest;
                toAminoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryParamsRequestProtoMsg): _51.QueryParamsRequest;
                toProto(message: _51.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _51.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryParamsResponse;
                fromPartial(object: Partial<_51.QueryParamsResponse>): _51.QueryParamsResponse;
                fromAmino(object: _51.QueryParamsResponseAmino): _51.QueryParamsResponse;
                toAmino(message: _51.QueryParamsResponse): _51.QueryParamsResponseAmino;
                fromAminoMsg(object: _51.QueryParamsResponseAminoMsg): _51.QueryParamsResponse;
                toAminoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryParamsResponseProtoMsg): _51.QueryParamsResponse;
                toProto(message: _51.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _51.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_51.QueryDenomsMetadataRequest>): _51.QueryDenomsMetadataRequest;
                fromAmino(object: _51.QueryDenomsMetadataRequestAmino): _51.QueryDenomsMetadataRequest;
                toAmino(message: _51.QueryDenomsMetadataRequest): _51.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _51.QueryDenomsMetadataRequestAminoMsg): _51.QueryDenomsMetadataRequest;
                toAminoMsg(message: _51.QueryDenomsMetadataRequest): _51.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _51.QueryDenomsMetadataRequestProtoMsg): _51.QueryDenomsMetadataRequest;
                toProto(message: _51.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _51.QueryDenomsMetadataRequest): _51.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _51.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_51.QueryDenomsMetadataResponse>): _51.QueryDenomsMetadataResponse;
                fromAmino(object: _51.QueryDenomsMetadataResponseAmino): _51.QueryDenomsMetadataResponse;
                toAmino(message: _51.QueryDenomsMetadataResponse): _51.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _51.QueryDenomsMetadataResponseAminoMsg): _51.QueryDenomsMetadataResponse;
                toAminoMsg(message: _51.QueryDenomsMetadataResponse): _51.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _51.QueryDenomsMetadataResponseProtoMsg): _51.QueryDenomsMetadataResponse;
                toProto(message: _51.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _51.QueryDenomsMetadataResponse): _51.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _51.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_51.QueryDenomMetadataRequest>): _51.QueryDenomMetadataRequest;
                fromAmino(object: _51.QueryDenomMetadataRequestAmino): _51.QueryDenomMetadataRequest;
                toAmino(message: _51.QueryDenomMetadataRequest): _51.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _51.QueryDenomMetadataRequestAminoMsg): _51.QueryDenomMetadataRequest;
                toAminoMsg(message: _51.QueryDenomMetadataRequest): _51.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _51.QueryDenomMetadataRequestProtoMsg): _51.QueryDenomMetadataRequest;
                toProto(message: _51.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _51.QueryDenomMetadataRequest): _51.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _51.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_51.QueryDenomMetadataResponse>): _51.QueryDenomMetadataResponse;
                fromAmino(object: _51.QueryDenomMetadataResponseAmino): _51.QueryDenomMetadataResponse;
                toAmino(message: _51.QueryDenomMetadataResponse): _51.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _51.QueryDenomMetadataResponseAminoMsg): _51.QueryDenomMetadataResponse;
                toAminoMsg(message: _51.QueryDenomMetadataResponse): _51.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _51.QueryDenomMetadataResponseProtoMsg): _51.QueryDenomMetadataResponse;
                toProto(message: _51.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _51.QueryDenomMetadataResponse): _51.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _51.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_51.QueryDenomOwnersRequest>): _51.QueryDenomOwnersRequest;
                fromAmino(object: _51.QueryDenomOwnersRequestAmino): _51.QueryDenomOwnersRequest;
                toAmino(message: _51.QueryDenomOwnersRequest): _51.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _51.QueryDenomOwnersRequestAminoMsg): _51.QueryDenomOwnersRequest;
                toAminoMsg(message: _51.QueryDenomOwnersRequest): _51.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _51.QueryDenomOwnersRequestProtoMsg): _51.QueryDenomOwnersRequest;
                toProto(message: _51.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _51.QueryDenomOwnersRequest): _51.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _51.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.DenomOwner;
                fromPartial(object: Partial<_51.DenomOwner>): _51.DenomOwner;
                fromAmino(object: _51.DenomOwnerAmino): _51.DenomOwner;
                toAmino(message: _51.DenomOwner): _51.DenomOwnerAmino;
                fromAminoMsg(object: _51.DenomOwnerAminoMsg): _51.DenomOwner;
                toAminoMsg(message: _51.DenomOwner): _51.DenomOwnerAminoMsg;
                fromProtoMsg(message: _51.DenomOwnerProtoMsg): _51.DenomOwner;
                toProto(message: _51.DenomOwner): Uint8Array;
                toProtoMsg(message: _51.DenomOwner): _51.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _51.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_51.QueryDenomOwnersResponse>): _51.QueryDenomOwnersResponse;
                fromAmino(object: _51.QueryDenomOwnersResponseAmino): _51.QueryDenomOwnersResponse;
                toAmino(message: _51.QueryDenomOwnersResponse): _51.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _51.QueryDenomOwnersResponseAminoMsg): _51.QueryDenomOwnersResponse;
                toAminoMsg(message: _51.QueryDenomOwnersResponse): _51.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _51.QueryDenomOwnersResponseProtoMsg): _51.QueryDenomOwnersResponse;
                toProto(message: _51.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _51.QueryDenomOwnersResponse): _51.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _51.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySendEnabledRequest;
                fromPartial(object: Partial<_51.QuerySendEnabledRequest>): _51.QuerySendEnabledRequest;
                fromAmino(object: _51.QuerySendEnabledRequestAmino): _51.QuerySendEnabledRequest;
                toAmino(message: _51.QuerySendEnabledRequest): _51.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _51.QuerySendEnabledRequestAminoMsg): _51.QuerySendEnabledRequest;
                toAminoMsg(message: _51.QuerySendEnabledRequest): _51.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _51.QuerySendEnabledRequestProtoMsg): _51.QuerySendEnabledRequest;
                toProto(message: _51.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _51.QuerySendEnabledRequest): _51.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _51.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QuerySendEnabledResponse;
                fromPartial(object: Partial<_51.QuerySendEnabledResponse>): _51.QuerySendEnabledResponse;
                fromAmino(object: _51.QuerySendEnabledResponseAmino): _51.QuerySendEnabledResponse;
                toAmino(message: _51.QuerySendEnabledResponse): _51.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _51.QuerySendEnabledResponseAminoMsg): _51.QuerySendEnabledResponse;
                toAminoMsg(message: _51.QuerySendEnabledResponse): _51.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _51.QuerySendEnabledResponseProtoMsg): _51.QuerySendEnabledResponse;
                toProto(message: _51.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _51.QuerySendEnabledResponse): _51.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _50.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                toAminoMsg(message: _50.GenesisState): _50.GenesisStateAminoMsg;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _50.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Balance;
                fromPartial(object: Partial<_50.Balance>): _50.Balance;
                fromAmino(object: _50.BalanceAmino): _50.Balance;
                toAmino(message: _50.Balance): _50.BalanceAmino;
                fromAminoMsg(object: _50.BalanceAminoMsg): _50.Balance;
                toAminoMsg(message: _50.Balance): _50.BalanceAminoMsg;
                fromProtoMsg(message: _50.BalanceProtoMsg): _50.Balance;
                toProto(message: _50.Balance): Uint8Array;
                toProtoMsg(message: _50.Balance): _50.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _49.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Params;
                fromPartial(object: Partial<_49.Params>): _49.Params;
                fromAmino(object: _49.ParamsAmino): _49.Params;
                toAmino(message: _49.Params): _49.ParamsAmino;
                fromAminoMsg(object: _49.ParamsAminoMsg): _49.Params;
                toAminoMsg(message: _49.Params): _49.ParamsAminoMsg;
                fromProtoMsg(message: _49.ParamsProtoMsg): _49.Params;
                toProto(message: _49.Params): Uint8Array;
                toProtoMsg(message: _49.Params): _49.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _49.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.SendEnabled;
                fromPartial(object: Partial<_49.SendEnabled>): _49.SendEnabled;
                fromAmino(object: _49.SendEnabledAmino): _49.SendEnabled;
                toAmino(message: _49.SendEnabled): _49.SendEnabledAmino;
                fromAminoMsg(object: _49.SendEnabledAminoMsg): _49.SendEnabled;
                toAminoMsg(message: _49.SendEnabled): _49.SendEnabledAminoMsg;
                fromProtoMsg(message: _49.SendEnabledProtoMsg): _49.SendEnabled;
                toProto(message: _49.SendEnabled): Uint8Array;
                toProtoMsg(message: _49.SendEnabled): _49.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _49.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Input;
                fromPartial(object: Partial<_49.Input>): _49.Input;
                fromAmino(object: _49.InputAmino): _49.Input;
                toAmino(message: _49.Input): _49.InputAmino;
                fromAminoMsg(object: _49.InputAminoMsg): _49.Input;
                toAminoMsg(message: _49.Input): _49.InputAminoMsg;
                fromProtoMsg(message: _49.InputProtoMsg): _49.Input;
                toProto(message: _49.Input): Uint8Array;
                toProtoMsg(message: _49.Input): _49.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _49.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Output;
                fromPartial(object: Partial<_49.Output>): _49.Output;
                fromAmino(object: _49.OutputAmino): _49.Output;
                toAmino(message: _49.Output): _49.OutputAmino;
                fromAminoMsg(object: _49.OutputAminoMsg): _49.Output;
                toAminoMsg(message: _49.Output): _49.OutputAminoMsg;
                fromProtoMsg(message: _49.OutputProtoMsg): _49.Output;
                toProto(message: _49.Output): Uint8Array;
                toProtoMsg(message: _49.Output): _49.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _49.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Supply;
                fromPartial(object: Partial<_49.Supply>): _49.Supply;
                fromAmino(object: _49.SupplyAmino): _49.Supply;
                toAmino(message: _49.Supply): _49.SupplyAmino;
                fromAminoMsg(object: _49.SupplyAminoMsg): _49.Supply;
                toAminoMsg(message: _49.Supply): _49.SupplyAminoMsg;
                fromProtoMsg(message: _49.SupplyProtoMsg): _49.Supply;
                toProto(message: _49.Supply): Uint8Array;
                toProtoMsg(message: _49.Supply): _49.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _49.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DenomUnit;
                fromPartial(object: Partial<_49.DenomUnit>): _49.DenomUnit;
                fromAmino(object: _49.DenomUnitAmino): _49.DenomUnit;
                toAmino(message: _49.DenomUnit): _49.DenomUnitAmino;
                fromAminoMsg(object: _49.DenomUnitAminoMsg): _49.DenomUnit;
                toAminoMsg(message: _49.DenomUnit): _49.DenomUnitAminoMsg;
                fromProtoMsg(message: _49.DenomUnitProtoMsg): _49.DenomUnit;
                toProto(message: _49.DenomUnit): Uint8Array;
                toProtoMsg(message: _49.DenomUnit): _49.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _49.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Metadata;
                fromPartial(object: Partial<_49.Metadata>): _49.Metadata;
                fromAmino(object: _49.MetadataAmino): _49.Metadata;
                toAmino(message: _49.Metadata): _49.MetadataAmino;
                fromAminoMsg(object: _49.MetadataAminoMsg): _49.Metadata;
                toAminoMsg(message: _49.Metadata): _49.MetadataAminoMsg;
                fromProtoMsg(message: _49.MetadataProtoMsg): _49.Metadata;
                toProto(message: _49.Metadata): Uint8Array;
                toProtoMsg(message: _49.Metadata): _49.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _48.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.SendAuthorization;
                fromPartial(object: Partial<_48.SendAuthorization>): _48.SendAuthorization;
                fromAmino(object: _48.SendAuthorizationAmino): _48.SendAuthorization;
                toAmino(message: _48.SendAuthorization): _48.SendAuthorizationAmino;
                fromAminoMsg(object: _48.SendAuthorizationAminoMsg): _48.SendAuthorization;
                toAminoMsg(message: _48.SendAuthorization): _48.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _48.SendAuthorizationProtoMsg): _48.SendAuthorization;
                toProto(message: _48.SendAuthorization): Uint8Array;
                toProtoMsg(message: _48.SendAuthorization): _48.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _53.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.TxResponse;
                    fromPartial(object: Partial<_53.TxResponse>): _53.TxResponse;
                    fromAmino(object: _53.TxResponseAmino): _53.TxResponse;
                    toAmino(message: _53.TxResponse): _53.TxResponseAmino;
                    fromAminoMsg(object: _53.TxResponseAminoMsg): _53.TxResponse;
                    toAminoMsg(message: _53.TxResponse): _53.TxResponseAminoMsg;
                    fromProtoMsg(message: _53.TxResponseProtoMsg): _53.TxResponse;
                    toProto(message: _53.TxResponse): Uint8Array;
                    toProtoMsg(message: _53.TxResponse): _53.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _53.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.ABCIMessageLog;
                    fromPartial(object: Partial<_53.ABCIMessageLog>): _53.ABCIMessageLog;
                    fromAmino(object: _53.ABCIMessageLogAmino): _53.ABCIMessageLog;
                    toAmino(message: _53.ABCIMessageLog): _53.ABCIMessageLogAmino;
                    fromAminoMsg(object: _53.ABCIMessageLogAminoMsg): _53.ABCIMessageLog;
                    toAminoMsg(message: _53.ABCIMessageLog): _53.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _53.ABCIMessageLogProtoMsg): _53.ABCIMessageLog;
                    toProto(message: _53.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _53.ABCIMessageLog): _53.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _53.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.StringEvent;
                    fromPartial(object: Partial<_53.StringEvent>): _53.StringEvent;
                    fromAmino(object: _53.StringEventAmino): _53.StringEvent;
                    toAmino(message: _53.StringEvent): _53.StringEventAmino;
                    fromAminoMsg(object: _53.StringEventAminoMsg): _53.StringEvent;
                    toAminoMsg(message: _53.StringEvent): _53.StringEventAminoMsg;
                    fromProtoMsg(message: _53.StringEventProtoMsg): _53.StringEvent;
                    toProto(message: _53.StringEvent): Uint8Array;
                    toProtoMsg(message: _53.StringEvent): _53.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _53.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Attribute;
                    fromPartial(object: Partial<_53.Attribute>): _53.Attribute;
                    fromAmino(object: _53.AttributeAmino): _53.Attribute;
                    toAmino(message: _53.Attribute): _53.AttributeAmino;
                    fromAminoMsg(object: _53.AttributeAminoMsg): _53.Attribute;
                    toAminoMsg(message: _53.Attribute): _53.AttributeAminoMsg;
                    fromProtoMsg(message: _53.AttributeProtoMsg): _53.Attribute;
                    toProto(message: _53.Attribute): Uint8Array;
                    toProtoMsg(message: _53.Attribute): _53.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _53.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.GasInfo;
                    fromPartial(object: Partial<_53.GasInfo>): _53.GasInfo;
                    fromAmino(object: _53.GasInfoAmino): _53.GasInfo;
                    toAmino(message: _53.GasInfo): _53.GasInfoAmino;
                    fromAminoMsg(object: _53.GasInfoAminoMsg): _53.GasInfo;
                    toAminoMsg(message: _53.GasInfo): _53.GasInfoAminoMsg;
                    fromProtoMsg(message: _53.GasInfoProtoMsg): _53.GasInfo;
                    toProto(message: _53.GasInfo): Uint8Array;
                    toProtoMsg(message: _53.GasInfo): _53.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _53.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Result;
                    fromPartial(object: Partial<_53.Result>): _53.Result;
                    fromAmino(object: _53.ResultAmino): _53.Result;
                    toAmino(message: _53.Result): _53.ResultAmino;
                    fromAminoMsg(object: _53.ResultAminoMsg): _53.Result;
                    toAminoMsg(message: _53.Result): _53.ResultAminoMsg;
                    fromProtoMsg(message: _53.ResultProtoMsg): _53.Result;
                    toProto(message: _53.Result): Uint8Array;
                    toProtoMsg(message: _53.Result): _53.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _53.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.SimulationResponse;
                    fromPartial(object: Partial<_53.SimulationResponse>): _53.SimulationResponse;
                    fromAmino(object: _53.SimulationResponseAmino): _53.SimulationResponse;
                    toAmino(message: _53.SimulationResponse): _53.SimulationResponseAmino;
                    fromAminoMsg(object: _53.SimulationResponseAminoMsg): _53.SimulationResponse;
                    toAminoMsg(message: _53.SimulationResponse): _53.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _53.SimulationResponseProtoMsg): _53.SimulationResponse;
                    toProto(message: _53.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _53.SimulationResponse): _53.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _53.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.MsgData;
                    fromPartial(object: Partial<_53.MsgData>): _53.MsgData;
                    fromAmino(object: _53.MsgDataAmino): _53.MsgData;
                    toAmino(message: _53.MsgData): _53.MsgDataAmino;
                    fromAminoMsg(object: _53.MsgDataAminoMsg): _53.MsgData;
                    toAminoMsg(message: _53.MsgData): _53.MsgDataAminoMsg;
                    fromProtoMsg(message: _53.MsgDataProtoMsg): _53.MsgData;
                    toProto(message: _53.MsgData): Uint8Array;
                    toProtoMsg(message: _53.MsgData): _53.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _53.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.TxMsgData;
                    fromPartial(object: Partial<_53.TxMsgData>): _53.TxMsgData;
                    fromAmino(object: _53.TxMsgDataAmino): _53.TxMsgData;
                    toAmino(message: _53.TxMsgData): _53.TxMsgDataAmino;
                    fromAminoMsg(object: _53.TxMsgDataAminoMsg): _53.TxMsgData;
                    toAminoMsg(message: _53.TxMsgData): _53.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _53.TxMsgDataProtoMsg): _53.TxMsgData;
                    toProto(message: _53.TxMsgData): Uint8Array;
                    toProtoMsg(message: _53.TxMsgData): _53.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _53.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.SearchTxsResult;
                    fromPartial(object: Partial<_53.SearchTxsResult>): _53.SearchTxsResult;
                    fromAmino(object: _53.SearchTxsResultAmino): _53.SearchTxsResult;
                    toAmino(message: _53.SearchTxsResult): _53.SearchTxsResultAmino;
                    fromAminoMsg(object: _53.SearchTxsResultAminoMsg): _53.SearchTxsResult;
                    toAminoMsg(message: _53.SearchTxsResult): _53.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _53.SearchTxsResultProtoMsg): _53.SearchTxsResult;
                    toProto(message: _53.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _53.SearchTxsResult): _53.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _54.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Pairs;
                    fromPartial(object: Partial<_54.Pairs>): _54.Pairs;
                    fromAmino(object: _54.PairsAmino): _54.Pairs;
                    toAmino(message: _54.Pairs): _54.PairsAmino;
                    fromAminoMsg(object: _54.PairsAminoMsg): _54.Pairs;
                    toAminoMsg(message: _54.Pairs): _54.PairsAminoMsg;
                    fromProtoMsg(message: _54.PairsProtoMsg): _54.Pairs;
                    toProto(message: _54.Pairs): Uint8Array;
                    toProtoMsg(message: _54.Pairs): _54.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _54.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Pair;
                    fromPartial(object: Partial<_54.Pair>): _54.Pair;
                    fromAmino(object: _54.PairAmino): _54.Pair;
                    toAmino(message: _54.Pair): _54.PairAmino;
                    fromAminoMsg(object: _54.PairAminoMsg): _54.Pair;
                    toAminoMsg(message: _54.Pair): _54.PairAminoMsg;
                    fromProtoMsg(message: _54.PairProtoMsg): _54.Pair;
                    toProto(message: _54.Pair): Uint8Array;
                    toProtoMsg(message: _54.Pair): _54.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _269.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _55.ConfigRequest): Promise<_55.ConfigResponse>;
                };
                LCDQueryClient: typeof _248.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _55.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _55.ConfigRequest;
                    fromPartial(_: Partial<_55.ConfigRequest>): _55.ConfigRequest;
                    fromAmino(_: _55.ConfigRequestAmino): _55.ConfigRequest;
                    toAmino(_: _55.ConfigRequest): _55.ConfigRequestAmino;
                    fromAminoMsg(object: _55.ConfigRequestAminoMsg): _55.ConfigRequest;
                    toAminoMsg(message: _55.ConfigRequest): _55.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _55.ConfigRequestProtoMsg): _55.ConfigRequest;
                    toProto(message: _55.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _55.ConfigRequest): _55.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _55.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.ConfigResponse;
                    fromPartial(object: Partial<_55.ConfigResponse>): _55.ConfigResponse;
                    fromAmino(object: _55.ConfigResponseAmino): _55.ConfigResponse;
                    toAmino(message: _55.ConfigResponse): _55.ConfigResponseAmino;
                    fromAminoMsg(object: _55.ConfigResponseAminoMsg): _55.ConfigResponse;
                    toAminoMsg(message: _55.ConfigResponse): _55.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _55.ConfigResponseProtoMsg): _55.ConfigResponse;
                    toProto(message: _55.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _55.ConfigResponse): _55.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _56.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.PageRequest;
                    fromPartial(object: Partial<_56.PageRequest>): _56.PageRequest;
                    fromAmino(object: _56.PageRequestAmino): _56.PageRequest;
                    toAmino(message: _56.PageRequest): _56.PageRequestAmino;
                    fromAminoMsg(object: _56.PageRequestAminoMsg): _56.PageRequest;
                    toAminoMsg(message: _56.PageRequest): _56.PageRequestAminoMsg;
                    fromProtoMsg(message: _56.PageRequestProtoMsg): _56.PageRequest;
                    toProto(message: _56.PageRequest): Uint8Array;
                    toProtoMsg(message: _56.PageRequest): _56.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _56.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.PageResponse;
                    fromPartial(object: Partial<_56.PageResponse>): _56.PageResponse;
                    fromAmino(object: _56.PageResponseAmino): _56.PageResponse;
                    toAmino(message: _56.PageResponse): _56.PageResponseAmino;
                    fromAminoMsg(object: _56.PageResponseAminoMsg): _56.PageResponse;
                    toAminoMsg(message: _56.PageResponse): _56.PageResponseAminoMsg;
                    fromProtoMsg(message: _56.PageResponseProtoMsg): _56.PageResponse;
                    toProto(message: _56.PageResponse): Uint8Array;
                    toProtoMsg(message: _56.PageResponse): _56.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _57.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _57.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_57.ListAllInterfacesRequest>): _57.ListAllInterfacesRequest;
                    fromAmino(_: _57.ListAllInterfacesRequestAmino): _57.ListAllInterfacesRequest;
                    toAmino(_: _57.ListAllInterfacesRequest): _57.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _57.ListAllInterfacesRequestAminoMsg): _57.ListAllInterfacesRequest;
                    toAminoMsg(message: _57.ListAllInterfacesRequest): _57.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _57.ListAllInterfacesRequestProtoMsg): _57.ListAllInterfacesRequest;
                    toProto(message: _57.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _57.ListAllInterfacesRequest): _57.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _57.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_57.ListAllInterfacesResponse>): _57.ListAllInterfacesResponse;
                    fromAmino(object: _57.ListAllInterfacesResponseAmino): _57.ListAllInterfacesResponse;
                    toAmino(message: _57.ListAllInterfacesResponse): _57.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _57.ListAllInterfacesResponseAminoMsg): _57.ListAllInterfacesResponse;
                    toAminoMsg(message: _57.ListAllInterfacesResponse): _57.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _57.ListAllInterfacesResponseProtoMsg): _57.ListAllInterfacesResponse;
                    toProto(message: _57.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _57.ListAllInterfacesResponse): _57.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _57.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.ListImplementationsRequest;
                    fromPartial(object: Partial<_57.ListImplementationsRequest>): _57.ListImplementationsRequest;
                    fromAmino(object: _57.ListImplementationsRequestAmino): _57.ListImplementationsRequest;
                    toAmino(message: _57.ListImplementationsRequest): _57.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _57.ListImplementationsRequestAminoMsg): _57.ListImplementationsRequest;
                    toAminoMsg(message: _57.ListImplementationsRequest): _57.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _57.ListImplementationsRequestProtoMsg): _57.ListImplementationsRequest;
                    toProto(message: _57.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _57.ListImplementationsRequest): _57.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _57.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.ListImplementationsResponse;
                    fromPartial(object: Partial<_57.ListImplementationsResponse>): _57.ListImplementationsResponse;
                    fromAmino(object: _57.ListImplementationsResponseAmino): _57.ListImplementationsResponse;
                    toAmino(message: _57.ListImplementationsResponse): _57.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _57.ListImplementationsResponseAminoMsg): _57.ListImplementationsResponse;
                    toAminoMsg(message: _57.ListImplementationsResponse): _57.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _57.ListImplementationsResponseProtoMsg): _57.ListImplementationsResponse;
                    toProto(message: _57.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _57.ListImplementationsResponse): _57.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _58.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.AppDescriptor;
                    fromPartial(object: Partial<_58.AppDescriptor>): _58.AppDescriptor;
                    fromAmino(object: _58.AppDescriptorAmino): _58.AppDescriptor;
                    toAmino(message: _58.AppDescriptor): _58.AppDescriptorAmino;
                    fromAminoMsg(object: _58.AppDescriptorAminoMsg): _58.AppDescriptor;
                    toAminoMsg(message: _58.AppDescriptor): _58.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _58.AppDescriptorProtoMsg): _58.AppDescriptor;
                    toProto(message: _58.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _58.AppDescriptor): _58.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _58.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.TxDescriptor;
                    fromPartial(object: Partial<_58.TxDescriptor>): _58.TxDescriptor;
                    fromAmino(object: _58.TxDescriptorAmino): _58.TxDescriptor;
                    toAmino(message: _58.TxDescriptor): _58.TxDescriptorAmino;
                    fromAminoMsg(object: _58.TxDescriptorAminoMsg): _58.TxDescriptor;
                    toAminoMsg(message: _58.TxDescriptor): _58.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _58.TxDescriptorProtoMsg): _58.TxDescriptor;
                    toProto(message: _58.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _58.TxDescriptor): _58.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _58.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.AuthnDescriptor;
                    fromPartial(object: Partial<_58.AuthnDescriptor>): _58.AuthnDescriptor;
                    fromAmino(object: _58.AuthnDescriptorAmino): _58.AuthnDescriptor;
                    toAmino(message: _58.AuthnDescriptor): _58.AuthnDescriptorAmino;
                    fromAminoMsg(object: _58.AuthnDescriptorAminoMsg): _58.AuthnDescriptor;
                    toAminoMsg(message: _58.AuthnDescriptor): _58.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _58.AuthnDescriptorProtoMsg): _58.AuthnDescriptor;
                    toProto(message: _58.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _58.AuthnDescriptor): _58.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _58.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.SigningModeDescriptor;
                    fromPartial(object: Partial<_58.SigningModeDescriptor>): _58.SigningModeDescriptor;
                    fromAmino(object: _58.SigningModeDescriptorAmino): _58.SigningModeDescriptor;
                    toAmino(message: _58.SigningModeDescriptor): _58.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _58.SigningModeDescriptorAminoMsg): _58.SigningModeDescriptor;
                    toAminoMsg(message: _58.SigningModeDescriptor): _58.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _58.SigningModeDescriptorProtoMsg): _58.SigningModeDescriptor;
                    toProto(message: _58.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _58.SigningModeDescriptor): _58.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _58.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.ChainDescriptor;
                    fromPartial(object: Partial<_58.ChainDescriptor>): _58.ChainDescriptor;
                    fromAmino(object: _58.ChainDescriptorAmino): _58.ChainDescriptor;
                    toAmino(message: _58.ChainDescriptor): _58.ChainDescriptorAmino;
                    fromAminoMsg(object: _58.ChainDescriptorAminoMsg): _58.ChainDescriptor;
                    toAminoMsg(message: _58.ChainDescriptor): _58.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _58.ChainDescriptorProtoMsg): _58.ChainDescriptor;
                    toProto(message: _58.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _58.ChainDescriptor): _58.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _58.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.CodecDescriptor;
                    fromPartial(object: Partial<_58.CodecDescriptor>): _58.CodecDescriptor;
                    fromAmino(object: _58.CodecDescriptorAmino): _58.CodecDescriptor;
                    toAmino(message: _58.CodecDescriptor): _58.CodecDescriptorAmino;
                    fromAminoMsg(object: _58.CodecDescriptorAminoMsg): _58.CodecDescriptor;
                    toAminoMsg(message: _58.CodecDescriptor): _58.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _58.CodecDescriptorProtoMsg): _58.CodecDescriptor;
                    toProto(message: _58.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _58.CodecDescriptor): _58.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _58.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.InterfaceDescriptor;
                    fromPartial(object: Partial<_58.InterfaceDescriptor>): _58.InterfaceDescriptor;
                    fromAmino(object: _58.InterfaceDescriptorAmino): _58.InterfaceDescriptor;
                    toAmino(message: _58.InterfaceDescriptor): _58.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _58.InterfaceDescriptorAminoMsg): _58.InterfaceDescriptor;
                    toAminoMsg(message: _58.InterfaceDescriptor): _58.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _58.InterfaceDescriptorProtoMsg): _58.InterfaceDescriptor;
                    toProto(message: _58.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _58.InterfaceDescriptor): _58.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _58.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_58.InterfaceImplementerDescriptor>): _58.InterfaceImplementerDescriptor;
                    fromAmino(object: _58.InterfaceImplementerDescriptorAmino): _58.InterfaceImplementerDescriptor;
                    toAmino(message: _58.InterfaceImplementerDescriptor): _58.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _58.InterfaceImplementerDescriptorAminoMsg): _58.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _58.InterfaceImplementerDescriptor): _58.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _58.InterfaceImplementerDescriptorProtoMsg): _58.InterfaceImplementerDescriptor;
                    toProto(message: _58.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _58.InterfaceImplementerDescriptor): _58.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _58.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_58.InterfaceAcceptingMessageDescriptor>): _58.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _58.InterfaceAcceptingMessageDescriptorAmino): _58.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _58.InterfaceAcceptingMessageDescriptor): _58.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _58.InterfaceAcceptingMessageDescriptorAminoMsg): _58.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _58.InterfaceAcceptingMessageDescriptor): _58.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _58.InterfaceAcceptingMessageDescriptorProtoMsg): _58.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _58.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _58.InterfaceAcceptingMessageDescriptor): _58.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _58.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.ConfigurationDescriptor;
                    fromPartial(object: Partial<_58.ConfigurationDescriptor>): _58.ConfigurationDescriptor;
                    fromAmino(object: _58.ConfigurationDescriptorAmino): _58.ConfigurationDescriptor;
                    toAmino(message: _58.ConfigurationDescriptor): _58.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _58.ConfigurationDescriptorAminoMsg): _58.ConfigurationDescriptor;
                    toAminoMsg(message: _58.ConfigurationDescriptor): _58.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _58.ConfigurationDescriptorProtoMsg): _58.ConfigurationDescriptor;
                    toProto(message: _58.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _58.ConfigurationDescriptor): _58.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _58.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.MsgDescriptor;
                    fromPartial(object: Partial<_58.MsgDescriptor>): _58.MsgDescriptor;
                    fromAmino(object: _58.MsgDescriptorAmino): _58.MsgDescriptor;
                    toAmino(message: _58.MsgDescriptor): _58.MsgDescriptorAmino;
                    fromAminoMsg(object: _58.MsgDescriptorAminoMsg): _58.MsgDescriptor;
                    toAminoMsg(message: _58.MsgDescriptor): _58.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _58.MsgDescriptorProtoMsg): _58.MsgDescriptor;
                    toProto(message: _58.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _58.MsgDescriptor): _58.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _58.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_58.GetAuthnDescriptorRequest>): _58.GetAuthnDescriptorRequest;
                    fromAmino(_: _58.GetAuthnDescriptorRequestAmino): _58.GetAuthnDescriptorRequest;
                    toAmino(_: _58.GetAuthnDescriptorRequest): _58.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _58.GetAuthnDescriptorRequestAminoMsg): _58.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _58.GetAuthnDescriptorRequest): _58.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _58.GetAuthnDescriptorRequestProtoMsg): _58.GetAuthnDescriptorRequest;
                    toProto(message: _58.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _58.GetAuthnDescriptorRequest): _58.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _58.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_58.GetAuthnDescriptorResponse>): _58.GetAuthnDescriptorResponse;
                    fromAmino(object: _58.GetAuthnDescriptorResponseAmino): _58.GetAuthnDescriptorResponse;
                    toAmino(message: _58.GetAuthnDescriptorResponse): _58.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _58.GetAuthnDescriptorResponseAminoMsg): _58.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _58.GetAuthnDescriptorResponse): _58.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _58.GetAuthnDescriptorResponseProtoMsg): _58.GetAuthnDescriptorResponse;
                    toProto(message: _58.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _58.GetAuthnDescriptorResponse): _58.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _58.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_58.GetChainDescriptorRequest>): _58.GetChainDescriptorRequest;
                    fromAmino(_: _58.GetChainDescriptorRequestAmino): _58.GetChainDescriptorRequest;
                    toAmino(_: _58.GetChainDescriptorRequest): _58.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _58.GetChainDescriptorRequestAminoMsg): _58.GetChainDescriptorRequest;
                    toAminoMsg(message: _58.GetChainDescriptorRequest): _58.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _58.GetChainDescriptorRequestProtoMsg): _58.GetChainDescriptorRequest;
                    toProto(message: _58.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _58.GetChainDescriptorRequest): _58.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _58.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_58.GetChainDescriptorResponse>): _58.GetChainDescriptorResponse;
                    fromAmino(object: _58.GetChainDescriptorResponseAmino): _58.GetChainDescriptorResponse;
                    toAmino(message: _58.GetChainDescriptorResponse): _58.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _58.GetChainDescriptorResponseAminoMsg): _58.GetChainDescriptorResponse;
                    toAminoMsg(message: _58.GetChainDescriptorResponse): _58.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _58.GetChainDescriptorResponseProtoMsg): _58.GetChainDescriptorResponse;
                    toProto(message: _58.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _58.GetChainDescriptorResponse): _58.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _58.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_58.GetCodecDescriptorRequest>): _58.GetCodecDescriptorRequest;
                    fromAmino(_: _58.GetCodecDescriptorRequestAmino): _58.GetCodecDescriptorRequest;
                    toAmino(_: _58.GetCodecDescriptorRequest): _58.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _58.GetCodecDescriptorRequestAminoMsg): _58.GetCodecDescriptorRequest;
                    toAminoMsg(message: _58.GetCodecDescriptorRequest): _58.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _58.GetCodecDescriptorRequestProtoMsg): _58.GetCodecDescriptorRequest;
                    toProto(message: _58.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _58.GetCodecDescriptorRequest): _58.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _58.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_58.GetCodecDescriptorResponse>): _58.GetCodecDescriptorResponse;
                    fromAmino(object: _58.GetCodecDescriptorResponseAmino): _58.GetCodecDescriptorResponse;
                    toAmino(message: _58.GetCodecDescriptorResponse): _58.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _58.GetCodecDescriptorResponseAminoMsg): _58.GetCodecDescriptorResponse;
                    toAminoMsg(message: _58.GetCodecDescriptorResponse): _58.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _58.GetCodecDescriptorResponseProtoMsg): _58.GetCodecDescriptorResponse;
                    toProto(message: _58.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _58.GetCodecDescriptorResponse): _58.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _58.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_58.GetConfigurationDescriptorRequest>): _58.GetConfigurationDescriptorRequest;
                    fromAmino(_: _58.GetConfigurationDescriptorRequestAmino): _58.GetConfigurationDescriptorRequest;
                    toAmino(_: _58.GetConfigurationDescriptorRequest): _58.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _58.GetConfigurationDescriptorRequestAminoMsg): _58.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _58.GetConfigurationDescriptorRequest): _58.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _58.GetConfigurationDescriptorRequestProtoMsg): _58.GetConfigurationDescriptorRequest;
                    toProto(message: _58.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _58.GetConfigurationDescriptorRequest): _58.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _58.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_58.GetConfigurationDescriptorResponse>): _58.GetConfigurationDescriptorResponse;
                    fromAmino(object: _58.GetConfigurationDescriptorResponseAmino): _58.GetConfigurationDescriptorResponse;
                    toAmino(message: _58.GetConfigurationDescriptorResponse): _58.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _58.GetConfigurationDescriptorResponseAminoMsg): _58.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _58.GetConfigurationDescriptorResponse): _58.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _58.GetConfigurationDescriptorResponseProtoMsg): _58.GetConfigurationDescriptorResponse;
                    toProto(message: _58.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _58.GetConfigurationDescriptorResponse): _58.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _58.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_58.GetQueryServicesDescriptorRequest>): _58.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _58.GetQueryServicesDescriptorRequestAmino): _58.GetQueryServicesDescriptorRequest;
                    toAmino(_: _58.GetQueryServicesDescriptorRequest): _58.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _58.GetQueryServicesDescriptorRequestAminoMsg): _58.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _58.GetQueryServicesDescriptorRequest): _58.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _58.GetQueryServicesDescriptorRequestProtoMsg): _58.GetQueryServicesDescriptorRequest;
                    toProto(message: _58.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _58.GetQueryServicesDescriptorRequest): _58.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _58.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_58.GetQueryServicesDescriptorResponse>): _58.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _58.GetQueryServicesDescriptorResponseAmino): _58.GetQueryServicesDescriptorResponse;
                    toAmino(message: _58.GetQueryServicesDescriptorResponse): _58.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _58.GetQueryServicesDescriptorResponseAminoMsg): _58.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _58.GetQueryServicesDescriptorResponse): _58.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _58.GetQueryServicesDescriptorResponseProtoMsg): _58.GetQueryServicesDescriptorResponse;
                    toProto(message: _58.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _58.GetQueryServicesDescriptorResponse): _58.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _58.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_58.GetTxDescriptorRequest>): _58.GetTxDescriptorRequest;
                    fromAmino(_: _58.GetTxDescriptorRequestAmino): _58.GetTxDescriptorRequest;
                    toAmino(_: _58.GetTxDescriptorRequest): _58.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _58.GetTxDescriptorRequestAminoMsg): _58.GetTxDescriptorRequest;
                    toAminoMsg(message: _58.GetTxDescriptorRequest): _58.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _58.GetTxDescriptorRequestProtoMsg): _58.GetTxDescriptorRequest;
                    toProto(message: _58.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _58.GetTxDescriptorRequest): _58.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _58.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_58.GetTxDescriptorResponse>): _58.GetTxDescriptorResponse;
                    fromAmino(object: _58.GetTxDescriptorResponseAmino): _58.GetTxDescriptorResponse;
                    toAmino(message: _58.GetTxDescriptorResponse): _58.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _58.GetTxDescriptorResponseAminoMsg): _58.GetTxDescriptorResponse;
                    toAminoMsg(message: _58.GetTxDescriptorResponse): _58.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _58.GetTxDescriptorResponseProtoMsg): _58.GetTxDescriptorResponse;
                    toProto(message: _58.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _58.GetTxDescriptorResponse): _58.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _58.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.QueryServicesDescriptor;
                    fromPartial(object: Partial<_58.QueryServicesDescriptor>): _58.QueryServicesDescriptor;
                    fromAmino(object: _58.QueryServicesDescriptorAmino): _58.QueryServicesDescriptor;
                    toAmino(message: _58.QueryServicesDescriptor): _58.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _58.QueryServicesDescriptorAminoMsg): _58.QueryServicesDescriptor;
                    toAminoMsg(message: _58.QueryServicesDescriptor): _58.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _58.QueryServicesDescriptorProtoMsg): _58.QueryServicesDescriptor;
                    toProto(message: _58.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _58.QueryServicesDescriptor): _58.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _58.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.QueryServiceDescriptor;
                    fromPartial(object: Partial<_58.QueryServiceDescriptor>): _58.QueryServiceDescriptor;
                    fromAmino(object: _58.QueryServiceDescriptorAmino): _58.QueryServiceDescriptor;
                    toAmino(message: _58.QueryServiceDescriptor): _58.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _58.QueryServiceDescriptorAminoMsg): _58.QueryServiceDescriptor;
                    toAminoMsg(message: _58.QueryServiceDescriptor): _58.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _58.QueryServiceDescriptorProtoMsg): _58.QueryServiceDescriptor;
                    toProto(message: _58.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _58.QueryServiceDescriptor): _58.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _58.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.QueryMethodDescriptor;
                    fromPartial(object: Partial<_58.QueryMethodDescriptor>): _58.QueryMethodDescriptor;
                    fromAmino(object: _58.QueryMethodDescriptorAmino): _58.QueryMethodDescriptor;
                    toAmino(message: _58.QueryMethodDescriptor): _58.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _58.QueryMethodDescriptorAminoMsg): _58.QueryMethodDescriptor;
                    toAminoMsg(message: _58.QueryMethodDescriptor): _58.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _58.QueryMethodDescriptorProtoMsg): _58.QueryMethodDescriptor;
                    toProto(message: _58.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _58.QueryMethodDescriptor): _58.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _59.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Snapshot;
                    fromPartial(object: Partial<_59.Snapshot>): _59.Snapshot;
                    fromAmino(object: _59.SnapshotAmino): _59.Snapshot;
                    toAmino(message: _59.Snapshot): _59.SnapshotAmino;
                    fromAminoMsg(object: _59.SnapshotAminoMsg): _59.Snapshot;
                    toAminoMsg(message: _59.Snapshot): _59.SnapshotAminoMsg;
                    fromProtoMsg(message: _59.SnapshotProtoMsg): _59.Snapshot;
                    toProto(message: _59.Snapshot): Uint8Array;
                    toProtoMsg(message: _59.Snapshot): _59.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _59.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Metadata;
                    fromPartial(object: Partial<_59.Metadata>): _59.Metadata;
                    fromAmino(object: _59.MetadataAmino): _59.Metadata;
                    toAmino(message: _59.Metadata): _59.MetadataAmino;
                    fromAminoMsg(object: _59.MetadataAminoMsg): _59.Metadata;
                    toAminoMsg(message: _59.Metadata): _59.MetadataAminoMsg;
                    fromProtoMsg(message: _59.MetadataProtoMsg): _59.Metadata;
                    toProto(message: _59.Metadata): Uint8Array;
                    toProtoMsg(message: _59.Metadata): _59.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _59.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SnapshotItem;
                    fromPartial(object: Partial<_59.SnapshotItem>): _59.SnapshotItem;
                    fromAmino(object: _59.SnapshotItemAmino): _59.SnapshotItem;
                    toAmino(message: _59.SnapshotItem): _59.SnapshotItemAmino;
                    fromAminoMsg(object: _59.SnapshotItemAminoMsg): _59.SnapshotItem;
                    toAminoMsg(message: _59.SnapshotItem): _59.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _59.SnapshotItemProtoMsg): _59.SnapshotItem;
                    toProto(message: _59.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _59.SnapshotItem): _59.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _59.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SnapshotStoreItem;
                    fromPartial(object: Partial<_59.SnapshotStoreItem>): _59.SnapshotStoreItem;
                    fromAmino(object: _59.SnapshotStoreItemAmino): _59.SnapshotStoreItem;
                    toAmino(message: _59.SnapshotStoreItem): _59.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _59.SnapshotStoreItemAminoMsg): _59.SnapshotStoreItem;
                    toAminoMsg(message: _59.SnapshotStoreItem): _59.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _59.SnapshotStoreItemProtoMsg): _59.SnapshotStoreItem;
                    toProto(message: _59.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _59.SnapshotStoreItem): _59.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _59.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SnapshotIAVLItem;
                    fromPartial(object: Partial<_59.SnapshotIAVLItem>): _59.SnapshotIAVLItem;
                    fromAmino(object: _59.SnapshotIAVLItemAmino): _59.SnapshotIAVLItem;
                    toAmino(message: _59.SnapshotIAVLItem): _59.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _59.SnapshotIAVLItemAminoMsg): _59.SnapshotIAVLItem;
                    toAminoMsg(message: _59.SnapshotIAVLItem): _59.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _59.SnapshotIAVLItemProtoMsg): _59.SnapshotIAVLItem;
                    toProto(message: _59.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _59.SnapshotIAVLItem): _59.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _59.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_59.SnapshotExtensionMeta>): _59.SnapshotExtensionMeta;
                    fromAmino(object: _59.SnapshotExtensionMetaAmino): _59.SnapshotExtensionMeta;
                    toAmino(message: _59.SnapshotExtensionMeta): _59.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _59.SnapshotExtensionMetaAminoMsg): _59.SnapshotExtensionMeta;
                    toAminoMsg(message: _59.SnapshotExtensionMeta): _59.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _59.SnapshotExtensionMetaProtoMsg): _59.SnapshotExtensionMeta;
                    toProto(message: _59.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _59.SnapshotExtensionMeta): _59.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _59.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_59.SnapshotExtensionPayload>): _59.SnapshotExtensionPayload;
                    fromAmino(object: _59.SnapshotExtensionPayloadAmino): _59.SnapshotExtensionPayload;
                    toAmino(message: _59.SnapshotExtensionPayload): _59.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _59.SnapshotExtensionPayloadAminoMsg): _59.SnapshotExtensionPayload;
                    toAminoMsg(message: _59.SnapshotExtensionPayload): _59.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _59.SnapshotExtensionPayloadProtoMsg): _59.SnapshotExtensionPayload;
                    toProto(message: _59.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _59.SnapshotExtensionPayload): _59.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _59.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SnapshotKVItem;
                    fromPartial(object: Partial<_59.SnapshotKVItem>): _59.SnapshotKVItem;
                    fromAmino(object: _59.SnapshotKVItemAmino): _59.SnapshotKVItem;
                    toAmino(message: _59.SnapshotKVItem): _59.SnapshotKVItemAmino;
                    fromAminoMsg(object: _59.SnapshotKVItemAminoMsg): _59.SnapshotKVItem;
                    toAminoMsg(message: _59.SnapshotKVItem): _59.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _59.SnapshotKVItemProtoMsg): _59.SnapshotKVItem;
                    toProto(message: _59.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _59.SnapshotKVItem): _59.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _59.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SnapshotSchema;
                    fromPartial(object: Partial<_59.SnapshotSchema>): _59.SnapshotSchema;
                    fromAmino(object: _59.SnapshotSchemaAmino): _59.SnapshotSchema;
                    toAmino(message: _59.SnapshotSchema): _59.SnapshotSchemaAmino;
                    fromAminoMsg(object: _59.SnapshotSchemaAminoMsg): _59.SnapshotSchema;
                    toAminoMsg(message: _59.SnapshotSchema): _59.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _59.SnapshotSchemaProtoMsg): _59.SnapshotSchema;
                    toProto(message: _59.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _59.SnapshotSchema): _59.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _61.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.StoreKVPair;
                    fromPartial(object: Partial<_61.StoreKVPair>): _61.StoreKVPair;
                    fromAmino(object: _61.StoreKVPairAmino): _61.StoreKVPair;
                    toAmino(message: _61.StoreKVPair): _61.StoreKVPairAmino;
                    fromAminoMsg(object: _61.StoreKVPairAminoMsg): _61.StoreKVPair;
                    toAminoMsg(message: _61.StoreKVPair): _61.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _61.StoreKVPairProtoMsg): _61.StoreKVPair;
                    toProto(message: _61.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _61.StoreKVPair): _61.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _61.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.BlockMetadata;
                    fromPartial(object: Partial<_61.BlockMetadata>): _61.BlockMetadata;
                    fromAmino(object: _61.BlockMetadataAmino): _61.BlockMetadata;
                    toAmino(message: _61.BlockMetadata): _61.BlockMetadataAmino;
                    fromAminoMsg(object: _61.BlockMetadataAminoMsg): _61.BlockMetadata;
                    toAminoMsg(message: _61.BlockMetadata): _61.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _61.BlockMetadataProtoMsg): _61.BlockMetadata;
                    toProto(message: _61.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _61.BlockMetadata): _61.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _61.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_61.BlockMetadata_DeliverTx>): _61.BlockMetadata_DeliverTx;
                    fromAmino(object: _61.BlockMetadata_DeliverTxAmino): _61.BlockMetadata_DeliverTx;
                    toAmino(message: _61.BlockMetadata_DeliverTx): _61.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _61.BlockMetadata_DeliverTxAminoMsg): _61.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _61.BlockMetadata_DeliverTx): _61.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _61.BlockMetadata_DeliverTxProtoMsg): _61.BlockMetadata_DeliverTx;
                    toProto(message: _61.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _61.BlockMetadata_DeliverTx): _61.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _60.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.CommitInfo;
                    fromPartial(object: Partial<_60.CommitInfo>): _60.CommitInfo;
                    fromAmino(object: _60.CommitInfoAmino): _60.CommitInfo;
                    toAmino(message: _60.CommitInfo): _60.CommitInfoAmino;
                    fromAminoMsg(object: _60.CommitInfoAminoMsg): _60.CommitInfo;
                    toAminoMsg(message: _60.CommitInfo): _60.CommitInfoAminoMsg;
                    fromProtoMsg(message: _60.CommitInfoProtoMsg): _60.CommitInfo;
                    toProto(message: _60.CommitInfo): Uint8Array;
                    toProtoMsg(message: _60.CommitInfo): _60.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _60.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.StoreInfo;
                    fromPartial(object: Partial<_60.StoreInfo>): _60.StoreInfo;
                    fromAmino(object: _60.StoreInfoAmino): _60.StoreInfo;
                    toAmino(message: _60.StoreInfo): _60.StoreInfoAmino;
                    fromAminoMsg(object: _60.StoreInfoAminoMsg): _60.StoreInfo;
                    toAminoMsg(message: _60.StoreInfo): _60.StoreInfoAminoMsg;
                    fromProtoMsg(message: _60.StoreInfoProtoMsg): _60.StoreInfo;
                    toProto(message: _60.StoreInfo): Uint8Array;
                    toProtoMsg(message: _60.StoreInfo): _60.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _60.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.CommitID;
                    fromPartial(object: Partial<_60.CommitID>): _60.CommitID;
                    fromAmino(object: _60.CommitIDAmino): _60.CommitID;
                    toAmino(message: _60.CommitID): _60.CommitIDAmino;
                    fromAminoMsg(object: _60.CommitIDAminoMsg): _60.CommitID;
                    toAminoMsg(message: _60.CommitID): _60.CommitIDAminoMsg;
                    fromProtoMsg(message: _60.CommitIDProtoMsg): _60.CommitID;
                    toProto(message: _60.CommitID): Uint8Array;
                    toProtoMsg(message: _60.CommitID): _60.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _270.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _62.GetNodeInfoRequest): Promise<_62.GetNodeInfoResponse>;
                    getSyncing(request?: _62.GetSyncingRequest): Promise<_62.GetSyncingResponse>;
                    getLatestBlock(request?: _62.GetLatestBlockRequest): Promise<_62.GetLatestBlockResponse>;
                    getBlockByHeight(request: _62.GetBlockByHeightRequest): Promise<_62.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _62.GetLatestValidatorSetRequest): Promise<_62.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _62.GetValidatorSetByHeightRequest): Promise<_62.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _62.ABCIQueryRequest): Promise<_62.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _249.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _63.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Block;
                    fromPartial(object: Partial<_63.Block>): _63.Block;
                    fromAmino(object: _63.BlockAmino): _63.Block;
                    toAmino(message: _63.Block): _63.BlockAmino;
                    fromAminoMsg(object: _63.BlockAminoMsg): _63.Block;
                    toAminoMsg(message: _63.Block): _63.BlockAminoMsg;
                    fromProtoMsg(message: _63.BlockProtoMsg): _63.Block;
                    toProto(message: _63.Block): Uint8Array;
                    toProtoMsg(message: _63.Block): _63.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _63.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Header;
                    fromPartial(object: Partial<_63.Header>): _63.Header;
                    fromAmino(object: _63.HeaderAmino): _63.Header;
                    toAmino(message: _63.Header): _63.HeaderAmino;
                    fromAminoMsg(object: _63.HeaderAminoMsg): _63.Header;
                    toAminoMsg(message: _63.Header): _63.HeaderAminoMsg;
                    fromProtoMsg(message: _63.HeaderProtoMsg): _63.Header;
                    toProto(message: _63.Header): Uint8Array;
                    toProtoMsg(message: _63.Header): _63.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _62.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_62.GetValidatorSetByHeightRequest>): _62.GetValidatorSetByHeightRequest;
                    fromAmino(object: _62.GetValidatorSetByHeightRequestAmino): _62.GetValidatorSetByHeightRequest;
                    toAmino(message: _62.GetValidatorSetByHeightRequest): _62.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _62.GetValidatorSetByHeightRequestAminoMsg): _62.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _62.GetValidatorSetByHeightRequest): _62.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _62.GetValidatorSetByHeightRequestProtoMsg): _62.GetValidatorSetByHeightRequest;
                    toProto(message: _62.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _62.GetValidatorSetByHeightRequest): _62.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _62.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_62.GetValidatorSetByHeightResponse>): _62.GetValidatorSetByHeightResponse;
                    fromAmino(object: _62.GetValidatorSetByHeightResponseAmino): _62.GetValidatorSetByHeightResponse;
                    toAmino(message: _62.GetValidatorSetByHeightResponse): _62.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _62.GetValidatorSetByHeightResponseAminoMsg): _62.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _62.GetValidatorSetByHeightResponse): _62.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _62.GetValidatorSetByHeightResponseProtoMsg): _62.GetValidatorSetByHeightResponse;
                    toProto(message: _62.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _62.GetValidatorSetByHeightResponse): _62.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _62.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_62.GetLatestValidatorSetRequest>): _62.GetLatestValidatorSetRequest;
                    fromAmino(object: _62.GetLatestValidatorSetRequestAmino): _62.GetLatestValidatorSetRequest;
                    toAmino(message: _62.GetLatestValidatorSetRequest): _62.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _62.GetLatestValidatorSetRequestAminoMsg): _62.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _62.GetLatestValidatorSetRequest): _62.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _62.GetLatestValidatorSetRequestProtoMsg): _62.GetLatestValidatorSetRequest;
                    toProto(message: _62.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _62.GetLatestValidatorSetRequest): _62.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _62.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_62.GetLatestValidatorSetResponse>): _62.GetLatestValidatorSetResponse;
                    fromAmino(object: _62.GetLatestValidatorSetResponseAmino): _62.GetLatestValidatorSetResponse;
                    toAmino(message: _62.GetLatestValidatorSetResponse): _62.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _62.GetLatestValidatorSetResponseAminoMsg): _62.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _62.GetLatestValidatorSetResponse): _62.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _62.GetLatestValidatorSetResponseProtoMsg): _62.GetLatestValidatorSetResponse;
                    toProto(message: _62.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _62.GetLatestValidatorSetResponse): _62.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _62.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.Validator;
                    fromPartial(object: Partial<_62.Validator>): _62.Validator;
                    fromAmino(object: _62.ValidatorAmino): _62.Validator;
                    toAmino(message: _62.Validator): _62.ValidatorAmino;
                    fromAminoMsg(object: _62.ValidatorAminoMsg): _62.Validator;
                    toAminoMsg(message: _62.Validator): _62.ValidatorAminoMsg;
                    fromProtoMsg(message: _62.ValidatorProtoMsg): _62.Validator;
                    toProto(message: _62.Validator): Uint8Array;
                    toProtoMsg(message: _62.Validator): _62.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _62.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_62.GetBlockByHeightRequest>): _62.GetBlockByHeightRequest;
                    fromAmino(object: _62.GetBlockByHeightRequestAmino): _62.GetBlockByHeightRequest;
                    toAmino(message: _62.GetBlockByHeightRequest): _62.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _62.GetBlockByHeightRequestAminoMsg): _62.GetBlockByHeightRequest;
                    toAminoMsg(message: _62.GetBlockByHeightRequest): _62.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _62.GetBlockByHeightRequestProtoMsg): _62.GetBlockByHeightRequest;
                    toProto(message: _62.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _62.GetBlockByHeightRequest): _62.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _62.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_62.GetBlockByHeightResponse>): _62.GetBlockByHeightResponse;
                    fromAmino(object: _62.GetBlockByHeightResponseAmino): _62.GetBlockByHeightResponse;
                    toAmino(message: _62.GetBlockByHeightResponse): _62.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _62.GetBlockByHeightResponseAminoMsg): _62.GetBlockByHeightResponse;
                    toAminoMsg(message: _62.GetBlockByHeightResponse): _62.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _62.GetBlockByHeightResponseProtoMsg): _62.GetBlockByHeightResponse;
                    toProto(message: _62.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _62.GetBlockByHeightResponse): _62.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _62.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.GetLatestBlockRequest;
                    fromPartial(_: Partial<_62.GetLatestBlockRequest>): _62.GetLatestBlockRequest;
                    fromAmino(_: _62.GetLatestBlockRequestAmino): _62.GetLatestBlockRequest;
                    toAmino(_: _62.GetLatestBlockRequest): _62.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _62.GetLatestBlockRequestAminoMsg): _62.GetLatestBlockRequest;
                    toAminoMsg(message: _62.GetLatestBlockRequest): _62.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _62.GetLatestBlockRequestProtoMsg): _62.GetLatestBlockRequest;
                    toProto(message: _62.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _62.GetLatestBlockRequest): _62.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _62.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetLatestBlockResponse;
                    fromPartial(object: Partial<_62.GetLatestBlockResponse>): _62.GetLatestBlockResponse;
                    fromAmino(object: _62.GetLatestBlockResponseAmino): _62.GetLatestBlockResponse;
                    toAmino(message: _62.GetLatestBlockResponse): _62.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _62.GetLatestBlockResponseAminoMsg): _62.GetLatestBlockResponse;
                    toAminoMsg(message: _62.GetLatestBlockResponse): _62.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _62.GetLatestBlockResponseProtoMsg): _62.GetLatestBlockResponse;
                    toProto(message: _62.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _62.GetLatestBlockResponse): _62.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _62.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.GetSyncingRequest;
                    fromPartial(_: Partial<_62.GetSyncingRequest>): _62.GetSyncingRequest;
                    fromAmino(_: _62.GetSyncingRequestAmino): _62.GetSyncingRequest;
                    toAmino(_: _62.GetSyncingRequest): _62.GetSyncingRequestAmino;
                    fromAminoMsg(object: _62.GetSyncingRequestAminoMsg): _62.GetSyncingRequest;
                    toAminoMsg(message: _62.GetSyncingRequest): _62.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _62.GetSyncingRequestProtoMsg): _62.GetSyncingRequest;
                    toProto(message: _62.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _62.GetSyncingRequest): _62.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _62.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetSyncingResponse;
                    fromPartial(object: Partial<_62.GetSyncingResponse>): _62.GetSyncingResponse;
                    fromAmino(object: _62.GetSyncingResponseAmino): _62.GetSyncingResponse;
                    toAmino(message: _62.GetSyncingResponse): _62.GetSyncingResponseAmino;
                    fromAminoMsg(object: _62.GetSyncingResponseAminoMsg): _62.GetSyncingResponse;
                    toAminoMsg(message: _62.GetSyncingResponse): _62.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _62.GetSyncingResponseProtoMsg): _62.GetSyncingResponse;
                    toProto(message: _62.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _62.GetSyncingResponse): _62.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _62.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.GetNodeInfoRequest;
                    fromPartial(_: Partial<_62.GetNodeInfoRequest>): _62.GetNodeInfoRequest;
                    fromAmino(_: _62.GetNodeInfoRequestAmino): _62.GetNodeInfoRequest;
                    toAmino(_: _62.GetNodeInfoRequest): _62.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _62.GetNodeInfoRequestAminoMsg): _62.GetNodeInfoRequest;
                    toAminoMsg(message: _62.GetNodeInfoRequest): _62.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _62.GetNodeInfoRequestProtoMsg): _62.GetNodeInfoRequest;
                    toProto(message: _62.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _62.GetNodeInfoRequest): _62.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _62.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.GetNodeInfoResponse;
                    fromPartial(object: Partial<_62.GetNodeInfoResponse>): _62.GetNodeInfoResponse;
                    fromAmino(object: _62.GetNodeInfoResponseAmino): _62.GetNodeInfoResponse;
                    toAmino(message: _62.GetNodeInfoResponse): _62.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _62.GetNodeInfoResponseAminoMsg): _62.GetNodeInfoResponse;
                    toAminoMsg(message: _62.GetNodeInfoResponse): _62.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _62.GetNodeInfoResponseProtoMsg): _62.GetNodeInfoResponse;
                    toProto(message: _62.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _62.GetNodeInfoResponse): _62.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _62.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.VersionInfo;
                    fromPartial(object: Partial<_62.VersionInfo>): _62.VersionInfo;
                    fromAmino(object: _62.VersionInfoAmino): _62.VersionInfo;
                    toAmino(message: _62.VersionInfo): _62.VersionInfoAmino;
                    fromAminoMsg(object: _62.VersionInfoAminoMsg): _62.VersionInfo;
                    toAminoMsg(message: _62.VersionInfo): _62.VersionInfoAminoMsg;
                    fromProtoMsg(message: _62.VersionInfoProtoMsg): _62.VersionInfo;
                    toProto(message: _62.VersionInfo): Uint8Array;
                    toProtoMsg(message: _62.VersionInfo): _62.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _62.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.Module;
                    fromPartial(object: Partial<_62.Module>): _62.Module;
                    fromAmino(object: _62.ModuleAmino): _62.Module;
                    toAmino(message: _62.Module): _62.ModuleAmino;
                    fromAminoMsg(object: _62.ModuleAminoMsg): _62.Module;
                    toAminoMsg(message: _62.Module): _62.ModuleAminoMsg;
                    fromProtoMsg(message: _62.ModuleProtoMsg): _62.Module;
                    toProto(message: _62.Module): Uint8Array;
                    toProtoMsg(message: _62.Module): _62.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _62.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ABCIQueryRequest;
                    fromPartial(object: Partial<_62.ABCIQueryRequest>): _62.ABCIQueryRequest;
                    fromAmino(object: _62.ABCIQueryRequestAmino): _62.ABCIQueryRequest;
                    toAmino(message: _62.ABCIQueryRequest): _62.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _62.ABCIQueryRequestAminoMsg): _62.ABCIQueryRequest;
                    toAminoMsg(message: _62.ABCIQueryRequest): _62.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _62.ABCIQueryRequestProtoMsg): _62.ABCIQueryRequest;
                    toProto(message: _62.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _62.ABCIQueryRequest): _62.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _62.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ABCIQueryResponse;
                    fromPartial(object: Partial<_62.ABCIQueryResponse>): _62.ABCIQueryResponse;
                    fromAmino(object: _62.ABCIQueryResponseAmino): _62.ABCIQueryResponse;
                    toAmino(message: _62.ABCIQueryResponse): _62.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _62.ABCIQueryResponseAminoMsg): _62.ABCIQueryResponse;
                    toAminoMsg(message: _62.ABCIQueryResponse): _62.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _62.ABCIQueryResponseProtoMsg): _62.ABCIQueryResponse;
                    toProto(message: _62.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _62.ABCIQueryResponse): _62.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _62.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ProofOp;
                    fromPartial(object: Partial<_62.ProofOp>): _62.ProofOp;
                    fromAmino(object: _62.ProofOpAmino): _62.ProofOp;
                    toAmino(message: _62.ProofOp): _62.ProofOpAmino;
                    fromAminoMsg(object: _62.ProofOpAminoMsg): _62.ProofOp;
                    toAminoMsg(message: _62.ProofOp): _62.ProofOpAminoMsg;
                    fromProtoMsg(message: _62.ProofOpProtoMsg): _62.ProofOp;
                    toProto(message: _62.ProofOp): Uint8Array;
                    toProtoMsg(message: _62.ProofOp): _62.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _62.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.ProofOps;
                    fromPartial(object: Partial<_62.ProofOps>): _62.ProofOps;
                    fromAmino(object: _62.ProofOpsAmino): _62.ProofOps;
                    toAmino(message: _62.ProofOps): _62.ProofOpsAmino;
                    fromAminoMsg(object: _62.ProofOpsAminoMsg): _62.ProofOps;
                    toAminoMsg(message: _62.ProofOps): _62.ProofOpsAminoMsg;
                    fromProtoMsg(message: _62.ProofOpsProtoMsg): _62.ProofOps;
                    toProto(message: _62.ProofOps): Uint8Array;
                    toProtoMsg(message: _62.ProofOps): _62.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _64.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Coin;
                fromPartial(object: Partial<_64.Coin>): _64.Coin;
                fromAmino(object: _64.CoinAmino): _64.Coin;
                toAmino(message: _64.Coin): _64.CoinAmino;
                fromAminoMsg(object: _64.CoinAminoMsg): _64.Coin;
                toAminoMsg(message: _64.Coin): _64.CoinAminoMsg;
                fromProtoMsg(message: _64.CoinProtoMsg): _64.Coin;
                toProto(message: _64.Coin): Uint8Array;
                toProtoMsg(message: _64.Coin): _64.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _64.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DecCoin;
                fromPartial(object: Partial<_64.DecCoin>): _64.DecCoin;
                fromAmino(object: _64.DecCoinAmino): _64.DecCoin;
                toAmino(message: _64.DecCoin): _64.DecCoinAmino;
                fromAminoMsg(object: _64.DecCoinAminoMsg): _64.DecCoin;
                toAminoMsg(message: _64.DecCoin): _64.DecCoinAminoMsg;
                fromProtoMsg(message: _64.DecCoinProtoMsg): _64.DecCoin;
                toProto(message: _64.DecCoin): Uint8Array;
                toProtoMsg(message: _64.DecCoin): _64.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _64.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.IntProto;
                fromPartial(object: Partial<_64.IntProto>): _64.IntProto;
                fromAmino(object: _64.IntProtoAmino): _64.IntProto;
                toAmino(message: _64.IntProto): _64.IntProtoAmino;
                fromAminoMsg(object: _64.IntProtoAminoMsg): _64.IntProto;
                toAminoMsg(message: _64.IntProto): _64.IntProtoAminoMsg;
                fromProtoMsg(message: _64.IntProtoProtoMsg): _64.IntProto;
                toProto(message: _64.IntProto): Uint8Array;
                toProtoMsg(message: _64.IntProto): _64.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _64.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DecProto;
                fromPartial(object: Partial<_64.DecProto>): _64.DecProto;
                fromAmino(object: _64.DecProtoAmino): _64.DecProto;
                toAmino(message: _64.DecProto): _64.DecProtoAmino;
                fromAminoMsg(object: _64.DecProtoAminoMsg): _64.DecProto;
                toAminoMsg(message: _64.DecProto): _64.DecProtoAminoMsg;
                fromProtoMsg(message: _64.DecProtoProtoMsg): _64.DecProto;
                toProto(message: _64.DecProto): Uint8Array;
                toProtoMsg(message: _64.DecProto): _64.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _65.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.Module;
                    fromPartial(object: Partial<_65.Module>): _65.Module;
                    fromAmino(object: _65.ModuleAmino): _65.Module;
                    toAmino(message: _65.Module): _65.ModuleAmino;
                    fromAminoMsg(object: _65.ModuleAminoMsg): _65.Module;
                    toAminoMsg(message: _65.Module): _65.ModuleAminoMsg;
                    fromProtoMsg(message: _65.ModuleProtoMsg): _65.Module;
                    toProto(message: _65.Module): Uint8Array;
                    toProtoMsg(message: _65.Module): _65.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _67.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.GenesisOwners;
                fromPartial(object: Partial<_67.GenesisOwners>): _67.GenesisOwners;
                fromAmino(object: _67.GenesisOwnersAmino): _67.GenesisOwners;
                toAmino(message: _67.GenesisOwners): _67.GenesisOwnersAmino;
                fromAminoMsg(object: _67.GenesisOwnersAminoMsg): _67.GenesisOwners;
                toAminoMsg(message: _67.GenesisOwners): _67.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _67.GenesisOwnersProtoMsg): _67.GenesisOwners;
                toProto(message: _67.GenesisOwners): Uint8Array;
                toProtoMsg(message: _67.GenesisOwners): _67.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _66.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Capability;
                fromPartial(object: Partial<_66.Capability>): _66.Capability;
                fromAmino(object: _66.CapabilityAmino): _66.Capability;
                toAmino(message: _66.Capability): _66.CapabilityAmino;
                fromAminoMsg(object: _66.CapabilityAminoMsg): _66.Capability;
                toAminoMsg(message: _66.Capability): _66.CapabilityAminoMsg;
                fromProtoMsg(message: _66.CapabilityProtoMsg): _66.Capability;
                toProto(message: _66.Capability): Uint8Array;
                toProtoMsg(message: _66.Capability): _66.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _66.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Owner;
                fromPartial(object: Partial<_66.Owner>): _66.Owner;
                fromAmino(object: _66.OwnerAmino): _66.Owner;
                toAmino(message: _66.Owner): _66.OwnerAmino;
                fromAminoMsg(object: _66.OwnerAminoMsg): _66.Owner;
                toAminoMsg(message: _66.Owner): _66.OwnerAminoMsg;
                fromProtoMsg(message: _66.OwnerProtoMsg): _66.Owner;
                toProto(message: _66.Owner): Uint8Array;
                toProtoMsg(message: _66.Owner): _66.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _66.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.CapabilityOwners;
                fromPartial(object: Partial<_66.CapabilityOwners>): _66.CapabilityOwners;
                fromAmino(object: _66.CapabilityOwnersAmino): _66.CapabilityOwners;
                toAmino(message: _66.CapabilityOwners): _66.CapabilityOwnersAmino;
                fromAminoMsg(object: _66.CapabilityOwnersAminoMsg): _66.CapabilityOwners;
                toAminoMsg(message: _66.CapabilityOwners): _66.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _66.CapabilityOwnersProtoMsg): _66.CapabilityOwners;
                toProto(message: _66.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _66.CapabilityOwners): _66.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
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
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _70.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _70.MsgUpdateParams): {
                        typeUrl: string;
                        value: _70.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _70.MsgUpdateParams): {
                        typeUrl: string;
                        value: _70.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _70.MsgUpdateParams) => _70.MsgUpdateParamsAmino;
                    fromAmino: (object: _70.MsgUpdateParamsAmino) => _70.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _70.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.MsgUpdateParams;
                fromPartial(object: Partial<_70.MsgUpdateParams>): _70.MsgUpdateParams;
                fromAmino(object: _70.MsgUpdateParamsAmino): _70.MsgUpdateParams;
                toAmino(message: _70.MsgUpdateParams): _70.MsgUpdateParamsAmino;
                fromAminoMsg(object: _70.MsgUpdateParamsAminoMsg): _70.MsgUpdateParams;
                toAminoMsg(message: _70.MsgUpdateParams): _70.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateParamsProtoMsg): _70.MsgUpdateParams;
                toProto(message: _70.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateParams): _70.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _70.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_70.MsgUpdateParamsResponse>): _70.MsgUpdateParamsResponse;
                fromAmino(_: _70.MsgUpdateParamsResponseAmino): _70.MsgUpdateParamsResponse;
                toAmino(_: _70.MsgUpdateParamsResponse): _70.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _70.MsgUpdateParamsResponseAminoMsg): _70.MsgUpdateParamsResponse;
                toAminoMsg(message: _70.MsgUpdateParamsResponse): _70.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _70.MsgUpdateParamsResponseProtoMsg): _70.MsgUpdateParamsResponse;
                toProto(message: _70.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _70.MsgUpdateParamsResponse): _70.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _69.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _69.QueryParamsRequest;
                fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
                fromAmino(_: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
                toAmino(_: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
                fromAminoMsg(object: _69.QueryParamsRequestAminoMsg): _69.QueryParamsRequest;
                toAminoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryParamsRequestProtoMsg): _69.QueryParamsRequest;
                toProto(message: _69.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _69.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryParamsResponse;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
                fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
                toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
                fromAminoMsg(object: _69.QueryParamsResponseAminoMsg): _69.QueryParamsResponse;
                toAminoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryParamsResponseProtoMsg): _69.QueryParamsResponse;
                toProto(message: _69.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _71.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _71.Module;
                    fromPartial(object: Partial<_71.Module>): _71.Module;
                    fromAmino(object: _71.ModuleAmino): _71.Module;
                    toAmino(message: _71.Module): _71.ModuleAmino;
                    fromAminoMsg(object: _71.ModuleAminoMsg): _71.Module;
                    toAminoMsg(message: _71.Module): _71.ModuleAminoMsg;
                    fromProtoMsg(message: _71.ModuleProtoMsg): _71.Module;
                    toProto(message: _71.Module): Uint8Array;
                    toProtoMsg(message: _71.Module): _71.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _73.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _73.MsgVerifyInvariant;
                    };
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVerifyInvariant) => _73.MsgVerifyInvariantAmino;
                    fromAmino: (object: _73.MsgVerifyInvariantAmino) => _73.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _73.MsgUpdateParams) => _73.MsgUpdateParamsAmino;
                    fromAmino: (object: _73.MsgUpdateParamsAmino) => _73.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _73.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgVerifyInvariant;
                fromPartial(object: Partial<_73.MsgVerifyInvariant>): _73.MsgVerifyInvariant;
                fromAmino(object: _73.MsgVerifyInvariantAmino): _73.MsgVerifyInvariant;
                toAmino(message: _73.MsgVerifyInvariant): _73.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _73.MsgVerifyInvariantAminoMsg): _73.MsgVerifyInvariant;
                toAminoMsg(message: _73.MsgVerifyInvariant): _73.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _73.MsgVerifyInvariantProtoMsg): _73.MsgVerifyInvariant;
                toProto(message: _73.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _73.MsgVerifyInvariant): _73.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _73.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_73.MsgVerifyInvariantResponse>): _73.MsgVerifyInvariantResponse;
                fromAmino(_: _73.MsgVerifyInvariantResponseAmino): _73.MsgVerifyInvariantResponse;
                toAmino(_: _73.MsgVerifyInvariantResponse): _73.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _73.MsgVerifyInvariantResponseAminoMsg): _73.MsgVerifyInvariantResponse;
                toAminoMsg(message: _73.MsgVerifyInvariantResponse): _73.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _73.MsgVerifyInvariantResponseProtoMsg): _73.MsgVerifyInvariantResponse;
                toProto(message: _73.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _73.MsgVerifyInvariantResponse): _73.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _73.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.MsgUpdateParams;
                fromPartial(object: Partial<_73.MsgUpdateParams>): _73.MsgUpdateParams;
                fromAmino(object: _73.MsgUpdateParamsAmino): _73.MsgUpdateParams;
                toAmino(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsAminoMsg): _73.MsgUpdateParams;
                toAminoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsProtoMsg): _73.MsgUpdateParams;
                toProto(message: _73.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _73.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _73.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_73.MsgUpdateParamsResponse>): _73.MsgUpdateParamsResponse;
                fromAmino(_: _73.MsgUpdateParamsResponseAmino): _73.MsgUpdateParamsResponse;
                toAmino(_: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsResponseAminoMsg): _73.MsgUpdateParamsResponse;
                toAminoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsResponseProtoMsg): _73.MsgUpdateParamsResponse;
                toProto(message: _73.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _74.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.PubKey;
                fromPartial(object: Partial<_74.PubKey>): _74.PubKey;
                fromAmino(object: _74.PubKeyAmino): _74.PubKey;
                toAmino(message: _74.PubKey): _74.PubKeyAmino;
                fromAminoMsg(object: _74.PubKeyAminoMsg): _74.PubKey;
                toAminoMsg(message: _74.PubKey): _74.PubKeyAminoMsg;
                fromProtoMsg(message: _74.PubKeyProtoMsg): _74.PubKey;
                toProto(message: _74.PubKey): Uint8Array;
                toProtoMsg(message: _74.PubKey): _74.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _74.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.PrivKey;
                fromPartial(object: Partial<_74.PrivKey>): _74.PrivKey;
                fromAmino(object: _74.PrivKeyAmino): _74.PrivKey;
                toAmino(message: _74.PrivKey): _74.PrivKeyAmino;
                fromAminoMsg(object: _74.PrivKeyAminoMsg): _74.PrivKey;
                toAminoMsg(message: _74.PrivKey): _74.PrivKeyAminoMsg;
                fromProtoMsg(message: _74.PrivKeyProtoMsg): _74.PrivKey;
                toProto(message: _74.PrivKey): Uint8Array;
                toProtoMsg(message: _74.PrivKey): _74.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _75.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _75.BIP44Params;
                    fromPartial(object: Partial<_75.BIP44Params>): _75.BIP44Params;
                    fromAmino(object: _75.BIP44ParamsAmino): _75.BIP44Params;
                    toAmino(message: _75.BIP44Params): _75.BIP44ParamsAmino;
                    fromAminoMsg(object: _75.BIP44ParamsAminoMsg): _75.BIP44Params;
                    toAminoMsg(message: _75.BIP44Params): _75.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _75.BIP44ParamsProtoMsg): _75.BIP44Params;
                    toProto(message: _75.BIP44Params): Uint8Array;
                    toProtoMsg(message: _75.BIP44Params): _75.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _76.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.Record;
                    fromPartial(object: Partial<_76.Record>): _76.Record;
                    fromAmino(object: _76.RecordAmino): _76.Record;
                    toAmino(message: _76.Record): _76.RecordAmino;
                    fromAminoMsg(object: _76.RecordAminoMsg): _76.Record;
                    toAminoMsg(message: _76.Record): _76.RecordAminoMsg;
                    fromProtoMsg(message: _76.RecordProtoMsg): _76.Record;
                    toProto(message: _76.Record): Uint8Array;
                    toProtoMsg(message: _76.Record): _76.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _76.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.Record_Local;
                    fromPartial(object: Partial<_76.Record_Local>): _76.Record_Local;
                    fromAmino(object: _76.Record_LocalAmino): _76.Record_Local;
                    toAmino(message: _76.Record_Local): _76.Record_LocalAmino;
                    fromAminoMsg(object: _76.Record_LocalAminoMsg): _76.Record_Local;
                    toAminoMsg(message: _76.Record_Local): _76.Record_LocalAminoMsg;
                    fromProtoMsg(message: _76.Record_LocalProtoMsg): _76.Record_Local;
                    toProto(message: _76.Record_Local): Uint8Array;
                    toProtoMsg(message: _76.Record_Local): _76.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _76.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.Record_Ledger;
                    fromPartial(object: Partial<_76.Record_Ledger>): _76.Record_Ledger;
                    fromAmino(object: _76.Record_LedgerAmino): _76.Record_Ledger;
                    toAmino(message: _76.Record_Ledger): _76.Record_LedgerAmino;
                    fromAminoMsg(object: _76.Record_LedgerAminoMsg): _76.Record_Ledger;
                    toAminoMsg(message: _76.Record_Ledger): _76.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _76.Record_LedgerProtoMsg): _76.Record_Ledger;
                    toProto(message: _76.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _76.Record_Ledger): _76.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _76.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _76.Record_Multi;
                    fromPartial(_: Partial<_76.Record_Multi>): _76.Record_Multi;
                    fromAmino(_: _76.Record_MultiAmino): _76.Record_Multi;
                    toAmino(_: _76.Record_Multi): _76.Record_MultiAmino;
                    fromAminoMsg(object: _76.Record_MultiAminoMsg): _76.Record_Multi;
                    toAminoMsg(message: _76.Record_Multi): _76.Record_MultiAminoMsg;
                    fromProtoMsg(message: _76.Record_MultiProtoMsg): _76.Record_Multi;
                    toProto(message: _76.Record_Multi): Uint8Array;
                    toProtoMsg(message: _76.Record_Multi): _76.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _76.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _76.Record_Offline;
                    fromPartial(_: Partial<_76.Record_Offline>): _76.Record_Offline;
                    fromAmino(_: _76.Record_OfflineAmino): _76.Record_Offline;
                    toAmino(_: _76.Record_Offline): _76.Record_OfflineAmino;
                    fromAminoMsg(object: _76.Record_OfflineAminoMsg): _76.Record_Offline;
                    toAminoMsg(message: _76.Record_Offline): _76.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _76.Record_OfflineProtoMsg): _76.Record_Offline;
                    toProto(message: _76.Record_Offline): Uint8Array;
                    toProtoMsg(message: _76.Record_Offline): _76.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _77.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.LegacyAminoPubKey;
                fromPartial(object: Partial<_77.LegacyAminoPubKey>): _77.LegacyAminoPubKey;
                fromAmino(object: _77.LegacyAminoPubKeyAmino): _77.LegacyAminoPubKey;
                toAmino(message: _77.LegacyAminoPubKey): _77.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _77.LegacyAminoPubKeyAminoMsg): _77.LegacyAminoPubKey;
                toAminoMsg(message: _77.LegacyAminoPubKey): _77.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _77.LegacyAminoPubKeyProtoMsg): _77.LegacyAminoPubKey;
                toProto(message: _77.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _77.LegacyAminoPubKey): _77.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _78.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PubKey;
                fromPartial(object: Partial<_78.PubKey>): _78.PubKey;
                fromAmino(object: _78.PubKeyAmino): _78.PubKey;
                toAmino(message: _78.PubKey): _78.PubKeyAmino;
                fromAminoMsg(object: _78.PubKeyAminoMsg): _78.PubKey;
                toAminoMsg(message: _78.PubKey): _78.PubKeyAminoMsg;
                fromProtoMsg(message: _78.PubKeyProtoMsg): _78.PubKey;
                toProto(message: _78.PubKey): Uint8Array;
                toProtoMsg(message: _78.PubKey): _78.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _78.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PrivKey;
                fromPartial(object: Partial<_78.PrivKey>): _78.PrivKey;
                fromAmino(object: _78.PrivKeyAmino): _78.PrivKey;
                toAmino(message: _78.PrivKey): _78.PrivKeyAmino;
                fromAminoMsg(object: _78.PrivKeyAminoMsg): _78.PrivKey;
                toAminoMsg(message: _78.PrivKey): _78.PrivKeyAminoMsg;
                fromProtoMsg(message: _78.PrivKeyProtoMsg): _78.PrivKey;
                toProto(message: _78.PrivKey): Uint8Array;
                toProtoMsg(message: _78.PrivKey): _78.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _79.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.PubKey;
                fromPartial(object: Partial<_79.PubKey>): _79.PubKey;
                fromAmino(object: _79.PubKeyAmino): _79.PubKey;
                toAmino(message: _79.PubKey): _79.PubKeyAmino;
                fromAminoMsg(object: _79.PubKeyAminoMsg): _79.PubKey;
                toAminoMsg(message: _79.PubKey): _79.PubKeyAminoMsg;
                fromProtoMsg(message: _79.PubKeyProtoMsg): _79.PubKey;
                toProto(message: _79.PubKey): Uint8Array;
                toProtoMsg(message: _79.PubKey): _79.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _79.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.PrivKey;
                fromPartial(object: Partial<_79.PrivKey>): _79.PrivKey;
                fromAmino(object: _79.PrivKeyAmino): _79.PrivKey;
                toAmino(message: _79.PrivKey): _79.PrivKeyAmino;
                fromAminoMsg(object: _79.PrivKeyAminoMsg): _79.PrivKey;
                toAminoMsg(message: _79.PrivKey): _79.PrivKeyAminoMsg;
                fromProtoMsg(message: _79.PrivKeyProtoMsg): _79.PrivKey;
                toProto(message: _79.PrivKey): Uint8Array;
                toProtoMsg(message: _79.PrivKey): _79.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _80.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _80.Module;
                    fromPartial(object: Partial<_80.Module>): _80.Module;
                    fromAmino(object: _80.ModuleAmino): _80.Module;
                    toAmino(message: _80.Module): _80.ModuleAmino;
                    fromAminoMsg(object: _80.ModuleAminoMsg): _80.Module;
                    toAminoMsg(message: _80.Module): _80.ModuleAminoMsg;
                    fromProtoMsg(message: _80.ModuleProtoMsg): _80.Module;
                    toProto(message: _80.Module): Uint8Array;
                    toProtoMsg(message: _80.Module): _80.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                validatorDistributionInfo(request: _83.QueryValidatorDistributionInfoRequest): Promise<_83.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _83.QueryValidatorOutstandingRewardsRequest): Promise<_83.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _83.QueryValidatorCommissionRequest): Promise<_83.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _83.QueryValidatorSlashesRequest): Promise<_83.QueryValidatorSlashesResponse>;
                delegationRewards(request: _83.QueryDelegationRewardsRequest): Promise<_83.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _83.QueryDelegationTotalRewardsRequest): Promise<_83.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _83.QueryDelegatorWithdrawAddressRequest): Promise<_83.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _83.QueryCommunityPoolRequest): Promise<_83.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _84.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _84.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _84.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _84.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _84.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _84.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _84.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _84.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _84.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _84.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _84.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _84.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _84.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _84.MsgFundCommunityPool;
                    };
                    updateParams(value: _84.MsgUpdateParams): {
                        typeUrl: string;
                        value: _84.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _84.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _84.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _84.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _84.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _84.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _84.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _84.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _84.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _84.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _84.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _84.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _84.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _84.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _84.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _84.MsgFundCommunityPool;
                    };
                    updateParams(value: _84.MsgUpdateParams): {
                        typeUrl: string;
                        value: _84.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _84.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _84.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _84.MsgSetWithdrawAddress) => _84.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _84.MsgSetWithdrawAddressAmino) => _84.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _84.MsgWithdrawDelegatorReward) => _84.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _84.MsgWithdrawDelegatorRewardAmino) => _84.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _84.MsgWithdrawValidatorCommission) => _84.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _84.MsgWithdrawValidatorCommissionAmino) => _84.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _84.MsgFundCommunityPool) => _84.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _84.MsgFundCommunityPoolAmino) => _84.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateParams) => _84.MsgUpdateParamsAmino;
                    fromAmino: (object: _84.MsgUpdateParamsAmino) => _84.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _84.MsgCommunityPoolSpend) => _84.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _84.MsgCommunityPoolSpendAmino) => _84.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _84.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_84.MsgSetWithdrawAddress>): _84.MsgSetWithdrawAddress;
                fromAmino(object: _84.MsgSetWithdrawAddressAmino): _84.MsgSetWithdrawAddress;
                toAmino(message: _84.MsgSetWithdrawAddress): _84.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _84.MsgSetWithdrawAddressAminoMsg): _84.MsgSetWithdrawAddress;
                toAminoMsg(message: _84.MsgSetWithdrawAddress): _84.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _84.MsgSetWithdrawAddressProtoMsg): _84.MsgSetWithdrawAddress;
                toProto(message: _84.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _84.MsgSetWithdrawAddress): _84.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _84.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_84.MsgSetWithdrawAddressResponse>): _84.MsgSetWithdrawAddressResponse;
                fromAmino(_: _84.MsgSetWithdrawAddressResponseAmino): _84.MsgSetWithdrawAddressResponse;
                toAmino(_: _84.MsgSetWithdrawAddressResponse): _84.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _84.MsgSetWithdrawAddressResponseAminoMsg): _84.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _84.MsgSetWithdrawAddressResponse): _84.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _84.MsgSetWithdrawAddressResponseProtoMsg): _84.MsgSetWithdrawAddressResponse;
                toProto(message: _84.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _84.MsgSetWithdrawAddressResponse): _84.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_84.MsgWithdrawDelegatorReward>): _84.MsgWithdrawDelegatorReward;
                fromAmino(object: _84.MsgWithdrawDelegatorRewardAmino): _84.MsgWithdrawDelegatorReward;
                toAmino(message: _84.MsgWithdrawDelegatorReward): _84.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _84.MsgWithdrawDelegatorRewardAminoMsg): _84.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _84.MsgWithdrawDelegatorReward): _84.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawDelegatorRewardProtoMsg): _84.MsgWithdrawDelegatorReward;
                toProto(message: _84.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawDelegatorReward): _84.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_84.MsgWithdrawDelegatorRewardResponse>): _84.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _84.MsgWithdrawDelegatorRewardResponseAmino): _84.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _84.MsgWithdrawDelegatorRewardResponse): _84.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _84.MsgWithdrawDelegatorRewardResponseAminoMsg): _84.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _84.MsgWithdrawDelegatorRewardResponse): _84.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawDelegatorRewardResponseProtoMsg): _84.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _84.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawDelegatorRewardResponse): _84.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_84.MsgWithdrawValidatorCommission>): _84.MsgWithdrawValidatorCommission;
                fromAmino(object: _84.MsgWithdrawValidatorCommissionAmino): _84.MsgWithdrawValidatorCommission;
                toAmino(message: _84.MsgWithdrawValidatorCommission): _84.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _84.MsgWithdrawValidatorCommissionAminoMsg): _84.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _84.MsgWithdrawValidatorCommission): _84.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawValidatorCommissionProtoMsg): _84.MsgWithdrawValidatorCommission;
                toProto(message: _84.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawValidatorCommission): _84.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_84.MsgWithdrawValidatorCommissionResponse>): _84.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _84.MsgWithdrawValidatorCommissionResponseAmino): _84.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _84.MsgWithdrawValidatorCommissionResponse): _84.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _84.MsgWithdrawValidatorCommissionResponseAminoMsg): _84.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _84.MsgWithdrawValidatorCommissionResponse): _84.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawValidatorCommissionResponseProtoMsg): _84.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _84.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawValidatorCommissionResponse): _84.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _84.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgFundCommunityPool;
                fromPartial(object: Partial<_84.MsgFundCommunityPool>): _84.MsgFundCommunityPool;
                fromAmino(object: _84.MsgFundCommunityPoolAmino): _84.MsgFundCommunityPool;
                toAmino(message: _84.MsgFundCommunityPool): _84.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _84.MsgFundCommunityPoolAminoMsg): _84.MsgFundCommunityPool;
                toAminoMsg(message: _84.MsgFundCommunityPool): _84.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _84.MsgFundCommunityPoolProtoMsg): _84.MsgFundCommunityPool;
                toProto(message: _84.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _84.MsgFundCommunityPool): _84.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _84.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_84.MsgFundCommunityPoolResponse>): _84.MsgFundCommunityPoolResponse;
                fromAmino(_: _84.MsgFundCommunityPoolResponseAmino): _84.MsgFundCommunityPoolResponse;
                toAmino(_: _84.MsgFundCommunityPoolResponse): _84.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _84.MsgFundCommunityPoolResponseAminoMsg): _84.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _84.MsgFundCommunityPoolResponse): _84.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _84.MsgFundCommunityPoolResponseProtoMsg): _84.MsgFundCommunityPoolResponse;
                toProto(message: _84.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _84.MsgFundCommunityPoolResponse): _84.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _84.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgUpdateParams;
                fromPartial(object: Partial<_84.MsgUpdateParams>): _84.MsgUpdateParams;
                fromAmino(object: _84.MsgUpdateParamsAmino): _84.MsgUpdateParams;
                toAmino(message: _84.MsgUpdateParams): _84.MsgUpdateParamsAmino;
                fromAminoMsg(object: _84.MsgUpdateParamsAminoMsg): _84.MsgUpdateParams;
                toAminoMsg(message: _84.MsgUpdateParams): _84.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateParamsProtoMsg): _84.MsgUpdateParams;
                toProto(message: _84.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateParams): _84.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_84.MsgUpdateParamsResponse>): _84.MsgUpdateParamsResponse;
                fromAmino(_: _84.MsgUpdateParamsResponseAmino): _84.MsgUpdateParamsResponse;
                toAmino(_: _84.MsgUpdateParamsResponse): _84.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateParamsResponseAminoMsg): _84.MsgUpdateParamsResponse;
                toAminoMsg(message: _84.MsgUpdateParamsResponse): _84.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateParamsResponseProtoMsg): _84.MsgUpdateParamsResponse;
                toProto(message: _84.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateParamsResponse): _84.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _84.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_84.MsgCommunityPoolSpend>): _84.MsgCommunityPoolSpend;
                fromAmino(object: _84.MsgCommunityPoolSpendAmino): _84.MsgCommunityPoolSpend;
                toAmino(message: _84.MsgCommunityPoolSpend): _84.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _84.MsgCommunityPoolSpendAminoMsg): _84.MsgCommunityPoolSpend;
                toAminoMsg(message: _84.MsgCommunityPoolSpend): _84.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _84.MsgCommunityPoolSpendProtoMsg): _84.MsgCommunityPoolSpend;
                toProto(message: _84.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _84.MsgCommunityPoolSpend): _84.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _84.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_84.MsgCommunityPoolSpendResponse>): _84.MsgCommunityPoolSpendResponse;
                fromAmino(_: _84.MsgCommunityPoolSpendResponseAmino): _84.MsgCommunityPoolSpendResponse;
                toAmino(_: _84.MsgCommunityPoolSpendResponse): _84.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _84.MsgCommunityPoolSpendResponseAminoMsg): _84.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _84.MsgCommunityPoolSpendResponse): _84.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _84.MsgCommunityPoolSpendResponseProtoMsg): _84.MsgCommunityPoolSpendResponse;
                toProto(message: _84.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _84.MsgCommunityPoolSpendResponse): _84.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryParamsRequest;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_83.QueryValidatorDistributionInfoRequest>): _83.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _83.QueryValidatorDistributionInfoRequestAmino): _83.QueryValidatorDistributionInfoRequest;
                toAmino(message: _83.QueryValidatorDistributionInfoRequest): _83.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorDistributionInfoRequestAminoMsg): _83.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _83.QueryValidatorDistributionInfoRequest): _83.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorDistributionInfoRequestProtoMsg): _83.QueryValidatorDistributionInfoRequest;
                toProto(message: _83.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorDistributionInfoRequest): _83.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_83.QueryValidatorDistributionInfoResponse>): _83.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _83.QueryValidatorDistributionInfoResponseAmino): _83.QueryValidatorDistributionInfoResponse;
                toAmino(message: _83.QueryValidatorDistributionInfoResponse): _83.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorDistributionInfoResponseAminoMsg): _83.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _83.QueryValidatorDistributionInfoResponse): _83.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorDistributionInfoResponseProtoMsg): _83.QueryValidatorDistributionInfoResponse;
                toProto(message: _83.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorDistributionInfoResponse): _83.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_83.QueryValidatorOutstandingRewardsRequest>): _83.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _83.QueryValidatorOutstandingRewardsRequestAmino): _83.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _83.QueryValidatorOutstandingRewardsRequest): _83.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorOutstandingRewardsRequestAminoMsg): _83.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _83.QueryValidatorOutstandingRewardsRequest): _83.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorOutstandingRewardsRequestProtoMsg): _83.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _83.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorOutstandingRewardsRequest): _83.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_83.QueryValidatorOutstandingRewardsResponse>): _83.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _83.QueryValidatorOutstandingRewardsResponseAmino): _83.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _83.QueryValidatorOutstandingRewardsResponse): _83.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorOutstandingRewardsResponseAminoMsg): _83.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _83.QueryValidatorOutstandingRewardsResponse): _83.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorOutstandingRewardsResponseProtoMsg): _83.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _83.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorOutstandingRewardsResponse): _83.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_83.QueryValidatorCommissionRequest>): _83.QueryValidatorCommissionRequest;
                fromAmino(object: _83.QueryValidatorCommissionRequestAmino): _83.QueryValidatorCommissionRequest;
                toAmino(message: _83.QueryValidatorCommissionRequest): _83.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorCommissionRequestAminoMsg): _83.QueryValidatorCommissionRequest;
                toAminoMsg(message: _83.QueryValidatorCommissionRequest): _83.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorCommissionRequestProtoMsg): _83.QueryValidatorCommissionRequest;
                toProto(message: _83.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorCommissionRequest): _83.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_83.QueryValidatorCommissionResponse>): _83.QueryValidatorCommissionResponse;
                fromAmino(object: _83.QueryValidatorCommissionResponseAmino): _83.QueryValidatorCommissionResponse;
                toAmino(message: _83.QueryValidatorCommissionResponse): _83.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorCommissionResponseAminoMsg): _83.QueryValidatorCommissionResponse;
                toAminoMsg(message: _83.QueryValidatorCommissionResponse): _83.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorCommissionResponseProtoMsg): _83.QueryValidatorCommissionResponse;
                toProto(message: _83.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorCommissionResponse): _83.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_83.QueryValidatorSlashesRequest>): _83.QueryValidatorSlashesRequest;
                fromAmino(object: _83.QueryValidatorSlashesRequestAmino): _83.QueryValidatorSlashesRequest;
                toAmino(message: _83.QueryValidatorSlashesRequest): _83.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorSlashesRequestAminoMsg): _83.QueryValidatorSlashesRequest;
                toAminoMsg(message: _83.QueryValidatorSlashesRequest): _83.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorSlashesRequestProtoMsg): _83.QueryValidatorSlashesRequest;
                toProto(message: _83.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorSlashesRequest): _83.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_83.QueryValidatorSlashesResponse>): _83.QueryValidatorSlashesResponse;
                fromAmino(object: _83.QueryValidatorSlashesResponseAmino): _83.QueryValidatorSlashesResponse;
                toAmino(message: _83.QueryValidatorSlashesResponse): _83.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorSlashesResponseAminoMsg): _83.QueryValidatorSlashesResponse;
                toAminoMsg(message: _83.QueryValidatorSlashesResponse): _83.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorSlashesResponseProtoMsg): _83.QueryValidatorSlashesResponse;
                toProto(message: _83.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorSlashesResponse): _83.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_83.QueryDelegationRewardsRequest>): _83.QueryDelegationRewardsRequest;
                fromAmino(object: _83.QueryDelegationRewardsRequestAmino): _83.QueryDelegationRewardsRequest;
                toAmino(message: _83.QueryDelegationRewardsRequest): _83.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegationRewardsRequestAminoMsg): _83.QueryDelegationRewardsRequest;
                toAminoMsg(message: _83.QueryDelegationRewardsRequest): _83.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationRewardsRequestProtoMsg): _83.QueryDelegationRewardsRequest;
                toProto(message: _83.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationRewardsRequest): _83.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_83.QueryDelegationRewardsResponse>): _83.QueryDelegationRewardsResponse;
                fromAmino(object: _83.QueryDelegationRewardsResponseAmino): _83.QueryDelegationRewardsResponse;
                toAmino(message: _83.QueryDelegationRewardsResponse): _83.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegationRewardsResponseAminoMsg): _83.QueryDelegationRewardsResponse;
                toAminoMsg(message: _83.QueryDelegationRewardsResponse): _83.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationRewardsResponseProtoMsg): _83.QueryDelegationRewardsResponse;
                toProto(message: _83.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationRewardsResponse): _83.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_83.QueryDelegationTotalRewardsRequest>): _83.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _83.QueryDelegationTotalRewardsRequestAmino): _83.QueryDelegationTotalRewardsRequest;
                toAmino(message: _83.QueryDelegationTotalRewardsRequest): _83.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegationTotalRewardsRequestAminoMsg): _83.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _83.QueryDelegationTotalRewardsRequest): _83.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationTotalRewardsRequestProtoMsg): _83.QueryDelegationTotalRewardsRequest;
                toProto(message: _83.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationTotalRewardsRequest): _83.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_83.QueryDelegationTotalRewardsResponse>): _83.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _83.QueryDelegationTotalRewardsResponseAmino): _83.QueryDelegationTotalRewardsResponse;
                toAmino(message: _83.QueryDelegationTotalRewardsResponse): _83.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegationTotalRewardsResponseAminoMsg): _83.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _83.QueryDelegationTotalRewardsResponse): _83.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationTotalRewardsResponseProtoMsg): _83.QueryDelegationTotalRewardsResponse;
                toProto(message: _83.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationTotalRewardsResponse): _83.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsRequest>): _83.QueryDelegatorValidatorsRequest;
                fromAmino(object: _83.QueryDelegatorValidatorsRequestAmino): _83.QueryDelegatorValidatorsRequest;
                toAmino(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorsRequestAminoMsg): _83.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorsRequestProtoMsg): _83.QueryDelegatorValidatorsRequest;
                toProto(message: _83.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsResponse>): _83.QueryDelegatorValidatorsResponse;
                fromAmino(object: _83.QueryDelegatorValidatorsResponseAmino): _83.QueryDelegatorValidatorsResponse;
                toAmino(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorsResponseAminoMsg): _83.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorsResponseProtoMsg): _83.QueryDelegatorValidatorsResponse;
                toProto(message: _83.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_83.QueryDelegatorWithdrawAddressRequest>): _83.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _83.QueryDelegatorWithdrawAddressRequestAmino): _83.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _83.QueryDelegatorWithdrawAddressRequest): _83.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorWithdrawAddressRequestAminoMsg): _83.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _83.QueryDelegatorWithdrawAddressRequest): _83.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorWithdrawAddressRequestProtoMsg): _83.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _83.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorWithdrawAddressRequest): _83.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_83.QueryDelegatorWithdrawAddressResponse>): _83.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _83.QueryDelegatorWithdrawAddressResponseAmino): _83.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _83.QueryDelegatorWithdrawAddressResponse): _83.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorWithdrawAddressResponseAminoMsg): _83.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _83.QueryDelegatorWithdrawAddressResponse): _83.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorWithdrawAddressResponseProtoMsg): _83.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _83.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorWithdrawAddressResponse): _83.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _83.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_83.QueryCommunityPoolRequest>): _83.QueryCommunityPoolRequest;
                fromAmino(_: _83.QueryCommunityPoolRequestAmino): _83.QueryCommunityPoolRequest;
                toAmino(_: _83.QueryCommunityPoolRequest): _83.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _83.QueryCommunityPoolRequestAminoMsg): _83.QueryCommunityPoolRequest;
                toAminoMsg(message: _83.QueryCommunityPoolRequest): _83.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _83.QueryCommunityPoolRequestProtoMsg): _83.QueryCommunityPoolRequest;
                toProto(message: _83.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _83.QueryCommunityPoolRequest): _83.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _83.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_83.QueryCommunityPoolResponse>): _83.QueryCommunityPoolResponse;
                fromAmino(object: _83.QueryCommunityPoolResponseAmino): _83.QueryCommunityPoolResponse;
                toAmino(message: _83.QueryCommunityPoolResponse): _83.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _83.QueryCommunityPoolResponseAminoMsg): _83.QueryCommunityPoolResponse;
                toAminoMsg(message: _83.QueryCommunityPoolResponse): _83.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _83.QueryCommunityPoolResponseProtoMsg): _83.QueryCommunityPoolResponse;
                toProto(message: _83.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _83.QueryCommunityPoolResponse): _83.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _82.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_82.DelegatorWithdrawInfo>): _82.DelegatorWithdrawInfo;
                fromAmino(object: _82.DelegatorWithdrawInfoAmino): _82.DelegatorWithdrawInfo;
                toAmino(message: _82.DelegatorWithdrawInfo): _82.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _82.DelegatorWithdrawInfoAminoMsg): _82.DelegatorWithdrawInfo;
                toAminoMsg(message: _82.DelegatorWithdrawInfo): _82.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _82.DelegatorWithdrawInfoProtoMsg): _82.DelegatorWithdrawInfo;
                toProto(message: _82.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _82.DelegatorWithdrawInfo): _82.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_82.ValidatorOutstandingRewardsRecord>): _82.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _82.ValidatorOutstandingRewardsRecordAmino): _82.ValidatorOutstandingRewardsRecord;
                toAmino(message: _82.ValidatorOutstandingRewardsRecord): _82.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _82.ValidatorOutstandingRewardsRecordAminoMsg): _82.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _82.ValidatorOutstandingRewardsRecord): _82.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorOutstandingRewardsRecordProtoMsg): _82.ValidatorOutstandingRewardsRecord;
                toProto(message: _82.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorOutstandingRewardsRecord): _82.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_82.ValidatorAccumulatedCommissionRecord>): _82.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _82.ValidatorAccumulatedCommissionRecordAmino): _82.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _82.ValidatorAccumulatedCommissionRecord): _82.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _82.ValidatorAccumulatedCommissionRecordAminoMsg): _82.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _82.ValidatorAccumulatedCommissionRecord): _82.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorAccumulatedCommissionRecordProtoMsg): _82.ValidatorAccumulatedCommissionRecord;
                toProto(message: _82.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorAccumulatedCommissionRecord): _82.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_82.ValidatorHistoricalRewardsRecord>): _82.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _82.ValidatorHistoricalRewardsRecordAmino): _82.ValidatorHistoricalRewardsRecord;
                toAmino(message: _82.ValidatorHistoricalRewardsRecord): _82.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _82.ValidatorHistoricalRewardsRecordAminoMsg): _82.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _82.ValidatorHistoricalRewardsRecord): _82.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorHistoricalRewardsRecordProtoMsg): _82.ValidatorHistoricalRewardsRecord;
                toProto(message: _82.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorHistoricalRewardsRecord): _82.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_82.ValidatorCurrentRewardsRecord>): _82.ValidatorCurrentRewardsRecord;
                fromAmino(object: _82.ValidatorCurrentRewardsRecordAmino): _82.ValidatorCurrentRewardsRecord;
                toAmino(message: _82.ValidatorCurrentRewardsRecord): _82.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _82.ValidatorCurrentRewardsRecordAminoMsg): _82.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _82.ValidatorCurrentRewardsRecord): _82.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorCurrentRewardsRecordProtoMsg): _82.ValidatorCurrentRewardsRecord;
                toProto(message: _82.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorCurrentRewardsRecord): _82.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _82.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_82.DelegatorStartingInfoRecord>): _82.DelegatorStartingInfoRecord;
                fromAmino(object: _82.DelegatorStartingInfoRecordAmino): _82.DelegatorStartingInfoRecord;
                toAmino(message: _82.DelegatorStartingInfoRecord): _82.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _82.DelegatorStartingInfoRecordAminoMsg): _82.DelegatorStartingInfoRecord;
                toAminoMsg(message: _82.DelegatorStartingInfoRecord): _82.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _82.DelegatorStartingInfoRecordProtoMsg): _82.DelegatorStartingInfoRecord;
                toProto(message: _82.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _82.DelegatorStartingInfoRecord): _82.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_82.ValidatorSlashEventRecord>): _82.ValidatorSlashEventRecord;
                fromAmino(object: _82.ValidatorSlashEventRecordAmino): _82.ValidatorSlashEventRecord;
                toAmino(message: _82.ValidatorSlashEventRecord): _82.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _82.ValidatorSlashEventRecordAminoMsg): _82.ValidatorSlashEventRecord;
                toAminoMsg(message: _82.ValidatorSlashEventRecord): _82.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorSlashEventRecordProtoMsg): _82.ValidatorSlashEventRecord;
                toProto(message: _82.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorSlashEventRecord): _82.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _81.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
                fromAmino(object: _81.ParamsAmino): _81.Params;
                toAmino(message: _81.Params): _81.ParamsAmino;
                fromAminoMsg(object: _81.ParamsAminoMsg): _81.Params;
                toAminoMsg(message: _81.Params): _81.ParamsAminoMsg;
                fromProtoMsg(message: _81.ParamsProtoMsg): _81.Params;
                toProto(message: _81.Params): Uint8Array;
                toProtoMsg(message: _81.Params): _81.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _81.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_81.ValidatorHistoricalRewards>): _81.ValidatorHistoricalRewards;
                fromAmino(object: _81.ValidatorHistoricalRewardsAmino): _81.ValidatorHistoricalRewards;
                toAmino(message: _81.ValidatorHistoricalRewards): _81.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _81.ValidatorHistoricalRewardsAminoMsg): _81.ValidatorHistoricalRewards;
                toAminoMsg(message: _81.ValidatorHistoricalRewards): _81.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _81.ValidatorHistoricalRewardsProtoMsg): _81.ValidatorHistoricalRewards;
                toProto(message: _81.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _81.ValidatorHistoricalRewards): _81.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _81.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorCurrentRewards;
                fromPartial(object: Partial<_81.ValidatorCurrentRewards>): _81.ValidatorCurrentRewards;
                fromAmino(object: _81.ValidatorCurrentRewardsAmino): _81.ValidatorCurrentRewards;
                toAmino(message: _81.ValidatorCurrentRewards): _81.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _81.ValidatorCurrentRewardsAminoMsg): _81.ValidatorCurrentRewards;
                toAminoMsg(message: _81.ValidatorCurrentRewards): _81.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _81.ValidatorCurrentRewardsProtoMsg): _81.ValidatorCurrentRewards;
                toProto(message: _81.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _81.ValidatorCurrentRewards): _81.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _81.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_81.ValidatorAccumulatedCommission>): _81.ValidatorAccumulatedCommission;
                fromAmino(object: _81.ValidatorAccumulatedCommissionAmino): _81.ValidatorAccumulatedCommission;
                toAmino(message: _81.ValidatorAccumulatedCommission): _81.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _81.ValidatorAccumulatedCommissionAminoMsg): _81.ValidatorAccumulatedCommission;
                toAminoMsg(message: _81.ValidatorAccumulatedCommission): _81.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _81.ValidatorAccumulatedCommissionProtoMsg): _81.ValidatorAccumulatedCommission;
                toProto(message: _81.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _81.ValidatorAccumulatedCommission): _81.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _81.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_81.ValidatorOutstandingRewards>): _81.ValidatorOutstandingRewards;
                fromAmino(object: _81.ValidatorOutstandingRewardsAmino): _81.ValidatorOutstandingRewards;
                toAmino(message: _81.ValidatorOutstandingRewards): _81.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _81.ValidatorOutstandingRewardsAminoMsg): _81.ValidatorOutstandingRewards;
                toAminoMsg(message: _81.ValidatorOutstandingRewards): _81.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _81.ValidatorOutstandingRewardsProtoMsg): _81.ValidatorOutstandingRewards;
                toProto(message: _81.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _81.ValidatorOutstandingRewards): _81.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _81.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorSlashEvent;
                fromPartial(object: Partial<_81.ValidatorSlashEvent>): _81.ValidatorSlashEvent;
                fromAmino(object: _81.ValidatorSlashEventAmino): _81.ValidatorSlashEvent;
                toAmino(message: _81.ValidatorSlashEvent): _81.ValidatorSlashEventAmino;
                fromAminoMsg(object: _81.ValidatorSlashEventAminoMsg): _81.ValidatorSlashEvent;
                toAminoMsg(message: _81.ValidatorSlashEvent): _81.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _81.ValidatorSlashEventProtoMsg): _81.ValidatorSlashEvent;
                toProto(message: _81.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _81.ValidatorSlashEvent): _81.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _81.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorSlashEvents;
                fromPartial(object: Partial<_81.ValidatorSlashEvents>): _81.ValidatorSlashEvents;
                fromAmino(object: _81.ValidatorSlashEventsAmino): _81.ValidatorSlashEvents;
                toAmino(message: _81.ValidatorSlashEvents): _81.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _81.ValidatorSlashEventsAminoMsg): _81.ValidatorSlashEvents;
                toAminoMsg(message: _81.ValidatorSlashEvents): _81.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _81.ValidatorSlashEventsProtoMsg): _81.ValidatorSlashEvents;
                toProto(message: _81.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _81.ValidatorSlashEvents): _81.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _81.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.FeePool;
                fromPartial(object: Partial<_81.FeePool>): _81.FeePool;
                fromAmino(object: _81.FeePoolAmino): _81.FeePool;
                toAmino(message: _81.FeePool): _81.FeePoolAmino;
                fromAminoMsg(object: _81.FeePoolAminoMsg): _81.FeePool;
                toAminoMsg(message: _81.FeePool): _81.FeePoolAminoMsg;
                fromProtoMsg(message: _81.FeePoolProtoMsg): _81.FeePool;
                toProto(message: _81.FeePool): Uint8Array;
                toProtoMsg(message: _81.FeePool): _81.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _81.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_81.CommunityPoolSpendProposal>): _81.CommunityPoolSpendProposal;
                fromAmino(object: _81.CommunityPoolSpendProposalAmino): _81.CommunityPoolSpendProposal;
                toAmino(message: _81.CommunityPoolSpendProposal): _81.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _81.CommunityPoolSpendProposalAminoMsg): _81.CommunityPoolSpendProposal;
                toAminoMsg(message: _81.CommunityPoolSpendProposal): _81.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _81.CommunityPoolSpendProposalProtoMsg): _81.CommunityPoolSpendProposal;
                toProto(message: _81.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _81.CommunityPoolSpendProposal): _81.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _81.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DelegatorStartingInfo;
                fromPartial(object: Partial<_81.DelegatorStartingInfo>): _81.DelegatorStartingInfo;
                fromAmino(object: _81.DelegatorStartingInfoAmino): _81.DelegatorStartingInfo;
                toAmino(message: _81.DelegatorStartingInfo): _81.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _81.DelegatorStartingInfoAminoMsg): _81.DelegatorStartingInfo;
                toAminoMsg(message: _81.DelegatorStartingInfo): _81.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _81.DelegatorStartingInfoProtoMsg): _81.DelegatorStartingInfo;
                toProto(message: _81.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _81.DelegatorStartingInfo): _81.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _81.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DelegationDelegatorReward;
                fromPartial(object: Partial<_81.DelegationDelegatorReward>): _81.DelegationDelegatorReward;
                fromAmino(object: _81.DelegationDelegatorRewardAmino): _81.DelegationDelegatorReward;
                toAmino(message: _81.DelegationDelegatorReward): _81.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _81.DelegationDelegatorRewardAminoMsg): _81.DelegationDelegatorReward;
                toAminoMsg(message: _81.DelegationDelegatorReward): _81.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _81.DelegationDelegatorRewardProtoMsg): _81.DelegationDelegatorReward;
                toProto(message: _81.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _81.DelegationDelegatorReward): _81.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _81.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_81.CommunityPoolSpendProposalWithDeposit>): _81.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _81.CommunityPoolSpendProposalWithDepositAmino): _81.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _81.CommunityPoolSpendProposalWithDeposit): _81.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _81.CommunityPoolSpendProposalWithDepositAminoMsg): _81.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _81.CommunityPoolSpendProposalWithDeposit): _81.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _81.CommunityPoolSpendProposalWithDepositProtoMsg): _81.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _81.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _81.CommunityPoolSpendProposalWithDeposit): _81.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _85.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _85.Module;
                    fromPartial(_: Partial<_85.Module>): _85.Module;
                    fromAmino(_: _85.ModuleAmino): _85.Module;
                    toAmino(_: _85.Module): _85.ModuleAmino;
                    fromAminoMsg(object: _85.ModuleAminoMsg): _85.Module;
                    toAminoMsg(message: _85.Module): _85.ModuleAminoMsg;
                    fromProtoMsg(message: _85.ModuleProtoMsg): _85.Module;
                    toProto(message: _85.Module): Uint8Array;
                    toProtoMsg(message: _85.Module): _85.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _88.QueryEvidenceRequest): Promise<_88.QueryEvidenceResponse>;
                allEvidence(request?: _88.QueryAllEvidenceRequest): Promise<_88.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _89.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _89.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _89.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _89.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _89.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _89.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _89.MsgSubmitEvidence) => _89.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _89.MsgSubmitEvidenceAmino) => _89.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _89.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSubmitEvidence;
                fromPartial(object: Partial<_89.MsgSubmitEvidence>): _89.MsgSubmitEvidence;
                fromAmino(object: _89.MsgSubmitEvidenceAmino): _89.MsgSubmitEvidence;
                toAmino(message: _89.MsgSubmitEvidence): _89.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _89.MsgSubmitEvidenceAminoMsg): _89.MsgSubmitEvidence;
                toAminoMsg(message: _89.MsgSubmitEvidence): _89.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _89.MsgSubmitEvidenceProtoMsg): _89.MsgSubmitEvidence;
                toProto(message: _89.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _89.MsgSubmitEvidence): _89.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _89.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_89.MsgSubmitEvidenceResponse>): _89.MsgSubmitEvidenceResponse;
                fromAmino(object: _89.MsgSubmitEvidenceResponseAmino): _89.MsgSubmitEvidenceResponse;
                toAmino(message: _89.MsgSubmitEvidenceResponse): _89.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _89.MsgSubmitEvidenceResponseAminoMsg): _89.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _89.MsgSubmitEvidenceResponse): _89.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _89.MsgSubmitEvidenceResponseProtoMsg): _89.MsgSubmitEvidenceResponse;
                toProto(message: _89.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _89.MsgSubmitEvidenceResponse): _89.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _88.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryEvidenceRequest;
                fromPartial(object: Partial<_88.QueryEvidenceRequest>): _88.QueryEvidenceRequest;
                fromAmino(object: _88.QueryEvidenceRequestAmino): _88.QueryEvidenceRequest;
                toAmino(message: _88.QueryEvidenceRequest): _88.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _88.QueryEvidenceRequestAminoMsg): _88.QueryEvidenceRequest;
                toAminoMsg(message: _88.QueryEvidenceRequest): _88.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _88.QueryEvidenceRequestProtoMsg): _88.QueryEvidenceRequest;
                toProto(message: _88.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _88.QueryEvidenceRequest): _88.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _88.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryEvidenceResponse;
                fromPartial(object: Partial<_88.QueryEvidenceResponse>): _88.QueryEvidenceResponse;
                fromAmino(object: _88.QueryEvidenceResponseAmino): _88.QueryEvidenceResponse;
                toAmino(message: _88.QueryEvidenceResponse): _88.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _88.QueryEvidenceResponseAminoMsg): _88.QueryEvidenceResponse;
                toAminoMsg(message: _88.QueryEvidenceResponse): _88.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _88.QueryEvidenceResponseProtoMsg): _88.QueryEvidenceResponse;
                toProto(message: _88.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _88.QueryEvidenceResponse): _88.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _88.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_88.QueryAllEvidenceRequest>): _88.QueryAllEvidenceRequest;
                fromAmino(object: _88.QueryAllEvidenceRequestAmino): _88.QueryAllEvidenceRequest;
                toAmino(message: _88.QueryAllEvidenceRequest): _88.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _88.QueryAllEvidenceRequestAminoMsg): _88.QueryAllEvidenceRequest;
                toAminoMsg(message: _88.QueryAllEvidenceRequest): _88.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _88.QueryAllEvidenceRequestProtoMsg): _88.QueryAllEvidenceRequest;
                toProto(message: _88.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _88.QueryAllEvidenceRequest): _88.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _88.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_88.QueryAllEvidenceResponse>): _88.QueryAllEvidenceResponse;
                fromAmino(object: _88.QueryAllEvidenceResponseAmino): _88.QueryAllEvidenceResponse;
                toAmino(message: _88.QueryAllEvidenceResponse): _88.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _88.QueryAllEvidenceResponseAminoMsg): _88.QueryAllEvidenceResponse;
                toAminoMsg(message: _88.QueryAllEvidenceResponse): _88.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _88.QueryAllEvidenceResponseProtoMsg): _88.QueryAllEvidenceResponse;
                toProto(message: _88.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _88.QueryAllEvidenceResponse): _88.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _86.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Equivocation;
                fromPartial(object: Partial<_86.Equivocation>): _86.Equivocation;
                fromAmino(object: _86.EquivocationAmino): _86.Equivocation;
                toAmino(message: _86.Equivocation): _86.EquivocationAmino;
                fromAminoMsg(object: _86.EquivocationAminoMsg): _86.Equivocation;
                toAminoMsg(message: _86.Equivocation): _86.EquivocationAminoMsg;
                fromProtoMsg(message: _86.EquivocationProtoMsg): _86.Equivocation;
                toProto(message: _86.Equivocation): Uint8Array;
                toProtoMsg(message: _86.Equivocation): _86.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _90.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.Module;
                    fromPartial(_: Partial<_90.Module>): _90.Module;
                    fromAmino(_: _90.ModuleAmino): _90.Module;
                    toAmino(_: _90.Module): _90.ModuleAmino;
                    fromAminoMsg(object: _90.ModuleAminoMsg): _90.Module;
                    toAminoMsg(message: _90.Module): _90.ModuleAminoMsg;
                    fromProtoMsg(message: _90.ModuleProtoMsg): _90.Module;
                    toProto(message: _90.Module): Uint8Array;
                    toProtoMsg(message: _90.Module): _90.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _93.QueryAllowanceRequest): Promise<_93.QueryAllowanceResponse>;
                allowances(request: _93.QueryAllowancesRequest): Promise<_93.QueryAllowancesResponse>;
                allowancesByGranter(request: _93.QueryAllowancesByGranterRequest): Promise<_93.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _94.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _94.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _94.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _94.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _94.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _94.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _94.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _94.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _94.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _94.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _94.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _94.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _94.MsgGrantAllowance) => _94.MsgGrantAllowanceAmino;
                    fromAmino: (object: _94.MsgGrantAllowanceAmino) => _94.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _94.MsgRevokeAllowance) => _94.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _94.MsgRevokeAllowanceAmino) => _94.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _94.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgGrantAllowance;
                fromPartial(object: Partial<_94.MsgGrantAllowance>): _94.MsgGrantAllowance;
                fromAmino(object: _94.MsgGrantAllowanceAmino): _94.MsgGrantAllowance;
                toAmino(message: _94.MsgGrantAllowance): _94.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _94.MsgGrantAllowanceAminoMsg): _94.MsgGrantAllowance;
                toAminoMsg(message: _94.MsgGrantAllowance): _94.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _94.MsgGrantAllowanceProtoMsg): _94.MsgGrantAllowance;
                toProto(message: _94.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _94.MsgGrantAllowance): _94.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _94.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_94.MsgGrantAllowanceResponse>): _94.MsgGrantAllowanceResponse;
                fromAmino(_: _94.MsgGrantAllowanceResponseAmino): _94.MsgGrantAllowanceResponse;
                toAmino(_: _94.MsgGrantAllowanceResponse): _94.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _94.MsgGrantAllowanceResponseAminoMsg): _94.MsgGrantAllowanceResponse;
                toAminoMsg(message: _94.MsgGrantAllowanceResponse): _94.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _94.MsgGrantAllowanceResponseProtoMsg): _94.MsgGrantAllowanceResponse;
                toProto(message: _94.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _94.MsgGrantAllowanceResponse): _94.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _94.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgRevokeAllowance;
                fromPartial(object: Partial<_94.MsgRevokeAllowance>): _94.MsgRevokeAllowance;
                fromAmino(object: _94.MsgRevokeAllowanceAmino): _94.MsgRevokeAllowance;
                toAmino(message: _94.MsgRevokeAllowance): _94.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _94.MsgRevokeAllowanceAminoMsg): _94.MsgRevokeAllowance;
                toAminoMsg(message: _94.MsgRevokeAllowance): _94.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _94.MsgRevokeAllowanceProtoMsg): _94.MsgRevokeAllowance;
                toProto(message: _94.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _94.MsgRevokeAllowance): _94.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _94.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_94.MsgRevokeAllowanceResponse>): _94.MsgRevokeAllowanceResponse;
                fromAmino(_: _94.MsgRevokeAllowanceResponseAmino): _94.MsgRevokeAllowanceResponse;
                toAmino(_: _94.MsgRevokeAllowanceResponse): _94.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _94.MsgRevokeAllowanceResponseAminoMsg): _94.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _94.MsgRevokeAllowanceResponse): _94.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _94.MsgRevokeAllowanceResponseProtoMsg): _94.MsgRevokeAllowanceResponse;
                toProto(message: _94.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _94.MsgRevokeAllowanceResponse): _94.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _91.BasicAllowance | _91.PeriodicAllowance | _91.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _93.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryAllowanceRequest;
                fromPartial(object: Partial<_93.QueryAllowanceRequest>): _93.QueryAllowanceRequest;
                fromAmino(object: _93.QueryAllowanceRequestAmino): _93.QueryAllowanceRequest;
                toAmino(message: _93.QueryAllowanceRequest): _93.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _93.QueryAllowanceRequestAminoMsg): _93.QueryAllowanceRequest;
                toAminoMsg(message: _93.QueryAllowanceRequest): _93.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _93.QueryAllowanceRequestProtoMsg): _93.QueryAllowanceRequest;
                toProto(message: _93.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAllowanceRequest): _93.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _93.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryAllowanceResponse;
                fromPartial(object: Partial<_93.QueryAllowanceResponse>): _93.QueryAllowanceResponse;
                fromAmino(object: _93.QueryAllowanceResponseAmino): _93.QueryAllowanceResponse;
                toAmino(message: _93.QueryAllowanceResponse): _93.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _93.QueryAllowanceResponseAminoMsg): _93.QueryAllowanceResponse;
                toAminoMsg(message: _93.QueryAllowanceResponse): _93.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _93.QueryAllowanceResponseProtoMsg): _93.QueryAllowanceResponse;
                toProto(message: _93.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAllowanceResponse): _93.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _93.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryAllowancesRequest;
                fromPartial(object: Partial<_93.QueryAllowancesRequest>): _93.QueryAllowancesRequest;
                fromAmino(object: _93.QueryAllowancesRequestAmino): _93.QueryAllowancesRequest;
                toAmino(message: _93.QueryAllowancesRequest): _93.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _93.QueryAllowancesRequestAminoMsg): _93.QueryAllowancesRequest;
                toAminoMsg(message: _93.QueryAllowancesRequest): _93.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _93.QueryAllowancesRequestProtoMsg): _93.QueryAllowancesRequest;
                toProto(message: _93.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAllowancesRequest): _93.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _93.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryAllowancesResponse;
                fromPartial(object: Partial<_93.QueryAllowancesResponse>): _93.QueryAllowancesResponse;
                fromAmino(object: _93.QueryAllowancesResponseAmino): _93.QueryAllowancesResponse;
                toAmino(message: _93.QueryAllowancesResponse): _93.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _93.QueryAllowancesResponseAminoMsg): _93.QueryAllowancesResponse;
                toAminoMsg(message: _93.QueryAllowancesResponse): _93.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _93.QueryAllowancesResponseProtoMsg): _93.QueryAllowancesResponse;
                toProto(message: _93.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAllowancesResponse): _93.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _93.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_93.QueryAllowancesByGranterRequest>): _93.QueryAllowancesByGranterRequest;
                fromAmino(object: _93.QueryAllowancesByGranterRequestAmino): _93.QueryAllowancesByGranterRequest;
                toAmino(message: _93.QueryAllowancesByGranterRequest): _93.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _93.QueryAllowancesByGranterRequestAminoMsg): _93.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _93.QueryAllowancesByGranterRequest): _93.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _93.QueryAllowancesByGranterRequestProtoMsg): _93.QueryAllowancesByGranterRequest;
                toProto(message: _93.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAllowancesByGranterRequest): _93.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _93.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_93.QueryAllowancesByGranterResponse>): _93.QueryAllowancesByGranterResponse;
                fromAmino(object: _93.QueryAllowancesByGranterResponseAmino): _93.QueryAllowancesByGranterResponse;
                toAmino(message: _93.QueryAllowancesByGranterResponse): _93.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _93.QueryAllowancesByGranterResponseAminoMsg): _93.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _93.QueryAllowancesByGranterResponse): _93.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _93.QueryAllowancesByGranterResponseProtoMsg): _93.QueryAllowancesByGranterResponse;
                toProto(message: _93.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAllowancesByGranterResponse): _93.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _91.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.BasicAllowance;
                fromPartial(object: Partial<_91.BasicAllowance>): _91.BasicAllowance;
                fromAmino(object: _91.BasicAllowanceAmino): _91.BasicAllowance;
                toAmino(message: _91.BasicAllowance): _91.BasicAllowanceAmino;
                fromAminoMsg(object: _91.BasicAllowanceAminoMsg): _91.BasicAllowance;
                toAminoMsg(message: _91.BasicAllowance): _91.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _91.BasicAllowanceProtoMsg): _91.BasicAllowance;
                toProto(message: _91.BasicAllowance): Uint8Array;
                toProtoMsg(message: _91.BasicAllowance): _91.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _91.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.PeriodicAllowance;
                fromPartial(object: Partial<_91.PeriodicAllowance>): _91.PeriodicAllowance;
                fromAmino(object: _91.PeriodicAllowanceAmino): _91.PeriodicAllowance;
                toAmino(message: _91.PeriodicAllowance): _91.PeriodicAllowanceAmino;
                fromAminoMsg(object: _91.PeriodicAllowanceAminoMsg): _91.PeriodicAllowance;
                toAminoMsg(message: _91.PeriodicAllowance): _91.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _91.PeriodicAllowanceProtoMsg): _91.PeriodicAllowance;
                toProto(message: _91.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _91.PeriodicAllowance): _91.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _91.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.AllowedMsgAllowance;
                fromPartial(object: Partial<_91.AllowedMsgAllowance>): _91.AllowedMsgAllowance;
                fromAmino(object: _91.AllowedMsgAllowanceAmino): _91.AllowedMsgAllowance;
                toAmino(message: _91.AllowedMsgAllowance): _91.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _91.AllowedMsgAllowanceAminoMsg): _91.AllowedMsgAllowance;
                toAminoMsg(message: _91.AllowedMsgAllowance): _91.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _91.AllowedMsgAllowanceProtoMsg): _91.AllowedMsgAllowance;
                toProto(message: _91.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _91.AllowedMsgAllowance): _91.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _91.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Grant;
                fromPartial(object: Partial<_91.Grant>): _91.Grant;
                fromAmino(object: _91.GrantAmino): _91.Grant;
                toAmino(message: _91.Grant): _91.GrantAmino;
                fromAminoMsg(object: _91.GrantAminoMsg): _91.Grant;
                toAminoMsg(message: _91.Grant): _91.GrantAminoMsg;
                fromProtoMsg(message: _91.GrantProtoMsg): _91.Grant;
                toProto(message: _91.Grant): Uint8Array;
                toProtoMsg(message: _91.Grant): _91.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
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
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _96.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GenesisState;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
                fromAmino(object: _96.GenesisStateAmino): _96.GenesisState;
                toAmino(message: _96.GenesisState): _96.GenesisStateAmino;
                fromAminoMsg(object: _96.GenesisStateAminoMsg): _96.GenesisState;
                toAminoMsg(message: _96.GenesisState): _96.GenesisStateAminoMsg;
                fromProtoMsg(message: _96.GenesisStateProtoMsg): _96.GenesisState;
                toProto(message: _96.GenesisState): Uint8Array;
                toProtoMsg(message: _96.GenesisState): _96.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _97.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.Module;
                    fromPartial(object: Partial<_97.Module>): _97.Module;
                    fromAmino(object: _97.ModuleAmino): _97.Module;
                    toAmino(message: _97.Module): _97.ModuleAmino;
                    fromAminoMsg(object: _97.ModuleAminoMsg): _97.Module;
                    toAminoMsg(message: _97.Module): _97.ModuleAminoMsg;
                    fromProtoMsg(message: _97.ModuleProtoMsg): _97.Module;
                    toProto(message: _97.Module): Uint8Array;
                    toProtoMsg(message: _97.Module): _97.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _100.QueryProposalRequest): Promise<_100.QueryProposalResponse>;
                proposals(request: _100.QueryProposalsRequest): Promise<_100.QueryProposalsResponse>;
                vote(request: _100.QueryVoteRequest): Promise<_100.QueryVoteResponse>;
                votes(request: _100.QueryVotesRequest): Promise<_100.QueryVotesResponse>;
                params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                deposit(request: _100.QueryDepositRequest): Promise<_100.QueryDepositResponse>;
                deposits(request: _100.QueryDepositsRequest): Promise<_100.QueryDepositsResponse>;
                tallyResult(request: _100.QueryTallyResultRequest): Promise<_100.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _101.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _101.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _101.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _101.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _101.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _101.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _101.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _101.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _101.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _101.MsgExecLegacyContent;
                    };
                    vote(value: _101.MsgVote): {
                        typeUrl: string;
                        value: _101.MsgVote;
                    };
                    voteWeighted(value: _101.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _101.MsgVoteWeighted;
                    };
                    deposit(value: _101.MsgDeposit): {
                        typeUrl: string;
                        value: _101.MsgDeposit;
                    };
                    updateParams(value: _101.MsgUpdateParams): {
                        typeUrl: string;
                        value: _101.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _101.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _101.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _101.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _101.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _101.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _101.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _101.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _101.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _101.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _101.MsgExecLegacyContent;
                    };
                    vote(value: _101.MsgVote): {
                        typeUrl: string;
                        value: _101.MsgVote;
                    };
                    voteWeighted(value: _101.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _101.MsgVoteWeighted;
                    };
                    deposit(value: _101.MsgDeposit): {
                        typeUrl: string;
                        value: _101.MsgDeposit;
                    };
                    updateParams(value: _101.MsgUpdateParams): {
                        typeUrl: string;
                        value: _101.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _101.MsgSubmitProposal) => _101.MsgSubmitProposalAmino;
                    fromAmino: (object: _101.MsgSubmitProposalAmino) => _101.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _101.MsgExecLegacyContent) => _101.MsgExecLegacyContentAmino;
                    fromAmino: (object: _101.MsgExecLegacyContentAmino) => _101.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _101.MsgVote) => _101.MsgVoteAmino;
                    fromAmino: (object: _101.MsgVoteAmino) => _101.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _101.MsgVoteWeighted) => _101.MsgVoteWeightedAmino;
                    fromAmino: (object: _101.MsgVoteWeightedAmino) => _101.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _101.MsgDeposit) => _101.MsgDepositAmino;
                    fromAmino: (object: _101.MsgDepositAmino) => _101.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _101.MsgUpdateParams) => _101.MsgUpdateParamsAmino;
                    fromAmino: (object: _101.MsgUpdateParamsAmino) => _101.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _101.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgSubmitProposal;
                fromPartial(object: Partial<_101.MsgSubmitProposal>): _101.MsgSubmitProposal;
                fromAmino(object: _101.MsgSubmitProposalAmino): _101.MsgSubmitProposal;
                toAmino(message: _101.MsgSubmitProposal): _101.MsgSubmitProposalAmino;
                fromAminoMsg(object: _101.MsgSubmitProposalAminoMsg): _101.MsgSubmitProposal;
                toAminoMsg(message: _101.MsgSubmitProposal): _101.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _101.MsgSubmitProposalProtoMsg): _101.MsgSubmitProposal;
                toProto(message: _101.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _101.MsgSubmitProposal): _101.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _101.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_101.MsgSubmitProposalResponse>): _101.MsgSubmitProposalResponse;
                fromAmino(object: _101.MsgSubmitProposalResponseAmino): _101.MsgSubmitProposalResponse;
                toAmino(message: _101.MsgSubmitProposalResponse): _101.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _101.MsgSubmitProposalResponseAminoMsg): _101.MsgSubmitProposalResponse;
                toAminoMsg(message: _101.MsgSubmitProposalResponse): _101.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _101.MsgSubmitProposalResponseProtoMsg): _101.MsgSubmitProposalResponse;
                toProto(message: _101.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _101.MsgSubmitProposalResponse): _101.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _101.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgExecLegacyContent;
                fromPartial(object: Partial<_101.MsgExecLegacyContent>): _101.MsgExecLegacyContent;
                fromAmino(object: _101.MsgExecLegacyContentAmino): _101.MsgExecLegacyContent;
                toAmino(message: _101.MsgExecLegacyContent): _101.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _101.MsgExecLegacyContentAminoMsg): _101.MsgExecLegacyContent;
                toAminoMsg(message: _101.MsgExecLegacyContent): _101.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _101.MsgExecLegacyContentProtoMsg): _101.MsgExecLegacyContent;
                toProto(message: _101.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _101.MsgExecLegacyContent): _101.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _101.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_101.MsgExecLegacyContentResponse>): _101.MsgExecLegacyContentResponse;
                fromAmino(_: _101.MsgExecLegacyContentResponseAmino): _101.MsgExecLegacyContentResponse;
                toAmino(_: _101.MsgExecLegacyContentResponse): _101.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _101.MsgExecLegacyContentResponseAminoMsg): _101.MsgExecLegacyContentResponse;
                toAminoMsg(message: _101.MsgExecLegacyContentResponse): _101.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _101.MsgExecLegacyContentResponseProtoMsg): _101.MsgExecLegacyContentResponse;
                toProto(message: _101.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _101.MsgExecLegacyContentResponse): _101.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _101.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgVote;
                fromPartial(object: Partial<_101.MsgVote>): _101.MsgVote;
                fromAmino(object: _101.MsgVoteAmino): _101.MsgVote;
                toAmino(message: _101.MsgVote): _101.MsgVoteAmino;
                fromAminoMsg(object: _101.MsgVoteAminoMsg): _101.MsgVote;
                toAminoMsg(message: _101.MsgVote): _101.MsgVoteAminoMsg;
                fromProtoMsg(message: _101.MsgVoteProtoMsg): _101.MsgVote;
                toProto(message: _101.MsgVote): Uint8Array;
                toProtoMsg(message: _101.MsgVote): _101.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _101.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgVoteResponse;
                fromPartial(_: Partial<_101.MsgVoteResponse>): _101.MsgVoteResponse;
                fromAmino(_: _101.MsgVoteResponseAmino): _101.MsgVoteResponse;
                toAmino(_: _101.MsgVoteResponse): _101.MsgVoteResponseAmino;
                fromAminoMsg(object: _101.MsgVoteResponseAminoMsg): _101.MsgVoteResponse;
                toAminoMsg(message: _101.MsgVoteResponse): _101.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _101.MsgVoteResponseProtoMsg): _101.MsgVoteResponse;
                toProto(message: _101.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _101.MsgVoteResponse): _101.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _101.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgVoteWeighted;
                fromPartial(object: Partial<_101.MsgVoteWeighted>): _101.MsgVoteWeighted;
                fromAmino(object: _101.MsgVoteWeightedAmino): _101.MsgVoteWeighted;
                toAmino(message: _101.MsgVoteWeighted): _101.MsgVoteWeightedAmino;
                fromAminoMsg(object: _101.MsgVoteWeightedAminoMsg): _101.MsgVoteWeighted;
                toAminoMsg(message: _101.MsgVoteWeighted): _101.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _101.MsgVoteWeightedProtoMsg): _101.MsgVoteWeighted;
                toProto(message: _101.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _101.MsgVoteWeighted): _101.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _101.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_101.MsgVoteWeightedResponse>): _101.MsgVoteWeightedResponse;
                fromAmino(_: _101.MsgVoteWeightedResponseAmino): _101.MsgVoteWeightedResponse;
                toAmino(_: _101.MsgVoteWeightedResponse): _101.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _101.MsgVoteWeightedResponseAminoMsg): _101.MsgVoteWeightedResponse;
                toAminoMsg(message: _101.MsgVoteWeightedResponse): _101.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _101.MsgVoteWeightedResponseProtoMsg): _101.MsgVoteWeightedResponse;
                toProto(message: _101.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _101.MsgVoteWeightedResponse): _101.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _101.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgDeposit;
                fromPartial(object: Partial<_101.MsgDeposit>): _101.MsgDeposit;
                fromAmino(object: _101.MsgDepositAmino): _101.MsgDeposit;
                toAmino(message: _101.MsgDeposit): _101.MsgDepositAmino;
                fromAminoMsg(object: _101.MsgDepositAminoMsg): _101.MsgDeposit;
                toAminoMsg(message: _101.MsgDeposit): _101.MsgDepositAminoMsg;
                fromProtoMsg(message: _101.MsgDepositProtoMsg): _101.MsgDeposit;
                toProto(message: _101.MsgDeposit): Uint8Array;
                toProtoMsg(message: _101.MsgDeposit): _101.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _101.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgDepositResponse;
                fromPartial(_: Partial<_101.MsgDepositResponse>): _101.MsgDepositResponse;
                fromAmino(_: _101.MsgDepositResponseAmino): _101.MsgDepositResponse;
                toAmino(_: _101.MsgDepositResponse): _101.MsgDepositResponseAmino;
                fromAminoMsg(object: _101.MsgDepositResponseAminoMsg): _101.MsgDepositResponse;
                toAminoMsg(message: _101.MsgDepositResponse): _101.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _101.MsgDepositResponseProtoMsg): _101.MsgDepositResponse;
                toProto(message: _101.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _101.MsgDepositResponse): _101.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _101.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgUpdateParams;
                fromPartial(object: Partial<_101.MsgUpdateParams>): _101.MsgUpdateParams;
                fromAmino(object: _101.MsgUpdateParamsAmino): _101.MsgUpdateParams;
                toAmino(message: _101.MsgUpdateParams): _101.MsgUpdateParamsAmino;
                fromAminoMsg(object: _101.MsgUpdateParamsAminoMsg): _101.MsgUpdateParams;
                toAminoMsg(message: _101.MsgUpdateParams): _101.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _101.MsgUpdateParamsProtoMsg): _101.MsgUpdateParams;
                toProto(message: _101.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _101.MsgUpdateParams): _101.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _101.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_101.MsgUpdateParamsResponse>): _101.MsgUpdateParamsResponse;
                fromAmino(_: _101.MsgUpdateParamsResponseAmino): _101.MsgUpdateParamsResponse;
                toAmino(_: _101.MsgUpdateParamsResponse): _101.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _101.MsgUpdateParamsResponseAminoMsg): _101.MsgUpdateParamsResponse;
                toAminoMsg(message: _101.MsgUpdateParamsResponse): _101.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _101.MsgUpdateParamsResponseProtoMsg): _101.MsgUpdateParamsResponse;
                toProto(message: _101.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _101.MsgUpdateParamsResponse): _101.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _81.CommunityPoolSpendProposal | _81.CommunityPoolSpendProposalWithDeposit | _129.ParameterChangeProposal | _151.SoftwareUpgradeProposal | _151.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _103.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _100.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalRequest;
                fromPartial(object: Partial<_100.QueryProposalRequest>): _100.QueryProposalRequest;
                fromAmino(object: _100.QueryProposalRequestAmino): _100.QueryProposalRequest;
                toAmino(message: _100.QueryProposalRequest): _100.QueryProposalRequestAmino;
                fromAminoMsg(object: _100.QueryProposalRequestAminoMsg): _100.QueryProposalRequest;
                toAminoMsg(message: _100.QueryProposalRequest): _100.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _100.QueryProposalRequestProtoMsg): _100.QueryProposalRequest;
                toProto(message: _100.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _100.QueryProposalRequest): _100.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _100.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalResponse;
                fromPartial(object: Partial<_100.QueryProposalResponse>): _100.QueryProposalResponse;
                fromAmino(object: _100.QueryProposalResponseAmino): _100.QueryProposalResponse;
                toAmino(message: _100.QueryProposalResponse): _100.QueryProposalResponseAmino;
                fromAminoMsg(object: _100.QueryProposalResponseAminoMsg): _100.QueryProposalResponse;
                toAminoMsg(message: _100.QueryProposalResponse): _100.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _100.QueryProposalResponseProtoMsg): _100.QueryProposalResponse;
                toProto(message: _100.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _100.QueryProposalResponse): _100.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _100.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalsRequest;
                fromPartial(object: Partial<_100.QueryProposalsRequest>): _100.QueryProposalsRequest;
                fromAmino(object: _100.QueryProposalsRequestAmino): _100.QueryProposalsRequest;
                toAmino(message: _100.QueryProposalsRequest): _100.QueryProposalsRequestAmino;
                fromAminoMsg(object: _100.QueryProposalsRequestAminoMsg): _100.QueryProposalsRequest;
                toAminoMsg(message: _100.QueryProposalsRequest): _100.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryProposalsRequestProtoMsg): _100.QueryProposalsRequest;
                toProto(message: _100.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryProposalsRequest): _100.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _100.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalsResponse;
                fromPartial(object: Partial<_100.QueryProposalsResponse>): _100.QueryProposalsResponse;
                fromAmino(object: _100.QueryProposalsResponseAmino): _100.QueryProposalsResponse;
                toAmino(message: _100.QueryProposalsResponse): _100.QueryProposalsResponseAmino;
                fromAminoMsg(object: _100.QueryProposalsResponseAminoMsg): _100.QueryProposalsResponse;
                toAminoMsg(message: _100.QueryProposalsResponse): _100.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryProposalsResponseProtoMsg): _100.QueryProposalsResponse;
                toProto(message: _100.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryProposalsResponse): _100.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _100.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVoteRequest;
                fromPartial(object: Partial<_100.QueryVoteRequest>): _100.QueryVoteRequest;
                fromAmino(object: _100.QueryVoteRequestAmino): _100.QueryVoteRequest;
                toAmino(message: _100.QueryVoteRequest): _100.QueryVoteRequestAmino;
                fromAminoMsg(object: _100.QueryVoteRequestAminoMsg): _100.QueryVoteRequest;
                toAminoMsg(message: _100.QueryVoteRequest): _100.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _100.QueryVoteRequestProtoMsg): _100.QueryVoteRequest;
                toProto(message: _100.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _100.QueryVoteRequest): _100.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _100.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVoteResponse;
                fromPartial(object: Partial<_100.QueryVoteResponse>): _100.QueryVoteResponse;
                fromAmino(object: _100.QueryVoteResponseAmino): _100.QueryVoteResponse;
                toAmino(message: _100.QueryVoteResponse): _100.QueryVoteResponseAmino;
                fromAminoMsg(object: _100.QueryVoteResponseAminoMsg): _100.QueryVoteResponse;
                toAminoMsg(message: _100.QueryVoteResponse): _100.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _100.QueryVoteResponseProtoMsg): _100.QueryVoteResponse;
                toProto(message: _100.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _100.QueryVoteResponse): _100.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _100.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVotesRequest;
                fromPartial(object: Partial<_100.QueryVotesRequest>): _100.QueryVotesRequest;
                fromAmino(object: _100.QueryVotesRequestAmino): _100.QueryVotesRequest;
                toAmino(message: _100.QueryVotesRequest): _100.QueryVotesRequestAmino;
                fromAminoMsg(object: _100.QueryVotesRequestAminoMsg): _100.QueryVotesRequest;
                toAminoMsg(message: _100.QueryVotesRequest): _100.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _100.QueryVotesRequestProtoMsg): _100.QueryVotesRequest;
                toProto(message: _100.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _100.QueryVotesRequest): _100.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _100.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVotesResponse;
                fromPartial(object: Partial<_100.QueryVotesResponse>): _100.QueryVotesResponse;
                fromAmino(object: _100.QueryVotesResponseAmino): _100.QueryVotesResponse;
                toAmino(message: _100.QueryVotesResponse): _100.QueryVotesResponseAmino;
                fromAminoMsg(object: _100.QueryVotesResponseAminoMsg): _100.QueryVotesResponse;
                toAminoMsg(message: _100.QueryVotesResponse): _100.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _100.QueryVotesResponseProtoMsg): _100.QueryVotesResponse;
                toProto(message: _100.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _100.QueryVotesResponse): _100.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _100.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryParamsRequest;
                fromPartial(object: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
                fromAmino(object: _100.QueryParamsRequestAmino): _100.QueryParamsRequest;
                toAmino(message: _100.QueryParamsRequest): _100.QueryParamsRequestAmino;
                fromAminoMsg(object: _100.QueryParamsRequestAminoMsg): _100.QueryParamsRequest;
                toAminoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryParamsRequestProtoMsg): _100.QueryParamsRequest;
                toProto(message: _100.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _100.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryParamsResponse;
                fromPartial(object: Partial<_100.QueryParamsResponse>): _100.QueryParamsResponse;
                fromAmino(object: _100.QueryParamsResponseAmino): _100.QueryParamsResponse;
                toAmino(message: _100.QueryParamsResponse): _100.QueryParamsResponseAmino;
                fromAminoMsg(object: _100.QueryParamsResponseAminoMsg): _100.QueryParamsResponse;
                toAminoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryParamsResponseProtoMsg): _100.QueryParamsResponse;
                toProto(message: _100.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _100.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositRequest;
                fromPartial(object: Partial<_100.QueryDepositRequest>): _100.QueryDepositRequest;
                fromAmino(object: _100.QueryDepositRequestAmino): _100.QueryDepositRequest;
                toAmino(message: _100.QueryDepositRequest): _100.QueryDepositRequestAmino;
                fromAminoMsg(object: _100.QueryDepositRequestAminoMsg): _100.QueryDepositRequest;
                toAminoMsg(message: _100.QueryDepositRequest): _100.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _100.QueryDepositRequestProtoMsg): _100.QueryDepositRequest;
                toProto(message: _100.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _100.QueryDepositRequest): _100.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _100.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositResponse;
                fromPartial(object: Partial<_100.QueryDepositResponse>): _100.QueryDepositResponse;
                fromAmino(object: _100.QueryDepositResponseAmino): _100.QueryDepositResponse;
                toAmino(message: _100.QueryDepositResponse): _100.QueryDepositResponseAmino;
                fromAminoMsg(object: _100.QueryDepositResponseAminoMsg): _100.QueryDepositResponse;
                toAminoMsg(message: _100.QueryDepositResponse): _100.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _100.QueryDepositResponseProtoMsg): _100.QueryDepositResponse;
                toProto(message: _100.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _100.QueryDepositResponse): _100.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _100.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositsRequest;
                fromPartial(object: Partial<_100.QueryDepositsRequest>): _100.QueryDepositsRequest;
                fromAmino(object: _100.QueryDepositsRequestAmino): _100.QueryDepositsRequest;
                toAmino(message: _100.QueryDepositsRequest): _100.QueryDepositsRequestAmino;
                fromAminoMsg(object: _100.QueryDepositsRequestAminoMsg): _100.QueryDepositsRequest;
                toAminoMsg(message: _100.QueryDepositsRequest): _100.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryDepositsRequestProtoMsg): _100.QueryDepositsRequest;
                toProto(message: _100.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryDepositsRequest): _100.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _100.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositsResponse;
                fromPartial(object: Partial<_100.QueryDepositsResponse>): _100.QueryDepositsResponse;
                fromAmino(object: _100.QueryDepositsResponseAmino): _100.QueryDepositsResponse;
                toAmino(message: _100.QueryDepositsResponse): _100.QueryDepositsResponseAmino;
                fromAminoMsg(object: _100.QueryDepositsResponseAminoMsg): _100.QueryDepositsResponse;
                toAminoMsg(message: _100.QueryDepositsResponse): _100.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryDepositsResponseProtoMsg): _100.QueryDepositsResponse;
                toProto(message: _100.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryDepositsResponse): _100.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _100.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryTallyResultRequest;
                fromPartial(object: Partial<_100.QueryTallyResultRequest>): _100.QueryTallyResultRequest;
                fromAmino(object: _100.QueryTallyResultRequestAmino): _100.QueryTallyResultRequest;
                toAmino(message: _100.QueryTallyResultRequest): _100.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _100.QueryTallyResultRequestAminoMsg): _100.QueryTallyResultRequest;
                toAminoMsg(message: _100.QueryTallyResultRequest): _100.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _100.QueryTallyResultRequestProtoMsg): _100.QueryTallyResultRequest;
                toProto(message: _100.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _100.QueryTallyResultRequest): _100.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _100.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryTallyResultResponse;
                fromPartial(object: Partial<_100.QueryTallyResultResponse>): _100.QueryTallyResultResponse;
                fromAmino(object: _100.QueryTallyResultResponseAmino): _100.QueryTallyResultResponse;
                toAmino(message: _100.QueryTallyResultResponse): _100.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _100.QueryTallyResultResponseAminoMsg): _100.QueryTallyResultResponse;
                toAminoMsg(message: _100.QueryTallyResultResponse): _100.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _100.QueryTallyResultResponseProtoMsg): _100.QueryTallyResultResponse;
                toProto(message: _100.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _100.QueryTallyResultResponse): _100.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _99.VoteOption;
            voteOptionToJSON(object: _99.VoteOption): string;
            proposalStatusFromJSON(object: any): _99.ProposalStatus;
            proposalStatusToJSON(object: _99.ProposalStatus): string;
            VoteOption: typeof _99.VoteOption;
            VoteOptionSDKType: typeof _99.VoteOption;
            VoteOptionAmino: typeof _99.VoteOption;
            ProposalStatus: typeof _99.ProposalStatus;
            ProposalStatusSDKType: typeof _99.ProposalStatus;
            ProposalStatusAmino: typeof _99.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _99.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.WeightedVoteOption;
                fromPartial(object: Partial<_99.WeightedVoteOption>): _99.WeightedVoteOption;
                fromAmino(object: _99.WeightedVoteOptionAmino): _99.WeightedVoteOption;
                toAmino(message: _99.WeightedVoteOption): _99.WeightedVoteOptionAmino;
                fromAminoMsg(object: _99.WeightedVoteOptionAminoMsg): _99.WeightedVoteOption;
                toAminoMsg(message: _99.WeightedVoteOption): _99.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _99.WeightedVoteOptionProtoMsg): _99.WeightedVoteOption;
                toProto(message: _99.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _99.WeightedVoteOption): _99.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _99.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Deposit;
                fromPartial(object: Partial<_99.Deposit>): _99.Deposit;
                fromAmino(object: _99.DepositAmino): _99.Deposit;
                toAmino(message: _99.Deposit): _99.DepositAmino;
                fromAminoMsg(object: _99.DepositAminoMsg): _99.Deposit;
                toAminoMsg(message: _99.Deposit): _99.DepositAminoMsg;
                fromProtoMsg(message: _99.DepositProtoMsg): _99.Deposit;
                toProto(message: _99.Deposit): Uint8Array;
                toProtoMsg(message: _99.Deposit): _99.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _99.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Proposal;
                fromPartial(object: Partial<_99.Proposal>): _99.Proposal;
                fromAmino(object: _99.ProposalAmino): _99.Proposal;
                toAmino(message: _99.Proposal): _99.ProposalAmino;
                fromAminoMsg(object: _99.ProposalAminoMsg): _99.Proposal;
                toAminoMsg(message: _99.Proposal): _99.ProposalAminoMsg;
                fromProtoMsg(message: _99.ProposalProtoMsg): _99.Proposal;
                toProto(message: _99.Proposal): Uint8Array;
                toProtoMsg(message: _99.Proposal): _99.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _99.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.TallyResult;
                fromPartial(object: Partial<_99.TallyResult>): _99.TallyResult;
                fromAmino(object: _99.TallyResultAmino): _99.TallyResult;
                toAmino(message: _99.TallyResult): _99.TallyResultAmino;
                fromAminoMsg(object: _99.TallyResultAminoMsg): _99.TallyResult;
                toAminoMsg(message: _99.TallyResult): _99.TallyResultAminoMsg;
                fromProtoMsg(message: _99.TallyResultProtoMsg): _99.TallyResult;
                toProto(message: _99.TallyResult): Uint8Array;
                toProtoMsg(message: _99.TallyResult): _99.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _99.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Vote;
                fromPartial(object: Partial<_99.Vote>): _99.Vote;
                fromAmino(object: _99.VoteAmino): _99.Vote;
                toAmino(message: _99.Vote): _99.VoteAmino;
                fromAminoMsg(object: _99.VoteAminoMsg): _99.Vote;
                toAminoMsg(message: _99.Vote): _99.VoteAminoMsg;
                fromProtoMsg(message: _99.VoteProtoMsg): _99.Vote;
                toProto(message: _99.Vote): Uint8Array;
                toProtoMsg(message: _99.Vote): _99.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _99.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DepositParams;
                fromPartial(object: Partial<_99.DepositParams>): _99.DepositParams;
                fromAmino(object: _99.DepositParamsAmino): _99.DepositParams;
                toAmino(message: _99.DepositParams): _99.DepositParamsAmino;
                fromAminoMsg(object: _99.DepositParamsAminoMsg): _99.DepositParams;
                toAminoMsg(message: _99.DepositParams): _99.DepositParamsAminoMsg;
                fromProtoMsg(message: _99.DepositParamsProtoMsg): _99.DepositParams;
                toProto(message: _99.DepositParams): Uint8Array;
                toProtoMsg(message: _99.DepositParams): _99.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _99.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.VotingParams;
                fromPartial(object: Partial<_99.VotingParams>): _99.VotingParams;
                fromAmino(object: _99.VotingParamsAmino): _99.VotingParams;
                toAmino(message: _99.VotingParams): _99.VotingParamsAmino;
                fromAminoMsg(object: _99.VotingParamsAminoMsg): _99.VotingParams;
                toAminoMsg(message: _99.VotingParams): _99.VotingParamsAminoMsg;
                fromProtoMsg(message: _99.VotingParamsProtoMsg): _99.VotingParams;
                toProto(message: _99.VotingParams): Uint8Array;
                toProtoMsg(message: _99.VotingParams): _99.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _99.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.TallyParams;
                fromPartial(object: Partial<_99.TallyParams>): _99.TallyParams;
                fromAmino(object: _99.TallyParamsAmino): _99.TallyParams;
                toAmino(message: _99.TallyParams): _99.TallyParamsAmino;
                fromAminoMsg(object: _99.TallyParamsAminoMsg): _99.TallyParams;
                toAminoMsg(message: _99.TallyParams): _99.TallyParamsAminoMsg;
                fromProtoMsg(message: _99.TallyParamsProtoMsg): _99.TallyParams;
                toProto(message: _99.TallyParams): Uint8Array;
                toProtoMsg(message: _99.TallyParams): _99.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _99.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Params;
                fromPartial(object: Partial<_99.Params>): _99.Params;
                fromAmino(object: _99.ParamsAmino): _99.Params;
                toAmino(message: _99.Params): _99.ParamsAmino;
                fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                toAminoMsg(message: _99.Params): _99.ParamsAminoMsg;
                fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                toProto(message: _99.Params): Uint8Array;
                toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _98.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.GenesisState;
                fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                toAminoMsg(message: _98.GenesisState): _98.GenesisStateAminoMsg;
                fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                toProto(message: _98.GenesisState): Uint8Array;
                toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _104.QueryProposalRequest): Promise<_104.QueryProposalResponse>;
                proposals(request: _104.QueryProposalsRequest): Promise<_104.QueryProposalsResponse>;
                vote(request: _104.QueryVoteRequest): Promise<_104.QueryVoteResponse>;
                votes(request: _104.QueryVotesRequest): Promise<_104.QueryVotesResponse>;
                params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                deposit(request: _104.QueryDepositRequest): Promise<_104.QueryDepositResponse>;
                deposits(request: _104.QueryDepositsRequest): Promise<_104.QueryDepositsResponse>;
                tallyResult(request: _104.QueryTallyResultRequest): Promise<_104.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _105.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _105.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    voteWeighted(value: _105.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _105.MsgVoteWeighted;
                    };
                    deposit(value: _105.MsgDeposit): {
                        typeUrl: string;
                        value: _105.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _105.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _105.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    voteWeighted(value: _105.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _105.MsgVoteWeighted;
                    };
                    deposit(value: _105.MsgDeposit): {
                        typeUrl: string;
                        value: _105.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _105.MsgSubmitProposal) => _105.MsgSubmitProposalAmino;
                    fromAmino: (object: _105.MsgSubmitProposalAmino) => _105.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _105.MsgVote) => _105.MsgVoteAmino;
                    fromAmino: (object: _105.MsgVoteAmino) => _105.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _105.MsgVoteWeighted) => _105.MsgVoteWeightedAmino;
                    fromAmino: (object: _105.MsgVoteWeightedAmino) => _105.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _105.MsgDeposit) => _105.MsgDepositAmino;
                    fromAmino: (object: _105.MsgDepositAmino) => _105.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _105.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgSubmitProposal;
                fromPartial(object: Partial<_105.MsgSubmitProposal>): _105.MsgSubmitProposal;
                fromAmino(object: _105.MsgSubmitProposalAmino): _105.MsgSubmitProposal;
                toAmino(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalAmino;
                fromAminoMsg(object: _105.MsgSubmitProposalAminoMsg): _105.MsgSubmitProposal;
                toAminoMsg(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _105.MsgSubmitProposalProtoMsg): _105.MsgSubmitProposal;
                toProto(message: _105.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _105.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_105.MsgSubmitProposalResponse>): _105.MsgSubmitProposalResponse;
                fromAmino(object: _105.MsgSubmitProposalResponseAmino): _105.MsgSubmitProposalResponse;
                toAmino(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _105.MsgSubmitProposalResponseAminoMsg): _105.MsgSubmitProposalResponse;
                toAminoMsg(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _105.MsgSubmitProposalResponseProtoMsg): _105.MsgSubmitProposalResponse;
                toProto(message: _105.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _105.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgVote;
                fromPartial(object: Partial<_105.MsgVote>): _105.MsgVote;
                fromAmino(object: _105.MsgVoteAmino): _105.MsgVote;
                toAmino(message: _105.MsgVote): _105.MsgVoteAmino;
                fromAminoMsg(object: _105.MsgVoteAminoMsg): _105.MsgVote;
                toAminoMsg(message: _105.MsgVote): _105.MsgVoteAminoMsg;
                fromProtoMsg(message: _105.MsgVoteProtoMsg): _105.MsgVote;
                toProto(message: _105.MsgVote): Uint8Array;
                toProtoMsg(message: _105.MsgVote): _105.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _105.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgVoteResponse;
                fromPartial(_: Partial<_105.MsgVoteResponse>): _105.MsgVoteResponse;
                fromAmino(_: _105.MsgVoteResponseAmino): _105.MsgVoteResponse;
                toAmino(_: _105.MsgVoteResponse): _105.MsgVoteResponseAmino;
                fromAminoMsg(object: _105.MsgVoteResponseAminoMsg): _105.MsgVoteResponse;
                toAminoMsg(message: _105.MsgVoteResponse): _105.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _105.MsgVoteResponseProtoMsg): _105.MsgVoteResponse;
                toProto(message: _105.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _105.MsgVoteResponse): _105.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _105.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgVoteWeighted;
                fromPartial(object: Partial<_105.MsgVoteWeighted>): _105.MsgVoteWeighted;
                fromAmino(object: _105.MsgVoteWeightedAmino): _105.MsgVoteWeighted;
                toAmino(message: _105.MsgVoteWeighted): _105.MsgVoteWeightedAmino;
                fromAminoMsg(object: _105.MsgVoteWeightedAminoMsg): _105.MsgVoteWeighted;
                toAminoMsg(message: _105.MsgVoteWeighted): _105.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _105.MsgVoteWeightedProtoMsg): _105.MsgVoteWeighted;
                toProto(message: _105.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _105.MsgVoteWeighted): _105.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _105.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_105.MsgVoteWeightedResponse>): _105.MsgVoteWeightedResponse;
                fromAmino(_: _105.MsgVoteWeightedResponseAmino): _105.MsgVoteWeightedResponse;
                toAmino(_: _105.MsgVoteWeightedResponse): _105.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _105.MsgVoteWeightedResponseAminoMsg): _105.MsgVoteWeightedResponse;
                toAminoMsg(message: _105.MsgVoteWeightedResponse): _105.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _105.MsgVoteWeightedResponseProtoMsg): _105.MsgVoteWeightedResponse;
                toProto(message: _105.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _105.MsgVoteWeightedResponse): _105.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _105.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgDeposit;
                fromPartial(object: Partial<_105.MsgDeposit>): _105.MsgDeposit;
                fromAmino(object: _105.MsgDepositAmino): _105.MsgDeposit;
                toAmino(message: _105.MsgDeposit): _105.MsgDepositAmino;
                fromAminoMsg(object: _105.MsgDepositAminoMsg): _105.MsgDeposit;
                toAminoMsg(message: _105.MsgDeposit): _105.MsgDepositAminoMsg;
                fromProtoMsg(message: _105.MsgDepositProtoMsg): _105.MsgDeposit;
                toProto(message: _105.MsgDeposit): Uint8Array;
                toProtoMsg(message: _105.MsgDeposit): _105.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _105.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgDepositResponse;
                fromPartial(_: Partial<_105.MsgDepositResponse>): _105.MsgDepositResponse;
                fromAmino(_: _105.MsgDepositResponseAmino): _105.MsgDepositResponse;
                toAmino(_: _105.MsgDepositResponse): _105.MsgDepositResponseAmino;
                fromAminoMsg(object: _105.MsgDepositResponseAminoMsg): _105.MsgDepositResponse;
                toAminoMsg(message: _105.MsgDepositResponse): _105.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _105.MsgDepositResponseProtoMsg): _105.MsgDepositResponse;
                toProto(message: _105.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _105.MsgDepositResponse): _105.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _81.CommunityPoolSpendProposal | _81.CommunityPoolSpendProposalWithDeposit | _129.ParameterChangeProposal | _151.SoftwareUpgradeProposal | _151.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _103.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _104.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalRequest;
                fromPartial(object: Partial<_104.QueryProposalRequest>): _104.QueryProposalRequest;
                fromAmino(object: _104.QueryProposalRequestAmino): _104.QueryProposalRequest;
                toAmino(message: _104.QueryProposalRequest): _104.QueryProposalRequestAmino;
                fromAminoMsg(object: _104.QueryProposalRequestAminoMsg): _104.QueryProposalRequest;
                toAminoMsg(message: _104.QueryProposalRequest): _104.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _104.QueryProposalRequestProtoMsg): _104.QueryProposalRequest;
                toProto(message: _104.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProposalRequest): _104.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _104.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalResponse;
                fromPartial(object: Partial<_104.QueryProposalResponse>): _104.QueryProposalResponse;
                fromAmino(object: _104.QueryProposalResponseAmino): _104.QueryProposalResponse;
                toAmino(message: _104.QueryProposalResponse): _104.QueryProposalResponseAmino;
                fromAminoMsg(object: _104.QueryProposalResponseAminoMsg): _104.QueryProposalResponse;
                toAminoMsg(message: _104.QueryProposalResponse): _104.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _104.QueryProposalResponseProtoMsg): _104.QueryProposalResponse;
                toProto(message: _104.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProposalResponse): _104.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _104.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalsRequest;
                fromPartial(object: Partial<_104.QueryProposalsRequest>): _104.QueryProposalsRequest;
                fromAmino(object: _104.QueryProposalsRequestAmino): _104.QueryProposalsRequest;
                toAmino(message: _104.QueryProposalsRequest): _104.QueryProposalsRequestAmino;
                fromAminoMsg(object: _104.QueryProposalsRequestAminoMsg): _104.QueryProposalsRequest;
                toAminoMsg(message: _104.QueryProposalsRequest): _104.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryProposalsRequestProtoMsg): _104.QueryProposalsRequest;
                toProto(message: _104.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProposalsRequest): _104.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _104.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalsResponse;
                fromPartial(object: Partial<_104.QueryProposalsResponse>): _104.QueryProposalsResponse;
                fromAmino(object: _104.QueryProposalsResponseAmino): _104.QueryProposalsResponse;
                toAmino(message: _104.QueryProposalsResponse): _104.QueryProposalsResponseAmino;
                fromAminoMsg(object: _104.QueryProposalsResponseAminoMsg): _104.QueryProposalsResponse;
                toAminoMsg(message: _104.QueryProposalsResponse): _104.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryProposalsResponseProtoMsg): _104.QueryProposalsResponse;
                toProto(message: _104.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProposalsResponse): _104.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _104.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVoteRequest;
                fromPartial(object: Partial<_104.QueryVoteRequest>): _104.QueryVoteRequest;
                fromAmino(object: _104.QueryVoteRequestAmino): _104.QueryVoteRequest;
                toAmino(message: _104.QueryVoteRequest): _104.QueryVoteRequestAmino;
                fromAminoMsg(object: _104.QueryVoteRequestAminoMsg): _104.QueryVoteRequest;
                toAminoMsg(message: _104.QueryVoteRequest): _104.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _104.QueryVoteRequestProtoMsg): _104.QueryVoteRequest;
                toProto(message: _104.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _104.QueryVoteRequest): _104.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _104.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVoteResponse;
                fromPartial(object: Partial<_104.QueryVoteResponse>): _104.QueryVoteResponse;
                fromAmino(object: _104.QueryVoteResponseAmino): _104.QueryVoteResponse;
                toAmino(message: _104.QueryVoteResponse): _104.QueryVoteResponseAmino;
                fromAminoMsg(object: _104.QueryVoteResponseAminoMsg): _104.QueryVoteResponse;
                toAminoMsg(message: _104.QueryVoteResponse): _104.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _104.QueryVoteResponseProtoMsg): _104.QueryVoteResponse;
                toProto(message: _104.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _104.QueryVoteResponse): _104.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _104.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVotesRequest;
                fromPartial(object: Partial<_104.QueryVotesRequest>): _104.QueryVotesRequest;
                fromAmino(object: _104.QueryVotesRequestAmino): _104.QueryVotesRequest;
                toAmino(message: _104.QueryVotesRequest): _104.QueryVotesRequestAmino;
                fromAminoMsg(object: _104.QueryVotesRequestAminoMsg): _104.QueryVotesRequest;
                toAminoMsg(message: _104.QueryVotesRequest): _104.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _104.QueryVotesRequestProtoMsg): _104.QueryVotesRequest;
                toProto(message: _104.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _104.QueryVotesRequest): _104.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _104.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVotesResponse;
                fromPartial(object: Partial<_104.QueryVotesResponse>): _104.QueryVotesResponse;
                fromAmino(object: _104.QueryVotesResponseAmino): _104.QueryVotesResponse;
                toAmino(message: _104.QueryVotesResponse): _104.QueryVotesResponseAmino;
                fromAminoMsg(object: _104.QueryVotesResponseAminoMsg): _104.QueryVotesResponse;
                toAminoMsg(message: _104.QueryVotesResponse): _104.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _104.QueryVotesResponseProtoMsg): _104.QueryVotesResponse;
                toProto(message: _104.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _104.QueryVotesResponse): _104.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _104.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryParamsRequest;
                fromPartial(object: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
                fromAmino(object: _104.QueryParamsRequestAmino): _104.QueryParamsRequest;
                toAmino(message: _104.QueryParamsRequest): _104.QueryParamsRequestAmino;
                fromAminoMsg(object: _104.QueryParamsRequestAminoMsg): _104.QueryParamsRequest;
                toAminoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryParamsRequestProtoMsg): _104.QueryParamsRequest;
                toProto(message: _104.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _104.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryParamsResponse;
                fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
                fromAmino(object: _104.QueryParamsResponseAmino): _104.QueryParamsResponse;
                toAmino(message: _104.QueryParamsResponse): _104.QueryParamsResponseAmino;
                fromAminoMsg(object: _104.QueryParamsResponseAminoMsg): _104.QueryParamsResponse;
                toAminoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryParamsResponseProtoMsg): _104.QueryParamsResponse;
                toProto(message: _104.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _104.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryDepositRequest;
                fromPartial(object: Partial<_104.QueryDepositRequest>): _104.QueryDepositRequest;
                fromAmino(object: _104.QueryDepositRequestAmino): _104.QueryDepositRequest;
                toAmino(message: _104.QueryDepositRequest): _104.QueryDepositRequestAmino;
                fromAminoMsg(object: _104.QueryDepositRequestAminoMsg): _104.QueryDepositRequest;
                toAminoMsg(message: _104.QueryDepositRequest): _104.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _104.QueryDepositRequestProtoMsg): _104.QueryDepositRequest;
                toProto(message: _104.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _104.QueryDepositRequest): _104.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _104.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryDepositResponse;
                fromPartial(object: Partial<_104.QueryDepositResponse>): _104.QueryDepositResponse;
                fromAmino(object: _104.QueryDepositResponseAmino): _104.QueryDepositResponse;
                toAmino(message: _104.QueryDepositResponse): _104.QueryDepositResponseAmino;
                fromAminoMsg(object: _104.QueryDepositResponseAminoMsg): _104.QueryDepositResponse;
                toAminoMsg(message: _104.QueryDepositResponse): _104.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _104.QueryDepositResponseProtoMsg): _104.QueryDepositResponse;
                toProto(message: _104.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _104.QueryDepositResponse): _104.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _104.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryDepositsRequest;
                fromPartial(object: Partial<_104.QueryDepositsRequest>): _104.QueryDepositsRequest;
                fromAmino(object: _104.QueryDepositsRequestAmino): _104.QueryDepositsRequest;
                toAmino(message: _104.QueryDepositsRequest): _104.QueryDepositsRequestAmino;
                fromAminoMsg(object: _104.QueryDepositsRequestAminoMsg): _104.QueryDepositsRequest;
                toAminoMsg(message: _104.QueryDepositsRequest): _104.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryDepositsRequestProtoMsg): _104.QueryDepositsRequest;
                toProto(message: _104.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryDepositsRequest): _104.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _104.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryDepositsResponse;
                fromPartial(object: Partial<_104.QueryDepositsResponse>): _104.QueryDepositsResponse;
                fromAmino(object: _104.QueryDepositsResponseAmino): _104.QueryDepositsResponse;
                toAmino(message: _104.QueryDepositsResponse): _104.QueryDepositsResponseAmino;
                fromAminoMsg(object: _104.QueryDepositsResponseAminoMsg): _104.QueryDepositsResponse;
                toAminoMsg(message: _104.QueryDepositsResponse): _104.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryDepositsResponseProtoMsg): _104.QueryDepositsResponse;
                toProto(message: _104.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryDepositsResponse): _104.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _104.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryTallyResultRequest;
                fromPartial(object: Partial<_104.QueryTallyResultRequest>): _104.QueryTallyResultRequest;
                fromAmino(object: _104.QueryTallyResultRequestAmino): _104.QueryTallyResultRequest;
                toAmino(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _104.QueryTallyResultRequestAminoMsg): _104.QueryTallyResultRequest;
                toAminoMsg(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _104.QueryTallyResultRequestProtoMsg): _104.QueryTallyResultRequest;
                toProto(message: _104.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _104.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryTallyResultResponse;
                fromPartial(object: Partial<_104.QueryTallyResultResponse>): _104.QueryTallyResultResponse;
                fromAmino(object: _104.QueryTallyResultResponseAmino): _104.QueryTallyResultResponse;
                toAmino(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _104.QueryTallyResultResponseAminoMsg): _104.QueryTallyResultResponse;
                toAminoMsg(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _104.QueryTallyResultResponseProtoMsg): _104.QueryTallyResultResponse;
                toProto(message: _104.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _103.VoteOption;
            voteOptionToJSON(object: _103.VoteOption): string;
            proposalStatusFromJSON(object: any): _103.ProposalStatus;
            proposalStatusToJSON(object: _103.ProposalStatus): string;
            VoteOption: typeof _103.VoteOption;
            VoteOptionSDKType: typeof _103.VoteOption;
            VoteOptionAmino: typeof _103.VoteOption;
            ProposalStatus: typeof _103.ProposalStatus;
            ProposalStatusSDKType: typeof _103.ProposalStatus;
            ProposalStatusAmino: typeof _103.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _103.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.WeightedVoteOption;
                fromPartial(object: Partial<_103.WeightedVoteOption>): _103.WeightedVoteOption;
                fromAmino(object: _103.WeightedVoteOptionAmino): _103.WeightedVoteOption;
                toAmino(message: _103.WeightedVoteOption): _103.WeightedVoteOptionAmino;
                fromAminoMsg(object: _103.WeightedVoteOptionAminoMsg): _103.WeightedVoteOption;
                toAminoMsg(message: _103.WeightedVoteOption): _103.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _103.WeightedVoteOptionProtoMsg): _103.WeightedVoteOption;
                toProto(message: _103.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _103.WeightedVoteOption): _103.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _103.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.TextProposal;
                fromPartial(object: Partial<_103.TextProposal>): _103.TextProposal;
                fromAmino(object: _103.TextProposalAmino): _103.TextProposal;
                toAmino(message: _103.TextProposal): _103.TextProposalAmino;
                fromAminoMsg(object: _103.TextProposalAminoMsg): _103.TextProposal;
                toAminoMsg(message: _103.TextProposal): _103.TextProposalAminoMsg;
                fromProtoMsg(message: _103.TextProposalProtoMsg): _103.TextProposal;
                toProto(message: _103.TextProposal): Uint8Array;
                toProtoMsg(message: _103.TextProposal): _103.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _103.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Deposit;
                fromPartial(object: Partial<_103.Deposit>): _103.Deposit;
                fromAmino(object: _103.DepositAmino): _103.Deposit;
                toAmino(message: _103.Deposit): _103.DepositAmino;
                fromAminoMsg(object: _103.DepositAminoMsg): _103.Deposit;
                toAminoMsg(message: _103.Deposit): _103.DepositAminoMsg;
                fromProtoMsg(message: _103.DepositProtoMsg): _103.Deposit;
                toProto(message: _103.Deposit): Uint8Array;
                toProtoMsg(message: _103.Deposit): _103.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _103.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Proposal;
                fromPartial(object: Partial<_103.Proposal>): _103.Proposal;
                fromAmino(object: _103.ProposalAmino): _103.Proposal;
                toAmino(message: _103.Proposal): _103.ProposalAmino;
                fromAminoMsg(object: _103.ProposalAminoMsg): _103.Proposal;
                toAminoMsg(message: _103.Proposal): _103.ProposalAminoMsg;
                fromProtoMsg(message: _103.ProposalProtoMsg): _103.Proposal;
                toProto(message: _103.Proposal): Uint8Array;
                toProtoMsg(message: _103.Proposal): _103.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _103.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.TallyResult;
                fromPartial(object: Partial<_103.TallyResult>): _103.TallyResult;
                fromAmino(object: _103.TallyResultAmino): _103.TallyResult;
                toAmino(message: _103.TallyResult): _103.TallyResultAmino;
                fromAminoMsg(object: _103.TallyResultAminoMsg): _103.TallyResult;
                toAminoMsg(message: _103.TallyResult): _103.TallyResultAminoMsg;
                fromProtoMsg(message: _103.TallyResultProtoMsg): _103.TallyResult;
                toProto(message: _103.TallyResult): Uint8Array;
                toProtoMsg(message: _103.TallyResult): _103.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _103.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Vote;
                fromPartial(object: Partial<_103.Vote>): _103.Vote;
                fromAmino(object: _103.VoteAmino): _103.Vote;
                toAmino(message: _103.Vote): _103.VoteAmino;
                fromAminoMsg(object: _103.VoteAminoMsg): _103.Vote;
                toAminoMsg(message: _103.Vote): _103.VoteAminoMsg;
                fromProtoMsg(message: _103.VoteProtoMsg): _103.Vote;
                toProto(message: _103.Vote): Uint8Array;
                toProtoMsg(message: _103.Vote): _103.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _103.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.DepositParams;
                fromPartial(object: Partial<_103.DepositParams>): _103.DepositParams;
                fromAmino(object: _103.DepositParamsAmino): _103.DepositParams;
                toAmino(message: _103.DepositParams): _103.DepositParamsAmino;
                fromAminoMsg(object: _103.DepositParamsAminoMsg): _103.DepositParams;
                toAminoMsg(message: _103.DepositParams): _103.DepositParamsAminoMsg;
                fromProtoMsg(message: _103.DepositParamsProtoMsg): _103.DepositParams;
                toProto(message: _103.DepositParams): Uint8Array;
                toProtoMsg(message: _103.DepositParams): _103.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _103.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.VotingParams;
                fromPartial(object: Partial<_103.VotingParams>): _103.VotingParams;
                fromAmino(object: _103.VotingParamsAmino): _103.VotingParams;
                toAmino(message: _103.VotingParams): _103.VotingParamsAmino;
                fromAminoMsg(object: _103.VotingParamsAminoMsg): _103.VotingParams;
                toAminoMsg(message: _103.VotingParams): _103.VotingParamsAminoMsg;
                fromProtoMsg(message: _103.VotingParamsProtoMsg): _103.VotingParams;
                toProto(message: _103.VotingParams): Uint8Array;
                toProtoMsg(message: _103.VotingParams): _103.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _103.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.TallyParams;
                fromPartial(object: Partial<_103.TallyParams>): _103.TallyParams;
                fromAmino(object: _103.TallyParamsAmino): _103.TallyParams;
                toAmino(message: _103.TallyParams): _103.TallyParamsAmino;
                fromAminoMsg(object: _103.TallyParamsAminoMsg): _103.TallyParams;
                toAminoMsg(message: _103.TallyParams): _103.TallyParamsAminoMsg;
                fromProtoMsg(message: _103.TallyParamsProtoMsg): _103.TallyParams;
                toProto(message: _103.TallyParams): Uint8Array;
                toProtoMsg(message: _103.TallyParams): _103.TallyParamsProtoMsg;
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
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _106.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Module;
                    fromPartial(object: Partial<_106.Module>): _106.Module;
                    fromAmino(object: _106.ModuleAmino): _106.Module;
                    toAmino(message: _106.Module): _106.ModuleAmino;
                    fromAminoMsg(object: _106.ModuleAminoMsg): _106.Module;
                    toAminoMsg(message: _106.Module): _106.ModuleAminoMsg;
                    fromProtoMsg(message: _106.ModuleProtoMsg): _106.Module;
                    toProto(message: _106.Module): Uint8Array;
                    toProtoMsg(message: _106.Module): _106.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _109.QueryGroupInfoRequest): Promise<_109.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _109.QueryGroupPolicyInfoRequest): Promise<_109.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _109.QueryGroupMembersRequest): Promise<_109.QueryGroupMembersResponse>;
                groupsByAdmin(request: _109.QueryGroupsByAdminRequest): Promise<_109.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _109.QueryGroupPoliciesByGroupRequest): Promise<_109.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _109.QueryGroupPoliciesByAdminRequest): Promise<_109.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _109.QueryProposalRequest): Promise<_109.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _109.QueryProposalsByGroupPolicyRequest): Promise<_109.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _109.QueryVoteByProposalVoterRequest): Promise<_109.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _109.QueryVotesByProposalRequest): Promise<_109.QueryVotesByProposalResponse>;
                votesByVoter(request: _109.QueryVotesByVoterRequest): Promise<_109.QueryVotesByVoterResponse>;
                groupsByMember(request: _109.QueryGroupsByMemberRequest): Promise<_109.QueryGroupsByMemberResponse>;
                tallyResult(request: _109.QueryTallyResultRequest): Promise<_109.QueryTallyResultResponse>;
                groups(request?: _109.QueryGroupsRequest): Promise<_109.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _110.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _110.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _110.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _110.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _110.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _110.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _110.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _110.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _110.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _110.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _110.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _110.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _110.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _110.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _110.MsgCreateGroup): {
                        typeUrl: string;
                        value: _110.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _110.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _110.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _110.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _110.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _110.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _110.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _110.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _110.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _110.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _110.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _110.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _110.MsgWithdrawProposal;
                    };
                    vote(value: _110.MsgVote): {
                        typeUrl: string;
                        value: _110.MsgVote;
                    };
                    exec(value: _110.MsgExec): {
                        typeUrl: string;
                        value: _110.MsgExec;
                    };
                    leaveGroup(value: _110.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _110.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _110.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _110.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _110.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _110.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _110.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _110.MsgCreateGroup): {
                        typeUrl: string;
                        value: _110.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _110.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _110.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _110.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _110.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _110.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _110.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _110.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _110.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _110.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _110.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _110.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _110.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _110.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _110.MsgWithdrawProposal;
                    };
                    vote(value: _110.MsgVote): {
                        typeUrl: string;
                        value: _110.MsgVote;
                    };
                    exec(value: _110.MsgExec): {
                        typeUrl: string;
                        value: _110.MsgExec;
                    };
                    leaveGroup(value: _110.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _110.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _110.MsgCreateGroup) => _110.MsgCreateGroupAmino;
                    fromAmino: (object: _110.MsgCreateGroupAmino) => _110.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateGroupMembers) => _110.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _110.MsgUpdateGroupMembersAmino) => _110.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateGroupAdmin) => _110.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _110.MsgUpdateGroupAdminAmino) => _110.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateGroupMetadata) => _110.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _110.MsgUpdateGroupMetadataAmino) => _110.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _110.MsgCreateGroupPolicy) => _110.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _110.MsgCreateGroupPolicyAmino) => _110.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _110.MsgCreateGroupWithPolicy) => _110.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _110.MsgCreateGroupWithPolicyAmino) => _110.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateGroupPolicyAdmin) => _110.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _110.MsgUpdateGroupPolicyAdminAmino) => _110.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateGroupPolicyDecisionPolicy) => _110.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _110.MsgUpdateGroupPolicyDecisionPolicyAmino) => _110.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateGroupPolicyMetadata) => _110.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _110.MsgUpdateGroupPolicyMetadataAmino) => _110.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _110.MsgSubmitProposal) => _110.MsgSubmitProposalAmino;
                    fromAmino: (object: _110.MsgSubmitProposalAmino) => _110.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _110.MsgWithdrawProposal) => _110.MsgWithdrawProposalAmino;
                    fromAmino: (object: _110.MsgWithdrawProposalAmino) => _110.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _110.MsgVote) => _110.MsgVoteAmino;
                    fromAmino: (object: _110.MsgVoteAmino) => _110.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _110.MsgExec) => _110.MsgExecAmino;
                    fromAmino: (object: _110.MsgExecAmino) => _110.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _110.MsgLeaveGroup) => _110.MsgLeaveGroupAmino;
                    fromAmino: (object: _110.MsgLeaveGroupAmino) => _110.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _111.VoteOption;
            voteOptionToJSON(object: _111.VoteOption): string;
            proposalStatusFromJSON(object: any): _111.ProposalStatus;
            proposalStatusToJSON(object: _111.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _111.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _111.ProposalExecutorResult): string;
            VoteOption: typeof _111.VoteOption;
            VoteOptionSDKType: typeof _111.VoteOption;
            VoteOptionAmino: typeof _111.VoteOption;
            ProposalStatus: typeof _111.ProposalStatus;
            ProposalStatusSDKType: typeof _111.ProposalStatus;
            ProposalStatusAmino: typeof _111.ProposalStatus;
            ProposalExecutorResult: typeof _111.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _111.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _111.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _111.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Member;
                fromPartial(object: Partial<_111.Member>): _111.Member;
                fromAmino(object: _111.MemberAmino): _111.Member;
                toAmino(message: _111.Member): _111.MemberAmino;
                fromAminoMsg(object: _111.MemberAminoMsg): _111.Member;
                toAminoMsg(message: _111.Member): _111.MemberAminoMsg;
                fromProtoMsg(message: _111.MemberProtoMsg): _111.Member;
                toProto(message: _111.Member): Uint8Array;
                toProtoMsg(message: _111.Member): _111.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _111.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MemberRequest;
                fromPartial(object: Partial<_111.MemberRequest>): _111.MemberRequest;
                fromAmino(object: _111.MemberRequestAmino): _111.MemberRequest;
                toAmino(message: _111.MemberRequest): _111.MemberRequestAmino;
                fromAminoMsg(object: _111.MemberRequestAminoMsg): _111.MemberRequest;
                toAminoMsg(message: _111.MemberRequest): _111.MemberRequestAminoMsg;
                fromProtoMsg(message: _111.MemberRequestProtoMsg): _111.MemberRequest;
                toProto(message: _111.MemberRequest): Uint8Array;
                toProtoMsg(message: _111.MemberRequest): _111.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _111.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_111.ThresholdDecisionPolicy>): _111.ThresholdDecisionPolicy;
                fromAmino(object: _111.ThresholdDecisionPolicyAmino): _111.ThresholdDecisionPolicy;
                toAmino(message: _111.ThresholdDecisionPolicy): _111.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _111.ThresholdDecisionPolicyAminoMsg): _111.ThresholdDecisionPolicy;
                toAminoMsg(message: _111.ThresholdDecisionPolicy): _111.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _111.ThresholdDecisionPolicyProtoMsg): _111.ThresholdDecisionPolicy;
                toProto(message: _111.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _111.ThresholdDecisionPolicy): _111.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _111.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.PercentageDecisionPolicy;
                fromPartial(object: Partial<_111.PercentageDecisionPolicy>): _111.PercentageDecisionPolicy;
                fromAmino(object: _111.PercentageDecisionPolicyAmino): _111.PercentageDecisionPolicy;
                toAmino(message: _111.PercentageDecisionPolicy): _111.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _111.PercentageDecisionPolicyAminoMsg): _111.PercentageDecisionPolicy;
                toAminoMsg(message: _111.PercentageDecisionPolicy): _111.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _111.PercentageDecisionPolicyProtoMsg): _111.PercentageDecisionPolicy;
                toProto(message: _111.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _111.PercentageDecisionPolicy): _111.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _111.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.DecisionPolicyWindows;
                fromPartial(object: Partial<_111.DecisionPolicyWindows>): _111.DecisionPolicyWindows;
                fromAmino(object: _111.DecisionPolicyWindowsAmino): _111.DecisionPolicyWindows;
                toAmino(message: _111.DecisionPolicyWindows): _111.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _111.DecisionPolicyWindowsAminoMsg): _111.DecisionPolicyWindows;
                toAminoMsg(message: _111.DecisionPolicyWindows): _111.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _111.DecisionPolicyWindowsProtoMsg): _111.DecisionPolicyWindows;
                toProto(message: _111.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _111.DecisionPolicyWindows): _111.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _111.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GroupInfo;
                fromPartial(object: Partial<_111.GroupInfo>): _111.GroupInfo;
                fromAmino(object: _111.GroupInfoAmino): _111.GroupInfo;
                toAmino(message: _111.GroupInfo): _111.GroupInfoAmino;
                fromAminoMsg(object: _111.GroupInfoAminoMsg): _111.GroupInfo;
                toAminoMsg(message: _111.GroupInfo): _111.GroupInfoAminoMsg;
                fromProtoMsg(message: _111.GroupInfoProtoMsg): _111.GroupInfo;
                toProto(message: _111.GroupInfo): Uint8Array;
                toProtoMsg(message: _111.GroupInfo): _111.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _111.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GroupMember;
                fromPartial(object: Partial<_111.GroupMember>): _111.GroupMember;
                fromAmino(object: _111.GroupMemberAmino): _111.GroupMember;
                toAmino(message: _111.GroupMember): _111.GroupMemberAmino;
                fromAminoMsg(object: _111.GroupMemberAminoMsg): _111.GroupMember;
                toAminoMsg(message: _111.GroupMember): _111.GroupMemberAminoMsg;
                fromProtoMsg(message: _111.GroupMemberProtoMsg): _111.GroupMember;
                toProto(message: _111.GroupMember): Uint8Array;
                toProtoMsg(message: _111.GroupMember): _111.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _111.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GroupPolicyInfo;
                fromPartial(object: Partial<_111.GroupPolicyInfo>): _111.GroupPolicyInfo;
                fromAmino(object: _111.GroupPolicyInfoAmino): _111.GroupPolicyInfo;
                toAmino(message: _111.GroupPolicyInfo): _111.GroupPolicyInfoAmino;
                fromAminoMsg(object: _111.GroupPolicyInfoAminoMsg): _111.GroupPolicyInfo;
                toAminoMsg(message: _111.GroupPolicyInfo): _111.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _111.GroupPolicyInfoProtoMsg): _111.GroupPolicyInfo;
                toProto(message: _111.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _111.GroupPolicyInfo): _111.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _111.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Proposal;
                fromPartial(object: Partial<_111.Proposal>): _111.Proposal;
                fromAmino(object: _111.ProposalAmino): _111.Proposal;
                toAmino(message: _111.Proposal): _111.ProposalAmino;
                fromAminoMsg(object: _111.ProposalAminoMsg): _111.Proposal;
                toAminoMsg(message: _111.Proposal): _111.ProposalAminoMsg;
                fromProtoMsg(message: _111.ProposalProtoMsg): _111.Proposal;
                toProto(message: _111.Proposal): Uint8Array;
                toProtoMsg(message: _111.Proposal): _111.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _111.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.TallyResult;
                fromPartial(object: Partial<_111.TallyResult>): _111.TallyResult;
                fromAmino(object: _111.TallyResultAmino): _111.TallyResult;
                toAmino(message: _111.TallyResult): _111.TallyResultAmino;
                fromAminoMsg(object: _111.TallyResultAminoMsg): _111.TallyResult;
                toAminoMsg(message: _111.TallyResult): _111.TallyResultAminoMsg;
                fromProtoMsg(message: _111.TallyResultProtoMsg): _111.TallyResult;
                toProto(message: _111.TallyResult): Uint8Array;
                toProtoMsg(message: _111.TallyResult): _111.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _111.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.Vote;
                fromPartial(object: Partial<_111.Vote>): _111.Vote;
                fromAmino(object: _111.VoteAmino): _111.Vote;
                toAmino(message: _111.Vote): _111.VoteAmino;
                fromAminoMsg(object: _111.VoteAminoMsg): _111.Vote;
                toAminoMsg(message: _111.Vote): _111.VoteAminoMsg;
                fromProtoMsg(message: _111.VoteProtoMsg): _111.Vote;
                toProto(message: _111.Vote): Uint8Array;
                toProtoMsg(message: _111.Vote): _111.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _111.ThresholdDecisionPolicy | _111.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _110.Exec;
            execToJSON(object: _110.Exec): string;
            Exec: typeof _110.Exec;
            ExecSDKType: typeof _110.Exec;
            ExecAmino: typeof _110.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _110.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCreateGroup;
                fromPartial(object: Partial<_110.MsgCreateGroup>): _110.MsgCreateGroup;
                fromAmino(object: _110.MsgCreateGroupAmino): _110.MsgCreateGroup;
                toAmino(message: _110.MsgCreateGroup): _110.MsgCreateGroupAmino;
                fromAminoMsg(object: _110.MsgCreateGroupAminoMsg): _110.MsgCreateGroup;
                toAminoMsg(message: _110.MsgCreateGroup): _110.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _110.MsgCreateGroupProtoMsg): _110.MsgCreateGroup;
                toProto(message: _110.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _110.MsgCreateGroup): _110.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _110.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCreateGroupResponse;
                fromPartial(object: Partial<_110.MsgCreateGroupResponse>): _110.MsgCreateGroupResponse;
                fromAmino(object: _110.MsgCreateGroupResponseAmino): _110.MsgCreateGroupResponse;
                toAmino(message: _110.MsgCreateGroupResponse): _110.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _110.MsgCreateGroupResponseAminoMsg): _110.MsgCreateGroupResponse;
                toAminoMsg(message: _110.MsgCreateGroupResponse): _110.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _110.MsgCreateGroupResponseProtoMsg): _110.MsgCreateGroupResponse;
                toProto(message: _110.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _110.MsgCreateGroupResponse): _110.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _110.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_110.MsgUpdateGroupMembers>): _110.MsgUpdateGroupMembers;
                fromAmino(object: _110.MsgUpdateGroupMembersAmino): _110.MsgUpdateGroupMembers;
                toAmino(message: _110.MsgUpdateGroupMembers): _110.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupMembersAminoMsg): _110.MsgUpdateGroupMembers;
                toAminoMsg(message: _110.MsgUpdateGroupMembers): _110.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupMembersProtoMsg): _110.MsgUpdateGroupMembers;
                toProto(message: _110.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupMembers): _110.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupMembersResponse>): _110.MsgUpdateGroupMembersResponse;
                fromAmino(_: _110.MsgUpdateGroupMembersResponseAmino): _110.MsgUpdateGroupMembersResponse;
                toAmino(_: _110.MsgUpdateGroupMembersResponse): _110.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupMembersResponseAminoMsg): _110.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _110.MsgUpdateGroupMembersResponse): _110.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupMembersResponseProtoMsg): _110.MsgUpdateGroupMembersResponse;
                toProto(message: _110.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupMembersResponse): _110.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _110.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_110.MsgUpdateGroupAdmin>): _110.MsgUpdateGroupAdmin;
                fromAmino(object: _110.MsgUpdateGroupAdminAmino): _110.MsgUpdateGroupAdmin;
                toAmino(message: _110.MsgUpdateGroupAdmin): _110.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupAdminAminoMsg): _110.MsgUpdateGroupAdmin;
                toAminoMsg(message: _110.MsgUpdateGroupAdmin): _110.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupAdminProtoMsg): _110.MsgUpdateGroupAdmin;
                toProto(message: _110.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupAdmin): _110.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupAdminResponse>): _110.MsgUpdateGroupAdminResponse;
                fromAmino(_: _110.MsgUpdateGroupAdminResponseAmino): _110.MsgUpdateGroupAdminResponse;
                toAmino(_: _110.MsgUpdateGroupAdminResponse): _110.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupAdminResponseAminoMsg): _110.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _110.MsgUpdateGroupAdminResponse): _110.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupAdminResponseProtoMsg): _110.MsgUpdateGroupAdminResponse;
                toProto(message: _110.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupAdminResponse): _110.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _110.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_110.MsgUpdateGroupMetadata>): _110.MsgUpdateGroupMetadata;
                fromAmino(object: _110.MsgUpdateGroupMetadataAmino): _110.MsgUpdateGroupMetadata;
                toAmino(message: _110.MsgUpdateGroupMetadata): _110.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupMetadataAminoMsg): _110.MsgUpdateGroupMetadata;
                toAminoMsg(message: _110.MsgUpdateGroupMetadata): _110.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupMetadataProtoMsg): _110.MsgUpdateGroupMetadata;
                toProto(message: _110.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupMetadata): _110.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupMetadataResponse>): _110.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _110.MsgUpdateGroupMetadataResponseAmino): _110.MsgUpdateGroupMetadataResponse;
                toAmino(_: _110.MsgUpdateGroupMetadataResponse): _110.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupMetadataResponseAminoMsg): _110.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _110.MsgUpdateGroupMetadataResponse): _110.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupMetadataResponseProtoMsg): _110.MsgUpdateGroupMetadataResponse;
                toProto(message: _110.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupMetadataResponse): _110.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _110.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_110.MsgCreateGroupPolicy>): _110.MsgCreateGroupPolicy;
                fromAmino(object: _110.MsgCreateGroupPolicyAmino): _110.MsgCreateGroupPolicy;
                toAmino(message: _110.MsgCreateGroupPolicy): _110.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _110.MsgCreateGroupPolicyAminoMsg): _110.MsgCreateGroupPolicy;
                toAminoMsg(message: _110.MsgCreateGroupPolicy): _110.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _110.MsgCreateGroupPolicyProtoMsg): _110.MsgCreateGroupPolicy;
                toProto(message: _110.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _110.MsgCreateGroupPolicy): _110.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _110.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_110.MsgCreateGroupPolicyResponse>): _110.MsgCreateGroupPolicyResponse;
                fromAmino(object: _110.MsgCreateGroupPolicyResponseAmino): _110.MsgCreateGroupPolicyResponse;
                toAmino(message: _110.MsgCreateGroupPolicyResponse): _110.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _110.MsgCreateGroupPolicyResponseAminoMsg): _110.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _110.MsgCreateGroupPolicyResponse): _110.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _110.MsgCreateGroupPolicyResponseProtoMsg): _110.MsgCreateGroupPolicyResponse;
                toProto(message: _110.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _110.MsgCreateGroupPolicyResponse): _110.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _110.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_110.MsgUpdateGroupPolicyAdmin>): _110.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _110.MsgUpdateGroupPolicyAdminAmino): _110.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _110.MsgUpdateGroupPolicyAdmin): _110.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupPolicyAdminAminoMsg): _110.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _110.MsgUpdateGroupPolicyAdmin): _110.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupPolicyAdminProtoMsg): _110.MsgUpdateGroupPolicyAdmin;
                toProto(message: _110.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupPolicyAdmin): _110.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupPolicyAdminResponse>): _110.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _110.MsgUpdateGroupPolicyAdminResponseAmino): _110.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _110.MsgUpdateGroupPolicyAdminResponse): _110.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupPolicyAdminResponseAminoMsg): _110.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _110.MsgUpdateGroupPolicyAdminResponse): _110.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupPolicyAdminResponseProtoMsg): _110.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _110.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupPolicyAdminResponse): _110.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _110.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_110.MsgCreateGroupWithPolicy>): _110.MsgCreateGroupWithPolicy;
                fromAmino(object: _110.MsgCreateGroupWithPolicyAmino): _110.MsgCreateGroupWithPolicy;
                toAmino(message: _110.MsgCreateGroupWithPolicy): _110.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _110.MsgCreateGroupWithPolicyAminoMsg): _110.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _110.MsgCreateGroupWithPolicy): _110.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _110.MsgCreateGroupWithPolicyProtoMsg): _110.MsgCreateGroupWithPolicy;
                toProto(message: _110.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _110.MsgCreateGroupWithPolicy): _110.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _110.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_110.MsgCreateGroupWithPolicyResponse>): _110.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _110.MsgCreateGroupWithPolicyResponseAmino): _110.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _110.MsgCreateGroupWithPolicyResponse): _110.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _110.MsgCreateGroupWithPolicyResponseAminoMsg): _110.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _110.MsgCreateGroupWithPolicyResponse): _110.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _110.MsgCreateGroupWithPolicyResponseProtoMsg): _110.MsgCreateGroupWithPolicyResponse;
                toProto(message: _110.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _110.MsgCreateGroupWithPolicyResponse): _110.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _110.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_110.MsgUpdateGroupPolicyDecisionPolicy>): _110.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _110.MsgUpdateGroupPolicyDecisionPolicyAmino): _110.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _110.MsgUpdateGroupPolicyDecisionPolicy): _110.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _110.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _110.MsgUpdateGroupPolicyDecisionPolicy): _110.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _110.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _110.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupPolicyDecisionPolicy): _110.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupPolicyDecisionPolicyResponse>): _110.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _110.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _110.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _110.MsgUpdateGroupPolicyDecisionPolicyResponse): _110.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _110.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _110.MsgUpdateGroupPolicyDecisionPolicyResponse): _110.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _110.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _110.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupPolicyDecisionPolicyResponse): _110.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _110.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_110.MsgUpdateGroupPolicyMetadata>): _110.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _110.MsgUpdateGroupPolicyMetadataAmino): _110.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _110.MsgUpdateGroupPolicyMetadata): _110.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupPolicyMetadataAminoMsg): _110.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _110.MsgUpdateGroupPolicyMetadata): _110.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupPolicyMetadataProtoMsg): _110.MsgUpdateGroupPolicyMetadata;
                toProto(message: _110.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupPolicyMetadata): _110.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_110.MsgUpdateGroupPolicyMetadataResponse>): _110.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _110.MsgUpdateGroupPolicyMetadataResponseAmino): _110.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _110.MsgUpdateGroupPolicyMetadataResponse): _110.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _110.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _110.MsgUpdateGroupPolicyMetadataResponse): _110.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _110.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _110.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateGroupPolicyMetadataResponse): _110.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _110.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgSubmitProposal;
                fromPartial(object: Partial<_110.MsgSubmitProposal>): _110.MsgSubmitProposal;
                fromAmino(object: _110.MsgSubmitProposalAmino): _110.MsgSubmitProposal;
                toAmino(message: _110.MsgSubmitProposal): _110.MsgSubmitProposalAmino;
                fromAminoMsg(object: _110.MsgSubmitProposalAminoMsg): _110.MsgSubmitProposal;
                toAminoMsg(message: _110.MsgSubmitProposal): _110.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _110.MsgSubmitProposalProtoMsg): _110.MsgSubmitProposal;
                toProto(message: _110.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _110.MsgSubmitProposal): _110.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _110.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_110.MsgSubmitProposalResponse>): _110.MsgSubmitProposalResponse;
                fromAmino(object: _110.MsgSubmitProposalResponseAmino): _110.MsgSubmitProposalResponse;
                toAmino(message: _110.MsgSubmitProposalResponse): _110.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _110.MsgSubmitProposalResponseAminoMsg): _110.MsgSubmitProposalResponse;
                toAminoMsg(message: _110.MsgSubmitProposalResponse): _110.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _110.MsgSubmitProposalResponseProtoMsg): _110.MsgSubmitProposalResponse;
                toProto(message: _110.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _110.MsgSubmitProposalResponse): _110.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _110.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgWithdrawProposal;
                fromPartial(object: Partial<_110.MsgWithdrawProposal>): _110.MsgWithdrawProposal;
                fromAmino(object: _110.MsgWithdrawProposalAmino): _110.MsgWithdrawProposal;
                toAmino(message: _110.MsgWithdrawProposal): _110.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _110.MsgWithdrawProposalAminoMsg): _110.MsgWithdrawProposal;
                toAminoMsg(message: _110.MsgWithdrawProposal): _110.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _110.MsgWithdrawProposalProtoMsg): _110.MsgWithdrawProposal;
                toProto(message: _110.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _110.MsgWithdrawProposal): _110.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _110.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_110.MsgWithdrawProposalResponse>): _110.MsgWithdrawProposalResponse;
                fromAmino(_: _110.MsgWithdrawProposalResponseAmino): _110.MsgWithdrawProposalResponse;
                toAmino(_: _110.MsgWithdrawProposalResponse): _110.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _110.MsgWithdrawProposalResponseAminoMsg): _110.MsgWithdrawProposalResponse;
                toAminoMsg(message: _110.MsgWithdrawProposalResponse): _110.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _110.MsgWithdrawProposalResponseProtoMsg): _110.MsgWithdrawProposalResponse;
                toProto(message: _110.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _110.MsgWithdrawProposalResponse): _110.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _110.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgVote;
                fromPartial(object: Partial<_110.MsgVote>): _110.MsgVote;
                fromAmino(object: _110.MsgVoteAmino): _110.MsgVote;
                toAmino(message: _110.MsgVote): _110.MsgVoteAmino;
                fromAminoMsg(object: _110.MsgVoteAminoMsg): _110.MsgVote;
                toAminoMsg(message: _110.MsgVote): _110.MsgVoteAminoMsg;
                fromProtoMsg(message: _110.MsgVoteProtoMsg): _110.MsgVote;
                toProto(message: _110.MsgVote): Uint8Array;
                toProtoMsg(message: _110.MsgVote): _110.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _110.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgVoteResponse;
                fromPartial(_: Partial<_110.MsgVoteResponse>): _110.MsgVoteResponse;
                fromAmino(_: _110.MsgVoteResponseAmino): _110.MsgVoteResponse;
                toAmino(_: _110.MsgVoteResponse): _110.MsgVoteResponseAmino;
                fromAminoMsg(object: _110.MsgVoteResponseAminoMsg): _110.MsgVoteResponse;
                toAminoMsg(message: _110.MsgVoteResponse): _110.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _110.MsgVoteResponseProtoMsg): _110.MsgVoteResponse;
                toProto(message: _110.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _110.MsgVoteResponse): _110.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _110.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgExec;
                fromPartial(object: Partial<_110.MsgExec>): _110.MsgExec;
                fromAmino(object: _110.MsgExecAmino): _110.MsgExec;
                toAmino(message: _110.MsgExec): _110.MsgExecAmino;
                fromAminoMsg(object: _110.MsgExecAminoMsg): _110.MsgExec;
                toAminoMsg(message: _110.MsgExec): _110.MsgExecAminoMsg;
                fromProtoMsg(message: _110.MsgExecProtoMsg): _110.MsgExec;
                toProto(message: _110.MsgExec): Uint8Array;
                toProtoMsg(message: _110.MsgExec): _110.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _110.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgExecResponse;
                fromPartial(object: Partial<_110.MsgExecResponse>): _110.MsgExecResponse;
                fromAmino(object: _110.MsgExecResponseAmino): _110.MsgExecResponse;
                toAmino(message: _110.MsgExecResponse): _110.MsgExecResponseAmino;
                fromAminoMsg(object: _110.MsgExecResponseAminoMsg): _110.MsgExecResponse;
                toAminoMsg(message: _110.MsgExecResponse): _110.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _110.MsgExecResponseProtoMsg): _110.MsgExecResponse;
                toProto(message: _110.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _110.MsgExecResponse): _110.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _110.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.MsgLeaveGroup;
                fromPartial(object: Partial<_110.MsgLeaveGroup>): _110.MsgLeaveGroup;
                fromAmino(object: _110.MsgLeaveGroupAmino): _110.MsgLeaveGroup;
                toAmino(message: _110.MsgLeaveGroup): _110.MsgLeaveGroupAmino;
                fromAminoMsg(object: _110.MsgLeaveGroupAminoMsg): _110.MsgLeaveGroup;
                toAminoMsg(message: _110.MsgLeaveGroup): _110.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _110.MsgLeaveGroupProtoMsg): _110.MsgLeaveGroup;
                toProto(message: _110.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _110.MsgLeaveGroup): _110.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _110.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _110.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_110.MsgLeaveGroupResponse>): _110.MsgLeaveGroupResponse;
                fromAmino(_: _110.MsgLeaveGroupResponseAmino): _110.MsgLeaveGroupResponse;
                toAmino(_: _110.MsgLeaveGroupResponse): _110.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _110.MsgLeaveGroupResponseAminoMsg): _110.MsgLeaveGroupResponse;
                toAminoMsg(message: _110.MsgLeaveGroupResponse): _110.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _110.MsgLeaveGroupResponseProtoMsg): _110.MsgLeaveGroupResponse;
                toProto(message: _110.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _110.MsgLeaveGroupResponse): _110.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupInfoRequest;
                fromPartial(object: Partial<_109.QueryGroupInfoRequest>): _109.QueryGroupInfoRequest;
                fromAmino(object: _109.QueryGroupInfoRequestAmino): _109.QueryGroupInfoRequest;
                toAmino(message: _109.QueryGroupInfoRequest): _109.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _109.QueryGroupInfoRequestAminoMsg): _109.QueryGroupInfoRequest;
                toAminoMsg(message: _109.QueryGroupInfoRequest): _109.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupInfoRequestProtoMsg): _109.QueryGroupInfoRequest;
                toProto(message: _109.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupInfoRequest): _109.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupInfoResponse;
                fromPartial(object: Partial<_109.QueryGroupInfoResponse>): _109.QueryGroupInfoResponse;
                fromAmino(object: _109.QueryGroupInfoResponseAmino): _109.QueryGroupInfoResponse;
                toAmino(message: _109.QueryGroupInfoResponse): _109.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _109.QueryGroupInfoResponseAminoMsg): _109.QueryGroupInfoResponse;
                toAminoMsg(message: _109.QueryGroupInfoResponse): _109.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupInfoResponseProtoMsg): _109.QueryGroupInfoResponse;
                toProto(message: _109.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupInfoResponse): _109.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_109.QueryGroupPolicyInfoRequest>): _109.QueryGroupPolicyInfoRequest;
                fromAmino(object: _109.QueryGroupPolicyInfoRequestAmino): _109.QueryGroupPolicyInfoRequest;
                toAmino(message: _109.QueryGroupPolicyInfoRequest): _109.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _109.QueryGroupPolicyInfoRequestAminoMsg): _109.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _109.QueryGroupPolicyInfoRequest): _109.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupPolicyInfoRequestProtoMsg): _109.QueryGroupPolicyInfoRequest;
                toProto(message: _109.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupPolicyInfoRequest): _109.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_109.QueryGroupPolicyInfoResponse>): _109.QueryGroupPolicyInfoResponse;
                fromAmino(object: _109.QueryGroupPolicyInfoResponseAmino): _109.QueryGroupPolicyInfoResponse;
                toAmino(message: _109.QueryGroupPolicyInfoResponse): _109.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _109.QueryGroupPolicyInfoResponseAminoMsg): _109.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _109.QueryGroupPolicyInfoResponse): _109.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupPolicyInfoResponseProtoMsg): _109.QueryGroupPolicyInfoResponse;
                toProto(message: _109.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupPolicyInfoResponse): _109.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupMembersRequest;
                fromPartial(object: Partial<_109.QueryGroupMembersRequest>): _109.QueryGroupMembersRequest;
                fromAmino(object: _109.QueryGroupMembersRequestAmino): _109.QueryGroupMembersRequest;
                toAmino(message: _109.QueryGroupMembersRequest): _109.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _109.QueryGroupMembersRequestAminoMsg): _109.QueryGroupMembersRequest;
                toAminoMsg(message: _109.QueryGroupMembersRequest): _109.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupMembersRequestProtoMsg): _109.QueryGroupMembersRequest;
                toProto(message: _109.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupMembersRequest): _109.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupMembersResponse;
                fromPartial(object: Partial<_109.QueryGroupMembersResponse>): _109.QueryGroupMembersResponse;
                fromAmino(object: _109.QueryGroupMembersResponseAmino): _109.QueryGroupMembersResponse;
                toAmino(message: _109.QueryGroupMembersResponse): _109.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _109.QueryGroupMembersResponseAminoMsg): _109.QueryGroupMembersResponse;
                toAminoMsg(message: _109.QueryGroupMembersResponse): _109.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupMembersResponseProtoMsg): _109.QueryGroupMembersResponse;
                toProto(message: _109.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupMembersResponse): _109.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_109.QueryGroupsByAdminRequest>): _109.QueryGroupsByAdminRequest;
                fromAmino(object: _109.QueryGroupsByAdminRequestAmino): _109.QueryGroupsByAdminRequest;
                toAmino(message: _109.QueryGroupsByAdminRequest): _109.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _109.QueryGroupsByAdminRequestAminoMsg): _109.QueryGroupsByAdminRequest;
                toAminoMsg(message: _109.QueryGroupsByAdminRequest): _109.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupsByAdminRequestProtoMsg): _109.QueryGroupsByAdminRequest;
                toProto(message: _109.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupsByAdminRequest): _109.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_109.QueryGroupsByAdminResponse>): _109.QueryGroupsByAdminResponse;
                fromAmino(object: _109.QueryGroupsByAdminResponseAmino): _109.QueryGroupsByAdminResponse;
                toAmino(message: _109.QueryGroupsByAdminResponse): _109.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _109.QueryGroupsByAdminResponseAminoMsg): _109.QueryGroupsByAdminResponse;
                toAminoMsg(message: _109.QueryGroupsByAdminResponse): _109.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupsByAdminResponseProtoMsg): _109.QueryGroupsByAdminResponse;
                toProto(message: _109.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupsByAdminResponse): _109.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByGroupRequest>): _109.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _109.QueryGroupPoliciesByGroupRequestAmino): _109.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _109.QueryGroupPoliciesByGroupRequest): _109.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _109.QueryGroupPoliciesByGroupRequestAminoMsg): _109.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _109.QueryGroupPoliciesByGroupRequest): _109.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupPoliciesByGroupRequestProtoMsg): _109.QueryGroupPoliciesByGroupRequest;
                toProto(message: _109.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupPoliciesByGroupRequest): _109.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByGroupResponse>): _109.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _109.QueryGroupPoliciesByGroupResponseAmino): _109.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _109.QueryGroupPoliciesByGroupResponse): _109.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _109.QueryGroupPoliciesByGroupResponseAminoMsg): _109.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _109.QueryGroupPoliciesByGroupResponse): _109.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupPoliciesByGroupResponseProtoMsg): _109.QueryGroupPoliciesByGroupResponse;
                toProto(message: _109.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupPoliciesByGroupResponse): _109.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByAdminRequest>): _109.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _109.QueryGroupPoliciesByAdminRequestAmino): _109.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _109.QueryGroupPoliciesByAdminRequest): _109.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _109.QueryGroupPoliciesByAdminRequestAminoMsg): _109.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _109.QueryGroupPoliciesByAdminRequest): _109.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupPoliciesByAdminRequestProtoMsg): _109.QueryGroupPoliciesByAdminRequest;
                toProto(message: _109.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupPoliciesByAdminRequest): _109.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_109.QueryGroupPoliciesByAdminResponse>): _109.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _109.QueryGroupPoliciesByAdminResponseAmino): _109.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _109.QueryGroupPoliciesByAdminResponse): _109.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _109.QueryGroupPoliciesByAdminResponseAminoMsg): _109.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _109.QueryGroupPoliciesByAdminResponse): _109.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupPoliciesByAdminResponseProtoMsg): _109.QueryGroupPoliciesByAdminResponse;
                toProto(message: _109.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupPoliciesByAdminResponse): _109.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _109.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryProposalRequest;
                fromPartial(object: Partial<_109.QueryProposalRequest>): _109.QueryProposalRequest;
                fromAmino(object: _109.QueryProposalRequestAmino): _109.QueryProposalRequest;
                toAmino(message: _109.QueryProposalRequest): _109.QueryProposalRequestAmino;
                fromAminoMsg(object: _109.QueryProposalRequestAminoMsg): _109.QueryProposalRequest;
                toAminoMsg(message: _109.QueryProposalRequest): _109.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _109.QueryProposalRequestProtoMsg): _109.QueryProposalRequest;
                toProto(message: _109.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _109.QueryProposalRequest): _109.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _109.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryProposalResponse;
                fromPartial(object: Partial<_109.QueryProposalResponse>): _109.QueryProposalResponse;
                fromAmino(object: _109.QueryProposalResponseAmino): _109.QueryProposalResponse;
                toAmino(message: _109.QueryProposalResponse): _109.QueryProposalResponseAmino;
                fromAminoMsg(object: _109.QueryProposalResponseAminoMsg): _109.QueryProposalResponse;
                toAminoMsg(message: _109.QueryProposalResponse): _109.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _109.QueryProposalResponseProtoMsg): _109.QueryProposalResponse;
                toProto(message: _109.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _109.QueryProposalResponse): _109.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _109.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_109.QueryProposalsByGroupPolicyRequest>): _109.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _109.QueryProposalsByGroupPolicyRequestAmino): _109.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _109.QueryProposalsByGroupPolicyRequest): _109.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _109.QueryProposalsByGroupPolicyRequestAminoMsg): _109.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _109.QueryProposalsByGroupPolicyRequest): _109.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _109.QueryProposalsByGroupPolicyRequestProtoMsg): _109.QueryProposalsByGroupPolicyRequest;
                toProto(message: _109.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _109.QueryProposalsByGroupPolicyRequest): _109.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _109.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_109.QueryProposalsByGroupPolicyResponse>): _109.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _109.QueryProposalsByGroupPolicyResponseAmino): _109.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _109.QueryProposalsByGroupPolicyResponse): _109.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _109.QueryProposalsByGroupPolicyResponseAminoMsg): _109.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _109.QueryProposalsByGroupPolicyResponse): _109.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _109.QueryProposalsByGroupPolicyResponseProtoMsg): _109.QueryProposalsByGroupPolicyResponse;
                toProto(message: _109.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _109.QueryProposalsByGroupPolicyResponse): _109.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _109.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_109.QueryVoteByProposalVoterRequest>): _109.QueryVoteByProposalVoterRequest;
                fromAmino(object: _109.QueryVoteByProposalVoterRequestAmino): _109.QueryVoteByProposalVoterRequest;
                toAmino(message: _109.QueryVoteByProposalVoterRequest): _109.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _109.QueryVoteByProposalVoterRequestAminoMsg): _109.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _109.QueryVoteByProposalVoterRequest): _109.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _109.QueryVoteByProposalVoterRequestProtoMsg): _109.QueryVoteByProposalVoterRequest;
                toProto(message: _109.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _109.QueryVoteByProposalVoterRequest): _109.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _109.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_109.QueryVoteByProposalVoterResponse>): _109.QueryVoteByProposalVoterResponse;
                fromAmino(object: _109.QueryVoteByProposalVoterResponseAmino): _109.QueryVoteByProposalVoterResponse;
                toAmino(message: _109.QueryVoteByProposalVoterResponse): _109.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _109.QueryVoteByProposalVoterResponseAminoMsg): _109.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _109.QueryVoteByProposalVoterResponse): _109.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _109.QueryVoteByProposalVoterResponseProtoMsg): _109.QueryVoteByProposalVoterResponse;
                toProto(message: _109.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _109.QueryVoteByProposalVoterResponse): _109.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _109.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_109.QueryVotesByProposalRequest>): _109.QueryVotesByProposalRequest;
                fromAmino(object: _109.QueryVotesByProposalRequestAmino): _109.QueryVotesByProposalRequest;
                toAmino(message: _109.QueryVotesByProposalRequest): _109.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _109.QueryVotesByProposalRequestAminoMsg): _109.QueryVotesByProposalRequest;
                toAminoMsg(message: _109.QueryVotesByProposalRequest): _109.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _109.QueryVotesByProposalRequestProtoMsg): _109.QueryVotesByProposalRequest;
                toProto(message: _109.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _109.QueryVotesByProposalRequest): _109.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _109.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_109.QueryVotesByProposalResponse>): _109.QueryVotesByProposalResponse;
                fromAmino(object: _109.QueryVotesByProposalResponseAmino): _109.QueryVotesByProposalResponse;
                toAmino(message: _109.QueryVotesByProposalResponse): _109.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _109.QueryVotesByProposalResponseAminoMsg): _109.QueryVotesByProposalResponse;
                toAminoMsg(message: _109.QueryVotesByProposalResponse): _109.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _109.QueryVotesByProposalResponseProtoMsg): _109.QueryVotesByProposalResponse;
                toProto(message: _109.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _109.QueryVotesByProposalResponse): _109.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _109.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_109.QueryVotesByVoterRequest>): _109.QueryVotesByVoterRequest;
                fromAmino(object: _109.QueryVotesByVoterRequestAmino): _109.QueryVotesByVoterRequest;
                toAmino(message: _109.QueryVotesByVoterRequest): _109.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _109.QueryVotesByVoterRequestAminoMsg): _109.QueryVotesByVoterRequest;
                toAminoMsg(message: _109.QueryVotesByVoterRequest): _109.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _109.QueryVotesByVoterRequestProtoMsg): _109.QueryVotesByVoterRequest;
                toProto(message: _109.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _109.QueryVotesByVoterRequest): _109.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _109.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_109.QueryVotesByVoterResponse>): _109.QueryVotesByVoterResponse;
                fromAmino(object: _109.QueryVotesByVoterResponseAmino): _109.QueryVotesByVoterResponse;
                toAmino(message: _109.QueryVotesByVoterResponse): _109.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _109.QueryVotesByVoterResponseAminoMsg): _109.QueryVotesByVoterResponse;
                toAminoMsg(message: _109.QueryVotesByVoterResponse): _109.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _109.QueryVotesByVoterResponseProtoMsg): _109.QueryVotesByVoterResponse;
                toProto(message: _109.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _109.QueryVotesByVoterResponse): _109.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_109.QueryGroupsByMemberRequest>): _109.QueryGroupsByMemberRequest;
                fromAmino(object: _109.QueryGroupsByMemberRequestAmino): _109.QueryGroupsByMemberRequest;
                toAmino(message: _109.QueryGroupsByMemberRequest): _109.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _109.QueryGroupsByMemberRequestAminoMsg): _109.QueryGroupsByMemberRequest;
                toAminoMsg(message: _109.QueryGroupsByMemberRequest): _109.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupsByMemberRequestProtoMsg): _109.QueryGroupsByMemberRequest;
                toProto(message: _109.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupsByMemberRequest): _109.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_109.QueryGroupsByMemberResponse>): _109.QueryGroupsByMemberResponse;
                fromAmino(object: _109.QueryGroupsByMemberResponseAmino): _109.QueryGroupsByMemberResponse;
                toAmino(message: _109.QueryGroupsByMemberResponse): _109.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _109.QueryGroupsByMemberResponseAminoMsg): _109.QueryGroupsByMemberResponse;
                toAminoMsg(message: _109.QueryGroupsByMemberResponse): _109.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupsByMemberResponseProtoMsg): _109.QueryGroupsByMemberResponse;
                toProto(message: _109.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupsByMemberResponse): _109.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _109.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryTallyResultRequest;
                fromPartial(object: Partial<_109.QueryTallyResultRequest>): _109.QueryTallyResultRequest;
                fromAmino(object: _109.QueryTallyResultRequestAmino): _109.QueryTallyResultRequest;
                toAmino(message: _109.QueryTallyResultRequest): _109.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _109.QueryTallyResultRequestAminoMsg): _109.QueryTallyResultRequest;
                toAminoMsg(message: _109.QueryTallyResultRequest): _109.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _109.QueryTallyResultRequestProtoMsg): _109.QueryTallyResultRequest;
                toProto(message: _109.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _109.QueryTallyResultRequest): _109.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _109.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryTallyResultResponse;
                fromPartial(object: Partial<_109.QueryTallyResultResponse>): _109.QueryTallyResultResponse;
                fromAmino(object: _109.QueryTallyResultResponseAmino): _109.QueryTallyResultResponse;
                toAmino(message: _109.QueryTallyResultResponse): _109.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _109.QueryTallyResultResponseAminoMsg): _109.QueryTallyResultResponse;
                toAminoMsg(message: _109.QueryTallyResultResponse): _109.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _109.QueryTallyResultResponseProtoMsg): _109.QueryTallyResultResponse;
                toProto(message: _109.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _109.QueryTallyResultResponse): _109.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _109.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupsRequest;
                fromPartial(object: Partial<_109.QueryGroupsRequest>): _109.QueryGroupsRequest;
                fromAmino(object: _109.QueryGroupsRequestAmino): _109.QueryGroupsRequest;
                toAmino(message: _109.QueryGroupsRequest): _109.QueryGroupsRequestAmino;
                fromAminoMsg(object: _109.QueryGroupsRequestAminoMsg): _109.QueryGroupsRequest;
                toAminoMsg(message: _109.QueryGroupsRequest): _109.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _109.QueryGroupsRequestProtoMsg): _109.QueryGroupsRequest;
                toProto(message: _109.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _109.QueryGroupsRequest): _109.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _109.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryGroupsResponse;
                fromPartial(object: Partial<_109.QueryGroupsResponse>): _109.QueryGroupsResponse;
                fromAmino(object: _109.QueryGroupsResponseAmino): _109.QueryGroupsResponse;
                toAmino(message: _109.QueryGroupsResponse): _109.QueryGroupsResponseAmino;
                fromAminoMsg(object: _109.QueryGroupsResponseAminoMsg): _109.QueryGroupsResponse;
                toAminoMsg(message: _109.QueryGroupsResponse): _109.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _109.QueryGroupsResponseProtoMsg): _109.QueryGroupsResponse;
                toProto(message: _109.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _109.QueryGroupsResponse): _109.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _108.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.GenesisState;
                fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
                fromAmino(object: _108.GenesisStateAmino): _108.GenesisState;
                toAmino(message: _108.GenesisState): _108.GenesisStateAmino;
                fromAminoMsg(object: _108.GenesisStateAminoMsg): _108.GenesisState;
                toAminoMsg(message: _108.GenesisState): _108.GenesisStateAminoMsg;
                fromProtoMsg(message: _108.GenesisStateProtoMsg): _108.GenesisState;
                toProto(message: _108.GenesisState): Uint8Array;
                toProtoMsg(message: _108.GenesisState): _108.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _107.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventCreateGroup;
                fromPartial(object: Partial<_107.EventCreateGroup>): _107.EventCreateGroup;
                fromAmino(object: _107.EventCreateGroupAmino): _107.EventCreateGroup;
                toAmino(message: _107.EventCreateGroup): _107.EventCreateGroupAmino;
                fromAminoMsg(object: _107.EventCreateGroupAminoMsg): _107.EventCreateGroup;
                toAminoMsg(message: _107.EventCreateGroup): _107.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _107.EventCreateGroupProtoMsg): _107.EventCreateGroup;
                toProto(message: _107.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _107.EventCreateGroup): _107.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _107.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventUpdateGroup;
                fromPartial(object: Partial<_107.EventUpdateGroup>): _107.EventUpdateGroup;
                fromAmino(object: _107.EventUpdateGroupAmino): _107.EventUpdateGroup;
                toAmino(message: _107.EventUpdateGroup): _107.EventUpdateGroupAmino;
                fromAminoMsg(object: _107.EventUpdateGroupAminoMsg): _107.EventUpdateGroup;
                toAminoMsg(message: _107.EventUpdateGroup): _107.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _107.EventUpdateGroupProtoMsg): _107.EventUpdateGroup;
                toProto(message: _107.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _107.EventUpdateGroup): _107.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _107.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventCreateGroupPolicy;
                fromPartial(object: Partial<_107.EventCreateGroupPolicy>): _107.EventCreateGroupPolicy;
                fromAmino(object: _107.EventCreateGroupPolicyAmino): _107.EventCreateGroupPolicy;
                toAmino(message: _107.EventCreateGroupPolicy): _107.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _107.EventCreateGroupPolicyAminoMsg): _107.EventCreateGroupPolicy;
                toAminoMsg(message: _107.EventCreateGroupPolicy): _107.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _107.EventCreateGroupPolicyProtoMsg): _107.EventCreateGroupPolicy;
                toProto(message: _107.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _107.EventCreateGroupPolicy): _107.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _107.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_107.EventUpdateGroupPolicy>): _107.EventUpdateGroupPolicy;
                fromAmino(object: _107.EventUpdateGroupPolicyAmino): _107.EventUpdateGroupPolicy;
                toAmino(message: _107.EventUpdateGroupPolicy): _107.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _107.EventUpdateGroupPolicyAminoMsg): _107.EventUpdateGroupPolicy;
                toAminoMsg(message: _107.EventUpdateGroupPolicy): _107.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _107.EventUpdateGroupPolicyProtoMsg): _107.EventUpdateGroupPolicy;
                toProto(message: _107.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _107.EventUpdateGroupPolicy): _107.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _107.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventSubmitProposal;
                fromPartial(object: Partial<_107.EventSubmitProposal>): _107.EventSubmitProposal;
                fromAmino(object: _107.EventSubmitProposalAmino): _107.EventSubmitProposal;
                toAmino(message: _107.EventSubmitProposal): _107.EventSubmitProposalAmino;
                fromAminoMsg(object: _107.EventSubmitProposalAminoMsg): _107.EventSubmitProposal;
                toAminoMsg(message: _107.EventSubmitProposal): _107.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _107.EventSubmitProposalProtoMsg): _107.EventSubmitProposal;
                toProto(message: _107.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _107.EventSubmitProposal): _107.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _107.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventWithdrawProposal;
                fromPartial(object: Partial<_107.EventWithdrawProposal>): _107.EventWithdrawProposal;
                fromAmino(object: _107.EventWithdrawProposalAmino): _107.EventWithdrawProposal;
                toAmino(message: _107.EventWithdrawProposal): _107.EventWithdrawProposalAmino;
                fromAminoMsg(object: _107.EventWithdrawProposalAminoMsg): _107.EventWithdrawProposal;
                toAminoMsg(message: _107.EventWithdrawProposal): _107.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _107.EventWithdrawProposalProtoMsg): _107.EventWithdrawProposal;
                toProto(message: _107.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _107.EventWithdrawProposal): _107.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _107.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventVote;
                fromPartial(object: Partial<_107.EventVote>): _107.EventVote;
                fromAmino(object: _107.EventVoteAmino): _107.EventVote;
                toAmino(message: _107.EventVote): _107.EventVoteAmino;
                fromAminoMsg(object: _107.EventVoteAminoMsg): _107.EventVote;
                toAminoMsg(message: _107.EventVote): _107.EventVoteAminoMsg;
                fromProtoMsg(message: _107.EventVoteProtoMsg): _107.EventVote;
                toProto(message: _107.EventVote): Uint8Array;
                toProtoMsg(message: _107.EventVote): _107.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _107.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventExec;
                fromPartial(object: Partial<_107.EventExec>): _107.EventExec;
                fromAmino(object: _107.EventExecAmino): _107.EventExec;
                toAmino(message: _107.EventExec): _107.EventExecAmino;
                fromAminoMsg(object: _107.EventExecAminoMsg): _107.EventExec;
                toAminoMsg(message: _107.EventExec): _107.EventExecAminoMsg;
                fromProtoMsg(message: _107.EventExecProtoMsg): _107.EventExec;
                toProto(message: _107.EventExec): Uint8Array;
                toProtoMsg(message: _107.EventExec): _107.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _107.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventLeaveGroup;
                fromPartial(object: Partial<_107.EventLeaveGroup>): _107.EventLeaveGroup;
                fromAmino(object: _107.EventLeaveGroupAmino): _107.EventLeaveGroup;
                toAmino(message: _107.EventLeaveGroup): _107.EventLeaveGroupAmino;
                fromAminoMsg(object: _107.EventLeaveGroupAminoMsg): _107.EventLeaveGroup;
                toAminoMsg(message: _107.EventLeaveGroup): _107.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _107.EventLeaveGroupProtoMsg): _107.EventLeaveGroup;
                toProto(message: _107.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _107.EventLeaveGroup): _107.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _107.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.EventProposalPruned;
                fromPartial(object: Partial<_107.EventProposalPruned>): _107.EventProposalPruned;
                fromAmino(object: _107.EventProposalPrunedAmino): _107.EventProposalPruned;
                toAmino(message: _107.EventProposalPruned): _107.EventProposalPrunedAmino;
                fromAminoMsg(object: _107.EventProposalPrunedAminoMsg): _107.EventProposalPruned;
                toAminoMsg(message: _107.EventProposalPruned): _107.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _107.EventProposalPrunedProtoMsg): _107.EventProposalPruned;
                toProto(message: _107.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _107.EventProposalPruned): _107.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _112.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.Module;
                    fromPartial(object: Partial<_112.Module>): _112.Module;
                    fromAmino(object: _112.ModuleAmino): _112.Module;
                    toAmino(message: _112.Module): _112.ModuleAmino;
                    fromAminoMsg(object: _112.ModuleAminoMsg): _112.Module;
                    toAminoMsg(message: _112.Module): _112.ModuleAminoMsg;
                    fromProtoMsg(message: _112.ModuleProtoMsg): _112.Module;
                    toProto(message: _112.Module): Uint8Array;
                    toProtoMsg(message: _112.Module): _112.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                inflation(request?: _115.QueryInflationRequest): Promise<_115.QueryInflationResponse>;
                annualProvisions(request?: _115.QueryAnnualProvisionsRequest): Promise<_115.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _116.MsgUpdateParams) => _116.MsgUpdateParamsAmino;
                    fromAmino: (object: _116.MsgUpdateParamsAmino) => _116.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _116.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.MsgUpdateParams;
                fromPartial(object: Partial<_116.MsgUpdateParams>): _116.MsgUpdateParams;
                fromAmino(object: _116.MsgUpdateParamsAmino): _116.MsgUpdateParams;
                toAmino(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAmino;
                fromAminoMsg(object: _116.MsgUpdateParamsAminoMsg): _116.MsgUpdateParams;
                toAminoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _116.MsgUpdateParamsProtoMsg): _116.MsgUpdateParams;
                toProto(message: _116.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _116.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_116.MsgUpdateParamsResponse>): _116.MsgUpdateParamsResponse;
                fromAmino(_: _116.MsgUpdateParamsResponseAmino): _116.MsgUpdateParamsResponse;
                toAmino(_: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _116.MsgUpdateParamsResponseAminoMsg): _116.MsgUpdateParamsResponse;
                toAminoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _116.MsgUpdateParamsResponseProtoMsg): _116.MsgUpdateParamsResponse;
                toProto(message: _116.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseProtoMsg;
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _115.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.QueryInflationRequest;
                fromPartial(_: Partial<_115.QueryInflationRequest>): _115.QueryInflationRequest;
                fromAmino(_: _115.QueryInflationRequestAmino): _115.QueryInflationRequest;
                toAmino(_: _115.QueryInflationRequest): _115.QueryInflationRequestAmino;
                fromAminoMsg(object: _115.QueryInflationRequestAminoMsg): _115.QueryInflationRequest;
                toAminoMsg(message: _115.QueryInflationRequest): _115.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _115.QueryInflationRequestProtoMsg): _115.QueryInflationRequest;
                toProto(message: _115.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _115.QueryInflationRequest): _115.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _115.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryInflationResponse;
                fromPartial(object: Partial<_115.QueryInflationResponse>): _115.QueryInflationResponse;
                fromAmino(object: _115.QueryInflationResponseAmino): _115.QueryInflationResponse;
                toAmino(message: _115.QueryInflationResponse): _115.QueryInflationResponseAmino;
                fromAminoMsg(object: _115.QueryInflationResponseAminoMsg): _115.QueryInflationResponse;
                toAminoMsg(message: _115.QueryInflationResponse): _115.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _115.QueryInflationResponseProtoMsg): _115.QueryInflationResponse;
                toProto(message: _115.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _115.QueryInflationResponse): _115.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _115.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_115.QueryAnnualProvisionsRequest>): _115.QueryAnnualProvisionsRequest;
                fromAmino(_: _115.QueryAnnualProvisionsRequestAmino): _115.QueryAnnualProvisionsRequest;
                toAmino(_: _115.QueryAnnualProvisionsRequest): _115.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _115.QueryAnnualProvisionsRequestAminoMsg): _115.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _115.QueryAnnualProvisionsRequest): _115.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _115.QueryAnnualProvisionsRequestProtoMsg): _115.QueryAnnualProvisionsRequest;
                toProto(message: _115.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _115.QueryAnnualProvisionsRequest): _115.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _115.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_115.QueryAnnualProvisionsResponse>): _115.QueryAnnualProvisionsResponse;
                fromAmino(object: _115.QueryAnnualProvisionsResponseAmino): _115.QueryAnnualProvisionsResponse;
                toAmino(message: _115.QueryAnnualProvisionsResponse): _115.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _115.QueryAnnualProvisionsResponseAminoMsg): _115.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _115.QueryAnnualProvisionsResponse): _115.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _115.QueryAnnualProvisionsResponseProtoMsg): _115.QueryAnnualProvisionsResponse;
                toProto(message: _115.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _115.QueryAnnualProvisionsResponse): _115.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _114.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Minter;
                fromPartial(object: Partial<_114.Minter>): _114.Minter;
                fromAmino(object: _114.MinterAmino): _114.Minter;
                toAmino(message: _114.Minter): _114.MinterAmino;
                fromAminoMsg(object: _114.MinterAminoMsg): _114.Minter;
                toAminoMsg(message: _114.Minter): _114.MinterAminoMsg;
                fromProtoMsg(message: _114.MinterProtoMsg): _114.Minter;
                toProto(message: _114.Minter): Uint8Array;
                toProtoMsg(message: _114.Minter): _114.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _114.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.Params;
                fromPartial(object: Partial<_114.Params>): _114.Params;
                fromAmino(object: _114.ParamsAmino): _114.Params;
                toAmino(message: _114.Params): _114.ParamsAmino;
                fromAminoMsg(object: _114.ParamsAminoMsg): _114.Params;
                toAminoMsg(message: _114.Params): _114.ParamsAminoMsg;
                fromProtoMsg(message: _114.ParamsProtoMsg): _114.Params;
                toProto(message: _114.Params): Uint8Array;
                toProtoMsg(message: _114.Params): _114.ParamsProtoMsg;
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
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _122.QueryBalanceRequest): Promise<_122.QueryBalanceResponse>;
                owner(request: _122.QueryOwnerRequest): Promise<_122.QueryOwnerResponse>;
                supply(request: _122.QuerySupplyRequest): Promise<_122.QuerySupplyResponse>;
                nFTs(request: _122.QueryNFTsRequest): Promise<_122.QueryNFTsResponse>;
                nFT(request: _122.QueryNFTRequest): Promise<_122.QueryNFTResponse>;
                class(request: _122.QueryClassRequest): Promise<_122.QueryClassResponse>;
                classes(request?: _122.QueryClassesRequest): Promise<_122.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _123.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _123.MsgSend): {
                        typeUrl: string;
                        value: _123.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _123.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _123.MsgSend): {
                        typeUrl: string;
                        value: _123.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSend) => _123.MsgSendAmino;
                    fromAmino: (object: _123.MsgSendAmino) => _123.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _123.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.MsgSend;
                fromPartial(object: Partial<_123.MsgSend>): _123.MsgSend;
                fromAmino(object: _123.MsgSendAmino): _123.MsgSend;
                toAmino(message: _123.MsgSend): _123.MsgSendAmino;
                fromAminoMsg(object: _123.MsgSendAminoMsg): _123.MsgSend;
                toAminoMsg(message: _123.MsgSend): _123.MsgSendAminoMsg;
                fromProtoMsg(message: _123.MsgSendProtoMsg): _123.MsgSend;
                toProto(message: _123.MsgSend): Uint8Array;
                toProtoMsg(message: _123.MsgSend): _123.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _123.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _123.MsgSendResponse;
                fromPartial(_: Partial<_123.MsgSendResponse>): _123.MsgSendResponse;
                fromAmino(_: _123.MsgSendResponseAmino): _123.MsgSendResponse;
                toAmino(_: _123.MsgSendResponse): _123.MsgSendResponseAmino;
                fromAminoMsg(object: _123.MsgSendResponseAminoMsg): _123.MsgSendResponse;
                toAminoMsg(message: _123.MsgSendResponse): _123.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSendResponseProtoMsg): _123.MsgSendResponse;
                toProto(message: _123.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSendResponse): _123.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _122.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryBalanceRequest;
                fromPartial(object: Partial<_122.QueryBalanceRequest>): _122.QueryBalanceRequest;
                fromAmino(object: _122.QueryBalanceRequestAmino): _122.QueryBalanceRequest;
                toAmino(message: _122.QueryBalanceRequest): _122.QueryBalanceRequestAmino;
                fromAminoMsg(object: _122.QueryBalanceRequestAminoMsg): _122.QueryBalanceRequest;
                toAminoMsg(message: _122.QueryBalanceRequest): _122.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _122.QueryBalanceRequestProtoMsg): _122.QueryBalanceRequest;
                toProto(message: _122.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _122.QueryBalanceRequest): _122.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _122.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryBalanceResponse;
                fromPartial(object: Partial<_122.QueryBalanceResponse>): _122.QueryBalanceResponse;
                fromAmino(object: _122.QueryBalanceResponseAmino): _122.QueryBalanceResponse;
                toAmino(message: _122.QueryBalanceResponse): _122.QueryBalanceResponseAmino;
                fromAminoMsg(object: _122.QueryBalanceResponseAminoMsg): _122.QueryBalanceResponse;
                toAminoMsg(message: _122.QueryBalanceResponse): _122.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _122.QueryBalanceResponseProtoMsg): _122.QueryBalanceResponse;
                toProto(message: _122.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _122.QueryBalanceResponse): _122.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _122.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryOwnerRequest;
                fromPartial(object: Partial<_122.QueryOwnerRequest>): _122.QueryOwnerRequest;
                fromAmino(object: _122.QueryOwnerRequestAmino): _122.QueryOwnerRequest;
                toAmino(message: _122.QueryOwnerRequest): _122.QueryOwnerRequestAmino;
                fromAminoMsg(object: _122.QueryOwnerRequestAminoMsg): _122.QueryOwnerRequest;
                toAminoMsg(message: _122.QueryOwnerRequest): _122.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _122.QueryOwnerRequestProtoMsg): _122.QueryOwnerRequest;
                toProto(message: _122.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _122.QueryOwnerRequest): _122.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _122.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryOwnerResponse;
                fromPartial(object: Partial<_122.QueryOwnerResponse>): _122.QueryOwnerResponse;
                fromAmino(object: _122.QueryOwnerResponseAmino): _122.QueryOwnerResponse;
                toAmino(message: _122.QueryOwnerResponse): _122.QueryOwnerResponseAmino;
                fromAminoMsg(object: _122.QueryOwnerResponseAminoMsg): _122.QueryOwnerResponse;
                toAminoMsg(message: _122.QueryOwnerResponse): _122.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _122.QueryOwnerResponseProtoMsg): _122.QueryOwnerResponse;
                toProto(message: _122.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _122.QueryOwnerResponse): _122.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _122.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QuerySupplyRequest;
                fromPartial(object: Partial<_122.QuerySupplyRequest>): _122.QuerySupplyRequest;
                fromAmino(object: _122.QuerySupplyRequestAmino): _122.QuerySupplyRequest;
                toAmino(message: _122.QuerySupplyRequest): _122.QuerySupplyRequestAmino;
                fromAminoMsg(object: _122.QuerySupplyRequestAminoMsg): _122.QuerySupplyRequest;
                toAminoMsg(message: _122.QuerySupplyRequest): _122.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _122.QuerySupplyRequestProtoMsg): _122.QuerySupplyRequest;
                toProto(message: _122.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _122.QuerySupplyRequest): _122.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _122.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QuerySupplyResponse;
                fromPartial(object: Partial<_122.QuerySupplyResponse>): _122.QuerySupplyResponse;
                fromAmino(object: _122.QuerySupplyResponseAmino): _122.QuerySupplyResponse;
                toAmino(message: _122.QuerySupplyResponse): _122.QuerySupplyResponseAmino;
                fromAminoMsg(object: _122.QuerySupplyResponseAminoMsg): _122.QuerySupplyResponse;
                toAminoMsg(message: _122.QuerySupplyResponse): _122.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _122.QuerySupplyResponseProtoMsg): _122.QuerySupplyResponse;
                toProto(message: _122.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _122.QuerySupplyResponse): _122.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _122.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryNFTsRequest;
                fromPartial(object: Partial<_122.QueryNFTsRequest>): _122.QueryNFTsRequest;
                fromAmino(object: _122.QueryNFTsRequestAmino): _122.QueryNFTsRequest;
                toAmino(message: _122.QueryNFTsRequest): _122.QueryNFTsRequestAmino;
                fromAminoMsg(object: _122.QueryNFTsRequestAminoMsg): _122.QueryNFTsRequest;
                toAminoMsg(message: _122.QueryNFTsRequest): _122.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryNFTsRequestProtoMsg): _122.QueryNFTsRequest;
                toProto(message: _122.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryNFTsRequest): _122.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _122.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryNFTsResponse;
                fromPartial(object: Partial<_122.QueryNFTsResponse>): _122.QueryNFTsResponse;
                fromAmino(object: _122.QueryNFTsResponseAmino): _122.QueryNFTsResponse;
                toAmino(message: _122.QueryNFTsResponse): _122.QueryNFTsResponseAmino;
                fromAminoMsg(object: _122.QueryNFTsResponseAminoMsg): _122.QueryNFTsResponse;
                toAminoMsg(message: _122.QueryNFTsResponse): _122.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryNFTsResponseProtoMsg): _122.QueryNFTsResponse;
                toProto(message: _122.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryNFTsResponse): _122.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _122.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryNFTRequest;
                fromPartial(object: Partial<_122.QueryNFTRequest>): _122.QueryNFTRequest;
                fromAmino(object: _122.QueryNFTRequestAmino): _122.QueryNFTRequest;
                toAmino(message: _122.QueryNFTRequest): _122.QueryNFTRequestAmino;
                fromAminoMsg(object: _122.QueryNFTRequestAminoMsg): _122.QueryNFTRequest;
                toAminoMsg(message: _122.QueryNFTRequest): _122.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _122.QueryNFTRequestProtoMsg): _122.QueryNFTRequest;
                toProto(message: _122.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _122.QueryNFTRequest): _122.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _122.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryNFTResponse;
                fromPartial(object: Partial<_122.QueryNFTResponse>): _122.QueryNFTResponse;
                fromAmino(object: _122.QueryNFTResponseAmino): _122.QueryNFTResponse;
                toAmino(message: _122.QueryNFTResponse): _122.QueryNFTResponseAmino;
                fromAminoMsg(object: _122.QueryNFTResponseAminoMsg): _122.QueryNFTResponse;
                toAminoMsg(message: _122.QueryNFTResponse): _122.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _122.QueryNFTResponseProtoMsg): _122.QueryNFTResponse;
                toProto(message: _122.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _122.QueryNFTResponse): _122.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _122.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryClassRequest;
                fromPartial(object: Partial<_122.QueryClassRequest>): _122.QueryClassRequest;
                fromAmino(object: _122.QueryClassRequestAmino): _122.QueryClassRequest;
                toAmino(message: _122.QueryClassRequest): _122.QueryClassRequestAmino;
                fromAminoMsg(object: _122.QueryClassRequestAminoMsg): _122.QueryClassRequest;
                toAminoMsg(message: _122.QueryClassRequest): _122.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _122.QueryClassRequestProtoMsg): _122.QueryClassRequest;
                toProto(message: _122.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _122.QueryClassRequest): _122.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _122.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryClassResponse;
                fromPartial(object: Partial<_122.QueryClassResponse>): _122.QueryClassResponse;
                fromAmino(object: _122.QueryClassResponseAmino): _122.QueryClassResponse;
                toAmino(message: _122.QueryClassResponse): _122.QueryClassResponseAmino;
                fromAminoMsg(object: _122.QueryClassResponseAminoMsg): _122.QueryClassResponse;
                toAminoMsg(message: _122.QueryClassResponse): _122.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _122.QueryClassResponseProtoMsg): _122.QueryClassResponse;
                toProto(message: _122.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _122.QueryClassResponse): _122.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _122.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryClassesRequest;
                fromPartial(object: Partial<_122.QueryClassesRequest>): _122.QueryClassesRequest;
                fromAmino(object: _122.QueryClassesRequestAmino): _122.QueryClassesRequest;
                toAmino(message: _122.QueryClassesRequest): _122.QueryClassesRequestAmino;
                fromAminoMsg(object: _122.QueryClassesRequestAminoMsg): _122.QueryClassesRequest;
                toAminoMsg(message: _122.QueryClassesRequest): _122.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _122.QueryClassesRequestProtoMsg): _122.QueryClassesRequest;
                toProto(message: _122.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _122.QueryClassesRequest): _122.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _122.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryClassesResponse;
                fromPartial(object: Partial<_122.QueryClassesResponse>): _122.QueryClassesResponse;
                fromAmino(object: _122.QueryClassesResponseAmino): _122.QueryClassesResponse;
                toAmino(message: _122.QueryClassesResponse): _122.QueryClassesResponseAmino;
                fromAminoMsg(object: _122.QueryClassesResponseAminoMsg): _122.QueryClassesResponse;
                toAminoMsg(message: _122.QueryClassesResponse): _122.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _122.QueryClassesResponseProtoMsg): _122.QueryClassesResponse;
                toProto(message: _122.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _122.QueryClassesResponse): _122.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _121.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Class;
                fromPartial(object: Partial<_121.Class>): _121.Class;
                fromAmino(object: _121.ClassAmino): _121.Class;
                toAmino(message: _121.Class): _121.ClassAmino;
                fromAminoMsg(object: _121.ClassAminoMsg): _121.Class;
                toAminoMsg(message: _121.Class): _121.ClassAminoMsg;
                fromProtoMsg(message: _121.ClassProtoMsg): _121.Class;
                toProto(message: _121.Class): Uint8Array;
                toProtoMsg(message: _121.Class): _121.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _121.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.NFT;
                fromPartial(object: Partial<_121.NFT>): _121.NFT;
                fromAmino(object: _121.NFTAmino): _121.NFT;
                toAmino(message: _121.NFT): _121.NFTAmino;
                fromAminoMsg(object: _121.NFTAminoMsg): _121.NFT;
                toAminoMsg(message: _121.NFT): _121.NFTAminoMsg;
                fromProtoMsg(message: _121.NFTProtoMsg): _121.NFT;
                toProto(message: _121.NFT): Uint8Array;
                toProtoMsg(message: _121.NFT): _121.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _120.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.Entry;
                fromPartial(object: Partial<_120.Entry>): _120.Entry;
                fromAmino(object: _120.EntryAmino): _120.Entry;
                toAmino(message: _120.Entry): _120.EntryAmino;
                fromAminoMsg(object: _120.EntryAminoMsg): _120.Entry;
                toAminoMsg(message: _120.Entry): _120.EntryAminoMsg;
                fromProtoMsg(message: _120.EntryProtoMsg): _120.Entry;
                toProto(message: _120.Entry): Uint8Array;
                toProtoMsg(message: _120.Entry): _120.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _119.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.EventSend;
                fromPartial(object: Partial<_119.EventSend>): _119.EventSend;
                fromAmino(object: _119.EventSendAmino): _119.EventSend;
                toAmino(message: _119.EventSend): _119.EventSendAmino;
                fromAminoMsg(object: _119.EventSendAminoMsg): _119.EventSend;
                toAminoMsg(message: _119.EventSend): _119.EventSendAminoMsg;
                fromProtoMsg(message: _119.EventSendProtoMsg): _119.EventSend;
                toProto(message: _119.EventSend): Uint8Array;
                toProtoMsg(message: _119.EventSend): _119.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _119.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.EventMint;
                fromPartial(object: Partial<_119.EventMint>): _119.EventMint;
                fromAmino(object: _119.EventMintAmino): _119.EventMint;
                toAmino(message: _119.EventMint): _119.EventMintAmino;
                fromAminoMsg(object: _119.EventMintAminoMsg): _119.EventMint;
                toAminoMsg(message: _119.EventMint): _119.EventMintAminoMsg;
                fromProtoMsg(message: _119.EventMintProtoMsg): _119.EventMint;
                toProto(message: _119.EventMint): Uint8Array;
                toProtoMsg(message: _119.EventMint): _119.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _119.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.EventBurn;
                fromPartial(object: Partial<_119.EventBurn>): _119.EventBurn;
                fromAmino(object: _119.EventBurnAmino): _119.EventBurn;
                toAmino(message: _119.EventBurn): _119.EventBurnAmino;
                fromAminoMsg(object: _119.EventBurnAminoMsg): _119.EventBurn;
                toAminoMsg(message: _119.EventBurn): _119.EventBurnAminoMsg;
                fromProtoMsg(message: _119.EventBurnProtoMsg): _119.EventBurn;
                toProto(message: _119.EventBurn): Uint8Array;
                toProtoMsg(message: _119.EventBurn): _119.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
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
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _280.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _125.GetRequest): Promise<_125.GetResponse>;
                    list(request: _125.ListRequest): Promise<_125.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _125.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.GetRequest;
                    fromPartial(object: Partial<_125.GetRequest>): _125.GetRequest;
                    fromAmino(object: _125.GetRequestAmino): _125.GetRequest;
                    toAmino(message: _125.GetRequest): _125.GetRequestAmino;
                    fromAminoMsg(object: _125.GetRequestAminoMsg): _125.GetRequest;
                    toAminoMsg(message: _125.GetRequest): _125.GetRequestAminoMsg;
                    fromProtoMsg(message: _125.GetRequestProtoMsg): _125.GetRequest;
                    toProto(message: _125.GetRequest): Uint8Array;
                    toProtoMsg(message: _125.GetRequest): _125.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _125.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.GetResponse;
                    fromPartial(object: Partial<_125.GetResponse>): _125.GetResponse;
                    fromAmino(object: _125.GetResponseAmino): _125.GetResponse;
                    toAmino(message: _125.GetResponse): _125.GetResponseAmino;
                    fromAminoMsg(object: _125.GetResponseAminoMsg): _125.GetResponse;
                    toAminoMsg(message: _125.GetResponse): _125.GetResponseAminoMsg;
                    fromProtoMsg(message: _125.GetResponseProtoMsg): _125.GetResponse;
                    toProto(message: _125.GetResponse): Uint8Array;
                    toProtoMsg(message: _125.GetResponse): _125.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _125.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ListRequest;
                    fromPartial(object: Partial<_125.ListRequest>): _125.ListRequest;
                    fromAmino(object: _125.ListRequestAmino): _125.ListRequest;
                    toAmino(message: _125.ListRequest): _125.ListRequestAmino;
                    fromAminoMsg(object: _125.ListRequestAminoMsg): _125.ListRequest;
                    toAminoMsg(message: _125.ListRequest): _125.ListRequestAminoMsg;
                    fromProtoMsg(message: _125.ListRequestProtoMsg): _125.ListRequest;
                    toProto(message: _125.ListRequest): Uint8Array;
                    toProtoMsg(message: _125.ListRequest): _125.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _125.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ListRequest_Prefix;
                    fromPartial(object: Partial<_125.ListRequest_Prefix>): _125.ListRequest_Prefix;
                    fromAmino(object: _125.ListRequest_PrefixAmino): _125.ListRequest_Prefix;
                    toAmino(message: _125.ListRequest_Prefix): _125.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _125.ListRequest_PrefixAminoMsg): _125.ListRequest_Prefix;
                    toAminoMsg(message: _125.ListRequest_Prefix): _125.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _125.ListRequest_PrefixProtoMsg): _125.ListRequest_Prefix;
                    toProto(message: _125.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _125.ListRequest_Prefix): _125.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _125.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ListRequest_Range;
                    fromPartial(object: Partial<_125.ListRequest_Range>): _125.ListRequest_Range;
                    fromAmino(object: _125.ListRequest_RangeAmino): _125.ListRequest_Range;
                    toAmino(message: _125.ListRequest_Range): _125.ListRequest_RangeAmino;
                    fromAminoMsg(object: _125.ListRequest_RangeAminoMsg): _125.ListRequest_Range;
                    toAminoMsg(message: _125.ListRequest_Range): _125.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _125.ListRequest_RangeProtoMsg): _125.ListRequest_Range;
                    toProto(message: _125.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _125.ListRequest_Range): _125.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _125.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ListResponse;
                    fromPartial(object: Partial<_125.ListResponse>): _125.ListResponse;
                    fromAmino(object: _125.ListResponseAmino): _125.ListResponse;
                    toAmino(message: _125.ListResponse): _125.ListResponseAmino;
                    fromAminoMsg(object: _125.ListResponseAminoMsg): _125.ListResponse;
                    toAminoMsg(message: _125.ListResponse): _125.ListResponseAminoMsg;
                    fromProtoMsg(message: _125.ListResponseProtoMsg): _125.ListResponse;
                    toProto(message: _125.ListResponse): Uint8Array;
                    toProtoMsg(message: _125.ListResponse): _125.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _125.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.IndexValue;
                    fromPartial(object: Partial<_125.IndexValue>): _125.IndexValue;
                    fromAmino(object: _125.IndexValueAmino): _125.IndexValue;
                    toAmino(message: _125.IndexValue): _125.IndexValueAmino;
                    fromAminoMsg(object: _125.IndexValueAminoMsg): _125.IndexValue;
                    toAminoMsg(message: _125.IndexValue): _125.IndexValueAminoMsg;
                    fromProtoMsg(message: _125.IndexValueProtoMsg): _125.IndexValue;
                    toProto(message: _125.IndexValue): Uint8Array;
                    toProtoMsg(message: _125.IndexValue): _125.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _126.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.TableDescriptor;
                fromPartial(object: Partial<_126.TableDescriptor>): _126.TableDescriptor;
                fromAmino(object: _126.TableDescriptorAmino): _126.TableDescriptor;
                toAmino(message: _126.TableDescriptor): _126.TableDescriptorAmino;
                fromAminoMsg(object: _126.TableDescriptorAminoMsg): _126.TableDescriptor;
                toAminoMsg(message: _126.TableDescriptor): _126.TableDescriptorAminoMsg;
                fromProtoMsg(message: _126.TableDescriptorProtoMsg): _126.TableDescriptor;
                toProto(message: _126.TableDescriptor): Uint8Array;
                toProtoMsg(message: _126.TableDescriptor): _126.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _126.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_126.PrimaryKeyDescriptor>): _126.PrimaryKeyDescriptor;
                fromAmino(object: _126.PrimaryKeyDescriptorAmino): _126.PrimaryKeyDescriptor;
                toAmino(message: _126.PrimaryKeyDescriptor): _126.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _126.PrimaryKeyDescriptorAminoMsg): _126.PrimaryKeyDescriptor;
                toAminoMsg(message: _126.PrimaryKeyDescriptor): _126.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _126.PrimaryKeyDescriptorProtoMsg): _126.PrimaryKeyDescriptor;
                toProto(message: _126.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _126.PrimaryKeyDescriptor): _126.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _126.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_126.SecondaryIndexDescriptor>): _126.SecondaryIndexDescriptor;
                fromAmino(object: _126.SecondaryIndexDescriptorAmino): _126.SecondaryIndexDescriptor;
                toAmino(message: _126.SecondaryIndexDescriptor): _126.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _126.SecondaryIndexDescriptorAminoMsg): _126.SecondaryIndexDescriptor;
                toAminoMsg(message: _126.SecondaryIndexDescriptor): _126.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _126.SecondaryIndexDescriptorProtoMsg): _126.SecondaryIndexDescriptor;
                toProto(message: _126.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _126.SecondaryIndexDescriptor): _126.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _126.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SingletonDescriptor;
                fromPartial(object: Partial<_126.SingletonDescriptor>): _126.SingletonDescriptor;
                fromAmino(object: _126.SingletonDescriptorAmino): _126.SingletonDescriptor;
                toAmino(message: _126.SingletonDescriptor): _126.SingletonDescriptorAmino;
                fromAminoMsg(object: _126.SingletonDescriptorAminoMsg): _126.SingletonDescriptor;
                toAminoMsg(message: _126.SingletonDescriptor): _126.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _126.SingletonDescriptorProtoMsg): _126.SingletonDescriptor;
                toProto(message: _126.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _126.SingletonDescriptor): _126.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _127.StorageType;
            storageTypeToJSON(object: _127.StorageType): string;
            StorageType: typeof _127.StorageType;
            StorageTypeSDKType: typeof _127.StorageType;
            StorageTypeAmino: typeof _127.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _127.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_127.ModuleSchemaDescriptor>): _127.ModuleSchemaDescriptor;
                fromAmino(object: _127.ModuleSchemaDescriptorAmino): _127.ModuleSchemaDescriptor;
                toAmino(message: _127.ModuleSchemaDescriptor): _127.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _127.ModuleSchemaDescriptorAminoMsg): _127.ModuleSchemaDescriptor;
                toAminoMsg(message: _127.ModuleSchemaDescriptor): _127.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _127.ModuleSchemaDescriptorProtoMsg): _127.ModuleSchemaDescriptor;
                toProto(message: _127.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _127.ModuleSchemaDescriptor): _127.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _127.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_127.ModuleSchemaDescriptor_FileEntry>): _127.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _127.ModuleSchemaDescriptor_FileEntryAmino): _127.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _127.ModuleSchemaDescriptor_FileEntry): _127.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _127.ModuleSchemaDescriptor_FileEntryAminoMsg): _127.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _127.ModuleSchemaDescriptor_FileEntry): _127.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _127.ModuleSchemaDescriptor_FileEntryProtoMsg): _127.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _127.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _127.ModuleSchemaDescriptor_FileEntry): _127.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _128.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.Module;
                    fromPartial(_: Partial<_128.Module>): _128.Module;
                    fromAmino(_: _128.ModuleAmino): _128.Module;
                    toAmino(_: _128.Module): _128.ModuleAmino;
                    fromAminoMsg(object: _128.ModuleAminoMsg): _128.Module;
                    toAminoMsg(message: _128.Module): _128.ModuleAminoMsg;
                    fromProtoMsg(message: _128.ModuleProtoMsg): _128.Module;
                    toProto(message: _128.Module): Uint8Array;
                    toProtoMsg(message: _128.Module): _128.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                subspaces(request?: _130.QuerySubspacesRequest): Promise<_130.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _130.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.QueryParamsRequest;
                fromPartial(object: Partial<_130.QueryParamsRequest>): _130.QueryParamsRequest;
                fromAmino(object: _130.QueryParamsRequestAmino): _130.QueryParamsRequest;
                toAmino(message: _130.QueryParamsRequest): _130.QueryParamsRequestAmino;
                fromAminoMsg(object: _130.QueryParamsRequestAminoMsg): _130.QueryParamsRequest;
                toAminoMsg(message: _130.QueryParamsRequest): _130.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _130.QueryParamsRequestProtoMsg): _130.QueryParamsRequest;
                toProto(message: _130.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _130.QueryParamsRequest): _130.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _130.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.QueryParamsResponse;
                fromPartial(object: Partial<_130.QueryParamsResponse>): _130.QueryParamsResponse;
                fromAmino(object: _130.QueryParamsResponseAmino): _130.QueryParamsResponse;
                toAmino(message: _130.QueryParamsResponse): _130.QueryParamsResponseAmino;
                fromAminoMsg(object: _130.QueryParamsResponseAminoMsg): _130.QueryParamsResponse;
                toAminoMsg(message: _130.QueryParamsResponse): _130.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _130.QueryParamsResponseProtoMsg): _130.QueryParamsResponse;
                toProto(message: _130.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _130.QueryParamsResponse): _130.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _130.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.QuerySubspacesRequest;
                fromPartial(_: Partial<_130.QuerySubspacesRequest>): _130.QuerySubspacesRequest;
                fromAmino(_: _130.QuerySubspacesRequestAmino): _130.QuerySubspacesRequest;
                toAmino(_: _130.QuerySubspacesRequest): _130.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _130.QuerySubspacesRequestAminoMsg): _130.QuerySubspacesRequest;
                toAminoMsg(message: _130.QuerySubspacesRequest): _130.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _130.QuerySubspacesRequestProtoMsg): _130.QuerySubspacesRequest;
                toProto(message: _130.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _130.QuerySubspacesRequest): _130.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _130.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.QuerySubspacesResponse;
                fromPartial(object: Partial<_130.QuerySubspacesResponse>): _130.QuerySubspacesResponse;
                fromAmino(object: _130.QuerySubspacesResponseAmino): _130.QuerySubspacesResponse;
                toAmino(message: _130.QuerySubspacesResponse): _130.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _130.QuerySubspacesResponseAminoMsg): _130.QuerySubspacesResponse;
                toAminoMsg(message: _130.QuerySubspacesResponse): _130.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _130.QuerySubspacesResponseProtoMsg): _130.QuerySubspacesResponse;
                toProto(message: _130.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _130.QuerySubspacesResponse): _130.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _130.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Subspace;
                fromPartial(object: Partial<_130.Subspace>): _130.Subspace;
                fromAmino(object: _130.SubspaceAmino): _130.Subspace;
                toAmino(message: _130.Subspace): _130.SubspaceAmino;
                fromAminoMsg(object: _130.SubspaceAminoMsg): _130.Subspace;
                toAminoMsg(message: _130.Subspace): _130.SubspaceAminoMsg;
                fromProtoMsg(message: _130.SubspaceProtoMsg): _130.Subspace;
                toProto(message: _130.Subspace): Uint8Array;
                toProtoMsg(message: _130.Subspace): _130.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _129.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.ParameterChangeProposal;
                fromPartial(object: Partial<_129.ParameterChangeProposal>): _129.ParameterChangeProposal;
                fromAmino(object: _129.ParameterChangeProposalAmino): _129.ParameterChangeProposal;
                toAmino(message: _129.ParameterChangeProposal): _129.ParameterChangeProposalAmino;
                fromAminoMsg(object: _129.ParameterChangeProposalAminoMsg): _129.ParameterChangeProposal;
                toAminoMsg(message: _129.ParameterChangeProposal): _129.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _129.ParameterChangeProposalProtoMsg): _129.ParameterChangeProposal;
                toProto(message: _129.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _129.ParameterChangeProposal): _129.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _129.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.ParamChange;
                fromPartial(object: Partial<_129.ParamChange>): _129.ParamChange;
                fromAmino(object: _129.ParamChangeAmino): _129.ParamChange;
                toAmino(message: _129.ParamChange): _129.ParamChangeAmino;
                fromAminoMsg(object: _129.ParamChangeAminoMsg): _129.ParamChange;
                toAminoMsg(message: _129.ParamChange): _129.ParamChangeAminoMsg;
                fromProtoMsg(message: _129.ParamChangeProtoMsg): _129.ParamChange;
                toProto(message: _129.ParamChange): Uint8Array;
                toProtoMsg(message: _129.ParamChange): _129.ParamChangeProtoMsg;
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
                encode(_: _132.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.FileDescriptorsRequest;
                fromPartial(_: Partial<_132.FileDescriptorsRequest>): _132.FileDescriptorsRequest;
                fromAmino(_: _132.FileDescriptorsRequestAmino): _132.FileDescriptorsRequest;
                toAmino(_: _132.FileDescriptorsRequest): _132.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _132.FileDescriptorsRequestAminoMsg): _132.FileDescriptorsRequest;
                toAminoMsg(message: _132.FileDescriptorsRequest): _132.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _132.FileDescriptorsRequestProtoMsg): _132.FileDescriptorsRequest;
                toProto(message: _132.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _132.FileDescriptorsRequest): _132.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _132.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.FileDescriptorsResponse;
                fromPartial(object: Partial<_132.FileDescriptorsResponse>): _132.FileDescriptorsResponse;
                fromAmino(object: _132.FileDescriptorsResponseAmino): _132.FileDescriptorsResponse;
                toAmino(message: _132.FileDescriptorsResponse): _132.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _132.FileDescriptorsResponseAminoMsg): _132.FileDescriptorsResponse;
                toAminoMsg(message: _132.FileDescriptorsResponse): _132.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _132.FileDescriptorsResponseProtoMsg): _132.FileDescriptorsResponse;
                toProto(message: _132.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _132.FileDescriptorsResponse): _132.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _133.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _133.Module;
                    fromPartial(object: Partial<_133.Module>): _133.Module;
                    fromAmino(object: _133.ModuleAmino): _133.Module;
                    toAmino(message: _133.Module): _133.ModuleAmino;
                    fromAminoMsg(object: _133.ModuleAminoMsg): _133.Module;
                    toAminoMsg(message: _133.Module): _133.ModuleAminoMsg;
                    fromProtoMsg(message: _133.ModuleProtoMsg): _133.Module;
                    toProto(message: _133.Module): Uint8Array;
                    toProtoMsg(message: _133.Module): _133.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _135.QueryParamsRequest): Promise<_135.QueryParamsResponse>;
                signingInfo(request: _135.QuerySigningInfoRequest): Promise<_135.QuerySigningInfoResponse>;
                signingInfos(request?: _135.QuerySigningInfosRequest): Promise<_135.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _137.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _137.MsgUnjail): {
                        typeUrl: string;
                        value: _137.MsgUnjail;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _137.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _137.MsgUnjail): {
                        typeUrl: string;
                        value: _137.MsgUnjail;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUnjail) => _137.MsgUnjailAmino;
                    fromAmino: (object: _137.MsgUnjailAmino) => _137.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUpdateParams) => _137.MsgUpdateParamsAmino;
                    fromAmino: (object: _137.MsgUpdateParamsAmino) => _137.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _137.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgUnjail;
                fromPartial(object: Partial<_137.MsgUnjail>): _137.MsgUnjail;
                fromAmino(object: _137.MsgUnjailAmino): _137.MsgUnjail;
                toAmino(message: _137.MsgUnjail): _137.MsgUnjailAmino;
                fromAminoMsg(object: _137.MsgUnjailAminoMsg): _137.MsgUnjail;
                toAminoMsg(message: _137.MsgUnjail): _137.MsgUnjailAminoMsg;
                fromProtoMsg(message: _137.MsgUnjailProtoMsg): _137.MsgUnjail;
                toProto(message: _137.MsgUnjail): Uint8Array;
                toProtoMsg(message: _137.MsgUnjail): _137.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _137.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgUnjailResponse;
                fromPartial(_: Partial<_137.MsgUnjailResponse>): _137.MsgUnjailResponse;
                fromAmino(_: _137.MsgUnjailResponseAmino): _137.MsgUnjailResponse;
                toAmino(_: _137.MsgUnjailResponse): _137.MsgUnjailResponseAmino;
                fromAminoMsg(object: _137.MsgUnjailResponseAminoMsg): _137.MsgUnjailResponse;
                toAminoMsg(message: _137.MsgUnjailResponse): _137.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _137.MsgUnjailResponseProtoMsg): _137.MsgUnjailResponse;
                toProto(message: _137.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUnjailResponse): _137.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _137.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgUpdateParams;
                fromPartial(object: Partial<_137.MsgUpdateParams>): _137.MsgUpdateParams;
                fromAmino(object: _137.MsgUpdateParamsAmino): _137.MsgUpdateParams;
                toAmino(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAmino;
                fromAminoMsg(object: _137.MsgUpdateParamsAminoMsg): _137.MsgUpdateParams;
                toAminoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _137.MsgUpdateParamsProtoMsg): _137.MsgUpdateParams;
                toProto(message: _137.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _137.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_137.MsgUpdateParamsResponse>): _137.MsgUpdateParamsResponse;
                fromAmino(_: _137.MsgUpdateParamsResponseAmino): _137.MsgUpdateParamsResponse;
                toAmino(_: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _137.MsgUpdateParamsResponseAminoMsg): _137.MsgUpdateParamsResponse;
                toAminoMsg(message: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _137.MsgUpdateParamsResponseProtoMsg): _137.MsgUpdateParamsResponse;
                toProto(message: _137.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _136.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.ValidatorSigningInfo;
                fromPartial(object: Partial<_136.ValidatorSigningInfo>): _136.ValidatorSigningInfo;
                fromAmino(object: _136.ValidatorSigningInfoAmino): _136.ValidatorSigningInfo;
                toAmino(message: _136.ValidatorSigningInfo): _136.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _136.ValidatorSigningInfoAminoMsg): _136.ValidatorSigningInfo;
                toAminoMsg(message: _136.ValidatorSigningInfo): _136.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _136.ValidatorSigningInfoProtoMsg): _136.ValidatorSigningInfo;
                toProto(message: _136.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _136.ValidatorSigningInfo): _136.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _136.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.Params;
                fromPartial(object: Partial<_136.Params>): _136.Params;
                fromAmino(object: _136.ParamsAmino): _136.Params;
                toAmino(message: _136.Params): _136.ParamsAmino;
                fromAminoMsg(object: _136.ParamsAminoMsg): _136.Params;
                toAminoMsg(message: _136.Params): _136.ParamsAminoMsg;
                fromProtoMsg(message: _136.ParamsProtoMsg): _136.Params;
                toProto(message: _136.Params): Uint8Array;
                toProtoMsg(message: _136.Params): _136.ParamsProtoMsg;
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
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _135.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QuerySigningInfoRequest;
                fromPartial(object: Partial<_135.QuerySigningInfoRequest>): _135.QuerySigningInfoRequest;
                fromAmino(object: _135.QuerySigningInfoRequestAmino): _135.QuerySigningInfoRequest;
                toAmino(message: _135.QuerySigningInfoRequest): _135.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _135.QuerySigningInfoRequestAminoMsg): _135.QuerySigningInfoRequest;
                toAminoMsg(message: _135.QuerySigningInfoRequest): _135.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _135.QuerySigningInfoRequestProtoMsg): _135.QuerySigningInfoRequest;
                toProto(message: _135.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _135.QuerySigningInfoRequest): _135.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _135.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QuerySigningInfoResponse;
                fromPartial(object: Partial<_135.QuerySigningInfoResponse>): _135.QuerySigningInfoResponse;
                fromAmino(object: _135.QuerySigningInfoResponseAmino): _135.QuerySigningInfoResponse;
                toAmino(message: _135.QuerySigningInfoResponse): _135.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _135.QuerySigningInfoResponseAminoMsg): _135.QuerySigningInfoResponse;
                toAminoMsg(message: _135.QuerySigningInfoResponse): _135.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _135.QuerySigningInfoResponseProtoMsg): _135.QuerySigningInfoResponse;
                toProto(message: _135.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _135.QuerySigningInfoResponse): _135.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _135.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QuerySigningInfosRequest;
                fromPartial(object: Partial<_135.QuerySigningInfosRequest>): _135.QuerySigningInfosRequest;
                fromAmino(object: _135.QuerySigningInfosRequestAmino): _135.QuerySigningInfosRequest;
                toAmino(message: _135.QuerySigningInfosRequest): _135.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _135.QuerySigningInfosRequestAminoMsg): _135.QuerySigningInfosRequest;
                toAminoMsg(message: _135.QuerySigningInfosRequest): _135.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _135.QuerySigningInfosRequestProtoMsg): _135.QuerySigningInfosRequest;
                toProto(message: _135.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _135.QuerySigningInfosRequest): _135.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _135.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.QuerySigningInfosResponse;
                fromPartial(object: Partial<_135.QuerySigningInfosResponse>): _135.QuerySigningInfosResponse;
                fromAmino(object: _135.QuerySigningInfosResponseAmino): _135.QuerySigningInfosResponse;
                toAmino(message: _135.QuerySigningInfosResponse): _135.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _135.QuerySigningInfosResponseAminoMsg): _135.QuerySigningInfosResponse;
                toAminoMsg(message: _135.QuerySigningInfosResponse): _135.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _135.QuerySigningInfosResponseProtoMsg): _135.QuerySigningInfosResponse;
                toProto(message: _135.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _135.QuerySigningInfosResponse): _135.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _134.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.GenesisState;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
                fromAmino(object: _134.GenesisStateAmino): _134.GenesisState;
                toAmino(message: _134.GenesisState): _134.GenesisStateAmino;
                fromAminoMsg(object: _134.GenesisStateAminoMsg): _134.GenesisState;
                toAminoMsg(message: _134.GenesisState): _134.GenesisStateAminoMsg;
                fromProtoMsg(message: _134.GenesisStateProtoMsg): _134.GenesisState;
                toProto(message: _134.GenesisState): Uint8Array;
                toProtoMsg(message: _134.GenesisState): _134.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _134.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.SigningInfo;
                fromPartial(object: Partial<_134.SigningInfo>): _134.SigningInfo;
                fromAmino(object: _134.SigningInfoAmino): _134.SigningInfo;
                toAmino(message: _134.SigningInfo): _134.SigningInfoAmino;
                fromAminoMsg(object: _134.SigningInfoAminoMsg): _134.SigningInfo;
                toAminoMsg(message: _134.SigningInfo): _134.SigningInfoAminoMsg;
                fromProtoMsg(message: _134.SigningInfoProtoMsg): _134.SigningInfo;
                toProto(message: _134.SigningInfo): Uint8Array;
                toProtoMsg(message: _134.SigningInfo): _134.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _134.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.ValidatorMissedBlocks;
                fromPartial(object: Partial<_134.ValidatorMissedBlocks>): _134.ValidatorMissedBlocks;
                fromAmino(object: _134.ValidatorMissedBlocksAmino): _134.ValidatorMissedBlocks;
                toAmino(message: _134.ValidatorMissedBlocks): _134.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _134.ValidatorMissedBlocksAminoMsg): _134.ValidatorMissedBlocks;
                toAminoMsg(message: _134.ValidatorMissedBlocks): _134.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _134.ValidatorMissedBlocksProtoMsg): _134.ValidatorMissedBlocks;
                toProto(message: _134.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _134.ValidatorMissedBlocks): _134.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _134.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.MissedBlock;
                fromPartial(object: Partial<_134.MissedBlock>): _134.MissedBlock;
                fromAmino(object: _134.MissedBlockAmino): _134.MissedBlock;
                toAmino(message: _134.MissedBlock): _134.MissedBlockAmino;
                fromAminoMsg(object: _134.MissedBlockAminoMsg): _134.MissedBlock;
                toAminoMsg(message: _134.MissedBlock): _134.MissedBlockAminoMsg;
                fromProtoMsg(message: _134.MissedBlockProtoMsg): _134.MissedBlock;
                toProto(message: _134.MissedBlock): Uint8Array;
                toProtoMsg(message: _134.MissedBlock): _134.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _138.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _138.Module;
                    fromPartial(object: Partial<_138.Module>): _138.Module;
                    fromAmino(object: _138.ModuleAmino): _138.Module;
                    toAmino(message: _138.Module): _138.ModuleAmino;
                    fromAminoMsg(object: _138.ModuleAminoMsg): _138.Module;
                    toAminoMsg(message: _138.Module): _138.ModuleAminoMsg;
                    fromProtoMsg(message: _138.ModuleProtoMsg): _138.Module;
                    toProto(message: _138.Module): Uint8Array;
                    toProtoMsg(message: _138.Module): _138.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _141.QueryValidatorsRequest): Promise<_141.QueryValidatorsResponse>;
                validator(request: _141.QueryValidatorRequest): Promise<_141.QueryValidatorResponse>;
                validatorDelegations(request: _141.QueryValidatorDelegationsRequest): Promise<_141.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _141.QueryValidatorUnbondingDelegationsRequest): Promise<_141.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _141.QueryDelegationRequest): Promise<_141.QueryDelegationResponse>;
                unbondingDelegation(request: _141.QueryUnbondingDelegationRequest): Promise<_141.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _141.QueryDelegatorDelegationsRequest): Promise<_141.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _141.QueryDelegatorUnbondingDelegationsRequest): Promise<_141.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _141.QueryRedelegationsRequest): Promise<_141.QueryRedelegationsResponse>;
                delegatorValidators(request: _141.QueryDelegatorValidatorsRequest): Promise<_141.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _141.QueryDelegatorValidatorRequest): Promise<_141.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _141.QueryHistoricalInfoRequest): Promise<_141.QueryHistoricalInfoResponse>;
                pool(request?: _141.QueryPoolRequest): Promise<_141.QueryPoolResponse>;
                params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _143.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _143.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _143.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _143.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _143.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _143.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _143.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _143.MsgCreateValidator): {
                        typeUrl: string;
                        value: _143.MsgCreateValidator;
                    };
                    editValidator(value: _143.MsgEditValidator): {
                        typeUrl: string;
                        value: _143.MsgEditValidator;
                    };
                    delegate(value: _143.MsgDelegate): {
                        typeUrl: string;
                        value: _143.MsgDelegate;
                    };
                    beginRedelegate(value: _143.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _143.MsgBeginRedelegate;
                    };
                    undelegate(value: _143.MsgUndelegate): {
                        typeUrl: string;
                        value: _143.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _143.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _143.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _143.MsgUpdateParams): {
                        typeUrl: string;
                        value: _143.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _143.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _143.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _143.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _143.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _143.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _143.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _143.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _143.MsgCreateValidator): {
                        typeUrl: string;
                        value: _143.MsgCreateValidator;
                    };
                    editValidator(value: _143.MsgEditValidator): {
                        typeUrl: string;
                        value: _143.MsgEditValidator;
                    };
                    delegate(value: _143.MsgDelegate): {
                        typeUrl: string;
                        value: _143.MsgDelegate;
                    };
                    beginRedelegate(value: _143.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _143.MsgBeginRedelegate;
                    };
                    undelegate(value: _143.MsgUndelegate): {
                        typeUrl: string;
                        value: _143.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _143.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _143.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _143.MsgUpdateParams): {
                        typeUrl: string;
                        value: _143.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _143.MsgCreateValidator) => _143.MsgCreateValidatorAmino;
                    fromAmino: (object: _143.MsgCreateValidatorAmino) => _143.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _143.MsgEditValidator) => _143.MsgEditValidatorAmino;
                    fromAmino: (object: _143.MsgEditValidatorAmino) => _143.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _143.MsgDelegate) => _143.MsgDelegateAmino;
                    fromAmino: (object: _143.MsgDelegateAmino) => _143.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _143.MsgBeginRedelegate) => _143.MsgBeginRedelegateAmino;
                    fromAmino: (object: _143.MsgBeginRedelegateAmino) => _143.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _143.MsgUndelegate) => _143.MsgUndelegateAmino;
                    fromAmino: (object: _143.MsgUndelegateAmino) => _143.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _143.MsgCancelUnbondingDelegation) => _143.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _143.MsgCancelUnbondingDelegationAmino) => _143.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _143.MsgUpdateParams) => _143.MsgUpdateParamsAmino;
                    fromAmino: (object: _143.MsgUpdateParamsAmino) => _143.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _143.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgCreateValidator;
                fromPartial(object: Partial<_143.MsgCreateValidator>): _143.MsgCreateValidator;
                fromAmino(object: _143.MsgCreateValidatorAmino): _143.MsgCreateValidator;
                toAmino(message: _143.MsgCreateValidator): _143.MsgCreateValidatorAmino;
                fromAminoMsg(object: _143.MsgCreateValidatorAminoMsg): _143.MsgCreateValidator;
                toAminoMsg(message: _143.MsgCreateValidator): _143.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _143.MsgCreateValidatorProtoMsg): _143.MsgCreateValidator;
                toProto(message: _143.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _143.MsgCreateValidator): _143.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _143.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_143.MsgCreateValidatorResponse>): _143.MsgCreateValidatorResponse;
                fromAmino(_: _143.MsgCreateValidatorResponseAmino): _143.MsgCreateValidatorResponse;
                toAmino(_: _143.MsgCreateValidatorResponse): _143.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _143.MsgCreateValidatorResponseAminoMsg): _143.MsgCreateValidatorResponse;
                toAminoMsg(message: _143.MsgCreateValidatorResponse): _143.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _143.MsgCreateValidatorResponseProtoMsg): _143.MsgCreateValidatorResponse;
                toProto(message: _143.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _143.MsgCreateValidatorResponse): _143.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _143.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgEditValidator;
                fromPartial(object: Partial<_143.MsgEditValidator>): _143.MsgEditValidator;
                fromAmino(object: _143.MsgEditValidatorAmino): _143.MsgEditValidator;
                toAmino(message: _143.MsgEditValidator): _143.MsgEditValidatorAmino;
                fromAminoMsg(object: _143.MsgEditValidatorAminoMsg): _143.MsgEditValidator;
                toAminoMsg(message: _143.MsgEditValidator): _143.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _143.MsgEditValidatorProtoMsg): _143.MsgEditValidator;
                toProto(message: _143.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _143.MsgEditValidator): _143.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _143.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgEditValidatorResponse;
                fromPartial(_: Partial<_143.MsgEditValidatorResponse>): _143.MsgEditValidatorResponse;
                fromAmino(_: _143.MsgEditValidatorResponseAmino): _143.MsgEditValidatorResponse;
                toAmino(_: _143.MsgEditValidatorResponse): _143.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _143.MsgEditValidatorResponseAminoMsg): _143.MsgEditValidatorResponse;
                toAminoMsg(message: _143.MsgEditValidatorResponse): _143.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _143.MsgEditValidatorResponseProtoMsg): _143.MsgEditValidatorResponse;
                toProto(message: _143.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _143.MsgEditValidatorResponse): _143.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _143.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgDelegate;
                fromPartial(object: Partial<_143.MsgDelegate>): _143.MsgDelegate;
                fromAmino(object: _143.MsgDelegateAmino): _143.MsgDelegate;
                toAmino(message: _143.MsgDelegate): _143.MsgDelegateAmino;
                fromAminoMsg(object: _143.MsgDelegateAminoMsg): _143.MsgDelegate;
                toAminoMsg(message: _143.MsgDelegate): _143.MsgDelegateAminoMsg;
                fromProtoMsg(message: _143.MsgDelegateProtoMsg): _143.MsgDelegate;
                toProto(message: _143.MsgDelegate): Uint8Array;
                toProtoMsg(message: _143.MsgDelegate): _143.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _143.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgDelegateResponse;
                fromPartial(_: Partial<_143.MsgDelegateResponse>): _143.MsgDelegateResponse;
                fromAmino(_: _143.MsgDelegateResponseAmino): _143.MsgDelegateResponse;
                toAmino(_: _143.MsgDelegateResponse): _143.MsgDelegateResponseAmino;
                fromAminoMsg(object: _143.MsgDelegateResponseAminoMsg): _143.MsgDelegateResponse;
                toAminoMsg(message: _143.MsgDelegateResponse): _143.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _143.MsgDelegateResponseProtoMsg): _143.MsgDelegateResponse;
                toProto(message: _143.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _143.MsgDelegateResponse): _143.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _143.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgBeginRedelegate;
                fromPartial(object: Partial<_143.MsgBeginRedelegate>): _143.MsgBeginRedelegate;
                fromAmino(object: _143.MsgBeginRedelegateAmino): _143.MsgBeginRedelegate;
                toAmino(message: _143.MsgBeginRedelegate): _143.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _143.MsgBeginRedelegateAminoMsg): _143.MsgBeginRedelegate;
                toAminoMsg(message: _143.MsgBeginRedelegate): _143.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _143.MsgBeginRedelegateProtoMsg): _143.MsgBeginRedelegate;
                toProto(message: _143.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _143.MsgBeginRedelegate): _143.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _143.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_143.MsgBeginRedelegateResponse>): _143.MsgBeginRedelegateResponse;
                fromAmino(object: _143.MsgBeginRedelegateResponseAmino): _143.MsgBeginRedelegateResponse;
                toAmino(message: _143.MsgBeginRedelegateResponse): _143.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _143.MsgBeginRedelegateResponseAminoMsg): _143.MsgBeginRedelegateResponse;
                toAminoMsg(message: _143.MsgBeginRedelegateResponse): _143.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _143.MsgBeginRedelegateResponseProtoMsg): _143.MsgBeginRedelegateResponse;
                toProto(message: _143.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _143.MsgBeginRedelegateResponse): _143.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _143.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgUndelegate;
                fromPartial(object: Partial<_143.MsgUndelegate>): _143.MsgUndelegate;
                fromAmino(object: _143.MsgUndelegateAmino): _143.MsgUndelegate;
                toAmino(message: _143.MsgUndelegate): _143.MsgUndelegateAmino;
                fromAminoMsg(object: _143.MsgUndelegateAminoMsg): _143.MsgUndelegate;
                toAminoMsg(message: _143.MsgUndelegate): _143.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _143.MsgUndelegateProtoMsg): _143.MsgUndelegate;
                toProto(message: _143.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _143.MsgUndelegate): _143.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _143.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgUndelegateResponse;
                fromPartial(object: Partial<_143.MsgUndelegateResponse>): _143.MsgUndelegateResponse;
                fromAmino(object: _143.MsgUndelegateResponseAmino): _143.MsgUndelegateResponse;
                toAmino(message: _143.MsgUndelegateResponse): _143.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _143.MsgUndelegateResponseAminoMsg): _143.MsgUndelegateResponse;
                toAminoMsg(message: _143.MsgUndelegateResponse): _143.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _143.MsgUndelegateResponseProtoMsg): _143.MsgUndelegateResponse;
                toProto(message: _143.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _143.MsgUndelegateResponse): _143.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _143.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_143.MsgCancelUnbondingDelegation>): _143.MsgCancelUnbondingDelegation;
                fromAmino(object: _143.MsgCancelUnbondingDelegationAmino): _143.MsgCancelUnbondingDelegation;
                toAmino(message: _143.MsgCancelUnbondingDelegation): _143.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _143.MsgCancelUnbondingDelegationAminoMsg): _143.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _143.MsgCancelUnbondingDelegation): _143.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _143.MsgCancelUnbondingDelegationProtoMsg): _143.MsgCancelUnbondingDelegation;
                toProto(message: _143.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _143.MsgCancelUnbondingDelegation): _143.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _143.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_143.MsgCancelUnbondingDelegationResponse>): _143.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _143.MsgCancelUnbondingDelegationResponseAmino): _143.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _143.MsgCancelUnbondingDelegationResponse): _143.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _143.MsgCancelUnbondingDelegationResponseAminoMsg): _143.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _143.MsgCancelUnbondingDelegationResponse): _143.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _143.MsgCancelUnbondingDelegationResponseProtoMsg): _143.MsgCancelUnbondingDelegationResponse;
                toProto(message: _143.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _143.MsgCancelUnbondingDelegationResponse): _143.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _143.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MsgUpdateParams;
                fromPartial(object: Partial<_143.MsgUpdateParams>): _143.MsgUpdateParams;
                fromAmino(object: _143.MsgUpdateParamsAmino): _143.MsgUpdateParams;
                toAmino(message: _143.MsgUpdateParams): _143.MsgUpdateParamsAmino;
                fromAminoMsg(object: _143.MsgUpdateParamsAminoMsg): _143.MsgUpdateParams;
                toAminoMsg(message: _143.MsgUpdateParams): _143.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _143.MsgUpdateParamsProtoMsg): _143.MsgUpdateParams;
                toProto(message: _143.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _143.MsgUpdateParams): _143.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _143.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_143.MsgUpdateParamsResponse>): _143.MsgUpdateParamsResponse;
                fromAmino(_: _143.MsgUpdateParamsResponseAmino): _143.MsgUpdateParamsResponse;
                toAmino(_: _143.MsgUpdateParamsResponse): _143.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _143.MsgUpdateParamsResponseAminoMsg): _143.MsgUpdateParamsResponse;
                toAminoMsg(message: _143.MsgUpdateParamsResponse): _143.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _143.MsgUpdateParamsResponseProtoMsg): _143.MsgUpdateParamsResponse;
                toProto(message: _143.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _143.MsgUpdateParamsResponse): _143.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _142.BondStatus;
            bondStatusToJSON(object: _142.BondStatus): string;
            infractionFromJSON(object: any): _142.Infraction;
            infractionToJSON(object: _142.Infraction): string;
            BondStatus: typeof _142.BondStatus;
            BondStatusSDKType: typeof _142.BondStatus;
            BondStatusAmino: typeof _142.BondStatus;
            Infraction: typeof _142.Infraction;
            InfractionSDKType: typeof _142.Infraction;
            InfractionAmino: typeof _142.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _142.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.HistoricalInfo;
                fromPartial(object: Partial<_142.HistoricalInfo>): _142.HistoricalInfo;
                fromAmino(object: _142.HistoricalInfoAmino): _142.HistoricalInfo;
                toAmino(message: _142.HistoricalInfo): _142.HistoricalInfoAmino;
                fromAminoMsg(object: _142.HistoricalInfoAminoMsg): _142.HistoricalInfo;
                toAminoMsg(message: _142.HistoricalInfo): _142.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _142.HistoricalInfoProtoMsg): _142.HistoricalInfo;
                toProto(message: _142.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _142.HistoricalInfo): _142.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _142.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.CommissionRates;
                fromPartial(object: Partial<_142.CommissionRates>): _142.CommissionRates;
                fromAmino(object: _142.CommissionRatesAmino): _142.CommissionRates;
                toAmino(message: _142.CommissionRates): _142.CommissionRatesAmino;
                fromAminoMsg(object: _142.CommissionRatesAminoMsg): _142.CommissionRates;
                toAminoMsg(message: _142.CommissionRates): _142.CommissionRatesAminoMsg;
                fromProtoMsg(message: _142.CommissionRatesProtoMsg): _142.CommissionRates;
                toProto(message: _142.CommissionRates): Uint8Array;
                toProtoMsg(message: _142.CommissionRates): _142.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _142.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Commission;
                fromPartial(object: Partial<_142.Commission>): _142.Commission;
                fromAmino(object: _142.CommissionAmino): _142.Commission;
                toAmino(message: _142.Commission): _142.CommissionAmino;
                fromAminoMsg(object: _142.CommissionAminoMsg): _142.Commission;
                toAminoMsg(message: _142.Commission): _142.CommissionAminoMsg;
                fromProtoMsg(message: _142.CommissionProtoMsg): _142.Commission;
                toProto(message: _142.Commission): Uint8Array;
                toProtoMsg(message: _142.Commission): _142.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _142.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Description;
                fromPartial(object: Partial<_142.Description>): _142.Description;
                fromAmino(object: _142.DescriptionAmino): _142.Description;
                toAmino(message: _142.Description): _142.DescriptionAmino;
                fromAminoMsg(object: _142.DescriptionAminoMsg): _142.Description;
                toAminoMsg(message: _142.Description): _142.DescriptionAminoMsg;
                fromProtoMsg(message: _142.DescriptionProtoMsg): _142.Description;
                toProto(message: _142.Description): Uint8Array;
                toProtoMsg(message: _142.Description): _142.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _142.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Validator;
                fromPartial(object: Partial<_142.Validator>): _142.Validator;
                fromAmino(object: _142.ValidatorAmino): _142.Validator;
                toAmino(message: _142.Validator): _142.ValidatorAmino;
                fromAminoMsg(object: _142.ValidatorAminoMsg): _142.Validator;
                toAminoMsg(message: _142.Validator): _142.ValidatorAminoMsg;
                fromProtoMsg(message: _142.ValidatorProtoMsg): _142.Validator;
                toProto(message: _142.Validator): Uint8Array;
                toProtoMsg(message: _142.Validator): _142.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _142.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValAddresses;
                fromPartial(object: Partial<_142.ValAddresses>): _142.ValAddresses;
                fromAmino(object: _142.ValAddressesAmino): _142.ValAddresses;
                toAmino(message: _142.ValAddresses): _142.ValAddressesAmino;
                fromAminoMsg(object: _142.ValAddressesAminoMsg): _142.ValAddresses;
                toAminoMsg(message: _142.ValAddresses): _142.ValAddressesAminoMsg;
                fromProtoMsg(message: _142.ValAddressesProtoMsg): _142.ValAddresses;
                toProto(message: _142.ValAddresses): Uint8Array;
                toProtoMsg(message: _142.ValAddresses): _142.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _142.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DVPair;
                fromPartial(object: Partial<_142.DVPair>): _142.DVPair;
                fromAmino(object: _142.DVPairAmino): _142.DVPair;
                toAmino(message: _142.DVPair): _142.DVPairAmino;
                fromAminoMsg(object: _142.DVPairAminoMsg): _142.DVPair;
                toAminoMsg(message: _142.DVPair): _142.DVPairAminoMsg;
                fromProtoMsg(message: _142.DVPairProtoMsg): _142.DVPair;
                toProto(message: _142.DVPair): Uint8Array;
                toProtoMsg(message: _142.DVPair): _142.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _142.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DVPairs;
                fromPartial(object: Partial<_142.DVPairs>): _142.DVPairs;
                fromAmino(object: _142.DVPairsAmino): _142.DVPairs;
                toAmino(message: _142.DVPairs): _142.DVPairsAmino;
                fromAminoMsg(object: _142.DVPairsAminoMsg): _142.DVPairs;
                toAminoMsg(message: _142.DVPairs): _142.DVPairsAminoMsg;
                fromProtoMsg(message: _142.DVPairsProtoMsg): _142.DVPairs;
                toProto(message: _142.DVPairs): Uint8Array;
                toProtoMsg(message: _142.DVPairs): _142.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _142.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DVVTriplet;
                fromPartial(object: Partial<_142.DVVTriplet>): _142.DVVTriplet;
                fromAmino(object: _142.DVVTripletAmino): _142.DVVTriplet;
                toAmino(message: _142.DVVTriplet): _142.DVVTripletAmino;
                fromAminoMsg(object: _142.DVVTripletAminoMsg): _142.DVVTriplet;
                toAminoMsg(message: _142.DVVTriplet): _142.DVVTripletAminoMsg;
                fromProtoMsg(message: _142.DVVTripletProtoMsg): _142.DVVTriplet;
                toProto(message: _142.DVVTriplet): Uint8Array;
                toProtoMsg(message: _142.DVVTriplet): _142.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _142.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DVVTriplets;
                fromPartial(object: Partial<_142.DVVTriplets>): _142.DVVTriplets;
                fromAmino(object: _142.DVVTripletsAmino): _142.DVVTriplets;
                toAmino(message: _142.DVVTriplets): _142.DVVTripletsAmino;
                fromAminoMsg(object: _142.DVVTripletsAminoMsg): _142.DVVTriplets;
                toAminoMsg(message: _142.DVVTriplets): _142.DVVTripletsAminoMsg;
                fromProtoMsg(message: _142.DVVTripletsProtoMsg): _142.DVVTriplets;
                toProto(message: _142.DVVTriplets): Uint8Array;
                toProtoMsg(message: _142.DVVTriplets): _142.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _142.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Delegation;
                fromPartial(object: Partial<_142.Delegation>): _142.Delegation;
                fromAmino(object: _142.DelegationAmino): _142.Delegation;
                toAmino(message: _142.Delegation): _142.DelegationAmino;
                fromAminoMsg(object: _142.DelegationAminoMsg): _142.Delegation;
                toAminoMsg(message: _142.Delegation): _142.DelegationAminoMsg;
                fromProtoMsg(message: _142.DelegationProtoMsg): _142.Delegation;
                toProto(message: _142.Delegation): Uint8Array;
                toProtoMsg(message: _142.Delegation): _142.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _142.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.UnbondingDelegation;
                fromPartial(object: Partial<_142.UnbondingDelegation>): _142.UnbondingDelegation;
                fromAmino(object: _142.UnbondingDelegationAmino): _142.UnbondingDelegation;
                toAmino(message: _142.UnbondingDelegation): _142.UnbondingDelegationAmino;
                fromAminoMsg(object: _142.UnbondingDelegationAminoMsg): _142.UnbondingDelegation;
                toAminoMsg(message: _142.UnbondingDelegation): _142.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _142.UnbondingDelegationProtoMsg): _142.UnbondingDelegation;
                toProto(message: _142.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _142.UnbondingDelegation): _142.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _142.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.UnbondingDelegationEntry;
                fromPartial(object: Partial<_142.UnbondingDelegationEntry>): _142.UnbondingDelegationEntry;
                fromAmino(object: _142.UnbondingDelegationEntryAmino): _142.UnbondingDelegationEntry;
                toAmino(message: _142.UnbondingDelegationEntry): _142.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _142.UnbondingDelegationEntryAminoMsg): _142.UnbondingDelegationEntry;
                toAminoMsg(message: _142.UnbondingDelegationEntry): _142.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _142.UnbondingDelegationEntryProtoMsg): _142.UnbondingDelegationEntry;
                toProto(message: _142.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _142.UnbondingDelegationEntry): _142.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _142.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.RedelegationEntry;
                fromPartial(object: Partial<_142.RedelegationEntry>): _142.RedelegationEntry;
                fromAmino(object: _142.RedelegationEntryAmino): _142.RedelegationEntry;
                toAmino(message: _142.RedelegationEntry): _142.RedelegationEntryAmino;
                fromAminoMsg(object: _142.RedelegationEntryAminoMsg): _142.RedelegationEntry;
                toAminoMsg(message: _142.RedelegationEntry): _142.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _142.RedelegationEntryProtoMsg): _142.RedelegationEntry;
                toProto(message: _142.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _142.RedelegationEntry): _142.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _142.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Redelegation;
                fromPartial(object: Partial<_142.Redelegation>): _142.Redelegation;
                fromAmino(object: _142.RedelegationAmino): _142.Redelegation;
                toAmino(message: _142.Redelegation): _142.RedelegationAmino;
                fromAminoMsg(object: _142.RedelegationAminoMsg): _142.Redelegation;
                toAminoMsg(message: _142.Redelegation): _142.RedelegationAminoMsg;
                fromProtoMsg(message: _142.RedelegationProtoMsg): _142.Redelegation;
                toProto(message: _142.Redelegation): Uint8Array;
                toProtoMsg(message: _142.Redelegation): _142.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _142.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Params;
                fromPartial(object: Partial<_142.Params>): _142.Params;
                fromAmino(object: _142.ParamsAmino): _142.Params;
                toAmino(message: _142.Params): _142.ParamsAmino;
                fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                toProto(message: _142.Params): Uint8Array;
                toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _142.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.DelegationResponse;
                fromPartial(object: Partial<_142.DelegationResponse>): _142.DelegationResponse;
                fromAmino(object: _142.DelegationResponseAmino): _142.DelegationResponse;
                toAmino(message: _142.DelegationResponse): _142.DelegationResponseAmino;
                fromAminoMsg(object: _142.DelegationResponseAminoMsg): _142.DelegationResponse;
                toAminoMsg(message: _142.DelegationResponse): _142.DelegationResponseAminoMsg;
                fromProtoMsg(message: _142.DelegationResponseProtoMsg): _142.DelegationResponse;
                toProto(message: _142.DelegationResponse): Uint8Array;
                toProtoMsg(message: _142.DelegationResponse): _142.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _142.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.RedelegationEntryResponse;
                fromPartial(object: Partial<_142.RedelegationEntryResponse>): _142.RedelegationEntryResponse;
                fromAmino(object: _142.RedelegationEntryResponseAmino): _142.RedelegationEntryResponse;
                toAmino(message: _142.RedelegationEntryResponse): _142.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _142.RedelegationEntryResponseAminoMsg): _142.RedelegationEntryResponse;
                toAminoMsg(message: _142.RedelegationEntryResponse): _142.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _142.RedelegationEntryResponseProtoMsg): _142.RedelegationEntryResponse;
                toProto(message: _142.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _142.RedelegationEntryResponse): _142.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _142.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.RedelegationResponse;
                fromPartial(object: Partial<_142.RedelegationResponse>): _142.RedelegationResponse;
                fromAmino(object: _142.RedelegationResponseAmino): _142.RedelegationResponse;
                toAmino(message: _142.RedelegationResponse): _142.RedelegationResponseAmino;
                fromAminoMsg(object: _142.RedelegationResponseAminoMsg): _142.RedelegationResponse;
                toAminoMsg(message: _142.RedelegationResponse): _142.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _142.RedelegationResponseProtoMsg): _142.RedelegationResponse;
                toProto(message: _142.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _142.RedelegationResponse): _142.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _142.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.Pool;
                fromPartial(object: Partial<_142.Pool>): _142.Pool;
                fromAmino(object: _142.PoolAmino): _142.Pool;
                toAmino(message: _142.Pool): _142.PoolAmino;
                fromAminoMsg(object: _142.PoolAminoMsg): _142.Pool;
                toAminoMsg(message: _142.Pool): _142.PoolAminoMsg;
                fromProtoMsg(message: _142.PoolProtoMsg): _142.Pool;
                toProto(message: _142.Pool): Uint8Array;
                toProtoMsg(message: _142.Pool): _142.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _142.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.ValidatorUpdates;
                fromPartial(object: Partial<_142.ValidatorUpdates>): _142.ValidatorUpdates;
                fromAmino(object: _142.ValidatorUpdatesAmino): _142.ValidatorUpdates;
                toAmino(message: _142.ValidatorUpdates): _142.ValidatorUpdatesAmino;
                fromAminoMsg(object: _142.ValidatorUpdatesAminoMsg): _142.ValidatorUpdates;
                toAminoMsg(message: _142.ValidatorUpdates): _142.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _142.ValidatorUpdatesProtoMsg): _142.ValidatorUpdates;
                toProto(message: _142.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _142.ValidatorUpdates): _142.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _141.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorsRequest;
                fromPartial(object: Partial<_141.QueryValidatorsRequest>): _141.QueryValidatorsRequest;
                fromAmino(object: _141.QueryValidatorsRequestAmino): _141.QueryValidatorsRequest;
                toAmino(message: _141.QueryValidatorsRequest): _141.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _141.QueryValidatorsRequestAminoMsg): _141.QueryValidatorsRequest;
                toAminoMsg(message: _141.QueryValidatorsRequest): _141.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorsRequestProtoMsg): _141.QueryValidatorsRequest;
                toProto(message: _141.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorsRequest): _141.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _141.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorsResponse;
                fromPartial(object: Partial<_141.QueryValidatorsResponse>): _141.QueryValidatorsResponse;
                fromAmino(object: _141.QueryValidatorsResponseAmino): _141.QueryValidatorsResponse;
                toAmino(message: _141.QueryValidatorsResponse): _141.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _141.QueryValidatorsResponseAminoMsg): _141.QueryValidatorsResponse;
                toAminoMsg(message: _141.QueryValidatorsResponse): _141.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorsResponseProtoMsg): _141.QueryValidatorsResponse;
                toProto(message: _141.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorsResponse): _141.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _141.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorRequest;
                fromPartial(object: Partial<_141.QueryValidatorRequest>): _141.QueryValidatorRequest;
                fromAmino(object: _141.QueryValidatorRequestAmino): _141.QueryValidatorRequest;
                toAmino(message: _141.QueryValidatorRequest): _141.QueryValidatorRequestAmino;
                fromAminoMsg(object: _141.QueryValidatorRequestAminoMsg): _141.QueryValidatorRequest;
                toAminoMsg(message: _141.QueryValidatorRequest): _141.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorRequestProtoMsg): _141.QueryValidatorRequest;
                toProto(message: _141.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorRequest): _141.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _141.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorResponse;
                fromPartial(object: Partial<_141.QueryValidatorResponse>): _141.QueryValidatorResponse;
                fromAmino(object: _141.QueryValidatorResponseAmino): _141.QueryValidatorResponse;
                toAmino(message: _141.QueryValidatorResponse): _141.QueryValidatorResponseAmino;
                fromAminoMsg(object: _141.QueryValidatorResponseAminoMsg): _141.QueryValidatorResponse;
                toAminoMsg(message: _141.QueryValidatorResponse): _141.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorResponseProtoMsg): _141.QueryValidatorResponse;
                toProto(message: _141.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorResponse): _141.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _141.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_141.QueryValidatorDelegationsRequest>): _141.QueryValidatorDelegationsRequest;
                fromAmino(object: _141.QueryValidatorDelegationsRequestAmino): _141.QueryValidatorDelegationsRequest;
                toAmino(message: _141.QueryValidatorDelegationsRequest): _141.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _141.QueryValidatorDelegationsRequestAminoMsg): _141.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _141.QueryValidatorDelegationsRequest): _141.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorDelegationsRequestProtoMsg): _141.QueryValidatorDelegationsRequest;
                toProto(message: _141.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorDelegationsRequest): _141.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _141.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_141.QueryValidatorDelegationsResponse>): _141.QueryValidatorDelegationsResponse;
                fromAmino(object: _141.QueryValidatorDelegationsResponseAmino): _141.QueryValidatorDelegationsResponse;
                toAmino(message: _141.QueryValidatorDelegationsResponse): _141.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _141.QueryValidatorDelegationsResponseAminoMsg): _141.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _141.QueryValidatorDelegationsResponse): _141.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorDelegationsResponseProtoMsg): _141.QueryValidatorDelegationsResponse;
                toProto(message: _141.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorDelegationsResponse): _141.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _141.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_141.QueryValidatorUnbondingDelegationsRequest>): _141.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _141.QueryValidatorUnbondingDelegationsRequestAmino): _141.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _141.QueryValidatorUnbondingDelegationsRequest): _141.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _141.QueryValidatorUnbondingDelegationsRequestAminoMsg): _141.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _141.QueryValidatorUnbondingDelegationsRequest): _141.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorUnbondingDelegationsRequestProtoMsg): _141.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _141.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorUnbondingDelegationsRequest): _141.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _141.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_141.QueryValidatorUnbondingDelegationsResponse>): _141.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _141.QueryValidatorUnbondingDelegationsResponseAmino): _141.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _141.QueryValidatorUnbondingDelegationsResponse): _141.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _141.QueryValidatorUnbondingDelegationsResponseAminoMsg): _141.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _141.QueryValidatorUnbondingDelegationsResponse): _141.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryValidatorUnbondingDelegationsResponseProtoMsg): _141.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _141.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryValidatorUnbondingDelegationsResponse): _141.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _141.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegationRequest;
                fromPartial(object: Partial<_141.QueryDelegationRequest>): _141.QueryDelegationRequest;
                fromAmino(object: _141.QueryDelegationRequestAmino): _141.QueryDelegationRequest;
                toAmino(message: _141.QueryDelegationRequest): _141.QueryDelegationRequestAmino;
                fromAminoMsg(object: _141.QueryDelegationRequestAminoMsg): _141.QueryDelegationRequest;
                toAminoMsg(message: _141.QueryDelegationRequest): _141.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _141.QueryDelegationRequestProtoMsg): _141.QueryDelegationRequest;
                toProto(message: _141.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _141.QueryDelegationRequest): _141.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _141.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegationResponse;
                fromPartial(object: Partial<_141.QueryDelegationResponse>): _141.QueryDelegationResponse;
                fromAmino(object: _141.QueryDelegationResponseAmino): _141.QueryDelegationResponse;
                toAmino(message: _141.QueryDelegationResponse): _141.QueryDelegationResponseAmino;
                fromAminoMsg(object: _141.QueryDelegationResponseAminoMsg): _141.QueryDelegationResponse;
                toAminoMsg(message: _141.QueryDelegationResponse): _141.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _141.QueryDelegationResponseProtoMsg): _141.QueryDelegationResponse;
                toProto(message: _141.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _141.QueryDelegationResponse): _141.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _141.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_141.QueryUnbondingDelegationRequest>): _141.QueryUnbondingDelegationRequest;
                fromAmino(object: _141.QueryUnbondingDelegationRequestAmino): _141.QueryUnbondingDelegationRequest;
                toAmino(message: _141.QueryUnbondingDelegationRequest): _141.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _141.QueryUnbondingDelegationRequestAminoMsg): _141.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _141.QueryUnbondingDelegationRequest): _141.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _141.QueryUnbondingDelegationRequestProtoMsg): _141.QueryUnbondingDelegationRequest;
                toProto(message: _141.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _141.QueryUnbondingDelegationRequest): _141.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _141.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_141.QueryUnbondingDelegationResponse>): _141.QueryUnbondingDelegationResponse;
                fromAmino(object: _141.QueryUnbondingDelegationResponseAmino): _141.QueryUnbondingDelegationResponse;
                toAmino(message: _141.QueryUnbondingDelegationResponse): _141.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _141.QueryUnbondingDelegationResponseAminoMsg): _141.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _141.QueryUnbondingDelegationResponse): _141.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _141.QueryUnbondingDelegationResponseProtoMsg): _141.QueryUnbondingDelegationResponse;
                toProto(message: _141.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _141.QueryUnbondingDelegationResponse): _141.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_141.QueryDelegatorDelegationsRequest>): _141.QueryDelegatorDelegationsRequest;
                fromAmino(object: _141.QueryDelegatorDelegationsRequestAmino): _141.QueryDelegatorDelegationsRequest;
                toAmino(message: _141.QueryDelegatorDelegationsRequest): _141.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _141.QueryDelegatorDelegationsRequestAminoMsg): _141.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _141.QueryDelegatorDelegationsRequest): _141.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorDelegationsRequestProtoMsg): _141.QueryDelegatorDelegationsRequest;
                toProto(message: _141.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorDelegationsRequest): _141.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_141.QueryDelegatorDelegationsResponse>): _141.QueryDelegatorDelegationsResponse;
                fromAmino(object: _141.QueryDelegatorDelegationsResponseAmino): _141.QueryDelegatorDelegationsResponse;
                toAmino(message: _141.QueryDelegatorDelegationsResponse): _141.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _141.QueryDelegatorDelegationsResponseAminoMsg): _141.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _141.QueryDelegatorDelegationsResponse): _141.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorDelegationsResponseProtoMsg): _141.QueryDelegatorDelegationsResponse;
                toProto(message: _141.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorDelegationsResponse): _141.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_141.QueryDelegatorUnbondingDelegationsRequest>): _141.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _141.QueryDelegatorUnbondingDelegationsRequestAmino): _141.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _141.QueryDelegatorUnbondingDelegationsRequest): _141.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _141.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _141.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _141.QueryDelegatorUnbondingDelegationsRequest): _141.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _141.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _141.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorUnbondingDelegationsRequest): _141.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_141.QueryDelegatorUnbondingDelegationsResponse>): _141.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _141.QueryDelegatorUnbondingDelegationsResponseAmino): _141.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _141.QueryDelegatorUnbondingDelegationsResponse): _141.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _141.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _141.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _141.QueryDelegatorUnbondingDelegationsResponse): _141.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _141.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _141.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorUnbondingDelegationsResponse): _141.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _141.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryRedelegationsRequest;
                fromPartial(object: Partial<_141.QueryRedelegationsRequest>): _141.QueryRedelegationsRequest;
                fromAmino(object: _141.QueryRedelegationsRequestAmino): _141.QueryRedelegationsRequest;
                toAmino(message: _141.QueryRedelegationsRequest): _141.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _141.QueryRedelegationsRequestAminoMsg): _141.QueryRedelegationsRequest;
                toAminoMsg(message: _141.QueryRedelegationsRequest): _141.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryRedelegationsRequestProtoMsg): _141.QueryRedelegationsRequest;
                toProto(message: _141.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryRedelegationsRequest): _141.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _141.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryRedelegationsResponse;
                fromPartial(object: Partial<_141.QueryRedelegationsResponse>): _141.QueryRedelegationsResponse;
                fromAmino(object: _141.QueryRedelegationsResponseAmino): _141.QueryRedelegationsResponse;
                toAmino(message: _141.QueryRedelegationsResponse): _141.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _141.QueryRedelegationsResponseAminoMsg): _141.QueryRedelegationsResponse;
                toAminoMsg(message: _141.QueryRedelegationsResponse): _141.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryRedelegationsResponseProtoMsg): _141.QueryRedelegationsResponse;
                toProto(message: _141.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryRedelegationsResponse): _141.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_141.QueryDelegatorValidatorsRequest>): _141.QueryDelegatorValidatorsRequest;
                fromAmino(object: _141.QueryDelegatorValidatorsRequestAmino): _141.QueryDelegatorValidatorsRequest;
                toAmino(message: _141.QueryDelegatorValidatorsRequest): _141.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _141.QueryDelegatorValidatorsRequestAminoMsg): _141.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _141.QueryDelegatorValidatorsRequest): _141.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorValidatorsRequestProtoMsg): _141.QueryDelegatorValidatorsRequest;
                toProto(message: _141.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorValidatorsRequest): _141.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_141.QueryDelegatorValidatorsResponse>): _141.QueryDelegatorValidatorsResponse;
                fromAmino(object: _141.QueryDelegatorValidatorsResponseAmino): _141.QueryDelegatorValidatorsResponse;
                toAmino(message: _141.QueryDelegatorValidatorsResponse): _141.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _141.QueryDelegatorValidatorsResponseAminoMsg): _141.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _141.QueryDelegatorValidatorsResponse): _141.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorValidatorsResponseProtoMsg): _141.QueryDelegatorValidatorsResponse;
                toProto(message: _141.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorValidatorsResponse): _141.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_141.QueryDelegatorValidatorRequest>): _141.QueryDelegatorValidatorRequest;
                fromAmino(object: _141.QueryDelegatorValidatorRequestAmino): _141.QueryDelegatorValidatorRequest;
                toAmino(message: _141.QueryDelegatorValidatorRequest): _141.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _141.QueryDelegatorValidatorRequestAminoMsg): _141.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _141.QueryDelegatorValidatorRequest): _141.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorValidatorRequestProtoMsg): _141.QueryDelegatorValidatorRequest;
                toProto(message: _141.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorValidatorRequest): _141.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _141.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_141.QueryDelegatorValidatorResponse>): _141.QueryDelegatorValidatorResponse;
                fromAmino(object: _141.QueryDelegatorValidatorResponseAmino): _141.QueryDelegatorValidatorResponse;
                toAmino(message: _141.QueryDelegatorValidatorResponse): _141.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _141.QueryDelegatorValidatorResponseAminoMsg): _141.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _141.QueryDelegatorValidatorResponse): _141.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _141.QueryDelegatorValidatorResponseProtoMsg): _141.QueryDelegatorValidatorResponse;
                toProto(message: _141.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _141.QueryDelegatorValidatorResponse): _141.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _141.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_141.QueryHistoricalInfoRequest>): _141.QueryHistoricalInfoRequest;
                fromAmino(object: _141.QueryHistoricalInfoRequestAmino): _141.QueryHistoricalInfoRequest;
                toAmino(message: _141.QueryHistoricalInfoRequest): _141.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _141.QueryHistoricalInfoRequestAminoMsg): _141.QueryHistoricalInfoRequest;
                toAminoMsg(message: _141.QueryHistoricalInfoRequest): _141.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _141.QueryHistoricalInfoRequestProtoMsg): _141.QueryHistoricalInfoRequest;
                toProto(message: _141.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _141.QueryHistoricalInfoRequest): _141.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _141.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_141.QueryHistoricalInfoResponse>): _141.QueryHistoricalInfoResponse;
                fromAmino(object: _141.QueryHistoricalInfoResponseAmino): _141.QueryHistoricalInfoResponse;
                toAmino(message: _141.QueryHistoricalInfoResponse): _141.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _141.QueryHistoricalInfoResponseAminoMsg): _141.QueryHistoricalInfoResponse;
                toAminoMsg(message: _141.QueryHistoricalInfoResponse): _141.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _141.QueryHistoricalInfoResponseProtoMsg): _141.QueryHistoricalInfoResponse;
                toProto(message: _141.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _141.QueryHistoricalInfoResponse): _141.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _141.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _141.QueryPoolRequest;
                fromPartial(_: Partial<_141.QueryPoolRequest>): _141.QueryPoolRequest;
                fromAmino(_: _141.QueryPoolRequestAmino): _141.QueryPoolRequest;
                toAmino(_: _141.QueryPoolRequest): _141.QueryPoolRequestAmino;
                fromAminoMsg(object: _141.QueryPoolRequestAminoMsg): _141.QueryPoolRequest;
                toAminoMsg(message: _141.QueryPoolRequest): _141.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _141.QueryPoolRequestProtoMsg): _141.QueryPoolRequest;
                toProto(message: _141.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _141.QueryPoolRequest): _141.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _141.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryPoolResponse;
                fromPartial(object: Partial<_141.QueryPoolResponse>): _141.QueryPoolResponse;
                fromAmino(object: _141.QueryPoolResponseAmino): _141.QueryPoolResponse;
                toAmino(message: _141.QueryPoolResponse): _141.QueryPoolResponseAmino;
                fromAminoMsg(object: _141.QueryPoolResponseAminoMsg): _141.QueryPoolResponse;
                toAminoMsg(message: _141.QueryPoolResponse): _141.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _141.QueryPoolResponseProtoMsg): _141.QueryPoolResponse;
                toProto(message: _141.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _141.QueryPoolResponse): _141.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _141.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _141.QueryParamsRequest;
                fromPartial(_: Partial<_141.QueryParamsRequest>): _141.QueryParamsRequest;
                fromAmino(_: _141.QueryParamsRequestAmino): _141.QueryParamsRequest;
                toAmino(_: _141.QueryParamsRequest): _141.QueryParamsRequestAmino;
                fromAminoMsg(object: _141.QueryParamsRequestAminoMsg): _141.QueryParamsRequest;
                toAminoMsg(message: _141.QueryParamsRequest): _141.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _141.QueryParamsRequestProtoMsg): _141.QueryParamsRequest;
                toProto(message: _141.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _141.QueryParamsRequest): _141.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _141.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.QueryParamsResponse;
                fromPartial(object: Partial<_141.QueryParamsResponse>): _141.QueryParamsResponse;
                fromAmino(object: _141.QueryParamsResponseAmino): _141.QueryParamsResponse;
                toAmino(message: _141.QueryParamsResponse): _141.QueryParamsResponseAmino;
                fromAminoMsg(object: _141.QueryParamsResponseAminoMsg): _141.QueryParamsResponse;
                toAminoMsg(message: _141.QueryParamsResponse): _141.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _141.QueryParamsResponseProtoMsg): _141.QueryParamsResponse;
                toProto(message: _141.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _141.QueryParamsResponse): _141.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _140.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.LastValidatorPower;
                fromPartial(object: Partial<_140.LastValidatorPower>): _140.LastValidatorPower;
                fromAmino(object: _140.LastValidatorPowerAmino): _140.LastValidatorPower;
                toAmino(message: _140.LastValidatorPower): _140.LastValidatorPowerAmino;
                fromAminoMsg(object: _140.LastValidatorPowerAminoMsg): _140.LastValidatorPower;
                toAminoMsg(message: _140.LastValidatorPower): _140.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _140.LastValidatorPowerProtoMsg): _140.LastValidatorPower;
                toProto(message: _140.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _140.LastValidatorPower): _140.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _139.AuthorizationType;
            authorizationTypeToJSON(object: _139.AuthorizationType): string;
            AuthorizationType: typeof _139.AuthorizationType;
            AuthorizationTypeSDKType: typeof _139.AuthorizationType;
            AuthorizationTypeAmino: typeof _139.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _139.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.StakeAuthorization;
                fromPartial(object: Partial<_139.StakeAuthorization>): _139.StakeAuthorization;
                fromAmino(object: _139.StakeAuthorizationAmino): _139.StakeAuthorization;
                toAmino(message: _139.StakeAuthorization): _139.StakeAuthorizationAmino;
                fromAminoMsg(object: _139.StakeAuthorizationAminoMsg): _139.StakeAuthorization;
                toAminoMsg(message: _139.StakeAuthorization): _139.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _139.StakeAuthorizationProtoMsg): _139.StakeAuthorization;
                toProto(message: _139.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _139.StakeAuthorization): _139.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _139.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _139.StakeAuthorization_Validators;
                fromPartial(object: Partial<_139.StakeAuthorization_Validators>): _139.StakeAuthorization_Validators;
                fromAmino(object: _139.StakeAuthorization_ValidatorsAmino): _139.StakeAuthorization_Validators;
                toAmino(message: _139.StakeAuthorization_Validators): _139.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _139.StakeAuthorization_ValidatorsAminoMsg): _139.StakeAuthorization_Validators;
                toAminoMsg(message: _139.StakeAuthorization_Validators): _139.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _139.StakeAuthorization_ValidatorsProtoMsg): _139.StakeAuthorization_Validators;
                toProto(message: _139.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _139.StakeAuthorization_Validators): _139.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _144.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _144.Config;
                    fromPartial(object: Partial<_144.Config>): _144.Config;
                    fromAmino(object: _144.ConfigAmino): _144.Config;
                    toAmino(message: _144.Config): _144.ConfigAmino;
                    fromAminoMsg(object: _144.ConfigAminoMsg): _144.Config;
                    toAminoMsg(message: _144.Config): _144.ConfigAminoMsg;
                    fromProtoMsg(message: _144.ConfigProtoMsg): _144.Config;
                    toProto(message: _144.Config): Uint8Array;
                    toProtoMsg(message: _144.Config): _144.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _145.SignMode;
                signModeToJSON(object: _145.SignMode): string;
                SignMode: typeof _145.SignMode;
                SignModeSDKType: typeof _145.SignMode;
                SignModeAmino: typeof _145.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _145.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.SignatureDescriptors;
                    fromPartial(object: Partial<_145.SignatureDescriptors>): _145.SignatureDescriptors;
                    fromAmino(object: _145.SignatureDescriptorsAmino): _145.SignatureDescriptors;
                    toAmino(message: _145.SignatureDescriptors): _145.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _145.SignatureDescriptorsAminoMsg): _145.SignatureDescriptors;
                    toAminoMsg(message: _145.SignatureDescriptors): _145.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _145.SignatureDescriptorsProtoMsg): _145.SignatureDescriptors;
                    toProto(message: _145.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _145.SignatureDescriptors): _145.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _145.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.SignatureDescriptor;
                    fromPartial(object: Partial<_145.SignatureDescriptor>): _145.SignatureDescriptor;
                    fromAmino(object: _145.SignatureDescriptorAmino): _145.SignatureDescriptor;
                    toAmino(message: _145.SignatureDescriptor): _145.SignatureDescriptorAmino;
                    fromAminoMsg(object: _145.SignatureDescriptorAminoMsg): _145.SignatureDescriptor;
                    toAminoMsg(message: _145.SignatureDescriptor): _145.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _145.SignatureDescriptorProtoMsg): _145.SignatureDescriptor;
                    toProto(message: _145.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _145.SignatureDescriptor): _145.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _145.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_145.SignatureDescriptor_Data>): _145.SignatureDescriptor_Data;
                    fromAmino(object: _145.SignatureDescriptor_DataAmino): _145.SignatureDescriptor_Data;
                    toAmino(message: _145.SignatureDescriptor_Data): _145.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _145.SignatureDescriptor_DataAminoMsg): _145.SignatureDescriptor_Data;
                    toAminoMsg(message: _145.SignatureDescriptor_Data): _145.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _145.SignatureDescriptor_DataProtoMsg): _145.SignatureDescriptor_Data;
                    toProto(message: _145.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _145.SignatureDescriptor_Data): _145.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _145.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_145.SignatureDescriptor_Data_Single>): _145.SignatureDescriptor_Data_Single;
                    fromAmino(object: _145.SignatureDescriptor_Data_SingleAmino): _145.SignatureDescriptor_Data_Single;
                    toAmino(message: _145.SignatureDescriptor_Data_Single): _145.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _145.SignatureDescriptor_Data_SingleAminoMsg): _145.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _145.SignatureDescriptor_Data_Single): _145.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _145.SignatureDescriptor_Data_SingleProtoMsg): _145.SignatureDescriptor_Data_Single;
                    toProto(message: _145.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _145.SignatureDescriptor_Data_Single): _145.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _145.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_145.SignatureDescriptor_Data_Multi>): _145.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _145.SignatureDescriptor_Data_MultiAmino): _145.SignatureDescriptor_Data_Multi;
                    toAmino(message: _145.SignatureDescriptor_Data_Multi): _145.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _145.SignatureDescriptor_Data_MultiAminoMsg): _145.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _145.SignatureDescriptor_Data_Multi): _145.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _145.SignatureDescriptor_Data_MultiProtoMsg): _145.SignatureDescriptor_Data_Multi;
                    toProto(message: _145.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _145.SignatureDescriptor_Data_Multi): _145.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _284.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _146.SimulateRequest): Promise<_146.SimulateResponse>;
                getTx(request: _146.GetTxRequest): Promise<_146.GetTxResponse>;
                broadcastTx(request: _146.BroadcastTxRequest): Promise<_146.BroadcastTxResponse>;
                getTxsEvent(request: _146.GetTxsEventRequest): Promise<_146.GetTxsEventResponse>;
                getBlockWithTxs(request: _146.GetBlockWithTxsRequest): Promise<_146.GetBlockWithTxsResponse>;
                txDecode(request: _146.TxDecodeRequest): Promise<_146.TxDecodeResponse>;
                txEncode(request: _146.TxEncodeRequest): Promise<_146.TxEncodeResponse>;
                txEncodeAmino(request: _146.TxEncodeAminoRequest): Promise<_146.TxEncodeAminoResponse>;
                txDecodeAmino(request: _146.TxDecodeAminoRequest): Promise<_146.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _147.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.Tx;
                fromPartial(object: Partial<_147.Tx>): _147.Tx;
                fromAmino(object: _147.TxAmino): _147.Tx;
                toAmino(message: _147.Tx): _147.TxAmino;
                fromAminoMsg(object: _147.TxAminoMsg): _147.Tx;
                toAminoMsg(message: _147.Tx): _147.TxAminoMsg;
                fromProtoMsg(message: _147.TxProtoMsg): _147.Tx;
                toProto(message: _147.Tx): Uint8Array;
                toProtoMsg(message: _147.Tx): _147.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _147.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxRaw;
                fromPartial(object: Partial<_147.TxRaw>): _147.TxRaw;
                fromAmino(object: _147.TxRawAmino): _147.TxRaw;
                toAmino(message: _147.TxRaw): _147.TxRawAmino;
                fromAminoMsg(object: _147.TxRawAminoMsg): _147.TxRaw;
                toAminoMsg(message: _147.TxRaw): _147.TxRawAminoMsg;
                fromProtoMsg(message: _147.TxRawProtoMsg): _147.TxRaw;
                toProto(message: _147.TxRaw): Uint8Array;
                toProtoMsg(message: _147.TxRaw): _147.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _147.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.SignDoc;
                fromPartial(object: Partial<_147.SignDoc>): _147.SignDoc;
                fromAmino(object: _147.SignDocAmino): _147.SignDoc;
                toAmino(message: _147.SignDoc): _147.SignDocAmino;
                fromAminoMsg(object: _147.SignDocAminoMsg): _147.SignDoc;
                toAminoMsg(message: _147.SignDoc): _147.SignDocAminoMsg;
                fromProtoMsg(message: _147.SignDocProtoMsg): _147.SignDoc;
                toProto(message: _147.SignDoc): Uint8Array;
                toProtoMsg(message: _147.SignDoc): _147.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _147.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.SignDocDirectAux;
                fromPartial(object: Partial<_147.SignDocDirectAux>): _147.SignDocDirectAux;
                fromAmino(object: _147.SignDocDirectAuxAmino): _147.SignDocDirectAux;
                toAmino(message: _147.SignDocDirectAux): _147.SignDocDirectAuxAmino;
                fromAminoMsg(object: _147.SignDocDirectAuxAminoMsg): _147.SignDocDirectAux;
                toAminoMsg(message: _147.SignDocDirectAux): _147.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _147.SignDocDirectAuxProtoMsg): _147.SignDocDirectAux;
                toProto(message: _147.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _147.SignDocDirectAux): _147.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _147.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxBody;
                fromPartial(object: Partial<_147.TxBody>): _147.TxBody;
                fromAmino(object: _147.TxBodyAmino): _147.TxBody;
                toAmino(message: _147.TxBody): _147.TxBodyAmino;
                fromAminoMsg(object: _147.TxBodyAminoMsg): _147.TxBody;
                toAminoMsg(message: _147.TxBody): _147.TxBodyAminoMsg;
                fromProtoMsg(message: _147.TxBodyProtoMsg): _147.TxBody;
                toProto(message: _147.TxBody): Uint8Array;
                toProtoMsg(message: _147.TxBody): _147.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _147.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.AuthInfo;
                fromPartial(object: Partial<_147.AuthInfo>): _147.AuthInfo;
                fromAmino(object: _147.AuthInfoAmino): _147.AuthInfo;
                toAmino(message: _147.AuthInfo): _147.AuthInfoAmino;
                fromAminoMsg(object: _147.AuthInfoAminoMsg): _147.AuthInfo;
                toAminoMsg(message: _147.AuthInfo): _147.AuthInfoAminoMsg;
                fromProtoMsg(message: _147.AuthInfoProtoMsg): _147.AuthInfo;
                toProto(message: _147.AuthInfo): Uint8Array;
                toProtoMsg(message: _147.AuthInfo): _147.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _147.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.SignerInfo;
                fromPartial(object: Partial<_147.SignerInfo>): _147.SignerInfo;
                fromAmino(object: _147.SignerInfoAmino): _147.SignerInfo;
                toAmino(message: _147.SignerInfo): _147.SignerInfoAmino;
                fromAminoMsg(object: _147.SignerInfoAminoMsg): _147.SignerInfo;
                toAminoMsg(message: _147.SignerInfo): _147.SignerInfoAminoMsg;
                fromProtoMsg(message: _147.SignerInfoProtoMsg): _147.SignerInfo;
                toProto(message: _147.SignerInfo): Uint8Array;
                toProtoMsg(message: _147.SignerInfo): _147.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _147.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ModeInfo;
                fromPartial(object: Partial<_147.ModeInfo>): _147.ModeInfo;
                fromAmino(object: _147.ModeInfoAmino): _147.ModeInfo;
                toAmino(message: _147.ModeInfo): _147.ModeInfoAmino;
                fromAminoMsg(object: _147.ModeInfoAminoMsg): _147.ModeInfo;
                toAminoMsg(message: _147.ModeInfo): _147.ModeInfoAminoMsg;
                fromProtoMsg(message: _147.ModeInfoProtoMsg): _147.ModeInfo;
                toProto(message: _147.ModeInfo): Uint8Array;
                toProtoMsg(message: _147.ModeInfo): _147.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _147.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ModeInfo_Single;
                fromPartial(object: Partial<_147.ModeInfo_Single>): _147.ModeInfo_Single;
                fromAmino(object: _147.ModeInfo_SingleAmino): _147.ModeInfo_Single;
                toAmino(message: _147.ModeInfo_Single): _147.ModeInfo_SingleAmino;
                fromAminoMsg(object: _147.ModeInfo_SingleAminoMsg): _147.ModeInfo_Single;
                toAminoMsg(message: _147.ModeInfo_Single): _147.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _147.ModeInfo_SingleProtoMsg): _147.ModeInfo_Single;
                toProto(message: _147.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _147.ModeInfo_Single): _147.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _147.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ModeInfo_Multi;
                fromPartial(object: Partial<_147.ModeInfo_Multi>): _147.ModeInfo_Multi;
                fromAmino(object: _147.ModeInfo_MultiAmino): _147.ModeInfo_Multi;
                toAmino(message: _147.ModeInfo_Multi): _147.ModeInfo_MultiAmino;
                fromAminoMsg(object: _147.ModeInfo_MultiAminoMsg): _147.ModeInfo_Multi;
                toAminoMsg(message: _147.ModeInfo_Multi): _147.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _147.ModeInfo_MultiProtoMsg): _147.ModeInfo_Multi;
                toProto(message: _147.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _147.ModeInfo_Multi): _147.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _147.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.Fee;
                fromPartial(object: Partial<_147.Fee>): _147.Fee;
                fromAmino(object: _147.FeeAmino): _147.Fee;
                toAmino(message: _147.Fee): _147.FeeAmino;
                fromAminoMsg(object: _147.FeeAminoMsg): _147.Fee;
                toAminoMsg(message: _147.Fee): _147.FeeAminoMsg;
                fromProtoMsg(message: _147.FeeProtoMsg): _147.Fee;
                toProto(message: _147.Fee): Uint8Array;
                toProtoMsg(message: _147.Fee): _147.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _147.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.Tip;
                fromPartial(object: Partial<_147.Tip>): _147.Tip;
                fromAmino(object: _147.TipAmino): _147.Tip;
                toAmino(message: _147.Tip): _147.TipAmino;
                fromAminoMsg(object: _147.TipAminoMsg): _147.Tip;
                toAminoMsg(message: _147.Tip): _147.TipAminoMsg;
                fromProtoMsg(message: _147.TipProtoMsg): _147.Tip;
                toProto(message: _147.Tip): Uint8Array;
                toProtoMsg(message: _147.Tip): _147.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _147.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.AuxSignerData;
                fromPartial(object: Partial<_147.AuxSignerData>): _147.AuxSignerData;
                fromAmino(object: _147.AuxSignerDataAmino): _147.AuxSignerData;
                toAmino(message: _147.AuxSignerData): _147.AuxSignerDataAmino;
                fromAminoMsg(object: _147.AuxSignerDataAminoMsg): _147.AuxSignerData;
                toAminoMsg(message: _147.AuxSignerData): _147.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _147.AuxSignerDataProtoMsg): _147.AuxSignerData;
                toProto(message: _147.AuxSignerData): Uint8Array;
                toProtoMsg(message: _147.AuxSignerData): _147.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _146.OrderBy;
            orderByToJSON(object: _146.OrderBy): string;
            broadcastModeFromJSON(object: any): _146.BroadcastMode;
            broadcastModeToJSON(object: _146.BroadcastMode): string;
            OrderBy: typeof _146.OrderBy;
            OrderBySDKType: typeof _146.OrderBy;
            OrderByAmino: typeof _146.OrderBy;
            BroadcastMode: typeof _146.BroadcastMode;
            BroadcastModeSDKType: typeof _146.BroadcastMode;
            BroadcastModeAmino: typeof _146.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _146.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.GetTxsEventRequest;
                fromPartial(object: Partial<_146.GetTxsEventRequest>): _146.GetTxsEventRequest;
                fromAmino(object: _146.GetTxsEventRequestAmino): _146.GetTxsEventRequest;
                toAmino(message: _146.GetTxsEventRequest): _146.GetTxsEventRequestAmino;
                fromAminoMsg(object: _146.GetTxsEventRequestAminoMsg): _146.GetTxsEventRequest;
                toAminoMsg(message: _146.GetTxsEventRequest): _146.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _146.GetTxsEventRequestProtoMsg): _146.GetTxsEventRequest;
                toProto(message: _146.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _146.GetTxsEventRequest): _146.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _146.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.GetTxsEventResponse;
                fromPartial(object: Partial<_146.GetTxsEventResponse>): _146.GetTxsEventResponse;
                fromAmino(object: _146.GetTxsEventResponseAmino): _146.GetTxsEventResponse;
                toAmino(message: _146.GetTxsEventResponse): _146.GetTxsEventResponseAmino;
                fromAminoMsg(object: _146.GetTxsEventResponseAminoMsg): _146.GetTxsEventResponse;
                toAminoMsg(message: _146.GetTxsEventResponse): _146.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _146.GetTxsEventResponseProtoMsg): _146.GetTxsEventResponse;
                toProto(message: _146.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _146.GetTxsEventResponse): _146.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _146.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.BroadcastTxRequest;
                fromPartial(object: Partial<_146.BroadcastTxRequest>): _146.BroadcastTxRequest;
                fromAmino(object: _146.BroadcastTxRequestAmino): _146.BroadcastTxRequest;
                toAmino(message: _146.BroadcastTxRequest): _146.BroadcastTxRequestAmino;
                fromAminoMsg(object: _146.BroadcastTxRequestAminoMsg): _146.BroadcastTxRequest;
                toAminoMsg(message: _146.BroadcastTxRequest): _146.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _146.BroadcastTxRequestProtoMsg): _146.BroadcastTxRequest;
                toProto(message: _146.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _146.BroadcastTxRequest): _146.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _146.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.BroadcastTxResponse;
                fromPartial(object: Partial<_146.BroadcastTxResponse>): _146.BroadcastTxResponse;
                fromAmino(object: _146.BroadcastTxResponseAmino): _146.BroadcastTxResponse;
                toAmino(message: _146.BroadcastTxResponse): _146.BroadcastTxResponseAmino;
                fromAminoMsg(object: _146.BroadcastTxResponseAminoMsg): _146.BroadcastTxResponse;
                toAminoMsg(message: _146.BroadcastTxResponse): _146.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _146.BroadcastTxResponseProtoMsg): _146.BroadcastTxResponse;
                toProto(message: _146.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _146.BroadcastTxResponse): _146.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _146.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.SimulateRequest;
                fromPartial(object: Partial<_146.SimulateRequest>): _146.SimulateRequest;
                fromAmino(object: _146.SimulateRequestAmino): _146.SimulateRequest;
                toAmino(message: _146.SimulateRequest): _146.SimulateRequestAmino;
                fromAminoMsg(object: _146.SimulateRequestAminoMsg): _146.SimulateRequest;
                toAminoMsg(message: _146.SimulateRequest): _146.SimulateRequestAminoMsg;
                fromProtoMsg(message: _146.SimulateRequestProtoMsg): _146.SimulateRequest;
                toProto(message: _146.SimulateRequest): Uint8Array;
                toProtoMsg(message: _146.SimulateRequest): _146.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _146.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.SimulateResponse;
                fromPartial(object: Partial<_146.SimulateResponse>): _146.SimulateResponse;
                fromAmino(object: _146.SimulateResponseAmino): _146.SimulateResponse;
                toAmino(message: _146.SimulateResponse): _146.SimulateResponseAmino;
                fromAminoMsg(object: _146.SimulateResponseAminoMsg): _146.SimulateResponse;
                toAminoMsg(message: _146.SimulateResponse): _146.SimulateResponseAminoMsg;
                fromProtoMsg(message: _146.SimulateResponseProtoMsg): _146.SimulateResponse;
                toProto(message: _146.SimulateResponse): Uint8Array;
                toProtoMsg(message: _146.SimulateResponse): _146.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _146.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.GetTxRequest;
                fromPartial(object: Partial<_146.GetTxRequest>): _146.GetTxRequest;
                fromAmino(object: _146.GetTxRequestAmino): _146.GetTxRequest;
                toAmino(message: _146.GetTxRequest): _146.GetTxRequestAmino;
                fromAminoMsg(object: _146.GetTxRequestAminoMsg): _146.GetTxRequest;
                toAminoMsg(message: _146.GetTxRequest): _146.GetTxRequestAminoMsg;
                fromProtoMsg(message: _146.GetTxRequestProtoMsg): _146.GetTxRequest;
                toProto(message: _146.GetTxRequest): Uint8Array;
                toProtoMsg(message: _146.GetTxRequest): _146.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _146.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.GetTxResponse;
                fromPartial(object: Partial<_146.GetTxResponse>): _146.GetTxResponse;
                fromAmino(object: _146.GetTxResponseAmino): _146.GetTxResponse;
                toAmino(message: _146.GetTxResponse): _146.GetTxResponseAmino;
                fromAminoMsg(object: _146.GetTxResponseAminoMsg): _146.GetTxResponse;
                toAminoMsg(message: _146.GetTxResponse): _146.GetTxResponseAminoMsg;
                fromProtoMsg(message: _146.GetTxResponseProtoMsg): _146.GetTxResponse;
                toProto(message: _146.GetTxResponse): Uint8Array;
                toProtoMsg(message: _146.GetTxResponse): _146.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _146.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_146.GetBlockWithTxsRequest>): _146.GetBlockWithTxsRequest;
                fromAmino(object: _146.GetBlockWithTxsRequestAmino): _146.GetBlockWithTxsRequest;
                toAmino(message: _146.GetBlockWithTxsRequest): _146.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _146.GetBlockWithTxsRequestAminoMsg): _146.GetBlockWithTxsRequest;
                toAminoMsg(message: _146.GetBlockWithTxsRequest): _146.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _146.GetBlockWithTxsRequestProtoMsg): _146.GetBlockWithTxsRequest;
                toProto(message: _146.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _146.GetBlockWithTxsRequest): _146.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _146.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_146.GetBlockWithTxsResponse>): _146.GetBlockWithTxsResponse;
                fromAmino(object: _146.GetBlockWithTxsResponseAmino): _146.GetBlockWithTxsResponse;
                toAmino(message: _146.GetBlockWithTxsResponse): _146.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _146.GetBlockWithTxsResponseAminoMsg): _146.GetBlockWithTxsResponse;
                toAminoMsg(message: _146.GetBlockWithTxsResponse): _146.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _146.GetBlockWithTxsResponseProtoMsg): _146.GetBlockWithTxsResponse;
                toProto(message: _146.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _146.GetBlockWithTxsResponse): _146.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _146.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxDecodeRequest;
                fromPartial(object: Partial<_146.TxDecodeRequest>): _146.TxDecodeRequest;
                fromAmino(object: _146.TxDecodeRequestAmino): _146.TxDecodeRequest;
                toAmino(message: _146.TxDecodeRequest): _146.TxDecodeRequestAmino;
                fromAminoMsg(object: _146.TxDecodeRequestAminoMsg): _146.TxDecodeRequest;
                toAminoMsg(message: _146.TxDecodeRequest): _146.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _146.TxDecodeRequestProtoMsg): _146.TxDecodeRequest;
                toProto(message: _146.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _146.TxDecodeRequest): _146.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _146.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxDecodeResponse;
                fromPartial(object: Partial<_146.TxDecodeResponse>): _146.TxDecodeResponse;
                fromAmino(object: _146.TxDecodeResponseAmino): _146.TxDecodeResponse;
                toAmino(message: _146.TxDecodeResponse): _146.TxDecodeResponseAmino;
                fromAminoMsg(object: _146.TxDecodeResponseAminoMsg): _146.TxDecodeResponse;
                toAminoMsg(message: _146.TxDecodeResponse): _146.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _146.TxDecodeResponseProtoMsg): _146.TxDecodeResponse;
                toProto(message: _146.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _146.TxDecodeResponse): _146.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _146.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxEncodeRequest;
                fromPartial(object: Partial<_146.TxEncodeRequest>): _146.TxEncodeRequest;
                fromAmino(object: _146.TxEncodeRequestAmino): _146.TxEncodeRequest;
                toAmino(message: _146.TxEncodeRequest): _146.TxEncodeRequestAmino;
                fromAminoMsg(object: _146.TxEncodeRequestAminoMsg): _146.TxEncodeRequest;
                toAminoMsg(message: _146.TxEncodeRequest): _146.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _146.TxEncodeRequestProtoMsg): _146.TxEncodeRequest;
                toProto(message: _146.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _146.TxEncodeRequest): _146.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _146.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxEncodeResponse;
                fromPartial(object: Partial<_146.TxEncodeResponse>): _146.TxEncodeResponse;
                fromAmino(object: _146.TxEncodeResponseAmino): _146.TxEncodeResponse;
                toAmino(message: _146.TxEncodeResponse): _146.TxEncodeResponseAmino;
                fromAminoMsg(object: _146.TxEncodeResponseAminoMsg): _146.TxEncodeResponse;
                toAminoMsg(message: _146.TxEncodeResponse): _146.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _146.TxEncodeResponseProtoMsg): _146.TxEncodeResponse;
                toProto(message: _146.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _146.TxEncodeResponse): _146.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _146.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxEncodeAminoRequest;
                fromPartial(object: Partial<_146.TxEncodeAminoRequest>): _146.TxEncodeAminoRequest;
                fromAmino(object: _146.TxEncodeAminoRequestAmino): _146.TxEncodeAminoRequest;
                toAmino(message: _146.TxEncodeAminoRequest): _146.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _146.TxEncodeAminoRequestAminoMsg): _146.TxEncodeAminoRequest;
                toAminoMsg(message: _146.TxEncodeAminoRequest): _146.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _146.TxEncodeAminoRequestProtoMsg): _146.TxEncodeAminoRequest;
                toProto(message: _146.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _146.TxEncodeAminoRequest): _146.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _146.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxEncodeAminoResponse;
                fromPartial(object: Partial<_146.TxEncodeAminoResponse>): _146.TxEncodeAminoResponse;
                fromAmino(object: _146.TxEncodeAminoResponseAmino): _146.TxEncodeAminoResponse;
                toAmino(message: _146.TxEncodeAminoResponse): _146.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _146.TxEncodeAminoResponseAminoMsg): _146.TxEncodeAminoResponse;
                toAminoMsg(message: _146.TxEncodeAminoResponse): _146.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _146.TxEncodeAminoResponseProtoMsg): _146.TxEncodeAminoResponse;
                toProto(message: _146.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _146.TxEncodeAminoResponse): _146.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _146.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxDecodeAminoRequest;
                fromPartial(object: Partial<_146.TxDecodeAminoRequest>): _146.TxDecodeAminoRequest;
                fromAmino(object: _146.TxDecodeAminoRequestAmino): _146.TxDecodeAminoRequest;
                toAmino(message: _146.TxDecodeAminoRequest): _146.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _146.TxDecodeAminoRequestAminoMsg): _146.TxDecodeAminoRequest;
                toAminoMsg(message: _146.TxDecodeAminoRequest): _146.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _146.TxDecodeAminoRequestProtoMsg): _146.TxDecodeAminoRequest;
                toProto(message: _146.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _146.TxDecodeAminoRequest): _146.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _146.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.TxDecodeAminoResponse;
                fromPartial(object: Partial<_146.TxDecodeAminoResponse>): _146.TxDecodeAminoResponse;
                fromAmino(object: _146.TxDecodeAminoResponseAmino): _146.TxDecodeAminoResponse;
                toAmino(message: _146.TxDecodeAminoResponse): _146.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _146.TxDecodeAminoResponseAminoMsg): _146.TxDecodeAminoResponse;
                toAminoMsg(message: _146.TxDecodeAminoResponse): _146.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _146.TxDecodeAminoResponseProtoMsg): _146.TxDecodeAminoResponse;
                toProto(message: _146.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _146.TxDecodeAminoResponse): _146.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _148.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.Module;
                    fromPartial(object: Partial<_148.Module>): _148.Module;
                    fromAmino(object: _148.ModuleAmino): _148.Module;
                    toAmino(message: _148.Module): _148.ModuleAmino;
                    fromAminoMsg(object: _148.ModuleAminoMsg): _148.Module;
                    toAminoMsg(message: _148.Module): _148.ModuleAminoMsg;
                    fromProtoMsg(message: _148.ModuleProtoMsg): _148.Module;
                    toProto(message: _148.Module): Uint8Array;
                    toProtoMsg(message: _148.Module): _148.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _149.QueryCurrentPlanRequest): Promise<_149.QueryCurrentPlanResponse>;
                appliedPlan(request: _149.QueryAppliedPlanRequest): Promise<_149.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _149.QueryUpgradedConsensusStateRequest): Promise<_149.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _149.QueryModuleVersionsRequest): Promise<_149.QueryModuleVersionsResponse>;
                authority(request?: _149.QueryAuthorityRequest): Promise<_149.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _150.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _150.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _150.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _150.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _150.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _150.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _150.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _150.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _150.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _150.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _150.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _150.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _150.MsgSoftwareUpgrade) => _150.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _150.MsgSoftwareUpgradeAmino) => _150.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _150.MsgCancelUpgrade) => _150.MsgCancelUpgradeAmino;
                    fromAmino: (object: _150.MsgCancelUpgradeAmino) => _150.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _151.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.Plan;
                fromPartial(object: Partial<_151.Plan>): _151.Plan;
                fromAmino(object: _151.PlanAmino): _151.Plan;
                toAmino(message: _151.Plan): _151.PlanAmino;
                fromAminoMsg(object: _151.PlanAminoMsg): _151.Plan;
                toAminoMsg(message: _151.Plan): _151.PlanAminoMsg;
                fromProtoMsg(message: _151.PlanProtoMsg): _151.Plan;
                toProto(message: _151.Plan): Uint8Array;
                toProtoMsg(message: _151.Plan): _151.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _151.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_151.SoftwareUpgradeProposal>): _151.SoftwareUpgradeProposal;
                fromAmino(object: _151.SoftwareUpgradeProposalAmino): _151.SoftwareUpgradeProposal;
                toAmino(message: _151.SoftwareUpgradeProposal): _151.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _151.SoftwareUpgradeProposalAminoMsg): _151.SoftwareUpgradeProposal;
                toAminoMsg(message: _151.SoftwareUpgradeProposal): _151.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _151.SoftwareUpgradeProposalProtoMsg): _151.SoftwareUpgradeProposal;
                toProto(message: _151.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _151.SoftwareUpgradeProposal): _151.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _151.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_151.CancelSoftwareUpgradeProposal>): _151.CancelSoftwareUpgradeProposal;
                fromAmino(object: _151.CancelSoftwareUpgradeProposalAmino): _151.CancelSoftwareUpgradeProposal;
                toAmino(message: _151.CancelSoftwareUpgradeProposal): _151.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _151.CancelSoftwareUpgradeProposalAminoMsg): _151.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _151.CancelSoftwareUpgradeProposal): _151.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _151.CancelSoftwareUpgradeProposalProtoMsg): _151.CancelSoftwareUpgradeProposal;
                toProto(message: _151.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _151.CancelSoftwareUpgradeProposal): _151.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _151.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.ModuleVersion;
                fromPartial(object: Partial<_151.ModuleVersion>): _151.ModuleVersion;
                fromAmino(object: _151.ModuleVersionAmino): _151.ModuleVersion;
                toAmino(message: _151.ModuleVersion): _151.ModuleVersionAmino;
                fromAminoMsg(object: _151.ModuleVersionAminoMsg): _151.ModuleVersion;
                toAminoMsg(message: _151.ModuleVersion): _151.ModuleVersionAminoMsg;
                fromProtoMsg(message: _151.ModuleVersionProtoMsg): _151.ModuleVersion;
                toProto(message: _151.ModuleVersion): Uint8Array;
                toProtoMsg(message: _151.ModuleVersion): _151.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _150.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_150.MsgSoftwareUpgrade>): _150.MsgSoftwareUpgrade;
                fromAmino(object: _150.MsgSoftwareUpgradeAmino): _150.MsgSoftwareUpgrade;
                toAmino(message: _150.MsgSoftwareUpgrade): _150.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _150.MsgSoftwareUpgradeAminoMsg): _150.MsgSoftwareUpgrade;
                toAminoMsg(message: _150.MsgSoftwareUpgrade): _150.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _150.MsgSoftwareUpgradeProtoMsg): _150.MsgSoftwareUpgrade;
                toProto(message: _150.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _150.MsgSoftwareUpgrade): _150.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _150.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _150.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_150.MsgSoftwareUpgradeResponse>): _150.MsgSoftwareUpgradeResponse;
                fromAmino(_: _150.MsgSoftwareUpgradeResponseAmino): _150.MsgSoftwareUpgradeResponse;
                toAmino(_: _150.MsgSoftwareUpgradeResponse): _150.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _150.MsgSoftwareUpgradeResponseAminoMsg): _150.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _150.MsgSoftwareUpgradeResponse): _150.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _150.MsgSoftwareUpgradeResponseProtoMsg): _150.MsgSoftwareUpgradeResponse;
                toProto(message: _150.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _150.MsgSoftwareUpgradeResponse): _150.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _150.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.MsgCancelUpgrade;
                fromPartial(object: Partial<_150.MsgCancelUpgrade>): _150.MsgCancelUpgrade;
                fromAmino(object: _150.MsgCancelUpgradeAmino): _150.MsgCancelUpgrade;
                toAmino(message: _150.MsgCancelUpgrade): _150.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _150.MsgCancelUpgradeAminoMsg): _150.MsgCancelUpgrade;
                toAminoMsg(message: _150.MsgCancelUpgrade): _150.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _150.MsgCancelUpgradeProtoMsg): _150.MsgCancelUpgrade;
                toProto(message: _150.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _150.MsgCancelUpgrade): _150.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _150.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _150.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_150.MsgCancelUpgradeResponse>): _150.MsgCancelUpgradeResponse;
                fromAmino(_: _150.MsgCancelUpgradeResponseAmino): _150.MsgCancelUpgradeResponse;
                toAmino(_: _150.MsgCancelUpgradeResponse): _150.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _150.MsgCancelUpgradeResponseAminoMsg): _150.MsgCancelUpgradeResponse;
                toAminoMsg(message: _150.MsgCancelUpgradeResponse): _150.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _150.MsgCancelUpgradeResponseProtoMsg): _150.MsgCancelUpgradeResponse;
                toProto(message: _150.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _150.MsgCancelUpgradeResponse): _150.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _149.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_149.QueryCurrentPlanRequest>): _149.QueryCurrentPlanRequest;
                fromAmino(_: _149.QueryCurrentPlanRequestAmino): _149.QueryCurrentPlanRequest;
                toAmino(_: _149.QueryCurrentPlanRequest): _149.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _149.QueryCurrentPlanRequestAminoMsg): _149.QueryCurrentPlanRequest;
                toAminoMsg(message: _149.QueryCurrentPlanRequest): _149.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _149.QueryCurrentPlanRequestProtoMsg): _149.QueryCurrentPlanRequest;
                toProto(message: _149.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _149.QueryCurrentPlanRequest): _149.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _149.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_149.QueryCurrentPlanResponse>): _149.QueryCurrentPlanResponse;
                fromAmino(object: _149.QueryCurrentPlanResponseAmino): _149.QueryCurrentPlanResponse;
                toAmino(message: _149.QueryCurrentPlanResponse): _149.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _149.QueryCurrentPlanResponseAminoMsg): _149.QueryCurrentPlanResponse;
                toAminoMsg(message: _149.QueryCurrentPlanResponse): _149.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _149.QueryCurrentPlanResponseProtoMsg): _149.QueryCurrentPlanResponse;
                toProto(message: _149.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _149.QueryCurrentPlanResponse): _149.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _149.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_149.QueryAppliedPlanRequest>): _149.QueryAppliedPlanRequest;
                fromAmino(object: _149.QueryAppliedPlanRequestAmino): _149.QueryAppliedPlanRequest;
                toAmino(message: _149.QueryAppliedPlanRequest): _149.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _149.QueryAppliedPlanRequestAminoMsg): _149.QueryAppliedPlanRequest;
                toAminoMsg(message: _149.QueryAppliedPlanRequest): _149.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _149.QueryAppliedPlanRequestProtoMsg): _149.QueryAppliedPlanRequest;
                toProto(message: _149.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _149.QueryAppliedPlanRequest): _149.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _149.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_149.QueryAppliedPlanResponse>): _149.QueryAppliedPlanResponse;
                fromAmino(object: _149.QueryAppliedPlanResponseAmino): _149.QueryAppliedPlanResponse;
                toAmino(message: _149.QueryAppliedPlanResponse): _149.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _149.QueryAppliedPlanResponseAminoMsg): _149.QueryAppliedPlanResponse;
                toAminoMsg(message: _149.QueryAppliedPlanResponse): _149.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _149.QueryAppliedPlanResponseProtoMsg): _149.QueryAppliedPlanResponse;
                toProto(message: _149.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _149.QueryAppliedPlanResponse): _149.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _149.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_149.QueryUpgradedConsensusStateRequest>): _149.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _149.QueryUpgradedConsensusStateRequestAmino): _149.QueryUpgradedConsensusStateRequest;
                toAmino(message: _149.QueryUpgradedConsensusStateRequest): _149.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _149.QueryUpgradedConsensusStateRequestAminoMsg): _149.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _149.QueryUpgradedConsensusStateRequest): _149.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _149.QueryUpgradedConsensusStateRequestProtoMsg): _149.QueryUpgradedConsensusStateRequest;
                toProto(message: _149.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _149.QueryUpgradedConsensusStateRequest): _149.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _149.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_149.QueryUpgradedConsensusStateResponse>): _149.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _149.QueryUpgradedConsensusStateResponseAmino): _149.QueryUpgradedConsensusStateResponse;
                toAmino(message: _149.QueryUpgradedConsensusStateResponse): _149.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _149.QueryUpgradedConsensusStateResponseAminoMsg): _149.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _149.QueryUpgradedConsensusStateResponse): _149.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _149.QueryUpgradedConsensusStateResponseProtoMsg): _149.QueryUpgradedConsensusStateResponse;
                toProto(message: _149.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _149.QueryUpgradedConsensusStateResponse): _149.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _149.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_149.QueryModuleVersionsRequest>): _149.QueryModuleVersionsRequest;
                fromAmino(object: _149.QueryModuleVersionsRequestAmino): _149.QueryModuleVersionsRequest;
                toAmino(message: _149.QueryModuleVersionsRequest): _149.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _149.QueryModuleVersionsRequestAminoMsg): _149.QueryModuleVersionsRequest;
                toAminoMsg(message: _149.QueryModuleVersionsRequest): _149.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _149.QueryModuleVersionsRequestProtoMsg): _149.QueryModuleVersionsRequest;
                toProto(message: _149.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _149.QueryModuleVersionsRequest): _149.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _149.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_149.QueryModuleVersionsResponse>): _149.QueryModuleVersionsResponse;
                fromAmino(object: _149.QueryModuleVersionsResponseAmino): _149.QueryModuleVersionsResponse;
                toAmino(message: _149.QueryModuleVersionsResponse): _149.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _149.QueryModuleVersionsResponseAminoMsg): _149.QueryModuleVersionsResponse;
                toAminoMsg(message: _149.QueryModuleVersionsResponse): _149.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _149.QueryModuleVersionsResponseProtoMsg): _149.QueryModuleVersionsResponse;
                toProto(message: _149.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _149.QueryModuleVersionsResponse): _149.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _149.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.QueryAuthorityRequest;
                fromPartial(_: Partial<_149.QueryAuthorityRequest>): _149.QueryAuthorityRequest;
                fromAmino(_: _149.QueryAuthorityRequestAmino): _149.QueryAuthorityRequest;
                toAmino(_: _149.QueryAuthorityRequest): _149.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _149.QueryAuthorityRequestAminoMsg): _149.QueryAuthorityRequest;
                toAminoMsg(message: _149.QueryAuthorityRequest): _149.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _149.QueryAuthorityRequestProtoMsg): _149.QueryAuthorityRequest;
                toProto(message: _149.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _149.QueryAuthorityRequest): _149.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _149.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.QueryAuthorityResponse;
                fromPartial(object: Partial<_149.QueryAuthorityResponse>): _149.QueryAuthorityResponse;
                fromAmino(object: _149.QueryAuthorityResponseAmino): _149.QueryAuthorityResponse;
                toAmino(message: _149.QueryAuthorityResponse): _149.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _149.QueryAuthorityResponseAminoMsg): _149.QueryAuthorityResponse;
                toAminoMsg(message: _149.QueryAuthorityResponse): _149.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _149.QueryAuthorityResponseProtoMsg): _149.QueryAuthorityResponse;
                toProto(message: _149.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _149.QueryAuthorityResponse): _149.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _152.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _152.Module;
                    fromPartial(_: Partial<_152.Module>): _152.Module;
                    fromAmino(_: _152.ModuleAmino): _152.Module;
                    toAmino(_: _152.Module): _152.ModuleAmino;
                    fromAminoMsg(object: _152.ModuleAminoMsg): _152.Module;
                    toAminoMsg(message: _152.Module): _152.ModuleAminoMsg;
                    fromProtoMsg(message: _152.ModuleProtoMsg): _152.Module;
                    toProto(message: _152.Module): Uint8Array;
                    toProtoMsg(message: _152.Module): _152.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _302.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _153.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _153.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _153.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _153.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _153.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _153.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _153.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _153.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _153.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _153.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _153.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _153.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _153.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _153.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _153.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _153.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _153.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _153.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _153.MsgCreateVestingAccount) => _153.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _153.MsgCreateVestingAccountAmino) => _153.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _153.MsgCreatePermanentLockedAccount) => _153.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _153.MsgCreatePermanentLockedAccountAmino) => _153.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _153.MsgCreatePeriodicVestingAccount) => _153.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _153.MsgCreatePeriodicVestingAccountAmino) => _153.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _154.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.BaseVestingAccount;
                fromPartial(object: Partial<_154.BaseVestingAccount>): _154.BaseVestingAccount;
                fromAmino(object: _154.BaseVestingAccountAmino): _154.BaseVestingAccount;
                toAmino(message: _154.BaseVestingAccount): _154.BaseVestingAccountAmino;
                fromAminoMsg(object: _154.BaseVestingAccountAminoMsg): _154.BaseVestingAccount;
                toAminoMsg(message: _154.BaseVestingAccount): _154.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _154.BaseVestingAccountProtoMsg): _154.BaseVestingAccount;
                toProto(message: _154.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _154.BaseVestingAccount): _154.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _154.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ContinuousVestingAccount;
                fromPartial(object: Partial<_154.ContinuousVestingAccount>): _154.ContinuousVestingAccount;
                fromAmino(object: _154.ContinuousVestingAccountAmino): _154.ContinuousVestingAccount;
                toAmino(message: _154.ContinuousVestingAccount): _154.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _154.ContinuousVestingAccountAminoMsg): _154.ContinuousVestingAccount;
                toAminoMsg(message: _154.ContinuousVestingAccount): _154.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _154.ContinuousVestingAccountProtoMsg): _154.ContinuousVestingAccount;
                toProto(message: _154.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _154.ContinuousVestingAccount): _154.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _154.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.DelayedVestingAccount;
                fromPartial(object: Partial<_154.DelayedVestingAccount>): _154.DelayedVestingAccount;
                fromAmino(object: _154.DelayedVestingAccountAmino): _154.DelayedVestingAccount;
                toAmino(message: _154.DelayedVestingAccount): _154.DelayedVestingAccountAmino;
                fromAminoMsg(object: _154.DelayedVestingAccountAminoMsg): _154.DelayedVestingAccount;
                toAminoMsg(message: _154.DelayedVestingAccount): _154.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _154.DelayedVestingAccountProtoMsg): _154.DelayedVestingAccount;
                toProto(message: _154.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _154.DelayedVestingAccount): _154.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _154.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.Period;
                fromPartial(object: Partial<_154.Period>): _154.Period;
                fromAmino(object: _154.PeriodAmino): _154.Period;
                toAmino(message: _154.Period): _154.PeriodAmino;
                fromAminoMsg(object: _154.PeriodAminoMsg): _154.Period;
                toAminoMsg(message: _154.Period): _154.PeriodAminoMsg;
                fromProtoMsg(message: _154.PeriodProtoMsg): _154.Period;
                toProto(message: _154.Period): Uint8Array;
                toProtoMsg(message: _154.Period): _154.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _154.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.PeriodicVestingAccount;
                fromPartial(object: Partial<_154.PeriodicVestingAccount>): _154.PeriodicVestingAccount;
                fromAmino(object: _154.PeriodicVestingAccountAmino): _154.PeriodicVestingAccount;
                toAmino(message: _154.PeriodicVestingAccount): _154.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _154.PeriodicVestingAccountAminoMsg): _154.PeriodicVestingAccount;
                toAminoMsg(message: _154.PeriodicVestingAccount): _154.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _154.PeriodicVestingAccountProtoMsg): _154.PeriodicVestingAccount;
                toProto(message: _154.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _154.PeriodicVestingAccount): _154.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _154.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.PermanentLockedAccount;
                fromPartial(object: Partial<_154.PermanentLockedAccount>): _154.PermanentLockedAccount;
                fromAmino(object: _154.PermanentLockedAccountAmino): _154.PermanentLockedAccount;
                toAmino(message: _154.PermanentLockedAccount): _154.PermanentLockedAccountAmino;
                fromAminoMsg(object: _154.PermanentLockedAccountAminoMsg): _154.PermanentLockedAccount;
                toAminoMsg(message: _154.PermanentLockedAccount): _154.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _154.PermanentLockedAccountProtoMsg): _154.PermanentLockedAccount;
                toProto(message: _154.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _154.PermanentLockedAccount): _154.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _153.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgCreateVestingAccount;
                fromPartial(object: Partial<_153.MsgCreateVestingAccount>): _153.MsgCreateVestingAccount;
                fromAmino(object: _153.MsgCreateVestingAccountAmino): _153.MsgCreateVestingAccount;
                toAmino(message: _153.MsgCreateVestingAccount): _153.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _153.MsgCreateVestingAccountAminoMsg): _153.MsgCreateVestingAccount;
                toAminoMsg(message: _153.MsgCreateVestingAccount): _153.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _153.MsgCreateVestingAccountProtoMsg): _153.MsgCreateVestingAccount;
                toProto(message: _153.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _153.MsgCreateVestingAccount): _153.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _153.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _153.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_153.MsgCreateVestingAccountResponse>): _153.MsgCreateVestingAccountResponse;
                fromAmino(_: _153.MsgCreateVestingAccountResponseAmino): _153.MsgCreateVestingAccountResponse;
                toAmino(_: _153.MsgCreateVestingAccountResponse): _153.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _153.MsgCreateVestingAccountResponseAminoMsg): _153.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _153.MsgCreateVestingAccountResponse): _153.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _153.MsgCreateVestingAccountResponseProtoMsg): _153.MsgCreateVestingAccountResponse;
                toProto(message: _153.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _153.MsgCreateVestingAccountResponse): _153.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _153.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_153.MsgCreatePermanentLockedAccount>): _153.MsgCreatePermanentLockedAccount;
                fromAmino(object: _153.MsgCreatePermanentLockedAccountAmino): _153.MsgCreatePermanentLockedAccount;
                toAmino(message: _153.MsgCreatePermanentLockedAccount): _153.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _153.MsgCreatePermanentLockedAccountAminoMsg): _153.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _153.MsgCreatePermanentLockedAccount): _153.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _153.MsgCreatePermanentLockedAccountProtoMsg): _153.MsgCreatePermanentLockedAccount;
                toProto(message: _153.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _153.MsgCreatePermanentLockedAccount): _153.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _153.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _153.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_153.MsgCreatePermanentLockedAccountResponse>): _153.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _153.MsgCreatePermanentLockedAccountResponseAmino): _153.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _153.MsgCreatePermanentLockedAccountResponse): _153.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _153.MsgCreatePermanentLockedAccountResponseAminoMsg): _153.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _153.MsgCreatePermanentLockedAccountResponse): _153.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _153.MsgCreatePermanentLockedAccountResponseProtoMsg): _153.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _153.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _153.MsgCreatePermanentLockedAccountResponse): _153.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _153.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_153.MsgCreatePeriodicVestingAccount>): _153.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _153.MsgCreatePeriodicVestingAccountAmino): _153.MsgCreatePeriodicVestingAccount;
                toAmino(message: _153.MsgCreatePeriodicVestingAccount): _153.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _153.MsgCreatePeriodicVestingAccountAminoMsg): _153.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _153.MsgCreatePeriodicVestingAccount): _153.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _153.MsgCreatePeriodicVestingAccountProtoMsg): _153.MsgCreatePeriodicVestingAccount;
                toProto(message: _153.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _153.MsgCreatePeriodicVestingAccount): _153.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _153.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _153.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_153.MsgCreatePeriodicVestingAccountResponse>): _153.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _153.MsgCreatePeriodicVestingAccountResponseAmino): _153.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _153.MsgCreatePeriodicVestingAccountResponse): _153.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _153.MsgCreatePeriodicVestingAccountResponseAminoMsg): _153.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _153.MsgCreatePeriodicVestingAccountResponse): _153.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _153.MsgCreatePeriodicVestingAccountResponseProtoMsg): _153.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _153.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _153.MsgCreatePeriodicVestingAccountResponse): _153.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _286.MsgClientImpl;
                };
                authz: {
                    v1beta1: _287.MsgClientImpl;
                };
                bank: {
                    v1beta1: _288.MsgClientImpl;
                };
                consensus: {
                    v1: _289.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _290.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _291.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _292.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _293.MsgClientImpl;
                };
                gov: {
                    v1: _294.MsgClientImpl;
                    v1beta1: _295.MsgClientImpl;
                };
                group: {
                    v1: _296.MsgClientImpl;
                };
                mint: {
                    v1beta1: _297.MsgClientImpl;
                };
                nft: {
                    v1beta1: _298.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _299.MsgClientImpl;
                };
                staking: {
                    v1beta1: _300.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _301.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _302.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _33.QueryConfigRequest): Promise<_33.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _37.QueryAccountsRequest): Promise<_37.QueryAccountsResponse>;
                        account(request: _37.QueryAccountRequest): Promise<_37.QueryAccountResponse>;
                        accountAddressByID(request: _37.QueryAccountAddressByIDRequest): Promise<_37.QueryAccountAddressByIDResponse>;
                        params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                        moduleAccounts(request?: _37.QueryModuleAccountsRequest): Promise<_37.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _37.QueryModuleAccountByNameRequest): Promise<_37.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _37.Bech32PrefixRequest): Promise<_37.Bech32PrefixResponse>;
                        addressBytesToString(request: _37.AddressBytesToStringRequest): Promise<_37.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _37.AddressStringToBytesRequest): Promise<_37.AddressStringToBytesResponse>;
                        accountInfo(request: _37.QueryAccountInfoRequest): Promise<_37.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _43.QueryGrantsRequest): Promise<_43.QueryGrantsResponse>;
                        granterGrants(request: _43.QueryGranterGrantsRequest): Promise<_43.QueryGranterGrantsResponse>;
                        granteeGrants(request: _43.QueryGranteeGrantsRequest): Promise<_43.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _46.AppOptionsRequest): Promise<_46.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _51.QueryBalanceRequest): Promise<_51.QueryBalanceResponse>;
                        allBalances(request: _51.QueryAllBalancesRequest): Promise<_51.QueryAllBalancesResponse>;
                        spendableBalances(request: _51.QuerySpendableBalancesRequest): Promise<_51.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _51.QuerySpendableBalanceByDenomRequest): Promise<_51.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _51.QueryTotalSupplyRequest): Promise<_51.QueryTotalSupplyResponse>;
                        supplyOf(request: _51.QuerySupplyOfRequest): Promise<_51.QuerySupplyOfResponse>;
                        params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                        denomMetadata(request: _51.QueryDenomMetadataRequest): Promise<_51.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _51.QueryDenomsMetadataRequest): Promise<_51.QueryDenomsMetadataResponse>;
                        denomOwners(request: _51.QueryDenomOwnersRequest): Promise<_51.QueryDenomOwnersResponse>;
                        sendEnabled(request: _51.QuerySendEnabledRequest): Promise<_51.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _55.ConfigRequest): Promise<_55.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _62.GetNodeInfoRequest): Promise<_62.GetNodeInfoResponse>;
                            getSyncing(request?: _62.GetSyncingRequest): Promise<_62.GetSyncingResponse>;
                            getLatestBlock(request?: _62.GetLatestBlockRequest): Promise<_62.GetLatestBlockResponse>;
                            getBlockByHeight(request: _62.GetBlockByHeightRequest): Promise<_62.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _62.GetLatestValidatorSetRequest): Promise<_62.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _62.GetValidatorSetByHeightRequest): Promise<_62.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _62.ABCIQueryRequest): Promise<_62.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        validatorDistributionInfo(request: _83.QueryValidatorDistributionInfoRequest): Promise<_83.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _83.QueryValidatorOutstandingRewardsRequest): Promise<_83.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _83.QueryValidatorCommissionRequest): Promise<_83.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _83.QueryValidatorSlashesRequest): Promise<_83.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _83.QueryDelegationRewardsRequest): Promise<_83.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _83.QueryDelegationTotalRewardsRequest): Promise<_83.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _83.QueryDelegatorWithdrawAddressRequest): Promise<_83.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _83.QueryCommunityPoolRequest): Promise<_83.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _88.QueryEvidenceRequest): Promise<_88.QueryEvidenceResponse>;
                        allEvidence(request?: _88.QueryAllEvidenceRequest): Promise<_88.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _93.QueryAllowanceRequest): Promise<_93.QueryAllowanceResponse>;
                        allowances(request: _93.QueryAllowancesRequest): Promise<_93.QueryAllowancesResponse>;
                        allowancesByGranter(request: _93.QueryAllowancesByGranterRequest): Promise<_93.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _100.QueryProposalRequest): Promise<_100.QueryProposalResponse>;
                        proposals(request: _100.QueryProposalsRequest): Promise<_100.QueryProposalsResponse>;
                        vote(request: _100.QueryVoteRequest): Promise<_100.QueryVoteResponse>;
                        votes(request: _100.QueryVotesRequest): Promise<_100.QueryVotesResponse>;
                        params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                        deposit(request: _100.QueryDepositRequest): Promise<_100.QueryDepositResponse>;
                        deposits(request: _100.QueryDepositsRequest): Promise<_100.QueryDepositsResponse>;
                        tallyResult(request: _100.QueryTallyResultRequest): Promise<_100.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _104.QueryProposalRequest): Promise<_104.QueryProposalResponse>;
                        proposals(request: _104.QueryProposalsRequest): Promise<_104.QueryProposalsResponse>;
                        vote(request: _104.QueryVoteRequest): Promise<_104.QueryVoteResponse>;
                        votes(request: _104.QueryVotesRequest): Promise<_104.QueryVotesResponse>;
                        params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        deposit(request: _104.QueryDepositRequest): Promise<_104.QueryDepositResponse>;
                        deposits(request: _104.QueryDepositsRequest): Promise<_104.QueryDepositsResponse>;
                        tallyResult(request: _104.QueryTallyResultRequest): Promise<_104.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _109.QueryGroupInfoRequest): Promise<_109.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _109.QueryGroupPolicyInfoRequest): Promise<_109.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _109.QueryGroupMembersRequest): Promise<_109.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _109.QueryGroupsByAdminRequest): Promise<_109.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _109.QueryGroupPoliciesByGroupRequest): Promise<_109.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _109.QueryGroupPoliciesByAdminRequest): Promise<_109.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _109.QueryProposalRequest): Promise<_109.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _109.QueryProposalsByGroupPolicyRequest): Promise<_109.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _109.QueryVoteByProposalVoterRequest): Promise<_109.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _109.QueryVotesByProposalRequest): Promise<_109.QueryVotesByProposalResponse>;
                        votesByVoter(request: _109.QueryVotesByVoterRequest): Promise<_109.QueryVotesByVoterResponse>;
                        groupsByMember(request: _109.QueryGroupsByMemberRequest): Promise<_109.QueryGroupsByMemberResponse>;
                        tallyResult(request: _109.QueryTallyResultRequest): Promise<_109.QueryTallyResultResponse>;
                        groups(request?: _109.QueryGroupsRequest): Promise<_109.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                        inflation(request?: _115.QueryInflationRequest): Promise<_115.QueryInflationResponse>;
                        annualProvisions(request?: _115.QueryAnnualProvisionsRequest): Promise<_115.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _122.QueryBalanceRequest): Promise<_122.QueryBalanceResponse>;
                        owner(request: _122.QueryOwnerRequest): Promise<_122.QueryOwnerResponse>;
                        supply(request: _122.QuerySupplyRequest): Promise<_122.QuerySupplyResponse>;
                        nFTs(request: _122.QueryNFTsRequest): Promise<_122.QueryNFTsResponse>;
                        nFT(request: _122.QueryNFTRequest): Promise<_122.QueryNFTResponse>;
                        class(request: _122.QueryClassRequest): Promise<_122.QueryClassResponse>;
                        classes(request?: _122.QueryClassesRequest): Promise<_122.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _125.GetRequest): Promise<_125.GetResponse>;
                            list(request: _125.ListRequest): Promise<_125.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                        subspaces(request?: _130.QuerySubspacesRequest): Promise<_130.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _135.QueryParamsRequest): Promise<_135.QueryParamsResponse>;
                        signingInfo(request: _135.QuerySigningInfoRequest): Promise<_135.QuerySigningInfoResponse>;
                        signingInfos(request?: _135.QuerySigningInfosRequest): Promise<_135.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _141.QueryValidatorsRequest): Promise<_141.QueryValidatorsResponse>;
                        validator(request: _141.QueryValidatorRequest): Promise<_141.QueryValidatorResponse>;
                        validatorDelegations(request: _141.QueryValidatorDelegationsRequest): Promise<_141.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _141.QueryValidatorUnbondingDelegationsRequest): Promise<_141.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _141.QueryDelegationRequest): Promise<_141.QueryDelegationResponse>;
                        unbondingDelegation(request: _141.QueryUnbondingDelegationRequest): Promise<_141.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _141.QueryDelegatorDelegationsRequest): Promise<_141.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _141.QueryDelegatorUnbondingDelegationsRequest): Promise<_141.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _141.QueryRedelegationsRequest): Promise<_141.QueryRedelegationsResponse>;
                        delegatorValidators(request: _141.QueryDelegatorValidatorsRequest): Promise<_141.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _141.QueryDelegatorValidatorRequest): Promise<_141.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _141.QueryHistoricalInfoRequest): Promise<_141.QueryHistoricalInfoResponse>;
                        pool(request?: _141.QueryPoolRequest): Promise<_141.QueryPoolResponse>;
                        params(request?: _141.QueryParamsRequest): Promise<_141.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _146.SimulateRequest): Promise<_146.SimulateResponse>;
                        getTx(request: _146.GetTxRequest): Promise<_146.GetTxResponse>;
                        broadcastTx(request: _146.BroadcastTxRequest): Promise<_146.BroadcastTxResponse>;
                        getTxsEvent(request: _146.GetTxsEventRequest): Promise<_146.GetTxsEventResponse>;
                        getBlockWithTxs(request: _146.GetBlockWithTxsRequest): Promise<_146.GetBlockWithTxsResponse>;
                        txDecode(request: _146.TxDecodeRequest): Promise<_146.TxDecodeResponse>;
                        txEncode(request: _146.TxEncodeRequest): Promise<_146.TxEncodeResponse>;
                        txEncodeAmino(request: _146.TxEncodeAminoRequest): Promise<_146.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _146.TxDecodeAminoRequest): Promise<_146.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _149.QueryCurrentPlanRequest): Promise<_149.QueryCurrentPlanResponse>;
                        appliedPlan(request: _149.QueryAppliedPlanRequest): Promise<_149.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _149.QueryUpgradedConsensusStateRequest): Promise<_149.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _149.QueryModuleVersionsRequest): Promise<_149.QueryModuleVersionsResponse>;
                        authority(request?: _149.QueryAuthorityRequest): Promise<_149.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _245.LCDQueryClient;
                };
                authz: {
                    v1beta1: _246.LCDQueryClient;
                };
                bank: {
                    v1beta1: _247.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _248.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _249.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _250.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _251.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _252.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _253.LCDQueryClient;
                };
                gov: {
                    v1: _254.LCDQueryClient;
                    v1beta1: _255.LCDQueryClient;
                };
                group: {
                    v1: _256.LCDQueryClient;
                };
                mint: {
                    v1beta1: _257.LCDQueryClient;
                };
                nft: {
                    v1beta1: _258.LCDQueryClient;
                };
                params: {
                    v1beta1: _259.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _260.LCDQueryClient;
                };
                staking: {
                    v1beta1: _261.LCDQueryClient;
                };
                tx: {
                    v1beta1: _262.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _263.LCDQueryClient;
                };
            };
        }>;
    };
}
