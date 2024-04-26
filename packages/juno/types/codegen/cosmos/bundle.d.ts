import * as _31 from "./app/runtime/v1alpha1/module";
import * as _32 from "./app/v1alpha1/config";
import * as _33 from "./app/v1alpha1/module";
import * as _34 from "./app/v1alpha1/query";
import * as _35 from "./auth/module/v1/module";
import * as _36 from "./auth/v1beta1/auth";
import * as _37 from "./auth/v1beta1/genesis";
import * as _38 from "./auth/v1beta1/query";
import * as _39 from "./auth/v1beta1/tx";
import * as _40 from "./authz/module/v1/module";
import * as _41 from "./authz/v1beta1/authz";
import * as _42 from "./authz/v1beta1/event";
import * as _43 from "./authz/v1beta1/genesis";
import * as _44 from "./authz/v1beta1/query";
import * as _45 from "./authz/v1beta1/tx";
import * as _46 from "./autocli/v1/options";
import * as _47 from "./autocli/v1/query";
import * as _48 from "./bank/module/v1/module";
import * as _49 from "./bank/v1beta1/authz";
import * as _50 from "./bank/v1beta1/bank";
import * as _51 from "./bank/v1beta1/genesis";
import * as _52 from "./bank/v1beta1/query";
import * as _53 from "./bank/v1beta1/tx";
import * as _54 from "./base/abci/v1beta1/abci";
import * as _55 from "./base/kv/v1beta1/kv";
import * as _56 from "./base/node/v1beta1/query";
import * as _57 from "./base/query/v1beta1/pagination";
import * as _58 from "./base/reflection/v1beta1/reflection";
import * as _59 from "./base/reflection/v2alpha1/reflection";
import * as _60 from "./base/snapshots/v1beta1/snapshot";
import * as _61 from "./base/store/v1beta1/commit_info";
import * as _62 from "./base/store/v1beta1/listening";
import * as _63 from "./base/tendermint/v1beta1/query";
import * as _64 from "./base/tendermint/v1beta1/types";
import * as _65 from "./base/v1beta1/coin";
import * as _66 from "./capability/module/v1/module";
import * as _67 from "./capability/v1beta1/capability";
import * as _68 from "./capability/v1beta1/genesis";
import * as _69 from "./consensus/module/v1/module";
import * as _70 from "./consensus/v1/query";
import * as _71 from "./consensus/v1/tx";
import * as _72 from "./crisis/module/v1/module";
import * as _73 from "./crisis/v1beta1/genesis";
import * as _74 from "./crisis/v1beta1/tx";
import * as _75 from "./crypto/ed25519/keys";
import * as _76 from "./crypto/hd/v1/hd";
import * as _77 from "./crypto/keyring/v1/record";
import * as _78 from "./crypto/multisig/keys";
import * as _79 from "./crypto/secp256k1/keys";
import * as _80 from "./crypto/secp256r1/keys";
import * as _81 from "./distribution/module/v1/module";
import * as _82 from "./distribution/v1beta1/distribution";
import * as _83 from "./distribution/v1beta1/genesis";
import * as _84 from "./distribution/v1beta1/query";
import * as _85 from "./distribution/v1beta1/tx";
import * as _86 from "./evidence/module/v1/module";
import * as _87 from "./evidence/v1beta1/evidence";
import * as _88 from "./evidence/v1beta1/genesis";
import * as _89 from "./evidence/v1beta1/query";
import * as _90 from "./evidence/v1beta1/tx";
import * as _91 from "./feegrant/module/v1/module";
import * as _92 from "./feegrant/v1beta1/feegrant";
import * as _93 from "./feegrant/v1beta1/genesis";
import * as _94 from "./feegrant/v1beta1/query";
import * as _95 from "./feegrant/v1beta1/tx";
import * as _96 from "./genutil/module/v1/module";
import * as _97 from "./genutil/v1beta1/genesis";
import * as _98 from "./gov/module/v1/module";
import * as _99 from "./gov/v1/genesis";
import * as _100 from "./gov/v1/gov";
import * as _101 from "./gov/v1/query";
import * as _102 from "./gov/v1/tx";
import * as _103 from "./gov/v1beta1/genesis";
import * as _104 from "./gov/v1beta1/gov";
import * as _105 from "./gov/v1beta1/query";
import * as _106 from "./gov/v1beta1/tx";
import * as _107 from "./group/module/v1/module";
import * as _108 from "./group/v1/events";
import * as _109 from "./group/v1/genesis";
import * as _110 from "./group/v1/query";
import * as _111 from "./group/v1/tx";
import * as _112 from "./group/v1/types";
import * as _113 from "./mint/module/v1/module";
import * as _114 from "./mint/v1beta1/genesis";
import * as _115 from "./mint/v1beta1/mint";
import * as _116 from "./mint/v1beta1/query";
import * as _117 from "./mint/v1beta1/tx";
import * as _119 from "./nft/module/v1/module";
import * as _120 from "./nft/v1beta1/event";
import * as _121 from "./nft/v1beta1/genesis";
import * as _122 from "./nft/v1beta1/nft";
import * as _123 from "./nft/v1beta1/query";
import * as _124 from "./nft/v1beta1/tx";
import * as _125 from "./orm/module/v1alpha1/module";
import * as _126 from "./orm/query/v1alpha1/query";
import * as _127 from "./orm/v1/orm";
import * as _128 from "./orm/v1alpha1/schema";
import * as _129 from "./params/module/v1/module";
import * as _130 from "./params/v1beta1/params";
import * as _131 from "./params/v1beta1/query";
import * as _133 from "./reflection/v1/reflection";
import * as _134 from "./slashing/module/v1/module";
import * as _135 from "./slashing/v1beta1/genesis";
import * as _136 from "./slashing/v1beta1/query";
import * as _137 from "./slashing/v1beta1/slashing";
import * as _138 from "./slashing/v1beta1/tx";
import * as _139 from "./staking/module/v1/module";
import * as _140 from "./staking/v1beta1/authz";
import * as _141 from "./staking/v1beta1/genesis";
import * as _142 from "./staking/v1beta1/query";
import * as _143 from "./staking/v1beta1/staking";
import * as _144 from "./staking/v1beta1/tx";
import * as _145 from "./tx/config/v1/config";
import * as _146 from "./tx/signing/v1beta1/signing";
import * as _147 from "./tx/v1beta1/service";
import * as _148 from "./tx/v1beta1/tx";
import * as _149 from "./upgrade/module/v1/module";
import * as _150 from "./upgrade/v1beta1/query";
import * as _151 from "./upgrade/v1beta1/tx";
import * as _152 from "./upgrade/v1beta1/upgrade";
import * as _153 from "./vesting/module/v1/module";
import * as _154 from "./vesting/v1beta1/tx";
import * as _155 from "./vesting/v1beta1/vesting";
import * as _256 from "./auth/v1beta1/query.lcd";
import * as _257 from "./authz/v1beta1/query.lcd";
import * as _258 from "./bank/v1beta1/query.lcd";
import * as _259 from "./base/node/v1beta1/query.lcd";
import * as _260 from "./base/tendermint/v1beta1/query.lcd";
import * as _261 from "./consensus/v1/query.lcd";
import * as _262 from "./distribution/v1beta1/query.lcd";
import * as _263 from "./evidence/v1beta1/query.lcd";
import * as _264 from "./feegrant/v1beta1/query.lcd";
import * as _265 from "./gov/v1/query.lcd";
import * as _266 from "./gov/v1beta1/query.lcd";
import * as _267 from "./group/v1/query.lcd";
import * as _268 from "./mint/v1beta1/query.lcd";
import * as _269 from "./nft/v1beta1/query.lcd";
import * as _270 from "./params/v1beta1/query.lcd";
import * as _271 from "./slashing/v1beta1/query.lcd";
import * as _272 from "./staking/v1beta1/query.lcd";
import * as _273 from "./tx/v1beta1/service.lcd";
import * as _274 from "./upgrade/v1beta1/query.lcd";
import * as _275 from "./app/v1alpha1/query.rpc.Query";
import * as _276 from "./auth/v1beta1/query.rpc.Query";
import * as _277 from "./authz/v1beta1/query.rpc.Query";
import * as _278 from "./autocli/v1/query.rpc.Query";
import * as _279 from "./bank/v1beta1/query.rpc.Query";
import * as _280 from "./base/node/v1beta1/query.rpc.Service";
import * as _281 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _282 from "./consensus/v1/query.rpc.Query";
import * as _283 from "./distribution/v1beta1/query.rpc.Query";
import * as _284 from "./evidence/v1beta1/query.rpc.Query";
import * as _285 from "./feegrant/v1beta1/query.rpc.Query";
import * as _286 from "./gov/v1/query.rpc.Query";
import * as _287 from "./gov/v1beta1/query.rpc.Query";
import * as _288 from "./group/v1/query.rpc.Query";
import * as _289 from "./mint/v1beta1/query.rpc.Query";
import * as _290 from "./nft/v1beta1/query.rpc.Query";
import * as _291 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _292 from "./params/v1beta1/query.rpc.Query";
import * as _293 from "./slashing/v1beta1/query.rpc.Query";
import * as _294 from "./staking/v1beta1/query.rpc.Query";
import * as _295 from "./tx/v1beta1/service.rpc.Service";
import * as _296 from "./upgrade/v1beta1/query.rpc.Query";
import * as _297 from "./auth/v1beta1/tx.rpc.msg";
import * as _298 from "./authz/v1beta1/tx.rpc.msg";
import * as _299 from "./bank/v1beta1/tx.rpc.msg";
import * as _300 from "./consensus/v1/tx.rpc.msg";
import * as _301 from "./crisis/v1beta1/tx.rpc.msg";
import * as _302 from "./distribution/v1beta1/tx.rpc.msg";
import * as _303 from "./evidence/v1beta1/tx.rpc.msg";
import * as _304 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _305 from "./gov/v1/tx.rpc.msg";
import * as _306 from "./gov/v1beta1/tx.rpc.msg";
import * as _307 from "./group/v1/tx.rpc.msg";
import * as _308 from "./mint/v1beta1/tx.rpc.msg";
import * as _309 from "./nft/v1beta1/tx.rpc.msg";
import * as _310 from "./slashing/v1beta1/tx.rpc.msg";
import * as _311 from "./staking/v1beta1/tx.rpc.msg";
import * as _312 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _313 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _31.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Module;
                    fromPartial(object: Partial<_31.Module>): _31.Module;
                    fromAmino(object: _31.ModuleAmino): _31.Module;
                    toAmino(message: _31.Module): _31.ModuleAmino;
                    fromAminoMsg(object: _31.ModuleAminoMsg): _31.Module;
                    toAminoMsg(message: _31.Module): _31.ModuleAminoMsg;
                    fromProtoMsg(message: _31.ModuleProtoMsg): _31.Module;
                    toProto(message: _31.Module): Uint8Array;
                    toProtoMsg(message: _31.Module): _31.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _31.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.StoreKeyConfig;
                    fromPartial(object: Partial<_31.StoreKeyConfig>): _31.StoreKeyConfig;
                    fromAmino(object: _31.StoreKeyConfigAmino): _31.StoreKeyConfig;
                    toAmino(message: _31.StoreKeyConfig): _31.StoreKeyConfigAmino;
                    fromAminoMsg(object: _31.StoreKeyConfigAminoMsg): _31.StoreKeyConfig;
                    toAminoMsg(message: _31.StoreKeyConfig): _31.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _31.StoreKeyConfigProtoMsg): _31.StoreKeyConfig;
                    toProto(message: _31.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _31.StoreKeyConfig): _31.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _34.QueryConfigRequest): Promise<_34.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _34.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryConfigRequest;
                fromPartial(_: Partial<_34.QueryConfigRequest>): _34.QueryConfigRequest;
                fromAmino(_: _34.QueryConfigRequestAmino): _34.QueryConfigRequest;
                toAmino(_: _34.QueryConfigRequest): _34.QueryConfigRequestAmino;
                fromAminoMsg(object: _34.QueryConfigRequestAminoMsg): _34.QueryConfigRequest;
                toAminoMsg(message: _34.QueryConfigRequest): _34.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _34.QueryConfigRequestProtoMsg): _34.QueryConfigRequest;
                toProto(message: _34.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _34.QueryConfigRequest): _34.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _34.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryConfigResponse;
                fromPartial(object: Partial<_34.QueryConfigResponse>): _34.QueryConfigResponse;
                fromAmino(object: _34.QueryConfigResponseAmino): _34.QueryConfigResponse;
                toAmino(message: _34.QueryConfigResponse): _34.QueryConfigResponseAmino;
                fromAminoMsg(object: _34.QueryConfigResponseAminoMsg): _34.QueryConfigResponse;
                toAminoMsg(message: _34.QueryConfigResponse): _34.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _34.QueryConfigResponseProtoMsg): _34.QueryConfigResponse;
                toProto(message: _34.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _34.QueryConfigResponse): _34.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _33.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.ModuleDescriptor;
                fromPartial(object: Partial<_33.ModuleDescriptor>): _33.ModuleDescriptor;
                fromAmino(object: _33.ModuleDescriptorAmino): _33.ModuleDescriptor;
                toAmino(message: _33.ModuleDescriptor): _33.ModuleDescriptorAmino;
                fromAminoMsg(object: _33.ModuleDescriptorAminoMsg): _33.ModuleDescriptor;
                toAminoMsg(message: _33.ModuleDescriptor): _33.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _33.ModuleDescriptorProtoMsg): _33.ModuleDescriptor;
                toProto(message: _33.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _33.ModuleDescriptor): _33.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _33.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.PackageReference;
                fromPartial(object: Partial<_33.PackageReference>): _33.PackageReference;
                fromAmino(object: _33.PackageReferenceAmino): _33.PackageReference;
                toAmino(message: _33.PackageReference): _33.PackageReferenceAmino;
                fromAminoMsg(object: _33.PackageReferenceAminoMsg): _33.PackageReference;
                toAminoMsg(message: _33.PackageReference): _33.PackageReferenceAminoMsg;
                fromProtoMsg(message: _33.PackageReferenceProtoMsg): _33.PackageReference;
                toProto(message: _33.PackageReference): Uint8Array;
                toProtoMsg(message: _33.PackageReference): _33.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _33.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MigrateFromInfo;
                fromPartial(object: Partial<_33.MigrateFromInfo>): _33.MigrateFromInfo;
                fromAmino(object: _33.MigrateFromInfoAmino): _33.MigrateFromInfo;
                toAmino(message: _33.MigrateFromInfo): _33.MigrateFromInfoAmino;
                fromAminoMsg(object: _33.MigrateFromInfoAminoMsg): _33.MigrateFromInfo;
                toAminoMsg(message: _33.MigrateFromInfo): _33.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _33.MigrateFromInfoProtoMsg): _33.MigrateFromInfo;
                toProto(message: _33.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _33.MigrateFromInfo): _33.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _32.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Config;
                fromPartial(object: Partial<_32.Config>): _32.Config;
                fromAmino(object: _32.ConfigAmino): _32.Config;
                toAmino(message: _32.Config): _32.ConfigAmino;
                fromAminoMsg(object: _32.ConfigAminoMsg): _32.Config;
                toAminoMsg(message: _32.Config): _32.ConfigAminoMsg;
                fromProtoMsg(message: _32.ConfigProtoMsg): _32.Config;
                toProto(message: _32.Config): Uint8Array;
                toProtoMsg(message: _32.Config): _32.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _32.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.ModuleConfig;
                fromPartial(object: Partial<_32.ModuleConfig>): _32.ModuleConfig;
                fromAmino(object: _32.ModuleConfigAmino): _32.ModuleConfig;
                toAmino(message: _32.ModuleConfig): _32.ModuleConfigAmino;
                fromAminoMsg(object: _32.ModuleConfigAminoMsg): _32.ModuleConfig;
                toAminoMsg(message: _32.ModuleConfig): _32.ModuleConfigAminoMsg;
                fromProtoMsg(message: _32.ModuleConfigProtoMsg): _32.ModuleConfig;
                toProto(message: _32.ModuleConfig): Uint8Array;
                toProtoMsg(message: _32.ModuleConfig): _32.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _32.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GolangBinding;
                fromPartial(object: Partial<_32.GolangBinding>): _32.GolangBinding;
                fromAmino(object: _32.GolangBindingAmino): _32.GolangBinding;
                toAmino(message: _32.GolangBinding): _32.GolangBindingAmino;
                fromAminoMsg(object: _32.GolangBindingAminoMsg): _32.GolangBinding;
                toAminoMsg(message: _32.GolangBinding): _32.GolangBindingAminoMsg;
                fromProtoMsg(message: _32.GolangBindingProtoMsg): _32.GolangBinding;
                toProto(message: _32.GolangBinding): Uint8Array;
                toProtoMsg(message: _32.GolangBinding): _32.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _35.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Module;
                    fromPartial(object: Partial<_35.Module>): _35.Module;
                    fromAmino(object: _35.ModuleAmino): _35.Module;
                    toAmino(message: _35.Module): _35.ModuleAmino;
                    fromAminoMsg(object: _35.ModuleAminoMsg): _35.Module;
                    toAminoMsg(message: _35.Module): _35.ModuleAminoMsg;
                    fromProtoMsg(message: _35.ModuleProtoMsg): _35.Module;
                    toProto(message: _35.Module): Uint8Array;
                    toProtoMsg(message: _35.Module): _35.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _35.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ModuleAccountPermission;
                    fromPartial(object: Partial<_35.ModuleAccountPermission>): _35.ModuleAccountPermission;
                    fromAmino(object: _35.ModuleAccountPermissionAmino): _35.ModuleAccountPermission;
                    toAmino(message: _35.ModuleAccountPermission): _35.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _35.ModuleAccountPermissionAminoMsg): _35.ModuleAccountPermission;
                    toAminoMsg(message: _35.ModuleAccountPermission): _35.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _35.ModuleAccountPermissionProtoMsg): _35.ModuleAccountPermission;
                    toProto(message: _35.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _35.ModuleAccountPermission): _35.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _38.QueryAccountsRequest): Promise<_38.QueryAccountsResponse>;
                account(request: _38.QueryAccountRequest): Promise<_38.QueryAccountResponse>;
                accountAddressByID(request: _38.QueryAccountAddressByIDRequest): Promise<_38.QueryAccountAddressByIDResponse>;
                params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                moduleAccounts(request?: _38.QueryModuleAccountsRequest): Promise<_38.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _38.QueryModuleAccountByNameRequest): Promise<_38.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _38.Bech32PrefixRequest): Promise<_38.Bech32PrefixResponse>;
                addressBytesToString(request: _38.AddressBytesToStringRequest): Promise<_38.AddressBytesToStringResponse>;
                addressStringToBytes(request: _38.AddressStringToBytesRequest): Promise<_38.AddressStringToBytesResponse>;
                accountInfo(request: _38.QueryAccountInfoRequest): Promise<_38.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _39.MsgUpdateParams) => _39.MsgUpdateParamsAmino;
                    fromAmino: (object: _39.MsgUpdateParamsAmino) => _39.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _39.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MsgUpdateParams;
                fromPartial(object: Partial<_39.MsgUpdateParams>): _39.MsgUpdateParams;
                fromAmino(object: _39.MsgUpdateParamsAmino): _39.MsgUpdateParams;
                toAmino(message: _39.MsgUpdateParams): _39.MsgUpdateParamsAmino;
                fromAminoMsg(object: _39.MsgUpdateParamsAminoMsg): _39.MsgUpdateParams;
                toAminoMsg(message: _39.MsgUpdateParams): _39.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _39.MsgUpdateParamsProtoMsg): _39.MsgUpdateParams;
                toProto(message: _39.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _39.MsgUpdateParams): _39.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _39.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_39.MsgUpdateParamsResponse>): _39.MsgUpdateParamsResponse;
                fromAmino(_: _39.MsgUpdateParamsResponseAmino): _39.MsgUpdateParamsResponse;
                toAmino(_: _39.MsgUpdateParamsResponse): _39.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _39.MsgUpdateParamsResponseAminoMsg): _39.MsgUpdateParamsResponse;
                toAminoMsg(message: _39.MsgUpdateParamsResponse): _39.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _39.MsgUpdateParamsResponseProtoMsg): _39.MsgUpdateParamsResponse;
                toProto(message: _39.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _39.MsgUpdateParamsResponse): _39.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _38.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountsRequest;
                fromPartial(object: Partial<_38.QueryAccountsRequest>): _38.QueryAccountsRequest;
                fromAmino(object: _38.QueryAccountsRequestAmino): _38.QueryAccountsRequest;
                toAmino(message: _38.QueryAccountsRequest): _38.QueryAccountsRequestAmino;
                fromAminoMsg(object: _38.QueryAccountsRequestAminoMsg): _38.QueryAccountsRequest;
                toAminoMsg(message: _38.QueryAccountsRequest): _38.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAccountsRequestProtoMsg): _38.QueryAccountsRequest;
                toProto(message: _38.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAccountsRequest): _38.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _38.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountsResponse;
                fromPartial(object: Partial<_38.QueryAccountsResponse>): _38.QueryAccountsResponse;
                fromAmino(object: _38.QueryAccountsResponseAmino): _38.QueryAccountsResponse;
                toAmino(message: _38.QueryAccountsResponse): _38.QueryAccountsResponseAmino;
                fromAminoMsg(object: _38.QueryAccountsResponseAminoMsg): _38.QueryAccountsResponse;
                toAminoMsg(message: _38.QueryAccountsResponse): _38.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAccountsResponseProtoMsg): _38.QueryAccountsResponse;
                toProto(message: _38.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAccountsResponse): _38.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _38.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountRequest;
                fromPartial(object: Partial<_38.QueryAccountRequest>): _38.QueryAccountRequest;
                fromAmino(object: _38.QueryAccountRequestAmino): _38.QueryAccountRequest;
                toAmino(message: _38.QueryAccountRequest): _38.QueryAccountRequestAmino;
                fromAminoMsg(object: _38.QueryAccountRequestAminoMsg): _38.QueryAccountRequest;
                toAminoMsg(message: _38.QueryAccountRequest): _38.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAccountRequestProtoMsg): _38.QueryAccountRequest;
                toProto(message: _38.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAccountRequest): _38.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _38.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountResponse;
                fromPartial(object: Partial<_38.QueryAccountResponse>): _38.QueryAccountResponse;
                fromAmino(object: _38.QueryAccountResponseAmino): _38.QueryAccountResponse;
                toAmino(message: _38.QueryAccountResponse): _38.QueryAccountResponseAmino;
                fromAminoMsg(object: _38.QueryAccountResponseAminoMsg): _38.QueryAccountResponse;
                toAminoMsg(message: _38.QueryAccountResponse): _38.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAccountResponseProtoMsg): _38.QueryAccountResponse;
                toProto(message: _38.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAccountResponse): _38.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _38.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.QueryParamsRequest;
                fromPartial(_: Partial<_38.QueryParamsRequest>): _38.QueryParamsRequest;
                fromAmino(_: _38.QueryParamsRequestAmino): _38.QueryParamsRequest;
                toAmino(_: _38.QueryParamsRequest): _38.QueryParamsRequestAmino;
                fromAminoMsg(object: _38.QueryParamsRequestAminoMsg): _38.QueryParamsRequest;
                toAminoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryParamsRequestProtoMsg): _38.QueryParamsRequest;
                toProto(message: _38.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _38.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryParamsResponse;
                fromPartial(object: Partial<_38.QueryParamsResponse>): _38.QueryParamsResponse;
                fromAmino(object: _38.QueryParamsResponseAmino): _38.QueryParamsResponse;
                toAmino(message: _38.QueryParamsResponse): _38.QueryParamsResponseAmino;
                fromAminoMsg(object: _38.QueryParamsResponseAminoMsg): _38.QueryParamsResponse;
                toAminoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryParamsResponseProtoMsg): _38.QueryParamsResponse;
                toProto(message: _38.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _38.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_38.QueryModuleAccountsRequest>): _38.QueryModuleAccountsRequest;
                fromAmino(_: _38.QueryModuleAccountsRequestAmino): _38.QueryModuleAccountsRequest;
                toAmino(_: _38.QueryModuleAccountsRequest): _38.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _38.QueryModuleAccountsRequestAminoMsg): _38.QueryModuleAccountsRequest;
                toAminoMsg(message: _38.QueryModuleAccountsRequest): _38.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryModuleAccountsRequestProtoMsg): _38.QueryModuleAccountsRequest;
                toProto(message: _38.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryModuleAccountsRequest): _38.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _38.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_38.QueryModuleAccountsResponse>): _38.QueryModuleAccountsResponse;
                fromAmino(object: _38.QueryModuleAccountsResponseAmino): _38.QueryModuleAccountsResponse;
                toAmino(message: _38.QueryModuleAccountsResponse): _38.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _38.QueryModuleAccountsResponseAminoMsg): _38.QueryModuleAccountsResponse;
                toAminoMsg(message: _38.QueryModuleAccountsResponse): _38.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryModuleAccountsResponseProtoMsg): _38.QueryModuleAccountsResponse;
                toProto(message: _38.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryModuleAccountsResponse): _38.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _38.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_38.QueryModuleAccountByNameRequest>): _38.QueryModuleAccountByNameRequest;
                fromAmino(object: _38.QueryModuleAccountByNameRequestAmino): _38.QueryModuleAccountByNameRequest;
                toAmino(message: _38.QueryModuleAccountByNameRequest): _38.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _38.QueryModuleAccountByNameRequestAminoMsg): _38.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _38.QueryModuleAccountByNameRequest): _38.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _38.QueryModuleAccountByNameRequestProtoMsg): _38.QueryModuleAccountByNameRequest;
                toProto(message: _38.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _38.QueryModuleAccountByNameRequest): _38.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _38.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_38.QueryModuleAccountByNameResponse>): _38.QueryModuleAccountByNameResponse;
                fromAmino(object: _38.QueryModuleAccountByNameResponseAmino): _38.QueryModuleAccountByNameResponse;
                toAmino(message: _38.QueryModuleAccountByNameResponse): _38.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _38.QueryModuleAccountByNameResponseAminoMsg): _38.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _38.QueryModuleAccountByNameResponse): _38.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _38.QueryModuleAccountByNameResponseProtoMsg): _38.QueryModuleAccountByNameResponse;
                toProto(message: _38.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _38.QueryModuleAccountByNameResponse): _38.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _38.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.Bech32PrefixRequest;
                fromPartial(_: Partial<_38.Bech32PrefixRequest>): _38.Bech32PrefixRequest;
                fromAmino(_: _38.Bech32PrefixRequestAmino): _38.Bech32PrefixRequest;
                toAmino(_: _38.Bech32PrefixRequest): _38.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _38.Bech32PrefixRequestAminoMsg): _38.Bech32PrefixRequest;
                toAminoMsg(message: _38.Bech32PrefixRequest): _38.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _38.Bech32PrefixRequestProtoMsg): _38.Bech32PrefixRequest;
                toProto(message: _38.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _38.Bech32PrefixRequest): _38.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _38.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Bech32PrefixResponse;
                fromPartial(object: Partial<_38.Bech32PrefixResponse>): _38.Bech32PrefixResponse;
                fromAmino(object: _38.Bech32PrefixResponseAmino): _38.Bech32PrefixResponse;
                toAmino(message: _38.Bech32PrefixResponse): _38.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _38.Bech32PrefixResponseAminoMsg): _38.Bech32PrefixResponse;
                toAminoMsg(message: _38.Bech32PrefixResponse): _38.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _38.Bech32PrefixResponseProtoMsg): _38.Bech32PrefixResponse;
                toProto(message: _38.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _38.Bech32PrefixResponse): _38.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _38.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.AddressBytesToStringRequest;
                fromPartial(object: Partial<_38.AddressBytesToStringRequest>): _38.AddressBytesToStringRequest;
                fromAmino(object: _38.AddressBytesToStringRequestAmino): _38.AddressBytesToStringRequest;
                toAmino(message: _38.AddressBytesToStringRequest): _38.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _38.AddressBytesToStringRequestAminoMsg): _38.AddressBytesToStringRequest;
                toAminoMsg(message: _38.AddressBytesToStringRequest): _38.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _38.AddressBytesToStringRequestProtoMsg): _38.AddressBytesToStringRequest;
                toProto(message: _38.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _38.AddressBytesToStringRequest): _38.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _38.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.AddressBytesToStringResponse;
                fromPartial(object: Partial<_38.AddressBytesToStringResponse>): _38.AddressBytesToStringResponse;
                fromAmino(object: _38.AddressBytesToStringResponseAmino): _38.AddressBytesToStringResponse;
                toAmino(message: _38.AddressBytesToStringResponse): _38.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _38.AddressBytesToStringResponseAminoMsg): _38.AddressBytesToStringResponse;
                toAminoMsg(message: _38.AddressBytesToStringResponse): _38.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _38.AddressBytesToStringResponseProtoMsg): _38.AddressBytesToStringResponse;
                toProto(message: _38.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _38.AddressBytesToStringResponse): _38.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _38.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.AddressStringToBytesRequest;
                fromPartial(object: Partial<_38.AddressStringToBytesRequest>): _38.AddressStringToBytesRequest;
                fromAmino(object: _38.AddressStringToBytesRequestAmino): _38.AddressStringToBytesRequest;
                toAmino(message: _38.AddressStringToBytesRequest): _38.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _38.AddressStringToBytesRequestAminoMsg): _38.AddressStringToBytesRequest;
                toAminoMsg(message: _38.AddressStringToBytesRequest): _38.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _38.AddressStringToBytesRequestProtoMsg): _38.AddressStringToBytesRequest;
                toProto(message: _38.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _38.AddressStringToBytesRequest): _38.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _38.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.AddressStringToBytesResponse;
                fromPartial(object: Partial<_38.AddressStringToBytesResponse>): _38.AddressStringToBytesResponse;
                fromAmino(object: _38.AddressStringToBytesResponseAmino): _38.AddressStringToBytesResponse;
                toAmino(message: _38.AddressStringToBytesResponse): _38.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _38.AddressStringToBytesResponseAminoMsg): _38.AddressStringToBytesResponse;
                toAminoMsg(message: _38.AddressStringToBytesResponse): _38.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _38.AddressStringToBytesResponseProtoMsg): _38.AddressStringToBytesResponse;
                toProto(message: _38.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _38.AddressStringToBytesResponse): _38.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _38.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_38.QueryAccountAddressByIDRequest>): _38.QueryAccountAddressByIDRequest;
                fromAmino(object: _38.QueryAccountAddressByIDRequestAmino): _38.QueryAccountAddressByIDRequest;
                toAmino(message: _38.QueryAccountAddressByIDRequest): _38.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _38.QueryAccountAddressByIDRequestAminoMsg): _38.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _38.QueryAccountAddressByIDRequest): _38.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAccountAddressByIDRequestProtoMsg): _38.QueryAccountAddressByIDRequest;
                toProto(message: _38.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAccountAddressByIDRequest): _38.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _38.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_38.QueryAccountAddressByIDResponse>): _38.QueryAccountAddressByIDResponse;
                fromAmino(object: _38.QueryAccountAddressByIDResponseAmino): _38.QueryAccountAddressByIDResponse;
                toAmino(message: _38.QueryAccountAddressByIDResponse): _38.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _38.QueryAccountAddressByIDResponseAminoMsg): _38.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _38.QueryAccountAddressByIDResponse): _38.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAccountAddressByIDResponseProtoMsg): _38.QueryAccountAddressByIDResponse;
                toProto(message: _38.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAccountAddressByIDResponse): _38.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _38.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountInfoRequest;
                fromPartial(object: Partial<_38.QueryAccountInfoRequest>): _38.QueryAccountInfoRequest;
                fromAmino(object: _38.QueryAccountInfoRequestAmino): _38.QueryAccountInfoRequest;
                toAmino(message: _38.QueryAccountInfoRequest): _38.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _38.QueryAccountInfoRequestAminoMsg): _38.QueryAccountInfoRequest;
                toAminoMsg(message: _38.QueryAccountInfoRequest): _38.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAccountInfoRequestProtoMsg): _38.QueryAccountInfoRequest;
                toProto(message: _38.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAccountInfoRequest): _38.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _38.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountInfoResponse;
                fromPartial(object: Partial<_38.QueryAccountInfoResponse>): _38.QueryAccountInfoResponse;
                fromAmino(object: _38.QueryAccountInfoResponseAmino): _38.QueryAccountInfoResponse;
                toAmino(message: _38.QueryAccountInfoResponse): _38.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _38.QueryAccountInfoResponseAminoMsg): _38.QueryAccountInfoResponse;
                toAminoMsg(message: _38.QueryAccountInfoResponse): _38.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAccountInfoResponseProtoMsg): _38.QueryAccountInfoResponse;
                toProto(message: _38.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAccountInfoResponse): _38.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _36.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _36.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _36.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.BaseAccount;
                fromPartial(object: Partial<_36.BaseAccount>): _36.BaseAccount;
                fromAmino(object: _36.BaseAccountAmino): _36.BaseAccount;
                toAmino(message: _36.BaseAccount): _36.BaseAccountAmino;
                fromAminoMsg(object: _36.BaseAccountAminoMsg): _36.BaseAccount;
                toAminoMsg(message: _36.BaseAccount): _36.BaseAccountAminoMsg;
                fromProtoMsg(message: _36.BaseAccountProtoMsg): _36.BaseAccount;
                toProto(message: _36.BaseAccount): Uint8Array;
                toProtoMsg(message: _36.BaseAccount): _36.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _36.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.ModuleAccount;
                fromPartial(object: Partial<_36.ModuleAccount>): _36.ModuleAccount;
                fromAmino(object: _36.ModuleAccountAmino): _36.ModuleAccount;
                toAmino(message: _36.ModuleAccount): _36.ModuleAccountAmino;
                fromAminoMsg(object: _36.ModuleAccountAminoMsg): _36.ModuleAccount;
                toAminoMsg(message: _36.ModuleAccount): _36.ModuleAccountAminoMsg;
                fromProtoMsg(message: _36.ModuleAccountProtoMsg): _36.ModuleAccount;
                toProto(message: _36.ModuleAccount): Uint8Array;
                toProtoMsg(message: _36.ModuleAccount): _36.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _36.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.ModuleCredential;
                fromPartial(object: Partial<_36.ModuleCredential>): _36.ModuleCredential;
                fromAmino(object: _36.ModuleCredentialAmino): _36.ModuleCredential;
                toAmino(message: _36.ModuleCredential): _36.ModuleCredentialAmino;
                fromAminoMsg(object: _36.ModuleCredentialAminoMsg): _36.ModuleCredential;
                toAminoMsg(message: _36.ModuleCredential): _36.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _36.ModuleCredentialProtoMsg): _36.ModuleCredential;
                toProto(message: _36.ModuleCredential): Uint8Array;
                toProtoMsg(message: _36.ModuleCredential): _36.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _36.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Params;
                fromPartial(object: Partial<_36.Params>): _36.Params;
                fromAmino(object: _36.ParamsAmino): _36.Params;
                toAmino(message: _36.Params): _36.ParamsAmino;
                fromAminoMsg(object: _36.ParamsAminoMsg): _36.Params;
                toAminoMsg(message: _36.Params): _36.ParamsAminoMsg;
                fromProtoMsg(message: _36.ParamsProtoMsg): _36.Params;
                toProto(message: _36.Params): Uint8Array;
                toProtoMsg(message: _36.Params): _36.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _40.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _40.Module;
                    fromPartial(_: Partial<_40.Module>): _40.Module;
                    fromAmino(_: _40.ModuleAmino): _40.Module;
                    toAmino(_: _40.Module): _40.ModuleAmino;
                    fromAminoMsg(object: _40.ModuleAminoMsg): _40.Module;
                    toAminoMsg(message: _40.Module): _40.ModuleAminoMsg;
                    fromProtoMsg(message: _40.ModuleProtoMsg): _40.Module;
                    toProto(message: _40.Module): Uint8Array;
                    toProtoMsg(message: _40.Module): _40.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _44.QueryGrantsRequest): Promise<_44.QueryGrantsResponse>;
                granterGrants(request: _44.QueryGranterGrantsRequest): Promise<_44.QueryGranterGrantsResponse>;
                granteeGrants(request: _44.QueryGranteeGrantsRequest): Promise<_44.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _45.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _45.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _45.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _45.MsgGrant): {
                        typeUrl: string;
                        value: _45.MsgGrant;
                    };
                    exec(value: _45.MsgExec): {
                        typeUrl: string;
                        value: _45.MsgExec;
                    };
                    revoke(value: _45.MsgRevoke): {
                        typeUrl: string;
                        value: _45.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _45.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _45.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _45.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _45.MsgGrant): {
                        typeUrl: string;
                        value: _45.MsgGrant;
                    };
                    exec(value: _45.MsgExec): {
                        typeUrl: string;
                        value: _45.MsgExec;
                    };
                    revoke(value: _45.MsgRevoke): {
                        typeUrl: string;
                        value: _45.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _45.MsgGrant) => _45.MsgGrantAmino;
                    fromAmino: (object: _45.MsgGrantAmino) => _45.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _45.MsgExec) => _45.MsgExecAmino;
                    fromAmino: (object: _45.MsgExecAmino) => _45.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _45.MsgRevoke) => _45.MsgRevokeAmino;
                    fromAmino: (object: _45.MsgRevokeAmino) => _45.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _45.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgGrant;
                fromPartial(object: Partial<_45.MsgGrant>): _45.MsgGrant;
                fromAmino(object: _45.MsgGrantAmino): _45.MsgGrant;
                toAmino(message: _45.MsgGrant): _45.MsgGrantAmino;
                fromAminoMsg(object: _45.MsgGrantAminoMsg): _45.MsgGrant;
                toAminoMsg(message: _45.MsgGrant): _45.MsgGrantAminoMsg;
                fromProtoMsg(message: _45.MsgGrantProtoMsg): _45.MsgGrant;
                toProto(message: _45.MsgGrant): Uint8Array;
                toProtoMsg(message: _45.MsgGrant): _45.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _45.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgExecResponse;
                fromPartial(object: Partial<_45.MsgExecResponse>): _45.MsgExecResponse;
                fromAmino(object: _45.MsgExecResponseAmino): _45.MsgExecResponse;
                toAmino(message: _45.MsgExecResponse): _45.MsgExecResponseAmino;
                fromAminoMsg(object: _45.MsgExecResponseAminoMsg): _45.MsgExecResponse;
                toAminoMsg(message: _45.MsgExecResponse): _45.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _45.MsgExecResponseProtoMsg): _45.MsgExecResponse;
                toProto(message: _45.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _45.MsgExecResponse): _45.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _45.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgExec;
                fromPartial(object: Partial<_45.MsgExec>): _45.MsgExec;
                fromAmino(object: _45.MsgExecAmino): _45.MsgExec;
                toAmino(message: _45.MsgExec): _45.MsgExecAmino;
                fromAminoMsg(object: _45.MsgExecAminoMsg): _45.MsgExec;
                toAminoMsg(message: _45.MsgExec): _45.MsgExecAminoMsg;
                fromProtoMsg(message: _45.MsgExecProtoMsg): _45.MsgExec;
                toProto(message: _45.MsgExec): Uint8Array;
                toProtoMsg(message: _45.MsgExec): _45.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _45.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgGrantResponse;
                fromPartial(_: Partial<_45.MsgGrantResponse>): _45.MsgGrantResponse;
                fromAmino(_: _45.MsgGrantResponseAmino): _45.MsgGrantResponse;
                toAmino(_: _45.MsgGrantResponse): _45.MsgGrantResponseAmino;
                fromAminoMsg(object: _45.MsgGrantResponseAminoMsg): _45.MsgGrantResponse;
                toAminoMsg(message: _45.MsgGrantResponse): _45.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _45.MsgGrantResponseProtoMsg): _45.MsgGrantResponse;
                toProto(message: _45.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _45.MsgGrantResponse): _45.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _45.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgRevoke;
                fromPartial(object: Partial<_45.MsgRevoke>): _45.MsgRevoke;
                fromAmino(object: _45.MsgRevokeAmino): _45.MsgRevoke;
                toAmino(message: _45.MsgRevoke): _45.MsgRevokeAmino;
                fromAminoMsg(object: _45.MsgRevokeAminoMsg): _45.MsgRevoke;
                toAminoMsg(message: _45.MsgRevoke): _45.MsgRevokeAminoMsg;
                fromProtoMsg(message: _45.MsgRevokeProtoMsg): _45.MsgRevoke;
                toProto(message: _45.MsgRevoke): Uint8Array;
                toProtoMsg(message: _45.MsgRevoke): _45.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _45.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgRevokeResponse;
                fromPartial(_: Partial<_45.MsgRevokeResponse>): _45.MsgRevokeResponse;
                fromAmino(_: _45.MsgRevokeResponseAmino): _45.MsgRevokeResponse;
                toAmino(_: _45.MsgRevokeResponse): _45.MsgRevokeResponseAmino;
                fromAminoMsg(object: _45.MsgRevokeResponseAminoMsg): _45.MsgRevokeResponse;
                toAminoMsg(message: _45.MsgRevokeResponse): _45.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _45.MsgRevokeResponseProtoMsg): _45.MsgRevokeResponse;
                toProto(message: _45.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _45.MsgRevokeResponse): _45.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _44.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryGrantsRequest;
                fromPartial(object: Partial<_44.QueryGrantsRequest>): _44.QueryGrantsRequest;
                fromAmino(object: _44.QueryGrantsRequestAmino): _44.QueryGrantsRequest;
                toAmino(message: _44.QueryGrantsRequest): _44.QueryGrantsRequestAmino;
                fromAminoMsg(object: _44.QueryGrantsRequestAminoMsg): _44.QueryGrantsRequest;
                toAminoMsg(message: _44.QueryGrantsRequest): _44.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryGrantsRequestProtoMsg): _44.QueryGrantsRequest;
                toProto(message: _44.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryGrantsRequest): _44.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _44.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryGrantsResponse;
                fromPartial(object: Partial<_44.QueryGrantsResponse>): _44.QueryGrantsResponse;
                fromAmino(object: _44.QueryGrantsResponseAmino): _44.QueryGrantsResponse;
                toAmino(message: _44.QueryGrantsResponse): _44.QueryGrantsResponseAmino;
                fromAminoMsg(object: _44.QueryGrantsResponseAminoMsg): _44.QueryGrantsResponse;
                toAminoMsg(message: _44.QueryGrantsResponse): _44.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryGrantsResponseProtoMsg): _44.QueryGrantsResponse;
                toProto(message: _44.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryGrantsResponse): _44.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _44.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_44.QueryGranterGrantsRequest>): _44.QueryGranterGrantsRequest;
                fromAmino(object: _44.QueryGranterGrantsRequestAmino): _44.QueryGranterGrantsRequest;
                toAmino(message: _44.QueryGranterGrantsRequest): _44.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _44.QueryGranterGrantsRequestAminoMsg): _44.QueryGranterGrantsRequest;
                toAminoMsg(message: _44.QueryGranterGrantsRequest): _44.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryGranterGrantsRequestProtoMsg): _44.QueryGranterGrantsRequest;
                toProto(message: _44.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryGranterGrantsRequest): _44.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _44.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_44.QueryGranterGrantsResponse>): _44.QueryGranterGrantsResponse;
                fromAmino(object: _44.QueryGranterGrantsResponseAmino): _44.QueryGranterGrantsResponse;
                toAmino(message: _44.QueryGranterGrantsResponse): _44.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _44.QueryGranterGrantsResponseAminoMsg): _44.QueryGranterGrantsResponse;
                toAminoMsg(message: _44.QueryGranterGrantsResponse): _44.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryGranterGrantsResponseProtoMsg): _44.QueryGranterGrantsResponse;
                toProto(message: _44.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryGranterGrantsResponse): _44.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _44.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_44.QueryGranteeGrantsRequest>): _44.QueryGranteeGrantsRequest;
                fromAmino(object: _44.QueryGranteeGrantsRequestAmino): _44.QueryGranteeGrantsRequest;
                toAmino(message: _44.QueryGranteeGrantsRequest): _44.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _44.QueryGranteeGrantsRequestAminoMsg): _44.QueryGranteeGrantsRequest;
                toAminoMsg(message: _44.QueryGranteeGrantsRequest): _44.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryGranteeGrantsRequestProtoMsg): _44.QueryGranteeGrantsRequest;
                toProto(message: _44.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryGranteeGrantsRequest): _44.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _44.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_44.QueryGranteeGrantsResponse>): _44.QueryGranteeGrantsResponse;
                fromAmino(object: _44.QueryGranteeGrantsResponseAmino): _44.QueryGranteeGrantsResponse;
                toAmino(message: _44.QueryGranteeGrantsResponse): _44.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _44.QueryGranteeGrantsResponseAminoMsg): _44.QueryGranteeGrantsResponse;
                toAminoMsg(message: _44.QueryGranteeGrantsResponse): _44.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryGranteeGrantsResponseProtoMsg): _44.QueryGranteeGrantsResponse;
                toProto(message: _44.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryGranteeGrantsResponse): _44.QueryGranteeGrantsResponseProtoMsg;
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
            EventGrant: {
                typeUrl: string;
                encode(message: _42.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.EventGrant;
                fromPartial(object: Partial<_42.EventGrant>): _42.EventGrant;
                fromAmino(object: _42.EventGrantAmino): _42.EventGrant;
                toAmino(message: _42.EventGrant): _42.EventGrantAmino;
                fromAminoMsg(object: _42.EventGrantAminoMsg): _42.EventGrant;
                toAminoMsg(message: _42.EventGrant): _42.EventGrantAminoMsg;
                fromProtoMsg(message: _42.EventGrantProtoMsg): _42.EventGrant;
                toProto(message: _42.EventGrant): Uint8Array;
                toProtoMsg(message: _42.EventGrant): _42.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _42.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.EventRevoke;
                fromPartial(object: Partial<_42.EventRevoke>): _42.EventRevoke;
                fromAmino(object: _42.EventRevokeAmino): _42.EventRevoke;
                toAmino(message: _42.EventRevoke): _42.EventRevokeAmino;
                fromAminoMsg(object: _42.EventRevokeAminoMsg): _42.EventRevoke;
                toAminoMsg(message: _42.EventRevoke): _42.EventRevokeAminoMsg;
                fromProtoMsg(message: _42.EventRevokeProtoMsg): _42.EventRevoke;
                toProto(message: _42.EventRevoke): Uint8Array;
                toProtoMsg(message: _42.EventRevoke): _42.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _41.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GenericAuthorization;
                fromPartial(object: Partial<_41.GenericAuthorization>): _41.GenericAuthorization;
                fromAmino(object: _41.GenericAuthorizationAmino): _41.GenericAuthorization;
                toAmino(message: _41.GenericAuthorization): _41.GenericAuthorizationAmino;
                fromAminoMsg(object: _41.GenericAuthorizationAminoMsg): _41.GenericAuthorization;
                toAminoMsg(message: _41.GenericAuthorization): _41.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _41.GenericAuthorizationProtoMsg): _41.GenericAuthorization;
                toProto(message: _41.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _41.GenericAuthorization): _41.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _41.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Grant;
                fromPartial(object: Partial<_41.Grant>): _41.Grant;
                fromAmino(object: _41.GrantAmino): _41.Grant;
                toAmino(message: _41.Grant): _41.GrantAmino;
                fromAminoMsg(object: _41.GrantAminoMsg): _41.Grant;
                toAminoMsg(message: _41.Grant): _41.GrantAminoMsg;
                fromProtoMsg(message: _41.GrantProtoMsg): _41.Grant;
                toProto(message: _41.Grant): Uint8Array;
                toProtoMsg(message: _41.Grant): _41.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _41.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GrantAuthorization;
                fromPartial(object: Partial<_41.GrantAuthorization>): _41.GrantAuthorization;
                fromAmino(object: _41.GrantAuthorizationAmino): _41.GrantAuthorization;
                toAmino(message: _41.GrantAuthorization): _41.GrantAuthorizationAmino;
                fromAminoMsg(object: _41.GrantAuthorizationAminoMsg): _41.GrantAuthorization;
                toAminoMsg(message: _41.GrantAuthorization): _41.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _41.GrantAuthorizationProtoMsg): _41.GrantAuthorization;
                toProto(message: _41.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _41.GrantAuthorization): _41.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _41.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GrantQueueItem;
                fromPartial(object: Partial<_41.GrantQueueItem>): _41.GrantQueueItem;
                fromAmino(object: _41.GrantQueueItemAmino): _41.GrantQueueItem;
                toAmino(message: _41.GrantQueueItem): _41.GrantQueueItemAmino;
                fromAminoMsg(object: _41.GrantQueueItemAminoMsg): _41.GrantQueueItem;
                toAminoMsg(message: _41.GrantQueueItem): _41.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _41.GrantQueueItemProtoMsg): _41.GrantQueueItem;
                toProto(message: _41.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _41.GrantQueueItem): _41.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _49.SendAuthorization | _140.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _41.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _47.AppOptionsRequest): Promise<_47.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _47.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.AppOptionsRequest;
                fromPartial(_: Partial<_47.AppOptionsRequest>): _47.AppOptionsRequest;
                fromAmino(_: _47.AppOptionsRequestAmino): _47.AppOptionsRequest;
                toAmino(_: _47.AppOptionsRequest): _47.AppOptionsRequestAmino;
                fromAminoMsg(object: _47.AppOptionsRequestAminoMsg): _47.AppOptionsRequest;
                toAminoMsg(message: _47.AppOptionsRequest): _47.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _47.AppOptionsRequestProtoMsg): _47.AppOptionsRequest;
                toProto(message: _47.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _47.AppOptionsRequest): _47.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _47.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_47.AppOptionsResponse_ModuleOptionsEntry>): _47.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _47.AppOptionsResponse_ModuleOptionsEntryAmino): _47.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _47.AppOptionsResponse_ModuleOptionsEntry): _47.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _47.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _47.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _47.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _47.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _47.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _47.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.AppOptionsResponse;
                fromPartial(object: Partial<_47.AppOptionsResponse>): _47.AppOptionsResponse;
                fromAmino(object: _47.AppOptionsResponseAmino): _47.AppOptionsResponse;
                toAmino(message: _47.AppOptionsResponse): _47.AppOptionsResponseAmino;
                fromAminoMsg(object: _47.AppOptionsResponseAminoMsg): _47.AppOptionsResponse;
                toAminoMsg(message: _47.AppOptionsResponse): _47.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _47.AppOptionsResponseProtoMsg): _47.AppOptionsResponse;
                toProto(message: _47.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _47.AppOptionsResponse): _47.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _46.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ModuleOptions;
                fromPartial(object: Partial<_46.ModuleOptions>): _46.ModuleOptions;
                fromAmino(object: _46.ModuleOptionsAmino): _46.ModuleOptions;
                toAmino(message: _46.ModuleOptions): _46.ModuleOptionsAmino;
                fromAminoMsg(object: _46.ModuleOptionsAminoMsg): _46.ModuleOptions;
                toAminoMsg(message: _46.ModuleOptions): _46.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _46.ModuleOptionsProtoMsg): _46.ModuleOptions;
                toProto(message: _46.ModuleOptions): Uint8Array;
                toProtoMsg(message: _46.ModuleOptions): _46.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _46.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_46.ServiceCommandDescriptor_SubCommandsEntry>): _46.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _46.ServiceCommandDescriptor_SubCommandsEntryAmino): _46.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _46.ServiceCommandDescriptor_SubCommandsEntry): _46.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _46.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _46.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _46.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _46.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _46.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _46.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ServiceCommandDescriptor;
                fromPartial(object: Partial<_46.ServiceCommandDescriptor>): _46.ServiceCommandDescriptor;
                fromAmino(object: _46.ServiceCommandDescriptorAmino): _46.ServiceCommandDescriptor;
                toAmino(message: _46.ServiceCommandDescriptor): _46.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _46.ServiceCommandDescriptorAminoMsg): _46.ServiceCommandDescriptor;
                toAminoMsg(message: _46.ServiceCommandDescriptor): _46.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _46.ServiceCommandDescriptorProtoMsg): _46.ServiceCommandDescriptor;
                toProto(message: _46.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _46.ServiceCommandDescriptor): _46.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _46.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_46.RpcCommandOptions_FlagOptionsEntry>): _46.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _46.RpcCommandOptions_FlagOptionsEntryAmino): _46.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _46.RpcCommandOptions_FlagOptionsEntry): _46.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _46.RpcCommandOptions_FlagOptionsEntryAminoMsg): _46.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _46.RpcCommandOptions_FlagOptionsEntryProtoMsg): _46.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _46.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _46.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.RpcCommandOptions;
                fromPartial(object: Partial<_46.RpcCommandOptions>): _46.RpcCommandOptions;
                fromAmino(object: _46.RpcCommandOptionsAmino): _46.RpcCommandOptions;
                toAmino(message: _46.RpcCommandOptions): _46.RpcCommandOptionsAmino;
                fromAminoMsg(object: _46.RpcCommandOptionsAminoMsg): _46.RpcCommandOptions;
                toAminoMsg(message: _46.RpcCommandOptions): _46.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _46.RpcCommandOptionsProtoMsg): _46.RpcCommandOptions;
                toProto(message: _46.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _46.RpcCommandOptions): _46.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _46.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.FlagOptions;
                fromPartial(object: Partial<_46.FlagOptions>): _46.FlagOptions;
                fromAmino(object: _46.FlagOptionsAmino): _46.FlagOptions;
                toAmino(message: _46.FlagOptions): _46.FlagOptionsAmino;
                fromAminoMsg(object: _46.FlagOptionsAminoMsg): _46.FlagOptions;
                toAminoMsg(message: _46.FlagOptions): _46.FlagOptionsAminoMsg;
                fromProtoMsg(message: _46.FlagOptionsProtoMsg): _46.FlagOptions;
                toProto(message: _46.FlagOptions): Uint8Array;
                toProtoMsg(message: _46.FlagOptions): _46.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _46.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.PositionalArgDescriptor;
                fromPartial(object: Partial<_46.PositionalArgDescriptor>): _46.PositionalArgDescriptor;
                fromAmino(object: _46.PositionalArgDescriptorAmino): _46.PositionalArgDescriptor;
                toAmino(message: _46.PositionalArgDescriptor): _46.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _46.PositionalArgDescriptorAminoMsg): _46.PositionalArgDescriptor;
                toAminoMsg(message: _46.PositionalArgDescriptor): _46.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _46.PositionalArgDescriptorProtoMsg): _46.PositionalArgDescriptor;
                toProto(message: _46.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _46.PositionalArgDescriptor): _46.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
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
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _52.QueryBalanceRequest): Promise<_52.QueryBalanceResponse>;
                allBalances(request: _52.QueryAllBalancesRequest): Promise<_52.QueryAllBalancesResponse>;
                spendableBalances(request: _52.QuerySpendableBalancesRequest): Promise<_52.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _52.QuerySpendableBalanceByDenomRequest): Promise<_52.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _52.QueryTotalSupplyRequest): Promise<_52.QueryTotalSupplyResponse>;
                supplyOf(request: _52.QuerySupplyOfRequest): Promise<_52.QuerySupplyOfResponse>;
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                denomMetadata(request: _52.QueryDenomMetadataRequest): Promise<_52.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _52.QueryDenomsMetadataRequest): Promise<_52.QueryDenomsMetadataResponse>;
                denomOwners(request: _52.QueryDenomOwnersRequest): Promise<_52.QueryDenomOwnersResponse>;
                sendEnabled(request: _52.QuerySendEnabledRequest): Promise<_52.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _53.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _53.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _53.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _53.MsgSend): {
                        typeUrl: string;
                        value: _53.MsgSend;
                    };
                    multiSend(value: _53.MsgMultiSend): {
                        typeUrl: string;
                        value: _53.MsgMultiSend;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    setSendEnabled(value: _53.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _53.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _53.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _53.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _53.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _53.MsgSend): {
                        typeUrl: string;
                        value: _53.MsgSend;
                    };
                    multiSend(value: _53.MsgMultiSend): {
                        typeUrl: string;
                        value: _53.MsgMultiSend;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    setSendEnabled(value: _53.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _53.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _53.MsgSend) => _53.MsgSendAmino;
                    fromAmino: (object: _53.MsgSendAmino) => _53.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _53.MsgMultiSend) => _53.MsgMultiSendAmino;
                    fromAmino: (object: _53.MsgMultiSendAmino) => _53.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _53.MsgUpdateParams) => _53.MsgUpdateParamsAmino;
                    fromAmino: (object: _53.MsgUpdateParamsAmino) => _53.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _53.MsgSetSendEnabled) => _53.MsgSetSendEnabledAmino;
                    fromAmino: (object: _53.MsgSetSendEnabledAmino) => _53.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _53.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSend;
                fromPartial(object: Partial<_53.MsgSend>): _53.MsgSend;
                fromAmino(object: _53.MsgSendAmino): _53.MsgSend;
                toAmino(message: _53.MsgSend): _53.MsgSendAmino;
                fromAminoMsg(object: _53.MsgSendAminoMsg): _53.MsgSend;
                toAminoMsg(message: _53.MsgSend): _53.MsgSendAminoMsg;
                fromProtoMsg(message: _53.MsgSendProtoMsg): _53.MsgSend;
                toProto(message: _53.MsgSend): Uint8Array;
                toProtoMsg(message: _53.MsgSend): _53.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _53.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgSendResponse;
                fromPartial(_: Partial<_53.MsgSendResponse>): _53.MsgSendResponse;
                fromAmino(_: _53.MsgSendResponseAmino): _53.MsgSendResponse;
                toAmino(_: _53.MsgSendResponse): _53.MsgSendResponseAmino;
                fromAminoMsg(object: _53.MsgSendResponseAminoMsg): _53.MsgSendResponse;
                toAminoMsg(message: _53.MsgSendResponse): _53.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _53.MsgSendResponseProtoMsg): _53.MsgSendResponse;
                toProto(message: _53.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _53.MsgSendResponse): _53.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _53.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgMultiSend;
                fromPartial(object: Partial<_53.MsgMultiSend>): _53.MsgMultiSend;
                fromAmino(object: _53.MsgMultiSendAmino): _53.MsgMultiSend;
                toAmino(message: _53.MsgMultiSend): _53.MsgMultiSendAmino;
                fromAminoMsg(object: _53.MsgMultiSendAminoMsg): _53.MsgMultiSend;
                toAminoMsg(message: _53.MsgMultiSend): _53.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _53.MsgMultiSendProtoMsg): _53.MsgMultiSend;
                toProto(message: _53.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _53.MsgMultiSend): _53.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _53.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgMultiSendResponse;
                fromPartial(_: Partial<_53.MsgMultiSendResponse>): _53.MsgMultiSendResponse;
                fromAmino(_: _53.MsgMultiSendResponseAmino): _53.MsgMultiSendResponse;
                toAmino(_: _53.MsgMultiSendResponse): _53.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _53.MsgMultiSendResponseAminoMsg): _53.MsgMultiSendResponse;
                toAminoMsg(message: _53.MsgMultiSendResponse): _53.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _53.MsgMultiSendResponseProtoMsg): _53.MsgMultiSendResponse;
                toProto(message: _53.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _53.MsgMultiSendResponse): _53.MsgMultiSendResponseProtoMsg;
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
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _53.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgSetSendEnabled;
                fromPartial(object: Partial<_53.MsgSetSendEnabled>): _53.MsgSetSendEnabled;
                fromAmino(object: _53.MsgSetSendEnabledAmino): _53.MsgSetSendEnabled;
                toAmino(message: _53.MsgSetSendEnabled): _53.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _53.MsgSetSendEnabledAminoMsg): _53.MsgSetSendEnabled;
                toAminoMsg(message: _53.MsgSetSendEnabled): _53.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _53.MsgSetSendEnabledProtoMsg): _53.MsgSetSendEnabled;
                toProto(message: _53.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _53.MsgSetSendEnabled): _53.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _53.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_53.MsgSetSendEnabledResponse>): _53.MsgSetSendEnabledResponse;
                fromAmino(_: _53.MsgSetSendEnabledResponseAmino): _53.MsgSetSendEnabledResponse;
                toAmino(_: _53.MsgSetSendEnabledResponse): _53.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _53.MsgSetSendEnabledResponseAminoMsg): _53.MsgSetSendEnabledResponse;
                toAminoMsg(message: _53.MsgSetSendEnabledResponse): _53.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _53.MsgSetSendEnabledResponseProtoMsg): _53.MsgSetSendEnabledResponse;
                toProto(message: _53.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _53.MsgSetSendEnabledResponse): _53.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _52.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryBalanceRequest;
                fromPartial(object: Partial<_52.QueryBalanceRequest>): _52.QueryBalanceRequest;
                fromAmino(object: _52.QueryBalanceRequestAmino): _52.QueryBalanceRequest;
                toAmino(message: _52.QueryBalanceRequest): _52.QueryBalanceRequestAmino;
                fromAminoMsg(object: _52.QueryBalanceRequestAminoMsg): _52.QueryBalanceRequest;
                toAminoMsg(message: _52.QueryBalanceRequest): _52.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _52.QueryBalanceRequestProtoMsg): _52.QueryBalanceRequest;
                toProto(message: _52.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryBalanceRequest): _52.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _52.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryBalanceResponse;
                fromPartial(object: Partial<_52.QueryBalanceResponse>): _52.QueryBalanceResponse;
                fromAmino(object: _52.QueryBalanceResponseAmino): _52.QueryBalanceResponse;
                toAmino(message: _52.QueryBalanceResponse): _52.QueryBalanceResponseAmino;
                fromAminoMsg(object: _52.QueryBalanceResponseAminoMsg): _52.QueryBalanceResponse;
                toAminoMsg(message: _52.QueryBalanceResponse): _52.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _52.QueryBalanceResponseProtoMsg): _52.QueryBalanceResponse;
                toProto(message: _52.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryBalanceResponse): _52.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _52.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllBalancesRequest;
                fromPartial(object: Partial<_52.QueryAllBalancesRequest>): _52.QueryAllBalancesRequest;
                fromAmino(object: _52.QueryAllBalancesRequestAmino): _52.QueryAllBalancesRequest;
                toAmino(message: _52.QueryAllBalancesRequest): _52.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _52.QueryAllBalancesRequestAminoMsg): _52.QueryAllBalancesRequest;
                toAminoMsg(message: _52.QueryAllBalancesRequest): _52.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAllBalancesRequestProtoMsg): _52.QueryAllBalancesRequest;
                toProto(message: _52.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAllBalancesRequest): _52.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _52.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryAllBalancesResponse;
                fromPartial(object: Partial<_52.QueryAllBalancesResponse>): _52.QueryAllBalancesResponse;
                fromAmino(object: _52.QueryAllBalancesResponseAmino): _52.QueryAllBalancesResponse;
                toAmino(message: _52.QueryAllBalancesResponse): _52.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _52.QueryAllBalancesResponseAminoMsg): _52.QueryAllBalancesResponse;
                toAminoMsg(message: _52.QueryAllBalancesResponse): _52.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAllBalancesResponseProtoMsg): _52.QueryAllBalancesResponse;
                toProto(message: _52.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAllBalancesResponse): _52.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _52.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_52.QuerySpendableBalancesRequest>): _52.QuerySpendableBalancesRequest;
                fromAmino(object: _52.QuerySpendableBalancesRequestAmino): _52.QuerySpendableBalancesRequest;
                toAmino(message: _52.QuerySpendableBalancesRequest): _52.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _52.QuerySpendableBalancesRequestAminoMsg): _52.QuerySpendableBalancesRequest;
                toAminoMsg(message: _52.QuerySpendableBalancesRequest): _52.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _52.QuerySpendableBalancesRequestProtoMsg): _52.QuerySpendableBalancesRequest;
                toProto(message: _52.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _52.QuerySpendableBalancesRequest): _52.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _52.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_52.QuerySpendableBalancesResponse>): _52.QuerySpendableBalancesResponse;
                fromAmino(object: _52.QuerySpendableBalancesResponseAmino): _52.QuerySpendableBalancesResponse;
                toAmino(message: _52.QuerySpendableBalancesResponse): _52.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _52.QuerySpendableBalancesResponseAminoMsg): _52.QuerySpendableBalancesResponse;
                toAminoMsg(message: _52.QuerySpendableBalancesResponse): _52.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _52.QuerySpendableBalancesResponseProtoMsg): _52.QuerySpendableBalancesResponse;
                toProto(message: _52.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _52.QuerySpendableBalancesResponse): _52.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _52.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_52.QuerySpendableBalanceByDenomRequest>): _52.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _52.QuerySpendableBalanceByDenomRequestAmino): _52.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _52.QuerySpendableBalanceByDenomRequest): _52.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _52.QuerySpendableBalanceByDenomRequestAminoMsg): _52.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _52.QuerySpendableBalanceByDenomRequest): _52.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _52.QuerySpendableBalanceByDenomRequestProtoMsg): _52.QuerySpendableBalanceByDenomRequest;
                toProto(message: _52.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _52.QuerySpendableBalanceByDenomRequest): _52.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _52.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_52.QuerySpendableBalanceByDenomResponse>): _52.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _52.QuerySpendableBalanceByDenomResponseAmino): _52.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _52.QuerySpendableBalanceByDenomResponse): _52.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _52.QuerySpendableBalanceByDenomResponseAminoMsg): _52.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _52.QuerySpendableBalanceByDenomResponse): _52.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _52.QuerySpendableBalanceByDenomResponseProtoMsg): _52.QuerySpendableBalanceByDenomResponse;
                toProto(message: _52.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _52.QuerySpendableBalanceByDenomResponse): _52.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _52.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_52.QueryTotalSupplyRequest>): _52.QueryTotalSupplyRequest;
                fromAmino(object: _52.QueryTotalSupplyRequestAmino): _52.QueryTotalSupplyRequest;
                toAmino(message: _52.QueryTotalSupplyRequest): _52.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _52.QueryTotalSupplyRequestAminoMsg): _52.QueryTotalSupplyRequest;
                toAminoMsg(message: _52.QueryTotalSupplyRequest): _52.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _52.QueryTotalSupplyRequestProtoMsg): _52.QueryTotalSupplyRequest;
                toProto(message: _52.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _52.QueryTotalSupplyRequest): _52.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _52.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_52.QueryTotalSupplyResponse>): _52.QueryTotalSupplyResponse;
                fromAmino(object: _52.QueryTotalSupplyResponseAmino): _52.QueryTotalSupplyResponse;
                toAmino(message: _52.QueryTotalSupplyResponse): _52.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _52.QueryTotalSupplyResponseAminoMsg): _52.QueryTotalSupplyResponse;
                toAminoMsg(message: _52.QueryTotalSupplyResponse): _52.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _52.QueryTotalSupplyResponseProtoMsg): _52.QueryTotalSupplyResponse;
                toProto(message: _52.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _52.QueryTotalSupplyResponse): _52.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _52.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySupplyOfRequest;
                fromPartial(object: Partial<_52.QuerySupplyOfRequest>): _52.QuerySupplyOfRequest;
                fromAmino(object: _52.QuerySupplyOfRequestAmino): _52.QuerySupplyOfRequest;
                toAmino(message: _52.QuerySupplyOfRequest): _52.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _52.QuerySupplyOfRequestAminoMsg): _52.QuerySupplyOfRequest;
                toAminoMsg(message: _52.QuerySupplyOfRequest): _52.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _52.QuerySupplyOfRequestProtoMsg): _52.QuerySupplyOfRequest;
                toProto(message: _52.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _52.QuerySupplyOfRequest): _52.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _52.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySupplyOfResponse;
                fromPartial(object: Partial<_52.QuerySupplyOfResponse>): _52.QuerySupplyOfResponse;
                fromAmino(object: _52.QuerySupplyOfResponseAmino): _52.QuerySupplyOfResponse;
                toAmino(message: _52.QuerySupplyOfResponse): _52.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _52.QuerySupplyOfResponseAminoMsg): _52.QuerySupplyOfResponse;
                toAminoMsg(message: _52.QuerySupplyOfResponse): _52.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _52.QuerySupplyOfResponseProtoMsg): _52.QuerySupplyOfResponse;
                toProto(message: _52.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _52.QuerySupplyOfResponse): _52.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _52.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
                fromAmino(_: _52.QueryParamsRequestAmino): _52.QueryParamsRequest;
                toAmino(_: _52.QueryParamsRequest): _52.QueryParamsRequestAmino;
                fromAminoMsg(object: _52.QueryParamsRequestAminoMsg): _52.QueryParamsRequest;
                toAminoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryParamsRequestProtoMsg): _52.QueryParamsRequest;
                toProto(message: _52.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _52.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
                fromAmino(object: _52.QueryParamsResponseAmino): _52.QueryParamsResponse;
                toAmino(message: _52.QueryParamsResponse): _52.QueryParamsResponseAmino;
                fromAminoMsg(object: _52.QueryParamsResponseAminoMsg): _52.QueryParamsResponse;
                toAminoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryParamsResponseProtoMsg): _52.QueryParamsResponse;
                toProto(message: _52.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _52.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_52.QueryDenomsMetadataRequest>): _52.QueryDenomsMetadataRequest;
                fromAmino(object: _52.QueryDenomsMetadataRequestAmino): _52.QueryDenomsMetadataRequest;
                toAmino(message: _52.QueryDenomsMetadataRequest): _52.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _52.QueryDenomsMetadataRequestAminoMsg): _52.QueryDenomsMetadataRequest;
                toAminoMsg(message: _52.QueryDenomsMetadataRequest): _52.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _52.QueryDenomsMetadataRequestProtoMsg): _52.QueryDenomsMetadataRequest;
                toProto(message: _52.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _52.QueryDenomsMetadataRequest): _52.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _52.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_52.QueryDenomsMetadataResponse>): _52.QueryDenomsMetadataResponse;
                fromAmino(object: _52.QueryDenomsMetadataResponseAmino): _52.QueryDenomsMetadataResponse;
                toAmino(message: _52.QueryDenomsMetadataResponse): _52.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _52.QueryDenomsMetadataResponseAminoMsg): _52.QueryDenomsMetadataResponse;
                toAminoMsg(message: _52.QueryDenomsMetadataResponse): _52.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _52.QueryDenomsMetadataResponseProtoMsg): _52.QueryDenomsMetadataResponse;
                toProto(message: _52.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _52.QueryDenomsMetadataResponse): _52.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _52.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_52.QueryDenomMetadataRequest>): _52.QueryDenomMetadataRequest;
                fromAmino(object: _52.QueryDenomMetadataRequestAmino): _52.QueryDenomMetadataRequest;
                toAmino(message: _52.QueryDenomMetadataRequest): _52.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _52.QueryDenomMetadataRequestAminoMsg): _52.QueryDenomMetadataRequest;
                toAminoMsg(message: _52.QueryDenomMetadataRequest): _52.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _52.QueryDenomMetadataRequestProtoMsg): _52.QueryDenomMetadataRequest;
                toProto(message: _52.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _52.QueryDenomMetadataRequest): _52.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _52.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_52.QueryDenomMetadataResponse>): _52.QueryDenomMetadataResponse;
                fromAmino(object: _52.QueryDenomMetadataResponseAmino): _52.QueryDenomMetadataResponse;
                toAmino(message: _52.QueryDenomMetadataResponse): _52.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _52.QueryDenomMetadataResponseAminoMsg): _52.QueryDenomMetadataResponse;
                toAminoMsg(message: _52.QueryDenomMetadataResponse): _52.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _52.QueryDenomMetadataResponseProtoMsg): _52.QueryDenomMetadataResponse;
                toProto(message: _52.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _52.QueryDenomMetadataResponse): _52.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _52.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_52.QueryDenomOwnersRequest>): _52.QueryDenomOwnersRequest;
                fromAmino(object: _52.QueryDenomOwnersRequestAmino): _52.QueryDenomOwnersRequest;
                toAmino(message: _52.QueryDenomOwnersRequest): _52.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _52.QueryDenomOwnersRequestAminoMsg): _52.QueryDenomOwnersRequest;
                toAminoMsg(message: _52.QueryDenomOwnersRequest): _52.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _52.QueryDenomOwnersRequestProtoMsg): _52.QueryDenomOwnersRequest;
                toProto(message: _52.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _52.QueryDenomOwnersRequest): _52.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _52.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DenomOwner;
                fromPartial(object: Partial<_52.DenomOwner>): _52.DenomOwner;
                fromAmino(object: _52.DenomOwnerAmino): _52.DenomOwner;
                toAmino(message: _52.DenomOwner): _52.DenomOwnerAmino;
                fromAminoMsg(object: _52.DenomOwnerAminoMsg): _52.DenomOwner;
                toAminoMsg(message: _52.DenomOwner): _52.DenomOwnerAminoMsg;
                fromProtoMsg(message: _52.DenomOwnerProtoMsg): _52.DenomOwner;
                toProto(message: _52.DenomOwner): Uint8Array;
                toProtoMsg(message: _52.DenomOwner): _52.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _52.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_52.QueryDenomOwnersResponse>): _52.QueryDenomOwnersResponse;
                fromAmino(object: _52.QueryDenomOwnersResponseAmino): _52.QueryDenomOwnersResponse;
                toAmino(message: _52.QueryDenomOwnersResponse): _52.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _52.QueryDenomOwnersResponseAminoMsg): _52.QueryDenomOwnersResponse;
                toAminoMsg(message: _52.QueryDenomOwnersResponse): _52.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _52.QueryDenomOwnersResponseProtoMsg): _52.QueryDenomOwnersResponse;
                toProto(message: _52.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _52.QueryDenomOwnersResponse): _52.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _52.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySendEnabledRequest;
                fromPartial(object: Partial<_52.QuerySendEnabledRequest>): _52.QuerySendEnabledRequest;
                fromAmino(object: _52.QuerySendEnabledRequestAmino): _52.QuerySendEnabledRequest;
                toAmino(message: _52.QuerySendEnabledRequest): _52.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _52.QuerySendEnabledRequestAminoMsg): _52.QuerySendEnabledRequest;
                toAminoMsg(message: _52.QuerySendEnabledRequest): _52.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _52.QuerySendEnabledRequestProtoMsg): _52.QuerySendEnabledRequest;
                toProto(message: _52.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _52.QuerySendEnabledRequest): _52.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _52.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QuerySendEnabledResponse;
                fromPartial(object: Partial<_52.QuerySendEnabledResponse>): _52.QuerySendEnabledResponse;
                fromAmino(object: _52.QuerySendEnabledResponseAmino): _52.QuerySendEnabledResponse;
                toAmino(message: _52.QuerySendEnabledResponse): _52.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _52.QuerySendEnabledResponseAminoMsg): _52.QuerySendEnabledResponse;
                toAminoMsg(message: _52.QuerySendEnabledResponse): _52.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _52.QuerySendEnabledResponseProtoMsg): _52.QuerySendEnabledResponse;
                toProto(message: _52.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _52.QuerySendEnabledResponse): _52.QuerySendEnabledResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _51.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Balance;
                fromPartial(object: Partial<_51.Balance>): _51.Balance;
                fromAmino(object: _51.BalanceAmino): _51.Balance;
                toAmino(message: _51.Balance): _51.BalanceAmino;
                fromAminoMsg(object: _51.BalanceAminoMsg): _51.Balance;
                toAminoMsg(message: _51.Balance): _51.BalanceAminoMsg;
                fromProtoMsg(message: _51.BalanceProtoMsg): _51.Balance;
                toProto(message: _51.Balance): Uint8Array;
                toProtoMsg(message: _51.Balance): _51.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _50.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
                fromAmino(object: _50.ParamsAmino): _50.Params;
                toAmino(message: _50.Params): _50.ParamsAmino;
                fromAminoMsg(object: _50.ParamsAminoMsg): _50.Params;
                toAminoMsg(message: _50.Params): _50.ParamsAminoMsg;
                fromProtoMsg(message: _50.ParamsProtoMsg): _50.Params;
                toProto(message: _50.Params): Uint8Array;
                toProtoMsg(message: _50.Params): _50.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _50.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.SendEnabled;
                fromPartial(object: Partial<_50.SendEnabled>): _50.SendEnabled;
                fromAmino(object: _50.SendEnabledAmino): _50.SendEnabled;
                toAmino(message: _50.SendEnabled): _50.SendEnabledAmino;
                fromAminoMsg(object: _50.SendEnabledAminoMsg): _50.SendEnabled;
                toAminoMsg(message: _50.SendEnabled): _50.SendEnabledAminoMsg;
                fromProtoMsg(message: _50.SendEnabledProtoMsg): _50.SendEnabled;
                toProto(message: _50.SendEnabled): Uint8Array;
                toProtoMsg(message: _50.SendEnabled): _50.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _50.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Input;
                fromPartial(object: Partial<_50.Input>): _50.Input;
                fromAmino(object: _50.InputAmino): _50.Input;
                toAmino(message: _50.Input): _50.InputAmino;
                fromAminoMsg(object: _50.InputAminoMsg): _50.Input;
                toAminoMsg(message: _50.Input): _50.InputAminoMsg;
                fromProtoMsg(message: _50.InputProtoMsg): _50.Input;
                toProto(message: _50.Input): Uint8Array;
                toProtoMsg(message: _50.Input): _50.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _50.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Output;
                fromPartial(object: Partial<_50.Output>): _50.Output;
                fromAmino(object: _50.OutputAmino): _50.Output;
                toAmino(message: _50.Output): _50.OutputAmino;
                fromAminoMsg(object: _50.OutputAminoMsg): _50.Output;
                toAminoMsg(message: _50.Output): _50.OutputAminoMsg;
                fromProtoMsg(message: _50.OutputProtoMsg): _50.Output;
                toProto(message: _50.Output): Uint8Array;
                toProtoMsg(message: _50.Output): _50.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _50.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Supply;
                fromPartial(object: Partial<_50.Supply>): _50.Supply;
                fromAmino(object: _50.SupplyAmino): _50.Supply;
                toAmino(message: _50.Supply): _50.SupplyAmino;
                fromAminoMsg(object: _50.SupplyAminoMsg): _50.Supply;
                toAminoMsg(message: _50.Supply): _50.SupplyAminoMsg;
                fromProtoMsg(message: _50.SupplyProtoMsg): _50.Supply;
                toProto(message: _50.Supply): Uint8Array;
                toProtoMsg(message: _50.Supply): _50.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _50.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.DenomUnit;
                fromPartial(object: Partial<_50.DenomUnit>): _50.DenomUnit;
                fromAmino(object: _50.DenomUnitAmino): _50.DenomUnit;
                toAmino(message: _50.DenomUnit): _50.DenomUnitAmino;
                fromAminoMsg(object: _50.DenomUnitAminoMsg): _50.DenomUnit;
                toAminoMsg(message: _50.DenomUnit): _50.DenomUnitAminoMsg;
                fromProtoMsg(message: _50.DenomUnitProtoMsg): _50.DenomUnit;
                toProto(message: _50.DenomUnit): Uint8Array;
                toProtoMsg(message: _50.DenomUnit): _50.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _50.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Metadata;
                fromPartial(object: Partial<_50.Metadata>): _50.Metadata;
                fromAmino(object: _50.MetadataAmino): _50.Metadata;
                toAmino(message: _50.Metadata): _50.MetadataAmino;
                fromAminoMsg(object: _50.MetadataAminoMsg): _50.Metadata;
                toAminoMsg(message: _50.Metadata): _50.MetadataAminoMsg;
                fromProtoMsg(message: _50.MetadataProtoMsg): _50.Metadata;
                toProto(message: _50.Metadata): Uint8Array;
                toProtoMsg(message: _50.Metadata): _50.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _49.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.SendAuthorization;
                fromPartial(object: Partial<_49.SendAuthorization>): _49.SendAuthorization;
                fromAmino(object: _49.SendAuthorizationAmino): _49.SendAuthorization;
                toAmino(message: _49.SendAuthorization): _49.SendAuthorizationAmino;
                fromAminoMsg(object: _49.SendAuthorizationAminoMsg): _49.SendAuthorization;
                toAminoMsg(message: _49.SendAuthorization): _49.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _49.SendAuthorizationProtoMsg): _49.SendAuthorization;
                toProto(message: _49.SendAuthorization): Uint8Array;
                toProtoMsg(message: _49.SendAuthorization): _49.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _54.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.TxResponse;
                    fromPartial(object: Partial<_54.TxResponse>): _54.TxResponse;
                    fromAmino(object: _54.TxResponseAmino): _54.TxResponse;
                    toAmino(message: _54.TxResponse): _54.TxResponseAmino;
                    fromAminoMsg(object: _54.TxResponseAminoMsg): _54.TxResponse;
                    toAminoMsg(message: _54.TxResponse): _54.TxResponseAminoMsg;
                    fromProtoMsg(message: _54.TxResponseProtoMsg): _54.TxResponse;
                    toProto(message: _54.TxResponse): Uint8Array;
                    toProtoMsg(message: _54.TxResponse): _54.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _54.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.ABCIMessageLog;
                    fromPartial(object: Partial<_54.ABCIMessageLog>): _54.ABCIMessageLog;
                    fromAmino(object: _54.ABCIMessageLogAmino): _54.ABCIMessageLog;
                    toAmino(message: _54.ABCIMessageLog): _54.ABCIMessageLogAmino;
                    fromAminoMsg(object: _54.ABCIMessageLogAminoMsg): _54.ABCIMessageLog;
                    toAminoMsg(message: _54.ABCIMessageLog): _54.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _54.ABCIMessageLogProtoMsg): _54.ABCIMessageLog;
                    toProto(message: _54.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _54.ABCIMessageLog): _54.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _54.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.StringEvent;
                    fromPartial(object: Partial<_54.StringEvent>): _54.StringEvent;
                    fromAmino(object: _54.StringEventAmino): _54.StringEvent;
                    toAmino(message: _54.StringEvent): _54.StringEventAmino;
                    fromAminoMsg(object: _54.StringEventAminoMsg): _54.StringEvent;
                    toAminoMsg(message: _54.StringEvent): _54.StringEventAminoMsg;
                    fromProtoMsg(message: _54.StringEventProtoMsg): _54.StringEvent;
                    toProto(message: _54.StringEvent): Uint8Array;
                    toProtoMsg(message: _54.StringEvent): _54.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _54.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Attribute;
                    fromPartial(object: Partial<_54.Attribute>): _54.Attribute;
                    fromAmino(object: _54.AttributeAmino): _54.Attribute;
                    toAmino(message: _54.Attribute): _54.AttributeAmino;
                    fromAminoMsg(object: _54.AttributeAminoMsg): _54.Attribute;
                    toAminoMsg(message: _54.Attribute): _54.AttributeAminoMsg;
                    fromProtoMsg(message: _54.AttributeProtoMsg): _54.Attribute;
                    toProto(message: _54.Attribute): Uint8Array;
                    toProtoMsg(message: _54.Attribute): _54.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _54.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.GasInfo;
                    fromPartial(object: Partial<_54.GasInfo>): _54.GasInfo;
                    fromAmino(object: _54.GasInfoAmino): _54.GasInfo;
                    toAmino(message: _54.GasInfo): _54.GasInfoAmino;
                    fromAminoMsg(object: _54.GasInfoAminoMsg): _54.GasInfo;
                    toAminoMsg(message: _54.GasInfo): _54.GasInfoAminoMsg;
                    fromProtoMsg(message: _54.GasInfoProtoMsg): _54.GasInfo;
                    toProto(message: _54.GasInfo): Uint8Array;
                    toProtoMsg(message: _54.GasInfo): _54.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _54.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.Result;
                    fromPartial(object: Partial<_54.Result>): _54.Result;
                    fromAmino(object: _54.ResultAmino): _54.Result;
                    toAmino(message: _54.Result): _54.ResultAmino;
                    fromAminoMsg(object: _54.ResultAminoMsg): _54.Result;
                    toAminoMsg(message: _54.Result): _54.ResultAminoMsg;
                    fromProtoMsg(message: _54.ResultProtoMsg): _54.Result;
                    toProto(message: _54.Result): Uint8Array;
                    toProtoMsg(message: _54.Result): _54.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _54.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.SimulationResponse;
                    fromPartial(object: Partial<_54.SimulationResponse>): _54.SimulationResponse;
                    fromAmino(object: _54.SimulationResponseAmino): _54.SimulationResponse;
                    toAmino(message: _54.SimulationResponse): _54.SimulationResponseAmino;
                    fromAminoMsg(object: _54.SimulationResponseAminoMsg): _54.SimulationResponse;
                    toAminoMsg(message: _54.SimulationResponse): _54.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _54.SimulationResponseProtoMsg): _54.SimulationResponse;
                    toProto(message: _54.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _54.SimulationResponse): _54.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _54.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.MsgData;
                    fromPartial(object: Partial<_54.MsgData>): _54.MsgData;
                    fromAmino(object: _54.MsgDataAmino): _54.MsgData;
                    toAmino(message: _54.MsgData): _54.MsgDataAmino;
                    fromAminoMsg(object: _54.MsgDataAminoMsg): _54.MsgData;
                    toAminoMsg(message: _54.MsgData): _54.MsgDataAminoMsg;
                    fromProtoMsg(message: _54.MsgDataProtoMsg): _54.MsgData;
                    toProto(message: _54.MsgData): Uint8Array;
                    toProtoMsg(message: _54.MsgData): _54.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _54.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.TxMsgData;
                    fromPartial(object: Partial<_54.TxMsgData>): _54.TxMsgData;
                    fromAmino(object: _54.TxMsgDataAmino): _54.TxMsgData;
                    toAmino(message: _54.TxMsgData): _54.TxMsgDataAmino;
                    fromAminoMsg(object: _54.TxMsgDataAminoMsg): _54.TxMsgData;
                    toAminoMsg(message: _54.TxMsgData): _54.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _54.TxMsgDataProtoMsg): _54.TxMsgData;
                    toProto(message: _54.TxMsgData): Uint8Array;
                    toProtoMsg(message: _54.TxMsgData): _54.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _54.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.SearchTxsResult;
                    fromPartial(object: Partial<_54.SearchTxsResult>): _54.SearchTxsResult;
                    fromAmino(object: _54.SearchTxsResultAmino): _54.SearchTxsResult;
                    toAmino(message: _54.SearchTxsResult): _54.SearchTxsResultAmino;
                    fromAminoMsg(object: _54.SearchTxsResultAminoMsg): _54.SearchTxsResult;
                    toAminoMsg(message: _54.SearchTxsResult): _54.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _54.SearchTxsResultProtoMsg): _54.SearchTxsResult;
                    toProto(message: _54.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _54.SearchTxsResult): _54.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _55.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Pairs;
                    fromPartial(object: Partial<_55.Pairs>): _55.Pairs;
                    fromAmino(object: _55.PairsAmino): _55.Pairs;
                    toAmino(message: _55.Pairs): _55.PairsAmino;
                    fromAminoMsg(object: _55.PairsAminoMsg): _55.Pairs;
                    toAminoMsg(message: _55.Pairs): _55.PairsAminoMsg;
                    fromProtoMsg(message: _55.PairsProtoMsg): _55.Pairs;
                    toProto(message: _55.Pairs): Uint8Array;
                    toProtoMsg(message: _55.Pairs): _55.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _55.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _55.Pair;
                    fromPartial(object: Partial<_55.Pair>): _55.Pair;
                    fromAmino(object: _55.PairAmino): _55.Pair;
                    toAmino(message: _55.Pair): _55.PairAmino;
                    fromAminoMsg(object: _55.PairAminoMsg): _55.Pair;
                    toAminoMsg(message: _55.Pair): _55.PairAminoMsg;
                    fromProtoMsg(message: _55.PairProtoMsg): _55.Pair;
                    toProto(message: _55.Pair): Uint8Array;
                    toProtoMsg(message: _55.Pair): _55.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _280.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _56.ConfigRequest): Promise<_56.ConfigResponse>;
                };
                LCDQueryClient: typeof _259.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _56.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _56.ConfigRequest;
                    fromPartial(_: Partial<_56.ConfigRequest>): _56.ConfigRequest;
                    fromAmino(_: _56.ConfigRequestAmino): _56.ConfigRequest;
                    toAmino(_: _56.ConfigRequest): _56.ConfigRequestAmino;
                    fromAminoMsg(object: _56.ConfigRequestAminoMsg): _56.ConfigRequest;
                    toAminoMsg(message: _56.ConfigRequest): _56.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _56.ConfigRequestProtoMsg): _56.ConfigRequest;
                    toProto(message: _56.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _56.ConfigRequest): _56.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _56.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _56.ConfigResponse;
                    fromPartial(object: Partial<_56.ConfigResponse>): _56.ConfigResponse;
                    fromAmino(object: _56.ConfigResponseAmino): _56.ConfigResponse;
                    toAmino(message: _56.ConfigResponse): _56.ConfigResponseAmino;
                    fromAminoMsg(object: _56.ConfigResponseAminoMsg): _56.ConfigResponse;
                    toAminoMsg(message: _56.ConfigResponse): _56.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _56.ConfigResponseProtoMsg): _56.ConfigResponse;
                    toProto(message: _56.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _56.ConfigResponse): _56.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _57.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.PageRequest;
                    fromPartial(object: Partial<_57.PageRequest>): _57.PageRequest;
                    fromAmino(object: _57.PageRequestAmino): _57.PageRequest;
                    toAmino(message: _57.PageRequest): _57.PageRequestAmino;
                    fromAminoMsg(object: _57.PageRequestAminoMsg): _57.PageRequest;
                    toAminoMsg(message: _57.PageRequest): _57.PageRequestAminoMsg;
                    fromProtoMsg(message: _57.PageRequestProtoMsg): _57.PageRequest;
                    toProto(message: _57.PageRequest): Uint8Array;
                    toProtoMsg(message: _57.PageRequest): _57.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _57.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.PageResponse;
                    fromPartial(object: Partial<_57.PageResponse>): _57.PageResponse;
                    fromAmino(object: _57.PageResponseAmino): _57.PageResponse;
                    toAmino(message: _57.PageResponse): _57.PageResponseAmino;
                    fromAminoMsg(object: _57.PageResponseAminoMsg): _57.PageResponse;
                    toAminoMsg(message: _57.PageResponse): _57.PageResponseAminoMsg;
                    fromProtoMsg(message: _57.PageResponseProtoMsg): _57.PageResponse;
                    toProto(message: _57.PageResponse): Uint8Array;
                    toProtoMsg(message: _57.PageResponse): _57.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _58.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _58.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_58.ListAllInterfacesRequest>): _58.ListAllInterfacesRequest;
                    fromAmino(_: _58.ListAllInterfacesRequestAmino): _58.ListAllInterfacesRequest;
                    toAmino(_: _58.ListAllInterfacesRequest): _58.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _58.ListAllInterfacesRequestAminoMsg): _58.ListAllInterfacesRequest;
                    toAminoMsg(message: _58.ListAllInterfacesRequest): _58.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _58.ListAllInterfacesRequestProtoMsg): _58.ListAllInterfacesRequest;
                    toProto(message: _58.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _58.ListAllInterfacesRequest): _58.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _58.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_58.ListAllInterfacesResponse>): _58.ListAllInterfacesResponse;
                    fromAmino(object: _58.ListAllInterfacesResponseAmino): _58.ListAllInterfacesResponse;
                    toAmino(message: _58.ListAllInterfacesResponse): _58.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _58.ListAllInterfacesResponseAminoMsg): _58.ListAllInterfacesResponse;
                    toAminoMsg(message: _58.ListAllInterfacesResponse): _58.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _58.ListAllInterfacesResponseProtoMsg): _58.ListAllInterfacesResponse;
                    toProto(message: _58.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _58.ListAllInterfacesResponse): _58.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _58.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.ListImplementationsRequest;
                    fromPartial(object: Partial<_58.ListImplementationsRequest>): _58.ListImplementationsRequest;
                    fromAmino(object: _58.ListImplementationsRequestAmino): _58.ListImplementationsRequest;
                    toAmino(message: _58.ListImplementationsRequest): _58.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _58.ListImplementationsRequestAminoMsg): _58.ListImplementationsRequest;
                    toAminoMsg(message: _58.ListImplementationsRequest): _58.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _58.ListImplementationsRequestProtoMsg): _58.ListImplementationsRequest;
                    toProto(message: _58.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _58.ListImplementationsRequest): _58.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _58.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _58.ListImplementationsResponse;
                    fromPartial(object: Partial<_58.ListImplementationsResponse>): _58.ListImplementationsResponse;
                    fromAmino(object: _58.ListImplementationsResponseAmino): _58.ListImplementationsResponse;
                    toAmino(message: _58.ListImplementationsResponse): _58.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _58.ListImplementationsResponseAminoMsg): _58.ListImplementationsResponse;
                    toAminoMsg(message: _58.ListImplementationsResponse): _58.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _58.ListImplementationsResponseProtoMsg): _58.ListImplementationsResponse;
                    toProto(message: _58.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _58.ListImplementationsResponse): _58.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _59.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.AppDescriptor;
                    fromPartial(object: Partial<_59.AppDescriptor>): _59.AppDescriptor;
                    fromAmino(object: _59.AppDescriptorAmino): _59.AppDescriptor;
                    toAmino(message: _59.AppDescriptor): _59.AppDescriptorAmino;
                    fromAminoMsg(object: _59.AppDescriptorAminoMsg): _59.AppDescriptor;
                    toAminoMsg(message: _59.AppDescriptor): _59.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _59.AppDescriptorProtoMsg): _59.AppDescriptor;
                    toProto(message: _59.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _59.AppDescriptor): _59.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _59.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.TxDescriptor;
                    fromPartial(object: Partial<_59.TxDescriptor>): _59.TxDescriptor;
                    fromAmino(object: _59.TxDescriptorAmino): _59.TxDescriptor;
                    toAmino(message: _59.TxDescriptor): _59.TxDescriptorAmino;
                    fromAminoMsg(object: _59.TxDescriptorAminoMsg): _59.TxDescriptor;
                    toAminoMsg(message: _59.TxDescriptor): _59.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _59.TxDescriptorProtoMsg): _59.TxDescriptor;
                    toProto(message: _59.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _59.TxDescriptor): _59.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _59.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.AuthnDescriptor;
                    fromPartial(object: Partial<_59.AuthnDescriptor>): _59.AuthnDescriptor;
                    fromAmino(object: _59.AuthnDescriptorAmino): _59.AuthnDescriptor;
                    toAmino(message: _59.AuthnDescriptor): _59.AuthnDescriptorAmino;
                    fromAminoMsg(object: _59.AuthnDescriptorAminoMsg): _59.AuthnDescriptor;
                    toAminoMsg(message: _59.AuthnDescriptor): _59.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _59.AuthnDescriptorProtoMsg): _59.AuthnDescriptor;
                    toProto(message: _59.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _59.AuthnDescriptor): _59.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _59.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SigningModeDescriptor;
                    fromPartial(object: Partial<_59.SigningModeDescriptor>): _59.SigningModeDescriptor;
                    fromAmino(object: _59.SigningModeDescriptorAmino): _59.SigningModeDescriptor;
                    toAmino(message: _59.SigningModeDescriptor): _59.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _59.SigningModeDescriptorAminoMsg): _59.SigningModeDescriptor;
                    toAminoMsg(message: _59.SigningModeDescriptor): _59.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _59.SigningModeDescriptorProtoMsg): _59.SigningModeDescriptor;
                    toProto(message: _59.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _59.SigningModeDescriptor): _59.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _59.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.ChainDescriptor;
                    fromPartial(object: Partial<_59.ChainDescriptor>): _59.ChainDescriptor;
                    fromAmino(object: _59.ChainDescriptorAmino): _59.ChainDescriptor;
                    toAmino(message: _59.ChainDescriptor): _59.ChainDescriptorAmino;
                    fromAminoMsg(object: _59.ChainDescriptorAminoMsg): _59.ChainDescriptor;
                    toAminoMsg(message: _59.ChainDescriptor): _59.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _59.ChainDescriptorProtoMsg): _59.ChainDescriptor;
                    toProto(message: _59.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _59.ChainDescriptor): _59.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _59.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.CodecDescriptor;
                    fromPartial(object: Partial<_59.CodecDescriptor>): _59.CodecDescriptor;
                    fromAmino(object: _59.CodecDescriptorAmino): _59.CodecDescriptor;
                    toAmino(message: _59.CodecDescriptor): _59.CodecDescriptorAmino;
                    fromAminoMsg(object: _59.CodecDescriptorAminoMsg): _59.CodecDescriptor;
                    toAminoMsg(message: _59.CodecDescriptor): _59.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _59.CodecDescriptorProtoMsg): _59.CodecDescriptor;
                    toProto(message: _59.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _59.CodecDescriptor): _59.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _59.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.InterfaceDescriptor;
                    fromPartial(object: Partial<_59.InterfaceDescriptor>): _59.InterfaceDescriptor;
                    fromAmino(object: _59.InterfaceDescriptorAmino): _59.InterfaceDescriptor;
                    toAmino(message: _59.InterfaceDescriptor): _59.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _59.InterfaceDescriptorAminoMsg): _59.InterfaceDescriptor;
                    toAminoMsg(message: _59.InterfaceDescriptor): _59.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _59.InterfaceDescriptorProtoMsg): _59.InterfaceDescriptor;
                    toProto(message: _59.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _59.InterfaceDescriptor): _59.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _59.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_59.InterfaceImplementerDescriptor>): _59.InterfaceImplementerDescriptor;
                    fromAmino(object: _59.InterfaceImplementerDescriptorAmino): _59.InterfaceImplementerDescriptor;
                    toAmino(message: _59.InterfaceImplementerDescriptor): _59.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _59.InterfaceImplementerDescriptorAminoMsg): _59.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _59.InterfaceImplementerDescriptor): _59.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _59.InterfaceImplementerDescriptorProtoMsg): _59.InterfaceImplementerDescriptor;
                    toProto(message: _59.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _59.InterfaceImplementerDescriptor): _59.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _59.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_59.InterfaceAcceptingMessageDescriptor>): _59.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _59.InterfaceAcceptingMessageDescriptorAmino): _59.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _59.InterfaceAcceptingMessageDescriptor): _59.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _59.InterfaceAcceptingMessageDescriptorAminoMsg): _59.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _59.InterfaceAcceptingMessageDescriptor): _59.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _59.InterfaceAcceptingMessageDescriptorProtoMsg): _59.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _59.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _59.InterfaceAcceptingMessageDescriptor): _59.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _59.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.ConfigurationDescriptor;
                    fromPartial(object: Partial<_59.ConfigurationDescriptor>): _59.ConfigurationDescriptor;
                    fromAmino(object: _59.ConfigurationDescriptorAmino): _59.ConfigurationDescriptor;
                    toAmino(message: _59.ConfigurationDescriptor): _59.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _59.ConfigurationDescriptorAminoMsg): _59.ConfigurationDescriptor;
                    toAminoMsg(message: _59.ConfigurationDescriptor): _59.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _59.ConfigurationDescriptorProtoMsg): _59.ConfigurationDescriptor;
                    toProto(message: _59.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _59.ConfigurationDescriptor): _59.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _59.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.MsgDescriptor;
                    fromPartial(object: Partial<_59.MsgDescriptor>): _59.MsgDescriptor;
                    fromAmino(object: _59.MsgDescriptorAmino): _59.MsgDescriptor;
                    toAmino(message: _59.MsgDescriptor): _59.MsgDescriptorAmino;
                    fromAminoMsg(object: _59.MsgDescriptorAminoMsg): _59.MsgDescriptor;
                    toAminoMsg(message: _59.MsgDescriptor): _59.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _59.MsgDescriptorProtoMsg): _59.MsgDescriptor;
                    toProto(message: _59.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _59.MsgDescriptor): _59.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _59.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_59.GetAuthnDescriptorRequest>): _59.GetAuthnDescriptorRequest;
                    fromAmino(_: _59.GetAuthnDescriptorRequestAmino): _59.GetAuthnDescriptorRequest;
                    toAmino(_: _59.GetAuthnDescriptorRequest): _59.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _59.GetAuthnDescriptorRequestAminoMsg): _59.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _59.GetAuthnDescriptorRequest): _59.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _59.GetAuthnDescriptorRequestProtoMsg): _59.GetAuthnDescriptorRequest;
                    toProto(message: _59.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _59.GetAuthnDescriptorRequest): _59.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _59.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_59.GetAuthnDescriptorResponse>): _59.GetAuthnDescriptorResponse;
                    fromAmino(object: _59.GetAuthnDescriptorResponseAmino): _59.GetAuthnDescriptorResponse;
                    toAmino(message: _59.GetAuthnDescriptorResponse): _59.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _59.GetAuthnDescriptorResponseAminoMsg): _59.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _59.GetAuthnDescriptorResponse): _59.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _59.GetAuthnDescriptorResponseProtoMsg): _59.GetAuthnDescriptorResponse;
                    toProto(message: _59.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _59.GetAuthnDescriptorResponse): _59.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _59.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_59.GetChainDescriptorRequest>): _59.GetChainDescriptorRequest;
                    fromAmino(_: _59.GetChainDescriptorRequestAmino): _59.GetChainDescriptorRequest;
                    toAmino(_: _59.GetChainDescriptorRequest): _59.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _59.GetChainDescriptorRequestAminoMsg): _59.GetChainDescriptorRequest;
                    toAminoMsg(message: _59.GetChainDescriptorRequest): _59.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _59.GetChainDescriptorRequestProtoMsg): _59.GetChainDescriptorRequest;
                    toProto(message: _59.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _59.GetChainDescriptorRequest): _59.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _59.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_59.GetChainDescriptorResponse>): _59.GetChainDescriptorResponse;
                    fromAmino(object: _59.GetChainDescriptorResponseAmino): _59.GetChainDescriptorResponse;
                    toAmino(message: _59.GetChainDescriptorResponse): _59.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _59.GetChainDescriptorResponseAminoMsg): _59.GetChainDescriptorResponse;
                    toAminoMsg(message: _59.GetChainDescriptorResponse): _59.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _59.GetChainDescriptorResponseProtoMsg): _59.GetChainDescriptorResponse;
                    toProto(message: _59.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _59.GetChainDescriptorResponse): _59.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _59.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_59.GetCodecDescriptorRequest>): _59.GetCodecDescriptorRequest;
                    fromAmino(_: _59.GetCodecDescriptorRequestAmino): _59.GetCodecDescriptorRequest;
                    toAmino(_: _59.GetCodecDescriptorRequest): _59.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _59.GetCodecDescriptorRequestAminoMsg): _59.GetCodecDescriptorRequest;
                    toAminoMsg(message: _59.GetCodecDescriptorRequest): _59.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _59.GetCodecDescriptorRequestProtoMsg): _59.GetCodecDescriptorRequest;
                    toProto(message: _59.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _59.GetCodecDescriptorRequest): _59.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _59.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_59.GetCodecDescriptorResponse>): _59.GetCodecDescriptorResponse;
                    fromAmino(object: _59.GetCodecDescriptorResponseAmino): _59.GetCodecDescriptorResponse;
                    toAmino(message: _59.GetCodecDescriptorResponse): _59.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _59.GetCodecDescriptorResponseAminoMsg): _59.GetCodecDescriptorResponse;
                    toAminoMsg(message: _59.GetCodecDescriptorResponse): _59.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _59.GetCodecDescriptorResponseProtoMsg): _59.GetCodecDescriptorResponse;
                    toProto(message: _59.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _59.GetCodecDescriptorResponse): _59.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _59.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_59.GetConfigurationDescriptorRequest>): _59.GetConfigurationDescriptorRequest;
                    fromAmino(_: _59.GetConfigurationDescriptorRequestAmino): _59.GetConfigurationDescriptorRequest;
                    toAmino(_: _59.GetConfigurationDescriptorRequest): _59.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _59.GetConfigurationDescriptorRequestAminoMsg): _59.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _59.GetConfigurationDescriptorRequest): _59.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _59.GetConfigurationDescriptorRequestProtoMsg): _59.GetConfigurationDescriptorRequest;
                    toProto(message: _59.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _59.GetConfigurationDescriptorRequest): _59.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _59.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_59.GetConfigurationDescriptorResponse>): _59.GetConfigurationDescriptorResponse;
                    fromAmino(object: _59.GetConfigurationDescriptorResponseAmino): _59.GetConfigurationDescriptorResponse;
                    toAmino(message: _59.GetConfigurationDescriptorResponse): _59.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _59.GetConfigurationDescriptorResponseAminoMsg): _59.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _59.GetConfigurationDescriptorResponse): _59.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _59.GetConfigurationDescriptorResponseProtoMsg): _59.GetConfigurationDescriptorResponse;
                    toProto(message: _59.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _59.GetConfigurationDescriptorResponse): _59.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _59.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_59.GetQueryServicesDescriptorRequest>): _59.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _59.GetQueryServicesDescriptorRequestAmino): _59.GetQueryServicesDescriptorRequest;
                    toAmino(_: _59.GetQueryServicesDescriptorRequest): _59.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _59.GetQueryServicesDescriptorRequestAminoMsg): _59.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _59.GetQueryServicesDescriptorRequest): _59.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _59.GetQueryServicesDescriptorRequestProtoMsg): _59.GetQueryServicesDescriptorRequest;
                    toProto(message: _59.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _59.GetQueryServicesDescriptorRequest): _59.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _59.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_59.GetQueryServicesDescriptorResponse>): _59.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _59.GetQueryServicesDescriptorResponseAmino): _59.GetQueryServicesDescriptorResponse;
                    toAmino(message: _59.GetQueryServicesDescriptorResponse): _59.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _59.GetQueryServicesDescriptorResponseAminoMsg): _59.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _59.GetQueryServicesDescriptorResponse): _59.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _59.GetQueryServicesDescriptorResponseProtoMsg): _59.GetQueryServicesDescriptorResponse;
                    toProto(message: _59.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _59.GetQueryServicesDescriptorResponse): _59.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _59.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _59.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_59.GetTxDescriptorRequest>): _59.GetTxDescriptorRequest;
                    fromAmino(_: _59.GetTxDescriptorRequestAmino): _59.GetTxDescriptorRequest;
                    toAmino(_: _59.GetTxDescriptorRequest): _59.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _59.GetTxDescriptorRequestAminoMsg): _59.GetTxDescriptorRequest;
                    toAminoMsg(message: _59.GetTxDescriptorRequest): _59.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _59.GetTxDescriptorRequestProtoMsg): _59.GetTxDescriptorRequest;
                    toProto(message: _59.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _59.GetTxDescriptorRequest): _59.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _59.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_59.GetTxDescriptorResponse>): _59.GetTxDescriptorResponse;
                    fromAmino(object: _59.GetTxDescriptorResponseAmino): _59.GetTxDescriptorResponse;
                    toAmino(message: _59.GetTxDescriptorResponse): _59.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _59.GetTxDescriptorResponseAminoMsg): _59.GetTxDescriptorResponse;
                    toAminoMsg(message: _59.GetTxDescriptorResponse): _59.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _59.GetTxDescriptorResponseProtoMsg): _59.GetTxDescriptorResponse;
                    toProto(message: _59.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _59.GetTxDescriptorResponse): _59.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _59.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.QueryServicesDescriptor;
                    fromPartial(object: Partial<_59.QueryServicesDescriptor>): _59.QueryServicesDescriptor;
                    fromAmino(object: _59.QueryServicesDescriptorAmino): _59.QueryServicesDescriptor;
                    toAmino(message: _59.QueryServicesDescriptor): _59.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _59.QueryServicesDescriptorAminoMsg): _59.QueryServicesDescriptor;
                    toAminoMsg(message: _59.QueryServicesDescriptor): _59.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _59.QueryServicesDescriptorProtoMsg): _59.QueryServicesDescriptor;
                    toProto(message: _59.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _59.QueryServicesDescriptor): _59.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _59.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.QueryServiceDescriptor;
                    fromPartial(object: Partial<_59.QueryServiceDescriptor>): _59.QueryServiceDescriptor;
                    fromAmino(object: _59.QueryServiceDescriptorAmino): _59.QueryServiceDescriptor;
                    toAmino(message: _59.QueryServiceDescriptor): _59.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _59.QueryServiceDescriptorAminoMsg): _59.QueryServiceDescriptor;
                    toAminoMsg(message: _59.QueryServiceDescriptor): _59.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _59.QueryServiceDescriptorProtoMsg): _59.QueryServiceDescriptor;
                    toProto(message: _59.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _59.QueryServiceDescriptor): _59.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _59.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.QueryMethodDescriptor;
                    fromPartial(object: Partial<_59.QueryMethodDescriptor>): _59.QueryMethodDescriptor;
                    fromAmino(object: _59.QueryMethodDescriptorAmino): _59.QueryMethodDescriptor;
                    toAmino(message: _59.QueryMethodDescriptor): _59.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _59.QueryMethodDescriptorAminoMsg): _59.QueryMethodDescriptor;
                    toAminoMsg(message: _59.QueryMethodDescriptor): _59.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _59.QueryMethodDescriptorProtoMsg): _59.QueryMethodDescriptor;
                    toProto(message: _59.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _59.QueryMethodDescriptor): _59.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _60.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Snapshot;
                    fromPartial(object: Partial<_60.Snapshot>): _60.Snapshot;
                    fromAmino(object: _60.SnapshotAmino): _60.Snapshot;
                    toAmino(message: _60.Snapshot): _60.SnapshotAmino;
                    fromAminoMsg(object: _60.SnapshotAminoMsg): _60.Snapshot;
                    toAminoMsg(message: _60.Snapshot): _60.SnapshotAminoMsg;
                    fromProtoMsg(message: _60.SnapshotProtoMsg): _60.Snapshot;
                    toProto(message: _60.Snapshot): Uint8Array;
                    toProtoMsg(message: _60.Snapshot): _60.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _60.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Metadata;
                    fromPartial(object: Partial<_60.Metadata>): _60.Metadata;
                    fromAmino(object: _60.MetadataAmino): _60.Metadata;
                    toAmino(message: _60.Metadata): _60.MetadataAmino;
                    fromAminoMsg(object: _60.MetadataAminoMsg): _60.Metadata;
                    toAminoMsg(message: _60.Metadata): _60.MetadataAminoMsg;
                    fromProtoMsg(message: _60.MetadataProtoMsg): _60.Metadata;
                    toProto(message: _60.Metadata): Uint8Array;
                    toProtoMsg(message: _60.Metadata): _60.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _60.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SnapshotItem;
                    fromPartial(object: Partial<_60.SnapshotItem>): _60.SnapshotItem;
                    fromAmino(object: _60.SnapshotItemAmino): _60.SnapshotItem;
                    toAmino(message: _60.SnapshotItem): _60.SnapshotItemAmino;
                    fromAminoMsg(object: _60.SnapshotItemAminoMsg): _60.SnapshotItem;
                    toAminoMsg(message: _60.SnapshotItem): _60.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _60.SnapshotItemProtoMsg): _60.SnapshotItem;
                    toProto(message: _60.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _60.SnapshotItem): _60.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _60.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SnapshotStoreItem;
                    fromPartial(object: Partial<_60.SnapshotStoreItem>): _60.SnapshotStoreItem;
                    fromAmino(object: _60.SnapshotStoreItemAmino): _60.SnapshotStoreItem;
                    toAmino(message: _60.SnapshotStoreItem): _60.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _60.SnapshotStoreItemAminoMsg): _60.SnapshotStoreItem;
                    toAminoMsg(message: _60.SnapshotStoreItem): _60.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _60.SnapshotStoreItemProtoMsg): _60.SnapshotStoreItem;
                    toProto(message: _60.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _60.SnapshotStoreItem): _60.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _60.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SnapshotIAVLItem;
                    fromPartial(object: Partial<_60.SnapshotIAVLItem>): _60.SnapshotIAVLItem;
                    fromAmino(object: _60.SnapshotIAVLItemAmino): _60.SnapshotIAVLItem;
                    toAmino(message: _60.SnapshotIAVLItem): _60.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _60.SnapshotIAVLItemAminoMsg): _60.SnapshotIAVLItem;
                    toAminoMsg(message: _60.SnapshotIAVLItem): _60.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _60.SnapshotIAVLItemProtoMsg): _60.SnapshotIAVLItem;
                    toProto(message: _60.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _60.SnapshotIAVLItem): _60.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _60.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_60.SnapshotExtensionMeta>): _60.SnapshotExtensionMeta;
                    fromAmino(object: _60.SnapshotExtensionMetaAmino): _60.SnapshotExtensionMeta;
                    toAmino(message: _60.SnapshotExtensionMeta): _60.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _60.SnapshotExtensionMetaAminoMsg): _60.SnapshotExtensionMeta;
                    toAminoMsg(message: _60.SnapshotExtensionMeta): _60.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _60.SnapshotExtensionMetaProtoMsg): _60.SnapshotExtensionMeta;
                    toProto(message: _60.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _60.SnapshotExtensionMeta): _60.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _60.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_60.SnapshotExtensionPayload>): _60.SnapshotExtensionPayload;
                    fromAmino(object: _60.SnapshotExtensionPayloadAmino): _60.SnapshotExtensionPayload;
                    toAmino(message: _60.SnapshotExtensionPayload): _60.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _60.SnapshotExtensionPayloadAminoMsg): _60.SnapshotExtensionPayload;
                    toAminoMsg(message: _60.SnapshotExtensionPayload): _60.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _60.SnapshotExtensionPayloadProtoMsg): _60.SnapshotExtensionPayload;
                    toProto(message: _60.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _60.SnapshotExtensionPayload): _60.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _60.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SnapshotKVItem;
                    fromPartial(object: Partial<_60.SnapshotKVItem>): _60.SnapshotKVItem;
                    fromAmino(object: _60.SnapshotKVItemAmino): _60.SnapshotKVItem;
                    toAmino(message: _60.SnapshotKVItem): _60.SnapshotKVItemAmino;
                    fromAminoMsg(object: _60.SnapshotKVItemAminoMsg): _60.SnapshotKVItem;
                    toAminoMsg(message: _60.SnapshotKVItem): _60.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _60.SnapshotKVItemProtoMsg): _60.SnapshotKVItem;
                    toProto(message: _60.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _60.SnapshotKVItem): _60.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _60.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.SnapshotSchema;
                    fromPartial(object: Partial<_60.SnapshotSchema>): _60.SnapshotSchema;
                    fromAmino(object: _60.SnapshotSchemaAmino): _60.SnapshotSchema;
                    toAmino(message: _60.SnapshotSchema): _60.SnapshotSchemaAmino;
                    fromAminoMsg(object: _60.SnapshotSchemaAminoMsg): _60.SnapshotSchema;
                    toAminoMsg(message: _60.SnapshotSchema): _60.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _60.SnapshotSchemaProtoMsg): _60.SnapshotSchema;
                    toProto(message: _60.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _60.SnapshotSchema): _60.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _62.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.StoreKVPair;
                    fromPartial(object: Partial<_62.StoreKVPair>): _62.StoreKVPair;
                    fromAmino(object: _62.StoreKVPairAmino): _62.StoreKVPair;
                    toAmino(message: _62.StoreKVPair): _62.StoreKVPairAmino;
                    fromAminoMsg(object: _62.StoreKVPairAminoMsg): _62.StoreKVPair;
                    toAminoMsg(message: _62.StoreKVPair): _62.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _62.StoreKVPairProtoMsg): _62.StoreKVPair;
                    toProto(message: _62.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _62.StoreKVPair): _62.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _62.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.BlockMetadata;
                    fromPartial(object: Partial<_62.BlockMetadata>): _62.BlockMetadata;
                    fromAmino(object: _62.BlockMetadataAmino): _62.BlockMetadata;
                    toAmino(message: _62.BlockMetadata): _62.BlockMetadataAmino;
                    fromAminoMsg(object: _62.BlockMetadataAminoMsg): _62.BlockMetadata;
                    toAminoMsg(message: _62.BlockMetadata): _62.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _62.BlockMetadataProtoMsg): _62.BlockMetadata;
                    toProto(message: _62.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _62.BlockMetadata): _62.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _62.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_62.BlockMetadata_DeliverTx>): _62.BlockMetadata_DeliverTx;
                    fromAmino(object: _62.BlockMetadata_DeliverTxAmino): _62.BlockMetadata_DeliverTx;
                    toAmino(message: _62.BlockMetadata_DeliverTx): _62.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _62.BlockMetadata_DeliverTxAminoMsg): _62.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _62.BlockMetadata_DeliverTx): _62.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _62.BlockMetadata_DeliverTxProtoMsg): _62.BlockMetadata_DeliverTx;
                    toProto(message: _62.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _62.BlockMetadata_DeliverTx): _62.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _61.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.CommitInfo;
                    fromPartial(object: Partial<_61.CommitInfo>): _61.CommitInfo;
                    fromAmino(object: _61.CommitInfoAmino): _61.CommitInfo;
                    toAmino(message: _61.CommitInfo): _61.CommitInfoAmino;
                    fromAminoMsg(object: _61.CommitInfoAminoMsg): _61.CommitInfo;
                    toAminoMsg(message: _61.CommitInfo): _61.CommitInfoAminoMsg;
                    fromProtoMsg(message: _61.CommitInfoProtoMsg): _61.CommitInfo;
                    toProto(message: _61.CommitInfo): Uint8Array;
                    toProtoMsg(message: _61.CommitInfo): _61.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _61.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.StoreInfo;
                    fromPartial(object: Partial<_61.StoreInfo>): _61.StoreInfo;
                    fromAmino(object: _61.StoreInfoAmino): _61.StoreInfo;
                    toAmino(message: _61.StoreInfo): _61.StoreInfoAmino;
                    fromAminoMsg(object: _61.StoreInfoAminoMsg): _61.StoreInfo;
                    toAminoMsg(message: _61.StoreInfo): _61.StoreInfoAminoMsg;
                    fromProtoMsg(message: _61.StoreInfoProtoMsg): _61.StoreInfo;
                    toProto(message: _61.StoreInfo): Uint8Array;
                    toProtoMsg(message: _61.StoreInfo): _61.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _61.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.CommitID;
                    fromPartial(object: Partial<_61.CommitID>): _61.CommitID;
                    fromAmino(object: _61.CommitIDAmino): _61.CommitID;
                    toAmino(message: _61.CommitID): _61.CommitIDAmino;
                    fromAminoMsg(object: _61.CommitIDAminoMsg): _61.CommitID;
                    toAminoMsg(message: _61.CommitID): _61.CommitIDAminoMsg;
                    fromProtoMsg(message: _61.CommitIDProtoMsg): _61.CommitID;
                    toProto(message: _61.CommitID): Uint8Array;
                    toProtoMsg(message: _61.CommitID): _61.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _281.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _63.GetNodeInfoRequest): Promise<_63.GetNodeInfoResponse>;
                    getSyncing(request?: _63.GetSyncingRequest): Promise<_63.GetSyncingResponse>;
                    getLatestBlock(request?: _63.GetLatestBlockRequest): Promise<_63.GetLatestBlockResponse>;
                    getBlockByHeight(request: _63.GetBlockByHeightRequest): Promise<_63.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _63.GetLatestValidatorSetRequest): Promise<_63.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _63.GetValidatorSetByHeightRequest): Promise<_63.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _63.ABCIQueryRequest): Promise<_63.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _260.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _64.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.Block;
                    fromPartial(object: Partial<_64.Block>): _64.Block;
                    fromAmino(object: _64.BlockAmino): _64.Block;
                    toAmino(message: _64.Block): _64.BlockAmino;
                    fromAminoMsg(object: _64.BlockAminoMsg): _64.Block;
                    toAminoMsg(message: _64.Block): _64.BlockAminoMsg;
                    fromProtoMsg(message: _64.BlockProtoMsg): _64.Block;
                    toProto(message: _64.Block): Uint8Array;
                    toProtoMsg(message: _64.Block): _64.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _64.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.Header;
                    fromPartial(object: Partial<_64.Header>): _64.Header;
                    fromAmino(object: _64.HeaderAmino): _64.Header;
                    toAmino(message: _64.Header): _64.HeaderAmino;
                    fromAminoMsg(object: _64.HeaderAminoMsg): _64.Header;
                    toAminoMsg(message: _64.Header): _64.HeaderAminoMsg;
                    fromProtoMsg(message: _64.HeaderProtoMsg): _64.Header;
                    toProto(message: _64.Header): Uint8Array;
                    toProtoMsg(message: _64.Header): _64.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _63.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_63.GetValidatorSetByHeightRequest>): _63.GetValidatorSetByHeightRequest;
                    fromAmino(object: _63.GetValidatorSetByHeightRequestAmino): _63.GetValidatorSetByHeightRequest;
                    toAmino(message: _63.GetValidatorSetByHeightRequest): _63.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _63.GetValidatorSetByHeightRequestAminoMsg): _63.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _63.GetValidatorSetByHeightRequest): _63.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _63.GetValidatorSetByHeightRequestProtoMsg): _63.GetValidatorSetByHeightRequest;
                    toProto(message: _63.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _63.GetValidatorSetByHeightRequest): _63.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _63.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_63.GetValidatorSetByHeightResponse>): _63.GetValidatorSetByHeightResponse;
                    fromAmino(object: _63.GetValidatorSetByHeightResponseAmino): _63.GetValidatorSetByHeightResponse;
                    toAmino(message: _63.GetValidatorSetByHeightResponse): _63.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _63.GetValidatorSetByHeightResponseAminoMsg): _63.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _63.GetValidatorSetByHeightResponse): _63.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _63.GetValidatorSetByHeightResponseProtoMsg): _63.GetValidatorSetByHeightResponse;
                    toProto(message: _63.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _63.GetValidatorSetByHeightResponse): _63.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _63.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_63.GetLatestValidatorSetRequest>): _63.GetLatestValidatorSetRequest;
                    fromAmino(object: _63.GetLatestValidatorSetRequestAmino): _63.GetLatestValidatorSetRequest;
                    toAmino(message: _63.GetLatestValidatorSetRequest): _63.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _63.GetLatestValidatorSetRequestAminoMsg): _63.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _63.GetLatestValidatorSetRequest): _63.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _63.GetLatestValidatorSetRequestProtoMsg): _63.GetLatestValidatorSetRequest;
                    toProto(message: _63.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _63.GetLatestValidatorSetRequest): _63.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _63.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_63.GetLatestValidatorSetResponse>): _63.GetLatestValidatorSetResponse;
                    fromAmino(object: _63.GetLatestValidatorSetResponseAmino): _63.GetLatestValidatorSetResponse;
                    toAmino(message: _63.GetLatestValidatorSetResponse): _63.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _63.GetLatestValidatorSetResponseAminoMsg): _63.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _63.GetLatestValidatorSetResponse): _63.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _63.GetLatestValidatorSetResponseProtoMsg): _63.GetLatestValidatorSetResponse;
                    toProto(message: _63.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _63.GetLatestValidatorSetResponse): _63.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _63.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Validator;
                    fromPartial(object: Partial<_63.Validator>): _63.Validator;
                    fromAmino(object: _63.ValidatorAmino): _63.Validator;
                    toAmino(message: _63.Validator): _63.ValidatorAmino;
                    fromAminoMsg(object: _63.ValidatorAminoMsg): _63.Validator;
                    toAminoMsg(message: _63.Validator): _63.ValidatorAminoMsg;
                    fromProtoMsg(message: _63.ValidatorProtoMsg): _63.Validator;
                    toProto(message: _63.Validator): Uint8Array;
                    toProtoMsg(message: _63.Validator): _63.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _63.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_63.GetBlockByHeightRequest>): _63.GetBlockByHeightRequest;
                    fromAmino(object: _63.GetBlockByHeightRequestAmino): _63.GetBlockByHeightRequest;
                    toAmino(message: _63.GetBlockByHeightRequest): _63.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _63.GetBlockByHeightRequestAminoMsg): _63.GetBlockByHeightRequest;
                    toAminoMsg(message: _63.GetBlockByHeightRequest): _63.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _63.GetBlockByHeightRequestProtoMsg): _63.GetBlockByHeightRequest;
                    toProto(message: _63.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _63.GetBlockByHeightRequest): _63.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _63.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_63.GetBlockByHeightResponse>): _63.GetBlockByHeightResponse;
                    fromAmino(object: _63.GetBlockByHeightResponseAmino): _63.GetBlockByHeightResponse;
                    toAmino(message: _63.GetBlockByHeightResponse): _63.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _63.GetBlockByHeightResponseAminoMsg): _63.GetBlockByHeightResponse;
                    toAminoMsg(message: _63.GetBlockByHeightResponse): _63.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _63.GetBlockByHeightResponseProtoMsg): _63.GetBlockByHeightResponse;
                    toProto(message: _63.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _63.GetBlockByHeightResponse): _63.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _63.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetLatestBlockRequest;
                    fromPartial(_: Partial<_63.GetLatestBlockRequest>): _63.GetLatestBlockRequest;
                    fromAmino(_: _63.GetLatestBlockRequestAmino): _63.GetLatestBlockRequest;
                    toAmino(_: _63.GetLatestBlockRequest): _63.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _63.GetLatestBlockRequestAminoMsg): _63.GetLatestBlockRequest;
                    toAminoMsg(message: _63.GetLatestBlockRequest): _63.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _63.GetLatestBlockRequestProtoMsg): _63.GetLatestBlockRequest;
                    toProto(message: _63.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _63.GetLatestBlockRequest): _63.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _63.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetLatestBlockResponse;
                    fromPartial(object: Partial<_63.GetLatestBlockResponse>): _63.GetLatestBlockResponse;
                    fromAmino(object: _63.GetLatestBlockResponseAmino): _63.GetLatestBlockResponse;
                    toAmino(message: _63.GetLatestBlockResponse): _63.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _63.GetLatestBlockResponseAminoMsg): _63.GetLatestBlockResponse;
                    toAminoMsg(message: _63.GetLatestBlockResponse): _63.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _63.GetLatestBlockResponseProtoMsg): _63.GetLatestBlockResponse;
                    toProto(message: _63.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _63.GetLatestBlockResponse): _63.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _63.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetSyncingRequest;
                    fromPartial(_: Partial<_63.GetSyncingRequest>): _63.GetSyncingRequest;
                    fromAmino(_: _63.GetSyncingRequestAmino): _63.GetSyncingRequest;
                    toAmino(_: _63.GetSyncingRequest): _63.GetSyncingRequestAmino;
                    fromAminoMsg(object: _63.GetSyncingRequestAminoMsg): _63.GetSyncingRequest;
                    toAminoMsg(message: _63.GetSyncingRequest): _63.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _63.GetSyncingRequestProtoMsg): _63.GetSyncingRequest;
                    toProto(message: _63.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _63.GetSyncingRequest): _63.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _63.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetSyncingResponse;
                    fromPartial(object: Partial<_63.GetSyncingResponse>): _63.GetSyncingResponse;
                    fromAmino(object: _63.GetSyncingResponseAmino): _63.GetSyncingResponse;
                    toAmino(message: _63.GetSyncingResponse): _63.GetSyncingResponseAmino;
                    fromAminoMsg(object: _63.GetSyncingResponseAminoMsg): _63.GetSyncingResponse;
                    toAminoMsg(message: _63.GetSyncingResponse): _63.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _63.GetSyncingResponseProtoMsg): _63.GetSyncingResponse;
                    toProto(message: _63.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _63.GetSyncingResponse): _63.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _63.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.GetNodeInfoRequest;
                    fromPartial(_: Partial<_63.GetNodeInfoRequest>): _63.GetNodeInfoRequest;
                    fromAmino(_: _63.GetNodeInfoRequestAmino): _63.GetNodeInfoRequest;
                    toAmino(_: _63.GetNodeInfoRequest): _63.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _63.GetNodeInfoRequestAminoMsg): _63.GetNodeInfoRequest;
                    toAminoMsg(message: _63.GetNodeInfoRequest): _63.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _63.GetNodeInfoRequestProtoMsg): _63.GetNodeInfoRequest;
                    toProto(message: _63.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _63.GetNodeInfoRequest): _63.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _63.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.GetNodeInfoResponse;
                    fromPartial(object: Partial<_63.GetNodeInfoResponse>): _63.GetNodeInfoResponse;
                    fromAmino(object: _63.GetNodeInfoResponseAmino): _63.GetNodeInfoResponse;
                    toAmino(message: _63.GetNodeInfoResponse): _63.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _63.GetNodeInfoResponseAminoMsg): _63.GetNodeInfoResponse;
                    toAminoMsg(message: _63.GetNodeInfoResponse): _63.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _63.GetNodeInfoResponseProtoMsg): _63.GetNodeInfoResponse;
                    toProto(message: _63.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _63.GetNodeInfoResponse): _63.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _63.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.VersionInfo;
                    fromPartial(object: Partial<_63.VersionInfo>): _63.VersionInfo;
                    fromAmino(object: _63.VersionInfoAmino): _63.VersionInfo;
                    toAmino(message: _63.VersionInfo): _63.VersionInfoAmino;
                    fromAminoMsg(object: _63.VersionInfoAminoMsg): _63.VersionInfo;
                    toAminoMsg(message: _63.VersionInfo): _63.VersionInfoAminoMsg;
                    fromProtoMsg(message: _63.VersionInfoProtoMsg): _63.VersionInfo;
                    toProto(message: _63.VersionInfo): Uint8Array;
                    toProtoMsg(message: _63.VersionInfo): _63.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _63.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.Module;
                    fromPartial(object: Partial<_63.Module>): _63.Module;
                    fromAmino(object: _63.ModuleAmino): _63.Module;
                    toAmino(message: _63.Module): _63.ModuleAmino;
                    fromAminoMsg(object: _63.ModuleAminoMsg): _63.Module;
                    toAminoMsg(message: _63.Module): _63.ModuleAminoMsg;
                    fromProtoMsg(message: _63.ModuleProtoMsg): _63.Module;
                    toProto(message: _63.Module): Uint8Array;
                    toProtoMsg(message: _63.Module): _63.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _63.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ABCIQueryRequest;
                    fromPartial(object: Partial<_63.ABCIQueryRequest>): _63.ABCIQueryRequest;
                    fromAmino(object: _63.ABCIQueryRequestAmino): _63.ABCIQueryRequest;
                    toAmino(message: _63.ABCIQueryRequest): _63.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _63.ABCIQueryRequestAminoMsg): _63.ABCIQueryRequest;
                    toAminoMsg(message: _63.ABCIQueryRequest): _63.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _63.ABCIQueryRequestProtoMsg): _63.ABCIQueryRequest;
                    toProto(message: _63.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _63.ABCIQueryRequest): _63.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _63.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ABCIQueryResponse;
                    fromPartial(object: Partial<_63.ABCIQueryResponse>): _63.ABCIQueryResponse;
                    fromAmino(object: _63.ABCIQueryResponseAmino): _63.ABCIQueryResponse;
                    toAmino(message: _63.ABCIQueryResponse): _63.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _63.ABCIQueryResponseAminoMsg): _63.ABCIQueryResponse;
                    toAminoMsg(message: _63.ABCIQueryResponse): _63.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _63.ABCIQueryResponseProtoMsg): _63.ABCIQueryResponse;
                    toProto(message: _63.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _63.ABCIQueryResponse): _63.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _63.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ProofOp;
                    fromPartial(object: Partial<_63.ProofOp>): _63.ProofOp;
                    fromAmino(object: _63.ProofOpAmino): _63.ProofOp;
                    toAmino(message: _63.ProofOp): _63.ProofOpAmino;
                    fromAminoMsg(object: _63.ProofOpAminoMsg): _63.ProofOp;
                    toAminoMsg(message: _63.ProofOp): _63.ProofOpAminoMsg;
                    fromProtoMsg(message: _63.ProofOpProtoMsg): _63.ProofOp;
                    toProto(message: _63.ProofOp): Uint8Array;
                    toProtoMsg(message: _63.ProofOp): _63.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _63.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ProofOps;
                    fromPartial(object: Partial<_63.ProofOps>): _63.ProofOps;
                    fromAmino(object: _63.ProofOpsAmino): _63.ProofOps;
                    toAmino(message: _63.ProofOps): _63.ProofOpsAmino;
                    fromAminoMsg(object: _63.ProofOpsAminoMsg): _63.ProofOps;
                    toAminoMsg(message: _63.ProofOps): _63.ProofOpsAminoMsg;
                    fromProtoMsg(message: _63.ProofOpsProtoMsg): _63.ProofOps;
                    toProto(message: _63.ProofOps): Uint8Array;
                    toProtoMsg(message: _63.ProofOps): _63.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _65.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Coin;
                fromPartial(object: Partial<_65.Coin>): _65.Coin;
                fromAmino(object: _65.CoinAmino): _65.Coin;
                toAmino(message: _65.Coin): _65.CoinAmino;
                fromAminoMsg(object: _65.CoinAminoMsg): _65.Coin;
                toAminoMsg(message: _65.Coin): _65.CoinAminoMsg;
                fromProtoMsg(message: _65.CoinProtoMsg): _65.Coin;
                toProto(message: _65.Coin): Uint8Array;
                toProtoMsg(message: _65.Coin): _65.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _65.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DecCoin;
                fromPartial(object: Partial<_65.DecCoin>): _65.DecCoin;
                fromAmino(object: _65.DecCoinAmino): _65.DecCoin;
                toAmino(message: _65.DecCoin): _65.DecCoinAmino;
                fromAminoMsg(object: _65.DecCoinAminoMsg): _65.DecCoin;
                toAminoMsg(message: _65.DecCoin): _65.DecCoinAminoMsg;
                fromProtoMsg(message: _65.DecCoinProtoMsg): _65.DecCoin;
                toProto(message: _65.DecCoin): Uint8Array;
                toProtoMsg(message: _65.DecCoin): _65.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _65.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.IntProto;
                fromPartial(object: Partial<_65.IntProto>): _65.IntProto;
                fromAmino(object: _65.IntProtoAmino): _65.IntProto;
                toAmino(message: _65.IntProto): _65.IntProtoAmino;
                fromAminoMsg(object: _65.IntProtoAminoMsg): _65.IntProto;
                toAminoMsg(message: _65.IntProto): _65.IntProtoAminoMsg;
                fromProtoMsg(message: _65.IntProtoProtoMsg): _65.IntProto;
                toProto(message: _65.IntProto): Uint8Array;
                toProtoMsg(message: _65.IntProto): _65.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _65.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DecProto;
                fromPartial(object: Partial<_65.DecProto>): _65.DecProto;
                fromAmino(object: _65.DecProtoAmino): _65.DecProto;
                toAmino(message: _65.DecProto): _65.DecProtoAmino;
                fromAminoMsg(object: _65.DecProtoAminoMsg): _65.DecProto;
                toAminoMsg(message: _65.DecProto): _65.DecProtoAminoMsg;
                fromProtoMsg(message: _65.DecProtoProtoMsg): _65.DecProto;
                toProto(message: _65.DecProto): Uint8Array;
                toProtoMsg(message: _65.DecProto): _65.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _66.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.Module;
                    fromPartial(object: Partial<_66.Module>): _66.Module;
                    fromAmino(object: _66.ModuleAmino): _66.Module;
                    toAmino(message: _66.Module): _66.ModuleAmino;
                    fromAminoMsg(object: _66.ModuleAminoMsg): _66.Module;
                    toAminoMsg(message: _66.Module): _66.ModuleAminoMsg;
                    fromProtoMsg(message: _66.ModuleProtoMsg): _66.Module;
                    toProto(message: _66.Module): Uint8Array;
                    toProtoMsg(message: _66.Module): _66.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _68.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.GenesisOwners;
                fromPartial(object: Partial<_68.GenesisOwners>): _68.GenesisOwners;
                fromAmino(object: _68.GenesisOwnersAmino): _68.GenesisOwners;
                toAmino(message: _68.GenesisOwners): _68.GenesisOwnersAmino;
                fromAminoMsg(object: _68.GenesisOwnersAminoMsg): _68.GenesisOwners;
                toAminoMsg(message: _68.GenesisOwners): _68.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _68.GenesisOwnersProtoMsg): _68.GenesisOwners;
                toProto(message: _68.GenesisOwners): Uint8Array;
                toProtoMsg(message: _68.GenesisOwners): _68.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _68.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.GenesisState;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                toProto(message: _68.GenesisState): Uint8Array;
                toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _67.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Capability;
                fromPartial(object: Partial<_67.Capability>): _67.Capability;
                fromAmino(object: _67.CapabilityAmino): _67.Capability;
                toAmino(message: _67.Capability): _67.CapabilityAmino;
                fromAminoMsg(object: _67.CapabilityAminoMsg): _67.Capability;
                toAminoMsg(message: _67.Capability): _67.CapabilityAminoMsg;
                fromProtoMsg(message: _67.CapabilityProtoMsg): _67.Capability;
                toProto(message: _67.Capability): Uint8Array;
                toProtoMsg(message: _67.Capability): _67.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _67.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Owner;
                fromPartial(object: Partial<_67.Owner>): _67.Owner;
                fromAmino(object: _67.OwnerAmino): _67.Owner;
                toAmino(message: _67.Owner): _67.OwnerAmino;
                fromAminoMsg(object: _67.OwnerAminoMsg): _67.Owner;
                toAminoMsg(message: _67.Owner): _67.OwnerAminoMsg;
                fromProtoMsg(message: _67.OwnerProtoMsg): _67.Owner;
                toProto(message: _67.Owner): Uint8Array;
                toProtoMsg(message: _67.Owner): _67.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _67.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.CapabilityOwners;
                fromPartial(object: Partial<_67.CapabilityOwners>): _67.CapabilityOwners;
                fromAmino(object: _67.CapabilityOwnersAmino): _67.CapabilityOwners;
                toAmino(message: _67.CapabilityOwners): _67.CapabilityOwnersAmino;
                fromAminoMsg(object: _67.CapabilityOwnersAminoMsg): _67.CapabilityOwners;
                toAminoMsg(message: _67.CapabilityOwners): _67.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _67.CapabilityOwnersProtoMsg): _67.CapabilityOwners;
                toProto(message: _67.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _67.CapabilityOwners): _67.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
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
        const v1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _71.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _71.MsgUpdateParams): {
                        typeUrl: string;
                        value: _71.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _71.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _71.MsgUpdateParams): {
                        typeUrl: string;
                        value: _71.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _71.MsgUpdateParams) => _71.MsgUpdateParamsAmino;
                    fromAmino: (object: _71.MsgUpdateParamsAmino) => _71.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _71.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgUpdateParams;
                fromPartial(object: Partial<_71.MsgUpdateParams>): _71.MsgUpdateParams;
                fromAmino(object: _71.MsgUpdateParamsAmino): _71.MsgUpdateParams;
                toAmino(message: _71.MsgUpdateParams): _71.MsgUpdateParamsAmino;
                fromAminoMsg(object: _71.MsgUpdateParamsAminoMsg): _71.MsgUpdateParams;
                toAminoMsg(message: _71.MsgUpdateParams): _71.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _71.MsgUpdateParamsProtoMsg): _71.MsgUpdateParams;
                toProto(message: _71.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _71.MsgUpdateParams): _71.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _71.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_71.MsgUpdateParamsResponse>): _71.MsgUpdateParamsResponse;
                fromAmino(_: _71.MsgUpdateParamsResponseAmino): _71.MsgUpdateParamsResponse;
                toAmino(_: _71.MsgUpdateParamsResponse): _71.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _71.MsgUpdateParamsResponseAminoMsg): _71.MsgUpdateParamsResponse;
                toAminoMsg(message: _71.MsgUpdateParamsResponse): _71.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _71.MsgUpdateParamsResponseProtoMsg): _71.MsgUpdateParamsResponse;
                toProto(message: _71.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _71.MsgUpdateParamsResponse): _71.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _70.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _70.QueryParamsRequest;
                fromPartial(_: Partial<_70.QueryParamsRequest>): _70.QueryParamsRequest;
                fromAmino(_: _70.QueryParamsRequestAmino): _70.QueryParamsRequest;
                toAmino(_: _70.QueryParamsRequest): _70.QueryParamsRequestAmino;
                fromAminoMsg(object: _70.QueryParamsRequestAminoMsg): _70.QueryParamsRequest;
                toAminoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _70.QueryParamsRequestProtoMsg): _70.QueryParamsRequest;
                toProto(message: _70.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _70.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryParamsResponse;
                fromPartial(object: Partial<_70.QueryParamsResponse>): _70.QueryParamsResponse;
                fromAmino(object: _70.QueryParamsResponseAmino): _70.QueryParamsResponse;
                toAmino(message: _70.QueryParamsResponse): _70.QueryParamsResponseAmino;
                fromAminoMsg(object: _70.QueryParamsResponseAminoMsg): _70.QueryParamsResponse;
                toAminoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _70.QueryParamsResponseProtoMsg): _70.QueryParamsResponse;
                toProto(message: _70.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
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
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _74.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                    updateParams(value: _74.MsgUpdateParams): {
                        typeUrl: string;
                        value: _74.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _74.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                    updateParams(value: _74.MsgUpdateParams): {
                        typeUrl: string;
                        value: _74.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _74.MsgVerifyInvariant) => _74.MsgVerifyInvariantAmino;
                    fromAmino: (object: _74.MsgVerifyInvariantAmino) => _74.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _74.MsgUpdateParams) => _74.MsgUpdateParamsAmino;
                    fromAmino: (object: _74.MsgUpdateParamsAmino) => _74.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _74.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgVerifyInvariant;
                fromPartial(object: Partial<_74.MsgVerifyInvariant>): _74.MsgVerifyInvariant;
                fromAmino(object: _74.MsgVerifyInvariantAmino): _74.MsgVerifyInvariant;
                toAmino(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _74.MsgVerifyInvariantAminoMsg): _74.MsgVerifyInvariant;
                toAminoMsg(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _74.MsgVerifyInvariantProtoMsg): _74.MsgVerifyInvariant;
                toProto(message: _74.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _74.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_74.MsgVerifyInvariantResponse>): _74.MsgVerifyInvariantResponse;
                fromAmino(_: _74.MsgVerifyInvariantResponseAmino): _74.MsgVerifyInvariantResponse;
                toAmino(_: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _74.MsgVerifyInvariantResponseAminoMsg): _74.MsgVerifyInvariantResponse;
                toAminoMsg(message: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _74.MsgVerifyInvariantResponseProtoMsg): _74.MsgVerifyInvariantResponse;
                toProto(message: _74.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _74.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgUpdateParams;
                fromPartial(object: Partial<_74.MsgUpdateParams>): _74.MsgUpdateParams;
                fromAmino(object: _74.MsgUpdateParamsAmino): _74.MsgUpdateParams;
                toAmino(message: _74.MsgUpdateParams): _74.MsgUpdateParamsAmino;
                fromAminoMsg(object: _74.MsgUpdateParamsAminoMsg): _74.MsgUpdateParams;
                toAminoMsg(message: _74.MsgUpdateParams): _74.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _74.MsgUpdateParamsProtoMsg): _74.MsgUpdateParams;
                toProto(message: _74.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _74.MsgUpdateParams): _74.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _74.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_74.MsgUpdateParamsResponse>): _74.MsgUpdateParamsResponse;
                fromAmino(_: _74.MsgUpdateParamsResponseAmino): _74.MsgUpdateParamsResponse;
                toAmino(_: _74.MsgUpdateParamsResponse): _74.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _74.MsgUpdateParamsResponseAminoMsg): _74.MsgUpdateParamsResponse;
                toAminoMsg(message: _74.MsgUpdateParamsResponse): _74.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _74.MsgUpdateParamsResponseProtoMsg): _74.MsgUpdateParamsResponse;
                toProto(message: _74.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _74.MsgUpdateParamsResponse): _74.MsgUpdateParamsResponseProtoMsg;
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
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _75.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PubKey;
                fromPartial(object: Partial<_75.PubKey>): _75.PubKey;
                fromAmino(object: _75.PubKeyAmino): _75.PubKey;
                toAmino(message: _75.PubKey): _75.PubKeyAmino;
                fromAminoMsg(object: _75.PubKeyAminoMsg): _75.PubKey;
                toAminoMsg(message: _75.PubKey): _75.PubKeyAminoMsg;
                fromProtoMsg(message: _75.PubKeyProtoMsg): _75.PubKey;
                toProto(message: _75.PubKey): Uint8Array;
                toProtoMsg(message: _75.PubKey): _75.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _75.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PrivKey;
                fromPartial(object: Partial<_75.PrivKey>): _75.PrivKey;
                fromAmino(object: _75.PrivKeyAmino): _75.PrivKey;
                toAmino(message: _75.PrivKey): _75.PrivKeyAmino;
                fromAminoMsg(object: _75.PrivKeyAminoMsg): _75.PrivKey;
                toAminoMsg(message: _75.PrivKey): _75.PrivKeyAminoMsg;
                fromProtoMsg(message: _75.PrivKeyProtoMsg): _75.PrivKey;
                toProto(message: _75.PrivKey): Uint8Array;
                toProtoMsg(message: _75.PrivKey): _75.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _76.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.BIP44Params;
                    fromPartial(object: Partial<_76.BIP44Params>): _76.BIP44Params;
                    fromAmino(object: _76.BIP44ParamsAmino): _76.BIP44Params;
                    toAmino(message: _76.BIP44Params): _76.BIP44ParamsAmino;
                    fromAminoMsg(object: _76.BIP44ParamsAminoMsg): _76.BIP44Params;
                    toAminoMsg(message: _76.BIP44Params): _76.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _76.BIP44ParamsProtoMsg): _76.BIP44Params;
                    toProto(message: _76.BIP44Params): Uint8Array;
                    toProtoMsg(message: _76.BIP44Params): _76.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _77.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Record;
                    fromPartial(object: Partial<_77.Record>): _77.Record;
                    fromAmino(object: _77.RecordAmino): _77.Record;
                    toAmino(message: _77.Record): _77.RecordAmino;
                    fromAminoMsg(object: _77.RecordAminoMsg): _77.Record;
                    toAminoMsg(message: _77.Record): _77.RecordAminoMsg;
                    fromProtoMsg(message: _77.RecordProtoMsg): _77.Record;
                    toProto(message: _77.Record): Uint8Array;
                    toProtoMsg(message: _77.Record): _77.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _77.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Record_Local;
                    fromPartial(object: Partial<_77.Record_Local>): _77.Record_Local;
                    fromAmino(object: _77.Record_LocalAmino): _77.Record_Local;
                    toAmino(message: _77.Record_Local): _77.Record_LocalAmino;
                    fromAminoMsg(object: _77.Record_LocalAminoMsg): _77.Record_Local;
                    toAminoMsg(message: _77.Record_Local): _77.Record_LocalAminoMsg;
                    fromProtoMsg(message: _77.Record_LocalProtoMsg): _77.Record_Local;
                    toProto(message: _77.Record_Local): Uint8Array;
                    toProtoMsg(message: _77.Record_Local): _77.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _77.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Record_Ledger;
                    fromPartial(object: Partial<_77.Record_Ledger>): _77.Record_Ledger;
                    fromAmino(object: _77.Record_LedgerAmino): _77.Record_Ledger;
                    toAmino(message: _77.Record_Ledger): _77.Record_LedgerAmino;
                    fromAminoMsg(object: _77.Record_LedgerAminoMsg): _77.Record_Ledger;
                    toAminoMsg(message: _77.Record_Ledger): _77.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _77.Record_LedgerProtoMsg): _77.Record_Ledger;
                    toProto(message: _77.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _77.Record_Ledger): _77.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _77.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.Record_Multi;
                    fromPartial(_: Partial<_77.Record_Multi>): _77.Record_Multi;
                    fromAmino(_: _77.Record_MultiAmino): _77.Record_Multi;
                    toAmino(_: _77.Record_Multi): _77.Record_MultiAmino;
                    fromAminoMsg(object: _77.Record_MultiAminoMsg): _77.Record_Multi;
                    toAminoMsg(message: _77.Record_Multi): _77.Record_MultiAminoMsg;
                    fromProtoMsg(message: _77.Record_MultiProtoMsg): _77.Record_Multi;
                    toProto(message: _77.Record_Multi): Uint8Array;
                    toProtoMsg(message: _77.Record_Multi): _77.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _77.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.Record_Offline;
                    fromPartial(_: Partial<_77.Record_Offline>): _77.Record_Offline;
                    fromAmino(_: _77.Record_OfflineAmino): _77.Record_Offline;
                    toAmino(_: _77.Record_Offline): _77.Record_OfflineAmino;
                    fromAminoMsg(object: _77.Record_OfflineAminoMsg): _77.Record_Offline;
                    toAminoMsg(message: _77.Record_Offline): _77.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _77.Record_OfflineProtoMsg): _77.Record_Offline;
                    toProto(message: _77.Record_Offline): Uint8Array;
                    toProtoMsg(message: _77.Record_Offline): _77.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _78.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.LegacyAminoPubKey;
                fromPartial(object: Partial<_78.LegacyAminoPubKey>): _78.LegacyAminoPubKey;
                fromAmino(object: _78.LegacyAminoPubKeyAmino): _78.LegacyAminoPubKey;
                toAmino(message: _78.LegacyAminoPubKey): _78.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _78.LegacyAminoPubKeyAminoMsg): _78.LegacyAminoPubKey;
                toAminoMsg(message: _78.LegacyAminoPubKey): _78.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _78.LegacyAminoPubKeyProtoMsg): _78.LegacyAminoPubKey;
                toProto(message: _78.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _78.LegacyAminoPubKey): _78.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
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
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _80.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.PubKey;
                fromPartial(object: Partial<_80.PubKey>): _80.PubKey;
                fromAmino(object: _80.PubKeyAmino): _80.PubKey;
                toAmino(message: _80.PubKey): _80.PubKeyAmino;
                fromAminoMsg(object: _80.PubKeyAminoMsg): _80.PubKey;
                toAminoMsg(message: _80.PubKey): _80.PubKeyAminoMsg;
                fromProtoMsg(message: _80.PubKeyProtoMsg): _80.PubKey;
                toProto(message: _80.PubKey): Uint8Array;
                toProtoMsg(message: _80.PubKey): _80.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _80.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.PrivKey;
                fromPartial(object: Partial<_80.PrivKey>): _80.PrivKey;
                fromAmino(object: _80.PrivKeyAmino): _80.PrivKey;
                toAmino(message: _80.PrivKey): _80.PrivKeyAmino;
                fromAminoMsg(object: _80.PrivKeyAminoMsg): _80.PrivKey;
                toAminoMsg(message: _80.PrivKey): _80.PrivKeyAminoMsg;
                fromProtoMsg(message: _80.PrivKeyProtoMsg): _80.PrivKey;
                toProto(message: _80.PrivKey): Uint8Array;
                toProtoMsg(message: _80.PrivKey): _80.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
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
        const v1beta1: {
            MsgClientImpl: typeof _302.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                validatorDistributionInfo(request: _84.QueryValidatorDistributionInfoRequest): Promise<_84.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _84.QueryValidatorOutstandingRewardsRequest): Promise<_84.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _84.QueryValidatorCommissionRequest): Promise<_84.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _84.QueryValidatorSlashesRequest): Promise<_84.QueryValidatorSlashesResponse>;
                delegationRewards(request: _84.QueryDelegationRewardsRequest): Promise<_84.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _84.QueryDelegationTotalRewardsRequest): Promise<_84.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _84.QueryDelegatorWithdrawAddressRequest): Promise<_84.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _84.QueryCommunityPoolRequest): Promise<_84.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _85.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _85.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _85.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _85.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _85.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _85.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _85.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _85.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _85.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _85.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _85.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _85.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _85.MsgFundCommunityPool;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _85.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _85.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _85.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _85.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _85.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _85.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _85.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _85.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _85.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _85.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _85.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _85.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _85.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _85.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _85.MsgFundCommunityPool;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _85.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _85.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _85.MsgSetWithdrawAddress) => _85.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _85.MsgSetWithdrawAddressAmino) => _85.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _85.MsgWithdrawDelegatorReward) => _85.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _85.MsgWithdrawDelegatorRewardAmino) => _85.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _85.MsgWithdrawValidatorCommission) => _85.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _85.MsgWithdrawValidatorCommissionAmino) => _85.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _85.MsgFundCommunityPool) => _85.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _85.MsgFundCommunityPoolAmino) => _85.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUpdateParams) => _85.MsgUpdateParamsAmino;
                    fromAmino: (object: _85.MsgUpdateParamsAmino) => _85.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCommunityPoolSpend) => _85.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _85.MsgCommunityPoolSpendAmino) => _85.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _85.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_85.MsgSetWithdrawAddress>): _85.MsgSetWithdrawAddress;
                fromAmino(object: _85.MsgSetWithdrawAddressAmino): _85.MsgSetWithdrawAddress;
                toAmino(message: _85.MsgSetWithdrawAddress): _85.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _85.MsgSetWithdrawAddressAminoMsg): _85.MsgSetWithdrawAddress;
                toAminoMsg(message: _85.MsgSetWithdrawAddress): _85.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _85.MsgSetWithdrawAddressProtoMsg): _85.MsgSetWithdrawAddress;
                toProto(message: _85.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _85.MsgSetWithdrawAddress): _85.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _85.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_85.MsgSetWithdrawAddressResponse>): _85.MsgSetWithdrawAddressResponse;
                fromAmino(_: _85.MsgSetWithdrawAddressResponseAmino): _85.MsgSetWithdrawAddressResponse;
                toAmino(_: _85.MsgSetWithdrawAddressResponse): _85.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _85.MsgSetWithdrawAddressResponseAminoMsg): _85.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _85.MsgSetWithdrawAddressResponse): _85.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _85.MsgSetWithdrawAddressResponseProtoMsg): _85.MsgSetWithdrawAddressResponse;
                toProto(message: _85.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _85.MsgSetWithdrawAddressResponse): _85.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _85.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_85.MsgWithdrawDelegatorReward>): _85.MsgWithdrawDelegatorReward;
                fromAmino(object: _85.MsgWithdrawDelegatorRewardAmino): _85.MsgWithdrawDelegatorReward;
                toAmino(message: _85.MsgWithdrawDelegatorReward): _85.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _85.MsgWithdrawDelegatorRewardAminoMsg): _85.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _85.MsgWithdrawDelegatorReward): _85.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _85.MsgWithdrawDelegatorRewardProtoMsg): _85.MsgWithdrawDelegatorReward;
                toProto(message: _85.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _85.MsgWithdrawDelegatorReward): _85.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _85.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_85.MsgWithdrawDelegatorRewardResponse>): _85.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _85.MsgWithdrawDelegatorRewardResponseAmino): _85.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _85.MsgWithdrawDelegatorRewardResponse): _85.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _85.MsgWithdrawDelegatorRewardResponseAminoMsg): _85.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _85.MsgWithdrawDelegatorRewardResponse): _85.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _85.MsgWithdrawDelegatorRewardResponseProtoMsg): _85.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _85.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _85.MsgWithdrawDelegatorRewardResponse): _85.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _85.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_85.MsgWithdrawValidatorCommission>): _85.MsgWithdrawValidatorCommission;
                fromAmino(object: _85.MsgWithdrawValidatorCommissionAmino): _85.MsgWithdrawValidatorCommission;
                toAmino(message: _85.MsgWithdrawValidatorCommission): _85.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _85.MsgWithdrawValidatorCommissionAminoMsg): _85.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _85.MsgWithdrawValidatorCommission): _85.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _85.MsgWithdrawValidatorCommissionProtoMsg): _85.MsgWithdrawValidatorCommission;
                toProto(message: _85.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _85.MsgWithdrawValidatorCommission): _85.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _85.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_85.MsgWithdrawValidatorCommissionResponse>): _85.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _85.MsgWithdrawValidatorCommissionResponseAmino): _85.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _85.MsgWithdrawValidatorCommissionResponse): _85.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _85.MsgWithdrawValidatorCommissionResponseAminoMsg): _85.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _85.MsgWithdrawValidatorCommissionResponse): _85.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _85.MsgWithdrawValidatorCommissionResponseProtoMsg): _85.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _85.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _85.MsgWithdrawValidatorCommissionResponse): _85.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _85.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgFundCommunityPool;
                fromPartial(object: Partial<_85.MsgFundCommunityPool>): _85.MsgFundCommunityPool;
                fromAmino(object: _85.MsgFundCommunityPoolAmino): _85.MsgFundCommunityPool;
                toAmino(message: _85.MsgFundCommunityPool): _85.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _85.MsgFundCommunityPoolAminoMsg): _85.MsgFundCommunityPool;
                toAminoMsg(message: _85.MsgFundCommunityPool): _85.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _85.MsgFundCommunityPoolProtoMsg): _85.MsgFundCommunityPool;
                toProto(message: _85.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _85.MsgFundCommunityPool): _85.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _85.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_85.MsgFundCommunityPoolResponse>): _85.MsgFundCommunityPoolResponse;
                fromAmino(_: _85.MsgFundCommunityPoolResponseAmino): _85.MsgFundCommunityPoolResponse;
                toAmino(_: _85.MsgFundCommunityPoolResponse): _85.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _85.MsgFundCommunityPoolResponseAminoMsg): _85.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _85.MsgFundCommunityPoolResponse): _85.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _85.MsgFundCommunityPoolResponseProtoMsg): _85.MsgFundCommunityPoolResponse;
                toProto(message: _85.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _85.MsgFundCommunityPoolResponse): _85.MsgFundCommunityPoolResponseProtoMsg;
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
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _85.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_85.MsgCommunityPoolSpend>): _85.MsgCommunityPoolSpend;
                fromAmino(object: _85.MsgCommunityPoolSpendAmino): _85.MsgCommunityPoolSpend;
                toAmino(message: _85.MsgCommunityPoolSpend): _85.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _85.MsgCommunityPoolSpendAminoMsg): _85.MsgCommunityPoolSpend;
                toAminoMsg(message: _85.MsgCommunityPoolSpend): _85.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _85.MsgCommunityPoolSpendProtoMsg): _85.MsgCommunityPoolSpend;
                toProto(message: _85.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _85.MsgCommunityPoolSpend): _85.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _85.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _85.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_85.MsgCommunityPoolSpendResponse>): _85.MsgCommunityPoolSpendResponse;
                fromAmino(_: _85.MsgCommunityPoolSpendResponseAmino): _85.MsgCommunityPoolSpendResponse;
                toAmino(_: _85.MsgCommunityPoolSpendResponse): _85.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _85.MsgCommunityPoolSpendResponseAminoMsg): _85.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _85.MsgCommunityPoolSpendResponse): _85.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _85.MsgCommunityPoolSpendResponseProtoMsg): _85.MsgCommunityPoolSpendResponse;
                toProto(message: _85.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCommunityPoolSpendResponse): _85.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _84.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.QueryParamsRequest;
                fromPartial(_: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
                fromAmino(_: _84.QueryParamsRequestAmino): _84.QueryParamsRequest;
                toAmino(_: _84.QueryParamsRequest): _84.QueryParamsRequestAmino;
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
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_84.QueryValidatorDistributionInfoRequest>): _84.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _84.QueryValidatorDistributionInfoRequestAmino): _84.QueryValidatorDistributionInfoRequest;
                toAmino(message: _84.QueryValidatorDistributionInfoRequest): _84.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorDistributionInfoRequestAminoMsg): _84.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _84.QueryValidatorDistributionInfoRequest): _84.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorDistributionInfoRequestProtoMsg): _84.QueryValidatorDistributionInfoRequest;
                toProto(message: _84.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorDistributionInfoRequest): _84.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_84.QueryValidatorDistributionInfoResponse>): _84.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _84.QueryValidatorDistributionInfoResponseAmino): _84.QueryValidatorDistributionInfoResponse;
                toAmino(message: _84.QueryValidatorDistributionInfoResponse): _84.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorDistributionInfoResponseAminoMsg): _84.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _84.QueryValidatorDistributionInfoResponse): _84.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorDistributionInfoResponseProtoMsg): _84.QueryValidatorDistributionInfoResponse;
                toProto(message: _84.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorDistributionInfoResponse): _84.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_84.QueryValidatorOutstandingRewardsRequest>): _84.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _84.QueryValidatorOutstandingRewardsRequestAmino): _84.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _84.QueryValidatorOutstandingRewardsRequest): _84.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorOutstandingRewardsRequestAminoMsg): _84.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _84.QueryValidatorOutstandingRewardsRequest): _84.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorOutstandingRewardsRequestProtoMsg): _84.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _84.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorOutstandingRewardsRequest): _84.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_84.QueryValidatorOutstandingRewardsResponse>): _84.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _84.QueryValidatorOutstandingRewardsResponseAmino): _84.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _84.QueryValidatorOutstandingRewardsResponse): _84.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorOutstandingRewardsResponseAminoMsg): _84.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _84.QueryValidatorOutstandingRewardsResponse): _84.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorOutstandingRewardsResponseProtoMsg): _84.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _84.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorOutstandingRewardsResponse): _84.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_84.QueryValidatorCommissionRequest>): _84.QueryValidatorCommissionRequest;
                fromAmino(object: _84.QueryValidatorCommissionRequestAmino): _84.QueryValidatorCommissionRequest;
                toAmino(message: _84.QueryValidatorCommissionRequest): _84.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorCommissionRequestAminoMsg): _84.QueryValidatorCommissionRequest;
                toAminoMsg(message: _84.QueryValidatorCommissionRequest): _84.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorCommissionRequestProtoMsg): _84.QueryValidatorCommissionRequest;
                toProto(message: _84.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorCommissionRequest): _84.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_84.QueryValidatorCommissionResponse>): _84.QueryValidatorCommissionResponse;
                fromAmino(object: _84.QueryValidatorCommissionResponseAmino): _84.QueryValidatorCommissionResponse;
                toAmino(message: _84.QueryValidatorCommissionResponse): _84.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorCommissionResponseAminoMsg): _84.QueryValidatorCommissionResponse;
                toAminoMsg(message: _84.QueryValidatorCommissionResponse): _84.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorCommissionResponseProtoMsg): _84.QueryValidatorCommissionResponse;
                toProto(message: _84.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorCommissionResponse): _84.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _84.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_84.QueryValidatorSlashesRequest>): _84.QueryValidatorSlashesRequest;
                fromAmino(object: _84.QueryValidatorSlashesRequestAmino): _84.QueryValidatorSlashesRequest;
                toAmino(message: _84.QueryValidatorSlashesRequest): _84.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorSlashesRequestAminoMsg): _84.QueryValidatorSlashesRequest;
                toAminoMsg(message: _84.QueryValidatorSlashesRequest): _84.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorSlashesRequestProtoMsg): _84.QueryValidatorSlashesRequest;
                toProto(message: _84.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorSlashesRequest): _84.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _84.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_84.QueryValidatorSlashesResponse>): _84.QueryValidatorSlashesResponse;
                fromAmino(object: _84.QueryValidatorSlashesResponseAmino): _84.QueryValidatorSlashesResponse;
                toAmino(message: _84.QueryValidatorSlashesResponse): _84.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorSlashesResponseAminoMsg): _84.QueryValidatorSlashesResponse;
                toAminoMsg(message: _84.QueryValidatorSlashesResponse): _84.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorSlashesResponseProtoMsg): _84.QueryValidatorSlashesResponse;
                toProto(message: _84.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorSlashesResponse): _84.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_84.QueryDelegationRewardsRequest>): _84.QueryDelegationRewardsRequest;
                fromAmino(object: _84.QueryDelegationRewardsRequestAmino): _84.QueryDelegationRewardsRequest;
                toAmino(message: _84.QueryDelegationRewardsRequest): _84.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegationRewardsRequestAminoMsg): _84.QueryDelegationRewardsRequest;
                toAminoMsg(message: _84.QueryDelegationRewardsRequest): _84.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationRewardsRequestProtoMsg): _84.QueryDelegationRewardsRequest;
                toProto(message: _84.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationRewardsRequest): _84.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_84.QueryDelegationRewardsResponse>): _84.QueryDelegationRewardsResponse;
                fromAmino(object: _84.QueryDelegationRewardsResponseAmino): _84.QueryDelegationRewardsResponse;
                toAmino(message: _84.QueryDelegationRewardsResponse): _84.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegationRewardsResponseAminoMsg): _84.QueryDelegationRewardsResponse;
                toAminoMsg(message: _84.QueryDelegationRewardsResponse): _84.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationRewardsResponseProtoMsg): _84.QueryDelegationRewardsResponse;
                toProto(message: _84.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationRewardsResponse): _84.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_84.QueryDelegationTotalRewardsRequest>): _84.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _84.QueryDelegationTotalRewardsRequestAmino): _84.QueryDelegationTotalRewardsRequest;
                toAmino(message: _84.QueryDelegationTotalRewardsRequest): _84.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegationTotalRewardsRequestAminoMsg): _84.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _84.QueryDelegationTotalRewardsRequest): _84.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationTotalRewardsRequestProtoMsg): _84.QueryDelegationTotalRewardsRequest;
                toProto(message: _84.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationTotalRewardsRequest): _84.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_84.QueryDelegationTotalRewardsResponse>): _84.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _84.QueryDelegationTotalRewardsResponseAmino): _84.QueryDelegationTotalRewardsResponse;
                toAmino(message: _84.QueryDelegationTotalRewardsResponse): _84.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegationTotalRewardsResponseAminoMsg): _84.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _84.QueryDelegationTotalRewardsResponse): _84.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationTotalRewardsResponseProtoMsg): _84.QueryDelegationTotalRewardsResponse;
                toProto(message: _84.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationTotalRewardsResponse): _84.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsRequest>): _84.QueryDelegatorValidatorsRequest;
                fromAmino(object: _84.QueryDelegatorValidatorsRequestAmino): _84.QueryDelegatorValidatorsRequest;
                toAmino(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorsRequestAminoMsg): _84.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorsRequestProtoMsg): _84.QueryDelegatorValidatorsRequest;
                toProto(message: _84.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsResponse>): _84.QueryDelegatorValidatorsResponse;
                fromAmino(object: _84.QueryDelegatorValidatorsResponseAmino): _84.QueryDelegatorValidatorsResponse;
                toAmino(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorsResponseAminoMsg): _84.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorsResponseProtoMsg): _84.QueryDelegatorValidatorsResponse;
                toProto(message: _84.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_84.QueryDelegatorWithdrawAddressRequest>): _84.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _84.QueryDelegatorWithdrawAddressRequestAmino): _84.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _84.QueryDelegatorWithdrawAddressRequest): _84.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorWithdrawAddressRequestAminoMsg): _84.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _84.QueryDelegatorWithdrawAddressRequest): _84.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorWithdrawAddressRequestProtoMsg): _84.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _84.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorWithdrawAddressRequest): _84.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _84.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_84.QueryDelegatorWithdrawAddressResponse>): _84.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _84.QueryDelegatorWithdrawAddressResponseAmino): _84.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _84.QueryDelegatorWithdrawAddressResponse): _84.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorWithdrawAddressResponseAminoMsg): _84.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _84.QueryDelegatorWithdrawAddressResponse): _84.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorWithdrawAddressResponseProtoMsg): _84.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _84.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorWithdrawAddressResponse): _84.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _84.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_84.QueryCommunityPoolRequest>): _84.QueryCommunityPoolRequest;
                fromAmino(_: _84.QueryCommunityPoolRequestAmino): _84.QueryCommunityPoolRequest;
                toAmino(_: _84.QueryCommunityPoolRequest): _84.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _84.QueryCommunityPoolRequestAminoMsg): _84.QueryCommunityPoolRequest;
                toAminoMsg(message: _84.QueryCommunityPoolRequest): _84.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _84.QueryCommunityPoolRequestProtoMsg): _84.QueryCommunityPoolRequest;
                toProto(message: _84.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _84.QueryCommunityPoolRequest): _84.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _84.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_84.QueryCommunityPoolResponse>): _84.QueryCommunityPoolResponse;
                fromAmino(object: _84.QueryCommunityPoolResponseAmino): _84.QueryCommunityPoolResponse;
                toAmino(message: _84.QueryCommunityPoolResponse): _84.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _84.QueryCommunityPoolResponseAminoMsg): _84.QueryCommunityPoolResponse;
                toAminoMsg(message: _84.QueryCommunityPoolResponse): _84.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _84.QueryCommunityPoolResponseProtoMsg): _84.QueryCommunityPoolResponse;
                toProto(message: _84.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _84.QueryCommunityPoolResponse): _84.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _83.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_83.DelegatorWithdrawInfo>): _83.DelegatorWithdrawInfo;
                fromAmino(object: _83.DelegatorWithdrawInfoAmino): _83.DelegatorWithdrawInfo;
                toAmino(message: _83.DelegatorWithdrawInfo): _83.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _83.DelegatorWithdrawInfoAminoMsg): _83.DelegatorWithdrawInfo;
                toAminoMsg(message: _83.DelegatorWithdrawInfo): _83.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _83.DelegatorWithdrawInfoProtoMsg): _83.DelegatorWithdrawInfo;
                toProto(message: _83.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _83.DelegatorWithdrawInfo): _83.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _83.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_83.ValidatorOutstandingRewardsRecord>): _83.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _83.ValidatorOutstandingRewardsRecordAmino): _83.ValidatorOutstandingRewardsRecord;
                toAmino(message: _83.ValidatorOutstandingRewardsRecord): _83.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _83.ValidatorOutstandingRewardsRecordAminoMsg): _83.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _83.ValidatorOutstandingRewardsRecord): _83.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _83.ValidatorOutstandingRewardsRecordProtoMsg): _83.ValidatorOutstandingRewardsRecord;
                toProto(message: _83.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _83.ValidatorOutstandingRewardsRecord): _83.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _83.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_83.ValidatorAccumulatedCommissionRecord>): _83.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _83.ValidatorAccumulatedCommissionRecordAmino): _83.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _83.ValidatorAccumulatedCommissionRecord): _83.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _83.ValidatorAccumulatedCommissionRecordAminoMsg): _83.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _83.ValidatorAccumulatedCommissionRecord): _83.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _83.ValidatorAccumulatedCommissionRecordProtoMsg): _83.ValidatorAccumulatedCommissionRecord;
                toProto(message: _83.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _83.ValidatorAccumulatedCommissionRecord): _83.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _83.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_83.ValidatorHistoricalRewardsRecord>): _83.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _83.ValidatorHistoricalRewardsRecordAmino): _83.ValidatorHistoricalRewardsRecord;
                toAmino(message: _83.ValidatorHistoricalRewardsRecord): _83.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _83.ValidatorHistoricalRewardsRecordAminoMsg): _83.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _83.ValidatorHistoricalRewardsRecord): _83.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _83.ValidatorHistoricalRewardsRecordProtoMsg): _83.ValidatorHistoricalRewardsRecord;
                toProto(message: _83.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _83.ValidatorHistoricalRewardsRecord): _83.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _83.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_83.ValidatorCurrentRewardsRecord>): _83.ValidatorCurrentRewardsRecord;
                fromAmino(object: _83.ValidatorCurrentRewardsRecordAmino): _83.ValidatorCurrentRewardsRecord;
                toAmino(message: _83.ValidatorCurrentRewardsRecord): _83.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _83.ValidatorCurrentRewardsRecordAminoMsg): _83.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _83.ValidatorCurrentRewardsRecord): _83.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _83.ValidatorCurrentRewardsRecordProtoMsg): _83.ValidatorCurrentRewardsRecord;
                toProto(message: _83.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _83.ValidatorCurrentRewardsRecord): _83.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _83.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_83.DelegatorStartingInfoRecord>): _83.DelegatorStartingInfoRecord;
                fromAmino(object: _83.DelegatorStartingInfoRecordAmino): _83.DelegatorStartingInfoRecord;
                toAmino(message: _83.DelegatorStartingInfoRecord): _83.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _83.DelegatorStartingInfoRecordAminoMsg): _83.DelegatorStartingInfoRecord;
                toAminoMsg(message: _83.DelegatorStartingInfoRecord): _83.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _83.DelegatorStartingInfoRecordProtoMsg): _83.DelegatorStartingInfoRecord;
                toProto(message: _83.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _83.DelegatorStartingInfoRecord): _83.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _83.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_83.ValidatorSlashEventRecord>): _83.ValidatorSlashEventRecord;
                fromAmino(object: _83.ValidatorSlashEventRecordAmino): _83.ValidatorSlashEventRecord;
                toAmino(message: _83.ValidatorSlashEventRecord): _83.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _83.ValidatorSlashEventRecordAminoMsg): _83.ValidatorSlashEventRecord;
                toAminoMsg(message: _83.ValidatorSlashEventRecord): _83.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _83.ValidatorSlashEventRecordProtoMsg): _83.ValidatorSlashEventRecord;
                toProto(message: _83.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _83.ValidatorSlashEventRecord): _83.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _82.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Params;
                fromPartial(object: Partial<_82.Params>): _82.Params;
                fromAmino(object: _82.ParamsAmino): _82.Params;
                toAmino(message: _82.Params): _82.ParamsAmino;
                fromAminoMsg(object: _82.ParamsAminoMsg): _82.Params;
                toAminoMsg(message: _82.Params): _82.ParamsAminoMsg;
                fromProtoMsg(message: _82.ParamsProtoMsg): _82.Params;
                toProto(message: _82.Params): Uint8Array;
                toProtoMsg(message: _82.Params): _82.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _82.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_82.ValidatorHistoricalRewards>): _82.ValidatorHistoricalRewards;
                fromAmino(object: _82.ValidatorHistoricalRewardsAmino): _82.ValidatorHistoricalRewards;
                toAmino(message: _82.ValidatorHistoricalRewards): _82.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _82.ValidatorHistoricalRewardsAminoMsg): _82.ValidatorHistoricalRewards;
                toAminoMsg(message: _82.ValidatorHistoricalRewards): _82.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _82.ValidatorHistoricalRewardsProtoMsg): _82.ValidatorHistoricalRewards;
                toProto(message: _82.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _82.ValidatorHistoricalRewards): _82.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _82.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorCurrentRewards;
                fromPartial(object: Partial<_82.ValidatorCurrentRewards>): _82.ValidatorCurrentRewards;
                fromAmino(object: _82.ValidatorCurrentRewardsAmino): _82.ValidatorCurrentRewards;
                toAmino(message: _82.ValidatorCurrentRewards): _82.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _82.ValidatorCurrentRewardsAminoMsg): _82.ValidatorCurrentRewards;
                toAminoMsg(message: _82.ValidatorCurrentRewards): _82.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _82.ValidatorCurrentRewardsProtoMsg): _82.ValidatorCurrentRewards;
                toProto(message: _82.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _82.ValidatorCurrentRewards): _82.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _82.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_82.ValidatorAccumulatedCommission>): _82.ValidatorAccumulatedCommission;
                fromAmino(object: _82.ValidatorAccumulatedCommissionAmino): _82.ValidatorAccumulatedCommission;
                toAmino(message: _82.ValidatorAccumulatedCommission): _82.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _82.ValidatorAccumulatedCommissionAminoMsg): _82.ValidatorAccumulatedCommission;
                toAminoMsg(message: _82.ValidatorAccumulatedCommission): _82.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _82.ValidatorAccumulatedCommissionProtoMsg): _82.ValidatorAccumulatedCommission;
                toProto(message: _82.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _82.ValidatorAccumulatedCommission): _82.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _82.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_82.ValidatorOutstandingRewards>): _82.ValidatorOutstandingRewards;
                fromAmino(object: _82.ValidatorOutstandingRewardsAmino): _82.ValidatorOutstandingRewards;
                toAmino(message: _82.ValidatorOutstandingRewards): _82.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _82.ValidatorOutstandingRewardsAminoMsg): _82.ValidatorOutstandingRewards;
                toAminoMsg(message: _82.ValidatorOutstandingRewards): _82.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _82.ValidatorOutstandingRewardsProtoMsg): _82.ValidatorOutstandingRewards;
                toProto(message: _82.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _82.ValidatorOutstandingRewards): _82.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _82.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorSlashEvent;
                fromPartial(object: Partial<_82.ValidatorSlashEvent>): _82.ValidatorSlashEvent;
                fromAmino(object: _82.ValidatorSlashEventAmino): _82.ValidatorSlashEvent;
                toAmino(message: _82.ValidatorSlashEvent): _82.ValidatorSlashEventAmino;
                fromAminoMsg(object: _82.ValidatorSlashEventAminoMsg): _82.ValidatorSlashEvent;
                toAminoMsg(message: _82.ValidatorSlashEvent): _82.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _82.ValidatorSlashEventProtoMsg): _82.ValidatorSlashEvent;
                toProto(message: _82.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _82.ValidatorSlashEvent): _82.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _82.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorSlashEvents;
                fromPartial(object: Partial<_82.ValidatorSlashEvents>): _82.ValidatorSlashEvents;
                fromAmino(object: _82.ValidatorSlashEventsAmino): _82.ValidatorSlashEvents;
                toAmino(message: _82.ValidatorSlashEvents): _82.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _82.ValidatorSlashEventsAminoMsg): _82.ValidatorSlashEvents;
                toAminoMsg(message: _82.ValidatorSlashEvents): _82.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _82.ValidatorSlashEventsProtoMsg): _82.ValidatorSlashEvents;
                toProto(message: _82.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _82.ValidatorSlashEvents): _82.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _82.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.FeePool;
                fromPartial(object: Partial<_82.FeePool>): _82.FeePool;
                fromAmino(object: _82.FeePoolAmino): _82.FeePool;
                toAmino(message: _82.FeePool): _82.FeePoolAmino;
                fromAminoMsg(object: _82.FeePoolAminoMsg): _82.FeePool;
                toAminoMsg(message: _82.FeePool): _82.FeePoolAminoMsg;
                fromProtoMsg(message: _82.FeePoolProtoMsg): _82.FeePool;
                toProto(message: _82.FeePool): Uint8Array;
                toProtoMsg(message: _82.FeePool): _82.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _82.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_82.CommunityPoolSpendProposal>): _82.CommunityPoolSpendProposal;
                fromAmino(object: _82.CommunityPoolSpendProposalAmino): _82.CommunityPoolSpendProposal;
                toAmino(message: _82.CommunityPoolSpendProposal): _82.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _82.CommunityPoolSpendProposalAminoMsg): _82.CommunityPoolSpendProposal;
                toAminoMsg(message: _82.CommunityPoolSpendProposal): _82.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _82.CommunityPoolSpendProposalProtoMsg): _82.CommunityPoolSpendProposal;
                toProto(message: _82.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _82.CommunityPoolSpendProposal): _82.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _82.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DelegatorStartingInfo;
                fromPartial(object: Partial<_82.DelegatorStartingInfo>): _82.DelegatorStartingInfo;
                fromAmino(object: _82.DelegatorStartingInfoAmino): _82.DelegatorStartingInfo;
                toAmino(message: _82.DelegatorStartingInfo): _82.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _82.DelegatorStartingInfoAminoMsg): _82.DelegatorStartingInfo;
                toAminoMsg(message: _82.DelegatorStartingInfo): _82.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _82.DelegatorStartingInfoProtoMsg): _82.DelegatorStartingInfo;
                toProto(message: _82.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _82.DelegatorStartingInfo): _82.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _82.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DelegationDelegatorReward;
                fromPartial(object: Partial<_82.DelegationDelegatorReward>): _82.DelegationDelegatorReward;
                fromAmino(object: _82.DelegationDelegatorRewardAmino): _82.DelegationDelegatorReward;
                toAmino(message: _82.DelegationDelegatorReward): _82.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _82.DelegationDelegatorRewardAminoMsg): _82.DelegationDelegatorReward;
                toAminoMsg(message: _82.DelegationDelegatorReward): _82.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _82.DelegationDelegatorRewardProtoMsg): _82.DelegationDelegatorReward;
                toProto(message: _82.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _82.DelegationDelegatorReward): _82.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _82.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_82.CommunityPoolSpendProposalWithDeposit>): _82.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _82.CommunityPoolSpendProposalWithDepositAmino): _82.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _82.CommunityPoolSpendProposalWithDeposit): _82.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _82.CommunityPoolSpendProposalWithDepositAminoMsg): _82.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _82.CommunityPoolSpendProposalWithDeposit): _82.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _82.CommunityPoolSpendProposalWithDepositProtoMsg): _82.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _82.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _82.CommunityPoolSpendProposalWithDeposit): _82.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _86.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _86.Module;
                    fromPartial(_: Partial<_86.Module>): _86.Module;
                    fromAmino(_: _86.ModuleAmino): _86.Module;
                    toAmino(_: _86.Module): _86.ModuleAmino;
                    fromAminoMsg(object: _86.ModuleAminoMsg): _86.Module;
                    toAminoMsg(message: _86.Module): _86.ModuleAminoMsg;
                    fromProtoMsg(message: _86.ModuleProtoMsg): _86.Module;
                    toProto(message: _86.Module): Uint8Array;
                    toProtoMsg(message: _86.Module): _86.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _303.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _89.QueryEvidenceRequest): Promise<_89.QueryEvidenceResponse>;
                allEvidence(request?: _89.QueryAllEvidenceRequest): Promise<_89.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _90.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _90.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _90.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _90.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _90.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _90.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _90.MsgSubmitEvidence) => _90.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _90.MsgSubmitEvidenceAmino) => _90.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _90.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgSubmitEvidence;
                fromPartial(object: Partial<_90.MsgSubmitEvidence>): _90.MsgSubmitEvidence;
                fromAmino(object: _90.MsgSubmitEvidenceAmino): _90.MsgSubmitEvidence;
                toAmino(message: _90.MsgSubmitEvidence): _90.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _90.MsgSubmitEvidenceAminoMsg): _90.MsgSubmitEvidence;
                toAminoMsg(message: _90.MsgSubmitEvidence): _90.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _90.MsgSubmitEvidenceProtoMsg): _90.MsgSubmitEvidence;
                toProto(message: _90.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _90.MsgSubmitEvidence): _90.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _90.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_90.MsgSubmitEvidenceResponse>): _90.MsgSubmitEvidenceResponse;
                fromAmino(object: _90.MsgSubmitEvidenceResponseAmino): _90.MsgSubmitEvidenceResponse;
                toAmino(message: _90.MsgSubmitEvidenceResponse): _90.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _90.MsgSubmitEvidenceResponseAminoMsg): _90.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _90.MsgSubmitEvidenceResponse): _90.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _90.MsgSubmitEvidenceResponseProtoMsg): _90.MsgSubmitEvidenceResponse;
                toProto(message: _90.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _90.MsgSubmitEvidenceResponse): _90.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _89.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryEvidenceRequest;
                fromPartial(object: Partial<_89.QueryEvidenceRequest>): _89.QueryEvidenceRequest;
                fromAmino(object: _89.QueryEvidenceRequestAmino): _89.QueryEvidenceRequest;
                toAmino(message: _89.QueryEvidenceRequest): _89.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _89.QueryEvidenceRequestAminoMsg): _89.QueryEvidenceRequest;
                toAminoMsg(message: _89.QueryEvidenceRequest): _89.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _89.QueryEvidenceRequestProtoMsg): _89.QueryEvidenceRequest;
                toProto(message: _89.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _89.QueryEvidenceRequest): _89.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _89.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryEvidenceResponse;
                fromPartial(object: Partial<_89.QueryEvidenceResponse>): _89.QueryEvidenceResponse;
                fromAmino(object: _89.QueryEvidenceResponseAmino): _89.QueryEvidenceResponse;
                toAmino(message: _89.QueryEvidenceResponse): _89.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _89.QueryEvidenceResponseAminoMsg): _89.QueryEvidenceResponse;
                toAminoMsg(message: _89.QueryEvidenceResponse): _89.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _89.QueryEvidenceResponseProtoMsg): _89.QueryEvidenceResponse;
                toProto(message: _89.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _89.QueryEvidenceResponse): _89.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _89.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_89.QueryAllEvidenceRequest>): _89.QueryAllEvidenceRequest;
                fromAmino(object: _89.QueryAllEvidenceRequestAmino): _89.QueryAllEvidenceRequest;
                toAmino(message: _89.QueryAllEvidenceRequest): _89.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _89.QueryAllEvidenceRequestAminoMsg): _89.QueryAllEvidenceRequest;
                toAminoMsg(message: _89.QueryAllEvidenceRequest): _89.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAllEvidenceRequestProtoMsg): _89.QueryAllEvidenceRequest;
                toProto(message: _89.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAllEvidenceRequest): _89.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _89.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_89.QueryAllEvidenceResponse>): _89.QueryAllEvidenceResponse;
                fromAmino(object: _89.QueryAllEvidenceResponseAmino): _89.QueryAllEvidenceResponse;
                toAmino(message: _89.QueryAllEvidenceResponse): _89.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _89.QueryAllEvidenceResponseAminoMsg): _89.QueryAllEvidenceResponse;
                toAminoMsg(message: _89.QueryAllEvidenceResponse): _89.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAllEvidenceResponseProtoMsg): _89.QueryAllEvidenceResponse;
                toProto(message: _89.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAllEvidenceResponse): _89.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _87.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Equivocation;
                fromPartial(object: Partial<_87.Equivocation>): _87.Equivocation;
                fromAmino(object: _87.EquivocationAmino): _87.Equivocation;
                toAmino(message: _87.Equivocation): _87.EquivocationAmino;
                fromAminoMsg(object: _87.EquivocationAminoMsg): _87.Equivocation;
                toAminoMsg(message: _87.Equivocation): _87.EquivocationAminoMsg;
                fromProtoMsg(message: _87.EquivocationProtoMsg): _87.Equivocation;
                toProto(message: _87.Equivocation): Uint8Array;
                toProtoMsg(message: _87.Equivocation): _87.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _91.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _91.Module;
                    fromPartial(_: Partial<_91.Module>): _91.Module;
                    fromAmino(_: _91.ModuleAmino): _91.Module;
                    toAmino(_: _91.Module): _91.ModuleAmino;
                    fromAminoMsg(object: _91.ModuleAminoMsg): _91.Module;
                    toAminoMsg(message: _91.Module): _91.ModuleAminoMsg;
                    fromProtoMsg(message: _91.ModuleProtoMsg): _91.Module;
                    toProto(message: _91.Module): Uint8Array;
                    toProtoMsg(message: _91.Module): _91.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _94.QueryAllowanceRequest): Promise<_94.QueryAllowanceResponse>;
                allowances(request: _94.QueryAllowancesRequest): Promise<_94.QueryAllowancesResponse>;
                allowancesByGranter(request: _94.QueryAllowancesByGranterRequest): Promise<_94.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _264.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _95.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _95.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _95.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _95.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _95.MsgGrantAllowance) => _95.MsgGrantAllowanceAmino;
                    fromAmino: (object: _95.MsgGrantAllowanceAmino) => _95.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _95.MsgRevokeAllowance) => _95.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _95.MsgRevokeAllowanceAmino) => _95.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _95.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgGrantAllowance;
                fromPartial(object: Partial<_95.MsgGrantAllowance>): _95.MsgGrantAllowance;
                fromAmino(object: _95.MsgGrantAllowanceAmino): _95.MsgGrantAllowance;
                toAmino(message: _95.MsgGrantAllowance): _95.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _95.MsgGrantAllowanceAminoMsg): _95.MsgGrantAllowance;
                toAminoMsg(message: _95.MsgGrantAllowance): _95.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _95.MsgGrantAllowanceProtoMsg): _95.MsgGrantAllowance;
                toProto(message: _95.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _95.MsgGrantAllowance): _95.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _95.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_95.MsgGrantAllowanceResponse>): _95.MsgGrantAllowanceResponse;
                fromAmino(_: _95.MsgGrantAllowanceResponseAmino): _95.MsgGrantAllowanceResponse;
                toAmino(_: _95.MsgGrantAllowanceResponse): _95.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _95.MsgGrantAllowanceResponseAminoMsg): _95.MsgGrantAllowanceResponse;
                toAminoMsg(message: _95.MsgGrantAllowanceResponse): _95.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _95.MsgGrantAllowanceResponseProtoMsg): _95.MsgGrantAllowanceResponse;
                toProto(message: _95.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _95.MsgGrantAllowanceResponse): _95.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _95.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgRevokeAllowance;
                fromPartial(object: Partial<_95.MsgRevokeAllowance>): _95.MsgRevokeAllowance;
                fromAmino(object: _95.MsgRevokeAllowanceAmino): _95.MsgRevokeAllowance;
                toAmino(message: _95.MsgRevokeAllowance): _95.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _95.MsgRevokeAllowanceAminoMsg): _95.MsgRevokeAllowance;
                toAminoMsg(message: _95.MsgRevokeAllowance): _95.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _95.MsgRevokeAllowanceProtoMsg): _95.MsgRevokeAllowance;
                toProto(message: _95.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _95.MsgRevokeAllowance): _95.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _95.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_95.MsgRevokeAllowanceResponse>): _95.MsgRevokeAllowanceResponse;
                fromAmino(_: _95.MsgRevokeAllowanceResponseAmino): _95.MsgRevokeAllowanceResponse;
                toAmino(_: _95.MsgRevokeAllowanceResponse): _95.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _95.MsgRevokeAllowanceResponseAminoMsg): _95.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _95.MsgRevokeAllowanceResponse): _95.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _95.MsgRevokeAllowanceResponseProtoMsg): _95.MsgRevokeAllowanceResponse;
                toProto(message: _95.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _95.MsgRevokeAllowanceResponse): _95.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _92.BasicAllowance | _92.PeriodicAllowance | _92.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _94.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowanceRequest;
                fromPartial(object: Partial<_94.QueryAllowanceRequest>): _94.QueryAllowanceRequest;
                fromAmino(object: _94.QueryAllowanceRequestAmino): _94.QueryAllowanceRequest;
                toAmino(message: _94.QueryAllowanceRequest): _94.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _94.QueryAllowanceRequestAminoMsg): _94.QueryAllowanceRequest;
                toAminoMsg(message: _94.QueryAllowanceRequest): _94.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAllowanceRequestProtoMsg): _94.QueryAllowanceRequest;
                toProto(message: _94.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAllowanceRequest): _94.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _94.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowanceResponse;
                fromPartial(object: Partial<_94.QueryAllowanceResponse>): _94.QueryAllowanceResponse;
                fromAmino(object: _94.QueryAllowanceResponseAmino): _94.QueryAllowanceResponse;
                toAmino(message: _94.QueryAllowanceResponse): _94.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _94.QueryAllowanceResponseAminoMsg): _94.QueryAllowanceResponse;
                toAminoMsg(message: _94.QueryAllowanceResponse): _94.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAllowanceResponseProtoMsg): _94.QueryAllowanceResponse;
                toProto(message: _94.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAllowanceResponse): _94.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesRequest;
                fromPartial(object: Partial<_94.QueryAllowancesRequest>): _94.QueryAllowancesRequest;
                fromAmino(object: _94.QueryAllowancesRequestAmino): _94.QueryAllowancesRequest;
                toAmino(message: _94.QueryAllowancesRequest): _94.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _94.QueryAllowancesRequestAminoMsg): _94.QueryAllowancesRequest;
                toAminoMsg(message: _94.QueryAllowancesRequest): _94.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesRequestProtoMsg): _94.QueryAllowancesRequest;
                toProto(message: _94.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesRequest): _94.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesResponse;
                fromPartial(object: Partial<_94.QueryAllowancesResponse>): _94.QueryAllowancesResponse;
                fromAmino(object: _94.QueryAllowancesResponseAmino): _94.QueryAllowancesResponse;
                toAmino(message: _94.QueryAllowancesResponse): _94.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _94.QueryAllowancesResponseAminoMsg): _94.QueryAllowancesResponse;
                toAminoMsg(message: _94.QueryAllowancesResponse): _94.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesResponseProtoMsg): _94.QueryAllowancesResponse;
                toProto(message: _94.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesResponse): _94.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_94.QueryAllowancesByGranterRequest>): _94.QueryAllowancesByGranterRequest;
                fromAmino(object: _94.QueryAllowancesByGranterRequestAmino): _94.QueryAllowancesByGranterRequest;
                toAmino(message: _94.QueryAllowancesByGranterRequest): _94.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _94.QueryAllowancesByGranterRequestAminoMsg): _94.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _94.QueryAllowancesByGranterRequest): _94.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesByGranterRequestProtoMsg): _94.QueryAllowancesByGranterRequest;
                toProto(message: _94.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesByGranterRequest): _94.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _94.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_94.QueryAllowancesByGranterResponse>): _94.QueryAllowancesByGranterResponse;
                fromAmino(object: _94.QueryAllowancesByGranterResponseAmino): _94.QueryAllowancesByGranterResponse;
                toAmino(message: _94.QueryAllowancesByGranterResponse): _94.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _94.QueryAllowancesByGranterResponseAminoMsg): _94.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _94.QueryAllowancesByGranterResponse): _94.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _94.QueryAllowancesByGranterResponseProtoMsg): _94.QueryAllowancesByGranterResponse;
                toProto(message: _94.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _94.QueryAllowancesByGranterResponse): _94.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                typeUrl: string;
                encode(message: _92.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.BasicAllowance;
                fromPartial(object: Partial<_92.BasicAllowance>): _92.BasicAllowance;
                fromAmino(object: _92.BasicAllowanceAmino): _92.BasicAllowance;
                toAmino(message: _92.BasicAllowance): _92.BasicAllowanceAmino;
                fromAminoMsg(object: _92.BasicAllowanceAminoMsg): _92.BasicAllowance;
                toAminoMsg(message: _92.BasicAllowance): _92.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _92.BasicAllowanceProtoMsg): _92.BasicAllowance;
                toProto(message: _92.BasicAllowance): Uint8Array;
                toProtoMsg(message: _92.BasicAllowance): _92.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _92.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.PeriodicAllowance;
                fromPartial(object: Partial<_92.PeriodicAllowance>): _92.PeriodicAllowance;
                fromAmino(object: _92.PeriodicAllowanceAmino): _92.PeriodicAllowance;
                toAmino(message: _92.PeriodicAllowance): _92.PeriodicAllowanceAmino;
                fromAminoMsg(object: _92.PeriodicAllowanceAminoMsg): _92.PeriodicAllowance;
                toAminoMsg(message: _92.PeriodicAllowance): _92.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _92.PeriodicAllowanceProtoMsg): _92.PeriodicAllowance;
                toProto(message: _92.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _92.PeriodicAllowance): _92.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _92.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.AllowedMsgAllowance;
                fromPartial(object: Partial<_92.AllowedMsgAllowance>): _92.AllowedMsgAllowance;
                fromAmino(object: _92.AllowedMsgAllowanceAmino): _92.AllowedMsgAllowance;
                toAmino(message: _92.AllowedMsgAllowance): _92.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _92.AllowedMsgAllowanceAminoMsg): _92.AllowedMsgAllowance;
                toAminoMsg(message: _92.AllowedMsgAllowance): _92.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _92.AllowedMsgAllowanceProtoMsg): _92.AllowedMsgAllowance;
                toProto(message: _92.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _92.AllowedMsgAllowance): _92.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _92.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.Grant;
                fromPartial(object: Partial<_92.Grant>): _92.Grant;
                fromAmino(object: _92.GrantAmino): _92.Grant;
                toAmino(message: _92.Grant): _92.GrantAmino;
                fromAminoMsg(object: _92.GrantAminoMsg): _92.Grant;
                toAminoMsg(message: _92.Grant): _92.GrantAminoMsg;
                fromProtoMsg(message: _92.GrantProtoMsg): _92.Grant;
                toProto(message: _92.Grant): Uint8Array;
                toProtoMsg(message: _92.Grant): _92.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _96.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _96.Module;
                    fromPartial(_: Partial<_96.Module>): _96.Module;
                    fromAmino(_: _96.ModuleAmino): _96.Module;
                    toAmino(_: _96.Module): _96.ModuleAmino;
                    fromAminoMsg(object: _96.ModuleAminoMsg): _96.Module;
                    toAminoMsg(message: _96.Module): _96.ModuleAminoMsg;
                    fromProtoMsg(message: _96.ModuleProtoMsg): _96.Module;
                    toProto(message: _96.Module): Uint8Array;
                    toProtoMsg(message: _96.Module): _96.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
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
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _98.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.Module;
                    fromPartial(object: Partial<_98.Module>): _98.Module;
                    fromAmino(object: _98.ModuleAmino): _98.Module;
                    toAmino(message: _98.Module): _98.ModuleAmino;
                    fromAminoMsg(object: _98.ModuleAminoMsg): _98.Module;
                    toAminoMsg(message: _98.Module): _98.ModuleAminoMsg;
                    fromProtoMsg(message: _98.ModuleProtoMsg): _98.Module;
                    toProto(message: _98.Module): Uint8Array;
                    toProtoMsg(message: _98.Module): _98.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _305.MsgClientImpl;
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _101.QueryProposalRequest): Promise<_101.QueryProposalResponse>;
                proposals(request: _101.QueryProposalsRequest): Promise<_101.QueryProposalsResponse>;
                vote(request: _101.QueryVoteRequest): Promise<_101.QueryVoteResponse>;
                votes(request: _101.QueryVotesRequest): Promise<_101.QueryVotesResponse>;
                params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                deposit(request: _101.QueryDepositRequest): Promise<_101.QueryDepositResponse>;
                deposits(request: _101.QueryDepositsRequest): Promise<_101.QueryDepositsResponse>;
                tallyResult(request: _101.QueryTallyResultRequest): Promise<_101.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _265.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _102.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _102.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _102.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _102.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _102.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _102.MsgExecLegacyContent;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    voteWeighted(value: _102.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _102.MsgVoteWeighted;
                    };
                    deposit(value: _102.MsgDeposit): {
                        typeUrl: string;
                        value: _102.MsgDeposit;
                    };
                    updateParams(value: _102.MsgUpdateParams): {
                        typeUrl: string;
                        value: _102.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _102.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _102.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _102.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _102.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _102.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _102.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _102.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _102.MsgExecLegacyContent;
                    };
                    vote(value: _102.MsgVote): {
                        typeUrl: string;
                        value: _102.MsgVote;
                    };
                    voteWeighted(value: _102.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _102.MsgVoteWeighted;
                    };
                    deposit(value: _102.MsgDeposit): {
                        typeUrl: string;
                        value: _102.MsgDeposit;
                    };
                    updateParams(value: _102.MsgUpdateParams): {
                        typeUrl: string;
                        value: _102.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _102.MsgSubmitProposal) => _102.MsgSubmitProposalAmino;
                    fromAmino: (object: _102.MsgSubmitProposalAmino) => _102.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _102.MsgExecLegacyContent) => _102.MsgExecLegacyContentAmino;
                    fromAmino: (object: _102.MsgExecLegacyContentAmino) => _102.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _102.MsgVote) => _102.MsgVoteAmino;
                    fromAmino: (object: _102.MsgVoteAmino) => _102.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _102.MsgVoteWeighted) => _102.MsgVoteWeightedAmino;
                    fromAmino: (object: _102.MsgVoteWeightedAmino) => _102.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _102.MsgDeposit) => _102.MsgDepositAmino;
                    fromAmino: (object: _102.MsgDepositAmino) => _102.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _102.MsgUpdateParams) => _102.MsgUpdateParamsAmino;
                    fromAmino: (object: _102.MsgUpdateParamsAmino) => _102.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _102.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgSubmitProposal;
                fromPartial(object: Partial<_102.MsgSubmitProposal>): _102.MsgSubmitProposal;
                fromAmino(object: _102.MsgSubmitProposalAmino): _102.MsgSubmitProposal;
                toAmino(message: _102.MsgSubmitProposal): _102.MsgSubmitProposalAmino;
                fromAminoMsg(object: _102.MsgSubmitProposalAminoMsg): _102.MsgSubmitProposal;
                toAminoMsg(message: _102.MsgSubmitProposal): _102.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _102.MsgSubmitProposalProtoMsg): _102.MsgSubmitProposal;
                toProto(message: _102.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _102.MsgSubmitProposal): _102.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _102.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_102.MsgSubmitProposalResponse>): _102.MsgSubmitProposalResponse;
                fromAmino(object: _102.MsgSubmitProposalResponseAmino): _102.MsgSubmitProposalResponse;
                toAmino(message: _102.MsgSubmitProposalResponse): _102.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _102.MsgSubmitProposalResponseAminoMsg): _102.MsgSubmitProposalResponse;
                toAminoMsg(message: _102.MsgSubmitProposalResponse): _102.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _102.MsgSubmitProposalResponseProtoMsg): _102.MsgSubmitProposalResponse;
                toProto(message: _102.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _102.MsgSubmitProposalResponse): _102.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _102.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgExecLegacyContent;
                fromPartial(object: Partial<_102.MsgExecLegacyContent>): _102.MsgExecLegacyContent;
                fromAmino(object: _102.MsgExecLegacyContentAmino): _102.MsgExecLegacyContent;
                toAmino(message: _102.MsgExecLegacyContent): _102.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _102.MsgExecLegacyContentAminoMsg): _102.MsgExecLegacyContent;
                toAminoMsg(message: _102.MsgExecLegacyContent): _102.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _102.MsgExecLegacyContentProtoMsg): _102.MsgExecLegacyContent;
                toProto(message: _102.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _102.MsgExecLegacyContent): _102.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _102.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_102.MsgExecLegacyContentResponse>): _102.MsgExecLegacyContentResponse;
                fromAmino(_: _102.MsgExecLegacyContentResponseAmino): _102.MsgExecLegacyContentResponse;
                toAmino(_: _102.MsgExecLegacyContentResponse): _102.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _102.MsgExecLegacyContentResponseAminoMsg): _102.MsgExecLegacyContentResponse;
                toAminoMsg(message: _102.MsgExecLegacyContentResponse): _102.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _102.MsgExecLegacyContentResponseProtoMsg): _102.MsgExecLegacyContentResponse;
                toProto(message: _102.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _102.MsgExecLegacyContentResponse): _102.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _102.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgVote;
                fromPartial(object: Partial<_102.MsgVote>): _102.MsgVote;
                fromAmino(object: _102.MsgVoteAmino): _102.MsgVote;
                toAmino(message: _102.MsgVote): _102.MsgVoteAmino;
                fromAminoMsg(object: _102.MsgVoteAminoMsg): _102.MsgVote;
                toAminoMsg(message: _102.MsgVote): _102.MsgVoteAminoMsg;
                fromProtoMsg(message: _102.MsgVoteProtoMsg): _102.MsgVote;
                toProto(message: _102.MsgVote): Uint8Array;
                toProtoMsg(message: _102.MsgVote): _102.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _102.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.MsgVoteResponse;
                fromPartial(_: Partial<_102.MsgVoteResponse>): _102.MsgVoteResponse;
                fromAmino(_: _102.MsgVoteResponseAmino): _102.MsgVoteResponse;
                toAmino(_: _102.MsgVoteResponse): _102.MsgVoteResponseAmino;
                fromAminoMsg(object: _102.MsgVoteResponseAminoMsg): _102.MsgVoteResponse;
                toAminoMsg(message: _102.MsgVoteResponse): _102.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _102.MsgVoteResponseProtoMsg): _102.MsgVoteResponse;
                toProto(message: _102.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _102.MsgVoteResponse): _102.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _102.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgVoteWeighted;
                fromPartial(object: Partial<_102.MsgVoteWeighted>): _102.MsgVoteWeighted;
                fromAmino(object: _102.MsgVoteWeightedAmino): _102.MsgVoteWeighted;
                toAmino(message: _102.MsgVoteWeighted): _102.MsgVoteWeightedAmino;
                fromAminoMsg(object: _102.MsgVoteWeightedAminoMsg): _102.MsgVoteWeighted;
                toAminoMsg(message: _102.MsgVoteWeighted): _102.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _102.MsgVoteWeightedProtoMsg): _102.MsgVoteWeighted;
                toProto(message: _102.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _102.MsgVoteWeighted): _102.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _102.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_102.MsgVoteWeightedResponse>): _102.MsgVoteWeightedResponse;
                fromAmino(_: _102.MsgVoteWeightedResponseAmino): _102.MsgVoteWeightedResponse;
                toAmino(_: _102.MsgVoteWeightedResponse): _102.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _102.MsgVoteWeightedResponseAminoMsg): _102.MsgVoteWeightedResponse;
                toAminoMsg(message: _102.MsgVoteWeightedResponse): _102.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _102.MsgVoteWeightedResponseProtoMsg): _102.MsgVoteWeightedResponse;
                toProto(message: _102.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _102.MsgVoteWeightedResponse): _102.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _102.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgDeposit;
                fromPartial(object: Partial<_102.MsgDeposit>): _102.MsgDeposit;
                fromAmino(object: _102.MsgDepositAmino): _102.MsgDeposit;
                toAmino(message: _102.MsgDeposit): _102.MsgDepositAmino;
                fromAminoMsg(object: _102.MsgDepositAminoMsg): _102.MsgDeposit;
                toAminoMsg(message: _102.MsgDeposit): _102.MsgDepositAminoMsg;
                fromProtoMsg(message: _102.MsgDepositProtoMsg): _102.MsgDeposit;
                toProto(message: _102.MsgDeposit): Uint8Array;
                toProtoMsg(message: _102.MsgDeposit): _102.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _102.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.MsgDepositResponse;
                fromPartial(_: Partial<_102.MsgDepositResponse>): _102.MsgDepositResponse;
                fromAmino(_: _102.MsgDepositResponseAmino): _102.MsgDepositResponse;
                toAmino(_: _102.MsgDepositResponse): _102.MsgDepositResponseAmino;
                fromAminoMsg(object: _102.MsgDepositResponseAminoMsg): _102.MsgDepositResponse;
                toAminoMsg(message: _102.MsgDepositResponse): _102.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _102.MsgDepositResponseProtoMsg): _102.MsgDepositResponse;
                toProto(message: _102.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _102.MsgDepositResponse): _102.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _102.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.MsgUpdateParams;
                fromPartial(object: Partial<_102.MsgUpdateParams>): _102.MsgUpdateParams;
                fromAmino(object: _102.MsgUpdateParamsAmino): _102.MsgUpdateParams;
                toAmino(message: _102.MsgUpdateParams): _102.MsgUpdateParamsAmino;
                fromAminoMsg(object: _102.MsgUpdateParamsAminoMsg): _102.MsgUpdateParams;
                toAminoMsg(message: _102.MsgUpdateParams): _102.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateParamsProtoMsg): _102.MsgUpdateParams;
                toProto(message: _102.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateParams): _102.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _102.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _102.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_102.MsgUpdateParamsResponse>): _102.MsgUpdateParamsResponse;
                fromAmino(_: _102.MsgUpdateParamsResponseAmino): _102.MsgUpdateParamsResponse;
                toAmino(_: _102.MsgUpdateParamsResponse): _102.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _102.MsgUpdateParamsResponseAminoMsg): _102.MsgUpdateParamsResponse;
                toAminoMsg(message: _102.MsgUpdateParamsResponse): _102.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateParamsResponseProtoMsg): _102.MsgUpdateParamsResponse;
                toProto(message: _102.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateParamsResponse): _102.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _82.CommunityPoolSpendProposal | _82.CommunityPoolSpendProposalWithDeposit | _130.ParameterChangeProposal | _152.SoftwareUpgradeProposal | _152.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _104.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _101.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProposalRequest;
                fromPartial(object: Partial<_101.QueryProposalRequest>): _101.QueryProposalRequest;
                fromAmino(object: _101.QueryProposalRequestAmino): _101.QueryProposalRequest;
                toAmino(message: _101.QueryProposalRequest): _101.QueryProposalRequestAmino;
                fromAminoMsg(object: _101.QueryProposalRequestAminoMsg): _101.QueryProposalRequest;
                toAminoMsg(message: _101.QueryProposalRequest): _101.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _101.QueryProposalRequestProtoMsg): _101.QueryProposalRequest;
                toProto(message: _101.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _101.QueryProposalRequest): _101.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _101.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProposalResponse;
                fromPartial(object: Partial<_101.QueryProposalResponse>): _101.QueryProposalResponse;
                fromAmino(object: _101.QueryProposalResponseAmino): _101.QueryProposalResponse;
                toAmino(message: _101.QueryProposalResponse): _101.QueryProposalResponseAmino;
                fromAminoMsg(object: _101.QueryProposalResponseAminoMsg): _101.QueryProposalResponse;
                toAminoMsg(message: _101.QueryProposalResponse): _101.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _101.QueryProposalResponseProtoMsg): _101.QueryProposalResponse;
                toProto(message: _101.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _101.QueryProposalResponse): _101.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _101.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProposalsRequest;
                fromPartial(object: Partial<_101.QueryProposalsRequest>): _101.QueryProposalsRequest;
                fromAmino(object: _101.QueryProposalsRequestAmino): _101.QueryProposalsRequest;
                toAmino(message: _101.QueryProposalsRequest): _101.QueryProposalsRequestAmino;
                fromAminoMsg(object: _101.QueryProposalsRequestAminoMsg): _101.QueryProposalsRequest;
                toAminoMsg(message: _101.QueryProposalsRequest): _101.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _101.QueryProposalsRequestProtoMsg): _101.QueryProposalsRequest;
                toProto(message: _101.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _101.QueryProposalsRequest): _101.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _101.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProposalsResponse;
                fromPartial(object: Partial<_101.QueryProposalsResponse>): _101.QueryProposalsResponse;
                fromAmino(object: _101.QueryProposalsResponseAmino): _101.QueryProposalsResponse;
                toAmino(message: _101.QueryProposalsResponse): _101.QueryProposalsResponseAmino;
                fromAminoMsg(object: _101.QueryProposalsResponseAminoMsg): _101.QueryProposalsResponse;
                toAminoMsg(message: _101.QueryProposalsResponse): _101.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _101.QueryProposalsResponseProtoMsg): _101.QueryProposalsResponse;
                toProto(message: _101.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _101.QueryProposalsResponse): _101.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _101.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryVoteRequest;
                fromPartial(object: Partial<_101.QueryVoteRequest>): _101.QueryVoteRequest;
                fromAmino(object: _101.QueryVoteRequestAmino): _101.QueryVoteRequest;
                toAmino(message: _101.QueryVoteRequest): _101.QueryVoteRequestAmino;
                fromAminoMsg(object: _101.QueryVoteRequestAminoMsg): _101.QueryVoteRequest;
                toAminoMsg(message: _101.QueryVoteRequest): _101.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _101.QueryVoteRequestProtoMsg): _101.QueryVoteRequest;
                toProto(message: _101.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _101.QueryVoteRequest): _101.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _101.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryVoteResponse;
                fromPartial(object: Partial<_101.QueryVoteResponse>): _101.QueryVoteResponse;
                fromAmino(object: _101.QueryVoteResponseAmino): _101.QueryVoteResponse;
                toAmino(message: _101.QueryVoteResponse): _101.QueryVoteResponseAmino;
                fromAminoMsg(object: _101.QueryVoteResponseAminoMsg): _101.QueryVoteResponse;
                toAminoMsg(message: _101.QueryVoteResponse): _101.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _101.QueryVoteResponseProtoMsg): _101.QueryVoteResponse;
                toProto(message: _101.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _101.QueryVoteResponse): _101.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _101.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryVotesRequest;
                fromPartial(object: Partial<_101.QueryVotesRequest>): _101.QueryVotesRequest;
                fromAmino(object: _101.QueryVotesRequestAmino): _101.QueryVotesRequest;
                toAmino(message: _101.QueryVotesRequest): _101.QueryVotesRequestAmino;
                fromAminoMsg(object: _101.QueryVotesRequestAminoMsg): _101.QueryVotesRequest;
                toAminoMsg(message: _101.QueryVotesRequest): _101.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _101.QueryVotesRequestProtoMsg): _101.QueryVotesRequest;
                toProto(message: _101.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _101.QueryVotesRequest): _101.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _101.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryVotesResponse;
                fromPartial(object: Partial<_101.QueryVotesResponse>): _101.QueryVotesResponse;
                fromAmino(object: _101.QueryVotesResponseAmino): _101.QueryVotesResponse;
                toAmino(message: _101.QueryVotesResponse): _101.QueryVotesResponseAmino;
                fromAminoMsg(object: _101.QueryVotesResponseAminoMsg): _101.QueryVotesResponse;
                toAminoMsg(message: _101.QueryVotesResponse): _101.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _101.QueryVotesResponseProtoMsg): _101.QueryVotesResponse;
                toProto(message: _101.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _101.QueryVotesResponse): _101.QueryVotesResponseProtoMsg;
            };
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _101.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryDepositRequest;
                fromPartial(object: Partial<_101.QueryDepositRequest>): _101.QueryDepositRequest;
                fromAmino(object: _101.QueryDepositRequestAmino): _101.QueryDepositRequest;
                toAmino(message: _101.QueryDepositRequest): _101.QueryDepositRequestAmino;
                fromAminoMsg(object: _101.QueryDepositRequestAminoMsg): _101.QueryDepositRequest;
                toAminoMsg(message: _101.QueryDepositRequest): _101.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _101.QueryDepositRequestProtoMsg): _101.QueryDepositRequest;
                toProto(message: _101.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _101.QueryDepositRequest): _101.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _101.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryDepositResponse;
                fromPartial(object: Partial<_101.QueryDepositResponse>): _101.QueryDepositResponse;
                fromAmino(object: _101.QueryDepositResponseAmino): _101.QueryDepositResponse;
                toAmino(message: _101.QueryDepositResponse): _101.QueryDepositResponseAmino;
                fromAminoMsg(object: _101.QueryDepositResponseAminoMsg): _101.QueryDepositResponse;
                toAminoMsg(message: _101.QueryDepositResponse): _101.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _101.QueryDepositResponseProtoMsg): _101.QueryDepositResponse;
                toProto(message: _101.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _101.QueryDepositResponse): _101.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _101.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryDepositsRequest;
                fromPartial(object: Partial<_101.QueryDepositsRequest>): _101.QueryDepositsRequest;
                fromAmino(object: _101.QueryDepositsRequestAmino): _101.QueryDepositsRequest;
                toAmino(message: _101.QueryDepositsRequest): _101.QueryDepositsRequestAmino;
                fromAminoMsg(object: _101.QueryDepositsRequestAminoMsg): _101.QueryDepositsRequest;
                toAminoMsg(message: _101.QueryDepositsRequest): _101.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _101.QueryDepositsRequestProtoMsg): _101.QueryDepositsRequest;
                toProto(message: _101.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _101.QueryDepositsRequest): _101.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _101.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryDepositsResponse;
                fromPartial(object: Partial<_101.QueryDepositsResponse>): _101.QueryDepositsResponse;
                fromAmino(object: _101.QueryDepositsResponseAmino): _101.QueryDepositsResponse;
                toAmino(message: _101.QueryDepositsResponse): _101.QueryDepositsResponseAmino;
                fromAminoMsg(object: _101.QueryDepositsResponseAminoMsg): _101.QueryDepositsResponse;
                toAminoMsg(message: _101.QueryDepositsResponse): _101.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _101.QueryDepositsResponseProtoMsg): _101.QueryDepositsResponse;
                toProto(message: _101.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _101.QueryDepositsResponse): _101.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _101.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryTallyResultRequest;
                fromPartial(object: Partial<_101.QueryTallyResultRequest>): _101.QueryTallyResultRequest;
                fromAmino(object: _101.QueryTallyResultRequestAmino): _101.QueryTallyResultRequest;
                toAmino(message: _101.QueryTallyResultRequest): _101.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _101.QueryTallyResultRequestAminoMsg): _101.QueryTallyResultRequest;
                toAminoMsg(message: _101.QueryTallyResultRequest): _101.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _101.QueryTallyResultRequestProtoMsg): _101.QueryTallyResultRequest;
                toProto(message: _101.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _101.QueryTallyResultRequest): _101.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _101.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryTallyResultResponse;
                fromPartial(object: Partial<_101.QueryTallyResultResponse>): _101.QueryTallyResultResponse;
                fromAmino(object: _101.QueryTallyResultResponseAmino): _101.QueryTallyResultResponse;
                toAmino(message: _101.QueryTallyResultResponse): _101.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _101.QueryTallyResultResponseAminoMsg): _101.QueryTallyResultResponse;
                toAminoMsg(message: _101.QueryTallyResultResponse): _101.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _101.QueryTallyResultResponseProtoMsg): _101.QueryTallyResultResponse;
                toProto(message: _101.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _101.QueryTallyResultResponse): _101.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _100.VoteOption;
            voteOptionToJSON(object: _100.VoteOption): string;
            proposalStatusFromJSON(object: any): _100.ProposalStatus;
            proposalStatusToJSON(object: _100.ProposalStatus): string;
            VoteOption: typeof _100.VoteOption;
            VoteOptionSDKType: typeof _100.VoteOption;
            VoteOptionAmino: typeof _100.VoteOption;
            ProposalStatus: typeof _100.ProposalStatus;
            ProposalStatusSDKType: typeof _100.ProposalStatus;
            ProposalStatusAmino: typeof _100.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _100.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.WeightedVoteOption;
                fromPartial(object: Partial<_100.WeightedVoteOption>): _100.WeightedVoteOption;
                fromAmino(object: _100.WeightedVoteOptionAmino): _100.WeightedVoteOption;
                toAmino(message: _100.WeightedVoteOption): _100.WeightedVoteOptionAmino;
                fromAminoMsg(object: _100.WeightedVoteOptionAminoMsg): _100.WeightedVoteOption;
                toAminoMsg(message: _100.WeightedVoteOption): _100.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _100.WeightedVoteOptionProtoMsg): _100.WeightedVoteOption;
                toProto(message: _100.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _100.WeightedVoteOption): _100.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _100.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Deposit;
                fromPartial(object: Partial<_100.Deposit>): _100.Deposit;
                fromAmino(object: _100.DepositAmino): _100.Deposit;
                toAmino(message: _100.Deposit): _100.DepositAmino;
                fromAminoMsg(object: _100.DepositAminoMsg): _100.Deposit;
                toAminoMsg(message: _100.Deposit): _100.DepositAminoMsg;
                fromProtoMsg(message: _100.DepositProtoMsg): _100.Deposit;
                toProto(message: _100.Deposit): Uint8Array;
                toProtoMsg(message: _100.Deposit): _100.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _100.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Proposal;
                fromPartial(object: Partial<_100.Proposal>): _100.Proposal;
                fromAmino(object: _100.ProposalAmino): _100.Proposal;
                toAmino(message: _100.Proposal): _100.ProposalAmino;
                fromAminoMsg(object: _100.ProposalAminoMsg): _100.Proposal;
                toAminoMsg(message: _100.Proposal): _100.ProposalAminoMsg;
                fromProtoMsg(message: _100.ProposalProtoMsg): _100.Proposal;
                toProto(message: _100.Proposal): Uint8Array;
                toProtoMsg(message: _100.Proposal): _100.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _100.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.TallyResult;
                fromPartial(object: Partial<_100.TallyResult>): _100.TallyResult;
                fromAmino(object: _100.TallyResultAmino): _100.TallyResult;
                toAmino(message: _100.TallyResult): _100.TallyResultAmino;
                fromAminoMsg(object: _100.TallyResultAminoMsg): _100.TallyResult;
                toAminoMsg(message: _100.TallyResult): _100.TallyResultAminoMsg;
                fromProtoMsg(message: _100.TallyResultProtoMsg): _100.TallyResult;
                toProto(message: _100.TallyResult): Uint8Array;
                toProtoMsg(message: _100.TallyResult): _100.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _100.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Vote;
                fromPartial(object: Partial<_100.Vote>): _100.Vote;
                fromAmino(object: _100.VoteAmino): _100.Vote;
                toAmino(message: _100.Vote): _100.VoteAmino;
                fromAminoMsg(object: _100.VoteAminoMsg): _100.Vote;
                toAminoMsg(message: _100.Vote): _100.VoteAminoMsg;
                fromProtoMsg(message: _100.VoteProtoMsg): _100.Vote;
                toProto(message: _100.Vote): Uint8Array;
                toProtoMsg(message: _100.Vote): _100.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _100.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.DepositParams;
                fromPartial(object: Partial<_100.DepositParams>): _100.DepositParams;
                fromAmino(object: _100.DepositParamsAmino): _100.DepositParams;
                toAmino(message: _100.DepositParams): _100.DepositParamsAmino;
                fromAminoMsg(object: _100.DepositParamsAminoMsg): _100.DepositParams;
                toAminoMsg(message: _100.DepositParams): _100.DepositParamsAminoMsg;
                fromProtoMsg(message: _100.DepositParamsProtoMsg): _100.DepositParams;
                toProto(message: _100.DepositParams): Uint8Array;
                toProtoMsg(message: _100.DepositParams): _100.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _100.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.VotingParams;
                fromPartial(object: Partial<_100.VotingParams>): _100.VotingParams;
                fromAmino(object: _100.VotingParamsAmino): _100.VotingParams;
                toAmino(message: _100.VotingParams): _100.VotingParamsAmino;
                fromAminoMsg(object: _100.VotingParamsAminoMsg): _100.VotingParams;
                toAminoMsg(message: _100.VotingParams): _100.VotingParamsAminoMsg;
                fromProtoMsg(message: _100.VotingParamsProtoMsg): _100.VotingParams;
                toProto(message: _100.VotingParams): Uint8Array;
                toProtoMsg(message: _100.VotingParams): _100.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _100.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.TallyParams;
                fromPartial(object: Partial<_100.TallyParams>): _100.TallyParams;
                fromAmino(object: _100.TallyParamsAmino): _100.TallyParams;
                toAmino(message: _100.TallyParams): _100.TallyParamsAmino;
                fromAminoMsg(object: _100.TallyParamsAminoMsg): _100.TallyParams;
                toAminoMsg(message: _100.TallyParams): _100.TallyParamsAminoMsg;
                fromProtoMsg(message: _100.TallyParamsProtoMsg): _100.TallyParams;
                toProto(message: _100.TallyParams): Uint8Array;
                toProtoMsg(message: _100.TallyParams): _100.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _100.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Params;
                fromPartial(object: Partial<_100.Params>): _100.Params;
                fromAmino(object: _100.ParamsAmino): _100.Params;
                toAmino(message: _100.Params): _100.ParamsAmino;
                fromAminoMsg(object: _100.ParamsAminoMsg): _100.Params;
                toAminoMsg(message: _100.Params): _100.ParamsAminoMsg;
                fromProtoMsg(message: _100.ParamsProtoMsg): _100.Params;
                toProto(message: _100.Params): Uint8Array;
                toProtoMsg(message: _100.Params): _100.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _99.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.GenesisState;
                fromPartial(object: Partial<_99.GenesisState>): _99.GenesisState;
                fromAmino(object: _99.GenesisStateAmino): _99.GenesisState;
                toAmino(message: _99.GenesisState): _99.GenesisStateAmino;
                fromAminoMsg(object: _99.GenesisStateAminoMsg): _99.GenesisState;
                toAminoMsg(message: _99.GenesisState): _99.GenesisStateAminoMsg;
                fromProtoMsg(message: _99.GenesisStateProtoMsg): _99.GenesisState;
                toProto(message: _99.GenesisState): Uint8Array;
                toProtoMsg(message: _99.GenesisState): _99.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _306.MsgClientImpl;
            QueryClientImpl: typeof _287.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _105.QueryProposalRequest): Promise<_105.QueryProposalResponse>;
                proposals(request: _105.QueryProposalsRequest): Promise<_105.QueryProposalsResponse>;
                vote(request: _105.QueryVoteRequest): Promise<_105.QueryVoteResponse>;
                votes(request: _105.QueryVotesRequest): Promise<_105.QueryVotesResponse>;
                params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                deposit(request: _105.QueryDepositRequest): Promise<_105.QueryDepositResponse>;
                deposits(request: _105.QueryDepositsRequest): Promise<_105.QueryDepositsResponse>;
                tallyResult(request: _105.QueryTallyResultRequest): Promise<_105.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _266.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _106.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _106.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _106.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _106.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _106.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _106.MsgSubmitProposal;
                    };
                    vote(value: _106.MsgVote): {
                        typeUrl: string;
                        value: _106.MsgVote;
                    };
                    voteWeighted(value: _106.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _106.MsgVoteWeighted;
                    };
                    deposit(value: _106.MsgDeposit): {
                        typeUrl: string;
                        value: _106.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _106.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _106.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _106.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _106.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _106.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _106.MsgSubmitProposal;
                    };
                    vote(value: _106.MsgVote): {
                        typeUrl: string;
                        value: _106.MsgVote;
                    };
                    voteWeighted(value: _106.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _106.MsgVoteWeighted;
                    };
                    deposit(value: _106.MsgDeposit): {
                        typeUrl: string;
                        value: _106.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _106.MsgSubmitProposal) => _106.MsgSubmitProposalAmino;
                    fromAmino: (object: _106.MsgSubmitProposalAmino) => _106.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _106.MsgVote) => _106.MsgVoteAmino;
                    fromAmino: (object: _106.MsgVoteAmino) => _106.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _106.MsgVoteWeighted) => _106.MsgVoteWeightedAmino;
                    fromAmino: (object: _106.MsgVoteWeightedAmino) => _106.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _106.MsgDeposit) => _106.MsgDepositAmino;
                    fromAmino: (object: _106.MsgDepositAmino) => _106.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _106.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgSubmitProposal;
                fromPartial(object: Partial<_106.MsgSubmitProposal>): _106.MsgSubmitProposal;
                fromAmino(object: _106.MsgSubmitProposalAmino): _106.MsgSubmitProposal;
                toAmino(message: _106.MsgSubmitProposal): _106.MsgSubmitProposalAmino;
                fromAminoMsg(object: _106.MsgSubmitProposalAminoMsg): _106.MsgSubmitProposal;
                toAminoMsg(message: _106.MsgSubmitProposal): _106.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _106.MsgSubmitProposalProtoMsg): _106.MsgSubmitProposal;
                toProto(message: _106.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _106.MsgSubmitProposal): _106.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _106.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_106.MsgSubmitProposalResponse>): _106.MsgSubmitProposalResponse;
                fromAmino(object: _106.MsgSubmitProposalResponseAmino): _106.MsgSubmitProposalResponse;
                toAmino(message: _106.MsgSubmitProposalResponse): _106.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _106.MsgSubmitProposalResponseAminoMsg): _106.MsgSubmitProposalResponse;
                toAminoMsg(message: _106.MsgSubmitProposalResponse): _106.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _106.MsgSubmitProposalResponseProtoMsg): _106.MsgSubmitProposalResponse;
                toProto(message: _106.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _106.MsgSubmitProposalResponse): _106.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _106.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgVote;
                fromPartial(object: Partial<_106.MsgVote>): _106.MsgVote;
                fromAmino(object: _106.MsgVoteAmino): _106.MsgVote;
                toAmino(message: _106.MsgVote): _106.MsgVoteAmino;
                fromAminoMsg(object: _106.MsgVoteAminoMsg): _106.MsgVote;
                toAminoMsg(message: _106.MsgVote): _106.MsgVoteAminoMsg;
                fromProtoMsg(message: _106.MsgVoteProtoMsg): _106.MsgVote;
                toProto(message: _106.MsgVote): Uint8Array;
                toProtoMsg(message: _106.MsgVote): _106.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _106.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgVoteResponse;
                fromPartial(_: Partial<_106.MsgVoteResponse>): _106.MsgVoteResponse;
                fromAmino(_: _106.MsgVoteResponseAmino): _106.MsgVoteResponse;
                toAmino(_: _106.MsgVoteResponse): _106.MsgVoteResponseAmino;
                fromAminoMsg(object: _106.MsgVoteResponseAminoMsg): _106.MsgVoteResponse;
                toAminoMsg(message: _106.MsgVoteResponse): _106.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _106.MsgVoteResponseProtoMsg): _106.MsgVoteResponse;
                toProto(message: _106.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _106.MsgVoteResponse): _106.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _106.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgVoteWeighted;
                fromPartial(object: Partial<_106.MsgVoteWeighted>): _106.MsgVoteWeighted;
                fromAmino(object: _106.MsgVoteWeightedAmino): _106.MsgVoteWeighted;
                toAmino(message: _106.MsgVoteWeighted): _106.MsgVoteWeightedAmino;
                fromAminoMsg(object: _106.MsgVoteWeightedAminoMsg): _106.MsgVoteWeighted;
                toAminoMsg(message: _106.MsgVoteWeighted): _106.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _106.MsgVoteWeightedProtoMsg): _106.MsgVoteWeighted;
                toProto(message: _106.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _106.MsgVoteWeighted): _106.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _106.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_106.MsgVoteWeightedResponse>): _106.MsgVoteWeightedResponse;
                fromAmino(_: _106.MsgVoteWeightedResponseAmino): _106.MsgVoteWeightedResponse;
                toAmino(_: _106.MsgVoteWeightedResponse): _106.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _106.MsgVoteWeightedResponseAminoMsg): _106.MsgVoteWeightedResponse;
                toAminoMsg(message: _106.MsgVoteWeightedResponse): _106.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _106.MsgVoteWeightedResponseProtoMsg): _106.MsgVoteWeightedResponse;
                toProto(message: _106.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _106.MsgVoteWeightedResponse): _106.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _106.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MsgDeposit;
                fromPartial(object: Partial<_106.MsgDeposit>): _106.MsgDeposit;
                fromAmino(object: _106.MsgDepositAmino): _106.MsgDeposit;
                toAmino(message: _106.MsgDeposit): _106.MsgDepositAmino;
                fromAminoMsg(object: _106.MsgDepositAminoMsg): _106.MsgDeposit;
                toAminoMsg(message: _106.MsgDeposit): _106.MsgDepositAminoMsg;
                fromProtoMsg(message: _106.MsgDepositProtoMsg): _106.MsgDeposit;
                toProto(message: _106.MsgDeposit): Uint8Array;
                toProtoMsg(message: _106.MsgDeposit): _106.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _106.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _106.MsgDepositResponse;
                fromPartial(_: Partial<_106.MsgDepositResponse>): _106.MsgDepositResponse;
                fromAmino(_: _106.MsgDepositResponseAmino): _106.MsgDepositResponse;
                toAmino(_: _106.MsgDepositResponse): _106.MsgDepositResponseAmino;
                fromAminoMsg(object: _106.MsgDepositResponseAminoMsg): _106.MsgDepositResponse;
                toAminoMsg(message: _106.MsgDepositResponse): _106.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _106.MsgDepositResponseProtoMsg): _106.MsgDepositResponse;
                toProto(message: _106.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _106.MsgDepositResponse): _106.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _82.CommunityPoolSpendProposal | _82.CommunityPoolSpendProposalWithDeposit | _130.ParameterChangeProposal | _152.SoftwareUpgradeProposal | _152.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _104.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _105.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryProposalRequest;
                fromPartial(object: Partial<_105.QueryProposalRequest>): _105.QueryProposalRequest;
                fromAmino(object: _105.QueryProposalRequestAmino): _105.QueryProposalRequest;
                toAmino(message: _105.QueryProposalRequest): _105.QueryProposalRequestAmino;
                fromAminoMsg(object: _105.QueryProposalRequestAminoMsg): _105.QueryProposalRequest;
                toAminoMsg(message: _105.QueryProposalRequest): _105.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _105.QueryProposalRequestProtoMsg): _105.QueryProposalRequest;
                toProto(message: _105.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _105.QueryProposalRequest): _105.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _105.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryProposalResponse;
                fromPartial(object: Partial<_105.QueryProposalResponse>): _105.QueryProposalResponse;
                fromAmino(object: _105.QueryProposalResponseAmino): _105.QueryProposalResponse;
                toAmino(message: _105.QueryProposalResponse): _105.QueryProposalResponseAmino;
                fromAminoMsg(object: _105.QueryProposalResponseAminoMsg): _105.QueryProposalResponse;
                toAminoMsg(message: _105.QueryProposalResponse): _105.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _105.QueryProposalResponseProtoMsg): _105.QueryProposalResponse;
                toProto(message: _105.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _105.QueryProposalResponse): _105.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _105.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryProposalsRequest;
                fromPartial(object: Partial<_105.QueryProposalsRequest>): _105.QueryProposalsRequest;
                fromAmino(object: _105.QueryProposalsRequestAmino): _105.QueryProposalsRequest;
                toAmino(message: _105.QueryProposalsRequest): _105.QueryProposalsRequestAmino;
                fromAminoMsg(object: _105.QueryProposalsRequestAminoMsg): _105.QueryProposalsRequest;
                toAminoMsg(message: _105.QueryProposalsRequest): _105.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryProposalsRequestProtoMsg): _105.QueryProposalsRequest;
                toProto(message: _105.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryProposalsRequest): _105.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _105.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryProposalsResponse;
                fromPartial(object: Partial<_105.QueryProposalsResponse>): _105.QueryProposalsResponse;
                fromAmino(object: _105.QueryProposalsResponseAmino): _105.QueryProposalsResponse;
                toAmino(message: _105.QueryProposalsResponse): _105.QueryProposalsResponseAmino;
                fromAminoMsg(object: _105.QueryProposalsResponseAminoMsg): _105.QueryProposalsResponse;
                toAminoMsg(message: _105.QueryProposalsResponse): _105.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryProposalsResponseProtoMsg): _105.QueryProposalsResponse;
                toProto(message: _105.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryProposalsResponse): _105.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _105.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryVoteRequest;
                fromPartial(object: Partial<_105.QueryVoteRequest>): _105.QueryVoteRequest;
                fromAmino(object: _105.QueryVoteRequestAmino): _105.QueryVoteRequest;
                toAmino(message: _105.QueryVoteRequest): _105.QueryVoteRequestAmino;
                fromAminoMsg(object: _105.QueryVoteRequestAminoMsg): _105.QueryVoteRequest;
                toAminoMsg(message: _105.QueryVoteRequest): _105.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _105.QueryVoteRequestProtoMsg): _105.QueryVoteRequest;
                toProto(message: _105.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _105.QueryVoteRequest): _105.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _105.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryVoteResponse;
                fromPartial(object: Partial<_105.QueryVoteResponse>): _105.QueryVoteResponse;
                fromAmino(object: _105.QueryVoteResponseAmino): _105.QueryVoteResponse;
                toAmino(message: _105.QueryVoteResponse): _105.QueryVoteResponseAmino;
                fromAminoMsg(object: _105.QueryVoteResponseAminoMsg): _105.QueryVoteResponse;
                toAminoMsg(message: _105.QueryVoteResponse): _105.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _105.QueryVoteResponseProtoMsg): _105.QueryVoteResponse;
                toProto(message: _105.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _105.QueryVoteResponse): _105.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _105.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryVotesRequest;
                fromPartial(object: Partial<_105.QueryVotesRequest>): _105.QueryVotesRequest;
                fromAmino(object: _105.QueryVotesRequestAmino): _105.QueryVotesRequest;
                toAmino(message: _105.QueryVotesRequest): _105.QueryVotesRequestAmino;
                fromAminoMsg(object: _105.QueryVotesRequestAminoMsg): _105.QueryVotesRequest;
                toAminoMsg(message: _105.QueryVotesRequest): _105.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _105.QueryVotesRequestProtoMsg): _105.QueryVotesRequest;
                toProto(message: _105.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _105.QueryVotesRequest): _105.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _105.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryVotesResponse;
                fromPartial(object: Partial<_105.QueryVotesResponse>): _105.QueryVotesResponse;
                fromAmino(object: _105.QueryVotesResponseAmino): _105.QueryVotesResponse;
                toAmino(message: _105.QueryVotesResponse): _105.QueryVotesResponseAmino;
                fromAminoMsg(object: _105.QueryVotesResponseAminoMsg): _105.QueryVotesResponse;
                toAminoMsg(message: _105.QueryVotesResponse): _105.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _105.QueryVotesResponseProtoMsg): _105.QueryVotesResponse;
                toProto(message: _105.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _105.QueryVotesResponse): _105.QueryVotesResponseProtoMsg;
            };
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
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _105.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDepositRequest;
                fromPartial(object: Partial<_105.QueryDepositRequest>): _105.QueryDepositRequest;
                fromAmino(object: _105.QueryDepositRequestAmino): _105.QueryDepositRequest;
                toAmino(message: _105.QueryDepositRequest): _105.QueryDepositRequestAmino;
                fromAminoMsg(object: _105.QueryDepositRequestAminoMsg): _105.QueryDepositRequest;
                toAminoMsg(message: _105.QueryDepositRequest): _105.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDepositRequestProtoMsg): _105.QueryDepositRequest;
                toProto(message: _105.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDepositRequest): _105.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _105.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDepositResponse;
                fromPartial(object: Partial<_105.QueryDepositResponse>): _105.QueryDepositResponse;
                fromAmino(object: _105.QueryDepositResponseAmino): _105.QueryDepositResponse;
                toAmino(message: _105.QueryDepositResponse): _105.QueryDepositResponseAmino;
                fromAminoMsg(object: _105.QueryDepositResponseAminoMsg): _105.QueryDepositResponse;
                toAminoMsg(message: _105.QueryDepositResponse): _105.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDepositResponseProtoMsg): _105.QueryDepositResponse;
                toProto(message: _105.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDepositResponse): _105.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDepositsRequest;
                fromPartial(object: Partial<_105.QueryDepositsRequest>): _105.QueryDepositsRequest;
                fromAmino(object: _105.QueryDepositsRequestAmino): _105.QueryDepositsRequest;
                toAmino(message: _105.QueryDepositsRequest): _105.QueryDepositsRequestAmino;
                fromAminoMsg(object: _105.QueryDepositsRequestAminoMsg): _105.QueryDepositsRequest;
                toAminoMsg(message: _105.QueryDepositsRequest): _105.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryDepositsRequestProtoMsg): _105.QueryDepositsRequest;
                toProto(message: _105.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDepositsRequest): _105.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryDepositsResponse;
                fromPartial(object: Partial<_105.QueryDepositsResponse>): _105.QueryDepositsResponse;
                fromAmino(object: _105.QueryDepositsResponseAmino): _105.QueryDepositsResponse;
                toAmino(message: _105.QueryDepositsResponse): _105.QueryDepositsResponseAmino;
                fromAminoMsg(object: _105.QueryDepositsResponseAminoMsg): _105.QueryDepositsResponse;
                toAminoMsg(message: _105.QueryDepositsResponse): _105.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryDepositsResponseProtoMsg): _105.QueryDepositsResponse;
                toProto(message: _105.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDepositsResponse): _105.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _105.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryTallyResultRequest;
                fromPartial(object: Partial<_105.QueryTallyResultRequest>): _105.QueryTallyResultRequest;
                fromAmino(object: _105.QueryTallyResultRequestAmino): _105.QueryTallyResultRequest;
                toAmino(message: _105.QueryTallyResultRequest): _105.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _105.QueryTallyResultRequestAminoMsg): _105.QueryTallyResultRequest;
                toAminoMsg(message: _105.QueryTallyResultRequest): _105.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _105.QueryTallyResultRequestProtoMsg): _105.QueryTallyResultRequest;
                toProto(message: _105.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _105.QueryTallyResultRequest): _105.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _105.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.QueryTallyResultResponse;
                fromPartial(object: Partial<_105.QueryTallyResultResponse>): _105.QueryTallyResultResponse;
                fromAmino(object: _105.QueryTallyResultResponseAmino): _105.QueryTallyResultResponse;
                toAmino(message: _105.QueryTallyResultResponse): _105.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _105.QueryTallyResultResponseAminoMsg): _105.QueryTallyResultResponse;
                toAminoMsg(message: _105.QueryTallyResultResponse): _105.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _105.QueryTallyResultResponseProtoMsg): _105.QueryTallyResultResponse;
                toProto(message: _105.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _105.QueryTallyResultResponse): _105.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _104.VoteOption;
            voteOptionToJSON(object: _104.VoteOption): string;
            proposalStatusFromJSON(object: any): _104.ProposalStatus;
            proposalStatusToJSON(object: _104.ProposalStatus): string;
            VoteOption: typeof _104.VoteOption;
            VoteOptionSDKType: typeof _104.VoteOption;
            VoteOptionAmino: typeof _104.VoteOption;
            ProposalStatus: typeof _104.ProposalStatus;
            ProposalStatusSDKType: typeof _104.ProposalStatus;
            ProposalStatusAmino: typeof _104.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _104.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.WeightedVoteOption;
                fromPartial(object: Partial<_104.WeightedVoteOption>): _104.WeightedVoteOption;
                fromAmino(object: _104.WeightedVoteOptionAmino): _104.WeightedVoteOption;
                toAmino(message: _104.WeightedVoteOption): _104.WeightedVoteOptionAmino;
                fromAminoMsg(object: _104.WeightedVoteOptionAminoMsg): _104.WeightedVoteOption;
                toAminoMsg(message: _104.WeightedVoteOption): _104.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _104.WeightedVoteOptionProtoMsg): _104.WeightedVoteOption;
                toProto(message: _104.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _104.WeightedVoteOption): _104.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _104.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.TextProposal;
                fromPartial(object: Partial<_104.TextProposal>): _104.TextProposal;
                fromAmino(object: _104.TextProposalAmino): _104.TextProposal;
                toAmino(message: _104.TextProposal): _104.TextProposalAmino;
                fromAminoMsg(object: _104.TextProposalAminoMsg): _104.TextProposal;
                toAminoMsg(message: _104.TextProposal): _104.TextProposalAminoMsg;
                fromProtoMsg(message: _104.TextProposalProtoMsg): _104.TextProposal;
                toProto(message: _104.TextProposal): Uint8Array;
                toProtoMsg(message: _104.TextProposal): _104.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _104.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.Deposit;
                fromPartial(object: Partial<_104.Deposit>): _104.Deposit;
                fromAmino(object: _104.DepositAmino): _104.Deposit;
                toAmino(message: _104.Deposit): _104.DepositAmino;
                fromAminoMsg(object: _104.DepositAminoMsg): _104.Deposit;
                toAminoMsg(message: _104.Deposit): _104.DepositAminoMsg;
                fromProtoMsg(message: _104.DepositProtoMsg): _104.Deposit;
                toProto(message: _104.Deposit): Uint8Array;
                toProtoMsg(message: _104.Deposit): _104.DepositProtoMsg;
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
            DepositParams: {
                typeUrl: string;
                encode(message: _104.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.DepositParams;
                fromPartial(object: Partial<_104.DepositParams>): _104.DepositParams;
                fromAmino(object: _104.DepositParamsAmino): _104.DepositParams;
                toAmino(message: _104.DepositParams): _104.DepositParamsAmino;
                fromAminoMsg(object: _104.DepositParamsAminoMsg): _104.DepositParams;
                toAminoMsg(message: _104.DepositParams): _104.DepositParamsAminoMsg;
                fromProtoMsg(message: _104.DepositParamsProtoMsg): _104.DepositParams;
                toProto(message: _104.DepositParams): Uint8Array;
                toProtoMsg(message: _104.DepositParams): _104.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _104.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.VotingParams;
                fromPartial(object: Partial<_104.VotingParams>): _104.VotingParams;
                fromAmino(object: _104.VotingParamsAmino): _104.VotingParams;
                toAmino(message: _104.VotingParams): _104.VotingParamsAmino;
                fromAminoMsg(object: _104.VotingParamsAminoMsg): _104.VotingParams;
                toAminoMsg(message: _104.VotingParams): _104.VotingParamsAminoMsg;
                fromProtoMsg(message: _104.VotingParamsProtoMsg): _104.VotingParams;
                toProto(message: _104.VotingParams): Uint8Array;
                toProtoMsg(message: _104.VotingParams): _104.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _104.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.TallyParams;
                fromPartial(object: Partial<_104.TallyParams>): _104.TallyParams;
                fromAmino(object: _104.TallyParamsAmino): _104.TallyParams;
                toAmino(message: _104.TallyParams): _104.TallyParamsAmino;
                fromAminoMsg(object: _104.TallyParamsAminoMsg): _104.TallyParams;
                toAminoMsg(message: _104.TallyParams): _104.TallyParamsAminoMsg;
                fromProtoMsg(message: _104.TallyParamsProtoMsg): _104.TallyParams;
                toProto(message: _104.TallyParams): Uint8Array;
                toProtoMsg(message: _104.TallyParams): _104.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _103.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GenesisState;
                fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
                fromAmino(object: _103.GenesisStateAmino): _103.GenesisState;
                toAmino(message: _103.GenesisState): _103.GenesisStateAmino;
                fromAminoMsg(object: _103.GenesisStateAminoMsg): _103.GenesisState;
                toAminoMsg(message: _103.GenesisState): _103.GenesisStateAminoMsg;
                fromProtoMsg(message: _103.GenesisStateProtoMsg): _103.GenesisState;
                toProto(message: _103.GenesisState): Uint8Array;
                toProtoMsg(message: _103.GenesisState): _103.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
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
            MsgClientImpl: typeof _307.MsgClientImpl;
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _110.QueryGroupInfoRequest): Promise<_110.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _110.QueryGroupPolicyInfoRequest): Promise<_110.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _110.QueryGroupMembersRequest): Promise<_110.QueryGroupMembersResponse>;
                groupsByAdmin(request: _110.QueryGroupsByAdminRequest): Promise<_110.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _110.QueryGroupPoliciesByGroupRequest): Promise<_110.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _110.QueryGroupPoliciesByAdminRequest): Promise<_110.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _110.QueryProposalRequest): Promise<_110.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _110.QueryProposalsByGroupPolicyRequest): Promise<_110.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _110.QueryVoteByProposalVoterRequest): Promise<_110.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _110.QueryVotesByProposalRequest): Promise<_110.QueryVotesByProposalResponse>;
                votesByVoter(request: _110.QueryVotesByVoterRequest): Promise<_110.QueryVotesByVoterResponse>;
                groupsByMember(request: _110.QueryGroupsByMemberRequest): Promise<_110.QueryGroupsByMemberResponse>;
                tallyResult(request: _110.QueryTallyResultRequest): Promise<_110.QueryTallyResultResponse>;
                groups(request?: _110.QueryGroupsRequest): Promise<_110.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _267.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _111.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _111.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _111.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _111.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _111.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _111.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _111.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _111.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _111.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _111.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _111.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _111.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _111.MsgCreateGroup): {
                        typeUrl: string;
                        value: _111.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _111.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _111.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _111.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _111.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _111.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _111.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _111.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _111.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _111.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _111.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _111.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _111.MsgWithdrawProposal;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    exec(value: _111.MsgExec): {
                        typeUrl: string;
                        value: _111.MsgExec;
                    };
                    leaveGroup(value: _111.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _111.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _111.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _111.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _111.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _111.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _111.MsgCreateGroup): {
                        typeUrl: string;
                        value: _111.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _111.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _111.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _111.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _111.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _111.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _111.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _111.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _111.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _111.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _111.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _111.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _111.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _111.MsgWithdrawProposal;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    exec(value: _111.MsgExec): {
                        typeUrl: string;
                        value: _111.MsgExec;
                    };
                    leaveGroup(value: _111.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _111.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _111.MsgCreateGroup) => _111.MsgCreateGroupAmino;
                    fromAmino: (object: _111.MsgCreateGroupAmino) => _111.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _111.MsgUpdateGroupMembers) => _111.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _111.MsgUpdateGroupMembersAmino) => _111.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _111.MsgUpdateGroupAdmin) => _111.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _111.MsgUpdateGroupAdminAmino) => _111.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _111.MsgUpdateGroupMetadata) => _111.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _111.MsgUpdateGroupMetadataAmino) => _111.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _111.MsgCreateGroupPolicy) => _111.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _111.MsgCreateGroupPolicyAmino) => _111.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _111.MsgCreateGroupWithPolicy) => _111.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _111.MsgCreateGroupWithPolicyAmino) => _111.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _111.MsgUpdateGroupPolicyAdmin) => _111.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _111.MsgUpdateGroupPolicyAdminAmino) => _111.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _111.MsgUpdateGroupPolicyDecisionPolicy) => _111.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _111.MsgUpdateGroupPolicyDecisionPolicyAmino) => _111.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _111.MsgUpdateGroupPolicyMetadata) => _111.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _111.MsgUpdateGroupPolicyMetadataAmino) => _111.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _111.MsgSubmitProposal) => _111.MsgSubmitProposalAmino;
                    fromAmino: (object: _111.MsgSubmitProposalAmino) => _111.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _111.MsgWithdrawProposal) => _111.MsgWithdrawProposalAmino;
                    fromAmino: (object: _111.MsgWithdrawProposalAmino) => _111.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _111.MsgVote) => _111.MsgVoteAmino;
                    fromAmino: (object: _111.MsgVoteAmino) => _111.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _111.MsgExec) => _111.MsgExecAmino;
                    fromAmino: (object: _111.MsgExecAmino) => _111.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _111.MsgLeaveGroup) => _111.MsgLeaveGroupAmino;
                    fromAmino: (object: _111.MsgLeaveGroupAmino) => _111.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _112.VoteOption;
            voteOptionToJSON(object: _112.VoteOption): string;
            proposalStatusFromJSON(object: any): _112.ProposalStatus;
            proposalStatusToJSON(object: _112.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _112.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _112.ProposalExecutorResult): string;
            VoteOption: typeof _112.VoteOption;
            VoteOptionSDKType: typeof _112.VoteOption;
            VoteOptionAmino: typeof _112.VoteOption;
            ProposalStatus: typeof _112.ProposalStatus;
            ProposalStatusSDKType: typeof _112.ProposalStatus;
            ProposalStatusAmino: typeof _112.ProposalStatus;
            ProposalExecutorResult: typeof _112.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _112.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _112.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _112.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Member;
                fromPartial(object: Partial<_112.Member>): _112.Member;
                fromAmino(object: _112.MemberAmino): _112.Member;
                toAmino(message: _112.Member): _112.MemberAmino;
                fromAminoMsg(object: _112.MemberAminoMsg): _112.Member;
                toAminoMsg(message: _112.Member): _112.MemberAminoMsg;
                fromProtoMsg(message: _112.MemberProtoMsg): _112.Member;
                toProto(message: _112.Member): Uint8Array;
                toProtoMsg(message: _112.Member): _112.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _112.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.MemberRequest;
                fromPartial(object: Partial<_112.MemberRequest>): _112.MemberRequest;
                fromAmino(object: _112.MemberRequestAmino): _112.MemberRequest;
                toAmino(message: _112.MemberRequest): _112.MemberRequestAmino;
                fromAminoMsg(object: _112.MemberRequestAminoMsg): _112.MemberRequest;
                toAminoMsg(message: _112.MemberRequest): _112.MemberRequestAminoMsg;
                fromProtoMsg(message: _112.MemberRequestProtoMsg): _112.MemberRequest;
                toProto(message: _112.MemberRequest): Uint8Array;
                toProtoMsg(message: _112.MemberRequest): _112.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _112.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_112.ThresholdDecisionPolicy>): _112.ThresholdDecisionPolicy;
                fromAmino(object: _112.ThresholdDecisionPolicyAmino): _112.ThresholdDecisionPolicy;
                toAmino(message: _112.ThresholdDecisionPolicy): _112.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _112.ThresholdDecisionPolicyAminoMsg): _112.ThresholdDecisionPolicy;
                toAminoMsg(message: _112.ThresholdDecisionPolicy): _112.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _112.ThresholdDecisionPolicyProtoMsg): _112.ThresholdDecisionPolicy;
                toProto(message: _112.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _112.ThresholdDecisionPolicy): _112.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _112.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.PercentageDecisionPolicy;
                fromPartial(object: Partial<_112.PercentageDecisionPolicy>): _112.PercentageDecisionPolicy;
                fromAmino(object: _112.PercentageDecisionPolicyAmino): _112.PercentageDecisionPolicy;
                toAmino(message: _112.PercentageDecisionPolicy): _112.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _112.PercentageDecisionPolicyAminoMsg): _112.PercentageDecisionPolicy;
                toAminoMsg(message: _112.PercentageDecisionPolicy): _112.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _112.PercentageDecisionPolicyProtoMsg): _112.PercentageDecisionPolicy;
                toProto(message: _112.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _112.PercentageDecisionPolicy): _112.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _112.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.DecisionPolicyWindows;
                fromPartial(object: Partial<_112.DecisionPolicyWindows>): _112.DecisionPolicyWindows;
                fromAmino(object: _112.DecisionPolicyWindowsAmino): _112.DecisionPolicyWindows;
                toAmino(message: _112.DecisionPolicyWindows): _112.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _112.DecisionPolicyWindowsAminoMsg): _112.DecisionPolicyWindows;
                toAminoMsg(message: _112.DecisionPolicyWindows): _112.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _112.DecisionPolicyWindowsProtoMsg): _112.DecisionPolicyWindows;
                toProto(message: _112.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _112.DecisionPolicyWindows): _112.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _112.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GroupInfo;
                fromPartial(object: Partial<_112.GroupInfo>): _112.GroupInfo;
                fromAmino(object: _112.GroupInfoAmino): _112.GroupInfo;
                toAmino(message: _112.GroupInfo): _112.GroupInfoAmino;
                fromAminoMsg(object: _112.GroupInfoAminoMsg): _112.GroupInfo;
                toAminoMsg(message: _112.GroupInfo): _112.GroupInfoAminoMsg;
                fromProtoMsg(message: _112.GroupInfoProtoMsg): _112.GroupInfo;
                toProto(message: _112.GroupInfo): Uint8Array;
                toProtoMsg(message: _112.GroupInfo): _112.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _112.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GroupMember;
                fromPartial(object: Partial<_112.GroupMember>): _112.GroupMember;
                fromAmino(object: _112.GroupMemberAmino): _112.GroupMember;
                toAmino(message: _112.GroupMember): _112.GroupMemberAmino;
                fromAminoMsg(object: _112.GroupMemberAminoMsg): _112.GroupMember;
                toAminoMsg(message: _112.GroupMember): _112.GroupMemberAminoMsg;
                fromProtoMsg(message: _112.GroupMemberProtoMsg): _112.GroupMember;
                toProto(message: _112.GroupMember): Uint8Array;
                toProtoMsg(message: _112.GroupMember): _112.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _112.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GroupPolicyInfo;
                fromPartial(object: Partial<_112.GroupPolicyInfo>): _112.GroupPolicyInfo;
                fromAmino(object: _112.GroupPolicyInfoAmino): _112.GroupPolicyInfo;
                toAmino(message: _112.GroupPolicyInfo): _112.GroupPolicyInfoAmino;
                fromAminoMsg(object: _112.GroupPolicyInfoAminoMsg): _112.GroupPolicyInfo;
                toAminoMsg(message: _112.GroupPolicyInfo): _112.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _112.GroupPolicyInfoProtoMsg): _112.GroupPolicyInfo;
                toProto(message: _112.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _112.GroupPolicyInfo): _112.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _112.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Proposal;
                fromPartial(object: Partial<_112.Proposal>): _112.Proposal;
                fromAmino(object: _112.ProposalAmino): _112.Proposal;
                toAmino(message: _112.Proposal): _112.ProposalAmino;
                fromAminoMsg(object: _112.ProposalAminoMsg): _112.Proposal;
                toAminoMsg(message: _112.Proposal): _112.ProposalAminoMsg;
                fromProtoMsg(message: _112.ProposalProtoMsg): _112.Proposal;
                toProto(message: _112.Proposal): Uint8Array;
                toProtoMsg(message: _112.Proposal): _112.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _112.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.TallyResult;
                fromPartial(object: Partial<_112.TallyResult>): _112.TallyResult;
                fromAmino(object: _112.TallyResultAmino): _112.TallyResult;
                toAmino(message: _112.TallyResult): _112.TallyResultAmino;
                fromAminoMsg(object: _112.TallyResultAminoMsg): _112.TallyResult;
                toAminoMsg(message: _112.TallyResult): _112.TallyResultAminoMsg;
                fromProtoMsg(message: _112.TallyResultProtoMsg): _112.TallyResult;
                toProto(message: _112.TallyResult): Uint8Array;
                toProtoMsg(message: _112.TallyResult): _112.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _112.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Vote;
                fromPartial(object: Partial<_112.Vote>): _112.Vote;
                fromAmino(object: _112.VoteAmino): _112.Vote;
                toAmino(message: _112.Vote): _112.VoteAmino;
                fromAminoMsg(object: _112.VoteAminoMsg): _112.Vote;
                toAminoMsg(message: _112.Vote): _112.VoteAminoMsg;
                fromProtoMsg(message: _112.VoteProtoMsg): _112.Vote;
                toProto(message: _112.Vote): Uint8Array;
                toProtoMsg(message: _112.Vote): _112.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _112.ThresholdDecisionPolicy | _112.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _111.Exec;
            execToJSON(object: _111.Exec): string;
            Exec: typeof _111.Exec;
            ExecSDKType: typeof _111.Exec;
            ExecAmino: typeof _111.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _111.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreateGroup;
                fromPartial(object: Partial<_111.MsgCreateGroup>): _111.MsgCreateGroup;
                fromAmino(object: _111.MsgCreateGroupAmino): _111.MsgCreateGroup;
                toAmino(message: _111.MsgCreateGroup): _111.MsgCreateGroupAmino;
                fromAminoMsg(object: _111.MsgCreateGroupAminoMsg): _111.MsgCreateGroup;
                toAminoMsg(message: _111.MsgCreateGroup): _111.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _111.MsgCreateGroupProtoMsg): _111.MsgCreateGroup;
                toProto(message: _111.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _111.MsgCreateGroup): _111.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _111.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreateGroupResponse;
                fromPartial(object: Partial<_111.MsgCreateGroupResponse>): _111.MsgCreateGroupResponse;
                fromAmino(object: _111.MsgCreateGroupResponseAmino): _111.MsgCreateGroupResponse;
                toAmino(message: _111.MsgCreateGroupResponse): _111.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _111.MsgCreateGroupResponseAminoMsg): _111.MsgCreateGroupResponse;
                toAminoMsg(message: _111.MsgCreateGroupResponse): _111.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCreateGroupResponseProtoMsg): _111.MsgCreateGroupResponse;
                toProto(message: _111.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCreateGroupResponse): _111.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _111.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_111.MsgUpdateGroupMembers>): _111.MsgUpdateGroupMembers;
                fromAmino(object: _111.MsgUpdateGroupMembersAmino): _111.MsgUpdateGroupMembers;
                toAmino(message: _111.MsgUpdateGroupMembers): _111.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupMembersAminoMsg): _111.MsgUpdateGroupMembers;
                toAminoMsg(message: _111.MsgUpdateGroupMembers): _111.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupMembersProtoMsg): _111.MsgUpdateGroupMembers;
                toProto(message: _111.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupMembers): _111.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _111.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_111.MsgUpdateGroupMembersResponse>): _111.MsgUpdateGroupMembersResponse;
                fromAmino(_: _111.MsgUpdateGroupMembersResponseAmino): _111.MsgUpdateGroupMembersResponse;
                toAmino(_: _111.MsgUpdateGroupMembersResponse): _111.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupMembersResponseAminoMsg): _111.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _111.MsgUpdateGroupMembersResponse): _111.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupMembersResponseProtoMsg): _111.MsgUpdateGroupMembersResponse;
                toProto(message: _111.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupMembersResponse): _111.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _111.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_111.MsgUpdateGroupAdmin>): _111.MsgUpdateGroupAdmin;
                fromAmino(object: _111.MsgUpdateGroupAdminAmino): _111.MsgUpdateGroupAdmin;
                toAmino(message: _111.MsgUpdateGroupAdmin): _111.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupAdminAminoMsg): _111.MsgUpdateGroupAdmin;
                toAminoMsg(message: _111.MsgUpdateGroupAdmin): _111.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupAdminProtoMsg): _111.MsgUpdateGroupAdmin;
                toProto(message: _111.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupAdmin): _111.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _111.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_111.MsgUpdateGroupAdminResponse>): _111.MsgUpdateGroupAdminResponse;
                fromAmino(_: _111.MsgUpdateGroupAdminResponseAmino): _111.MsgUpdateGroupAdminResponse;
                toAmino(_: _111.MsgUpdateGroupAdminResponse): _111.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupAdminResponseAminoMsg): _111.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _111.MsgUpdateGroupAdminResponse): _111.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupAdminResponseProtoMsg): _111.MsgUpdateGroupAdminResponse;
                toProto(message: _111.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupAdminResponse): _111.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _111.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_111.MsgUpdateGroupMetadata>): _111.MsgUpdateGroupMetadata;
                fromAmino(object: _111.MsgUpdateGroupMetadataAmino): _111.MsgUpdateGroupMetadata;
                toAmino(message: _111.MsgUpdateGroupMetadata): _111.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupMetadataAminoMsg): _111.MsgUpdateGroupMetadata;
                toAminoMsg(message: _111.MsgUpdateGroupMetadata): _111.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupMetadataProtoMsg): _111.MsgUpdateGroupMetadata;
                toProto(message: _111.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupMetadata): _111.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _111.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_111.MsgUpdateGroupMetadataResponse>): _111.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _111.MsgUpdateGroupMetadataResponseAmino): _111.MsgUpdateGroupMetadataResponse;
                toAmino(_: _111.MsgUpdateGroupMetadataResponse): _111.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupMetadataResponseAminoMsg): _111.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _111.MsgUpdateGroupMetadataResponse): _111.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupMetadataResponseProtoMsg): _111.MsgUpdateGroupMetadataResponse;
                toProto(message: _111.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupMetadataResponse): _111.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _111.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_111.MsgCreateGroupPolicy>): _111.MsgCreateGroupPolicy;
                fromAmino(object: _111.MsgCreateGroupPolicyAmino): _111.MsgCreateGroupPolicy;
                toAmino(message: _111.MsgCreateGroupPolicy): _111.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _111.MsgCreateGroupPolicyAminoMsg): _111.MsgCreateGroupPolicy;
                toAminoMsg(message: _111.MsgCreateGroupPolicy): _111.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _111.MsgCreateGroupPolicyProtoMsg): _111.MsgCreateGroupPolicy;
                toProto(message: _111.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _111.MsgCreateGroupPolicy): _111.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _111.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_111.MsgCreateGroupPolicyResponse>): _111.MsgCreateGroupPolicyResponse;
                fromAmino(object: _111.MsgCreateGroupPolicyResponseAmino): _111.MsgCreateGroupPolicyResponse;
                toAmino(message: _111.MsgCreateGroupPolicyResponse): _111.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _111.MsgCreateGroupPolicyResponseAminoMsg): _111.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _111.MsgCreateGroupPolicyResponse): _111.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCreateGroupPolicyResponseProtoMsg): _111.MsgCreateGroupPolicyResponse;
                toProto(message: _111.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCreateGroupPolicyResponse): _111.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _111.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_111.MsgUpdateGroupPolicyAdmin>): _111.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _111.MsgUpdateGroupPolicyAdminAmino): _111.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _111.MsgUpdateGroupPolicyAdmin): _111.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupPolicyAdminAminoMsg): _111.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _111.MsgUpdateGroupPolicyAdmin): _111.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupPolicyAdminProtoMsg): _111.MsgUpdateGroupPolicyAdmin;
                toProto(message: _111.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupPolicyAdmin): _111.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _111.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_111.MsgUpdateGroupPolicyAdminResponse>): _111.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _111.MsgUpdateGroupPolicyAdminResponseAmino): _111.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _111.MsgUpdateGroupPolicyAdminResponse): _111.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupPolicyAdminResponseAminoMsg): _111.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _111.MsgUpdateGroupPolicyAdminResponse): _111.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupPolicyAdminResponseProtoMsg): _111.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _111.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupPolicyAdminResponse): _111.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _111.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_111.MsgCreateGroupWithPolicy>): _111.MsgCreateGroupWithPolicy;
                fromAmino(object: _111.MsgCreateGroupWithPolicyAmino): _111.MsgCreateGroupWithPolicy;
                toAmino(message: _111.MsgCreateGroupWithPolicy): _111.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _111.MsgCreateGroupWithPolicyAminoMsg): _111.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _111.MsgCreateGroupWithPolicy): _111.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _111.MsgCreateGroupWithPolicyProtoMsg): _111.MsgCreateGroupWithPolicy;
                toProto(message: _111.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _111.MsgCreateGroupWithPolicy): _111.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _111.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_111.MsgCreateGroupWithPolicyResponse>): _111.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _111.MsgCreateGroupWithPolicyResponseAmino): _111.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _111.MsgCreateGroupWithPolicyResponse): _111.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _111.MsgCreateGroupWithPolicyResponseAminoMsg): _111.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _111.MsgCreateGroupWithPolicyResponse): _111.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCreateGroupWithPolicyResponseProtoMsg): _111.MsgCreateGroupWithPolicyResponse;
                toProto(message: _111.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCreateGroupWithPolicyResponse): _111.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _111.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_111.MsgUpdateGroupPolicyDecisionPolicy>): _111.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _111.MsgUpdateGroupPolicyDecisionPolicyAmino): _111.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _111.MsgUpdateGroupPolicyDecisionPolicy): _111.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _111.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _111.MsgUpdateGroupPolicyDecisionPolicy): _111.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _111.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _111.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupPolicyDecisionPolicy): _111.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _111.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_111.MsgUpdateGroupPolicyDecisionPolicyResponse>): _111.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _111.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _111.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _111.MsgUpdateGroupPolicyDecisionPolicyResponse): _111.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _111.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _111.MsgUpdateGroupPolicyDecisionPolicyResponse): _111.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _111.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _111.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupPolicyDecisionPolicyResponse): _111.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _111.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_111.MsgUpdateGroupPolicyMetadata>): _111.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _111.MsgUpdateGroupPolicyMetadataAmino): _111.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _111.MsgUpdateGroupPolicyMetadata): _111.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupPolicyMetadataAminoMsg): _111.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _111.MsgUpdateGroupPolicyMetadata): _111.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupPolicyMetadataProtoMsg): _111.MsgUpdateGroupPolicyMetadata;
                toProto(message: _111.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupPolicyMetadata): _111.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _111.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_111.MsgUpdateGroupPolicyMetadataResponse>): _111.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _111.MsgUpdateGroupPolicyMetadataResponseAmino): _111.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _111.MsgUpdateGroupPolicyMetadataResponse): _111.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _111.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _111.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _111.MsgUpdateGroupPolicyMetadataResponse): _111.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _111.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _111.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _111.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _111.MsgUpdateGroupPolicyMetadataResponse): _111.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _111.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgSubmitProposal;
                fromPartial(object: Partial<_111.MsgSubmitProposal>): _111.MsgSubmitProposal;
                fromAmino(object: _111.MsgSubmitProposalAmino): _111.MsgSubmitProposal;
                toAmino(message: _111.MsgSubmitProposal): _111.MsgSubmitProposalAmino;
                fromAminoMsg(object: _111.MsgSubmitProposalAminoMsg): _111.MsgSubmitProposal;
                toAminoMsg(message: _111.MsgSubmitProposal): _111.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _111.MsgSubmitProposalProtoMsg): _111.MsgSubmitProposal;
                toProto(message: _111.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _111.MsgSubmitProposal): _111.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _111.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_111.MsgSubmitProposalResponse>): _111.MsgSubmitProposalResponse;
                fromAmino(object: _111.MsgSubmitProposalResponseAmino): _111.MsgSubmitProposalResponse;
                toAmino(message: _111.MsgSubmitProposalResponse): _111.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _111.MsgSubmitProposalResponseAminoMsg): _111.MsgSubmitProposalResponse;
                toAminoMsg(message: _111.MsgSubmitProposalResponse): _111.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _111.MsgSubmitProposalResponseProtoMsg): _111.MsgSubmitProposalResponse;
                toProto(message: _111.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _111.MsgSubmitProposalResponse): _111.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _111.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgWithdrawProposal;
                fromPartial(object: Partial<_111.MsgWithdrawProposal>): _111.MsgWithdrawProposal;
                fromAmino(object: _111.MsgWithdrawProposalAmino): _111.MsgWithdrawProposal;
                toAmino(message: _111.MsgWithdrawProposal): _111.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _111.MsgWithdrawProposalAminoMsg): _111.MsgWithdrawProposal;
                toAminoMsg(message: _111.MsgWithdrawProposal): _111.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _111.MsgWithdrawProposalProtoMsg): _111.MsgWithdrawProposal;
                toProto(message: _111.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _111.MsgWithdrawProposal): _111.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _111.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_111.MsgWithdrawProposalResponse>): _111.MsgWithdrawProposalResponse;
                fromAmino(_: _111.MsgWithdrawProposalResponseAmino): _111.MsgWithdrawProposalResponse;
                toAmino(_: _111.MsgWithdrawProposalResponse): _111.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _111.MsgWithdrawProposalResponseAminoMsg): _111.MsgWithdrawProposalResponse;
                toAminoMsg(message: _111.MsgWithdrawProposalResponse): _111.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _111.MsgWithdrawProposalResponseProtoMsg): _111.MsgWithdrawProposalResponse;
                toProto(message: _111.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _111.MsgWithdrawProposalResponse): _111.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _111.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgVote;
                fromPartial(object: Partial<_111.MsgVote>): _111.MsgVote;
                fromAmino(object: _111.MsgVoteAmino): _111.MsgVote;
                toAmino(message: _111.MsgVote): _111.MsgVoteAmino;
                fromAminoMsg(object: _111.MsgVoteAminoMsg): _111.MsgVote;
                toAminoMsg(message: _111.MsgVote): _111.MsgVoteAminoMsg;
                fromProtoMsg(message: _111.MsgVoteProtoMsg): _111.MsgVote;
                toProto(message: _111.MsgVote): Uint8Array;
                toProtoMsg(message: _111.MsgVote): _111.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _111.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgVoteResponse;
                fromPartial(_: Partial<_111.MsgVoteResponse>): _111.MsgVoteResponse;
                fromAmino(_: _111.MsgVoteResponseAmino): _111.MsgVoteResponse;
                toAmino(_: _111.MsgVoteResponse): _111.MsgVoteResponseAmino;
                fromAminoMsg(object: _111.MsgVoteResponseAminoMsg): _111.MsgVoteResponse;
                toAminoMsg(message: _111.MsgVoteResponse): _111.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _111.MsgVoteResponseProtoMsg): _111.MsgVoteResponse;
                toProto(message: _111.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _111.MsgVoteResponse): _111.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _111.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgExec;
                fromPartial(object: Partial<_111.MsgExec>): _111.MsgExec;
                fromAmino(object: _111.MsgExecAmino): _111.MsgExec;
                toAmino(message: _111.MsgExec): _111.MsgExecAmino;
                fromAminoMsg(object: _111.MsgExecAminoMsg): _111.MsgExec;
                toAminoMsg(message: _111.MsgExec): _111.MsgExecAminoMsg;
                fromProtoMsg(message: _111.MsgExecProtoMsg): _111.MsgExec;
                toProto(message: _111.MsgExec): Uint8Array;
                toProtoMsg(message: _111.MsgExec): _111.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _111.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgExecResponse;
                fromPartial(object: Partial<_111.MsgExecResponse>): _111.MsgExecResponse;
                fromAmino(object: _111.MsgExecResponseAmino): _111.MsgExecResponse;
                toAmino(message: _111.MsgExecResponse): _111.MsgExecResponseAmino;
                fromAminoMsg(object: _111.MsgExecResponseAminoMsg): _111.MsgExecResponse;
                toAminoMsg(message: _111.MsgExecResponse): _111.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _111.MsgExecResponseProtoMsg): _111.MsgExecResponse;
                toProto(message: _111.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _111.MsgExecResponse): _111.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _111.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MsgLeaveGroup;
                fromPartial(object: Partial<_111.MsgLeaveGroup>): _111.MsgLeaveGroup;
                fromAmino(object: _111.MsgLeaveGroupAmino): _111.MsgLeaveGroup;
                toAmino(message: _111.MsgLeaveGroup): _111.MsgLeaveGroupAmino;
                fromAminoMsg(object: _111.MsgLeaveGroupAminoMsg): _111.MsgLeaveGroup;
                toAminoMsg(message: _111.MsgLeaveGroup): _111.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _111.MsgLeaveGroupProtoMsg): _111.MsgLeaveGroup;
                toProto(message: _111.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _111.MsgLeaveGroup): _111.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _111.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _111.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_111.MsgLeaveGroupResponse>): _111.MsgLeaveGroupResponse;
                fromAmino(_: _111.MsgLeaveGroupResponseAmino): _111.MsgLeaveGroupResponse;
                toAmino(_: _111.MsgLeaveGroupResponse): _111.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _111.MsgLeaveGroupResponseAminoMsg): _111.MsgLeaveGroupResponse;
                toAminoMsg(message: _111.MsgLeaveGroupResponse): _111.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _111.MsgLeaveGroupResponseProtoMsg): _111.MsgLeaveGroupResponse;
                toProto(message: _111.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _111.MsgLeaveGroupResponse): _111.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupInfoRequest;
                fromPartial(object: Partial<_110.QueryGroupInfoRequest>): _110.QueryGroupInfoRequest;
                fromAmino(object: _110.QueryGroupInfoRequestAmino): _110.QueryGroupInfoRequest;
                toAmino(message: _110.QueryGroupInfoRequest): _110.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _110.QueryGroupInfoRequestAminoMsg): _110.QueryGroupInfoRequest;
                toAminoMsg(message: _110.QueryGroupInfoRequest): _110.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupInfoRequestProtoMsg): _110.QueryGroupInfoRequest;
                toProto(message: _110.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupInfoRequest): _110.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupInfoResponse;
                fromPartial(object: Partial<_110.QueryGroupInfoResponse>): _110.QueryGroupInfoResponse;
                fromAmino(object: _110.QueryGroupInfoResponseAmino): _110.QueryGroupInfoResponse;
                toAmino(message: _110.QueryGroupInfoResponse): _110.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _110.QueryGroupInfoResponseAminoMsg): _110.QueryGroupInfoResponse;
                toAminoMsg(message: _110.QueryGroupInfoResponse): _110.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupInfoResponseProtoMsg): _110.QueryGroupInfoResponse;
                toProto(message: _110.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupInfoResponse): _110.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_110.QueryGroupPolicyInfoRequest>): _110.QueryGroupPolicyInfoRequest;
                fromAmino(object: _110.QueryGroupPolicyInfoRequestAmino): _110.QueryGroupPolicyInfoRequest;
                toAmino(message: _110.QueryGroupPolicyInfoRequest): _110.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _110.QueryGroupPolicyInfoRequestAminoMsg): _110.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _110.QueryGroupPolicyInfoRequest): _110.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupPolicyInfoRequestProtoMsg): _110.QueryGroupPolicyInfoRequest;
                toProto(message: _110.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupPolicyInfoRequest): _110.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_110.QueryGroupPolicyInfoResponse>): _110.QueryGroupPolicyInfoResponse;
                fromAmino(object: _110.QueryGroupPolicyInfoResponseAmino): _110.QueryGroupPolicyInfoResponse;
                toAmino(message: _110.QueryGroupPolicyInfoResponse): _110.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _110.QueryGroupPolicyInfoResponseAminoMsg): _110.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _110.QueryGroupPolicyInfoResponse): _110.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupPolicyInfoResponseProtoMsg): _110.QueryGroupPolicyInfoResponse;
                toProto(message: _110.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupPolicyInfoResponse): _110.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupMembersRequest;
                fromPartial(object: Partial<_110.QueryGroupMembersRequest>): _110.QueryGroupMembersRequest;
                fromAmino(object: _110.QueryGroupMembersRequestAmino): _110.QueryGroupMembersRequest;
                toAmino(message: _110.QueryGroupMembersRequest): _110.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _110.QueryGroupMembersRequestAminoMsg): _110.QueryGroupMembersRequest;
                toAminoMsg(message: _110.QueryGroupMembersRequest): _110.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupMembersRequestProtoMsg): _110.QueryGroupMembersRequest;
                toProto(message: _110.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupMembersRequest): _110.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupMembersResponse;
                fromPartial(object: Partial<_110.QueryGroupMembersResponse>): _110.QueryGroupMembersResponse;
                fromAmino(object: _110.QueryGroupMembersResponseAmino): _110.QueryGroupMembersResponse;
                toAmino(message: _110.QueryGroupMembersResponse): _110.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _110.QueryGroupMembersResponseAminoMsg): _110.QueryGroupMembersResponse;
                toAminoMsg(message: _110.QueryGroupMembersResponse): _110.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupMembersResponseProtoMsg): _110.QueryGroupMembersResponse;
                toProto(message: _110.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupMembersResponse): _110.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_110.QueryGroupsByAdminRequest>): _110.QueryGroupsByAdminRequest;
                fromAmino(object: _110.QueryGroupsByAdminRequestAmino): _110.QueryGroupsByAdminRequest;
                toAmino(message: _110.QueryGroupsByAdminRequest): _110.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _110.QueryGroupsByAdminRequestAminoMsg): _110.QueryGroupsByAdminRequest;
                toAminoMsg(message: _110.QueryGroupsByAdminRequest): _110.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupsByAdminRequestProtoMsg): _110.QueryGroupsByAdminRequest;
                toProto(message: _110.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupsByAdminRequest): _110.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_110.QueryGroupsByAdminResponse>): _110.QueryGroupsByAdminResponse;
                fromAmino(object: _110.QueryGroupsByAdminResponseAmino): _110.QueryGroupsByAdminResponse;
                toAmino(message: _110.QueryGroupsByAdminResponse): _110.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _110.QueryGroupsByAdminResponseAminoMsg): _110.QueryGroupsByAdminResponse;
                toAminoMsg(message: _110.QueryGroupsByAdminResponse): _110.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupsByAdminResponseProtoMsg): _110.QueryGroupsByAdminResponse;
                toProto(message: _110.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupsByAdminResponse): _110.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_110.QueryGroupPoliciesByGroupRequest>): _110.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _110.QueryGroupPoliciesByGroupRequestAmino): _110.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _110.QueryGroupPoliciesByGroupRequest): _110.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _110.QueryGroupPoliciesByGroupRequestAminoMsg): _110.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _110.QueryGroupPoliciesByGroupRequest): _110.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupPoliciesByGroupRequestProtoMsg): _110.QueryGroupPoliciesByGroupRequest;
                toProto(message: _110.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupPoliciesByGroupRequest): _110.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_110.QueryGroupPoliciesByGroupResponse>): _110.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _110.QueryGroupPoliciesByGroupResponseAmino): _110.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _110.QueryGroupPoliciesByGroupResponse): _110.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _110.QueryGroupPoliciesByGroupResponseAminoMsg): _110.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _110.QueryGroupPoliciesByGroupResponse): _110.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupPoliciesByGroupResponseProtoMsg): _110.QueryGroupPoliciesByGroupResponse;
                toProto(message: _110.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupPoliciesByGroupResponse): _110.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_110.QueryGroupPoliciesByAdminRequest>): _110.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _110.QueryGroupPoliciesByAdminRequestAmino): _110.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _110.QueryGroupPoliciesByAdminRequest): _110.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _110.QueryGroupPoliciesByAdminRequestAminoMsg): _110.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _110.QueryGroupPoliciesByAdminRequest): _110.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupPoliciesByAdminRequestProtoMsg): _110.QueryGroupPoliciesByAdminRequest;
                toProto(message: _110.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupPoliciesByAdminRequest): _110.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_110.QueryGroupPoliciesByAdminResponse>): _110.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _110.QueryGroupPoliciesByAdminResponseAmino): _110.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _110.QueryGroupPoliciesByAdminResponse): _110.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _110.QueryGroupPoliciesByAdminResponseAminoMsg): _110.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _110.QueryGroupPoliciesByAdminResponse): _110.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupPoliciesByAdminResponseProtoMsg): _110.QueryGroupPoliciesByAdminResponse;
                toProto(message: _110.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupPoliciesByAdminResponse): _110.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _110.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryProposalRequest;
                fromPartial(object: Partial<_110.QueryProposalRequest>): _110.QueryProposalRequest;
                fromAmino(object: _110.QueryProposalRequestAmino): _110.QueryProposalRequest;
                toAmino(message: _110.QueryProposalRequest): _110.QueryProposalRequestAmino;
                fromAminoMsg(object: _110.QueryProposalRequestAminoMsg): _110.QueryProposalRequest;
                toAminoMsg(message: _110.QueryProposalRequest): _110.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _110.QueryProposalRequestProtoMsg): _110.QueryProposalRequest;
                toProto(message: _110.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _110.QueryProposalRequest): _110.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _110.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryProposalResponse;
                fromPartial(object: Partial<_110.QueryProposalResponse>): _110.QueryProposalResponse;
                fromAmino(object: _110.QueryProposalResponseAmino): _110.QueryProposalResponse;
                toAmino(message: _110.QueryProposalResponse): _110.QueryProposalResponseAmino;
                fromAminoMsg(object: _110.QueryProposalResponseAminoMsg): _110.QueryProposalResponse;
                toAminoMsg(message: _110.QueryProposalResponse): _110.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _110.QueryProposalResponseProtoMsg): _110.QueryProposalResponse;
                toProto(message: _110.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _110.QueryProposalResponse): _110.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _110.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_110.QueryProposalsByGroupPolicyRequest>): _110.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _110.QueryProposalsByGroupPolicyRequestAmino): _110.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _110.QueryProposalsByGroupPolicyRequest): _110.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _110.QueryProposalsByGroupPolicyRequestAminoMsg): _110.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _110.QueryProposalsByGroupPolicyRequest): _110.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _110.QueryProposalsByGroupPolicyRequestProtoMsg): _110.QueryProposalsByGroupPolicyRequest;
                toProto(message: _110.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _110.QueryProposalsByGroupPolicyRequest): _110.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _110.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_110.QueryProposalsByGroupPolicyResponse>): _110.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _110.QueryProposalsByGroupPolicyResponseAmino): _110.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _110.QueryProposalsByGroupPolicyResponse): _110.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _110.QueryProposalsByGroupPolicyResponseAminoMsg): _110.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _110.QueryProposalsByGroupPolicyResponse): _110.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _110.QueryProposalsByGroupPolicyResponseProtoMsg): _110.QueryProposalsByGroupPolicyResponse;
                toProto(message: _110.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _110.QueryProposalsByGroupPolicyResponse): _110.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _110.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_110.QueryVoteByProposalVoterRequest>): _110.QueryVoteByProposalVoterRequest;
                fromAmino(object: _110.QueryVoteByProposalVoterRequestAmino): _110.QueryVoteByProposalVoterRequest;
                toAmino(message: _110.QueryVoteByProposalVoterRequest): _110.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _110.QueryVoteByProposalVoterRequestAminoMsg): _110.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _110.QueryVoteByProposalVoterRequest): _110.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _110.QueryVoteByProposalVoterRequestProtoMsg): _110.QueryVoteByProposalVoterRequest;
                toProto(message: _110.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _110.QueryVoteByProposalVoterRequest): _110.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _110.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_110.QueryVoteByProposalVoterResponse>): _110.QueryVoteByProposalVoterResponse;
                fromAmino(object: _110.QueryVoteByProposalVoterResponseAmino): _110.QueryVoteByProposalVoterResponse;
                toAmino(message: _110.QueryVoteByProposalVoterResponse): _110.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _110.QueryVoteByProposalVoterResponseAminoMsg): _110.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _110.QueryVoteByProposalVoterResponse): _110.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _110.QueryVoteByProposalVoterResponseProtoMsg): _110.QueryVoteByProposalVoterResponse;
                toProto(message: _110.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _110.QueryVoteByProposalVoterResponse): _110.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _110.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_110.QueryVotesByProposalRequest>): _110.QueryVotesByProposalRequest;
                fromAmino(object: _110.QueryVotesByProposalRequestAmino): _110.QueryVotesByProposalRequest;
                toAmino(message: _110.QueryVotesByProposalRequest): _110.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _110.QueryVotesByProposalRequestAminoMsg): _110.QueryVotesByProposalRequest;
                toAminoMsg(message: _110.QueryVotesByProposalRequest): _110.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _110.QueryVotesByProposalRequestProtoMsg): _110.QueryVotesByProposalRequest;
                toProto(message: _110.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _110.QueryVotesByProposalRequest): _110.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _110.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_110.QueryVotesByProposalResponse>): _110.QueryVotesByProposalResponse;
                fromAmino(object: _110.QueryVotesByProposalResponseAmino): _110.QueryVotesByProposalResponse;
                toAmino(message: _110.QueryVotesByProposalResponse): _110.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _110.QueryVotesByProposalResponseAminoMsg): _110.QueryVotesByProposalResponse;
                toAminoMsg(message: _110.QueryVotesByProposalResponse): _110.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _110.QueryVotesByProposalResponseProtoMsg): _110.QueryVotesByProposalResponse;
                toProto(message: _110.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _110.QueryVotesByProposalResponse): _110.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _110.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_110.QueryVotesByVoterRequest>): _110.QueryVotesByVoterRequest;
                fromAmino(object: _110.QueryVotesByVoterRequestAmino): _110.QueryVotesByVoterRequest;
                toAmino(message: _110.QueryVotesByVoterRequest): _110.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _110.QueryVotesByVoterRequestAminoMsg): _110.QueryVotesByVoterRequest;
                toAminoMsg(message: _110.QueryVotesByVoterRequest): _110.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _110.QueryVotesByVoterRequestProtoMsg): _110.QueryVotesByVoterRequest;
                toProto(message: _110.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _110.QueryVotesByVoterRequest): _110.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _110.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_110.QueryVotesByVoterResponse>): _110.QueryVotesByVoterResponse;
                fromAmino(object: _110.QueryVotesByVoterResponseAmino): _110.QueryVotesByVoterResponse;
                toAmino(message: _110.QueryVotesByVoterResponse): _110.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _110.QueryVotesByVoterResponseAminoMsg): _110.QueryVotesByVoterResponse;
                toAminoMsg(message: _110.QueryVotesByVoterResponse): _110.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _110.QueryVotesByVoterResponseProtoMsg): _110.QueryVotesByVoterResponse;
                toProto(message: _110.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _110.QueryVotesByVoterResponse): _110.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_110.QueryGroupsByMemberRequest>): _110.QueryGroupsByMemberRequest;
                fromAmino(object: _110.QueryGroupsByMemberRequestAmino): _110.QueryGroupsByMemberRequest;
                toAmino(message: _110.QueryGroupsByMemberRequest): _110.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _110.QueryGroupsByMemberRequestAminoMsg): _110.QueryGroupsByMemberRequest;
                toAminoMsg(message: _110.QueryGroupsByMemberRequest): _110.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupsByMemberRequestProtoMsg): _110.QueryGroupsByMemberRequest;
                toProto(message: _110.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupsByMemberRequest): _110.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_110.QueryGroupsByMemberResponse>): _110.QueryGroupsByMemberResponse;
                fromAmino(object: _110.QueryGroupsByMemberResponseAmino): _110.QueryGroupsByMemberResponse;
                toAmino(message: _110.QueryGroupsByMemberResponse): _110.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _110.QueryGroupsByMemberResponseAminoMsg): _110.QueryGroupsByMemberResponse;
                toAminoMsg(message: _110.QueryGroupsByMemberResponse): _110.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupsByMemberResponseProtoMsg): _110.QueryGroupsByMemberResponse;
                toProto(message: _110.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupsByMemberResponse): _110.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _110.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryTallyResultRequest;
                fromPartial(object: Partial<_110.QueryTallyResultRequest>): _110.QueryTallyResultRequest;
                fromAmino(object: _110.QueryTallyResultRequestAmino): _110.QueryTallyResultRequest;
                toAmino(message: _110.QueryTallyResultRequest): _110.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _110.QueryTallyResultRequestAminoMsg): _110.QueryTallyResultRequest;
                toAminoMsg(message: _110.QueryTallyResultRequest): _110.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _110.QueryTallyResultRequestProtoMsg): _110.QueryTallyResultRequest;
                toProto(message: _110.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _110.QueryTallyResultRequest): _110.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _110.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryTallyResultResponse;
                fromPartial(object: Partial<_110.QueryTallyResultResponse>): _110.QueryTallyResultResponse;
                fromAmino(object: _110.QueryTallyResultResponseAmino): _110.QueryTallyResultResponse;
                toAmino(message: _110.QueryTallyResultResponse): _110.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _110.QueryTallyResultResponseAminoMsg): _110.QueryTallyResultResponse;
                toAminoMsg(message: _110.QueryTallyResultResponse): _110.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _110.QueryTallyResultResponseProtoMsg): _110.QueryTallyResultResponse;
                toProto(message: _110.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _110.QueryTallyResultResponse): _110.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _110.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupsRequest;
                fromPartial(object: Partial<_110.QueryGroupsRequest>): _110.QueryGroupsRequest;
                fromAmino(object: _110.QueryGroupsRequestAmino): _110.QueryGroupsRequest;
                toAmino(message: _110.QueryGroupsRequest): _110.QueryGroupsRequestAmino;
                fromAminoMsg(object: _110.QueryGroupsRequestAminoMsg): _110.QueryGroupsRequest;
                toAminoMsg(message: _110.QueryGroupsRequest): _110.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryGroupsRequestProtoMsg): _110.QueryGroupsRequest;
                toProto(message: _110.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryGroupsRequest): _110.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _110.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _110.QueryGroupsResponse;
                fromPartial(object: Partial<_110.QueryGroupsResponse>): _110.QueryGroupsResponse;
                fromAmino(object: _110.QueryGroupsResponseAmino): _110.QueryGroupsResponse;
                toAmino(message: _110.QueryGroupsResponse): _110.QueryGroupsResponseAmino;
                fromAminoMsg(object: _110.QueryGroupsResponseAminoMsg): _110.QueryGroupsResponse;
                toAminoMsg(message: _110.QueryGroupsResponse): _110.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryGroupsResponseProtoMsg): _110.QueryGroupsResponse;
                toProto(message: _110.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryGroupsResponse): _110.QueryGroupsResponseProtoMsg;
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
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _108.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventCreateGroup;
                fromPartial(object: Partial<_108.EventCreateGroup>): _108.EventCreateGroup;
                fromAmino(object: _108.EventCreateGroupAmino): _108.EventCreateGroup;
                toAmino(message: _108.EventCreateGroup): _108.EventCreateGroupAmino;
                fromAminoMsg(object: _108.EventCreateGroupAminoMsg): _108.EventCreateGroup;
                toAminoMsg(message: _108.EventCreateGroup): _108.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _108.EventCreateGroupProtoMsg): _108.EventCreateGroup;
                toProto(message: _108.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _108.EventCreateGroup): _108.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _108.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventUpdateGroup;
                fromPartial(object: Partial<_108.EventUpdateGroup>): _108.EventUpdateGroup;
                fromAmino(object: _108.EventUpdateGroupAmino): _108.EventUpdateGroup;
                toAmino(message: _108.EventUpdateGroup): _108.EventUpdateGroupAmino;
                fromAminoMsg(object: _108.EventUpdateGroupAminoMsg): _108.EventUpdateGroup;
                toAminoMsg(message: _108.EventUpdateGroup): _108.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _108.EventUpdateGroupProtoMsg): _108.EventUpdateGroup;
                toProto(message: _108.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _108.EventUpdateGroup): _108.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _108.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventCreateGroupPolicy;
                fromPartial(object: Partial<_108.EventCreateGroupPolicy>): _108.EventCreateGroupPolicy;
                fromAmino(object: _108.EventCreateGroupPolicyAmino): _108.EventCreateGroupPolicy;
                toAmino(message: _108.EventCreateGroupPolicy): _108.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _108.EventCreateGroupPolicyAminoMsg): _108.EventCreateGroupPolicy;
                toAminoMsg(message: _108.EventCreateGroupPolicy): _108.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _108.EventCreateGroupPolicyProtoMsg): _108.EventCreateGroupPolicy;
                toProto(message: _108.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _108.EventCreateGroupPolicy): _108.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _108.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_108.EventUpdateGroupPolicy>): _108.EventUpdateGroupPolicy;
                fromAmino(object: _108.EventUpdateGroupPolicyAmino): _108.EventUpdateGroupPolicy;
                toAmino(message: _108.EventUpdateGroupPolicy): _108.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _108.EventUpdateGroupPolicyAminoMsg): _108.EventUpdateGroupPolicy;
                toAminoMsg(message: _108.EventUpdateGroupPolicy): _108.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _108.EventUpdateGroupPolicyProtoMsg): _108.EventUpdateGroupPolicy;
                toProto(message: _108.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _108.EventUpdateGroupPolicy): _108.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _108.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventSubmitProposal;
                fromPartial(object: Partial<_108.EventSubmitProposal>): _108.EventSubmitProposal;
                fromAmino(object: _108.EventSubmitProposalAmino): _108.EventSubmitProposal;
                toAmino(message: _108.EventSubmitProposal): _108.EventSubmitProposalAmino;
                fromAminoMsg(object: _108.EventSubmitProposalAminoMsg): _108.EventSubmitProposal;
                toAminoMsg(message: _108.EventSubmitProposal): _108.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _108.EventSubmitProposalProtoMsg): _108.EventSubmitProposal;
                toProto(message: _108.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _108.EventSubmitProposal): _108.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _108.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventWithdrawProposal;
                fromPartial(object: Partial<_108.EventWithdrawProposal>): _108.EventWithdrawProposal;
                fromAmino(object: _108.EventWithdrawProposalAmino): _108.EventWithdrawProposal;
                toAmino(message: _108.EventWithdrawProposal): _108.EventWithdrawProposalAmino;
                fromAminoMsg(object: _108.EventWithdrawProposalAminoMsg): _108.EventWithdrawProposal;
                toAminoMsg(message: _108.EventWithdrawProposal): _108.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _108.EventWithdrawProposalProtoMsg): _108.EventWithdrawProposal;
                toProto(message: _108.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _108.EventWithdrawProposal): _108.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _108.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventVote;
                fromPartial(object: Partial<_108.EventVote>): _108.EventVote;
                fromAmino(object: _108.EventVoteAmino): _108.EventVote;
                toAmino(message: _108.EventVote): _108.EventVoteAmino;
                fromAminoMsg(object: _108.EventVoteAminoMsg): _108.EventVote;
                toAminoMsg(message: _108.EventVote): _108.EventVoteAminoMsg;
                fromProtoMsg(message: _108.EventVoteProtoMsg): _108.EventVote;
                toProto(message: _108.EventVote): Uint8Array;
                toProtoMsg(message: _108.EventVote): _108.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _108.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventExec;
                fromPartial(object: Partial<_108.EventExec>): _108.EventExec;
                fromAmino(object: _108.EventExecAmino): _108.EventExec;
                toAmino(message: _108.EventExec): _108.EventExecAmino;
                fromAminoMsg(object: _108.EventExecAminoMsg): _108.EventExec;
                toAminoMsg(message: _108.EventExec): _108.EventExecAminoMsg;
                fromProtoMsg(message: _108.EventExecProtoMsg): _108.EventExec;
                toProto(message: _108.EventExec): Uint8Array;
                toProtoMsg(message: _108.EventExec): _108.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _108.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventLeaveGroup;
                fromPartial(object: Partial<_108.EventLeaveGroup>): _108.EventLeaveGroup;
                fromAmino(object: _108.EventLeaveGroupAmino): _108.EventLeaveGroup;
                toAmino(message: _108.EventLeaveGroup): _108.EventLeaveGroupAmino;
                fromAminoMsg(object: _108.EventLeaveGroupAminoMsg): _108.EventLeaveGroup;
                toAminoMsg(message: _108.EventLeaveGroup): _108.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _108.EventLeaveGroupProtoMsg): _108.EventLeaveGroup;
                toProto(message: _108.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _108.EventLeaveGroup): _108.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _108.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.EventProposalPruned;
                fromPartial(object: Partial<_108.EventProposalPruned>): _108.EventProposalPruned;
                fromAmino(object: _108.EventProposalPrunedAmino): _108.EventProposalPruned;
                toAmino(message: _108.EventProposalPruned): _108.EventProposalPrunedAmino;
                fromAminoMsg(object: _108.EventProposalPrunedAminoMsg): _108.EventProposalPruned;
                toAminoMsg(message: _108.EventProposalPruned): _108.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _108.EventProposalPrunedProtoMsg): _108.EventProposalPruned;
                toProto(message: _108.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _108.EventProposalPruned): _108.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
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
            MsgClientImpl: typeof _308.MsgClientImpl;
            QueryClientImpl: typeof _289.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                inflation(request?: _116.QueryInflationRequest): Promise<_116.QueryInflationResponse>;
                annualProvisions(request?: _116.QueryAnnualProvisionsRequest): Promise<_116.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _268.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _117.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _117.MsgUpdateParams): {
                        typeUrl: string;
                        value: _117.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _117.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _117.MsgUpdateParams): {
                        typeUrl: string;
                        value: _117.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _117.MsgUpdateParams) => _117.MsgUpdateParamsAmino;
                    fromAmino: (object: _117.MsgUpdateParamsAmino) => _117.MsgUpdateParams;
                };
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
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _116.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.QueryInflationRequest;
                fromPartial(_: Partial<_116.QueryInflationRequest>): _116.QueryInflationRequest;
                fromAmino(_: _116.QueryInflationRequestAmino): _116.QueryInflationRequest;
                toAmino(_: _116.QueryInflationRequest): _116.QueryInflationRequestAmino;
                fromAminoMsg(object: _116.QueryInflationRequestAminoMsg): _116.QueryInflationRequest;
                toAminoMsg(message: _116.QueryInflationRequest): _116.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _116.QueryInflationRequestProtoMsg): _116.QueryInflationRequest;
                toProto(message: _116.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _116.QueryInflationRequest): _116.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _116.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryInflationResponse;
                fromPartial(object: Partial<_116.QueryInflationResponse>): _116.QueryInflationResponse;
                fromAmino(object: _116.QueryInflationResponseAmino): _116.QueryInflationResponse;
                toAmino(message: _116.QueryInflationResponse): _116.QueryInflationResponseAmino;
                fromAminoMsg(object: _116.QueryInflationResponseAminoMsg): _116.QueryInflationResponse;
                toAminoMsg(message: _116.QueryInflationResponse): _116.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _116.QueryInflationResponseProtoMsg): _116.QueryInflationResponse;
                toProto(message: _116.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _116.QueryInflationResponse): _116.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _116.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _116.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_116.QueryAnnualProvisionsRequest>): _116.QueryAnnualProvisionsRequest;
                fromAmino(_: _116.QueryAnnualProvisionsRequestAmino): _116.QueryAnnualProvisionsRequest;
                toAmino(_: _116.QueryAnnualProvisionsRequest): _116.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _116.QueryAnnualProvisionsRequestAminoMsg): _116.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _116.QueryAnnualProvisionsRequest): _116.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _116.QueryAnnualProvisionsRequestProtoMsg): _116.QueryAnnualProvisionsRequest;
                toProto(message: _116.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _116.QueryAnnualProvisionsRequest): _116.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _116.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_116.QueryAnnualProvisionsResponse>): _116.QueryAnnualProvisionsResponse;
                fromAmino(object: _116.QueryAnnualProvisionsResponseAmino): _116.QueryAnnualProvisionsResponse;
                toAmino(message: _116.QueryAnnualProvisionsResponse): _116.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _116.QueryAnnualProvisionsResponseAminoMsg): _116.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _116.QueryAnnualProvisionsResponse): _116.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _116.QueryAnnualProvisionsResponseProtoMsg): _116.QueryAnnualProvisionsResponse;
                toProto(message: _116.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _116.QueryAnnualProvisionsResponse): _116.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _115.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.Minter;
                fromPartial(object: Partial<_115.Minter>): _115.Minter;
                fromAmino(object: _115.MinterAmino): _115.Minter;
                toAmino(message: _115.Minter): _115.MinterAmino;
                fromAminoMsg(object: _115.MinterAminoMsg): _115.Minter;
                toAminoMsg(message: _115.Minter): _115.MinterAminoMsg;
                fromProtoMsg(message: _115.MinterProtoMsg): _115.Minter;
                toProto(message: _115.Minter): Uint8Array;
                toProtoMsg(message: _115.Minter): _115.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _115.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.Params;
                fromPartial(object: Partial<_115.Params>): _115.Params;
                fromAmino(object: _115.ParamsAmino): _115.Params;
                toAmino(message: _115.Params): _115.ParamsAmino;
                fromAminoMsg(object: _115.ParamsAminoMsg): _115.Params;
                toAminoMsg(message: _115.Params): _115.ParamsAminoMsg;
                fromProtoMsg(message: _115.ParamsProtoMsg): _115.Params;
                toProto(message: _115.Params): Uint8Array;
                toProtoMsg(message: _115.Params): _115.ParamsProtoMsg;
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
                    encode(_: _119.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.Module;
                    fromPartial(_: Partial<_119.Module>): _119.Module;
                    fromAmino(_: _119.ModuleAmino): _119.Module;
                    toAmino(_: _119.Module): _119.ModuleAmino;
                    fromAminoMsg(object: _119.ModuleAminoMsg): _119.Module;
                    toAminoMsg(message: _119.Module): _119.ModuleAminoMsg;
                    fromProtoMsg(message: _119.ModuleProtoMsg): _119.Module;
                    toProto(message: _119.Module): Uint8Array;
                    toProtoMsg(message: _119.Module): _119.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _309.MsgClientImpl;
            QueryClientImpl: typeof _290.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _123.QueryBalanceRequest): Promise<_123.QueryBalanceResponse>;
                owner(request: _123.QueryOwnerRequest): Promise<_123.QueryOwnerResponse>;
                supply(request: _123.QuerySupplyRequest): Promise<_123.QuerySupplyResponse>;
                nFTs(request: _123.QueryNFTsRequest): Promise<_123.QueryNFTsResponse>;
                nFT(request: _123.QueryNFTRequest): Promise<_123.QueryNFTResponse>;
                class(request: _123.QueryClassRequest): Promise<_123.QueryClassResponse>;
                classes(request?: _123.QueryClassesRequest): Promise<_123.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _269.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _124.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _124.MsgSend): {
                        typeUrl: string;
                        value: _124.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _124.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _124.MsgSend): {
                        typeUrl: string;
                        value: _124.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _124.MsgSend) => _124.MsgSendAmino;
                    fromAmino: (object: _124.MsgSendAmino) => _124.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _124.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgSend;
                fromPartial(object: Partial<_124.MsgSend>): _124.MsgSend;
                fromAmino(object: _124.MsgSendAmino): _124.MsgSend;
                toAmino(message: _124.MsgSend): _124.MsgSendAmino;
                fromAminoMsg(object: _124.MsgSendAminoMsg): _124.MsgSend;
                toAminoMsg(message: _124.MsgSend): _124.MsgSendAminoMsg;
                fromProtoMsg(message: _124.MsgSendProtoMsg): _124.MsgSend;
                toProto(message: _124.MsgSend): Uint8Array;
                toProtoMsg(message: _124.MsgSend): _124.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _124.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgSendResponse;
                fromPartial(_: Partial<_124.MsgSendResponse>): _124.MsgSendResponse;
                fromAmino(_: _124.MsgSendResponseAmino): _124.MsgSendResponse;
                toAmino(_: _124.MsgSendResponse): _124.MsgSendResponseAmino;
                fromAminoMsg(object: _124.MsgSendResponseAminoMsg): _124.MsgSendResponse;
                toAminoMsg(message: _124.MsgSendResponse): _124.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _124.MsgSendResponseProtoMsg): _124.MsgSendResponse;
                toProto(message: _124.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _124.MsgSendResponse): _124.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _123.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryBalanceRequest;
                fromPartial(object: Partial<_123.QueryBalanceRequest>): _123.QueryBalanceRequest;
                fromAmino(object: _123.QueryBalanceRequestAmino): _123.QueryBalanceRequest;
                toAmino(message: _123.QueryBalanceRequest): _123.QueryBalanceRequestAmino;
                fromAminoMsg(object: _123.QueryBalanceRequestAminoMsg): _123.QueryBalanceRequest;
                toAminoMsg(message: _123.QueryBalanceRequest): _123.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _123.QueryBalanceRequestProtoMsg): _123.QueryBalanceRequest;
                toProto(message: _123.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _123.QueryBalanceRequest): _123.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _123.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryBalanceResponse;
                fromPartial(object: Partial<_123.QueryBalanceResponse>): _123.QueryBalanceResponse;
                fromAmino(object: _123.QueryBalanceResponseAmino): _123.QueryBalanceResponse;
                toAmino(message: _123.QueryBalanceResponse): _123.QueryBalanceResponseAmino;
                fromAminoMsg(object: _123.QueryBalanceResponseAminoMsg): _123.QueryBalanceResponse;
                toAminoMsg(message: _123.QueryBalanceResponse): _123.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _123.QueryBalanceResponseProtoMsg): _123.QueryBalanceResponse;
                toProto(message: _123.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _123.QueryBalanceResponse): _123.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _123.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryOwnerRequest;
                fromPartial(object: Partial<_123.QueryOwnerRequest>): _123.QueryOwnerRequest;
                fromAmino(object: _123.QueryOwnerRequestAmino): _123.QueryOwnerRequest;
                toAmino(message: _123.QueryOwnerRequest): _123.QueryOwnerRequestAmino;
                fromAminoMsg(object: _123.QueryOwnerRequestAminoMsg): _123.QueryOwnerRequest;
                toAminoMsg(message: _123.QueryOwnerRequest): _123.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _123.QueryOwnerRequestProtoMsg): _123.QueryOwnerRequest;
                toProto(message: _123.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _123.QueryOwnerRequest): _123.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _123.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryOwnerResponse;
                fromPartial(object: Partial<_123.QueryOwnerResponse>): _123.QueryOwnerResponse;
                fromAmino(object: _123.QueryOwnerResponseAmino): _123.QueryOwnerResponse;
                toAmino(message: _123.QueryOwnerResponse): _123.QueryOwnerResponseAmino;
                fromAminoMsg(object: _123.QueryOwnerResponseAminoMsg): _123.QueryOwnerResponse;
                toAminoMsg(message: _123.QueryOwnerResponse): _123.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _123.QueryOwnerResponseProtoMsg): _123.QueryOwnerResponse;
                toProto(message: _123.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _123.QueryOwnerResponse): _123.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _123.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QuerySupplyRequest;
                fromPartial(object: Partial<_123.QuerySupplyRequest>): _123.QuerySupplyRequest;
                fromAmino(object: _123.QuerySupplyRequestAmino): _123.QuerySupplyRequest;
                toAmino(message: _123.QuerySupplyRequest): _123.QuerySupplyRequestAmino;
                fromAminoMsg(object: _123.QuerySupplyRequestAminoMsg): _123.QuerySupplyRequest;
                toAminoMsg(message: _123.QuerySupplyRequest): _123.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _123.QuerySupplyRequestProtoMsg): _123.QuerySupplyRequest;
                toProto(message: _123.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _123.QuerySupplyRequest): _123.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _123.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QuerySupplyResponse;
                fromPartial(object: Partial<_123.QuerySupplyResponse>): _123.QuerySupplyResponse;
                fromAmino(object: _123.QuerySupplyResponseAmino): _123.QuerySupplyResponse;
                toAmino(message: _123.QuerySupplyResponse): _123.QuerySupplyResponseAmino;
                fromAminoMsg(object: _123.QuerySupplyResponseAminoMsg): _123.QuerySupplyResponse;
                toAminoMsg(message: _123.QuerySupplyResponse): _123.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _123.QuerySupplyResponseProtoMsg): _123.QuerySupplyResponse;
                toProto(message: _123.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _123.QuerySupplyResponse): _123.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _123.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryNFTsRequest;
                fromPartial(object: Partial<_123.QueryNFTsRequest>): _123.QueryNFTsRequest;
                fromAmino(object: _123.QueryNFTsRequestAmino): _123.QueryNFTsRequest;
                toAmino(message: _123.QueryNFTsRequest): _123.QueryNFTsRequestAmino;
                fromAminoMsg(object: _123.QueryNFTsRequestAminoMsg): _123.QueryNFTsRequest;
                toAminoMsg(message: _123.QueryNFTsRequest): _123.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryNFTsRequestProtoMsg): _123.QueryNFTsRequest;
                toProto(message: _123.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryNFTsRequest): _123.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _123.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryNFTsResponse;
                fromPartial(object: Partial<_123.QueryNFTsResponse>): _123.QueryNFTsResponse;
                fromAmino(object: _123.QueryNFTsResponseAmino): _123.QueryNFTsResponse;
                toAmino(message: _123.QueryNFTsResponse): _123.QueryNFTsResponseAmino;
                fromAminoMsg(object: _123.QueryNFTsResponseAminoMsg): _123.QueryNFTsResponse;
                toAminoMsg(message: _123.QueryNFTsResponse): _123.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryNFTsResponseProtoMsg): _123.QueryNFTsResponse;
                toProto(message: _123.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryNFTsResponse): _123.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _123.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryNFTRequest;
                fromPartial(object: Partial<_123.QueryNFTRequest>): _123.QueryNFTRequest;
                fromAmino(object: _123.QueryNFTRequestAmino): _123.QueryNFTRequest;
                toAmino(message: _123.QueryNFTRequest): _123.QueryNFTRequestAmino;
                fromAminoMsg(object: _123.QueryNFTRequestAminoMsg): _123.QueryNFTRequest;
                toAminoMsg(message: _123.QueryNFTRequest): _123.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _123.QueryNFTRequestProtoMsg): _123.QueryNFTRequest;
                toProto(message: _123.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _123.QueryNFTRequest): _123.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _123.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryNFTResponse;
                fromPartial(object: Partial<_123.QueryNFTResponse>): _123.QueryNFTResponse;
                fromAmino(object: _123.QueryNFTResponseAmino): _123.QueryNFTResponse;
                toAmino(message: _123.QueryNFTResponse): _123.QueryNFTResponseAmino;
                fromAminoMsg(object: _123.QueryNFTResponseAminoMsg): _123.QueryNFTResponse;
                toAminoMsg(message: _123.QueryNFTResponse): _123.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _123.QueryNFTResponseProtoMsg): _123.QueryNFTResponse;
                toProto(message: _123.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _123.QueryNFTResponse): _123.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _123.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryClassRequest;
                fromPartial(object: Partial<_123.QueryClassRequest>): _123.QueryClassRequest;
                fromAmino(object: _123.QueryClassRequestAmino): _123.QueryClassRequest;
                toAmino(message: _123.QueryClassRequest): _123.QueryClassRequestAmino;
                fromAminoMsg(object: _123.QueryClassRequestAminoMsg): _123.QueryClassRequest;
                toAminoMsg(message: _123.QueryClassRequest): _123.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _123.QueryClassRequestProtoMsg): _123.QueryClassRequest;
                toProto(message: _123.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _123.QueryClassRequest): _123.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _123.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryClassResponse;
                fromPartial(object: Partial<_123.QueryClassResponse>): _123.QueryClassResponse;
                fromAmino(object: _123.QueryClassResponseAmino): _123.QueryClassResponse;
                toAmino(message: _123.QueryClassResponse): _123.QueryClassResponseAmino;
                fromAminoMsg(object: _123.QueryClassResponseAminoMsg): _123.QueryClassResponse;
                toAminoMsg(message: _123.QueryClassResponse): _123.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _123.QueryClassResponseProtoMsg): _123.QueryClassResponse;
                toProto(message: _123.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _123.QueryClassResponse): _123.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _123.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryClassesRequest;
                fromPartial(object: Partial<_123.QueryClassesRequest>): _123.QueryClassesRequest;
                fromAmino(object: _123.QueryClassesRequestAmino): _123.QueryClassesRequest;
                toAmino(message: _123.QueryClassesRequest): _123.QueryClassesRequestAmino;
                fromAminoMsg(object: _123.QueryClassesRequestAminoMsg): _123.QueryClassesRequest;
                toAminoMsg(message: _123.QueryClassesRequest): _123.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _123.QueryClassesRequestProtoMsg): _123.QueryClassesRequest;
                toProto(message: _123.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _123.QueryClassesRequest): _123.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _123.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.QueryClassesResponse;
                fromPartial(object: Partial<_123.QueryClassesResponse>): _123.QueryClassesResponse;
                fromAmino(object: _123.QueryClassesResponseAmino): _123.QueryClassesResponse;
                toAmino(message: _123.QueryClassesResponse): _123.QueryClassesResponseAmino;
                fromAminoMsg(object: _123.QueryClassesResponseAminoMsg): _123.QueryClassesResponse;
                toAminoMsg(message: _123.QueryClassesResponse): _123.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _123.QueryClassesResponseProtoMsg): _123.QueryClassesResponse;
                toProto(message: _123.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _123.QueryClassesResponse): _123.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _122.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Class;
                fromPartial(object: Partial<_122.Class>): _122.Class;
                fromAmino(object: _122.ClassAmino): _122.Class;
                toAmino(message: _122.Class): _122.ClassAmino;
                fromAminoMsg(object: _122.ClassAminoMsg): _122.Class;
                toAminoMsg(message: _122.Class): _122.ClassAminoMsg;
                fromProtoMsg(message: _122.ClassProtoMsg): _122.Class;
                toProto(message: _122.Class): Uint8Array;
                toProtoMsg(message: _122.Class): _122.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _122.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.NFT;
                fromPartial(object: Partial<_122.NFT>): _122.NFT;
                fromAmino(object: _122.NFTAmino): _122.NFT;
                toAmino(message: _122.NFT): _122.NFTAmino;
                fromAminoMsg(object: _122.NFTAminoMsg): _122.NFT;
                toAminoMsg(message: _122.NFT): _122.NFTAminoMsg;
                fromProtoMsg(message: _122.NFTProtoMsg): _122.NFT;
                toProto(message: _122.NFT): Uint8Array;
                toProtoMsg(message: _122.NFT): _122.NFTProtoMsg;
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
            Entry: {
                typeUrl: string;
                encode(message: _121.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Entry;
                fromPartial(object: Partial<_121.Entry>): _121.Entry;
                fromAmino(object: _121.EntryAmino): _121.Entry;
                toAmino(message: _121.Entry): _121.EntryAmino;
                fromAminoMsg(object: _121.EntryAminoMsg): _121.Entry;
                toAminoMsg(message: _121.Entry): _121.EntryAminoMsg;
                fromProtoMsg(message: _121.EntryProtoMsg): _121.Entry;
                toProto(message: _121.Entry): Uint8Array;
                toProtoMsg(message: _121.Entry): _121.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _120.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.EventSend;
                fromPartial(object: Partial<_120.EventSend>): _120.EventSend;
                fromAmino(object: _120.EventSendAmino): _120.EventSend;
                toAmino(message: _120.EventSend): _120.EventSendAmino;
                fromAminoMsg(object: _120.EventSendAminoMsg): _120.EventSend;
                toAminoMsg(message: _120.EventSend): _120.EventSendAminoMsg;
                fromProtoMsg(message: _120.EventSendProtoMsg): _120.EventSend;
                toProto(message: _120.EventSend): Uint8Array;
                toProtoMsg(message: _120.EventSend): _120.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _120.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.EventMint;
                fromPartial(object: Partial<_120.EventMint>): _120.EventMint;
                fromAmino(object: _120.EventMintAmino): _120.EventMint;
                toAmino(message: _120.EventMint): _120.EventMintAmino;
                fromAminoMsg(object: _120.EventMintAminoMsg): _120.EventMint;
                toAminoMsg(message: _120.EventMint): _120.EventMintAminoMsg;
                fromProtoMsg(message: _120.EventMintProtoMsg): _120.EventMint;
                toProto(message: _120.EventMint): Uint8Array;
                toProtoMsg(message: _120.EventMint): _120.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _120.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.EventBurn;
                fromPartial(object: Partial<_120.EventBurn>): _120.EventBurn;
                fromAmino(object: _120.EventBurnAmino): _120.EventBurn;
                toAmino(message: _120.EventBurn): _120.EventBurnAmino;
                fromAminoMsg(object: _120.EventBurnAminoMsg): _120.EventBurn;
                toAminoMsg(message: _120.EventBurn): _120.EventBurnAminoMsg;
                fromProtoMsg(message: _120.EventBurnProtoMsg): _120.EventBurn;
                toProto(message: _120.EventBurn): Uint8Array;
                toProtoMsg(message: _120.EventBurn): _120.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _125.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _125.Module;
                    fromPartial(_: Partial<_125.Module>): _125.Module;
                    fromAmino(_: _125.ModuleAmino): _125.Module;
                    toAmino(_: _125.Module): _125.ModuleAmino;
                    fromAminoMsg(object: _125.ModuleAminoMsg): _125.Module;
                    toAminoMsg(message: _125.Module): _125.ModuleAminoMsg;
                    fromProtoMsg(message: _125.ModuleProtoMsg): _125.Module;
                    toProto(message: _125.Module): Uint8Array;
                    toProtoMsg(message: _125.Module): _125.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _291.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _126.GetRequest): Promise<_126.GetResponse>;
                    list(request: _126.ListRequest): Promise<_126.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _126.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.GetRequest;
                    fromPartial(object: Partial<_126.GetRequest>): _126.GetRequest;
                    fromAmino(object: _126.GetRequestAmino): _126.GetRequest;
                    toAmino(message: _126.GetRequest): _126.GetRequestAmino;
                    fromAminoMsg(object: _126.GetRequestAminoMsg): _126.GetRequest;
                    toAminoMsg(message: _126.GetRequest): _126.GetRequestAminoMsg;
                    fromProtoMsg(message: _126.GetRequestProtoMsg): _126.GetRequest;
                    toProto(message: _126.GetRequest): Uint8Array;
                    toProtoMsg(message: _126.GetRequest): _126.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _126.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.GetResponse;
                    fromPartial(object: Partial<_126.GetResponse>): _126.GetResponse;
                    fromAmino(object: _126.GetResponseAmino): _126.GetResponse;
                    toAmino(message: _126.GetResponse): _126.GetResponseAmino;
                    fromAminoMsg(object: _126.GetResponseAminoMsg): _126.GetResponse;
                    toAminoMsg(message: _126.GetResponse): _126.GetResponseAminoMsg;
                    fromProtoMsg(message: _126.GetResponseProtoMsg): _126.GetResponse;
                    toProto(message: _126.GetResponse): Uint8Array;
                    toProtoMsg(message: _126.GetResponse): _126.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _126.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.ListRequest;
                    fromPartial(object: Partial<_126.ListRequest>): _126.ListRequest;
                    fromAmino(object: _126.ListRequestAmino): _126.ListRequest;
                    toAmino(message: _126.ListRequest): _126.ListRequestAmino;
                    fromAminoMsg(object: _126.ListRequestAminoMsg): _126.ListRequest;
                    toAminoMsg(message: _126.ListRequest): _126.ListRequestAminoMsg;
                    fromProtoMsg(message: _126.ListRequestProtoMsg): _126.ListRequest;
                    toProto(message: _126.ListRequest): Uint8Array;
                    toProtoMsg(message: _126.ListRequest): _126.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _126.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.ListRequest_Prefix;
                    fromPartial(object: Partial<_126.ListRequest_Prefix>): _126.ListRequest_Prefix;
                    fromAmino(object: _126.ListRequest_PrefixAmino): _126.ListRequest_Prefix;
                    toAmino(message: _126.ListRequest_Prefix): _126.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _126.ListRequest_PrefixAminoMsg): _126.ListRequest_Prefix;
                    toAminoMsg(message: _126.ListRequest_Prefix): _126.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _126.ListRequest_PrefixProtoMsg): _126.ListRequest_Prefix;
                    toProto(message: _126.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _126.ListRequest_Prefix): _126.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _126.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.ListRequest_Range;
                    fromPartial(object: Partial<_126.ListRequest_Range>): _126.ListRequest_Range;
                    fromAmino(object: _126.ListRequest_RangeAmino): _126.ListRequest_Range;
                    toAmino(message: _126.ListRequest_Range): _126.ListRequest_RangeAmino;
                    fromAminoMsg(object: _126.ListRequest_RangeAminoMsg): _126.ListRequest_Range;
                    toAminoMsg(message: _126.ListRequest_Range): _126.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _126.ListRequest_RangeProtoMsg): _126.ListRequest_Range;
                    toProto(message: _126.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _126.ListRequest_Range): _126.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _126.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.ListResponse;
                    fromPartial(object: Partial<_126.ListResponse>): _126.ListResponse;
                    fromAmino(object: _126.ListResponseAmino): _126.ListResponse;
                    toAmino(message: _126.ListResponse): _126.ListResponseAmino;
                    fromAminoMsg(object: _126.ListResponseAminoMsg): _126.ListResponse;
                    toAminoMsg(message: _126.ListResponse): _126.ListResponseAminoMsg;
                    fromProtoMsg(message: _126.ListResponseProtoMsg): _126.ListResponse;
                    toProto(message: _126.ListResponse): Uint8Array;
                    toProtoMsg(message: _126.ListResponse): _126.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _126.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.IndexValue;
                    fromPartial(object: Partial<_126.IndexValue>): _126.IndexValue;
                    fromAmino(object: _126.IndexValueAmino): _126.IndexValue;
                    toAmino(message: _126.IndexValue): _126.IndexValueAmino;
                    fromAminoMsg(object: _126.IndexValueAminoMsg): _126.IndexValue;
                    toAminoMsg(message: _126.IndexValue): _126.IndexValueAminoMsg;
                    fromProtoMsg(message: _126.IndexValueProtoMsg): _126.IndexValue;
                    toProto(message: _126.IndexValue): Uint8Array;
                    toProtoMsg(message: _126.IndexValue): _126.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _127.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.TableDescriptor;
                fromPartial(object: Partial<_127.TableDescriptor>): _127.TableDescriptor;
                fromAmino(object: _127.TableDescriptorAmino): _127.TableDescriptor;
                toAmino(message: _127.TableDescriptor): _127.TableDescriptorAmino;
                fromAminoMsg(object: _127.TableDescriptorAminoMsg): _127.TableDescriptor;
                toAminoMsg(message: _127.TableDescriptor): _127.TableDescriptorAminoMsg;
                fromProtoMsg(message: _127.TableDescriptorProtoMsg): _127.TableDescriptor;
                toProto(message: _127.TableDescriptor): Uint8Array;
                toProtoMsg(message: _127.TableDescriptor): _127.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _127.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_127.PrimaryKeyDescriptor>): _127.PrimaryKeyDescriptor;
                fromAmino(object: _127.PrimaryKeyDescriptorAmino): _127.PrimaryKeyDescriptor;
                toAmino(message: _127.PrimaryKeyDescriptor): _127.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _127.PrimaryKeyDescriptorAminoMsg): _127.PrimaryKeyDescriptor;
                toAminoMsg(message: _127.PrimaryKeyDescriptor): _127.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _127.PrimaryKeyDescriptorProtoMsg): _127.PrimaryKeyDescriptor;
                toProto(message: _127.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _127.PrimaryKeyDescriptor): _127.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _127.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_127.SecondaryIndexDescriptor>): _127.SecondaryIndexDescriptor;
                fromAmino(object: _127.SecondaryIndexDescriptorAmino): _127.SecondaryIndexDescriptor;
                toAmino(message: _127.SecondaryIndexDescriptor): _127.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _127.SecondaryIndexDescriptorAminoMsg): _127.SecondaryIndexDescriptor;
                toAminoMsg(message: _127.SecondaryIndexDescriptor): _127.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _127.SecondaryIndexDescriptorProtoMsg): _127.SecondaryIndexDescriptor;
                toProto(message: _127.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _127.SecondaryIndexDescriptor): _127.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _127.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SingletonDescriptor;
                fromPartial(object: Partial<_127.SingletonDescriptor>): _127.SingletonDescriptor;
                fromAmino(object: _127.SingletonDescriptorAmino): _127.SingletonDescriptor;
                toAmino(message: _127.SingletonDescriptor): _127.SingletonDescriptorAmino;
                fromAminoMsg(object: _127.SingletonDescriptorAminoMsg): _127.SingletonDescriptor;
                toAminoMsg(message: _127.SingletonDescriptor): _127.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _127.SingletonDescriptorProtoMsg): _127.SingletonDescriptor;
                toProto(message: _127.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _127.SingletonDescriptor): _127.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _128.StorageType;
            storageTypeToJSON(object: _128.StorageType): string;
            StorageType: typeof _128.StorageType;
            StorageTypeSDKType: typeof _128.StorageType;
            StorageTypeAmino: typeof _128.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _128.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_128.ModuleSchemaDescriptor>): _128.ModuleSchemaDescriptor;
                fromAmino(object: _128.ModuleSchemaDescriptorAmino): _128.ModuleSchemaDescriptor;
                toAmino(message: _128.ModuleSchemaDescriptor): _128.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _128.ModuleSchemaDescriptorAminoMsg): _128.ModuleSchemaDescriptor;
                toAminoMsg(message: _128.ModuleSchemaDescriptor): _128.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _128.ModuleSchemaDescriptorProtoMsg): _128.ModuleSchemaDescriptor;
                toProto(message: _128.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _128.ModuleSchemaDescriptor): _128.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _128.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_128.ModuleSchemaDescriptor_FileEntry>): _128.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _128.ModuleSchemaDescriptor_FileEntryAmino): _128.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _128.ModuleSchemaDescriptor_FileEntry): _128.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _128.ModuleSchemaDescriptor_FileEntryAminoMsg): _128.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _128.ModuleSchemaDescriptor_FileEntry): _128.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _128.ModuleSchemaDescriptor_FileEntryProtoMsg): _128.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _128.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _128.ModuleSchemaDescriptor_FileEntry): _128.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
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
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                subspaces(request?: _131.QuerySubspacesRequest): Promise<_131.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _270.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _131.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryParamsRequest;
                fromPartial(object: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
                fromAmino(object: _131.QueryParamsRequestAmino): _131.QueryParamsRequest;
                toAmino(message: _131.QueryParamsRequest): _131.QueryParamsRequestAmino;
                fromAminoMsg(object: _131.QueryParamsRequestAminoMsg): _131.QueryParamsRequest;
                toAminoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _131.QueryParamsRequestProtoMsg): _131.QueryParamsRequest;
                toProto(message: _131.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _131.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryParamsResponse;
                fromPartial(object: Partial<_131.QueryParamsResponse>): _131.QueryParamsResponse;
                fromAmino(object: _131.QueryParamsResponseAmino): _131.QueryParamsResponse;
                toAmino(message: _131.QueryParamsResponse): _131.QueryParamsResponseAmino;
                fromAminoMsg(object: _131.QueryParamsResponseAminoMsg): _131.QueryParamsResponse;
                toAminoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _131.QueryParamsResponseProtoMsg): _131.QueryParamsResponse;
                toProto(message: _131.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _131.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.QuerySubspacesRequest;
                fromPartial(_: Partial<_131.QuerySubspacesRequest>): _131.QuerySubspacesRequest;
                fromAmino(_: _131.QuerySubspacesRequestAmino): _131.QuerySubspacesRequest;
                toAmino(_: _131.QuerySubspacesRequest): _131.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _131.QuerySubspacesRequestAminoMsg): _131.QuerySubspacesRequest;
                toAminoMsg(message: _131.QuerySubspacesRequest): _131.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _131.QuerySubspacesRequestProtoMsg): _131.QuerySubspacesRequest;
                toProto(message: _131.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _131.QuerySubspacesRequest): _131.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _131.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QuerySubspacesResponse;
                fromPartial(object: Partial<_131.QuerySubspacesResponse>): _131.QuerySubspacesResponse;
                fromAmino(object: _131.QuerySubspacesResponseAmino): _131.QuerySubspacesResponse;
                toAmino(message: _131.QuerySubspacesResponse): _131.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _131.QuerySubspacesResponseAminoMsg): _131.QuerySubspacesResponse;
                toAminoMsg(message: _131.QuerySubspacesResponse): _131.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _131.QuerySubspacesResponseProtoMsg): _131.QuerySubspacesResponse;
                toProto(message: _131.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _131.QuerySubspacesResponse): _131.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _131.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.Subspace;
                fromPartial(object: Partial<_131.Subspace>): _131.Subspace;
                fromAmino(object: _131.SubspaceAmino): _131.Subspace;
                toAmino(message: _131.Subspace): _131.SubspaceAmino;
                fromAminoMsg(object: _131.SubspaceAminoMsg): _131.Subspace;
                toAminoMsg(message: _131.Subspace): _131.SubspaceAminoMsg;
                fromProtoMsg(message: _131.SubspaceProtoMsg): _131.Subspace;
                toProto(message: _131.Subspace): Uint8Array;
                toProtoMsg(message: _131.Subspace): _131.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _130.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.ParameterChangeProposal;
                fromPartial(object: Partial<_130.ParameterChangeProposal>): _130.ParameterChangeProposal;
                fromAmino(object: _130.ParameterChangeProposalAmino): _130.ParameterChangeProposal;
                toAmino(message: _130.ParameterChangeProposal): _130.ParameterChangeProposalAmino;
                fromAminoMsg(object: _130.ParameterChangeProposalAminoMsg): _130.ParameterChangeProposal;
                toAminoMsg(message: _130.ParameterChangeProposal): _130.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _130.ParameterChangeProposalProtoMsg): _130.ParameterChangeProposal;
                toProto(message: _130.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _130.ParameterChangeProposal): _130.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _130.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.ParamChange;
                fromPartial(object: Partial<_130.ParamChange>): _130.ParamChange;
                fromAmino(object: _130.ParamChangeAmino): _130.ParamChange;
                toAmino(message: _130.ParamChange): _130.ParamChangeAmino;
                fromAminoMsg(object: _130.ParamChangeAminoMsg): _130.ParamChange;
                toAminoMsg(message: _130.ParamChange): _130.ParamChangeAminoMsg;
                fromProtoMsg(message: _130.ParamChangeProtoMsg): _130.ParamChange;
                toProto(message: _130.ParamChange): Uint8Array;
                toProtoMsg(message: _130.ParamChange): _130.ParamChangeProtoMsg;
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
                encode(_: _133.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _133.FileDescriptorsRequest;
                fromPartial(_: Partial<_133.FileDescriptorsRequest>): _133.FileDescriptorsRequest;
                fromAmino(_: _133.FileDescriptorsRequestAmino): _133.FileDescriptorsRequest;
                toAmino(_: _133.FileDescriptorsRequest): _133.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _133.FileDescriptorsRequestAminoMsg): _133.FileDescriptorsRequest;
                toAminoMsg(message: _133.FileDescriptorsRequest): _133.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _133.FileDescriptorsRequestProtoMsg): _133.FileDescriptorsRequest;
                toProto(message: _133.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _133.FileDescriptorsRequest): _133.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _133.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.FileDescriptorsResponse;
                fromPartial(object: Partial<_133.FileDescriptorsResponse>): _133.FileDescriptorsResponse;
                fromAmino(object: _133.FileDescriptorsResponseAmino): _133.FileDescriptorsResponse;
                toAmino(message: _133.FileDescriptorsResponse): _133.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _133.FileDescriptorsResponseAminoMsg): _133.FileDescriptorsResponse;
                toAminoMsg(message: _133.FileDescriptorsResponse): _133.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _133.FileDescriptorsResponseProtoMsg): _133.FileDescriptorsResponse;
                toProto(message: _133.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _133.FileDescriptorsResponse): _133.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _134.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _134.Module;
                    fromPartial(object: Partial<_134.Module>): _134.Module;
                    fromAmino(object: _134.ModuleAmino): _134.Module;
                    toAmino(message: _134.Module): _134.ModuleAmino;
                    fromAminoMsg(object: _134.ModuleAminoMsg): _134.Module;
                    toAminoMsg(message: _134.Module): _134.ModuleAminoMsg;
                    fromProtoMsg(message: _134.ModuleProtoMsg): _134.Module;
                    toProto(message: _134.Module): Uint8Array;
                    toProtoMsg(message: _134.Module): _134.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _310.MsgClientImpl;
            QueryClientImpl: typeof _293.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                signingInfo(request: _136.QuerySigningInfoRequest): Promise<_136.QuerySigningInfoResponse>;
                signingInfos(request?: _136.QuerySigningInfosRequest): Promise<_136.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _271.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _138.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _138.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _138.MsgUnjail): {
                        typeUrl: string;
                        value: _138.MsgUnjail;
                    };
                    updateParams(value: _138.MsgUpdateParams): {
                        typeUrl: string;
                        value: _138.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _138.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _138.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _138.MsgUnjail): {
                        typeUrl: string;
                        value: _138.MsgUnjail;
                    };
                    updateParams(value: _138.MsgUpdateParams): {
                        typeUrl: string;
                        value: _138.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUnjail) => _138.MsgUnjailAmino;
                    fromAmino: (object: _138.MsgUnjailAmino) => _138.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateParams) => _138.MsgUpdateParamsAmino;
                    fromAmino: (object: _138.MsgUpdateParamsAmino) => _138.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _138.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.MsgUnjail;
                fromPartial(object: Partial<_138.MsgUnjail>): _138.MsgUnjail;
                fromAmino(object: _138.MsgUnjailAmino): _138.MsgUnjail;
                toAmino(message: _138.MsgUnjail): _138.MsgUnjailAmino;
                fromAminoMsg(object: _138.MsgUnjailAminoMsg): _138.MsgUnjail;
                toAminoMsg(message: _138.MsgUnjail): _138.MsgUnjailAminoMsg;
                fromProtoMsg(message: _138.MsgUnjailProtoMsg): _138.MsgUnjail;
                toProto(message: _138.MsgUnjail): Uint8Array;
                toProtoMsg(message: _138.MsgUnjail): _138.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _138.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.MsgUnjailResponse;
                fromPartial(_: Partial<_138.MsgUnjailResponse>): _138.MsgUnjailResponse;
                fromAmino(_: _138.MsgUnjailResponseAmino): _138.MsgUnjailResponse;
                toAmino(_: _138.MsgUnjailResponse): _138.MsgUnjailResponseAmino;
                fromAminoMsg(object: _138.MsgUnjailResponseAminoMsg): _138.MsgUnjailResponse;
                toAminoMsg(message: _138.MsgUnjailResponse): _138.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _138.MsgUnjailResponseProtoMsg): _138.MsgUnjailResponse;
                toProto(message: _138.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUnjailResponse): _138.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _138.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.MsgUpdateParams;
                fromPartial(object: Partial<_138.MsgUpdateParams>): _138.MsgUpdateParams;
                fromAmino(object: _138.MsgUpdateParamsAmino): _138.MsgUpdateParams;
                toAmino(message: _138.MsgUpdateParams): _138.MsgUpdateParamsAmino;
                fromAminoMsg(object: _138.MsgUpdateParamsAminoMsg): _138.MsgUpdateParams;
                toAminoMsg(message: _138.MsgUpdateParams): _138.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateParamsProtoMsg): _138.MsgUpdateParams;
                toProto(message: _138.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateParams): _138.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _138.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _138.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_138.MsgUpdateParamsResponse>): _138.MsgUpdateParamsResponse;
                fromAmino(_: _138.MsgUpdateParamsResponseAmino): _138.MsgUpdateParamsResponse;
                toAmino(_: _138.MsgUpdateParamsResponse): _138.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateParamsResponseAminoMsg): _138.MsgUpdateParamsResponse;
                toAminoMsg(message: _138.MsgUpdateParamsResponse): _138.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _138.MsgUpdateParamsResponseProtoMsg): _138.MsgUpdateParamsResponse;
                toProto(message: _138.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateParamsResponse): _138.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _137.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.ValidatorSigningInfo;
                fromPartial(object: Partial<_137.ValidatorSigningInfo>): _137.ValidatorSigningInfo;
                fromAmino(object: _137.ValidatorSigningInfoAmino): _137.ValidatorSigningInfo;
                toAmino(message: _137.ValidatorSigningInfo): _137.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _137.ValidatorSigningInfoAminoMsg): _137.ValidatorSigningInfo;
                toAminoMsg(message: _137.ValidatorSigningInfo): _137.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _137.ValidatorSigningInfoProtoMsg): _137.ValidatorSigningInfo;
                toProto(message: _137.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _137.ValidatorSigningInfo): _137.ValidatorSigningInfoProtoMsg;
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
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _136.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _136.QueryParamsRequest;
                fromPartial(_: Partial<_136.QueryParamsRequest>): _136.QueryParamsRequest;
                fromAmino(_: _136.QueryParamsRequestAmino): _136.QueryParamsRequest;
                toAmino(_: _136.QueryParamsRequest): _136.QueryParamsRequestAmino;
                fromAminoMsg(object: _136.QueryParamsRequestAminoMsg): _136.QueryParamsRequest;
                toAminoMsg(message: _136.QueryParamsRequest): _136.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _136.QueryParamsRequestProtoMsg): _136.QueryParamsRequest;
                toProto(message: _136.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _136.QueryParamsRequest): _136.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _136.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QueryParamsResponse;
                fromPartial(object: Partial<_136.QueryParamsResponse>): _136.QueryParamsResponse;
                fromAmino(object: _136.QueryParamsResponseAmino): _136.QueryParamsResponse;
                toAmino(message: _136.QueryParamsResponse): _136.QueryParamsResponseAmino;
                fromAminoMsg(object: _136.QueryParamsResponseAminoMsg): _136.QueryParamsResponse;
                toAminoMsg(message: _136.QueryParamsResponse): _136.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _136.QueryParamsResponseProtoMsg): _136.QueryParamsResponse;
                toProto(message: _136.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _136.QueryParamsResponse): _136.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _136.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QuerySigningInfoRequest;
                fromPartial(object: Partial<_136.QuerySigningInfoRequest>): _136.QuerySigningInfoRequest;
                fromAmino(object: _136.QuerySigningInfoRequestAmino): _136.QuerySigningInfoRequest;
                toAmino(message: _136.QuerySigningInfoRequest): _136.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _136.QuerySigningInfoRequestAminoMsg): _136.QuerySigningInfoRequest;
                toAminoMsg(message: _136.QuerySigningInfoRequest): _136.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _136.QuerySigningInfoRequestProtoMsg): _136.QuerySigningInfoRequest;
                toProto(message: _136.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _136.QuerySigningInfoRequest): _136.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _136.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QuerySigningInfoResponse;
                fromPartial(object: Partial<_136.QuerySigningInfoResponse>): _136.QuerySigningInfoResponse;
                fromAmino(object: _136.QuerySigningInfoResponseAmino): _136.QuerySigningInfoResponse;
                toAmino(message: _136.QuerySigningInfoResponse): _136.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _136.QuerySigningInfoResponseAminoMsg): _136.QuerySigningInfoResponse;
                toAminoMsg(message: _136.QuerySigningInfoResponse): _136.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _136.QuerySigningInfoResponseProtoMsg): _136.QuerySigningInfoResponse;
                toProto(message: _136.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _136.QuerySigningInfoResponse): _136.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _136.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QuerySigningInfosRequest;
                fromPartial(object: Partial<_136.QuerySigningInfosRequest>): _136.QuerySigningInfosRequest;
                fromAmino(object: _136.QuerySigningInfosRequestAmino): _136.QuerySigningInfosRequest;
                toAmino(message: _136.QuerySigningInfosRequest): _136.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _136.QuerySigningInfosRequestAminoMsg): _136.QuerySigningInfosRequest;
                toAminoMsg(message: _136.QuerySigningInfosRequest): _136.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _136.QuerySigningInfosRequestProtoMsg): _136.QuerySigningInfosRequest;
                toProto(message: _136.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _136.QuerySigningInfosRequest): _136.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _136.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.QuerySigningInfosResponse;
                fromPartial(object: Partial<_136.QuerySigningInfosResponse>): _136.QuerySigningInfosResponse;
                fromAmino(object: _136.QuerySigningInfosResponseAmino): _136.QuerySigningInfosResponse;
                toAmino(message: _136.QuerySigningInfosResponse): _136.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _136.QuerySigningInfosResponseAminoMsg): _136.QuerySigningInfosResponse;
                toAminoMsg(message: _136.QuerySigningInfosResponse): _136.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _136.QuerySigningInfosResponseProtoMsg): _136.QuerySigningInfosResponse;
                toProto(message: _136.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _136.QuerySigningInfosResponse): _136.QuerySigningInfosResponseProtoMsg;
            };
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
            SigningInfo: {
                typeUrl: string;
                encode(message: _135.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.SigningInfo;
                fromPartial(object: Partial<_135.SigningInfo>): _135.SigningInfo;
                fromAmino(object: _135.SigningInfoAmino): _135.SigningInfo;
                toAmino(message: _135.SigningInfo): _135.SigningInfoAmino;
                fromAminoMsg(object: _135.SigningInfoAminoMsg): _135.SigningInfo;
                toAminoMsg(message: _135.SigningInfo): _135.SigningInfoAminoMsg;
                fromProtoMsg(message: _135.SigningInfoProtoMsg): _135.SigningInfo;
                toProto(message: _135.SigningInfo): Uint8Array;
                toProtoMsg(message: _135.SigningInfo): _135.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _135.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.ValidatorMissedBlocks;
                fromPartial(object: Partial<_135.ValidatorMissedBlocks>): _135.ValidatorMissedBlocks;
                fromAmino(object: _135.ValidatorMissedBlocksAmino): _135.ValidatorMissedBlocks;
                toAmino(message: _135.ValidatorMissedBlocks): _135.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _135.ValidatorMissedBlocksAminoMsg): _135.ValidatorMissedBlocks;
                toAminoMsg(message: _135.ValidatorMissedBlocks): _135.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _135.ValidatorMissedBlocksProtoMsg): _135.ValidatorMissedBlocks;
                toProto(message: _135.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _135.ValidatorMissedBlocks): _135.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _135.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MissedBlock;
                fromPartial(object: Partial<_135.MissedBlock>): _135.MissedBlock;
                fromAmino(object: _135.MissedBlockAmino): _135.MissedBlock;
                toAmino(message: _135.MissedBlock): _135.MissedBlockAmino;
                fromAminoMsg(object: _135.MissedBlockAminoMsg): _135.MissedBlock;
                toAminoMsg(message: _135.MissedBlock): _135.MissedBlockAminoMsg;
                fromProtoMsg(message: _135.MissedBlockProtoMsg): _135.MissedBlock;
                toProto(message: _135.MissedBlock): Uint8Array;
                toProtoMsg(message: _135.MissedBlock): _135.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _139.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _139.Module;
                    fromPartial(object: Partial<_139.Module>): _139.Module;
                    fromAmino(object: _139.ModuleAmino): _139.Module;
                    toAmino(message: _139.Module): _139.ModuleAmino;
                    fromAminoMsg(object: _139.ModuleAminoMsg): _139.Module;
                    toAminoMsg(message: _139.Module): _139.ModuleAminoMsg;
                    fromProtoMsg(message: _139.ModuleProtoMsg): _139.Module;
                    toProto(message: _139.Module): Uint8Array;
                    toProtoMsg(message: _139.Module): _139.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _142.QueryValidatorsRequest): Promise<_142.QueryValidatorsResponse>;
                validator(request: _142.QueryValidatorRequest): Promise<_142.QueryValidatorResponse>;
                validatorDelegations(request: _142.QueryValidatorDelegationsRequest): Promise<_142.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _142.QueryValidatorUnbondingDelegationsRequest): Promise<_142.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _142.QueryDelegationRequest): Promise<_142.QueryDelegationResponse>;
                unbondingDelegation(request: _142.QueryUnbondingDelegationRequest): Promise<_142.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _142.QueryDelegatorDelegationsRequest): Promise<_142.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _142.QueryDelegatorUnbondingDelegationsRequest): Promise<_142.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _142.QueryRedelegationsRequest): Promise<_142.QueryRedelegationsResponse>;
                delegatorValidators(request: _142.QueryDelegatorValidatorsRequest): Promise<_142.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _142.QueryDelegatorValidatorRequest): Promise<_142.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _142.QueryHistoricalInfoRequest): Promise<_142.QueryHistoricalInfoResponse>;
                pool(request?: _142.QueryPoolRequest): Promise<_142.QueryPoolResponse>;
                params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _272.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _144.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _144.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _144.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _144.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _144.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _144.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _144.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _144.MsgCreateValidator): {
                        typeUrl: string;
                        value: _144.MsgCreateValidator;
                    };
                    editValidator(value: _144.MsgEditValidator): {
                        typeUrl: string;
                        value: _144.MsgEditValidator;
                    };
                    delegate(value: _144.MsgDelegate): {
                        typeUrl: string;
                        value: _144.MsgDelegate;
                    };
                    beginRedelegate(value: _144.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _144.MsgBeginRedelegate;
                    };
                    undelegate(value: _144.MsgUndelegate): {
                        typeUrl: string;
                        value: _144.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _144.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _144.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _144.MsgUpdateParams): {
                        typeUrl: string;
                        value: _144.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _144.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _144.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _144.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _144.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _144.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _144.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _144.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _144.MsgCreateValidator): {
                        typeUrl: string;
                        value: _144.MsgCreateValidator;
                    };
                    editValidator(value: _144.MsgEditValidator): {
                        typeUrl: string;
                        value: _144.MsgEditValidator;
                    };
                    delegate(value: _144.MsgDelegate): {
                        typeUrl: string;
                        value: _144.MsgDelegate;
                    };
                    beginRedelegate(value: _144.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _144.MsgBeginRedelegate;
                    };
                    undelegate(value: _144.MsgUndelegate): {
                        typeUrl: string;
                        value: _144.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _144.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _144.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _144.MsgUpdateParams): {
                        typeUrl: string;
                        value: _144.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _144.MsgCreateValidator) => _144.MsgCreateValidatorAmino;
                    fromAmino: (object: _144.MsgCreateValidatorAmino) => _144.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _144.MsgEditValidator) => _144.MsgEditValidatorAmino;
                    fromAmino: (object: _144.MsgEditValidatorAmino) => _144.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _144.MsgDelegate) => _144.MsgDelegateAmino;
                    fromAmino: (object: _144.MsgDelegateAmino) => _144.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _144.MsgBeginRedelegate) => _144.MsgBeginRedelegateAmino;
                    fromAmino: (object: _144.MsgBeginRedelegateAmino) => _144.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _144.MsgUndelegate) => _144.MsgUndelegateAmino;
                    fromAmino: (object: _144.MsgUndelegateAmino) => _144.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _144.MsgCancelUnbondingDelegation) => _144.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _144.MsgCancelUnbondingDelegationAmino) => _144.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _144.MsgUpdateParams) => _144.MsgUpdateParamsAmino;
                    fromAmino: (object: _144.MsgUpdateParamsAmino) => _144.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _144.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgCreateValidator;
                fromPartial(object: Partial<_144.MsgCreateValidator>): _144.MsgCreateValidator;
                fromAmino(object: _144.MsgCreateValidatorAmino): _144.MsgCreateValidator;
                toAmino(message: _144.MsgCreateValidator): _144.MsgCreateValidatorAmino;
                fromAminoMsg(object: _144.MsgCreateValidatorAminoMsg): _144.MsgCreateValidator;
                toAminoMsg(message: _144.MsgCreateValidator): _144.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _144.MsgCreateValidatorProtoMsg): _144.MsgCreateValidator;
                toProto(message: _144.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _144.MsgCreateValidator): _144.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _144.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_144.MsgCreateValidatorResponse>): _144.MsgCreateValidatorResponse;
                fromAmino(_: _144.MsgCreateValidatorResponseAmino): _144.MsgCreateValidatorResponse;
                toAmino(_: _144.MsgCreateValidatorResponse): _144.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _144.MsgCreateValidatorResponseAminoMsg): _144.MsgCreateValidatorResponse;
                toAminoMsg(message: _144.MsgCreateValidatorResponse): _144.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _144.MsgCreateValidatorResponseProtoMsg): _144.MsgCreateValidatorResponse;
                toProto(message: _144.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _144.MsgCreateValidatorResponse): _144.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _144.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgEditValidator;
                fromPartial(object: Partial<_144.MsgEditValidator>): _144.MsgEditValidator;
                fromAmino(object: _144.MsgEditValidatorAmino): _144.MsgEditValidator;
                toAmino(message: _144.MsgEditValidator): _144.MsgEditValidatorAmino;
                fromAminoMsg(object: _144.MsgEditValidatorAminoMsg): _144.MsgEditValidator;
                toAminoMsg(message: _144.MsgEditValidator): _144.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _144.MsgEditValidatorProtoMsg): _144.MsgEditValidator;
                toProto(message: _144.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _144.MsgEditValidator): _144.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _144.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgEditValidatorResponse;
                fromPartial(_: Partial<_144.MsgEditValidatorResponse>): _144.MsgEditValidatorResponse;
                fromAmino(_: _144.MsgEditValidatorResponseAmino): _144.MsgEditValidatorResponse;
                toAmino(_: _144.MsgEditValidatorResponse): _144.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _144.MsgEditValidatorResponseAminoMsg): _144.MsgEditValidatorResponse;
                toAminoMsg(message: _144.MsgEditValidatorResponse): _144.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _144.MsgEditValidatorResponseProtoMsg): _144.MsgEditValidatorResponse;
                toProto(message: _144.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _144.MsgEditValidatorResponse): _144.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _144.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgDelegate;
                fromPartial(object: Partial<_144.MsgDelegate>): _144.MsgDelegate;
                fromAmino(object: _144.MsgDelegateAmino): _144.MsgDelegate;
                toAmino(message: _144.MsgDelegate): _144.MsgDelegateAmino;
                fromAminoMsg(object: _144.MsgDelegateAminoMsg): _144.MsgDelegate;
                toAminoMsg(message: _144.MsgDelegate): _144.MsgDelegateAminoMsg;
                fromProtoMsg(message: _144.MsgDelegateProtoMsg): _144.MsgDelegate;
                toProto(message: _144.MsgDelegate): Uint8Array;
                toProtoMsg(message: _144.MsgDelegate): _144.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _144.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgDelegateResponse;
                fromPartial(_: Partial<_144.MsgDelegateResponse>): _144.MsgDelegateResponse;
                fromAmino(_: _144.MsgDelegateResponseAmino): _144.MsgDelegateResponse;
                toAmino(_: _144.MsgDelegateResponse): _144.MsgDelegateResponseAmino;
                fromAminoMsg(object: _144.MsgDelegateResponseAminoMsg): _144.MsgDelegateResponse;
                toAminoMsg(message: _144.MsgDelegateResponse): _144.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _144.MsgDelegateResponseProtoMsg): _144.MsgDelegateResponse;
                toProto(message: _144.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _144.MsgDelegateResponse): _144.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _144.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgBeginRedelegate;
                fromPartial(object: Partial<_144.MsgBeginRedelegate>): _144.MsgBeginRedelegate;
                fromAmino(object: _144.MsgBeginRedelegateAmino): _144.MsgBeginRedelegate;
                toAmino(message: _144.MsgBeginRedelegate): _144.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _144.MsgBeginRedelegateAminoMsg): _144.MsgBeginRedelegate;
                toAminoMsg(message: _144.MsgBeginRedelegate): _144.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _144.MsgBeginRedelegateProtoMsg): _144.MsgBeginRedelegate;
                toProto(message: _144.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _144.MsgBeginRedelegate): _144.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _144.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_144.MsgBeginRedelegateResponse>): _144.MsgBeginRedelegateResponse;
                fromAmino(object: _144.MsgBeginRedelegateResponseAmino): _144.MsgBeginRedelegateResponse;
                toAmino(message: _144.MsgBeginRedelegateResponse): _144.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _144.MsgBeginRedelegateResponseAminoMsg): _144.MsgBeginRedelegateResponse;
                toAminoMsg(message: _144.MsgBeginRedelegateResponse): _144.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _144.MsgBeginRedelegateResponseProtoMsg): _144.MsgBeginRedelegateResponse;
                toProto(message: _144.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _144.MsgBeginRedelegateResponse): _144.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _144.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgUndelegate;
                fromPartial(object: Partial<_144.MsgUndelegate>): _144.MsgUndelegate;
                fromAmino(object: _144.MsgUndelegateAmino): _144.MsgUndelegate;
                toAmino(message: _144.MsgUndelegate): _144.MsgUndelegateAmino;
                fromAminoMsg(object: _144.MsgUndelegateAminoMsg): _144.MsgUndelegate;
                toAminoMsg(message: _144.MsgUndelegate): _144.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _144.MsgUndelegateProtoMsg): _144.MsgUndelegate;
                toProto(message: _144.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _144.MsgUndelegate): _144.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _144.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgUndelegateResponse;
                fromPartial(object: Partial<_144.MsgUndelegateResponse>): _144.MsgUndelegateResponse;
                fromAmino(object: _144.MsgUndelegateResponseAmino): _144.MsgUndelegateResponse;
                toAmino(message: _144.MsgUndelegateResponse): _144.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _144.MsgUndelegateResponseAminoMsg): _144.MsgUndelegateResponse;
                toAminoMsg(message: _144.MsgUndelegateResponse): _144.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _144.MsgUndelegateResponseProtoMsg): _144.MsgUndelegateResponse;
                toProto(message: _144.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _144.MsgUndelegateResponse): _144.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _144.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_144.MsgCancelUnbondingDelegation>): _144.MsgCancelUnbondingDelegation;
                fromAmino(object: _144.MsgCancelUnbondingDelegationAmino): _144.MsgCancelUnbondingDelegation;
                toAmino(message: _144.MsgCancelUnbondingDelegation): _144.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _144.MsgCancelUnbondingDelegationAminoMsg): _144.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _144.MsgCancelUnbondingDelegation): _144.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _144.MsgCancelUnbondingDelegationProtoMsg): _144.MsgCancelUnbondingDelegation;
                toProto(message: _144.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _144.MsgCancelUnbondingDelegation): _144.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _144.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_144.MsgCancelUnbondingDelegationResponse>): _144.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _144.MsgCancelUnbondingDelegationResponseAmino): _144.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _144.MsgCancelUnbondingDelegationResponse): _144.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _144.MsgCancelUnbondingDelegationResponseAminoMsg): _144.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _144.MsgCancelUnbondingDelegationResponse): _144.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _144.MsgCancelUnbondingDelegationResponseProtoMsg): _144.MsgCancelUnbondingDelegationResponse;
                toProto(message: _144.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _144.MsgCancelUnbondingDelegationResponse): _144.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _144.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MsgUpdateParams;
                fromPartial(object: Partial<_144.MsgUpdateParams>): _144.MsgUpdateParams;
                fromAmino(object: _144.MsgUpdateParamsAmino): _144.MsgUpdateParams;
                toAmino(message: _144.MsgUpdateParams): _144.MsgUpdateParamsAmino;
                fromAminoMsg(object: _144.MsgUpdateParamsAminoMsg): _144.MsgUpdateParams;
                toAminoMsg(message: _144.MsgUpdateParams): _144.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _144.MsgUpdateParamsProtoMsg): _144.MsgUpdateParams;
                toProto(message: _144.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _144.MsgUpdateParams): _144.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _144.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_144.MsgUpdateParamsResponse>): _144.MsgUpdateParamsResponse;
                fromAmino(_: _144.MsgUpdateParamsResponseAmino): _144.MsgUpdateParamsResponse;
                toAmino(_: _144.MsgUpdateParamsResponse): _144.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _144.MsgUpdateParamsResponseAminoMsg): _144.MsgUpdateParamsResponse;
                toAminoMsg(message: _144.MsgUpdateParamsResponse): _144.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _144.MsgUpdateParamsResponseProtoMsg): _144.MsgUpdateParamsResponse;
                toProto(message: _144.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _144.MsgUpdateParamsResponse): _144.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _143.BondStatus;
            bondStatusToJSON(object: _143.BondStatus): string;
            infractionFromJSON(object: any): _143.Infraction;
            infractionToJSON(object: _143.Infraction): string;
            BondStatus: typeof _143.BondStatus;
            BondStatusSDKType: typeof _143.BondStatus;
            BondStatusAmino: typeof _143.BondStatus;
            Infraction: typeof _143.Infraction;
            InfractionSDKType: typeof _143.Infraction;
            InfractionAmino: typeof _143.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _143.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.HistoricalInfo;
                fromPartial(object: Partial<_143.HistoricalInfo>): _143.HistoricalInfo;
                fromAmino(object: _143.HistoricalInfoAmino): _143.HistoricalInfo;
                toAmino(message: _143.HistoricalInfo): _143.HistoricalInfoAmino;
                fromAminoMsg(object: _143.HistoricalInfoAminoMsg): _143.HistoricalInfo;
                toAminoMsg(message: _143.HistoricalInfo): _143.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _143.HistoricalInfoProtoMsg): _143.HistoricalInfo;
                toProto(message: _143.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _143.HistoricalInfo): _143.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _143.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.CommissionRates;
                fromPartial(object: Partial<_143.CommissionRates>): _143.CommissionRates;
                fromAmino(object: _143.CommissionRatesAmino): _143.CommissionRates;
                toAmino(message: _143.CommissionRates): _143.CommissionRatesAmino;
                fromAminoMsg(object: _143.CommissionRatesAminoMsg): _143.CommissionRates;
                toAminoMsg(message: _143.CommissionRates): _143.CommissionRatesAminoMsg;
                fromProtoMsg(message: _143.CommissionRatesProtoMsg): _143.CommissionRates;
                toProto(message: _143.CommissionRates): Uint8Array;
                toProtoMsg(message: _143.CommissionRates): _143.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _143.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Commission;
                fromPartial(object: Partial<_143.Commission>): _143.Commission;
                fromAmino(object: _143.CommissionAmino): _143.Commission;
                toAmino(message: _143.Commission): _143.CommissionAmino;
                fromAminoMsg(object: _143.CommissionAminoMsg): _143.Commission;
                toAminoMsg(message: _143.Commission): _143.CommissionAminoMsg;
                fromProtoMsg(message: _143.CommissionProtoMsg): _143.Commission;
                toProto(message: _143.Commission): Uint8Array;
                toProtoMsg(message: _143.Commission): _143.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _143.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Description;
                fromPartial(object: Partial<_143.Description>): _143.Description;
                fromAmino(object: _143.DescriptionAmino): _143.Description;
                toAmino(message: _143.Description): _143.DescriptionAmino;
                fromAminoMsg(object: _143.DescriptionAminoMsg): _143.Description;
                toAminoMsg(message: _143.Description): _143.DescriptionAminoMsg;
                fromProtoMsg(message: _143.DescriptionProtoMsg): _143.Description;
                toProto(message: _143.Description): Uint8Array;
                toProtoMsg(message: _143.Description): _143.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _143.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Validator;
                fromPartial(object: Partial<_143.Validator>): _143.Validator;
                fromAmino(object: _143.ValidatorAmino): _143.Validator;
                toAmino(message: _143.Validator): _143.ValidatorAmino;
                fromAminoMsg(object: _143.ValidatorAminoMsg): _143.Validator;
                toAminoMsg(message: _143.Validator): _143.ValidatorAminoMsg;
                fromProtoMsg(message: _143.ValidatorProtoMsg): _143.Validator;
                toProto(message: _143.Validator): Uint8Array;
                toProtoMsg(message: _143.Validator): _143.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _143.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValAddresses;
                fromPartial(object: Partial<_143.ValAddresses>): _143.ValAddresses;
                fromAmino(object: _143.ValAddressesAmino): _143.ValAddresses;
                toAmino(message: _143.ValAddresses): _143.ValAddressesAmino;
                fromAminoMsg(object: _143.ValAddressesAminoMsg): _143.ValAddresses;
                toAminoMsg(message: _143.ValAddresses): _143.ValAddressesAminoMsg;
                fromProtoMsg(message: _143.ValAddressesProtoMsg): _143.ValAddresses;
                toProto(message: _143.ValAddresses): Uint8Array;
                toProtoMsg(message: _143.ValAddresses): _143.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _143.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DVPair;
                fromPartial(object: Partial<_143.DVPair>): _143.DVPair;
                fromAmino(object: _143.DVPairAmino): _143.DVPair;
                toAmino(message: _143.DVPair): _143.DVPairAmino;
                fromAminoMsg(object: _143.DVPairAminoMsg): _143.DVPair;
                toAminoMsg(message: _143.DVPair): _143.DVPairAminoMsg;
                fromProtoMsg(message: _143.DVPairProtoMsg): _143.DVPair;
                toProto(message: _143.DVPair): Uint8Array;
                toProtoMsg(message: _143.DVPair): _143.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _143.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DVPairs;
                fromPartial(object: Partial<_143.DVPairs>): _143.DVPairs;
                fromAmino(object: _143.DVPairsAmino): _143.DVPairs;
                toAmino(message: _143.DVPairs): _143.DVPairsAmino;
                fromAminoMsg(object: _143.DVPairsAminoMsg): _143.DVPairs;
                toAminoMsg(message: _143.DVPairs): _143.DVPairsAminoMsg;
                fromProtoMsg(message: _143.DVPairsProtoMsg): _143.DVPairs;
                toProto(message: _143.DVPairs): Uint8Array;
                toProtoMsg(message: _143.DVPairs): _143.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _143.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DVVTriplet;
                fromPartial(object: Partial<_143.DVVTriplet>): _143.DVVTriplet;
                fromAmino(object: _143.DVVTripletAmino): _143.DVVTriplet;
                toAmino(message: _143.DVVTriplet): _143.DVVTripletAmino;
                fromAminoMsg(object: _143.DVVTripletAminoMsg): _143.DVVTriplet;
                toAminoMsg(message: _143.DVVTriplet): _143.DVVTripletAminoMsg;
                fromProtoMsg(message: _143.DVVTripletProtoMsg): _143.DVVTriplet;
                toProto(message: _143.DVVTriplet): Uint8Array;
                toProtoMsg(message: _143.DVVTriplet): _143.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _143.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DVVTriplets;
                fromPartial(object: Partial<_143.DVVTriplets>): _143.DVVTriplets;
                fromAmino(object: _143.DVVTripletsAmino): _143.DVVTriplets;
                toAmino(message: _143.DVVTriplets): _143.DVVTripletsAmino;
                fromAminoMsg(object: _143.DVVTripletsAminoMsg): _143.DVVTriplets;
                toAminoMsg(message: _143.DVVTriplets): _143.DVVTripletsAminoMsg;
                fromProtoMsg(message: _143.DVVTripletsProtoMsg): _143.DVVTriplets;
                toProto(message: _143.DVVTriplets): Uint8Array;
                toProtoMsg(message: _143.DVVTriplets): _143.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _143.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Delegation;
                fromPartial(object: Partial<_143.Delegation>): _143.Delegation;
                fromAmino(object: _143.DelegationAmino): _143.Delegation;
                toAmino(message: _143.Delegation): _143.DelegationAmino;
                fromAminoMsg(object: _143.DelegationAminoMsg): _143.Delegation;
                toAminoMsg(message: _143.Delegation): _143.DelegationAminoMsg;
                fromProtoMsg(message: _143.DelegationProtoMsg): _143.Delegation;
                toProto(message: _143.Delegation): Uint8Array;
                toProtoMsg(message: _143.Delegation): _143.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _143.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.UnbondingDelegation;
                fromPartial(object: Partial<_143.UnbondingDelegation>): _143.UnbondingDelegation;
                fromAmino(object: _143.UnbondingDelegationAmino): _143.UnbondingDelegation;
                toAmino(message: _143.UnbondingDelegation): _143.UnbondingDelegationAmino;
                fromAminoMsg(object: _143.UnbondingDelegationAminoMsg): _143.UnbondingDelegation;
                toAminoMsg(message: _143.UnbondingDelegation): _143.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _143.UnbondingDelegationProtoMsg): _143.UnbondingDelegation;
                toProto(message: _143.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _143.UnbondingDelegation): _143.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _143.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.UnbondingDelegationEntry;
                fromPartial(object: Partial<_143.UnbondingDelegationEntry>): _143.UnbondingDelegationEntry;
                fromAmino(object: _143.UnbondingDelegationEntryAmino): _143.UnbondingDelegationEntry;
                toAmino(message: _143.UnbondingDelegationEntry): _143.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _143.UnbondingDelegationEntryAminoMsg): _143.UnbondingDelegationEntry;
                toAminoMsg(message: _143.UnbondingDelegationEntry): _143.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _143.UnbondingDelegationEntryProtoMsg): _143.UnbondingDelegationEntry;
                toProto(message: _143.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _143.UnbondingDelegationEntry): _143.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _143.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.RedelegationEntry;
                fromPartial(object: Partial<_143.RedelegationEntry>): _143.RedelegationEntry;
                fromAmino(object: _143.RedelegationEntryAmino): _143.RedelegationEntry;
                toAmino(message: _143.RedelegationEntry): _143.RedelegationEntryAmino;
                fromAminoMsg(object: _143.RedelegationEntryAminoMsg): _143.RedelegationEntry;
                toAminoMsg(message: _143.RedelegationEntry): _143.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _143.RedelegationEntryProtoMsg): _143.RedelegationEntry;
                toProto(message: _143.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _143.RedelegationEntry): _143.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _143.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Redelegation;
                fromPartial(object: Partial<_143.Redelegation>): _143.Redelegation;
                fromAmino(object: _143.RedelegationAmino): _143.Redelegation;
                toAmino(message: _143.Redelegation): _143.RedelegationAmino;
                fromAminoMsg(object: _143.RedelegationAminoMsg): _143.Redelegation;
                toAminoMsg(message: _143.Redelegation): _143.RedelegationAminoMsg;
                fromProtoMsg(message: _143.RedelegationProtoMsg): _143.Redelegation;
                toProto(message: _143.Redelegation): Uint8Array;
                toProtoMsg(message: _143.Redelegation): _143.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _143.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Params;
                fromPartial(object: Partial<_143.Params>): _143.Params;
                fromAmino(object: _143.ParamsAmino): _143.Params;
                toAmino(message: _143.Params): _143.ParamsAmino;
                fromAminoMsg(object: _143.ParamsAminoMsg): _143.Params;
                toAminoMsg(message: _143.Params): _143.ParamsAminoMsg;
                fromProtoMsg(message: _143.ParamsProtoMsg): _143.Params;
                toProto(message: _143.Params): Uint8Array;
                toProtoMsg(message: _143.Params): _143.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _143.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.DelegationResponse;
                fromPartial(object: Partial<_143.DelegationResponse>): _143.DelegationResponse;
                fromAmino(object: _143.DelegationResponseAmino): _143.DelegationResponse;
                toAmino(message: _143.DelegationResponse): _143.DelegationResponseAmino;
                fromAminoMsg(object: _143.DelegationResponseAminoMsg): _143.DelegationResponse;
                toAminoMsg(message: _143.DelegationResponse): _143.DelegationResponseAminoMsg;
                fromProtoMsg(message: _143.DelegationResponseProtoMsg): _143.DelegationResponse;
                toProto(message: _143.DelegationResponse): Uint8Array;
                toProtoMsg(message: _143.DelegationResponse): _143.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _143.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.RedelegationEntryResponse;
                fromPartial(object: Partial<_143.RedelegationEntryResponse>): _143.RedelegationEntryResponse;
                fromAmino(object: _143.RedelegationEntryResponseAmino): _143.RedelegationEntryResponse;
                toAmino(message: _143.RedelegationEntryResponse): _143.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _143.RedelegationEntryResponseAminoMsg): _143.RedelegationEntryResponse;
                toAminoMsg(message: _143.RedelegationEntryResponse): _143.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _143.RedelegationEntryResponseProtoMsg): _143.RedelegationEntryResponse;
                toProto(message: _143.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _143.RedelegationEntryResponse): _143.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _143.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.RedelegationResponse;
                fromPartial(object: Partial<_143.RedelegationResponse>): _143.RedelegationResponse;
                fromAmino(object: _143.RedelegationResponseAmino): _143.RedelegationResponse;
                toAmino(message: _143.RedelegationResponse): _143.RedelegationResponseAmino;
                fromAminoMsg(object: _143.RedelegationResponseAminoMsg): _143.RedelegationResponse;
                toAminoMsg(message: _143.RedelegationResponse): _143.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _143.RedelegationResponseProtoMsg): _143.RedelegationResponse;
                toProto(message: _143.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _143.RedelegationResponse): _143.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _143.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.Pool;
                fromPartial(object: Partial<_143.Pool>): _143.Pool;
                fromAmino(object: _143.PoolAmino): _143.Pool;
                toAmino(message: _143.Pool): _143.PoolAmino;
                fromAminoMsg(object: _143.PoolAminoMsg): _143.Pool;
                toAminoMsg(message: _143.Pool): _143.PoolAminoMsg;
                fromProtoMsg(message: _143.PoolProtoMsg): _143.Pool;
                toProto(message: _143.Pool): Uint8Array;
                toProtoMsg(message: _143.Pool): _143.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _143.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ValidatorUpdates;
                fromPartial(object: Partial<_143.ValidatorUpdates>): _143.ValidatorUpdates;
                fromAmino(object: _143.ValidatorUpdatesAmino): _143.ValidatorUpdates;
                toAmino(message: _143.ValidatorUpdates): _143.ValidatorUpdatesAmino;
                fromAminoMsg(object: _143.ValidatorUpdatesAminoMsg): _143.ValidatorUpdates;
                toAminoMsg(message: _143.ValidatorUpdates): _143.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _143.ValidatorUpdatesProtoMsg): _143.ValidatorUpdates;
                toProto(message: _143.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _143.ValidatorUpdates): _143.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _142.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorsRequest;
                fromPartial(object: Partial<_142.QueryValidatorsRequest>): _142.QueryValidatorsRequest;
                fromAmino(object: _142.QueryValidatorsRequestAmino): _142.QueryValidatorsRequest;
                toAmino(message: _142.QueryValidatorsRequest): _142.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _142.QueryValidatorsRequestAminoMsg): _142.QueryValidatorsRequest;
                toAminoMsg(message: _142.QueryValidatorsRequest): _142.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorsRequestProtoMsg): _142.QueryValidatorsRequest;
                toProto(message: _142.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorsRequest): _142.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _142.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorsResponse;
                fromPartial(object: Partial<_142.QueryValidatorsResponse>): _142.QueryValidatorsResponse;
                fromAmino(object: _142.QueryValidatorsResponseAmino): _142.QueryValidatorsResponse;
                toAmino(message: _142.QueryValidatorsResponse): _142.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _142.QueryValidatorsResponseAminoMsg): _142.QueryValidatorsResponse;
                toAminoMsg(message: _142.QueryValidatorsResponse): _142.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorsResponseProtoMsg): _142.QueryValidatorsResponse;
                toProto(message: _142.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorsResponse): _142.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _142.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorRequest;
                fromPartial(object: Partial<_142.QueryValidatorRequest>): _142.QueryValidatorRequest;
                fromAmino(object: _142.QueryValidatorRequestAmino): _142.QueryValidatorRequest;
                toAmino(message: _142.QueryValidatorRequest): _142.QueryValidatorRequestAmino;
                fromAminoMsg(object: _142.QueryValidatorRequestAminoMsg): _142.QueryValidatorRequest;
                toAminoMsg(message: _142.QueryValidatorRequest): _142.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorRequestProtoMsg): _142.QueryValidatorRequest;
                toProto(message: _142.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorRequest): _142.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _142.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorResponse;
                fromPartial(object: Partial<_142.QueryValidatorResponse>): _142.QueryValidatorResponse;
                fromAmino(object: _142.QueryValidatorResponseAmino): _142.QueryValidatorResponse;
                toAmino(message: _142.QueryValidatorResponse): _142.QueryValidatorResponseAmino;
                fromAminoMsg(object: _142.QueryValidatorResponseAminoMsg): _142.QueryValidatorResponse;
                toAminoMsg(message: _142.QueryValidatorResponse): _142.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorResponseProtoMsg): _142.QueryValidatorResponse;
                toProto(message: _142.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorResponse): _142.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _142.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_142.QueryValidatorDelegationsRequest>): _142.QueryValidatorDelegationsRequest;
                fromAmino(object: _142.QueryValidatorDelegationsRequestAmino): _142.QueryValidatorDelegationsRequest;
                toAmino(message: _142.QueryValidatorDelegationsRequest): _142.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _142.QueryValidatorDelegationsRequestAminoMsg): _142.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _142.QueryValidatorDelegationsRequest): _142.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorDelegationsRequestProtoMsg): _142.QueryValidatorDelegationsRequest;
                toProto(message: _142.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorDelegationsRequest): _142.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _142.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_142.QueryValidatorDelegationsResponse>): _142.QueryValidatorDelegationsResponse;
                fromAmino(object: _142.QueryValidatorDelegationsResponseAmino): _142.QueryValidatorDelegationsResponse;
                toAmino(message: _142.QueryValidatorDelegationsResponse): _142.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _142.QueryValidatorDelegationsResponseAminoMsg): _142.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _142.QueryValidatorDelegationsResponse): _142.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorDelegationsResponseProtoMsg): _142.QueryValidatorDelegationsResponse;
                toProto(message: _142.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorDelegationsResponse): _142.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _142.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_142.QueryValidatorUnbondingDelegationsRequest>): _142.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _142.QueryValidatorUnbondingDelegationsRequestAmino): _142.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _142.QueryValidatorUnbondingDelegationsRequest): _142.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _142.QueryValidatorUnbondingDelegationsRequestAminoMsg): _142.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _142.QueryValidatorUnbondingDelegationsRequest): _142.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorUnbondingDelegationsRequestProtoMsg): _142.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _142.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorUnbondingDelegationsRequest): _142.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _142.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_142.QueryValidatorUnbondingDelegationsResponse>): _142.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _142.QueryValidatorUnbondingDelegationsResponseAmino): _142.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _142.QueryValidatorUnbondingDelegationsResponse): _142.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _142.QueryValidatorUnbondingDelegationsResponseAminoMsg): _142.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _142.QueryValidatorUnbondingDelegationsResponse): _142.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryValidatorUnbondingDelegationsResponseProtoMsg): _142.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _142.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryValidatorUnbondingDelegationsResponse): _142.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _142.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegationRequest;
                fromPartial(object: Partial<_142.QueryDelegationRequest>): _142.QueryDelegationRequest;
                fromAmino(object: _142.QueryDelegationRequestAmino): _142.QueryDelegationRequest;
                toAmino(message: _142.QueryDelegationRequest): _142.QueryDelegationRequestAmino;
                fromAminoMsg(object: _142.QueryDelegationRequestAminoMsg): _142.QueryDelegationRequest;
                toAminoMsg(message: _142.QueryDelegationRequest): _142.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _142.QueryDelegationRequestProtoMsg): _142.QueryDelegationRequest;
                toProto(message: _142.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _142.QueryDelegationRequest): _142.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _142.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegationResponse;
                fromPartial(object: Partial<_142.QueryDelegationResponse>): _142.QueryDelegationResponse;
                fromAmino(object: _142.QueryDelegationResponseAmino): _142.QueryDelegationResponse;
                toAmino(message: _142.QueryDelegationResponse): _142.QueryDelegationResponseAmino;
                fromAminoMsg(object: _142.QueryDelegationResponseAminoMsg): _142.QueryDelegationResponse;
                toAminoMsg(message: _142.QueryDelegationResponse): _142.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _142.QueryDelegationResponseProtoMsg): _142.QueryDelegationResponse;
                toProto(message: _142.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _142.QueryDelegationResponse): _142.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _142.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_142.QueryUnbondingDelegationRequest>): _142.QueryUnbondingDelegationRequest;
                fromAmino(object: _142.QueryUnbondingDelegationRequestAmino): _142.QueryUnbondingDelegationRequest;
                toAmino(message: _142.QueryUnbondingDelegationRequest): _142.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _142.QueryUnbondingDelegationRequestAminoMsg): _142.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _142.QueryUnbondingDelegationRequest): _142.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _142.QueryUnbondingDelegationRequestProtoMsg): _142.QueryUnbondingDelegationRequest;
                toProto(message: _142.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _142.QueryUnbondingDelegationRequest): _142.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _142.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_142.QueryUnbondingDelegationResponse>): _142.QueryUnbondingDelegationResponse;
                fromAmino(object: _142.QueryUnbondingDelegationResponseAmino): _142.QueryUnbondingDelegationResponse;
                toAmino(message: _142.QueryUnbondingDelegationResponse): _142.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _142.QueryUnbondingDelegationResponseAminoMsg): _142.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _142.QueryUnbondingDelegationResponse): _142.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _142.QueryUnbondingDelegationResponseProtoMsg): _142.QueryUnbondingDelegationResponse;
                toProto(message: _142.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _142.QueryUnbondingDelegationResponse): _142.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_142.QueryDelegatorDelegationsRequest>): _142.QueryDelegatorDelegationsRequest;
                fromAmino(object: _142.QueryDelegatorDelegationsRequestAmino): _142.QueryDelegatorDelegationsRequest;
                toAmino(message: _142.QueryDelegatorDelegationsRequest): _142.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _142.QueryDelegatorDelegationsRequestAminoMsg): _142.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _142.QueryDelegatorDelegationsRequest): _142.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorDelegationsRequestProtoMsg): _142.QueryDelegatorDelegationsRequest;
                toProto(message: _142.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorDelegationsRequest): _142.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_142.QueryDelegatorDelegationsResponse>): _142.QueryDelegatorDelegationsResponse;
                fromAmino(object: _142.QueryDelegatorDelegationsResponseAmino): _142.QueryDelegatorDelegationsResponse;
                toAmino(message: _142.QueryDelegatorDelegationsResponse): _142.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _142.QueryDelegatorDelegationsResponseAminoMsg): _142.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _142.QueryDelegatorDelegationsResponse): _142.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorDelegationsResponseProtoMsg): _142.QueryDelegatorDelegationsResponse;
                toProto(message: _142.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorDelegationsResponse): _142.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_142.QueryDelegatorUnbondingDelegationsRequest>): _142.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _142.QueryDelegatorUnbondingDelegationsRequestAmino): _142.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _142.QueryDelegatorUnbondingDelegationsRequest): _142.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _142.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _142.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _142.QueryDelegatorUnbondingDelegationsRequest): _142.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _142.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _142.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorUnbondingDelegationsRequest): _142.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_142.QueryDelegatorUnbondingDelegationsResponse>): _142.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _142.QueryDelegatorUnbondingDelegationsResponseAmino): _142.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _142.QueryDelegatorUnbondingDelegationsResponse): _142.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _142.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _142.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _142.QueryDelegatorUnbondingDelegationsResponse): _142.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _142.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _142.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorUnbondingDelegationsResponse): _142.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _142.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryRedelegationsRequest;
                fromPartial(object: Partial<_142.QueryRedelegationsRequest>): _142.QueryRedelegationsRequest;
                fromAmino(object: _142.QueryRedelegationsRequestAmino): _142.QueryRedelegationsRequest;
                toAmino(message: _142.QueryRedelegationsRequest): _142.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _142.QueryRedelegationsRequestAminoMsg): _142.QueryRedelegationsRequest;
                toAminoMsg(message: _142.QueryRedelegationsRequest): _142.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryRedelegationsRequestProtoMsg): _142.QueryRedelegationsRequest;
                toProto(message: _142.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryRedelegationsRequest): _142.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _142.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryRedelegationsResponse;
                fromPartial(object: Partial<_142.QueryRedelegationsResponse>): _142.QueryRedelegationsResponse;
                fromAmino(object: _142.QueryRedelegationsResponseAmino): _142.QueryRedelegationsResponse;
                toAmino(message: _142.QueryRedelegationsResponse): _142.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _142.QueryRedelegationsResponseAminoMsg): _142.QueryRedelegationsResponse;
                toAminoMsg(message: _142.QueryRedelegationsResponse): _142.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryRedelegationsResponseProtoMsg): _142.QueryRedelegationsResponse;
                toProto(message: _142.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryRedelegationsResponse): _142.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_142.QueryDelegatorValidatorsRequest>): _142.QueryDelegatorValidatorsRequest;
                fromAmino(object: _142.QueryDelegatorValidatorsRequestAmino): _142.QueryDelegatorValidatorsRequest;
                toAmino(message: _142.QueryDelegatorValidatorsRequest): _142.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _142.QueryDelegatorValidatorsRequestAminoMsg): _142.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _142.QueryDelegatorValidatorsRequest): _142.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorValidatorsRequestProtoMsg): _142.QueryDelegatorValidatorsRequest;
                toProto(message: _142.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorValidatorsRequest): _142.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_142.QueryDelegatorValidatorsResponse>): _142.QueryDelegatorValidatorsResponse;
                fromAmino(object: _142.QueryDelegatorValidatorsResponseAmino): _142.QueryDelegatorValidatorsResponse;
                toAmino(message: _142.QueryDelegatorValidatorsResponse): _142.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _142.QueryDelegatorValidatorsResponseAminoMsg): _142.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _142.QueryDelegatorValidatorsResponse): _142.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorValidatorsResponseProtoMsg): _142.QueryDelegatorValidatorsResponse;
                toProto(message: _142.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorValidatorsResponse): _142.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_142.QueryDelegatorValidatorRequest>): _142.QueryDelegatorValidatorRequest;
                fromAmino(object: _142.QueryDelegatorValidatorRequestAmino): _142.QueryDelegatorValidatorRequest;
                toAmino(message: _142.QueryDelegatorValidatorRequest): _142.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _142.QueryDelegatorValidatorRequestAminoMsg): _142.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _142.QueryDelegatorValidatorRequest): _142.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorValidatorRequestProtoMsg): _142.QueryDelegatorValidatorRequest;
                toProto(message: _142.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorValidatorRequest): _142.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _142.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_142.QueryDelegatorValidatorResponse>): _142.QueryDelegatorValidatorResponse;
                fromAmino(object: _142.QueryDelegatorValidatorResponseAmino): _142.QueryDelegatorValidatorResponse;
                toAmino(message: _142.QueryDelegatorValidatorResponse): _142.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _142.QueryDelegatorValidatorResponseAminoMsg): _142.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _142.QueryDelegatorValidatorResponse): _142.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _142.QueryDelegatorValidatorResponseProtoMsg): _142.QueryDelegatorValidatorResponse;
                toProto(message: _142.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _142.QueryDelegatorValidatorResponse): _142.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _142.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_142.QueryHistoricalInfoRequest>): _142.QueryHistoricalInfoRequest;
                fromAmino(object: _142.QueryHistoricalInfoRequestAmino): _142.QueryHistoricalInfoRequest;
                toAmino(message: _142.QueryHistoricalInfoRequest): _142.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _142.QueryHistoricalInfoRequestAminoMsg): _142.QueryHistoricalInfoRequest;
                toAminoMsg(message: _142.QueryHistoricalInfoRequest): _142.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _142.QueryHistoricalInfoRequestProtoMsg): _142.QueryHistoricalInfoRequest;
                toProto(message: _142.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _142.QueryHistoricalInfoRequest): _142.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _142.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_142.QueryHistoricalInfoResponse>): _142.QueryHistoricalInfoResponse;
                fromAmino(object: _142.QueryHistoricalInfoResponseAmino): _142.QueryHistoricalInfoResponse;
                toAmino(message: _142.QueryHistoricalInfoResponse): _142.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _142.QueryHistoricalInfoResponseAminoMsg): _142.QueryHistoricalInfoResponse;
                toAminoMsg(message: _142.QueryHistoricalInfoResponse): _142.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _142.QueryHistoricalInfoResponseProtoMsg): _142.QueryHistoricalInfoResponse;
                toProto(message: _142.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _142.QueryHistoricalInfoResponse): _142.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _142.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _142.QueryPoolRequest;
                fromPartial(_: Partial<_142.QueryPoolRequest>): _142.QueryPoolRequest;
                fromAmino(_: _142.QueryPoolRequestAmino): _142.QueryPoolRequest;
                toAmino(_: _142.QueryPoolRequest): _142.QueryPoolRequestAmino;
                fromAminoMsg(object: _142.QueryPoolRequestAminoMsg): _142.QueryPoolRequest;
                toAminoMsg(message: _142.QueryPoolRequest): _142.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _142.QueryPoolRequestProtoMsg): _142.QueryPoolRequest;
                toProto(message: _142.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _142.QueryPoolRequest): _142.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _142.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryPoolResponse;
                fromPartial(object: Partial<_142.QueryPoolResponse>): _142.QueryPoolResponse;
                fromAmino(object: _142.QueryPoolResponseAmino): _142.QueryPoolResponse;
                toAmino(message: _142.QueryPoolResponse): _142.QueryPoolResponseAmino;
                fromAminoMsg(object: _142.QueryPoolResponseAminoMsg): _142.QueryPoolResponse;
                toAminoMsg(message: _142.QueryPoolResponse): _142.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _142.QueryPoolResponseProtoMsg): _142.QueryPoolResponse;
                toProto(message: _142.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _142.QueryPoolResponse): _142.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _142.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _142.QueryParamsRequest;
                fromPartial(_: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
                fromAmino(_: _142.QueryParamsRequestAmino): _142.QueryParamsRequest;
                toAmino(_: _142.QueryParamsRequest): _142.QueryParamsRequestAmino;
                fromAminoMsg(object: _142.QueryParamsRequestAminoMsg): _142.QueryParamsRequest;
                toAminoMsg(message: _142.QueryParamsRequest): _142.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _142.QueryParamsRequestProtoMsg): _142.QueryParamsRequest;
                toProto(message: _142.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _142.QueryParamsRequest): _142.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _142.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _142.QueryParamsResponse;
                fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
                fromAmino(object: _142.QueryParamsResponseAmino): _142.QueryParamsResponse;
                toAmino(message: _142.QueryParamsResponse): _142.QueryParamsResponseAmino;
                fromAminoMsg(object: _142.QueryParamsResponseAminoMsg): _142.QueryParamsResponse;
                toAminoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _142.QueryParamsResponseProtoMsg): _142.QueryParamsResponse;
                toProto(message: _142.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseProtoMsg;
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
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _141.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _141.LastValidatorPower;
                fromPartial(object: Partial<_141.LastValidatorPower>): _141.LastValidatorPower;
                fromAmino(object: _141.LastValidatorPowerAmino): _141.LastValidatorPower;
                toAmino(message: _141.LastValidatorPower): _141.LastValidatorPowerAmino;
                fromAminoMsg(object: _141.LastValidatorPowerAminoMsg): _141.LastValidatorPower;
                toAminoMsg(message: _141.LastValidatorPower): _141.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _141.LastValidatorPowerProtoMsg): _141.LastValidatorPower;
                toProto(message: _141.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _141.LastValidatorPower): _141.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _140.AuthorizationType;
            authorizationTypeToJSON(object: _140.AuthorizationType): string;
            AuthorizationType: typeof _140.AuthorizationType;
            AuthorizationTypeSDKType: typeof _140.AuthorizationType;
            AuthorizationTypeAmino: typeof _140.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _140.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.StakeAuthorization;
                fromPartial(object: Partial<_140.StakeAuthorization>): _140.StakeAuthorization;
                fromAmino(object: _140.StakeAuthorizationAmino): _140.StakeAuthorization;
                toAmino(message: _140.StakeAuthorization): _140.StakeAuthorizationAmino;
                fromAminoMsg(object: _140.StakeAuthorizationAminoMsg): _140.StakeAuthorization;
                toAminoMsg(message: _140.StakeAuthorization): _140.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _140.StakeAuthorizationProtoMsg): _140.StakeAuthorization;
                toProto(message: _140.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _140.StakeAuthorization): _140.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _140.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _140.StakeAuthorization_Validators;
                fromPartial(object: Partial<_140.StakeAuthorization_Validators>): _140.StakeAuthorization_Validators;
                fromAmino(object: _140.StakeAuthorization_ValidatorsAmino): _140.StakeAuthorization_Validators;
                toAmino(message: _140.StakeAuthorization_Validators): _140.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _140.StakeAuthorization_ValidatorsAminoMsg): _140.StakeAuthorization_Validators;
                toAminoMsg(message: _140.StakeAuthorization_Validators): _140.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _140.StakeAuthorization_ValidatorsProtoMsg): _140.StakeAuthorization_Validators;
                toProto(message: _140.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _140.StakeAuthorization_Validators): _140.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _145.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _145.Config;
                    fromPartial(object: Partial<_145.Config>): _145.Config;
                    fromAmino(object: _145.ConfigAmino): _145.Config;
                    toAmino(message: _145.Config): _145.ConfigAmino;
                    fromAminoMsg(object: _145.ConfigAminoMsg): _145.Config;
                    toAminoMsg(message: _145.Config): _145.ConfigAminoMsg;
                    fromProtoMsg(message: _145.ConfigProtoMsg): _145.Config;
                    toProto(message: _145.Config): Uint8Array;
                    toProtoMsg(message: _145.Config): _145.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _146.SignMode;
                signModeToJSON(object: _146.SignMode): string;
                SignMode: typeof _146.SignMode;
                SignModeSDKType: typeof _146.SignMode;
                SignModeAmino: typeof _146.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _146.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.SignatureDescriptors;
                    fromPartial(object: Partial<_146.SignatureDescriptors>): _146.SignatureDescriptors;
                    fromAmino(object: _146.SignatureDescriptorsAmino): _146.SignatureDescriptors;
                    toAmino(message: _146.SignatureDescriptors): _146.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _146.SignatureDescriptorsAminoMsg): _146.SignatureDescriptors;
                    toAminoMsg(message: _146.SignatureDescriptors): _146.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _146.SignatureDescriptorsProtoMsg): _146.SignatureDescriptors;
                    toProto(message: _146.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _146.SignatureDescriptors): _146.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _146.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.SignatureDescriptor;
                    fromPartial(object: Partial<_146.SignatureDescriptor>): _146.SignatureDescriptor;
                    fromAmino(object: _146.SignatureDescriptorAmino): _146.SignatureDescriptor;
                    toAmino(message: _146.SignatureDescriptor): _146.SignatureDescriptorAmino;
                    fromAminoMsg(object: _146.SignatureDescriptorAminoMsg): _146.SignatureDescriptor;
                    toAminoMsg(message: _146.SignatureDescriptor): _146.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _146.SignatureDescriptorProtoMsg): _146.SignatureDescriptor;
                    toProto(message: _146.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _146.SignatureDescriptor): _146.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _146.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_146.SignatureDescriptor_Data>): _146.SignatureDescriptor_Data;
                    fromAmino(object: _146.SignatureDescriptor_DataAmino): _146.SignatureDescriptor_Data;
                    toAmino(message: _146.SignatureDescriptor_Data): _146.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _146.SignatureDescriptor_DataAminoMsg): _146.SignatureDescriptor_Data;
                    toAminoMsg(message: _146.SignatureDescriptor_Data): _146.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _146.SignatureDescriptor_DataProtoMsg): _146.SignatureDescriptor_Data;
                    toProto(message: _146.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _146.SignatureDescriptor_Data): _146.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _146.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_146.SignatureDescriptor_Data_Single>): _146.SignatureDescriptor_Data_Single;
                    fromAmino(object: _146.SignatureDescriptor_Data_SingleAmino): _146.SignatureDescriptor_Data_Single;
                    toAmino(message: _146.SignatureDescriptor_Data_Single): _146.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _146.SignatureDescriptor_Data_SingleAminoMsg): _146.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _146.SignatureDescriptor_Data_Single): _146.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _146.SignatureDescriptor_Data_SingleProtoMsg): _146.SignatureDescriptor_Data_Single;
                    toProto(message: _146.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _146.SignatureDescriptor_Data_Single): _146.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _146.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _146.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_146.SignatureDescriptor_Data_Multi>): _146.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _146.SignatureDescriptor_Data_MultiAmino): _146.SignatureDescriptor_Data_Multi;
                    toAmino(message: _146.SignatureDescriptor_Data_Multi): _146.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _146.SignatureDescriptor_Data_MultiAminoMsg): _146.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _146.SignatureDescriptor_Data_Multi): _146.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _146.SignatureDescriptor_Data_MultiProtoMsg): _146.SignatureDescriptor_Data_Multi;
                    toProto(message: _146.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _146.SignatureDescriptor_Data_Multi): _146.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _295.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _147.SimulateRequest): Promise<_147.SimulateResponse>;
                getTx(request: _147.GetTxRequest): Promise<_147.GetTxResponse>;
                broadcastTx(request: _147.BroadcastTxRequest): Promise<_147.BroadcastTxResponse>;
                getTxsEvent(request: _147.GetTxsEventRequest): Promise<_147.GetTxsEventResponse>;
                getBlockWithTxs(request: _147.GetBlockWithTxsRequest): Promise<_147.GetBlockWithTxsResponse>;
                txDecode(request: _147.TxDecodeRequest): Promise<_147.TxDecodeResponse>;
                txEncode(request: _147.TxEncodeRequest): Promise<_147.TxEncodeResponse>;
                txEncodeAmino(request: _147.TxEncodeAminoRequest): Promise<_147.TxEncodeAminoResponse>;
                txDecodeAmino(request: _147.TxDecodeAminoRequest): Promise<_147.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _273.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _148.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Tx;
                fromPartial(object: Partial<_148.Tx>): _148.Tx;
                fromAmino(object: _148.TxAmino): _148.Tx;
                toAmino(message: _148.Tx): _148.TxAmino;
                fromAminoMsg(object: _148.TxAminoMsg): _148.Tx;
                toAminoMsg(message: _148.Tx): _148.TxAminoMsg;
                fromProtoMsg(message: _148.TxProtoMsg): _148.Tx;
                toProto(message: _148.Tx): Uint8Array;
                toProtoMsg(message: _148.Tx): _148.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _148.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.TxRaw;
                fromPartial(object: Partial<_148.TxRaw>): _148.TxRaw;
                fromAmino(object: _148.TxRawAmino): _148.TxRaw;
                toAmino(message: _148.TxRaw): _148.TxRawAmino;
                fromAminoMsg(object: _148.TxRawAminoMsg): _148.TxRaw;
                toAminoMsg(message: _148.TxRaw): _148.TxRawAminoMsg;
                fromProtoMsg(message: _148.TxRawProtoMsg): _148.TxRaw;
                toProto(message: _148.TxRaw): Uint8Array;
                toProtoMsg(message: _148.TxRaw): _148.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _148.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.SignDoc;
                fromPartial(object: Partial<_148.SignDoc>): _148.SignDoc;
                fromAmino(object: _148.SignDocAmino): _148.SignDoc;
                toAmino(message: _148.SignDoc): _148.SignDocAmino;
                fromAminoMsg(object: _148.SignDocAminoMsg): _148.SignDoc;
                toAminoMsg(message: _148.SignDoc): _148.SignDocAminoMsg;
                fromProtoMsg(message: _148.SignDocProtoMsg): _148.SignDoc;
                toProto(message: _148.SignDoc): Uint8Array;
                toProtoMsg(message: _148.SignDoc): _148.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _148.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.SignDocDirectAux;
                fromPartial(object: Partial<_148.SignDocDirectAux>): _148.SignDocDirectAux;
                fromAmino(object: _148.SignDocDirectAuxAmino): _148.SignDocDirectAux;
                toAmino(message: _148.SignDocDirectAux): _148.SignDocDirectAuxAmino;
                fromAminoMsg(object: _148.SignDocDirectAuxAminoMsg): _148.SignDocDirectAux;
                toAminoMsg(message: _148.SignDocDirectAux): _148.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _148.SignDocDirectAuxProtoMsg): _148.SignDocDirectAux;
                toProto(message: _148.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _148.SignDocDirectAux): _148.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _148.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.TxBody;
                fromPartial(object: Partial<_148.TxBody>): _148.TxBody;
                fromAmino(object: _148.TxBodyAmino): _148.TxBody;
                toAmino(message: _148.TxBody): _148.TxBodyAmino;
                fromAminoMsg(object: _148.TxBodyAminoMsg): _148.TxBody;
                toAminoMsg(message: _148.TxBody): _148.TxBodyAminoMsg;
                fromProtoMsg(message: _148.TxBodyProtoMsg): _148.TxBody;
                toProto(message: _148.TxBody): Uint8Array;
                toProtoMsg(message: _148.TxBody): _148.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _148.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.AuthInfo;
                fromPartial(object: Partial<_148.AuthInfo>): _148.AuthInfo;
                fromAmino(object: _148.AuthInfoAmino): _148.AuthInfo;
                toAmino(message: _148.AuthInfo): _148.AuthInfoAmino;
                fromAminoMsg(object: _148.AuthInfoAminoMsg): _148.AuthInfo;
                toAminoMsg(message: _148.AuthInfo): _148.AuthInfoAminoMsg;
                fromProtoMsg(message: _148.AuthInfoProtoMsg): _148.AuthInfo;
                toProto(message: _148.AuthInfo): Uint8Array;
                toProtoMsg(message: _148.AuthInfo): _148.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _148.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.SignerInfo;
                fromPartial(object: Partial<_148.SignerInfo>): _148.SignerInfo;
                fromAmino(object: _148.SignerInfoAmino): _148.SignerInfo;
                toAmino(message: _148.SignerInfo): _148.SignerInfoAmino;
                fromAminoMsg(object: _148.SignerInfoAminoMsg): _148.SignerInfo;
                toAminoMsg(message: _148.SignerInfo): _148.SignerInfoAminoMsg;
                fromProtoMsg(message: _148.SignerInfoProtoMsg): _148.SignerInfo;
                toProto(message: _148.SignerInfo): Uint8Array;
                toProtoMsg(message: _148.SignerInfo): _148.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _148.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.ModeInfo;
                fromPartial(object: Partial<_148.ModeInfo>): _148.ModeInfo;
                fromAmino(object: _148.ModeInfoAmino): _148.ModeInfo;
                toAmino(message: _148.ModeInfo): _148.ModeInfoAmino;
                fromAminoMsg(object: _148.ModeInfoAminoMsg): _148.ModeInfo;
                toAminoMsg(message: _148.ModeInfo): _148.ModeInfoAminoMsg;
                fromProtoMsg(message: _148.ModeInfoProtoMsg): _148.ModeInfo;
                toProto(message: _148.ModeInfo): Uint8Array;
                toProtoMsg(message: _148.ModeInfo): _148.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _148.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.ModeInfo_Single;
                fromPartial(object: Partial<_148.ModeInfo_Single>): _148.ModeInfo_Single;
                fromAmino(object: _148.ModeInfo_SingleAmino): _148.ModeInfo_Single;
                toAmino(message: _148.ModeInfo_Single): _148.ModeInfo_SingleAmino;
                fromAminoMsg(object: _148.ModeInfo_SingleAminoMsg): _148.ModeInfo_Single;
                toAminoMsg(message: _148.ModeInfo_Single): _148.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _148.ModeInfo_SingleProtoMsg): _148.ModeInfo_Single;
                toProto(message: _148.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _148.ModeInfo_Single): _148.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _148.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.ModeInfo_Multi;
                fromPartial(object: Partial<_148.ModeInfo_Multi>): _148.ModeInfo_Multi;
                fromAmino(object: _148.ModeInfo_MultiAmino): _148.ModeInfo_Multi;
                toAmino(message: _148.ModeInfo_Multi): _148.ModeInfo_MultiAmino;
                fromAminoMsg(object: _148.ModeInfo_MultiAminoMsg): _148.ModeInfo_Multi;
                toAminoMsg(message: _148.ModeInfo_Multi): _148.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _148.ModeInfo_MultiProtoMsg): _148.ModeInfo_Multi;
                toProto(message: _148.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _148.ModeInfo_Multi): _148.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _148.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Fee;
                fromPartial(object: Partial<_148.Fee>): _148.Fee;
                fromAmino(object: _148.FeeAmino): _148.Fee;
                toAmino(message: _148.Fee): _148.FeeAmino;
                fromAminoMsg(object: _148.FeeAminoMsg): _148.Fee;
                toAminoMsg(message: _148.Fee): _148.FeeAminoMsg;
                fromProtoMsg(message: _148.FeeProtoMsg): _148.Fee;
                toProto(message: _148.Fee): Uint8Array;
                toProtoMsg(message: _148.Fee): _148.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _148.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.Tip;
                fromPartial(object: Partial<_148.Tip>): _148.Tip;
                fromAmino(object: _148.TipAmino): _148.Tip;
                toAmino(message: _148.Tip): _148.TipAmino;
                fromAminoMsg(object: _148.TipAminoMsg): _148.Tip;
                toAminoMsg(message: _148.Tip): _148.TipAminoMsg;
                fromProtoMsg(message: _148.TipProtoMsg): _148.Tip;
                toProto(message: _148.Tip): Uint8Array;
                toProtoMsg(message: _148.Tip): _148.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _148.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.AuxSignerData;
                fromPartial(object: Partial<_148.AuxSignerData>): _148.AuxSignerData;
                fromAmino(object: _148.AuxSignerDataAmino): _148.AuxSignerData;
                toAmino(message: _148.AuxSignerData): _148.AuxSignerDataAmino;
                fromAminoMsg(object: _148.AuxSignerDataAminoMsg): _148.AuxSignerData;
                toAminoMsg(message: _148.AuxSignerData): _148.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _148.AuxSignerDataProtoMsg): _148.AuxSignerData;
                toProto(message: _148.AuxSignerData): Uint8Array;
                toProtoMsg(message: _148.AuxSignerData): _148.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _147.OrderBy;
            orderByToJSON(object: _147.OrderBy): string;
            broadcastModeFromJSON(object: any): _147.BroadcastMode;
            broadcastModeToJSON(object: _147.BroadcastMode): string;
            OrderBy: typeof _147.OrderBy;
            OrderBySDKType: typeof _147.OrderBy;
            OrderByAmino: typeof _147.OrderBy;
            BroadcastMode: typeof _147.BroadcastMode;
            BroadcastModeSDKType: typeof _147.BroadcastMode;
            BroadcastModeAmino: typeof _147.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _147.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GetTxsEventRequest;
                fromPartial(object: Partial<_147.GetTxsEventRequest>): _147.GetTxsEventRequest;
                fromAmino(object: _147.GetTxsEventRequestAmino): _147.GetTxsEventRequest;
                toAmino(message: _147.GetTxsEventRequest): _147.GetTxsEventRequestAmino;
                fromAminoMsg(object: _147.GetTxsEventRequestAminoMsg): _147.GetTxsEventRequest;
                toAminoMsg(message: _147.GetTxsEventRequest): _147.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _147.GetTxsEventRequestProtoMsg): _147.GetTxsEventRequest;
                toProto(message: _147.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _147.GetTxsEventRequest): _147.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _147.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GetTxsEventResponse;
                fromPartial(object: Partial<_147.GetTxsEventResponse>): _147.GetTxsEventResponse;
                fromAmino(object: _147.GetTxsEventResponseAmino): _147.GetTxsEventResponse;
                toAmino(message: _147.GetTxsEventResponse): _147.GetTxsEventResponseAmino;
                fromAminoMsg(object: _147.GetTxsEventResponseAminoMsg): _147.GetTxsEventResponse;
                toAminoMsg(message: _147.GetTxsEventResponse): _147.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _147.GetTxsEventResponseProtoMsg): _147.GetTxsEventResponse;
                toProto(message: _147.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _147.GetTxsEventResponse): _147.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _147.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.BroadcastTxRequest;
                fromPartial(object: Partial<_147.BroadcastTxRequest>): _147.BroadcastTxRequest;
                fromAmino(object: _147.BroadcastTxRequestAmino): _147.BroadcastTxRequest;
                toAmino(message: _147.BroadcastTxRequest): _147.BroadcastTxRequestAmino;
                fromAminoMsg(object: _147.BroadcastTxRequestAminoMsg): _147.BroadcastTxRequest;
                toAminoMsg(message: _147.BroadcastTxRequest): _147.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _147.BroadcastTxRequestProtoMsg): _147.BroadcastTxRequest;
                toProto(message: _147.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _147.BroadcastTxRequest): _147.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _147.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.BroadcastTxResponse;
                fromPartial(object: Partial<_147.BroadcastTxResponse>): _147.BroadcastTxResponse;
                fromAmino(object: _147.BroadcastTxResponseAmino): _147.BroadcastTxResponse;
                toAmino(message: _147.BroadcastTxResponse): _147.BroadcastTxResponseAmino;
                fromAminoMsg(object: _147.BroadcastTxResponseAminoMsg): _147.BroadcastTxResponse;
                toAminoMsg(message: _147.BroadcastTxResponse): _147.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _147.BroadcastTxResponseProtoMsg): _147.BroadcastTxResponse;
                toProto(message: _147.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _147.BroadcastTxResponse): _147.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _147.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.SimulateRequest;
                fromPartial(object: Partial<_147.SimulateRequest>): _147.SimulateRequest;
                fromAmino(object: _147.SimulateRequestAmino): _147.SimulateRequest;
                toAmino(message: _147.SimulateRequest): _147.SimulateRequestAmino;
                fromAminoMsg(object: _147.SimulateRequestAminoMsg): _147.SimulateRequest;
                toAminoMsg(message: _147.SimulateRequest): _147.SimulateRequestAminoMsg;
                fromProtoMsg(message: _147.SimulateRequestProtoMsg): _147.SimulateRequest;
                toProto(message: _147.SimulateRequest): Uint8Array;
                toProtoMsg(message: _147.SimulateRequest): _147.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _147.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.SimulateResponse;
                fromPartial(object: Partial<_147.SimulateResponse>): _147.SimulateResponse;
                fromAmino(object: _147.SimulateResponseAmino): _147.SimulateResponse;
                toAmino(message: _147.SimulateResponse): _147.SimulateResponseAmino;
                fromAminoMsg(object: _147.SimulateResponseAminoMsg): _147.SimulateResponse;
                toAminoMsg(message: _147.SimulateResponse): _147.SimulateResponseAminoMsg;
                fromProtoMsg(message: _147.SimulateResponseProtoMsg): _147.SimulateResponse;
                toProto(message: _147.SimulateResponse): Uint8Array;
                toProtoMsg(message: _147.SimulateResponse): _147.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _147.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GetTxRequest;
                fromPartial(object: Partial<_147.GetTxRequest>): _147.GetTxRequest;
                fromAmino(object: _147.GetTxRequestAmino): _147.GetTxRequest;
                toAmino(message: _147.GetTxRequest): _147.GetTxRequestAmino;
                fromAminoMsg(object: _147.GetTxRequestAminoMsg): _147.GetTxRequest;
                toAminoMsg(message: _147.GetTxRequest): _147.GetTxRequestAminoMsg;
                fromProtoMsg(message: _147.GetTxRequestProtoMsg): _147.GetTxRequest;
                toProto(message: _147.GetTxRequest): Uint8Array;
                toProtoMsg(message: _147.GetTxRequest): _147.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _147.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GetTxResponse;
                fromPartial(object: Partial<_147.GetTxResponse>): _147.GetTxResponse;
                fromAmino(object: _147.GetTxResponseAmino): _147.GetTxResponse;
                toAmino(message: _147.GetTxResponse): _147.GetTxResponseAmino;
                fromAminoMsg(object: _147.GetTxResponseAminoMsg): _147.GetTxResponse;
                toAminoMsg(message: _147.GetTxResponse): _147.GetTxResponseAminoMsg;
                fromProtoMsg(message: _147.GetTxResponseProtoMsg): _147.GetTxResponse;
                toProto(message: _147.GetTxResponse): Uint8Array;
                toProtoMsg(message: _147.GetTxResponse): _147.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _147.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_147.GetBlockWithTxsRequest>): _147.GetBlockWithTxsRequest;
                fromAmino(object: _147.GetBlockWithTxsRequestAmino): _147.GetBlockWithTxsRequest;
                toAmino(message: _147.GetBlockWithTxsRequest): _147.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _147.GetBlockWithTxsRequestAminoMsg): _147.GetBlockWithTxsRequest;
                toAminoMsg(message: _147.GetBlockWithTxsRequest): _147.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _147.GetBlockWithTxsRequestProtoMsg): _147.GetBlockWithTxsRequest;
                toProto(message: _147.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _147.GetBlockWithTxsRequest): _147.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _147.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_147.GetBlockWithTxsResponse>): _147.GetBlockWithTxsResponse;
                fromAmino(object: _147.GetBlockWithTxsResponseAmino): _147.GetBlockWithTxsResponse;
                toAmino(message: _147.GetBlockWithTxsResponse): _147.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _147.GetBlockWithTxsResponseAminoMsg): _147.GetBlockWithTxsResponse;
                toAminoMsg(message: _147.GetBlockWithTxsResponse): _147.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _147.GetBlockWithTxsResponseProtoMsg): _147.GetBlockWithTxsResponse;
                toProto(message: _147.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _147.GetBlockWithTxsResponse): _147.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _147.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxDecodeRequest;
                fromPartial(object: Partial<_147.TxDecodeRequest>): _147.TxDecodeRequest;
                fromAmino(object: _147.TxDecodeRequestAmino): _147.TxDecodeRequest;
                toAmino(message: _147.TxDecodeRequest): _147.TxDecodeRequestAmino;
                fromAminoMsg(object: _147.TxDecodeRequestAminoMsg): _147.TxDecodeRequest;
                toAminoMsg(message: _147.TxDecodeRequest): _147.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _147.TxDecodeRequestProtoMsg): _147.TxDecodeRequest;
                toProto(message: _147.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _147.TxDecodeRequest): _147.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _147.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxDecodeResponse;
                fromPartial(object: Partial<_147.TxDecodeResponse>): _147.TxDecodeResponse;
                fromAmino(object: _147.TxDecodeResponseAmino): _147.TxDecodeResponse;
                toAmino(message: _147.TxDecodeResponse): _147.TxDecodeResponseAmino;
                fromAminoMsg(object: _147.TxDecodeResponseAminoMsg): _147.TxDecodeResponse;
                toAminoMsg(message: _147.TxDecodeResponse): _147.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _147.TxDecodeResponseProtoMsg): _147.TxDecodeResponse;
                toProto(message: _147.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _147.TxDecodeResponse): _147.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _147.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxEncodeRequest;
                fromPartial(object: Partial<_147.TxEncodeRequest>): _147.TxEncodeRequest;
                fromAmino(object: _147.TxEncodeRequestAmino): _147.TxEncodeRequest;
                toAmino(message: _147.TxEncodeRequest): _147.TxEncodeRequestAmino;
                fromAminoMsg(object: _147.TxEncodeRequestAminoMsg): _147.TxEncodeRequest;
                toAminoMsg(message: _147.TxEncodeRequest): _147.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _147.TxEncodeRequestProtoMsg): _147.TxEncodeRequest;
                toProto(message: _147.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _147.TxEncodeRequest): _147.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _147.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxEncodeResponse;
                fromPartial(object: Partial<_147.TxEncodeResponse>): _147.TxEncodeResponse;
                fromAmino(object: _147.TxEncodeResponseAmino): _147.TxEncodeResponse;
                toAmino(message: _147.TxEncodeResponse): _147.TxEncodeResponseAmino;
                fromAminoMsg(object: _147.TxEncodeResponseAminoMsg): _147.TxEncodeResponse;
                toAminoMsg(message: _147.TxEncodeResponse): _147.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _147.TxEncodeResponseProtoMsg): _147.TxEncodeResponse;
                toProto(message: _147.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _147.TxEncodeResponse): _147.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _147.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxEncodeAminoRequest;
                fromPartial(object: Partial<_147.TxEncodeAminoRequest>): _147.TxEncodeAminoRequest;
                fromAmino(object: _147.TxEncodeAminoRequestAmino): _147.TxEncodeAminoRequest;
                toAmino(message: _147.TxEncodeAminoRequest): _147.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _147.TxEncodeAminoRequestAminoMsg): _147.TxEncodeAminoRequest;
                toAminoMsg(message: _147.TxEncodeAminoRequest): _147.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _147.TxEncodeAminoRequestProtoMsg): _147.TxEncodeAminoRequest;
                toProto(message: _147.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _147.TxEncodeAminoRequest): _147.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _147.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxEncodeAminoResponse;
                fromPartial(object: Partial<_147.TxEncodeAminoResponse>): _147.TxEncodeAminoResponse;
                fromAmino(object: _147.TxEncodeAminoResponseAmino): _147.TxEncodeAminoResponse;
                toAmino(message: _147.TxEncodeAminoResponse): _147.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _147.TxEncodeAminoResponseAminoMsg): _147.TxEncodeAminoResponse;
                toAminoMsg(message: _147.TxEncodeAminoResponse): _147.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _147.TxEncodeAminoResponseProtoMsg): _147.TxEncodeAminoResponse;
                toProto(message: _147.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _147.TxEncodeAminoResponse): _147.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _147.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxDecodeAminoRequest;
                fromPartial(object: Partial<_147.TxDecodeAminoRequest>): _147.TxDecodeAminoRequest;
                fromAmino(object: _147.TxDecodeAminoRequestAmino): _147.TxDecodeAminoRequest;
                toAmino(message: _147.TxDecodeAminoRequest): _147.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _147.TxDecodeAminoRequestAminoMsg): _147.TxDecodeAminoRequest;
                toAminoMsg(message: _147.TxDecodeAminoRequest): _147.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _147.TxDecodeAminoRequestProtoMsg): _147.TxDecodeAminoRequest;
                toProto(message: _147.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _147.TxDecodeAminoRequest): _147.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _147.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.TxDecodeAminoResponse;
                fromPartial(object: Partial<_147.TxDecodeAminoResponse>): _147.TxDecodeAminoResponse;
                fromAmino(object: _147.TxDecodeAminoResponseAmino): _147.TxDecodeAminoResponse;
                toAmino(message: _147.TxDecodeAminoResponse): _147.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _147.TxDecodeAminoResponseAminoMsg): _147.TxDecodeAminoResponse;
                toAminoMsg(message: _147.TxDecodeAminoResponse): _147.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _147.TxDecodeAminoResponseProtoMsg): _147.TxDecodeAminoResponse;
                toProto(message: _147.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _147.TxDecodeAminoResponse): _147.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _149.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _149.Module;
                    fromPartial(object: Partial<_149.Module>): _149.Module;
                    fromAmino(object: _149.ModuleAmino): _149.Module;
                    toAmino(message: _149.Module): _149.ModuleAmino;
                    fromAminoMsg(object: _149.ModuleAminoMsg): _149.Module;
                    toAminoMsg(message: _149.Module): _149.ModuleAminoMsg;
                    fromProtoMsg(message: _149.ModuleProtoMsg): _149.Module;
                    toProto(message: _149.Module): Uint8Array;
                    toProtoMsg(message: _149.Module): _149.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _312.MsgClientImpl;
            QueryClientImpl: typeof _296.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _150.QueryCurrentPlanRequest): Promise<_150.QueryCurrentPlanResponse>;
                appliedPlan(request: _150.QueryAppliedPlanRequest): Promise<_150.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _150.QueryUpgradedConsensusStateRequest): Promise<_150.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _150.QueryModuleVersionsRequest): Promise<_150.QueryModuleVersionsResponse>;
                authority(request?: _150.QueryAuthorityRequest): Promise<_150.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _274.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _151.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _151.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _151.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _151.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _151.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _151.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _151.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _151.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _151.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _151.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _151.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _151.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _151.MsgSoftwareUpgrade) => _151.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _151.MsgSoftwareUpgradeAmino) => _151.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _151.MsgCancelUpgrade) => _151.MsgCancelUpgradeAmino;
                    fromAmino: (object: _151.MsgCancelUpgradeAmino) => _151.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _152.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.Plan;
                fromPartial(object: Partial<_152.Plan>): _152.Plan;
                fromAmino(object: _152.PlanAmino): _152.Plan;
                toAmino(message: _152.Plan): _152.PlanAmino;
                fromAminoMsg(object: _152.PlanAminoMsg): _152.Plan;
                toAminoMsg(message: _152.Plan): _152.PlanAminoMsg;
                fromProtoMsg(message: _152.PlanProtoMsg): _152.Plan;
                toProto(message: _152.Plan): Uint8Array;
                toProtoMsg(message: _152.Plan): _152.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _152.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_152.SoftwareUpgradeProposal>): _152.SoftwareUpgradeProposal;
                fromAmino(object: _152.SoftwareUpgradeProposalAmino): _152.SoftwareUpgradeProposal;
                toAmino(message: _152.SoftwareUpgradeProposal): _152.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _152.SoftwareUpgradeProposalAminoMsg): _152.SoftwareUpgradeProposal;
                toAminoMsg(message: _152.SoftwareUpgradeProposal): _152.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _152.SoftwareUpgradeProposalProtoMsg): _152.SoftwareUpgradeProposal;
                toProto(message: _152.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _152.SoftwareUpgradeProposal): _152.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _152.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_152.CancelSoftwareUpgradeProposal>): _152.CancelSoftwareUpgradeProposal;
                fromAmino(object: _152.CancelSoftwareUpgradeProposalAmino): _152.CancelSoftwareUpgradeProposal;
                toAmino(message: _152.CancelSoftwareUpgradeProposal): _152.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _152.CancelSoftwareUpgradeProposalAminoMsg): _152.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _152.CancelSoftwareUpgradeProposal): _152.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _152.CancelSoftwareUpgradeProposalProtoMsg): _152.CancelSoftwareUpgradeProposal;
                toProto(message: _152.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _152.CancelSoftwareUpgradeProposal): _152.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _152.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.ModuleVersion;
                fromPartial(object: Partial<_152.ModuleVersion>): _152.ModuleVersion;
                fromAmino(object: _152.ModuleVersionAmino): _152.ModuleVersion;
                toAmino(message: _152.ModuleVersion): _152.ModuleVersionAmino;
                fromAminoMsg(object: _152.ModuleVersionAminoMsg): _152.ModuleVersion;
                toAminoMsg(message: _152.ModuleVersion): _152.ModuleVersionAminoMsg;
                fromProtoMsg(message: _152.ModuleVersionProtoMsg): _152.ModuleVersion;
                toProto(message: _152.ModuleVersion): Uint8Array;
                toProtoMsg(message: _152.ModuleVersion): _152.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _151.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_151.MsgSoftwareUpgrade>): _151.MsgSoftwareUpgrade;
                fromAmino(object: _151.MsgSoftwareUpgradeAmino): _151.MsgSoftwareUpgrade;
                toAmino(message: _151.MsgSoftwareUpgrade): _151.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _151.MsgSoftwareUpgradeAminoMsg): _151.MsgSoftwareUpgrade;
                toAminoMsg(message: _151.MsgSoftwareUpgrade): _151.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _151.MsgSoftwareUpgradeProtoMsg): _151.MsgSoftwareUpgrade;
                toProto(message: _151.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _151.MsgSoftwareUpgrade): _151.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _151.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_151.MsgSoftwareUpgradeResponse>): _151.MsgSoftwareUpgradeResponse;
                fromAmino(_: _151.MsgSoftwareUpgradeResponseAmino): _151.MsgSoftwareUpgradeResponse;
                toAmino(_: _151.MsgSoftwareUpgradeResponse): _151.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _151.MsgSoftwareUpgradeResponseAminoMsg): _151.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _151.MsgSoftwareUpgradeResponse): _151.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _151.MsgSoftwareUpgradeResponseProtoMsg): _151.MsgSoftwareUpgradeResponse;
                toProto(message: _151.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _151.MsgSoftwareUpgradeResponse): _151.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _151.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MsgCancelUpgrade;
                fromPartial(object: Partial<_151.MsgCancelUpgrade>): _151.MsgCancelUpgrade;
                fromAmino(object: _151.MsgCancelUpgradeAmino): _151.MsgCancelUpgrade;
                toAmino(message: _151.MsgCancelUpgrade): _151.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _151.MsgCancelUpgradeAminoMsg): _151.MsgCancelUpgrade;
                toAminoMsg(message: _151.MsgCancelUpgrade): _151.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _151.MsgCancelUpgradeProtoMsg): _151.MsgCancelUpgrade;
                toProto(message: _151.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _151.MsgCancelUpgrade): _151.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _151.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_151.MsgCancelUpgradeResponse>): _151.MsgCancelUpgradeResponse;
                fromAmino(_: _151.MsgCancelUpgradeResponseAmino): _151.MsgCancelUpgradeResponse;
                toAmino(_: _151.MsgCancelUpgradeResponse): _151.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _151.MsgCancelUpgradeResponseAminoMsg): _151.MsgCancelUpgradeResponse;
                toAminoMsg(message: _151.MsgCancelUpgradeResponse): _151.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _151.MsgCancelUpgradeResponseProtoMsg): _151.MsgCancelUpgradeResponse;
                toProto(message: _151.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _151.MsgCancelUpgradeResponse): _151.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _150.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _150.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_150.QueryCurrentPlanRequest>): _150.QueryCurrentPlanRequest;
                fromAmino(_: _150.QueryCurrentPlanRequestAmino): _150.QueryCurrentPlanRequest;
                toAmino(_: _150.QueryCurrentPlanRequest): _150.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _150.QueryCurrentPlanRequestAminoMsg): _150.QueryCurrentPlanRequest;
                toAminoMsg(message: _150.QueryCurrentPlanRequest): _150.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _150.QueryCurrentPlanRequestProtoMsg): _150.QueryCurrentPlanRequest;
                toProto(message: _150.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _150.QueryCurrentPlanRequest): _150.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _150.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_150.QueryCurrentPlanResponse>): _150.QueryCurrentPlanResponse;
                fromAmino(object: _150.QueryCurrentPlanResponseAmino): _150.QueryCurrentPlanResponse;
                toAmino(message: _150.QueryCurrentPlanResponse): _150.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _150.QueryCurrentPlanResponseAminoMsg): _150.QueryCurrentPlanResponse;
                toAminoMsg(message: _150.QueryCurrentPlanResponse): _150.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _150.QueryCurrentPlanResponseProtoMsg): _150.QueryCurrentPlanResponse;
                toProto(message: _150.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _150.QueryCurrentPlanResponse): _150.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _150.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_150.QueryAppliedPlanRequest>): _150.QueryAppliedPlanRequest;
                fromAmino(object: _150.QueryAppliedPlanRequestAmino): _150.QueryAppliedPlanRequest;
                toAmino(message: _150.QueryAppliedPlanRequest): _150.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _150.QueryAppliedPlanRequestAminoMsg): _150.QueryAppliedPlanRequest;
                toAminoMsg(message: _150.QueryAppliedPlanRequest): _150.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _150.QueryAppliedPlanRequestProtoMsg): _150.QueryAppliedPlanRequest;
                toProto(message: _150.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _150.QueryAppliedPlanRequest): _150.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _150.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_150.QueryAppliedPlanResponse>): _150.QueryAppliedPlanResponse;
                fromAmino(object: _150.QueryAppliedPlanResponseAmino): _150.QueryAppliedPlanResponse;
                toAmino(message: _150.QueryAppliedPlanResponse): _150.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _150.QueryAppliedPlanResponseAminoMsg): _150.QueryAppliedPlanResponse;
                toAminoMsg(message: _150.QueryAppliedPlanResponse): _150.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _150.QueryAppliedPlanResponseProtoMsg): _150.QueryAppliedPlanResponse;
                toProto(message: _150.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _150.QueryAppliedPlanResponse): _150.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _150.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_150.QueryUpgradedConsensusStateRequest>): _150.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _150.QueryUpgradedConsensusStateRequestAmino): _150.QueryUpgradedConsensusStateRequest;
                toAmino(message: _150.QueryUpgradedConsensusStateRequest): _150.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _150.QueryUpgradedConsensusStateRequestAminoMsg): _150.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _150.QueryUpgradedConsensusStateRequest): _150.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _150.QueryUpgradedConsensusStateRequestProtoMsg): _150.QueryUpgradedConsensusStateRequest;
                toProto(message: _150.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _150.QueryUpgradedConsensusStateRequest): _150.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _150.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_150.QueryUpgradedConsensusStateResponse>): _150.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _150.QueryUpgradedConsensusStateResponseAmino): _150.QueryUpgradedConsensusStateResponse;
                toAmino(message: _150.QueryUpgradedConsensusStateResponse): _150.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _150.QueryUpgradedConsensusStateResponseAminoMsg): _150.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _150.QueryUpgradedConsensusStateResponse): _150.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _150.QueryUpgradedConsensusStateResponseProtoMsg): _150.QueryUpgradedConsensusStateResponse;
                toProto(message: _150.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _150.QueryUpgradedConsensusStateResponse): _150.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _150.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_150.QueryModuleVersionsRequest>): _150.QueryModuleVersionsRequest;
                fromAmino(object: _150.QueryModuleVersionsRequestAmino): _150.QueryModuleVersionsRequest;
                toAmino(message: _150.QueryModuleVersionsRequest): _150.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _150.QueryModuleVersionsRequestAminoMsg): _150.QueryModuleVersionsRequest;
                toAminoMsg(message: _150.QueryModuleVersionsRequest): _150.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _150.QueryModuleVersionsRequestProtoMsg): _150.QueryModuleVersionsRequest;
                toProto(message: _150.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _150.QueryModuleVersionsRequest): _150.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _150.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_150.QueryModuleVersionsResponse>): _150.QueryModuleVersionsResponse;
                fromAmino(object: _150.QueryModuleVersionsResponseAmino): _150.QueryModuleVersionsResponse;
                toAmino(message: _150.QueryModuleVersionsResponse): _150.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _150.QueryModuleVersionsResponseAminoMsg): _150.QueryModuleVersionsResponse;
                toAminoMsg(message: _150.QueryModuleVersionsResponse): _150.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _150.QueryModuleVersionsResponseProtoMsg): _150.QueryModuleVersionsResponse;
                toProto(message: _150.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _150.QueryModuleVersionsResponse): _150.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _150.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _150.QueryAuthorityRequest;
                fromPartial(_: Partial<_150.QueryAuthorityRequest>): _150.QueryAuthorityRequest;
                fromAmino(_: _150.QueryAuthorityRequestAmino): _150.QueryAuthorityRequest;
                toAmino(_: _150.QueryAuthorityRequest): _150.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _150.QueryAuthorityRequestAminoMsg): _150.QueryAuthorityRequest;
                toAminoMsg(message: _150.QueryAuthorityRequest): _150.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _150.QueryAuthorityRequestProtoMsg): _150.QueryAuthorityRequest;
                toProto(message: _150.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _150.QueryAuthorityRequest): _150.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _150.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.QueryAuthorityResponse;
                fromPartial(object: Partial<_150.QueryAuthorityResponse>): _150.QueryAuthorityResponse;
                fromAmino(object: _150.QueryAuthorityResponseAmino): _150.QueryAuthorityResponse;
                toAmino(message: _150.QueryAuthorityResponse): _150.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _150.QueryAuthorityResponseAminoMsg): _150.QueryAuthorityResponse;
                toAminoMsg(message: _150.QueryAuthorityResponse): _150.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _150.QueryAuthorityResponseProtoMsg): _150.QueryAuthorityResponse;
                toProto(message: _150.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _150.QueryAuthorityResponse): _150.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _153.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _153.Module;
                    fromPartial(_: Partial<_153.Module>): _153.Module;
                    fromAmino(_: _153.ModuleAmino): _153.Module;
                    toAmino(_: _153.Module): _153.ModuleAmino;
                    fromAminoMsg(object: _153.ModuleAminoMsg): _153.Module;
                    toAminoMsg(message: _153.Module): _153.ModuleAminoMsg;
                    fromProtoMsg(message: _153.ModuleProtoMsg): _153.Module;
                    toProto(message: _153.Module): Uint8Array;
                    toProtoMsg(message: _153.Module): _153.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _154.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _154.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _154.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _154.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _154.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _154.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _154.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _154.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _154.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _154.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _154.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _154.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _154.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _154.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _154.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _154.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _154.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _154.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _154.MsgCreateVestingAccount) => _154.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _154.MsgCreateVestingAccountAmino) => _154.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _154.MsgCreatePermanentLockedAccount) => _154.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _154.MsgCreatePermanentLockedAccountAmino) => _154.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _154.MsgCreatePeriodicVestingAccount) => _154.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _154.MsgCreatePeriodicVestingAccountAmino) => _154.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _155.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.BaseVestingAccount;
                fromPartial(object: Partial<_155.BaseVestingAccount>): _155.BaseVestingAccount;
                fromAmino(object: _155.BaseVestingAccountAmino): _155.BaseVestingAccount;
                toAmino(message: _155.BaseVestingAccount): _155.BaseVestingAccountAmino;
                fromAminoMsg(object: _155.BaseVestingAccountAminoMsg): _155.BaseVestingAccount;
                toAminoMsg(message: _155.BaseVestingAccount): _155.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _155.BaseVestingAccountProtoMsg): _155.BaseVestingAccount;
                toProto(message: _155.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _155.BaseVestingAccount): _155.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _155.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.ContinuousVestingAccount;
                fromPartial(object: Partial<_155.ContinuousVestingAccount>): _155.ContinuousVestingAccount;
                fromAmino(object: _155.ContinuousVestingAccountAmino): _155.ContinuousVestingAccount;
                toAmino(message: _155.ContinuousVestingAccount): _155.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _155.ContinuousVestingAccountAminoMsg): _155.ContinuousVestingAccount;
                toAminoMsg(message: _155.ContinuousVestingAccount): _155.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _155.ContinuousVestingAccountProtoMsg): _155.ContinuousVestingAccount;
                toProto(message: _155.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _155.ContinuousVestingAccount): _155.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _155.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.DelayedVestingAccount;
                fromPartial(object: Partial<_155.DelayedVestingAccount>): _155.DelayedVestingAccount;
                fromAmino(object: _155.DelayedVestingAccountAmino): _155.DelayedVestingAccount;
                toAmino(message: _155.DelayedVestingAccount): _155.DelayedVestingAccountAmino;
                fromAminoMsg(object: _155.DelayedVestingAccountAminoMsg): _155.DelayedVestingAccount;
                toAminoMsg(message: _155.DelayedVestingAccount): _155.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _155.DelayedVestingAccountProtoMsg): _155.DelayedVestingAccount;
                toProto(message: _155.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _155.DelayedVestingAccount): _155.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _155.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.Period;
                fromPartial(object: Partial<_155.Period>): _155.Period;
                fromAmino(object: _155.PeriodAmino): _155.Period;
                toAmino(message: _155.Period): _155.PeriodAmino;
                fromAminoMsg(object: _155.PeriodAminoMsg): _155.Period;
                toAminoMsg(message: _155.Period): _155.PeriodAminoMsg;
                fromProtoMsg(message: _155.PeriodProtoMsg): _155.Period;
                toProto(message: _155.Period): Uint8Array;
                toProtoMsg(message: _155.Period): _155.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _155.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.PeriodicVestingAccount;
                fromPartial(object: Partial<_155.PeriodicVestingAccount>): _155.PeriodicVestingAccount;
                fromAmino(object: _155.PeriodicVestingAccountAmino): _155.PeriodicVestingAccount;
                toAmino(message: _155.PeriodicVestingAccount): _155.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _155.PeriodicVestingAccountAminoMsg): _155.PeriodicVestingAccount;
                toAminoMsg(message: _155.PeriodicVestingAccount): _155.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _155.PeriodicVestingAccountProtoMsg): _155.PeriodicVestingAccount;
                toProto(message: _155.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _155.PeriodicVestingAccount): _155.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _155.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.PermanentLockedAccount;
                fromPartial(object: Partial<_155.PermanentLockedAccount>): _155.PermanentLockedAccount;
                fromAmino(object: _155.PermanentLockedAccountAmino): _155.PermanentLockedAccount;
                toAmino(message: _155.PermanentLockedAccount): _155.PermanentLockedAccountAmino;
                fromAminoMsg(object: _155.PermanentLockedAccountAminoMsg): _155.PermanentLockedAccount;
                toAminoMsg(message: _155.PermanentLockedAccount): _155.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _155.PermanentLockedAccountProtoMsg): _155.PermanentLockedAccount;
                toProto(message: _155.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _155.PermanentLockedAccount): _155.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _154.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.MsgCreateVestingAccount;
                fromPartial(object: Partial<_154.MsgCreateVestingAccount>): _154.MsgCreateVestingAccount;
                fromAmino(object: _154.MsgCreateVestingAccountAmino): _154.MsgCreateVestingAccount;
                toAmino(message: _154.MsgCreateVestingAccount): _154.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _154.MsgCreateVestingAccountAminoMsg): _154.MsgCreateVestingAccount;
                toAminoMsg(message: _154.MsgCreateVestingAccount): _154.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _154.MsgCreateVestingAccountProtoMsg): _154.MsgCreateVestingAccount;
                toProto(message: _154.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _154.MsgCreateVestingAccount): _154.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _154.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _154.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_154.MsgCreateVestingAccountResponse>): _154.MsgCreateVestingAccountResponse;
                fromAmino(_: _154.MsgCreateVestingAccountResponseAmino): _154.MsgCreateVestingAccountResponse;
                toAmino(_: _154.MsgCreateVestingAccountResponse): _154.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _154.MsgCreateVestingAccountResponseAminoMsg): _154.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _154.MsgCreateVestingAccountResponse): _154.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _154.MsgCreateVestingAccountResponseProtoMsg): _154.MsgCreateVestingAccountResponse;
                toProto(message: _154.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _154.MsgCreateVestingAccountResponse): _154.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _154.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_154.MsgCreatePermanentLockedAccount>): _154.MsgCreatePermanentLockedAccount;
                fromAmino(object: _154.MsgCreatePermanentLockedAccountAmino): _154.MsgCreatePermanentLockedAccount;
                toAmino(message: _154.MsgCreatePermanentLockedAccount): _154.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _154.MsgCreatePermanentLockedAccountAminoMsg): _154.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _154.MsgCreatePermanentLockedAccount): _154.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _154.MsgCreatePermanentLockedAccountProtoMsg): _154.MsgCreatePermanentLockedAccount;
                toProto(message: _154.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _154.MsgCreatePermanentLockedAccount): _154.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _154.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _154.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_154.MsgCreatePermanentLockedAccountResponse>): _154.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _154.MsgCreatePermanentLockedAccountResponseAmino): _154.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _154.MsgCreatePermanentLockedAccountResponse): _154.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _154.MsgCreatePermanentLockedAccountResponseAminoMsg): _154.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _154.MsgCreatePermanentLockedAccountResponse): _154.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _154.MsgCreatePermanentLockedAccountResponseProtoMsg): _154.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _154.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _154.MsgCreatePermanentLockedAccountResponse): _154.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _154.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_154.MsgCreatePeriodicVestingAccount>): _154.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _154.MsgCreatePeriodicVestingAccountAmino): _154.MsgCreatePeriodicVestingAccount;
                toAmino(message: _154.MsgCreatePeriodicVestingAccount): _154.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _154.MsgCreatePeriodicVestingAccountAminoMsg): _154.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _154.MsgCreatePeriodicVestingAccount): _154.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _154.MsgCreatePeriodicVestingAccountProtoMsg): _154.MsgCreatePeriodicVestingAccount;
                toProto(message: _154.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _154.MsgCreatePeriodicVestingAccount): _154.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _154.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _154.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_154.MsgCreatePeriodicVestingAccountResponse>): _154.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _154.MsgCreatePeriodicVestingAccountResponseAmino): _154.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _154.MsgCreatePeriodicVestingAccountResponse): _154.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _154.MsgCreatePeriodicVestingAccountResponseAminoMsg): _154.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _154.MsgCreatePeriodicVestingAccountResponse): _154.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _154.MsgCreatePeriodicVestingAccountResponseProtoMsg): _154.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _154.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _154.MsgCreatePeriodicVestingAccountResponse): _154.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _297.MsgClientImpl;
                };
                authz: {
                    v1beta1: _298.MsgClientImpl;
                };
                bank: {
                    v1beta1: _299.MsgClientImpl;
                };
                consensus: {
                    v1: _300.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _301.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _302.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _303.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _304.MsgClientImpl;
                };
                gov: {
                    v1: _305.MsgClientImpl;
                    v1beta1: _306.MsgClientImpl;
                };
                group: {
                    v1: _307.MsgClientImpl;
                };
                mint: {
                    v1beta1: _308.MsgClientImpl;
                };
                nft: {
                    v1beta1: _309.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _310.MsgClientImpl;
                };
                staking: {
                    v1beta1: _311.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _312.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _313.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _34.QueryConfigRequest): Promise<_34.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _38.QueryAccountsRequest): Promise<_38.QueryAccountsResponse>;
                        account(request: _38.QueryAccountRequest): Promise<_38.QueryAccountResponse>;
                        accountAddressByID(request: _38.QueryAccountAddressByIDRequest): Promise<_38.QueryAccountAddressByIDResponse>;
                        params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                        moduleAccounts(request?: _38.QueryModuleAccountsRequest): Promise<_38.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _38.QueryModuleAccountByNameRequest): Promise<_38.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _38.Bech32PrefixRequest): Promise<_38.Bech32PrefixResponse>;
                        addressBytesToString(request: _38.AddressBytesToStringRequest): Promise<_38.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _38.AddressStringToBytesRequest): Promise<_38.AddressStringToBytesResponse>;
                        accountInfo(request: _38.QueryAccountInfoRequest): Promise<_38.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _44.QueryGrantsRequest): Promise<_44.QueryGrantsResponse>;
                        granterGrants(request: _44.QueryGranterGrantsRequest): Promise<_44.QueryGranterGrantsResponse>;
                        granteeGrants(request: _44.QueryGranteeGrantsRequest): Promise<_44.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _47.AppOptionsRequest): Promise<_47.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _52.QueryBalanceRequest): Promise<_52.QueryBalanceResponse>;
                        allBalances(request: _52.QueryAllBalancesRequest): Promise<_52.QueryAllBalancesResponse>;
                        spendableBalances(request: _52.QuerySpendableBalancesRequest): Promise<_52.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _52.QuerySpendableBalanceByDenomRequest): Promise<_52.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _52.QueryTotalSupplyRequest): Promise<_52.QueryTotalSupplyResponse>;
                        supplyOf(request: _52.QuerySupplyOfRequest): Promise<_52.QuerySupplyOfResponse>;
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        denomMetadata(request: _52.QueryDenomMetadataRequest): Promise<_52.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _52.QueryDenomsMetadataRequest): Promise<_52.QueryDenomsMetadataResponse>;
                        denomOwners(request: _52.QueryDenomOwnersRequest): Promise<_52.QueryDenomOwnersResponse>;
                        sendEnabled(request: _52.QuerySendEnabledRequest): Promise<_52.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _56.ConfigRequest): Promise<_56.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _63.GetNodeInfoRequest): Promise<_63.GetNodeInfoResponse>;
                            getSyncing(request?: _63.GetSyncingRequest): Promise<_63.GetSyncingResponse>;
                            getLatestBlock(request?: _63.GetLatestBlockRequest): Promise<_63.GetLatestBlockResponse>;
                            getBlockByHeight(request: _63.GetBlockByHeightRequest): Promise<_63.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _63.GetLatestValidatorSetRequest): Promise<_63.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _63.GetValidatorSetByHeightRequest): Promise<_63.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _63.ABCIQueryRequest): Promise<_63.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        validatorDistributionInfo(request: _84.QueryValidatorDistributionInfoRequest): Promise<_84.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _84.QueryValidatorOutstandingRewardsRequest): Promise<_84.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _84.QueryValidatorCommissionRequest): Promise<_84.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _84.QueryValidatorSlashesRequest): Promise<_84.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _84.QueryDelegationRewardsRequest): Promise<_84.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _84.QueryDelegationTotalRewardsRequest): Promise<_84.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _84.QueryDelegatorWithdrawAddressRequest): Promise<_84.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _84.QueryCommunityPoolRequest): Promise<_84.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _89.QueryEvidenceRequest): Promise<_89.QueryEvidenceResponse>;
                        allEvidence(request?: _89.QueryAllEvidenceRequest): Promise<_89.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _94.QueryAllowanceRequest): Promise<_94.QueryAllowanceResponse>;
                        allowances(request: _94.QueryAllowancesRequest): Promise<_94.QueryAllowancesResponse>;
                        allowancesByGranter(request: _94.QueryAllowancesByGranterRequest): Promise<_94.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _101.QueryProposalRequest): Promise<_101.QueryProposalResponse>;
                        proposals(request: _101.QueryProposalsRequest): Promise<_101.QueryProposalsResponse>;
                        vote(request: _101.QueryVoteRequest): Promise<_101.QueryVoteResponse>;
                        votes(request: _101.QueryVotesRequest): Promise<_101.QueryVotesResponse>;
                        params(request: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                        deposit(request: _101.QueryDepositRequest): Promise<_101.QueryDepositResponse>;
                        deposits(request: _101.QueryDepositsRequest): Promise<_101.QueryDepositsResponse>;
                        tallyResult(request: _101.QueryTallyResultRequest): Promise<_101.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _105.QueryProposalRequest): Promise<_105.QueryProposalResponse>;
                        proposals(request: _105.QueryProposalsRequest): Promise<_105.QueryProposalsResponse>;
                        vote(request: _105.QueryVoteRequest): Promise<_105.QueryVoteResponse>;
                        votes(request: _105.QueryVotesRequest): Promise<_105.QueryVotesResponse>;
                        params(request: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        deposit(request: _105.QueryDepositRequest): Promise<_105.QueryDepositResponse>;
                        deposits(request: _105.QueryDepositsRequest): Promise<_105.QueryDepositsResponse>;
                        tallyResult(request: _105.QueryTallyResultRequest): Promise<_105.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _110.QueryGroupInfoRequest): Promise<_110.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _110.QueryGroupPolicyInfoRequest): Promise<_110.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _110.QueryGroupMembersRequest): Promise<_110.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _110.QueryGroupsByAdminRequest): Promise<_110.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _110.QueryGroupPoliciesByGroupRequest): Promise<_110.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _110.QueryGroupPoliciesByAdminRequest): Promise<_110.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _110.QueryProposalRequest): Promise<_110.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _110.QueryProposalsByGroupPolicyRequest): Promise<_110.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _110.QueryVoteByProposalVoterRequest): Promise<_110.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _110.QueryVotesByProposalRequest): Promise<_110.QueryVotesByProposalResponse>;
                        votesByVoter(request: _110.QueryVotesByVoterRequest): Promise<_110.QueryVotesByVoterResponse>;
                        groupsByMember(request: _110.QueryGroupsByMemberRequest): Promise<_110.QueryGroupsByMemberResponse>;
                        tallyResult(request: _110.QueryTallyResultRequest): Promise<_110.QueryTallyResultResponse>;
                        groups(request?: _110.QueryGroupsRequest): Promise<_110.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                        inflation(request?: _116.QueryInflationRequest): Promise<_116.QueryInflationResponse>;
                        annualProvisions(request?: _116.QueryAnnualProvisionsRequest): Promise<_116.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _123.QueryBalanceRequest): Promise<_123.QueryBalanceResponse>;
                        owner(request: _123.QueryOwnerRequest): Promise<_123.QueryOwnerResponse>;
                        supply(request: _123.QuerySupplyRequest): Promise<_123.QuerySupplyResponse>;
                        nFTs(request: _123.QueryNFTsRequest): Promise<_123.QueryNFTsResponse>;
                        nFT(request: _123.QueryNFTRequest): Promise<_123.QueryNFTResponse>;
                        class(request: _123.QueryClassRequest): Promise<_123.QueryClassResponse>;
                        classes(request?: _123.QueryClassesRequest): Promise<_123.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _126.GetRequest): Promise<_126.GetResponse>;
                            list(request: _126.ListRequest): Promise<_126.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                        subspaces(request?: _131.QuerySubspacesRequest): Promise<_131.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _136.QueryParamsRequest): Promise<_136.QueryParamsResponse>;
                        signingInfo(request: _136.QuerySigningInfoRequest): Promise<_136.QuerySigningInfoResponse>;
                        signingInfos(request?: _136.QuerySigningInfosRequest): Promise<_136.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _142.QueryValidatorsRequest): Promise<_142.QueryValidatorsResponse>;
                        validator(request: _142.QueryValidatorRequest): Promise<_142.QueryValidatorResponse>;
                        validatorDelegations(request: _142.QueryValidatorDelegationsRequest): Promise<_142.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _142.QueryValidatorUnbondingDelegationsRequest): Promise<_142.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _142.QueryDelegationRequest): Promise<_142.QueryDelegationResponse>;
                        unbondingDelegation(request: _142.QueryUnbondingDelegationRequest): Promise<_142.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _142.QueryDelegatorDelegationsRequest): Promise<_142.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _142.QueryDelegatorUnbondingDelegationsRequest): Promise<_142.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _142.QueryRedelegationsRequest): Promise<_142.QueryRedelegationsResponse>;
                        delegatorValidators(request: _142.QueryDelegatorValidatorsRequest): Promise<_142.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _142.QueryDelegatorValidatorRequest): Promise<_142.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _142.QueryHistoricalInfoRequest): Promise<_142.QueryHistoricalInfoResponse>;
                        pool(request?: _142.QueryPoolRequest): Promise<_142.QueryPoolResponse>;
                        params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _147.SimulateRequest): Promise<_147.SimulateResponse>;
                        getTx(request: _147.GetTxRequest): Promise<_147.GetTxResponse>;
                        broadcastTx(request: _147.BroadcastTxRequest): Promise<_147.BroadcastTxResponse>;
                        getTxsEvent(request: _147.GetTxsEventRequest): Promise<_147.GetTxsEventResponse>;
                        getBlockWithTxs(request: _147.GetBlockWithTxsRequest): Promise<_147.GetBlockWithTxsResponse>;
                        txDecode(request: _147.TxDecodeRequest): Promise<_147.TxDecodeResponse>;
                        txEncode(request: _147.TxEncodeRequest): Promise<_147.TxEncodeResponse>;
                        txEncodeAmino(request: _147.TxEncodeAminoRequest): Promise<_147.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _147.TxDecodeAminoRequest): Promise<_147.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _150.QueryCurrentPlanRequest): Promise<_150.QueryCurrentPlanResponse>;
                        appliedPlan(request: _150.QueryAppliedPlanRequest): Promise<_150.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _150.QueryUpgradedConsensusStateRequest): Promise<_150.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _150.QueryModuleVersionsRequest): Promise<_150.QueryModuleVersionsResponse>;
                        authority(request?: _150.QueryAuthorityRequest): Promise<_150.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _256.LCDQueryClient;
                };
                authz: {
                    v1beta1: _257.LCDQueryClient;
                };
                bank: {
                    v1beta1: _258.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _259.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _260.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _261.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _262.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _263.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _264.LCDQueryClient;
                };
                gov: {
                    v1: _265.LCDQueryClient;
                    v1beta1: _266.LCDQueryClient;
                };
                group: {
                    v1: _267.LCDQueryClient;
                };
                mint: {
                    v1beta1: _268.LCDQueryClient;
                };
                nft: {
                    v1beta1: _269.LCDQueryClient;
                };
                params: {
                    v1beta1: _270.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _271.LCDQueryClient;
                };
                staking: {
                    v1beta1: _272.LCDQueryClient;
                };
                tx: {
                    v1beta1: _273.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _274.LCDQueryClient;
                };
            };
        }>;
    };
}
